IDRegistry.genBlockID("ore_tin");
Block.createBlock("ore_tin",[{name: "Ore Tin", texture: [["Ore Tin", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Tin",{
ru: "Оловянная руда"
})
Recipes.addFurnace(BlockID.ore_tin, ItemID.ingot_tin_sc, 0);