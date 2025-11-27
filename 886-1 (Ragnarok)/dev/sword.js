IDRegistry.genItemID("fragarach");
IDRegistry.genItemID("gram");
IDRegistry.genItemID("jian");
IDRegistry.genItemID("katana");
IDRegistry.genItemID("khopesh");
IDRegistry.genItemID("macana");
IDRegistry.genItemID("macuahuitl");
IDRegistry.genItemID("trishula");
IDRegistry.genItemID("xiphos");

Item.createItem("fragarach", "Fragarach", {name: "fragarach", meta: 0}, {stack: 1});
Item.createItem("gram", "Gram", {name: "gram", meta: 0}, {stack: 1});
Item.createItem("jian", "Jian", {name: "jian", meta: 0}, {stack: 1});
Item.createItem("katana", "Katana", {name: "katana", meta: 0}, {stack: 1});
Item.createItem("khopesh", "Khopesh", {name: "khopesh", meta: 0}, {stack: 1});
Item.createItem("macana", "Macana", {name: "macana", meta: 0}, {stack: 1});
Item.createItem("macuahuitl", "Macuahuitl", {name: "macuahuitl", meta: 0}, {stack: 1});
Item.createItem("trishula", "Trishula", {name: "trishula", meta: 0}, {stack: 1});
Item.createItem("xiphos", "Xiphos", {name: "xiphos", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fragarach", {durability: 1050, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("gram", {durability: 500, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("jian", {durability: 300, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("katana", {durability: 250, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("khopesh", {durability: 1000, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("macana", {durability: 800, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("macuahuitl", {durability: 800, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("trishula", {durability: 550, level: 3, efficiency: 10, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("xiphos", {durability: 750, level: 3, efficiency: 10, damage: 6, enchantability: 14});

ToolLib.setTool(ItemID.fragarach, "fragarach", ToolType.sword);
ToolLib.setTool(ItemID.gram, "gram", ToolType.sword);
ToolLib.setTool(ItemID.jian, "jian", ToolType.sword);
ToolLib.setTool(ItemID.katana, "katana", ToolType.sword);
ToolLib.setTool(ItemID.khopesh, "khopesh", ToolType.sword);
ToolLib.setTool(ItemID.macana, "macana", ToolType.sword);
ToolLib.setTool(ItemID.macuahuitl, "macuahuitl", ToolType.sword);
ToolLib.setTool(ItemID.trishula, "trishula", ToolType.sword);
ToolLib.setTool(ItemID.xiphos, "xiphos", ToolType.sword);

Recipes.addShaped({id: ItemID.katana, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.yomite_ingot, 0]);

Recipes.addShaped({id: ItemID.jian, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.diyuite_ingot, 0]);

Recipes.addShaped({id: ItemID.gram, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.helheimite_ingot, 0]);

Recipes.addShaped({id: ItemID.trishula, count: 1, data: 0}, [
    "x x",
    " a ",
    " a "
], ['a', 280, 0, 'x', ItemID.narakasite_ingot, 0]);

Recipes.addShaped({id: ItemID.xiphos, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.hadesite_ingot, 0]);

Recipes.addShaped({id: ItemID.macana, count: 1, data: 0}, [
    " x ",
    " a ",
    " x "
], ['a', 280, 0, 'x', ItemID.xibalbaite_ingot, 0]);

Recipes.addShaped({id: ItemID.khopesh, count: 1, data: 0}, [
    " x ",
    "x  ",
    " a "
], ['a', 280, 0, 'x', ItemID.duatite_ingot, 0]);

Recipes.addShaped({id: ItemID.fragarach, count: 1, data: 0}, [
    " x ",
    " x ",
    " a "
], ['a', 280, 0, 'x', ItemID.annwinite_ingot, 0]);

Recipes.addShaped({id: ItemID.macuahuitl, count: 1, data: 0}, [
    "axa",
    " a ",
    " a "
], ['a', 280, 0, 'x', ItemID.xibalbaite_ingot, 0]);