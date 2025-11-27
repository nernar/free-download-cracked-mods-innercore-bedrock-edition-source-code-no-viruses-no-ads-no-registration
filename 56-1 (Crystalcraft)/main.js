/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: is.js

importLib("ENV", "*");

IDRegistry.genItemID("is");
Item.createItem("is", "infusion stick", {name: "is", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("is", {durability: 15000, level: 5, efficiency: 20, damage: 50, enchantability: 10});

ToolAPI.setTool(ItemID.is, "is", ToolType.sword);





// file: ip.js

IDRegistry.genItemID("ip");
Item.createItem("ip", "infusion pickaxe", {name: "ip", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ip", {durability: 15000, level: 5, efficiency: 20, damage: 5, enchantability: 2});
ToolAPI.setTool(ItemID.ip, "ip", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.ip)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x,y,z,true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
}//если true тогда будет дроп с руд 
});




// file: ore/ogo.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 10,
	explosionres: 3
}, "stone");

IDRegistry.genBlockID("ogo");
Block.createBlock("ogo", [
	{name: "Obsidian gold ore", texture: [["ogo", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ogo, "stone", 2, true);
Block.setDestroyLevel("ogo", 20);

Block.registerDropFunction("ogo", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[BlockID.ogo, 1, 0]];
		ToolAPI.dropOreExp(coords, 5, 15, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 35);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ogo, 1, 4);
    }
}
)

IDRegistry.genItemID("og");
Item.createItem("og", "Obsidian gold", {name: "og", meta: 0}, {stack: 10});

Recipes.addFurnace(BlockID.ogo, ItemID.og, 0);




// file: ore/crystal/fco.js

IDRegistry.genBlockID("fco");
Block.createBlock("fco", [
	{name: "fire crystal ore", texture: [["fco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fco, "stone", 2, true);
Block.setDestroyLevel("fco", 20);

Block.registerDropFunction("fco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.fc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.fco, 1, 3);
    }
}
)

IDRegistry.genItemID("fc");
Item.createItem("fc", "fire crystal", {name: "fc", meta: 0}, {stack: 10});




// file: ore/crystal/eco.js

IDRegistry.genBlockID("eco");
Block.createBlock("eco", [
	{name: "earth crystal ore", texture: [["eco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.eco, "stone", 2, true);
Block.setDestroyLevel("eco", 20);

Block.registerDropFunction("eco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.ec, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.eco, 1, 3);
    }
}
)

IDRegistry.genItemID("ec");
Item.createItem("ec", "earth crystal", {name: "ec", meta: 0}, {stack: 10});




// file: ore/crystal/wco.js

IDRegistry.genBlockID("wco");
Block.createBlock("wco", [
	{name: "water crystal ore", texture: [["wco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.wco, "stone", 2, true);
Block.setDestroyLevel("wco", 20);

Block.registerDropFunction("wco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.wc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.wco, 1, 3);
    }
}
)

IDRegistry.genItemID("wc");
Item.createItem("wc", "water crystal", {name: "wc", meta: 0}, {stack: 10});




// file: ore/crystal/aco.js

IDRegistry.genBlockID("aco");
Block.createBlock("aco", [
	{name: "air crystal ore", texture: [["aco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.aco, "stone", 2, true);
Block.setDestroyLevel("aco", 20);

Block.registerDropFunction("aco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.ac, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aco, 1, 3);
    }
}
)

IDRegistry.genItemID("ac");
Item.createItem("ac", "air crystal", {name: "ac", meta: 0}, {stack: 10});




// file: ore/crystal/mco.js

IDRegistry.genBlockID("mco");
Block.createBlock("mco", [
	{name: "magic crystal ore", texture: [["mco", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.mco, "stone", 2, true);
Block.setDestroyLevel("mco", 20);

Block.registerDropFunction("mco", function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.mc, 1, 0]];
		ToolAPI.dropOreExp(coords, 10, 30, enchant.experience);
		return drop;
	}
	return [];
}, 4);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=1;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mco, 1, 3);
    }
}
)

IDRegistry.genItemID("mc");
Item.createItem("mc", "magic crystal", {name: "mc", meta: 0}, {stack: 10});




// file: material/ogs.js

IDRegistry.genItemID("ogs");
Item.createItem("ogs", "Obsidian gold stick", {name: "ogs", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ogs, count: 1, data: 0}, [
	"a",
	"a"
], ['a', ItemID.og, 0]);




// file: kraft.js

Recipes.addShaped({id: ItemID.is, count: 1, data: 0}, [
	"f e",
	"acd",
	" b "
], ['a', ItemID.fc, 0,'b',ItemID.ogs,0,'c',ItemID.ec,0,'d',ItemID.wc,0,'e',ItemID.ac,0,'f',ItemID.mc,0]);

Recipes.addShaped({id: ItemID.ip, count: 1, data: 0}, [
	"fce",
	"abd",
	" b "
], ['a', ItemID.fc, 0,'b',ItemID.ogs,0,'c',ItemID.ec,0,'d',ItemID.wc,0,'e',ItemID.ac,0,'f',ItemID.mc,0]);




