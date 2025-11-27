IDRegistry.genBlockID("stoli"); 
Block.createBlock("stoli", [{name: "Стол", texture: [["stoli", 0]], inCreative: false}]);
function getStolModel() { var model = BlockRenderer.createModel();
model.addBox (0.1, 0, 0.1, 0.8, 0.3, 0.8,  "stone", 0);
model.addBox (0.3, 0.3, 0.3, 0.6, 0.7, 0.6,  "stone", 0);
model.addBox (0, 0.7, 0, 1, 1, 1,  "stone", 0);
return model;
}
var Stol = new ICRender.Model(); 
var model = getStolModel()
Stol.addEntry(model);
BlockRenderer.enableCoordMapping(BlockID.stoli, -1, Stol);

IDRegistry.genItemID("St");
Item.createItem("St", "Стол", {name: "St", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.St){ World.setBlock(coords.x,coords.y+1, coords.z, BlockID.stoli, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});