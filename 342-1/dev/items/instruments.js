IDRegistry.genItemID("luxtarsword");
IDRegistry.genItemID("luxtarpickaxe");
IDRegistry.genItemID("luxtaraxe");
IDRegistry.genItemID("luxtarshovel");
Item.createItem("luxtarsword", "§aЛукстарровый меч\n§r\n 6.5 урон", {name: "luxtarsword", meta: 0}, {stack: 1});
Item.createItem("luxtarpickaxe", "§2Лукстарровая кирка", {name: "luxtarpickaxe", meta: 0}, {stack: 1});
Item.createItem("luxtaraxe", "§2Лукстарровый топор", {name: "luxtaraxe", meta: 0}, {stack: 1});
Item.createItem("luxtarshovel", "§2Лукстарровая лопата", {name: "luxtarshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("luxtar", {durability: 1500, level: 3, efficiency: 50, damage: 6.5, enchantability: 14});
ToolAPI.setTool(ItemID.luxtarsword, "luxtar", ToolType.sword);
ToolAPI.setTool(ItemID.luxtarpickaxe, "luxtar", ToolType.pickaxe);
ToolAPI.setTool(ItemID.luxtaraxe, "luxtar", ToolType.axe);
ToolAPI.setTool(ItemID.luxtarshovel, "luxtar", ToolType.shovel);



IDRegistry.genItemID("darkhamsword");
IDRegistry.genItemID("darkhampickaxe");
IDRegistry.genItemID("darkhamaxe");
IDRegistry.genItemID("darkhamshovel");
Item.createItem("darkhamsword", "§aДаркхэмовый меч\n§r\n 7 урон", {name: "darkhamsword", meta: 0}, {stack: 1});
Item.createItem("darkhampickaxe", "§2Даркхэмовая кирка", {name: "darkhampickaxe", meta: 0}, {stack: 1});
Item.createItem("darkhamaxe", "§2Даркхэмовый топор", {name: "darkhamaxe", meta: 0}, {stack: 1});
Item.createItem("darkhamshovel", "§2Даркхэмовая лопата", {name: "darkhamshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkham", {durability: 1570, level: 4, efficiency: 50, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.darkhamsword, "darkham", ToolType.sword);
ToolAPI.setTool(ItemID.darkhampickaxe, "darkham", ToolType.pickaxe);
ToolAPI.setTool(ItemID.darkhamaxe, "darkham", ToolType.axe);
ToolAPI.setTool(ItemID.darkhamshovel, "darkham", ToolType.shovel);



IDRegistry.genItemID("aquaturasword");
IDRegistry.genItemID("aquaturapickaxe");
IDRegistry.genItemID("aquaturaaxe");
IDRegistry.genItemID("aquaturashovel");
Item.createItem("aquaturasword", "§aАкватуровый меч\n§r\n 8 урон", {name: "aquaturasword", meta: 0}, {stack: 1});
Item.createItem("aquaturapickaxe", "§2Акватуровая кирка", {name: "aquaturapickaxe", meta: 0}, {stack: 1});
Item.createItem("aquaturaaxe", "§2Акватуровый топор", {name: "aquaturaaxe", meta: 0}, {stack: 1});
Item.createItem("aquaturashovel", "§2Акватуровая лопата", {name: "aquaturashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aquatura", {durability: 1600, level: 5, efficiency: 70, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.aquaturasword, "aquatura", ToolType.sword);
ToolAPI.setTool(ItemID.aquaturapickaxe, "aquatura", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aquaturaaxe, "aquatura", ToolType.axe);
ToolAPI.setTool(ItemID.aquaturashovel, "aquatura", ToolType.shovel);





Recipes.addShaped({id: ItemID.luxtarsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtarpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtaraxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtarshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.darkhamsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhampickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhamaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhamshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.aquaturasword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturapickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturaaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturashovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);











IDRegistry.genItemID("nightsword");
IDRegistry.genItemID("nightpickaxe");
IDRegistry.genItemID("nightaxe");
IDRegistry.genItemID("nightshovel");
Item.createItem("nightsword", "§aНочной меч\n§r\n 25 урон", {name: "nightsword", meta: 0}, {stack: 1});
Item.createItem("nightpickaxe", "§2Ночная кирка", {name: "nightpickaxe", meta: 0}, {stack: 1});
Item.createItem("nightaxe", "§2Ночной топор", {name: "nightaxe", meta: 0}, {stack: 1});
Item.createItem("nightshovel", "§2Ночная лопата", {name: "nightshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("night", {durability: 2000, level: 5, efficiency: 50, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.nightsword, "night", ToolType.sword);
ToolAPI.setTool(ItemID.nightpickaxe, "night", ToolType.pickaxe);
ToolAPI.setTool(ItemID.nightaxe, "night", ToolType.axe);
ToolAPI.setTool(ItemID.nightshovel, "night", ToolType.shovel);

Recipes.addShaped({id: ItemID.nightsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);








IDRegistry.genItemID("skylitesword");
IDRegistry.genItemID("skylitepickaxe");
IDRegistry.genItemID("skyliteaxe");
IDRegistry.genItemID("skyliteshovel");
Item.createItem("skylitesword", "§aСкайлитовый меч\n§r\n 30 урон", {name: "skylitesword", meta: 0}, {stack: 1});
Item.createItem("skylitepickaxe", "§2Скайлитовая кирка", {name: "skylitepickaxe", meta: 0}, {stack: 1});
Item.createItem("skyliteaxe", "§2Скайлитовый топор", {name: "skyliteaxe", meta: 0}, {stack: 1});
Item.createItem("skyliteshovel", "§2Скайлитовая лопата", {name: "skyliteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("skylite", {durability: 2100, level: 6, efficiency: 50, damage: 30, enchantability: 14});
ToolAPI.setTool(ItemID.skylitesword, "skylite", ToolType.sword);
ToolAPI.setTool(ItemID.skylitepickaxe, "skylite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.skyliteaxe, "skylite", ToolType.axe);
ToolAPI.setTool(ItemID.skyliteshovel, "skylite", ToolType.shovel);

Recipes.addShaped({id: ItemID.skylitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skylitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skyliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skyliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);











IDRegistry.genItemID("aerolitesword");
IDRegistry.genItemID("aerolitepickaxe");
IDRegistry.genItemID("aeroliteaxe");
IDRegistry.genItemID("aeroliteshovel");
Item.createItem("aerolitesword", "§aАэролитовый меч\n§r\n 37 урон", {name: "aerolitesword", meta: 0}, {stack: 1});
Item.createItem("aerolitepickaxe", "§2Аэролитовая кирка", {name: "aerolitepickaxe", meta: 0}, {stack: 1});
Item.createItem("aeroliteaxe", "§2Аэролитовый топор", {name: "aeroliteaxe", meta: 0}, {stack: 1});
Item.createItem("aeroliteshovel", "§2Аэролитовая лопата", {name: "aeroliteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aerolite", {durability: 2100, level: 6, efficiency: 100, damage: 37, enchantability: 14});
ToolAPI.setTool(ItemID.aerolitesword, "aerolite", ToolType.sword);
ToolAPI.setTool(ItemID.aerolitepickaxe, "aerolite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aeroliteaxe, "aerolite", ToolType.axe);
ToolAPI.setTool(ItemID.aeroliteshovel, "aerolite", ToolType.shovel);

Recipes.addShaped({id: ItemID.aerolitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aerolitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aeroliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aeroliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);




IDRegistry.genItemID("bloodsword");
IDRegistry.genItemID("bloodpickaxe");
IDRegistry.genItemID("bloodaxe");
IDRegistry.genItemID("bloodshovel");
Item.createItem("bloodsword", "§aКровавый меч\n§r\n 37 урон", {name: "bloodsword", meta: 0}, {stack: 1});
Item.createItem("bloodpickaxe", "§2Кровавая кирка", {name: "bloodpickaxe", meta: 0}, {stack: 1});
Item.createItem("bloodaxe", "§2Кровавый топор", {name: "bloodaxe", meta: 0}, {stack: 1});
Item.createItem("bloodshovel", "§2Кровавая лопата", {name: "bloodshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("blood", {durability: 2100, level: 6, efficiency: 100, damage: 45, enchantability: 14});
ToolAPI.setTool(ItemID.bloodsword, "blood", ToolType.sword);
ToolAPI.setTool(ItemID.bloodpickaxe, "blood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bloodaxe, "blood", ToolType.axe);
ToolAPI.setTool(ItemID.bloodshovel, "blood", ToolType.shovel);

Recipes.addShaped({id: ItemID.bloodsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);




























