IDRegistry.genBlockID("venus_rock_0");
Block.createBlock("venus_rock_0",[{name: "Venus Rock 0", texture: [["Venus Rock 0", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 0",{
ru: "Горячий венерианский камень"
})

IDRegistry.genBlockID("venus_rock_0_slab");
Block.createBlockWithRotation("venus_rock_0_slab",[{name: "Venus Rock 0 Slab", texture: [["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0],["Venus Rock 0", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 0 Slab",{
ru: "Плита из горячего венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_0_slab, BlockID.venus_rock_0);

/*
IDRegistry.genBlockID("venus_rock_0_stairs");
Block.createBlockWithRotation("venus_rock_0_stairs",[{name: "Venus Rock 0 Stairs", texture: [["Venus Rock 0", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 0 Stairs",{
ru: "Ступеньки из горячего венерианского камня"
})
*/

/*IDRegistry.genBlockID("venus_rock_1_stairs");
Block.createBlockWithRotation("venus_rock_1_stairs",[{name: "Venus Rock 1 Stairs", texture: [["Venus Rock 1", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 1 Stairs",{
ru: "Ступеньки из твёрдого венерианского камня"
})

IDRegistry.genBlockID("venus_rock_2_stairs");
Block.createBlockWithRotation("venus_rock_2_stairs",[{name: "Venus Rock 2 Stairs", texture: [["Venus Rock 2", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Venus Rock 2 Stairs",{
ru: "Ступеньки из вулканического венерианского камня"
})*/

IDRegistry.genBlockID("venus_rock_0_fence");
Block.createBlock("venus_rock_0_fence",[{name: "Venus Rock 0 Fence", texture: [["Venus Rock 0", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 0 Fence",{
ru: "Забор из горячего венерианского камня"
})

IDRegistry.genBlockID("venus_rock_1_fence");
Block.createBlock("venus_rock_1_fence",[{name: "Venus Rock 1 Fence", texture: [["Venus Rock 1", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 1 Fence",{
ru: "Забор из твёрдого венерианского камня"
})

IDRegistry.genBlockID("venus_rock_2_fence");
Block.createBlock("venus_rock_2_fence",[{name: "Venus Rock 2 Fence", texture: [["Venus Rock 2", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Venus Rock 2 Fence",{
ru: "Забор из вулканического венерианского камня"
})

IDRegistry.genBlockID("venus_rock_1");
Block.createBlock("venus_rock_1",[{name: "Venus Rock venus_rock_1", texture: [["Venus Rock 1", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 1",{
ru: "Твёрдый венерианский камень"
})

IDRegistry.genBlockID("venus_rock_2");
Block.createBlock("venus_rock_2",[{name: "Venus Rock 2", texture: [["Venus Rock 2", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 2",{
ru: "Вулканический венерианский камень"
})



IDRegistry.genBlockID("venus_rock_1_slab");
Block.createBlock("venus_rock_1_slab",[{name: "Venus Rock 1 Slab", texture: [["Venus Rock 1", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 1 Slab",{
ru: "Плита из твёрдого венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_1_slab, BlockID.venus_rock_1);

TileRenderer.makeSlab(BlockID.venus_rock_0_slab, BlockID.venus_rock_0);

IDRegistry.genBlockID("venus_rock_2_slab");
Block.createBlock("venus_rock_2_slab",[{name: "Venus Rock 2 Slab", texture: [["Venus Rock 2", 0]], inCreative: true} ]);
Translation.addTranslation("Venus Rock 2 Slab",{
ru: "Плита из твёрдого венерианского камня"
})

TileRenderer.makeSlab(BlockID.venus_rock_2_slab, BlockID.venus_rock_2);


var Venusmesh = new RenderMesh(); 
Venusmesh.setBlockTexture("VenusT",0); 
Venusmesh.importFromFile(__dir__+"/models/Venus.obj","obj",null); 
IDRegistry.genBlockID("charged_venus"); 
Block.createBlock("charged_venus", [ 
 {name: "A little Venus", texture: [["VenusT", 0],["VenusT", 1],["VenusT", 2],["VenusT", 3],["VenusT", 4],["VenusT", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Venus",{
ru: "< Венера >"
});
var Venusrender = new ICRender.Model(); 
Venusrender.addEntry(new BlockRenderer.Model(Venusmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_venus,0,Venusrender);