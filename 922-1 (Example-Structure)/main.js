let StructurePool = new StructurePool("Example-Structure");//создаём пул, в нём будут храниться структуры 

const DIR = __dir__+"structures/";
let SpawnerMobs = ["minecraft:zombie", "minecraft:skeleton"];

StructurePool.load(DIR+"wood.struct", "wood");
StructurePool.load(DIR+"flashlight.struct", "flashlight");

ModAPI.addAPICallback("ICore", function(){
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.iridiumChunk, .3, {min: 2, max: 5});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.ingotCopper, .6, {min: 1, max: 2});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.ingotTin, .5, {min: 1, max: 2});
});

ModAPI.addAPICallback("AncientWondersAPI", function(){
	StructurePool.load(DIR+"Ancient_wonders_integration.struct", "ancient_wonders");
	StructurePool.setGlobalPrototype("wood", {
		after(x, y, z, region){
			ItemGeneration.fill("loot_tables/chests/simple_dungeon.json", x, y+2, z, null, region);
			StructureUtility.spawnEntity(region, x, y+3, z, SpawnerMobs, random);
		}
	});
	
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.loreClass1, .005, {min: 0, max: 1});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.loreClass2, .005, {min: 0, max: 1});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.loreClass3, .005, {min: 0, max: 1});
	
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.piece1, .2, {min: 0, max: 1});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.piece2, .2, {min: 0, max: 1});
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.piece3, .2, {min: 0, max: 1});
	
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.dead_essence, .1, {min: 1, max: 1});
	
	SpawnerMobs.push("aw:skeleton");
});

ModAPI.addAPICallback("RedPower", function(){
	ItemGeneration.addItem("loot_tables/chests/simple_dungeon.json", ItemID.nikolite, .1, {min: 1, max: 2});
});

StructurePool.setGlobalPrototype("wood", {
	after(x, y, z, region){
		ItemGeneration.fill("loot_tables/chests/simple_dungeon.json", x, y+2, z, null, region);
	}
});
StructurePool.setGlobalPrototype("flashlight", {
	after(x, y, z, region){
		ItemGeneration.fill("loot_tables/chests/simple_dungeon.json", x, y+1, z, null, region);
		
		StructureUtility.spawnEntity(region, x, y+6, z+1, SpawnerMobs, random);
		StructureUtility.spawnEntity(region, x, y+4, z-1, SpawnerMobs, random);
	}
});

Callback.addCallback("StructureLoadOne", function(){
	StructurePiece.register(StructurePiece.getDefault({
		type: "default",
		dimension: 0,
		name: "exmaple_wood",
		chance: 700,
		distance: 150,
		isSet: true,
		structure: StructurePool.StructureAdvanced("wood"),
	}));
	
	StructurePiece.register(StructurePiece.getDefault({
		type: "default",
		dimension: 0,
		name: "exmaple_flashlight",
		chance: 800,
		distance: 100,
		isSet: true,
		structure: StructurePool.StructureAdvanced("flashlight"),
	}));
	ModAPI.addAPICallback("AncientWondersAPI", function(){
		StructurePiece.register(StructurePiece.getDefault({
			type: "default",
			dimension: 0,
			name: "exmaple_flashlight",
			chance: 1000,
			distance: 150,
			isSet: true,
			structure: StructurePool.StructureAdvanced("ancient_wonders"),
		}));
	});
});
/*
Почему добавление генерации в StructureLoadOne?

Весь прикол в реализации класса Structure.advanced, если в момент создания объекта структуры нет, то структура присвоится после загрузки структур

По сути регистрировать генерацию можно в любой момент, но правильнее в StructureLoadOne
*/
