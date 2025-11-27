const BrowserWorker = function () {
    this.callback = new Object();
};
BrowserWorker.prototype.setCallback = function (callback) {
    if (callback && callback instanceof Object) {
        this.callback = callback;
        return;
    }
    this.callback = new Object();
};
BrowserWorker.prototype.getCount = function () {
    return BrowserWorker.getCount(this.callback);
};
BrowserWorker.prototype.getVersion = function (id) {
    if (id == undefined || id == null) {
        return null;
    }
    let query = new ModBrowser.Query.Version();
    query.setCallback(this.callback);
    query.setIsHorizon(isHorizon);
    query.setId(id);
    return query.read();
};
BrowserWorker.prototype.fetchList = function (limit, force) {
    if (!force && this.mods) {
        return this.mods;
    }
    let query = new ModBrowser.Query.List();
    query.setIsHorizon(isHorizon);
    query.setLanguage(Translation.getLanguage());
    let callback = this.callback;
    query.setCallback(callback);
    let mods = this.mods = new Array();
    if (limit != undefined) {
        query.setLimit(limit);
    }
    let count = 0;
    do {
        query.read();
        let json = query.getJSON();
        for (let i = 0; i < json.length; i++) {
            if (callback.hasOwnProperty("onFetchMod")) {
                callback.onFetchMod(mods, json[i]);
            }
            mods.push(json[i]);
        }
        count += json.length;
        query.setOffset(count);
    } while (count % (isHorizon ? query.getLimit() : query.getLimit() + 1) == 0);
    return mods;
};
BrowserWorker.prototype.getDescription = function (id) {
    if (id == undefined || id == null) {
        return null;
    }
    let query = new ModBrowser.Query.Description();
    query.setLanguage(Translation.getLanguage());
    query.setCommentLimit(Number.MAX_VALUE);
    query.setIsHorizon(isHorizon);
    query.setId(id);
    return query.getJSON();
};
BrowserWorker.prototype.download = function (id, file) {
    if (id == undefined || id == null) {
        return null;
    }
    if (!(file instanceof String)) {
        file = file.getPath();
    }
    let downloader = ModBrowser.getDownloader(id, isHorizon);
    downloader.setCallback(this.callback);
    downloader.setPath(file + "/archive.icmod");
    downloader.download();
};
BrowserWorker.prototype.getList = function () {
    if (!this.mods) {
        return this.fetchList();
    }
    return this.mods;
};
BrowserWorker.fetchList = function (callback) {
    let worker = new BrowserWorker();
    if (callback != undefined) {
        worker.setCallback(callback);
    }
    let list = worker.getList();
    return RemoteMod.fetchList(list);
};
BrowserWorker.getCount = function (callback) {
    let query = new ModBrowser.Query.Count();
    if (callback != undefined) {
        query.setCallback(callback);
    }
    query.setIsHorizon(isHorizon);
    return parseInt(query.read());
};

