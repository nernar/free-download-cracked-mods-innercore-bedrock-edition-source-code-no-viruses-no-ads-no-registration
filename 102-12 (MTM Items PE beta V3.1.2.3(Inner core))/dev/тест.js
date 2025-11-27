IDRegistry.genBlockID("kp");
Block.createBlock("kp", [
{name: "кирпичная печь", texture: [["rndBoxw", 0], ["rndBoxw", 0], ["rndBoxb", 0],["rndBoxb", 0], ["rndBoxb", 0], ["rndBoxb", 0]], inCreative: true}], BLOCK_TYPE_WOOD);

function createLRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0, 0, 0, 1, 1, 1,  45,0);
model.addBox (-1/32, 1/16, 0, 0, 4/16, 2/16,  45,0);
model.addBox (-1/32, 3/16, 0, 0, 4/16, 3/16,  45,0);
model.addBox (-1/32, 5/16, 0, 0, 8/16, 3/16,  45,0);
model.addBox (-1/32, 9/16, 0, 0, 12/16, 3/16,  45,0);
model.addBox (-1/32, 11/16, 3/16, 0, 12/16, 4/16,  45,0);
model.addBox (-1/32, 13/16, 0, 0, 1, 3/16,  45,0);
model.addBox (-1/32, 13/16, 4/16, 0, 1, 11/16,  45,0);
model.addBox (-1/32, 13/16, 12/16, 0, 1, 1,  45,0);
model.addBox (-1/32, 5/16, 12/16, 0, 8/16, 1,  45,0);
model.addBox (-1/32, 1/16, 13/16, 0, 4/16, 15/16,  45,0);
model.addBox (-1/32, 9/16, 13/16, 0, 12/16, 15/16,  45,0);
model.addBox (-1/32, 6/16, 4/16, 0, 7/16, 11/16,  45,0);
model.addBox (-1/32, 5/16, 4/16, 0, 6/16, 6/16,  45,0);
model.addBox (-1/32, 5/16, 9/16, 0, 6/16, 11/16,  45,0);
render.addEntry(model);
}

createLRender(BlockID.kp, 35, 12);