var sort_types = [{"title": "popular", "url": "popular"}, {"title": "recent", "url": "new"}, {"title": "recommended", "url": "redaction"}, {"title": "updated", "url": "updated"}];
var CurrentState = {shouldSimulateBack: true, sort: 0, search: "", mod_count: 0, page_count: 0, loadedPage: -1, updateModCount: function () {
    try {
        this.mod_count = parseInt(Network.getURLContents("https://icmods.mineprogramming.org/api/count.php"));
        if (!this.mod_count) {
            this.mod_count = 0;
        }
        this.page_count = Math.max(1, Math.ceil(this.mod_count / MODS_PER_PAGE));
    }
    catch (e) {
        log("failed to get mod count: " + e);
    }
}, nextSort: function () {
    this.sort++;
    if (this.sort > sort_types.length - 1) {
        this.sort = 0;
    }
    if (this.search != "") {
        this.search = "";
        TabList.header.elements.searchText.text = locale.search;
    }
}};
CurrentState.updateModCount();
log("mod browser loaded " + CurrentState.page_count + " pages with " + CurrentState.mod_count + " mods.");
var BrowserUI = {isOpened: false, window: new UI.TabbedWindow({location: {padding: {top: 30, bottom: 30, left: 40, right: 40}}}), container: new UI.Container(), open: function (shouldNotSimulateBack) {
    CurrentState.shouldSimulateBack = !shouldNotSimulateBack;
    if (shouldNotSimulateBack) {
        this.window.setDefaultTab(7);
    }
    updateLocale();
    this.container.openAs(this.window);
}, close: function () {
    this.container.close();
}};
BrowserUI.window.setEventListener({onOpen: function () {
    refreshModList(CurrentState.loadedPage != -1 ? CurrentState.loadedPage : 0);
    refreshUpdatesList();
}, onClose: function () {
    if (CurrentState.shouldSimulateBack) {
        MCSystem.simulateBackPressed();
    }
    LoadingAnimation.stop();
    DownloadHandler.stopAll();
}});
Callback.addCallback("NativeGuiChanged", function (name) {
    if (name == "store_screen" || name == "modal_progress_screen - store_fetching_product_info") {
        if (!BrowserUI.isOpened) {
            BrowserUI.isOpened = true;
            BrowserUI.open(false);
        }
    } else {
        BrowserUI.isOpened = false;
        BrowserUI.close();
    }
});
Callback.addCallback("OnNaviBackPressed", function () {
    BrowserUI.isOpened = false;
    BrowserUI.close();
});
function getPageContents(index) {
    if (index == -1) {
        return JSON.parse(Network.getURLContents("https://icmods.mineprogramming.org/api/list.php?ids=" + updates.join()));
    }
    if (CurrentState.search != "") {
        return JSON.parse(Network.getURLContents("https://icmods.mineprogramming.org/api/search.php?q=" + encodeURIComponent(CurrentState.search) + "&limit=7&lang=" + lang));
    }
    return JSON.parse(Network.getURLContents("https://icmods.mineprogramming.org/api/list.php?count=" + MODS_PER_PAGE + "&start=" + (MODS_PER_PAGE * index) + "&sort=" + sort_types[CurrentState.sort].url + "&lang=" + lang));
}
function getModContents(id) {
    return JSON.parse(Network.getURLContents("https://icmods.mineprogramming.org/api/description.php?id=" + id + "&lang=" + lang));
}
var UpperBar = {mode: false, updateMode: false, setMode: function (mode) {
    if (this.mode == mode) {
        return;
    }
    this.mode = mode;
    if (mode) {
        TabList.header.elements.searchBtn = null;
        TabList.header.elements.sortBtn = null;
        TabList.footer.elements.goToNextBtn = null;
        TabList.footer.elements.goToNextImg = null;
        TabList.header.elements.searchText.text = "";
        TabList.header.elements.sortText.text = "";
        TabList.footer.elements.pageText.text = "";
    } else {
        TabList.header.elements.searchBtn = element.searchBtn;
        TabList.header.elements.sortBtn = element.sortBtn;
        TabList.footer.elements.goToNextBtn = element.goToNextBtn;
        TabList.footer.elements.goToNextImg = element.goToNextImg;
        TabList.header.elements.searchText.text = CurrentState.search == "" ? locale.search : CurrentState.search;
        TabList.header.elements.sortText.text = CurrentState.search != "" ? locale.search : locale[sort_types[CurrentState.sort].title];
        TabList.header.elements.modTitle.text = "";
        TabList.footer.elements.pageText.text = locale.page + ":";
    }
}, setUpdateMode: function (mode) {
    if (this.updateMode == mode) {
        return;
    }
    this.updateMode = mode;
    if (mode) {
        TabUpdate.footer.elements.installAll = null;
        TabUpdate.footer.elements.installAllText.text = "";
        TabUpdate.footer.elements.back = element.returnBtn;
        TabUpdate.footer.elements.backImg = element.returnImg;
    } else {
        TabUpdate.footer.elements.installAll = element.installAll;
        TabUpdate.footer.elements.installAllText.text = locale.update_all;
        TabUpdate.footer.elements.back = null;
        TabUpdate.footer.elements.backImg = null;
    }
}};
function linkClicker(link) {
    return {onClick: function () {
        if (!TabList.body.elements.screensSlider.visible) {
            var browserIntent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(link));
            MCSystem.getContext().startActivity(browserIntent);
        }
    }};
}
function createModTemplate(index, modId, vip, icon, title, version, pack, description, likes, list, clicker) {
    list.elements["_modBg" + index] = new FramedButton({x: 0, y: 0 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 0}, 1000, MOD_TITLE_UI_SIZE, {onClick: list == TabList.body ? function () {
        openModPage(modId);
    } : function () {
        var downloadUrl = "https://icmods.mineprogramming.org/api/download.php?id=" + modId;
        Dialog.show(locale.confirm_update + title + "?", function () {
            openModPage(modId);
            downloadAndInstall(downloadUrl, modId);
        });
    }});
    DownloadHandler.addDownload(icon, {complete: function (result) {
        list.elements["_modIcon" + index] = {type: "image", x: 20, y: 20 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, width: MOD_TITLE_UI_SIZE - 40, height: MOD_TITLE_UI_SIZE - 40, bitmap: result};
    }, fail: function (e) {
        log("Error downloading icon" + e);
    }}, true);
    var delta = 0;
    var title_font = fonts.defaultBig;
    var title_width = getTextWidth(fonts.defaultBig, title);
    if (vip) {
        list.elements["_modVip" + index] = {type: "image", x: MOD_TITLE_UI_SIZE, y: 27 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, scale: 3, bitmap: "mod_browser_icon_vip"};
        delta = 65;
        title_font = fonts.defaultBigBege;
    }
    list.elements["_modNameLabel" + index] = {type: "text", x: MOD_TITLE_UI_SIZE + delta, y: 25 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, text: title, font: title_font};
    if (pack) {
        list.elements["_modPack" + index] = {type: "image", x: MOD_TITLE_UI_SIZE + delta + title_width + 10, y: 27 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, scale: 0.5, bitmap: "mod_browser_icon_pack"};
        delta += 40;
    }
    list.elements["_modVersionLabel" + index] = {type: "text", x: MOD_TITLE_UI_SIZE + title_width + 15 + delta, y: 35 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, text: version == "" ? "" : "[" + version + "]", font: fonts.coloredOrange};
    list.elements["_modImgLikes" + index] = {type: "image", bitmap: "mod_browser_icon_like", x: MOD_TITLE_UI_SIZE + 670, y: 85 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, scale: 5};
    list.elements["_modLblLikes" + index] = {type: "text", x: MOD_TITLE_UI_SIZE + 710, y: 90 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, text: "" + likes, font: fonts.defaultDark};
    list.elements["_modDescrLabel" + index] = {type: "text", x: MOD_TITLE_UI_SIZE, y: 75 + index * MOD_TITLE_UI_SIZE + MOD_PAGE_UI_OFFSET_TOP, z: 1, text: TextParser.limitLength(description, 30), font: fonts.defaultDark, multiline: true};
}
function downloadAndInstall(url, id) {
    TabList.body.elements.modDownloadLabel = {type: "text", x: 300, y: 190, z: 1, font: fonts.coloredWhite, text: ""};
    TabList.body.elements.modDownload = {type: "scale", x: 300, y: 225, z: 1, scale: 650 / 80, bitmap: "mod_download_scale_fg", background: "mod_download_scale_bg", progress: 0, invert: true};
    var uiMessage = function () {
    };
    var uiProgress = function (progress) {
        BrowserUI.container.setScale("modDownload", progress);
        BrowserUI.container.setText("modDownloadLabel", locale.installing + " - " + Math.round(progress * 100) + "%...");
    };
    var uiProgressFail = function () {
        log("failed to install");
        TabList.body.elements.modDownloadLabel.font = fonts.coloredRed;
        TabList.body.elements.modDownloadLabel.text = locale.install_fail;
        TabList.body.elements.modDownload.bitmap = "mod_download_scale_fg_fail";
    };
    var uiProgressSuccess = function () {
        log("mod installed!");
        TabList.body.elements.modDownloadLabel.font = fonts.coloredGreen;
        TabList.body.elements.modDownloadLabel.text = locale.install_success;
        var versions = getAllVersions();
        versions["" + id] = getCurrentVersion(id);
        writeVersions(versions);
        var i = updates.indexOf("" + id);
        if (i != -1) {
            updates = removeFromArray(updates, "" + id);
            refreshUpdatesList();
        }
    };
    DownloadHandler.stopAll();
    DownloadHandler.addDownload(url, {message: function (msg) {
        uiMessage(msg);
    }, progress: function (progress) {
        uiProgress(progress * 0.75);
    }, complete: function (result) {
        try {
            var success = Prefs.installModFile(result, {message: function () {
            }}, {run: function () {
                uiProgress(0.87);
            }});
            uiProgress(1);
            if (success) {
                uiProgressSuccess();
            } else {
                uiProgressFail(e);
            }
        }
        catch (e) {
            uiProgressFail(e);
        }
    }, fail: function () {
        uiProgressFail();
    }, cancel: function () {
        log("installation canceled!");
    }});
}
function downloadAndInstallUpdates() {
    TabUpdate.body.elements.modDownloadLabel = {type: "text", x: 320, y: 175, z: 1, font: fonts.coloredWhite, text: ""};
    TabUpdate.body.elements.modDownload = {type: "scale", x: 320, y: 225, z: 1, scale: 650 / 80, bitmap: "mod_download_scale_fg", background: "mod_download_scale_bg", progress: 0, invert: true};
    var uiMessage = function () {
    };
    var uiProgress = function (progress) {
        BrowserUI.container.setScale("modDownload", progress);
        BrowserUI.container.setText("modDownloadLabel", locale.installing + " - " + Math.round(progress * 100) + "%...");
    };
    var uiProgressFail = function () {
        log("failed to install");
        TabUpdate.body.elements.modDownloadLabel.font = fonts.coloredRed;
        TabUpdate.body.elements.modDownloadLabel.text = locale.install_fail;
        TabUpdate.body.elements.modDownload.bitmap = "mod_download_scale_fg_fail";
    };
    var uiProgressSuccess = function () {
        log("mods installed!");
        TabUpdate.body.elements.modDownloadLabel.font = fonts.coloredGreen;
        TabUpdate.body.elements.modDownloadLabel.text = locale.install_success;
        var versions = getAllVersions();
        for (var i = 0; i < updates.length; i++) {
            versions["" + updates[i]] = getCurrentVersion(updates[i]);
        }
        writeVersions(versions);
        updates = [];
    };
    DownloadHandler.stopAll();
    var progr = 0;
    var incr = 1 / updates.length;
    for (var i = 0; i < updates.length; i++) {
        var id = updates[i];
        var downloadUrl = "https://icmods.mineprogramming.org/api/download.php?id=" + id;
        DownloadHandler.addDownload(downloadUrl, {message: function (msg) {
            uiMessage(msg);
        }, progress: function (progress) {
        }, complete: function (result) {
            try {
                var success = Prefs.installModFile(result, {message: function () {
                }}, {run: function () {
                }});
                uiProgress(1);
                if (success) {
                    progr += incr;
                    uiProgress(progr);
                    if (progr == 1) {
                        uiProgressSuccess();
                    }
                } else {
                    uiProgressFail(e);
                }
            }
            catch (e) {
                uiProgressFail(e);
            }
        }, fail: function () {
            uiProgressFail();
        }, cancel: function () {
            log("installation canceled!");
        }});
    }
}
function openUpdatePage() {
    if (updates.length == 0) {
        return;
    }
    var abort = function (error) {
        CurrentState.loadedPage = -1;
        LoadingAnimation.showFailed();
        if (error) {
            log("failed to open mod page id=" + id + ": " + error);
        }
    };
    DownloadHandler.stopAll();
    LoadingAnimation.clearUpdateUi();
    UpperBar.setUpdateMode(true);
    inThread(function () {
        var iconsCount = Math.min(3, updates.length);
        for (var i = 0; i < iconsCount; i++) {
            var page;
            try {
                page = getModContents(updates[i]);
                if (!page) {
                    abort();
                }
            }
            catch (e) {
                abort(e);
            }
            DownloadHandler.addDownload("https://icmods.mineprogramming.org/api/img/" + page.icon_full, {complete: function (result) {
                TabUpdate.body.elements["modIcon" + i] = {type: "image", x: 20 + i * 35, y: 20 + i * 35, z: i + 10, width: 200, height: 200, bitmap: result};
            }, fail: function (e) {
                log("Error downloading icon" + e);
            }}, true);
        }
        TabUpdate.body.elements.updatesCount = {type: "text", x: 320, y: 35, text: locale.updates_count + ":    " + updates.length, font: fonts.defaultDescription};
        TabUpdate.body.elements.downloadLink = {type: "text", x: 400, y: 120, text: locale.install_all, font: fonts.defaultBigLink, clicker: {onClick: function () {
            if (updates.length == 0) {
                return;
            }
            Dialog.show(locale.confirm_update_all, function () {
                downloadAndInstallUpdates();
            });
        }}};
    });
}
function openModPage(id) {
    var abort = function (error) {
        CurrentState.loadedPage = -1;
        LoadingAnimation.showFailed();
        if (error) {
            log("failed to open mod page id=" + id + ": " + error);
        }
    };
    DownloadHandler.stopAll();
    UpperBar.setMode(true);
    LoadingAnimation.clearUi();
    LoadingAnimation.start();
    inThread(function () {
        var page;
        try {
            page = getModContents(id);
            if (!page) {
                abort();
            }
        }
        catch (e) {
            abort(e);
        }
        var title = page.title;
        var descr = TextParser.limitLength(page.description_full, 55);
        var comments = page.comments;
        var screens = Object.keys(page.screenshots).map(function (e) {
            return page.screenshots[e];
        });
        var author = page.author_name;
        var version = page.version_name;
        var likes = page.likes;
        var downloads = page.downloads;
        var last_update = page.last_update == null ? locale["long_ago"] : ("" + page.last_update).substring(0, 10);
        var vip = page.vip == 1;
        var icon = "https://icmods.mineprogramming.org/api/img/" + page.icon_full;
        var downloadUrl = "https://icmods.mineprogramming.org/api/download.php?id=" + id;
        var websiteUrl = "https://icmods.mineprogramming.org/mod.php?id=" + id;
        DownloadHandler.addDownload(icon, {complete: function (result) {
            TabList.body.elements.modIcon = {type: "image", x: 20, y: 20, width: 260, height: 260, bitmap: result};
        }, fail: function (e) {
            log("Error downloading icon" + e);
        }}, true);
        TabList.header.elements.modTitle.text = title;
        TabList.body.elements.modAuthor = {type: "text", x: 300, y: 28, text: locale["author"] + ":    " + author, font: fonts.defaultDescription};
        TabList.body.elements.screensIcon = {type: "custom", x: 305, y: MOD_PAGE_UI_LIKES_Y, z: 2, scale: 1.09375, bitmap: UI.TextureSource.get("mod_browser_icon_screenshot"), paint: new android.graphics.Paint(), custom: {}, onSetup: function (element) {
            element.setSize(100, 40);
        }, onDraw: function (element, canvas, scale) {
            if (TabList.body.elements.screensSlider.visible) {
                return;
            }
            let mult = Math.abs(0.3 * Math.sin((System.currentTimeMillis() % 1000) / 1000)) / 2;
            let self = element.getScope();
            let rect = new android.graphics.Rect(this.x * scale - 35 * mult, this.y * scale - 35 * mult, (35 * (mult + 1) + this.x) * scale, (35 * (mult + 1) + this.y) * scale);
            canvas.drawBitmap(this.bitmap, null, rect, this.paint);
        }, onTouchReleased: function () {
            TabList.body.elements.screensSlider.visible = true;
        }};
        TabList.body.elements.screensCounter = {type: "text", x: 350, y: MOD_PAGE_UI_LIKES_Y + 3, text: "" + screens.length, font: fonts.defaultDescription};
        TabList.body.elements.likesIcon = {type: "image", x: 395, y: MOD_PAGE_UI_LIKES_Y, scale: 5, bitmap: "mod_browser_icon_like"};
        TabList.body.elements.likesCounter = {type: "text", x: 440, y: MOD_PAGE_UI_LIKES_Y + 3, text: "" + likes, font: fonts.defaultDescription};
        TabList.body.elements.downloadsIcon = {type: "image", x: 500, y: MOD_PAGE_UI_LIKES_Y, scale: 3.182, bitmap: "mod_browser_icon_download"};
        TabList.body.elements.downloadsCounter = {type: "text", x: 540, y: MOD_PAGE_UI_LIKES_Y + 3, text: "" + downloads, font: fonts.defaultDescription};
        TabList.body.elements.updatedIcon = {type: "image", x: 685, y: MOD_PAGE_UI_LIKES_Y, scale: 3.182, bitmap: UI.TextureSource.get("mod_browser_icon_update")};
        TabList.body.elements.updatedCounter = {type: "text", x: 730, y: MOD_PAGE_UI_LIKES_Y + 3, text: "" + last_update, font: fonts.defaultDescription};
        TabList.body.elements.downloadLink = {type: "text", x: 300, y: 160, text: locale.install, font: fonts.defaultBigLink, clicker: {onClick: function () {
            if (!TabList.body.elements.screensSlider.visible) {
                Dialog.show(locale.confirm_install + title + "?", function () {
                    downloadAndInstall(downloadUrl, id);
                });
            }
        }}};
        TabList.body.elements.websiteLink = {type: "text", x: 630, y: 160, text: locale["details"], font: fonts.defaultBigLink, clicker: linkClicker(websiteUrl)};
        TabList.body.elements.modDescription = {type: "text", x: 25, y: 305, text: descr, font: fonts.defaultDescription, multiline: true};
        TabList.body.elements.screensSlider = {type: "custom", z: 5, visible: false, screenshots: [], position: 10, time: System.currentTimeMillis(), moving: false, custom: {}, onSetup: function (element) {
            element.setSize(1000, 280);
            var self = element.getScope();
            this.paint = new android.graphics.Paint();
            this.bgPaint = new android.graphics.Paint();
            this.bgPaint.setColor(Color.argb(200, 120, 120, 120));
            this.count = screens.length;
            for (var i = 0; i < this.count; i++) {
                var screenshot = "https://icmods.mineprogramming.org/api/img/" + screens.pop();
                DownloadHandler.addDownload(screenshot, {complete: function (result) {
                    let bmp = UI.TextureSource.get(result);
                    let ratio = bmp.getWidth() / bmp.getHeight();
                    TabList.body.elements.screensSlider.screenshots.push({bitmap: bmp, source: result, height: 260, width: 260 * ratio});
                }, fail: function (e) {
                    log("Error downloading icon" + e);
                }}, true);
            }
            if (this.count == 1) {
                TabList.body.elements.screensSlider.position = 250;
            }
        }, onDraw: function (element, canvas, scale) {
            if (!this.visible) {
                return;
            }
            var width = canvas.getWidth();
            var height = canvas.getHeight();
            let currentTime = System.currentTimeMillis();
            let delta = currentTime - this.time;
            if (this.moving) {
                this.position -= delta / 10;
            }
            let position = this.position;
            canvas.drawRect(new android.graphics.Rect(0, 0, width, 280 * scale), this.bgPaint);
            for (var i = 0; i < this.screenshots.length; i++) {
                let screenshot = this.screenshots[i];
                canvas.drawBitmap(screenshot.bitmap, null, new android.graphics.Rect(position * scale, 10 * scale, (screenshot.width + position) * scale, (screenshot.height + 10) * scale), this.paint);
                position += screenshot.width + 10;
            }
            if (position < 950) {
                this.position = 10;
                this.moving = false;
            }
            this.time = currentTime;
        }, onTouchReleased: function () {
            if (!TabList.body.elements.screensSlider.visible) {
                return;
            }
            if (this.screenshots.length > 2) {
                this.moving = !this.moving;
            }
        }};
        TabList.body.elements.commentsTitle = {type: "text", x: 25, y: 350 + 28 * TextParser.lastLinesCount, text: locale["comments"], font: fonts.defaultBig};
        let position = 410 + 28 * TextParser.lastLinesCount;
        for (var i in comments) {
            var comment = comments[i];
            TabList.body.elements["commentAuthor_" + i] = {type: "text", x: 25, y: position, text: comment.user, font: fonts.coloredOrange};
            TabList.body.elements["commentText_" + i] = {type: "text", x: 25, y: position + 32, text: TextParser.limitLength(comment.comment, 55), font: fonts.defaultDescription, multiline: true};
            position += 50 + 28 * TextParser.lastLinesCount;
        }
        if (comments.length < 1) {
            TabList.body.elements["commentText_" + i] = {type: "text", x: 25, y: position, text: locale["no_comments"], font: fonts.defaultDescription};
            position += 50;
        }
        TabList.body.elements.commentLink = {type: "text", x: 25, y: position + 15, text: locale["leave_comment"], font: fonts.defaultBigLink, clicker: linkClicker(websiteUrl + "#comment")};
        LoadingAnimation.stop();
    });
}
function refreshModList(pageId) {
    CurrentState.loadedPage = pageId;
    var abort = function (error) {
        CurrentState.loadedPage = -1;
        LoadingAnimation.showFailed();
        if (error) {
            log("failed to load page " + pageId + ": " + error);
        }
    };
    DownloadHandler.stopAll();
    UpperBar.setMode(false);
    if (!LoadingAnimation.running) {
        LoadingAnimation.clearUi();
        LoadingAnimation.start();
    }
    TabList.footer.elements.pageText.text = locale.page + ":    " + (pageId + 1) + "/" + (CurrentState.search != "" ? 1 : CurrentState.page_count);
    TabList.header.elements.sortText.text = CurrentState.search != "" ? locale.search : locale[sort_types[CurrentState.sort].title];
    TabList.header.elements.sortText.y = SORT_TEXT_Y + locale.deltas[sort_types[CurrentState.sort].title];
    inThread(function () {
        var page;
        try {
            page = getPageContents(pageId);
            if (!page) {
                abort();
            }
        }
        catch (e) {
            abort(e);
        }
        var mods = [];
        var ind = 0;
        for (var i in page) {
            var mod = page[i];
            if (mod) {
                var id = parseInt(mod.id) || 0;
                var icon = "https://icmods.mineprogramming.org/api/img/" + mod.icon;
                var title = mod.title;
                var description = mod.description;
                mods.push({index: ind++, id: id, vip: mod.vip == 1, icon: icon, title: title, version: mod.version_name, likes: mod.likes, description: description, pack: mod.pack == 1});
            }
        }
        if (pageId == CurrentState.loadedPage) {
            LoadingAnimation.clearUi();
            for (var i in mods) {
                var mod = mods[i];
                if (mod && pageId == CurrentState.loadedPage) {
                    createModTemplate(mod.index, mod.id, mod.vip, mod.icon, mod.title, mod.version, mod.pack, mod.description, mod.likes, TabList.body);
                }
            }
        }
        LoadingAnimation.stop();
    });
}
function refreshUpdatesList() {
    var abort = function (error) {
        LoadingAnimation.showFailed();
        if (error) {
            log("failed to load updates list: " + error);
        }
    };
    DownloadHandler.stopAll();
    UpperBar.setUpdateMode(false);
    inThread(function () {
        var page;
        try {
            page = getPageContents(-1);
            if (!page) {
                abort();
            }
        }
        catch (e) {
            abort(e);
        }
        var mods = [];
        var ind = 0;
        for (var i in page) {
            var mod = page[i];
            if (mod) {
                var id = parseInt(mod.id) || 0;
                var icon = "https://icmods.mineprogramming.org/api/img/" + mod.icon;
                var title = mod.title;
                var description = mod.description;
                mods.push({index: ind++, id: id, vip: mod.vip == 1, icon: icon, title: title, likes: mod.likes, version: mod.version_name, description: description, pack: mod.pack == 1});
            }
        }
        LoadingAnimation.clearUpdateUi();
        for (var i in mods) {
            var mod = mods[i];
            if (mod) {
                createModTemplate(mod.index, mod.id, mod.vip, mod.icon, mod.title, mod.version, mod.pack, mod.description, mod.likes, TabUpdate.body);
            }
        }
        LoadingAnimation.stop();
    });
}
function nextPage() {
    var page = CurrentState.loadedPage;
    if (page == -1) {
        page = 0;
    } else {
        page++;
    }
    if (page >= CurrentState.page_count || CurrentState.search != "") {
        return;
    }
    refreshModList(page);
}
function prevPage() {
    var page = CurrentState.loadedPage;
    if (page == -1) {
        page = 0;
    } else {
        page--;
    }
    if (page < 0) {
        return;
    }
    refreshModList(page);
}
function currPage() {
    var page = CurrentState.loadedPage;
    if (page == -1) {
        page = 0;
    }
    refreshModList(page);
}
BrowserUI.window.setTab(6, {icon: {type: "image", x: -30, y: -30, width: 60, height: 60, bitmap: "mod_browser_list_icon"}}, TabList.body);
BrowserUI.window.setTab(7, {icon: {type: "image", x: -30, y: -30, width: 60, height: 60, bitmap: "mod_browser_update_icon"}}, TabUpdate.body);
(function () {
    var mod_list = BrowserUI.window.getWindowForTab(6);
    var mod_list_location = mod_list.getLocation();
    var upper_bar = new UI.Window(TabList.header);
    var upper_bar_location = upper_bar.getLocation();
    upper_bar_location.set(mod_list_location);
    upper_bar_location.setSize(upper_bar_location.width, UPPER_BAR_HEIGHT);
    upper_bar_location.setScroll(0, 0);
    upper_bar_location.y -= UPPER_BAR_PADDING_TOP + 5;
    mod_list_location.y += UPPER_BAR_HEIGHT + UPPER_BAR_PADDING_BOTTOM - 5;
    mod_list_location.setSize(mod_list_location.width, mod_list_location.height - UPPER_BAR_HEIGHT - UPPER_BAR_PADDING_BOTTOM - NAV_BAR_HEIGHT);
    mod_list_location.setScroll(0, (MOD_PAGE_UI_OFFSET_TOP + MOD_PAGE_UI_OFFSET_BOTTOM + MODS_PER_PAGE * 130));
    var nav_bar = new UI.Window(TabList.footer);
    var nav_bar_location = nav_bar.getLocation();
    nav_bar_location.set(mod_list_location);
    nav_bar_location.setSize(nav_bar_location.width, NAV_BAR_HEIGHT);
    nav_bar_location.setScroll(0, 0);
    nav_bar_location.y += mod_list_location.height + UPPER_BAR_PADDING_TOP;
    mod_list.addAdjacentWindow(upper_bar);
    mod_list.addAdjacentWindow(nav_bar);
    mod_list.setDynamic(true);
    upper_bar.setDynamic(true);
    nav_bar.setDynamic(true);
})();
(function () {
    var mod_list = BrowserUI.window.getWindowForTab(7);
    var mod_list_location = mod_list.getLocation();
    var upper_bar = new UI.Window(TabUpdate.header);
    var upper_bar_location = upper_bar.getLocation();
    upper_bar_location.set(mod_list_location);
    upper_bar_location.setSize(upper_bar_location.width, UPPER_BAR_HEIGHT);
    upper_bar_location.setScroll(0, 0);
    upper_bar_location.y -= UPPER_BAR_PADDING_TOP + 5;
    mod_list_location.y += UPPER_BAR_HEIGHT + UPPER_BAR_PADDING_BOTTOM - 5;
    mod_list_location.setSize(mod_list_location.width, mod_list_location.height - UPPER_BAR_HEIGHT - UPPER_BAR_PADDING_BOTTOM - NAV_BAR_HEIGHT);
    mod_list_location.setScroll(0, (MOD_PAGE_UI_OFFSET_TOP + MOD_PAGE_UI_OFFSET_BOTTOM + MODS_PER_PAGE * 130));
    var nav_bar = new UI.Window(TabUpdate.footer);
    var nav_bar_location = nav_bar.getLocation();
    nav_bar_location.set(mod_list_location);
    nav_bar_location.setSize(nav_bar_location.width, NAV_BAR_HEIGHT);
    nav_bar_location.setScroll(0, 0);
    nav_bar_location.y += mod_list_location.height + UPPER_BAR_PADDING_TOP;
    mod_list.addAdjacentWindow(upper_bar);
    mod_list.addAdjacentWindow(nav_bar);
    mod_list.setDynamic(true);
    upper_bar.setDynamic(true);
    nav_bar.setDynamic(true);
})();

