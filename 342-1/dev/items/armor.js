
IDRegistry.genItemID("DirtusBoots");
Item.createArmorItem("DirtusBoots", "§cБотинки Диртуса\n§r 3 защита\nСтавит блоки под вашими ногами\nПолезны при прохождении на Кометы", {name: "DirtusBoots", meta: 0}, {type: "boots", armor: 3, durability: 600, texture: "armor/DirtusBoots.png"});


Recipes.addShaped({id: ItemID.DirtusBoots, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.luhsamboots, 0, 'b', 2, 0]);