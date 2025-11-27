IDRegistry.genItemID("candySword");
Item.createItem("candySword", "Candy Sword", {name: "candy_cane_sword"}, {stack: 1});
ToolAPI.addToolMaterial("candysw", {durability: 69, level: 2, efficiency: 0, damage: 5, enchantability: 6});

ToolLib.setTool(ItemID.candySword, "candysw", ToolType.sword);

Recipes.addShaped({id: ItemID.candySword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.candyCane, 0, 'b', ItemID.candyCorn, 0]);

Item.addRepairItemIds(ItemID.candySword, [ItemID.candyCorn, ItemID.candySword]);