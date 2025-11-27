IDRegistry.genBlockID("brick2");
Block.createBlock("brick2", [{name: "brick", texture: [["brick2", 0]], inCreative: true}]);
Translation.addTranslation("brick", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u0440\u0430\u044f"});
ToolAPI.registerBlockMaterial(BlockID.brick2, "stone", 3, true);
Block.setDestroyTime(BlockID.brick2, 1);
IDRegistry.genBlockID("glass2");
Block.createBlock("glass2", [{name: "glass", texture: [["glass2", 0]], inCreative: true}]);
Translation.addTranslation("glass", {ru: "\u0441\u0442\u0435\u043a\u043b\u043e"});
Block.setDestroyTime(BlockID.glass2, 0.1);
IDRegistry.genBlockID("Breastya");
Block.createBlock("Breastya", [{name: "Breastya", texture: [["Breastya", 1], ["Breastya", 1], ["Breastya", 0]], inCreative: true}]);
Translation.addTranslation("Breastya", {ru: "\u0431\u0440\u0435\u0432\u043d\u043e \u0440\u0430\u044f"});
Block.setDestroyTime(BlockID.Breastya, 1);
Block.setDestroyLevel(BlockID.Breastya, 1);
ToolAPI.registerBlockMaterial(BlockID.Breastya, "plant", 1, true);
IDRegistry.genBlockID("Foliage");
Block.createBlock("Foliage", [{name: "Foliage of paradise", texture: [["Foliage", 0]], inCreative: true}]);
Translation.addTranslation("Foliage of paradise", {ru: "\u043b\u0438\u0441\u0442\u0432\u0430"});
Block.setDestroyTime(BlockID.Foliage, 0.1);
Block.registerDropFunctionForID(BlockID.Foliage, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.sapling, 1, 0]];
});
IDRegistry.genBlockID("sap");
Block.createBlock("sap", [{name: "sapling", texture: [["Sapling", 0]], inCreative: false}]);
TileRenderer.setPlantModel(BlockID.sap, 0, "Sapling2", 0);
Block.setDestroyTime(BlockID.sap, 1);
IDRegistry.genBlockID("board");
Block.createBlock("board", [{name: "board", texture: [["board", 0]], inCreative: true}]);
Translation.addTranslation("board", {ru: "\u0434\u043e\u0441\u043a\u0438 \u0440\u0430\u044f"});
Block.setDestroyTime(BlockID.board, 1);
ToolAPI.registerBlockMaterial(BlockID.board, "plant", 1, true);
Block.setDestroyLevel(BlockID.board, 1);
IDRegistry.genBlockID("a0");
Block.createBlock("a0", [{name: "ggg", texture: [["a", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.a0, 0.1);
IDRegistry.genBlockID("a1");
Block.createBlock("a1", [{name: "ggg", texture: [["a", 1]], inCreative: false}]);
Block.setDestroyTime(BlockID.a1, 0.1);
TileEntity.registerPrototype(BlockID.a0, {defaultValues: {}, tick: function () {
    if (Math.random() * 1000 < 1) {
        World.setBlock(this.x, this.y, this.z, BlockID.a1, 0);
    }
}, click: function (id, count, data, coords) {
}, destroyBlock: function (coords, player) {
}});
Block.setBlockShape(BlockID.a0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8});
Block.setBlockShape(BlockID.a1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8});
TileEntity.registerPrototype(BlockID.a1, {defaultValues: {}, tick: function () {
}, click: function (id, count, data, coords) {
    World.drop(this.x, this.y + 1, this.z, ItemID.Berries, 1, 0);
    World.setBlock(this.x, this.y, this.z, BlockID.a0, 0);
}, destroyBlock: function (coords, player) {
}});
IDRegistry.genBlockID("altar");
Block.createBlock("altar", [{name: "altar", texture: [["stone-1", 0], ["stone-1", 0], ["stone-1", 0]], inCreative: true}]);
Translation.addTranslation("altar", {ru: "\u0430\u043b\u0442\u0430\u0440\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"});
Block.setDestroyTime(BlockID.altar, 1);
ToolAPI.registerBlockMaterial(BlockID.altar, "stone", 1, true);
IDRegistry.genBlockID("altar1");
Block.createBlock("altar1", [{name: "altar", texture: [["rityalBlock", 0], ["rityalBlock", 0], ["rityalBlock", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.altar1, 1);
ToolAPI.registerBlockMaterial(BlockID.altar1, "stone", 1, true);
IDRegistry.genBlockID("altar3");
Block.createBlock("altar3", [{name: "altar", texture: [["rityalBlock", 2], ["rityalBlock", 2], ["rityalBlock", 2]], inCreative: true}]);
Block.setDestroyTime(BlockID.altar3, 1);
ToolAPI.registerBlockMaterial(BlockID.altar3, "stone", 1, true);
IDRegistry.genBlockID("dirt2");
Block.createBlock("dirt2", [{name: "dirt", texture: [["aether_dirt", 0]], inCreative: true}], "opaque");
Translation.addTranslation("dirt", {ru: "\u0437\u0435\u043c\u043b\u044f \u0440\u0430\u044f"});
Block.setDestroyTime(BlockID.dirt2, 1);
ToolAPI.registerBlockMaterial(BlockID.dirt2, "dirt", 1, true);
IDRegistry.genBlockID("stone2");
Block.createBlock("stone2", [{name: "stone", texture: [["holystone", 0]], inCreative: true}], "opaque");
Translation.addTranslation("stone", {ru: "\u043a\u0430\u043c\u0435\u043d\u044c \u0440\u0430\u044f"});
IDRegistry.genBlockID("grass2");
Block.createBlock("grass2", [{name: "grass", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]], inCreative: true}], "opaque");
Translation.addTranslation("grass", {ru: "\u0442\u0440\u0430\u0432\u0430 \u0440\u0430\u044f"});
Block.registerDropFunctionForID(BlockID.grass2, function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.dirt2, 1, 0]];
});
IDRegistry.genBlockID("ore");
Block.createBlock("ore", [{name: "ore", texture: [["ore", 0]], inCreative: true}], "opaque");
Translation.addTranslation("ore", {ru: "\u0440\u0443\u0434\u0430 \u0440\u0430\u044f"});
IDRegistry.genBlockID("blockmetal");
Block.createBlock("blockmetal", [{name: "blockmetal", texture: [["blockmetal", 0]], inCreative: true}], "opaque");
Translation.addTranslation("blockmetal", {ru: "\u0431\u043b\u043e\u043a \u0431\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043b\u0430"});
Block.setDestroyTime(BlockID.blockmetal, 1);
ToolAPI.registerBlockMaterial(BlockID.blockmetal, "stone", 1, true);
IDRegistry.genBlockID("block1");
Block.createBlock("block1", [{name: "block", texture: [["altar", 0]], inCreative: true}], "opaque");
Translation.addTranslation("block", {ru: "\u0431\u043b\u043e\u043a \u0431\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043b\u0430"});
TileEntity.registerPrototype(BlockID.grass2, {defaultValues: {someValue: 0}, tick: function () {
    if (World.getBlockID(this.x, this.y + 1, this.z) << 0) {
        World.setBlock(this.x, this.y, this.z, BlockID.dirt2, 0);
    }
}, click: function (id, count, data, coords) {
}});
TileEntity.registerPrototype(BlockID.dirt2, {defaultValues: {someValue: 0}, tick: function () {
    if (World.getBlockID(this.x + 1, this.y, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y - 1, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y - 1, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y - 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y - 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y - 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y - 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y - 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y - 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y + 1, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y + 1, this.z) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y + 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x - 1, this.y + 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y + 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x + 1, this.y + 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y + 1, this.z - 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
    if (World.getBlockID(this.x, this.y + 1, this.z + 1) == BlockID.grass2) {
        if (Math.random() < 2400) {
            World.setBlock(this.x, this.y, this.z, BlockID.grass2, 0);
        }
    }
}, click: function (id, count, data, coords) {
}});
ToolAPI.registerBlockMaterial(BlockID.stone2, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.ore, "stone", 3, true);
Block.setDestroyTime(BlockID.dirt2, 0.1);
Block.setDestroyTime(BlockID.grass2, 0.1);
Block.setDestroyTime(BlockID.stone2, 2);
Block.setDestroyTime(BlockID.block1, 99999999999);
Block.setDestroyLevel(BlockID.stone2, 1);
Block.setDestroyTime(BlockID.ore, 3);
Block.setDestroyLevel(BlockID.ore, 3);
IDRegistry.genBlockID("kristalFire");
Block.createBlock("kristalFire", [{name: "crictal fire", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
TileRenderer.setPlantModel(BlockID.kristalFire, 0, "crictal", 0);
Block.registerDropFunctionForID(BlockID.kristalFire, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.crystalfire, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalFire, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalFire, "stone", 0.1, true);
IDRegistry.genBlockID("kristaldirt");
Block.createBlock("kristaldirt", [{name: "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
TileRenderer.setPlantModel(BlockID.kristaldirt, 0, "crictal", 2);
Block.registerDropFunctionForID(BlockID.kristaldirt, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.crystalearth, 1, 0]];
});
Block.setDestroyTime(BlockID.kristaldirt, 1);
ToolAPI.registerBlockMaterial(BlockID.kristaldirt, "stone", 0.1, true);
IDRegistry.genBlockID("kristalLight");
Block.createBlock("kristalLight", [{name: "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
TileRenderer.setPlantModel(BlockID.kristalLight, 0, "crictal", 3);
Block.registerDropFunctionForID(BlockID.kristalLight, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.crystalLightning, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalLight, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalLight, "stone", 0.1, true);
IDRegistry.genBlockID("kristalwind");
Block.createBlock("kristalwind", [{name: "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c", texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0]], inCreative: false}]);
TileRenderer.setPlantModel(BlockID.kristalwind, 0, "crictal", 1);
Block.registerDropFunctionForID(BlockID.kristalwind, function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.crystalWind, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalwind, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalwind, "stone", 0.1, true);
IDRegistry.genBlockID("rityal1");
Block.createBlock("rityal1", [{name: "magis altar block", texture: [["nis", 0], ["vverx", 0], ["ctoronS", 0], ["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
Translation.addTranslation("magis altar block", {ru: "\u043c\u0430\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0438\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"});
Block.setDestroyTime(BlockID.rityal1, 1);
ToolAPI.registerBlockMaterial(BlockID.rityal1, "stone", 1, true);
var Render = {setAltarRender: function (blockID, normal) {
    if (normal) {
        let render = new ICRender.Model();
        BlockRenderer.setStaticICRender(blockID, -1, render);
        let model = BlockRenderer.createModel();
        render.addEntry(model);
        model.addBox(0 / 16, 0.88, 0 / 16, 16 / 16, 1, 1 / 16, blockID, 0);
        model.addBox(0 / 16, 0.88, 15 / 16, 16 / 16, 1, 16 / 16, blockID, 0);
        model.addBox(0 / 16, 0.88, 1 / 16, 1 / 16, 1, 15 / 16, blockID, 0);
        model.addBox(15 / 16, 0.88, 1 / 16, 16 / 16, 1, 15 / 16, blockID, 0);
        model.addBox(0 / 16, 0.79, 0 / 16, 16 / 16, 0.88, 16 / 16, blockID, 0);
        model.addBox(3 / 16, 0.21, 3 / 16, 13 / 16, 0.78, 13 / 16, blockID, 0);
        model.addBox(0 / 16, 0, 0 / 16, 16 / 16, 0.2, 16 / 16, blockID, 0);
    }
}, setRackRender: function (blockID, normal) {
    if (normal) {
        let render = new ICRender.Model();
        BlockRenderer.setStaticICRender(blockID, -1, render);
        let model = BlockRenderer.createModel();
        render.addEntry(model);
        model.addBox(0 / 16, 0, 0 / 16, 16 / 16, 0.133, 16 / 16, blockID, 0);
        model.addBox(4 / 16, 0.134, 4 / 16, 12 / 16, 0.246, 12 / 16, blockID, 0);
        model.addBox(10 / 16, 0.247, 10 / 16, 6 / 16, 0.95, 6 / 16, blockID, 0);
        model.addBox(4 / 16, 0.96, 4 / 16, 12 / 16, 1, 12 / 16, blockID, 0);
    }
}, setRitualAltarRender: function (blockID, normal) {
    if (normal) {
        let render = new ICRender.Model();
        BlockRenderer.setStaticICRender(blockID, -1, render);
        let model = BlockRenderer.createModel();
        render.addEntry(model);
        model.addBox(0 / 16, 0, 0 / 16, 16 / 16, 0.2, 16 / 16, blockID, 0);
        model.addBox(4 / 16, 0.21, 4 / 16, 12 / 16, 0.8, 12 / 16, blockID, 0);
        model.addBox(0 / 16, 0.81, 0 / 16, 16 / 16, 1, 16 / 16, blockID, 0);
    }
}, setRitualAltarControllerRender: function (blockID, normal) {
    if (normal) {
        Block.setBlockShape(blockID, {x: 0, y: 0, z: 0}, {x: 1, y: 0.4, z: 1});
    }
}};
Render.setRitualAltarRender(BlockID.rityal1, true);
TileEntity.registerPrototype(BlockID.rityal1, {defaultValues: {item: 0}, init: function () {
    this.animationItem = new Animation.Item(this.x + 0.5, this.y + 1.02, this.z + 0.5);
}, animation: function () {
    var Item = Player.getCarriedItem();
    if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())) {
        this.data.item = Item.id;
        Player.setCarriedItem(Item.id, Item.count - 1, 0);
        this.animationItem.describeItem({id: this.data.item, count: 1, data: 0, size: 0.7, rotation: [3.14 / 2, 0, 0]});
        this.animationItem.load();
    }
}, drop: function () {
    this.animationItem.destroy();
    World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
    this.data.item = 0;
}, tick: function () {
}, click: function () {
    var Item = Player.getCarriedItem();
    if (Item.count > 0) {
        this.animation();
    } else {
        if (Item.count <= 0) {
            this.drop();
        }
    }
}, selfDestroy: function () {
    this.destroy();
}});

