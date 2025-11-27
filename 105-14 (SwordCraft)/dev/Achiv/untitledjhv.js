api.AchievementPopup.show({ 
title: "Здание выполнено", 
description: "Теперь освой его", 
item: { 
id: ItemID.BSword1, 
data: 0, 
count: 1}
}); 
IDRegistry.genItemID("MechN17");
Item.createItem("MechN17", "Пламя Феникса", {name: "Phoen", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("MechN17", {durability: 222, level: 0, efficiency: 10, damage: 0, enchantability: 14});
ToolAPI.setTool(ItemID.MechN17, "MechN17", ToolType.sword);
Recipes.addShaped({id: ItemID.MechN17, count: 1, data: 0}, [
" c ",
" e ",
" r "
], ['e', ItemID.Blade, 0, 'c', ItemID.Blade1, 0, 'r', ItemID.RukoyatD, 0]);




