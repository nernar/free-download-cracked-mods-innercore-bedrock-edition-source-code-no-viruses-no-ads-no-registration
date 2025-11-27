LIBRARY({name: "DependenceHelper", version: 5, shared: true, api: "CoreEngine"});
Translation.addTranslation("Failed to launch mods", {ru: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043c\u043e\u0434\u044b"});
Translation.addTranslation("Open list of not installed api", {ru: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 api"});
Translation.addTranslation("Failed to launch the mod {name}, mods are required:", {ru: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043c\u043e\u0434 {name}, \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043c\u043e\u0434\u044b:"});
let Information = null;
ModAPI.addAPICallback("ItemInformation", function (api) {
    Information = api.ItemInformation;
});
let Builder = android.app.AlertDialog.Builder;
let Html = android.text.Html;
let UIUtils = com.zhekasmirnov.innercore.utils.UIUtils;
let LoadingUI = com.zhekasmirnov.innercore.ui.LoadingUI;
function DialogList(items) {
    let builder = new Builder(UIUtils.getContext());
    this.show = function () {
        let keys = Object.keys(items);
        builder.setItems(keys, {onClick(dialog, i) {
            UI.getContext().startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(items[keys[i]])));
        }});
        builder.show();
    };
}
function Dialog(title) {
    let builder = new Builder(UIUtils.getContext());
    builder.setTitle(title);
    builder.setNeutralButton(Translation.translate("Open list of not installed api"), {onClick() {
        new DialogList(Dependence.urls).show();
    }});
    let html = "";
    this.addLine = function (message) {
        if (html != "") {
            html += "<br>";
        }
        html += message;
    };
    this.getMessage = function () {
        return html;
    };
    this.show = function () {
        UIUtils.runOnUiThread({run() {
            builder.setMessage(Html.fromHtml(html));
            builder.show();
        }});
    };
}
let selfs = [];
let dependences = [];
function Dependence(name, priority) {
    this.mods = [];
    this.launch = function () {
    };
    this.loaded = {};
    this.unification = {};
    this.isLoader = {};
    this.customMessage = {};
    this.name = name;
    this.priority = priority || 0;
    let self = this;
    this.addDependence = function (mod, url, unification, isLoader, customMessage) {
        this.mods.push({name: mod, url: url});
        ModAPI.addAPICallback(mod, function (api) {
            self.loaded[mod] = api;
            if (self.mods[mod]) {
                delete self.mods[mod];
            }
        });
        this.unification[mod] = unification || function (input, result) {
            let keys = Object.keys(input);
            for (let i in keys) {
                result[keys[i]] = input[keys[i]];
            }
        };
        this.isLoader[mod] = isLoader || function (api) {
            return true;
        };
        this.customMessage[mod] = customMessage || function (api) {
            return "\u2022 " + mod;
        };
        return this;
    };
    this.setLaunch = function (func) {
        this.launch = func;
        return this;
    };
    this.is = true;
    selfs.push(this);
}
Callback.addCallback("CoreConfigured", function () {
    selfs.sort(function (a, b) {
        return a.priority - b.priority;
    });
    for (let i in selfs) {
        let self = selfs[i];
        let keys = Object.keys(self.loaded);
        let mods = [];
        for (let i in self.mods) {
            if (self.loaded[self.mods[i].name] === undefined || !self.isLoader[keys[i]](self.loaded[self.mods[i].name])) {
                mods.push(keys[i]);
            }
        }
        if (mods.length == 0) {
            if (Information != null) {
                Information.startModLoad(self.name);
            }
            let api = {};
            let keys = Object.keys(self.unification);
            for (let i in keys) {
                self.unification[keys[i]](self.loaded[keys[i]], api);
            }
            LoadingUI.setTip("Mod load " + self.name);
            self.launch(self.loaded, api);
            Callback.invokeCallback(self.name);
            LoadingUI.setTip("");
            if (Information != null) {
                Information.endModLoad();
            }
        } else {
            if (self.is) {
                dependences.push(self);
                self.is = false;
            }
        }
    }
}, 1);
Dependence.urls = {};
Callback.addCallback("PostLoaded", function () {
    let dialog = new Dialog(Translation.translate("Failed to launch mods"));
    for (let i in dependences) {
        let self = dependences[i];
        dialog.addLine(Translation.translate("Failed to launch the mod {name}, mods are required:").replace("{name}", self.name));
        let mods = self.mods;
        for (let j in mods) {
            dialog.addLine(self.customMessage[mods[j].name](self.loaded[mods[j].name]));
            if (mods[j].url) {
                Dependence.urls[mods[j].name] = mods[j].url;
            }
        }
    }
    if (dialog.getMessage() != "") {
        dialog.show();
    }
});
EXPORT("Dependence", Dependence);

