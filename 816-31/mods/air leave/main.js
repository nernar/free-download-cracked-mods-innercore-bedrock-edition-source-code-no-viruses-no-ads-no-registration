const render = new ICRender.CollisionShape();
render.addEntry().addBox(1, 1, 1, 0, 0, 0);
for(let i = 16; i--;){
  BlockRenderer.setCustomCollisionShape(18, i, render);
  BlockRenderer.setCustomCollisionShape(161, i, render);
}
function setupLeavesModel(id, data){
BlockRenderer.setCustomCollisionShape(id, data, render);
}

ModAPI.registerAPI("AirLeaves", {
setupLeavesModel: setupLeavesModel
});

ModAPI.addAPICallback("ICore", function(){
	setupLeavesModel(BlockID.rubberTreeLeaves, -1);
});