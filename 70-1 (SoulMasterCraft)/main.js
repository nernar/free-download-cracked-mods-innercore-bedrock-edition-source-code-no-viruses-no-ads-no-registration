importLib("ToolType", "*");
IDRegistry.genItemID("crystalSoul");
Item.createItem("crystalSoul", "Soul Crystal", {name: "crystal_soul", meta: 0}, {});
Recipes.addShaped({id: ItemID.crystalSoul, count: 1, data: 0}, [
	"bab",
	"aca",
	"bab"
], ['a', 437, 0, 'b', 445, 0, 'c', 388, 0]); 
IDRegistry.genItemID("corruptedEssence");
Item.createItem("corruptedEssence", "Corrupted Essence", {name: "corrupted_essence", meta: 0}, {});
Recipes.addShaped({id: ItemID.corruptedEssence, count: 1, data: 0}, [
	"bab",
	"aca",
	"bab"
], ['a', 331, 0, 'b', 351, 5, 'c', ItemID.crystalSoul, 0]); 
IDRegistry.genItemID("souliumIngot");
Item.createItem("souliumIngot", "Soulium Ingot", {name: "soulium_ingot", meta: 0}, {});
Recipes.addFurnace(ItemID.corruptedEssence, ItemID.souliumIngot, 0);
ToolAPI.addToolMaterial("soul", {durability: 2999, level: 5, efficiency: 29, damage: 9, enchantability: 30});
IDRegistry.genItemID("soulSword");
Item.createItem("soulSword", "Soul Sword", {name: "soul_sword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.soulSword, "soul", ToolType.sword);
Recipes.addShaped({id: ItemID.soulSword, count: 1, data: 0}, [
	"oao",
	"oac",
	"obo"
], ['a', ItemID.souliumIngot, 0, 'b', 352, 0, 'c', ItemID.crystalSoul, 0]); 
IDRegistry.genItemID("soulPickaxe");
Item.createItem("soulPickaxe", "Soul Pickaxe", {name: "soul_pickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.soulPickaxe, "soul", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.soulPickaxe, count: 1, data: 0}, [
	"aaa",
	"obc",
	"obo"
], ['a', ItemID.souliumIngot, 0, 'b', 352, 0, 'c', ItemID.crystalSoul, 0]); 
IDRegistry.genItemID("soulShovel");
Item.createItem("soulShovel", "Soul Shovel", {name: "soul_shovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.soulShovel, "soul", ToolType.shovel);
Recipes.addShaped({id: ItemID.soulShovel, count: 1, data: 0}, [
	"oao",
	"obc",
	"obo"
], ['a', ItemID.souliumIngot, 0, 'b', 352, 0, 'c', ItemID.crystalSoul, 0]); 
IDRegistry.genItemID("soulAxe");
Item.createItem("soulAxe", "Soul Axe", {name: "soul_axe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.soulAxe, "soul", ToolType.axe);
Recipes.addShaped({id: ItemID.soulAxe, count: 1, data: 0}, [
	"aao",
	"abc",
	"obo"
], ['a', ItemID.souliumIngot, 0, 'b', 352, 0, 'c', ItemID.crystalSoul, 0]); 
IDRegistry.genItemID("soulHoe");
Item.createItem("soulHoe", "Soul Hoe", {name: "soul_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.soulHoe, "soul", ToolType.hoe);
Recipes.addShaped({id: ItemID.soulHoe, count: 1, data: 0}, [
	"aao",
	"obc",
	"obo"
], ['a', ItemID.souliumIngot, 0, 'b', 352, 0, 'c', ItemID.crystalSoul, 0]); 