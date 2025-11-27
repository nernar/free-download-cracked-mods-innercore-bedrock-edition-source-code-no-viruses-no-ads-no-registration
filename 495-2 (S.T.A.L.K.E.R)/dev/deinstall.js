var Deinstall = {button: new GUI.Overlay({touchable: true, location: {gravity: GUI.Gravity.TOP | GUI.Gravity.RIGHT}, elements: {"delete": {type: "button", text: "Delete"}}}), c: new GUI.Container(), open: function () {
    Deinstall.c.open(Deinstall.button);
}, close: function () {
    Deinstall.c.close();
}, delete: function () {
}};

