
var glss = ["green","black","blue","brown","cyan","gray","light_blue","lime","magenta","orange","pink","purple","red","silver","white","yellow"]
var glsss = ["Green","Black","Blue","Brown","Cyan","Gray","Light Blue","Lime","Magenta","Orange","Pink","Purple","Red","Silver","White","Yellow"]
for(let i in glss){var gl = glss[i]; var g = glsss[i]
IDRegistry.genBlockID("tinted_glass_pane_" + gl);
Block.createBlock("tinted_glass_pane_" + gl,[{name: "Tinted Glass Pane " + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_GLASS);

IDRegistry.genBlockID("tinted_glass_plane_" + gl);
Block.createBlock("tinted_glass_plane_" + gl,[{name: "Tinted Glass Plane " + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("tinted_glass_pane_fence_" + gl);
Block.createBlock("tinted_glass_pane_fence_" + gl,[{name: "Tinted Glass Pane Fence" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_FENCE_GL);
	
	IDRegistry.genBlockID("tinted_glass_pane_big_fence_" + gl);
Block.createBlock("tinted_glass_pane_big_fence_" + gl,[{name: "Tinted Glass Pane Big Fence" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_FENCEE_GL);
/*
IDRegistry.genBlockID("tinted_glass_pane_stairs_" + gl);
Block.createBlockWithRotation("tinted_glass_pane_stairs_" + gl,[{name: "Tinted Glass Pane Stairs" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ], BLOCK_TYPE_STAIRS_GL);

*/
/*IDRegistry.genBlockID("tinted_glass_pane_slab_" + gl);
Block.createBlock("tinted_glass_pane_slab_" + gl,[{name: "Tinted Glass Pane Slab" + g, texture: [["Tinted Glass Pane " + g, 0]], inCreative: true} ]);


TileRenderer.makeSlab(BlockID.tinted_glass_pane_slab_ + [gl], BlockID.tinted_glass_pane_ + [gl]);*/
}
Translation.addTranslation("Tinted Glass Pane Green",{
ru: "Зелёное тонированное стекло"
})


Translation.addTranslation("Tinted Glass Pane Black",{
ru: "Чёрное тонированное стекло"
})


Translation.addTranslation("Tinted Glass Pane Blue",{
ru: "Синее тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Brown",{
ru: "Коричневое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Cyan",{
ru: "Бирюзовое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Gray",{
ru: "Серое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Light Blue",{
ru: "Голубое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Lime",{
ru: "Лаймовое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Magenta",{
ru: "Пурпурное тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Red",{
ru: "Красное тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane Silver",{
ru: "Серебристое тонированное стекло"
})

Translation.addTranslation("Tinted Glass Pane White",{
ru: "Белое тонированное стекло"
});

Translation.addTranslation("Tinted Glass Pane Yellow",{
ru: "Жёлтое тонированное стекло"
})

