IMPORT("BackpackAPI");

IDRegistry.genItemID("leather_backpack");
Item.createItem("leather_backpack", "Leather Backpack", {name: "leather_backpack", meta: 0}, {stack: 1});


Translation.addTranslation("Leather Backpack", {ru: "Кожаный рюкзак"}, {en: "Leather Backpack"});

BackpackRegistry.register(ItemID.leather_backpack, {
    title: "Leather Backpack",
    slots: 9,
    slotsCenter: true,
    inRow: 9
   
});



IDRegistry.genItemID("iron_backpack");
Item.createItem("iron_backpack", "Iron Backpack", {name: "iron_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Iron Backpack", {ru: "Железный рюкзак"}, {en: "Iron Backpack"});

BackpackRegistry.register(ItemID.iron_backpack, {
    title: "Iron Backpack",
    slots: 18,
    slotsCenter: true,
    inRow: 9
   
});


IDRegistry.genItemID("gold_backpack");
Item.createItem("gold_backpack", "Golden Backpack", {name: "gold_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Golden Backpack", {ru: "Золотой рюкзак"}, {en: "Golden Backpack"});

BackpackRegistry.register(ItemID.gold_backpack, {
    title: "Golden Backpack",
    slots: 27,
    slotsCenter: true,
    inRow: 9
   
});


IDRegistry.genItemID("diamond_backpack");
Item.createItem("diamond_backpack", "Diamond Backpack", {name: "diamond_backpack", meta: 0}, {stack: 1});

Translation.addTranslation("Diamond Backpack", {ru: "Алмазный рюкзак"}, {en: "Diamond Backpack"});

BackpackRegistry.register(ItemID.diamond_backpack, {
    title: "Diamond Backpack",
    slots: 36,
    slotsCenter: true,
    inRow: 9
   
});


Item.addCreativeGroup("backpack", Translation.translate("backpack"), [
	ItemID.leather_backpack,
	ItemID.iron_backpack,
	ItemID.gold_backpack,
	ItemID.diamond_backpack
]);






Recipes.addShaped({id: ItemID.leather_backpack, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 334, -1, 'b', 35, -1, 'c', 54, -1]);

Recipes.addShaped({id: ItemID.iron_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 265, -1, 'b', ItemID.leather_backpack, -1]);


Recipes.addShaped({id: ItemID.gold_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 266, -1, 'b', ItemID.iron_backpack, -1]);




Recipes.addShaped({id: ItemID.diamond_backpack, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 264, -1, 'b', ItemID.gold_backpack, -1]);
