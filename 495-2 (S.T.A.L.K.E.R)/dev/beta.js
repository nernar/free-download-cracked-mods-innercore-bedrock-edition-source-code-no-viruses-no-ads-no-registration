var ModInfo = FileTools.ReadJSON(__dir__ + "mod.info");
var betaText = ModInfo.name + " " + ModInfo.version + " \xa9" + ModInfo.author + "\n" + GUI.Size.WIDTH + "x" + GUI.Size.HEIGHT, betaPopup1 = null, betaPopup2 = null;
function betaOpen1() {
    GUI.run(function () {
        var text = android.widget.TextView(GUI.ctx);
        text.setText(betaText);
        text.setGravity(android.view.Gravity.CENTER);
        text.setTextColor(android.graphics.Color.parseColor("#FFFFFFFF"));
        text.setTypeface(android.graphics.Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        betaPopup1 = new android.widget.PopupWindow(text, android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
        betaPopup1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        betaPopup1.setTouchable(false);
        betaPopup1.showAtLocation(GUI.ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER, 0, 10);
    });
}
function betaClose1() {
    GUI.run(function () {
        if (betaPopup1 != null) {
            betaPopup1.dismiss();
            betaPopup1 = null;
        }
    });
}
function betaOpen2() {
    GUI.run(function () {
        var text = android.widget.TextView(GUI.ctx);
        text.setText(betaText);
        text.setGravity(android.view.Gravity.CENTER);
        text.setTextColor(android.graphics.Color.parseColor("#FFFFFFFF"));
        text.setTypeface(android.graphics.Typeface.createFromFile(FileTools.root + "games/com.mojang/innercore/mc-typeface.ttf"));
        betaPopup2 = new android.widget.PopupWindow(text, android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);
        betaPopup2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        betaPopup2.setTouchable(false);
        betaPopup2.showAtLocation(GUI.ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER, 0, 10);
    });
}
function betaClose2() {
    GUI.run(function () {
        if (betaPopup2 != null) {
            betaPopup2.dismiss();
            betaPopup2 = null;
        }
    });
}
function betaOpen() {
    if (betaPopup1 == null) {
        betaOpen1();
        betaClose2();
    } else {
        if (betaPopup2 == null) {
            betaOpen2();
            betaClose1();
        }
    }
}
Callback.addCallback("PostLoaded", function () {
    betaOpen();
});

