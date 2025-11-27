//модель камня
function createKamnRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 2/16, 6/16, 1/16, 7/16,  idMaterial, dataMaterial);
model.addBox (11/16, 0, 12/16, 15/16, 1/16, 1,  idMaterial, dataMaterial);
render.addEntry(model);
}
function createKamRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (1/16, 0, 2/16, 6/16, 1/16, 7/16,  idMaterial, dataMaterial);
model.addBox (11/16, 0, 12/16, 15/16, 1/16, 1,  idMaterial, dataMaterial);
model.addBox (5/16, 0, 12/16, 9/16, 2/16, 15/16,  idMaterial, dataMaterial);
render.addEntry(model);
}
//сам камень
createKamen("kamni","камень","cobblestone",0, "камень", ItemID.kamni, BlockID.kamni,0);
Block.setBlockShape(BlockID.kamni, {x: 1/16, y: 0, z: 2/16}, {x: 6/16, y: 1/16, z: 7/16})
createKame("kamn","камень","cobblestone",0, "камень", ItemID.kamn, BlockID.kamn,0);
createKamnRender(BlockID.kamn, 4, 0);
Block.setBlockShape(BlockID.kamn, {x: 1/16, y: 0, z: 2/16}, {x: 15/16, y: 1/16, z: 1})
createKam("kam","камень","cobblestone",0, "камень", ItemID.kam, BlockID.kam,0);
createKamRender(BlockID.kam, 4, 0);
Block.setBlockShape(BlockID.kam, {x: 1/16, y: 0, z: 2/16}, {x: 15/16, y: 1/16, z: 1})
createKamen("ka","камень","empty",0, "камень", ItemID.ka, BlockID.ka,0);
Block.setBlockShape(BlockID.ka, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
createKamen("k","камень","empty",0, "камень", ItemID.k, BlockID.k,0);
Block.setBlockShape(BlockID.k, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
createKamen("a","камень","empty",0, "камень", ItemID.a, BlockID.a,0);
Block.setBlockShape(BlockID.a, {x: 2/16, y: 0, z: 2/16}, {x: 14/16, y: 1/16, z: 14/16})
	var RUBB_SAPLING_GROUND_TILES = {
	2: true,
	12: true,
	3: true,
	243: true,
	60: true
};
TileEntity.registerPrototype(BlockID.kamni, {
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
TileEntity.registerPrototype(BlockID.kamn, {
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
TileEntity.registerPrototype(BlockID.kam, {
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
TileEntity.registerPrototype(BlockID.ka, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.oscolok_cremnia,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.oscolok_cremnia,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.k, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.rakyshkaa,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.rakyshkaa,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.a, {
	defaultValues: {
		growth: 0,
		lastGrowth: 0
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation2 = new Animation.Item(this.x+.5, this.y+1/16, this.z+.5);
		this.animation1.describeItem({
			id: ItemID.rakyshkab,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.rakyshkab,
			count: 1,
			data: 0,
			rotation: [3.14/2, 0, 0],
			size: 1
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (!RUBB_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
								this.selfDestroy();
			}
		}
	}
}
});
//массив
var kamen = [1,2,35,37,4,18,27,28,13,243];
//генерация
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamni, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .5){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamn, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}
	}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kam, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);						
			}		}	}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kamni) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kamn) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kam) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.ka) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.a) 
{
Game.prevent();
}});
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.k) 
{
Game.prevent();
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamni, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .5){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kamn, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}
	}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .2){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kam, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);						
			}		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .05){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ka, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);						
			}		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < .05){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ka, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);						
			}		}	}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.k, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}
}
}
}
}});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 100);		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);		for(var id in kamen ){			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64) == id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)){
			if(World.getBlockID(coords.x, coords.y+1, coords.z) == 0){
for(var xx = -10; xx <= 10; xx++)
{
for(var yy = -10; yy <= 10; yy++)
{
for(var zz = -10; zz <= 10; zz++)
{
if(World.getBlockID(coords.x+xx, coords.y+yy, coords.z+zz) == 8)
{				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a, 0);				World.addTileEntity(coords.x, coords.y + 1, coords.z);								}	}
}
}
}
}
}});