var IntrinsicSkill = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 145, y: 81, bitmap: "Skill Gui.intrinsic_gui", scale: 2}, "closeButton_0": {type: "closeButton", x: 891, y: 84, global: true, bitmap: "Button.XHover", bitmap2: "Button.XPress", scale: 2.3}}});
var Intrinsic_Skills_Un_Lock = {body_armor: false};
function getItemInPlayerInventory(id, count, data) {
    var total = 0;
    for (var i = 9; i < 45; i++) {
        var slot = Player.getInventorySlot(i);
        if (slot.id == id && (slot.data == data || data == -1)) {
            total += slot.count;
        }
    }
    return total >= count;
}
Callback.addCallback("tick", function () {
    if (getItemInPlayerInventory(7, 1, 0) && !Intrinsic_Skills_Un_Lock.body_armor) {
        if (getItemInPlayerInventory(7, 1, 0)) {
            Intrinsic_Skills_Un_Lock.body_armor = true;
        }
    }
});
var Intrinsic = (function () {
    function Intrinsic() {
    }
    Intrinsic.registerIntrinsic = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    Intrinsic.tick = function () {
        for (var i in this.intrinsics) {
            var intrinsic = this.intrinsics[i];
            if (!intrinsic) {
                continue;
            }
            if (intrinsic.tick) {
                intrinsic.tick();
            }
        }
    };
    Intrinsic.openGui = function () {
        this.container.openAs(IntrinsicSkill);
    };
    Intrinsic.getDesc = function (id) {
        return this.descriptions[id];
    };
    Intrinsic.getType = function (id) {
        var desc_intrinsic = this.descriptions[id];
        if (!desc_intrinsic) {
            return null;
        }
        return desc_intrinsic.type;
    };
    Intrinsic.container = new UI.Container();
    Intrinsic.btnContainer = new UI.Container();
    Intrinsic.descriptions = {};
    Intrinsic.intrinsics = {};
    return Intrinsic;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "inventory_screen_pocket" || screenName === "inventory_screen") {
    }
});
Saver.addSavesScope("Intrinsic", function read(scope_intrinsic) {
    if (scope_intrinsic.container) {
        Intrinsic.container = scope_intrinsic.container;
    } else {
        Intrinsic.container = new UI.Container();
    }
}, function save() {
    return {container: Intrinsic.container};
});
Saver.addSavesScope("Intrinsic_Skills_Un_Lock", function read(scope_Intrinsic_Skills_Un_Lock) {
    Intrinsic_Skills_Un_Lock = scope_Intrinsic_Skills_Un_Lock;
}, function save() {
    return Intrinsic_Skills_Un_Lock;
});

