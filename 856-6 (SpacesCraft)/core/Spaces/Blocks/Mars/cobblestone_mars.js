IDRegistry.genBlockID("cobblestone_mars");
Block.createBlock("cobblestone_mars",[{name: "The Martian Cobblestone", texture: [["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone",{
ru: "Марсианский булыжник"
})

/*IDRegistry.genBlockID("cobblestone_mars_slab");
Block.createBlock("cobblestone_mars_slab",[{name: "The Martian Cobblestone Slab", texture: [["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0],["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone Slab",{
ru: "Плита из Марсианского булыжника"
})

TileRenderer.makeSlab(BlockID.cobblestone_mars_slab, BlockID.cobblestone_mars);*/

/*

IDRegistry.genBlockID("cobblestone_mars_stairs");
Block.createBlockWithRotation("cobblestone_mars_stairs",[{name: "The Martian Cobblestone Stairs", texture: [["Cobblestone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Cobblestone Stairs",{
ru: "Ступеньки из марсианского булыжника"
})
*/
IDRegistry.genBlockID("dense_ice");
Block.createBlock("dense_ice",[{name: "Dense Ice", texture: [["Dense Ice", 0]], inCreative: true} ]);
Translation.addTranslation("Dense Ice",{
ru: "Плотный лёд"
})

var marsmesh = new RenderMesh(); 
marsmesh.setBlockTexture("Mars",0); 
marsmesh.importFromFile(__dir__+"/models/mars.obj","obj",null); 
IDRegistry.genBlockID("charged_mars"); 
Block.createBlock("charged_mars", [ 
 {name: "A little Mars", texture: [["Mars", 0],["Mars", 1],["Mars", 2],["Mars", 3],["Mars", 4],["Mars", 5]], inCreative: true} 
]); 
Translation.addTranslation("A little Mars",{
ru: "< Марс >"
});
var marsrender = new ICRender.Model(); 
marsrender.addEntry(new BlockRenderer.Model(marsmesh)); 
BlockRenderer.setStaticICRender(BlockID.charged_mars,0,marsrender);

IDRegistry.genBlockID("mars_stone");
Block.createBlock("mars_stone",[{name: "The Martian Stone", texture: [["Bottom Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Stone",{
ru: "Марсианский камень"
})
/*
IDRegistry.genBlockID("mars_stone_stairs");
Block.createBlockWithRotation("mars_stone_stairs",[{name: "The Martian Stone Stairs", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("The Martian Stone Stairs",{
ru: "Ступенько из марсианского камня"
})
*/
IDRegistry.genBlockID("mars_stone_fence");
Block.createBlock("mars_stone_fence",[{name: "The Martian Stone Fence", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("The Martian Stone Fence",{
ru: "Забор из марсианского камня"
})

IDRegistry.genBlockID("mars_cobblestone_fence");
Block.createBlock("mars_cobblestone_fence",[{name: "The Martian Cobblestone Fence", texture: [["Bottom Mars", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("The Martian Cobblestone Fence",{
ru: "Забор из марсианского булыжника"
})

IDRegistry.genBlockID("mars_stone_slab");
Block.createBlock("mars_stone_slab",[{name: "The Martian Stone Slab", texture: [["Stone Mars", 0]], inCreative: true} ]);
Translation.addTranslation("The Martian Stone Slab",{
ru: "Плита из марсианского камня"
})

TileRenderer.makeSlab(BlockID.mars_stone_slab, BlockID.mars_stone);

