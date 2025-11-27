var MachineRegistry = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, register: function (id, Prototype) {
    ICRender.getGroup("io-wire").add(id, -1);
    this.machineIDs[id] = true;
    if (Prototype.defaultValues) {
        Prototype.defaultValues.energy = 0;
    } else {
        Prototype.defaultValues = {energy: 0};
    }
    if (!Prototype.getEnergyStorage) {
        Prototype.getEnergyStorage = function () {
            return 0;
        };
    }
    ToolAPI.registerBlockMaterial(id, "stone");
    TileEntity.registerPrototype(id, Prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, RF);
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}};
ModelHelper = {setBaseModel: function (id) {
    Block.setBlockShape(id, {x: 0.0001, y: 0.0001, z: 0.0001}, {x: 0.9999, y: 0.9999, z: 0.9999});
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, -1, render);
    var model = BlockRenderer.createModel();
    model.addBox(1 / 16, 0, 1 / 16, 15 / 16, 1 / 16, 2 / 16, id, 0);
    model.addBox(1 / 16, 0, 14 / 16, 15 / 16, 1 / 16, 15 / 16, id, 0);
    model.addBox(0 / 16, 1 / 16, 1 / 16, 2 / 16, 2 / 16, 2 / 16, id, 0);
    model.addBox(14 / 16, 1 / 16, 1 / 16, 16 / 16, 2 / 16, 2 / 16, id, 0);
    model.addBox(0 / 16, 1 / 16, 14 / 16, 2 / 16, 2 / 16, 15 / 16, id, 0);
    model.addBox(14 / 16, 1 / 16, 14 / 16, 16 / 16, 2 / 16, 15 / 16, id, 0);
    model.addBox(0 / 16, 1 / 16, 1 / 16, 1 / 16, 15 / 16, 2 / 16, id, 0);
    model.addBox(15 / 16, 1 / 16, 1 / 16, 16 / 16, 15 / 16, 2 / 16, id, 0);
    model.addBox(0 / 16, 1 / 16, 14 / 16, 1 / 16, 15 / 16, 15 / 16, id, 0);
    model.addBox(15 / 16, 1 / 16, 14 / 16, 16 / 16, 15 / 16, 15 / 16, id, 0);
    model.addBox(0 / 16, 14 / 16, 1 / 16, 1 / 16, 15 / 16, 3 / 16, id, 0);
    model.addBox(15 / 16, 14 / 16, 1 / 16, 16 / 16, 15 / 16, 3 / 16, id, 0);
    model.addBox(0 / 16, 14 / 16, 13 / 16, 1 / 16, 15 / 16, 15 / 16, id, 0);
    model.addBox(15 / 16, 14 / 16, 13 / 16, 16 / 16, 15 / 16, 15 / 16, id, 0);
    model.addBox(0 / 16, 15 / 16, 2 / 16, 1 / 16, 16 / 16, 14 / 16, id, 0);
    model.addBox(15 / 16, 15 / 16, 2 / 16, 16 / 16, 16 / 16, 14 / 16, id, 0);
    model.addBox(2 / 16, 14 / 16, 3 / 16, 14 / 16, 15 / 16, 13 / 16, id, 0);
    model.addBox(1 / 16, 9 / 16, 2 / 16, 15 / 16, 14 / 16, 14 / 16, id, 0);
    model.addBox(1 / 16, 8 / 16, 2 / 16, 15 / 16, 9 / 16, 6 / 16, id, 0);
    model.addBox(1 / 16, 8 / 16, 10 / 16, 15 / 16, 9 / 16, 14 / 16, id, 0);
    model.addBox(1 / 16, 4 / 16, 2 / 16, 15 / 16, 8 / 16, 3 / 16, id, 0);
    model.addBox(2 / 16, 8 / 16, 6 / 16, 14 / 16, 9 / 16, 10 / 16, id, 0);
    model.addBox(2 / 16, 7 / 16, 5 / 16, 14 / 16, 8 / 16, 11 / 16, id, 0);
    model.addBox(2 / 16, 3 / 16, 4 / 16, 14 / 16, 7 / 16, 12 / 16, id, 0);
    model.addBox(2 / 16, 2 / 16, 5 / 16, 14 / 16, 3 / 16, 11 / 16, id, 0);
    model.addBox(2 / 16, 1 / 16, 6 / 16, 14 / 16, 2 / 16, 10 / 16, id, 0);
    render.addEntry(model);
}};
var EUCore = {setTier1Add: function (id, nam, tex, Pro) {
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [{name: nam, texture: [[tex, 1], [tex, 2], [tex, 3], [tex, 4], [tex, 5], [tex, 5]], inCreative: true}]);
    ModelHelper.setBaseModel(BlockID[id]);
    MachineRegistry.register(BlockID[id], Pro);
}, isGeneratorFunc: function (type, src) {
    var output = Math.min(32, this.data.energy);
    this.data.energy += src.add(output) - output;
}};
var Sound = {playSound: function (music_file) {
    var mPlayer = new android.media.MediaPlayer();
    var path = __dir__ + "/res/sounds/" + music_file;
    try {
        mPlayer.setDataSource(path);
        mPlayer.prepare();
        mPlayer.start();
    }
    catch (err) {
        Game.message("Playing error: " + err);
    }
}};
var Translate = function (en, rus) {
    Translation.addTranslation(en, {ru: rus});
};
var ToolLIB = {register: function (lol) {
    if (!lol.params.uid) {
        Logger.Log("ToolLIB API params uid undefined", "ERROR");
        return;
    }
    if (!lol.params.textures.meta) {
        lol.params.textures.meta = 0;
    }
    if (!lol.params.textures.name) {
        lol.params.textures.name = "stick";
    }
    lol.funcs.material = ToolAPI.toolMaterials[lol.funcs.material] || lol.funcs.material;
    if (lol.funcs.prototype.useItem) {
        Item.registerUseFunctionForID(ItemID[lol.params.uid], lol.funcs.prototype.useItem);
    }
    if (lol.funcs.prototype.destroyBlock) {
        Callback.addCallback("DestroyBlock", function (coords, block, player) {
            if (Player.getCarriedItem(true).id == ItemID[lol.params.uid]) {
                lol.funcs.prototype.destroyBlock(coords, coords.side, item, block);
            }
        });
    }
    IDRegistry.genItemID(lol.params.uid);
    Item.createItem(lol.params.uid, lol.params.name, {name: lol.params.textures.name, meta: lol.params.textures.meta}, {stack: 1});
    ToolAPI.registerTool(ItemID[lol.params.uid], lol.funcs.material, lol.funcs.prototype);
    if (lol.funcs.enchantType) {
        Item.setEnchantType(ItemID[lol.params.uid], lol.funcs.enchantType, lol.funcs.material.enchantability);
    }
}};
function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (var i in boxes) {
        var box = boxes[i];
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2}, {x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2});
}

