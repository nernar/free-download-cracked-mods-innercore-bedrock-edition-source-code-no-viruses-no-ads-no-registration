function wireRegistry(id, texture, special, visual, energy){
    let specialTypes = false;
    if(special) specialTypes = Block.createSpecialType(special);
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [
        {
            name: energy.energyType+ " Conduct",
            texture: texture,
            inCreative: false
        }
    ], specialTypes);
    Callback.addCallback("PostLoaded", function(){
        ICRender.getGroup(visual.group).add(BlockID[id], -1);
        setupWireRender(BlockID[id], visual.size, visual.group);
        eval(energy.energyType).registerWire(BlockID[id], energy.maxVoltage);
    });
}

function itemWireRegistry(id, name, texture, wire){
    OresAPI.registerItem(id, name[0], {name: texture}, {ru: name[1]}, {}, [defaultItemNameOverride("a", "item"), false]);
    Item.registerUseFunction(id, function (coords, item, block) {
        World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID[wire]);
        Player.decreaseCarriedItem(1);
    });
    Block.registerDropFunctionForID(BlockID[wire], function(c){
        return [[ItemID[id], 1, 0]]
    });
}

wireRegistry("QEconduct", [["conduct", 0]], {lightlevel: 13}, {group: "QE-wire", size: 2/12}, {energyType: "QE", maxVoltage: 2048});
itemWireRegistry("QEconduct", ["QE cable", "QE проводник"], "QE_cable", "QEconduct");

Callback.addCallback("PostLoaded", function(){
    OresAPI.addShapedRecipe([ItemID.QEconduct, 12, 0], ["wiw", "sgs", "wdw"], ["w", 35, -1, "i", 265, 0, "s", 348, 0, "g", 20 , 0, "d", 351, 2]);
});