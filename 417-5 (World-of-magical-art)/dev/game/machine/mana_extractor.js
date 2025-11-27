IDRegistry.genBlockID("machineManaExtractor");
Block.createBlock("machineManaExtractor", [{
    name: "Mana Extractor", texture: [
        ["altar_top", 0],
        ["altar_top", 0],
        ["mana_extractor", 0],
        ["mana_extractor", 0],
        ["mana_extractor", 0],
        ["mana_extractor", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineManaExtractor, count: 1, data: 0 }, [
        "aba",
        "bcb",
        "aba"
    ], ['a', ItemID.dustMana, -1, 'b', 265, 0, 'c', BlockID.machineAltar, 0]);
});

var UIScreenManaExtractor = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Mana Extractor") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid_ground", scale: 2.6 },
        { type: "bitmap", x: 560, y: 300, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "liquidScale": { type: "scale", x: 350, y: 50, bitmap: "liquid_mana", direction: 1, scale: 2.6 },
        "burningScale": { type: "scale", x: 560, y: 300, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 520, y: 200, size: 85 }
    }
});

TileEntity.registerPrototype(BlockID.machineManaExtractor, {
    defaultValues: {
        storageMana: 0,
        burn: 0,
        burnMax: 0
    },
    explode: function () {
        World.destroyBlock(this.x, this.y, this.z, true);
        Level.explode(this.x, this.y, this.z, 1, false);
        Particle.effectExplode(Effect.cloud, this.x, this.y, this.z, 0.5, 100);
    },
    getGuiScreen: function () {
        return UIScreenManaExtractor;
    },
    getTransportSlots: function () {
        return { input: ["slotSource"] };
    },
    addTransportedItem: function (self, item, direction) {
        var slot = this.container.getSlot("slotSource");
        if (manastorage.getItem(item.id) && (slot.id === 0 || slot.id === item.id && slot.data === item.data && slot.count < 64)) {
            let add = Math.min(item.count, 64 - slot.count);
            item.count -= add;
            slot.id = item.id;
            slot.data = item.data;
            slot.count += add;
        }
    },
    getManaStorage: function () {
        return 1000;
    },
    tick: function () {
        var energyStorage = this.getManaStorage();

        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("liquidScale", this.data.storageMana / energyStorage);

        let rune0 = World.getBlockID(this.x, this.y - 1, this.z) === BlockID.runeEmpty;
        let rune1 = World.getBlockID(this.x + 1, this.y - 1, this.z) === BlockID.runeMana;
        let rune2 = World.getBlockID(this.x - 1, this.y - 1, this.z) === BlockID.runeMana;
        let rune3 = World.getBlockID(this.x, this.y - 1, this.z + 1) === BlockID.runeMana;
        let rune4 = World.getBlockID(this.x, this.y - 1, this.z - 1) === BlockID.runeMana;

        if (!(rune0 && rune1 && rune2 && rune3 && rune4)) {
            return;
        }

        if (this.data.burn <= 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotSource") / 4;
        }
        if (this.data.burn > 0 && this.data.storageMana < energyStorage) {
            this.data.storageMana = Math.min(this.data.storageMana + 2, energyStorage);

            let rndx = Math.random() * 0.4 - 0.2;
            let rndz = Math.random() * 0.4 - 0.2;

            particle.emit(Effect.mana, 0, this.x + 0.5 + rndx, this.y + 0.9, this.z + 0.5 + rndz, 0, 0.05, 0);
            this.data.burn -= 0.5;
        }
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
    },
    getMana: function (count) {
        if (count >= this.data.storageMana) {
            this.data.storageMana -= count;
            return count;
        }
        else {
            count = this.data.storageMana;
            this.data.storageMana = 0;
            return count;
        }
    }
});