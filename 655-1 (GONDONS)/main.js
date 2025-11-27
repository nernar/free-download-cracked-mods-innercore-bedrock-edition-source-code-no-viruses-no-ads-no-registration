IDRegistry.genItemID("RedstoneGondon");
Item.createItem("RedstoneGondon", "мини редстоуновая пыль", {name: "redstoneGondon", meta: 0}, {stack: 64});

IDRegistry.genItemID("huggetChk");
Item.createFoodItem("huggetChk", "нагетс", {name: "nugget_chicken", meta: 0}, {stack: 64, food: 1});

IDRegistry.genItemID("DiamondGondon");
Item.createItem("DiamondGondon", "алмазный кусочек", {name: "diamond_Gondon", meta: 0}, {stack: 64});

IDRegistry.genItemID("LapisGondon");
Item.createItem("LapisGondon", "лазуритовый кусочек", {name: "lapis_Gondon", meta: 0}, {stack: 64});

IDRegistry.genItemID("cobblestone_pidr"); 
Item.createThrowableItem("cobblestone_pidr", "Камушек", { name: "throwable_huyy", meta: 0}, {});

IDRegistry.genItemID("obsidian_Gondon");
Item.createItem("obsidian_Gondon", "§6Обсидиановый обломок", {name: "obsidian_Gondon", meta: 0}, {stack: 64});

IDRegistry.genItemID("emerald_Gondon");
Item.createItem("emerald_Gondon", "Кусок изумруда", {name: "emerald_nugget", meta: 0}, {stack: 64});

IDRegistry.genItemID("quar");
Item.createItem("quar", "Кусок кварца", {name: "quww", meta: 0}, {stack: 64});

IDRegistry.genItemID("nu");
Item.createFoodItem("nu", "Обжаренный нагетс", {name: "nugget_chickenn", meta: 0}, {stack: 64, food: 3});
Recipes.addShaped({id: ItemID.obsidian_Gondon, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 49, 0]);
Recipes.addShaped({id: ItemID.DiamondGondon, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 264, 0]);
Recipes.addShaped({id: ItemID.cobblestone_pidr, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 4, 0]);
Recipes.addShaped({id: ItemID.LapisGondon, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 351, 4]);
Recipes.addShaped({id: ItemID.huggetChk, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 365, 0]);
Recipes.addShaped({id: ItemID.NiggerGondon, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 263, 0]);
Recipes.addShaped({id: ItemID.RedstoneGondon, count: 9, data: 0}, [
 "  d",
 "   ",
 "   "
], ["d", 331, 0]);
Recipes.addShaped({id: ItemID.emerald_Gondon, count: 9, data: 0}, [
    "a  ",
    "   ",
    "   "
], ["a", 388, 0]);

Recipes.addShaped({id: ItemID.quar, count: 9, data: 0}, [
    "a  ",
    "   ",
    "   "
], ["a", 406, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ["a", ItemID.emerald_Gondon, 0]);
Recipes.addShaped({id: 331, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.RedstoneGondon, 0]);
Recipes.addShaped({id: 263, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.NiggerGondon, 0]);
Recipes.addShaped({id: 365, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.huggetChk, 0]);
Recipes.addShaped({id: 351, count: 1, data: 4}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.LapisGondon, 0]);
Recipes.addShaped({id: 4, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.cobblestone_pidr, 0]);
Recipes.addShaped({id: 264, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.DiamondGondon, 0]);
Recipes.addShaped({id: 49, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "ddd"
], ["d", ItemID.obsidian_Gondon, 0]);
Recipes.addShaped({id: 406, count: 1, data: 0}, [
  "ddd",
  "ddd",
  "ddd"
  ], ["d", ItemID.quar, 0]);
  IDRegistry.genItemID("NiggerGondon");
Item.createItem("NiggerGondon", "кусочек угля ", {name: "coal_gondon", meta: 0}, {stack: 64});
Recipes.addFurnace(ItemID.huggetChk, ItemID.nu, 0);
Recipes.addFurnaceFuel(ItemID.NiggerGondon, 0, 78);