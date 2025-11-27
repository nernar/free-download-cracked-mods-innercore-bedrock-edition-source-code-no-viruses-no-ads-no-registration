/*
    BackpackAPI library

    ©DDCompany (https://vk.com/forestry_pe)
 */

Translation.addTranslation("Backpack", { pt: "Mochila"});

Saver.addSavesScope("BackpacksScope",
    function read(scope) {
        BackpackRegistry.nextUnique = scope.nextUnique || 1;
        BackpackRegistry.containers = scope.containers || {};
    },

    function save() {
        return {
            nextUnique: BackpackRegistry.nextUnique,
            containers: BackpackRegistry.containers
        };
    }
);

var BackpackRegistry = {
    nextUnique: 1,
    containers: {},
    prototypes: {},
    guis: {},
    register: function (id, obj) {
        if (id <= 0) {
            Logger.Log("id is not valid", "ERROR");
            return;
        }

        if (!obj) {
            Logger.Log("object is not valid", "ERROR");
            return;
        }

        let slots = obj.slots || 10;
        let gui = obj.gui;
        let isValidFunc = obj.isValidItem || function (id) {
            return !BackpackRegistry.isBackpack(id);
        };

        if (!gui && !this.guis[slots]) {

            if (slots <= 0) {
                Logger.Log("slots amount is not valid", "ERROR");
                return;
            }

            let gui = new UI.StandartWindow({
                standart: {
                    header: {
                        text: {
                            text: "Backpack"
                        }
                    },
                    inventory: {
                        standart: true
                    },
                    background: {
                        standart: true
                    },
                    minHeight: 90 + (slots / 10 * 61) + 70
                },
                drawing: [],
                elements: {}
            });

            BackpackRegistry.addSlotsToGui(gui, slots, isValidFunc, obj.inRow, true);
            this.guis[slots] = gui;
        }

        Item.registerUseFunctionForID(id, function (coords, item) {
            BackpackRegistry.openGuiFor(item.id, item.data);
        });

        this.prototypes[id] = obj;
    },

    openGuiFor: function (id, data, notUpdateData) {
        let prototype = this.prototypes[id];

        if (prototype) {
            let container = this.containers["d" + data];

            if (!container) {
                data = BackpackRegistry.nextUnique++;
                container = this.containers["d" + data] = new UI.Container();

                if (!notUpdateData)
                    Player.setCarriedItem(id, 1, data);
            }

            container.openAs(prototype.gui || this.guis[prototype.slots]);
            return data;
        }

        Logger.Log("item is not a backpack", "ERROR");
        return null;
    },

    isBackpack: function (id) {
        return this.prototypes[id];
    },

    addSlotsToGui: function (gui, slots, isValidFunc, inRow, center, x, y) {
        let content = gui.getContent();

        x = center ? 300 + (700 - inRow * 61) / 2 : x || 345;
        inRow = inRow || 10;

        let xp = x;
        let yp = y || 70;

        for (let i = 1;i <= slots; i++) {
            content.elements["slot" + i] = {type: "slot", x: xp, y: yp, isValid: isValidFunc};

            xp += 61;
            if (i % inRow === 0) {
                xp = x;
                yp += 61;
            }
        }

        return gui;
    }

};

registerAPIUnit("BackpackRegistry", BackpackRegistry);