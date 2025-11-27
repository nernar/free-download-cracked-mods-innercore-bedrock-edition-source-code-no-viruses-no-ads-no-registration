IMPORT("RenderUtil");
IMPORT("ParticlesCore");
Translation.addTranslation("Frame", {
    ru: "Рамка"
});
IDRegistry.genBlockID("full_frame");
Block.createBlock("full_frame", [
    {
        name: "Frame",
        texture: [
            ["full_frame", 0]
        ],
        inCreative: true
    }
], {
    baseBlock: 1,
    destroyTime: 25,
    explosionResistance: 150,
    renderLayer: 1,
    sound: "wood"
});
var BLACK_LIST = [ItemID.chisel, ItemID.hammer, BlockID.full_frame];
var caches = new RenderUtil.ModelsCache("full_frame");
var NAME = "m";
var COUNT = 1;
var STANDARD = new RenderUtil.Model()
    .addBox(NAME, 0, 0, 0, 1, 1, 1, BlockID.full_frame, 0);
BlockRenderer.enableCoordMapping(BlockID.full_frame, 0, STANDARD.getICRenderModel());
caches.add("0", STANDARD);
function addVariant(model) {
    caches.add(String(COUNT), model);
    COUNT++;
}
var ROTATES = {
    0: 1,
    1: 0,
    2: 3,
    3: 2,
    4: 5,
    5: 4
};
function getRotate(name, rotate) {
    return caches.get(name).rotate(rotate);
}
addVariant(new RenderUtil.Model()
    .addBox(NAME, 0, 0, 0, 1, 1 / 16, 1, 0));
addVariant(new RenderUtil.Model()
    .addBox(NAME, 0, 0, 0, 1, .5, 1, 0));
TileEntity.registerPrototype(BlockID.full_frame, {
    defaultValues: {
        id: 0,
        data: 0,
        model: 0,
        side: 0,
        axed: false
    },
    client: new RenderUtil.TileEntityClient({
        buildModel: function (model) {
            try {
                model.getBoxes()[NAME] = getRotate(String(this.networkData.getString("name")), ROTATES[this.networkData.getInt("side")]).getBoxes()[NAME];
                model.getBoxes()[NAME].id = Number(Network.serverToLocalId(this.networkData.getInt("id"))) || BlockID.full_frame;
                model.getBoxes()[NAME].data = Number(this.networkData.getInt("data"));
            }
            catch (e) { }
        }
    }, "full_frame", "0"),
    init: function () {
        this.updateModel();
    },
    dropItem: function () {
        this.blockSource.spawnDroppedItem(this.x, this.y, this.z, this.data.id, 1, this.data.data);
    },
    destroyBlock: function () {
        this.dropItem();
    },
    updateModel: function () {
        RenderUtil.updateModelTileEntity(this.networkData, "full_frame", String(this.data.model));
        this.networkData.putInt("id", this.data.id);
        this.networkData.putInt("data", this.data.data);
        this.networkData.putInt("side", this.data.side);
        this.networkData.sendChanges();
    },
    click: function (id, count, data, coords, player) {
        var info = IDRegistry.getIdInfo(id);
        if (info && info.startsWith("item")) {
            if (id == VanillaItemID.honeycomb && !this.data.axed) {
                var group = new ParticlesCore.Group();
                for (var i = 0; i < 15; i++)
                    group.add("crit", this.x + Math.random(), this.y + Math.random(), this.z + Math.random());
                group.send(this.blockSource);
                this.data.axed = true;
                Game.prevent();
                Entity.setCarriedItem(player, id, count - 1, data);
            }
            return;
        }
        if (BLACK_LIST.indexOf(id) != -1 || this.data.axed || this.data.id != 0)
            return;
        this.data.id = id;
        this.data.data = data;
        this.updateModel();
        Game.prevent();
        Entity.setCarriedItem(player, id, count - 1, data);
    }
});
Recipes.addShaped({ id: BlockID.full_frame, count: 5, data: 0 }, [
    "aaa",
    "aba",
    "aaa"
], [
    'a', VanillaItemID.stick, 0,
    'b', VanillaBlockID.planks, 0
]);
var places = {};
var isItemSpendingAllowed = Game.isItemSpendingAllowed;
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (block.id == BlockID.full_frame && Block.placeFuncs[item.id]) {
        places[item.id] = Block.placeFuncs[item.id];
        Block.placeFuncs[item.id] = function () { };
        Game.isItemSpendingAllowed = function () {
            return false;
        };
    }
}, 2);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (places[item.id]) {
        Block.placeFuncs[item.id] = places[item.id];
        places[item.id] = undefined;
        Game.isItemSpendingAllowed = isItemSpendingAllowed;
    }
}, -2);
Translation.addTranslation("Chisel", {
    ru: "Стамеска"
});
IDRegistry.genItemID("chisel");
Item.createItem("chisel", "Chisel", { name: "chisel", meta: 0 }, { stack: 1 });
Item.setMaxDamage(ItemID.chisel, 256 / 2);
Translation.addTranslation("Hammer", {
    ru: "Молот"
});
IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Hammer", { name: "hammer", meta: 0 }, { stack: 1 });
Item.setMaxDamage(ItemID.hammer, 256);
Translation.addTranslation("Roller", {
    ru: "Валик"
});
IDRegistry.genItemID("cb_roller");
Item.createItem("cb_roller", "Roller", { name: "stick", meta: 0 }, { stack: 1 });
Item.setMaxDamage(ItemID.cb_roller, 512);
Item.registerNameOverrideFunction(ItemID.cb_roller, function (item, translation, name) {
    item.extra = item.extra || new ItemExtraData();
    return translation + "\n" + Translation.translate(Item.getName(item.extra.getInt("id", 0), item.extra.getInt("data")));
});
function breakItem(player, item) {
    item.data++;
    if (item.data >= Item.getMaxDamage(item.id)) {
        item.id = 0;
        item.count = 0;
        item.data = 0;
        item.extra = null;
        World.playSoundAtEntity(player, "random.break", 1);
    }
    Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra || null);
}
Item.registerUseFunction(ItemID.chisel, function (pos, item, block, player) {
    if (block.id == BlockID.full_frame) {
        var region = BlockSource.getDefaultForActor(player);
        var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
        if (!tile)
            tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
        if (tile && !tile.data.axed) {
            tile.dropItem();
            tile.data.axed = false;
            tile.data.id = 0;
            tile.data.data = 0;
            tile.updateModel();
            breakItem(player, item);
        }
    }
});
Item.registerUseFunction(ItemID.hammer, function (pos, item, block, player) {
    if (block.id == BlockID.full_frame) {
        var region = BlockSource.getDefaultForActor(player);
        var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
        if (!tile)
            tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
        if (tile && !tile.data.axed) {
            tile.data.model++;
            if (tile.data.model >= COUNT)
                tile.data.model = 0;
            tile.data.side = pos.side;
            tile.updateModel();
            breakItem(player, item);
        }
    }
});
Item.registerUseFunction(ItemID.cb_roller, function (pos, item, block, player) {
    if (block.id == BlockID.full_frame) {
        var region = BlockSource.getDefaultForActor(player);
        var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
        if (!tile)
            tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
        if (tile) {
            if (Entity.getSneaking(player)) {
                var extra = new ItemExtraData();
                extra.putInt("id", tile.data.id);
                extra.putInt("data", tile.data.data);
                extra.putInt("model", tile.data.model);
                extra.putInt("side", tile.data.side);
                Entity.setCarriedItem(player, item.id, item.count, item.data, extra);
            }
            else if (item.extra && !tile.data.axed) {
                var id = item.extra.getInt("id");
                var data = item.extra.getInt("data");
                var res = id == tile.data.id && data == tile.data.data;
                tile.data.id = id;
                tile.data.data = data;
                tile.data.model = item.extra.getInt("model");
                tile.data.side = item.extra.getInt("side");
                if (!res) {
                    var actor = new PlayerActor(player);
                    for (var slot = 0; slot < 36; slot++) {
                        var slot_item = actor.getInventorySlot(slot);
                        if (slot_item.id == id && slot_item.data == data && slot_item.count > 0) {
                            actor.setInventorySlot(slot, id, slot_item.count - 1, data, slot_item.extra || null);
                            res = true;
                            break;
                        }
                    }
                }
                if (res) {
                    tile.updateModel();
                    breakItem(player, item);
                }
            }
        }
    }
});
Recipes.addShaped({ id: ItemID.chisel, count: 1, data: 0 }, [
    "b",
    "a",
    ""
], [
    'a', BlockID.full_frame, 0,
    'b', VanillaItemID.iron_ingot, 0
]);
Recipes.addShaped({ id: ItemID.hammer, count: 1, data: 0 }, [
    "bb ",
    " ab",
    " a "
], [
    'a', BlockID.full_frame, 0,
    'b', VanillaItemID.iron_ingot, 0
]);
Recipes.addShaped({ id: ItemID.cb_roller, count: 1, data: 0 }, [
    "bbb",
    " c ",
    " a "
], [
    'a', BlockID.full_frame, 0,
    'b', VanillaItemID.stick, 0,
    'c', VanillaItemID.iron_ingot, 0
]);
ModAPI.registerAPI("CarpenterBlocks", {
    requireGlobal: function (cmd) {
        return eval(cmd);
    }
});
