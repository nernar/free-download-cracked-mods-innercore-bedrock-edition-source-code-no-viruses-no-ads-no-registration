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