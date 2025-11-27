IDRegistry.genItemID("voidSword");
IDRegistry.genItemID("voidShovel");
IDRegistry.genItemID("voidPickaxe");
IDRegistry.genItemID("voidAxe");
Item.createItem("voidSword", "Void Sword", {name: "voidsword", meta: 0}, {stack: 1});
Item.createItem("voidShovel", "Void Shovel", {name: "voidshovel", meta: 0}, {stack: 1});
Item.createItem("voidPickaxe", "Void Pickaxe", {name: "voidpickaxe", meta: 0}, {stack: 1});
Item.createItem("voidAxe", "Void Axe", {name: "voidaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("void", {durability: 700, level: 5, efficiency: 10, damage: 12, enchantability: 50});
ToolAPI.setTool(ItemID.voidSword, "void", ToolType.sword);
ToolAPI.setTool(ItemID.voidShovel, "void", ToolType.shovel);
ToolAPI.setTool(ItemID.voidPickaxe, "void", ToolType.pickaxe);
ToolAPI.setTool(ItemID.voidAxe, "void", ToolType.axe);

Recipes.addShaped({id: ItemID.voidSword, count: 1, data: 0}, [
	"a",
	"s",
	"b"
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidShovel, count: 1, data: 0}, [
	"a",
	"s",
	"b"
], ['a', ItemID.voidstick, 0, 'b', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidPickaxe, count: 1, data: 0}, [
	"asa",
	" b ",
	" b "
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);

Recipes.addShaped({id: ItemID.voidAxe, count: 1, data: 0}, [
	"sa",
	"ab",
	" b"
], ['b', ItemID.voidstick, 0, 'a', ItemID.voidingot, 0, 's', ItemID.eyse, 0]);
