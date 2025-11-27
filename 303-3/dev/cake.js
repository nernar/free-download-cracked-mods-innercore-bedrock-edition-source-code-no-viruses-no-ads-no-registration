var CAKE1 = Block.createSpecialType({base: 92});
var cakeList = {};
var createCake = function (item, pack, name) {
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_0");
    Block.createBlock("coffeeworkshop$" + item + "_0", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_0"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 15 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_1");
    Block.createBlock("coffeeworkshop$" + item + "_1", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_1"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 13 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_2");
    Block.createBlock("coffeeworkshop$" + item + "_2", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2], [pack, 3], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_2"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 11 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_3");
    Block.createBlock("coffeeworkshop$" + item + "_3", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2], [pack, 3], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_3"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 9 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_4");
    Block.createBlock("coffeeworkshop$" + item + "_4", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2], [pack, 3], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_4"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 7 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_5");
    Block.createBlock("coffeeworkshop$" + item + "_5", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2], [pack, 3], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_5"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 5 / 16}, -1);
    IDRegistry.genBlockID("coffeeworkshop$" + item + "_6");
    Block.createBlock("coffeeworkshop$" + item + "_6", [{name: name, texture: [[pack, 0], [pack, 1], [pack, 2], [pack, 3], [pack, 2]], inCreative: false}]);
    Block.setBlockShape(BlockID["coffeeworkshop$" + item + "_6"], {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 0.5, z: 3 / 16}, -1);
    cakeList[ItemID["coffeeworkshop$" + item]] = true;
    Block.registerDropFunction("coffeeworkshop$" + item + "_0", function (c, d, e, a, b) {
        return [[ItemID["coffeeworkshop$" + item], 1, 0]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_1", function (c, d, e, a, b) {
        return [[]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_2", function (c, d, e, a, b) {
        return [[]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_3", function (c, d, e, a, b) {
        return [[]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_4", function (c, d, e, a, b) {
        return [[]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_5", function (c, d, e, a, b) {
        return [[]];
    });
    Block.registerDropFunction("coffeeworkshop$" + item + "_6", function (c, d, e, a, b) {
        return [[]];
    });
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_0"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_1"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_1"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_2"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_2"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_3"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_3"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_4"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_4"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_5"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_5"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, BlockID["coffeeworkshop$" + item + "_6"]);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    TileEntity.registerPrototype(BlockID["coffeeworkshop$" + item + "_6"], {tick: function () {
        if (!World.getBlockID(this.x, this.y - 1, this.z)) {
            World.destroyBlock(this.x, this.y, this.z, true);
            this.selfDestroy();
        }
    }, click: function (id, count, data) {
        if (Player.getHunger() < 20) {
            Game.prevent();
            this.selfDestroy();
            World.setBlock(this.x, this.y, this.z, 0);
            World.addTileEntity(this.x, this.y, this.z);
            Player.setHunger(Player.getHunger() + 1);
        }
    }});
    Item.registerUseFunction(ItemID["coffeeworkshop$" + item], function (coords, i, tile) {
        var place = coords.relative;
        var tile1 = World.getBlock(place.x, place.y, place.z);
        var tile2 = World.getBlock(place.x, place.y - 1, place.z);
        if (World.getBlockID(place.x, place.y, place.z) === 0) {
            if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id) {
                World.setBlock(place.x, place.y, place.z, BlockID["coffeeworkshop$" + item + "_0"]);
                World.addTileEntity(place.x, place.y, place.z);
                Player.setCarriedItem(i.id, i.count - 1, i.data);
            }
        }
    });
};
createCake("Cakecarrot", "cake_carrot", "\u80e1\u841d\u535c\u86cb\u7cd5");
createCake("Cakecheese", "cake_cheese", "\u829d\u58eb\u86cb\u7cd5");
createCake("Cakeredvelvet", "cake_redvelvet", "\u7ea2\u4e1d\u7ed2\u86cb\u7cd5");
createCake("Cakeschwarzwald", "cake_schwarzwald", "\u9ed1\u68ee\u6797\u86cb\u7cd5");
createCake("Cakesponge", "cake_sponge", "\u6d77\u7ef5\u86cb\u7cd5");
createCake("Cakespongechocolate", "cake_sponge_chocolate", "\u5de7\u514b\u529b\u6d77\u7ef5\u86cb\u7cd5");
createCake("tiramisu", "tiramisu", "\u63d0\u62c9\u7c73\u82cf");

