Block.createResourceBlock = function (id, name) {
    IDRegistry.genBlockID(id + "Block");
    Block.createBlock(id + "Block", [{name: name + " block", texture: [[id + "Block", 0]], inCreative: true}], "opaque");
    Callback.addCallback("PostLoaded", function () {
        Recipes.addShaped({id: BlockID[id + "Block"], count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID[id], 0]);
        Recipes.addShapeless({id: ItemID[id], count: 9, data: 0}, [{id: BlockID[id + "Block"], data: 0}]);
    });
};
Block.createResourceBlock("conductiveIron", "Conductive iron");
Block.createResourceBlock("darkSteel", "Dark steel");
Block.createResourceBlock("electricalSteel", "Electrical steel");
Block.createResourceBlock("soulariumIngot", "Soularium");
IDRegistry.genBlockID("machineChassi");
Block.createBlock("machineChassi", [{name: "Machine chassis", texture: [["machineChassi", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.machineChassi, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 101, -1, "b", 265, 0, "c", ItemID.basicCapacitor, 0]);
});

