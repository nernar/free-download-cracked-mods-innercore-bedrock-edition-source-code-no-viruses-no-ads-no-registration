var Meggmesh = new RenderMesh();
Meggmesh.setBlockTexture("moa_egg",0);
Meggmesh.importFromFile(__dir__+"/models/moa_egg.obj","obj",{translate: [.5, 0, .5]});
IDRegistry.genBlockID("MoaEgg");
Block.createBlock("MoaEgg", [
    {name: "Moa Egg", texture: [["moa_egg", 0]], inCreative: true}
]);
var Meggrender = new ICRender.Model();
Meggrender.addEntry(new BlockRenderer.Model(Meggmesh));
BlockRenderer.setStaticICRender(BlockID.MoaEgg,0,Meggrender);

Block.registerDropFunction("MoaEgg", function(coords, blockID){
    return [[ItemID.moaEgg, 1, 0]] 
});