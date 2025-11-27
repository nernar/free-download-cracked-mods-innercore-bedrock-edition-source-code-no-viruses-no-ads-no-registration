let NativeAPI = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeAPI", true, UI.getContext().getClass().getClassLoader()).newInstance();
let HEIGHT_CENTER = (UI.getScreenHeight() - 240) / 2 - 30;
let GUI = new UI.StandartWindow({standart: {header: {text: {text: "Wizard"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {"amulet": {type: "slot", x: 400, y: HEIGHT_CENTER, bitmap: "amulet", isValid: function (id) {
    return Wizard.getType(id) === "amulet";
}}, "spell": {type: "slot", x: 460, y: HEIGHT_CENTER, bitmap: "spell", isValid: function (id) {
    return Wizard.getType(id) === "spell";
}}}});
let BUTTON_WIZARD_GUI = new UI.Window({location: {x: 13, y: UI.getScreenHeight() - 462, width: 68, height: 75}, drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}, {type: "frame", x: 0, y: 5, width: 1000, height: 1100, bitmap: "frame", scale: 40}], elements: {"texture": {type: "image", x: 64, y: 64, bitmap: "wand", scale: 55, clicker: {onClick: function () {
    Wizard.openGui();
}}}}});
let Wizard = {container: new UI.Container(), btnContainer: new UI.Container(), isOpenedContainer: false, descriptions: {}, baubles: {}, registerBauble: function (obj) {
    this.descriptions[obj.id] = obj;
}, tick: function () {
    for (let i in this.baubles) {
        let bauble = this.baubles[i];
        if (!bauble) {
            continue;
        }
        if (bauble.tick) {
            bauble.tick();
        }
    }
}, cache: function () {
    let baubles = this.baubles;
    let baubles_old = {amulet: baubles.amulet, spell: baubles.spell};
    baubles.amulet = this.getDesc(this.container.getSlot("amulet").id);
    baubles.spell = this.getDesc(this.container.getSlot("spell").id);
    for (let i in baubles) {
        let bauble = baubles[i] || {};
        let bauble_old = baubles_old[i] || {};
        if (bauble.id !== bauble_old.id) {
            if (bauble.onEquip) {
                bauble.onEquip();
            }
            if (bauble_old.onTakeOff) {
                bauble_old.onTakeOff();
            }
        }
    }
}, openGui: function () {
    this.container.openAs(GUI);
}, getDesc: function (id) {
    return this.descriptions[id];
}, getType: function (id) {
    let desc = this.descriptions[id];
    if (!desc) {
        return null;
    }
    return desc.type;
}};
Saver.addSavesScope("Wizard", function read(scope) {
    if (Wizard.container = scope.container) {
        Wizard.cache();
    } else {
        Wizard.container = new UI.Container();
    }
}, function save() {
    return {container: Wizard.container};
});
Callback.addCallback("tick", function () {
    let container = Wizard.container;
    if (!container) {
        return;
    }
    let isOpened = container.isOpened();
    if (!isOpened) {
        if (Wizard.isOpenedContainer) {
            Wizard.cache();
        }
        Wizard.tick();
    }
    Wizard.isOpenedContainer = isOpened;
});
Callback.addCallback("LevelLeft", function () {
    Wizard.baubles = {};
});
Callback.addCallback("EntityDeath", function (entity) {
    if (Entity.getType(entity) === 63) {
        for (let i in Wizard.baubles) {
            let bauble = Wizard.baubles[i];
            if (bauble) {
                let pos = Player.getPosition();
                Wizard.container.dropSlot(i, pos.x, pos.y, pos.z);
                if (bauble.onTakeOff) {
                    bauble.onTakeOff();
                }
            }
        }
    }
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "survival_inventory_screen" || screenName === "creative_inventory_screen") {
        if (NativeAPI.getUiProfile() === 1) {
            Wizard.btnContainer.openAs(BUTTON_WIZARD_GUI);
        }
    } else {
        Wizard.btnContainer.close();
    }
});
ModAPI.registerAPI("WizardAPI", {Wizard: Wizard, requireGlobal: function (command) {
    return eval(command);
}});

