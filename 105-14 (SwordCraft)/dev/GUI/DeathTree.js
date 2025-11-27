IDRegistry.genItemID("SWdeaSap");
Item.createItem("SWdeaSap", "Сажанец мёртвого дерева", {name: "Dsap", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.SWdeaSap){ World.setBlock(coords.x,coords.y+1, coords.z, BlockID.sapDea, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genBlockID("DWwood");
Block.createBlock("DWwood", [ {name: "Древесина Мертвого Дерева", texture: [["DWwood", 1], ["DWwood", 1], ["DWwood", 0], ["DWwood", 0], ["DWwood", 0], ["DWwood", 0]], inCreative: true} ]);

IDRegistry.genItemID("DeathHeart");
Item.createItem("DeathHeart", "Сердце", {name: "DeathHeart", meta: 0});
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.DeathHeart&&block.id !==0&&hp <=70){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 

Recipes.addShaped({id:ItemID.DeathHeart, data:0, count:1}, ["ooo", "oxo", "ooo"], ['x', BlockID.Heart, 0,]);




IDRegistry.genBlockID("Heart"); 
Block.createBlock("Heart", [{name: "Сердце", texture: [["HeartonTree", 0]], inCreative: false}]);
function createHeartRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 0.6, 0.6, 0.6,  35, 14);
model.addBox (0, 0, 0, 0.4, 0.8, 0.4,  35, 14);
model.addBox (0, 0, 0, 0.4, 0.8, 0.4,  35, 14);

render.addEntry(model);
}
createHeartRender(BlockID.Heart, 35, 12);
Block.setBlockShape(BlockID.Heart, {x: 0, y: 0, z: 0}, {x: 0.6, y: 0.6, z: 0.6});
Block.registerDropFunction(BlockID.Heart, function(coords, blockID, blockData, level){
 if (level > 0){
  return [[DeathHeart, 1]]
 }
 return [];
});



IDRegistry.genBlockID("sapDea"); 
Block.createBlock("sapDea", [{name: "Сажанец мёртвого дерева", texture: [["stone", 0]], inCreative: false}]);

var renderSapDea = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.sapDea, 0, renderSapDea); 

var modelSapDea = BlockRenderer.createModel();



modelSapDea.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "DeaSap", 0);//полено1

modelSapDea.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "DeaSap", 0);//полено2

renderSapDea.addEntry(modelSapDea);

Block.setBlockShape(BlockID.sapDea, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});
var timer
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.SWdeaSap){
    timer=30
}});
Callback.addCallback("tick",function(item,block,coords){

if(timer==15){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.DWwood, 0);
}
});
Callback.addCallback("tick",function(item,block,coords){
if(timer==2){
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.DWwood, 0);
}});
