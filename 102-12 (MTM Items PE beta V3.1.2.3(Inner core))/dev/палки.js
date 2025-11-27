IDRegistry.genBlockID("kap");
Block.createBlock("kap", [
{name: "ящик", texture: [["kap", 0], ["kap", 0], ["kap", 0],["kap", 0], ["kap", 0], ["kap", 0]], inCreative: false}]);
IDRegistry.genBlockID("kb");
Block.createBlock("kb", [
{name: "ящик", texture: [["kb", 0], ["kb", 0], ["kb", 0],["kb", 0], ["kb", 0], ["kb", 0]], inCreative: false}]);
IDRegistry.genBlockID("kc");
Block.createBlock("kc", [
{name: "ящик", texture: [["kc", 0], ["kc", 0], ["kc", 0],["kc", 0], ["kc", 0], ["kc", 0]], inCreative: false}]);
IDRegistry.genBlockID("kd");
Block.createBlock("kd", [
{name: "ящик", texture: [["kd", 0], ["kd", 0], ["kd", 0],["kd", 0], ["kd", 0], ["kd", 0]], inCreative: false}]);
function createPalRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 11/16, 5/16, 1/16, 12/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 12/16, 5/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 11/16, 4/16, 1/16, 12/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 12/16, 4/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 13/16, 3/16, 1/16, 14/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 12/16, 3/16, 1/16, 13/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 13/16, 4/16, 1/16, 14/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 14/16, 2/16, 1/16, 15/16,  BlockID.kap, 0);
model.addBox (1/16, 0, 13/16, 2/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (2/16, 0, 14/16, 3/16, 1/16, 15/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 10/16, 6/16, 1/16, 11/16,  BlockID.kd, 0);
model.addBox (6/16, 0, 9/16, 7/16, 1/16, 10/16,  BlockID.kc, 0);
model.addBox (7/16, 0, 8/16, 8/16, 1/16, 9/16,  BlockID.kd, 0);
model.addBox (8/16, 0, 7/16, 9/16, 1/16, 8/16,  BlockID.kc, 0);
model.addBox (9/16, 0, 6/16, 10/16, 1/16, 7/16,  BlockID.kd, 0);
model.addBox (10/16, 0, 5/16, 11/16, 1/16, 6/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 4/16, 12/16, 1/16, 5/16,  BlockID.kd, 0);
model.addBox (12/16, 0, 3/16, 13/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 2/16, 14/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (13/16, 0, 3/16, 14/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 4/16, 13/16, 1/16, 5/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 5/16, 12/16, 1/16, 6/16,  BlockID.kb, 0);
model.addBox (10/16, 0, 6/16, 11/16, 1/16, 7/16,  BlockID.kb, 0);
model.addBox (9/16, 0, 7/16, 10/16, 1/16, 8/16,  BlockID.kb, 0);
model.addBox (8/16, 0, 8/16, 9/16, 1/16, 9/16,  BlockID.kb, 0);
model.addBox (7/16, 0, 9/16, 8/16, 1/16, 10/16,  BlockID.kb, 0);
model.addBox (6/16, 0, 10/16, 7/16, 1/16, 11/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 11/16, 6/16, 1/16, 12/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 2/16, 13/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (11/16, 0, 3/16, 12/16, 1/16, 4/16,  BlockID.kap, 0);
model.addBox (10/16, 0, 4/16, 11/16, 1/16, 5/16,  BlockID.kap, 0);
model.addBox (9/16, 0, 5/16, 10/16, 1/16, 6/16,  BlockID.kap, 0);
model.addBox (8/16, 0, 6/16, 9/16, 1/16, 7/16,  BlockID.kap, 0);
model.addBox (7/16, 0, 7/16, 8/16, 1/16, 8/16,  BlockID.kap, 0);
model.addBox (6/16, 0, 8/16, 7/16, 1/16, 9/16,  BlockID.kap, 0);
model.addBox (5/16, 0, 9/16, 6/16, 1/16, 10/16,  BlockID.kap, 0);
model.addBox (4/16, 0, 10/16, 5/16, 1/16, 11/16,  BlockID.kap, 0);
render.addEntry(model);
}
function createPaltRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 4/16, 5/16, 1/16, 5/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 3/16, 5/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 4/16, 4/16, 1/16, 5/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 3/16, 4/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 2/16, 3/16, 1/16, 3/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 3/16, 3/16, 1/16, 4/16,  BlockID.kap, 0);
model.addBox (3/16, 0, 2/16, 4/16, 1/16, 3/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 1/16, 2/16, 1/16, 2/16,  BlockID.kap, 0);
model.addBox (1/16, 0, 2/16, 2/16, 1/16, 3/16,  BlockID.kap, 0);
model.addBox (2/16, 0, 1/16, 3/16, 1/16, 2/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 5/16, 6/16, 1/16, 6/16,  BlockID.kd, 0);
model.addBox (6/16, 0, 6/16, 7/16, 1/16, 7/16,  BlockID.kc, 0);
model.addBox (7/16, 0, 7/16, 8/16, 1/16, 8/16,  BlockID.kd, 0);
model.addBox (8/16, 0, 8/16, 9/16, 1/16, 9/16,  BlockID.kc, 0);
model.addBox (9/16, 0, 9/16, 10/16, 1/16, 10/16,  BlockID.kd, 0);
model.addBox (10/16, 0, 10/16, 11/16, 1/16, 11/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 11/16, 12/16, 1/16, 12/16,  BlockID.kd, 0);
model.addBox (12/16, 0, 12/16, 13/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 13/16, 14/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (13/16, 0, 12/16, 14/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 11/16, 13/16, 1/16, 12/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 10/16, 12/16, 1/16, 11/16,  BlockID.kb, 0);
model.addBox (10/16, 0, 9/16, 11/16, 1/16, 10/16,  BlockID.kb, 0);
model.addBox (9/16, 0, 8/16, 10/16, 1/16, 9/16,  BlockID.kb, 0);
model.addBox (8/16, 0, 7/16, 9/16, 1/16, 8/16,  BlockID.kb, 0);
model.addBox (7/16, 0, 6/16, 8/16, 1/16, 7/16,  BlockID.kb, 0);
model.addBox (6/16, 0, 5/16, 7/16, 1/16, 6/16,  BlockID.kb, 0);
model.addBox (5/16, 0, 4/16, 6/16, 1/16, 5/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 13/16, 13/16, 1/16, 14/16,  BlockID.kap, 0);
model.addBox (11/16, 0, 12/16, 12/16, 1/16, 13/16,  BlockID.kap, 0);
model.addBox (10/16, 0, 11/16, 11/16, 1/16, 12/16,  BlockID.kap, 0);
model.addBox (9/16, 0, 10/16, 10/16, 1/16, 11/16,  BlockID.kap, 0);
model.addBox (8/16, 0, 9/16, 9/16, 1/16, 10/16,  BlockID.kap, 0);
model.addBox (7/16, 0, 8/16, 8/16, 1/16, 9/16,  BlockID.kap, 0);
model.addBox (6/16, 0, 7/16, 7/16, 1/16, 8/16,  BlockID.kap, 0);
model.addBox (5/16, 0, 6/16, 6/16, 1/16, 7/16,  BlockID.kap, 0);
model.addBox (4/16, 0, 5/16, 5/16, 1/16, 6/16,  BlockID.kap, 0);
render.addEntry(model);
}
createKamen("pal","камень","stick",0, "камень", ItemID.pal, BlockID.pal,0);
createPalRender(BlockID.pal, 4, 0);
Block.setBlockShape(BlockID.pal, {x: 1/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 15/16})
createKamen("palt","камень","stick",0, "камень", ItemID.palt, BlockID.palt,0);
createPaltRender(BlockID.palt, 4, 0);
Block.setBlockShape(BlockID.palt, {x: 1/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 15/16})
	var RUBB_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	243: true,
	60: true
};
TileEntity.registerPrototype(BlockID.pal, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.palt, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
var kapmen = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kapmen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.pal, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.pal) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .3){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kapmen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.pal, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kapmen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.palt, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.pal) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .3){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kapmen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.palt, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}});