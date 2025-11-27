IDRegistry.genBlockID("ore_aluminum");
Block.createBlock("ore_aluminum",[{name: "Ore Aluminum", texture: [["Ore Aluminum", 0]], inCreative: true} ]);
Translation.addTranslation("Ore Aluminum",{
ru: "Алюминиевая руда"
})

Recipes.addFurnace(BlockID.ore_aluminum, ItemID.ingot_aluminum_sc, 0);