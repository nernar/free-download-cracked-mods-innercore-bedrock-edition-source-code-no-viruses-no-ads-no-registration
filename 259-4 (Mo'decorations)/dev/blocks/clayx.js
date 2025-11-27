IDRegistry.genItemID("clayx");
Item.createItem("clayx","белая глина",{name:"clayx",meta:0},{stack:64});

IDRegistry.genItemID("clayx1");
Item.createItem("clayx1","красная глина",{name:"clayx",meta:1},{stack:64});

IDRegistry.genItemID("clayx2");
Item.createItem("clayx2","зеленая глина",{name:"clayx",meta:2},{stack:64});

IDRegistry.genItemID("clayx3");
Item.createItem("clayx3","синяя глина",{name:"clayx",meta:3},{stack:64});

IDRegistry.genItemID("clayx4");
Item.createItem("clayx4","желтая глина",{name:"clayx",meta:4},{stack:64});

IDRegistry.genItemID("clayx5");
Item.createItem("clayx5","фиолетовая глина",{name:"clayx",meta:5},{stack:64});

IDRegistry.genItemID("clayx6");
Item.createItem("clayx6","голубая глина",{name:"clayx",meta:6},{stack:64});

IDRegistry.genItemID("brickx");
Item.createItem("brickx","белый кирпич",{name:"brickx",meta:0},{stack:64});

IDRegistry.genItemID("brickx1");
Item.createItem("brickx1","красный кирпич",{name:"brickx",meta:1},{stack:64});

IDRegistry.genItemID("brickx2");
Item.createItem("brickx2","зеленый кирпич",{name:"brickx",meta:2},{stack:64});

IDRegistry.genItemID("brickx3");
Item.createItem("brickx3","синий кирпич",{name:"brickx",meta:3},{stack:64});

IDRegistry.genItemID("brickx4");
Item.createItem("brickx4","желтый кирпич",{name:"brickx",meta:4},{stack:64});

IDRegistry.genItemID("brickx5");
Item.createItem("brickx5","фиолетовый кирпич",{name:"brickx",meta:5},{stack:64});

IDRegistry.genItemID("brickx6");
Item.createItem("brickx6","голубой кирпич",{name:"brickx",meta:6},{stack:64});

Recipes.addShaped({id: ItemID.clayx, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 15, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx1, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 1, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx2, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 2, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx3, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 4, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx4, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 11, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx5, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 13, 'x', 337, 0]);

Recipes.addShaped({id: ItemID.clayx6, count: 2, data: 0}, [ 
" a ", 
" x ", 
"   " 
], ['a', 351, 12, 'x', 337, 0]);

Recipes.addFurnace(ItemID.clayx, ItemID.brickx, 0);

Recipes.addFurnace(ItemID.clayx1, ItemID.brickx1, 0);

Recipes.addFurnace(ItemID.clayx2, ItemID.brickx2, 0);

Recipes.addFurnace(ItemID.clayx3, ItemID.brickx3, 0);

Recipes.addFurnace(ItemID.clayx4, ItemID.brickx4, 0);

Recipes.addFurnace(ItemID.clayx5, ItemID.brickx5, 0);

Recipes.addFurnace(ItemID.clayx6, ItemID.brickx6, 0);

Recipes.addShaped({id: BlockID.dec, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx, 0]);

Recipes.addShaped({id: BlockID.dec1, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx1, 0]);

Recipes.addShaped({id: BlockID.dec2, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx2, 0]);

Recipes.addShaped({id: BlockID.dec3, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx3, 0]);

Recipes.addShaped({id: BlockID.dec4, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx4, 0]);

Recipes.addShaped({id: BlockID.dec5, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx5, 0]);

Recipes.addShaped({id: BlockID.dec6, count: 1, data: 0}, [ 
"x  ", 
" x ", 
"  x" 
], ['x', ItemID.brickx6, 0]);

Recipes.addShaped({id: BlockID.dec7, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx, 0]);

Recipes.addShaped({id: BlockID.dec8, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx1, 0]);

Recipes.addShaped({id: BlockID.dec9, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx2, 0]);

Recipes.addShaped({id: BlockID.dec10, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx3, 0]);

Recipes.addShaped({id: BlockID.dec11, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx4, 0]);

Recipes.addShaped({id: BlockID.dec12, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx5, 0]);

Recipes.addShaped({id: BlockID.dec13, count: 1, data: 0}, [ 
"x x", 
" x ", 
"   " 
], ['x', ItemID.brickx6, 0]);

Recipes.addShaped({id: BlockID.dec14, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx, 0]);

Recipes.addShaped({id: BlockID.dec15, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx1, 0]);

Recipes.addShaped({id: BlockID.dec16, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx2, 0]);

Recipes.addShaped({id: BlockID.dec17, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx3, 0]);

Recipes.addShaped({id: BlockID.dec18, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx4, 0]);

Recipes.addShaped({id: BlockID.dec19, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx5, 0]);

Recipes.addShaped({id: BlockID.dec20, count: 1, data: 0}, [ 
"x x", 
" x ", 
"x x" 
], ['x', ItemID.brickx6, 0]);

Recipes.addShaped({id: BlockID.dec21, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx, 0]);

Recipes.addShaped({id: BlockID.dec22, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx1, 0]);

Recipes.addShaped({id: BlockID.dec23, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx2, 0]);

Recipes.addShaped({id: BlockID.dec24, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx3, 0]);

Recipes.addShaped({id: BlockID.dec25, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx4, 0]);

Recipes.addShaped({id: BlockID.dec26, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx5, 0]);

Recipes.addShaped({id: BlockID.dec27, count: 1, data: 0}, [ 
" x ", 
"x x", 
" x " 
], ['x', ItemID.brickx6, 0]);