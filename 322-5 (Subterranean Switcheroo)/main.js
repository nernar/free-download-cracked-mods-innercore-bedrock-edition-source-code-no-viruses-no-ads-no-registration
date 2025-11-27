/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: blocks.js

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

var BLOCK_TYPE_GLASS = Block.createSpecialType({
	base: 1,
	solid: false,
	destroytime: 2,
	explosionres: 2
	});

IDRegistry.genBlockID("cland");
Block.createBlock("cland", [
    {name: "Sandy Clay", texture: [["cland", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.cland, "stone");

IDRegistry.genBlockID("clavel");
Block.createBlock("clavel", [
    {name: "Gravely Clay", texture: [["clavel", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.clavel, "stone");

IDRegistry.genBlockID("kakkatzhan");
Block.createBlock("kakkatzhan", [
    {name: "Nether Turf", texture: [["kakkatzhan", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.kakkatzhan, "stone");

IDRegistry.genBlockID("nethercobble");
Block.createBlock("nethercobble", [
    {name: "Nether Cobblestone", texture: [["new_nethercobble", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nethercobble, "stone");

IDRegistry.genBlockID("netherstone");
Block.createBlock("netherstone", [
    {name: "Nether Stone", texture: [["new_netherstone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherstone, "stone");

IDRegistry.genBlockID("netherstonebrick");
Block.createBlock("netherstonebrick", [
    {name: "Nether Stone Brick", texture: [["new_netherstonebrick", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherstonebrick, "stone");

IDRegistry.genBlockID("netherstonebrickglow");
Block.createBlock("netherstonebrickglow", [
    {name: "Glowing Nether Stone Brick", texture: [["new_netherstonebrickglow", 0]], inCreative: true}
], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.netherstonebrickglow, "stone");

IDRegistry.genBlockID("soulnetherrack");
Block.createBlock("soulnetherrack", [
    {name: "Soul Netherrack", texture: [["soulnetherrack", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.soulnetherrack, "stone");

IDRegistry.genBlockID("bricglass");
Block.createBlock("bricglass", [
    {name: "Lattice Glass", texture: [["new_bricglass", 0]], inCreative: true}
], BLOCK_TYPE_GLASS);
ToolAPI.registerBlockMaterial(BlockID.bricglass, "stone");




// file: items.js

IDRegistry.genItemID("ironred");
Item.createItem("ironred", "Rediron Clump", {name: "ironred"});

IDRegistry.genItemID("goldred");
Item.createItem("goldred", "Redgold Clump", {name: "goldred"});

IDRegistry.genItemID("diamondgold");
Item.createItem("diamondgold", "Golden Diamond", {name: "diamondgold"});

IDRegistry.genItemID("ironcoal");
Item.createItem("ironcoal", "Hard-Carbon Clump", {name: "ironcoal"});

IDRegistry.genItemID("obsidianore");
Item.createItem("obsidianore", "Crystalized Obsidian", {name: "obsidianore"});

IDRegistry.genItemID("goldenslag");
Item.createItem("goldenslag", "Golden Slag", {name: "goldenslag"});

IDRegistry.genItemID("flintclay");
Item.createItem("flintclay", "Brickflint", {name: "flintclay"});

IDRegistry.genItemID("soulofthedeapths");
Item.createItem("soulofthedeapths", "Depths Soul", {name: "soulofthedeapths"});

IDRegistry.genItemID("lapiditepulp");
Item.createItem("lapiditepulp", "Lapidite Pulp", {name: "lapiditepulp"});

IDRegistry.genItemID("stickmesh");
Item.createItem("stickmesh", "Stick Mesh", {name: "stickmesh", meta: 0}, {stack: 64});

IDRegistry.genItemID("sifterbasicfixed");
Item.createItem("sifterbasicfixed", "Basic Sifting Tool", {name: "sifterbasicfixed", meta: 0}, {stack: 64});

IDRegistry.genItemID("siftermodified");
Item.createItem("siftermodified", "Advanced Sifting Tool", {name: "siftermodified", meta: 0}, {stack: 64});








// file: ores.js

IDRegistry.genBlockID("rediron");
Block.createBlock("rediron", [
	{name: "Rediron Ore", texture: [["new_rediron", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rediron, "stone", 4, true);
Block.setDestroyTime(BlockID.rediron, 3);
Block.setDestroyLevel("rediron", 3);
Block.registerDropFunction("rediron", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.rediron, 1, 0]];
        }
        var drop = [[ItemID.ironred, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("redgold");
Block.createBlock("redgold", [
	{name: "Redgold Ore", texture: [["new_redgold", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.redgold, "stone", 4, true);
Block.setDestroyTime(BlockID.redgold, 3);
Block.setDestroyLevel("redgold", 3);
Block.registerDropFunction("redgold", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.redgold, 1, 0]];
        }
        var drop = [[ItemID.goldred, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("golddiamond");
Block.createBlock("golddiamond", [
	{name: "Stunning Ore", texture: [["new_golddiamond", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golddiamond, "stone", 4, true);
Block.setDestroyTime(BlockID.golddiamond, 3);
Block.setDestroyLevel("golddiamond", 3);
Block.registerDropFunction("golddiamond", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.golddiamond, 1, 0]];
        }
        var drop = [[ItemID.diamondgold, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("coaliron");
Block.createBlock("coaliron", [
	{name: "Hard-Carbon Ore", texture: [["new_coaliron", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.coaliron, "stone", 4, true);
Block.setDestroyTime(BlockID.coaliron, 3);
Block.setDestroyLevel("coaliron", 3);
Block.registerDropFunction("coaliron", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.coaliron, 1, 0]];
        }
        var drop = [[ItemID.ironcoal, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);


IDRegistry.genBlockID("obsidianstone");
Block.createBlock("obsidianstone", [
	{name: "Obsidian Ore", texture: [["new_obsidianstone", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.obsidianstone, "stone", 4, true);
Block.setDestroyTime(BlockID.obsidianstone, 3);
Block.setDestroyLevel("obsidianstone", 3);
Block.registerDropFunction("obsidianstone", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.obsidianstone, 1, 0]];
        }
        var drop = [[ItemID.obsidianore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 3/5){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("clayore");
Block.createBlock("clayore", [
	{name: "Clay Ore", texture: [["new_clayore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.clayore, "stone", 4, true);
Block.setDestroyTime(BlockID.clayore, 3);
Block.setDestroyLevel("clayore", 3);
Block.registerDropFunction("clayore", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[BlockID.clayore, 1, 0]];
        }
        var drop = [[BlockID.clayore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 3/5){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);




// file: orespawn.js

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.clayore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rediron,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.redgold,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.golddiamond,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.coaliron,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.obsidianstone,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});




// file: tools.js

importLib("TOOLType", "*");

IDRegistry.genItemID("nethersword");
IDRegistry.genItemID("nethershovel");
IDRegistry.genItemID("netherpik");
IDRegistry.genItemID("netherax");
IDRegistry.genItemID("netherscythe");
Item.createItem("nethersword", "Netherack Sword", {name: "nethersword", meta:  0}, {stack: 1});
Item.createItem("nethershovel", "Netherack Shovel", {name: "nethershovel", meta: 0}, {stack: 1});
Item.createItem("netherpik", "Netherack Pickaxe", {name: "netherpick", meta: 0}, {stack: 1});
Item.createItem("netherax", "Netherack Axe", {name: "netherax", meta: 0}, {stack: 1});
Item.createItem("netherscythe", "Netherack Hoe", {name: "netherscythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("nethersword", {durability: 1000, level: 3, efficiency: 35, damage: 6, enchantability: 1});
ToolAPI.addToolMaterial("nethershovel", {durability: 1000, level: 3, efficiency: 35, damage: 4.5, enchantability: 1});
ToolAPI.addToolMaterial("netherpik", {durability: 1000, level: 3, efficiency: 35, damage: 4, enchantability: 1});
ToolAPI.addToolMaterial("netherax", {durability: 1000, level: 3, efficiency: 35, damage: 8, enchantability: 1});
ToolAPI.addToolMaterial("netherscythe", {durability: 1000, level: 3, efficiency: 35, damage: 1, enchantability: 1});

ToolAPI.setTool(ItemID.nethersword, "nethersword", ToolType.sword);
ToolAPI.setTool(ItemID.nethershovel, "nethershovel", ToolType.shovel);
ToolAPI.setTool(ItemID.netherpik, "netherpik", ToolType.pickaxe);
ToolAPI.setTool(ItemID.netherax, "netherax", ToolType.axe);
ToolAPI.setTool(ItemID.netherscythe, "netherscythe", ToolType.hoe);

IDRegistry.genItemID("reinforcedsword");
IDRegistry.genItemID("reinforcedshovel");
IDRegistry.genItemID("reinforcedpickaxe");
IDRegistry.genItemID("reinforcedaxe");
IDRegistry.genItemID("reinforcedhoe");
Item.createItem("reinforcedsword", "Blaze Reinforced Sword", {name: "nethersword", meta:  2}, {stack: 1});
Item.createItem("reinforcedshovel", "Blaze Reinforced Shovel", {name: "nethershovel", meta: 2}, {stack: 1});
Item.createItem("reinforcedpickaxe", "Blaze Reinforced Pickaxe", {name: "netherpick", meta: 2}, {stack: 1});
Item.createItem("reinforcedaxe", "Blaze Reinforced Axe", {name: "netherax", meta: 2}, {stack: 1});
Item.createItem("reinforcedhoe", "Blaze Reinforced Hoe", {name: "netherscythe", meta: 2}, {stack: 1});

ToolAPI.addToolMaterial("reinforcedsword", {durability: 2000, level: 4, efficiency: 40, damage: 7, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedshovel", {durability: 2000, level: 4, efficiency: 40, damage: 5.5, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedpickaxe", {durability: 2000, level: 4, efficiency: 40, damage: 4, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedaxe", {durability: 2000, level: 4, efficiency: 40, damage: 8, enchantability: 3});
ToolAPI.addToolMaterial("reinforcedhoe", {durability: 2000, level: 4, efficiency: 40, damage: 1, enchantability: 3});

ToolAPI.setTool(ItemID.reinforcedsword, "reinforcedsword", ToolType.sword);
ToolAPI.setTool(ItemID.reinforcedshovel, "reinforcedshovel", ToolType.shovel);
ToolAPI.setTool(ItemID.reinforcedpickaxe, "reinforcedpickaxe", ToolType.pickaxe);
ToolAPI.setTool(ItemID.reinforcedaxe, "reinforcedaxe", ToolType.axe);
ToolAPI.setTool(ItemID.reinforcedhoe, "reinforcedhoe", ToolType.hoe);




// file: flower.js

IMPORT("TileRender");
function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Block.createSpecialType({
	base: 59,
	destroytime: 0,
	explosionres: 0,
	opaque: false,
	lightopacity: 0,
}, "plant");

var DIRT_TILES = {
	2: true,
	3: true,
	60: true
};

IDRegistry.genItemID("lapis_lotus");
Item.createItem("lapis_lotus", "Lapis Lotus", {name: "lapis_lotus", data: 0});

Item.registerUseFunction("lapis_lotus", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && DIRT_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.lapis_lotus);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

IDRegistry.genBlockID("lapis_lotus");
Block.createBlock("lapis_lotus", [
	{name: "Lapis Lotus", texture: [["lapis_lotus", 0]], inCreative: false}
]);
Block.setDestroyTime(BlockID.lapis_lotus, 0);
TileRenderer.setPlantModel(BlockID.lapis_lotus, 0, "lapis_lotus", 0);

Block.registerDropFunction("lapis_lotus", function(){
	return [[ItemID.lapis_lotus, 1, 0]];
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.lapis_lotus){
		World.destroyBlock(coords.x, coords.y + 1, coords.z);
	}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < 0.05){
		for(var i = 0; i < random(2, 8); i++){
			var c = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			c = GenerationUtils.findSurface(c.x, c.y, c.z);
			if(World.getBlockID(c.x, c.y, c.z) == 2 && World.getBlockID(c.x, c.y + 1, c.z) == 0){
				World.setBlock(c.x, c.y + 1, c.z, BlockID.lapis_lotus, 0);
			}
		}
	}
});

Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id == 351 && item.data == 15 && block.id == 2 && coords.side == 1){
		let x = coords.x + random(-3, 3), z = coords.z + random(-3, 3);
		if(World.getBlockID(x, coords.y, z) == 2 && World.getBlockID(x, coords.y + 1, z) == 0){
			World.setBlock(x, coords.y + 1, z, BlockID.lapis_lotus, 0);
		}
	}
});




// file: crafts.js

Recipes.addShaped({id: ItemID.soulofthedeapths, count: 2, data: 0}, [
    "xaz",
    "sdf",
    "ghj"
], ['x', ItemID.goldred, 0, 'a', ItemID.obsidianore, 0, 'z', ItemID.flintclay, 0, 's', BlockID.clavel, 0, 'd', ItemID.diamondgold, 0, 'f', BlockID.cland, 0, 'g', ItemID.ironcoal, 0, 'h', BlockID.soulnetherrack, 0, 'j', ItemID.ironred, 0]);

Recipes.addShaped({id: ItemID.stickmesh, count: 1, data: 0}, [
    "xzx",
    "zzz",
    "xzx"
], ['x',5, 0, 'z', 280, 0]);

Recipes.addShaped({id: ItemID.sifterbasicfixed, count: 4, data: 0}, [
    "xzx",
    "zcz",
    "xzx"
], ['x',5, 0, 'z', 280, 0, 'c', ItemID.stickmesh, 0]);

Recipes.addShaped({id: ItemID.siftermodified, count: 1, data: 0}, [
    "xzx",
    "zcz",
    "xzx"
], ['x', 17, 0, 'z', 101, 0, 'c', ItemID.stickmesh, 0]);

Recipes.addShaped({id: 263, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.ironcoal, 0, 'z', 263, 0]);

Recipes.addShaped({id: 263, count: 2, data: 1}, [
    "xz"
], ['x', ItemID.ironcoal, 0, 'z', 263, 1]);

Recipes.addShaped({id: 152, count: 1, data: 0}, [
    "xxz",
    "xx"
], ['x', 331, 0, 'z', ItemID.ironred, 0]);

Recipes.addShaped({id: 331, count: 3, data: 0}, [
    "x"
], ['x', ItemID.ironred, 0]);

Recipes.addShaped({id: ItemID.flintclay, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', BlockID.clavel, 0]);

Recipes.addShaped({id: 318, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', 13, 0]);

Recipes.addShaped({id: ItemID.obsidianore, count: 3, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', 49, 0]);

Recipes.addShaped({id: 152, count: 1, data: 0}, [
    " x ",
    "xzx"
], ['x', 331, 0, 'z', ItemID.goldred, 0]);

Recipes.addShaped({id: 331, count: 4, data: 0}, [
    " x "
], ['x', ItemID.goldred, 0]);

Recipes.addShaped({id: 266, count: 2, data: 0}, [
    " x "
], ['x', ItemID.goldenslag, 0]);

Recipes.addShaped({id: 331, count: 6, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.goldred, 0]);

Recipes.addShaped({id: 49, count: 1, data: 0}, [
    "xx ",
    "xx "
], ['x', ItemID.obsidianore, 0]);

Recipes.addShaped({id: 264, count: 1, data: 0}, [
    "x"
], ['x', ItemID.diamondgold, 0]);

Recipes.addShaped({id: 331, count: 5, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.ironred, 0]);

Recipes.addShaped({id: BlockID.clavel, count: 2, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 13, 0, 'a', 82, 0]);

Recipes.addShaped({id: BlockID.soulnetherrack, count: 8, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 87, 0, 'a', 88, 0]);

Recipes.addShaped({id: BlockID.nethercobble, count: 8, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['x', 4, 0, 'a', BlockID.kakkatzhan, 0]);

Recipes.addShaped({id: BlockID.netherstonebrick, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.netherstone, 0]);

Recipes.addShaped({id: BlockID.netherstonebrickglow, count: 8, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['x', BlockID.netherstonebrick, 0, 'a', 348, 0]);

Recipes.addShaped({id: BlockID.cland, count: 2, data: 0}, [
    "xax",
    "axa",
    "xax"
], ['x', 12, 0, 'a', 82, 0]);

//furnace

Recipes.addFurnace(ItemID.ironred, 265, 0);
Recipes.addFurnace(ItemID.ironcoal, 265, 0);
Recipes.addFurnace(ItemID.goldred, 266, 0);
Recipes.addFurnace(ItemID.diamondgold, ItemID.goldenslag, 0);
Recipes.addFurnace(BlockID.clayore, 337, 0);
Recipes.addFurnace(BlockID.soulnetherrack, BlockID.kakkatzhan, 0);
Recipes.addFurnace(BlockID.nethercobble, BlockID.netherstone, 0);
Recipes.addFurnace(BlockID.cland, BlockID.bricglass, 0);

//toolsCraft

Recipes.addShaped({id: ItemID.nethersword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nethershovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherpik, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherax, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.netherscythe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', 87, 0, 'b', 280, 0]);

Recipes.addFurnaceFuel(ItemID.soulofthedeapths, 0, 12800);
Recipes.addFurnaceFuel(ItemID.ironcoal, 0, 1600);

Recipes.addShaped({id: ItemID.lapiditepulp, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.sifterbasicfixed, 0, 'z', ItemID.lapis_lotus, 0]);

Recipes.addShaped({id: VanillaItemID.lapis_lazuli, count: 1, data: 0}, [
    " a ",
    "aaa",
    " a "
], ['a', ItemID.lapiditepulp, 0]);

Recipes.addShaped({id: ItemID.reinforcedsword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedshovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedpickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedaxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.reinforcedhoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', 213, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.obsidianore, count: 4, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', 49, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: ItemID.flintclay, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', BlockID.clavel, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 331, count: 6, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.ironred, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 318, count: 1, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', 13, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: 331, count: 7, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.goldred, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});

Recipes.addShaped({id: ItemID.lapiditepulp, count: 2, data: 0}, [
    "xz"
], ['x', ItemID.siftermodified, 0, 'z', ItemID.lapis_lotus, 0],
function(api, slots, result, player){
for(let i in slots)
if(slots[i].id != ItemID.siftermodified)
api.decreaseFieldSlot(i);
});




