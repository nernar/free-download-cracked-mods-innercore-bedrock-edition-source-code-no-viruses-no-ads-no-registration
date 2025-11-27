IDRegistry.genBlockID("machineManaStorage");
Block.createBlock("machineManaStorage", [{
    name: "Mana Storage", texture: [
        ["altar_top", 0],
        ["altar_top", 0],
        ["mana_storage", 0],
        ["mana_storage", 0],
        ["mana_storage", 0],
        ["mana_storage", 0]
    ], inCreative: true
}], "opaque");

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineManaStorage, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', ItemID.dustMana, -1, 'b', BlockID.runeEmpty, 0]);
});

var UIScreenManaStorage = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Mana Storage") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid_ground", scale: 2.6 },
    ],

    elements: {
        "liquidScale": { type: "scale", x: 350, y: 50, bitmap: "liquid_mana", direction: 1, scale: 2.6 },
        "slotSource": { type: "slot", x: 520, y: 200, size: 85 }
    }
});

TileEntity.registerPrototype(BlockID.machineManaStorage, {
    defaultValues: {
        storageMana: 0
    },
    explode: function () {
        World.destroyBlock(this.x, this.y, this.z, true);
        Level.explode(this.x, this.y, this.z, 1, false);
        Particle.effectExplode(Effect.cloud, this.x, this.y, this.z, 0.5, 100);
    },
    getGuiScreen: function () {
        return UIScreenManaStorage;
    },
    getTransportSlots: function () {
        return { input: ["slotSource"] };
    },
    getManaStorage: function () {
        return 1000;
    },
    tick: function () {
        var energyStorage = this.getManaStorage();
        this.container.setScale("liquidScale", this.data.storageMana / energyStorage);

        let rune0 = World.getBlockID(this.x, this.y + 1, this.z) === BlockID.runeEmpty;
        let rune1 = World.getBlockID(this.x + 1, this.y + 1, this.z) === BlockID.runeMana;
        let rune2 = World.getBlockID(this.x - 1, this.y + 1, this.z) === BlockID.runeMana;
        let rune3 = World.getBlockID(this.x, this.y + 1, this.z + 1) === BlockID.runeMana;
        let rune4 = World.getBlockID(this.x, this.y + 1, this.z - 1) === BlockID.runeMana;

        if (!(rune0 && rune1 && rune2 && rune3 && rune4)) {
            return;
        }

        let tile = World.getTileEntity(this.x, this.y - 2, this.z);
        if (tile && tile.getMana) {
            let energy = this.getManaStorage() - this.data.storageMana;
            if (energy > 0) {
                this.data.storageMana += tile.getMana(energy > 20 ? 20 : energy);
            }
        }
        this.data.storageMana -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotSource"), "Mana", this.data.storageMana, 100, 4);
    }
});