IDRegistry.genItemID(
    "diamond_nugget"
);
//

Item.createItem(
    "diamond_nugget", 
    "Diamond Nugget\n§1Additional Recipe§r", {
        name: "diamond_nugget", 
        meta: 0
    }, {stack: 64}
);
//

Recipes.addShaped({
    id: ItemID.diamond_nugget, 
    count: 3, 
    data: 0
}, ["", " d ", ""], ['d', 264, 0]
);
//

Recipes.addShaped({
    id: 278, 
    count: 1, 
    data: 0
}, ["ddd", " s ", " s "], [
    'd', ItemID.diamond_nugget, 0,
    's', 280, 0
 ]
);