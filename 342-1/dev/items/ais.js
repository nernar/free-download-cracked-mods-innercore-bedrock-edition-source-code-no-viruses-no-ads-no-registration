importLib("ToolType","*")





IDRegistry.genItemID("luhsamhelmet");
IDRegistry.genItemID("luhsamchestplate");
IDRegistry.genItemID("luhsamleggings");
IDRegistry.genItemID("luhsamboots");

Item.createArmorItem("luhsamhelmet", "§cЛюхсамовый шлем\n§r 5 защита\n Бонус комплекта - скороть копания", {name: "luhsamhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/luhsamarmor.png"});
Item.createArmorItem("luhsamchestplate", "§cЛюхсамовый нагрудник\n§r 10 защита\n Бонус комплекта - скороть копания", {name: "luhsamchestplate", meta: 0}, {type: "chestplate", armor: 10, durability: 750, texture: "armor/luhsamarmor.png"});
Item.createArmorItem("luhsamleggings", "§cЛюхсамовые поножи\n§r 8 защита\n Бонус комплекта - скороть копания", {name: "luhsamleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/luhsamarmor0.png"});
Item.createArmorItem("luhsamboots", "§cЛюхсамовые ботинки\n§r 5 защита\n Бонус комплекта - скороть копания", {name: "luhsamboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/luhsamarmor.png"});

Recipes.addShaped({id: ItemID.luhsamhelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamchestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);






IDRegistry.genItemID("nighturahelmet");
IDRegistry.genItemID("nighturachestplate");
IDRegistry.genItemID("nighturaleggings");
IDRegistry.genItemID("nighturaboots");

Item.createArmorItem("nighturahelmet", "§cНайтуровый шлем\n§r 7 защита", {name: "nighturahelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/nighturaarmor.png"});
Item.createArmorItem("nighturachestplate", "§cНайтуровый нагрудник\n§r 13 защита", {name: "nighturachestplate", meta: 0}, {type: "chestplate", armor: 13, durability: 750, texture: "armor/nighturaarmor.png"});
Item.createArmorItem("nighturaleggings", "§cНайтуровые поножи\n§r 10 защита", {name: "nighturaleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/nighturaarmor0.png"});
Item.createArmorItem("nighturaboots", "§cНайтуровые ботинки\n§r 7 защита", {name: "nighturaboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/nighturaarmor.png"});

Recipes.addShaped({id: ItemID.nighturahelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturachestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturaleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturaboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);




IDRegistry.genItemID("skyhelmet");
IDRegistry.genItemID("skychestplate");
IDRegistry.genItemID("skyleggings");
IDRegistry.genItemID("skyboots");

Item.createArmorItem("skyhelmet", "§cНебесный шлем\n§r 9 защита", {name: "skyhelmet", meta: 0}, {type: "helmet", armor: 9, durability: 650, texture: "armor/skyarmor.png"});
Item.createArmorItem("skychestplate", "§cНебесный нагрудник\n§r 15 защита", {name: "skychestplate", meta: 0}, {type: "chestplate", armor: 15, durability: 750, texture: "armor/skyarmor.png"});
Item.createArmorItem("skyleggings", "§cНебесные поножи\n§r 12 защита", {name: "skyleggings", meta: 0}, {type: "leggings", armor: 12, durability: 700, texture: "armor/skyarmor0.png"});
Item.createArmorItem("skyboots", "§cНебесные ботинки\n§r 9 защита", {name: "skyboots", meta: 0}, {type: "boots", armor: 9, durability: 600, texture: "armor/skyarmor.png"});

Recipes.addShaped({id: ItemID.skyhelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skychestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skyleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skyboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);



IDRegistry.genItemID("thornhelmet");
IDRegistry.genItemID("thornchestplate");
IDRegistry.genItemID("thornleggings");
IDRegistry.genItemID("thornboots");

Item.createArmorItem("thornhelmet", "§cШипастый шлем\n§r 11 защита", {name: "thornhelmet", meta: 0}, {type: "helmet", armor: 11, durability: 650, texture: "armor/thornarmor.png"});
Item.createArmorItem("thornchestplate", "§cШипастый нагрудник\n§r 17 защита", {name: "thornchestplate", meta: 0}, {type: "chestplate", armor: 17, durability: 750, texture: "armor/thornarmor.png"});
Item.createArmorItem("thornleggings", "§cШипастые поножи\n§r 14 защита", {name: "thornleggings", meta: 0}, {type: "leggings", armor: 14, durability: 700, texture: "armor/thornarmor0.png"});
Item.createArmorItem("thornboots", "§cШипастые ботинки\n§r 11 защита", {name: "thornboots", meta: 0}, {type: "boots", armor: 11, durability: 600, texture: "armor/thornarmor.png"});










IDRegistry.genItemID("bloodhelmet");
IDRegistry.genItemID("bloodchestplate");
IDRegistry.genItemID("bloodleggings");
IDRegistry.genItemID("bloodboots");

Item.createArmorItem("bloodhelmet", "§cКровавый шлем\n§r 13 защита\n Бонус комплекта - регенерация", {name: "bloodhelmet", meta: 0}, {type: "helmet", armor: 13, durability: 650, texture: "armor/bloodarmor.png"});
Item.createArmorItem("bloodchestplate", "§cКровавый нагрудник\n§r 19 защита\n Бонус комплекта - регенерация", {name: "bloodchestplate", meta: 0}, {type: "chestplate", armor: 19, durability: 750, texture: "armor/bloodarmor.png"});
Item.createArmorItem("bloodleggings", "§cКровавые поножи\n§r 16 защита\n Бонус комплекта - регенерация", {name: "bloodleggings", meta: 0}, {type: "leggings", armor: 16, durability: 700, texture: "armor/bloodarmor0.png"});
Item.createArmorItem("bloodboots", "§cКровавые ботинки\n§r 12 защита\n Бонус комплекта - регенерация", {name: "bloodboots", meta: 0}, {type: "boots", armor: 12, durability: 600, texture: "armor/bloodarmor.png"});


Recipes.addShaped({id: ItemID.bloodhelmet, count: 1, data: 0}, [ "aba", "a a", "   "], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodchestplate, count: 1, data: 0}, [ "a a", "aba", "aaa"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodleggings, count: 1, data: 0}, [ "aba", "a a", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodboots, count: 1, data: 0}, [ "   ", "a b", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);




IDRegistry.genItemID("birdhelmet");
IDRegistry.genItemID("birdchestplate");
IDRegistry.genItemID("birdleggings");
IDRegistry.genItemID("birdboots");

Item.createArmorItem("birdhelmet", "§cСоловьиный шлем\n§r 15 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdhelmet", meta: 0}, {type: "helmet", armor: 15, durability: 650, texture: "armor/birdarmor.png"});
Item.createArmorItem("birdchestplate", "§cСоловьиный нагрудник\n§r 21 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdchestplate", meta: 0}, {type: "chestplate", armor: 21, durability: 750, texture: "armor/birdarmor.png"});
Item.createArmorItem("birdleggings", "§cСоловьиные поножи\n§r 18 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdleggings", meta: 0}, {type: "leggings", armor: 18, durability: 700, texture: "armor/birdarmor0.png"});
Item.createArmorItem("birdboots", "§cСоловьиные ботинки\n§r 14 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdboots", meta: 0}, {type: "boots", armor: 14, durability: 600, texture: "armor/birdarmor.png"});


Recipes.addShaped({id: ItemID.birdhelmet, count: 1, data: 0}, [ "aba", "b b", "   "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdchestplate, count: 1, data: 0}, [ "b b", "aba", "bab"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);

































































