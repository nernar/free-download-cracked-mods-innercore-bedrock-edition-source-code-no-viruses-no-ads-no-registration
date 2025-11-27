var Compiler = {ui: null, mods: [], init: function () {
    let it = com.zhekasmirnov.innercore.mod.build.ModLoader.instance.modsList.iterator();
    while (it.hasNext()) {
        var mod = it.next();
        Compiler.mods.push({name: mod.getName(), mod: mod});
    }
}, compile: function (mod) {
    var str = "";
    var window = com.zhekasmirnov.innercore.api.mod.adaptedscript.PreferencesWindowAPI.Prefs;
    window.compileMod(mod, {message: function (msg) {
        alert(msg);
        str += "\n" + msg;
        if (msg == "compilation finished") {
            UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
                ui = new android.app.AlertDialog.Builder(UI.getContext());
                ui.setTitle("Log").setMessage(str).create().show();
            }}));
            mod.setBuildType(com.zhekasmirnov.innercore.mod.build.enums.BuildType.RELEASE);
        }
    }});
}, open: function () {
    var count = 0;
    UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
        Compiler.ui = new android.app.AlertDialog.Builder(UI.getContext());
        Compiler.ui.setTitle("Compiler");
        var layout = new android.widget.LinearLayout(UI.getContext());
        for (var i in Compiler.mods) {
            var mod = Compiler.mods[i];
            if (mod.name != "Dexer") {
                eval("var b_" + i + " = new android.widget.Button(UI.getContext());");
                eval("b_" + i + ".setText('" + mod.name + "');");
                eval("b_" + i + ".setOnClickListener({onClick:function(){Compiler.compile(Compiler.mods[" + i + "].mod);}});");
                eval("layout.addView(b_" + i + ");");
            }
        }
        Compiler.ui.setView(layout);
        layout.setOrientation(1);
        Compiler.ui.create().show();
    }}));
}};
Compiler.init();
Compiler.open();

