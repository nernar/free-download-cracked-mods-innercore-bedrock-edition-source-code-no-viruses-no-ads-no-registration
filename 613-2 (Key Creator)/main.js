var context = UI.getContext(), path = __dir__ + "ui/logo.png", metrics = context.getResources().getDisplayMetrics(), display = context.getWindowManager().getDefaultDisplay(), scale = display.height / 2.8125, small = display.height / 180, normal = display.height / 90, big = display.height / 45, code = (display.width / 48) / metrics.density, message = (display.width / 51.43) / metrics.density, service = android.content.Context.CLIPBOARD_SERVICE, clipboard = context.getSystemService(service), typeface = android.graphics.Typeface.MONOSPACE, params = new android.widget.LinearLayout.LayoutParams(-2, -1), icon = new android.widget.LinearLayout.LayoutParams(scale, scale), bitmap = new android.graphics.BitmapFactory.decodeFile(path), drawable = new android.graphics.drawable.BitmapDrawable(bitmap), link = android.net.Uri.parse("https://m.vk.com/im?sel=268478382"), intent = new android.content.Intent("android.intent.action.VIEW", link), builder = new android.app.AlertDialog.Builder(context, 16974126), scroll = new android.widget.HorizontalScrollView(context), layout = new android.widget.LinearLayout(context), image = new android.widget.ImageView(context), key = new android.widget.TextView(context), description = new android.widget.TextView(context);
Translation.addTranslation("exit", {en: "Exit", ru: "\u0412\u044b\u0445\u043e\u0434"});
Translation.addTranslation("send", {en: "Send", ru: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"});
Translation.addTranslation("keyHint", {en: "Copy this code, and send it for the developer.", ru: "\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u044d\u0442\u043e\u0442 \u043a\u043e\u0434, \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443."});
Translation.addTranslation("createKeyFailed", {en: "An error occurred while creating the key.", ru: "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u044e\u0447\u0430."});
var exit = Translation.translate("exit"), send = Translation.translate("send"), keyHint = Translation.translate("keyHint"), createKeyFailed = Translation.translate("createKeyFailed");
context.runOnUiThread(function () {
    function toHexString(int) {
        return java.lang.Integer.toHexString(int);
    }
    function getCode() {
        try {
            var model = toHexString(android.os.Build.MODEL.hashCode()), id = toHexString(android.os.Build.ID.hashCode()), board = toHexString(android.os.Build.DEVICE.hashCode()), serial = toHexString(android.os.Build.SERIAL.hashCode());
            return model + "-" + id + "-" + board + "-" + serial;
        }
        catch (e) {
            return e.message + " (#" + e.lineNumber + ")";
        }
    }
    function getDescription() {
        var code = getCode();
        if (!code.endsWith(")")) {
            return keyHint;
        } else {
            return createKeyFailed;
        }
    }
    builder.setView(scroll);
    builder.setCancelable(false);
    builder.setPositiveButton(exit, null);
    builder.setNegativeButton(send, function () {
        clipboard.setText(getCode());
        context.startActivity(intent);
    });
    scroll.addView(layout);
    layout.setGravity(17);
    layout.setOrientation(1);
    layout.setPadding(big * 3, big * 2, big * 3, small);
    image.setLayoutParams(icon);
    image.setBackgroundDrawable(drawable);
    key.setText(getCode());
    key.setPadding(small, normal * 3, small, 0);
    key.setLayoutParams(params);
    key.setTextIsSelectable(true);
    key.setTypeface(typeface);
    key.setTextSize(code);
    key.setTextColor(-1);
    description.setLayoutParams(params);
    description.setText(getDescription());
    description.setTextSize(message);
    description.setTextColor(-7829368);
    layout.addView(image);
    layout.addView(key);
    layout.addView(description);
    builder.create().show();
});

