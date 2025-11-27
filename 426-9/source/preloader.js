/*
 * ResourceManager.js + ScriptingManager.js
 * By ToxesFoxes & TooManyMods
 *
 * Description:
 * Used for changing reading assets
*/
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.preloaderModule = false;
    }
    Object.defineProperty(ResourceManager.prototype, "isPreloader", {
        /**
         * Returns is preloader mode
         */
        get: function () {
            return this.preloaderModule;
        },
        /**
         * Set is preloader mode
         */
        set: function (value) {
            this.preloaderModule = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResourceManager.prototype, "resources", {
        /**
         * Returns resources path
         */
        get: function () {
            return this.res;
        },
        /**
         * Set resource for work
         */
        set: function (value) {
            this.res = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param dir full path with / at the end
     * @param name file name with extension
     * @returns File of dir+name
     */
    ResourceManager.prototype.Select = function (dir, name) {
        var file = name ? new java.io.File(dir, name) : new java.io.File(dir);
        // if (!file.exists())
        // log(`This file is not exisits at ${dir}${(name || "")}`)
        return file;
    };
    /**
     * Read text from file
     * @param _File java.io.File
     * @returns string of readed file
     */
    ResourceManager.prototype.ReadFrom = function (_File) {
        var readed = (new java.io.BufferedReader(new java.io.FileReader(_File)));
        var data = new java.lang.StringBuilder();
        var string;
        while ((string = readed.readLine()) != null) {
            data.append(string);
            data.append('\n');
        }
        return data.toString();
    };
    /**
     * Full file rewrite
     * @param _File java.io.File
     * @param text string to write into file
     */
    ResourceManager.prototype.Rewrite = function (_File, text) {
        var fos = new java.io.FileOutputStream(_File);
        fos.write(new java.lang.String(text).getBytes());
    };
    /**
     * Copy file from source to dest
     * @param src source path to file
     * @param dst destination path for file
     */
    ResourceManager.prototype.CopyToDest = function (src, dst) {
        if (new java.io.File(src).exists()) {
            try {
                var srcChannel = new java.io.FileInputStream(src).getChannel();
                var dstChannel = new java.io.FileOutputStream(dst).getChannel();
                dstChannel.transferFrom(srcChannel, 0, srcChannel.size());
                return true;
            }
            catch (e) {
                throw e;
            }
        }
    };
    /**
     * Read image file to android Bitmap
     * @param path full path to file
     * @param filename file name with extension
     */
    ResourceManager.prototype.ReadBitmap = function (path, filename) {
        var FIS, BMPF, BMP;
        // if (typeof path != 'string')
        // log('Cannot read bitmap from path = ' + path + ' has invalid type ' + typeof path) // 'RM-ReadBitmap'
        // if (typeof filename != 'string')
        // log('Cannot read bitmap, filename = ' + filename + ' has invalid type ' + typeof filename) // 'RM-ReadBitmap'
        try {
            FIS = new java.io.FileInputStream(this.Select(path, filename));
            BMPF = android.graphics.BitmapFactory.decodeStream(FIS);
            BMP = android.graphics.Bitmap.createBitmap(BMPF);
            return BMP;
        }
        catch (e) {
            // log(e)
        }
    };
    /**
     * Crops bitmap to specified square
     * @param source any android Bitmap
     * @param x position from start position on x axis
     * @param y position from start position on y axis
     * @param width position to end of Bitmap
     * @param height position to end of Bitmap
     */
    ResourceManager.prototype.CropBitmap = function (source, x, y, width, height) {
        return android.graphics.Bitmap.createBitmap(source, x, y, width, height);
    };
    /**
     *
     * @param bitmap android Bitmap
     * @param path writes bitmap to specified path
     * @param filename file name with extension
     */
    ResourceManager.prototype.WriteBitmap = function (bitmap, path, filename) {
        var dir = new java.io.File(path);
        if (!dir.exists())
            dir.mkdirs();
        try {
            var f = new java.io.File(dir, filename);
            f.createNewFile();
            var bos = new java.io.ByteArrayOutputStream();
            bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 0, bos);
            //write the bytes in file
            var fos = new java.io.FileOutputStream(f);
            fos.write(bos.toByteArray());
            fos.flush();
            fos.close();
            return true;
        }
        catch (e) {
            // log(e)
        }
    };
    /**
     * Returns all files and dirs in path
     * @param path full path
     * @returns files: string[], dirs: string[]
     */
    ResourceManager.prototype.getFilesList = function (path) {
        var c = {
            files: [],
            dirs: []
        };
        var files = this.Select(path).listFiles();
        for (var i in files) {
            var f = files[i];
            if (f.isDirectory())
                c.dirs.push(f.getName() + '');
            if (f.isFile())
                c.files.push(f.getName() + '');
        }
        return c;
    };
    /**
     * Returns recursive all file dirs in path
     * @param path full path
     * @returns files: string[]
     */
    ResourceManager.prototype.getFilesListRecursive = function (path, parentName) {
        var c = {
            files: [],
            dirs: []
        };
        // Logger.Log(`${path} : ${parentName}`,'input')
        var list = this.Select(path).listFiles();
        for (var i in list) {
            var f = list[i];
            var name = parentName + "/" + f.getName();
            if (f.isDirectory())
                c.files.push.apply(c.files, this.getFilesListRecursive(path + '/' + f.getName(), name).files);
            if (f.isFile())
                c.files.push(name);
        }
        // Logger.Log(`${JSON.stringify(c)}`,'output')
        c.files.sort();
        return c;
    };
    /**
     * Returns build.config of mod
     */
    ResourceManager.prototype.getBuildConfig = function () {
        var file = this.Select(__dir__ + "build.config");
        return this.ReadJSON(file);
    };
    /**
     * Returns avascript Object if success or null if file is not JSON
     * @param _File java.io.File
     */
    ResourceManager.prototype.ReadJSON = function (_File) {
        var file = JSON.parse(this.ReadFrom(_File));
        // log(JSON.stringify(file, null, 4)) // 'Chisel build.config'
        return file;
    };
    /**
     * Writes javascript Object to file
     * @param _File java.io.File
     * @param json javascript Object
     */
    ResourceManager.prototype.WriteJSON = function (_File, json) {
        this.Rewrite(_File, JSON.stringify(json, null, 4));
    };
    return ResourceManager;
}());
var ScriptingManager = {
    namespaces: {},
    RegexList: {
        reference: new RegExp(/([A-z0-9]\S{0,})(@)([A-z0-9]\S{0,})(\.)([A-z0-9]\S{0,})/),
        variable: new RegExp(/\$([A-z0-9]\S{0,})/)
    },
    readResource: function (rm, path) {
        var readed = rm.ReadJSON(rm.Select(path));
        if (!this.namespaces[readed.namespace])
            this.namespaces[readed.namespace] = readed;
        else
            ("Namespace " + readed.namespace + " is exists", "MOD");
    },
    readAllResources: function (rm) {
        var json = rm.ReadJSON(rm.Select(rm.resources.files.contents));
        for (var i in json.files) {
            this.readResource(rm.resources.dir.assets + json.files[i]);
        }
        rm.Rewrite(rm.Select(rm.resources.files.cache), JSON.stringify(this.readPropertyRecusive(this.namespaces)));
    },
    readReference: function (str) {
        var matching = str.match(this.RegexList.reference);
        if (matching) {
            var namespace = matching[3];
            var property = matching[5];
            // Game.dialogMessage(JSON.stringify(res), "readReference")
            return this.namespaces[namespace][property];
        }
        return null;
    },
    readGlobalVariable: function (namespace, property) {
        if (property.startsWith("$")) {
            // log(JSON.stringify(this.namespaces[namespace][property]) + " : " + property) // 'readGlobalVariable'
            return this.namespaces[namespace][property];
        }
        return null;
    },
    readProperty: function (property) {
        if (property && typeof property !== 'object' && !Array.isArray(property)) {
            var matchingRef = property.match(this.RegexList.reference);
            if (property.startsWith("$")) {
                return this.readGlobalVariable("_global", property); // TODO: Fix global var reading
            }
            else if (matchingRef)
                return this.readReference(property);
        }
        else if (typeof property === 'object') {
            return this.readPropertyRecusive(property);
        }
        return property;
    },
    readPropertyRecusive: function (arr1) {
        var arr = eval(arr1);
        for (var i in arr) {
            try {
                var code = arr[i];
                if (typeof code === "object") {
                    code = this.readPropertyRecusive(code);
                }
                else if (typeof code === 'string')
                    code = this.readProperty(code);
            }
            catch (e) {
                // Logger.Log(i, "undefined")
            }
        }
        return arr;
    }
};
var ModResources = /** @class */ (function () {
    function ModResources(rm) {
        this.rm = rm;
    }
    Object.defineProperty(ModResources.prototype, "regex_dir", {
        /*
         * Group 0.  0-82  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/mods/ModifiedRP/
         * Group 1.  0-71  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/mods/
         * Group 2.  0-66  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/
         * Group 3.  0-56  /storage/emulated/0/games/horizon/packs/Inner_Core_Test/
         * Group 4.  0-40  /storage/emulated/0/games/horizon/packs/
         * Group 4.  0-40  /storage/emulated/0/games/horizon/
         * Group 5.  0-26  /storage/emulated/0/games/
         * Group 6.  26-40 horizon/packs/
         * Group 7.  40-56 Inner_Core_Test/
         * Group 8.  56-66 innercore/
         * Group 9.  66-71 mods/
         * Group 10. 71-82 ModifiedRP/
         */
        get: function () {
            return new RegExp(/(((((.*)(horizon\/packs\/))(.*\/))(innercore\/))(.*mods\/))([A-z0-9]{0,}\/)/gm);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "dir", {
        get: function () {
            return __dir__.split(this.regex_dir);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "minecraft_packs", {
        get: function () {
            return "minecraft_packs/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "behavior_packs", {
        get: function () {
            return this.minecraft_packs + "behavior/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "resource_packs", {
        get: function () {
            return this.minecraft_packs + "resource/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "mrp_resourcepack", {
        get: function () {
            return "" + __dir__ + this.resource_packs + "ModifiedRP/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "mods", {
        get: function () {
            return "" + this.dir[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "current_pack", {
        get: function () {
            return "" + this.dir[3];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "ui", {
        get: function () {
            return this.mrp_resourcepack + "ui/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "icons", {
        get: function () {
            return this.mrp_resourcepack + "textures/ui/mod_icons/";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "manifest", {
        get: function () {
            return "" + this.current_pack;
        },
        enumerable: false,
        configurable: true
    });
    ModResources.prototype.readJson = function (path) {
        var file = this.rm.Select(path);
        return { exists: file.exists(), result: this.rm.ReadJSON(file) || {}, file: file };
    };
    ModResources.prototype.writeJson = function (file, json) {
        this.rm.WriteJSON(file, json);
    };
    Object.defineProperty(ModResources.prototype, "file_manifest", {
        get: function () {
            var data = this.readJson(this.manifest + "manifest.json");
            // log(JSON.stringify(data.result, null, 4))
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "file_modified_rp", {
        get: function () {
            var data = this.readJson(this.ui + "modified_rp.json");
            // log(JSON.stringify(data.result, null, 4))
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModResources.prototype, "file_start_screen", {
        get: function () {
            var data = this.readJson(this.ui + "start_screen.json");
            // log(JSON.stringify(data.result, null, 4))
            return data;
        },
        enumerable: false,
        configurable: true
    });
    ModResources.prototype.logAll = function () {
        var matched = __dir__.split(this.regex_dir);
        for (var i in matched) {
            log("[" + i + "]: " + matched[i]);
        }
    };
    ModResources.prototype.getMods = function (file_modified_rp) {
        var count = 0;
        var list = this.rm.getFilesList(this.mods).dirs;
        for (var i in list) {
            log(this.mods + list[i] + "/config.json");
            var selModCfg = this.readJson(this.mods + list[i] + "/config.json");
            var selModInfo = this.readJson(this.mods + list[i] + "/mod.info");
            var modStatus = "Enabled";
            if (selModCfg.exists)
                modStatus = selModCfg.result.enabled ? "Enabled" : "Disabled";
            if (selModInfo.exists) {
                var modInfo = selModInfo.result;
                var iconTexture = (modInfo.name.replace(' ', '_'));
                var copied = this.rm.CopyToDest(this.mods + list[i] + '/mod_icon.png', this.icons + iconTexture + '.png');
                if (!copied)
                    iconTexture = 'mod_no_icon';
                file_modified_rp.dlg_panel.controls.push({
                    "mod@mrp.mod_pane": {
                        "$icon_texture": "textures/ui/mod_icons/" + iconTexture,
                        "$mod_name": modInfo.name || "",
                        "$mod_author": modInfo.author || "",
                        "$mod_version": modInfo.version || "",
                        "$mod_status": modStatus || false
                    }
                });
                count++;
            }
        }
        return count;
    };
    ModResources.prototype.buildCopyright = function (packVersion, count) {
        return "IC " + packVersion + "\n" + count + " " + (count > 1 ? ' mods' : ' mod') + " loaded\nCopyright \u00A9 Mojang AB";
    };
    ModResources.prototype.buildDevVersion = function (manifest) {
        return manifest.pack + "#" + manifest.packVersionCode + " " + manifest.packVersion;
    };
    ModResources.prototype.init = function () {
        var scr = res.file_start_screen;
        var mrp = res.file_modified_rp;
        var mst = res.file_manifest;
        if (scr.exists && scr.result != {}) {
            var start_screen_data = scr.result;
            start_screen_data.main_buttons_panel["$mods_ignored"] = false;
            start_screen_data.main_buttons_panel["$quickplay_ignored"] = false;
            if (mrp.exists && mrp.result != {}) {
                mrp.result.dlg_panel.controls = [];
                if (mst.exists && mst.result != {}) {
                    var manifest = mst.result;
                    var count = this.getMods(mrp.result);
                    mrp.result.copyright.text = res.buildCopyright(manifest.packVersion, count);
                    mrp.result.dev_info.text = res.buildDevVersion(manifest);
                }
            }
            res.writeJson(scr.file, start_screen_data);
            res.writeJson(mrp.file, mrp.result);
        }
    };
    return ModResources;
}());
var modified_rp_RM = new ResourceManager();
modified_rp_RM.isPreloader = true;
var res = new ModResources(modified_rp_RM);
res.logAll();
res.init();
