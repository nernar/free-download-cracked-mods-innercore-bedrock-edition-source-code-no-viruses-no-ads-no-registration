var phantom = new RenderMesh();
phantom.setBlockTexture("phantom4",0);
phantom.importFromFile(__dir__+"/models/phantom.obj","obj",null);
IDRegistry.genBlockID("phantom_boss_statue");
Block.createBlock("phantom_boss_statue", [
    {name: "phantom Statue", texture: [["phantom_boss_statue", 0],["phantom_boss_statue", 1],["phantom_boss_statue", 2],["phantom_boss_statue", 3],["phantom_boss_statue", 4],["phantom_boss_statue", 5]], inCreative: false}
]);
var phantom_model = new ICRender.Model();
phantom_model.addEntry(new BlockRenderer.Model(phantom));
BlockRenderer.setStaticICRender(BlockID.phantom_boss_statue,0,phantom_model);