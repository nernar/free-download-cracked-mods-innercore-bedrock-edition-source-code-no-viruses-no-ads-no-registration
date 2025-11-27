IDRegistry.genBlockID("ore_copper");
Block.createBlock("ore_copper",[{name: "Ore Copper", texture: [["Ore Copper", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Copper",{
ru: "Медная руда"
})

Recipes.addFurnace(BlockID.ore_copper, ItemID.ingot_copper_sc, 0);