IDRegistry.genBlockID("photovoltaicCell");
Block.createBlock("photovoltaicCell", [{name: "Photovoltaic cell", texture: [["solarPanelSide", 0], ["solarPanelTop", 0], ["solarPanelSide", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.photovoltaicCell, {x: 0, y: 0, z: 0}, {x: 1, y: 0.2, z: 1});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.photovoltaicCell, count: 1, data: 0}, ["aga", "sgs", "epe"], ["e", ItemID.electricalSteel, 0, "a", ItemID.energeticAlloy, 0, "s", ItemID.silicon, 0, "p", 151, 0, "g", BlockID.fusedQuartz, 0]);
});
MachineRegistry.registerPrototype(BlockID.photovoltaicCell, {isGenerator: function () {
    return true;
}, energyTick: function (type, src) {
    let output = 10;
    if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
        src.add(output);
    }
}});
IDRegistry.genBlockID("advancedPhotovoltaicCell");
Block.createBlock("advancedPhotovoltaicCell", [{name: "Advanced photovoltaic cell", texture: [["solarPanelAdvancedSide", 0], ["solarPanelAdvancedTop", 0], ["solarPanelAdvancedSide", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.advancedPhotovoltaicCell, {x: 0, y: 0, z: 0}, {x: 1, y: 0.2, z: 1});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.advancedPhotovoltaicCell, count: 1, data: 0}, ["aga", "sgs", "epe"], ["e", ItemID.energeticAlloy, 0, "a", ItemID.vibrantCrystal, 0, "s", ItemID.pulsatingIron, 0, "p", 151, 0, "g", BlockID.fusedQuartz, 0]);
});
MachineRegistry.registerPrototype(BlockID.advancedPhotovoltaicCell, {isGenerator: function () {
    return true;
}, energyTick: function (type, src) {
    let output = 40;
    if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
        src.add(output);
    }
}});
IDRegistry.genBlockID("vibrantPhotovoltaicCell");
Block.createBlock("vibrantPhotovoltaicCell", [{name: "Advanced photovoltaic cell", texture: [["solarPanelVibrantSide", 0], ["solarPanelVibrantTop", 0], ["solarPanelVibrantSide", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.vibrantPhotovoltaicCell, {x: 0, y: 0, z: 0}, {x: 1, y: 0.2, z: 1});
MachineRegistry.registerPrototype(BlockID.vibrantPhotovoltaicCell, {isGenerator: function () {
    return true;
}, energyTick: function (type, src) {
    let output = 160;
    if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
        src.add(output);
    }
}});

