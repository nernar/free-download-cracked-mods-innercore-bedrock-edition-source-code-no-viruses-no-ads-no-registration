IDRegistry.genItemID("tiny_coal");
IDRegistry.genItemID("tiny_charcoal");

// create item

Item.createItem(
    "tiny_coal", 
    "Tiny Coal\n§1Additional Recipe§r", {
        name: "tiny_coal", 
        meta: 0
    }, {stack: 64}
);
Item.createItem(
    "tiny_charcoal", 
    "Tiny Charcoal\n§1Additional Recipe§r", {
        name: "tiny_charcoal", 
        meta: 0
    }, {stack: 64}
);

// recipes

Recipes.addShaped({
    id: ItemID.tiny_coal, 
    count: 9, 
    data: 0
 }, ["", " c ", ""], ['c', 263, 0]
);

Recipes.addShaped({
    id: ItemID.tiny_charcoal, 
    count: 9, 
    data: 0
 }, ["", " c ", ""], ['c', 263, 1]
);

Recipes.addShaped({
    id: 50, 
    count: 2, 
    data: 0
}, ["", " t ", " s "], [
    't', ItemID.tiny_coal, 0
    ,'s', 280, 0
 ]
);