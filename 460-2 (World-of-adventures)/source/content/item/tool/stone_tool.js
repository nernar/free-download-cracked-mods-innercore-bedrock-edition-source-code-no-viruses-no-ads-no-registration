ToolAPI.addToolMaterial("factory:stone.header", {
    durability: 10,
    level: 1,
    efficiency: 10,
    damage: 1,
    enchantability: 14
});

ToolAPI.addToolMaterial("factory:stone", {
    durability: 20,
    level: 1,
    efficiency: 10,
    damage: 1,
    enchantability: 14
});

ToolType.stoneBlade = {
    enchantType: Native.EnchantType.weapon,
    damage: 2,
    blockTypes: ["fibre", "plant", "wood"]
};

ToolAPI.setTool(ItemID.headAxeStone, "factory:stone.header", ToolType.stoneBlade);
ToolAPI.setTool(ItemID.headSpearStone, "factory:stone.header", ToolType.stoneBlade);
ToolAPI.setTool(ItemID.headKnifeStone, "factory:stone.header", ToolType.stoneBlade);

ItemDictionary.setItemCategory(ItemID.headAxeStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.headSpearStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.headKnifeStone, "minecraft:tool.axe");

ToolType.knife = {
    enchantType: Native.EnchantType.weapon,
    damage: 4,
    blockTypes: ["fibre", "plant", "wood"]
};

IDRegistry.genItemID("knifeStone");
Item.createItem("knifeStone", "Stone Knife", { name: "knife_stone" });
ToolAPI.setTool(ItemID.knifeStone, "factory:stone", ToolType.knife);
ItemDictionary.setItemCategory(ItemID.knifeStone, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeStone, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("axeStone");
Item.createItem("axeStone", "Stone Axe", { name: "axe_stone" });
ToolAPI.setTool(ItemID.axeStone, "factory:stone", ToolType.axe);
ItemDictionary.setItemCategory(ItemID.axeStone, "minecraft:tool.axe");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.axeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("hoeStone");
Item.createItem("hoeStone", "Stone Hoe", { name: "hoe_stone" });
ToolAPI.setTool(ItemID.hoeStone, "factory:stone", ToolType.hoe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.hoeStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearStone");
Item.createItem("spearStone", "Stone Spear", { name: "spear_stone" });
ToolAPI.setTool(ItemID.spearStone, "factory:stone", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("shovelStone");
Item.createItem("shovelStone", "Stone Shovel", { name: "shovel_stone" });
ToolAPI.setTool(ItemID.shovelStone, "factory:stone", ToolType.shovel);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.shovelStone, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelStone, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Recipes.deleteRecipe({ id: 272, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 273, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 274, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 275, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 291, count: 1, data: -1 });