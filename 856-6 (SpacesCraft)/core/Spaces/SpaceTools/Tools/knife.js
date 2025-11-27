IDRegistry.genItemID("blade"); 
Item.createItem("blade", "Blade", {name: "Knife", meta: 0}, {stack: 3});
Translation.addTranslation("Blade", {
ru: "Лезвие"
});
Recipes.addShaped({id: ItemID.blade, count: 1, data: 0}, [
    "a",
    "a",
    ""
], ['a', VanillaItemID.iron_ingot, 0]);