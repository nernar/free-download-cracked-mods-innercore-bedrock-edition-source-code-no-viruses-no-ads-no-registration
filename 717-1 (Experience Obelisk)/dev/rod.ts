IDRegistry.genItemID("experience_rod");
Item.createItem("experience_rod", "Experience Rod", {name: "experience_rod"}, {stack: 1});
Item.setToolRender(ItemID.experience_rod, true);
Recipes.addShaped({id: ItemID.experience_rod}, ["_ab", "cdc", "ba_"], [
    "a", VanillaItemID.redstone, -1,
    "b", VanillaItemID.gold_ingot, -1,
    "c", VanillaItemID.glowstone_dust, -1,
    "d", VanillaItemID.diamond, -1
]);