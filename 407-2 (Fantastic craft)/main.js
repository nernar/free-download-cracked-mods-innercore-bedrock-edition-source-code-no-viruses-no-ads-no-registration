IDRegistry.genItemID("BlueP");
Item.createItem("BlueP", "Синяя пыль", {name: "BlueP", meta: 0}, {});

IDRegistry.genItemID("BlueK");
Item.createItem("BlueK", "Синий камень", {name: "BlueK", meta: 0}, {});

Recipes.addFurnace(ItemID.BlueK, ItemID.BlueP, 0);

IDRegistry.genItemID("BlueH");
Item.createArmorItem("BlueH", "Синий шлем", {name: "BlueH"}, {type: "helmet", armor: 4, durability: 1000, texture: "armor/Blue1_1.png"});

IDRegistry.genItemID("BlueC");
Item.createArmorItem("BlueC", "Синий нагрудник", {name: "BlueC"}, {type: "chestplate", armor: 8, durability: 1000, texture: "armor/Blue1_1.png"});

IDRegistry.genItemID("BlueL");
Item.createArmorItem("BlueL", "Синие поножи", {name: "BlueL"}, {type: "leggings", armor: 6, durability: 1000, texture: "armor/Blue1_2.png"});

IDRegistry.genItemID("BlueB");
Item.createArmorItem("BlueB", "Синие ботинки", {name: "BlueB"}, {type: "boots", armor: 2, durability: 1000, texture: "armor/Blue1_1.png"});

Recipes.addShaped({id: ItemID.BlueK, count: 1, data: 0}, [
 "aaa",
 "aaa",
 "aaa"
], ['a', 351, 4]);

Recipes.addShaped({id: ItemID.BlueH, count: 1, data: 0}, [
 "aaa",
 "a a",
 ""
], ['a', ItemID.BlueP, 0]);

Recipes.addShaped({id: ItemID.BlueC, count: 1, data: 0}, [
 "a a",
 "aaa",
 "aaa"
], ['a', ItemID.BlueP, 0]);

Recipes.addShaped({id: ItemID.BlueL, count: 1, data: 0}, [
 "aaa",
 "a a",
 "a a"
], ['a', ItemID.BlueP, 0]);

Recipes.addShaped({id: ItemID.BlueB, count: 1, data: 0}, [
 "a a",
 "a a",
 ""
], ['a', ItemID.BlueP, 0]);

IMPORT("ToolType")

IDRegistry.genItemID("bluesword")
Item.createItem("bluesword", "Синий меч", {name: "BlueS", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("bluepickaxe")
Item.createItem("bluepickaxe", "Синяя кирка", {name: "bluePi", meta: 0}, {stack: 1});

IDRegistry.genItemID("blueAxe")
Item.createItem("blueAxe", "Синий топор", {name: "BlueA", meta: 0}, {stack: 1});

IDRegistry.genItemID("blueShowel")
Item.createItem("blueShowel", "Синяя лопата", {name: "blueSh", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("blue", {durability: 1000, level: 7, efficiency: 10, damage: 11, enchantability: 9}); 

ToolAPI.setTool(ItemID.bluesword, "blue", ToolType.sword);

ToolAPI.setTool(ItemID.bluepickaxe, "blue", ToolType.pickaxe);

ToolAPI.setTool(ItemID.blueAxe, "blue", ToolType.axe);

ToolAPI.setTool(ItemID.blueShowel, "blue", ToolType.shovel);

Recipes.addShaped({id: ItemID.bluesword, count: 1, data: 0}, [
 " a ",
 " a ",
 " b "
], ['a', ItemID.BlueP, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.bluepickaxe, count: 1, data: 0}, [
 "aaa",
 " b ",
 " b "
], ['a', ItemID.BlueP, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blueAxe, count: 1, data: 0}, [
 "aa",
 "ab ",
 " b "
], ['a', ItemID.BlueP, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.blueShowel, count: 1, data: 0}, [
 " a",
 " b ",
 " b "
], ['a', ItemID.BlueP, 0, 'b', 280, 0]);

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

IDRegistry.genBlockID("WoodPickOre");
Block.createBlock("WoodPickOre", [
	{name: "Синяя руда", texture: [["WoodPickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.WoodPickOre, "stone", 3, true);

Block.registerDropFunction("WoodPickOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.BlueP, 1, 0]]
	}
	return [];
}, 3);

var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};

Callback.addCallback("WoodPickOre", function(chunkX, chunkZ){ for(var i = 0; i < 97; i++){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 47);
 GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.WoodPickOre, 1, 3);
} 
});

IDRegistry.genItemID("KOSsword")
Item.createItem("KOSsword", "Костный меч", {name: "KosS", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("KOSpickaxe")
Item.createItem("KOSpickaxe", "Костная кирка", {name: "KosPi", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("KOSAxe")
Item.createItem("KOSAxe", "Костный топор", {name: "KosA", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("KOSshovel")
Item.createItem("KOSshovel", "Костная лопата", {name: "KosSh", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("Kos", {durability: 700, level: 9, efficiency: 14, damage: 14, enchantability: 9}); 

ToolAPI.setTool(ItemID.KOSsword, "Kos", ToolType.sword);

ToolAPI.setTool(ItemID.KOSpickaxe, "Kos", ToolType.pickaxe);

ToolAPI.setTool(ItemID.KOSAxe, "Kos", ToolType.axe);

ToolAPI.setTool(ItemID.KOSshovel, "Kos", ToolType.shovel);

IDRegistry.genItemID("KosB");
Item.createItem("KosB", "Большая кость", {name: "KostB", meta: 0}, {});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
      var Kos  = parseInt(Math.random() * 1);
      World.drop(coords.x, coords.y, coords.z, ItemID.KostB, Kos);
 }
});

IDRegistry.genItemID("KosH");
Item.createArmorItem("KosH", "Костный шлем", {name: "KosH"}, {type: "helmet", armor: 6, durability: 700, texture: "armor/Kos1_1.png"});

IDRegistry.genItemID("KosC");
Item.createArmorItem("KosC", "Костный нагрудник", {name: "KosC"}, {type: "chestplate", armor: 10, durability: 700, texture: "armor/Kos1_1.png"});

IDRegistry.genItemID("KosL");
Item.createArmorItem("KosL", "Костные поножи", {name: "KosL"}, {type: "leggings", armor: 8, durability: 700, texture: "armor/Kos1_2.png"});

IDRegistry.genItemID("KosB");
Item.createArmorItem("KosB", "Костные ботинки", {name: "KosB"}, {type: "boots", armor: 4, durability: 700, texture: "armor/Kos1_1.png"});

Recipes.addShaped({id: ItemID.KosH, count: 1, data: 0}, [
 "aaa",
 "a a",
 ""
], ['a', ItemID.KosB, 0]);

Recipes.addShaped({id: ItemID.KosC, count: 1, data: 0}, [
 "a a",
 "aaa",
 "aaa"
], ['a', ItemID.KosB, 0]);

Recipes.addShaped({id: ItemID.KosL, count: 1, data: 0}, [
 "aaa",
 "a a",
 "a a"
], ['a', ItemID.KosB, 0]);

Recipes.addShaped({id: ItemID.KosB, count: 1, data: 0}, [
 "a a",
 "a a",
 ""
], ['a', ItemID.KosB, 0]);

IDRegistry.genItemID("BlueAP");
Item.createFoodItem("BlueAP", "Синее яблоко", {name: "BlueAP", meta: 0}, {Food: 25});

IDRegistry.genBlockID("RedOreSpawn");
Block.createBlock("RedOreSpawn", [
	{name: "Руда красного алмаза", texture: [["RedD", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.RedOreSpawn, "stone", 3, true);

Block.registerDropFunction("RedOreSpawn", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.RedO, 1, 0]]
	}
	return [];
}, 3);

var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};

Callback.addCallback("RedOreSpawn", function(chunkX, chunkZ){ for(var i = 0; i < 97; i++){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 17);
 GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.RedOreSpawn, 1, 3);
} 
});

IDRegistry.genItemID("RedO");
Item.createItem("RedO", "Красный алмаз", {name: "Red", meta: 0}, {});

IDRegistry.genItemID("RedH");
Item.createArmorItem("RedH", "Красный шлем", {name: "RedH"}, {type: "helmet", armor: 10, durability: 3000, texture: "armor/Red1_1.png"});

IDRegistry.genItemID("RedC");
Item.createArmorItem("RedC", "Красные  нагрудник", {name: "RedC"}, {type: "chestplate", armor: 3000, durability: 700, texture: "armor/Red1_1.png"});

IDRegistry.genItemID("RedL");
Item.createArmorItem("RedL", "Красные поножи", {name: "RedL"}, {type: "leggings", armor: 8, durability: 3000, texture: "armor/Red1_2.png"});

IDRegistry.genItemID("RedB");
Item.createArmorItem("RedB", "Красные ботинки", {name: "RedB"}, {type: "boots", armor: 4, durability: 3000, texture: "armor/Red1_1.png"});


IDRegistry.genItemID("Redsword")
Item.createItem("Redsword", "Красный меч", {name: "RedS", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("Redpickaxe")
Item.createItem("Redpickaxe", "Красная кирка", {name: "RedPi", meta: 0}, {stack: 1});

IDRegistry.genItemID("RedAxe")
Item.createItem("RedAxe", "Красный топор", {name: "RedA", meta: 0}, {stack: 1});

IDRegistry.genItemID("RedShowel")
Item.createItem("RedShowel", "Синяя лопата", {name: "RedSh", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("Red", {durability: 3000, level: 10, efficiency: 20, damage: 21, enchantability: 9}); 

ToolAPI.setTool(ItemID.Redsword, "Red", ToolType.sword);

ToolAPI.setTool(ItemID.Redpickaxe, "Red", ToolType.pickaxe);

ToolAPI.setTool(ItemID.RedAxe, "Red", ToolType.axe);

ToolAPI.setTool(ItemID.RedShowel, "Red", ToolType.shovel);