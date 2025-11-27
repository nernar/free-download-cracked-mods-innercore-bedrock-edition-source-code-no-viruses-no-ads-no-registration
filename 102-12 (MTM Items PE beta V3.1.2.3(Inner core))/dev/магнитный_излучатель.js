function createAeRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 2/16, 4/16, 1/16, 14/16, 15/16,  35, 7);
render.addEntry(model);
}
createAeRender(2, 2, 0)