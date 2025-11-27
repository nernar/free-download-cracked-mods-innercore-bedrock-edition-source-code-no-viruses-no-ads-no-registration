Item.defineItems = function (id, types) {
    for (i in types) {
        IDRegistry.genItemID(id + types[i]);
        Item.createItem(id + types[i], types[i] + " " + id, {name: id + types[i], meta: 0}, {stack: 64});
    }
};
Item.defineItems("oreChunk", ["Iron", "Copper", "Redstone", "Cobalt", "Lapis", "Diamond", "Gold", "Dirium", "Downiron", "Tin", "Emerald"]);
Item.defineItems("ingot", ["Copper", "Cobalt", "Tin", "Downiron", "Cobalt", "Dirium", "Bronze"]);
Item.defineItems("plate", ["Iron", "Copper", "Tin", "Downiron", "Dirium", "Cobalt", "Bronze"]);
Item.defineItems("dust", ["Gold", "Iron", "Downiron", "Dirium", "Copper", "Cobalt", "Tin", "Charcoal", "Coal"]);
Item.defineItems("binding", ["Iron", "Cobalt", "Dirium"]);
IDRegistry.genItemID("fireBow");
Item.createItem("fireBow", "Fire bow", {name: "fireBow", meta: 0}, {stack: 64});
IDRegistry.genItemID("circuitRedIron");
Item.createItem("circuitRedIron", "RedIron circuit", {name: "redstoneAndIronChip", meta: 0}, {stack: 64});
IDRegistry.genItemID("electronicMotor");
Item.createItem("electronicMotor", "Electronic motor", {name: "electronicMotor", meta: 0}, {stack: 64});
IDRegistry.genItemID("electronicPiston");
Item.createItem("electronicPiston", "Piston", {name: "electronicPiston", meta: 0}, {stack: 64});
IDRegistry.genItemID("alchemyStone");
Item.createItem("alchemyStone", "Alchemy stone", {name: "alchemyStone", meta: 0}, {stack: 99});
Item.setMaxDamage(ItemID.fireBow, 5);
IDRegistry.genItemID("craftHammerStone");
Item.createItem("craftHammerStone", "Stone hammer", {name: "craftHammerStone", meta: 0}, {stack: 1});
IDRegistry.genItemID("craftHammerIron");
Item.createItem("craftHammerIron", "Iron hammer", {name: "craftHammerIron", meta: 0}, {stack: 1});
IDRegistry.genItemID("craftHammerBronze");
Item.createItem("craftHammerBronze", "Bronze hammer", {name: "craftHammerBronze", meta: 0}, {stack: 1});
IDRegistry.genItemID("craftHammerDirium");
Item.createItem("craftHammerDirium", "Dirium hammer", {name: "craftHammerDirium", meta: 0}, {stack: 1});
IDRegistry.genItemID("craftFileIron");
Item.createItem("craftFileIron", "Iron file", {name: "craftFileIron", meta: 0}, {stack: 1});
IDRegistry.genItemID("craftFileDirium");
Item.createItem("craftFileDirium", "Dirium file", {name: "craftFileDirium", meta: 0}, {stack: 1});
IDRegistry.genItemID("chestLatch");
Item.createItem("chestLatch", "Chest latch", {name: "chestLatch", meta: 0}, {stack: 16});
IDRegistry.genItemID("cuttedLeather");
Item.createItem("cuttedLeather", "Cutted leather", {name: "cuttedLeather", meta: 0}, {stack: 64});
IDRegistry.genItemID("leatherBelt");
Item.createItem("leatherBelt", "Leather belt", {name: "leatherBelt", meta: 0}, {stack: 64});
IDRegistry.genItemID("gearWooden");
Item.createItem("gearWooden", "Wooden gear", {name: "gearWooden", meta: 0}, {stack: 64});
RecipePattern.withToolRecipe({id: ItemID.cuttedLeather, count: 1, data: 0}, {id: 334, data: 0}, ItemID.workbladeFlint);
RecipePattern.withToolRecipe({id: ItemID.leatherBelt, count: 3, data: 0}, {id: ItemID.cuttedLeather, data: 0}, ItemID.workbladeFlint);
Item.setMaxDamage(ItemID.craftHammerStone, 26);
Item.setMaxDamage(ItemID.craftHammerIron, 90);
Item.setMaxDamage(ItemID.craftHammerBronze, 95);
Item.setMaxDamage(ItemID.craftHammerDirium, 550);
Item.setMaxDamage(ItemID.craftFileIron, 50);
Item.setMaxDamage(ItemID.craftFileDirium, 450);
var craftingHammers = [ItemID.craftHammerIron, ItemID.craftHammerBronze, ItemID.craftHammerDirium, ItemID.craftHammerStone];
var craftingFiles = [ItemID.craftFileIron, ItemID.craftFileDirium];
Item.registerUseFunction("fireBow", function (coords, item, block) {
    let plc = coords.relative;
    if (World.getBlockID(plc.x, plc.y, plc.z) == 0 && item.data < 5) {
        World.setBlock(plc.x, plc.y, plc.z, 51);
        Player.setCarriedItem(item.id, 1, item.data + 1);
    }
});
for (i in craftingHammers) {
    Item.registerUseFunction(craftingHammers[i], function (c, item, block) {
        for (i in KineticMachine.machineIDs) {
            if (World.getBlockID(c.x, c.y, c.z) == KineticMachine.machineIDs[i]) {
                Game.tipMessage("Status: Work=" + World.getTileEntity(c.x, c.y, c.z).data.work);
            }
        }
    });
}
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(ItemID.fireBow, 1, 0, [[ItemID.bark_oak, 0], [280, 0], [280, 0], [280, 0], [0, 0], [ItemID.plantRope, 0], [280, 0], [ItemID.plantRope, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.gearWooden, 1, 0, [[280, 0], [5, 0], [280, 0], [5, 0], [ItemID.plantRope, 0], [5, 0], [280, 0], [5, 0], [280, 0]], 0);
    for (let i in craftingHammers) {
        RecipeSystem.addRecipeToWorkbench(ItemID.craftFileIron, 1, 0, [[0, 0], [0, 0], [265, 0], [0, 0], [265, 0], [0, 0], [280, 0], [0, 0], [0, 0]], craftingHammers[i]);
        RecipeSystem.addRecipeToWorkbench(54, 1, 0, [[5, 0], [5, 0], [5, 0], [5, 0], [ItemID.chestLatch, 0], [5, 0], [5, 0], [5, 0], [5, 0]], craftingHammers[i]);
    }
    for (i in craftingFiles) {
        RecipeSystem.addRecipeToWorkbench(ItemID.chestLatch, 1, 0, [[265, 0], [0, 0], [0, 0], [265, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], craftingFiles[i]);
    }
    RecipePattern.pickaxeRecipe({id: ItemID.pickaxeIron, count: 1, data: 0}, {ingot: 265, plate: ItemID.plateIron, binding: ItemID.bindingIron});
    RecipePattern.axeRecipe({id: ItemID.axeIron, count: 1, data: 0}, {ingot: 265, plate: ItemID.plateIron, binding: ItemID.bindingIron});
    RecipePattern.shovelRecipe({id: ItemID.shovelIron, count: 1, data: 0}, {ingot: 265, plate: ItemID.plateIron, binding: ItemID.bindingIron});
    RecipePattern.swordRecipe({id: ItemID.swordIron, count: 1, data: 0}, {ingot: 265, plate: ItemID.plateIron, binding: ItemID.bindingIron});
    RecipePattern.hoeRecipe({id: ItemID.hoeIron, count: 1, data: 0}, {ingot: 265, plate: ItemID.plateIron, binding: ItemID.bindingIron});
    RecipePattern.pickaxeRecipe({id: ItemID.pickaxeDirium, count: 1, data: 0}, {ingot: ItemID.ingotDirium, plate: ItemID.plateDirium, binding: ItemID.bindingDirium});
    RecipePattern.axeRecipe({id: ItemID.axeDirium, count: 1, data: 0}, {ingot: ItemID.ingotDirium, plate: ItemID.plateDirium, binding: ItemID.bindingDirium});
    RecipePattern.shovelRecipe({id: ItemID.shovelDirium, count: 1, data: 0}, {ingot: ItemID.ingotDirium, plate: ItemID.plateDirium, binding: ItemID.bindingDirium});
    RecipePattern.swordRecipe({id: ItemID.swordDirium, count: 1, data: 0}, {ingot: ItemID.ingotDirium, plate: ItemID.plateDirium, binding: ItemID.bindingDirium});
    RecipePattern.hoeRecipe({id: ItemID.hoeDirium, count: 1, data: 0}, {ingot: ItemID.ingotDirium, plate: ItemID.plateDirium, binding: ItemID.bindingDirium});
    RecipePattern.pickaxeRecipe({id: ItemID.pickaxeCobalt, count: 1, data: 0}, {ingot: ItemID.ingotCobalt, plate: ItemID.plateCobalt, binding: ItemID.bindingCobalt});
    RecipePattern.axeRecipe({id: ItemID.axeCobalt, count: 1, data: 0}, {ingot: ItemID.ingotCobalt, plate: ItemID.plateCobalt, binding: ItemID.bindingCobalt});
    RecipePattern.shovelRecipe({id: ItemID.shovelCobalt, count: 1, data: 0}, {ingot: ItemID.ingotCobalt, plate: ItemID.plateCobalt, binding: ItemID.bindingCobalt});
    RecipePattern.swordRecipe({id: ItemID.swordCobalt, count: 1, data: 0}, {ingot: ItemID.ingotCobalt, plate: ItemID.plateCobalt, binding: ItemID.bindingCobalt});
    RecipePattern.hoeRecipe({id: ItemID.hoeCobalt, count: 1, data: 0}, {ingot: ItemID.ingotCobalt, plate: ItemID.plateCobalt, binding: ItemID.bindingCobalt});
    RecipeSystem.addRecipeToWorkbench(ItemID.craftHammerIron, 1, 0, [[0, 0], [265, 0], [265, 0], [280, 0], [280, 0], [265, 0], [0, 0], [265, 0], [265, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.circuitRedIron, 1, 0, [[ItemID.civWire, 0], [ItemID.plateIron, 0], [ItemID.civWire, 0], [ItemID.plateIron, 0], [152, 0], [ItemID.plateIron, 0], [ItemID.civWire, 0], [ItemID.plateIron, 0], [ItemID.civWire, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.craftHammerDirium, 1, 0, [[0, 0], [ItemID.ingotDirium, 0], [ItemID.ingotDirium, 0], [280, 0], [280, 0], [ItemID.ingotDirium, 0], [0, 0], [ItemID.ingotDirium, 0], [ItemID.ingotDirium, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(ItemID.craftHammerStone, 1, 0, [[0, 0], [ItemID.rockStone, 0], [ItemID.rockStone, 0], [280, 0], [287, 0], [ItemID.rockStone, 0], [0, 0], [ItemID.rockStone, 0], [ItemID.rockStone, 0]], 0);
});

