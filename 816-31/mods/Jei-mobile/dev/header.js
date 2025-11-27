let uiOptions = android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE | android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | android.view.View.SYSTEM_UI_FLAG_FULLSCREEN | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
function onSystemUiVisibilityChange(layout) {
    try {
        layout.setOnSystemUiVisibilityChangeListener({onSystemUiVisibilityChange(visibility) {
            if ((visibility & android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION) == 0) {
                layout.setSystemUiVisibility(uiOptions);
            }
        }});
    }
    catch (e) {
    }
}
IMPORT("RuntimeConfig");
var runOnUiThread = function (func) {
    UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
        try {
            func();
        }
        catch (e) {
            alert(e);
        }
    }}));
};
let TouchEventType = com.zhekasmirnov.innercore.api.mod.ui.types.TouchEventType;
let ItemInformation = null;
ModAPI.addAPICallback("ItemInformation", function (api) {
    ItemInformation = api;
});
function getId(obj, id) {
    for (let key in obj) {
        if (obj[key] == id) {
            return key;
        }
    }
}

