IDRegistry.genItemID("irradiatedSword");
Item.createItem("irradiatedSword", "Irradiated Sword", {name: "irradiated_sword"}, {stack: 1});
Item.setGlint(ItemID.irradiatedSword, true);

IDRegistry.genItemID("irradiatedPickaxe");
Item.createItem("irradiatedPickaxe", "Irradiated Pickaxe", {name: "irradiated_tool"}, {stack: 1});
Item.setGlint(ItemID.irradiatedPickaxe, true);

ToolAPI.addToolMaterial("irradiatedsw", {durability: 1000, level: 0, efficiency: 4, damage: 8, enchantability: 16});
ToolAPI.addToolMaterial("irradiatedpi", {durability: 1000, level: 6, efficiency: 8, damage: 3, enchantability: 16});

ToolLib.setTool(ItemID.irradiatedSword, "irradiatedsw", ToolType.sword);

ToolLib.setTool(ItemID.irradiatedPickaxe, "irradiatedpi", ToolType.pickaxe);

Item.addRepairItemIds(ItemID.irradiatedSword, [ItemID.irradiatedChunk, ItemID.irradiatedSword]);
Item.addRepairItemIds(ItemID.irradiatedPickaxe, [ItemID.irradiatedChunk, ItemID.irradiatedPickaxe]);

Recipes.addShaped({id: ItemID.irradiatedSword, count: 1, data: 0}, [
    "a",
    "a",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: ItemID.irradiatedPickaxe, count: 1, data: 0}, [
   "aaa",
    "a",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);