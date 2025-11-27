Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 20,
	renderlayer: 3
}, "basalt");

IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [
	{name: "Basalt", texture: [["basalt", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 1, true);
Block.registerDropFunction("basalt", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[BlockID.basalt, 1, 0]];
		}
		return [[BlockID.basaltCobble, 1, 0]];
	}
	return [];
}, 1);


IDRegistry.genBlockID("basaltCobble");
Block.createBlock("basaltCobble", [
	{name: "Basalt Cobble", texture: [["basalt_cobble", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltCobble, "stone", 1, true);
Block.setDestroyLevel("basaltCobble", 1);

IDRegistry.genBlockID("basaltBrick");
Block.createBlock("basaltBrick", [
	{name: "Basalt Brick", texture: [["basalt_brick", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltBrick, "stone", 1, true);
Block.setDestroyLevel("basaltBrick", 1);

IDRegistry.genBlockID("basaltChiseled");
Block.createBlock("basaltChiseled", [
	{name: "Chiseled Basalt Brick", texture: [["basalt_chiseled", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltChiseled, "stone", 1, true);
Block.setDestroyLevel("basaltChiseled", 1);

IDRegistry.genBlockID("basaltPaver");
Block.createBlock("basaltPaver", [
	{name: "Basalt Paver", texture: [["basalt_paver", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltPaver, "stone", 1, true);
Block.registerDropFunction("basaltPaver", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[BlockID.basalt, 1, 0]];
		}
		return [[BlockID.basaltCobble, 1, 0]];
	}
	return [];
}, 1);

IDRegistry.genBlockID("basaltCobbleSlab");
Block.createBlock("basaltCobbleSlab", [
	{name: "Basalt Cobble Slab", texture: [["basalt_cobble", 0]], inCreative: true},
	{name: "Basalt Cobble Slab", texture: [["basalt_cobble", 0]], inCreative: false}
], "part");
ToolAPI.registerBlockMaterial(BlockID.basaltCobbleSlab, "stone", 1, true);
Block.setDestroyTime(BlockID.basaltCobbleSlab, 1.5);
Block.setDestroyLevel("basaltCobbleSlab", 1);
TileRenderer.makeSlab(BlockID.basaltCobbleSlab, BlockID.basaltCobble);

IDRegistry.genBlockID("basaltBrickSlab");
Block.createBlock("basaltBrickSlab", [
	{name: "Basalt Brick Slab", texture: [["basalt_brick", 0]], inCreative: true},
	{name: "Basalt Brick Slab", texture: [["basalt_brick", 0]], inCreative: false}
], "part");
ToolAPI.registerBlockMaterial(BlockID.basaltBrickSlab, "stone", 1, true);
Block.setDestroyTime(BlockID.basaltBrickSlab, 1.5);
Block.setDestroyLevel("basaltBrickSlab", 1);
TileRenderer.makeSlab(BlockID.basaltBrickSlab, BlockID.basaltBrick);


Recipes.addFurnace(BlockID.basaltCobble, BlockID.basalt, 0);
Recipes.addShapeless({id: BlockID.basaltPaver, count: 1, data: 0}, [{id: BlockID.basalt, data: 0}]);
Recipes.addShaped({id: BlockID.basaltBrick, count: 4, data: 0}, [
	"xx",
	"xx"
], ['x', BlockID.basalt, 0]);

Recipes.addShaped({id: BlockID.basaltChiseled, count: 4, data: 0}, [
	"xx",
	"xx"
], ['x', BlockID.basaltBrick, 0]);

Recipes.addShaped({id: BlockID.basaltCobbleSlab, count: 6, data: 0}, [
	"xxx"
], ['x', BlockID.basaltCobble, 0]);

Recipes.addShaped({id: BlockID.basaltBrickSlab, count: 6, data: 0}, [
	"xxx"
], ['x', BlockID.basaltBrick, 0]);


function genBasalt(x, y, z){
	randY = 1 + Math.random()
	randR = Math.random()*3.3
	r = 6.7 + Math.ceil(randR)
	h = r/Math.sqrt(randY)
	for(var xx = -r; xx <= r; xx++){
		for(var yy = -h; yy <= h; yy++){
			for(var zz = -r; zz <= r; zz++){
				if(Math.sqrt(xx*xx + yy*yy*randY + zz*zz) < 6.7 + randR + Math.random()/2){
					id = World.getBlockID(x+xx, y+yy, z+zz)
					if(id==1 || id==3 || id==13 || id==16){
					World.setBlock(x+xx, y+yy, z+zz, BlockID.basalt);}
				}
			}
		}
	}
}


var basaltChance = __config__.getNumber("world_gen.basalt")
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
	if(Math.random() < basaltChance){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 12);
		genBasalt(coords.x, coords.y, coords.z);
	}
});