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
