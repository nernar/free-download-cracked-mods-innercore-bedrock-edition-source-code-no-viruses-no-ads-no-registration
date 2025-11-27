Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});

IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });

Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);
ItemDictionary.setItemCathegory(ItemID.factoryWrench, "wrench");