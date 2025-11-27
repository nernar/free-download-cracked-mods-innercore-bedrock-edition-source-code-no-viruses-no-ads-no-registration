IDRegistry.genBlockID("ore_silicon_venus");
Block.createBlock("ore_silicon_venus",[{name: "Ore Silicon Venus", texture: [["Ore Silicon Venus", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Silicon Venus",{
ru: "Венерианская кремниевая руда"
})

Recipes.addFurnace(BlockID.ore_silicon_venus, ItemID.raw_silicon, 0);