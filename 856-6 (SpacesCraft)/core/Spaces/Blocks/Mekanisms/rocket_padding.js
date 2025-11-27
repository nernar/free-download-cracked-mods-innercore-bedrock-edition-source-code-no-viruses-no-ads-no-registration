var Landingmesh = new RenderMesh(); 
Landingmesh.setBlockTexture("PadNormal",0); 
Landingmesh.importFromFile(__dir__+"/models/1padNormal.obj","obj",null); 
IDRegistry.genBlockID("Pad_Normal"); 
Block.createBlock("Pad_Normal", [ 
 {name: "Padding Rocket", texture: [["PadNormal", 0],["PadNormal", 1],["PadNormal", 2],["PadNormal", 3],["PadNormal", 4],["PadNormal", 5]], inCreative: true} 
]); 
var Landingrender = new ICRender.Model(); 
Landingrender.addEntry(new BlockRenderer.Model(Landingmesh)); 
BlockRenderer.setStaticICRender(BlockID.Pad_Normal,0,Landingrender);
var Padding1lvl = new ICRender.CollisionShape();
var entry = Padding1lvl.addEntry();
entry.addBox( 1, 1, 1, 0.5,0.5, 0.5) 
BlockRenderer.setCustomCollisionShape(BlockID.Pad_Normal, -1,Padding1lvl)


/*var createPaddings = {}
createPaddings.spawn1Pad = function spawnPad(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z)==BlockID.Pad_Normal && region.getBlockId(place.x,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-1)==BlockID.Pad_Normal && region.getBlockId(place.x,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-1,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-2)==BlockID.Pad_Normal && region.getBlockId(place.x-2,place.y-1,place.z-1)==BlockID.Pad_Normal){ 
        region.setBlock(place.x, place.y, place.z, BlockID.Padding1lvl);}}
        
Block.registerPlaceFunction("Pad_Normal", function(coords, item, block, player){
	createPaddings.spawn1Pad()
});*/
	

var Landing1mesh = new RenderMesh(); 
Landing1mesh.setBlockTexture("Padding",0); 
Landing1mesh.importFromFile(__dir__+"/models/1padDing.obj","obj",null); 
IDRegistry.genBlockID("Padding1lvl"); 
Block.createBlock("Padding1lvl", [ 
 {name: "Padding of Rocket", texture: [["Padding", 0],["Padding", 1],["Padding", 2],["Padding", 3],["Padding", 4],["Padding", 5]], inCreative: true} 
]); 
var Landing1render = new ICRender.Model(); 
Landing1render.addEntry(new BlockRenderer.Model(Landing1mesh)); 
BlockRenderer.setStaticICRender(BlockID.Padding1lvl,0,Landing1render);
var Padding1lvll = new ICRender.CollisionShape();
var entry = Padding1lvll.addEntry();
entry.addBox( 1, 1, 1, 0.5,0.5, 0.5) 
BlockRenderer.setCustomCollisionShape(BlockID.Padding1lvl, -1,Padding1lvll)


﻿IDRegistry.genItemID("padding"); 
Item.createItem("padding", "Padding 1 tier", {name: "padding", meta: 0}, {stack: 1, inCreative:false});
IAHelper.makeAdvancedAnim(ItemID.padding, "padding", 1, [1, 1, 1,1 , 1, 2, 2, 2, 2, 2 , 2, 3 ,3 ,3 ,3 ,3 ,3 ,3]);
Translation.addTranslation("Padding 1 tier", {
ru: "Площадка 1го уровня"
});
//{getFor(ItemID.padding, 0): "1padNormal";}