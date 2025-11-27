IDRegistry.genBlockID("ore_silicon");
Block.createBlock("ore_silicon",[{name: "Ore Silicon", texture: [["Ore Silicon", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Silicon",{
ru: "Кремниевая руда"
})
Recipes.addFurnace(BlockID.ore_silicon, ItemID.raw_silicon, 0);