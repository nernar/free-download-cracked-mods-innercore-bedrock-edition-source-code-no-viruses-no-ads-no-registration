IDRegistry.genItemID("rune_karkas");
Item.createItem("rune_karkas", "Каркас рун", {name: "rune_karkas", meta: 0}, {stack: 64});
IDRegistry.genItemID("rune_aqua");
Item.createItem("rune_aqua", "Руна воды", {name: "rune_aqua", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_aqua, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 373, 0]);
IDRegistry.genItemID("rune_ignis");
Item.createItem("rune_ignis", "Руна огня", {name: "rune_ignis", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_ignis, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 377, 0]);
IDRegistry.genItemID("rune_naturae");
Item.createItem("rune_naturae", "Руна природы", {name: "rune_naturae", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_naturae, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 296, 0]);
IDRegistry.genItemID("rune_sol");
Item.createItem("rune_sol", "Руна солнце", {name: "rune_sol", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.rune_sol, count: 1, data: 0}, [
    " b ",
    "bab",
    " b "
], ['a', ItemID.rune_karkas, 0,'b', 348, 0]);