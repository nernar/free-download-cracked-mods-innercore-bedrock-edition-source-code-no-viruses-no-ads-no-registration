IDRegistry.genItemID("coilCopper");
Item.createItem("coilCopper", "Copper coil", {name: "coilCopper", meta: 0}, {stack: 64});
IDRegistry.genItemID("rodIron");
Item.createItem("rodIron", "Iron rod", {name: "rodIron", meta: 0}, {stack: 64});
IDRegistry.genItemID("rodIronCharged");
Item.createItem("rodIronCharged", "\xa7bIron rod", {name: "rodIron", meta: 1}, {stack: 64});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(ItemID.coilCopper, 1, 0, [[ItemID.civWire, 0], [ItemID.civWire, 0], [ItemID.civWire, 0], [ItemID.civWire, 0], [280, 0], [ItemID.civWire, 0], [ItemID.civWire, 0], [ItemID.civWire, 0], [ItemID.civWire, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.electronicMotor, 1, 0, [[ItemID.civWire, 0], [ItemID.plateIron, 0], [ItemID.rodIron, 0], [ItemID.plateIron, 0], [ItemID.rodIronCharged, 0], [ItemID.plateIron, 0], [ItemID.rodIron, 0], [ItemID.plateIron, 0], [ItemID.civWire, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.electronicPiston, 1, 0, [[ItemID.plateIron, 0], [ItemID.plateIron, 0], [ItemID.plateIron, 0], [ItemID.civWire, 0], [ItemID.rodIron, 0], [ItemID.rodIron, 0], [ItemID.civWire, 0], [ItemID.electronicMotor, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.rodIronCharged, 1, 0, [[331, 0], [331, 0], [331, 0], [331, 0], [ItemID.rodIron, 0], [331, 0], [331, 0], [331, 0], [331, 0]], 0);
    for (i in craftingFiles) {
        RecipePattern.withToolRecipe({id: ItemID.rodIron, data: 0}, {id: 265, data: 0}, craftingFiles[i]);
    }
});

