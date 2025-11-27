var Altamesh = new RenderMesh();
Altamesh.setBlockTexture("altarent",0);
Altamesh.importFromFile(__dir__+"/models/Altar.obj","obj",null);
IDRegistry.genBlockID("AltarAether");
Block.createBlock("AltarAether", [
    {name: "Altar", texture: [["altar", 0],["altar", 1],["altar", 2],["altar", 3],["altar", 4],["altar", 5]], inCreative: true}
]);
var Altarender = new ICRender.Model();
Altarender.addEntry(new BlockRenderer.Model(Altamesh));
BlockRenderer.setStaticICRender(BlockID.AltarAether,0,Altarender);

Recipes.addShaped({id: BlockID.AltarAether, count: 1, data: 0}, [
    "###",
    "#s#",
    "###"
], ['s', ItemID.zaniteGemstone, 0, '#', BlockID.Holystone, 0 ]);