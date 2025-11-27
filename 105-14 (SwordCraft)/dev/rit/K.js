IDRegistry.genBlockID("ruk"); 
Block.createBlock("ruk", [{name: "Рукоять", texture: [["stone", 0]], inCreative: false}]);
Block.registerDropFunction("ruk", function(coords, id, data, diggingLevel, toolLevel){ 
(coords.x,coords.y, coords.z, 0);  [0, 0, 0];});

function getRpModel() { var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.9, 0.1, 0.9, "Pura", 0);
model.addBox (0, 0.11, 0, 1, 0.12, 1, "ruk", 0);
return model;
}
var Rp = new ICRender.Model(); 
var model = getRpModel()
Rp.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.ruk, -1, Rp);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.OgonKu&&block.id==BlockID.ruk){
Player.decreaseCarriedItem(1);

var ent = Entity.spawn(coords.x+1, coords.y+10, coords.z-1, 94); 
Entity.setVelocity(ent, 0, -0.09, 0);

var et = Entity.spawn(coords.x-1, coords.y+10, coords.z-1, 94); 
Entity.setVelocity(et, 0, -0.09, 0);

var en = Entity.spawn(coords.x+1, coords.y+10, coords.z+1, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var en = Entity.spawn(coords.x-1, coords.y+10, coords.z+1, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var n = Entity.spawn(coords.x, coords.y+20, coords.z-3, 85); 
Entity.setVelocity(n, 0, -0.09, 0);

Player.addItemToInventory (ItemID.PhSw, 1, 0);
World.setBlock(coords.x,coords.y, coords.z, BlockID.per, 0);
}});




