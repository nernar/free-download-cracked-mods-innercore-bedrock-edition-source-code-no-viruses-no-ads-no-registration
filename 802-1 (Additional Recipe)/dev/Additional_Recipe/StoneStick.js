IDRegistry.genItemID(
    "stone_stick"
);
//

Item.createItem(
    "stone_stick", 
    "Stone Stick\n§1Additional Recipe§r", {
        name: "stone_stick", 
        meta: 0
    }, {stack: 64}
);
//

Recipes.addShaped({
    id: 50, 
    count: 4, 
    data: 0
}, [
    "", " c ", " s "
 ], [
    'c', 263, 0,'s', ItemID.stone_stick, 0
 ]
);