IDRegistry.genBlockID("coffeeworkshop$Betree");
Block.createBlock("coffeeworkshop$Betree", [{name: "\u84dd\u8393\u704c\u6728", texture: [["oak", 1], ["bl", 0]], inCreative: true}]);
IDRegistry.genBlockID("coffeeworkshop$Betree1");
Block.createBlock("coffeeworkshop$Betree1", [{name: "\u84dd\u8393\u704c\u67281", texture: [["oak", 1], ["bl1", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.coffeeworkshop$Betree, {x: 2.16 / 16, y: 0, z: 2.16 / 16}, {x: 13.84 / 16, y: 13.84 / 16, z: 13.84 / 16});
Block.setBlockShape(BlockID.coffeeworkshop$Betree1, {x: 2.16 / 16, y: 0, z: 2.16 / 16}, {x: 13.84 / 16, y: 13.84 / 16, z: 13.84 / 16});
function berry(id) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createModel();
    model.addBox(2.16 / 16, 2.16 / 16, 2.16 / 16, 13.84 / 16, 13.84 / 16, 13.84 / 16, [["bl", 0], ["bl", 0], ["bl", 0], ["bl", 0], ["bl", 0], ["bl", 0]]);
    model.addBox(6 / 16, 0, 6 / 16, 10 / 16, 4 / 16, 10 / 16, [["ok", 1], ["ok", 1], ["ok", 0], ["ok", 0], ["ok", 0], ["ok", 0]]);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(id, -1, render);
}
function berry1(id) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createTexturedBox(2.16 / 16, 2.16 / 16, 2.16 / 16, 13.84 / 16, 13.84 / 16, 13.84 / 16, [["bl1", 0], ["bl1", 0], ["bl1", 0], ["bl1", 0], ["bl1", 0], ["bl1", 0]]);
    var model1 = BlockRenderer.createTexturedBox(6 / 16, 0, 6 / 16, 10 / 16, 4 / 16, 10 / 16, [["ok", 1], ["ok", 1], ["ok", 0], ["ok", 0], ["ok", 0], ["ok", 0]]);
    render.addEntry(model);
    render.addEntry(model1);
    BlockRenderer.setStaticICRender(id, -1, render);
}
function berry2(id, bl) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createTexturedBox(6 / 16, 2 / 16, 6 / 16, 10 / 16, 6 / 16, 10 / 16, [[bl, 0], [bl, 0], [bl, 1]]);
    var model1 = BlockRenderer.createTexturedBox(7 / 16, 0, 7 / 16, 9 / 16, 4 / 16, 9 / 16, [["ok2", 1], ["ok2", 1], ["ok2", 0], ["ok2", 0], ["ok2", 0], ["ok2", 0]]);
    render.addEntry(model);
    render.addEntry(model1);
    BlockRenderer.setStaticICRender(id, -1, render);
}
function berry3(id, bl) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createTexturedBox(4 / 16, 4 / 16, 4 / 16, 12 / 16, 12 / 16, 12 / 16, [[bl, 0][bl, 0], [bl, 1]]);
    var model1 = BlockRenderer.createTexturedBox(6 / 16, 0, 6 / 16, 10 / 16, 4 / 16, 10 / 16, [["ok", 1], ["ok", 1], ["ok", 0], ["ok", 0], ["ok", 0], ["ok", 0]]);
    render.addEntry(model);
    render.addEntry(model1);
    BlockRenderer.setStaticICRender(id, -1, render);
}
berry(BlockID.coffeeworkshop$Betree);
berry1(BlockID.coffeeworkshop$Betree1);
IDRegistry.genBlockID("coffeeworkshop$Betree2");
Block.createBlock("coffeeworkshop$Betree2", [{name: "\u84dd\u8393\u704c\u67282", texture: [["oak", 1], ["bl4", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.coffeeworkshop$Betree2, {x: 6 / 16, y: 0, z: 6 / 16}, {x: 10 / 16, y: 6 / 16, z: 10 / 16});
berry2(BlockID.coffeeworkshop$Betree2, "bl4");
IDRegistry.genBlockID("coffeeworkshop$Betree3");
Block.createBlock("coffeeworkshop$Betree3", [{name: "\u84dd\u8393\u704c\u67283", texture: [["oak", 1], ["bl3", 0], ["bl3", 1]], inCreative: true}]);
Block.setBlockShape(BlockID.coffeeworkshop$Betree3, {x: 4 / 16, y: 0, z: 4 / 16}, {x: 12 / 16, y: 12 / 16, z: 12 / 16});
berry3(BlockID.coffeeworkshop$Betree3, "bl3");
Block.registerDropFunction("coffeeworkshop$Betree1", function (c, d, e, a, b) {
    return [[ItemID.blueberry, 1, 0]];
});
Block.registerDropFunction("coffeeworkshop$Betree", function (c, d, e, a, b) {
    return [[]];
});
Block.registerDropFunction("coffeeworkshop$Betree2", function (c, d, e, a, b) {
    return [[]];
});
Block.registerDropFunction("coffeeworkshop$Betree3", function (c, d, e, a, b) {
    return [[]];
});
IDRegistry.genItemID("blueberry");
Item.createItem("blueberry", "\u84dd\u8393", {name: "blueberry"}, {inTech: true, stack: 64});
Item.registerUseFunction("blueberry", function (coords, item, tile) {
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    if (GenerationUtils.isTransparentBlock(tile1.id) && GROUND_TILES[tile2.id]) {
        World.setBlock(place.x, place.y, place.z, BlockID.coffeeworkshop$Betree2);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
TileEntity.registerPrototype(BlockID.coffeeworkshop$Betree2, {tick: function () {
    if (!GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]) {
        World.destroyBlock(this.x, this.y, this.z, true);
        this.selfDestroy();
    }
}, checkFarmland: function () {
    if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
    } else {
        return true;
    }
}, click: function (id, count, data) {
    if (id == 351 && data == 15) {
        Game.prevent();
        this.selfDestroy();
        World.setBlock(this.x, this.y, this.z, BlockID.coffeeworkshop$Betree3);
        World.addTileEntity(this.x, this.y, this.z);
        Debug.addParticle(this.x, this.y, this.z, 31, 1, 1, 1);
        Player.setCarriedItem(id, count - 1, data);
    }
}});
TileEntity.registerPrototype(BlockID.coffeeworkshop$Betree, {tick: function () {
    if (!GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]) {
        World.destroyBlock(this.x, this.y, this.z, false);
        this.selfDestroy();
    }
}, checkFarmland: function () {
    if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
    } else {
        return true;
    }
}, click: function (id, count, data) {
    if (id == 351 && data == 15) {
        Game.prevent();
        this.selfDestroy();
        World.setBlock(this.x, this.y, this.z, BlockID.coffeeworkshop$Betree1);
        World.addTileEntity(this.x, this.y, this.z);
        Debug.addParticle(this.x, this.y, this.z, 31, 1, 1, 1);
        Player.setCarriedItem(id, count - 1, data);
    }
}});
TileEntity.registerPrototype(BlockID.coffeeworkshop$Betree1, {tick: function () {
    if (!GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]) {
        World.destroyBlock(this.x, this.y, this.z, true);
        this.selfDestroy();
    }
}, checkFarmland: function () {
    if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
    } else {
        return true;
    }
}, click: function (id, count, data) {
    Game.prevent();
    World.drop(this.x, this.y, this.z, ItemID.blueberry, 1);
    this.selfDestroy();
    World.setBlock(this.x, this.y, this.z, BlockID.coffeeworkshop$Betree);
    World.addTileEntity(this.x, this.y, this.z);
    Debug.addParticle(this.x, this.y, this.z, 31, 1, 1, 1);
}});
TileEntity.registerPrototype(BlockID.coffeeworkshop$Betree3, {tick: function (id, count, data) {
    if (!GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]) {
        World.destroyBlock(this.x, this.y, this.z, true);
        this.selfDestroy();
    }
}, click: function (id, count, data) {
    if (id == 351 && data == 15) {
        Game.prevent();
        this.selfDestroy();
        World.setBlock(this.x, this.y, this.z, BlockID.coffeeworkshop$Betree);
        World.addTileEntity(this.x, this.y, this.z);
        Debug.addParticle(this.x, this.y, this.z, 31, 1, 1, 1);
        Player.setCarriedItem(id, count - 1, data);
    }
}});
Block.setRandomTickCallback(BlockID.coffeeworkshop$Betree3, function (x, y, z, id, data) {
    var a = Math.random();
    if (a < 0.3) {
        World.removeTileEntity(x, y, z);
        World.setBlock(x, y, z, BlockID.coffeeworkshop$Betree);
        World.addTileEntity(x, y, z);
    }
});
Block.setRandomTickCallback(BlockID.coffeeworkshop$Betree, function (x, y, z, id, data) {
    var a = Math.random();
    if (a < 0.3) {
        World.removeTileEntity(x, y, z);
        World.setBlock(x, y, z, BlockID.coffeeworkshop$Betree1);
        World.addTileEntity(x, y, z);
    }
});
Block.setRandomTickCallback(BlockID.coffeeworkshop$Betree2, function (x, y, z, id, data) {
    var a = Math.random();
    if (a < 0.3) {
        World.removeTileEntity(x, y, z);
        World.setBlock(x, y, z, BlockID.coffeeworkshop$Betree3);
        World.addTileEntity(x, y, z);
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    if (Math.random() < 0.04) {
        for (var i = 0; i < 1 + Math.random() * 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            if (World.getBlockID(coords.x, coords.y, coords.z) == 2) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.coffeeworkshop$Betree1);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
            }
        }
    }
});

