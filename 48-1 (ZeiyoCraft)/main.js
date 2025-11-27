/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: foods.js

IDRegistry.genItemID("puriflesh");
Item.createFoodItem("puriflesh", "Puri Flesh", {name: "puriFlesh", meta: 0}, {food: 8});

Recipes.addFurnace(367, ItemID.puriflesh, 0);

IDRegistry.genItemID("cheese");
Item.createFoodItem("cheese", "Cheese", {name: "cheese", meta: 0}, {food: 9});

Recipes.addShaped({id: ItemID.cheese, count: 1, data: 0}, [
	"aca",
	"cac",
	"bdb"
], ['a', 392, 0, 'b', 296, 0, 'c', 253, 0, 'd', 457, 0]);

IDRegistry.genItemID("applePie");
Item.createFoodItem("applePie", "Apple Pie", {name: "applePie", meta: 0}, {food: 12});

Recipes.addShaped({id: ItemID.applePie, count: 1, data: 0}, [
	"ccc",
	"dad",
	"aaa"
], ['a', 353, 0, 'c', 253, 0, 'd', 260, 0]);




// file: tools/ruby.js

importLib("ENV", "*");

var ruby = ItemID.ruby;
var sapphire = ItemID.sapphire;
var jade = ItemID.jade;
var onyx = ItemID.onyx;
var nacre = ItemID.ruby;
var amet = ItemID.amethyst;

var ZC = {
typeOre: Block.createSpecialType({
	base: 56,
	destroytime: 2.634,
	opaque: true,
}, "ore"),

addOre: function(id){
IDRegistry.genBlockID(id + "Ore");
Block.createBlock(id + "Ore", [
{name: id + " ore", texture: [[id + "Ore", 0]], inCreative: true}
], this.typeOre);
},

addBlock: function(id){
IDRegistry.genBlockID(id + "Block");
Block.createBlock(id + "Block", [
{name: id + " block", texture: [[id + "Block", 0]], inCreative: true}
], this.typeOre);
},
	
addOreF: function(id, dropid, dropcount,mining){
  Block.registerDropFunction(id + "Ore", function(coords, blockID, blockData, level){
	if(level > mining){
		return [[dropid, dropcount, 0]]
	}
	return [];
}, 2);
   	},
 addMater: function(id){
ToolAPI.registerBlockMaterial(id, "stone");
},
	
genOreTiny: function(x, y, z, ore){for(var xx = -1; xx < 1; xx++){for(var yy = -1; yy < 1; yy++){var d = Math.sqrt(xx + yy*yy);var r = 1 - Math.random()/1;if(d < r){GenerationUtils.setLockedBlock(x+xx, y-yy, z);}}}},
	
sword: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.sword);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', idd, 0, 'b', 280, 0]);
},
shovel: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.shovel);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', idd, 0, 'b', 280, 0]);
},
pickaxe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.pickaxe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', idd, 0, 'b', 280, 0]);
},
axe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.axe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', idd, 0, 'b', 280, 0]);
},
hoe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.hoe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aa",
	"b",
	"b",
], ['a', idd, 0, 'b', 280, 0]);
   }
}
Item.registerSetTools = function(mid){
	
IDRegistry.genItemID(mid + "");
IDRegistry.genItemID(mid + "Sword");
IDRegistry.genItemID(mid + "Shovel");
IDRegistry.genItemID(mid + "Pickaxe");
IDRegistry.genItemID(mid + "Axe");
IDRegistry.genItemID(mid + "Hoe");
Item.createItem(mid + "", mid + "", {name: mid + "", meta: 0}, {stack: 64});
Item.createItem(mid + "Sword", mid + " sword", {name: mid + "Sword", meta: 0}, {stack: 1});
Item.createItem(mid + "Shovel", mid + " shovel", {name: mid + "Spade", meta: 0}, {stack: 1});
Item.createItem(mid + "Pickaxe", mid + " pickaxe", {name: mid + "Pickaxe", meta: 0}, {stack: 1});
Item.createItem(mid + "Axe", mid + " axe", {name: mid + "Axe", meta: 0}, {stack: 1});
Item.createItem(mid + "Hoe", mid + " hoe", {name: mid + "Hoe", meta: 0}, {stack: 1});

}

ToolAPI.addToolMaterial("gold", {durability: 36, level: 2, efficiency: 15, damage: 0, enchantability: 14});

Item.registerSetTools("ruby");
Item.registerSetTools("sapphire");
Item.registerSetTools("jade");
Item.registerSetTools("onyx");
Item.registerSetTools("nacre");
Item.registerSetTools("amethyst");
/*Item.registerSetTools("fire");*/

Item.registerSetArmor = function(mid, dr, put){
	
IDRegistry.genItemID(mid + "Helmet");
IDRegistry.genItemID(mid + "Chestplate");
IDRegistry.genItemID(mid + "Leggings");
IDRegistry.genItemID(mid + "Boots");

Item.createArmorItem(mid + "Helmet", mid + " helmet", {name: mid + "Helmet"}, {type: "helmet", armor: 4, durability: dr, texture: put + "_layer_1.png"});
Item.createArmorItem(mid + "Chestplate", mid + " chestplate", {name: mid + "Chestplate"}, {type: "chestplate", armor: 8, durability: dr, texture: put + "_layer_1.png"});
Item.createArmorItem(mid + "Leggings", mid + " leggings", {name: mid + "Leggings"}, {type: "leggings", armor: 6, durability: dr, texture: put + "_layer_2.png"});
Item.createArmorItem(mid + "Boots", mid + " boots", {name: mid + "Boots"}, {type: "boots", armor: 2, durability: dr, texture: put + "_layer_1.png"});

}

Item.registerSetArmor("ruby", 2000, "armor/ruby");
Item.registerSetArmor("sapphire", 2000, "armor/sapphire");
Item.registerSetArmor("jade", 3000, "armor/jade");
Item.registerSetArmor("onyx", 4000, "armor/onyx");
Item.registerSetArmor("nacre", 5000, "armor/nacre");
Item.registerSetArmor("amethyst", 10000, "armor/amethyst");

ToolAPI.addToolMaterial("ruby", {durability: 2000, level: 4, efficiency: 15, damage: 6, enchantability: 14});
ZC.sword(ItemID.rubySword, "ruby", ruby);
ZC.shovel(ItemID.rubyShovel, "ruby", ruby);
ZC.pickaxe(ItemID.rubyPickaxe, "ruby", ruby);
ZC.axe(ItemID.rubyAxe, "ruby", ruby);
ZC.hoe(ItemID.rubyHoe, "ruby", ruby);

ZC.sword(ItemID.sapphireSword, "ruby", sapphire);
ZC.shovel(ItemID.sapphireShovel, "ruby", sapphire);
ZC.pickaxe(ItemID.sapphirePickaxe, "ruby", sapphire);
ZC.axe(ItemID.sapphireAxe, "ruby", sapphire);
ZC.hoe(ItemID.sapphireHoe, "ruby", sapphire);

ToolAPI.addToolMaterial("jade", {durability: 3000, level: 4, efficiency: 16, damage: 7, enchantability: 14});
ZC.sword(ItemID.jadeSword, "jade", jade);
ZC.shovel(ItemID.jadeShovel, "jade", jade);
ZC.pickaxe(ItemID.jadePickaxe, "jade", jade);
ZC.axe(ItemID.jadeAxe, "jade", jade);
ZC.hoe(ItemID.jadeHoe, "jade", jade);

ToolAPI.addToolMaterial("onyx", {durability: 4000, level: 4, efficiency: 17, damage: 8, enchantability: 14});
ZC.sword(ItemID.onyxSword, "onyx", onyx);
ZC.shovel(ItemID.onyxShovel, "onyx", onyx);
ZC.pickaxe(ItemID.onyxPickaxe, "onyx", onyx);
ZC.axe(ItemID.onyxAxe, "onyx", onyx);
ZC.hoe(ItemID.onyxHoe, "onyx", onyx);

ToolAPI.addToolMaterial("nacre", {durability: 5000, level: 4, efficiency: 19, damage: 9, enchantability: 14});
ZC.sword(ItemID.nacreSword, "nacre", nacre);
ZC.shovel(ItemID.nacreShovel, "nacre", nacre);
ZC.pickaxe(ItemID.nacrePickaxe, "nacre", nacre);
ZC.axe(ItemID.nacreAxe, "nacre", nacre);
ZC.hoe(ItemID.nacreHoe, "nacre", nacre);

ToolAPI.addToolMaterial("amethyst", {durability: 5000, level: 4, efficiency: 25, damage: 10, enchantability: 14});
ZC.sword(ItemID.amethystSword, "amethyst", amet);
ZC.shovel(ItemID.amethystShovel, "amethyst", amet);
ZC.pickaxe(ItemID.amethystPickaxe, "amethyst", amet);
ZC.axe(ItemID.amethystAxe, "amethyst", amet);
ZC.hoe(ItemID.amethystHoe, "amethyst", amet);




// file: tools/waraxes.js

ToolType.waraxe = {
		isWeapon: true,
		enchantType: Native.EnchantType.weapon,
		damage: 6,
		blockTypes: ["fibre", "plant", "wood"],
		onAttack: function(item, mob){ },
		calcDestroyTime: function(item, block, coords, params, destroyTime, enchant){
			if(block.id==30){return 0.08;}
			if(block.id==35){return 0.05;}
			var material = ToolAPI.getBlockMaterial(block.id).name
			if(material=="fibre" || material=="plant"){return params.base/1.5;}
			return destroyTime;
	}
}

Item.setWarAxe = function(mid){
IDRegistry.genItemID(mid + "WarAxe");
Item.createItem(mid + "WarAxe", mid + " war axe", {name: mid + "WarAxe", meta: 0}, {stack: 1});
}

Item.setWarAxe("wooden");
Item.setWarAxe("stone");
Item.setWarAxe("gold");
Item.setWarAxe("iron");
Item.setWarAxe("diamond");
Item.setWarAxe("ruby");
Item.setWarAxe("sapphire");
Item.setWarAxe("jade");
Item.setWarAxe("onyx");
Item.setWarAxe("nacre");
Item.setWarAxe("amethyst");

ToolAPI.setWarAxe = function(id, ID2, mat){
ToolAPI.setTool(id, mat, ToolType.waraxe);

Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', ID2, -1, 'b', 280, 0]);
}

ToolAPI.setWarAxe(ItemID.woodenWarAxe, 5, "wood");
ToolAPI.setWarAxe(ItemID.stoneWarAxe, 4, "stone");
ToolAPI.setWarAxe(ItemID.goldWarAxe, 266, "gold");
ToolAPI.setWarAxe(ItemID.ironWarAxe, 265, "iron");
ToolAPI.setWarAxe(ItemID.diamondWarAxe, 264, "diamond");
ToolAPI.setWarAxe(ItemID.rubyWarAxe, ItemID.ruby, "ruby");
ToolAPI.setWarAxe(ItemID.sapphireWarAxe, ItemID.sapphire, "ruby");
ToolAPI.setWarAxe(ItemID.jadeWarAxe, ItemID.jade, "jade");
ToolAPI.setWarAxe(ItemID.onyxWarAxe, ItemID.onyx, "onyx");
ToolAPI.setWarAxe(ItemID.nacreWarAxe, ItemID.nacre, "nacre");
ToolAPI.setWarAxe(ItemID.amethystWarAxe, ItemID.amethyst, "amethyst");




// file: ores-blocks.js

ZC.addOre("ruby");
ZC.addOre("sapphire");
ZC.addOre("jade");
ZC.addOre("onyx");
ZC.addOre("nacre");
ZC.addOre("amethyst");
ZC.addMater(BlockID.rubyOre);
ZC.addMater(BlockID.sapphireOre);
ZC.addMater(BlockID.jadeOre);
ZC.addMater(BlockID.onyxOre);
ZC.addMater(BlockID.nacreOre);
ZC.addMater(BlockID.amethystOre);
Block.registerDropFunction("rubyOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.ruby, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("sapphireOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.sapphire, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("jadeOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.jade, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("onyxOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.onyx, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("nacreOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.nacre, 1, 0]]
	}
	return [];
}, 2);
Block.registerDropFunction("amethystOre", 
function(coords, blockID, blockData, level)
   {
	if(level > 3){
		return [[ItemID.amethyst, 1, 0]]
	}
	return [];
}, 2);


    
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.rubyOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.sapphireOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.jadeOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.onyxOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	  ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.nacreOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.amethystOre, 0, 1, false);
	 for(var i = 0; i < 7; i++){
	 var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
	 ZC.genOreTiny(coords.x, coords.y, coords.z, 3);
	}
});


ZC.addBlock("ruby");
ZC.addBlock("sapphire");
ZC.addBlock("jade");
ZC.addBlock("onyx");
ZC.addBlock("nacre");
ZC.addBlock("amethyst");




// file: crops.js

var BLOCKTYPE_PLANT = Block.createSpecialType({ 
	base: 59,
});

IDRegistry.genItemID("tomato_seed");
Item.createFoodItem("tomato_seed", "Tomato Seed", {name: "tomatoSeeds", meta: 0});

IDRegistry.genItemID("tomato");
Item.createFoodItem("tomato", "Tomato", {name: "tomato", meta: 0}, {food: 4});

IDRegistry.genBlockID("tomatocrop"); 
Block.createBlock("tomatocrop", [
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 0]], inCreative: false},
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 1]], inCreative: false},
	{name: "tomatocrop", texture: [["empty", 0], ["empty", 0], ["tomatoCrops_stage", 2]], inCreative: false}
],  BLOCKTYPE_PLANT)

Block.setBlockShape(BlockID.tomatocrop, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

TileEntity.registerPrototype(BlockID.tomatocrop, {
	
	defaultValues: {
		age: 0
	},
	
	tick: function(){
		if (Math.random() < .125){
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.tomatocrop, this.data.age)
		}
	},
	
	click: function(id, count, data, coords){
		if(id == 351, data == 15){
			Player.setCarriedItem(351, count - 1, 15);
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.tomatocrop, this.data.age)
		}
		return false;
	},

});

Item.registerUseFunctionForID(ItemID.tomato_seed, function(coords, item, block){
	if(World.getBlockID(coords.relative.x, coords.relative.y - 1, coords.relative.z) == 60){
		World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.tomatocrop, 0);
		Player.setCarriedItem(ItemID.tomato_seed, item.count - 1, 0);
	}
});

Block.registerDropFunction("tomatocrop", function(coords, blockID, blockData, level){
	if(blockData == 2){
		return [[ItemID.tomato, 1 + parseInt(Math.random() * 3), 0]]
	}
	else{
		return [[ItemID.tomato_seed, 1, 0]]
	}
});

IDRegistry.genItemID("grape_seed");
Item.createFoodItem("grape_seed", "Grape Seed", {name: "grapeSeeds", meta: 0});

IDRegistry.genItemID("grape");
Item.createFoodItem("grape", "Grape", {name: "grape", meta: 0}, {food: 5});

IDRegistry.genBlockID("grapecrop"); 
Block.createBlock("grapecrop", [
	{name: "tile.grapecrop.name", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 0]], inCreative: false},
	{name: "grapecrop", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 1]], inCreative: false},
	{name: "grapecrop", texture: [["empty", 0], ["empty", 0], ["grapeCrops_stage", 2]], inCreative: false}
],  BLOCKTYPE_PLANT)

Block.setBlockShape(BlockID.grapecrop, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

TileEntity.registerPrototype(BlockID.grapecrop, {
	
	defaultValues: {
		age: 0
	},
	
	tick: function(){
		if (Math.random() < .125){
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.grapecrop, this.data.age)
		}
	},
	
	click: function(id, count, data, coords){
		if(id == 351, data == 15){
			Player.setCarriedItem(351, count - 1, 15);
			this.data.age += 1;
			World.setBlock(this.x, this.y, this.z, BlockID.grapecrop, this.data.age)
		}
		return false;
	},

});

Item.registerUseFunctionForID(ItemID.grape_seed, function(coords, item, block){
	if(World.getBlockID(coords.relative.x, coords.relative.y - 1, coords.relative.z) == 60){
		World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.grapecrop, 0);
		Player.setCarriedItem(ItemID.grape_seed, item.count - 1, 0);
	}
});

Block.registerDropFunction("grapecrop", function(coords, blockID, blockData, level){
	if(blockData == 2){
		return [[ItemID.grape, 1 + parseInt(Math.random() * 3), 0]]
	}
	else{
		return [[ItemID.grape_seed, 1, 0]]
	}
});






BlockRenderer.addRenderCallback(BlockID.tomatocrop, function(api, coords, block) {

var box = BlockID.tomatocrop;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.tomatocrop);

BlockRenderer.addRenderCallback(BlockID.grapecrop, function(api, coords, block) {

var box = BlockID.grapecrop;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.grapecrop);




