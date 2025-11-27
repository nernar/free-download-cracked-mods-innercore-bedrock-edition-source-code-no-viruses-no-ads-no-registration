var tele_portation_gui = new UI.Window({location: {width: 60, height: 60 * 2, x: 0, y: 150}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"button_push": {x: 0, y: 0, type: "button", bitmap: "Button.extra.Tele.tele_on", scale: 50, clicker: {onClick: function () {
    click.play();
    var skills = "Tele Portation";
    let pos = Player.getPosition();
    let vec = Entity.getLookVector(Player.get());
    let crd = {};
    for (let t = 1; t <= 16; t++) {
        crd.x = pos.x + vec.x * t;
        crd.y = pos.y + vec.y * t;
        crd.z = pos.z + vec.z * t;
        if (!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))) {
            Entity.setPosition(Player.get(), crd.x, crd.y + 3, crd.z);
            travel.play();
        }
    }
}}}, "close_button": {x: 0, y: 1000, type: "closeButton", bitmap: "Button.extra.Tele.tele_off", scale: 50, click: {onClick: function () {
    click.play();
}}}}});
var Tele_Ui = (function () {
    function Tele_Ui() {
    }
    Tele_Ui.registerTele_Ui = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    Tele_Ui.tick = function () {
        for (var i in this.tele_uis) {
            var tele_ui = this.tele_uis[i];
            if (!tele_ui) {
                continue;
            }
            if (tele_ui.tick) {
                tele_ui.tick();
            }
        }
    };
    Tele_Ui.openGui = function () {
        this.container.openAs(tele_portation_gui);
    };
    Tele_Ui.getDesc = function (id) {
        return this.descriptions[id];
    };
    Tele_Ui.getType = function (id) {
        var desc_tele_ui = this.descriptions[id];
        if (!desc_tele_ui) {
            return null;
        }
        return desc_tele_ui.type;
    };
    Tele_Ui.container = new UI.Container();
    Tele_Ui.btnContainer = new UI.Container();
    Tele_Ui.descriptions = {};
    Tele_Ui.tele_uis = {};
    return Tele_Ui;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "hud_screen" || screenName === "in_game_play_screen") {
    }
});
Saver.addSavesScope("Tele_Ui", function read(scope_tele_ui) {
    if (scope_tele_ui.container) {
        Tele_Ui.container = scope_tele_ui.container;
    } else {
        Tele_Ui.container = new UI.Container();
    }
}, function save() {
    return {container: Tele_Ui.container};
});

