/*
BUILD INFO:
  dir: dev
  target: OutlandsMain.js
  files: 9
*/



// file: blocks.js

var WFNR = Block.createSpecialType({ 
  destroytime: -1,
  }); 
  
  var SA = Block.createSpecialType({ 
  destroytime: -1,
  lightlevel: 15
  }); 
  
  var ST = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 1,
    opaque: true
});

var SK = Block.createSpecialType({
    base: 1,
});

var GL = Block.createSpecialType({
    base: 20,
    destroytime: 0.1,
    explosionres: 1,
});

var GW = Block.createSpecialType({
    destroytime: 1,
    explosionres: 1,
    lightlevel: 15
});


var OLST = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 180,
    explosionres: 1,
    opaque: true
});
  
  var GR = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 2,
    explosionres: 1,
    opaque: true
});

var MD = Block.createSpecialType({
    base: 2,
    destroytime: 2,
    explosionres: 1,
});

var GM = Block.createSpecialType({
    destroytime: 0.01
});

var PL = Block.createSpecialType({
    base: 1
});

var LGM = Block.createSpecialType({
    destroytime: 0.01,
    lightlevel: 3
});


  var SKV = Block.createSpecialType({
    destroytime: 0.01,
    base: 50
});
  
  




  


IDRegistry.genBlockID("wichitumore");
Block.createBlock("wichitumore", [{name: "Wichitum ore", texture: [["wichitumore", 0], ["wichitumore", 0], ["wichitumore", 0], ["wichitumore", 0], ["wichitumore", 0], ["wichitumore", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.wichitumore, "stone");


Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.wichitumore, 0, 10);
    }
}
)

Block.registerDropFunction(BlockID.wichitumore, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.wichitum, 2, 0]);
 return drop;
});


IDRegistry.genBlockID("olgrass");
Block.createBlock("olgrass", [{name: "Outlands grass block", texture: [["oldirt", 0], ["olgrasstop", 0], ["olgrassside", 0], ["olgrassside", 0], ["olgrassside", 0], ["olgrassside", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.olgrass, "dirt");
Block.setDestroyLevel (BlockID.olgrass, 0) 
Block.registerDropFunction("olgrass", function(coords, blockID, blockData, level){
		return [[BlockID.oldirt, 1, 0]]
	return [];
}, 1);



IDRegistry.genBlockID("oldirt");
Block.createBlock("oldirt", [{name: "Outlands dirt", texture: [["oldirt", 0], ["oldirt", 0], ["oldirt", 0], ["oldirt", 0], ["oldirt", 0], ["oldirt", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.oldirt, "dirt");
Block.registerDropFunction("oldirt", function(coords, blockID, blockData, level){
	if(Math.random>0.4){
		return [[ItemID.oltorf, 1, 0]]
	return [];
	}
}, 1);



IDRegistry.genBlockID("olstone");
Block.createBlock("olstone", [{name: "Outlands stone", texture: [["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0]], inCreative: true}], OLST);
ToolAPI.registerBlockMaterial(BlockID.olstone, "stone");
Block.registerDropFunction("olstone", function(coords, blockID, blockData, level){

	if(level>9){
		return [[BlockID.olstone, 1, 0]]
	return [];
	}
	
	else{
		return [[0, 0, 0]]
	return [];
	}
}, 1);




IDRegistry.genBlockID("wakefulnessrock");
Block.createBlock("wakefulnessrock", [{name: "Wakefulnessrock", texture: [["wakefulnessrock", 0], ["wakefulnessrock", 0], ["wakefulnessrock", 0], ["wakefulnessrock", 0], ["wakefulnessrock", 0], ["wakefulnessrock", 0]], inCreative: true}], WFNR);
ToolAPI.registerBlockMaterial(BlockID.wakefulnessrock, "stone");


IDRegistry.genBlockID("olwood");
Block.createBlock("olwood", [{name: "Outlands wood", texture: [["olwoodtop", 0], ["olwoodtop", 0], ["olwoodside", 0], ["olwoodside", 0], ["olwoodside", 0], ["olwoodside", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.olwood, "wood");
Block.setDestroyLevel (BlockID.olwood, 0) 
Block.registerDropFunction("olwood", function(coords, blockID, blockData, level){
		return [[BlockID.olwood, 1, 0]]
	return [];
}, 1);



IDRegistry.genBlockID("olleaves");
Block.createBlock("olleaves", [{name: "Outlands leaves", texture: [["olleaves", 0], ["olleaves", 0], ["olleaves", 0], ["olleaves", 0], ["olleaves", 0], ["olleaves", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.olleaves, "wood");
Block.setDestroyLevel (BlockID.olleaves, 0) 
Block.registerDropFunction("olleaves", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);


IDRegistry.genBlockID("olgr1"); 
  Block.createBlock("olgr1", [{name: "Outlands grass", texture: [["olgr1", 0], ["olgr1", 0], ["olgr1", 0], ["olgr1", 0], ["olgr1", 0], ["olgr1", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.olgr1, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "olgr1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "olgr1", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.olgr1, -1, render);
Block.setBlockShape(BlockID.olgr1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Block.registerDropFunction("olgr1", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);



IDRegistry.genBlockID("olgr2"); 
  Block.createBlock("olgr2", [{name: "Outlands grass", texture: [["olgr2", 0], ["olgr2", 0], ["olgr2", 0], ["olgr2", 0], ["olgr2", 0], ["olgr2", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.olgr2, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "olgr2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "olgr2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.olgr2, -1, render);
Block.setBlockShape(BlockID.olgr2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Block.registerDropFunction("olgr2", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);



IDRegistry.genBlockID("bluemsh"); 
  Block.createBlock("bluemsh", [{name: "Outlands mushroom", texture: [["bluemshtop", 0], ["bluemshtop", 0], ["bluemshtop", 0], ["bluemshtop", 0], ["bluemshtop", 0], ["bluemshtop", 0]], inCreative: false}], LGM);
  ToolAPI.registerBlockMaterial(BlockID.bluemsh, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(5/16, 0/16, 5/16, 9/16, 5/16, 9/16, "bluemshbottom", 0);
model.addBox(2/16, 5/16, 2/16, 11/16, 8/16, 11/16, "bluemshtop", 0);
model.addBox(3/16, 8/16, 3/16, 10/16, 9/16, 10/16, "bluemshtop", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bluemsh, -1, render);
Block.setBlockShape(BlockID.bluemsh, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Block.registerDropFunction("bluemsh", function(coords, blockID, blockData, level){
		return [[ItemID.olmsh1, 1, 0]]
	return [];
}, 1); 



IDRegistry.genBlockID("brownmsh"); 
  Block.createBlock("brownmsh", [{name: "Outlands mushroom", texture: [["brownmshtop", 0], ["brownmshtop", 0], ["brownmshtop", 0], ["brownmshtop", 0], ["brownmshtop", 0], ["brownmshtop", 0]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.brownmsh, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(6/16, 0/16, 6/16, 8/16, 7/16, 8/16, "brownmshbottom", 0);
model.addBox(5/16, 7/16, 5/16, 9/16, 12/16, 9/16, "brownmshtop", 0);
model.addBox(6/16, 12/16, 6/16, 8/16, 13/16, 8/16, "brownmshtop", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.brownmsh, -1, render);
Block.setBlockShape(BlockID.brownmsh, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Block.registerDropFunction("brownmsh", function(coords, blockID, blockData, level){
		return [[ItemID.olmsh2, 1, 0]]
	return [];
}, 1);



IDRegistry.genBlockID("minimsh"); 
  Block.createBlock("minimsh", [{name: "Outlands mushroom", texture: [["minimsh", 0], ["minimsh", 0], ["minimsh", 0], ["minimsh", 0], ["minimsh", 0], ["minimsh", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.minimsh, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(1/16, 0/16, 1/16, 2/16, 2/16, 2/16, "brownmshbottom", 0);
model.addBox(2/16, 0/16, 5/16, 3/16, 2/16, 6/16, "brownmshbottom", 0);
model.addBox(1/16, 0/16, 9/16, 2/16, 2/16, 10/16, "brownmshbottom", 0);
model.addBox(5/16, 0/16, 9/16, 6/16, 2/16, 10/16, "brownmshbottom", 0);
model.addBox(5/16, 0/16, 13/16, 6/16, 2/16, 14/16, "brownmshbottom", 0);
model.addBox(7/16, 0/16, 2/16, 8/16, 2/16, 3/16, "brownmshbottom", 0);
model.addBox(8/16, 0/16, 6/16, 9/16, 2/16, 7/16, "brownmshbottom", 0);
model.addBox(11/16, 0/16, 2/16, 12/16, 2/16, 3/16, "brownmshbottom", 0);
model.addBox(12/16, 0/16, 7/16, 13/16, 2/16, 8/16, "brownmshbottom", 0);
model.addBox(10/16, 0/16, 11/16, 11/16, 2/16, 12/16, "brownmshbottom", 0);



model.addBox(0/16, 2/16, 0/16, 3/16, 3/16, 3/16, "brownmshtop", 0);
model.addBox(1/16, 2/16, 4/16, 4/16, 3/16, 7/16, "brownmshtop", 0);
model.addBox(0/16, 2/16, 8/16, 3/16, 3/16, 11/16, "brownmshtop", 0);
model.addBox(4/16, 2/16, 8/16, 7/16, 3/16, 11/16, "brownmshtop", 0);
model.addBox(4/16, 2/16, 12/16, 7/16, 3/16, 15/16, "brownmshtop", 0);
model.addBox(6/16, 2/16, 1/16, 9/16, 3/16, 4/16, "brownmshtop", 0);
model.addBox(7/16, 2/16, 5/16, 10/16, 3/16, 8/16, "brownmshtop", 0);
model.addBox(10/16, 2/16, 1/16, 13/16, 3/16, 4/16, "brownmshtop", 0);
model.addBox(11/16, 2/16, 6/16, 14/16, 3/16, 9/16, "brownmshtop", 0);
model.addBox(9/16, 2/16, 10/16, 12/16, 3/16, 13/16, "brownmshtop", 0);



/*
model.addBox(5/16, 7/16, 5/16, 9/16, 12/16, 9/16, "brownmshtop", 0);
model.addBox(6/16, 12/16, 6/16, 8/16, 13/16, 8/16, "brownmshtop", 0);
*/
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.minimsh, -1, render);
Block.setBlockShape(BlockID.minimsh, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Block.registerDropFunction("minimsh", function(coords, blockID, blockData, level){
		return [[ItemID.olmsh2, 3, 0]]
	return [];
}, 1);


/*
IDRegistry.genBlockID("rra"); 
  Block.createBlock("rra", [{name: "Outlands duckweed", texture: [["rra", 0], ["rra", 0], ["rraside", 0], ["rraside", 0], ["rraside", 0], ["rraside", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.rra, "plant");
  
  var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(0/16, 0/16, 0/16, 16/16, 3/16, 16/16, "rra", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.rra, -1, render);

for(let i = 16; i--;){
  BlockRenderer.setStaticICRender(BlockID.rra, i, render);
}


const render = new ICRender.CollisionShape();
render.addEntry().addBox(1, 1, 1, 0, 0, 0);
for(let i = 16; i--;){
  BlockRenderer.setCustomCollisionShape(BlockID.rra, i, render);
}
*/










/*
var BLOCK_TYPE_FIRE = Block.createSpecialType({
	lightlevel:6
});
IDRegistry.genBlockID("msh1");
Block.createBlock("msh1", [
	{name: "Fironia", texture: [["msh1",0]], inCreative: true}
],BLOCK_TYPE_FIRE);
Translation.addTranslation("msh1", {ru: "????????"});
Block.setBlockShape(BlockID.msh1, 
			{x: 0, y: 0, z: 0}, 
			{x: 1, y: 0.001, z: 1}
		);
		BlockRenderer.addRenderCallback(BlockID.msh1, function(api, coords,block) {	
			api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1, BlockID.msh1, 0);											
			api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, BlockID.msh1, 0);										
		});
		BlockRenderer.enableCustomRender(BlockID.msh1);
*/



IDRegistry.genBlockID("olplanks");
Block.createBlock("olplanks", [{name: "Outlands wood planks", texture: [["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olplanks, "wood");
Recipes.addShaped({id: BlockID.olplanks, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.olwood, 0]);



IDRegistry.genBlockID("olstonebricks");
Block.createBlock("olstonebricks", [{name: "Outlands stone bricks", texture: [["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olstonebricks, "stone");
Recipes.addShaped({id: BlockID.olstonebricks, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.olstone, 0]);



IDRegistry.genBlockID("olstonebricksaede");
Block.createBlock("olstonebricksaede", [{name: "Outlands carved stone bricks", texture: [["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olstonebricksaede, "stone");
Recipes.addShaped({id: BlockID.olstonebricksaede, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.olstonebricks, 0]);


IDRegistry.genBlockID("olstonebricksmossy");
Block.createBlock("olstonebricksmossy", [{name: "Outlands mossy stone bricks", texture: [["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olstonebricksmossy, "stone");
Recipes.addShaped({id: BlockID.olstonebricksmossy, count: 4, data: 0}, [ " b ", " a ", "   "], ['a', BlockID.olstonebricks, 0, 'b', BlockID.oldirt, 0]);


IDRegistry.genBlockID("olstonebrickscracked");
Block.createBlock("olstonebrickscracked", [{name: "Outlands cracked stone bricks", texture: [["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olstonebrickscracked, "stone");
Recipes.addFurnace(BlockID.olstonebricks, BlockID.olstonebrickscracked, 1);


IDRegistry.genBlockID("owplate");
Block.createBlock("owplate", [{name: "Outlands wood plate", texture: [["olwoodtop", 0], ["olwoodtop", 0], ["olwoodside", 0], ["olwoodside", 0], ["olwoodside", 0], ["olwoodside", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.owplate, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: BlockID.olwood, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.owplate, 0]);
Block.setBlockShape(BlockID.owplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


IDRegistry.genBlockID("owpplate");
Block.createBlock("owpplate", [{name: "Outlands wood planks plate", texture: [["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0], ["olplanks", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.owpplate, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olplanks, 0]);
Recipes.addShaped({id: BlockID.olplanks, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.owpplate, 0]);
Block.setBlockShape(BlockID.owpplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genBlockID("owsplate");
Block.createBlock("owsplate", [{name: "Outlands stone plate", texture: [["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0], ["olstone", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.owsplate, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: BlockID.olstone, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.owsplate, 0]);
Block.setBlockShape(BlockID.owsplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


IDRegistry.genBlockID("olstonebricksplate");
Block.createBlock("olstonebricksplate", [{name: "Outlands stone bricks plate", texture: [["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0], ["olstonebricks", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.olstonebricksplate, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olstonebricks, 0]);
Recipes.addShaped({id: BlockID.olstonebricks, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.olstonebricksplate, 0]);
Block.setBlockShape(BlockID.olstonebricksplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


IDRegistry.genBlockID("olcarvedstonebricksplate");
Block.createBlock("olcarvedstonebricksplate", [{name: "Outlands carved stone bricks plate", texture: [["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0], ["olstonebricksaede", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.olcarvedstonebricksplate, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olstonebricksaede, 0]);
Recipes.addShaped({id: BlockID.olstonebricksaede, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.olcarvedstonebricksplate, 0]);
Block.setBlockShape(BlockID.olcarvedstonebricksplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


Recipes.addShaped({id: 54, count: 1, data: 0}, [ "aa", "aa ", "   "], ['a', BlockID.olplanks, 0]);


IDRegistry.genBlockID("platestonebrickscracked");
Block.createBlock("platestonebrickscracked", [{name: "Outlands cracked stone bricks plate", texture: [["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0], ["olstonebrickscracked", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.platestonebrickscracked, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olstonebrickscracked, 0]);
Recipes.addShaped({id: BlockID.olstonebrickscracked, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.platestonebrickscracked, 0]);
Block.setBlockShape(BlockID.platestonebrickscracked, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


IDRegistry.genBlockID("platestonebricksmossy");
Block.createBlock("platestonebricksmossy", [{name: "Outlands mossy stone bricks plate", texture: [["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0], ["olstonebricksmossy", 0]], inCreative: true}], PL);
Recipes.addShaped({id: BlockID.platestonebricksmossy, count: 6, data: 0}, [ "   ", "aaa", "   "], ['a', BlockID.olstonebricksmossy, 0]);
Recipes.addShaped({id: BlockID.olstonebricksmossy, count: 6, data: 0}, [ " a ", " a ", "   "], ['a', BlockID.platestonebricksmossy, 0]);
Block.setBlockShape(BlockID.platestonebricksmossy, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});



IDRegistry.genBlockID("olbookshelf");
Block.createBlock("olbookshelf", [{name: "Outlands book shelf", texture: [["olplanks", 0], ["olplanks", 0], ["olbookshelf", 0], ["olbookshelf", 0], ["olbookshelf", 0], ["olbookshelf", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.olbookshelf, "wood");












IDRegistry.genBlockID("oljukebox");
Block.createBlock("oljukebox", [{name: "Outlands jukebox", texture: [["oljukebox", 0], ["oljukeboxtop", 0], ["oljukebox", 0], ["oljukebox", 0], ["oljukebox", 0], ["oljukebox", 0]], inCreative: true}], ST);
ToolAPI.registerBlockMaterial(BlockID.oljukebox, "wood");







IDRegistry.genBlockID("olrubyore");
Block.createBlock("olrubyore", [{name: "Outlands ruby ore", texture: [["olrubyore", 0], ["olrubyore", 0], ["olrubyore", 0], ["olrubyore", 0], ["olrubyore", 0], ["olrubyore", 0]], inCreative: true}], OLST);
ToolAPI.registerBlockMaterial(BlockID.olrubyore, "stone");
Block.registerDropFunction("olrubyore", function(coords, blockID, blockData, level, numericID){
	if (level>10){
		return [[ItemID.olruby, 3, 0]]
	return [];
	}
	else{
		return [[0, 0, 0]]
	return [];
	}
}, 1);


IDRegistry.genBlockID("olwoodmossy");
Block.createBlock("olwoodmossy", [{name: "Outlands stump", texture: [["olwoodtop", 0], ["olwoodtop", 0], ["olwoodmossy", 0], ["olwoodmossy", 0], ["olwoodmossy", 0], ["olwoodmossy", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.olwoodmossy, "wood");



IDRegistry.genBlockID("olwoodmossy0"); 
  Block.createBlock("olwoodmossy0", [{name: "Rotting wood", texture: [["olwoodmossy0", 0], ["olwoodmossy0", 0], ["olwoodmossy0", 0], ["olwoodmossy0", 0], ["olwoodmossy0", 0], ["olwoodmossy0", 0]], inCreative: true}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, "olwoodmossy0", 0);
model.addBox(0/16, 15/16, 0/16, 16/16, 16/16, 16/16, "olwoodmossy0", 0);
model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 1/16, "olwoodmossy0", 0);
model.addBox(0/16, 0/16, 15/16, 16/16, 16/16, 16/16, "olwoodmossy0", 0);


render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.olwoodmossy0, -1, render);

Block.setBlockShape(BlockID.olwoodmossy0, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

IDRegistry.genBlockID("olfurnace"); 
  Block.createBlockWithRotation("olfurnace", [{name: "Outlands furnace", texture: [["olstone", 0], ["olstone", 0], ["olstone", 0], ["olfurnace", 0], ["olstone", 0], ["olstone", 0]], inCreative: true}], ST);
  ToolAPI.registerBlockMaterial(BlockID.olfurnace, "stone");
  
  IDRegistry.genBlockID("olglass"); 
  Block.createBlockWithRotation("olglass", [{name: "Outlands glass", texture: [["olglass", 0], ["olglass", 0], ["olglass", 0], ["olglass", 0], ["olglass", 0], ["olglass", 0]], inCreative: true}], GL);
  ToolAPI.registerBlockMaterial(BlockID.olglass, "stone");
  
  
IDRegistry.genBlockID("olglow"); 
  Block.createBlockWithRotation("olglow", [{name: "Outlands glowstone", texture: [["olglow", 0], ["olglow", 0], ["olglow", 0], ["olglow", 0], ["olglow", 0], ["olglow", 0]], inCreative: true}], GW);
  ToolAPI.registerBlockMaterial(BlockID.olglow, "stone");
  
  
  Recipes.addShaped({id: BlockID.olfurnace, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', BlockID.olstone, 0]);
  
  
  IDRegistry.genBlockID("f1"); 
  Block.createBlock("f1", [{name: "Outlands lily of the valley", texture: [["f1", 0], ["f1", 0], ["f1", 0], ["f1", 0], ["f1", 0], ["f1", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.f1, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "f1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "f1", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.f1, -1, render);
Block.setBlockShape(BlockID.f1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("f2"); 
  Block.createBlock("f2", [{name: "Outlands iforina", texture: [["f2", 0], ["f2", 0], ["f2", 0], ["f2", 0], ["f2", 0], ["f2", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.f2, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "f2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "f2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.f2, -1, render);
Block.setBlockShape(BlockID.f2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


IDRegistry.genBlockID("f3"); 
  Block.createBlock("f3", [{name: "Outlands orchid", texture: [["f3", 0], ["f3", 0], ["f3", 0], ["f3", 0], ["f3", 0], ["f3", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.f3, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "f3", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "f3", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.f3, -1, render);
Block.setBlockShape(BlockID.f3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


IDRegistry.genBlockID("beehive");
Block.createBlockWithRotation("beehive", [{name: "Outlands bee hive", texture: [["olbeehivetop", 0], ["olbeehivetop", 0], ["olbeehiveside", 0], ["olbeehiveside", 0], ["olbeehive", 0], ["olbeehiveside", 0]], inCreative: true}], GR);
ToolAPI.registerBlockMaterial(BlockID.beehive, "dirt");
Block.registerDropFunction("beehive", function(coords, blockID, blockData, level){
		return [[ItemID.honey, 2, 0]]
	return [];
}, 1);




IDRegistry.genBlockID("staraltar"); 
  Block.createBlock("staraltar", [{name: "Star Altar", texture: [["staraltar3", 0], ["staraltar3", 0], ["staraltar3", 0], ["staraltar3", 0], ["staraltar3", 0], ["staraltar3", 0]], inCreative: true}], SA);
  ToolAPI.registerBlockMaterial(BlockID.staraltar, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 15.99/16, 4/16, "staraltar1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 15.99/16, 4/16, "staraltar1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 15.99/16, 16/16, "staraltar1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 15.99/16, 16/16, "staraltar1", 0);


model.addBox(0/16, 16/16, 0/16, 16/16, 16/16, 16/16, "staraltar2", 0);


model.addBox(2/16, 0/16, 2/16, 14/16, 8.99/16, 14/16, "staraltar3", 0);

model.addBox(2/16, 9/16, 2/16, 14/16, 9.1/16, 14/16, "staraltar4", 0);


model.addBox(7.999/16, 2/16, 0/16, 8.005/16, 18/16, 16/16, "star", 0);
model.addBox(0/16, 2/16, 7.999/16, 16/16, 18/16, 8.005/16, "star", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.staraltar, -1, render);
Block.setBlockShape(BlockID.staraltar, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});


IDRegistry.genBlockID("starblock");
Block.createBlockWithRotation("starblock", [{name: "Star block", texture: [["stakdkdje", 0], ["stakdkdje", 0], ["starblock", 0], ["starblock", 0], ["starblock", 0], ["starblock", 0]], inCreative: true}], WFNR);
ToolAPI.registerBlockMaterial(BlockID.starblock, "stone");


IDRegistry.genBlockID("star"); 
  Block.createBlock("star", [{name: "Star", texture: [["star", 0], ["star", 0], ["star", 0], ["star", 0], ["star", 0], ["star", 0]], inCreative: true}], SA);
  ToolAPI.registerBlockMaterial(BlockID.star, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "star", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "star", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.star, -1, render);
Block.setBlockShape(BlockID.star, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});



IDRegistry.genBlockID("vasesa"); 
  Block.createBlock("vasesa", [{name: "Vase of star altar", texture: [["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0]], inCreative: false}], GR);
  ToolAPI.registerBlockMaterial(BlockID.vasesa, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(4/16, 0/16, 4/16, 12/16, 8.99/16, 12/16, "vase", 0);

model.addBox(4/16, 9/16, 4/16, 12/16, 9.1/16, 12/16, "vase1", 0);

model.addBox(6/16, 9/16, 6/16, 10/16, 13/16, 10/16, "vase", 0);

model.addBox(5/16, 13/16, 5/16, 11/16, 14.99/16, 11/16, "vase", 0);

model.addBox(5/16, 15/16, 5/16, 11/16, 15.1/16, 11/16, "vasetop", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.vasesa, -1, render);
Block.setBlockShape(BlockID.vasesa, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Block.registerDropFunctionForID(BlockID.vasesa, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.orihalk, 10, 0], [57, 10, 0], [41, 10, 0]]; 
});


IDRegistry.genBlockID("swampaltar"); 
  Block.createBlock("swampaltar", [{name: "Swamp altar", texture: [["swampaltarside", 0], ["swampaltartop", 0], ["swampaltarside", 0], ["swampaltarside", 0], ["swampaltarside", 0], ["swampaltarside", 0]], inCreative: true}], WFNR);
  
  
  IDRegistry.genBlockID("mud"); 
  Block.createBlock("mud", [{name: "Mud", texture: [["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0]], inCreative: true}], MD);
  
  


Callback.addCallback("tick", function(){
    var pos = Player.getPosition();
   // var posm = Entity.getPosition(entity);
 	if (World.getBlock(pos.x, pos.y -2, pos.z).id == BlockID.mud) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 1, 200)
 }
 if (World.getBlock(pos.x, pos.y -1, pos.z).id == BlockID.mud) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 1, 200)
 }
 
 if (World.getBlock(pos.x, pos.y, pos.z).id == BlockID.mud) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 1, 200)
 }
 
 
 
 
 /*
 if (World.getBlock(posm.x, posm.y -2, posm.z).id == BlockID.mud) {
   Entity.addEffect (entity, Native.PotionEffect.movementSlowdown, 1, 200);
 }
 if (World.getBlock(posm.x, posm.y -1, posm.z).id == BlockID.mud) {
   Entity.addEffect (entity, Native.PotionEffect.movementSlowdown, 1, 200);
 }
 
 if (World.getBlock(posm.x, posm.y, posm.z).id == BlockID.mud) {
   Entity.addEffect (entity, Native.PotionEffect.movementSlowdown, 1, 200);
 }
 */
 });
 
 
 Block.setBlockShape(BlockID.mud, {"x":0,"y":0,"z":0}, {"x":1,"y":0.9375,"z":1});
 
 
 //HELL
 
 IDRegistry.genBlockID("strangeskull"); 
  Block.createBlock("strangeskull", [{name: "Strange skull", texture: [["strangeskull", 0], ["strangeskull", 0], ["strangeskull", 0], ["strangeskull", 0], ["strangeskull", 0], ["strangeskull", 0]], inCreative: true}], SK);
  
  ToolAPI.registerBlockMaterial(BlockID.strangeskull, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(10/16, 0.1/16, 4/16, 12/16, 10/16, 12/16, "skullface", 0);

model.addBox(4/16, 1.99/16, 4/16, 10/16, 10/16, 12/16, "skullside", 0);

model.addBox(4/16, 10/16, 4/16, 10/16, 10.1/16, 12/16, "skullmiddle", 0);

model.addBox(4/16, 2.1/16, 4/16, 10/16, 2/16, 12/16, "skullmiddle", 0);


model.addBox(10/16, 10/16, 4/16, 12.1/16, 10.1/16, 12/16, "skullmiddle", 0);

model.addBox(10/16, 0/16, 12/16, 12.1/16, 10/16, 12.1/16, "skullmiddle", 0);

model.addBox(10/16, 0/16, 3.99/16, 12.1/16, 10/16, 4/16, "skullmiddle", 0);

model.addBox(10/16, 0.1/16, 4/16, 12.1/16, 0/16, 12/16, "skullmiddle", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.strangeskull, -1, render);
Block.setBlockShape(BlockID.strangeskull, {"x":0.25,"y":0,"z":0.25}, {"x":0.75,"y":0.625,"z":0.75});

Block.registerDropFunctionForID(BlockID.strangeskull, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.strangeskull, 1, 0]]; 
});


IDRegistry.genBlockID("olobsidian"); 
  Block.createBlock("olobsidian", [{name: "Outlands obsidian", texture: [["olobsidian", 0], ["olobsidian", 0], ["olobsidian", 0], ["olobsidian", 0], ["olobsidian", 0], ["olobsidian", 0]], inCreative: true}], WFNR);
  
  IDRegistry.genBlockID("skullblock"); 
  Block.createBlock("skullblock", [{name: "Skull block", texture: [["skullblockside", 0], ["skullblockside", 0], ["skullblockside", 0], ["skullblock", 0], ["skullblockside", 0], ["skullblockside", 0]], inCreative: true}], ST);
  Recipes.addShaped({id: BlockID.skullblock, count: 1, data: 0}, [ "aba", "cdc", "aaa"], ['a', ItemID.oltorf, 0, 'b', ItemID.eyeofswamp, 0, 'c', ItemID.monsterheart, 0, 'd', ItemID.strangeskull, 0]);
  
  
  
IDRegistry.genBlockID("keystone"); 
  Block.createBlock("keystone", [{name: "Lock", texture: [["keystonebottom", 0], ["keystonetop", 0], ["keystoneside", 0], ["keystoneside", 0], ["keystoneside", 0], ["keystoneside", 0]], inCreative: true}], WFNR);
  
  
  IDRegistry.genBlockID("keyblock"); 
  Block.createBlock("keyblock", [{name: "Key", texture: [["keyblock", 0], ["keyblock", 0], ["keyblock", 0], ["keyblock", 0], ["keyblock", 0], ["keyblock", 0]], inCreative: true}], ST);
  ToolAPI.registerBlockMaterial(BlockID.keyblock, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(8/16, 3/16, 8/16, 9/16, 10/16, 9/16, "keyblock", 0);

model.addBox(7/16, 9/16, 8/16, 8/16, 12/16, 9/16, "keyblock", 0);
model.addBox(9/16, 9/16, 8/16, 10/16, 12/16, 9/16, "keyblock", 0);
model.addBox(8/16, 11/16, 8/16, 9/16, 12/16, 9/16, "keyblock", 0);

model.addBox(4/16, 3/16, 8/16, 8/16, 4/16, 9/16, "keyblock", 0);
model.addBox(5/16, 5/16, 8/16, 8/16, 6/16, 9/16, "keyblock", 0);








render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.keyblock, -1, render);
Block.setBlockShape(BlockID.keyblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


TileEntity.registerPrototype(BlockID.keyblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x,this.y-1,this.z);
var blc1 = wgd1.id== BlockID.keystone;

 if(blc1){
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x, this.y-1, this.z, 0);
  }
 }
});
  
  
  
  IDRegistry.genBlockID("vasereaper"); 
  Block.createBlock("vasereaper", [{name: "Reaper castle vase", texture: [["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0], ["vase", 0]], inCreative: false}], ST);
  ToolAPI.registerBlockMaterial(BlockID.vasereaper, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(4/16, 0/16, 4/16, 12/16, 8.99/16, 12/16, "vase", 0);

model.addBox(4/16, 9/16, 4/16, 12/16, 9.1/16, 12/16, "vase1", 0);

model.addBox(6/16, 9/16, 6/16, 10/16, 13/16, 10/16, "vase", 0);

model.addBox(5/16, 13/16, 5/16, 11/16, 14.99/16, 11/16, "vase", 0);

model.addBox(5/16, 15/16, 5/16, 11/16, 15.1/16, 11/16, "vasetop", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.vasereaper, -1, render);
Block.setBlockShape(BlockID.vasereaper, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Block.registerDropFunctionForID(BlockID.vasereaper, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.orihalk, 3, 0], [ItemID.voidshard, 3, 0], [ItemID.swampkey, 1, 0], [ItemID.hpup9, 2, 0]]; 
});


IDRegistry.genBlockID("ancientaltar"); 
  Block.createBlock("ancientaltar", [{name: "Ancient altar", texture: [["ancientaltar", 0], ["ancientaltar", 0], ["ancientaltar", 0], ["ancientaltar", 0], ["ancientaltarfront", 0], ["ancientaltar", 0]], inCreative: true}], WFNR);
  
  
  IDRegistry.genBlockID("voidaltar"); 
  Block.createBlock("voidaltar", [{name: "Void Altar", texture: [["voidaltar3", 0], ["voidaltar3", 0], ["voidaltar3", 0], ["voidaltar3", 0], ["voidaltar3", 0], ["voidaltar3", 0]], inCreative: true}], SA);
  ToolAPI.registerBlockMaterial(BlockID.voidaltar, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 4/16, 15.99/16, 4/16, "voidaltar1", 0);

model.addBox(12/16, 0/16, 0/16, 16/16, 15.99/16, 4/16, "voidaltar1", 0);

model.addBox(0/16, 0/16, 12/16, 4/16, 15.99/16, 16/16, "voidaltar1", 0);

model.addBox(12/16, 0/16, 12/16, 16/16, 15.99/16, 16/16, "voidaltar1", 0);


model.addBox(0/16, 16/16, 0/16, 16/16, 16/16, 16/16, "voidaltar2", 0);


model.addBox(2/16, 0/16, 2/16, 14/16, 8.99/16, 14/16, "voidaltar3", 0);

model.addBox(2/16, 9/16, 2/16, 14/16, 9.1/16, 14/16, "voidaltar4", 0);


model.addBox(7.999/16, 2/16, 0/16, 8.005/16, 18/16, 16/16, "void", 0);
model.addBox(0/16, 2/16, 7.999/16, 16/16, 18/16, 8.005/16, "void", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.voidaltar, -1, render);
Block.setBlockShape(BlockID.voidaltar, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});


IDRegistry.genBlockID("voidblock");
Block.createBlockWithRotation("voidblock", [{name: "Void block", texture: [["voidaltartop", 0], ["voidaltartop", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0], ["voidblock", 0]], inCreative: true}], WFNR);
ToolAPI.registerBlockMaterial(BlockID.voidblock, "stone");


IDRegistry.genBlockID("void"); 
  Block.createBlock("void", [{name: "Void", texture: [["void", 0], ["void", 0], ["void", 0], ["void", 0], ["void", 0], ["void", 0]], inCreative: true}], SA);
  ToolAPI.registerBlockMaterial(BlockID.void, "stone");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "void", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "void", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.void, -1, render);
Block.setBlockShape(BlockID.void, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


Block.registerDropFunction("olwood", function(coords, blockID, blockData, level){
	if(Math.random>0.01){
		return [[ItemID.smola, 1, 0]]
	return [];
	}
}, 1);
  
  
  





















//846




// file: items.js

IDRegistry.genItemID("wichitum");
Item.createItem("wichitum", "Wichitum gem", {name: "wichitum", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.wichitumore, ItemID.wichitum, 1);



IDRegistry.genItemID("extraterrestrialstaff");
Item.createItem("extraterrestrialstaff", "Extraterrestrial staff", {name: "extraterrestrialstaff", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.extraterrestrialstaff, count: 1, data: 0}, [ "aba", "cdc", " c "], ['a', 377, 0, 'b', 388, 0, 'c', 280, 0, 'd', ItemID.wichitum, 0]);



IDRegistry.genItemID("olstick");
Item.createItem("olstick", "Outlands stick", {name: "olstick", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olstick, count: 4, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.olplanks, 0]);



IDRegistry.genItemID("ankh");
Item.createItem("ankh", "Cross Ankh", {name: "ankh", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.ankh, count: 1, data: 0}, [ "aaa", "a a", " a "], ['a', ItemID.olstick, 0]);



IDRegistry.genItemID("olmsh1");
Item.createItem("olmsh1", "Blue Outlands mushroom", {name: "olmsh1", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.olmsh1)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bluemsh, 0);
Player.decreaseCarriedItem (1);
}
});



IDRegistry.genItemID("olmsh2");
Item.createItem("olmsh2", "Brown Outlands mushroom", {name: "olmsh2", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.olmsh2)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.brownmsh, 0);
Player.decreaseCarriedItem (1);
}
});



IDRegistry.genItemID("oltorf");
Item.createItem("oltorf", "Peat", {name: "oltorf", meta: 0}, {stack: 64});


IDRegistry.genItemID("olpaper");
Item.createItem("olpaper", "Outlands paper", {name: "olpaper", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olpaper, count: 16, data: 0}, [ " a ", "   ", "   "], ['a', BlockID.olwood, 0]);


IDRegistry.genItemID("olbook");
Item.createItem("olbook", "Outlands book", {name: "olbook", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbook, count: 16, data: 0}, [ "aaa", "bbb", "   "], ['a', ItemID.olpaper, 0, 'b', 334, 0]);


IDRegistry.genItemID("olbowl");
Item.createItem("olbowl", "Outlands bowl", {name: "olbowl", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbowl, count: 6, data: 0}, [ "a a", " a ", "   "], ['a', BlockID.olplanks, 0]);

IDRegistry.genItemID("bowlblue");
Item.createFoodItem("bowlblue", "Outlands marinated blue mushrooms in a bowl", {name: "bowlblue", meta: 0}, {food: 10});
Recipes.addShaped({id: ItemID.bowlblue, count: 1, data: 0}, [ " b ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh1, 0]);

IDRegistry.genItemID("bowlbrown");
Item.createFoodItem("bowlbrown", "Outlands marinated brown mushrooms in a bowl", {name: "bowlbrown", meta: 0}, {food: 9});
Recipes.addShaped({id: ItemID.bowlbrown, count: 1, data: 0}, [ " b ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh2, 0]);


IDRegistry.genItemID("bowlmix");
Item.createFoodItem("bowlmix", "Outlands marinated mushrooms in a bowl", {name: "bowlmix", meta: 0}, {food: 12});
Recipes.addShaped({id: ItemID.bowlmix, count: 1, data: 0}, [ " c ", " b ", " a "], ['a', ItemID.olbowl, 0, 'b', ItemID.olmsh2, 0, 'c', ItemID.olmsh1, 0]);


IDRegistry.genItemID("olruby");
Item.createItem("olruby", "Outlands ruby", {name: "olruby", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.bowlmix, count: 2, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.oltorf, 0]);

Recipes.addShaped({id: BlockID.oljukebox, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', BlockID.olplanks, 0, 'b', ItemID.olruby, 0]);

Recipes.addShaped({id: BlockID.olbookshelf, count: 1, data: 0}, [ " a ", "bbb", "bbb"], ['a', BlockID.owpplate, 0, 'b', ItemID.olbook, 0]);

IDRegistry.genItemID("orihalk");
Item.createItem("orihalk", "Orichalc ingot", {name: "orihalk", meta: 0}, {stack: 64});

IDRegistry.genItemID("hpup1");
Item.createFoodItem("hpup1", "Egyptian sweetness", {name: "hpup1", meta: 0}, {food: 1});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup1){
Entity.setMaxHealth(Player.get(), Ph+1);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup3");
Item.createFoodItem("hpup3", "Honey Egyptian sweetness", {name: "hpup3", meta: 0}, {food: 3});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup3){
Entity.setMaxHealth(Player.get(), Ph+3);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup5");
Item.createFoodItem("hpup5", "Sweetness of Atlantis", {name: "hpup5", meta: 0}, {food: 5});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup5){
Entity.setMaxHealth(Player.get(), Ph+5);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});


IDRegistry.genItemID("hpup7");
Item.createFoodItem("hpup7", "Swamp sweetness", {name: "hpup7", meta: 0}, {food: 7});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup7){
Entity.setMaxHealth(Player.get(), Ph+7);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});

IDRegistry.genItemID("hpup9");
Item.createFoodItem("hpup9", "Royal sweetness", {name: "hpup9", meta: 0}, {food: 7});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.hpup9){
Entity.setMaxHealth(Player.get(), Ph+9);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});


IDRegistry.genItemID("olbucket");
Item.createItem("olbucket", "Outlands bucket", {name: "olbucket", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.olbook, count: 16, data: 0}, [ "a a", "a a", " a "], ['a', BlockID.olwood, 0]);


IDRegistry.genItemID("honey");
Item.createFoodItem("honey", "Honeycomb", {name: "honey", meta: 0}, {food: 6});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.honey){
Entity.addEffect(Player.get(), 1, 3, 1200, false,false);
Entity.addEffect(Player.get(), 10, 5, 1200, false,false);
}});


IDRegistry.genItemID("honeybucket");
Item.createFoodItem("honeybucket", "Outlands honey bucket", {name: "honeybucket", meta: 0}, {food: 7});
Recipes.addShaped({id: ItemID.honeybucket, count: 16, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.olbucket, 0, 'b', ItemID.honey, 0]);
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.honeybucket){
Entity.addEffect(Player.get(), 1, 4, 1600, false,false);
Entity.addEffect(Player.get(), 10, 6, 1600, false,false);
Player.addItemToInventory (ItemID.olbucket, 1, 0) 
}});

Recipes.addShaped({id: ItemID.hpup3, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.honeybucket, 0, 'b', ItemID.hpup1, 0]);


IDRegistry.genItemID("goldenapplepotion");
Item.createItem("goldenapplepotion", "Golden apple potion", {name: "goldenapplepotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldenapplepotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 3, 2400)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 400)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 0, 6000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 0, 6000)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});
Recipes.addShaped({id: ItemID.goldenapplepotion, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 374, 0, 'b', 322, 1]);

IDRegistry.genItemID("starpotion");
Item.createItem("starpotion", "Star potion", {name: "starpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.starpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 7, 5600)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 3, 1600)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 5600)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("starapple");
Item.createFoodItem("starapple", "Star apple", {name: "starapple", meta: 0}, {food: 8});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.starapple){
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 7, 5600)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 3, 1600)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 24000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 5600)
}});


IDRegistry.genItemID("starmaterial");
Item.createItem("starmaterial", "Star material", {name: "starmaterial", meta: 0}, {stack: 64});

IDRegistry.genItemID("voidshard");
Item.createItem("voidshard", "Void shard", {name: "voidshard", meta: 0}, {stack: 64});

IDRegistry.genItemID("eyeofswamp");
Item.createItem("eyeofswamp", "Eye of swamp", {name: "eyeofswamp", meta: 0}, {stack: 64});

IDRegistry.genItemID("monsterheart");
Item.createItem("monsterheart", "Monster heart", {name: "monsterheart", meta: 0}, {stack: 64});

IDRegistry.genItemID("strangeskull");
Item.createItem("strangeskull", "Strange skull", {name: "strangeskull", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.strangeskull)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.strangeskull, 0);
Player.decreaseCarriedItem (1);
}
});


IDRegistry.genItemID("mudstaff");
Item.createItem("mudstaff", "Mud staff", {name: "mudstaff", meta: 0}, {stack: 1});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.mudstaff){ 
 var coords = Entity.getPosition(victim);

World.setBlock(coords.x,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.mud, 0);


World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.mud, 0);

World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.mud, 0);
World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2, coords.z+1, BlockID.mud, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.mud, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.mud, 0);

 }
});


Recipes.addShaped({id: ItemID.mudstaff, count: 1, data: 0}, [ " ba", " cb", "c  "], ['a', ItemID.eyeofswamp, 0, 'b', ItemID.monsterheart, 0, 'c', ItemID.oltorf, 0]);

IDRegistry.genItemID("swampkey");
Item.createItem("swampkey", "Swamp key", {name: "swampkey", meta: 0}, {stack: 1});

IDRegistry.genItemID("lat");
Item.createItem("lat", "Brass ingot", {name: "lat", meta: 0}, {stack: 64});

IDRegistry.genItemID("smola");
Item.createItem("smola", "Christmas tree resin \n What is it?", {name: "smola", meta: 0}, {stack: 64});

Block.registerDropFunction("oldirt", function(coords, blockID, blockData, level){
	if(Math.random>0.4){
		return [[ItemID.oltorf, 1, 0]]
	return [];
	}
}, 1);

Block.registerDropFunction("olwood", function(coords, blockID, blockData, level){
	if(Math.random>0.01){
		return [[ItemID.smola, 1, 0]]
	return [];
	}
}, 1);



IDRegistry.genItemID("voidpotion");
Item.createItem("voidpotion", "Void potion", {name: "voidpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.voidpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 15, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 7, 3200)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.jumpBoost, 4, 12120)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("voidapple");
Item.createFoodItem("voidapple", "Void apple", {name: "voidapple", meta: 0}, {food: 16});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.voidapple){
Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 15, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 7, 3200)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 3, 48000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 12120)
Entity.addEffect(Player.get(), Native.PotionEffect.jumpBoost, 4, 12120)
}});


IDRegistry.genItemID("hungerpotion");
Item.createItem("hungerpotion", "Hunger potion", {name: "hungerpotion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.hungerpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.hunger, 10, 200)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});


IDRegistry.genItemID("voidmaterial");
Item.createItem("voidmaterial", "Void material", {name: "voidmaterial", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.hungerpotion, count: 1, data: 0}, [ " ab", "   ", "   "], ['a', ItemID.oltorf, 0, 'b', 374, 0]);


































//300




// file: instruments_swords_and_armor.js

importLib("ToolType","*")


IDRegistry.genItemID("wichitumsword");
IDRegistry.genItemID("wichitumpickaxe");
IDRegistry.genItemID("wichitumaxe");
IDRegistry.genItemID("wichitumshovel");
Item.createItem("wichitumsword", "Wichitum sword", {name: "wichitumsword", meta: 0}, {stack: 1});
Item.createItem("wichitumpickaxe", "Wichitum pickaxe", {name: "wichitumpickaxe", meta: 0}, {stack: 1});
Item.createItem("wichitumaxe", "Wichitum axe", {name: "wichitumaxe", meta: 0}, {stack: 1});
Item.createItem("wichitumshovel", "Wichitum shovel", {name: "wichitumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("wichitum", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.wichitumsword, "wichitum", ToolType.sword);
ToolAPI.setTool(ItemID.wichitumpickaxe, "wichitum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.wichitumaxe, "wichitum", ToolType.axe);
ToolAPI.setTool(ItemID.wichitumshovel, "wichitum", ToolType.shovel);

IDRegistry.genItemID("wichitumhelmet");
IDRegistry.genItemID("wichitumchestplate");
IDRegistry.genItemID("wichitumleggings");
IDRegistry.genItemID("wichitumboots");

Item.createArmorItem("wichitumhelmet", "Wichitum helmet", {name: "wichitumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/wichitumarmor.png"});
Item.createArmorItem("wichitumchestplate", "Wichitum chestplate", {name: "wichitumchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 750, texture: "armor/wichitumarmor.png"});
Item.createArmorItem("wichitumleggings", "Wichitum leggings", {name: "wichitumleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/wichitumarmor0.png"});
Item.createArmorItem("wichitumboots", "Wichitum boots", {name: "wichitumboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/wichitumarmor.png"});

Recipes.addShaped({id: ItemID.wichitumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.wichitumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.wichitum, 0]);






IDRegistry.genItemID("olwoodsword");
IDRegistry.genItemID("olwoodpickaxe");
IDRegistry.genItemID("olwoodaxe");
IDRegistry.genItemID("olwoodshovel");
Item.createItem("olwoodsword", "Outlands wood sword", {name: "olwoodsword", meta: 0}, {stack: 1});
Item.createItem("olwoodpickaxe", "Outlands wood pickaxe", {name: "olwoodpickaxe", meta: 0}, {stack: 1});
Item.createItem("olwoodaxe", "Outlands wood axe", {name: "olwoodaxe", meta: 0}, {stack: 1});
Item.createItem("olwoodshovel", "Outlands wood shovel", {name: "olwoodshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("olwood", {durability: 3400, level: 10, efficiency: 480, damage: 24, enchantability: 14});
ToolAPI.setTool(ItemID.olwoodsword, "olwood", ToolType.sword);
ToolAPI.setTool(ItemID.olwoodpickaxe, "olwood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.olwoodaxe, "olwood", ToolType.axe);
ToolAPI.setTool(ItemID.olwoodshovel, "olwood", ToolType.shovel);

IDRegistry.genItemID("olwoodhelmet");
IDRegistry.genItemID("olwoodchestplate");
IDRegistry.genItemID("olwoodleggings");
IDRegistry.genItemID("olwoodboots");

Item.createArmorItem("olwoodhelmet", "Outlands wood helmet", {name: "olwoodhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/olwoodarmor.png"});
Item.createArmorItem("olwoodchestplate", "Outlands wood chestplate", {name: "olwoodchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/olwoodarmor.png"});
Item.createArmorItem("olwoodleggings", "Outlands wood leggings", {name: "olwoodleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/olwoodarmor0.png"});
Item.createArmorItem("olwoodboots", "Outlands wood boots", {name: "olwoodboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/olwoodarmor.png"});

Recipes.addShaped({id: ItemID.olwoodsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);



Recipes.addShaped({id: ItemID.olwoodhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', BlockID.olwood, 0]);




IDRegistry.genItemID("olstonesword");
IDRegistry.genItemID("olstonepickaxe");
IDRegistry.genItemID("olstoneaxe");
IDRegistry.genItemID("olstoneshovel");
Item.createItem("olstonesword", "Outlands stone sword", {name: "olstonesword", meta: 0}, {stack: 1});
Item.createItem("olstonepickaxe", "Outlands stone pickaxe", {name: "olstonepickaxe", meta: 0}, {stack: 1});
Item.createItem("olstoneaxe", "Outlands stone axe", {name: "olstoneaxe", meta: 0}, {stack: 1});
Item.createItem("olstoneshovel", "Outlands stone shovel", {name: "olstoneshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("olstone", {durability: 3400, level: 11, efficiency: 487, damage: 27, enchantability: 14});
ToolAPI.setTool(ItemID.olstonesword, "olstone", ToolType.sword);
ToolAPI.setTool(ItemID.olstonepickaxe, "olstone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.olstoneaxe, "olstone", ToolType.axe);
ToolAPI.setTool(ItemID.olstoneshovel, "olstone", ToolType.shovel);

IDRegistry.genItemID("olstonehelmet");
IDRegistry.genItemID("olstonechestplate");
IDRegistry.genItemID("olstoneleggings");
IDRegistry.genItemID("olstoneboots");

Item.createArmorItem("olstonehelmet", "Outlands stone helmet", {name: "olstonehelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/olstonearmor.png"});
Item.createArmorItem("olstonechestplate", "Outlands stone chestplate", {name: "olstonechestplate", meta: 0}, {type: "chestplate", armor: 14, durability: 750, texture: "armor/olstonearmor.png"});
Item.createArmorItem("olstoneleggings", "Outlands stone leggings", {name: "olstoneleggings", meta: 0}, {type: "leggings", armor: 9, durability: 700, texture: "armor/olstonearmor0.png"});
Item.createArmorItem("olstoneboots", "Outlands stone boots", {name: "olstoneboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/olstonearmor.png"});

Recipes.addShaped({id: ItemID.olstonesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstonepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstoneaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstoneshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);



Recipes.addShaped({id: ItemID.olstonehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstonechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstoneleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstoneboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', BlockID.olstone, 0]);



















 
 
 
 IDRegistry.genItemID("rubysword");
IDRegistry.genItemID("rubypickaxe");
IDRegistry.genItemID("rubyaxe");
IDRegistry.genItemID("rubyshovel");
Item.createItem("rubysword", "Ruby sword", {name: "rubysword", meta: 0}, {stack: 1});
Item.createItem("rubypickaxe", "Ruby pickaxe", {name: "rubypickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyaxe", "Ruby axe", {name: "rubyaxe", meta: 0}, {stack: 1});
Item.createItem("rubyshovel", "Ruby shovel", {name: "rubyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 3400, level: 13, efficiency: 491, damage: 31, enchantability: 14});
ToolAPI.setTool(ItemID.rubysword, "ruby", ToolType.sword);
ToolAPI.setTool(ItemID.rubypickaxe, "ruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rubyaxe, "ruby", ToolType.axe);
ToolAPI.setTool(ItemID.rubyshovel, "ruby", ToolType.shovel);

IDRegistry.genItemID("rubyhelmet");
IDRegistry.genItemID("rubychestplate");
IDRegistry.genItemID("rubyleggings");
IDRegistry.genItemID("rubyboots");

Item.createArmorItem("rubyhelmet", "Ruby helmet", {name: "rubyhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/rubyarmor.png"});
Item.createArmorItem("rubychestplate", "Ruby chestplate", {name: "rubychestplate", meta: 0}, {type: "chestplate", armor: 16, durability: 750, texture: "armor/rubyarmor.png"});
Item.createArmorItem("rubyleggings", "Ruby leggings", {name: "rubyleggings", meta: 0}, {type: "leggings", armor: 12, durability: 700, texture: "armor/rubyarmor0.png"});
Item.createArmorItem("rubyboots", "Ruby boots", {name: "rubyboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/rubyarmor.png"});

Recipes.addShaped({id: ItemID.rubysword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubypickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubyaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubyshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.rubyhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubychestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubyleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubyboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.olruby, 0]);



IDRegistry.genItemID("orihalksword");
IDRegistry.genItemID("orihalkpickaxe");
IDRegistry.genItemID("orihalkaxe");
IDRegistry.genItemID("orihalkshovel");
Item.createItem("orihalksword", "Orichulc sword", {name: "orihalksword", meta: 0}, {stack: 1});
Item.createItem("orihalkpickaxe", "Orichulc pickaxe", {name: "orihalkpickaxe", meta: 0}, {stack: 1});
Item.createItem("orihalkaxe", "Orichulc axe", {name: "orihalkaxe", meta: 0}, {stack: 1});
Item.createItem("orihalkshovel", "Orichulc shovel", {name: "orihalkshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("orihalk", {durability: 3400, level: 12, efficiency: 489, damage: 29, enchantability: 14});
ToolAPI.setTool(ItemID.orihalksword, "orihalk", ToolType.sword);
ToolAPI.setTool(ItemID.orihalkpickaxe, "orihalk", ToolType.pickaxe);
ToolAPI.setTool(ItemID.orihalkaxe, "orihalk", ToolType.axe);
ToolAPI.setTool(ItemID.orihalkshovel, "orihalk", ToolType.shovel);

IDRegistry.genItemID("orihalkhelmet");
IDRegistry.genItemID("orihalkchestplate");
IDRegistry.genItemID("orihalkleggings");
IDRegistry.genItemID("orihalkboots");

Item.createArmorItem("orihalkhelmet", "Orichulc helmet", {name: "orihalkhelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/orihalkarmor.png"});
Item.createArmorItem("orihalkchestplate", "Orichulc chestplate", {name: "orihalkchestplate", meta: 0}, {type: "chestplate", armor: 15, durability: 750, texture: "armor/orihalkarmor.png"});
Item.createArmorItem("orihalkleggings", "Orichulc leggings", {name: "orihalkleggings", meta: 0}, {type: "leggings", armor: 11, durability: 700, texture: "armor/orihalkarmor0.png"});
Item.createArmorItem("orihalkboots", "Orichulc boots", {name: "orihalkboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/orihalkarmor.png"});

Recipes.addShaped({id: ItemID.orihalksword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.orihalkhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.orihalk, 0]);

IDRegistry.genItemID("starsword");
IDRegistry.genItemID("starpickaxe");
IDRegistry.genItemID("staraxe");
IDRegistry.genItemID("starshovel");
Item.createItem("starsword", "Star sword", {name: "starsword", meta: 0}, {stack: 1});
Item.createItem("starpickaxe", "Star pickaxe", {name: "starpickaxe", meta: 0}, {stack: 1});
Item.createItem("staraxe", "Star axe", {name: "staraxe", meta: 0}, {stack: 1});
Item.createItem("starshovel", "Star shovel", {name: "starshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("star", {durability: 3400, level: 14, efficiency: 500, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.starsword, "star", ToolType.sword);
ToolAPI.setTool(ItemID.starpickaxe, "star", ToolType.pickaxe);
ToolAPI.setTool(ItemID.staraxe, "star", ToolType.axe);
ToolAPI.setTool(ItemID.starshovel, "star", ToolType.shovel);

IDRegistry.genItemID("starhelmet");
IDRegistry.genItemID("starchestplate");
IDRegistry.genItemID("starleggings");
IDRegistry.genItemID("starboots");

Item.createArmorItem("starhelmet", "Star helmet", {name: "starhelmet", meta: 0}, {type: "helmet", armor: 10, durability: 650, texture: "armor/stararmor.png"});
Item.createArmorItem("starchestplate", "Star chestplate", {name: "starchestplate", meta: 0}, {type: "chestplate", armor: 20, durability: 750, texture: "armor/stararmor.png"});
Item.createArmorItem("starleggings", "Star leggings", {name: "starleggings", meta: 0}, {type: "leggings", armor: 15, durability: 700, texture: "armor/stararmor0.png"});
Item.createArmorItem("starboots", "Star boots", {name: "starboots", meta: 0}, {type: "boots", armor: 10, durability: 600, texture: "armor/stararmor.png"});



IDRegistry.genItemID("reaperscythe");
Item.createItem("reaperscythe", "Reaper scythe", {name: "reaperscythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("reaper", {durability: 3400, level: 15, efficiency: 1000, damage: 60, enchantability: 14});
ToolAPI.setTool(ItemID.reaperscythe, "reaper", ToolType.sword);

IDRegistry.genItemID("reaperchestplate");

Item.createArmorItem("reaperchestplate", "Jacket of Reaper \n Stylish and fashionable!", {name: "reaperchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 100, texture: "armor/reaperarmor.png"});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.reaperscythe){ 
Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 3, 999999, true, true); 
}
});



IDRegistry.genItemID("ancientsword");
Item.createItem("ancientsword", "Ancient sword", {name: "ancientsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ancient", {durability: 3400, level: 16, efficiency: 1500, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.ancientsword, "ancient", ToolType.sword);


IDRegistry.genItemID("fireancientsword");
Item.createItem("fireancientsword", "Fire ancient sword", {name: "fireancientsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fireancient", {durability: 3400, level: 16, efficiency: 1500, damage: 85, enchantability: 14});
ToolAPI.setTool(ItemID.fireancientsword, "fireancient", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.fireancientsword){ 
Entity.setFire(victim, 200);
}
});


Recipes.addShaped({id: ItemID.fireancientsword, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.ancientsword, 0, 'b', 369, 0]);



IDRegistry.genItemID("latsword");
IDRegistry.genItemID("latpickaxe");
IDRegistry.genItemID("lataxe");
IDRegistry.genItemID("latshovel");
Item.createItem("latsword", "Brass sword", {name: "latsword", meta: 0}, {stack: 1});
Item.createItem("latpickaxe", "Brass pickaxe", {name: "latpickaxe", meta: 0}, {stack: 1});
Item.createItem("lataxe", "Brass axe", {name: "lataxe", meta: 0}, {stack: 1});
Item.createItem("latshovel", "Brass shovel", {name: "latshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("lat", {durability: 3400, level: 17, efficiency: 2300, damage: 90, enchantability: 14});
ToolAPI.setTool(ItemID.latsword, "lat", ToolType.sword);
ToolAPI.setTool(ItemID.latpickaxe, "lat", ToolType.pickaxe);
ToolAPI.setTool(ItemID.lataxe, "lat", ToolType.axe);
ToolAPI.setTool(ItemID.latshovel, "lat", ToolType.shovel);

IDRegistry.genItemID("lathelmet");
IDRegistry.genItemID("latchestplate");
IDRegistry.genItemID("latleggings");
IDRegistry.genItemID("latboots");

Item.createArmorItem("lathelmet", "Brass helmet", {name: "lathelmet", meta: 0}, {type: "helmet", armor: 20, durability: 650, texture: "armor/latarmor.png"});
Item.createArmorItem("latchestplate", "Brass chestplate", {name: "latchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 750, texture: "armor/latarmor.png"});
Item.createArmorItem("latleggings", "Brass leggings", {name: "latleggings", meta: 0}, {type: "leggings", armor: 21, durability: 700, texture: "armor/latarmor0.png"});
Item.createArmorItem("latboots", "Brass boots", {name: "latboots", meta: 0}, {type: "boots", armor: 20, durability: 600, texture: "armor/latarmor.png"});

Recipes.addShaped({id: ItemID.latsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.latpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.lataxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.latshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.lathelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.lat, 0]);



IDRegistry.genItemID("voidsword");
IDRegistry.genItemID("voidpickaxe");
IDRegistry.genItemID("voidaxe");
IDRegistry.genItemID("voidshovel");
Item.createItem("voidsword", "Void sword", {name: "voidsword", meta: 0}, {stack: 1});
Item.createItem("voidpickaxe", "Void pickaxe", {name: "voidpickaxe", meta: 0}, {stack: 1});
Item.createItem("voidaxe", "Void axe", {name: "voidaxe", meta: 0}, {stack: 1});
Item.createItem("voidshovel", "Void shovel", {name: "voidshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("void", {durability: 3400, level: 18, efficiency: 4600, damage: 100, enchantability: 14});
ToolAPI.setTool(ItemID.voidsword, "void", ToolType.sword);
ToolAPI.setTool(ItemID.voidpickaxe, "void", ToolType.pickaxe);
ToolAPI.setTool(ItemID.voidaxe, "void", ToolType.axe);
ToolAPI.setTool(ItemID.voidshovel, "void", ToolType.shovel);

IDRegistry.genItemID("voidhelmet");
IDRegistry.genItemID("voidchestplate");
IDRegistry.genItemID("voidleggings");
IDRegistry.genItemID("voidboots");

Item.createArmorItem("voidhelmet", "Void helmet", {name: "voidhelmet", meta: 0}, {type: "helmet", armor: 40, durability: 650, texture: "armor/voidarmor.png"});
Item.createArmorItem("voidchestplate", "Void chestplate", {name: "voidchestplate", meta: 0}, {type: "chestplate", armor: 50, durability: 750, texture: "armor/voidarmor.png"});
Item.createArmorItem("voidleggings", "Void leggings", {name: "voidleggings", meta: 0}, {type: "leggings", armor: 42, durability: 700, texture: "armor/voidarmor0.png"});
Item.createArmorItem("voidboots", "Void boots", {name: "voidboots", meta: 0}, {type: "boots", armor: 40, durability: 600, texture: "armor/voidarmor.png"});


IDRegistry.genItemID("advancedvoidsword");
Item.createItem("advancedvoidsword", "Advanced void sword", {name: "advancedvoidsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("advancedvoid", {durability: 3400, level: 19, efficiency: 7100, damage: 173, enchantability: 14});
ToolAPI.setTool(ItemID.advancedvoidsword, "advancedvoid", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.advancedvoidsword){ 
	Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 7, 999999, true, true); 
Entity.setFire(victim, 400);
}
});





































Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.olstonehelmet && chest.id == ItemID.olstonechestplate && legs.id == ItemID.olstoneleggings && boots.id == ItemID.olstoneboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 0, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100)
    }
    
    if (helmet.id == ItemID.rubyhelmet && chest.id == ItemID.rubychestplate && legs.id == ItemID.rubyleggings && boots.id == ItemID.rubyboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 0, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 100)
    }
    
    
    if (helmet.id == ItemID.orihalkhelmet && chest.id == ItemID.orihalkchestplate && legs.id == ItemID.orihalkleggings && boots.id == ItemID.orihalkboots) {
    	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100)
    }
    
    if (helmet.id == ItemID.starhelmet && chest.id == ItemID.starchestplate && legs.id == ItemID.starleggings && boots.id == ItemID.starboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    if (chest.id == ItemID.reaperchestplate) {
    Player.setFlyingEnabled(true); 
    Entity.addEffect(Player.get(), Native.PotionEffect.blindness, 0, 20)
    }
    
    if (helmet.id == ItemID.lathelmet && chest.id == ItemID.latchestplate && legs.id == ItemID.latleggings && boots.id == ItemID.latboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    if (helmet.id == ItemID.voidhelmet && chest.id == ItemID.voidchestplate && legs.id == ItemID.voidleggings && boots.id == ItemID.voidboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    }
 });
 
 
 
 
 
 
 
 




// file: generations.js

var generateItems =[ 
]; 

function addItemsToGenerateChest(id, random, count, data){ 
random = random||1; 
count = count||{}; 
count.min = count.min||1; 
count.max = count.max||1; 
data = data||0; 
generateItems.push({id:id, data:data, random:random, count:count}); 
} 

function fillChest(x,y,z){ 
var container = World.getContainer(x, y, z); 
var size = container.getSize(); 
var random = Math.random(); 
var slot = 0; 
for(var i in generateItems){ 
if(random<generateItems[i].random){ 
var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min; 
container.setSlot(slot, generateItems[i].id, count, generateItems[i].data); 
slot++; 
} 
} 
} 

addItemsToGenerateChest(ItemID.oltorf, 0.5, {max:10});
addItemsToGenerateChest(ItemID.olpaper, 0.9, {max:10});
addItemsToGenerateChest(ItemID.olruby, 0.2, {max:5});
addItemsToGenerateChest(ItemID.ankh, 0.5, {max:1});
addItemsToGenerateChest(ItemID.orihalk, 1, {max:20});
addItemsToGenerateChest(ItemID.hpup1, 0.4, {max:2});


//fillChest(coords.x, coords.y, coords.z); - ?????? ??? ???????? ? ?????????(??????) ?? ??????????? x, y, z.?????????? ????? ????
















Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.7){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bluemsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.7){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.brownmsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.minimsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olgr1, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olgr2, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       
       //5
       
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z, BlockID.olwood, 0);
       
       //6
       
       
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 56, 0, 4);
    }
}
)



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 16, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 15, 0, 2);
    }
}
)


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwoodmossy, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
    	
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.olglow, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.olglow, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.olglow, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       
       //3
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       
       //4
       
       World.setBlock(coords.x,coords.y+3,  coords.z, 54, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.olstonebricksaede, 0);
       
       //5
       
       World.setBlock(coords.x,coords.y+4,  coords.z, 8, 0);
       fillChest(coords.x, coords.y+3, coords.z); 
}}});




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
    	
       World.setBlock(coords.x,coords.y-20,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x+1,coords.y-20,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x,coords.y-21,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x,coords.y-22,  coords.z+1, BlockID.olrubyore, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f3, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.olbeehive, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.007){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.vasesa, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.starblock, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.starblock, 0);
       
       //3
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.starblock, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.staraltar, 0);
       
       //4
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.starblock, 0);
       
       //5
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.star, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.star, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.star, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.star, 0);
}}});







//swampRooten


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.mud, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.mud, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.mud, 0);
       
       //2
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+4, BlockID.mud, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.swampaltar, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-5, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       
       //3
       
       World.setBlock(coords.x+5,coords.y+2,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olwood, 0);
       
       //5
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-3, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       //6
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+2, BlockID.olwood, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-7,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       //8
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.mud, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.mud, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.mud, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.mud, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       //2
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z+4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-5, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       
       //3
       
 
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olwood, 0);
       
       //5
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-3, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       //6
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+2, BlockID.olwood, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-7,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       //8
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.006){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==66){ 
       World.setBlock(coords.x,coords.y,  coords.z, 54, 0);
       fillChest(coords.x, coords.y, coords.z);
}}});





Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.006){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       
       World.setBlock(coords.x+5,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, BlockID.keystone, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //2
       
       World.setBlock(coords.x+6,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //2
       
       World.setBlock(coords.x+6,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+2,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //3
       
       World.setBlock(coords.x+6,coords.y+3,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+3,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+3,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+3,  coords.z, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-9, coords.y+3,  coords.z-1, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-9, coords.y+3,  coords.z+1, BlockID.olstonebricksaede, 0);
       
       
       //4
       
       
       World.setBlock(coords.x+6,coords.y+4,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+4,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+4,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       //5
       
       
       World.setBlock(coords.x+6,coords.y+5,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+5,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       //6
       
       
       World.setBlock(coords.x+6,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+5,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //7
       
       
       World.setBlock(coords.x+7,coords.y+7,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+7,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+7,  coords.z-3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+6,coords.y+7,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+7,  coords.z+3, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+7,  coords.z-5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+5,coords.y+7,  coords.z+5, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       
       
       
       
       World.setBlock(coords.x-2,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-3,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-4,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x-5,coords.y+7,  coords.z-5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+7,  coords.z+5, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-6,coords.y+7,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+7,  coords.z-3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+7,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+7,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+7,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       //8 up
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+8,  coords.z, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+8,  coords.z-4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+8,  coords.z+4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4,coords.y+8,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+8,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       
       
       
       
       
       World.setBlock(coords.x-1,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       World.setBlock(coords.x-4,coords.y+8,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+8,  coords.z+6, BlockID.olstonebricks, 0);
     
       
       
       World.setBlock(coords.x-6,coords.y+8,  coords.z-4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-6,coords.y+8,  coords.z+4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z-2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       
       
       
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olobsidian, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z, BlockID.olobsidian, 0);
       
       
       World.setBlock(coords.x+3,coords.y-1,  coords.z, BlockID.vasereaper, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z, BlockID.wakefulnessrock, 0);
       
       World.setBlock(coords.x+4,coords.y-1,  coords.z, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+1, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-1, BlockID.wakefulnessrock, 0);
       
}}});








Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.ancientaltar, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-4, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z+3, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+3, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+3, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+5, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-5, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+1, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olstonebricksaede, 0);
       
}}});




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.003){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       
       //3
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.voidaltar, 0);
       
       //4
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.voidblock, 0);
       
       //5
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.void, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.void, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.void, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.void, 0);
}}});


















//1171







// file: dimension.js

const SKY_COLOR = [0, 0.2, 0.1];
IMPORT("dimensions");

var OutLands = new Dimension({
    name: "OutLands", // ???????? ?????????
    
    generation: { //?????????
        layers: [
             //???? ????????? 
             
             { 
    range: [0, 80],
    noise: {
        octaves: {
            count: 4,
            weight: 0.6,
            scale: [1, 0.4, 1]
        }
    },
                
    gradient: [[0, 1], [0.4, 1], [0.5, 0], [0.6, -1], [1, -1], [1, -1]],
    terrain: {
        base: BlockID.olstone,
        cover: {
             height: 10,
             top: BlockID.olgrass,
             block: BlockID.oldirt
        },
        filling: {
           	height: 10,
               block: 8,
               },
    }
},

        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: SKY_COLOR,
    },
    
    callbacks: { 
        // ???????? ???????? ?????????
        // ????? ????????? ??? ???????? ?????????, ???????? ????? ????????.
        tick: function() { 
            
        },
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("OutLandsChunk",chunkX,chunkZ);
},
        loaded: function() {
            // ???????? ?????????
        },

        unloaded: function() {
            // ????????  ?????????
        },
        },
});



























var teleporter = OutLands.getTeleporter(); 
 
var teleporterBack = teleporter.OVERWORLD; 
// alert(dimension.id);
 
 
 Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.extraterrestrialstaff){ 
teleporter.enter(); 
}
if(item.id == ItemID.ankh){ 
teleporterBack.enter(); 
}
});


/*
var Particles = ModAPI.requireGlobal("Particles");

var flyfire = Particles.registerParticleType({
texture: "flyfire", 
    size: [1, 10],  
    lifetime: [60, 1200], 
    render: 2, 
   addLifetimeAfterImpact: 20, 
});


function getSign(n){
	  if(n>0)return 1;
	  if(n==0)return 0;
	  if(n<0)return -1;
  }
  function random(min, max){
	  var rnd = Math.random();
	  var dot = getSign(Math.random()*2-1);
	  return Math.floor(rnd*(max-min)*dot+min*dot);
  }
function getMinDistance(min, max){
	var x = random(0,max);
	var z = random(0,max);
	if(x*x+z*z>min*min){
		return {x:x, z:z};
	}else{
		return getMinDistance(min, max);
	}
}

function addFFire(){
	var xz = getMinDistance(30,80);
	var x = xz.x;
	var y = random(0,1);
	var z = xz.z;
	var xz = getMinDistance(3,5);
	var xV = xz.x/80;
	var yV = random(3,5)/600;
	var zV = xz.z/80;
	
		Particles.addFarParticle(flyfire,Player.getPosition().x+x, Player.getPosition().y+y, Player.getPosition().z+z,xV,yV,zV,0);
}

Callback.addCallback("tick", function(coords, item){ 
	if(Player.getDimension()==OutLands.id){
		addFFire();
	}
	*/
	/*
	addFFire();
	for(var i = 0; i<2; i++){
		addFFire();
	}
	
});
*/














// file: OutLandsFurnace.js

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiOLF = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Outlands furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var OLF = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

OLF.set(BlockID.oldirt, 0, 0, {
    id: BlockID.olglass, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.olfurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiOLF;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = OLF.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});











//STAR ALTAR ??????????????????????????????????????????????


var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiSA = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Star Altar"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var SA = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

SA.set(ItemID.orihalksword, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubysword, count: 1, data: 0
});

SA.set(ItemID.orihalkpickaxe, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubypickaxe, count: 1, data: 0
});

SA.set(ItemID.orihalkaxe, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyaxe, count: 1, data: 0
});

SA.set(ItemID.orihalkshovel, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyshovel, count: 1, data: 0
});

SA.set(ItemID.orihalkhelmet, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyhelmet, count: 1, data: 0
});

SA.set(ItemID.orihalkchestplate, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubychestplate, count: 1, data: 0
});

SA.set(ItemID.orihalkleggings, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyleggings, count: 1, data: 0
});

SA.set(ItemID.orihalkboots, ItemID.orihalk, ItemID.olruby, {
    id: ItemID.rubyboots, count: 1, data: 0
});


SA.set(ItemID.hpup3, ItemID.honey, ItemID.orihalk, {
    id: ItemID.hpup5, count: 1, data: 0
});

SA.set(ItemID.orihalk, 41, 57, {
    id: ItemID.starmaterial, count: 1, data: 0
});

SA.set(ItemID.goldenapplepotion, ItemID.starmaterial, 0, {
    id: ItemID.starpotion, count: 1, data: 0
});


SA.set(322, ItemID.starmaterial, 41, {
    id: ItemID.starapple, count: 1, data: 0
});





SA.set(ItemID.rubysword, ItemID.starmaterial, 0, {
    id: ItemID.starsword, count: 1, data: 0
});

SA.set(ItemID.rubypickaxe, ItemID.starmaterial, 0, {
    id: ItemID.starpickaxe, count: 1, data: 0
});

SA.set(ItemID.rubyaxe, ItemID.starmaterial, 0, {
    id: ItemID.staraxe, count: 1, data: 0
});

SA.set(ItemID.rubyshovel, ItemID.starmaterial, 0, {
    id: ItemID.starshovel, count: 1, data: 0
});

SA.set(ItemID.rubyhelmet, ItemID.starmaterial, 0, {
    id: ItemID.starhelmet, count: 1, data: 0
});

SA.set(ItemID.rubychestplate, ItemID.starmaterial, 0, {
    id: ItemID.starchestplate, count: 1, data: 0
});

SA.set(ItemID.rubyleggings, ItemID.starmaterial, 0, {
    id: ItemID.starleggings, count: 1, data: 0
});

SA.set(ItemID.rubyboots, ItemID.starmaterial, 0, {
    id: ItemID.starboots, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.staraltar, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiSA;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = SA.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});
























// file: mobs.js

importLib("AdvancedAI", "*");
importLib("SoundAPI","*");


//Callback.addCallback("PlayerAttack", function (player, victim) {
//Game.message("hp"+Entity.getRender (victim));
//});







IDRegistry.genItemID("MudCube");
Item.createItem("MudCube", "Spawn MudCube", {name: "MudCube", data: 0});


IDRegistry.genItemID("SpawnMudMonster");
Item.createItem("SpawnMudMonster", "Spawn Rooting Swamp", {name: "SpawnMudMonster", data: 0});


IDRegistry.genItemID("SpawnReaper");
Item.createItem("SpawnReaper", "Spawn Reaper", {name: "SpawnReaper", data: 0});

IDRegistry.genItemID("SpawnAncientGolem");
Item.createItem("SpawnAncientGolem", "Spawn Ancient Golem", {name: "SpawnAncientGolem", data: 0});
/*
IDRegistry.genItemID("SpawnMudCow");
Item.createItem("SpawnMudCow", "Spawn Mud Cow", {name: "SpawnMudCow", data: 0});

IDRegistry.genItemID("SpawnSlimePig");
Item.createItem("SpawnSlimePig", "Spawn Slime Pig", {name: "SpawnSlimePig", data: 0});

IDRegistry.genItemID("SpawnFox");
Item.createItem("SpawnFox", "Spawn Fox", {name: "SpawnFox", data: 0});

IDRegistry.genItemID("SpawnTamedFox");
Item.createItem("SpawnTamedFox", "Spawn Tamed Fox", {name: "SpawnTamedFox", data: 0});
*/










var MudCube = MobRegistry.registerEntity("MudCube");
MudCube.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/mudcube.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

MudCube.customizeDescription({
	getHealth: function(){
  return 40;},
	
 getHitbox: function(){
 return {w: 1, h: 1}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.oltorf, count: {min: 1, max: 3}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.MudMonster, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});

 return drop;
 
}
});
MudCube.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 20,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("MudCube", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

 var MudCube
 
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.olgrass){
	if(Math.random() < .0006){
Entity.spawnCustom("MudCube", pos.x, pos.y + 1, pos.z);
}
}
});


MudCube.allowNaturalDespawn()




IDRegistry.genItemID("MudMonster");
Item.createItem("MudMonster", "Nasty slime", {name: "MudMonster", data: 0});

var MudMonster = MobRegistry.registerEntity("MudMonster");
MudMonster.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/MudMonster.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Rooten Swamp " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 }
 
}
});

MudMonster.customizeDescription({
	getHealth: function(){
  return 400;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.oltorf, count: {min: 3, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.orihalk, count: {min: 3, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.hpup7, count: {min: 1, max: 2}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.eyeofswamp, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});
 drop.push({id: ItemID.monsterheart, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.9});
 drop.push({id: ItemID.voidshard, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.strangeskull, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});

 return drop;
 
}
});
MudMonster.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 24,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("MudMonster", function(coords, item, block){
 var coords = coords.relative;
 if (block.id === BlockID.swampaltar){
 Entity.spawnCustom("MudMonster", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("Called up Rooten Swamp");
 PlaySoundFile("RootenSwampTheme.ogg");
 }
}); //spawn


Item.registerUseFunction("SpawnMudMonster", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudMonster", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("Called up Rooten Swamp");
 PlaySoundFile("RootenSwampTheme.ogg");
}); //spawn












var Reaper = MobRegistry.registerEntity("Reaper");
Reaper.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Reaper.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Reaper " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 //	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 Entity.spawn (coords.x + .5, coords.y + 1, coords.z + .5, 34) 
 }
 
}
});

Reaper.customizeDescription({
	getHealth: function(){
  return 600;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.hpup7, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.voidshard, count: {min: 4, max: 10}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.reapersword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.reaperchestplate, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 drop.push({id: BlockID.keyblock, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
Reaper.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 28,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnReaper", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Reaper", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Reaper has come for you soul!");
 PlaySoundFile("ReaperTheme.ogg");
}); //spawn



TileEntity.registerPrototype(BlockID.skullblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x,this.y-2,this.z);
        var wgd2 = wgd(this.x,this.y-1,this.z);
var blc1 = wgd1.id== BlockID.olobsidian;
var blc2 = wgd2.id== BlockID.olobsidian;

 if(blc1 && blc2){
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x, this.y-1, this.z, 0);
  World.setBlock(this.x, this.y-2, this.z, 0);
  Entity.spawnCustom("Reaper", this.x + .5, this.y + 1, this.z + .5);
  Game.message("The Reaper has come for you soul!");
 PlaySoundFile("ReaperTheme.ogg");
  }
 }
});







var AncientGolem = MobRegistry.registerEntity("AncientGolem");
AncientGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/AncientGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "AncientGolem " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 if(Math.random() < 0.5){
 	var coords = Entity.getPosition(this.entity);
 //	Entity.spawnCustom("MudCube", coords.x + .5, coords.y + 1, coords.z + .5);
 Entity.spawn (coords.x + .5, coords.y + 1, coords.z + .5, 34) 
 }
 
}
});

AncientGolem.customizeDescription({
	getHealth: function(){
  return 800;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.lat, count: {min: 5, max: 20}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.voidshard, count: {min: 4, max: 10}, data: 0, separate: true, chance: 0.8});
 drop.push({id: ItemID.ancientsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
AncientGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 30,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnAncientGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("AncientGolem", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Ancient Golem has awakened!");
 PlaySoundFile("AncientGolemTheme.ogg");
}); //spawn


Item.registerUseFunction("swampkey", function(coords, item, block){
 var coords = coords.relative;
 if (block.id === BlockID.ancientaltar){
 Entity.spawnCustom("AncientGolem", coords.x + .5, coords.y + 1, coords.z + .5);
 Game.message("The Ancient Golem has awakened!");
PlaySoundFile("AncientGolemTheme.ogg");
 }
}); //spawn


/*
var MudCow = MobRegistry.registerEntity("MudCow");
MudCow.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/MudCow.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
MudCow.customizeDescription({
	getHealth: function(){
  return 20;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.oltorf, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
MudCow.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnMudCow", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MudCow", coords.x + .5, coords.y + 1, coords.z + .5);
}); 




var SlimePig = MobRegistry.registerEntity("SlimePig");
SlimePig.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/SlimePig.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
SlimePig.customizeDescription({
	getHealth: function(){
  return 18;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.oltorf, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
SlimePig.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnSlimePig", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("SlimePig", coords.x + .5, coords.y + 1, coords.z + .5);
}); 




var Fox = MobRegistry.registerEntity("Fox");
Fox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/Fox.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
Fox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
Fox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},
enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Fox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 




var TamedFox = MobRegistry.registerEntity("TamedFox");
TamedFox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/Fox.png");
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
TamedFox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
 return drop;
 }
});
TamedFox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},


priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},


enemy_watcher: {
type: AdvancedAI.EnemyWatcher,
followAI:"follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnTamedFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("TamedFox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 
*/



/*
var MudCow = MobRegistry.registerEntity("MudCow");
MudCow.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);
 Entity.setSkin(this.entity, "mobs/MudCow.png");
 });
MudCow.customizeDescription({
{
   getHitbox: function() {
      return {
         w: 1,
         h: 1
      }; 
   },
   getHealth: function() { return 40; 
   },
//  getDrop: function(attacker) { return dropArray; 
//   }
}
});
*/






































// file: VoidAltar.js

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiVOID = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Void Altar"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var VOID = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

VOID.set(ItemID.starmaterial, ItemID.lat, ItemID.voidshard, {
    id: ItemID.voidmaterial, count: 1, data: 0
});

VOID.set(ItemID.starpotion, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidpotion, count: 1, data: 0
});


VOID.set(ItemID.starspple, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidapple, count: 1, data: 0
});





VOID.set(ItemID.latsword, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidsword, count: 1, data: 0
});

VOID.set(ItemID.latpickaxe, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidpickaxe, count: 1, data: 0
});

VOID.set(ItemID.lataxe, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidaxe, count: 1, data: 0
});

VOID.set(ItemID.latshovel, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidshovel, count: 1, data: 0
});

VOID.set(ItemID.lathelmet, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidhelmet, count: 1, data: 0
});

VOID.set(ItemID.latchestplate, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidchestplate, count: 1, data: 0
});

VOID.set(ItemID.latleggings, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidleggings, count: 1, data: 0
});

VOID.set(ItemID.latboots, ItemID.voidmaterial, ItemID.voidshard, {
    id: ItemID.voidboots, count: 1, data: 0
});

VOID.set(ItemID.voidsword, ItemID.fireancientsword, ItemID.reaperscythe, {
    id: ItemID.advancedvoidsword, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.voidaltar, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiVOID;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = VOID.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});


















// file: translate.js

Translation.addTranslation("Wichitum gem", {ru: "Вичитум"});

Translation.addTranslation("Wichitum ore", {ru: "Вичитумовая руда"});

Translation.addTranslation("Wichitum sword", {ru: "Вичитумовый меч"});
Translation.addTranslation("Wichitum pickaxe", {ru: "Вичитумовая кирка"});
Translation.addTranslation("Wichitum axe", {ru: "Вичитумовый топор"});
Translation.addTranslation("Wichitum shovel", {ru: "Вичитумовая лопата"});


Translation.addTranslation("Wichitum helmet", {ru: "Вичитумовый шлем"});
Translation.addTranslation("Wichitum chestplate", {ru: "Вичитумовый нагрудник"});
Translation.addTranslation("Wichitum leggings", {ru: "Вичитумовые поножи"});
Translation.addTranslation("Wichitum boots", {ru: "Вичитумовые ботинки"});

Translation.addTranslation("Extraterrestrial staff", {ru: "Внеземной посох"});

Translation.addTranslation("Outlands grass block", {ru: "Блок травы Внешних Земель"});

Translation.addTranslation("Outlands dirt", {ru: "Земля Внешних Земель"});

Translation.addTranslation("Outlands stone", {ru: "Камень Внешних Земель"});

Translation.addTranslation("Wakefulnessrock", {ru: "Вэйкфулнессрок"});

Translation.addTranslation("Cross Ankh", {ru: "Крест Анкх"});

Translation.addTranslation("Outlands wood", {ru: "Древо Внешних Земель"});

Translation.addTranslation("Outlands leaves", {ru: "Листва Внешних Земель"});

Translation.addTranslation("Outlands grass", {ru: "Трава Внешних Земель"});

Translation.addTranslation("Outlands mushroom", {ru: "Гриб Внешних Земель"});

Translation.addTranslation("Blue Outlands mushroom", {ru: "Голубой гриб Внешних Земель"});

Translation.addTranslation("Brown Outlands mushroom", {ru: "Коричневый гриб Внешних Земель"});

Translation.addTranslation("Outlands stick", {ru: "Палка Внешних Земель"});

Translation.addTranslation("Outlands stone bricks", {ru: "Каменные кирпичи Внешних Земель"});
Translation.addTranslation("Outlands carved stone bricks", {ru: "Резные каменные кирпичи Внешних Земель"});
Translation.addTranslation("Outlands planks", {ru: "Доски Внешних Земель"});


Translation.addTranslation("Outlands wood sword", {ru: "Меч из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood pickaxe", {ru: "Кирка из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood axe", {ru: "Топор из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood shovel", {ru: "Лопата из древесины Внешних Земель"});


Translation.addTranslation("Outlands wood helmet", {ru: "Шлем из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood chestplate", {ru: "Нагрудник из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood leggings", {ru: "Поножи из древесины Внешних Земель"});
Translation.addTranslation("Outlands wood boots", {ru: "Ботинки из древесины Внешних Земель"});



Translation.addTranslation("Outlands stone sword", {ru: "Меч из камня Внешних Земель"});
Translation.addTranslation("Outlands stone pickaxe", {ru: "Кирка из камня Внешних Земель"});
Translation.addTranslation("Outlands stone axe", {ru: "Топор из камня Внешних Земель"});
Translation.addTranslation("Outlands stone shovel", {ru: "Лопата из камня Внешних Земель"});


Translation.addTranslation("Outlands stone helmet", {ru: "Шлем из камня Внешних Земель"});
Translation.addTranslation("Outlands stone chestplate", {ru: "Нагрудник из камня Внешних Земель"});
Translation.addTranslation("Outlands stone leggings", {ru: "Поножи из камня Внешних Земель"});
Translation.addTranslation("Outlands stone boots", {ru: "Ботинки из камня Внешних Земель"});

Translation.addTranslation("Outlands wood planks", {ru: "Доски из древесины Внешних Земель"});

//∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆μ÷×§√↑′″∞(‰℅]

Translation.addTranslation("Outlands mossy stone bricks", {ru: "Замшелые кирпичи из камня Внешних Земель"});

Translation.addTranslation("Outlands cracked stone bricks", {ru: "Потрескавшиеся кирпичи из камня Внешних Земель"});

Translation.addTranslation("Outlands book shelf", {ru: "Книжный шкаф Внешних Земель"});

Translation.addTranslation("Outlands jukebox", {ru: "Проигрыватель Внешних Земель"});

Translation.addTranslation("Outlands furnace", {ru: "Печь Внешних Земель"});

Translation.addTranslation("Outlands stump", {ru: "Пень Внешних Земель"});

Translation.addTranslation("Outlands ruby ore", {ru: "Рубиновая руда Внешних Земель"});

Translation.addTranslation("Outlands lily of the valley", {ru: "Колокольчики Внешних Земель"});

Translation.addTranslation("Outlands iforina", {ru: "Ифорина Внешних Земель"});

Translation.addTranslation("Outlands orchid", {ru: "Орхидея Внешних Земель"});




Translation.addTranslation("Outlands wood plate", {ru: "Плита из древа Внешних Земель"});

Translation.addTranslation("Outlands wood planks plate", {ru: "Плита из досок древа Внешних Земель"});

Translation.addTranslation("Outlands stone plate", {ru: "Плита из камня Внешних Земель"});

Translation.addTranslation("Outlands stone bricks plate", {ru: "Плита из каменных кирпичей Внешних Земель"});

Translation.addTranslation("Outlands carved stone bricks plate", {ru: "Плита из резных каменных кирпичей Внешних Земель"});

Translation.addTranslation("Outlands mossy stone bricks plate", {ru: "Плита из замшелых каменных кирпичей Внешних Земель"});

Translation.addTranslation("Outlands cracked stone bricks plate", {ru: "Плита из потрескавшихся каменных кирпичей Внешних Земель"});




Translation.addTranslation("Outlands glass", {ru: "Стекло Внешних Земель"});

Translation.addTranslation("Outlands glowstone", {ru: "Светящийся камень Внешних Земель"});

Translation.addTranslation("Peat", {ru: "Торф"});

Translation.addTranslation("Outlands paper", {ru: "Бумага Внешних Земель"});

Translation.addTranslation("Outlands book", {ru: "Книга Внешних Земель"});

Translation.addTranslation("Outlands bowl", {ru: "Миска Внешних Земель"});


Translation.addTranslation("Outlands marinated blue mushrooms in a bowl", {ru: "Маринованные голубые грибы Внешних Земель в миске Внешних Земель"});

Translation.addTranslation("Outlands marinated brown mushrooms in a bowl", {ru: "Маринованные коричневые грибы Внешних Земель в миске Внешних Земель"});

Translation.addTranslation("Outlands marinated mushrooms in a bowl", {ru: "Маринованные грибы Внешних Земель в миске Внешних Земель"});


Translation.addTranslation("Outlands ruby", {ru: "Рубин"});


Translation.addTranslation("Orichalc ingot", {ru: "Слиток орихалка"});




Translation.addTranslation("Ruby sword", {ru: "Рубиновый меч"});
Translation.addTranslation("Ruby pickaxe", {ru: "Рубиновая кирка"});
Translation.addTranslation("Ruby axe", {ru: "Рубиновый топор"});
Translation.addTranslation("Ruby shovel", {ru: "Рубиновая лопата"});


Translation.addTranslation("Ruby helmet", {ru: "Рубиновый шлем"});
Translation.addTranslation("Ruby chestplate", {ru: "Рубиновый нагрудник"});
Translation.addTranslation("Ruby leggings", {ru: "Рубиновые поножи"});
Translation.addTranslation("Ruby boots", {ru: "Рубиновые ботинки"});



Translation.addTranslation("Orichulc sword", {ru: "Орихалковый меч"});
Translation.addTranslation("Orichulc pickaxe", {ru: "Орихалковая кирка"});
Translation.addTranslation("Orichulc axe", {ru: "Орихалковый топор"});
Translation.addTranslation("Orichulc shovel", {ru: "Орихалковая лопата"});


Translation.addTranslation("Orichulc helmet", {ru: "Орихалковый шлем"});
Translation.addTranslation("Orichulc chestplate", {ru: "Орихалковый нагрудник"});
Translation.addTranslation("Orichulc leggings", {ru: "Орихалковые поножи"});
Translation.addTranslation("Orichulc boots", {ru: "Орихалковые ботинки"});

Translation.addTranslation("Rotting wood", {ru: "Трухлявое дерево"});

Translation.addTranslation("Outlands bee hive", {ru: "Пчелиный улей"});





Translation.addTranslation("Star Altar", {ru: "Звёздный алтарь"});

Translation.addTranslation("Star block", {ru: "Звездный блок"});

Translation.addTranslation("Star", {ru: "Звезда"});

Translation.addTranslation("Vase of star altar", {ru: "Ваза звёздного алтаря"});

Translation.addTranslation("Swamp altar", {ru: "Алтарь ботота"});

Translation.addTranslation("Mud", {ru: "Грязь"});

Translation.addTranslation("Strange skull", {ru: "Странный череп"});

Translation.addTranslation("Outlands obsidian", {ru: "Обсидиан Внешних Земель"});

Translation.addTranslation("Skull block", {ru: "Блок черепа"});

Translation.addTranslation("Lock", {ru: "Замок"});

Translation.addTranslation("Key", {ru: "Ключ"});

Translation.addTranslation("Reaper castle vase", {ru: "Ваза замка Жнеца"});

Translation.addTranslation("Ancient altar", {ru: "Древний алтарь"});

Translation.addTranslation("Void Altar", {ru: "Пустотный Алтарь"});

Translation.addTranslation("Void block", {ru: "Пустотный блок"});

Translation.addTranslation("Void", {ru: "Пустота"});

Translation.addTranslation("Swamp sweetness", {ru: "Сладость болота"});

Translation.addTranslation("Royal sweetness", {ru: "Королевская сладость"});

Translation.addTranslation("Outlands bucket", {ru: "Ведро Внешних Земель"});

Translation.addTranslation("Honeycomb", {ru: "Медовые соты"});

Translation.addTranslation("Outlands honey bucket", {ru: "Ведро мёда Внешних Земель"});

Translation.addTranslation("Golden apple potion", {ru: "Зелье золотого яблока"});

Translation.addTranslation("Star potion", {ru: "Звёздное зелье"});

Translation.addTranslation("Star apple", {ru: "Звёздное яблоко"});

Translation.addTranslation("Star material", {ru: "Звёздный материал"});

Translation.addTranslation("Void shard", {ru: "Осколок Пустоты"});

Translation.addTranslation("Eye of swamp", {ru: "Глаз болота"});

Translation.addTranslation("Monster heart", {ru: "Сердце монстра"});

Translation.addTranslation("Mud staff", {ru: "Посох грязи"});

Translation.addTranslation("Swamp key", {ru: "Ключ болота"});

Translation.addTranslation("Brass ingot", {ru: "Латунный слиток"});

Translation.addTranslation("Christmas tree resin \n What is it?", {ru: "Ёлочная смола \n Что это?"});

Translation.addTranslation("Void potion", {ru: "Пустотное зелье"});

Translation.addTranslation("Void apple", {ru: "Пустотное яблоко"});

Translation.addTranslation("Hunger potion", {ru: "Зелье голода"});

Translation.addTranslation("Void material", {ru: "Пустотный материал"});

Translation.addTranslation("Star sword", {ru: "Звёздный меч"});
Translation.addTranslation("Star pickaxe", {ru: "Звёздная кирка"});
Translation.addTranslation("Star axe", {ru: "Звёздный топор"});
Translation.addTranslation("Star shovel", {ru: "Звёздная лопата"});
Translation.addTranslation("Star helmet", {ru: "Звёздный шлем"});
Translation.addTranslation("Star chestplate", {ru: "Звёздный нагрудник"});
Translation.addTranslation("Star leggings", {ru: "Звёздные поножи"});
Translation.addTranslation("Star boots", {ru: "Звёздные ботинки"});

Translation.addTranslation("Reaper scythe", {ru: "Коса Жнеца"});

Translation.addTranslation("Jacket of Reaper \n Stylish and fashionable!", {ru: "Пиджак Жнеца \n Стильно и модно!"});

Translation.addTranslation("Ancient sword", {ru: "Древний меч"});

Translation.addTranslation("Fire ancient sword", {ru: "Огненный древний меч"});


Translation.addTranslation("Brass sword", {ru: "Латунный меч"});
Translation.addTranslation("Brass pickaxe", {ru: "Латунная кирка"});
Translation.addTranslation("Brass axe", {ru: "Латунный топор"});
Translation.addTranslation("Brass shovel", {ru: "Латунная лопата"});
Translation.addTranslation("Brass helmet", {ru: "Латунный шлем"});
Translation.addTranslation("Brass chestplate", {ru: "Латунный нагрудник"});
Translation.addTranslation("Brass leggings", {ru: "Латунные поножи"});
Translation.addTranslation("Brass boots", {ru: "Латунные ботинки"});

Translation.addTranslation("Void sword", {ru: "Пустотный меч"});
Translation.addTranslation("Void pickaxe", {ru: "Пустотная кирка"});
Translation.addTranslation("Void axe", {ru: "Пустотный топор"});
Translation.addTranslation("Void shovel", {ru: "Пустотная лопата"});
Translation.addTranslation("Void helmet", {ru: "Пустотный шлем"});
Translation.addTranslation("Void chestplate", {ru: "Пустотный нагрудник"});
Translation.addTranslation("Void leggings", {ru: "Пустотные поножи"});
Translation.addTranslation("Void boots", {ru: "Пустотные ботинки"});

Translation.addTranslation("Advanced void sword", {ru: "Продвинутый пустотный меч"});

Translation.addTranslation("Outlands furnace", {ru: "Печь Внешних Земель"});

Translation.addTranslation("Star Altar", {ru: "Звёздный Алтарь"});

Translation.addTranslation("Spawn MudCube", {ru: "Призвать существо - Грязевой Куб"});


Translation.addTranslation("Spawn Rooting Swamp", {ru: "Призвать существо - Гнилое Болото"});

Translation.addTranslation("Spawn Reaper", {ru: "Призвать существо - Жнец"});

Translation.addTranslation("Spawn Mud Cow", {ru: "Призвать существо - Грязевая Корова"});

Translation.addTranslation("Spawn Ancient Golem", {ru: "Призвать существо - Древний Голем"});

Translation.addTranslation("Spawn Slime Pig", {ru: "Призвать существо - Слизневая Свинья"});

Translation.addTranslation("Spawn Fox", {ru: "Призвать существо - Лис"});

Translation.addTranslation("Spawn Tamed Fox", {ru: "Призвать существо - Прирученный Лис"});


Translation.addTranslation("Spawn Rooting Swamp ", {ru: "Гнилое Болото "});

Translation.addTranslation("Called up Rooten Swamp", {ru: "Гнилое Болото призван"});

Translation.addTranslation("Reaper ", {ru: "Жнец "});

Translation.addTranslation("The Reaper has come for your soul!", {ru: "Жнец пришел по вашу душу!"});

Translation.addTranslation("AncientGolem ", {ru: "Древний Голем "});

Translation.addTranslation("The Ancient Golem has awakened!", {ru: "Древний Голем пробудился!"});

Translation.addTranslation("Nasty slime", {ru: "Противная слизь"});




































































































