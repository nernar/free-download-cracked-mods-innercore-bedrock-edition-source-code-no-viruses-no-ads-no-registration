//метталургия 0.1

importLib("ToolType", "*");

var darkstone = [1,2, 35,37,4, 18, 27, 28,13];



//характеристики блоков
var olovot = Block.createSpecialType({ 
base: 1,
destroytime: 2
});
var medt = Block.createSpecialType({ 
base: 1,
destroytime: 2.5
});
var platinat = Block.createSpecialType({ 
base: 1,
destroytime: 3.5
});
var voliframt = Block.createSpecialType({ 
base: 1,
destroytime: 4
});
var uraniumt = Block.createSpecialType({ 
base: 1,
destroytime: 5
});
var titant = Block.createSpecialType({ 
base: 1,
destroytime: 6.5
});
var litertt = Block.createSpecialType({ 
base: 1,
destroytime: 7.5
});
var dlitertt = Block.createSpecialType({ 
base: 1,
destroytime: 9
});

//руды
IDRegistry.genBlockID("olovo"); 
Block.createBlock("olovo", [{name: "Olovo", texture: [["olovo", 0]], inCreative: true}],olovot)
ToolAPI.registerBlockMaterial(BlockID.olovo, "stone");
IDRegistry.genBlockID("med"); 
Block.createBlock("med", [{name: "Med", texture: [["med", 0]], inCreative: true}],medt)
ToolAPI.registerBlockMaterial(BlockID.med, "stone");
IDRegistry.genBlockID("platina");
Block.createBlock("platina", [{name: "Platinum ore", texture: [["platina", 0]], inCreative: true}],platinat)
ToolAPI.registerBlockMaterial(BlockID.platina, "stone");
IDRegistry.genBlockID("volifram"); 
Block.createBlock("volifram", [{name: "Volifram", texture: [["volifram", 0]], inCreative: true}],voliframt)
ToolAPI.registerBlockMaterial(BlockID.volifram, "stone");
IDRegistry.genBlockID("uranium"); 
Block.createBlock("uranium", [{name: "Uranium", texture: [["uranium", 0]], inCreative: true}],uraniumt)
ToolAPI.registerBlockMaterial(BlockID.uranium, "stone");
IDRegistry.genBlockID("titan");
Block.createBlock("titan", [{name: "Titan", texture: [["titan", 0]], inCreative: true}],titant)
ToolAPI.registerBlockMaterial(BlockID.titan, "stone");
IDRegistry.genBlockID("lit"); 
Block.createBlock("lit", [{name: "Litert", texture: [["litert", 0]], inCreative: true}],litertt)
ToolAPI.registerBlockMaterial(BlockID.lit, "stone");
IDRegistry.genBlockID("dl"); 
Block.createBlock("dl", [{name: "Dark litert", texture: [["darklitert", 0]], inCreative: true}],dlitertt)
ToolAPI.registerBlockMaterial(BlockID.dl, "stone");
IDRegistry.genBlockID("ds"); 
Block.createBlock("ds", [{name: "Dark stone", texture: [["darks", 0]], inCreative: true}])
Block.setBlockShape(BlockID.ds, {x: 0.5, y: 0, z: 0.4}, {x: 0.6, y: 0.8, z: 0.5});
IDRegistry.genBlockID("sch"); 
Block.createBlock("sch", [{name: "Sch", texture: [["bsch", 0],["sch",0],["bsch",0],["dsb",0],["bsch",0],["bsch",0]], inCreative: true}])
Block.setBlockShape(BlockID.sch, {x: 0, y: 0, z: 0}, {x: 1, y: 0.5, z: 1});
Block.registerDropFunctionForID(BlockID.ds, function(coords, id, data, diggingLevel, toolLevel){ 
	return [[ItemID.ods, 1, 0]];
	});
	IDRegistry.genBlockID("dsb"); 
Block.createBlock("dsb", [{name: "Dsb", texture: [["dsb", 0]], inCreative: true}])
//слитки
IDRegistry.genItemID("olovo");
Item.createItem("olovo", "Olovo ingot", {name: "olovo", meta: 0}, {});
IDRegistry.genItemID("med");
Item.createItem("med", "Med ingot", {name: "med", meta: 0}, {});
IDRegistry.genItemID("titan");
Item.createItem("titan", "Titan ingot", {name: "titan", meta: 0}, {});
IDRegistry.genItemID("uran");
Item.createItem("uran", "Uranium ingot", {name: "uranium", meta: 0}, {});
IDRegistry.genItemID("plat");
Item.createItem("plat", "Platinum ingot", {name: "platina", meta: 0}, {});
IDRegistry.genItemID("lit");
Item.createItem("lit", "Litert ingot", {name: "litert", meta: 0}, {});
IDRegistry.genItemID("dl");
Item.createItem("dl", "Darklitert ingot", {name: "darklitert", meta: 0}, {});
IDRegistry.genItemID("volifram");
Item.createItem("volifram", "Volifram ingot", {name: "volifram", meta: 0}, {});
//сплавы
IDRegistry.genItemID("osplav");
Item.createItem("osplav", "Osplav", {name: "osplav", meta: 0}, {});
IDRegistry.genItemID("msplav");
Item.createItem("msplav", "Msplav", {name: "msplav", meta: 0}, {});
IDRegistry.genItemID("psplav");
Item.createItem("psplav", "Psplav", {name: "psplav", meta: 0}, {});
IDRegistry.genItemID("vsplav");
Item.createItem("vsplav", "Vsplav", {name: "vsplav", meta: 0}, {});
IDRegistry.genItemID("usplav");
Item.createItem("usplav", "Usplav", {name: "usplav", meta: 0}, {});
IDRegistry.genItemID("tsplav");
Item.createItem("tsplav", "Tsplav", {name: "tsplav", meta: 0}, {});
IDRegistry.genItemID("lsplav");
Item.createItem("lsplav", "Lsplav", {name: "lsplav", meta: 0}, {});
IDRegistry.genItemID("dlsplav");
Item.createItem("dlsplav", "Dlsplav", {name: "dlsplav", meta: 0}, {});
IDRegistry.genItemID("platinod");
Item.createItem("platinod", "Platinod", {name: "platinod", meta: 0}, {});
IDRegistry.genItemID("litron");
Item.createItem("litron", "Litron", {name: "litron", meta: 0}, {});
IDRegistry.genItemID("medrod");
Item.createItem("medrod", "Medrod", {name: "medrod", meta: 0}, {});

//инструменты
IDRegistry.genItemID("olovosword");
Item.createItem("olovosword", "Olovosword", {name: "os", meta: 0}, {stack:1});
IDRegistry.genItemID("olovokirka");
Item.createItem("olovokirka", "Olovo pickaxe", {name: "ok", meta: 0}, {stack:1});
IDRegistry.genItemID("ot");
Item.createItem("ot", "Ot", {name: "ot", meta: 0}, {stack:1});
IDRegistry.genItemID("ol");
Item.createItem("ol", "Ol", {name: "ol", meta: 0}, {stack:1});
IDRegistry.genItemID("medsword");
Item.createItem("medsword", "Medsword", {name: "ms", meta: 0}, {stack:1});
IDRegistry.genItemID("mk");
Item.createItem("mk", "Mk", {name: "mk", meta: 0}, {stack:1});
IDRegistry.genItemID("mt");
Item.createItem("mt", "Mt", {name: "mt", meta: 0}, {stack:1});
IDRegistry.genItemID("ml");
Item.createItem("ml", "Ml", {name: "ml", meta: 0}, {stack:1});
IDRegistry.genItemID("plasword");
Item.createItem("plasword", "Platinasword", {name: "ps", meta: 0}, {stack:1});
IDRegistry.genItemID("pk");
Item.createItem("pk", "Pk", {name: "pk", meta: 0}, {stack:1});
IDRegistry.genItemID("pt");
Item.createItem("pt", "Pt", {name: "pt", meta: 0}, {stack:1});
IDRegistry.genItemID("pl");
Item.createItem("pl", "Pl", {name: "pl", meta: 0}, {stack:1});
IDRegistry.genItemID("volisword");
Item.createItem("volisword", "Volisword", {name: "vs", meta: 0}, {stack:1});
IDRegistry.genItemID("vk");
Item.createItem("vk", "Vk", {name: "vk", meta: 0}, {stack:1});
IDRegistry.genItemID("vt");
Item.createItem("vt", "Vt", {name: "vt", meta: 0}, {stack:1});
IDRegistry.genItemID("vl");
Item.createItem("vl", "Vl", {name: "vl", meta: 0}, {stack:1});
IDRegistry.genItemID("ursword");
Item.createItem("ursword", "Ursword", {name: "us", meta: 0}, {stack:1});
IDRegistry.genItemID("uk");
Item.createItem("uk", "Uk", {name: "uk", meta: 0}, {stack:1});
IDRegistry.genItemID("ut");
Item.createItem("ut", "Ut", {name: "ut", meta: 0}, {stack:1});
IDRegistry.genItemID("ul");
Item.createItem("ul", "Ul", {name: "ul", meta: 0}, {stack:1});
IDRegistry.genItemID("titsword");
Item.createItem("titsword", "Titsword", {name: "ts", meta: 0}, {stack:1});
IDRegistry.genItemID("tk");
Item.createItem("tk", "Tk", {name: "tk", meta: 0}, {stack:1});
IDRegistry.genItemID("tt");
Item.createItem("tt", "Tt", {name: "tt", meta: 0}, {stack:1});
IDRegistry.genItemID("tl");
Item.createItem("tl", "tl", {name: "tl", meta: 0}, {stack:1});
IDRegistry.genItemID("litsword");
Item.createItem("litsword", "Litsword", {name: "ls", meta: 0}, {stack:1});
IDRegistry.genItemID("lk");
Item.createItem("lk", "Lk", {name: "lk", meta: 0}, {stack:1});
IDRegistry.genItemID("lt");
Item.createItem("lt", "Lt", {name: "lt", meta: 0}, {stack:1});
IDRegistry.genItemID("ll");
Item.createItem("ll", "Ll", {name: "ll", meta: 0}, {stack:1});
IDRegistry.genItemID("dlsword");
Item.createItem("dlsword", "Dlsword", {name: "dls", meta: 0}, {stack:1});
IDRegistry.genItemID("dlk");
Item.createItem("dlk", "Dlk", {name: "dlk", meta: 0}, {stack:1});
IDRegistry.genItemID("dlt");
Item.createItem("dlt", "Dlt", {name: "dlt", meta: 0}, {stack:1});
IDRegistry.genItemID("dll");
Item.createItem("dll", "Dll", {name: "dll", meta: 0}, {stack:1});
IDRegistry.genItemID("lis");
Item.createItem("lis", "Lis", {name: "lis", meta: 0}, {stack:1});
IDRegistry.genItemID("lik");
Item.createItem("lik", "Lik", {name: "lik", meta: 0}, {stack:1});
IDRegistry.genItemID("litt");
Item.createItem("litt", "Litt", {name: "lit", meta: 0}, {stack:1});
IDRegistry.genItemID("lil");
Item.createItem("lil", "Lil", {name: "lil", meta: 0}, {stack:1});

//прочее
IDRegistry.genItemID("milo");
Item.createItem("milo", "Milo", {name: "milo", meta: 0}, {stack:32});
IDRegistry.genItemID("darkstone");
Item.createItem("darkstone", "Dark stone", {name: "darkstone", meta: 0}, {stack:16});
IDRegistry.genItemID("ods");
Item.createItem("ods", "Ods", {name: "ods", meta: 0}, {stack:64});
//генерация руд
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<50;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 100); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.olovo, 0, 8); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<25;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 100); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.med, 0, 5); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<13;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 55); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.platina, 0, 4); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<11;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.volifram, 0, 3); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<9;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.uranium, 0, 3); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<9;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, -1, 20); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.titan, 0, 2); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<7;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, -1, 10); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lit, 0, 1); 
}});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i=0;i<5;i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, -1, 10); 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dl, 0, 1); 
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){	if(Math.random() <1){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in darkstone ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ds, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);									}		}	}});

//перевод
Translation.addTranslation("Olovo", {ru: "Оловянная руда"});
Translation.addTranslation("Titan", {ru: "Титановая руда"});
Translation.addTranslation("Uranium", {ru: "Ураниум"});
Translation.addTranslation("Platinum ore", {ru: "Платиновая руда"});
Translation.addTranslation("Med", {ru: "Медная руда"});
Translation.addTranslation("Litert", {ru: "Литертовая руда"});
Translation.addTranslation("Dark litert", {ru: "Тёмная литертовая руда"});
Translation.addTranslation("Volifram", {ru: "Вольфрамовая руда"});
Translation.addTranslation("Volifram ingot", {ru: "Вольфрамовый слиток"});
Translation.addTranslation("Olovo ingot", {ru: "Оловянный слиток"});
Translation.addTranslation("Med ingot", {ru: "Медный слиток"});
Translation.addTranslation("Platinum ingot", {ru: "Платиновый слиток"});
Translation.addTranslation("Titan ingot", {ru: "Титановый слиток"});
Translation.addTranslation("Uranium ingot", {ru: "Слиток ураниума"});
Translation.addTranslation("Litert ingot", {ru: "Литертовый слиток"});
Translation.addTranslation("Darklitert ingot", {ru: "Тёмный литертовый слиток"});
Translation.addTranslation("Olovosword", {ru: "Оловянный меч"});
Translation.addTranslation("Olovo pickaxe", {ru: "Оловянная кирка"});
Translation.addTranslation("Medsword", {ru: "Медный меч"});
Translation.addTranslation("Mk", {ru: "Медная кирка"});
Translation.addTranslation("Platinasword", {ru: "Платиновый меч"});
Translation.addTranslation("Pk", {ru: "Платиновая кирка"});
Translation.addTranslation("Volisword", {ru: "Вольфрамовый меч"});
Translation.addTranslation("Vk", {ru: "Вольфрамовая кирка"});
Translation.addTranslation("Ursword", {ru: "Меч из ураниума"});
Translation.addTranslation("Uk", {ru: "Кирка из ураниума"});
Translation.addTranslation("Titsword", {ru: "Титановый меч"});
Translation.addTranslation("Tk", {ru: "Титановая кирка"});
Translation.addTranslation("Litsword", {ru: "Литертовый меч"});
Translation.addTranslation("Lk", {ru: "Литертовая кирка"});
Translation.addTranslation("Dlsword", {ru: "Тёмный литертовый меч"});
Translation.addTranslation("Dlk", {ru: "Тёмная литертовая кирка"});

//свойства
//olovo
ToolAPI.addToolMaterial("olovo", {durability: 85, level: 1, efficiency: 2, damage: 5.5, enchantability: 1});
ToolAPI.setTool(ItemID.olovosword, "olovo", ToolType.sword);
ToolAPI.setTool(ItemID.olovokirka, "olovo", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ot, "olovo", ToolType.axe);
ToolAPI.setTool(ItemID.ol, "olovo", ToolType.shovel);
//med
ToolAPI.addToolMaterial("med", {durability: 190, level: 3, efficiency: 4, damage: 6, enchantability: 1});
ToolAPI.setTool(ItemID.medsword, "med", ToolType.sword);
ToolAPI.setTool(ItemID.mk, "med", ToolType.pickaxe);
ToolAPI.setTool(ItemID.mt, "med", ToolType.axe);
ToolAPI.setTool(ItemID.ml, "med", ToolType.shovel);
//platina
ToolAPI.addToolMaterial("platina", {durability: 335, level: 4, efficiency: 6.5, damage: 7, enchantability: 1});
ToolAPI.setTool(ItemID.plasword, "platina", ToolType.sword);
ToolAPI.setTool(ItemID.pk, "platina", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pt, "platina", ToolType.axe);
ToolAPI.setTool(ItemID.pl, "platina", ToolType.shovel);
//volifram
ToolAPI.addToolMaterial("voli", {durability: 515, level: 4, efficiency: 8.5, damage: 9, enchantability: 1});
ToolAPI.setTool(ItemID.volisword, "voli", ToolType.sword);
ToolAPI.setTool(ItemID.vk, "voli", ToolType.pickaxe);
ToolAPI.setTool(ItemID.vt, "voli", ToolType.axe);
ToolAPI.setTool(ItemID.vl, "voli", ToolType.shovel);
//uranium
ToolAPI.addToolMaterial("ur", {durability: 785, level: 4, efficiency: 12, damage: 12, enchantability: 1});
ToolAPI.setTool(ItemID.ursword, "ur", ToolType.sword);
ToolAPI.setTool(ItemID.uk, "ur", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ut, "ur", ToolType.axe);
ToolAPI.setTool(ItemID.ul, "ur", ToolType.shovel);
//titan
ToolAPI.addToolMaterial("tit", {durability: 940, level: 4, efficiency: 15, damage: 14.5, enchantability: 1});
ToolAPI.setTool(ItemID.titsword, "tit", ToolType.sword);
ToolAPI.setTool(ItemID.tk, "tit", ToolType.pickaxe);
ToolAPI.setTool(ItemID.tt, "tit", ToolType.axe);
ToolAPI.setTool(ItemID.tl, "tit", ToolType.shovel);
//litert
ToolAPI.addToolMaterial("lit", {durability: 1130, level: 4, efficiency: 17, damage: 16, enchantability: 1});
ToolAPI.setTool(ItemID.litsword, "lit", ToolType.sword);
ToolAPI.setTool(ItemID.lk, "lit", ToolType.pickaxe);
ToolAPI.setTool(ItemID.lt, "lit", ToolType.axe);
ToolAPI.setTool(ItemID.ll, "lit", ToolType.shovel);
//dl
ToolAPI.addToolMaterial("dl", {durability: 1305, level: 4, efficiency: 19, damage: 19, enchantability: 1});
ToolAPI.setTool(ItemID.dlsword, "dl", ToolType.sword);
ToolAPI.setTool(ItemID.dlk, "dl", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dlt, "dl", ToolType.axe);
ToolAPI.setTool(ItemID.dll, "dl", ToolType.shovel);
//литрон
ToolAPI.addToolMaterial("litron", {durability: 1600, level: 4, efficiency: 22, damage: 22, enchantability: 1});
ToolAPI.setTool(ItemID.lis, "litron", ToolType.sword);
ToolAPI.setTool(ItemID.lik, "litron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.litt, "litron", ToolType.axe);
ToolAPI.setTool(ItemID.lil, "litron", ToolType.shovel);



//рецепты
Recipes.addShaped({id: ItemID.olovosword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.olovo, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.medsword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.med, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.plasword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.plat, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.volisword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.volifram, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ursword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.uran, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.titsword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.titan, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.litsword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.lit, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.dlsword, count: 1, data: 0}, [
		 " a",
		 " a",
		 " b"
	], ['a', ItemID.dl, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.olovokirka, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.olovo, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.mk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.med, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.pk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.plat, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.vk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.volifram, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.uk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.uran, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.tk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.titan, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.lk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.lit, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.dlk, count: 1, data: 0}, [
		 "aaa",
		  " b",
		  " b"
	], ['a', ItemID.dl, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ot, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.olovo, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.mt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.med, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.pt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.plat, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ut, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.uran, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.tt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.titan, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.vt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.volifram, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.lt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.lit, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.dlt, count: 1, data: 0}, [
		  "aa ",
		  "ab ",
		  " b "
	], ['a', ItemID.dl, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ol, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.olovo, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ml, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.med, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.pl, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.plat, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.vl, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.volifram, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ul, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.uran, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.tl, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.titan, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.ll, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.lit, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.dll, count: 1, data: 0}, [
		  " a",
		  " b",
		  " b"
	], ['a', ItemID.dl, 0, 'b', 280, 0]);
	Recipes.addShaped({id: ItemID.darkstone, count: 1, data: 0}, [
		  " a ",
		  "aba",
		  " a "
	], ['a', ItemID.ods, 0, 'b', 388,0]);
	Recipes.addShaped({id: BlockID.dsb, count: 1, data: 0}, [
		  " a ",
		  "aba",
		  " a "
	], ['a', ItemID.darkstone, 0, 'b', 264,0]);
	
IDRegistry.genItemID("oh");
Item.createArmorItem("oh", "Oh", {name: "oh"}, {type: "helmet", armor: 1, durability: 60, texture: "armor/o1_1.png"});
IDRegistry.genItemID("och");
Item.createArmorItem("och", "Och", {name: "och"}, {type: "chestplate", armor: 2, durability: 90, texture: "armor/o1_1.png"});
IDRegistry.genItemID("ole");
Item.createArmorItem("ole", "Ole", {name: "ole"}, {type: "leggings", armor: 2, durability: 75, texture: "armor/o2_2.png"});
IDRegistry.genItemID("ob");
Item.createArmorItem("ob", "Ob", {name: "ob"}, {type: "boots", armor: 1, durability: 50, texture: "armor/o1_1.png"});
IDRegistry.genItemID("mh");
Item.createArmorItem("mh", "Mh", {name: "mh"}, {type: "helmet", armor: 2, durability: 160, texture: "armor/m1_1.png"});
IDRegistry.genItemID("mch");
Item.createArmorItem("mch", "Mch", {name: "mch"}, {type: "chestplate", armor: 3, durability: 200, texture: "armor/m1_1.png"});
IDRegistry.genItemID("mle");
Item.createArmorItem("mle", "Mle", {name: "mle"}, {type: "leggings", armor: 3, durability: 175, texture: "armor/m2_2.png"});
IDRegistry.genItemID("mb");
Item.createArmorItem("mb", "Mb", {name: "mb"}, {type: "boots", armor: 1, durability: 150, texture: "armor/m1_1.png"});
IDRegistry.genItemID("ph");
Item.createArmorItem("ph", "Ph", {name: "ph"}, {type: "helmet", armor: 2, durability: 300, texture: "armor/p1_1.png"});
IDRegistry.genItemID("pch");
Item.createArmorItem("pch", "Pch", {name: "pch"}, {type: "chestplate", armor: 5, durability: 350, texture: "armor/p1_1.png"});
IDRegistry.genItemID("ple");
Item.createArmorItem("ple", "Ple", {name: "ple"}, {type: "leggings", armor: 4, durability: 325, texture: "armor/p2_2.png"});
IDRegistry.genItemID("pb");
Item.createArmorItem("pb", "Pb", {name: "pb"}, {type: "boots", armor: 1, durability: 275, texture: "armor/p1_1.png"});
IDRegistry.genItemID("vh");
Item.createArmorItem("vh", "Vh", {name: "vh"}, {type: "helmet", armor: 2, durability: 500, texture: "armor/v1_1.png"});
IDRegistry.genItemID("vch");
Item.createArmorItem("vch", "Vch", {name: "vch"}, {type: "chestplate", armor: 7, durability: 540, texture: "armor/v1_1.png"});
IDRegistry.genItemID("vle");
Item.createArmorItem("vle", "Vle", {name: "vle"}, {type: "leggings", armor: 5, durability: 515, texture: "armor/v2_2.png"});
IDRegistry.genItemID("vb");
Item.createArmorItem("vb", "Vb", {name: "vb"}, {type: "boots", armor: 2, durability: 475, texture: "armor/v1_1.png"});
IDRegistry.genItemID("uh");
Item.createArmorItem("uh", "Uh", {name: "uh"}, {type: "helmet", armor: 3, durability: 750, texture: "armor/u1_1.png"});
IDRegistry.genItemID("uch");
Item.createArmorItem("uch", "Uch", {name: "uch"}, {type: "chestplate", armor: 9, durability: 800, texture: "armor/u1_1.png"});
IDRegistry.genItemID("ule");
Item.createArmorItem("ule", "Ule", {name: "ule"}, {type: "leggings", armor: 7, durability: 770, texture: "armor/u2_2.png"});
IDRegistry.genItemID("ub");
Item.createArmorItem("ub", "Ub", {name: "ub"}, {type: "boots", armor: 1, durability: 725, texture: "armor/u1_1.png"});
IDRegistry.genItemID("th");
Item.createArmorItem("th", "Th", {name: "th"}, {type: "helmet", armor: 4, durability: 960, texture: "armor/t1_1.png"});
IDRegistry.genItemID("tch");
Item.createArmorItem("tch", "Tch", {name: "tch"}, {type: "chestplate", armor: 12, durability: 1005, texture: "armor/t1_1.png"});
IDRegistry.genItemID("tle");
Item.createArmorItem("tle", "Tle", {name: "tle"}, {type: "leggings", armor: 9, durability: 975, texture: "armor/t2_2.png"});
IDRegistry.genItemID("tb");
Item.createArmorItem("tb", "Tb", {name: "tb"}, {type: "boots", armor: 4, durability: 950, texture: "armor/t1_1.png"});
IDRegistry.genItemID("lh");
Item.createArmorItem("lh", "Lh", {name: "lh"}, {type: "helmet", armor: 5, durability: 1160, texture: "armor/l1_1.png"});
IDRegistry.genItemID("lch");
Item.createArmorItem("lch", "Lch", {name: "lch"}, {type: "chestplate", armor: 13, durability: 1200, texture: "armor/l1_1.png"});
IDRegistry.genItemID("lle");
Item.createArmorItem("lle", "Lle", {name: "lle"}, {type: "leggings", armor: 11, durability: 1175, texture: "armor/l2_2.png"});
IDRegistry.genItemID("lb");
Item.createArmorItem("lb", "Lb", {name: "lb"}, {type: "boots", armor: 5, durability: 1150, texture: "armor/l1_1.png"});
IDRegistry.genItemID("dlh");
Item.createArmorItem("dlh", "Dlh", {name: "dlh"}, {type: "helmet", armor: 7, durability: 1460, texture: "armor/dl1_1.png"});
IDRegistry.genItemID("dlch");
Item.createArmorItem("dlch", "Dlch", {name: "dlch"}, {type: "chestplate", armor: 15, durability: 1500, texture: "armor/dl1_1.png"});
IDRegistry.genItemID("dlle");
Item.createArmorItem("dlle", "Dlle", {name: "dlle"}, {type: "leggings", armor: 14, durability: 1475, texture: "armor/dl2_2.png"});
IDRegistry.genItemID("dlb");
Item.createArmorItem("dlb", "Dlb", {name: "dlb"}, {type: "boots", armor: 6, durability: 1450, texture: "armor/dl1_1.png"});
IDRegistry.genItemID("lih");
Item.createArmorItem("lih", "Lih", {name: "lih"}, {type: "helmet", armor: 9, durability: 1350, texture: "armor/li1_1.png"});
IDRegistry.genItemID("lich");
Item.createArmorItem("lich", "Lich", {name: "lich"}, {type: "chestplate", armor: 16, durability: 1450, texture: "armor/li1_1.png"});
IDRegistry.genItemID("lile");
Item.createArmorItem("lile", "Lile", {name: "lile"}, {type: "leggings", armor: 15, durability: 1400, texture: "armor/li2_2.png"});
IDRegistry.genItemID("lib");
Item.createArmorItem("lib", "Lib", {name: "lib"}, {type: "boots", armor: 9, durability: 1300, texture: "armor/li1_1.png"});

Recipes.addShaped({id: ItemID.oh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.olovo, 0]);
	Recipes.addShaped({id: ItemID.mh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.med, 0]);
	Recipes.addShaped({id: ItemID.ph, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.plat, 0]);
	Recipes.addShaped({id: ItemID.vh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.volifram, 0]);
	Recipes.addShaped({id: ItemID.uh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.uran, 0]);
	Recipes.addShaped({id: ItemID.th, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.titan, 0]);
	Recipes.addShaped({id: ItemID.lh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.lit, 0]);
	Recipes.addShaped({id: ItemID.dlh, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "   "
	], ['a', ItemID.dl, 0]);
	Recipes.addShaped({id: ItemID.och, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.olovo, 0]);
	Recipes.addShaped({id: ItemID.mch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.med, 0]);
	Recipes.addShaped({id: ItemID.pch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.plat, 0]);
	Recipes.addShaped({id: ItemID.vch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.volifram, 0]);
	Recipes.addShaped({id: ItemID.uch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.uran, 0]);
	Recipes.addShaped({id: ItemID.tch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.titan, 0]);
	Recipes.addShaped({id: ItemID.lch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.lit, 0]);
	Recipes.addShaped({id: ItemID.dlch, count: 1, data: 0}, [
		  "a a",
		  "aaa",
		  "aaa"
	], ['a', ItemID.dl, 0]);
	Recipes.addShaped({id: ItemID.ole, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.olovo, 0]);
	Recipes.addShaped({id: ItemID.mle, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.med, 0]);
	Recipes.addShaped({id: ItemID.ple, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.plat, 0]);
	Recipes.addShaped({id: ItemID.vle, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.volifram, 0]);
	Recipes.addShaped({id: ItemID.ule, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.uran, 0]);
	Recipes.addShaped({id: ItemID.tle, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.titan, 0]);
	Recipes.addShaped({id: ItemID.lle, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.lit, 0]);
	Recipes.addShaped({id: ItemID.dlle, count: 1, data: 0}, [
		  "aaa",
		  "a a",
		  "a a"
	], ['a', ItemID.dl, 0]);
	Recipes.addShaped({id: ItemID.ob, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.olovo, 0]);
	Recipes.addShaped({id: ItemID.mb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.med, 0]);
	Recipes.addShaped({id: ItemID.pb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.plat, 0]);
	Recipes.addShaped({id: ItemID.vb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.volifram, 0]);
	Recipes.addShaped({id: ItemID.ub, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.uran, 0]);
	Recipes.addShaped({id: ItemID.tb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.titan, 0]);
	Recipes.addShaped({id: ItemID.lb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.lit, 0]);
	Recipes.addShaped({id: ItemID.dlb, count: 1, data: 0}, [
		  "   ",
		  "a a",
		  "a a"
	], ['a', ItemID.dl, 0]);
	Recipes.addShaped({id: BlockID.sch, count: 1, data: 0}, [
		  "    ",
		  "w w",
		  "aba"
	], ['a', ItemID.darkstone, 0, 'b', BlockID.dsb, 0, 'w', 264, 0]);
    Recipes.addFurnace(BlockID.olovo, ItemID.olovo, 0);
	Recipes.addFurnace(BlockID.med, ItemID.med, 0);
	Recipes.addFurnace(BlockID.platina, ItemID.plat, 0);
	Recipes.addFurnace(BlockID.volifram, ItemID.volifram, 0);
	Recipes.addFurnace(BlockID.uranium, ItemID.uran, 0);
	Recipes.addFurnace(BlockID.titan, ItemID.titan, 0);
	Recipes.addFurnace(BlockID.lit, ItemID.lit, 0);
	Recipes.addFurnace(BlockID.dl, ItemID.dl, 0);
	Recipes.addFurnace(ItemID.olovo, ItemID.osplav, 0);
	Recipes.addFurnace(ItemID.med, ItemID.msplav, 0);
	Recipes.addFurnace(ItemID.plat, ItemID.psplav, 0);
	Recipes.addFurnace(ItemID.volifram, ItemID.vsplav, 0);
	Recipes.addFurnace(ItemID.uran, ItemID.usplav, 0);
	Recipes.addFurnace(ItemID.titan, ItemID.tsplav, 0);
	Recipes.addFurnace(ItemID.lit, ItemID.lsplav, 0);
	Recipes.addFurnace(ItemID.dl, ItemID.dlsplav, 0);
	
IDRegistry.genBlockID("mci");
Block.createBlockWithRotation("mci", [{name: "Splavb", texture: [["machine",3],["machine",2],["machine",3],["machine",0],["machine",3],["machine",3]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.mci, {

    defaultValues: {
    },

    getGuiScreen: function () {
        return mciGUI;
    },

    tick: function () {
    var slo = this.container.getSlot("slotInput");
    var slt = this.container.getSlot("slotInput1");
    var osl = this.container.getSlot("slotOutput");
    var top = this.container.getSlot("slottoplivo");
    var wall = slo.id==35;
    
     if(slo.id == ItemID.dlsplav && slt.id == ItemID.usplav && top.id == 263 && osl.id == 0){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.litron, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.usplav && slt.id == ItemID.dlsplav && slt.data == 0 && osl.id == 0 && top.id == 263){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.litron, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.psplav && slt.id == ItemID.tsplav && slt.data == 0 && osl.id == 0 && top.id ==263){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.platinod, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.tsplav && slt.id == ItemID.psplav && slt.data == 0 && osl.id == 0 && top.id == 263){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.platinod, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.msplav && slt.id == ItemID.psplav && slt.data == 0 && osl.id == 0 && top.id == 263){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.medrod, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.psplav && slt.id == ItemID.msplav && slt.data == 0 && osl.id == 0 && top.id == 263){
     slo.count--;
     slt.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.medrod, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.dlch && osl.id == 0 && top.id == 263){
     slo.count--;
     top.count--;
	this.container.setSlot("slotOutput", ItemID.medrod, 1, 0)
	osl.count++;
	this.container.validateAll();
    }
}});
    
        

var mciGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "metall"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 620, y: 150, bitmap: "testbar", scale: 4}
    ],
    elements: {
       "slotInput": {type: "slot", bitmap: "testslot2",x: 500, y: 150, size:100},
             "slotInput1": {type: "slot", bitmap: "testslot2",x: 700, y: 150, size:100},
        "slotOutput": {type: "slot", x: 600, y: 350, size:100},
              "slottoplivo": {type: "slot", bitmap: "testslot3",x: 600, y: 50, size:100}
    }
});


IDRegistry.genBlockID("smc");
Block.createBlockWithRotation("smc", [{name: "Dmachine", texture: [["smachine",2],["smachine",1],["smachine",2],["smachine",0],["smachine",2],["smachine",2]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.smc, {

    defaultValues: {
    },

    getGuiScreen: function () {
        return smcGUI;
    },

    tick: function () {
    var slo = this.container.getSlot("slotInput");
    var slt = this.container.getSlot("slotInput1");
    var osl = this.container.getSlot("slotOutput");
    var wall = slo.id==35;
    
     if(slo.id == ItemID.oh && slt.id == ItemID.milo && slt.count >= 8 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.oh, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.och && slt.id == ItemID.milo && slt.count >= 8 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.och, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.ole && slt.id == ItemID.milo && slt.count >= 8 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.ole, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.ob && slt.id == ItemID.milo && slt.count >= 8 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.ob, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
        if(slo.id == ItemID.mh && slt.id == ItemID.milo && slt.count >= 10 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.mh, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.mch && slt.id == ItemID.milo && slt.count >= 10 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.mch, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.mle && slt.id == ItemID.milo && slt.count >= 10 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.mle, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.mb && slt.id == ItemID.milo && slt.count >= 10 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.mb, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.ph && slt.id == ItemID.milo && slt.count >= 14 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.ph, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.pch && slt.id == ItemID.milo && slt.count >= 14 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.pch, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.ple && slt.id == ItemID.milo && slt.count >= 14 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.ple, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
    if(slo.id == ItemID.pb && slt.id == ItemID.milo && slt.count >= 14 && osl.id == 0){
     slo.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
     slt.count--;
	this.container.setSlot("slotOutput", ItemID.pb, 0, 0)
	osl.count++;
	this.container.validateAll();
    }
}

});
    
        

var smcGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "smachine"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {type: "bitmap", x: 620, y: 150, bitmap: "testbar", scale: 4}
    ],
    elements: {
       "slotInput": {type: "slot", x: 500, y: 150, size:100},
             "slotInput1": {type: "slot", bitmap: "testslot", x: 700, y: 150, size:100},
        "slotOutput": {type: "slot", x: 600, y: 350, size:100}
    }
});
Translation.addTranslation("smachine", {ru: "Стирально-чинильная машина"});







IDRegistry.genBlockID("uv");
Block.createBlockWithRotation("uv", [{name: "Uv", texture: [["uv",1],["uv",0],["uv",1],["uv",1],["uv",1],["uv",1]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.uv, {

    defaultValues: {
    },

    getGuiScreen: function () {
        return uvGUI;
    },

    
});
    
        

var uvGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "uv"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
    ],
    elements: {
       "slot1": {type: "slot",x: 500, y: 100, size:40},
              "slot2": {type: "slot",x: 540, y: 100, size:40},
              "slot3": {type: "slot",x: 580, y: 100, size:40},
              "slot4": {type: "slot",x: 620, y: 100, size:40},
              "slot5": {type: "slot",x: 460, y: 100, size:40},
              "slot6": {type: "slot",x: 500, y: 140, size:40},
              "slot7": {type: "slot",x: 540, y: 140, size:40},
              "slot8": {type: "slot",x: 580, y: 140, size:40},
              "slot9": {type: "slot",x: 620, y: 140, size:40},
              "slot10": {type: "slot",x: 460, y: 140, size:40},
              "slot11": {type: "slot",x: 500, y: 180, size:40},
              "slot12": {type: "slot",x: 540, y: 180, size:40},
              "slot13": {type: "slot",x: 580, y: 180, size:40},
              "slot14": {type: "slot",x: 620, y: 180, size:40},
              "slot15": {type: "slot",x: 460, y: 180, size:40},
              "slot16": {type: "slot",x: 500, y: 220, size:40},
              "slot17": {type: "slot",x: 540, y: 220, size:40},
              "slot18": {type: "slot",x: 580, y: 220, size:40},
              "slot19": {type: "slot",x: 620, y: 220, size:40},
              "slot20": {type: "slot",x: 460, y: 220, size:40},
              "slot21": {type: "slot",x: 500, y: 260, size:40},
              "slot22": {type: "slot",x: 540, y: 260, size:40},
              "slot23": {type: "slot",x: 580, y: 260, size:40},
              "slot24": {type: "slot",x: 620, y: 260, size:40},
              "slot25": {type: "slot",x: 460, y: 260, size:40},
        "slotOutput": {type: "slot", x: 760, y: 180, size:60}
        
    }
});












