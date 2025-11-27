const SETTING_DEFAULT = {name: "{var}", x: "{var}", y: "{var}", line: "{var}", icon_scale: 0.95, search: "reliable", isClose: "{var}", isTouch: true, size_title: 115};
const SETTING = (function () {
    try {
        return FileTools.ReadJSON(__dir__ + "setting.json");
    }
    catch (e) {
        alert(e);
        return {};
    }
})();
function objectFix(obj, obj2, setting) {
    setting = setting || {};
    for (let i in obj2) {
        if (obj[i] === undefined) {
            obj[i] = obj2[i];
        }
        if (obj[i] == "{var}") {
            obj[i] = setting[i];
        }
        if (obj[i] == "{var}" && setting[i] === undefined) {
            delete obj[i];
        }
    }
    return obj;
}
let Setting = {get(id, setting) {
    return objectFix(JSON.parse(JSON.stringify(SETTING[id] || SETTING_DEFAULT)), SETTING_DEFAULT, setting);
}, set(id, setting) {
    SETTING[id] = setting;
    try {
        FileTools.WriteJSON(__dir__ + "setting.json", SETTING, true);
    }
    catch (e) {
        alert(e);
    }
}, open(setting) {
    let types = ["Ui setting", "save", ["keyValue", "slider", "X", "x", 50, 1000, 50, ""], ["keyValue", "slider", "Line", "line", 3, 16, 1, ""], ["keyValue", "slider", "Icon scale", "icon_scale", 0.5, 1.9, 0.05, ""], ["keyValue", "slider", "Size title", "size_title", 40, 150, 5, ""], ["checkBox", "isClose", "Button exit"], ["checkBox", "isTouch", "touch"], ["keyValue", "multipleChoice", "Search", "search", Object.keys(SEARCH)]];
    try {
        showConfig(types, setting, function () {
            Setting.set(setting.name, setting);
            Jei.close();
            Jei.open(setting);
        });
    }
    catch (e) {
        alert(e);
    }
}};

