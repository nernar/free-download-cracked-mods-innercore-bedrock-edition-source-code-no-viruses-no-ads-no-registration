LIBRARY({name: "ConfigSpec", version: 1, api: "CoreEngine"});
let ConfigSpec = (function () {
    let lastIndex = 0;
    let language = Translation.getLanguage();
    function ConfigSpec() {
        return this;
    }
    let Storage = (function () {
        function Storage() {
            return this;
        }
        Storage.prototype.set = function (path, value) {
            let obj = this;
            for (let i = 0; i < path.length - 1; i++) {
                if (!obj[path[i]]) {
                    obj[path[i]] = {};
                }
                obj = obj[path[i]];
            }
            obj[path[path.length - 1]] = value;
        };
        return Storage;
    }());
    ConfigSpec.Storage = Storage;
    let ConfigValue = (function () {
        function ConfigValue(supplier, context) {
            this.comment = context.hasComment() ? context.buildComment() : null;
            this.langKey = context.getTranslationKey();
            this.range = context.getRange();
            this.supplier = supplier;
            this.index = ++lastIndex;
            return this;
        }
        ConfigValue.prototype.getComment = function () {
            return this.comment;
        };
        ConfigValue.prototype.getIndex = function () {
            return this.index;
        };
        ConfigValue.prototype.getTranslationKey = function () {
            return this.langKey;
        };
        ConfigValue.prototype.getRange = function () {
            return this.range;
        };
        ConfigValue.prototype.getDefault = function () {
            if (this._default == null) {
                this._default = this.supplier();
            }
            return this._default;
        };
        ConfigValue.prototype.get = function () {
            return this.getDefault();
        };
        ConfigValue.prototype.set = function (value) {
            this.supplier = function () {
                return value;
            };
            this._default = null;
        };
        return ConfigValue;
    }());
    ConfigSpec.ConfigValue = ConfigValue;
    let Builder = (function () {
        function Builder() {
            this.storage = new Storage();
            this.context = new BuilderContext();
            this.hasInvalidComment = false;
            this.currentPath = [];
            this.info = {};
            return this;
        }
        Builder.prototype.push = function (path) {
            if (typeof path == "string") {
                return this.push(path.split("."));
            }
            this.currentPath = this.currentPath.concat(path);
            this.checkComment();
            this.context.ensureEmpty();
            return this;
        };
        Builder.prototype.comment = function () {
            this.hasInvalidComment = arguments.length == 0;
            if (this.hasInvalidComment) {
                this.context.setComment(["No comment"]);
            } else {
                this.context.setComment([].slice.call(arguments));
            }
            return this;
        };
        Builder.prototype.checkComment = function (path) {
            if (this.hasInvalidComment) {
                this.hasInvalidComment = false;
                Logger.Log("Null comment for config option {" + path.join(".") + "}, this is invalid and may be disallowed in the future.");
            }
        };
        Builder.prototype.define = function (path, value) {
            if (typeof path == "string") {
                return this.define(path.split("."), value);
            }
            if (value instanceof Range) {
                value = value.getDefault();
            }
            let supplier;
            if (!!~["number", "string", "boolean"].indexOf(typeof value)) {
                supplier = function () {
                    return value;
                };
            }
            if (!(value instanceof ConfigValue)) {
                return this.define(path, new ConfigValue(supplier, this.context));
            }
            if (this.currentPath.length != 0) {
                let tmp = [];
                tmp = tmp.concat(this.currentPath);
                tmp = tmp.concat(path);
                path = tmp;
            }
            this.storage.set(path, value);
            this.addProperty(path, value);
            this.checkComment(path);
            this.context = new BuilderContext();
            return value;
        };
        Builder.prototype.addProperty = function (p, value) {
            let path = [this.name].concat(p);
            let translation = Translation.translate(this.context.getTranslationKey() || path[path.length - 2] + "." + path[path.length - 1]);
            let fullPath = path.join(".");
            let untilLastPath = path.slice(0, -1).join(".");
            for (let i = 0; i < path.length - 1; i++) {
                this.info[untilLastPath] = {name: {}, index: value.getIndex()};
                this.info[untilLastPath].name[language] = translation;
            }
            let property = this.info[fullPath] = {name: {}, index: value.getIndex(), description: {}};
            property.description[language] = value.getComment();
            property.name[language] = translation;
            if (value.getRange() != null) {
                let range = value.getRange();
                property.type = "SeekBar";
                property.min = range.getMin();
                property.max = range.getMax();
            }
        };
        Builder.prototype.defineInRange = function (path, defaultValue, min, max) {
            let range = new Range(defaultValue, min, max);
            this.context.setRange(range);
            this.context.setComment(this.context.getComment().concat(["Range: " + range.toString()]));
            if ((min - max) > 0) {
                throw new Error("Range min most be less then max.");
            }
            return this.define(path, range);
        };
        Builder.prototype.pop = function (count) {
            count = count || 1;
            if (count > this.currentPath.length) {
                throw new Error("Attempted to pop " + count + " elements when we only had: [" + this.currentPath.join(", ") + "]");
            }
            for (let x = 0; x < count; x++) {
                this.currentPath.pop();
            }
            return this;
        };
        Builder.prototype.configure = function (Consumer) {
            this.name = Consumer.name;
            let config = new Consumer(this);
            return config;
        };
        Builder.prototype.getInfo = function () {
            return JSON.parse(JSON.stringify(this.info));
        };
        Builder.prototype.getConfig = function () {
            let config = {};
            config[this.name] = JSON.parse(JSON.stringify(this.storage, function (k, v) {
                return v.get ? v.get() : v;
            }));
            return config;
        };
        Builder.prototype.writeConfig = function (dir) {
            let configDir = dir + "/config.json";
            let infoDir = dir + "/config.info.json";
            let config = this.getConfig();
            let info = this.getInfo();
            let _config = {};
            let _info = {};
            if (!FileTools.isExists(configDir)) {
                new java.io.File(configDir).createNewFile();
                FileTools.WriteJSON(configDir, {enabled: true}, true);
            } else {
                _config = FileTools.ReadJSON(configDir);
            }
            if (!FileTools.isExists(infoDir)) {
                new java.io.File(infoDir).createNewFile();
                FileTools.WriteJSON(infoDir, {properties: {enabled: {name: {en: "Enable Mod"}}}}, true);
            } else {
                _info = FileTools.ReadJSON(infoDir);
            }
            for (let i in _config) {
                config[i] = _config[i];
            }
            for (let i in _info) {
                info[i] = _info[i];
            }
            FileTools.WriteJSON(configDir, config, true);
            FileTools.WriteJSON(infoDir, info, true);
        };
        return Builder;
    }());
    ConfigSpec.Builder = Builder;
    let BuilderContext = (function () {
        function BuilderContext() {
            this.comment = [];
            this.langKey = null;
            this.range = null;
            return this;
        }
        BuilderContext.prototype.setComment = function (value) {
            this.validate(value == null, "Passed in null value for comment");
            this.comment = value;
        };
        BuilderContext.prototype.hasComment = function () {
            return this.comment.length > 0;
        };
        BuilderContext.prototype.getComment = function () {
            return this.comment;
        };
        BuilderContext.prototype.buildComment = function () {
            return this.comment.join("\n");
        };
        BuilderContext.prototype.setTranslationKey = function (value) {
            this.langKey = value;
        };
        BuilderContext.prototype.getTranslationKey = function () {
            return this.langKey;
        };
        BuilderContext.prototype.setRange = function (range) {
            this.range = range;
        };
        BuilderContext.prototype.getRange = function () {
            return this.range;
        };
        BuilderContext.prototype.ensureEmpty = function () {
            this.validate(this.hasComment(), "Non-empty comment when empty expected");
            this.validate(this.langKey, "Non-null translation key when null expected");
            this.validate(this.range, "Non-null range when null expected");
        };
        BuilderContext.prototype.validate = function (value, message) {
            if (value) {
                Logger.Log(message);
            }
        };
        return BuilderContext;
    }());
    ConfigSpec.BuilderContext = BuilderContext;
    let Range = (function () {
        function Range(defaultValue, min, max) {
            this.value = defaultValue;
            this.min = min;
            this.max = max;
        }
        Range.prototype.getMin = function () {
            return this.min;
        };
        Range.prototype.getDefault = function () {
            return this.value;
        };
        Range.prototype.getMax = function () {
            return this.max;
        };
        Range.prototype.toString = function () {
            if (this.max == Number.MAX_VALUE) {
                return "> " + this.min;
            }
            return "< " + this.max;
        };
        return Range;
    }());
    ConfigSpec.Range = Range;
    return ConfigSpec;
}());
EXPORT("ConfigSpec", ConfigSpec);

