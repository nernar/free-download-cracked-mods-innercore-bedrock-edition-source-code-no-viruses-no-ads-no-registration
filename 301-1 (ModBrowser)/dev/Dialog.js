var dlg_bottom = 2 * (UI.getScreenRelativeHeight() - 300);
var Dialog = {content: {location: {padding: {left: 255, right: 255, top: 155, bottom: 155}}, drawing: [{type: "color", color: android.graphics.Color.argb(255, 139, 139, 139)}], elements: {descr: {type: "text", x: 40, y: 40, text: "", font: fonts.defaultBig, multiline: true, format: true, formatMaxCharsPerLine: 30}, textNo: {type: "text", x: 275, y: dlg_bottom - 175, z: 2, font: fonts.confirmAction, text: locale.no}, textYes: {type: "text", x: 725, y: dlg_bottom - 175, z: 2, font: fonts.confirmAction, text: locale.yes}}}, background: {location: {padding: {left: 250, right: 250, top: 150, bottom: 150}}, drawing: [{type: "color", color: 0}, {type: "frame", x: 0, y: 0, width: 1000, height: dlg_bottom, bitmap: "default_frame_new", scale: 5}]}, window: new UI.WindowGroup(), container: new UI.Container()};
Dialog.window.addWindow("bg", Dialog.background);
Dialog.window.addWindow("fg", Dialog.content);
Dialog.window.setBlockingBackground(true);
Dialog.show = function (text, actionYes, actionNo) {
    Dialog.content.elements.descr.text = text;
    Dialog.content.elements.btnNo = new FramedButton({x: 100, y: dlg_bottom - 200}, 350, 150, {onClick: function () {
        if (actionNo) {
            actionNo();
        }
        Dialog.close();
    }});
    Dialog.content.elements.btnYes = new FramedButton({x: 550, y: dlg_bottom - 200}, 350, 150, {onClick: function () {
        if (actionYes) {
            actionYes();
        }
        Dialog.close();
    }});
    Dialog.container.openAs(Dialog.window);
};
Dialog.close = function () {
    Dialog.container.close();
};

