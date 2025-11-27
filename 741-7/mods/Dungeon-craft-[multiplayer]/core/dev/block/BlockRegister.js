function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

IDRegistry.genBlockID("paradiseGrass")
Block.createBlock("paradiseGrass", 
[{
	name: "Paradise Grass",
	inCreative: true,
	texture: [
             ["aether_dirt", 0],
             ["aether_grass_top", 0],
             ["aether_grass_side", 0]
       ]
   }
], {
	sound: "grass",
	solid: true,
	base: 2
});

mod_tip(BlockID.paradiseGrass)
Translation.addTranslation("Paradise Grass", {ru: "Райский Блок Травы"});

Block.registerDropFunctionForID(BlockID.paradiseGrass, function (){ return [[BlockID.paradiseDirt, 1, 0]]});

IDRegistry.genBlockID("paradiseDirt")
Block.createBlock("paradiseDirt", 
[{
	name: "Paradise Dirt",
	inCreative: true,
	texture: [["aether_dirt", 0]]
   }
], {
	sound: "dirt",
	solid: true
});

mod_tip(BlockID.paradiseDirt)

Translation.addTranslation("Paradise Dirt", {ru: "Райская Земля"});

//лень переписывать все blockid.dirt2 и blockid.grass2. Поэтому просто сделаю так:

BlockID.dirt2 = BlockID.paradiseDirt
BlockID.grass2 = BlockID.paradiseGrass

IDRegistry.genBlockID("crimsonGrass")
Block.createBlock("crimsonGrass",
[{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom", 0],
             ["cursed_grass_top", 0],
             ["cursed_grass_side", 0]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom", 1],
             ["cursed_grass_top", 1],
             ["cursed_grass_side", 1]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom_2", 0],
             ["cursed_grass_top_2", 0],
             ["cursed_grass_side_2", 0]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom_3", 0],
             ["cursed_grass_top_3", 0],
             ["cursed_grass_side_3", 0]
       ]
   }
], {
	sound: "grass",
	solid: true
});

mod_tip(BlockID.crimsonGrass)

Translation.addTranslation("Crimson Paradise Grass", {ru: "Зараженный Райский Блок Травы"});

Block.registerDropFunctionForID(BlockID.crimsonGrass, function (){ return [[BlockID.crimsonDirt, 1, 0]]});

IDRegistry.genBlockID("crimsonDirt")
Block.createBlock("crimsonDirt",
[{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom", 0]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom", 1]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom_2", 0]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom_3", 0]]
   }
], {
	sound: "dirt",
	solid: true
});

mod_tip(BlockID.crimsonDirt)

Translation.addTranslation("Crimson Paradise Dirt", {ru: "Зараженная Райская Земля"});



IDRegistry.genBlockID("brick2");
Block.createBlock("brick2", [ {name: "Paradise Bricks", texture: [["brick2", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.brick2)
Translation.addTranslation("Paradise Bricks", {ru: "кирпичи рая"});

IDRegistry.genBlockID("vase");
Block.createBlock("vase", [ {name: "vase", texture: [["stone", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.vase)
Translation.addTranslation("vase", {ru: "ваза"});
renderAPI.setblock(BlockID.vase, "vase.obj", "vase");

Block.registerDropFunctionForID(BlockID.werep, function(coords, id, data, diggingLevel, toolLevel){
     return [[264, randomInt (1,4), 0]];
});

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});


ToolAPI.registerBlockMaterial(BlockID.vase, "stone", 1, true);
Block.setDestroyTime(BlockID.vase, 1);
Block.setDestroyLevel(BlockID.vase, 1);


IDRegistry.genBlockID("werep");
Block.createBlock("werep", [ {name: "werep", texture: [["stone", 0]], inCreative: true}], {solid: true});

mod_tip(BlockID.werep)

Translation.addTranslation("werep", {ru: "череп"});
renderAPI.setblock(BlockID.werep, "werep.obj", "werep");

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[371, randomInt (1, 16), 0]];

});

ToolAPI.registerBlockMaterial(BlockID.werep, "stone", 1, true);
Block.setDestroyTime(BlockID.werep, 1);
Block.setDestroyLevel(BlockID.werep, 1);

ToolAPI.registerBlockMaterial(BlockID.brick2, "stone", 3, true);
Block.setDestroyTime(BlockID.brick2, 1);

IDRegistry.genBlockID("glass2");
Block.createBlock("glass2", [ {name: "Glass of paradise", texture: [["glass2", 0]], inCreative: true} ], {sound:"grass", solid: true});

mod_tip(BlockID.glass2)

Translation.addTranslation("Glass of paradise", {ru: "стекло"});

Block.setDestroyTime(BlockID.glass2, 0.1);

Block.createSpecialType({
	base: 17,
	solid: true,
	destroytime: 2,
	explosionres: 10,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0,
	sound:"wood"
}, "log");
Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5,
	sound:"grass"
}, "log2");

IDRegistry.genBlockID("Breastya");
Block.createBlockWithRotation("Breastya", [ {name: "Breastya", texture: [["Breastya", 1], ["Breastya", 1], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0]], inCreative: true} ], "log");

mod_tip(BlockID.Breastya)

Translation.addTranslation("Breastya", {ru: "бревно рая"});

Block.setRandomTickCallback(BlockID.Breastya, function (x,y,z,id,data,region){
	let index = randomInt (0,7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlockId(xx,yy,zz)
    if(block == BlockID.crimsonGrass || block == BlockID.crimsonDirt) region.setBlock(x,y,z, BlockID.deadBreastya)
    else if(!Block.isSolid(block) && (region.getBlockId(xx,yy-1,zz) == BlockID.crimsonGrass || region.getBlockId(xx,yy-1,zz) == BlockID.crimsonDirt)) region.setBlock(x,y,z, BlockID.deadBreastya)
	})

//Block.setDestroyTime(BlockID.Breastya, 1);
//Block.setDestroyLevel(BlockID.Breastya, 1);

IDRegistry.genBlockID("Foliage");
Block.createBlock("Foliage", [ {name: "Foliage of paradise", texture: [["Foliage", 0]], inCreative: true} ], "log2");

mod_tip(BlockID.Foliage)

Translation.addTranslation("Foliage of paradise", {ru: "листва"});

IDRegistry.genBlockID("deadBreastya");
Block.createBlockWithRotation("deadBreastya", [ {name: "deadBreastya", texture: [["deadBreastya", 1], ["deadBreastya", 1], ["deadBreastya", 0], ["deadBreastya", 0], ["deadBreastya", 0], ["deadBreastya", 0]], inCreative: true} ], "log");

mod_tip(BlockID.deadBreastya)

Translation.addTranslation("deadBreastya", {ru: "заражённое бревно рая"});

Block.setRandomTickCallback(BlockID.deadBreastya, function (x,y,z,id,data, region){
	let blockTop = region.getBlockId(x,y+1,z)
	if(blockTop == BlockID.Breastya) region.setBlock(x,y+1,z,id)
	else if(blockTop == BlockID.Foliage) region.setBlock(x,y+1,z,BlockID.deadFoliage)
	let blockBot = region.getBlockId(x,y-1,z)
	if(blockBot == BlockID.Breastya) region.setBlock(x,y-1,z,id)
	for(let i = 0; i < 6; i++){
	let index = randomInt (0,5)
	let xx = x+foliageBlockCoords [index][0]
	let yy = y+foliageBlockCoords [index][1]
	let zz = z+foliageBlockCoords [index][2]
	if(region.getBlockId(xx,yy,zz) == BlockID.Foliage){
	region.setBlock(xx,yy,zz,BlockID.deadFoliage)
	break
}}})

//Block.setDestroyTime(BlockID.Breastya, 1);
//Block.setDestroyLevel(BlockID.Breastya, 1);

IDRegistry.genBlockID("deadFoliage");
Block.createBlock("deadFoliage", [ {name: "deadFoliage of paradise", texture: [["deadFoliage", 0]], inCreative: true} ], "log2");

mod_tip(BlockID.deadFoliage)

Translation.addTranslation("deadFoliage of paradise", {ru: "зараженная листва"});

Block.setDestroyTime(BlockID.Foliage, 0.1);
Block.setDestroyTime(BlockID.deadFoliage, 0.1);
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.Foliage, -1, ["Foliage", 0]);
    BetterFoliage.setupLeavesModel(BlockID.deadFoliage, -1, ["deadFoliage", 0]);
});

Block.registerDropFunctionForID(BlockID.Foliage, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.sapling10, 1, 0]];

});

Block.registerDropFunctionForID(BlockID.Foliage, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});

IDRegistry.genBlockID("sap");
Block.createBlock("sap", [ {name: "sapling", texture: [["Sapling2", 0]], inCreative: false} ],{sound:"grass"});

mod_tip(BlockID.sap)

TileRenderer.setPlantModel(BlockID.sap, 0, "Sapling2", 0);

Block.setDestroyTime(BlockID.sap, 0.2);

Block.createSpecialType({
 opaque: false, 
	lightopacity: 0,
	solid: false,
  lightlevel: 8, 
 	explosionres: 0,
 sound:"grass"
}, "trava");

IDRegistry.genBlockID("trava");
Block.createBlock("trava", [ {name: "trava", texture: [["trava", 0]], inCreative: false} ], "trava");

mod_tip(BlockID.trava)

TileRenderer.setPlantModel(BlockID.trava, 0, "trava", 0);

Block.setDestroyTime(BlockID.trava, 0.2);

Block.setRandomTickCallback(BlockID.trava, function (x,y,z,id,data,region){
	if(region.getBlockId(x, y - 1, z) == BlockID.crimsonGrass || region.getBlockId(x,y-1,z) == BlockID.crimsonDirt) region.setBlock(x,y,z,BlockID.deadtrava)
	})

IDRegistry.genBlockID("deadtrava");
Block.createBlock("deadtrava", [ {name: "deadtrava", texture: [["deadtrava", 0]], inCreative: false} ], "trava");

mod_tip(BlockID.deadtrava)

TileRenderer.setPlantModel(BlockID.deadtrava, 0, "deadtrava", 0);

Block.setDestroyTime(BlockID.deadtrava, 0.2);

IDRegistry.genBlockID("board");
Block.createBlock("board", [ {name: "board", texture: [["board", 0]], inCreative: true} ], "log");

mod_tip(BlockID.board)

Translation.addTranslation("board", {ru: "доски рая"});

IDRegistry.genBlockID("a0");
Block.createBlock("a0", [ {name: "ggg", texture: [["a", 0]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.a0)

Block.setDestroyTime(BlockID.a0, 0.1);

Block.registerDropFunctionForID(BlockID.a0, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 1, 0]];

});

IDRegistry.genBlockID("a1");
Block.createBlock("a1", [ {name: "ggg", texture: [["a", 1]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.a1)

Block.setDestroyTime(BlockID.a1, 0.1);

Block.registerDropFunctionForID(BlockID.a1, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 3, 0]];

});

Block.setRandomTickCallback(BlockID.a0, function (x,y,z,id,data, region){
        if(Math.random() * 5 < 1){
region.setBlock(x, y, z, BlockID.a1, 0);
     }
     if(region.getBlockId(x,y-1, z) == BlockID.crimsonGrass)
     region.setBlock(x,y,z, BlockID.deada0)
});

Block.setRandomTickCallback(BlockID.a1, function (x,y,z,id,data, region){
     if(region.getBlockId(x,y-1, z) == BlockID.crimsonGrass)
     region.setBlock(x,y,z, BlockID.deada1)
});

Block.setBlockShape(BlockID.a0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8}) 

Block.setBlockShape(BlockID.a1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8})

TileEntity.registerPrototype(BlockID.a1, {
     defaultValues: {
     },
     click: function(id, count, data, coords, player){
let b = BlockSource.getDefaultForActor(player);
b.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.Berries, 1, 0, null);
b.setBlock(this.x, this.y, this.z, BlockID.a0, 0);
     }
});

IDRegistry.genBlockID("deada0");
Block.createBlock("deada0", [ {name: "deadggg", texture: [["deada", 0]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.deada0)

Block.setDestroyTime(BlockID.deada0, 0.1);

Block.registerDropFunctionForID(BlockID.deada0, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.deadBerries, 1, 0]];

});

IDRegistry.genBlockID("deada1");
Block.createBlock("deada1", [ {name: "deadggg", texture: [["deada", 1]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.deada1)

Block.setDestroyTime(BlockID.deada1, 0.1);

Block.registerDropFunctionForID(BlockID.deada1, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.deadBerries, 3, 0]];

});

Block.setRandomTickCallback(BlockID.deada0, function (x,y,z,id,data, region){
        if(Math.random() * 5 < 1){
region.setBlock(x, y, z, BlockID.deada1, 0);
     }
});

Block.setBlockShape(BlockID.deada0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8}) 

Block.setBlockShape(BlockID.deada1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8})

TileEntity.registerPrototype(BlockID.deada1, {
     defaultValues: {
     },
     click: function(id, count, data, coords, player){
let b = BlockSource.getDefaultForActor(player);
b.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.deadBerries, 1, 0, null);
b.setBlock(this.x, this.y, this.z, BlockID.deada0, 0);
     }
});


IDRegistry.genBlockID("altar");
Block.createBlock("altar", [ {name: "Altarial block", texture: [["stone-1", 0], ["stone-1", 0], ["stone-1", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.altar)

Translation.addTranslation("Altarial block", {ru: "алтарьный блок"});

Block.setDestroyTime(BlockID.altar, 1);
ToolAPI.registerBlockMaterial(BlockID.altar, "stone", 1, true);

IDRegistry.genBlockID("altar1");
Block.createBlock("altar1", [ {name: "Altarial block", texture: [["rityalBlock", 0], ["rityalBlock", 0], ["rityalBlock", 0]], inCreative: true} ], {solid: true});

mod_tip(BlockID.altar1)

Block.setDestroyTime(BlockID.altar1, 1);
ToolAPI.registerBlockMaterial(BlockID.altar1, "stone", 1, true);

IDRegistry.genBlockID("altar3");
Block.createBlock("altar3", [ {name: "Altarial block", texture: [["rityalBlock", 2], ["rityalBlock", 2], ["rityalBlock", 2]], inCreative: true} ], {solid: true});

mod_tip(BlockID.altar3)

Block.setDestroyTime(BlockID.altar3, 1);
ToolAPI.registerBlockMaterial(BlockID.altar3, "stone", 1, true);

IDRegistry.genBlockID("stone2"); 
Block.createBlock("stone2", [{name: "Stone of paradise", texture: [["holystone", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.stone2)

Translation.addTranslation("Stone of paradise", {ru: "камень рая"});

IDRegistry.genBlockID("ore"); 
Block.createBlock("ore", [{name: "Ore of paradise", texture: [["ore", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.ore)

Translation.addTranslation("Ore of paradise", {ru: "руда рая"});

ModAPI.addAPICallback("ICore", function (api){
    IDRegistry.genItemID("crushedOreParadise"); 
    Item.createItem("crushedOreParadise", "crushed ore of paradise", {name: "crushed_ore_paradise", meta: 0}, {stack: 64});
    mod_tip(ItemID.crushedOreParadise)
    Translation.addTranslation("crushed ore of paradise", {ru: "раздробленная руда рая"});
    Callback.addCallback("PostLoaded", function (){
        Recipes.addFurnace(ItemID.crushedOreParadise, ItemID.clitok, 0);
        api.Recipe.addRecipeFor("macerator", BlockID.ore, {id: ItemID.crushedOreParadise, count: 3, data: 0});
    });
});

IDRegistry.genBlockID("blockmetal"); 
Block.createBlock("blockmetal", [{name: "Blocks of divine methal", texture: [["blockmetal", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.blockmetal)

Translation.addTranslation("Blocks of divine methal", {ru: "блок божественного метала"});

Block.setDestroyTime(BlockID.blockmetal, 1);
ToolAPI.registerBlockMaterial(BlockID.blockmetal, "stone", 1, true);

IDRegistry.genBlockID("block1"); 
Block.createBlock("block1", [{name: "Controller of the worlds", texture: [["altar", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.block1)

Translation.addTranslation("Controller of the worlds", {ru: "контролер миров"});

ToolAPI.registerBlockMaterial(BlockID.stone2, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.ore, "stone", 3, true);

Block.setDestroyTime(BlockID.stone2, 2);
Block.setDestroyTime(BlockID.block1, 99999999999);
Block.setDestroyLevel(BlockID.stone2, 1);
Block.setDestroyTime(BlockID.ore, 3);
Block.setDestroyLevel(BlockID.ore, 3);


IDRegistry.genBlockID("kristalFire");
Block.createBlock("kristalFire", [ {name: "crictal fire", texture: [["crictal",0]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristalFire)
TileRenderer.setPlantModel(BlockID.kristalFire, 0, "crictal", 0);

Block.registerDropFunctionForID(BlockID.kristalFire, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalfire, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalFire, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalFire, "stone", 0.1, true);

IDRegistry.genBlockID("kristaldirt");
Block.createBlock("kristaldirt", [ {name: "Кристалл земли", texture: [["crictal" ,2]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristaldirt)
TileRenderer.setPlantModel(BlockID.kristaldirt, 0, "crictal", 2);
Block.registerDropFunctionForID(BlockID.kristaldirt, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalearth, 1, 0]];
});

Block.setDestroyTime(BlockID.kristaldirt, 1);
ToolAPI.registerBlockMaterial(BlockID.kristaldirt, "stone", 0.1, true);

IDRegistry.genBlockID("kristalLight");
Block.createBlock("kristalLight", [ {name: "проигрыватель", texture: [["crictal", 3]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristalLight)
TileRenderer.setPlantModel(BlockID.kristalLight, 0, "crictal", 3);
Block.registerDropFunctionForID(BlockID.kristalLight, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalLightning, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalLight, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalLight, "stone", 0.1, true);

IDRegistry.genBlockID("kristalwind");
Block.createBlock("kristalwind", [ {name: "проигрыватель", texture: [["crictal", 1]], inCreative: false} ], {solid: false});
mod_tip(BlockID.kristalwind)
TileRenderer.setPlantModel(BlockID.kristalwind, 0, "crictal", 1);
Block.registerDropFunctionForID(BlockID.kristalwind, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalWind, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalwind, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalwind, "stone", 0.1, true);

IDRegistry.genBlockID("rityal1"); 
Block.createBlock("rityal1", [{name: "magis altar block", texture: [["nis", 0],["vverx", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true}], { opaque: true, lightopacity: 1, renderlayer: 2, solid: true});

mod_tip(BlockID.rityal1)
Translation.addTranslation("magis altar block", {ru: "магический ритуальный блок"});

Block.setDestroyTime(BlockID.rityal1, 1);
ToolAPI.registerBlockMaterial(BlockID.rityal1, "stone", 1, true);

var Render = {
setAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					
					model.addBox (0/16, 0.88, 0/16, 16/16, 1, 1/16, blockID, 0);
					  model.addBox (0/16, 0.88, 15/16, 16/16, 1, 16/16, blockID, 0);
					   model.addBox (0/16, 0.88, 1/16, 1/16, 1, 15/16, blockID, 0);
					    model.addBox (15/16, 0.88, 1/16, 16/16, 1, 15/16, blockID, 0);
				   model.addBox(0/16, 0.79, 0/16, 16/16, 0.88, 16/16, blockID, 0);
                 model.addBox(3/16, 0.21, 3/16, 13/16, 0.78, 13/16, blockID, 0);
			   model.addBox(0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					
					
					
     }
},

setRackRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					 model.addBox (0/16, 0, 0/16, 16/16, 0.133, 16/16, blockID, 0);
					  model.addBox (4/16, 0.134, 4/16, 12/16, 0.246, 12/16, blockID, 0);
					  model.addBox (10/16, 0.247, 10/16, 6/16, 0.95, 6/16, blockID, 0);
			
					  model.addBox (4/16, 0.96, 4/16, 12/16, 1, 12/16, blockID, 0);
     }
},

setRitualAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					model.addBox (0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					model.addBox (4/16, 0.21, 4/16, 12/16, 0.80, 12/16, blockID, 0);
					model.addBox (0/16, 0.81, 0/16, 16/16, 1, 16/16, blockID, 0);
					
     }
},

setRitualAltarControllerRender: function(blockID, normal){
    if(normal){
     Block.setBlockShape(blockID, {x: 0, y: 0, z: 0}, {x: 1, y: 0.4, z: 1});			
     }
}
};

Render.setRitualAltarRender(BlockID.rityal1, true);

TileEntity.registerPrototype(BlockID.rityal1, {
    defaultValues: {
        item: {
            id: 0,
            data: 0
        }
    }, 
    init: function(){
        this.isItem();
        if(this.data.item){
            if(this.data.item.id) this.networkData.putInt("itemId", this.data.item.id);
            if(this.data.item.data) this.networkData.putInt("itemData", this.data.item.data);
            this.networkData.sendChanges();
        }
    }, 
    client: {
        updateModel: function() {
            var id = Network.serverToLocalId(this.networkData.getInt("itemId"));
            var data = this.networkData.getInt("itemData");
            this.model.describeItem({
                id: id,
                count: 1,
                data: data, 
                size: 1,
                rotation: [3.14/2, 0, 0]
            });
        },
        load: function() {
            this.model = new Animation.Item(this.x + .5, this.y + 1.02, this.z + .5);
            this.updateModel();
            this.model.load();
            var that = this;
            this.networkData.addOnDataChangedListener(function(data, isExternal) {
                that.updateModel();
            });
        },
        unload: function() {
            this.model.destroy();
        }
    },
    customAnimation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
    }, 
    animation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
    }, 
    drop: function(player){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        let PA = new PlayerActor(player);
        if(PA.getGameMode() == 0){
            this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
        for(var i in Idal.arr){
            if(this.data.item.id == Idal.arr[i]){
                 this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
            }
        }
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    tick: function (){
        for(var i in Idal.arr){
            if(this.data.item.id == Idal.arr[i] && this.data.item.data <= 999){
                if(World.getThreadTime()%60 == 0){
                     if(Dungeon.isStructure("IdalUpdate.json", this.x, this.y, this.z, 0, this.dimension)){
                         Mp.spawnParticle(ParticlesAPI.particles, this.x + Math.random()*3-Math.random()*2, this.y - 0.5, this.z + Math.random()*3-Math.random()*2, 0, Math.random()/9, 0);
                        Callback.invokeCallback("RitualDC", 0, "idal", {x: this.x, y: this.y, z: this.z});
 this.data.item.data++;
                         if(Math.random()<=0.00){
                             this.blockSource.setBlock(this.x+2, this.y+1, this.z+2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x + 2, this.y + 1, this.z + 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x-2, this.y+1, this.z+2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x - 2, this.y + 1, this.z + 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x+2, this.y+1, this.z-2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x + 2, this.y + 1, this.z - 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x-2, this.y+1, this.z-2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x - 2, this.y + 1, this.z - 2, 0, Math.random()/9, 0);
                         }
                    }
                }
            }
        }
    },
    destroyAnimation: function(){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    isItem: function(){
        if(!this.data.item) this.data.item = {id: 0, data: 0};
        if(!this.data.item.id) this.data.item.id = 0;
        if(!this.data.item.data) this.data.item.data = 0;
    },
    click: function(id, count, data, coords, player) {
        Game.prevent();
        this.isItem();
        if(this.data.item.id != 0){
            if(id != ItemID.RitualActivator)
                this.drop(player);
        }else{
            if(id != ItemID.RitualActivator){
                let item = Entity.getCarriedItem(player);
                delItem(player, {id:id,data:data,count:count}) ;
                let PA = new PlayerActor(player);
                if(PA.getGameMode() != 0){
                    for(var i in Idal.arr){
                        if(id == Idal.arr[i]){
                             Entity.setCarriedItem(player, item.id, item.count-1, item.data);
                        }
                    }
                }
                this.animation(item);
            }
        }
    },
    destroyBlock: function(coords, player){
        let PA = new PlayerActor(player);
        var B = new BlockSource.getDefaultForActor(player);
        if(PA.getGameMode() == 0){
            B.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
    }
});

let blockCoordsArr = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

Block.setRandomTickCallback(BlockID.paradiseGrass, function (x,y,z, id, data, region){
	let surfaceBlock = region.getBlockId(x, y+1, z)
	if(Block.isSolid(surfaceBlock)) region.setBlock(x,y,z,BlockID.paradiseDirt)
	for(let i = 0; i < 8;i++){
	let index = randomInt (0, 7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlock(xx,yy,zz)
    if((yy - y) <= 1 && (yy-y) >=-1){
    if(block.id == BlockID.paradiseDirt ){
region.setBlock(xx,yy,zz, id)
break
}
    else if(!Block.isSolid(block.id) && region.getBlockId(xx,yy-1,zz) == BlockID.paradiseDirt){
region.setBlock(xx,yy-1,zz,id)
break
}}
    }
})

Block.setRandomTickCallback(BlockID.crimsonGrass, function (x,y,z, id, data, region){
	let surfaceBlock = region.getBlockId(x, y+1, z)
	if(Block.isSolid(surfaceBlock)) region.setBlock(x,y,z,BlockID.crimsonDirt, data)
	else if(Math.random() > 0.4 && data<3) region.setBlock(x,y,z,id,data+1)
	for(let i = 0; i < 8;i++){
	let index = randomInt (0, 7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlock(xx,yy,zz)
    if((yy-y)<=1&&(y-yy)>=-1){
    if(block.id == BlockID.paradiseGrass){
region.setBlock(xx,yy,zz,id,0)
break
}
    else if(block.id == BlockID.crimsonDirt && block.data == data){ 
region.setBlock(xx,yy,zz, id, data)
    break
}
    else if(!Block.isSolid(block.id) && region.getBlockId(xx,yy-1,zz) == BlockID.paradiseGrass){
    region.setBlock(xx,yy-1,zz,id,0)
    break
    }
    else if(block.id == BlockID.paradiseDirt){
region.setBlock(xx,yy,zz,BlockID.crimsonDirt, 0)
break
}
       }
    }
})

Block.setRandomTickCallback(BlockID.paradiseDirt, function (x,y,z,id,data, region){
	if(Math.random()<0.1){
	let block = region.getBlockId(x,y+1,z)
	if(block == BlockID.crimsonGrass || block == BlockID.crimsonDirt)
	region.setBlock(x,y,z, BlockID.crimsonDirt)
	}
	})
	

Block.setRandomTickCallback(BlockID.crimsonDirt, function (x,y,z,id,data, region){
	if(Math.random()>0.7 && data < 3)
	region.setBlock(x,y,z,id,data+1)
	});

let foliageBlockCoords = [
[0,0,1],
[1,0,0],
[-1,0,0],
[0,0,-1],
[0,1,0],
[0,-1,0]
]
Block.setRandomTickCallback(BlockID.deadFoliage, function (x,y,z,id,data,region){
	for(let i = 0; i < 6; i++){
	let index = randomInt (0,5)
	let xx = x+foliageBlockCoords [index][0]
	let yy = y+foliageBlockCoords [index][1]
	let zz = z+foliageBlockCoords [index][2]
	if(region.getBlockId(xx,yy,zz) == BlockID.Foliage){
	region.setBlock(xx,yy,zz,id)
	break
}}});

var stories = {}

Saver.addSavesScope("stories",
    function read(scope) {
        stories = scope.stories || {};
    },
    function save() {
        return {
            stories: stories,
        };
    }
);

function Story(storyName){
this.name = storyName
if(!stories[this.name]){
stories[storyName] = {}
}
this.isCompletedStory = function(player, name){
	return stories [this.name][player][name]
	}
this.createEvent = function (name){
	var players = Network.getServer().getConnectedClients();
	if(!players.size()){
		let local = Player.get()
		if(!stories[this.name][local])
		stories[this.name][local] = {}
		if(!stories[this.name][local][name])
		stories[this.name][local][name] = false;
		}
	     for (let i = 0; i < players.size(); i++) {
		var player = players.get(i).getPlayerUid();
		if(!stories[this.name][player]){
		stories[this.name][player] = {}
		}
	if(!stories[this.name][player][name])
	stories[this.name][player][name] = false
}
}
this.completeStory = function(player, key){
	if(stories[this.name][player])
	stories[this.name][player][key] = true
	}
}
let wandererStory
Callback.addCallback("LevelLoaded", function (){
wandererStory = new Story("wandererStory");
wandererStory.createEvent("start")
wandererStory.createEvent("theFirstMeeting")
wandererStory.createEvent("theFirstMeeting2")
wandererStory.createEvent("theFirstMeeting3")
wandererStory.createEvent("giveStone")
wandererStory.createEvent("giveStone2")
wandererStory.createEvent("giveStone3")
wandererStory.createEvent("howToFix")
wandererStory.createEvent("howToFix2")
wandererStory.createEvent("howToFix3")
wandererStory.createEvent("platform")
})

Callback.addCallback("PlayerAttack", function(attacker, victim){
	if(Entity.getCompoundTag(victim).getString("identifier") == "test:man"){
	if(wandererStory.isCompletedStory(attacker, "start") && !wandererStory.isCompletedStory(attacker, "theFirstMeeting")){
      Mp.message(attacker, "[???]: Ай, кто это?")
	}
	else if(!wandererStory.isCompletedStory(attacker, "theFirstMeeting3")){
		wandererStory.completeStory(attacker,"theFirstMeeting3")
	Mp.message(attacker,"[???]: Все! Хватит!")
	let dialog = ["Меня зовут Dray", "Не мог бы ты помочь мне, найти один камень?", "Поможешь?    Класс!","Давай сначала я расскажу, что это вообще за камень...","Когда я был маленьким, я со своим братом играли на этой поляне", "Играя, мы надкнулись на кирпичное здание с сундуком", "В сундуке был синий камень. Мой брат решил взять его и отнести домой", "Прошло какое-то время", "Мой брат сделал из этого камня украшение", "Камень был действительно красивым...", "Одной ночью, мы вышли на охоту и по пути встретили здание, похоже на то, которое мы нашли в детстве", "Но зайдя внутрь, вместо сундука мы обнаружили...", "*Задумался*", "Это был какой-то синий алтарь, укутанный ярким светом", "Такого же цвета, что и камень моего брата", "Брат поднес свой камень, к этому алтарю и...", "Я его больше не видел", "Уже 12 лет, как его нет с нами", "Возможно, я его уже никогда не увижу", "Но я хотя бы буду знать, что произошло с ним в ту ночь", "Только с помощью этого камня, я узнаю, что произошло с моим братом 12 лет назад", "Я буду ждать тебя"]
	for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(attacker,"Dray: "+text)
			}, (1+i)*100)
		}
		setTimeout (function (){
			wandererStory.completeStory(attacker,"theFirstMeeting2")
			}, dialog.length*100)
	}
	wandererStory.completeStory(attacker,"theFirstMeeting")
	}
	})
	
Callback.addCallback("EntityInteract", function (entity, player, coords){
	if(Entity.getCompoundTag(entity).getString("identifier") == "test:man"){
		if(wandererStory.isCompletedStory(player, "theFirstMeeting2") && !wandererStory.isCompletedStory(player, "giveStone")){
			let item = Entity.getCarriedItem(player)
			if(item.id == ItemID.breakGem){
				Entity.setCarriedItem(player, 0, 0, 0)
				Entity.setCarriedItem(entity, ItemID.breakGem, 1, 0)
				let dialog = ["Хмм", "Да, это тот самый камень. Но...", "Кажется он давным-давно сломан", "Возможно я найду способ починить его", "Спасибо, возвращайся позже", "Возможно, тебе тоже, когда-нибудь, пригодится такой же камень"]
				for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		wandererStory.completeStory(player, "giveStone")
		setTimeout (function (){
			wandererStory.completeStory(player, "giveStone2")
			}, 8000)
		setTimeout (function (){
			wandererStory.completeStory(player, "giveStone3")
			Entity.setCarriedItem(entity, 0,0,0)
			}, dialog.length*110)
				}
			}
			else if(wandererStory.isCompletedStory(player, "theFirstMeeting2") && wandererStory.isCompletedStory(player, "giveStone3") && !wandererStory.isCompletedStory(player, "giveStone2")){
				Mp.message(player,"Я ещё не нашел способ починить камень, возвращайся позже")
			}
			else if(wandererStory.isCompletedStory(player, "giveStone2") && !wandererStory.isCompletedStory(player, "howToFix")) {
				let dialog = ["Привет", "Ты какраз вовремя", "Я долго изучал этот камень и заметил, что по структуре этот камень схож с алмазом", "Возможно, если как-то заполнить трещины, алмазной пылью, получится починить его!", "Полагаю, что одной алмазной пыли не достаточно, нужны хоть какие-то познания в магии", "Надо подучиться и поэкспериментировать", "Если у тебя все получится, дай знать!", "Удачи тебе в познании магии"]
	for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		setTimeout (function (){
			wandererStory.completeStory(player, "howToFix3")
			}, dialog.length*110)
		wandererStory.completeStory(player, "howToFix")
			}
		else if (wandererStory.isCompletedStory(player, "howToFix3") && !wandererStory.isCompletedStory(player, "howToFix2")){
			let item = Entity.getCarriedItem(player)
			if(item.id == ItemID.Gem){
				wandererStory.completeStory(player, "howToFix2")
				let dialog = ["О, это ты?", "Давно не виделись", "Вижу ты смог починить этот камень", "Я тоже! Вот, смотри", "Если хочешь посмотреть на камень в действии, тебе надо найти кирпичное здание с синим алтарем по центру", "Их ещё много осталось по миру", "Почти все алтари идеально сохранились", "Я уже побывал.. Ой, тоесть..., Я уже знаю что делает камень", "Не хочу портить тебе впечатление", "Когда найдешь алтарь, просто поднеси его к нему", "Спасибо тебе!", "Думаю на этом наши пути расходятся", "Вот держи это в качестве благодарности от меня"]
				for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		setTimeout (function (){
			Entity.setCarriedItem(entity, ItemID.Gem, 1, 0)
			}, 3*110)
		setTimeout (function (){
			Entity.setCarriedItem(entity, 0, 0, 0)
			}, 5*110)
		setTimeout (function (){
			(new PlayerActor (player)).addItemToInventory(ItemID.regularBag, Math.random()*15, 0, null, true)
			}, dialog.length * 110)
				}
			}
		}
	})
	
	Callback.addCallback("ServerPlayerTick", function (player){
		if(World.getThreadTime()%20==0){
		if(wandererStory.isCompletedStory(player, "theFirstMeeting") && !wandererStory.isCompletedStory(player, "howToFix2")){
		let ents = Entity.getAllInRange(Entity.getPosition(player), 10)
		for(let i in ents){
		let entity = ents[i]
		if(Entity.getCompoundTag(entity).getString("identifier") == "test:man"){
			Entity.addEffect(entity, 2, 100, 40, false, false)
			        }
		        }
			}
		}
	})

function getId(id){
        if(typeof id == "string")
            return BlockID[id];
        else
            return id;
}

function setStructure(name, x, y, z, region){
        region = region || BlockSource.getCurrentWorldGenRegion();
        let stru = FileTools.ReadJSON(__dir__+"/structure/"+name+".dc");
        for(let i in stru){
            region.setBlock(parseInt(stru[i][1].split(".")[1]) + x, parseInt(stru[i][1].split(".")[2]) + y, parseInt(stru[i][1].split(".")[3]) + z, new BlockState(getId(stru[i][0]), stru[i][2]));
     }
}

Callback.addCallback("ItemUse", function (c, i, b, is, p){
if(i.id == BlockID.electricFurnace && !wandererStory.isCompletedStory(p, "start")){
	let dimension = Entity.getDimension(p)
	for(let i = 0; i < 100; i++){
		let rx = randomInt (-100, 100)
		let rz = randomInt (-100, 100)
		if((rx > 30 || rx < -30) && (rz > 30 || rz < -30)){
			rx+=c.x
			rz+=c.z
			let y = GenerationUtils.findSurface(rx, c.y, rz).y;
			if(BlockSource.getDefaultForActor(p).getBlockId(rx,y,rz) == VanillaBlockID.grass){
			Game.message(rx+" "+y+" "+rz)
			BlockSource.getDefaultForActor(p). spawnEntity(rx,c.y+1,rz,'test:man')
		    setStructure("house", rx, y, rz, 0, dimension)
			wandererStory.completeStory(p, "start")
			break
                }
			}
		}
	}
})

let cleaning = false
let isDeads = []

Callback.addCallback("ServerPlayerTick", function (player, isDead){
	if(World.getThreadTime()%200 == 0 && ! cleaning && isDeads.indexOf(player) == -1){
		let pos = Entity.getPosition(player)
		let drops = Entity.getAllInRange(pos, 40)
		let dropss = []
		for(let i in drops){
			let drop = drops[i]
			if(Entity.getType(drop) == 64){
				dropss.push(drop)
				}
			}
			if(dropss.length > 10){
				cleaning = true
				Mp.message(player, "§cСлишком много дропа!!!")
				setTimeout (function (){
					Mp.message(player, "§eОтойдите, проводится очистка дропа")
				}, 60)
				let aro = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
				for(let s = 0; s <= 10; s++){
					let sec = aro[s]
					setTimeout (function (){
						Mp.tipMessage(player, "§bОсталось "+sec+" сек.")
				    }, 80 + (20 * s))
				}
				setTimeout (function (){
					for(let i in dropss){
						Entity.remove(dropss[i])
				        }
				Mp.message(player, "§aОчистка завершена!")
				cleaning = false
				}, 320)
			}
		}
	})
	
Callback.addCallback("EntityDeath", function (entity){
	if(Entity.getType(entity) == 63){
		isDeads.push(entity)
		Mp.message(entity, "§9Очистка дропа отключена")
		setTimeout (function (){
			isDeads.splice(isDeads.indexOf(entity), 1)
			Mp.message(entity, "§9Очистка дропа включена")
		}, 1000)
	}
})
	
