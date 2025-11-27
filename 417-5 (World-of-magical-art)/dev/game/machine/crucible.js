IDRegistry.genBlockID("machineAlchemicalCrucible");
Block.createBlock("machineAlchemicalCrucible", [
    {
        name: "Alchemical Crucible", texture: [
            ["crucible_bottom", 0],
            ["crucible_top", 0],
            ["crucible_side", 0],
            ["crucible_side", 0],
            ["crucible_side", 0],
            ["crucible_side", 0]
        ], inCreative: true
    }
]);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.machineAlchemicalCrucible, count: 1, data: 0 }, [
        "b#b",
        "bcb",
        "aaa"
    ], ['a', 331, -1, 'b', 265, 0, 'c', 380, 0]);
});

var machineAlchemicalCrucibleRender = {
    water: null,
    lava: null
};

(function () {
    try {
        var render = Geometry.createSimpleStaticBlockRender("geometry.crucible");
        if (render) {
            var visual_model = render.visualRender;
        }
        BlockRenderer.setStaticICRender(BlockID.machineAlchemicalCrucible, -1, visual_model);
        BlockRenderer.enableCoordMapping(BlockID.machineAlchemicalCrucible, -1, visual_model);

        machineAlchemicalCrucibleRender.water = Geometry.createSimpleStaticBlockRender("geometry.crucible_water").visualRender;
        machineAlchemicalCrucibleRender.lava = Geometry.createSimpleStaticBlockRender("geometry.crucible_lava").visualRender;

    } catch (exception) {
        alert(exception);
    }
})();

var UIScreenAlchemicalCrucible = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Alchemical Crucible") } },
        inventory: { standart: true },
        background: { standart: true }
    },

    drawing: [
        { type: "bitmap", x: 530, y: 79, bitmap: "arrow_bar_background", scale: 3.3 },
        { type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: 3.3 }
    ],

    elements: {
        "progressScale": { type: "scale", x: 530, y: 79, direction: 0, value: 0.5, bitmap: "arrow_bar_scale", scale: 3.3 },
        "burningScale": { type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.3 },
        "slotSource": { type: "slot", x: 441, y: 79 },
        "slotResult": { type: "slot", x: 625, y: 79, isValid: function () { return false; } }
    }
});

TileEntity.registerPrototype(BlockID.machineAlchemicalCrucible, {
    defaultValues: {
        liquidTemperature: 0,
        liquidCurrent: null,
        recipeProgress: 0
    },
    init: function () {
        this.data.liquidCurrent === "water" ? BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender.water) : null;
        this.data.liquidCurrent === "lava" ? BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender.lava) : null;
    },
    explode: function () {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        World.destroyBlock(this.x, this.y, this.z, true);
        Level.explode(this.x, this.y, this.z, 1, false);
        Particle.effectExplode(Effect.cloud, this.x, this.y, this.z, 0.5, 100);
    },
    clearData: function () {
        this.data.liquidCurrent = null;
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    },
    setLiquid: function (identifier) {
        this.data.liquidCurrent = identifier;
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, machineAlchemicalCrucibleRender[identifier]);
    },
    trySetLiquid: function (identifier) {
        if ((identifier === "lava" && this.data.liquidCurrent === "water") || (identifier === "water" && this.data.liquidCurrent === "lava")) {
            this.explode();
            return true;
        }
        else if (identifier !== this.data.liquidCurrent) {
            this.setLiquid(identifier);
            return true;
        }
        else {
            return false;
        }
    },
    fillLiquid: function (id, count, data) {
        if (id === 325 && data === 8) {
            if (this.trySetLiquid("water")){
                Player.setCarriedItem(id, 1, 0);
                return true;
            }
        }
        else if (id === 325 && data === 10) {
            if (this.trySetLiquid("lava")) {
                Player.setCarriedItem(id, 1, 0);
                return true;
            }
        }
        return false;
    },
    getLiquid: function (id, count, data) {
        if (id === 325 && data === 0) {
            if (this.data.liquidCurrent === "water") {
                Player.setCarriedItem(id, count - 1, data);
                World.drop(this.x, this.y + 0.5, this.z, 325, 1, 8);
                this.clearData();
                return true;
            }
            else if (this.data.liquidCurrent === "lava") {
                Player.setCarriedItem(id, count - 1, data);
                World.drop(this.x, this.y + 0.5, this.z, 325, 1, 10);
                this.clearData();
                return true;
            }
        }
        return false;
    },
    click: function (id, count, data, coords) {
        if (this.getLiquid(id, count, data) || this.fillLiquid(id, count, data)) {
            Game.prevent();
        }
    },
    getGuiScreen: function () {
        return UIScreenAlchemicalCrucible;
    },
    getTransportSlots: function () {
        return { input: ["slotSource"], output: ["slotResult"] };
    },

    tick: function () {
        let block = World.getBlock(this.x, this.y - 1, this.z);
        if (block.id === 10 || block.id === 11 || block.id === 51) {
            if (this.data.liquidCurrent === "water") {
                this.data.liquidTemperature <= 100 ? this.data.liquidTemperature += 1 : null;
            }
            else {
                this.data.liquidTemperature = 0;
            }
        }
        else {
            this.data.liquidCurrent === "water" && this.data.liquidTemperature >= 1 ? this.data.liquidTemperature -= 1 : this.data.liquidTemperature = 0;
        }
        if (this.data.liquidTemperature >= 100) {
            let rndx = Math.random() * 0.4 - 0.2;
            let rndz = Math.random() * 0.4 - 0.2;

            particle.emit(Effect.bubble, 0, this.x + 0.5 + rndx, this.y + 0.9, this.z + 0.5 + rndz, 0, 0.01, 0);
        }

        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipe.getAlchemicalCrucibleRecipe(sourceSlot);

        if (this.data.liquidTemperature >= 100 && result) {
            var resultSlot = this.container.getSlot("slotResult");
            if ((resultSlot.id === result.id && resultSlot.data === result.data && resultSlot.count < 64 || resultSlot.id === 0) && this.data.recipeProgress++ >= 160) {
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.recipeProgress = 0;
            }
        }
        else {
            this.data.recipeProgress = 0;
        }

        this.container.setScale("burningScale", this.data.liquidTemperature / 100);
        this.container.setScale("progressScale", this.data.recipeProgress / 160);
    }
});