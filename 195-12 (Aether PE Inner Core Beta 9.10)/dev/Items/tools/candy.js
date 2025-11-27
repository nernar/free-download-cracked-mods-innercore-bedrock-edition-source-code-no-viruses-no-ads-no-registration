IDRegistry.genItemID("candySword");
Item.createItem("candySword", "Candy Sword", {name: "candy_cane_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("candysw", {durability: 65, level: 2, efficiency: 2, damage: 5, enchantability: 14});

ToolAPI.setTool(ItemID.candySword, "candysw", ToolType.sword);
Item.setToolRender(ItemID.candySword, true);

Recipes.addShaped({id: ItemID.candySword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.candyCane, 0, 'b', ItemID.candyCorn, 0]);