IDRegistry.genBlockID("machineStaffEnchanter");
Block.createBlock("machineStaffEnchanter", [{
    name: "Staff Enchanter", texture: [
        ["staff_enchanter_bottom", 0],
        ["staff_enchanter_top", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0],
        ["staff_enchanter_side", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineStaffEnchanter, count: 1, data: 0 }, [
        "bbb",
        "bcb",
        "aaa"
    ], ['a', 331, -1, 'b', 4, 0, 'c', BlockID.machineRuneEnchanter, 0]);
});

var UIScreenStaffEnchanter = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Staff Enchanter") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 155, bitmap: "arrow_bar_background", scale: 3.3 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.3 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotFuel": {
            type: "slot", x: 441, y: 218,
            isValid: function (id, count, data) {
                return manastorage.getItem(id) && true;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 148, isValid: function () { return false; } },

        "imageRune": { type: "image", x: 760, y: 144, scale: 4, bitmap: "rune.air" },
        "buttonPreviousRune": {
            type: "button", bitmap: "small_arrow_up", bitmap2: "small_arrow_up_down",  x: 760, y: 90, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(-1) : null; }
            }
        },
        "buttonNextRune": {
            type: "button", bitmap: "small_arrow_bottom", bitmap2: "small_arrow_bottom_down", x: 760, y: 220, scale: 4.1, clicker: {
                onClick: function (container) { container && container.tileEntity ? container.tileEntity.changeRune(1) : null; }
            }
        }
    }
});

TileEntity.registerPrototype(BlockID.machineStaffEnchanter, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0,
        current_rune: 0,
        default_runes: [
            "rune.fire",
            "rune.mana",
            "rune.essence",
            "rune.earth"
        ]
    },

    getGuiScreen: function () {
        return UIScreenStaffEnchanter;
    },
    addTransportedItem: function (self, item, direction) {
        var slot;
        slot = this.container.getSlot("slotSource");
        if (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
            if (!item.count) { return; }
        }

        slot = this.container.getSlot("slotFuel");
        if (manastorage.getItem(item.id) && (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64)) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },
    getTransportSlots: function () {
        return { input: ["slotSource", "slotFuel"], output: ["slotResult"] };
    },


    changeRune: function (index) {
        this.data.current_rune += index;
        this.data.current_rune === this.data.default_runes.length ? this.data.current_rune = 0 : null;
        this.data.current_rune === -1 ? this.data.current_rune = this.data.default_runes.length - 1 : null;
        let content = this.container.getGuiContent();
        content.elements["imageRune"].bitmap = this.data.default_runes[this.data.current_rune];
    },
       
    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipe.getStaffEnchanterRecipe(sourceSlot, this.data.default_runes[this.data.current_rune]);

        if (this.data.burn === 0 && result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        if (this.data.burn > 0 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id === result.id && resultSlot.data === result.data && resultSlot.count < 64 || resultSlot.id === 0) && this.data.progress++ >= 160) {
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        if (this.data.burn > 0) {
            this.data.burn--;
        }

        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 160);
    },
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = manastorage.getItem(fuelSlot.id);
            if (burn) {
                if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                    var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                    fuelSlot.id = empty.id;
                    fuelSlot.data = empty.data;
                    return burn;
                }
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
        }
        return 0;
    }
});