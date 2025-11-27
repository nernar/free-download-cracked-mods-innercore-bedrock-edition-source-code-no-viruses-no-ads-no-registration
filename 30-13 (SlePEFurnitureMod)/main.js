var FurnitureCore = {};
FurnitureCore.addItemBlock = function (itemStringId, blockStringId, func) {
    Item.registerUseFunction(itemStringId, function (coords, item, block) {
        if (World.getBlockID(coords.relative.x, coords.relative.y, coords.relative.z))
            return;
        World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID[blockStringId], 0);
        if (!Game.getGameMode())
            Player.decreaseCarriedItem(1);
        if (func)
            func(coords, item, block);
    });
    Block.registerDropFunction(blockStringId, function (coords, id, data, diggingLevel, toolLevel) {
        return [[ItemID[itemStringId], 1, 0]];
    });
};
FurnitureCore.addRenderedBlock = function (blockStringId, itemStringId, model, func) {
    var render = new ICRender.Model();
    var modelIC = BlockRenderer.createModel();
    if (model.compile)
        model.compile(modelIC);
    else
        modelIC = model;
    render.addEntry(modelIC);
    BlockRenderer.setStaticICRender(BlockID[blockStringId], 0, render);
    FurnitureCore.addItemBlock(itemStringId, blockStringId, func);
};
FurnitureCore.addRotatableBlock = function (blockStringId, itemStringId, model, func) {
    var renders = [];
    for (var i_1 = 0; i_1 < 4; i_1++)
        renders.push(new ICRender.Model());
    var models = [];
    for (var i_2 = 0; i_2 < 4; i_2++)
        models.push(BlockRenderer.createModel());
    for (var i_3 = 0; i_3 < 4; i_3++) {
        model.compile(models[i_3]);
        renders[i_3].addEntry(models[i_3]);
        model.rotateY(-Math.PI / 2);
        BlockRenderer.setStaticICRender(BlockID[blockStringId], i_3, renders[i_3]);
    }
    func = func || function () { };
    var funcNew = function (coords, item, block) {
        var look = Entity.getLookVector(Player.get());
        var angle = (Math.acos(look.z / Math.sqrt(look.x * look.x + look.z * look.z)) *
            sign(look.x) + Math.PI * 2.25) % (Math.PI * 2);
        var orientation = Math.floor(angle * 2 / Math.PI);
        World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID[blockStringId], orientation);
        func(coords, item, block, orientation);
    };
    FurnitureCore.addItemBlock(itemStringId, blockStringId, funcNew);
};
FurnitureCore.addRotatableEntity = function (blockStringId, itemStringId, model, func) {
    func = func || function () { };
    var f = function (c, i, b, o) {
        World.addTileEntity(c.relative.x, c.relative.y, c.relative.z).data.orientation = o;
        func(c, i, b, o);
    };
    FurnitureCore.addRotatableBlock(blockStringId, itemStringId, model, f);
};
FurnitureCore.addRenderedEntity = function (blockStringId, itemStringId, model, func) {
    func = func || function () { };
    var f = function (c, i, b) {
        World.addTileEntity(c.relative.x, c.relative.y, c.relative.z);
        func(c, i, b);
    };
    FurnitureCore.addRenderedBlock(blockStringId, itemStringId, model, f);
};
var ItemAnimation = {
    DEFAULT_ANIMATION_SIZE: .3,
    createAnimation: function (position, item, size, rotation) {
        var animation = new Animation.Item(position.x, position.y, position.z);
        animation = this.describeItem(animation, item, size, rotation);
        return animation;
    },
    describeItem: function (animation, item, size, rotation) {
        if (item.id) {
            animation.describeItem({
                id: item.id,
                count: item.count,
                data: item.data,
                size: size ? size : this.DEFAULT_ANIMATION_SIZE,
                rotation: rotation != null ? rotation : [0, 0, 0]
            });
            if (!animation.isLoaded) {
                animation.load();
            }
        }
        return animation;
    }
};
var BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({
    base: 5,
    lightlevel: 15
});
var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 5,
});
var BLOCK_TYPE_FIREPLACE = Block.createSpecialType({
    base: 1,
    renderallfaces: true,
    lightlevel: 15
});
function createFurnitureWood(stringId, textureItem, textureBlock, textureIndex, itemName, itemId, blockId, itemIndex) {
    IDRegistry.genBlockID(stringId);
    Block.createBlock(stringId, [
        {
            name: itemName,
            texture: [[textureBlock, textureIndex]],
            inCreative: false
        }
    ], BLOCK_TYPE_WOOD);
    IDRegistry.genItemID(stringId);
    Item.createItem(stringId, itemName, {
        name: textureItem,
        meta: itemIndex
    }, {});
    FurnitureCore.addItemBlock(stringId, stringId);
}
function createFurnitureLight(stringId, textureItem, textureBlock, textureIndex, itemName, itemId, blockId) {
    IDRegistry.genBlockID(stringId);
    Block.createBlock(stringId, [
        {
            name: itemName,
            texture: [[textureBlock, textureIndex]],
            inCreative: false
        }
    ], BLOCK_TYPE_LIGHT);
    IDRegistry.genItemID(stringId);
    Item.createItem(stringId, itemName, {
        name: textureItem,
        meta: 0
    }, {});
    Block.registerDropFunction(stringId, function (coords, id, data, diggingLevel, toolLevel) {
        return [[itemId, 1, 0]];
    });
}
function createFurnitureStone(stringId, textureItem, textureBlock, textureIndex, itemName, itemId, blockId, itemIndex) {
    IDRegistry.genBlockID(stringId);
    Block.createBlock(stringId, [
        {
            name: itemName,
            texture: [[textureBlock, textureIndex]],
            inCreative: false
        }
    ], BLOCK_TYPE_STONE);
    IDRegistry.genItemID(stringId);
    Item.createItem(stringId, itemName, {
        name: textureItem,
        meta: itemIndex
    }, {});
    FurnitureCore.addItemBlock(stringId, stringId);
}
function createFurnitureStoneRotation(stringId, textureItem, textureBlock, textureIndex, itemName, itemId, blockId) {
    IDRegistry.genBlockID(stringId);
    Block.createBlockWithRotation(stringId, [
        {
            name: itemName,
            texture: [[textureBlock, textureIndex]],
            inCreative: false
        }
    ], BLOCK_TYPE_STONE);
    IDRegistry.genItemID(stringId);
    Item.createItem(stringId, itemName, {
        name: textureItem,
        meta: 0
    }, {});
    FurnitureCore.addItemBlock(stringId, stringId);
}
var Furniture = {
    replacementItemList: [],
    addReplacementItem: function (i, b, f, f2) {
        i.data = i.data || 0;
        b.data = b.data || 0;
        f = f || function () { };
        f2 = f2 || function () { };
        var bid = eval("BlockID." + b.id);
        var iid = eval("ItemID." + i.id);
        this.replacementItemList.push({
            item: {
                id: iid,
                data: i.data
            },
            block: {
                data: b.data,
                id: bid
            }
        });
        Block.registerDropFunction(b.id, function (coords, id, data, diggingLevel, toolLevel) {
            f2(coords);
            return [[iid, 1, 0]];
        });
        Item.registerUseFunction(i.id, function (coords, item, block) {
            World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, bid);
            Player.decreaseCarriedItem(1);
            f(coords.relative, item, block);
        });
    },
    isReplacementItem: function (id, data) {
        data = data || 0;
        for (var i in this.replacementItemList) {
            if (this.replacementItemList[i].item.id == id && this.replacementItemList[i].item.data == data)
                return {
                    id: this.replacementItemList[i].block.id,
                    data: this.replacementItemList[i].block.data
                };
        }
        return false;
    },
    placeRotatableBlock: function (block, model) {
        var r0 = new ICRender.Model();
        var r1 = new ICRender.Model();
        var r2 = new ICRender.Model();
        var r3 = new ICRender.Model();
        var m0 = BlockRenderer.createModel();
        var m1 = BlockRenderer.createModel();
        var m2 = BlockRenderer.createModel();
        var m3 = BlockRenderer.createModel();
        model.compile(m0);
        model.rotation("all", "y", 90, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m1);
        model.rotation("all", "y", 180, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m2);
        model.rotation("all", "y", 90, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m3);
        r0.addEntry(m0);
        r1.addEntry(m1);
        r2.addEntry(m2);
        r3.addEntry(m3);
        BlockRenderer.setStaticICRender(block, 0, r1);
        BlockRenderer.setStaticICRender(block, 1, r2);
        BlockRenderer.setStaticICRender(block, 2, r3);
        BlockRenderer.setStaticICRender(block, 3, r0);
        var f = function (c, i, b) {
            var look = Entity.getLookVector(Player.get());
            var data = 3;
            if (look.x > .75)
                data = 0;
            else if (look.x < -.75)
                data = 1;
            else if (look.z > .75)
                data = 2;
            World.setBlock(c.x, c.y, c.z, block, data);
        };
        return f;
    },
    placeRotatableEntity: function (id, model) {
        var r0 = new ICRender.Model();
        var r1 = new ICRender.Model();
        var r2 = new ICRender.Model();
        var r3 = new ICRender.Model();
        var m0 = BlockRenderer.createModel();
        var m1 = BlockRenderer.createModel();
        var m2 = BlockRenderer.createModel();
        var m3 = BlockRenderer.createModel();
        model.compile(m0);
        model.rotation("all", "y", 90, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m1);
        model.rotation("all", "y", 180, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m2);
        model.rotation("all", "y", 90, {
            x: .5,
            y: .5,
            z: .5
        });
        model.compile(m3);
        r0.addEntry(m0);
        r1.addEntry(m1);
        r2.addEntry(m2);
        r3.addEntry(m3);
        BlockRenderer.enableCoordMapping(id, -1, r0);
        var ren = [r1, r2, r3, r0];
        var renders = ren;
        var f = function (c, i, b) {
            var look = Entity.getLookVector(Player.get());
            if (look.x > .75) {
                World.addTileEntity(c.x, c.y, c.z);
                World.getTileEntity(c.x, c.y, c.z).data.render = 0;
                World.getTileEntity(c.x, c.y, c.z).init();
            }
            else if (look.x < -.75) {
                World.addTileEntity(c.x, c.y, c.z);
                World.getTileEntity(c.x, c.y, c.z).data.render = 1;
                World.getTileEntity(c.x, c.y, c.z).init();
            }
            else if (look.z > .75) {
                World.addTileEntity(c.x, c.y, c.z);
                World.getTileEntity(c.x, c.y, c.z).data.render = 2;
                World.getTileEntity(c.x, c.y, c.z).init();
            }
            else {
                World.addTileEntity(c.x, c.y, c.z);
                World.getTileEntity(c.x, c.y, c.z).data.render = 3;
                World.getTileEntity(c.x, c.y, c.z).init();
            }
        };
        return {
            f: f,
            render: renders
        };
    },
    furnitureUIDs: [],
    registeredRenders: [],
    registerRendersForFurnitureBlock: function (fid, id, renders, fobj, rot) {
        fobj = fobj || {};
        Block.registerDropFunction(fid, function (coords, id, data, diggingLevel, toolLevel) {
            var uid;
            for (var i in Furniture.furnitureUIDs) {
                var c = coords;
                var x = Furniture.furnitureUIDs[i].x;
                var y = Furniture.furnitureUIDs[i].y;
                var z = Furniture.furnitureUIDs[i].z;
                if (c.x == x && c.y == y && c.z == z) {
                    uid = Furniture.furnitureUIDs[i].uid;
                    Furniture.furnitureUIDs.splice(i, 1);
                }
            }
            var fDestroy = Furniture.registeredRenders[uid].funcs.destroy || function () { };
            fDestroy(coords, id, data, diggingLevel, toolLevel);
            if (uid >= 0)
                return [[Furniture.registeredRenders[uid].id, 1, 0]];
            if (uid == -1)
                return [];
        });
        Item.registerUseFunction(id, function (coords, item, block) {
            Player.decreaseCarriedItem(1);
            var uid = Furniture.getUID(item.id);
            var look = Entity.getLookVector(Player.get());
            var c = coords.relative;
            if (!Furniture.registeredRenders[uid].rot) {
                if (look.x > .75) {
                    World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
                    World.addTileEntity(c.x, c.y, c.z);
                    World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
                    World.getTileEntity(c.x, c.y, c.z).data.render = 0;
                    World.getTileEntity(c.x, c.y, c.z).data.orientation = 0;
                    World.getTileEntity(c.x, c.y, c.z).init(true);
                }
                else if (look.x < -.75) {
                    World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
                    World.addTileEntity(c.x, c.y, c.z);
                    World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
                    World.getTileEntity(c.x, c.y, c.z).data.render = 1;
                    World.getTileEntity(c.x, c.y, c.z).data.orientation = 2;
                    World.getTileEntity(c.x, c.y, c.z).init(true);
                }
                else if (look.z > .75) {
                    World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
                    World.addTileEntity(c.x, c.y, c.z);
                    World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
                    World.getTileEntity(c.x, c.y, c.z).data.orientation = 1;
                    World.getTileEntity(c.x, c.y, c.z).data.render = 2;
                    World.getTileEntity(c.x, c.y, c.z).init(true);
                }
                else {
                    World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
                    World.addTileEntity(c.x, c.y, c.z);
                    World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
                    World.getTileEntity(c.x, c.y, c.z).data.render = 3;
                    World.getTileEntity(c.x, c.y, c.z).data.orientation = 3;
                    World.getTileEntity(c.x, c.y, c.z).init(true);
                }
            }
            else {
                World.setBlock(c.x, c.y, c.z, Furniture.registeredRenders[uid].furnitureId);
                World.addTileEntity(c.x, c.y, c.z);
                World.getTileEntity(c.x, c.y, c.z).data.uid = uid;
                World.getTileEntity(c.x, c.y, c.z).data.render = 0;
                World.getTileEntity(c.x, c.y, c.z).init(true);
            }
            var fClick = Furniture.registeredRenders[uid].funcs.click || function () { };
            fClick(coords.relative, item, block);
        });
        this.registeredRenders.push({
            id: id,
            furnitureId: fid,
            renders: renders,
            funcs: fobj,
            rot: rot
        });
    },
    getUID: function (id) {
        for (var i in this.registeredRenders) {
            if (this.registeredRenders[i].id == id)
                return i;
        }
        return -1;
    },
    placeUnifiedEntity: function (fuid, id, model, fobj, rotPrevent) {
        rotPrevent = rotPrevent || false;
        if (!rotPrevent) {
            var r0 = new ICRender.Model();
            var r1 = new ICRender.Model();
            var r2 = new ICRender.Model();
            var r3 = new ICRender.Model();
            var m0 = BlockRenderer.createModel();
            var m1 = BlockRenderer.createModel();
            var m2 = BlockRenderer.createModel();
            var m3 = BlockRenderer.createModel();
            model.compile(m0);
            model.rotation("all", "y", 90, {
                x: .5,
                y: .5,
                z: .5
            });
            model.compile(m1);
            model.rotation("all", "y", 180, {
                x: .5,
                y: .5,
                z: .5
            });
            model.compile(m2);
            model.rotation("all", "y", 90, {
                x: .5,
                y: .5,
                z: .5
            });
            model.compile(m3);
            r0.addEntry(m0);
            r1.addEntry(m1);
            r2.addEntry(m2);
            r3.addEntry(m3);
            BlockRenderer.enableCoordMapping(id, -1, r0);
            var renders = [r1, r2, r3, r0];
        }
        else {
            var r0 = new ICRender.Model();
            var m0 = BlockRenderer.createModel();
            model.compile(m0);
            r0.addEntry(m0);
            render = [r0];
        }
        fobj = fobj || {};
        Furniture.registerRendersForFurnitureBlock(fuid, id, renders, fobj, rotPrevent);
    },
};
IDRegistry.genBlockID("stoneFurniture");
Block.createBlock("stoneFurniture", [
    {
        name: "It is a tech block!",
        texture: [["quartz_block", 0]],
        inCreative: false
    }
], BLOCK_TYPE_STONE);
TileEntity.registerPrototype(BlockID.stoneFurniture, {
    init: function (count) {
        if (this.data.uid >= 0) {
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
            if (Furniture.registeredRenders[this.data.uid].funcs.init)
                Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x, this.y, this.z));
            Furniture.furnitureUIDs.push({
                x: this.x,
                y: this.y,
                z: this.z,
                uid: this.data.uid
            });
        }
        if (count) {
            if (Furniture.registeredRenders[this.data.uid].funcs.created)
                Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x, this.y, this.z));
        }
    },
    defaultValues: {
        uid: -1,
        render: 0
    },
    destroy: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.destroy)
            Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x, this.y, this.z));
    },
    tick: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.tick)
            Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x, this.y, this.z));
    },
    click: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.click)
            Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x, this.y, this.z));
    },
    getGuiScreen: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.gui)
            return Furniture.registeredRenders[this.data.uid].funcs.gui;
    }
});
var render = new ICRender.Model();
var model = BlockRenderer.createModel();
render.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.stoneFurniture, -1, render);
IDRegistry.genBlockID("woodFurniture");
Block.createBlock("woodFurniture", [
    {
        name: "It is a tech block!",
        texture: [["oak_plank", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
TileEntity.registerPrototype(BlockID.woodFurniture, {
    init: function (count) {
        if (this.data.uid >= 0) {
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
            if (Furniture.registeredRenders[this.data.uid].funcs.init)
                Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x, this.y, this.z));
            Furniture.furnitureUIDs.push({
                x: this.x,
                y: this.y,
                z: this.z,
                uid: this.data.uid
            });
        }
        if (count) {
            if (Furniture.registeredRenders[this.data.uid].funcs.created)
                Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x, this.y, this.z));
        }
    },
    created: function () {
    },
    defaultValues: {
        uid: -1,
        render: 0
    },
    destroy: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.destroy)
            Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x, this.y, this.z));
    },
    tick: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.tick)
            Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x, this.y, this.z));
    },
    click: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.click)
            Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x, this.y, this.z));
    },
    getGuiScreen: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.gui)
            return Furniture.registeredRenders[this.data.uid].funcs.gui;
    }
});
BlockRenderer.enableCoordMapping(BlockID.woodFurniture, -1, render);
IDRegistry.genBlockID("lightFurniture");
Block.createBlock("lightFurniture", [
    {
        name: "It is a tech block!",
        texture: [["oak_plank", 0]],
        inCreative: false
    }
], BLOCK_TYPE_LIGHT);
TileEntity.registerPrototype(BlockID.lightFurniture, {
    init: function (count) {
        if (this.data.uid >= 0) {
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, Furniture.registeredRenders[this.data.uid].renders[this.data.render]);
            if (Furniture.registeredRenders[this.data.uid].funcs.init)
                Furniture.registeredRenders[this.data.uid].funcs.init(World.getTileEntity(this.x, this.y, this.z));
            Furniture.furnitureUIDs.push({
                x: this.x,
                y: this.y,
                z: this.z,
                uid: this.data.uid
            });
        }
        if (count) {
            if (Furniture.registeredRenders[this.data.uid].funcs.created)
                Furniture.registeredRenders[this.data.uid].funcs.created(World.getTileEntity(this.x, this.y, this.z));
        }
    },
    defaultValues: {
        uid: -1,
        render: 0
    },
    destroy: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.destroy)
            Furniture.registeredRenders[this.data.uid].funcs.destroy(World.getTileEntity(this.x, this.y, this.z));
    },
    tick: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.tick)
            Furniture.registeredRenders[this.data.uid].funcs.tick(World.getTileEntity(this.x, this.y, this.z));
    },
    click: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.click)
            Furniture.registeredRenders[this.data.uid].funcs.click(World.getTileEntity(this.x, this.y, this.z));
    },
    getGuiScreen: function () {
        if (Furniture.registeredRenders[this.data.uid].funcs.gui)
            return Furniture.registeredRenders[this.data.uid].funcs.gui;
    }
});
BlockRenderer.enableCoordMapping(BlockID.lightFurniture, -1, render);
var storageGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Storage"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    elements: {
        "storage0": { type: "slot", x: 445, y: 150, size: 100 },
        "storage1": { type: "slot", x: 555, y: 150, size: 100 },
        "storage2": { type: "slot", x: 445, y: 260, size: 100 },
        "storage3": { type: "slot", x: 555, y: 260, size: 100 }
    }
});
var toolShelfGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Tool shelf"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    elements: {
        "storage0": { type: "slot", x: 445, y: 150, size: 100 },
        "storage1": { type: "slot", x: 555, y: 150, size: 100 },
        "storage2": { type: "slot", x: 445, y: 260, size: 100 },
        "storage3": { type: "slot", x: 555, y: 260, size: 100 }
    }
});
var ModelAPI = {
    newArray: function () {
        return {
            addBoxByID: function (idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, id, data) {
                if (data == undefined) {
                    data = 0;
                }
                if (id == undefined) {
                    return false;
                }
                else {
                    this.box.push({ idBox: idBox, x1: pointx1, y1: pointy1, z1: pointz1, x2: pointx2, y2: pointy2, z2: pointz2, id: id, data: data, type: "block" });
                }
            },
            addBoxByTexture: function (idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, textureName, index) {
                if (index == undefined) {
                    index = 0;
                }
                if (textureName == undefined) {
                    return false;
                }
                else {
                    this.box.push({ idBox: idBox, x1: pointx1, y1: pointy1, z1: pointz1, x2: pointx2, y2: pointy2, z2: pointz2, textureName: textureName, index: index, type: "texture" });
                }
            },
            addBoxByTextures: function (idBox, pointx1, pointy1, pointz1, pointx2, pointy2, pointz2, textureArray) {
                if (textureArray == undefined) {
                    return false;
                }
                else {
                    this.box.push({ idBox: idBox, x1: pointx1, y1: pointy1, z1: pointz1, x2: pointx2, y2: pointy2, z2: pointz2, textureArray: textureArray, type: "textureArray" });
                }
            },
            boxById: function (id) {
                for (var i in this.box) {
                    if (this.box[i].idBox == id) {
                        return this.box[i];
                    }
                }
                return null;
            },
            addCondition: function (id, condition) {
                var box = this.boxById(id);
                if (box) {
                    box.condition = condition;
                    return true;
                }
                return false;
            },
            deleteBox: function (id) {
                if ((typeof id) == "string") {
                    for (var i in this.box) {
                        if (this.box[i].idBox == id) {
                            this.box.splice(i, 1);
                            return true;
                        }
                    }
                }
                else if ((typeof id) == "object") {
                    for (var i in this.box) {
                        for (var b in id) {
                            if (this.box[i].idBox == id[b]) {
                                this.box.splice(i, 1);
                            }
                        }
                    }
                }
                return false;
            },
            generateId: function () {
                return "" + this.box.lentgh;
            },
            mirrorBoxTech: function (box, orientation) {
                if (box.type == "block") {
                    this.box.push({ x1: orientation.x + (orientation.x - box.x2), y1: orientation.y + (orientation.y - box.y2), z1: orientation.z + (orientation.z - box.z2),
                        x2: orientation.x + (orientation.x - box.x1), y2: orientation.y + (orientation.y - box.y1), z2: orientation.z + (orientation.z - box.z1), id: box.id, data: box.data, type: "block"
                    });
                }
                else if (box.type == "texture") {
                    this.box.push({ x1: orientation.x + (orientation.x - box.x2), y1: orientation.y + (orientation.y - box.y2), z1: orientation.z + (orientation.z - box.z2),
                        x2: orientation.x + (orientation.x - box.x1), y2: orientation.y + (orientation.y - box.y1), z2: orientation.z + (orientation.z - box.z1), textureName: box.textureName, index: box.index, type: "texture"
                    });
                }
                else {
                    this.box.push({ x1: orientation.x + (orientation.x - box.x2), y1: orientation.y + (orientation.y - box.y2), z1: orientation.z + (orientation.z - box.z2),
                        x2: orientation.x + (orientation.x - box.x1), y2: orientation.y + (orientation.y - box.y1), z2: orientation.z + (orientation.z - box.z1), textureArray: box.textureArray, type: "textureArray"
                    });
                }
            },
            transform: function (box, o) {
                if (box == "all") {
                    for (var i in this.box) {
                        box = this.box[i];
                        box.x1 += o.x;
                        box.x2 += o.x;
                        box.y1 += o.y;
                        box.y2 += o.y;
                        box.z1 += o.z;
                        box.z2 += o.z;
                    }
                }
            },
            mirror: function (box, orientation) {
                if (orientation == undefined) {
                    var orientation = { x: 0, y: 0, z: 0 };
                }
                if (box == "all") {
                    var box = this.box;
                    for (var i in box) {
                        this.mirrorBoxTech(box[i], orientation);
                    }
                }
                else if ((typeof box) == "string") {
                    this.mirrorBoxTech(this.boxById(box), orientation);
                }
                else {
                    for (var g in box) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == box[g]) {
                                this.mirrorBoxTech(this.box[i], orientation);
                            }
                        }
                    }
                }
            },
            mirrorBoxTechX: function (box, orientation) {
                var x1 = box.x1;
                var x2 = box.x2;
                box.x2 = 2 * orientation.x - x1;
                box.x1 = 2 * orientation.x - x2;
            },
            mirrorX: function (box, orientation) {
                if (orientation == undefined) {
                    var orientation = { x: 0, y: 0, z: 0 };
                }
                if (box == "all") {
                    var box = this.box;
                    for (var i in box) {
                        this.mirrorBoxTechX(box[i], orientation);
                    }
                }
                else if ((typeof box) == "string") {
                    this.mirrorBoxTechX(this.boxById(box), orientation);
                }
                else {
                    for (var g in box) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == box[g]) {
                                this.mirrorBoxTechX(this.box[i], orientation);
                            }
                        }
                    }
                }
            },
            mirrorBoxTechY: function (box, orientation) {
                var y1 = box.y1;
                var y2 = box.y2;
                box.y2 = 2 * orientation.y - y1;
                box.y1 = 2 * orientation.y - y2;
            },
            mirrorY: function (box, orientation) {
                if (orientation == undefined) {
                    var orientation = { x: 0, y: 0, z: 0 };
                }
                if (box == "all") {
                    var box = this.box;
                    for (var i in box) {
                        this.mirrorBoxTechY(box[i], orientation);
                    }
                }
                else if ((typeof box) == "string") {
                    this.mirrorBoxTechY(this.boxById(box), orientation);
                }
                else {
                    for (var g in box) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == box[g]) {
                                this.mirrorBoxTechY(this.box[i], orientation);
                            }
                        }
                    }
                }
            },
            mirrorBoxTechZ: function (box, orientation) {
                var z1 = box.z1;
                var z2 = box.z2;
                box.z2 = 2 * orientation.z - z1;
                box.z1 = 2 * orientation.z - z2;
            },
            mirrorZ: function (box, orientation) {
                if (orientation == undefined) {
                    var orientation = { x: 0, y: 0, z: 0 };
                }
                if (box == "all") {
                    var box = this.box;
                    for (var i in box) {
                        this.mirrorBoxTechZ(box[i], orientation);
                    }
                }
                else if ((typeof box) == "string") {
                    this.mirrorBoxTechZ(this.boxById(box), orientation);
                }
                else {
                    for (var g in box) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == box[g]) {
                                this.mirrorBoxTechZ(this.box[i], orientation);
                            }
                        }
                    }
                }
            },
            copyBoxTech: function (box, newId) {
                var block = {};
                for (var key in box) {
                    block[key] = box[key];
                }
                if (newId != undefined) {
                    block.idBox = newId;
                }
                else {
                    block.idBox = "Copied" + this.box.length;
                }
                this.box.push(block);
                return this.box[this.box.length - 1];
            },
            copyBox: function (boxId, idBox) {
                if (boxId == "all") {
                    if (idBox == undefined) {
                        idBox = [];
                    }
                    for (var i in this.box) {
                        this.copyBoxTech(box[i], idBox[i]);
                    }
                }
                else if ((typeof boxId) == "string") {
                    this.copyBoxTech(this.boxById(boxId), idBox);
                }
                else {
                    if (idBox == undefined) {
                        idBox = [];
                    }
                    for (var g in boxId) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == boxId[g]) {
                                this.copyBoxTech(this.box[i], idBox[g]);
                            }
                        }
                    }
                }
            },
            rotateY: function (radians) {
                var sin = Math.sin(radians);
                var cos = Math.cos(radians);
                var box;
                for (var i in this.box) {
                    box = this.box[i];
                    var x1 = box.x1;
                    var x2 = box.x2;
                    var z1 = box.z1;
                    var z2 = box.z2;
                    this.box[i].x1 = (x1 - .5) * cos - (z1 - .5) * sin + .5;
                    this.box[i].z1 = (x1 - .5) * sin + (z1 - .5) * cos + .5;
                    this.box[i].x2 = (x2 - .5) * cos - (z2 - .5) * sin + .5;
                    this.box[i].z2 = (x2 - .5) * sin + (z2 - .5) * cos + .5;
                }
            },
            rotationTech: function (box, orientation, angle, point) {
                if (orientation == "y") {
                    if (angle == 90) {
                        var tech = 0;
                        tech = box.x1;
                        box.x1 = box.z1;
                        box.z1 = tech;
                        tech = box.x2;
                        box.x2 = box.z2;
                        box.z2 = tech;
                        this.mirrorX(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorZ(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 180) {
                        this.mirrorX(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorZ(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 270) {
                        var tech = 0;
                        tech = box.x1;
                        box.x1 = -box.z1;
                        box.z1 = -tech;
                        tech = box.x2;
                        box.x2 = -box.z2;
                        box.z2 = -tech;
                        box.x1 + point.x;
                        box.x2 + point.x;
                        box.z1 + point.z;
                        box.z2 + point.z;
                    }
                }
                if (orientation == "x") {
                    if (angle == 90) {
                        var tech = 0;
                        tech = box.y1;
                        box.y1 = box.z1;
                        box.z1 = tech;
                        tech = box.y2;
                        box.y2 = box.y2;
                        box.z2 = tech;
                        this.mirrorY(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorZ(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 180) {
                        this.mirrorY(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorZ(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 270) {
                        var tech = 0;
                        tech = box.y1;
                        box.y1 = -box.z1;
                        box.z1 = -tech;
                        tech = box.y2;
                        box.y2 = -box.z2;
                        box.z2 = -tech;
                        box.y1 + point.y;
                        box.y2 + point.y;
                        box.z1 + point.z;
                        box.z2 + point.z;
                    }
                }
                if (orientation == "z") {
                    if (angle == 90) {
                        var tech = 0;
                        tech = box.x1;
                        box.x1 = box.y1;
                        box.y1 = tech;
                        tech = box.x2;
                        box.x2 = box.y2;
                        box.y2 = tech;
                        this.mirrorX(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorY(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 180) {
                        this.mirrorX(box.idBox, { x: point.x, y: point.y, z: point.z });
                        this.mirrorY(box.idBox, { x: point.x, y: point.y, z: point.z });
                    }
                    if (angle == 270) {
                        var tech = 0;
                        tech = box.x1;
                        box.x1 = -box.y1;
                        box.y1 = -tech;
                        tech = box.x2;
                        box.x2 = -box.y2;
                        box.y2 = -tech;
                        box.x1 + point.x;
                        box.x2 + point.x;
                        box.y1 + point.y;
                        box.y2 + point.y;
                    }
                }
            },
            rotation: function (id, orientation, angle, point) {
                if (id == "all") {
                    for (var i in this.box) {
                        this.rotationTech(this.box[i], orientation, angle, point);
                    }
                }
                else if ((typeof id) == "string") {
                    this.rotationTech(this.boxById(id), orientation, angle, point);
                }
                else {
                    for (var g in id) {
                        for (var i in this.box) {
                            if (this.box[i].idBox == id[g]) {
                                this.mirrorBoxTechZ(id[g], orientation);
                            }
                        }
                    }
                }
            },
            checkInersection: function (box1, box2) {
                if (box1.x1 < box2.x2 && box1.x2 > box2.x1 || box1.x1 > box2.x1 && box1.x2 < box2.x2) {
                    if (box1.y1 < box2.y2 && box1.y2 > box2.y1 || box1.y1 > box2.y1 && box1.y2 < box2.y2) {
                        if (box1.z1 < box2.z2 && box2.z1 > box2.z1 || box1.z1 > box2.z1 && box1.z2 < box2.z2) {
                            box1.type = "block";
                            box1.id = 152;
                            box1.data = 0;
                            box2.id = 152;
                            box2.data = 0;
                            box2.type = "block";
                        }
                    }
                }
            },
            debugMode: function () {
                for (var i in this.box) {
                    for (var t in this.box) {
                        if (i != t) {
                            this.checkInersection(this.box[i], this.box[t]);
                        }
                    }
                }
            },
            copyModel: function (model) {
                for (var i in this.box) {
                    var block = {};
                    for (var key in box) {
                        block[key] = box[key];
                    }
                    model.box.push(block);
                }
            },
            addMesh: function (mesh) {
                this.box.push({ type: "mesh", mesh: mesh });
            },
            compile: function (model) {
                var e = .001;
                for (var i in this.box) {
                    var m = this.box[i];
                    var x1 = Math.min(m.x1, m.x2);
                    var y1 = Math.min(m.y1, m.y2);
                    var z1 = Math.min(m.z1, m.z2);
                    var x2 = Math.max(m.x1, m.x2);
                    var y2 = Math.max(m.y1, m.y2);
                    var z2 = Math.max(m.z1, m.z2);
                    if (m.idBox != undefined && !m.condition) {
                        if (m.type == "block") {
                            model.addBox(x1 - e, y1 - e, z1 - e, x2 + e, y2 + e, z2 + e, m.id, m.data);
                        }
                        else if (m.type == "texture") {
                            model.addBox(x1 - e, y1 - e, z1 - e, x2 + e, y2 + e, z2 + e, m.textureName, m.index);
                        }
                        else if (m.type == "textureArray") {
                            model.addBox(x1 - e, y1 - e, z1 - e, x2 + e, y2 + e, z2 + e, m.textureArray);
                        }
                        else if (m.type == "mesh") {
                            model.addMesh(m.mesh);
                        }
                    }
                }
            },
            box: []
        };
    }
};
Translation.addTranslation("Item Shelf", {
    ru: "Полка для предметов",
    ja: "アイテム入れ",
    pt_BR: "Estante de itens",
    zh: "物品架"
});
Translation.addTranslation("Tool Rack", {
    ru: "Полка для инструментов",
    ja: "ツールラック",
    pt_BR: "Rack de ferramentas",
    zh: "工具架"
});
Translation.addTranslation("Headphone", {
    ru: "Наушники",
    ja: "ヘッドホン",
    pt_BR: "Fone de ouvido",
    zh: "耳机"
});
Translation.addTranslation("Bath", {
    ru: "Ванна",
    ja: "風呂",
    pt_BR: "Banheira",
    zh: "浴缸"
});
Translation.addTranslation("Closet", {
    ru: "Шкафчик",
    ja: "クローゼット",
    pt_BR: "Armário",
    zh: "壁橱"
});
Translation.addTranslation("Shower", {
    ru: "Душ",
    ja: "シャワー",
    pt_BR: "Chuveiro",
    zh: "淋浴间"
});
Translation.addTranslation("Sink", {
    ru: "Раковина",
    ja: "流し台",
    pt_BR: "Pia",
    zh: "水槽"
});
Translation.addTranslation("Toilet", {
    ru: "Унитаз",
    ja: "トイレ",
    pt_BR: "Vaso Sanitário",
    zh: "马桶"
});
Translation.addTranslation("Towels Holder", {
    ru: "Держатель полотенец",
    ja: "タオルかけ",
    pt_BR: "Porta Toalhas",
    zh: "毛巾架"
});
Translation.addTranslation("Bar-hour", {
    ru: "Барная стойка",
    ja: "バーカウンター",
    pt_BR: "Mesa de bar",
    zh: "吧台桌子"
});
Translation.addTranslation("Bin", {
    ru: "Мусорное ведро",
    ja: "ゴミ箱",
    pt_BR: "Lixeira",
    zh: "垃圾箱"
});
Translation.addTranslation("Bread Basket", {
    ru: "Хлебница",
    ja: "パンケース",
    pt_BR: "Cesta de Pão",
    zh: "面包箱"
});
Translation.addTranslation("Cooker", {
    ru: "Кухонная Плита",
    ja: "コンロ",
    pt_BR: "Fogão",
    zh: "炊具"
});
Translation.addTranslation("Dishwasher", {
    ru: "Посудомоечная машина",
    ja: "食器洗い機",
    pt_BR: "Lava-louças",
    zh: "洗碗机"
});
Translation.addTranslation("Fridge", {
    ru: "Холодильник",
    ja: "冷蔵庫",
    pt_BR: "Geladeira",
    zh: "冰箱"
});
Translation.addTranslation("Kitchen sink", {
    ru: "Кухонная раковина",
    ja: "キッチンの流し",
    pt_BR: "Pia da cozinha",
    zh: "厨房水槽"
});
Translation.addTranslation("Microwave", {
    ru: "Микроволновая печь",
    ja: "電子レンジ",
    pt_BR: "Micro-ondas",
    zh: "微波炉"
});
Translation.addTranslation("Napkin holder", {
    ru: "Салфетница",
    ja: "ナプキン入れ",
    pt_BR: "Porta-guardanapos",
    zh: "餐巾架"
});
Translation.addTranslation("Plate", {
    ru: "Тарелка",
    ja: "おぼん",
    pt_BR: "Prato",
    zh: "盘子"
});
Translation.addTranslation("Toaster", {
    ru: "Тостер",
    ja: "トースター",
    pt_BR: "Torradeira",
    zh: "烤面包机"
});
Translation.addTranslation("Kitchen ventilation", {
    ru: "Кухонная вытяжка",
    ja: "換気扇",
    pt_BR: "Coifa de cozinha",
    zh: "吸油烟机"
});
Translation.addTranslation("Kitchen locker", {
    ru: "Кухонный шкафчик",
    ja: "キッチン収納",
    pt_BR: "Armário de cozinha",
    zh: "厨房抽屉"
});
Translation.addTranslation("Kitchen locker with 2 boxes", {
    ru: "Кухонный шкафчик с 2 ящиками",
    ja: "キッチンの引き出し",
    pt_BR: "Armário de cozinha com 2 gavetas",
    zh: "2格厨房抽屉"
});
Translation.addTranslation("Kitchen panel", {
    ru: "Кухонная панель",
    ja: "キッチン台",
    pt_BR: "Painel de cozinha",
    zh: "厨房面板"
});
Translation.addTranslation("Corner kitchen panel 1", {
    ru: "Угловая кухонная панель 1",
    ja: "キッチン台の角 1",
    pt_BR: "Painel de cozinha de canto 1",
    zh: "转角厨房面板1"
});
Translation.addTranslation("Corner kitchen panel 2", {
    ru: "Угловая кухонная панель 2",
    ja: "キッチン台の角 2",
    pt_BR: "Painel de cozinha de canto 2",
    zh: "转角厨房面板2"
});
Translation.addTranslation("Oak stool", {
    ru: "Дубовая табуретка",
    ja: "樫の椅子",
    pt_BR: "Banqueta de carvalho",
    zh: "橡木凳子"
});
Translation.addTranslation("Birch stool", {
    ru: "Берёзовая табуретка",
    ja: "白樺の椅子",
    pt_BR: "Banqueta de bétula",
    zh: "桦木凳子"
});
Translation.addTranslation("Pines stool", {
    ru: "Сосновая табуретка",
    ja: "松の椅子",
    pt_BR: "Banqueta de abeto",
    zh: "云杉木凳子"
});
Translation.addTranslation("Jungle stool", {
    ru: "Тропическая табуретка",
    ja: "ジャングルの木の椅子",
    pt_BR: "Banqueta de madeira da selva",
    zh: "丛林木凳子"
});
Translation.addTranslation("Acacia stool", {
    ru: "Акациевая табуретка",
    ja: "アカシアの椅子",
    pt_BR: "Banqueta de acácia",
    zh: "金合欢木凳子"
});
Translation.addTranslation("Dark oak stool", {
    ru: "Тёмно-дубовая табуретка",
    ja: "黒樫の椅子",
    pt_BR: "Banqueta de carvalho escuro",
    zh: "黑橡木凳子"
});
Translation.addTranslation("Oak Table", {
    ru: "Дубовый Стол",
    ja: "樫の机",
    pt_BR: "Mesa de Carvalho",
    zh: "橡木桌"
});
Translation.addTranslation("Spruce Table", {
    ru: "Еловый Стол",
    ja: "松の机",
    pt_BR: "Mesa de Abeto",
    zh: "云杉木桌"
});
Translation.addTranslation("Birch Table", {
    ru: "Берёзовый Стол",
    ja: "白樺の机",
    pt_BR: "Mesa de Bétula",
    zh: "桦木桌"
});
Translation.addTranslation("Jungle Table", {
    ru: "Стол из Тропической Древесины",
    ja: "ジャングルの木の机",
    pt_BR: "Mesa de Madeira da Selva",
    zh: "丛林木桌"
});
Translation.addTranslation("Acacia Table", {
    ru: "Стол из Акации",
    ja: "アカシアの机",
    pt_BR: "Mesa de Acácia",
    zh: "金合欢木桌"
});
Translation.addTranslation("Dark Oak Table", {
    ru: "Стол из Тёмного Дуба",
    ja: "黒樫の机",
    pt_BR: "Mesa de Carvalho Escuro",
    zh: "黑橡木桌"
});
Translation.addTranslation("Cobblestone Table", {
    ru: "Стол из Булыжника",
    ja: "丸石の机",
    pt_BR: "Mesa de Pedregulho",
    zh: "鹅卵石桌"
});
Translation.addTranslation("Stone Brick Table", {
    ru: "Стол из Каменного Кирпича",
    ja: "石レンガの机",
    pt_BR: "Mesa de Tijolos de Pedra",
    zh: "石块桌"
});
Translation.addTranslation("Quartz Table", {
    ru: "Кварцевый Стол",
    ja: "ネザークォーツの机",
    pt_BR: "Mesa de Quartzo",
    zh: "石英桌"
});
Translation.addTranslation("Oak Coffe Table", {
    ru: "Дубовый Кофейный Стол",
    ja: "樫の座卓",
    pt_BR: "Mesa de Centro de Carvalho",
    zh: "橡木茶几"
});
Translation.addTranslation("Spruce Coffe Table", {
    ru: "Еловый Кофейный Стол",
    ja: "松の座卓",
    pt_BR: "Mesa de Centro de Abeto",
    zh: "云杉木茶几"
});
Translation.addTranslation("Birch Coffe Table", {
    ru: "Берёзовый Кофейный Стол",
    ja: "白樺の座卓",
    pt_BR: "Mesa de Centro de Bétula",
    zh: "桦木茶几"
});
Translation.addTranslation("Jungle Coffe Table", {
    ru: "Кофейный Стол из Тропической Древесины",
    ja: "ジャングルの木の座卓",
    pt_BR: "Mesa de Centro de Madeira da Selva",
    zh: "丛林木茶几"
});
Translation.addTranslation("Acacia Coffe Table", {
    ru: "Кофейный Стол из Акации",
    ja: "アカシアの座卓",
    pt_BR: "Mesa de Centro de Acácia",
    zh: "金合欢木凳子"
});
Translation.addTranslation("Dark Oak Coffe Table", {
    ru: "Кофейный Стол из Тёмного Дуба",
    ja: "黒樫の座卓",
    pt_BR: "Mesa de Centro de Carvalho Escuro",
    zh: "黑橡木茶几"
});
Translation.addTranslation("Cobblestone Coffe Table", {
    ru: "Каменный Кофейный Стол",
    ja: "丸石の座卓",
    pt_BR: "Mesa de Centro de Pedregulho",
    zh: "鹅卵石茶几"
});
Translation.addTranslation("Stone Brick Coffe Table", {
    ru: "Кофейный Стол из Каменных Кирпичей",
    ja: "石レンガの座卓",
    pt_BR: "Mesa de Centro de Pedregulho",
    zh: "石头茶几"
});
Translation.addTranslation("Quartz Coffe Table", {
    ru: "Кварцевый Кофейный Стол",
    ja: "ネザークォーツの座卓",
    pt_BR: "Mesa de Centro de Quartzo",
    zh: "石英茶几"
});
Translation.addTranslation("Candlestick", {
    ru: "Подсвечник",
    ja: "ロウソク立て",
    pt_BR: "Castiçal",
    zh: "烛台"
});
Translation.addTranslation("Locker", {
    ru: "Шкафчик",
    ja: ""
});
Translation.addTranslation("Aquarium", {
    ru: "Аквариум",
    ja: "水槽",
    pt_BR: "Aquário",
});
Translation.addTranslation("Brick fireplace", {
    ru: "Камин из кирпичей",
    ja: "レンガの暖炉",
    pt_BR: "Lareira de tijolos",
    zh: "砖块壁炉"
});
Translation.addTranslation("Cobblestone fireplace", {
    ru: "Камин из булыжников",
    ja: "丸石の暖炉",
    pt_BR: "Lareira de pedregulho",
    zh: "鹅卵石壁炉"
});
Translation.addTranslation("Stonebrick fireplace", {
    ru: "Камин из каменных кирпичей",
    ja: "石レンガの暖炉",
    pt_BR: "Lareira de tijolos de pedra",
    zh: "石砌壁炉"
});
Translation.addTranslation("Netherbrick fireplace", {
    ru: "Камин из адских кирпичей",
    ja: "ネザーレンガの暖炉",
    pt_BR: "Lareira de tijolos do nether",
    zh: "地狱砖块壁炉"
});
Translation.addTranslation("Endbrick fireplace", {
    ru: "Камин из энд кирпичей",
    ja: "エンドストーンレンガの暖炉",
    pt_BR: "Lareira de tijolos de pedra do end",
    zh: "沙石砖块壁炉"
});
Translation.addTranslation("Prismarine brick fireplace", {
    ru: "Камин из призмариновых кирпичей",
    ja: "プリズマリンレンガの暖炉",
    pt_BR: "Lareira de tijolos de prismarinho",
    zh: "棱柱形砖壁炉"
});
Translation.addTranslation("Faucet", {
    ru: "Кран с водой",
    ja: "庭の蛇口",
    pt_BR: "Torneira de Jardim",
});
Translation.addTranslation("Walkway", {
    ru: "Каменная дорожка",
    ja: "飛び石",
    pt_BR: "Passarela",
});
Translation.addTranslation("Garden water bowl,", {
    ru: "Чаша с водой",
    ja: "水鉢",
    pt_BR: "Fonte para Pássaros",
});
Translation.addTranslation("Garden fence", {
    ru: "Садовый забор",
    ja: "庭のフェンス",
    pt_BR: "Cerca para Jardim",
});
Translation.addTranslation("Indastrial lamp", {
    ru: "Индустриальная лампа",
    ja: "ランプ",
    pt_BR: "Lâmpada industrial",
    zh: "工业灯"
});
Translation.addTranslation("Lantern", {
    ru: "Ручной Фонарь",
    ja: "ランタン",
    pt_BR: "Lampião",
    zh: "挂灯"
});
IDRegistry.genItemID("headphone");
Item.createItem("headphone", "Headphone", { name: "headphone", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("headphone");
Block.createBlock("headphone", [
    {
        name: "Headphone",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.headphone, count: 1, data: 0 }, ["qvq", "qvq", "vqv"], ["q", 280, 0]);
var headphoneModel = ModelAPI.newArray();
headphoneModel.addBoxByID("0", 3 / 16, 1.5 / 16, 6.5 / 16, 4 / 16, 2 / 16, 9.5 / 16, 35, 15);
headphoneModel.addBoxByID("1", 3 / 16, 5 / 16, 6.5 / 16, 4 / 16, 5.5 / 16, 9.5 / 16, 35, 15);
headphoneModel.addBoxByID("2", 3 / 16, 2 / 16, 6 / 16, 4 / 16, 5 / 16, 6.5 / 16, 35, 15);
headphoneModel.addBoxByID("3", 3 / 16, 2 / 16, 9.5 / 16, 4 / 16, 5 / 16, 10 / 16, 35, 15);
headphoneModel.addBoxByID("4", 3.1 / 16, 2 / 16, 6.5 / 16, 3.2 / 16, 5 / 16, 9.5 / 16, 152, 0);
headphoneModel.addBoxByID("5", 3.3 / 16, 2 / 16, 6.5 / 16, 3.6 / 16, 5 / 16, 9.5 / 16, 35, 7);
headphoneModel.addBoxByID("6", 2.5 / 16, 2.25 / 16, 6.75 / 16, 3.1 / 16, 4.75 / 16, 9.25 / 16, 35, 7);
headphoneModel.addBoxByID("7", 2.57 / 16, 4.25 / 16, 7.5 / 16, 2.925 / 16, 10 / 16, 8.5 / 16, 35, 15);
headphoneModel.addBoxByID("8", 2.3 / 16, 5.5 / 16, 7.5 / 16, 2.57 / 16, 10 / 16, 8.5 / 16, 35, 15);
headphoneModel.addBoxByID("9", 2.57 / 16, 4.25 / 16, 7.4 / 16, 2.925 / 16, 10 / 16, 7.53 / 16, 152, 0);
headphoneModel.addBoxByID("10", 2.57 / 16, 4.25 / 16, 8.48 / 16, 2.925 / 16, 10 / 16, 8.6 / 16, 152, 0);
for (var i = 0; i < 3; i++) {
    x = i * 0.75 / 16;
    if (i == 2) {
        headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 7.5 / 16, 8 / 16, 11 / 16 + x, 8.5 / 16, 35, 15);
        headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 7.4 / 16, 8 / 16, 10.25 / 16 + x, 7.53 / 16, 152, 0);
        headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 8.48 / 16, 8 / 16, 10.25 / 16 + x, 8.6 / 16, 152, 0);
        break;
    }
    headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 7.5 / 16, 4.1 / 16 + x * 2, 11 / 16 + x, 8.5 / 16, 35, 15);
    headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 7.4 / 16, 4.1 / 16 + x * 2, 10.25 / 16 + x, 7.53 / 16, 152, 0);
    headphoneModel.addBoxByID("7", 2.57 / 16 + x * 2, 10 / 16 + x, 8.48 / 16, 4.1 / 16 + x * 2, 10.25 / 16 + x, 8.6 / 16, 152, 0);
    headphoneModel.addBoxByID("7", 4.1 / 16 + x * 2, 10 / 16 + x, 7.4 / 16, 4.2 / 16 + x * 2, 11 / 16 + x, 7.5 / 16, 152, 0);
    headphoneModel.addBoxByID("7", 4.1 / 16 + x * 2, 10 / 16 + x, 8.5 / 16, 4.2 / 16 + x * 2, 11 / 16 + x, 8.6 / 16, 152, 0);
}
headphoneModel.copyBox(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
headphoneModel.mirrorX(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], { x: .5, y: .5, z: .5 });
headphoneModel.addBoxByID("17", 7 / 16, 11.5 / 16, 5 / 16, 9 / 16, 14 / 16, 5.5 / 16, 155, 0);
headphoneModel.addBoxByID("15", 7 / 16, 11 / 16, 5 / 16, 9 / 16, 11.5 / 16, 9 / 16, 155, 0);
headphoneModel.addBoxByID("5", 3 / 16, 3.25 / 16, 7.25 / 16, 3.25 / 16, 3.5 / 16, 12 / 16, 35, 15);
headphoneModel.addBoxByID("5", 3 / 16, 3.25 / 16, 12 / 16, (7 - 1) / 16, 3.5 / 16, 12.25 / 16, 35, 15);
headphoneModel.addBoxByID("5", (6 - 1) / 16, 3 / 16, 11.75 / 16, (7.5 - 1) / 16, 3.75 / 16, 12.5 / 16, 35, 15);
headphoneModel.addBoxByID("5", (7.5 - 1) / 16, 3 / 16, 11.75 / 16, (8 - 1) / 16, 3.75 / 16, 12.5 / 16, 152, 0);
headphoneModel.transform("all", { z: -5 / 16, y: 0, x: 0 });
headphoneModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("headphone", "headphone", headphoneModel);
Callback.addCallback("NativeCommand", function (str) {
    var str = str.split(' ');
    var command = str[0];
    switch (command) {
        case "/gm":
            Game.prevent();
            Game.setGameMode(parseInt(str[1]));
            break;
        case "/clear":
            Game.prevent();
            for (var i = 0; i < 36; i++) {
                Player.setInventorySlot(i, 0, 0, 0);
            }
            for (var i = 0; i < 4; i++) {
                Player.setArmorSlot(i, 0, 0, 0);
            }
            break;
        case "/fly":
            Game.prevent();
            if (str[1] == "0" || str[1] == "off") {
                Player.setFlying(0);
                Game.message("Flying disabled");
            }
            if (str[1] == "1" || str[1] == "on") {
                Player.setFlying(1);
                Game.message("Flying enabled");
            }
            break;
        case "/heal":
            Game.prevent();
            Entity.setHealth(Player.get(), 20);
            Player.setHunger(20);
            Player.setSaturation(20);
            break;
        case "/sethome":
            break;
        case "/deletehome":
            break;
        case "/home":
            break;
    }
});
var itemShelfModel = ModelAPI.newArray();
itemShelfModel.addBoxByID("left", 0 / 16, 1 / 16, 0 / 16, 1 / 16, 15 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("right", 15 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("center", 7.5 / 16, 1 / 16, 0 / 16, 8.5 / 16, 15 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("bottom", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("center1", 1 / 16, 7.5 / 16, 0 / 16, 7.5 / 16, 8.5 / 16, 6 / 16, 5, 0);
itemShelfModel.addBoxByID("center2", 8.5 / 16, 7.5 / 16, 0 / 16, 15 / 16, 8.5 / 16, 6 / 16, 5, 0);
var itemShelfRender_0 = new ICRender.Model();
var itemShelfRender_1 = new ICRender.Model();
var itemShelfRender_2 = new ICRender.Model();
var itemShelfRender_3 = new ICRender.Model();
var itemShelfModel_0 = BlockRenderer.createModel();
var itemShelfModel_1 = BlockRenderer.createModel();
var itemShelfModel_2 = BlockRenderer.createModel();
var itemShelfModel_3 = BlockRenderer.createModel();
itemShelfModel.compile(itemShelfModel_0);
itemShelfModel.rotation("all", "y", 90, {
    x: .5,
    y: .5,
    z: .5
});
itemShelfModel.compile(itemShelfModel_1);
itemShelfModel.rotation("all", "y", 180, {
    x: .5,
    y: .5,
    z: .5
});
itemShelfModel.compile(itemShelfModel_2);
itemShelfModel.rotation("all", "y", 90, {
    x: .5,
    y: .5,
    z: .5
});
itemShelfModel.compile(itemShelfModel_3);
itemShelfRender_0.addEntry(itemShelfModel_3);
itemShelfRender_1.addEntry(itemShelfModel_1);
itemShelfRender_2.addEntry(itemShelfModel_0);
itemShelfRender_3.addEntry(itemShelfModel_2);
IDRegistry.genBlockID("itemShelf");
Block.createBlock("itemShelf", [
    {
        name: "Item Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Item Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Item Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Item Shelf",
        texture: [["planks", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
BlockRenderer.setStaticICRender(BlockID.itemShelf, 0, itemShelfRender_0);
BlockRenderer.setStaticICRender(BlockID.itemShelf, 1, itemShelfRender_1);
BlockRenderer.setStaticICRender(BlockID.itemShelf, 2, itemShelfRender_2);
BlockRenderer.setStaticICRender(BlockID.itemShelf, 3, itemShelfRender_3);
TileEntity.registerPrototype(BlockID.itemShelf, {
    animationShifts: [
        {
            x: .25,
            y: .75,
            z: .2
        },
        {
            x: .75,
            y: .75,
            z: .2
        },
        {
            x: .25,
            y: .25,
            z: .2
        },
        {
            x: .75,
            y: .25,
            z: .2
        }
    ],
    defaultValues: {
        orientation: 0
    },
    getGuiScreen: function () {
        return storageGUI;
    },
    getRotate: function (pos) {
        var deg = this.data.orientation * Math.PI / 2;
        var sin = Math.sin(deg);
        var cos = Math.cos(deg);
        return {
            x: (pos.x - .5) * cos - (pos.z - .5) * sin,
            y: pos.y,
            z: (pos.z - .5) * cos - (pos.x - .5) * sin
        };
    },
    getAnimationPosition: function (shift) {
        rotated = this.getRotate(shift);
        return {
            x: this.x + .5 + rotated.x,
            y: this.y + rotated.y,
            z: this.z + .5 + rotated.z
        };
    },
    getAnimationItem: function (slot) {
        return {
            id: slot.id,
            data: slot.data,
            count: 1
        };
    },
    loadAnimations: function () {
        for (var i_4 = 0; i_4 < 4; i_4++) {
            this.data.itemAnimations[i_4] =
                ItemAnimation.createAnimation(this.getAnimationPosition(this.animationShifts[i_4]), this.getAnimationItem(this.container.getSlot("storage" + i_4)), null, [0, this.data.orientation / 2 * Math.PI, 0]);
        }
    },
    destroyAnimations: function () {
        for (var i_5 = 0; i_5 < 4; i_5++)
            if (this.data.itemAnimations[i_5].isLoaded)
                this.data.itemAnimations[i_5].destroy();
    },
    updateAnimation: function (index) {
        ItemAnimation.describeItem(this.data.itemAnimations[index], this.getAnimationItem(this.container.getSlot("storage" + index)), null, [0, this.data.orientation / 2 * Math.PI, 0]);
    },
    tick: function () {
        if (World.getThreadTime() % 5 == 0) {
            for (var i_6 = 0; i_6 < 4; i_6++) {
                var item = this.getAnimationItem(this.container.getSlot("storage" + i_6));
                var prev = this.data.previousItem[i_6];
                if (item.id != prev.id || item.data != prev.data) {
                    this.updateAnimation(i_6);
                    this.data.previousItem[i_6] = item;
                }
            }
        }
    },
    destroy: function () {
        this.destroyAnimations();
    },
    init: function () {
        this.data.itemAnimations = new Array(4);
        this.data.previousItem = new Array(4);
        this.loadAnimations();
        for (var i_7 = 0; i_7 < 4; i_7++) {
            this.data.previousItem[i_7] = this.getAnimationItem(this.container.getSlot("storage" + i_7));
            this.updateAnimation(i_7);
        }
    }
});
IDRegistry.genItemID("itemShelf");
Item.createItem("itemShelf", "Item Shelf", {
    name: "itemshelf",
    meta: 0
}, {
    stack: 64
});
Recipes.addShaped({
    id: ItemID.itemShelf,
    count: 1,
    data: 0
}, ["bbb", "bsb", "bbb"], ["b", 5, -1, "s", 280, 0]);
function sign(x) {
    if (x < 0)
        return -1;
    if (x > 0)
        return 1;
    return 0;
}
Item.registerUseFunction("itemShelf", function (coords, item, block) {
    var look = Entity.getLookVector(Player.get());
    var angle = (Math.acos(look.z / Math.sqrt(look.x * look.x + look.z * look.z))
        * sign(look.x) + Math.PI * 2.25) % (Math.PI * 2);
    var orientation = Math.floor(angle * 2 / Math.PI);
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.itemShelf, orientation);
    World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
    if (orientation % 2 == 1)
        orientation -= 2;
    World.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z).data.orientation = (orientation + 2) % 4;
});
Block.registerDropFunction("itemShelf", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.itemShelf, 1, 0]];
});
var toolShelfModel = ModelAPI.newArray();
toolShelfModel.addBoxByID("body", 0 / 16, 0 / 16, 10 / 16, 16 / 16, 16 / 16, 16 / 16, 5, 0);
toolShelfModel.addBoxByID("bottom_border", 0 / 16, 0 / 16, 8 / 16, 16 / 16, 1 / 16, 10 / 16, 5, 0);
toolShelfModel.addBoxByID("top_border", 0 / 16, 15 / 16, 8 / 16, 16 / 16, 16 / 16, 10 / 16, 5, 0);
toolShelfModel.addBoxByID("left_border", 0 / 16, 1 / 16, 8 / 16, 1 / 16, 15 / 16, 10 / 16, 5, 0);
toolShelfModel.addBoxByID("right_border", 15 / 16, 1 / 16, 8 / 16, 16 / 16, 15 / 16, 10 / 16, 5, 0);
toolShelfModel.addBoxByID("firstBold_0", 3 / 16, 10.5 / 16, 9 / 16, 4 / 16, 11.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("secondBold_0", 6 / 16, 7.5 / 16, 9 / 16, 7 / 16, 8.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("firstBold_1", 9 / 16, 10.5 / 16, 9 / 16, 10 / 16, 11.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("secondBold_1", 12 / 16, 7.5 / 16, 9 / 16, 13 / 16, 8.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("firstBold_2", 3 / 16, 4.5 / 16, 9 / 16, 4 / 16, 5.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("secondBold_2", 6 / 16, 1.5 / 16, 9 / 16, 7 / 16, 2.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("firstBold_3", 9 / 16, 4.5 / 16, 9 / 16, 10 / 16, 5.5 / 16, 10 / 16, 1, 0);
toolShelfModel.addBoxByID("secondBold_3", 12 / 16, 1.5 / 16, 9 / 16, 13 / 16, 2.5 / 16, 10 / 16, 1, 0);
var toolShelfRender_0 = new ICRender.Model();
var toolShelfRender_1 = new ICRender.Model();
var toolShelfRender_2 = new ICRender.Model();
var toolShelfRender_3 = new ICRender.Model();
var toolShelfModel_0 = BlockRenderer.createModel();
var toolShelfModel_1 = BlockRenderer.createModel();
var toolShelfModel_2 = BlockRenderer.createModel();
var toolShelfModel_3 = BlockRenderer.createModel();
toolShelfModel.compile(toolShelfModel_0);
toolShelfModel.rotateY(Math.PI / 2);
toolShelfModel.compile(toolShelfModel_1);
toolShelfModel.rotateY(Math.PI / 2);
toolShelfModel.compile(toolShelfModel_2);
toolShelfModel.rotateY(Math.PI / 2);
toolShelfModel.compile(toolShelfModel_3);
toolShelfRender_0.addEntry(toolShelfModel_0);
toolShelfRender_1.addEntry(toolShelfModel_1);
toolShelfRender_2.addEntry(toolShelfModel_2);
toolShelfRender_3.addEntry(toolShelfModel_3);
IDRegistry.genBlockID("toolShelf");
Block.createBlock("toolShelf", [
    {
        name: "Tool Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Tool Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Tool Shelf",
        texture: [["planks", 0]],
        inCreative: false
    },
    {
        name: "Tool Shelf",
        texture: [["planks", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
BlockRenderer.setStaticICRender(BlockID.toolShelf, 0, toolShelfRender_0);
BlockRenderer.setStaticICRender(BlockID.toolShelf, 1, toolShelfRender_1);
BlockRenderer.setStaticICRender(BlockID.toolShelf, 2, toolShelfRender_2);
BlockRenderer.setStaticICRender(BlockID.toolShelf, 3, toolShelfRender_3);
TileEntity.registerPrototype(BlockID.toolShelf, {
    animationShifts: [
        {
            x: 5 / 16,
            y: .75 - 1 / 16,
            z: 6.5 / 16
        },
        {
            x: 11 / 16,
            y: .75 - 1 / 16,
            z: 6.5 / 16
        },
        {
            x: 5 / 16,
            y: .25 + 1 / 16,
            z: 6.5 / 16
        },
        {
            x: 11 / 16,
            y: .25 + 1 / 16,
            z: 6.5 / 16
        }
    ],
    defaultValues: {
        itemAnimations: new Array(4),
        slotsReferences: new Array(4),
        previousItem: new Array(4),
        orientation: 0
    },
    getGuiScreen: function () {
        return toolShelfGUI;
    },
    getRotate: function (pos) {
        var deg = this.data.orientation * Math.PI / 2;
        var sin = Math.sin(deg);
        var cos = Math.cos(deg);
        return {
            x: (pos.x - .5) * cos - (pos.z - .5) * sin + .5,
            y: pos.y,
            z: (pos.x - .5) * sin + (pos.z - .5) * cos + .5
        };
    },
    getAnimationPosition: function (shift) {
        rotated = this.getRotate(shift);
        return {
            x: this.x + rotated.x,
            y: this.y + rotated.y,
            z: this.z + rotated.z
        };
    },
    getAnimationItem: function (slot) {
        return {
            id: slot.id,
            data: slot.data,
            count: 1
        };
    },
    loadAnimations: function () {
        for (var i_8 = 0; i_8 < 4; i_8++) {
            this.data.itemAnimations[i_8] =
                ItemAnimation.createAnimation(this.getAnimationPosition(this.animationShifts[i_8]), this.getAnimationItem(this.container.getSlot("storage" + i_8)), .5, [0, this.data.orientation / 2 * Math.PI, 0]);
        }
    },
    destroyAnimations: function () {
        for (var i_9 = 0; i_9 < 4; i_9++)
            if (this.data.itemAnimations[i_9].isLoaded)
                this.data.itemAnimations[i_9].destroy();
    },
    updateAnimation: function (index) {
        ItemAnimation.describeItem(this.data.itemAnimations[index], this.getAnimationItem(this.container.getSlot("storage" + index)), .5, [0, this.data.orientation / 2 * Math.PI, 0]);
    },
    tick: function () {
        if (World.getThreadTime() % 5 == 0) {
            for (var i_10 = 0; i_10 < 4; i_10++) {
                var item = this.getAnimationItem(this.container.getSlot("storage" + i_10));
                var prev = this.data.previousItem[i_10];
                if (item.id != prev.id || item.data != prev.data) {
                    this.updateAnimation(i_10);
                    this.data.previousItem[i_10] = item;
                }
            }
        }
    },
    destroy: function () {
        this.destroyAnimations();
    },
    init: function () {
        this.data.itemAnimations = new Array(4);
        this.data.previousItem = new Array(4);
        this.loadAnimations();
        for (var i_11 = 0; i_11 < 4; i_11++) {
            this.data.previousItem[i_11] = this.getAnimationItem(this.container.getSlot("storage" + i_11));
            this.updateAnimation(i_11);
        }
    }
});
IDRegistry.genItemID("toolShelf");
Item.createItem("toolShelf", "Tool Rack", {
    name: "toolShelf",
    meta: 0
}, {
    stack: 64
});
Recipes.addShaped({
    id: ItemID.toolShelf,
    count: 1,
    data: 0
}, ["bbb", "bsb", "bbb"], ["b", 126, -1, "s", 265, 0]);
function sign(x) {
    if (x < 0)
        return -1;
    if (x > 0)
        return 1;
    return 0;
}
Item.registerUseFunction("toolShelf", function (coords, item, block) {
    var look = Entity.getLookVector(Player.get());
    var angle = (Math.acos(look.z / Math.sqrt(look.x * look.x + look.z * look.z))
        * sign(-look.x) + Math.PI * 2.25) % (Math.PI * 2);
    var orientation = Math.floor(angle * 2 / Math.PI);
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.toolShelf, orientation);
    World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
    World.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z).data.orientation = orientation + 2;
});
Block.registerDropFunction("toolShelf", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.toolShelf, 1, 0]];
});
IDRegistry.genBlockID("bath");
Block.createBlock("bath", [
    { name: "Bath", texture: [["quartz_block_top", 0]], inCreative: false }
], { base: 1 });
IDRegistry.genItemID("bath");
Item.createItem("bath", "Bath", { name: "bath", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.bath, count: 1, data: 0 }, ["vvv", "qvq", "qqq"], ["q", 155, -1]);
var bathModel = ModelAPI.newArray();
bathModel.addBoxByID("downPlate0", 0 / 16, 0 / 16, -16 / 16, 16 / 16, 15 / 16, 0 / 16, 155);
bathModel.addBoxByID("leftBorder0", 0 / 16, 15 / 16, -16 / 16, 2 / 16, 16 / 16, 0 / 16, 155);
bathModel.addBoxByID("rightBorder0", 14 / 16, 15 / 16, -16 / 16, 16 / 16, 16 / 16, 0 / 16, 155);
bathModel.addBoxByID("downPlate1", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 16 / 16, 155);
bathModel.addBoxByID("leftBorder1", 0 / 16, 15 / 16, 0 / 16, 2 / 16, 16 / 16, 16 / 16, 155);
bathModel.addBoxByID("rightBorder1", 14 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 155);
bathModel.addBoxByID("backBorder", 2 / 16, 15 / 16, -16 / 16, 14 / 16, 16 / 16, -14 / 16, 155);
bathModel.addBoxByID("frontBorder", 2 / 16, 15 / 16, 14 / 16, 14 / 16, 16 / 16, 16 / 16, 155);
bathModel.addBoxByTexture("water0", 2 / 16, 15 / 16, -14 / 16, 14 / 16, 15.1 / 16, 0, "aqua");
bathModel.addBoxByTexture("water1", 2 / 16, 15 / 16, 0, 14 / 16, 15.1 / 16, 14 / 16, "aqua");
bathModel.addBoxByID("redButton", 5 / 16, 16 / 16, -15.5 / 16, 6 / 16, 17 / 16, 1.5 / 16 - 1, 35, 14);
bathModel.addBoxByID("blueButton", 10 / 16, 16 / 16, -15.5 / 16, 11 / 16, 17 / 16, 1.5 / 16 - 1, 35, 11);
bathModel.addBoxByID("gate_1", 7.5 / 16, 16 / 16, -15.5 / 16, 8.5 / 16, 18 / 16, 1.5 / 16 - 1, 1);
bathModel.addBoxByID("gate_2", 7.5 / 16, 18 / 16, -15.5 / 16, 8.5 / 16, 19 / 16, 4 / 16 - 1, 1);
bathModel.addBoxByID("gate_3", 7.5 / 16, 17 / 16, -13 / 16, 8.5 / 16, 18 / 16, 4 / 16 - 1, 1);
Furniture.addReplacementItem({ id: "bath" }, { id: "bath" }, Furniture.placeRotatableBlock(BlockID.bath, bathModel));
IDRegistry.genBlockID("closet");
Block.createBlock("closet", [
    { name: "Closet", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("closet");
Item.createItem("closet", "Closet", { name: "closet", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.closet, count: 1, data: 0 }, ["qvq", "qqq", "qvq"], ["q", 406, 0]);
var closetModel = ModelAPI.newArray();
closetModel.addBoxByID("body", 3 / 16, 2 / 16, 0 / 16, 13 / 16, 14 / 16, 5 / 16, 155);
closetModel.addBoxByID("hand0", 4 / 16, 10 / 16, 5 / 16, 7 / 16, 11 / 16, 6 / 16, 1);
closetModel.addBoxByID("hand1", 4 / 16, 6 / 16, 5 / 16, 5 / 16, 10 / 16, 6 / 16, 1);
closetModel.addBoxByID("hand2", 4 / 16, 5 / 16, 5 / 16, 7 / 16, 6 / 16, 6 / 16, 1);
closetModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("closet", "closet", closetModel);
IDRegistry.genBlockID("shower");
Block.createBlock("shower", [
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Block.setShape(BlockID.shower, 0, 0, 0, 1, 1 / 16, 1);
IDRegistry.genBlockID("showerTop");
Block.createBlock("showerTop", [
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false },
    { name: "Shower", texture: [["glass", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Block.setShape(BlockID.showerTop, 0, 15 / 16, 0, 1, 1, 1);
IDRegistry.genItemID("shower");
Item.createItem("shower", "Shower", { name: "shower", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.shower, count: 1, data: 0 }, ["qiq", "qgq", "qqq"], ["q", 155, 0, "g", 20, 0, "i", 265, 0]);
var showerModel = ModelAPI.newArray();
showerModel.addBoxByID("downPlate", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, 155);
showerModel.addBoxByID("bottomPlastic0", 0 / 16, 1 / 16, 0 / 16, 1 / 16, 16 / 16, 1 / 16, 155);
showerModel.addBoxByID("bottomPlastic1", 15 / 16, 1 / 16, 0 / 16, 16 / 16, 16 / 16, 1 / 16, 155);
showerModel.addBoxByID("bottomPlastic2", 0 / 16, 1 / 16, 15 / 16, 1 / 16, 16 / 16, 16 / 16, 155);
showerModel.addBoxByID("bottomPlastic3", 15 / 16, 1 / 16, 15 / 16, 16 / 16, 16 / 16, 16 / 16, 155);
showerModel.addBoxByID("leftBottomBorder", 0 / 16, 15 / 16, 1 / 16, 1 / 16, 16 / 16, 15 / 16, 155);
showerModel.addBoxByID("rightBottomTopBorder", 15 / 16, 15 / 16, 1 / 16, 16 / 16, 16 / 16, 15 / 16, 155);
showerModel.addBoxByID("backBottomBorder", 1 / 16, 15 / 16, 0 / 16, 15 / 16, 16 / 16, 1 / 16, 155);
showerModel.addBoxByID("glassPanelLeft", .05 / 16, 0.95 / 16, 0.95 / 16, .95 / 16, 15.05 / 16, 15.05 / 16, 20);
showerModel.addBoxByID("glassPanelRight", 15.05 / 16, 0.95 / 16, 0.95 / 16, 15.95 / 16, 15.05 / 16, 15.05 / 16, 20);
showerModel.addBoxByID("glassPanelBack", 0.95 / 16, 0.95 / 16, .05 / 16, 15.05 / 16, 15.05 / 16, .95 / 16, 20);
var showerModelTop = ModelAPI.newArray();
showerModelTop.addBoxByID("topPlastic0", 0 / 16, 16 / 16 - 1, 0 / 16, 1 / 16, 31 / 16 - 1, 1 / 16, 155);
showerModelTop.addBoxByID("topPlastic1", 15 / 16, 16 / 16 - 1, 0 / 16, 16 / 16, 31 / 16 - 1, 1 / 16, 155);
showerModelTop.addBoxByID("topPlastic2", 0 / 16, 16 / 16 - 1, 15 / 16, 1 / 16, 31 / 16 - 1, 16 / 16, 155);
showerModelTop.addBoxByID("topPlastic3", 15 / 16, 16 / 16 - 1, 15 / 16, 16 / 16, 31 / 16 - 1, 16 / 16, 155);
showerModelTop.addBoxByID("leftTopBorder", 0 / 16, 31 / 16 - 1, 0 / 16, 1 / 16, 32 / 16 - 1, 16 / 16, 155);
showerModelTop.addBoxByID("rightTopBorder", 15 / 16, 31 / 16 - 1, 0 / 16, 16 / 16, 32 / 16 - 1, 16 / 16, 155);
showerModelTop.addBoxByID("backTopBorder", 1 / 16, 31 / 16 - 1, 0 / 16, 15 / 16, 32 / 16 - 1, 1 / 16, 155);
showerModelTop.addBoxByID("frontTopBorder", 1 / 16, 31 / 16 - 1, 15 / 16, 15 / 16, 32 / 16 - 1, 16 / 16, 155);
showerModelTop.addBoxByID("glassPanelLeftTop", .05 / 16, 15.95 / 16 - 1, 0.95 / 16, .95 / 16, 31.05 / 16 - 1, 15.05 / 16, 20);
showerModelTop.addBoxByID("glassPanelRightTop", 15.05 / 16, 15.95 / 16 - 1, 0.95 / 16, 15.95 / 16, 31.05 / 16 - 1, 15.05 / 16, 20);
showerModelTop.addBoxByID("glassPanelBackTop", 0.95 / 16, 15.95 / 16 - 1, .05 / 16, 15.05 / 16, 31.05 / 16 - 1, .95 / 16, 20);
showerModelTop.addBoxByID("gate_1", 7.5 / 16, 16 / 16, 0 / 16, 8.5 / 16, 18 / 16, 1 / 16, 1);
showerModelTop.addBoxByID("gate_2", 7.5 / 16, 18 / 16, 0 / 16, 8.5 / 16, 19 / 16, 8 / 16, 1);
showerModelTop.addBoxByID("gate_3", 6 / 16, 17 / 16, 6 / 16, 10 / 16, 18 / 16, 10 / 16, 1);
var fshower = Furniture.placeRotatableBlock(BlockID.shower, showerModel);
var f2shower = Furniture.placeRotatableBlock(BlockID.showerTop, showerModelTop);
Furniture.addReplacementItem({ id: "shower" }, { id: "shower" }, function (c, i, b) {
    fshower(c, i, b);
    f2shower({ x: c.x, y: c.y + 1, z: c.z });
}, function (c) { World.setBlock(c.x, c.y + 1, c.z, 0); });
Block.registerDropFunction(BlockID.showerTop, function (c, id, data, diggingLevel, toolLevel) {
    World.setBlock(c.x, c.y - 1, c.z, 0);
    return [[ItemID.shower, 1, 0]];
});
IDRegistry.genItemID("sink");
Item.createItem("sink", "Sink", { name: "sink", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("sink");
Block.createBlock("sink", [
    {
        name: "Sink",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], { base: 1, renderlayer: 1 });
Recipes.addShaped({ id: ItemID.sink, count: 1, data: 0 }, ["qiq", "vqv", "vqv"], ["q", 406, 0, "i", 265, 0]);
var sinkModel = ModelAPI.newArray();
sinkModel.addBoxByID("downPlate", 3 / 16, 0, 0 / 16, 13 / 16, 12 / 16, 8 / 16, 155);
sinkModel.addBoxByID("backBorder", 1 / 16, 12 / 16, 0 / 16, 15 / 16, 16 / 16, 2 / 16, 155);
sinkModel.addBoxByID("frontBorder", 1 / 16, 12 / 16, 8 / 16, 15 / 16, 16 / 16, 10 / 16, 155);
sinkModel.addBoxByID("leftBorder", 1 / 16, 12 / 16, 2 / 16, 3 / 16, 16 / 16, 8 / 16, 155);
sinkModel.addBoxByID("rightBorder", 13 / 16, 12 / 16, 2 / 16, 15 / 16, 16 / 16, 8 / 16, 155);
sinkModel.addBoxByTexture("water", 3 / 16, 12 / 16, 1 / 16, 13 / 16, 13.5 / 16, 8 / 16, "aqua");
sinkModel.addBoxByID("redButton", 5 / 16, 16 / 16, 0.5 / 16, 6 / 16, 17 / 16, 1.5 / 16, 35, 14);
sinkModel.addBoxByID("blueButton", 10 / 16, 16 / 16, 0.5 / 16, 11 / 16, 17 / 16, 1.5 / 16, 35, 11);
sinkModel.addBoxByID("gate_1", 7.5 / 16, 16 / 16, 0.5 / 16, 8.5 / 16, 18 / 16, 1.5 / 16, 1);
sinkModel.addBoxByID("gate_2", 7.5 / 16, 18 / 16, 0.5 / 16, 8.5 / 16, 19 / 16, 4 / 16, 1);
sinkModel.addBoxByID("gate_3", 7.5 / 16, 17 / 16, 3 / 16, 8.5 / 16, 18 / 16, 4 / 16, 1);
sinkModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("sink", "sink", sinkModel);
IDRegistry.genItemID("toilet");
Item.createItem("toilet", "Toilet", { name: "toilet", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("toilet");
Block.createBlock("toilet", [
    {
        name: "Toilet",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], { base: 1, renderlayer: 1 });
Recipes.addShaped({ id: ItemID.toilet, count: 1, data: 0 }, ["iib", "qvq", "vqq"], ["q", 155, 0, "b", 77, 0, "i", 406, 0]);
var toiletModel = ModelAPI.newArray();
toiletModel.addBoxByID("downPlate", 3 / 16, 0, 3 / 16, 13 / 16, 6 / 16, 13 / 16, 155);
toiletModel.addBoxByID("backPlate", 1 / 16, 6 / 16, 1 / 16, 15 / 16, 18 / 16, 6 / 16, 155);
toiletModel.addBoxByID("upPlate", 0 / 16, 18 / 16, 0 / 16, 16 / 16, 20 / 16, 7 / 16, 155);
toiletModel.addBoxByID("button", 6 / 16, 20 / 16, 2 / 16, 10 / 16, 20.5 / 16, 4 / 16, 1);
toiletModel.addBoxByID("leftSideBorder", 1 / 16, 6 / 16, 6 / 16, 3 / 16, 11 / 16, 15 / 16, 155);
toiletModel.addBoxByID("rightSideBorder", 13 / 16, 6 / 16, 6 / 16, 15 / 16, 11 / 16, 15 / 16, 155);
toiletModel.addBoxByID("frontSideBorder", 3 / 16, 6 / 16, 13 / 16, 13 / 16, 11 / 16, 15 / 16, 155);
toiletModel.addBoxByTexture("waterPlate", 3 / 16, 6 / 16, 3 / 16, 13 / 16, 6.1 / 16, 13 / 16, "aqua");
toiletModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("toilet", "toilet", toiletModel);
IDRegistry.genBlockID("towelsHolder");
Block.createBlock("towelsHolder", [
    { name: "Towels Holder", texture: [["stone", 0]], inCreative: false },
    { name: "Towels Holder", texture: [["stone", 0]], inCreative: false },
    { name: "Towels Holder", texture: [["stone", 0]], inCreative: false },
    { name: "Towels Holder", texture: [["stone", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("towelsHolder");
Item.createItem("towelsHolder", "Towels Holder", { name: "towelsHolder", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.towelsHolder, count: 1, data: 0 }, ["qvq", "vqv", "vqv"], ["q", 155, 0]);
var towelsHolderModel = ModelAPI.newArray();
towelsHolderModel.addBoxByID("topCrossbeam", 1 / 16, 13 / 16, 2 / 16, 15 / 16, 15 / 16, 4 / 16, 1);
towelsHolderModel.addBoxByID("middleCrossbeam", 1 / 16, 7 / 16, 2 / 16, 15 / 16, 9 / 16, 4 / 16, 1);
towelsHolderModel.addBoxByID("bottomCrossbeam", 1 / 16, 1 / 16, 2 / 16, 15 / 16, 3 / 16, 4 / 16, 1);
towelsHolderModel.addBoxByID("topCrossbar", 0 / 16, 9 / 16, 2 / 16, 2 / 16, 13 / 16, 4 / 16, 1);
towelsHolderModel.addBoxByID("bottomCrossbar", 14 / 16, 3 / 16, 2 / 16, 16 / 16, 7 / 16, 4 / 16, 1);
towelsHolderModel.addBoxByID("bottomHolder", 2 / 16, 1 / 16, 0 / 16, 4 / 16, 3 / 16, 2 / 16, 1);
towelsHolderModel.addBoxByID("topHolder", 12 / 16, 14 / 16, 0 / 16, 14 / 16, 15 / 16, 2 / 16, 1);
towelsHolderModel.addBoxByID("cork0", 0 / 16, 0 / 16, 1 / 16, 1 / 16, 4 / 16, 5 / 16, 159, 9);
towelsHolderModel.addBoxByID("cork2", 15 / 16, 12 / 16, 1 / 16, 16 / 16, 16 / 16, 5 / 16, 159, 9);
towelsHolderModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("towelsHolder", "towelsHolder", towelsHolderModel);
(function () {
    IDRegistry.genBlockID("garden_crank");
    IDRegistry.genItemID("garden_crank");
    Block.createBlock("garden_crank", [{
            name: "Crank",
            texture: [
                ["quartz_block_top", 0]
            ],
            inCreative: false
        }], BLOCK_TYPE_STONE);
    Block.setBlockShape(BlockID.garden_crank, { x: 6 / 16, y: 0, z: 6 / 16 }, { x: 10 / 16, y: 1, z: 10 / 16 });
    Item.createItem("garden_crank", "Faucet", {
        name: "garden_crank",
        meta: 0
    }, {
        stack: 64
    });
    Recipes.addShaped({
        id: ItemID.garden_crank,
        count: 1,
        data: 0
    }, ["vvi", "vvi", "vii"], ["i", 265, -1]);
    var model = ModelAPI.newArray();
    model.addBoxByID("0", 7 / 16, 0, 7 / 16, 9 / 16, 12 / 16, 9 / 16, 155);
    model.addBoxByID("1", 4 / 16, 11 / 16, 7 / 16, 6 / 16, 12 / 16, 9 / 16, 155);
    model.addBoxByID("2", 4 / 16, 12 / 16, 7 / 16, 9 / 16, 14 / 16, 9 / 16, 155);
    model.addBoxByID("3", 7.5 / 16, 14 / 16, 7.5 / 16, 8.5 / 16, 14.5 / 16, 8.5 / 16, 155);
    model.addBoxByID("4", 6.5 / 16, 14.5 / 16, 7.5 / 16, 9.5 / 16, 15 / 16, 8.5 / 16, 152);
    model.addBoxByID("5", 7.5 / 16, 14.5 / 16, 6.5 / 16, 8.5 / 16, 15 / 16, 7.5 / 16, 152);
    model.addBoxByID("5", 7.5 / 16, 14.5 / 16, 8.5 / 16, 8.5 / 16, 15 / 16, 9.5 / 16, 152);
    model.rotateY(Math.PI / 2);
    FurnitureCore.addRotatableBlock("garden_crank", "garden_crank", model);
}());
(function () {
    IDRegistry.genBlockID("garden_fence");
    IDRegistry.genItemID("garden_fence");
    Block.createBlock("garden_fence", [{
            name: "Garden fence",
            texture: [
                ["quartz_block_top", 0]
            ],
            inCreative: false
        }], BLOCK_TYPE_STONE);
    Block.setBlockShape(BlockID.garden_fence, { x: 4 / 16, y: 0, z: 4 / 16 }, { x: 12 / 16, y: 1.4, z: 12 / 16 });
    Item.createItem("garden_fence", "Garden fence", {
        name: "garden_fence",
        meta: 0
    }, {
        stack: 64
    });
    Recipes.addShaped({
        id: ItemID.garden_fence,
        count: 3,
        data: 0
    }, ["qvq", "qqq", "qvq"], ["q", 406, -1]);
    var group = ICRender.getGroup("garden_fence");
    group.add(BlockID.garden_fence, 0);
    var render = new ICRender.Model();
    var RENDER = [
        {
            side: ICRender.BLOCK(0, 0, -1, group, false),
            boxes: [
                [7.5 / 16, 11 / 16, 0 / 16, 8.5 / 16, 13 / 16, 7 / 16],
                [7.5 / 16, 4 / 16, 0 / 16, 8.5 / 16, 6 / 16, 7 / 16],
                [7.3 / 16, 0, 2.7 / 16, 8.8 / 16, 15 / 16, 4.3 / 16]
            ]
        },
        {
            side: ICRender.BLOCK(0, 0, 1, group, false),
            boxes: [
                [7.5 / 16, 11 / 16, 9 / 16, 8.5 / 16, 13 / 16, 16 / 16],
                [7.5 / 16, 4 / 16, 9 / 16, 8.5 / 16, 6 / 16, 16 / 16],
                [7.3 / 16, 0, 11.7 / 16, 8.8 / 16, 15 / 16, 13.3 / 16]
            ]
        },
        {
            side: ICRender.BLOCK(-1, 0, 0, group, false),
            boxes: [
                [0 / 16, 11 / 16, 7.5 / 16, 7 / 16, 13 / 16, 8.5 / 16],
                [0 / 16, 4 / 16, 7.5 / 16, 7 / 16, 6 / 16, 8.5 / 16],
                [2.7 / 16, 0, 7.3 / 16, 4.3 / 16, 15 / 16, 8.8 / 16]
            ]
        },
        {
            side: ICRender.BLOCK(1, 0, 0, group, false),
            boxes: [
                [9 / 16, 11 / 16, 7.5 / 16, 16 / 16, 13 / 16, 8.5 / 16],
                [9 / 16, 4 / 16, 7.5 / 16, 16 / 16, 6 / 16, 8.5 / 16],
                [11.7 / 16, 0, 7.3 / 16, 13.3 / 16, 15 / 16, 8.8 / 16]
            ]
        },
        {
            side: ICRender.BLOCK(0, 0, 0, group, false),
            boxes: [
                [7 / 16, 0, 7 / 16, 9 / 16, 1, 9 / 16]
            ]
        }
    ];
    for (var i_12 in RENDER) {
        var condition = RENDER[i_12];
        var model2 = BlockRenderer.createModel();
        var boxes = condition.boxes;
        for (var j in boxes) {
            var box = boxes[j];
            model2.addBox(box[0], box[1], box[2], box[3], box[4], box[5], 155, 0);
        }
        render.addEntry(model2).setCondition(condition.side);
    }
    BlockRenderer.setStaticICRender(BlockID.garden_fence, 0, render);
    FurnitureCore.addItemBlock("garden_fence", "garden_fence");
}());
(function () {
    IDRegistry.genBlockID("fountain");
    IDRegistry.genItemID("fountain");
    Block.createBlock("fountain", [{
            name: "garden water bowl,",
            texture: [
                ["quartz_block_top", 0]
            ],
            inCreative: false
        }], { base: 1, renderlayer: 1 });
    Item.createItem("fountain", "garden water bowl,", {
        name: "fountain",
        meta: 0
    }, {
        stack: 64
    });
    Recipes.addShaped({
        id: ItemID.fountain,
        count: 1,
        data: 0
    }, ["svs", "sss", "vsv"], ["s", 1, -1]);
    var model = ModelAPI.newArray();
    model.addBoxByID("leg", 5 / 16, 0, 5 / 16, 11 / 16, 12 / 16, 11 / 16, 155);
    model.addBoxByID("plate", 4 / 16, 0, 4 / 16, 12 / 16, 1 / 16, 12 / 16, 155);
    model.addBoxByID("top_plate", 2 / 16, 11 / 16, 2 / 16, 14 / 16, 12 / 16, 14 / 16, 155);
    model.addBoxByID("border_0", 0 / 16, 12 / 16, 0 / 16, 2 / 16, 16 / 16, 16 / 16, 155);
    model.addBoxByID("border_1", 2 / 16, 12 / 16, 0 / 16, 14 / 16, 16 / 16, 2 / 16, 155);
    model.addBoxByID("border_3", 2 / 16, 12 / 16, 14 / 16, 14 / 16, 16 / 16, 16 / 16, 155);
    model.addBoxByID("border_2", 14 / 16, 12 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 155);
    model.addBoxByID("water", 2 / 16, 12 / 16, 2 / 16, 14 / 16, 15 / 16, 15 / 16, "aqua");
    FurnitureCore.addRotatableBlock("fountain", "fountain", model);
}());
(function () {
    IDRegistry.genBlockID("walkway");
    IDRegistry.genItemID("walkway");
    Block.createBlock("walkway", [{
            name: "Walkway",
            texture: [
                ["stone", 0]
            ],
            inCreative: false
        }], BLOCK_TYPE_STONE);
    Block.setBlockShape(BlockID.walkway, { x: 0, y: 0, z: 0 }, { x: 1, y: 1 / 16, z: 1 });
    Item.createItem("walkway", "Walkway", {
        name: "walkway",
        meta: 0
    }, {
        stack: 64
    });
    Recipes.addShaped({
        id: ItemID.walkway,
        count: 1,
        data: 0
    }, ["vvv", "vpv", "vvv"], ["p", 1, -1]);
    var model = ModelAPI.newArray();
    model.addBoxByID("0", 1 / 16, 0, 1 / 16, 3 / 16, .5 / 16, 3 / 16, 1);
    model.addBoxByID("1", 7 / 16, 0, 1 / 16, 10 / 16, .5 / 16, 4 / 16, 1);
    model.addBoxByID("2", 2 / 16, 0, 4 / 16, 6 / 16, .5 / 16, 8 / 16, 1);
    model.addBoxByID("3", 11 / 16, 0, 3 / 16, 14 / 16, .5 / 16, 6 / 16, 1);
    model.addBoxByID("4", 7 / 16, 0, 7 / 16, 12 / 16, .5 / 16, 12 / 16, 1);
    model.addBoxByID("5", 1 / 16, 0, 9 / 16, 6 / 16, .5 / 16, 14 / 16, 1);
    model.addBoxByID("6", 10 / 16, 0, 13 / 16, 12 / 16, .5 / 16, 15 / 16, 1);
    model.addBoxByID("6", 13 / 16, 0, 10 / 16, 15 / 16, .5 / 16, 12 / 16, 1);
    FurnitureCore.addRenderedBlock("walkway", "walkway", model);
}());
function createTableRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(6 / 16, 0, 6 / 16, 10 / 16, 0.95, 10 / 16, idMaterial, dataMaterial);
    model.addBox(0, 14 / 16, 0, 1, 1, 1, idMaterial, dataMaterial);
    model.addBox(4 / 16, 0, 1 / 4, 3 / 4, 1 / 32, 3 / 4, idMaterial, dataMaterial);
    render.addEntry(model);
}
createFurnitureWood("oakTable", "table", "planks", 0, "Oak Table", ItemID.oakTable, BlockID.oakTable, 0);
Recipes.addShaped({ id: IDData.item.oakTable, count: 1, data: 0 }, ["www", "vwv", "vwv"], ["w", 5, 0]);
createTableRender(BlockID.oakTable, 5, 0);
createFurnitureWood("birchTable", "table", "planks", 2, "Birch Table", ItemID.birchTable, BlockID.birchTable, 1);
Recipes.addShaped({ id: IDData.item.birchTable, count: 1, data: 2 }, ["www", "vwv", "vwv"], ["w", 5, 2]);
createTableRender(BlockID.birchTable, 5, 2);
createFurnitureWood("spruceTable", "table", "planks", 1, "Spruce Table", ItemID.spruceTable, BlockID.spruceTable, 2);
Recipes.addShaped({ id: IDData.item.spruceTable, count: 1, data: 1 }, ["www", "vwv", "vwv"], ["w", 5, 1]);
createTableRender(BlockID.spruceTable, 5, 1);
createFurnitureWood("jungleTable", "table", "planks", 3, "Jungle Table", ItemID.jungleTable, BlockID.jungleTable, 3);
Recipes.addShaped({ id: IDData.item.spruceTable, count: 1, data: 3 }, ["www", "vwv", "vwv"], ["w", 5, 3]);
createTableRender(BlockID.jungleTable, 5, 3);
createFurnitureWood("acaciaTable", "table", "planks", 4, "Acacia Table", ItemID.acaciaTable, BlockID.acaciaTable, 4);
Recipes.addShaped({ id: IDData.item.acaciaTable, count: 1, data: 4 }, ["www", "vwv", "vwv"], ["w", 5, 4]);
createTableRender(BlockID.acaciaTable, 5, 4);
createFurnitureWood("darkOakTable", "table", "planks", 5, "Dark Oak Table", ItemID.darkOakTable, BlockID.darkOakTable, 5);
Recipes.addShaped({ id: IDData.item.darkOakTable, count: 1, data: 5 }, ["www", "vwv", "vwv"], ["w", 5, 5]);
createTableRender(BlockID.darkOakTable, 5, 5);
createFurnitureStone("cobblestoneTable", "table", "cobblestone", 0, "Cobblestone Table", ItemID.cobblestoneTable, BlockID.cobblestoneTable, 6);
Recipes.addShaped({ id: IDData.item.cobblestoneTable, count: 1, data: 0 }, ["www", "vwv", "vwv"], ["w", 4, 0]);
createTableRender(BlockID.cobblestoneTable, 4, 0);
createFurnitureStone("stoneBrickTable", "table", "stonebrick", 0, "Stone Brick Table", ItemID.stoneBrickTable, BlockID.stoneBrickTable, 7);
Recipes.addShaped({ id: IDData.item.stoneBrickTable, count: 1, data: 0 }, ["www", "vwv", "vwv"], ["w", 98, 0]);
createTableRender(BlockID.stoneBrickTable, 98, 0);
createFurnitureStone("quartzTable", "table", "quartz_block", 0, "Quartz Table", ItemID.quartzTable, BlockID.quartzTable, 8);
Recipes.addShaped({ id: IDData.item.quartzTable, count: 1, data: 0 }, ["www", "vwv", "vwv"], ["w", 155, 0]);
createTableRender(BlockID.quartzTable, 155, 0);
IDRegistry.genItemID("bar_hour");
Item.createItem("bar_hour", "Bar-hour", { name: "table", meta: 6 }, { stack: 64 });
IDRegistry.genBlockID("bar_hour");
Block.createBlock("bar_hour", [
    { name: "Bar-hour", texture: [["iron_block", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.bar_hour, count: 1, data: 0 }, ["bbb", "vbv", "vbv"], ["q", 159, -1]);
var bar_hourModel = ModelAPI.newArray();
bar_hourModel.addBoxByID("body", 7 / 16, 0 / 16, 7 / 16, 9 / 16, 15 / 16, 9 / 16, 159, 9);
bar_hourModel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
FurnitureCore.addRenderedBlock("bar_hour", "bar_hour", bar_hourModel);
IDRegistry.genBlockID("bin");
Block.createBlock("bin", [
    { name: "Bin", texture: [["iron_block", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("bin");
Item.createItem("bin", "Bin", { name: "bin", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.bin, count: 1, data: 0 }, ["www", "bob", "bnb"], ["w", 35, -1, "b", 159, -1, "o", 259, 0, "n", 87, 0]);
var binModel = ModelAPI.newArray();
binModel.addBoxByID("body", 3 / 16, 0 / 16, 3 / 16, 13 / 16, 14 / 16, 13 / 16, 159, 5);
binModel.addBoxByID("cover", 1 / 16, 14 / 16, 1 / 16, 15 / 16, 16 / 16, 15 / 16, 159, 5);
binModel.addBoxByID("hand", 7.5 / 16, 16 / 16, 6 / 16, 8.5 / 16, 17 / 16, 10 / 16, 159, 9);
FurnitureCore.addRenderedBlock("bin", "bin", binModel);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (block.id == BlockID.bin && !sN(Player.get())) {
        if (item.id != 0) {
            Game.prevent();
            Player.decreaseCarriedItem(1);
        }
    }
});
IDRegistry.genItemID("breadBasket");
Item.createItem("breadBasket", "Bread Basket", { name: "breadBasket", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("breadBasket");
Block.createBlock("breadBasket", [
    {
        name: "Bread Basket",
        texture: [["planks", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.breadBasket, count: 1, data: 0 }, ["vvp", "pvp", "ppp"], ["p", 5, -1]);
var breadBasketModel = ModelAPI.newArray();
breadBasketModel.addBoxByID("0", 1 / 16, 0, 0 / 16, 15 / 16, 2 / 16, 10 / 16, 5);
breadBasketModel.addBoxByID("1", 1 / 16, 2 / 16, 0 / 16, 15 / 16, 4 / 16, 9 / 16, 5);
breadBasketModel.addBoxByID("2", 1 / 16, 4 / 16, 0 / 16, 15 / 16, 5 / 16, 8 / 16, 5);
breadBasketModel.addBoxByID("3", 1 / 16, 5 / 16, 0 / 16, 15 / 16, 6 / 16, 7 / 16, 5);
breadBasketModel.addBoxByID("4", 1 / 16, 6 / 16, 0 / 16, 15 / 16, 7 / 16, 6 / 16, 5);
breadBasketModel.addBoxByID("5", 1 / 16, 7 / 16, 0 / 16, 15 / 16, 8 / 16, 4 / 16, 5);
breadBasketModel.rotateY(Math.PI);
FurnitureCore.addRotatableEntity("breadBasket", "breadBasket", breadBasketModel);
TileEntity.registerPrototype(BlockID.breadBasket, {
    getGuiScreen: function () {
        return storageGUI;
    }
});
IDRegistry.genBlockID("cooker");
Block.createBlock("cooker", [
    {
        name: "Cooker",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("cooker");
Item.createItem("cooker", "Cooker", { name: "cooker", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: IDData.item.cooker, count: 1, data: 0 }, ["iii", "iii", "ibi"], ["i", 265, 0, "b", 42, 0]);
var modelArray = ModelAPI.newArray();
modelArray.addBoxByID("mainBlock1", 0, 0, 0, 1, 2 / 16, 1, 155);
modelArray.addBoxByID("mainBlock2", 0, 12 / 16, 0, 1, 15 / 16, 1, 155);
modelArray.addBoxByID("mainBlock3", 0, 2 / 16, 0, 1, 12 / 16, 3 / 16, 155);
modelArray.addBoxByID("mainBlock4", 0, 2 / 16, 13 / 16, 1, 12 / 16, 1, 155);
modelArray.addBoxByID("mainBlock5", 14 / 16, 2 / 16, 3 / 16, 1, 12 / 16, 13 / 16, 155);
modelArray.addBoxByID("fire1", 3 / 16, 15 / 16, 3 / 16, 7 / 16, 1, 7 / 16, 173);
modelArray.addBoxByID("fire3", 9 / 16, 15 / 16, 9 / 16, 13 / 16, 1, 13 / 16, 173);
modelArray.addBoxByID("fire2", 3 / 16, 15 / 16, 9 / 16, 7 / 16, 1, 13 / 16, 173);
modelArray.addBoxByID("fire4", 9 / 16, 15 / 16, 3 / 16, 13 / 16, 1, 7 / 16, 173);
modelArray.addBoxByID("ledge1", 0, 15 / 16, 0, 1, 1, 1 / 16, 155);
modelArray.addBoxByID("ledge2", 0, 15 / 16, 15 / 16, 1, 1, 1, 155);
modelArray.addBoxByID("ledge3", 0, 15 / 16, 1 / 16, 1 / 16, 1, 15 / 16, 155);
modelArray.addBoxByID("ledge4", 15 / 16, 15 / 16, 1 / 16, 1, 1, 15 / 16, 155);
modelArray.addBoxByID("glass", -1 / 16, 3 / 16, 3 / 16, 0, 11 / 16, 13 / 16, 20);
modelArray.addBoxByID("ledgeGlass1", -1 / 16, 2 / 16, 2 / 16, 0, 3 / 16, 14 / 16, 155);
modelArray.addBoxByID("ledgeGlass2", -1 / 16, 11 / 16, 2 / 16, 0, 12 / 16, 14 / 16, 155);
modelArray.addBoxByID("ledgeGlass3", -1 / 16, 3 / 16, 2 / 16, 0, 11 / 16, 3 / 16, 155);
modelArray.addBoxByID("ledgeGlass4", -1 / 16, 3 / 16, 13 / 16, 0, 11 / 16, 14 / 16, 155);
modelArray.addBoxByID("1", -2 / 16, 11 / 16, 6 / 16, -1 / 16, 12 / 16, 10 / 16, 173);
modelArray.addBoxByID("2", -.3 / 16, 12.5 / 16, 1 / 16, 0, 14.5 / 16, 3 / 16, 44);
modelArray.addBoxByID("3", -.3 / 16, 12.5 / 16, 4 / 16, 0, 14.5 / 16, 6 / 16, 44);
modelArray.addBoxByID("4", -.3 / 16, 12.5 / 16, 7 / 16, 0, 14.5 / 16, 9 / 16, 44);
modelArray.addBoxByID("5", -.3 / 16, 12.5 / 16, 10 / 16, 0, 14.5 / 16, 12 / 16, 44);
modelArray.addBoxByID("6", -.5 / 16, 12.5 / 16, 14 / 16, 0, 13.5 / 16, 15 / 16, 35, 5);
modelArray.addBoxByID("7", -.5 / 16, 13.5 / 16, 14 / 16, 0, 14.5 / 16, 15 / 16, 35, 14);
for (var i = 3; i < 14; i += 2) {
    modelArray.addBoxByID("rod" + i, i / 16, 5 / 16, 3 / 16, (i + 1) / 16, 5.3 / 16, 13 / 16, 44);
}
modelArray.rotateY(Math.PI / 2);
FurnitureCore.addRotatableEntity("cooker", "cooker", modelArray);
var GUI_BAR_STANDART_SCALE = 3.2;
var guiCooker = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Cooker" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    drawing: [
        { type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE },
        { type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE }
    ],
    elements: {
        "progressScale": { type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE },
        "burningScale": { type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE },
        "slotSource": { type: "slot", x: 441, y: 75 },
        "slotFuel": { type: "slot", x: 441, y: 212,
            isValid: function (id, count, data) {
                return Recipes.getFuelBurnDuration(id, data) > 0;
            }
        },
        "slotResult": { type: "slot", x: 625, y: 142 },
    }
});
TileEntity.registerPrototype(BlockID.cooker, {
    init: function () {
        this.animationDown = new Animation.Item(this.x + .5, this.y + .18, this.z + .5);
        this.animationUp = new Animation.Item(this.x + .5, this.y + .38, this.z + .5);
    },
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    getGuiScreen: function () {
        return guiCooker;
    },
    tick: function () {
        var sourceSlot = this.container.getSlot("slotSource");
        var resultSlot = this.container.getSlot("slotResult");
        if (World.getThreadTime() % 20 == 0) {
            if (sourceSlot.id != 0) {
                this.animationDown.describeItem({
                    id: sourceSlot.id,
                    count: 1,
                    data: sourceSlot.data,
                    size: .5,
                    rotation: [3.14 / 2, 0, 0]
                });
                if (!this.animationDown.isLoaded)
                    this.animationDown.load();
            }
            else {
                if (this.animationDown.isLoaded)
                    this.animationDown.destroy();
            }
            if (resultSlot.id != 0) {
                this.animationUp.describeItem({
                    id: resultSlot.id,
                    count: 1,
                    data: resultSlot.data,
                    size: .5,
                    rotation: [3.14 / 2, 0, 0]
                });
                if (!this.animationUp.isLoaded)
                    this.animationUp.load();
            }
            else {
                if (this.animationUp.isLoaded)
                    this.animationUp.destroy();
            }
        }
        var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
        if (result && this.data.burn > 0) {
            if ((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160) {
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
        else if (result) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 160);
    },
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id) {
            var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn) {
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});
IDRegistry.genItemID("dishwosher");
Item.createItem("dishwosher", "Dishwasher", { name: "dishWasher", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("dishwosher");
Block.createBlock("dishwosher", [
    {
        name: "Dishwasher",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.dishwosher, count: 1, data: 0 }, ["qvq", "vqv", "vqv"], ["q", 155, 0]);
var dishwosherModel = ModelAPI.newArray();
dishwosherModel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
dishwosherModel.addBoxByID("door", 2 / 16, 1 / 16, 14 / 16, 14 / 16, 12 / 16, 15 / 16, 155);
dishwosherModel.addBoxByID("hand0", 6 / 16, 10 / 16, 15 / 16, 7 / 16, 11 / 16, 16 / 16, 159, 15);
dishwosherModel.addBoxByID("hand1", 9 / 16, 10 / 16, 15 / 16, 10 / 16, 11 / 16, 16 / 16, 159, 15);
dishwosherModel.addBoxByID("hand2", 6 / 16, 10 / 16, 16 / 16, 10 / 16, 11 / 16, 16.5 / 16, 159, 15);
dishwosherModel.addBoxByID("button0", 7 / 16, 13 / 16, 14 / 16, 8 / 16, 14 / 16, 14.5 / 16, 1);
dishwosherModel.addBoxByID("button1", 9 / 16, 13 / 16, 14 / 16, 10 / 16, 14 / 16, 14.5 / 16, 1);
dishwosherModel.addBoxByID("button2", 11 / 16, 13 / 16, 14 / 16, 12 / 16, 14 / 16, 14.5 / 16, 35, 14);
dishwosherModel.addBoxByID("button3", 13 / 16, 13 / 16, 14 / 16, 14 / 16, 14 / 16, 14.5 / 16, 35, 5);
dishwosherModel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
dishwosherModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("dishwosher", "dishwosher", dishwosherModel);
IDRegistry.genBlockID("fridge");
Block.createBlock("fridge", [
    { name: "Fridge", texture: [["fridge", 0]], inCreative: false }
], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("fridgeTop");
Block.createBlock("fridgeTop", [
    { name: "Fridge", texture: [["fridge", 0]], inCreative: false }
], BLOCK_TYPE_STONE);
IDRegistry.genItemID("fridge");
Item.createItem("fridge", "Fridge", { name: "fridge", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fridge, count: 1, data: 0 }, ["qgq", "qgq", "qqq"], ["q", 155, 0, "g", 20, 0]);
var fridgeModel = ModelAPI.newArray();
fridgeModel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 16 / 16, 15 / 16, 155);
fridgeModel.addBoxByID("panel", 1 / 16, 1 / 16, 15 / 16, 15 / 16, 10 / 16, 16 / 16, 155);
fridgeModel.addBoxByID("hand", 2 / 16, 3 / 16, 16 / 16, 3 / 16, 7 / 16, 17 / 16, 159, 15);
fridgeModel.addBoxByID("panel2", 1 / 16, 12 / 16, 15 / 16, 15 / 16, 16 / 16, 16 / 16, 155);
var fridgeModelTop = ModelAPI.newArray();
fridgeModelTop.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 16 / 16, 15 / 16, 155);
fridgeModelTop.addBoxByID("panel", 1 / 16, 0 / 16, 15 / 16, 15 / 16, 15 / 16, 16 / 16, 155);
fridgeModelTop.addBoxByID("hand", 2 / 16, 2 / 16, 16 / 16, 3 / 16, 6 / 16, 17 / 16, 159, 15);
var a = Furniture.placeRotatableEntity(BlockID.fridge, fridgeModel);
var b = Furniture.placeRotatableEntity(BlockID.fridgeTop, fridgeModelTop);
var fridgeRender = a.render;
var fridgeTopRender = b.render;
var f = function (c, i, b) {
    World.setBlock(c.x, c.y + 1, c.z, BlockID.fridgeTop);
    a.f(c, i, b);
    a.f({ x: c.x, y: c.y + 1, z: c.z });
};
Furniture.addReplacementItem({ id: "fridge" }, { id: "fridge" }, f, function (c) { World.setBlock(c.x, c.y + 1, c.z, 0); });
TileEntity.registerPrototype(BlockID.fridge, {
    init: function () {
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, fridgeRender[this.data.render]);
    },
    defaultValues: {
        render: 0
    }
});
TileEntity.registerPrototype(BlockID.fridgeTop, {
    init: function () {
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, fridgeTopRender[this.data.render]);
    },
    defaultValues: {
        render: 0
    }
});
Block.registerDropFunction(BlockID.fridgeTop, function (c, id, data, diggingLevel, toolLevel) {
    World.setBlock(c.x, c.y - 1, c.z, 0);
    return [[ItemID.fridge, 1, 0]];
});
var kitchenLockerTE = {
    getGuiScreen: function () {
        return storageGUI;
    }
};
IDRegistry.genItemID("kitchenLocker");
Item.createItem("kitchenLocker", "Kitchen locker", { name: "kitchenPanel", meta: 1 }, { stack: 64 });
IDRegistry.genBlockID("kitchenLocker");
Block.createBlock("kitchenLocker", [
    { name: "Kitchen locker", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
var kitchenLockerModel = ModelAPI.newArray();
kitchenLockerModel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
kitchenLockerModel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
kitchenLockerModel.addBoxByID("box", 1 / 16, 1 / 16, 14 / 16, 15 / 16, 14 / 16, 15 / 16, 155);
kitchenLockerModel.addBoxByID("hand", 2 / 16, 7 / 16, 15 / 16, 3 / 16, 10 / 16, 16 / 16, 159, 9);
kitchenLockerModel.rotateY(Math.PI);
TileEntity.registerPrototype(BlockID.kitchenLocker, kitchenLockerTE);
FurnitureCore.addRotatableEntity("kitchenLocker", "kitchenLocker", kitchenLockerModel);
IDRegistry.genItemID("kitchenLocker2");
Item.createItem("kitchenLocker2", "Kitchen locker with 2 boxes", { name: "kitchenPanel", meta: 2 }, { stack: 64 });
IDRegistry.genBlockID("kitchenLocker2");
Block.createBlock("kitchenLocker2", [
    { name: "Kitchen locker", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
var kitchenLockerModel2 = ModelAPI.newArray();
kitchenLockerModel2.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
kitchenLockerModel2.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
kitchenLockerModel2.addBoxByID("downBox", 1 / 16, 2 / 16, 14 / 16, 15 / 16, 7 / 16, 15 / 16, 155);
kitchenLockerModel2.addBoxByID("upBox", 1 / 16, 9 / 16, 14 / 16, 15 / 16, 14 / 16, 15 / 16, 155);
kitchenLockerModel2.addBoxByID("downHand", 7 / 16, 4 / 16, 15 / 16, 9 / 16, 5 / 16, 16 / 16, 159, 9);
kitchenLockerModel2.addBoxByID("upHand", 7 / 16, 11 / 16, 15 / 16, 9 / 16, 12 / 16, 16 / 16, 159, 9);
kitchenLockerModel2.rotateY(Math.PI);
TileEntity.registerPrototype(BlockID.kitchenLocker2, kitchenLockerTE);
FurnitureCore.addRotatableEntity("kitchenLocker2", "kitchenLocker2", kitchenLockerModel2);
IDRegistry.genItemID("kitchenPanel");
Item.createItem("kitchenPanel", "Kitchen panel", { name: "kitchenPanel", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("kitchenPanel");
Block.createBlock("kitchenPanel", [
    { name: "Kitchen locker", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.kitchenPanel, count: 1, data: 0 }, ["bbb", "qvq", "qqq"], ["q", 155, 0, "b", 159, 0]);
Recipes.addShaped({ id: ItemID.kitchenLocker, count: 1, data: 0 }, ["vvv", "cpv", "vvv"], ["p", ItemID.kitchenPanel, 0, "c", 54, 0]);
Recipes.addShaped({ id: ItemID.kitchenLocker2, count: 1, data: 0 }, ["vcv", "vpv", "vcv"], ["p", ItemID.kitchenPanel, 0, "c", 54, 0]);
var kitchenPanelWithoutBoxesModel = ModelAPI.newArray();
kitchenPanelWithoutBoxesModel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
kitchenPanelWithoutBoxesModel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
kitchenPanelWithoutBoxesModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("kitchenPanel", "kitchenPanel", kitchenPanelWithoutBoxesModel);
IDRegistry.genItemID("cornerKitchenPanel1");
Item.createItem("cornerKitchenPanel1", "Corner kitchen panel 1", { name: "kitchenPanel", meta: 3 }, { stack: 64 });
IDRegistry.genBlockID("cornerKitchenPanel1");
Block.createBlock("cornerKitchenPanel1", [
    { name: "Kitchen locker", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.cornerKitchenPanel1, count: 1, data: 0 }, ["vvv", "vpv", "vvv"], ["p", ItemID.kitchenPanel, 0]);
var cornerKitchenPanel = ModelAPI.newArray();
cornerKitchenPanel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
cornerKitchenPanel.addBoxByID("body2", 0 / 16, 0 / 16, 14 / 16, 14 / 16, 15 / 16, 16 / 16, 155);
cornerKitchenPanel.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
cornerKitchenPanel.rotateY(Math.PI);
kitchenPanelWithoutBoxesModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("cornerKitchenPanel1", "cornerKitchenPanel1", cornerKitchenPanel);
IDRegistry.genItemID("cornerKitchenPanel2");
Item.createItem("cornerKitchenPanel2", "Corner kitchen panel 2", { name: "kitchenPanel", meta: 4 }, { stack: 64 });
IDRegistry.genBlockID("cornerKitchenPanel2");
Block.createBlock("cornerKitchenPanel2", [
    { name: "Kitchen locker", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.cornerKitchenPanel2, count: 1, data: 0 }, ["vvv", "vpv", "vvv"], ["p", ItemID.kitchenPanel, 0]);
Recipes.addShaped({ id: ItemID.cornerKitchenPanel1, count: 1, data: 0 }, ["vvv", "vpv", "vvv"], ["p", ItemID.cornerKitchenPanel2, 0]);
Recipes.addShaped({ id: ItemID.cornerKitchenPanel2, count: 1, data: 0 }, ["vvv", "vpv", "vvv"], ["p", ItemID.cornerKitchenPanel1, 0]);
var cornerKitchenPanel2 = ModelAPI.newArray();
cornerKitchenPanel2.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
cornerKitchenPanel2.addBoxByID("body2", 2 / 16, 0 / 16, 14 / 16, 16 / 16, 15 / 16, 16 / 16, 155);
cornerKitchenPanel2.addBoxByID("top", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
cornerKitchenPanel2.rotateY(Math.PI);
kitchenPanelWithoutBoxesModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("cornerKitchenPanel2", "cornerKitchenPanel2", cornerKitchenPanel2);
IDRegistry.genItemID("kitchenSink");
Item.createItem("kitchenSink", "Kitchen sink", { name: "kitchenSink", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("kitchenSink");
Block.createBlock("kitchenSink", [
    { name: "Kitchen sink", texture: [["quartz_block_top", 0]], inCreative: false }
], { base: 1, renderlayer: 1 });
Recipes.addShaped({ id: ItemID.kitchenSink, count: 1, data: 0 }, ["vsv", "vpv", "vvv"], ["p", ItemID.kitchenPanel, 0, "s", ItemID.sink, 0]);
var kitchenSinkModel = ModelAPI.newArray();
kitchenSinkModel.addBoxByID("backBorder", 1 / 16, 12 / 16, 0.5 / 16, 15 / 16, 16 / 16, 2 / 16, 155);
kitchenSinkModel.addBoxByID("frontBorder", 1 / 16, 12 / 16, 8 / 16, 15 / 16, 16 / 16, 10 / 16, 155);
kitchenSinkModel.addBoxByID("leftBorder", 1 / 16, 12 / 16, 2 / 16, 3 / 16, 16 / 16, 8 / 16, 155);
kitchenSinkModel.addBoxByID("rightBorder", 13 / 16, 12 / 16, 2 / 16, 15 / 16, 16 / 16, 8 / 16, 155);
kitchenSinkModel.addBoxByTexture("water", 3 / 16, 12 / 16, 1 / 16, 13 / 16, 13.5 / 16, 8 / 16, "aqua");
kitchenSinkModel.addBoxByID("plate", 3 / 16, 11 / 16, 1 / 16, 13 / 16, 12 / 16, 8 / 16, 155);
kitchenSinkModel.addBoxByID("redButton", 5 / 16, 16 / 16, 0.5 / 16, 6 / 16, 17 / 16, 1.5 / 16, 35, 14);
kitchenSinkModel.addBoxByID("blueButton", 10 / 16, 16 / 16, 0.5 / 16, 11 / 16, 17 / 16, 1.5 / 16, 35, 11);
kitchenSinkModel.addBoxByID("gate_1", 7.5 / 16, 16 / 16, 0.5 / 16, 8.5 / 16, 18 / 16, 1.5 / 16, 1);
kitchenSinkModel.addBoxByID("gate_2", 7.5 / 16, 18 / 16, 0.5 / 16, 8.5 / 16, 19 / 16, 4 / 16, 1);
kitchenSinkModel.addBoxByID("gate_3", 7.5 / 16, 17 / 16, 3 / 16, 8.5 / 16, 18 / 16, 4 / 16, 1);
kitchenSinkModel.addBoxByID("frontPanel", 0 / 16, 0 / 16, 13 / 16, 16 / 16, 15 / 16, 14 / 16, 155);
kitchenSinkModel.addBoxByID("backPanel", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 15 / 16, 1 / 16, 155);
kitchenSinkModel.addBoxByID("leftPanel", 0 / 16, 0 / 16, 1 / 16, 1 / 16, 15 / 16, 13 / 16, 155);
kitchenSinkModel.addBoxByID("rightPanel", 15 / 16, 0 / 16, 1 / 16, 16 / 16, 15 / 16, 13 / 16, 155);
kitchenSinkModel.addBoxByID("upPanel0", 0 / 16, 15 / 16, 10 / 16, 16 / 16, 16 / 16, 16 / 16, 159, 9);
kitchenSinkModel.addBoxByID("upPanel1", 0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 0.5 / 16, 159, 9);
kitchenSinkModel.addBoxByID("upPanel2", 0 / 16, 15 / 16, .5 / 16, 1 / 16, 16 / 16, 10 / 16, 159, 9);
kitchenSinkModel.addBoxByID("upPanel3", 15 / 16, 15 / 16, .5 / 16, 16 / 16, 16 / 16, 10 / 16, 159, 9);
kitchenSinkModel.addBoxByID("box", 1 / 16, 1 / 16, 14 / 16, 15 / 16, 14 / 16, 15 / 16, 155);
kitchenSinkModel.addBoxByID("hand", 2 / 16, 7 / 16, 15 / 16, 3 / 16, 10 / 16, 16 / 16, 159, 9);
kitchenSinkModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("kitchenSink", "kitchenSink", kitchenSinkModel);
IDRegistry.genItemID("microwave");
Item.createItem("microwave", "Microwave", { name: "microwawe", meta: 1 }, { stack: 64 });
IDRegistry.genBlockID("microwave");
Block.createBlock("microwave", [
    { name: "Microwave", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.microwave, count: 1, data: 0 }, ["qqq", "bgg", "bqq"], ["q", 406, 0, "b", 77, 0, "g", 20, 0]);
var microwaveModel = ModelAPI.newArray();
microwaveModel.addBoxByID("backPlate", 0 / 16, 1 / 16, 0 / 16, 16 / 16, 9 / 16, 1 / 16, 155);
microwaveModel.addBoxByID("leftPlate", 0 / 16, 1 / 16, 1 / 16, 1 / 16, 9 / 16, 10 / 16, 155);
microwaveModel.addBoxByID("rightPlate", 10 / 16, 1 / 16, 1 / 16, 16 / 16, 9 / 16, 10 / 16, 155);
microwaveModel.addBoxByID("topPlate", 0 / 16, 9 / 16, 0 / 16, 16 / 16, 10 / 16, 10 / 16, 155);
microwaveModel.addBoxByID("bottomPlate", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 10 / 16, 155);
microwaveModel.addBoxByID("leftBorder", 1 / 16, 1 / 16, 10 / 16, 2 / 16, 9 / 16, 11 / 16, 159, 9);
microwaveModel.addBoxByID("rightBorder", 9 / 16, 1 / 16, 10 / 16, 10 / 16, 9 / 16, 11 / 16, 159, 9);
microwaveModel.addBoxByID("bottomBorder", 1 / 16, 1 / 16, 10 / 16, 10 / 16, 2 / 16, 11 / 16, 159, 9);
microwaveModel.addBoxByID("topBorder", 1 / 16, 9 / 16, 10 / 16, 10 / 16, 10 / 16, 11 / 16, 159, 9);
microwaveModel.addBoxByID("glass", 2 / 16, 2 / 16, 10 / 16, 9 / 16, 9 / 16, 11 / 16, 20);
for (var i = 0; i < 2; i++) {
    var y = 3 + 2 * i;
    microwaveModel.addBoxByID("button0" + i, 11 / 16, y / 16, 10 / 16, 12 / 16, (y + 1) / 16, 10.5 / 16, 1);
    microwaveModel.addBoxByID("button1" + i, 12.5 / 16, y / 16, 10 / 16, 13.5 / 16, (y + 1) / 16, 10.5 / 16, 1);
    microwaveModel.addBoxByID("button2" + i, 14 / 16, y / 16, 10 / 16, 15 / 16, (y + 1) / 16, 10.5 / 16, 1);
}
microwaveModel.addBoxByID("button110", 11 / 16, 1 / 16, 10 / 16, 12 / 16, 2 / 16, 10.5 / 16, 35, 5);
microwaveModel.addBoxByID("button111", 12.5 / 16, 1 / 16, 10 / 16, 13.5 / 16, 2 / 16, 10.5 / 16, 1);
microwaveModel.addBoxByID("button112", 14 / 16, 1 / 16, 10 / 16, 15 / 16, 2 / 16, 10.5 / 16, 35, 14);
microwaveModel.addBoxByID("display", 11 / 16, 7 / 16, 10 / 16, 15 / 16, 9 / 16, 10.2 / 16, 159, 15);
microwaveModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("microwave", "microwave", microwaveModel);
IDRegistry.genItemID("napkin");
Item.createItem("napkin", "Napkin holder", { name: "napkinHolder", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("napkin");
Block.createBlock("napkin", [
    { name: "Napkin holder", texture: [["iron_block", 0]], inCreative: false }
], BLOCK_TYPE_STONE);
Recipes.addShaped({ id: ItemID.napkin, count: 1, data: 0 }, ["vvv", "bpb", "vvv"], ["b", 159, -1, "p", 339, 0]);
var napkinModel = ModelAPI.newArray();
napkinModel.addBoxByID("bottom", 5 / 16, 0 / 16, 7 / 16, 11 / 16, 0.5 / 16, 9 / 16, 159, 9);
napkinModel.addBoxByID("frontBorder0", 5 / 16, 0.5 / 16, 8.5 / 16, 11 / 16, 1.5 / 16, 9 / 16, 159, 9);
napkinModel.addBoxByID("frontBorder1", 6 / 16, 1.5 / 16, 8.5 / 16, 10 / 16, 2.5 / 16, 9 / 16, 159, 9);
napkinModel.addBoxByID("frontBorder2", 7 / 16, 2.5 / 16, 8.5 / 16, 9 / 16, 3.5 / 16, 9 / 16, 159, 9);
napkinModel.addBoxByID("backBorder0", 5 / 16, 0.5 / 16, 7 / 16, 11 / 16, 1.5 / 16, 7.5 / 16, 159, 9);
napkinModel.addBoxByID("backBorder1", 6 / 16, 1.5 / 16, 7 / 16, 10 / 16, 2.5 / 16, 7.5 / 16, 159, 9);
napkinModel.addBoxByID("backBorder2", 7 / 16, 2.5 / 16, 7 / 16, 9 / 16, 3.5 / 16, 7.5 / 16, 159, 9);
napkinModel.addBoxByID("napkin", 4.5 / 16, 0.5 / 16, 7.5 / 16, 11.5 / 16, 4 / 16, 8.5 / 16, 159, 0);
FurnitureCore.addRotatableBlock("napkin", "napkin", napkinModel);
IDRegistry.genBlockID("plate");
Block.createBlock("plate", [
    { name: "Plate", texture: [["quartz_block_top", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("plate");
Item.createItem("plate", "Plate", { name: "plate", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: IDData.item.plate, count: 1, data: 0 }, ["vvv", "qvq", "vqv"], ["q", 406, 0]);
Block.setShape(BlockID.plate, 1 / 8, 0, 1 / 8, 7 / 8, 1 / 8, 7 / 8);
var plateModel = ModelAPI.newArray();
plateModel.addBoxByID("downPlate", 2 / 8, 0, 2 / 8, 6 / 8, 1 / 16, 6 / 8, 155);
plateModel.addBoxByID("ledge0", 1 / 8, 1 / 16, 1 / 8, 2 / 8, 1 / 8, 7 / 8, 155);
plateModel.addBoxByID("ledge1", 2 / 8, 1 / 16, 1 / 8, 6 / 8, 1 / 8, 2 / 8, 155);
plateModel.addBoxByID("ledge2", 6 / 8, 1 / 16, 1 / 8, 7 / 8, 1 / 8, 7 / 8, 155);
plateModel.addBoxByID("ledge1", 2 / 8, 1 / 16, 6 / 8, 6 / 8, 1 / 8, 7 / 8, 155);
FurnitureCore.addRenderedEntity("plate", "plate", plateModel);
var sN = ModAPI.requireGlobal("Entity.isSneaking");
TileEntity.registerPrototype(BlockID.plate, {
    defaultValues: {
        id: 0,
        data: 0
    },
    destroy: function () {
        if (this.animation.isLoaded)
            this.animation.destroy();
        if (this.data.id != 0)
            World.drop(this.x + .5, this.y + 0.25, this.z + .5, this.data.id, 1, this.data.data);
    },
    init: function () {
        this.animation = new Animation.Item(this.x + .5, this.y + 2.5 / 16, this.z + .5);
        this.animationSet();
    },
    animationSet: function () {
        this.animation = this.animation || new Animation.Item(this.x + .5, this.y + 2.5 / 16, this.z + .5);
        if (this.data.id != 0) {
            if (IDRegistry.getIdInfo(this.data.id)[0] == 'i') {
                this.animation.describeItem({
                    id: this.data.id,
                    count: 1,
                    data: this.data.data,
                    size: .5,
                    rotation: [Math.PI / 2, 0, 0]
                });
                this.animation.setPos(this.x + .5, this.y + 1.5 / 16, this.z + .5);
            }
            else {
                this.animation.describeItem({
                    id: this.data.id,
                    count: 1,
                    data: this.data.data,
                    size: .5,
                    rotation: [Math.PI / 2, 0, 0]
                });
                this.animation.setPos(this.x + .5, this.y + 1 / 16 + 1 / 64, this.z + .5);
            }
            if (!this.animation.isLoaded) {
                this.animation.load();
            }
        }
        else {
            if (this.animation.isLoaded)
                this.animation.destroy();
        }
    },
    click: function () {
        if (this.data.id != 0) {
            World.drop(this.x + .5, this.y + 0.25, this.z + .5, this.data.id, 1, this.data.data);
            this.data.id = 0;
            this.data.data = 0;
            if (this.animation.isLoaded)
                this.animation.destroy();
        }
        if (!sN(Player.get())) {
            this.data.id = Player.getCarriedItem().id;
            this.data.data = Player.getCarriedItem().data;
            Player.decreaseCarriedItem(1);
            Game.prevent();
            this.animationSet();
        }
        else {
        }
    }
});
function getStoolModel(id, data, dataPlanks) {
    var model = ModelAPI.newArray();
    model.addBoxByID("top", 3 / 16, 10 / 16, 3 / 16, 13 / 16, 11 / 16, 13 / 16, id, data);
    model.addBoxByID("hand0", 4 / 16, 0 / 16, 4 / 16, 6 / 16, 10 / 16, 6 / 16, 5, dataPlanks);
    model.addBoxByID("hand1", 10 / 16, 0 / 16, 4 / 16, 12 / 16, 10 / 16, 6 / 16, 5, dataPlanks);
    model.addBoxByID("hand2", 4 / 16, 0 / 16, 10 / 16, 6 / 16, 10 / 16, 12 / 16, 5, dataPlanks);
    model.addBoxByID("hand3", 10 / 16, 0 / 16, 10 / 16, 12 / 16, 10 / 16, 12 / 16, 5, dataPlanks);
    return model;
}
IDRegistry.genItemID("stoolOak");
Item.createItem("stoolOak", "Oak stool", { name: "stool", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("stoolOak");
Recipes.addShaped({ id: ItemID.stoolOak, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 17, 0, "p", 5, 0]);
Block.createBlock("stoolOak", [{ name: "Oak stool", texture: [["log_top", 0]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolOak", "stoolOak", getStoolModel(17, 0, 0));
IDRegistry.genItemID("stoolBirch");
Item.createItem("stoolBirch", "Birch stool", { name: "stool", meta: 2 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.stoolBirch, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 17, 2, "p", 5, 2]);
IDRegistry.genBlockID("stoolBirch");
Block.createBlock("stoolBirch", [{ name: "Birch stool", texture: [["log_top", 2]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolBirch", "stoolBirch", getStoolModel(17, 2, 2));
IDRegistry.genItemID("stoolPines");
Item.createItem("stoolPines", "Pines stool", { name: "stool", meta: 1 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.stoolPines, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 17, 1, "p", 5, 1]);
IDRegistry.genBlockID("stoolPines");
Block.createBlock("stoolPines", [{ name: "Pines stool", texture: [["log_top", 1]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolPines", "stoolPines", getStoolModel(17, 1, 1));
IDRegistry.genItemID("stoolJungle");
Item.createItem("stoolJungle", "Jungle stool", { name: "stool", meta: 3 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.stoolJungle, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 17, 3, "p", 5, 3]);
IDRegistry.genBlockID("stoolJungle");
Block.createBlock("stoolJungle", [{ name: "Jungle stool", texture: [["log_top", 3]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolJungle", "stoolJungle", getStoolModel(17, 3, 3));
IDRegistry.genItemID("stoolAcacia");
Item.createItem("stoolAcacia", "Acacia stool", { name: "stool", meta: 4 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.stoolAcacia, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 162, 0, "p", 5, 4]);
IDRegistry.genBlockID("stoolAcacia");
Block.createBlock("stoolAcacia", [{ name: "Oak stool", texture: [["log2", 1]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolAcacia", "stoolAcacia", getStoolModel(162, 0, 4));
IDRegistry.genItemID("stoolDarkOak");
Item.createItem("stoolDarkOak", "Dark oak stool", { name: "stool", meta: 5 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.stoolDarkOak, count: 1, data: 0 }, ["plp", "pvp", "pvp"], ["l", 162, 1, "p", 5, 5]);
IDRegistry.genBlockID("stoolDarkOak");
Block.createBlock("stoolDarkOak", [{ name: "Dark oak stool", texture: [["log2", 3]], inCreative: false }], BLOCK_TYPE_WOOD);
FurnitureCore.addRenderedBlock("stoolDarkOak", "stoolDarkOak", getStoolModel(162, 1, 5));
IDRegistry.genBlockID("toster");
Block.createBlock("toster", [
    { name: "Toster", texture: [["iron_block", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("toster");
Item.createItem("toster", "Toaster", { name: "toster", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.toster, count: 1, data: 0 }, ["bvb", "bvb", "bgb"], ["b", 159, -1, "g", 259, 0]);
var tosterModel = ModelAPI.newArray();
tosterModel.addBoxByID("bodyLeft", 5.5 / 16, 1 / 16, 3 / 16, 7 / 16, 5 / 16, 13 / 16, 155);
tosterModel.addBoxByID("bodyRight", 9 / 16, 1 / 16, 3 / 16, 10.5 / 16, 5 / 16, 13 / 16, 155);
tosterModel.addBoxByID("bottom", 5.5 / 16, 0 / 16, 3 / 16, 10.5 / 16, 1 / 16, 13 / 16, 155);
tosterModel.addBoxByID("bodyBack", 7 / 16, 1 / 16, 3 / 16, 9 / 16, 5 / 16, 4 / 16, 155);
tosterModel.addBoxByID("bodyFront0", 7 / 16, 1 / 16, 12 / 16, 7.8 / 16, 5 / 16, 13 / 16, 155);
tosterModel.addBoxByID("bodyFront1", 8.2 / 16, 1 / 16, 12 / 16, 9 / 16, 5 / 16, 13 / 16, 155);
tosterModel.addBoxByID("bodyFront2", 7.8 / 16, 1 / 16, 12 / 16, 8.2 / 16, 2 / 16, 13 / 16, 155);
tosterModel.addBoxByID("separator", 7.8 / 16, 1 / 16, 4 / 16, 8.2 / 16, 5.5 / 16, 12 / 16, 159, 9);
tosterModel.addBoxByID("hand", 7 / 16, 3.5 / 16, 13 / 16, 9 / 16, 4.5 / 16, 13.5 / 16, 159, 9);
FurnitureCore.addRotatableBlock("toster", "toster", tosterModel);
IDRegistry.genItemID("kitchenVentilation");
Item.createItem("kitchenVentilation", "Kitchen ventilation", { name: "ventilation", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("kitchenVentilation");
Block.createBlock("kitchenVentilation", [
    {
        name: "Kitchen ventilation",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], BLOCK_TYPE_WOOD);
Recipes.addShaped({ id: ItemID.kitchenVentilation, count: 1, data: 0 }, ["bvv", "bib", "bvb"], ["b", 159, -1, "i", 265, 0]);
var kitchenVentilationModel = ModelAPI.newArray();
kitchenVentilationModel.addBoxByID("body", 0 / 16, 0 / 16, 0 / 16, 16 / 16, 2 / 16, 16 / 16, 155);
kitchenVentilationModel.addBoxByID("body1", 1 / 16, 2 / 16, 0 / 16, 15 / 16, 3 / 16, 15 / 16, 159, 9);
kitchenVentilationModel.addBoxByID("body2", 2 / 16, 3 / 16, 0 / 16, 14 / 16, 4 / 16, 14 / 16, 159, 9);
kitchenVentilationModel.addBoxByID("body3", 3 / 16, 4 / 16, 0 / 16, 13 / 16, 5 / 16, 13 / 16, 159, 9);
kitchenVentilationModel.addBoxByID("body4", 4 / 16, 5 / 16, 0 / 16, 12 / 16, 6 / 16, 12 / 16, 159, 9);
kitchenVentilationModel.addBoxByID("body5", 5 / 16, 6 / 16, 0 / 16, 11 / 16, 16 / 16, 6 / 16, 159, 9);
kitchenVentilationModel.rotateY(Math.PI);
FurnitureCore.addRotatableBlock("kitchenVentilation", "kitchenVentilation", kitchenVentilationModel);
IDRegistry.genItemID("candlestick");
Item.createItem("candlestick", "Candlestick", { name: "candlestick", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("candlestick");
Block.createBlock("candlestick", [
    {
        name: "Candlestick",
        texture: [["gold_block", 0]],
        inCreative: false
    }
], BLOCK_TYPE_LIGHT);
Recipes.addShaped({ id: IDData.item.candlestick, count: 1, data: 0 }, ["ccc", "ggg", "vgv"], ["g", 266, 0, "c", 263, 0]);
Block.setShape(BlockID.candlestick, 0, 0, 7.5 / 16, 1, 1, 8.5 / 16);
var model = BlockRenderer.createModel();
model.addBox(7 / 16, 0, 7 / 16, 9 / 16, 1 / 32, 9 / 16, 41, 0);
model.addBox(7.5 / 16, 0.01, 7.5 / 16, 8.5 / 16, 11 / 16, 8.5 / 16, 41, 0);
model.addBox(4 / 16, 6 / 16, 7.5 / 16, 12 / 16, 7 / 16, 8.5 / 16, 41, 0);
model.addBox(4 / 16, 7 / 16, 7.5 / 16, 5 / 16, 10 / 16, 8.5 / 16, 41, 0);
model.addBox(11 / 16, 7 / 16, 7.5 / 16, 12 / 16, 10 / 16, 8.5 / 16, 41, 0);
model.addBox(3.5 / 16, 9 / 16, 7 / 16, 5.5 / 16, 10 / 16, 9 / 16, 41, 0);
model.addBox(10.5 / 16, 9 / 16, 7 / 16, 12.5 / 16, 10 / 16, 9 / 16, 41, 0);
model.addBox(7 / 16, 11 / 16, 7 / 16, 9 / 16, 12 / 16, 9 / 16, 41, 0);
model.addBox(4 / 16, 10 / 16, 7.5 / 16, 5 / 16, 13 / 16, 8.5 / 16, 155, 0);
model.addBox(11 / 16, 10 / 16, 7.5 / 16, 12 / 16, 13 / 16, 8.5 / 16, 155, 0);
model.addBox(7.5 / 16, 12 / 16, 7.5 / 16, 8.5 / 16, 15 / 16, 8.5 / 16, 155, 0);
model.addBox(4.4 / 16, 13 / 16, 7.9 / 16, 4.6 / 16, 13.4 / 16, 8.1 / 16, 173, 0);
model.addBox(11.4 / 16, 13 / 16, 7.9 / 16, 11.6 / 16, 13.4 / 16, 8.1 / 16, 173, 0);
model.addBox(7.9 / 16, 15 / 16, 7.9 / 16, 8.1 / 16, 15.4 / 16, 8.1 / 16, 173, 0);
FurnitureCore.addRenderedEntity("candlestick", "candlestick", model);
TileEntity.registerPrototype(BlockID.candlestick, {
    tick: function () {
        if (World.getThreadTime() % 15 == 0) {
            var random = Math.floor(Math.random() * 3);
            if (random == 0) {
                Particles.addFarParticle(7, this.x + 0.5, this.y + 1.07, this.z + 0.5, 0, 0, 0, 0);
            }
            else if (random == 1) {
                Particles.addFarParticle(7, this.x + 4.5 / 16, this.y + 15.5 / 16, this.z + 0.5, 0, 0, 0, 0);
            }
            else {
                Particles.addFarParticle(7, this.x + 11.5 / 16, this.y + 15.5 / 16, this.z + 0.5, 0, 0, 0, 0);
            }
        }
    }
});
function createCoffeeTableRender(id, idMaterial, dataMaterial) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var model = BlockRenderer.createModel();
    model.addBox(0, 0, 0, 2 / 16, 0.4, 2 / 16, idMaterial, dataMaterial);
    model.addBox(14 / 16, 0, 0, 1, 0.4, 2 / 16, idMaterial, dataMaterial);
    model.addBox(0, 0, 14 / 16, 2 / 16, 0.4, 1, idMaterial, dataMaterial);
    model.addBox(14 / 16, 0, 14 / 16, 1, 0.4, 1, idMaterial, dataMaterial);
    model.addBox(0, 6 / 16, 0, 2 / 16, 1 / 2, 1, idMaterial, dataMaterial);
    model.addBox(14 / 16, 6 / 16, 0, 1, 1 / 2, 1, idMaterial, dataMaterial);
    model.addBox(2 / 16, 6 / 16, 0, 14 / 16, 1 / 2, 2 / 16, idMaterial, dataMaterial);
    model.addBox(2 / 16, 6 / 16, 14 / 16, 14 / 16, 1 / 2, 1, idMaterial, dataMaterial);
    model.addBox(2 / 16, 7 / 16, 2 / 16, 14 / 16, 1 / 2, 14 / 16, 20, 0);
    render.addEntry(model);
}
createFurnitureWood("oakCoffeeTable", "cofeetable", "planks", 0, "Oak Coffe Table", ItemID.oakCoffeeTable, BlockID.oakCoffeeTable, 0);
Recipes.addShaped({ id: IDData.item.oakCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 0]);
createCoffeeTableRender(BlockID.oakCoffeeTable, 5, 0);
Block.setShape(BlockID.oakCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureWood("spruceCoffeeTable", "cofeetable", "planks", 1, "Spruce Coffe Table", ItemID.spruceCoffeeTable, BlockID.spruceCoffeeTable, 1);
Recipes.addShaped({ id: IDData.item.spruceCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 1]);
createCoffeeTableRender(BlockID.spruceCoffeeTable, 5, 1);
Block.setShape(BlockID.spruceCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureWood("birchCoffeeTable", "cofeetable", "planks", 2, "Birch Coffe Table", ItemID.birchCoffeeTable, BlockID.birchCoffeeTable, 2);
Recipes.addShaped({ id: IDData.item.birchCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 2]);
createCoffeeTableRender(BlockID.birchCoffeeTable, 5, 2);
Block.setShape(BlockID.birchCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureWood("jungleCoffeeTable", "cofeetable", "planks", 3, "Jungle Coffe Table", ItemID.jungleCoffeeTable, BlockID.jungleCoffeeTable, 3);
Recipes.addShaped({ id: IDData.item.jungleCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 3]);
createCoffeeTableRender(BlockID.jungleCoffeeTable, 5, 3);
Block.setShape(BlockID.jungleCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureWood("acaciaCoffeeTable", "cofeetable", "planks", 4, "Oak Coffe Table", ItemID.acaciaCoffeeTable, BlockID.acaciaCoffeeTable, 4);
Recipes.addShaped({ id: IDData.item.acaciaCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 4]);
createCoffeeTableRender(BlockID.acaciaCoffeeTable, 5, 4);
Block.setShape(BlockID.acaciaCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureWood("darkOakCoffeeTable", "cofeetable", "planks", 0, "Dark Oak Coffe Table", ItemID.darkOakCoffeeTable, BlockID.darkOakCoffeeTable, 5);
Recipes.addShaped({ id: IDData.item.darkOakCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 5, 5]);
createCoffeeTableRender(BlockID.darkOakCoffeeTable, 5, 5);
Block.setShape(BlockID.darkOakCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureStone("cobblestoneCoffeeTable", "cofeetable", "cobblestone", 0, "Cobblestone Coffe Table", ItemID.cobblestoneCoffeeTable, BlockID.cobblestoneCoffeeTable, 6);
Recipes.addShaped({ id: IDData.item.cobblestoneCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 4, 0]);
createCoffeeTableRender(BlockID.cobblestoneCoffeeTable, 4, 0);
Block.setShape(BlockID.cobblestoneCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureStone("stoneBrickCoffeeTable", "cofeetable", "stonebrick", 0, "Stone Brick Coffe Table", ItemID.stoneBrickCoffeeTable, BlockID.stoneBrickCoffeeTable, 7);
Recipes.addShaped({ id: IDData.item.stoneBrickCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 98, 0]);
createCoffeeTableRender(BlockID.stoneBrickCoffeeTable, 98, 0);
Block.setShape(BlockID.stoneBrickCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
createFurnitureStone("quartzCoffeeTable", "cofeetable", "quartz_block", 0, "Quartz Coffe Table", ItemID.quartzCoffeeTable, BlockID.quartzCoffeeTable, 8);
Recipes.addShaped({ id: IDData.item.quartzCoffeeTable, count: 1, data: 0 }, ["vvv", "www", "wvw"], ["w", 155, 0]);
createCoffeeTableRender(BlockID.quartzCoffeeTable, 155, 0);
Block.setShape(BlockID.quartzCoffeeTable, 0, 0, 0, 1, 1 / 2, 1);
var fireplaceObject = { tick: function () {
        if (World.getThreadTime() % 7 == 0) {
            var x = Math.random() * 10 / 16;
            var z = Math.random() * 3 / 16;
            Particles.addFarParticle(16, this.x + 3 / 16 + x, this.y + 7 / 16, this.z + z + 6 / 16, 0, 0, 0, 0);
        }
    } };
function getFireplaceModel(i, d) {
    d = d || 0;
    var fireplaceBrickModel = ModelAPI.newArray();
    fireplaceBrickModel.addBoxByID("bottomPlate0", -3 / 16, 0 / 16, 0 / 16, 8 / 16, 3 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("bottomPlate1", 8 / 16, 0 / 16, 0 / 16, 19 / 16, 3 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("topPlate0", -3 / 16, 11 / 16, 0 / 16, 8 / 16, 14 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("topPlate1", 8 / 16, 11 / 16, 0 / 16, 19 / 16, 14 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("topPlate", -2 / 16, 14 / 16, 0 / 16, 8 / 16, 16 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("topPlate", 8 / 16, 14 / 16, 0 / 16, 18 / 16, 16 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("backPlate", 0 / 16, 3 / 16, 0 / 16, 16 / 16, 11 / 16, 3 / 16, i, d);
    fireplaceBrickModel.addBoxByID("leftPlate", -3 / 16, 3 / 16, 0 / 16, 0 / 16, 11 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("rightPlate", 16 / 16, 3 / 16, 0 / 16, 19 / 16, 11 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("left", 0 / 16, 9 / 16, 2 / 16, 3 / 16, 11 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("right", 13 / 16, 9 / 16, 2 / 16, 16 / 16, 11 / 16, 16 / 16, i, d);
    fireplaceBrickModel.addBoxByID("leftIron", 3 / 16, 3 / 16, 14 / 16, 4 / 16, 7 / 16, 15 / 16, 159, 15);
    fireplaceBrickModel.addBoxByID("rightIron", 12 / 16, 3 / 16, 14 / 16, 13 / 16, 7 / 16, 15 / 16, 159, 15);
    fireplaceBrickModel.addBoxByID("centerIron", 7.5 / 16, 3 / 16, 14 / 16, 8.5 / 16, 8 / 16, 15 / 16, 159, 15);
    fireplaceBrickModel.addBoxByID("borderIron", 0 / 16, 5 / 16, 14 / 16, 16 / 16, 6 / 16, 15 / 16, 159, 15);
    fireplaceBrickModel.addBoxByID("log0", 3 / 16, 3 / 16, 3 / 16, 13 / 16, 6 / 16, 6 / 16, 17, 5);
    fireplaceBrickModel.addBoxByID("log1", 3 / 16, 3 / 16, 8 / 16, 13 / 16, 6 / 16, 11 / 16, 17, 5);
    fireplaceBrickModel.rotateY(Math.PI);
    return fireplaceBrickModel;
}
IDRegistry.genItemID("fireplaceBrick");
Item.createItem("fireplaceBrick", "Brick fireplace", { name: "brick_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplaceBrick, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 45, 0, "r", 101, 0]);
IDRegistry.genBlockID("fireplaceBrick");
Block.createBlock("fireplaceBrick", [
    {
        name: "Brick fireplace",
        texture: [["brick", 0]],
        inCreative: false
    },
    {
        name: "Brick fireplace",
        texture: [["brick", 0]],
        inCreative: false
    },
    {
        name: "Brick fireplace",
        texture: [["brick", 0]],
        inCreative: false
    },
    {
        name: "Brick fireplace",
        texture: [["brick", 0]],
        inCreative: false
    }
], BLOCK_TYPE_FIREPLACE);
var fireplaceBrickModel = getFireplaceModel(45);
FurnitureCore.addRotatableEntity("fireplaceBrick", "fireplaceBrick", fireplaceBrickModel);
TileEntity.registerPrototype(BlockID.fireplaceBrick, fireplaceObject);
IDRegistry.genItemID("fireplaceCobblestone");
Item.createItem("fireplaceCobblestone", "Cobblestone fireplace", { name: "cobblestone_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplaceCobblestone, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 4, 0, "r", 101, 0]);
var fireplaceCobblestoneModel = getFireplaceModel(4);
IDRegistry.genBlockID("fireplaceCobblestone");
Block.createBlock("fireplaceCobblestone", [
    {
        name: "Cobblestone fireplace",
        texture: [["cobblestone", 0]],
        inCreative: false
    },
    {
        name: "Cobblestone fireplace",
        texture: [["cobblestone", 0]],
        inCreative: false
    },
    {
        name: "Cobblestone fireplace",
        texture: [["cobblestone", 0]],
        inCreative: false
    },
    {
        name: "Cobblestone fireplace",
        texture: [["cobblestone", 0]],
        inCreative: false
    }
], BLOCK_TYPE_FIREPLACE);
FurnitureCore.addRotatableEntity("fireplaceCobblestone", "fireplaceCobblestone", fireplaceCobblestoneModel);
TileEntity.registerPrototype(BlockID.fireplaceCobblestone, fireplaceObject);
IDRegistry.genItemID("fireplaceStoneBrick");
Item.createItem("fireplaceStoneBrick", "Stonebrick fireplace", { name: "stoneblock_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplaceStoneBrick, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 98, 0, "r", 101, 0]);
var fireplaceStonebrickModel = getFireplaceModel(98);
IDRegistry.genBlockID("fireplaceStoneBrick");
Block.createBlock("fireplaceStoneBrick", [
    {
        name: "Stonebrick fireplace",
        texture: [["stonebrick", 0]],
        inCreative: false
    },
    {
        name: "Stonebrick fireplace",
        texture: [["stonebrick", 0]],
        inCreative: false
    },
    {
        name: "Stonebrick fireplace",
        texture: [["stonebrick", 0]],
        inCreative: false
    },
    {
        name: "Stonebrick fireplace",
        texture: [["stonebrick", 0]],
        inCreative: false
    }
], BLOCK_TYPE_FIREPLACE);
FurnitureCore.addRotatableEntity("fireplaceStoneBrick", "fireplaceStoneBrick", fireplaceStonebrickModel);
TileEntity.registerPrototype(BlockID.fireplaceStoneBrick, fireplaceObject);
IDRegistry.genItemID("fireplaceNetherbrick");
Item.createItem("fireplaceNetherbrick", "Netherbrick fireplace", { name: "netherbrickstone_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplaceNetherbrick, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 112, 0, "r", 101, 0]);
var fireplaceNetherbrickModel = getFireplaceModel(112);
IDRegistry.genBlockID("fireplaceNetherbrick");
Block.createBlock("fireplaceNetherbrick", [
    {
        name: "Netherbrick fireplace",
        texture: [["nether_brick", 0]],
        inCreative: false
    },
    {
        name: "Netherbrick fireplace",
        texture: [["nether_brick", 0]],
        inCreative: false
    },
    {
        name: "Netherbrick fireplace",
        texture: [["nether_brick", 0]],
        inCreative: false
    },
    {
        name: "Netherbrick fireplace",
        texture: [["nether_brick", 0]],
        inCreative: false
    }
], BLOCK_TYPE_FIREPLACE);
FurnitureCore.addRotatableEntity("fireplaceNetherbrick", "fireplaceNetherbrick", fireplaceNetherbrickModel);
TileEntity.registerPrototype(BlockID.fireplaceNetherbrick, fireplaceObject);
IDRegistry.genItemID("fireplaceEndbrick");
Item.createItem("fireplaceEndbrick", "Endbrick fireplace", { name: "endbrickstone_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplaceEndbrick, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 206, 0, "r", 101, 0]);
var fireplaceEndbrickModel = getFireplaceModel(206);
IDRegistry.genBlockID("fireplaceEndbrick");
Block.createBlock("fireplaceEndbrick", [
    {
        name: "Endbrick fireplace",
        texture: [["end_bricks", 0]],
        inCreative: false
    },
    {
        name: "Endbrick fireplace",
        texture: [["end_bricks", 0]],
        inCreative: false
    },
    {
        name: "Endbrick fireplace",
        texture: [["end_bricks", 0]],
        inCreative: false
    },
    {
        name: "Endbrick fireplace",
        texture: [["end_bricks", 0]],
        inCreative: false
    }
], BLOCK_TYPE_FIREPLACE);
FurnitureCore.addRotatableEntity("fireplaceEndbrick", "fireplaceEndbrick", fireplaceEndbrickModel);
TileEntity.registerPrototype(BlockID.fireplaceEndbrick, fireplaceObject);
IDRegistry.genItemID("fireplacePrismarinebrick");
Item.createItem("fireplacePrismarinebrick", "Prismarine brick fireplace", { name: "prismarinebrickstone_hearth", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: ItemID.fireplacePrismarinebrick, count: 1, data: 0 }, ["vbv", "brb", "bbb"], ["b", 168, 2, "r", 101, 0]);
var fireplacePrismarinebrickModel = getFireplaceModel(168, 2);
IDRegistry.genBlockID("fireplacePrismarinebrick");
Block.createBlock("fireplacePrismarinebrick", [
    {
        name: "Prismarine brick fireplace",
        texture: [["prismarine_bricks", 0]],
        inCreative: false
    },
    {
        name: "Prismarine brick fireplace",
        texture: [["prismarine_bricks", 0]],
        inCreative: false
    },
    {
        name: "Prismarine brick fireplace",
        texture: [["prismarine_bricks", 0]],
        inCreative: false
    },
    {
        name: "Prismarine brick fireplace",
        texture: [["prismarine_bricks", 0]],
        inCreative: false
    }
], BLOCK_TYPE_STONE);
FurnitureCore.addRotatableEntity("fireplacePrismarinebrick", "fireplacePrismarinebrick", fireplacePrismarinebrickModel);
TileEntity.registerPrototype(BlockID.fireplacePrismarinebrick, fireplaceObject);
var BLOCK_TYPE_AQUARIUM_BLOCK = Block.createSpecialType({
    base: 5,
    opaque: false,
    explosionres: 1,
    renderlayer: 2
});
IDRegistry.genBlockID("aquarium");
Block.createBlock("aquarium", [{
        name: "Aquarium",
        texture: [
            ["aquarium", 0]
        ],
        inCreative: true
    }], {
    renderlayer: 1,
    lightopacity: 0
});
var group = ICRender.getGroup("aquarium");
group.add(BlockID.aquarium, 0);
(function () {
    var GLASS_WIDTH = 0.001;
    var SHIFT = 0.008;
    var z = .0001;
    var o = 1 - z;
    var render = new ICRender.Model();
    var BORDERS = [
        {
            side: [
                [0, 0, -1],
                [0, 1, -1],
                [0, 1, 0]
            ],
            box: [-SHIFT, 1 - 1 / 16, -SHIFT, 1, 1, -SHIFT]
        },
        {
            side: [
                [0, 0, 1],
                [0, 1, 1],
                [0, 1, 0]
            ],
            box: [0, 1 - 1 / 16, 1 + SHIFT, 1, 1, 1 + SHIFT]
        },
        {
            side: [
                [-1, 0, 0],
                [-1, 1, 0],
                [0, 1, 0]
            ],
            box: [-SHIFT, 1 - 1 / 16, 0, -SHIFT, 1, 1]
        },
        {
            side: [
                [1, 0, 0],
                [1, 1, 0],
                [0, 1, 0]
            ],
            box: [1 + SHIFT, 1 - 1 / 16, 0, 1 + SHIFT, 1, 1]
        },
    ];
    var GLASS_RENDER = [
        {
            side: ICRender.BLOCK(0, 1, 0, group, true),
            box: [0, 1 + GLASS_WIDTH, 0, 1, 1 + GLASS_WIDTH * 2, 1],
            textureIndex: 1
        },
        {
            side: ICRender.BLOCK(0, -1, 0, group, true),
            box: [0, GLASS_WIDTH, 0, 1, GLASS_WIDTH * 2, 1],
            textureIndex: 1
        },
        {
            side: ICRender.BLOCK(0, 0, -1, group, true),
            box: [0, 0, GLASS_WIDTH, 1, 1, GLASS_WIDTH * 2],
            textureIndex: 1
        },
        {
            side: ICRender.BLOCK(0, 0, 1, group, true),
            box: [0, 0, 1 + GLASS_WIDTH, 1, 1, 1 + GLASS_WIDTH * 2],
            textureIndex: 1
        },
        {
            side: ICRender.BLOCK(-1, 0, 0, group, true),
            box: [GLASS_WIDTH, 0, 0, GLASS_WIDTH * 2, 1, 1],
            textureIndex: 1
        },
        {
            side: ICRender.BLOCK(1, 0, 0, group, true),
            box: [1 + GLASS_WIDTH, 0, 0, 1 + GLASS_WIDTH * 2, 1, 1],
            textureIndex: 1
        }
    ];
    for (var i_13 in GLASS_RENDER) {
        var condition = GLASS_RENDER[i_13];
        var model2 = BlockRenderer.createModel();
        var box = condition.box;
        model2.addBox(box[0], box[1], box[2], box[3], box[4], box[5], "aquarium", 0);
        render.addEntry(model2).setCondition(condition.side);
    }
    BlockRenderer.setStaticICRender(BlockID.aquarium, 0, render);
}());
(function () {
    var FISH_IDS = [349, 460, 461, 462];
    var FISH_BUCKET_DATAS_IDS = [2, 3, 4, 5];
    var FISH_SPEED = .01;
    var AQUARIUM_ID = BlockID.aquarium;
    var BOUNDS = [.2, .8];
    var sides = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
    ];
    function sign(x) {
        return x < 0 ? -1 : (x > 0 ? 1 : 0);
    }
    var FishesController = {
        fishesInfo: [],
        anims: [],
        addFish: function (x, y, z, id) {
            var info = {
                startPos: [x + .5, y + .5, z + .5],
                endPos: [x + .5, y + .5, z + .5],
                progress: 1,
                id: id
            };
            this.fishesInfo.push(info);
            this.createAnim(this.fishesInfo.length - 1);
        },
        getRelevantSides: function (x, y, z, id) {
            var output = [];
            output.push([0, 0, 0]);
            for (var i_14 = 0; i_14 < 6; i_14++)
                if (World.getBlockID(x + sides[i_14][0], y + sides[i_14][1], z + sides[i_14][2]) == id)
                    output.push(sides[i_14]);
            return output;
        },
        setTarget: function (fishInfo) {
            var pos = this.getPos(fishInfo);
            var sides = this.getRelevantSides(Math.floor(pos[0]), Math.floor(pos[1]), Math.floor(pos[2]), AQUARIUM_ID);
            var side = sides[Math.floor(Math.random() * sides.length)];
            if (fishInfo.endPos)
                fishInfo.startPos = pos;
            for (var i_15 = 0; i_15 < 3; i_15++)
                fishInfo.endPos[i_15] = Math.floor(fishInfo.startPos[i_15]) + side[i_15] + this.lerp(BOUNDS[0], BOUNDS[1], Math.random());
        },
        lerp: function (a, b, c) {
            return (b - a) * c + a;
        },
        getPos: function (info) {
            var output = [];
            for (var i_16 = 0; i_16 < 3; i_16++)
                output[i_16] = this.lerp(info.startPos[i_16], info.endPos[i_16], info.progress);
            return output;
        },
        updateFishInfo: function (index) {
            var info = this.fishesInfo[index];
            info.progress += FISH_SPEED;
            if (info && info.progress >= 1) {
                this.setTarget(info);
                info.progress = 0;
                if (this.anims[index])
                    this.updateAnimRotation(index);
            }
        },
        updateAnimPos: function (index) {
            var anim = this.anims[index];
            var coord = this.getPos(this.fishesInfo[index]);
            anim.setPos(coord[0], coord[1], coord[2]);
        },
        updateAnimRotation: function (index) {
            var anim = this.anims[index];
            var info = this.fishesInfo[index];
            var delta = [];
            for (var i_17 = 0; i_17 < 3; i_17++)
                delta[i_17] = info.endPos[i_17] - info.startPos[i_17];
            var angle = -Math.acos(-delta[0] / Math.sqrt(delta[0] * delta[0] + delta[2] * delta[2])) * sign(delta[2]);
            if (info.id != FISH_IDS[3])
                anim.render.transform.clear().rotate(0, -angle, 0).rotate(0, 0, 45);
            else
                anim.render.transform.clear().rotate(0, -angle, 0);
        },
        createAnim: function (i) {
            var fishInfo = this.fishesInfo[i];
            var anim = new Animation.Item(fishInfo.startPos[0], fishInfo.startPos[1], fishInfo.startPos[2]);
            anim.describeItem({
                id: fishInfo.id,
                count: 1,
                data: 0,
                size: .3,
                rotation: [0, 0, 0]
            });
            anim.load();
            this.anims[i] = anim;
        },
        update: function () {
            for (var i_18 = 0; i_18 < this.fishesInfo.length; i_18++) {
                this.updateFishInfo(i_18);
                if (this.anims[i_18])
                    this.updateAnimPos(i_18);
            }
        },
        getFishesIndexInfoAf: function (x, y, z) {
            var output = [];
            for (var i_19 = 0; i_19 < this.fishesInfo.length; i_19++) {
                var coord = this.getPos(this.fishesInfo[i_19]);
                if (Math.floor(coord[0]) == x && Math.floor(coord[1]) == y && Math.floor(coord[2]) == z)
                    output.push(i_19);
            }
            return output;
        },
        removeFish: function (index) {
            var info = this.fishesInfo[index];
            this.anims[index].destroy();
            this.fishesInfo.splice(index, 1);
            this.anims.splice(index, 1);
            return info.id;
        },
        reloadRoutes: function (x, y, z) {
            for (var i_20 = 0; i_20 < this.fishesInfo.length; i_20++) {
                var coord = this.fishesInfo[i_20].endPos;
                if (Math.floor(coord[0]) == x && Math.floor(coord[1]) == y && Math.floor(coord[2]) == z) {
                    this.setTarget(this.fishesInfo[i_20]);
                    this.fishesInfo[i_20].progress = 0;
                    this.updateAnimRotation(i_20);
                }
            }
        },
        removeFishesAt: function (x, y, z) {
            var indexes = this.getFishesIndexInfoAf(x, y, z);
            for (var i_21 = 0; i_21 < indexes.length; i_21++) {
                var info = this.fishesInfo[indexes[i_21] - i_21];
                var pos = this.getPos(info);
                World.drop(pos.x, pos.y, pos.z, info.id, 1, 0);
                this.removeFish(indexes[i_21] - i_21);
            }
        },
        removeFishAt: function (x, y, z) {
            var indexes = this.getFishesIndexInfoAf(x, y, z);
            if (indexes.length > 0)
                return this.removeFish(indexes[0]);
        },
        loadFishes: function () {
            for (var i_22 = 0; i_22 < this.fishesInfo.length; i_22++)
                this.createAnim(i_22);
        },
        addInfo: function (info) {
            if (info.endPos && info.startPos)
                this.fishesInfo.push(info);
        }
    };
    Callback.addCallback('ItemUse', function (coords, item, block) {
        if (block.id == AQUARIUM_ID) {
            for (var i_23 = 0; i_23 < FISH_IDS.length; i_23++)
                if (item.id == FISH_IDS[i_23]) {
                    FishesController.addFish(coords.x, coords.y, coords.z, item.id);
                    Player.decreaseCarriedItem(1);
                    break;
                }
            if (item.id == 0) {
                var id = FishesController.removeFishAt(coords.x, coords.y, coords.z);
                var pos = Player.getPosition();
                if (id)
                    World.drop(pos.x, pos.y, pos.z, id, 1, 0);
            }
            else if (item.id == 325 && item.data == 0) {
                var id = FishesController.removeFishAt(coords.x, coords.y, coords.z);
                if (id) {
                    var pos = Player.getPosition();
                    Player.decreaseCarriedItem(1);
                    World.drop(pos.x, pos.y, pos.z, 325, 1, FISH_BUCKET_DATAS_IDS[FISH_IDS.indexOf(id)]);
                }
            }
            else if (item.id == 325 && item.data > 0 && item.data < 8) {
                Game.prevent();
                FishesController.addFish(coords.x, coords.y, coords.z, FISH_IDS[FISH_BUCKET_DATAS_IDS.indexOf(item.data)]);
            }
        }
    });
    Callback.addCallback('tick', function () {
        FishesController.update();
    });
    Callback.addCallback('DestroyBlock', function (coords, block, player) {
        if (block.id == AQUARIUM_ID) {
            FishesController.removeFishesAt(coords.x, coords.y, coords.z);
            FishesController.reloadRoutes(coords.x, coords.y, coords.z);
        }
    });
    Saver.addSavesScope("fishesInfo", function read(scope) {
        if (scope && scope.arr)
            for (var i_24 in scope.arr)
                FishesController.addInfo(scope.arr[i_24]);
    }, function save() {
        return {
            arr: FishesController.fishesInfo
        };
    });
    Callback.addCallback('LevelDisplayed', function () {
        FishesController.loadFishes();
    });
}());
IDRegistry.genItemID("industrialLamp");
Item.createItem("industrialLamp", "Indastrial lamp", { name: "industrialLamp", meta: 0 }, { stack: 64 });
IDRegistry.genBlockID("industrialLamp");
Block.createBlock("industrialLamp", [
    {
        name: "Indastrial lamp",
        texture: [["quartz_block_top", 0]],
        inCreative: false
    }
], BLOCK_TYPE_LIGHT);
Recipes.addShaped({ id: ItemID.industrialLamp, count: 1, data: 0 }, ["qqq", "qgq", "vbv"], ["b", 155, 0, "q", 406, 0, "g", 89, 0]);
var indLampModel = ModelAPI.newArray();
indLampModel.addBoxByID("leg", 6 / 16, 0, 6 / 16, 10 / 16, 4 / 16, 10 / 16, 155);
indLampModel.addBoxByID("bottom", 4 / 16, 4 / 16, 4 / 16, 12 / 16, 6 / 16, 12 / 16, 155);
indLampModel.addBoxByID("leg0", 4 / 16, 6 / 16, 4 / 16, 6 / 16, 12 / 16, 6 / 16, 155);
indLampModel.addBoxByID("leg1", 4 / 16, 6 / 16, 10 / 16, 6 / 16, 12 / 16, 12 / 16, 155);
indLampModel.addBoxByID("leg2", 10 / 16, 6 / 16, 4 / 16, 12 / 16, 12 / 16, 6 / 16, 155);
indLampModel.addBoxByID("leg3", 10 / 16, 6 / 16, 10 / 16, 12 / 16, 12 / 16, 12 / 16, 155);
indLampModel.addBoxByID("top", 3 / 16, 12 / 16, 3 / 16, 13 / 16, 14 / 16, 13 / 16, 155);
indLampModel.addBoxByID("top2", 6 / 16, 14 / 16, 6 / 16, 10 / 16, 15 / 16, 10 / 16, 155);
indLampModel.addBoxByID("lamp", 7 / 16, 6 / 16, 7 / 16, 9 / 16, 8 / 16, 9 / 16, 41);
FurnitureCore.addRenderedBlock("industrialLamp", "industrialLamp", indLampModel);
IDRegistry.genBlockID("handLantern");
Block.createBlock("handLantern", [
    { name: "Toster", texture: [["glass", 0]], inCreative: false }
], BLOCK_TYPE_WOOD);
IDRegistry.genItemID("handLantern");
Item.createItem("handLantern", "Lantern", { name: "lamp", meta: 0 }, { stack: 64 });
Recipes.addShaped({ id: IDData.item.handLantern, count: 1, data: 0 }, ["viv", "ici", "ici"], ["i", 265, 0, "c", 263, 0]);
Block.setShape(BlockID.handLantern, 5 / 16, 0, 5 / 16, 11 / 16, 1, 11 / 16);
FurnitureCore.addItemBlock("handLantern", "handLantern", function (coords, item, block) {
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.handLantern, coords.side);
    World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z).data.side = coords.side;
});
var render = new ICRender.Model();
var renderUp = new ICRender.Model();
var renderRight = new ICRender.Model();
var renderLeft = new ICRender.Model();
var renderFront = new ICRender.Model();
var renderBack = new ICRender.Model();
var model = BlockRenderer.createModel();
var modelUp = BlockRenderer.createModel();
var modelFront = BlockRenderer.createModel();
var modelBack = BlockRenderer.createModel();
var modelRight = BlockRenderer.createModel();
var modelLeft = BlockRenderer.createModel();
model.addBox(5 / 16, 0, 5 / 16, 11 / 16, 1 / 16, 11 / 16, 1, 6);
model.addBox(6 / 16, 1 / 16, 6 / 16, 10 / 16, 2 / 16, 10 / 16, 1, 6);
model.addBox(7 / 16, 2 / 16, 7 / 16, 9 / 16, 3 / 16, 9 / 16, 1, 6);
model.addBox(6 / 16, 3 / 16, 6 / 16, 10 / 16, 6 / 16, 10 / 16, [["glass_lanterne", 0]]);
model.addBox(7 / 16, 6 / 16, 7 / 16, 9 / 16, 9 / 16, 9 / 16, [["glass_lanterne", 0]]);
model.addBox(6 / 16, 9 / 16, 6 / 16, 10 / 16, 10 / 16, 10 / 16, 1, 6);
model.addBox(7 / 16, 10 / 16, 7 / 16, 9 / 16, 11 / 16, 9 / 16, 1, 6);
model.addBox(5 / 16, 1 / 16, 7.5 / 16, 6 / 16, 2 / 16, 8.5 / 16, 1, 6);
model.addBox(10 / 16, 1 / 16, 7.5 / 16, 11 / 16, 2 / 16, 8.5 / 16, 1, 6);
model.addBox(4 / 16, 2 / 16, 7.5 / 16, 5 / 16, 7 / 16, 8.5 / 16, 1, 6);
model.addBox(11 / 16, 2 / 16, 7.5 / 16, 12 / 16, 7 / 16, 8.5 / 16, 1, 6);
model.addBox(5 / 16, 7 / 16, 7.5 / 16, 6 / 16, 9 / 16, 8.5 / 16, 1, 6);
model.addBox(10 / 16, 7 / 16, 7.5 / 16, 11 / 16, 9 / 16, 8.5 / 16, 1, 6);
model.addBox(5 / 16, 10 / 16, 7.5 / 16, 6 / 16, 12 / 16, 8.5 / 16, 1, 6);
model.addBox(10 / 16, 10 / 16, 7.5 / 16, 11 / 16, 12 / 16, 8.5 / 16, 1, 6);
model.addBox(6 / 16, 12 / 16, 7.5 / 16, 7 / 16, 13 / 16, 8.5 / 16, 1, 6);
model.addBox(9 / 16, 12 / 16, 7.5 / 16, 10 / 16, 13 / 16, 8.5 / 16, 1, 6);
model.addBox(7 / 16, 12 / 16, 7.5 / 16, 9 / 16, 13 / 16, 8.5 / 16, [["stained_clay", 12]]);
modelUp.addBox(5 / 16, 1 / 4, 5 / 16, 11 / 16, 5 / 16, 11 / 16, 1, 6);
modelUp.addBox(6 / 16, 5 / 16, 6 / 16, 10 / 16, 6 / 16, 10 / 16, 1, 6);
modelUp.addBox(7 / 16, 6 / 16, 7 / 16, 9 / 16, 7 / 16, 9 / 16, 1, 6);
modelUp.addBox(6 / 16, 7 / 16, 6 / 16, 10 / 16, 10 / 16, 10 / 16, [["glass_lanterne", 0]]);
modelUp.addBox(7 / 16, 10 / 16, 7 / 16, 9 / 16, 13 / 16, 9 / 16, [["glass_lanterne", 0]]);
modelUp.addBox(6 / 16, 13 / 16, 6 / 16, 10 / 16, 14 / 16, 10 / 16, 1, 6);
modelUp.addBox(7 / 16, 14 / 16, 7 / 16, 9 / 16, 15 / 16, 9 / 16, 1, 6);
modelUp.addBox(5 / 16, 5 / 16, 7.5 / 16, 6 / 16, 6 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(10 / 16, 5 / 16, 7.5 / 16, 11 / 16, 6 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(4 / 16, 6 / 16, 7.5 / 16, 5 / 16, 11 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(11 / 16, 6 / 16, 7.5 / 16, 12 / 16, 11 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(5 / 16, 11 / 16, 7.5 / 16, 6 / 16, 13 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(10 / 16, 11 / 16, 7.5 / 16, 11 / 16, 13 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(5 / 16, 14 / 16, 7.5 / 16, 6 / 16, 16 / 16, 8.5 / 16, 1, 6);
modelUp.addBox(10 / 16, 14 / 16, 7.5 / 16, 11 / 16, 16 / 16, 8.5 / 16, 1, 6);
modelFront.addBox(5 / 16, 0, 10 / 16, 11 / 16, 1 / 16, 16 / 16, 1, 6);
modelFront.addBox(6 / 16, 1 / 16, 11 / 16, 10 / 16, 2 / 16, 15 / 16, 1, 6);
modelFront.addBox(7 / 16, 2 / 16, 12 / 16, 9 / 16, 3 / 16, 14 / 16, 1, 6);
modelFront.addBox(6 / 16, 3 / 16, 11 / 16, 10 / 16, 6 / 16, 15 / 16, [["glass_lanterne", 0]]);
modelFront.addBox(7 / 16, 6 / 16, 12 / 16, 9 / 16, 9 / 16, 14 / 16, [["glass_lanterne", 0]]);
modelFront.addBox(6 / 16, 9 / 16, 11 / 16, 10 / 16, 10 / 16, 15 / 16, 1, 6);
modelFront.addBox(7 / 16, 10 / 16, 12 / 16, 9 / 16, 11 / 16, 14 / 16, 1, 6);
modelFront.addBox(5 / 16, 1 / 16, 12.5 / 16, 6 / 16, 2 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(10 / 16, 1 / 16, 12.5 / 16, 11 / 16, 2 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(4 / 16, 2 / 16, 12.5 / 16, 5 / 16, 7 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(11 / 16, 2 / 16, 12.5 / 16, 12 / 16, 7 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(5 / 16, 7 / 16, 12.5 / 16, 6 / 16, 9 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(10 / 16, 7 / 16, 12.5 / 16, 11 / 16, 9 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(5 / 16, 10 / 16, 12.5 / 16, 6 / 16, 12 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(10 / 16, 10 / 16, 12.5 / 16, 11 / 16, 12 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(6 / 16, 12 / 16, 12.5 / 16, 7 / 16, 13 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(9 / 16, 12 / 16, 12.5 / 16, 10 / 16, 13 / 16, 13.5 / 16, 1, 6);
modelFront.addBox(7 / 16, 12 / 16, 12.5 / 16, 9 / 16, 13 / 16, 13.5 / 16, [["stained_clay", 12]]);
modelFront.addBox(7.5 / 16, 11.5 / 16, 12 / 16, 8.5 / 16, 12 / 16, 1, 5, 0);
modelFront.addBox(7.5 / 16, 12 / 16, 12 / 16, 8.5 / 16, 12.5 / 16, 12.5 / 16, 5, 0);
modelBack.addBox(5 / 16, 0, 0, 11 / 16, 1 / 16, 6 / 16, 1, 6);
modelBack.addBox(6 / 16, 1 / 16, 1 / 16, 10 / 16, 2 / 16, 5 / 16, 1, 6);
modelBack.addBox(7 / 16, 2 / 16, 2 / 16, 9 / 16, 3 / 16, 4 / 16, 1, 6);
modelBack.addBox(6 / 16, 3 / 16, 1 / 16, 10 / 16, 6 / 16, 5 / 16, [["glass_lanterne", 0]]);
modelBack.addBox(7 / 16, 6 / 16, 2 / 16, 9 / 16, 9 / 16, 4 / 16, [["glass_lanterne", 0]]);
modelBack.addBox(6 / 16, 9 / 16, 1 / 16, 10 / 16, 10 / 16, 5 / 16, 1, 6);
modelBack.addBox(7 / 16, 10 / 16, 2 / 16, 9 / 16, 11 / 16, 4 / 16, 1, 6);
modelBack.addBox(5 / 16, 1 / 16, 2.5 / 16, 6 / 16, 2 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(10 / 16, 1 / 16, 2.5 / 16, 11 / 16, 2 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(4 / 16, 2 / 16, 2.5 / 16, 5 / 16, 7 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(11 / 16, 2 / 16, 2.5 / 16, 12 / 16, 7 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(5 / 16, 7 / 16, 2.5 / 16, 6 / 16, 9 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(10 / 16, 7 / 16, 2.5 / 16, 11 / 16, 9 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(5 / 16, 10 / 16, 2.5 / 16, 6 / 16, 12 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(10 / 16, 10 / 16, 2.5 / 16, 11 / 16, 12 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(6 / 16, 12 / 16, 2.5 / 16, 7 / 16, 13 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(9 / 16, 12 / 16, 2.5 / 16, 10 / 16, 13 / 16, 3.5 / 16, 1, 6);
modelBack.addBox(7 / 16, 12 / 16, 2.5 / 16, 9 / 16, 13 / 16, 3.5 / 16, [["stained_clay", 12]]);
modelBack.addBox(7.5 / 16, 11.5 / 16, 0, 8.5 / 16, 12 / 16, 4 / 16, 5, 0);
modelBack.addBox(7.5 / 16, 12 / 16, 3.5 / 16, 8.5 / 16, 12.5 / 16, 4 / 16, 5, 0);
modelRight.addBox(0, 0, 5 / 16, 6 / 16, 1 / 16, 11 / 16, 1, 6);
modelRight.addBox(1 / 16, 1 / 16, 6 / 16, 5 / 16, 2 / 16, 10 / 16, 1, 6);
modelRight.addBox(2 / 16, 2 / 16, 7 / 16, 4 / 16, 3 / 16, 9 / 16, 1, 6);
modelRight.addBox(1 / 16, 3 / 16, 6 / 16, 5 / 16, 6 / 16, 10 / 16, [["glass_lanterne", 0]]);
modelRight.addBox(2 / 16, 6 / 16, 7 / 16, 4 / 16, 9 / 16, 9 / 16, [["glass_lanterne", 0]]);
modelRight.addBox(1 / 16, 9 / 16, 6 / 16, 5 / 16, 10 / 16, 10 / 16, 1, 6);
modelRight.addBox(2 / 16, 10 / 16, 7 / 16, 4 / 16, 11 / 16, 9 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 1 / 16, 5 / 16, 3.5 / 16, 2 / 16, 6 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 1 / 16, 10 / 16, 3.5 / 16, 2 / 16, 11 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 2 / 16, 4 / 16, 3.5 / 16, 7 / 16, 5 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 2 / 16, 11 / 16, 3.5 / 16, 7 / 16, 12 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 7 / 16, 5 / 16, 3.5 / 16, 9 / 16, 6 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 7 / 16, 10 / 16, 3.5 / 16, 9 / 16, 11 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 10 / 16, 5 / 16, 3.5 / 16, 12 / 16, 6 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 10 / 16, 10 / 16, 3.5 / 16, 12 / 16, 11 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 12 / 16, 6 / 16, 3.5 / 16, 13 / 16, 7 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 12 / 16, 9 / 16, 3.5 / 16, 13 / 16, 10 / 16, 1, 6);
modelRight.addBox(2.5 / 16, 12 / 16, 7 / 16, 3.5 / 16, 13 / 16, 9 / 16, [["stained_clay", 12]]);
modelRight.addBox(0, 11.5 / 16, 7.5 / 16, 4 / 16, 12 / 16, 8.5 / 16, 5, 0);
modelRight.addBox(3.5 / 16, 12 / 16, 7.5 / 16, 4 / 16, 12.5 / 16, 8.5 / 16, 5, 0);
modelLeft.addBox(10 / 16, 0, 5 / 16, 16 / 16, 1 / 16, 11 / 16, 1, 6);
modelLeft.addBox(11 / 16, 1 / 16, 6 / 16, 15 / 16, 2 / 16, 10 / 16, 1, 6);
modelLeft.addBox(12 / 16, 2 / 16, 7 / 16, 14 / 16, 3 / 16, 9 / 16, 1, 6);
modelLeft.addBox(11 / 16, 3 / 16, 6 / 16, 15 / 16, 6 / 16, 10 / 16, [["glass_lanterne", 0]]);
modelLeft.addBox(12 / 16, 6 / 16, 7 / 16, 14 / 16, 9 / 16, 9 / 16, [["glass_lanterne", 0]]);
modelLeft.addBox(11 / 16, 9 / 16, 6 / 16, 15 / 16, 10 / 16, 10 / 16, 1, 6);
modelLeft.addBox(12 / 16, 10 / 16, 7 / 16, 14 / 16, 11 / 16, 9 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 1 / 16, 5 / 16, 13.5 / 16, 2 / 16, 6 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 1 / 16, 10 / 16, 13.5 / 16, 2 / 16, 11 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 2 / 16, 4 / 16, 13.5 / 16, 7 / 16, 5 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 2 / 16, 11 / 16, 13.5 / 16, 7 / 16, 12 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 7 / 16, 5 / 16, 13.5 / 16, 9 / 16, 6 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 7 / 16, 10 / 16, 13.5 / 16, 9 / 16, 11 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 10 / 16, 5 / 16, 13.5 / 16, 12 / 16, 6 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 10 / 16, 10 / 16, 13.5 / 16, 12 / 16, 11 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 12 / 16, 6 / 16, 13.5 / 16, 13 / 16, 7 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 12 / 16, 9 / 16, 13.5 / 16, 13 / 16, 10 / 16, 1, 6);
modelLeft.addBox(12.5 / 16, 12 / 16, 7 / 16, 13.5 / 16, 13 / 16, 9 / 16, [["stained_clay", 12]]);
modelLeft.addBox(12 / 16, 11.5 / 16, 7.5 / 16, 1, 12 / 16, 8.5 / 16, 5, 0);
modelLeft.addBox(12 / 16, 12 / 16, 7.5 / 16, 12.5 / 16, 12.5 / 16, 8.5 / 16, 5, 0);
render.addEntry(model);
renderFront.addEntry(modelFront);
renderBack.addEntry(modelBack);
renderRight.addEntry(modelLeft);
renderLeft.addEntry(modelRight);
renderUp.addEntry(modelUp);
BlockRenderer.setStaticICRender(BlockID.handLantern, 0, renderUp);
BlockRenderer.setStaticICRender(BlockID.handLantern, 1, render);
BlockRenderer.setStaticICRender(BlockID.handLantern, 2, renderFront);
BlockRenderer.setStaticICRender(BlockID.handLantern, 3, renderBack);
BlockRenderer.setStaticICRender(BlockID.handLantern, 4, renderRight);
BlockRenderer.setStaticICRender(BlockID.handLantern, 5, renderLeft);
TileEntity.registerPrototype(BlockID.handLantern, {
    tick: function () {
        if (World.getThreadTime() % 15 == 0) {
            if (this.data.side == 1) {
                Particles.addFarParticle(7, this.x + .5, this.y + .3, this.z + .5, 0, 0, 0, 0);
            }
            else if (this.data.side == 0) {
                Particles.addFarParticle(7, this.x + .5, this.y + .7, this.z + .5, 0, 0, 0, 0);
            }
            else if (this.data.side == 2) {
                Particles.addFarParticle(7, this.x + .5, this.y + .3, this.z + .8, 0, 0, 0, 0);
            }
            else if (this.data.side == 3) {
                Particles.addFarParticle(7, this.x + .5, this.y + .3, this.z + .2, 0, 0, 0, 0);
            }
            else if (this.data.side == 4) {
                Particles.addFarParticle(7, this.x + .8, this.y + .3, this.z + .5, 0, 0, 0, 0);
            }
            else {
                Particles.addFarParticle(7, this.x + .2, this.y + .3, this.z + .5, 0, 0, 0, 0);
            }
        }
    }
});
