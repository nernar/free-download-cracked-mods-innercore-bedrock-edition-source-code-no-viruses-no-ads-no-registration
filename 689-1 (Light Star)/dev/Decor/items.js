//выжигатель
IDRegistry.genItemID("Vijog");
Item.createItem("Vijog", "Burning Machine", {name: "vijog", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Vijog, count: 1, data: 0}, [
		"  a",
		"aab",
		"cc"
	], ['a', 265, 0, 'b', 287, 0, 'c', ItemID.Battarey, 0]);
IDRegistry.genItemID("Doska");
Item.createItem("Doska", "Plank", {name: "doska", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Doska, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', 334, 0, 'b', 5, 0]);
IDRegistry.genItemID("DoskaT");
Item.createItem("DoskaT", "Plank With Tank", {name: "doska", meta: 1}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaT, count: 1, data: 0}, [
		"ab",
		"",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
IDRegistry.genItemID("DoskaS");
Item.createItem("DoskaS", "Plank With Star", {name: "doska", meta: 2}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaS, count: 1, data: 0}, [
		"a",
		"b",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
IDRegistry.genItemID("DoskaH");
Item.createItem("DoskaH", "Plank With Sickle And Hammer", {name: "doska", meta: 3}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaH, count: 1, data: 0}, [
		"",
		"ab",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
//символ
IDRegistry.genItemID("Serp");
Item.createItem("Serp", "Sickle", {name: "Serp", meta: 0}, {stack: 64});
IDRegistry.genItemID("Hamm");
Item.createItem("Hamm", "Hammer", {name: "Hammer", meta: 0}, {stack: 64});
ToolAPI.addToolMaterial("Ussr", {
     durability: 69,
     level: 4, 
     efficiency: 10, 
     damage: 7, 
     enchantability: 22
});
ToolAPI.setTool(ItemID.Serp, "Ussr", ToolType.hoe);
ToolAPI.setTool(ItemID.Hamm, "Ussr", ToolType.sword);
Recipes.addShaped({id: ItemID.Hamm, count: 1, data: 0}, [
		"aaa",
		" a ",
		" a "
	], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.Serp, count: 1, data: 0}, [
		"aaa",
		"a  ",
		" a "
	], ['a', 266, 0]);
IDRegistry.genItemID("Snachok");
Item.createArmorItem("Snachok", "Pin", {name: "Snachok"}, {type: "chestplate", armor: 7, durability: 5556, texture: "armor/Snachok_0.png", isTech:false}); 
Recipes.addShaped({id: ItemID.Snachok, count: 1, data: 0}, [
		"aaa",
		"bac",
		" a "
	], ['a', 265, 0, 'b', ItemID.Serp, 0, 'c', ItemID.Hamm, 0]);
//стакан
IDRegistry.genItemID("Stakan");
Item.createItem("Stakan", "Glass", {name: "Gempty", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Stakan, count: 1, data: 0}, [
		"a a",
		"a a",
		" a "
	], ['a', 20, 0]);
//монетка
IDRegistry.genItemID("MoneyF");
Item.createItem("MoneyF", "50 Kopecks", {name: "denga", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.MoneyF, count: 1, data: 0}, [
		"aa",
		"aa",
		""
	], ['a', 371, 0]);