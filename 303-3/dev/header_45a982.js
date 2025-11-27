var GUI_BAR_STANDART_SCALE = 3.2;
function print(msg, color) {
    var ctx = Packages.zhekasmirnov.launcher.utils.UIUtils.getContext();
    ctx.runOnUiThread(function () {
        android.widget.Toast.makeText(ctx, new android.text.Html.fromHtml((color == null ? "" : "<font color=\"" + color + "\"> ") + msg), 0).show();
    });
}

