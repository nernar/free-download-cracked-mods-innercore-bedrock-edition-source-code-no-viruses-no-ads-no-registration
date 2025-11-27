UI.getContext().runOnUiThread(({run: function () {
    try {
        var d = new android.app.AlertDialog.Builder(UI.getContext());
        d.setNegativeButton("Oki", new android.content.DialogInterface.OnClickListener() {onClick: function () {
        }});
        d.setTitle(Translation.translate("Slime I sekai"));
        d.setMessage(Translation.translate("Welcome To Mod") + "\n" + "Slime I sekai" + "\n" + Translation.translate("Mod Source Code in ############") + "\n" + Translation.translate("Mod Made By XD HMDT"));
        d.show();
    }
    catch (e) {
    }
}}));
ModAPI.registerAPI("SlimeApi", {requireGlobal: function (command) {
    return eval(command);
}});
Logger.Log("Slime", "API");

