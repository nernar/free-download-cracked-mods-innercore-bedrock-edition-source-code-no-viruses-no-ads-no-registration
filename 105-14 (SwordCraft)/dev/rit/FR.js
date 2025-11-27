IDRegistry.genItemID("firain");
Item.createItem("firain", "Огненный дождь", {name: "fir", meta: 0}, {stack: 1});

IDRegistry.genItemID("mystbum");
Item.createItem("mystbum", "Странная бумага", {name: "Bum", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mystbum, count: 1, data: 0}, [
"b b",
" a ",
"b b"
], ['a', 339, 0, 'b', 377, 0]);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.mystbum&&block.id==BlockID.per){ World.setBlock(coords.x,coords.y, coords.z, BlockID.bumAga, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.firain){
Player.decreaseCarriedItem(1);

var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.09, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.09, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.09, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.09, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.09, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.09, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.09, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.09, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.09, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.09, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.09, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.09, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.09, 0);

}});





IDRegistry.genBlockID("bumAga"); 
Block.createBlock("bumAga", [{name: "буГаГа", texture: [["stone", 0]], inCreative: false}]);
Block.registerDropFunction("bumAga", function(coords, id, data, diggingLevel, toolLevel){ 
(coords.x,coords.y, coords.z, 0);  [0, 0, 0];});

function getBumModel() { var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.9, 0.1, 0.9, "Pura", 0);
model.addBox (0, 0.11, 0, 1, 0.12, 1, "Bum", 0);
return model;
}
var Bum = new ICRender.Model(); 
var model = getBumModel()
Bum.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.bumAga, -1, Bum);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.OgonKu&&block.id==BlockID.bumAga){
Player.decreaseCarriedItem(1);

var en = Entity.spawn(coords.x, coords.y, coords.z, 93);

var n = Entity.spawn(coords.x, coords.y, coords.z, 93); 

var e = Entity.spawn(coords.x, coords.y, coords.z, 93);
Player.addItemToInventory (ItemID.firain, 1, 0);


World.setBlock(coords.x,coords.y, coords.z, BlockID.per, 0);
}});




