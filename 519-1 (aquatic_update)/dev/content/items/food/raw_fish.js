Translation.addTranslation("Fish", {
    ru: "Рыба"
});
Translation.addTranslation("Atlantic Cod", {
    ru: "Атлантическая треска"
});
Translation.addTranslation("Carp", {
    ru: "Карп"
});
Translation.addTranslation("Blackfish", {
    ru: "Черный морской окунь"
});
Translation.addTranslation("Pink Salmon", {
    ru: "Горбуша"
});
Translation.addTranslation("Brown Trout", {
    ru: "Форель"
});
Translation.addTranslation("Capitaine", {
    ru: "Нильский окунь"
});
Translation.addTranslation("Red Grouper", {
    ru: "Красный групер"
});

IDRegistry.genItemID("codAtlantic");
IDRegistry.genItemID("carp");
IDRegistry.genItemID("blackfish");
IDRegistry.genItemID("salmonPink");
IDRegistry.genItemID("troutBrown");
IDRegistry.genItemID("capitaine");
IDRegistry.genItemID("grouperRed");

Item.createFoodItem("codAtlantic", "Atlantic Cod", { name: "atlantic_cod", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("carp", "Carp", { name: "carp", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("blackfish", "Blackfish", { name: "blackfish", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("salmonPink", "Pink Salmon", { name: "pink_salmon", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("troutBrown", "Brown Trout", { name: "brown_trout", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("capitaine", "Capitaine", { name: "capitaine", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("grouperRed", "Red Grouper", { name: "red_grouper", data: 0 }, { stack: 64, food: 2 });

ItemDictionary.setItemCategory(ItemID.codAtlantic, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.carp, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.blackfish, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.salmonPink, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.troutBrown, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.capitaine, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.grouperRed, "minecraft:fish");
ItemDictionary.setItemCategory(VanillaItemID.fish, "minecraft:fish");

Callback.addCallback("PreLoaded", function () {
    Item.addCreativeGroup("fish", Translation.translate("Fish"), [
        ItemID.codAtlantic,
        ItemID.carp,
        ItemID.blackfish,
        ItemID.salmonPink,
        ItemID.troutBrown,
        ItemID.capitaine,
        ItemID.grouperRed
    ]);
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */