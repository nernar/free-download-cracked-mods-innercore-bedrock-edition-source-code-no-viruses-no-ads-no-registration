IDRegistry.genBlockID("Portalslab"); 
  Block.createBlock("Portalslab", [{name: "Portal slab", texture: [["portal", 0], ["portal", 0], ["portal", 0], ["portal", 0], ["portal", 0], ["portal", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.Portalslab, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genItemID("3Dglasses");

Item.createArmorItem("3Dglasses", "3Dglasses", {name: "3Dglasses"}, {type: "helmet", armor: 2, durability: 50, texture: "armor/3D.png"});


IDRegistry.genItemID("Blob");
Item.createThrowableItem("Blob", "Blob", {name: "Blob", meta: 0}, {stack: 1}, {damage: 5});

IDRegistry.genBlockID("Oldchest"); 
  Block.createBlockWithRotation("Oldchest", [{name: "Old chest", texture: [["chest_top", 0], ["chest_top", 0], ["chest_side", 0], ["chest_front", 0], ["chest_side", 0], ["chest_side", 0]], inCreative: true}]);

var Oldchest_ui=new UI.StandartWindow({standart:{header:{text:{text:"Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",
x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50}}});TileEntity.registerPrototype(BlockID.Oldchest,{getGuiScreen:function(){return Oldchest_ui}});

IDRegistry.genBlockID("OldBuildAllow");
Block.createBlock("OldBuildAllow", [{name: "Old Build Allow Block", texture: [["build_allow", 0], ["build_allow", 0], ["build_allow", 0], ["build_allow", 0], ["build_allow", 0], ["build_allow", 0]], inCreative: true}]);

IDRegistry.genBlockID("OldBuildDeny");
Block.createBlock("OldBuildDeny", [{name: "Old Build Deny Block", texture: [["build_deny", 0], ["build_deny", 0], ["build_deny", 0], ["build_deny", 0], ["build_deny", 0], ["build_deny", 0]], inCreative: true}]);

IMPORT("BackpackAPI", "BackpackRegistry");

IDRegistry.genItemID("quiver");
Item.createItem("quiver", "Quiver", {name: "quiver", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.quiver, {
    slots: 4,
    slotsCenter: true,
    inRow: 9
});

IDRegistry.genBlockID("oldrose"); 
  Block.createBlock("oldrose", [{name: "Rose Flower", texture: [["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "rose", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "rose", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.oldrose, -1, render);
Block.setBlockShape(BlockID.oldrose, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.oldrose, 0);
}}});

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 10,
	explosionres: 5
}, "stone");



IDRegistry.genBlockID("Ruby_ore");
Block.createBlock("Ruby_ore", [
	{name: "Ruby ore", texture: [["Ruby_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.Ruby_ore, "stone", 3, true);



Block.registerDropFunction("Ruby_ore", function(coords, blockID, blockData, level, enchant){ 	          if(level > 2){ 		
if(enchant.silk){ 			
return [[BlockID.Ruby, 1, 0]]; 		
} 		
ToolAPI.dropOreExp(coords, 3, 7, enchant.experience); 		
return [[BlockID.Ruby, 1, 0]] 	} 	
return []; 
}, 3);


IDRegistry.genItemID("Ruby");
Item.createItem("Ruby", "Ruby", {name: "Ruby", meta: 1}, {stack: 64});
IDRegistry.genBlockID("oldgrass"); 
  Block.createBlock("oldgrass", [{name: "Old Grass", texture: [["oldgrassbottom", 0], ["oldgrasstop", 0], ["oldgrassside", 0], ["oldgrassside", 0], ["oldgrassside", 0], ["oldgrassside", 0]], inCreative: true}]);

IDRegistry.genBlockID("oldgravel"); 
  Block.createBlock("oldgravel", [{name: "Old Gravel", texture: [["oldgravel", 0], ["oldgravel", 0], ["oldgravel", 0], ["oldgravel", 0], ["oldgravel", 0], ["oldgravel", 0]], inCreative: true}]);


IDRegistry.genBlockID("cyan_flower"); 
  Block.createBlock("cyan_flower", [{name: "Cyan Flower", texture: [["cyan_flower", 0], ["cyan_flower", 0], ["cyan_flower", 0], ["cyan_flower", 0], ["cyan_flower", 0], ["cyan_flower", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cyan_flower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cyan_flower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cyan_flower, -1, render);
Block.setBlockShape(BlockID.cyan_flower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.cyan_flower, 0);
}}});

IDRegistry.genBlockID("oldbrick"); 
  Block.createBlock("oldbrick", [{name: "Old Brick", texture: [["oldbrick", 0], ["oldbrick", 0], ["oldbrick", 0], ["oldbrick", 0], ["oldbrick", 0], ["oldbrick", 0]], inCreative: true}]);

IDRegistry.genBlockID("lapisobsidian"); 
  Block.createBlock("lapisobsidian", [{name: "Obsidian with lapis-lazuli", texture: [["lapisobsidian", 0], ["lapisobsidian", 0], ["lapisobsidian", 0], ["lapisobsidian", 0], ["lapisobsidian", 0], ["lapisobsidian", 0]], inCreative: true}]);


IDRegistry.genBlockID("oldcobblestone"); 
  Block.createBlock("oldcobblestone", [{name: "Old Cobblestone", texture: [["oldcobblestone", 0], ["oldcobblestone", 0], ["oldcobblestone", 0], ["oldcobblestone", 0], ["oldcobblestone", 0], ["oldcobblestone", 0]], inCreative: true}]);

IDRegistry.genBlockID("Paeonia"); 
  Block.createBlock("Paeonia", [{name: "Paeonia", texture: [["Paeonia", 0], ["Paeonia", 0], ["Paeonia", 0], ["Paeonia", 0], ["Paeonia", 0], ["Paeonia", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "Paeonia", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "Paeonia", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.Paeonia, -1, render);
Block.setBlockShape(BlockID.Paeonia, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.Paeonia, 0);
}}});

IDRegistry.genBlockID("RubyBlock"); 
  Block.createBlock("RubyBlock", [{name: "Block of ruby", texture: [["RubyBlock", 0]], inCreative: true}]);

IDRegistry.genBlockID("lavaplate"); 
  Block.createBlock("lavaplate", [{name: "Lava Plate", texture: [["lava", 0], ["lava", 0], ["lava", 0], ["lava", 0], ["lava", 0], ["lava", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.lavaplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genBlockID("pilar1"); 
  Block.createBlock("pilar1", [{name: "pilar 1", texture: [["p0", 0], ["p0", 0], ["p1", 1]], inCreative: true}]);

IDRegistry.genBlockID("pilar2"); 
  Block.createBlock("pilar2", [{name: "marble pilar 2", texture: [["p0", 0], ["p0", 0], ["p1", 2]], inCreative: true}]);

IDRegistry.genBlockID("pilar3"); 
  Block.createBlock("pilar3", [{name: "marble pilar 3", texture: [["p0", 0], ["p0", 0], ["p2", 0]], inCreative: true}]);

IDRegistry.genBlockID("pilar4"); 
  Block.createBlock("pilar4", [{name: "marble pilar 4", texture: [["p0", 0], ["p0", 0], ["p3", 0]], inCreative: true}]);

IDRegistry.genBlockID("pilar5"); 
  Block.createBlock("pilar5", [{name: "marble pilar 5", texture: [["p0", 0], ["p0", 0], ["p3", 1]], inCreative: true}]);


IDRegistry.genBlockID("Reactor1"); 
  Block.createBlock("Reactor1", [{name: "Reactor Step 1", texture: [["reactor", 0]], inCreative: true}]);

IDRegistry.genBlockID("Reactor2"); 
  Block.createBlock("Reactor2", [{name: "Reactor Step 2", texture: [["reactor", 1]], inCreative: true}]);

IDRegistry.genBlockID("Reactor3"); 
  Block.createBlock("Reactor3", [{name: "Reactor Step 3", texture: [["reactor", 2]], inCreative: true}]);

IDRegistry.genBlockID("FullStoneSlab"); 
  Block.createBlock("FullStoneSlab", [{name: "Full Stone Slab", texture: [["stone_slab", 0]], inCreative: true}]);

IDRegistry.genBlockID("FullSandstoneSlab"); 
  Block.createBlock("FullSandstoneSlab", [{name: "Full Sandstone Slab", texture: [["sandstone_slab", 0]], inCreative: true}]);

IDRegistry.genBlockID("fullquartz_slab"); 
  Block.createBlock("fullquartz_slab", [{name: "Full Quartz Slab", texture: [["quartz_slab", 0]], inCreative: true}]);

IDRegistry.genBlockID("Dirtslab"); 
  Block.createBlock("Dirtslab", [{name: "Dirt slab", texture: [["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.Dirtslab, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});


IDRegistry.genBlockID("stripped_acacia_log"); 
  Block.createBlock("stripped_acacia_log", [{name: "stripped acacia log", texture: [["stripped_acacia_log_top", 0], ["stripped_acacia_log_top", 0], ["stripped_acacia_log", 0], ["stripped_acacia_log", 0], ["stripped_acacia_log", 0], ["stripped_acacia_log", 0]], inCreative: true}]);


IDRegistry.genBlockID("stripped_birch_log"); 
  Block.createBlock("stripped_birch_log", [{name: "stripped birch log", texture: [["stripped_birch_log_top", 0], ["stripped_birch_log_top", 0], ["stripped_birch_log", 0], ["stripped_birch_log", 0], ["stripped_birch_log", 0], ["stripped_birch_log", 0]], inCreative: true}]);


IDRegistry.genBlockID("stripped_dark_oak_log"); 
  Block.createBlock("stripped_dark_oak_log", [{name: "stripped dark oak log", texture: [["stripped_dark_oak_log_top", 0], ["stripped_dark_oak_log_top", 0], ["stripped_dark_oak_log", 0], ["stripped_dark_oak_log", 0], ["stripped_dark_oak_log", 0], ["stripped_dark_oak_log", 0]], inCreative: true}]);


IDRegistry.genBlockID("stripped_jungle_log"); 
  Block.createBlock("stripped_jungle_log", [{name: "stripped jungle log", texture: [["stripped_jungle_log_top", 0], ["stripped_jungle_log_top", 0], ["stripped_jungle_log", 0], ["stripped_jungle_log", 0], ["stripped_jungle_log", 0], ["stripped_jungle_log", 0]], inCreative: true}]);


IDRegistry.genBlockID("stripped_oak_log"); 
  Block.createBlock("stripped_oak_log", [{name: "stripped oak log", texture: [["stripped_oak_log_top", 0], ["stripped_oak_log_top", 0], ["stripped_oak_log", 0], ["stripped_oak_log", 0], ["stripped_oak_log", 0], ["stripped_oak_log", 0]], inCreative: true}]);

IDRegistry.genBlockID("stripped_spruce_log"); 
  Block.createBlock("stripped_spruce_log", [{name: "stripped spruce log", texture: [["stripped_spruce_log_top", 0], ["stripped_spruce_log_top", 0], ["stripped_spruce_log", 0], ["stripped_spruce_log", 0], ["stripped_spruce_log", 0], ["stripped_spruce_log", 0]], inCreative: true}]);

IDRegistry.genBlockID("marblebrick"); 
  Block.createBlock("marblebrick", [{name: "marble brick", texture: [["marblebrick-top", 0], ["marblebrick-top", 0], ["marblebrick", 0], ["marblebrick", 0], ["marblebrick", 0], ["marblebrick", 0]], inCreative: true}]);

IDRegistry.genBlockID("marble"); 
  Block.createBlock("marble", [{name: "marble", texture: [["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0]], inCreative: true}]);


IDRegistry.genBlockID("marbleclassicpanel"); 
  Block.createBlock("marbleclassicpanel", [{name: "marble classic panel", texture: [["marbleclassicpanel", 0], ["marbleclassicpanel", 0], ["marbleclassicpanel", 0], ["marbleclassicpanel", 0], ["marbleclassicpanel", 0], ["marbleclassicpanel", 0]], inCreative: true}]);

IDRegistry.genItemID("zombiepure");
Item.createFoodItem("zombiepure", "pure zombie food", {name: "zombiepure", meta: 0}, {stack: 64}, {isTech: false},{food: 1});

IDRegistry.genBlockID("Compagnioncube"); 
  Block.createBlock("Compagnioncube", [{name: "Compagnion cube", texture: [["companion cube v2", 0]], inCreative: true}]);

IDRegistry.genBlockID("flowing_lava"); 
  Block.createBlock("flowing_lava", [{name: "flowing lava block ", texture: [["flowing_lava", 0]], inCreative: true}]);

IDRegistry.genBlockID("still_lava"); 
  Block.createBlock("still_lava", [{name: "still lava block ", texture: [["still_lava", 0]], inCreative: true}]);

IDRegistry.genBlockID("Compagnioncubep2"); 
  Block.createBlock("Compagnioncubep2", [{name: "Compagnion cube portal 2", texture: [["companion cube p2", 0]], inCreative: true}]);

