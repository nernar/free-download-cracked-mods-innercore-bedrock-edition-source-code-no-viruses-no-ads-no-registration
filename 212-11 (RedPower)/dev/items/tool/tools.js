IDRegistry.genItemID("rubySword");
IDRegistry.genItemID("rubyShovel");
IDRegistry.genItemID("rubyPickaxe");
IDRegistry.genItemID("rubyAxe");
IDRegistry.genItemID("rubyHoe");
IDRegistry.genItemID("rubySickle");

Item.createItem("rubySword", "Ruby Sword", {name: "ruby_sword", meta: 0}, {stack: 1});
Item.createItem("rubyShovel", "Ruby Shovel", {name: "ruby_shovel", meta: 0}, {stack: 1});
Item.createItem("rubyPickaxe", "Ruby Pickaxe", {name: "ruby_pickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyAxe", "Ruby Axe", {name: "ruby_axe", meta: 0}, {stack: 1});
Item.createItem("rubyHoe", "Ruby Hoe", {name: "ruby_hoe", meta: 0}, {stack: 1});
Item.createItem("rubySickle", "Ruby Sickle", {name: "ruby_sickle", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 500, level: 3, efficiency: 8, damage: 3, enchantability: 10});
ToolLib.setTool(ItemID.rubySword, "ruby", ToolType.sword);
ToolLib.setTool(ItemID.rubyShovel, "ruby", ToolType.shovel);
ToolLib.setTool(ItemID.rubyPickaxe, "ruby", ToolType.pickaxe);
ToolLib.setTool(ItemID.rubyAxe, "ruby", ToolType.axe);
ToolLib.setTool(ItemID.rubyHoe, "ruby", ToolType.hoe);
ToolLib.setTool(ItemID.rubySickle, "ruby", ToolType.sickle);

Recipes.addShaped({id: ItemID.rubySword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubySickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);


IDRegistry.genItemID("sapphireSword");
IDRegistry.genItemID("sapphireShovel");
IDRegistry.genItemID("sapphirePickaxe");
IDRegistry.genItemID("sapphireAxe");
IDRegistry.genItemID("sapphireHoe");
IDRegistry.genItemID("sapphireSickle");

Item.createItem("sapphireSword", "Sapphire Sword", {name: "sapphire_sword", meta: 0}, {stack: 1});
Item.createItem("sapphireShovel", "Sapphire Shovel", {name: "sapphire_shovel", meta: 0}, {stack: 1});
Item.createItem("sapphirePickaxe", "Sapphire Pickaxe", {name: "sapphire_pickaxe", meta: 0}, {stack: 1});
Item.createItem("sapphireAxe", "Sapphire Axe", {name: "sapphire_axe", meta: 0}, {stack: 1});
Item.createItem("sapphireHoe", "Sapphire Hoe", {name: "sapphire_hoe", meta: 0}, {stack: 1});
Item.createItem("sapphireSickle", "Sapphire Sickle", {name: "sapphire_sickle", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("sapphire", {durability: 500, level: 3, efficiency: 8, damage: 2, enchantability: 10});
ToolLib.setTool(ItemID.sapphireSword, "sapphire", ToolType.sword);
ToolLib.setTool(ItemID.sapphireShovel, "sapphire", ToolType.shovel);
ToolLib.setTool(ItemID.sapphirePickaxe, "sapphire", ToolType.pickaxe);
ToolLib.setTool(ItemID.sapphireAxe, "sapphire", ToolType.axe);
ToolLib.setTool(ItemID.sapphireHoe, "sapphire", ToolType.hoe);
ToolLib.setTool(ItemID.sapphireSickle, "sapphire", ToolType.sickle);

Recipes.addShaped({id: ItemID.sapphireSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphirePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireSickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);


IDRegistry.genItemID("greenSapphireSword");
IDRegistry.genItemID("greenSapphireShovel");
IDRegistry.genItemID("greenSapphirePickaxe");
IDRegistry.genItemID("greenSapphireAxe");
IDRegistry.genItemID("greenSapphireHoe");
IDRegistry.genItemID("greenSapphireSickle");

Item.createItem("greenSapphireSword", "Green Sapphire Sword", {name: "green_sapphire_sword", meta: 0}, {stack: 1});
Item.createItem("greenSapphireShovel", "Green Sapphire Shovel", {name: "green_sapphire_shovel", meta: 0}, {stack: 1});
Item.createItem("greenSapphirePickaxe", "Green Sapphire Pickaxe", {name: "green_sapphire_pickaxe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireAxe", "Green Sapphire Axe", {name: "green_sapphire_axe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireHoe", "Green Sapphire Hoe", {name: "green_sapphire_hoe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireSickle", "Green Sapphire Sickle", {name: "green_sapphire_sickle", meta: 0}, {stack: 1});

ToolLib.setTool(ItemID.greenSapphireSword, "sapphire", ToolType.sword);
ToolLib.setTool(ItemID.greenSapphireShovel, "sapphire", ToolType.shovel);
ToolLib.setTool(ItemID.greenSapphirePickaxe, "sapphire", ToolType.pickaxe);
ToolLib.setTool(ItemID.greenSapphireAxe, "sapphire", ToolType.axe);
ToolLib.setTool(ItemID.greenSapphireHoe, "sapphire", ToolType.hoe);
ToolLib.setTool(ItemID.greenSapphireSickle, "sapphire", ToolType.sickle);

Recipes.addShaped({id: ItemID.greenSapphireSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphirePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireSickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
