ToolAPI.addToolMaterial("copper", {
    durability: 225,
    level: 2,
    efficiency: 6,
    damage: 2,
    enchantability: 14
});

IDRegistry.genItemID("axeCopper");
Item.createItem("axeCopper", "Copper Axe", { name: "axe_copper" });
ToolAPI.setTool(ItemID.axeCopper, "copper", ToolType.axe);
ItemDictionary.setItemCategory(ItemID.axeCopper, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.axeCopper, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.axeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("hoeCopper");
Item.createItem("hoeCopper", "Copper Hoe", { name: "hoe_copper" });
ToolAPI.setTool(ItemID.hoeCopper, "copper", ToolType.hoe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.hoeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearCopper");
Item.createItem("spearCopper", "Copper Spear", { name: "spear_copper" });
ToolAPI.setTool(ItemID.spearCopper, "copper", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeCopper");
Item.createItem("knifeCopper", "Copper Knife", { name: "knife_copper" });
ToolAPI.setTool(ItemID.knifeCopper, "copper", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeCopper, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeCopper, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("pickaxeCopper");
Item.createItem("pickaxeCopper", "Copper Pickaxe", { name: "pickaxe_copper" });
ToolAPI.setTool(ItemID.pickaxeCopper, "copper", ToolType.pickaxe);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.pickaxeCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("swordCopper");
Item.createItem("swordCopper", "Copper Sword", { name: "sword_copper" });
ToolAPI.setTool(ItemID.swordCopper, "copper", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.swordCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("shovelCopper");
Item.createItem("shovelCopper", "Copper Shovel", { name: "shovel_copper" });
ToolAPI.setTool(ItemID.shovelCopper, "copper", ToolType.shovel);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.shovelCopper, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelCopper, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});