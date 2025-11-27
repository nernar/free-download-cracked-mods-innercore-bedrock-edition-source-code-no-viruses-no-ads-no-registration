var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	destroytime: 2,
	opaque: true
});

IDRegistry.genBlockID("rndBox");
Block.createBlock("rndBox", [
{name: "ящик", texture: [["rndBoxw", 0], ["rndBoxw", 0], ["rndBoxb", 0],["rndBoxb", 0], ["rndBoxb", 0], ["rndBoxb", 0]], inCreative: true}], BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.rndBox, "wood");

Block.registerDropFunction("rndBox", function(coords, blockID, data, diggingLevel, toolLevel){ 
var badloot = [50, 30, 287, 296, 295, 352, 367, 288, 280, 339, 337, 374, 281];
var normalloot = [297, 260, 340, 329, 392, 334, 263, 391, 371, 336, 344, 349, 262, 268, 269, 270, 271, 290];
var xdloot = [265, 266, 409, 422, 259, 289, 331, 341, 346, 406, 416, 420, 421, 348, 368, 381, 291, 298, 299, 301, 301, 272, 273, 274, 275];
var dnr = [1, 2, 3];
var rnd = Math.floor((Math.random()*3)+1);
for(var i=0; i<4; i++)
if(rnd == 1){
var rnd2 = Math.floor(Math.random()*(badloot.length));
var rnd3 = Math.floor(Math.random()*(badloot.length));
var rnd4 = Math.floor(Math.random()*(badloot.length));
return [[badloot[rnd2], 1, data], [badloot[rnd3], 1, data], [badloot[rnd4], 1, data]];  }
else
if(rnd == 2){
var rnd2 = Math.floor(Math.random()*(normalloot.length));
var rnd3 = Math.floor(Math.random()*(normalloot.length));
var rnd4 = Math.floor(Math.random()*(normalloot.length));
return [[normalloot[rnd2], 1, data],[normalloot[rnd3], 1, data], [normalloot[rnd4], 1, data]];  }
else
if(rnd == 3){
var rnd2 = Math.floor(Math.random()*(xdloot.length));
var rnd3 = Math.floor(Math.random()*(xdloot.length));
var rnd4 = Math.floor(Math.random()*(xdloot.length));
return [[xdloot[rnd2], 1, data], [xdloot[rnd3], 1, data], [xdloot[rnd4], 1, data]];  }});

IDRegistry.genBlockID("vesolo");
Block.createBlock("vesolo", [{name: "листва вишни", texture: [["rndBoxn", 0], ["rndBoxv", 0], ["rndBoxb", 0], ["rndBoxb", 0], ["rndBoxb", 0], ["rndBoxb", 0]], inCreative: false}]);

function createARender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (2/16, 4/16, 1/32, 4/16, 6/16, 31/32,  BlockID.vesolo,0);
model.addBox (2/16, 9/16, 1/32, 4/16, 11/16, 31/32,  BlockID.vesolo,0);
model.addBox (4/16, 5/16, 1/32, 6/16, 7/16, 31/32,  BlockID.vesolo,0);
model.addBox (4/16, 8/16, 1/32, 6/16, 10/16, 31/32,  BlockID.vesolo,0);
model.addBox (6/16, 6/16, 1/32, 8/16, 8/16, 31/32,  BlockID.vesolo,0);
model.addBox (8/16, 7/16, 1/32, 10/16, 9/16, 31/32,  BlockID.vesolo,0);
model.addBox (10/16, 8/16, 1/32, 12/16, 10/16, 31/32,  BlockID.vesolo,0);
model.addBox (12/16, 9/16, 1/32, 14/16, 11/16, 31/32,  BlockID.vesolo,0);
model.addBox (10/16, 5/16, 1/32, 12/16, 7/16, 31/32,  BlockID.vesolo,0);
model.addBox (12/16, 4/16, 1/32, 14/16, 6/16, 31/32,  BlockID.vesolo,0);
model.addBox (1/16, 4/16, 1/16, 15/16, 12/16, 15/16,  BlockID.rndBox,0);
model.addBox (1/32, 4/16, 2/16, 31/32, 6/16, 4/16,  BlockID.vesolo,0);
model.addBox (1/32, 9/16, 2/16, 31/32, 11/16, 4/16,  BlockID.vesolo,0);
model.addBox (1/32, 5/16, 4/16, 31/32, 7/16, 6/16,  BlockID.vesolo,0);
model.addBox (1/32, 8/16, 4/16, 31/32, 10/16, 6/16,  BlockID.vesolo,0);
model.addBox (1/32, 6/16, 6/16, 31/32, 8/16, 8/16,  BlockID.vesolo,0);
model.addBox (1/32, 7/16, 8/16, 31/32, 9/16, 10/16,  BlockID.vesolo,0);
model.addBox (1/32, 8/16, 10/16, 31/32, 10/16, 12/16,  BlockID.vesolo,0);
model.addBox (1/32, 9/16, 12/16, 31/32, 11/16, 14/16,  BlockID.vesolo,0);
model.addBox (1/32, 5/16, 10/16, 31/32, 7/16, 12/16,  BlockID.vesolo,0);
model.addBox (1/32, 4/16, 12/16, 31/32, 6/16, 14/16,  BlockID.vesolo,0);
model.addBox (0, 12/16, 0, 4/16, 1, 1,  BlockID.rndBox,0);
model.addBox (1/32, 4/16, 28/32, 2/16, 5/16, 31/32,  BlockID.vesolo,0);
model.addBox (1/32, 10/16, 28/32, 2/16, 12/16, 31/32,  BlockID.vesolo,0);
model.addBox (1/32, 4/16, 1/32, 2/16, 5/16, 4/32,  BlockID.vesolo,0);
model.addBox (1/32, 10/16, 1/32, 2/16, 12/16, 4/32,  BlockID.vesolo,0);
model.addBox (14/16, 4/16, 28/32, 31/32, 5/16, 31/32,  BlockID.vesolo,0);
model.addBox (14/16, 10/16, 28/32, 31/32, 12/16, 31/32,  BlockID.vesolo,0);
model.addBox (14/16, 4/16, 1/32, 31/32, 5/16, 4/32,  BlockID.vesolo,0);
model.addBox (14/16, 10/16, 1/32, 31/32, 12/16, 4/32,  BlockID.vesolo,0);
model.addBox (12/16, 12/16, 0, 1, 1, 1,  BlockID.rndBox,0);
model.addBox (0, 0, 0, 4/16, 4/16, 1,  BlockID.rndBox,0);
model.addBox (12/16, 0, 0, 1, 4/16, 1,  BlockID.rndBox,0);
model.addBox (4/16, 12/16, 0, 12/16, 1, 4/16,  BlockID.rndBox,0);
model.addBox (4/16, 12/16, 12/16, 12/16, 1, 1,  BlockID.rndBox,0);
model.addBox (4/16, 0, 0, 12/16, 4/16, 4/16,  BlockID.rndBox,0);
model.addBox (4/16, 0, 12/16, 12/16, 4/16, 1,  BlockID.rndBox,0);
model.addBox (4/16, 14/16, 4/16, 12/16, 61/64, 12/16,  BlockID.rndBox,0);
model.addBox (4/16, 3/64, 4/16, 12/16, 2/16, 12/16,  BlockID.rndBox,0);
render.addEntry(model);
}

createARender(BlockID.rndBox, 35, 12);

var va = [2,17,36,35,16,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 5)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.rndBox, 0);
}
}
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 5)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.rndBox, 0);
}
}
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 5)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.rndBox, 0);
}
}
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 5)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.rndBox, 0);
}
}
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var iu in va ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == iu)&&(World.getBlockID(coords.x, coords.y, coords.z) == 5)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){World.setBlock(coords.x, coords.y+1, coords.z, BlockID.rndBox, 0);
}
}
}
});

Recipes.addFurnaceFuel(BlockID.rndBox, 0, 200);

Translation.addTranslation("ящик", {en: "box"});