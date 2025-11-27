IDRegistry.genItemID("kolba_pust");
Item.createItem("kolba_pust","Пустая колба", {name:"kolba_pust"},{});

Recipes.addShaped({id: ItemID.kolba_pust, count: 1, data: 0}, [
"xox",
"xox",
"xxx"
], ['x', 20, 0]);

IDRegistry.genItemID("kolba_with_water");
Item.createItem("kolba_with_water","Колба наполненная водой", {name:"kolba_with_water"},{});


Recipes.addShaped({id: ItemID.kolba_with_water, count: 1, data: 0}, [
"aaa",
"aox",
"aaa"
], ['x',325, 8, 'o', ItemID.kolba_pust, 0]);

IDRegistry.genItemID("kolba_with_lava");
Item.createItem("kolba_with_lava","Колба наполненная лывой", {name:"kolba_with_lava"},{});


Recipes.addShaped({id: ItemID.kolba_with_lava, count: 1, data: 0}, [
"aaa",
"aox",
"aaa"
], ['x',325, 10, 'o', ItemID.kolba_pust, 0]);


