IDRegistry.genItemID("pur");
Item.createItem("pur", "Пергамент", {name: "Pur", meta: 0}, {stack: 10});

IDRegistry.genBlockID("per"); 
Block.createBlock("per", [{name: "Пергамент со знаком", texture: [["Pura", 0]], inCreative: true}]);
function createPerRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0.01, 0, 1, 0.03, 1);
render.addEntry(model);
}
Block.setBlockShape(BlockID.per, {x: 0, y: 0, z: 0}, {x: 1, y: 0.03, z: 1});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.RukoyatE&&block.id==BlockID.per){ World.setBlock(coords.x,coords.y, coords.z, BlockID.ruk, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});