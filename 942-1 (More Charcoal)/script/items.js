IDRegistry.genItemID("apple_charcoal");
Item.createItem("apple_charcoal", "Apple Charcoal", { name: "apple_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.apple, ItemID.apple_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.apple_charcoal, 0, 600);


IDRegistry.genItemID("beet_charcoal");
Item.createItem("beet_charcoal", "Beet Charcoal", { name: "beet_charcoal", meta: 0 });
Recipes.addFurnace(457, ItemID.beet_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.beet_charcoal, 0, 600);


IDRegistry.genItemID("chorus_charcoal");
Item.createItem("chorus_charcoal", "Chorus Fruit Charcoal", { name: "chorus_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.popped_chorus_fruit, ItemID.chorus_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.chorus_charcoal, 0, 1200);


IDRegistry.genItemID("potato_charcoal");
Item.createItem("potato_charcoal", "Potato Charcoal", { name: "potato_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.baked_potato, ItemID.potato_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.potato_charcoal, 0, 800);


IDRegistry.genItemID("sugarcane_charcoal");
Item.createItem("sugarcane_charcoal", "Sugarcane Charcoal", { name: "sugarcane_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.sugar_cane, ItemID.sugarcane_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.sugarcane_charcoal, 0, 800);


IDRegistry.genItemID("carrot_charcoal");
Item.createItem("carrot_charcoal", "Carrot Charcoal", { name: "carrot_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.carrot, ItemID.carrot_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.carrot_charcoal, 0, 600);


IDRegistry.genItemID("bread_charcoal");
Item.createItem("bread_charcoal", "Bread Charcoal", { name: "bread_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.bread, ItemID.bread_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.bread_charcoal, 0, 1200);


IDRegistry.genItemID("egg_charcoal");
Item.createItem("egg_charcoal", "Egg Charcoal", { name: "egg_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.egg, ItemID.egg_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.egg_charcoal, 0, 800);


IDRegistry.genItemID("melon_charcoal");
Item.createItem("melon_charcoal", "Melon Charcoal", { name: "melon_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.melon_slice, ItemID.melon_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.melon_charcoal, 0, 600);


IDRegistry.genItemID("charcoal_chunk");
Item.createItem("charcoal_chunk", "Charcoal Chunk", { name: "charcoal_chunk", meta: 0 });
Recipes.addFurnaceFuel(ItemID.charcoal_chunk, 0, 200);
const charcoalRecipes = [
    { item: ItemID.apple_charcoal, count: 3 },
    { item: ItemID.beet_charcoal, count: 3 },
    { item: ItemID.sugarcane_charcoal, count: 3 },
    { item: ItemID.carrot_charcoal, count: 3 },
    { item: ItemID.potato_charcoal, count: 4 },
    { item: ItemID.melon_charcoal, count: 3 },
    { item: ItemID.egg_charcoal, count: 4 },
    { item: ItemID.chorus_charcoal, count: 6 },
    { item: ItemID.bread_charcoal, count: 6 },
    { item: VanillaItemID.charcoal, count: 8 },
];

charcoalRecipes.forEach(recipe => {
    Recipes.addShapeless({ id: ItemID.charcoal_chunk, count: recipe.count, data: 0 }, [
        { id: recipe.item, data: 0 }
    ]);
});
Recipes.addShapeless({ id: VanillaItemID.charcoal, count: 1, data: 0 }, [
    { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, 
    { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }
]);


IDRegistry.genItemID("coal_chunk");
Item.createItem("coal_chunk", "Coal Chunk", { name: "coal_chunk", meta: 0 });
Recipes.addFurnaceFuel(ItemID.coal_chunk, 0, 200);
Recipes.addShapeless({ id: ItemID.coal_chunk, count: 8, data: 0 }, [
    { id: VanillaItemID.coal, data: 0 }
]);
Recipes.addShapeless({ id: VanillaItemID.coal, count: 1, data: 0 }, [
    { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, 
    { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }
]);