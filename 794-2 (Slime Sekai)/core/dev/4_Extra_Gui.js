var ExtraSkill = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 145, y: 81, bitmap: "Skill Gui.extra_skill_gui", scale: 2}, "closeButton_0": {type: "closeButton", x: 891, y: 84, global: true, bitmap: "Button.XHover", bitmap2: "Button.XPress", scale: 2.3}}});
var Extra = (function () {
    function Extra() {
    }
    Extra.registerExtra = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    Extra.tick = function () {
        for (var i in this.extras) {
            var extra = this.extras[i];
            if (!extra) {
                continue;
            }
            if (extra.tick) {
                extra.tick();
            }
        }
    };
    Extra.openGui = function () {
        this.container.openAs(ExtraSkill);
    };
    Extra.getDesc = function (id) {
        return this.descriptions[id];
    };
    Extra.getType = function (id) {
        var desc_extra = this.descriptions[id];
        if (!desc_extra) {
            return null;
        }
        return desc_extra.type;
    };
    Extra.container = new UI.Container();
    Extra.btnContainer = new UI.Container();
    Extra.descriptions = {};
    Extra.extras = {};
    return Extra;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === " inventory_screen_pocket" || screenName === "inventory_screen") {
    }
});
Saver.addSavesScope("Extra", function read(scope_extra) {
    if (scope_extra.container) {
        Extra.container = scope_extra.container;
    } else {
        Extra.container = new UI.Container();
    }
}, function save() {
    return {container: Extra.container};
});

