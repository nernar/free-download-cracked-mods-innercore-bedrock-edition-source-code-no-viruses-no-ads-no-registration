IDRegistry.genBlockID("lunar_stone");
Block.createBlock("lunar_stone",[{name: "Lunar Stone", texture: [["Lunar Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Stone",{
ru: "Лунный камень"
})

IDRegistry.genBlockID("lunar_stone_slab");
Block.createBlock("lunar_stone_slab",[{name: "Lunar Stone Slab", texture: [["Lunar Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Stone Slab",{
ru: "Плита из лунного камня"
})


TileRenderer.makeSlab(BlockID.lunar_stone_slab, BlockID.lunar_stone);
/*
IDRegistry.genBlockID("lunar_stone_stairs");
Block.createBlockWithRotation("lunar_stone_stairs",[{name: "Lunar Stone Stairs", texture: [["Lunar Stone", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Stone Stairs",{
ru: "Лунно-каменные ступеньки"
})*/


IDRegistry.genBlockID("lunar_middle");
Block.createBlock("lunar_middle",[{name: "Lunar Dirt", texture: [["Middle", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Dirt",{
ru: "Лунная почва"
})

IDRegistry.genBlockID("lunar_middle_slab");
Block.createBlock("lunar_middle_slab",[{name: "Lunar Dirt Slab", texture: [["Middle", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Dirt Slab",{
ru: "Плита из лунной почвы"
})

TileRenderer.makeSlab(BlockID.lunar_middle_slab, BlockID.lunar_middle);

/*
IDRegistry.genBlockID("lunar_middle_stairs");
Block.createBlockWithRotation("lunar_middle_stairs",[{name: "Lunar Dirt Stairs", texture: [["Middle", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Dirt Stairs",{
ru: "Ступеньки из лунной почвы"
})
*/
var moonmesh = new RenderMesh(); 
moonmesh.setBlockTexture("Lunar",0); 
moonmesh.importFromFile(__dir__+"/models/luna.obj","obj",null); 
IDRegistry.genBlockID("charged_moon"); 
Block.createBlock("charged_moon", [ 
 {name: "A little Moon", texture: [["Lunar", 0],["Lunar", 1],["Lunar", 2],["Lunar", 3],["Lunar", 4],["Lunar", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Moon",{
ru: "< Луна >"
});
var moonrender = new ICRender.Model(); 
moonrender.addEntry(new BlockRenderer.Model(moonmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_moon,0,moonrender);

IDRegistry.genBlockID("moon_top_side");
Block.createBlock("moon_top_side",[{name: "Lunar Top Side", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Top Side",{
ru: "Лунный грунт"
})

IDRegistry.genBlockID("moon_top_side_slab");
Block.createBlock("moon_top_side_slab",[{name: "Lunar Top Side Slab", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ]);
Translation.addTranslation("Lunar Top Side Slab",{
ru: "Плита из лунного грунта"
})


IDRegistry.genBlockID("moon_top_side_stairs");
Block.createBlockWithRotation("moon_top_side_stairs",[{name: "Lunar Top Side Stairs", texture: [["Top Side", 0],["Top", 0],["Top Side", 0],["Top", 0],["Top Side", 0],["Top Side", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Lunar Top Side Stairs",{
ru: "Ступеньки из лунного грунта"
})

TileRenderer.makeSlab(BlockID.moon_top_side_slab, BlockID.moon_top_side);