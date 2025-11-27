var UniqueSkill = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 145, y: 81, bitmap: "Skill Gui.unique_skill_gui", scale: 2}, "closeButton_0": {type: "closeButton", x: 891, y: 84, global: true, bitmap: "Button.XHover", bitmap2: "Button.XPress", scale: 2.3}}});
var Unique = (function () {
    function Unique() {
    }
    Unique.registerUnique = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    Unique.tick = function () {
        for (var i in this.uniques) {
            var unique = this.uniques[i];
            if (!unique) {
                continue;
            }
            if (unique.tick) {
                unique.tick();
            }
        }
    };
    Unique.openGui = function () {
        this.container.openAs(UniqueSkill);
    };
    Unique.getDesc = function (id) {
        return this.descriptions[id];
    };
    Unique.getType = function (id) {
        var desc_unique = this.descriptions[id];
        if (!desc_unique) {
            return null;
        }
        return desc_unique.type;
    };
    Unique.container = new UI.Container();
    Unique.btnContainer = new UI.Container();
    Unique.descriptions = {};
    Unique.uniques = {};
    return Unique;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === " inventory_screen_pocket" || screenName === "inventory_screen") {
    }
});
Saver.addSavesScope("Unique", function read(scope_unique) {
    if (scope_unique.container) {
        Unique.container = scope_unique.container;
    } else {
        Unique.container = new UI.Container();
    }
}, function save() {
    return {container: Unique.container};
});

