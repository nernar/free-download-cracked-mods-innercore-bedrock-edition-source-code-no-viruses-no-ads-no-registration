/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: mod_food.js

Recipes.deleteRecipe({id: 297, count: 1, data: 0});

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.flour, count: 1, data: 0}, [
     "ozo",
     "yyy",
     "oxo"
], ['x', 281, 0, 'y', 296, 0, 'z', 280, 0]);

Recipes.addFurnace(ItemID.flour, 297, 0);




// file: mod_items.js

IDRegistry.genItemID("bowstick");
Item.createItem("bowstick", "Bow stick", {name: "bow_stick", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.bowstick, count: 1, data: 0}, [
     "oxo",
     "xoo",
     "oxo"
], ['x', 280, 0]);

IDRegistry.genItemID("bowrope");
Item.createItem("bowrope", "Bow rope", {name: "bow_rope", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.bowrope, count: 1, data: 0}, [
     "oox",
     "oxo",
     "xoo"
], ['x', 287, 0]);

IDRegistry.genItemID("vegetablefiber");
Item.createItem("vegetablefiber", "Vegetable fiber", {name: "vegetable_fiber", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.vegetablefiber, count: 1, data: 0}, [
     "xxo",
     "xoo",
     "ooo"
], ['x', 6, 0]);

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.flour, count: 1, data: 0}, [
     "ozo",
     "yyy",
     "oxo"
], ['x', 281, 0, 'y', 296, 0, 'z', 280, 0]);

IDRegistry.genItemID("remeltingmold");
Item.createItem("remeltingmold", "Remelting mold", {name: "remelting_mold", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.remeltingmold, count: 1, data: 0}, [
     "oxo",
     "xox",
     "oxo"
], ['x', 337, 0]);

IDRegistry.genItemID("roastingmoldforremelting");
Item.createItem("roastingmoldforremelting", "Roasting mold for remelting", {name: "roasting_mold_for_remelting", meta: 0}, { isTech: false });
Recipes.addFurnace(ItemID.remeltingmold, ItemID.roastingmoldforremelting, 0);

IDRegistry.genItemID("ironoreform");
Item.createItem("ironoreform", "Iron ore form", {name: "iron_ore_form", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironoreform, count: 1, data: 0}, [
     "xyy",
     "yyy",
     "yyy"
], ['x', ItemID.roastingmoldforremelting, 0, 'y', 15, 0]);

IDRegistry.genItemID("molteniron");
Item.createItem("molteniron", "Molten iron", {name: "molten_iron", meta: 0}, { isTech: false });
Recipes.addFurnace(ItemID.ironoreform, ItemID.molteniron, 0);

IDRegistry.genItemID("moltenironingot");
Item.createItem("moltenironingot", "Molten iron ingot", {name: "molten_iron_ingot", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.moltenironingot, count: 8, data: 0}, [
     "ooo",
     "oxo",
     "ooo"
], ['x', ItemID.molteniron, 0]);

IDRegistry.genItemID("moltenironnugget");
Item.createItem("moltenironnugget", "Molten iron nugget", {name: "molten_iron_nugget", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.moltenironnugget, count: 4, data: 0}, [
     "ooo",
     "oxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironmail");
Item.createItem("ironmail", "Iron mail", {name: "iron_mail", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironmail, count: 1, data: 0}, [
     "ooo",
     "oxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironblade");
Item.createItem("ironblade", "Iron blade", {name: "iron_blade", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironblade, count: 1, data: 0}, [
     "oox",
     "oxo",
     "xoo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironguard");
Item.createItem("ironguard", "Iron guard", {name: "iron_guard", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironguard, count: 1, data: 0}, [
     "xoo",
     "oxo",
     "oox"
], ['x', ItemID.moltenironnugget, 0]);

IDRegistry.genItemID("ironhilt");
Item.createItem("ironhilt", "Iron hilt", {name: "iron_hilt", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironhilt, count: 1, data: 0}, [
     "ooo",
     "oyo",
     "xoo"
], ['x', ItemID.moltenironnugget, 0, 'y', 280, 0]);

IDRegistry.genItemID("ironaxehead");
Item.createItem("ironaxehead", "Iron axe head", {name: "iron_axe_head", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironaxehead, count: 1, data: 0}, [
     "oxx",
     "oxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironhoehead");
Item.createItem("ironhoehead", "Iron hoe head", {name: "iron_hoe_head", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironhoehead, count: 1, data: 0}, [
     "ooo",
     "xxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironpickaxehead");
Item.createItem("ironpickaxehead", "Iron pickaxe head", {name: "iron_pickaxe_head", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironpickaxehead, count: 1, data: 0}, [
     "oxo",
     "xox",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("ironshovelhead");
Item.createItem("ironshovelhead", "Iron shovel head", {name: "iron_shovel_head", meta: 0}, { isTech: false });
Recipes.addShaped({id: ItemID.ironshovelhead, count: 1, data: 0}, [
     "ooo",
     "oxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

IDRegistry.genItemID("bound_leather");
Item.createItem("bound_leather", "Bound leather", {name: "bound_leather", meta: 0});
Recipes.addShaped({id: ItemID.bound_leather, count: 1, data: 0}, ["aaa", "bab", "aaa"], ["a", 287, 0, "b", 334, 0]);

IDRegistry.genItemID("tanned_leather");
Item.createItem("tanned_leather", "Tanned leather", {name: "tanned_leather", meta: 0});
Recipes.addFurnace(ItemID.bound_leather, ItemID.tanned_leather, 0);




// file: translation.js

Translation.addTranslation("Flour", {ru: "Мука"});
Translation.addTranslation("Bow stick", {ru: ""});
Translation.addTranslation("Bow rope", {ru: ""});
Translation.addTranslation("Vegetable fiber", {ru: ""});
Translation.addTranslation("Remelting mold", {ru: ""});
Translation.addTranslation("Roasting mold for remelting", {ru: ""});
Translation.addTranslation("Iron ore", {ru: ""});
Translation.addTranslation("Molten iron", {ru: ""});
Translation.addTranslation("Molten iron ingot", {ru: ""});
Translation.addTranslation("Molten iron nugget", {ru: ""});
Translation.addTranslation("Iron mail", {ru: ""});
Translation.addTranslation("Iron blade", {ru: ""});
Translation.addTranslation("Iron guard", {ru: ""});
Translation.addTranslation("Iron hilt", {ru: ""});
Translation.addTranslation("Iron axe head", {ru: ""});
Translation.addTranslation("Iron hoe head", {ru: ""});
Translation.addTranslation("Iron pickaxe head", {ru: ""});
Translation.addTranslation("Iron shovel head", {ru: ""});




// file: uncraft.js

Recipes.deleteRecipe({id: 27, count: 1, data: 0});
Recipes.deleteRecipe({id: 28, count: 1, data: 0});
Recipes.deleteRecipe({id: 33, count: 1, data: 0});
Recipes.deleteRecipe({id: 66, count: 1, data: 0});
Recipes.deleteRecipe({id: 101, count: 1, data: 0});
Recipes.deleteRecipe({id: 126, count: 1, data: 0});
Recipes.deleteRecipe({id: 131, count: 1, data: 0});
Recipes.deleteRecipe({id: 145, count: 1, data: 0});
Recipes.deleteRecipe({id: 148, count: 1, data: 0});
Recipes.deleteRecipe({id: 167, count: 1, data: 0});
Recipes.deleteRecipe({id: 256, count: 1, data: 0});
Recipes.deleteRecipe({id: 257, count: 1, data: 0});
Recipes.deleteRecipe({id: 258, count: 1, data: 0});
Recipes.deleteRecipe({id: 259, count: 1, data: 0});
Recipes.deleteRecipe({id: 261, count: 1, data: 0});
Recipes.deleteRecipe({id: 262, count: 1, data: 0});
Recipes.deleteRecipe({id: 265, count: 1, data: 0});
Recipes.deleteRecipe({id: 267, count: 1, data: 0});
Recipes.deleteRecipe({id: 292, count: 1, data: 0});
Recipes.deleteRecipe({id: 298, count: 1, data: 0});
Recipes.deleteRecipe({id: 299, count: 1, data: 0});
Recipes.deleteRecipe({id: 300, count: 1, data: 0});
Recipes.deleteRecipe({id: 301, count: 1, data: 0});
Recipes.deleteRecipe({id: 306, count: 1, data: 0});
Recipes.deleteRecipe({id: 307, count: 1, data: 0});
Recipes.deleteRecipe({id: 308, count: 1, data: 0});
Recipes.deleteRecipe({id: 309, count: 1, data: 0});
Recipes.deleteRecipe({id: 325, count: 1, data: 0});
Recipes.deleteRecipe({id: 328, count: 1, data: 0});
Recipes.deleteRecipe({id: 330, count: 1, data: 0});
Recipes.deleteRecipe({id: 345, count: 1, data: 0});
Recipes.deleteRecipe({id: 359, count: 1, data: 0});
Recipes.deleteRecipe({id: 380, count: 1, data: 0});
Recipes.deleteRecipe({id: 410, count: 1, data: 0});

Recipes.addShaped({id: 27, count: 6, data: 0}, [
     "xox",
     "xyx",
     "xzx"
], ['x', 266, 0, 'y', 280, 0, 'z', 331, 0]);

Recipes.addShaped({id: 28, count: 6, data: 0}, [
     "xox",
     "xyx",
     "xzx"
], ['x', ItemID.moltenironingot, 0, 'y', 70, 0, 'z', 331, 0]);

Recipes.addShaped({id: 33, count: 1, data: 0}, [
     "yyy",
     "xzx",
     "xax"
], ['x', 4, 0, 'y', 5, 1, 'z', ItemID.moltenironingot, 0, 'a', 331, 0]);

Recipes.addShaped({id: 52, count: 1, data: 0}, [
     "xxx",
     "xox",
     "xxx"
], ['x', 101, 0]);

Recipes.addShaped({id: 66, count: 16, data: 0}, [
     "xox",
     "xyx",
     "xox"
], ['x', ItemID.moltenironingot, 0, 'y', 280, 0]);

Recipes.addShaped({id: 101, count: 16, data: 0}, [
     "xxx",
     "xxx",
     "ooo"
], ['x', ItemID.ironmail, 0]);

Recipes.addShaped({id: 126, count: 6, data: 0}, [
     "xyx",
     "xzx",
     "xyx"
], ['x', ItemID.moltenironingot, 0, 'y', 280, 0, 'z', 76, 0]);

Recipes.addShaped({id: 131, count: 2, data: 0}, [
     "xoo",
     "yoo",
     "zoo"
], ['x', ItemID.moltenironingot, 0, 'y', 280, 0, 'z', 5, 1]);

Recipes.addShaped({id: 145, count: 1, data: 0}, [
     "xxx",
     "oyo",
     "yyy"
], ['x', ItemID.molteniron, 0, 'y', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 148, count: 1, data: 0}, [
     "xxo",
     "ooo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 167, count: 1, data: 0}, [
     "xxo",
     "xxo",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 256, count: 1, data: 0}, [
     "oyo",
     "oxo",
     "oxo"
], ['x', 280, 0, 'y', ItemID.ironshovelhead, 0]);

Recipes.addShaped({id: 257, count: 1, data: 0}, [
     "oyo",
     "oxo",
     "oxo"
], ['x', 280, 0, 'y', ItemID.ironpickaxehead, 0]);

Recipes.addShaped({id: 258, count: 1, data: 0}, [
     "oyo",
     "oxo",
     "oxo"
], ['x', 280, 0, 'y', ItemID.ironaxehead, 0]);

Recipes.addShaped({id: 261, count: 1, data: 0}, [
     "ooo",
     "xyo",
     "ooo"
], ['x', ItemID.bowstick, 0, 'y', ItemID.bowrope, 0]);

Recipes.addShaped({id: 262, count: 4, data: 0}, [
     "xoo",
     "yoo",
     "zoo"
], ['x', ItemID.moltenironnugget, 0, 'y', 280, 0, 'z', 288, 0]);

Recipes.addShaped({id: 267, count: 1, data: 0}, [
     "ooz",
     "oyo",
     "xoo"
], ['x', ItemID.ironhilt, 0, 'y', ItemID.ironguard, 0, 'z', ItemID.ironblade, 0]);

Recipes.addShaped({id: 287, count: 1, data: 0}, [
     "oox",
     "oxo",
     "ooo"
], ['x', ItemID.vegetablefiber, 0]);

Recipes.addShaped({id: 292, count: 1, data: 0}, [
     "oyo",
     "oxo",
     "oxo"
], ['x', 280, 0, 'y', ItemID.ironhoehead, 0]);

Recipes.addShaped({id: 298, count: 1, data: 0}, [
     "xxx",
     "xox",
     "ooo"
], ['x', ItemID.tanned_leather, 0]);

Recipes.addShaped({id: 299, count: 1, data: 0}, [
     "xox",
     "xxx",
     "xxx"
], ['x', ItemID.tanned_leather, 0]);

Recipes.addShaped({id: 300, count: 1, data: 0}, [
     "xxx",
     "xox",
     "xox"
], ['x', ItemID.tanned_leather, 0]);

Recipes.addShaped({id: 301, count: 1, data: 0}, [
     "xox",
     "xox",
     "ooo"
], ['x', ItemID.tanned_leather, 0]);

Recipes.addShaped({id: 302, count: 1, data: 0}, [
     "xxx",
     "xox",
     "ooo"
], ['x', ItemID.ironmail, 0]);

Recipes.addShaped({id: 303, count: 1, data: 0}, [
     "xox",
     "xxx",
     "xxx"
], ['x', ItemID.ironmail, 0]);

Recipes.addShaped({id: 304, count: 1, data: 0}, [
     "xxx",
     "xox",
     "xox"
], ['x', ItemID.ironmail, 0]);

Recipes.addShaped({id: 305, count: 1, data: 0}, [
     "xox",
     "xox",
     "ooo"
], ['x', ItemID.ironmail, 0]);

Recipes.addShaped({id: 306, count: 1, data: 0}, [
     "xxx",
     "xox",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 307, count: 1, data: 0}, [
     "xox",
     "xxx",
     "xxx"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 308, count: 1, data: 0}, [
     "xxx",
     "xox",
     "xox"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 309, count: 1, data: 0}, [
     "xox",
     "xox",
     "ooo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 325, count: 1, data: 0}, [
     "ooo",
     "xox",
     "oxo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 328, count: 1, data: 0}, [
     "ooo",
     "xox",
     "xxx"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 329, count: 1, data: 0}, [
     "xxx",
     "yoy",
     "zoz"
], ['x', ItemID.tanned_leather, 0, 'y', 287, 0, 'z', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 330, count: 3, data: 0}, [
     "xxo",
     "xxo",
     "xxo"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 345, count: 1, data: 0}, [
     "oxo",
     "xyx",
     "oxo"
], ['x', ItemID.moltenironingot, 0, 'y', 331, 0]);

Recipes.addShaped({id: 359, count: 1, data: 0}, [
     "yxy",
     "oyo",
     "ozo"
], ['x', ItemID.moltenironingot, 0, 'y', 280, 0, 'z', ItemID.moltenironnugget, 0]);

Recipes.addShaped({id: 380, count: 1, data: 0}, [
     "xox",
     "xox",
     "xxx"
], ['x', ItemID.moltenironingot, 0]);

Recipes.addShaped({id: 410, count: 1, data: 0}, [
     "xox",
     "xyx",
     "oxo"
], ['x', ItemID.moltenironingot, 0, 'y', 54, 0]);

Recipes.addShaped({id: 421, count: 1, data: 0}, [
     "xoz",
     "oyo",
     "xox"
], ['x', 339, 0, 'y', 264, 0, 'z', 287, 0]);




