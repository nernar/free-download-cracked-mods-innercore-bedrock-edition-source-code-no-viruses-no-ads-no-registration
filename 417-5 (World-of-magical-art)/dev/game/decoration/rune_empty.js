IDRegistry.genBlockID("runeEmpty");
Block.createBlock("runeEmpty", [
    { name: "Runestone", texture: [["runestone_empty", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEmpty, "stone", 2);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.runeEmpty, count: 4, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], ['a', 331, -1, 'b', 4, 0]);

    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeAir, data: 0 }, "rune.air");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeBlood, data: 0 }, "rune.blood");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeEarth, data: 0 }, "rune.earth");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeEssence, data: 0 }, "rune.essence");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeFire, data: 0 }, "rune.fire");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeMana, data: 0 }, "rune.mana");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeSpace, data: 0 }, "rune.space");
    Recipe.addRuneEnchanterRecipe({ id: BlockID.runeEmpty, data: 0 }, { id: BlockID.runeWater, data: 0 }, "rune.water");
});