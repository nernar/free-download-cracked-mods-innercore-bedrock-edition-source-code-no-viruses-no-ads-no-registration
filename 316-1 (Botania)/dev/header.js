importLib("ToolType", "*");
function setItemPlace(block, item) {
    Block.registerDropFunctionForID(block, function () {
        return [[item, 1, 0]];
    });
    Item.registerUseFunctionForID(item, function (coords, item, tile) {
        var place = coords.relative;
        var tile1 = World.getBlock(place.x, place.y, place.z);
        var tile2 = World.getBlock(place.x, place.y - 1, place.z);
        if (GenerationUtils.isTransparentBlock(tile1.id)) {
            World.setBlock(place.x, place.y, place.z, block);
            World.addTileEntity(place.x, place.y, place.z);
            Player.setCarriedItem(item.id, item.count - 1, item.data);
        }
    });
}
function setBasicFlower(flowerItem, flowerBlock) {
    setItemPlace(flowerBlock, flowerItem);
    TileEntity.registerPrototype(flowerBlock, {defaultValues: {}, initAnimation: function () {
        this.animation1 = new Animation.Item(this.x + 0.5, this.y + 0.3, this.z + 0.5);
        this.animation2 = new Animation.Item(this.x + 0.5, this.y + 0.3, this.z + 0.5);
        this.animation1.describeItem({id: flowerItem, count: 1, data: 0, rotation: "x", size: 0.6});
        this.animation1.load();
        this.animation2.describeItem({id: flowerItem, count: 1, data: 0, rotation: "z", size: 0.6});
        this.animation2.load();
    }, destroyAnimation: function () {
        if (this.animation1) {
            this.animation1.destroy();
        }
        if (this.animation2) {
            this.animation2.destroy();
        }
    }, updateAnimation: function () {
        this.destroyAnimation();
        this.initAnimation();
    }, init: function () {
        this.initAnimation();
    }, destroy: function () {
        this.destroyAnimation();
        World.destroyBlock(this.x, this.y, this.z, false);
    }, tick: function () {
        if (!this.animation1) {
            this.initAnimation;
        }
        if (!this.animation2) {
            this.initAnimation;
        }
        if (World.getBlockID(this.x, this.y - 1, this.z) == 0) {
            this.destroy();
        }
    }, click: function (id, count, data, coords) {
    }});
}
function addFlowerGeneration(block, cccount, chance) {
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
        var ccount = Random(cccount.min, cccount.max);
        if (chance > Math.random()) {
            for (var i = 0; i < ccount; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
                coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                if (World.getBlockID(coords.x, coords.y, coords.z) == 2) {
                    coords.y++;
                    World.setBlock(coords.x, coords.y, coords.z, block, 0);
                    World.addTileEntity(coords.x, coords.y, coords.z);
                }
            }
        }
    });
}
function Random(min, max) {
    var ggg = max - min;
    var fff = Math.round(Math.random() * ggg);
    var result = min + fff;
    return result;
}
function createFlower(id, name) {
    IDRegistry.genItemID(id);
    Item.createItem(id, name.en, {name: id});
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [{name: id, texture: [["flower", 0]], inCreative: false}]);
    if (name.ru) {
        Translation.addTranslation(name.en, {ru: name.ru});
    }
    Block.setBlockShape(BlockID[id], {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
    setItemPlace(BlockID[id], ItemID[id]);
}
function makeFlower(id, obj, gui) {
    TileEntity.registerPrototype(BlockID[id], {defaultValues: obj.defaultValues, initAnimation: function () {
        this.animation1 = new Animation.Item(this.x + 0.5, this.y + 0.3, this.z + 0.5);
        this.animation2 = new Animation.Item(this.x + 0.5, this.y + 0.3, this.z + 0.5);
        this.animation1.describeItem({id: ItemID[id], count: 1, data: 0, rotation: "x", size: 0.6});
        this.animation1.load();
        this.animation2.describeItem({id: ItemID[id], count: 1, data: 0, rotation: "z", size: 0.6});
        this.animation2.load();
    }, getGuiScreen: function () {
        return gui;
    }, destroyAnimation: function () {
        if (this.animation1) {
            this.animation1.destroy();
        }
        if (this.animation2) {
            this.animation2.destroy();
        }
    }, updateAnimation: function () {
        this.destroyAnimation();
        this.initAnimation();
    }, init: function () {
        this.initAnimation();
    }, destroy: function () {
        this.destroyAnimation();
        World.destroyBlock(this.x, this.y, this.z, false);
    }, tick: obj.tick, click: obj.click});
}

