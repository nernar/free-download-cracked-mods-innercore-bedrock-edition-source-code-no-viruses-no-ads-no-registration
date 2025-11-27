importLib("ToolType","*")
//А зачем вы в код полезли?
IDRegistry.genItemID("mel");
Item.createItem("mel", "Мел для дьявольского запрета", {name: "mel", meta: 0}, {stack: 1});
IDRegistry.genBlockID("fleshblock");
Block.createBlock("fleshblock", [{name: "Блок из плоти", texture: [["fleshblock", 0], ["fleshblock", 0], ["fleshblock", 0], ["fleshblock", 0], ["fleshblock", 0], ["fleshblock", 0]], inCreative: true}]);
//здесть был крафт блока плоти
IDRegistry.genBlockID("melore");
Block.createBlock("melore", [{name: "Меловая руда", texture: [["melore", 0], ["melore", 0], ["melore", 0], ["melore", 0], ["melore", 0], ["melore", 0]], inCreative: true}]);
IDRegistry.genItemID("melkusok");
Item.createItem("melkusok", "Кусок мела", {name: "melkusok", meta: 0}, {stack: 64});
IDRegistry.genBlockID("pentagramm");

IDRegistry.genBlockID("pentagram");

IDRegistry.genItemID("hellmel");
Item.createItem("hellmel", "Адский мел", {name: "hellmel", meta: 0}, {stack: 32});
Recipes.addShaped({id: ItemID.hellmel, count: 5, data: 0}, [ " a ", "aba", " a "], ['a', ItemID.melkusok, 0, 'b', 87, 0]);
Recipes.addShaped({id: ItemID.mel, count: 3, data: 0}, [ "a  ", " a ", "  a"], ['a', ItemID.melkusok, 0]);
IDRegistry.genItemID("aidhelmet");
IDRegistry.genItemID("germesboots");

Item.createArmorItem("aidhelmet", "Шлем Аида", {name: "aidhelmet", meta: 0}, {type: "helmet", armor: 3, durability: 3400, texture: "armor/aidhelmet1.png"});
Item.createArmorItem("germesboots", "Ботинки Гермеса", {name: "germesboots", meta: 0}, {type: "boots", armor: 3, durability: 3400, texture: "armor/germesboots1.png"});


IDRegistry.genItemID("aidhelmet");
IDRegistry.genItemID("germesboots");

Item.createArmorItem("aidhelmet", "Шлем Аида", {name: "aidhelmet", meta: 0}, {type: "helmet", armor: 3, durability: 3400, texture: "armor/aidhelmet1.png"});
Item.createArmorItem("germesboots", "Ботинки Гермеса", {name: "germesboots", meta: 0}, {type: "boots", armor: 3, durability: 3400, texture: "armor/germesboots1.png"});
IDRegistry.genItemID("poceidontrident");
Item.createItem("poceidontrident", "Трезубец Посейдона", {name: "poceidontrident", data: 0},{stack: 1});
ToolAPI.addToolMaterial("poceidontrident", {durability: 215, level: 0, damage: 15});
ToolAPI.setTool(ItemID.poceidontrident, "poceidontrident", ToolType.sword);
Recipes.addFurnace(BlockID.melore, ItemID.mel, 1);
IDRegistry.genBlockID("solomonkey");
Block.createBlock("solomonkey", [{name: "Ключ Соломона", texture: [["solomonkey", 0], ["solomonkey", 0], ["solomonkey", 0], ["solomonkey", 0], ["solomonkey", 0], ["solomonkey", 0]], inCreative: false}]);
IDRegistry.genItemID("coppersword");
IDRegistry.genItemID("coppershovel");
IDRegistry.genItemID("copperpickaxe");
IDRegistry.genItemID("copperaxe");
Item.createItem("coppersword", "Медный меч", {name: "coppersword", meta: 0}, {stack: 1});
Item.createItem("coppershovel", "Медная лопата", {name: "coppershovel", meta: 0}, {stack: 1});
Item.createItem("copperpickaxe", "Медная кирка", {name: "copperpickaxe", meta: 0}, {stack: 1});
Item.createItem("copperaxe", "Медный топор", {name: "copperaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("copper", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.coppersword, "copper", ToolType.sword);
ToolAPI.setTool(ItemID.coppershovel, "copper", ToolType.shovel);
ToolAPI.setTool(ItemID.copperpickaxe, "copper", ToolType.pickaxe);
ToolAPI.setTool(ItemID.copperaxe, "copper", ToolType.axe);

IDRegistry.genItemID("silversword");
IDRegistry.genItemID("silvershovel");
IDRegistry.genItemID("silverpickaxe");
IDRegistry.genItemID("silveraxe");
Item.createItem("silversword", "Серебрянный меч", {name: "silversword", meta: 0}, {stack: 1});
Item.createItem("silvershovel", "Серебрянная лопата", {name: "silvershovel", meta: 0}, {stack: 1});
Item.createItem("silverpickaxe", "Ceребрянная кирка", {name: "silverpickaxe", meta: 0}, {stack: 1});
Item.createItem("silveraxe", "Серебрянный топор", {name: "silveraxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("silver", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.silversword, "silver", ToolType.sword);
ToolAPI.setTool(ItemID.silvershovel, "silver", ToolType.shovel);
ToolAPI.setTool(ItemID.silverpickaxe, "silver", ToolType.pickaxe);
ToolAPI.setTool(ItemID.silveraxe, "silver", ToolType.axe);
IDRegistry.genItemID("copperingot");
Item.createItem("copperingot", "Медный слиток", {name: "copperingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("silveringot");
Item.createItem("silveringot", "Серебрянный слиток", {name: "silveringot", meta: 0}, {stack: 64});
//You make mithril?
IDRegistry.genItemID("mithrilingot");
Item.createItem("mithrilingot", "Мифриловый слиток", {name: "mithrilingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("mithrilsword");
IDRegistry.genItemID("mithrilshovel");
IDRegistry.genItemID("mithrilpickaxe");
IDRegistry.genItemID("mithrilaxe");
Item.createItem("mithrilsword", "Мифриловый меч", {name: "mithrilsword", meta: 0}, {stack: 1});
Item.createItem("mithrilshovel", "Мифриловая лопата", {name: "mithrilshovel", meta: 0}, {stack: 1});
Item.createItem("mithrilpickaxe", "Мифриловая кирка", {name: "mithrilpickaxe", meta: 0}, {stack: 1});
Item.createItem("mithrilaxe", "Мифриловый топор", {name: "mithrilaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("mithril", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.mithrilsword, "mithril", ToolType.sword);
ToolAPI.setTool(ItemID.mithrilshovel, "mithril", ToolType.shovel);
ToolAPI.setTool(ItemID.mithrilpickaxe, "mithril", ToolType.pickaxe);
ToolAPI.setTool(ItemID.mithrilaxe, "mithril", ToolType.axe);
IDRegistry.genBlockID("copperore");
Block.createBlock("copperore", [{name: "Медная руда", texture: [["copperore", 0], ["copperore", 0], ["copperore", 0], ["copperore", 0], ["copperore", 0], ["copperore", 0]], inCreative: true}]);
IDRegistry.genBlockID("silverore");
Block.createBlock("silverore", [{name: "Cepeбpяннaя руда", texture: [["silverore", 0], ["silverore", 0], ["silverore", 0], ["silverore", 0], ["silverore", 0], ["silverore", 0]], inCreative: true}]);
IDRegistry.genBlockID("mithrilore");
Block.createBlock("mithrilore", [{name: "Мифриловая руда", texture: [["mithrilore", 0], ["mithrilore", 0], ["mithrilore", 0], ["mithrilore", 0], ["mithrilore", 0], ["mithrilore", 0]], inCreative: true}]);
Recipes.addFurnace(BlockID.copperore, ItemID.copperingot, 1);
Recipes.addFurnace(BlockID.silverore, ItemID.silveringot, 1);
Recipes.addFurnace(BlockID.mithrilore, ItemID.mithrilingot, 1);

Recipes.addShaped({id: ItemID.coppersword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.copperingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.silversword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.silveringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.mithrilsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.mithrilingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.copperpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.copperingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.silverpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.silveringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.mithrilpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.mithrilingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.copperaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.copperingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.silveraxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.silveringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.mithrilaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.mithrilingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.coppershovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.copperingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.silvershovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.silveringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.mithrilshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.mithrilingot, 0, 'b', 280, 0]);
IDRegistry.genItemID("copperhelmet");
IDRegistry.genItemID("copperchestplate");
IDRegistry.genItemID("copperleggins");
IDRegistry.genItemID("copperboots");

Item.createArmorItem("copperhelmet", "Медный шлем", {name: "copperhelmet", meta: 0}, {type: "helmet", armor: 2, durability: 650, texture: "armor/copperhelmet.png"});
Item.createArmorItem("copperchestplate", "Медный нагрудник", {name: "copperchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/copperchestplate.png"});
Item.createArmorItem("copperleggins", "Медные поножи", {name: "copperleggins", meta: 0}, {type: "leggings", armor: 2, durability: 700, texture: "armor/copperleggins.png"});
Item.createArmorItem("copperboots", "Медные ботинки", {name: "copperboots", meta: 0}, {type: "boots", armor: 2, durability: 600, texture: "armor/copperboots.png"});

IDRegistry.genItemID("silverhelmet");
IDRegistry.genItemID("silverchestplate");
IDRegistry.genItemID("silverleggins");
IDRegistry.genItemID("silverboots");

Item.createArmorItem("silverhelmet", "Серебрянный шлем", {name: "silverhelmet", meta: 0}, {type: "helmet", armor: 2, durability: 650, texture: "armor/silverhelmet.png"});
Item.createArmorItem("silverchestplate", "Серебрянный нагрудник", {name: "silverchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/silverchestplate.png"});
Item.createArmorItem("silverleggins", "Серебрянные поножи", {name: "silverleggins", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/silverleggins.png"});
Item.createArmorItem("silverboots", "Серебрянные ботинки", {name: "silverboots", meta: 0}, {type: "boots", armor: 2, durability: 600, texture: "armor/silverboots.png"});

IDRegistry.genItemID("mithrilhelmet");
IDRegistry.genItemID("mithrilchestplate");
IDRegistry.genItemID("mithrilleggins");
IDRegistry.genItemID("mithrilboots");

Item.createArmorItem("mithrilhelmet", "Мифриловый шлем", {name: "mithrilhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/mithrilhelmet.png"});
Item.createArmorItem("mithrilchestplate", "Мифриловый нагрудник", {name: "mithrilchestplate", meta: 0}, {type: "chestplate", armor: 10, durability: 750, texture: "armor/mithrilchestplate.png"});
Item.createArmorItem("mithrilleggins", "Мифриловый поножи", {name: "mithrilleggins", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/mithrilleggins.png"});
Item.createArmorItem("mithrilboots", "Мифриловые ботинки", {name: "mithrilboots", meta: 0}, {type: "boots", armor: 8, durability: 600, texture: "armor/mithrilboots.png"});

Recipes.addShaped({id: ItemID.copperhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.copperingot, 0]);
Recipes.addShaped({id: ItemID.silverhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.silveringot, 0]);
Recipes.addShaped({id: ItemID.mithrilhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.mithrilingot, 0]);
Recipes.addShaped({id: ItemID.copperchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.copperingot, 0]);
Recipes.addShaped({id: ItemID.silverchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.silveringot, 0]);
Recipes.addShaped({id: ItemID.mithrilchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.mithrilingot, 0]);
Recipes.addShaped({id: ItemID.copperleggins, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.copperingot, 0]);
Recipes.addShaped({id: ItemID.silverleggins, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.silveringot, 0]);
Recipes.addShaped({id: ItemID.mithrilleggins, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.mithrilingot, 0]);
Recipes.addShaped({id: ItemID.copperboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.copperingot, 0]);
Recipes.addShaped({id: ItemID.silverboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.silveringot, 0]);
Recipes.addShaped({id: ItemID.mithrilboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.mithrilingot, 0]);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<95;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copperore, 0, 10);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.silverore, 0, 10);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mithrilore, 0, 3);
    }
}
)


IDRegistry.genBlockID("stonemet");
Block.createBlock("stonemet", [{name: "Оболочка живой комнаты", texture: [["stonemet", 0], ["stonemet", 0], ["stonemet", 0], ["stonemet", 0], ["stonemet", 0], ["stonemet", 0]], inCreative: true}]);
//Hah enut ke issomoko sa, ahres, ahres sa noke, ahres sa, ahres sa, ahres Ar, Ar usha sa k aho.
IDRegistry.genBlockID("aedestone");
Block.createBlock("aedestone", [{name: "Камень аэдэ", texture: [["aedestone", 0], ["aedestone", 0], ["aedestone", 0], ["aedestone", 0], ["aedestone", 0], ["aedestone", 0]], inCreative: true}]);
IDRegistry.genItemID("woodcora");
Item.createItem("woodcora", "Кора дуба", {name: "woodcora", meta: 0}, {stack: 64});
IDRegistry.genItemID("ripdust");
Item.createItem("ripdust", "Могильная пыль", {name: "ripdust", meta: 0}, {stack: 64});
IDRegistry.genBlockID("silblock");
Block.createBlock("silblock", [{name: "Соль", texture: [["silblock", 0], ["silblock", 0], ["silblock", 0], ["silblock", 0], ["silblock", 0], ["silblock", 0]], inCreative: true}]);
IDRegistry.genItemID("sil");
Item.createItem("sil", "Соль", {name: "sil", meta: 0}, {stack: 1});
IDRegistry.genItemID("silverpula");
Item.createItem("silverpula", "Серебрянная пуля", {name: "silverpula", meta: 0}, {stack: 64});

IDRegistry.genItemID("rubashka");

Item.createArmorItem("rubashka", "Рубашка наизнанку", {name: "rubashka", meta: 0}, {type: "chestplate", armor: 0, durability: 50, texture: "armor/rubashka.png"});

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<100;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.silblock, 0, 1);
    }
}
)

IDRegistry.genItemID("redstring");
Item.createItem("redstring", "Красная нить", {name: "redstring", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ripdust, count: 8, data: 0}, [ " a ", "aba", " a "], ['a', 289, 0, 'b', 3, 0]);

Recipes.addShaped({id: ItemID.rubashka, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 35, 0]);

Recipes.addShaped({id: BlockID.aedestone, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 98, 0]);

Recipes.addShaped({id: ItemID.woodcora, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', 17, 0]);

Recipes.addShaped({id: ItemID.sil, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.silblock, 0]);

Recipes.addShaped({id: ItemID.silverpula, count: 10, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.silveringot, 0]);

Recipes.addShaped({id: ItemID.redstring, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 287, 0, 'b', 351, 1]);

IDRegistry.genBlockID("motherplate");
Block.createBlock("motherplate", [{name: "Живая материнская плата", texture: [["motherplate", 0], ["motherplate", 0], ["motherplate", 0], ["motherplate", 0], ["motherplate", 0], ["motherplate", 0]], inCreative: true}]);

IDRegistry.genItemID("key");
Item.createItem("key", "Отмычка", {name: "key", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.key, count: 1, data: 0}, [ " a ", "bbb", " b "], ['a', ItemID.mithrilingot, 0, 'b', 266, 0]);

//редис?
IDRegistry.genBlockID("redice");
Block.createBlock("redice", [{name: "Красный лед", texture: [["redice", 0], ["redice", 0], ["redice", 0], ["redice", 0], ["redice", 0], ["redice", 0]], inCreative: true}]);

IDRegistry.genItemID("coursemelody");
Item.createItem("coursemelody", "Скверная мелодия", {name: "coursemelody", meta: 0}, {stack: 1});

IDRegistry.genItemID("bluelady");
Item.createItem("bluelady", "Сигареты Blue Lady", {name: "bluelady", meta: 0}, {stack: 64});

IDRegistry.genItemID("nastoy");
Item.createItem("nastoy", "Настой долголетия", {name: "nastoy", meta: 0}, {stack: 1});

//by Jon Winchester
IDRegistry.genItemID("blackbook");
Item.createItem("blackbook", "Путеводитель по паранормальному и сверхъестественному", {name: "blackbook", meta: 0}, {stack: 1});

IDRegistry.genItemID("coinno");
Item.createItem("coinno", "Монета Нет", {name: "coinno", meta: 0}, {stack: 1});

IDRegistry.genItemID("coinyes");
Item.createItem("coinyes", "Монета ∆а", {name: "coinyes", meta: 0}, {stack: 1});


IDRegistry.genItemID("keyone");
Item.createItem("keyone", "Первый ржавый ключ", {name: "keyone", meta: 0}, {stack: 1});

IDRegistry.genItemID("keytwo");
Item.createItem("keytwo", "Второй ржавый ключ", {name: "keytwo", meta: 0}, {stack: 1});

IDRegistry.genItemID("keytheree");
Item.createItem("keytheree", "Третий ржавый ключ", {name: "keytheree", meta: 0}, {stack: 1});

IDRegistry.genItemID("kicunebi");
Item.createItem("kicunebi", "Кицунэ-би", {name: "kicunebi", meta: 0}, {stack: 64});

IDRegistry.genItemID("pistol");
Item.createItem("pistol", "Пистолет", {name: "pistol", meta: 0}, {stack: 1});

IDRegistry.genItemID("satanasword");
IDRegistry.genItemID("satanashovel");
IDRegistry.genItemID("satanapickaxe");
IDRegistry.genItemID("satanaaxe");
Item.createItem("satanasword", "Меч Люцифера", {name: "satanasword", meta: 0}, {stack: 1});
Item.createItem("satanashovel", "Лопата Люцифера", {name: "satanashovel", meta: 0}, {stack: 1});
Item.createItem("satanapickaxe", "Кирка Люцифера", {name: "satanapickaxe", meta: 0}, {stack: 1});
Item.createItem("satanaaxe", "Топор Люцифера", {name: "satanaaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("satana", {durability: 1000000, level: 1000000, efficiency: 1000000, damage: 1000, enchantability: 1000000});
ToolAPI.setTool(ItemID.satanasword, "satana", ToolType.sword);
ToolAPI.setTool(ItemID.satanashovel, "satana", ToolType.shovel);
ToolAPI.setTool(ItemID.satanapickaxe, "satana", ToolType.pickaxe);
ToolAPI.setTool(ItemID.satanaaxe, "satana", ToolType.axe);

Block.setBlockShape(BlockID.aedestone, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.9, z: 0.9});

IDRegistry.genBlockID("chamite");
Block.createBlockWithRotation("chamite", [{name: "Дьявольский запрет", texture: [["chamite", 0], ["chamite", 0], ["chamite", 0], ["chamite", 0], ["chamite", 0], ["chamite", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.chamite, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<50;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.melore, 0, 20);
    }
}
)

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.aidhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 100, 100)
    }
if (boots.id == ItemID.germesboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
if (chest.id == ItemID.plashchpoluvidimka) {
    Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 2, 2)
    }
});

IDRegistry.genBlockID("marble");
Block.createBlockWithRotation("marble", [{name: "Мрамор", texture: [["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0], ["marble", 0]], inCreative: true}]);

IDRegistry.genBlockID("amethystore");
Block.createBlock("amethystore", [{name: "Аметистовая руда", texture: [["amethystore", 0], ["amethystore", 0], ["amethystore", 0], ["amethystore", 0], ["amethystore", 0], ["amethystore", 0]], inCreative: true}]);

IDRegistry.genBlockID("aquamarineore");
Block.createBlock("aquamarineore", [{name: "Аквамариновая руда", texture: [["aquamarineore", 0], ["aquamarineore", 0], ["aquamarineore", 0], ["aquamarineore", 0], ["aquamarineore", 0], ["aquamarineore", 0]], inCreative: true}]);

//Происходит от имени Лилит - первого ребенка Люцифера
IDRegistry.genBlockID("Lilithium");
Block.createBlock("Lilithium", [{name: "Лилитиумная руда", texture: [["Lilithium", 0], ["Lilithium", 0], ["Lilithium", 0], ["Lilithium", 0], ["Lilithium", 0], ["Lilithium", 0]], inCreative: true}]);

IDRegistry.genBlockID("nenicore");
Block.createBlock("nenicore", [{name: "Нениковая руда", texture: [["nenicore", 0], ["nenicore", 0], ["nenicore", 0], ["nenicore", 0], ["nenicore", 0], ["nenicore", 0]], inCreative: true}]);

//Посейдон - брат Зевса, бог морей и океанов
IDRegistry.genBlockID("poceidonijore");
Block.createBlock("poceidonijore", [{name: "Посейдониевая руда", texture: [["poceidonijore", 0], ["poceidonijore", 0], ["poceidonijore", 0], ["poceidonijore", 0], ["poceidonijore", 0], ["poceidonijore", 0]], inCreative: true}]);
//Oceanium

IDRegistry.genBlockID("saphireore");
Block.createBlock("saphireore", [{name: "Сапфировая руда", texture: [["saphireore", 0], ["saphireore", 0], ["saphireore", 0], ["saphireore", 0], ["saphireore", 0], ["saphireore", 0]], inCreative: true}]);

IDRegistry.genBlockID("topazore");
Block.createBlock("topazore", [{name: "Топазовая руда", texture: [["topazore", 0], ["topazore", 0], ["topazore", 0], ["topazore", 0], ["topazore", 0], ["topazore", 0]], inCreative: true}]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<95;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.marble, 10, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amethystore, 0, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquamarineore, 0, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.Lilithium, 0, 1);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nenicore, 0, 5);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.poceidonijore, 0, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.saphireore, 0, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 4);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.topazore, 0, 10);
    }
}
)

IDRegistry.genItemID("amethyst");
Item.createItem("amethyst", "Аметист", {name: "amethyst", meta: 0}, {stack: 1});

IDRegistry.genItemID("aquamarine");
Item.createItem("aquamarine", "Аквамарин", {name: "aquamarine", meta: 0}, {stack: 1});

IDRegistry.genItemID("lilithium");
Item.createItem("lilithium", "Лилитиум", {name: "lilithium", meta: 0}, {stack: 1});

IDRegistry.genItemID("nenic");
Item.createItem("nenic", "Неник", {name: "nenic", meta: 0}, {stack: 1});

IDRegistry.genItemID("poceidoniy");
Item.createItem("poceidoniy", "Посейдоний", {name: "poceidoniy", meta: 0}, {stack: 1});

IDRegistry.genItemID("saphirre");
Item.createItem("saphirre", "Сапфир", {name: "saphirre", meta: 0}, {stack: 1});

IDRegistry.genItemID("topaz");
Item.createItem("topaz", "Топаз", {name: "topaz", meta: 0}, {stack: 1});

Recipes.addFurnace(BlockID.amethystore, ItemID.amethyst, 1);

Recipes.addFurnace(BlockID.aquamarineore, ItemID.aquamarine, 1);

Recipes.addFurnace(BlockID.Lilithium, ItemID.lilithium, 1);

Recipes.addFurnace(BlockID.nenicore, ItemID.nenic, 1);

Recipes.addFurnace(BlockID.poceidonijore, ItemID.poceidoniy, 1);

Recipes.addFurnace(BlockID.saphireore, ItemID.saphirre, 1);

Recipes.addFurnace(BlockID.topazore, ItemID.topaz, 1);

IDRegistry.genBlockID("copperblock");
Block.createBlock("copperblock", [{name: "Медный блок", texture: [["copperblock", 0], ["copperblock", 0], ["copperblock", 0], ["copperblock", 0], ["copperblock", 0], ["copperblock", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.copperblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.copperingot, 0]);

IDRegistry.genBlockID("copperblockr");
Block.createBlock("copperblockr", [{name: "Медные кирпичи", texture: [["copperblockr", 0], ["copperblockr", 0], ["copperblockr", 0], ["copperblockr", 0], ["copperblockr", 0], ["copperblockr", 0]], inCreative: true}]);

IDRegistry.genBlockID("copperblockre");
Block.createBlock("copperblockre", [{name: "Резные медные кирпичи", texture: [["copperblockre", 0], ["copperblockre", 0], ["copperblockre", 0], ["copperblockre", 0], ["copperblockre", 0], ["copperblockre", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.copperblockr, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.copperingot, 0]);

Recipes.addShaped({id: BlockID.copperblockre, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.copperingot, 0]);

Recipes.addShaped({id: ItemID.aidhelmet, count: 1, data: 0}, [ "aba", "cac", "c c"], ['a', BlockID.marble, 0, 'b', ItemID.topaz, 0, 'c', ItemID.copperingot, 0]);

Recipes.addShaped({id: ItemID.poceidontrident, count: 1, data: 0}, [ " ab", "cda", "ec "], ['a', ItemID.aquamarine, 0, 'b', ItemID.poceidoniy, 0, 'c', ItemID.saphirre, 0, 'd', ItemID.mithrilingot, 0, 'e', ItemID.lilithium, 0]);

Recipes.addShaped({id: ItemID.germesboots, count: 1, data: 0}, [ "aba", "cdc", "eae"], ['a', ItemID.amethyst, 0, 'b', ItemID.lilithium, 0, 'c', ItemID.lilithium, 0, 'd', ItemID.nenic, 0, 'e', ItemID.silveringot, 0]);

IDRegistry.genBlockID("rainbow");
Block.createBlock("rainbow", [{name: "Радуга", texture: [["rainbow", 0], ["rainbow", 0], ["rainbow", 0], ["rainbow", 0], ["rainbow", 0], ["rainbow", 0]], inCreative: true}]);

//Абсолютно бесполезные монеты
IDRegistry.genItemID("plasticgoldmoney");
Item.createItem("plasticgoldmoney", "Пластиковая золотая монета", {name: "plasticgoldmoney", meta: 0}, {stack: 1});

IDRegistry.genItemID("goldmoney");
Item.createItem("goldmoney", "Золотая монета", {name: "goldmoney", meta: 0}, {stack: 1});

//Стакан формальдегида, чайная ложка соли, две чайные ложки растворителя, литр крови саламандры и щепотку корицы (для вкуса)
IDRegistry.genItemID("dezombiepotion");
Item.createItem("dezombiepotion", "∆eзомбирующее зелье", {name: "dezombiepotion", meta: 0}, {stack: 1});

IDRegistry.genBlockID("bunkerblock");
Block.createBlock("bunkerblock", [{name: "Железный блок бункера", texture: [["bunkerblock", 0], ["bunkerblock", 0], ["bunkerblock", 0], ["bunkerblock", 0], ["bunkerblock", 0], ["bunkerblock", 0]], inCreative: true}]);

IDRegistry.genBlockID("inoplanetblock");
Block.createBlock("inoplanetblock", [{name: "Блок инопланетного железа", texture: [["inoplanetblock", 0], ["inoplanetblock", 0], ["inoplanetblock", 0], ["inoplanetblock", 0], ["inoplanetblock", 0], ["inoplanetblock", 0]], inCreative: true}]);

Recipes.addShaped({id: ItemID.plasticgoldmoney, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 266, 0]);

Recipes.addShaped({id: ItemID.goldmoney, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 388, 0]);

Recipes.addShaped({id: BlockID.bunkerblock, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 42, 0]);

IDRegistry.genItemID("plashchpoluvidimka");

Item.createArmorItem("plashchpoluvidimka", "Плащ полувидимка", {name: "plashchpoluvidimka", meta: 0}, {type: "chestplate", armor: 0, durability: 50, texture: "armor/plashchpoluvidimka.png"});

IDRegistry.genItemID("blood");
Item.createItem("blood", "Кровь", {name: "blood", meta: 0}, {});

Block.createBlock("pentagram", [{name: "Защищающая пентаграмма", texture: [["pentagram", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.pentagram, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.hellmel)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.pentagram, 0);
Player.decreaseCarriedItem (1);
}
});
IDRegistry.genBlockID("summon_satan");
Block.createBlock("summon_satan", [{name: "Призыв Люцифера", texture: [["summon_satan", 0], ["summon_satan", 0], ["summon_satan", 0], ["summon_satan", 0], ["summon_satan", 0], ["summon_satan", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.summon_satan, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});
IDRegistry.genBlockID("hearse"); 
Block.createBlock("hearse", [{name: "Катафалк", texture: [["planks", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.hearse, {x: -0.5, y: 0, z: 0.1}, {x: 1.5, y: 0.8, z: 0.9});

IDRegistry.genBlockID("lilithsamael"); 
Block.createBlock("lilithsamael", [{name: "Призыв Лилит", texture: [["lilithsamael", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.lilithsamael, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mel)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.chamite, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==263)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.lilithsamael, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("soul");
Item.createItem("soul", "Слабая душа", {name: "soul", meta: 0}, {});

IDRegistry.genItemID("soul_bottle");
Item.createItem("soul_bottle", "∆уша в бутылке", {name: "soul_bottle", meta: 0}, {});

IDRegistry.genItemID("soul_pearl");
Item.createItem("soul_pearl", "Жемчуг душ", {name: "soul_pearl", meta: 0}, {});

IDRegistry.genItemID("scythe");
Item.createItem("scythe", "Коса душ", {name: "scythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("scythe", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});

Recipes.addShaped({id: ItemID.scythe, count: 1, data: 0}, [ "abb", "c  ", "a  "], ['a', ItemID.mithrilingot, 0, 'b', 1, 0, 'c', 280, 0]);

IDRegistry.genItemID("death_scythe");
Item.createItem("death_scythe", "Коса Смерти", {name: "death_scythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("death_scythe", {durability: 3400, level: 4, efficiency: 8, damage: 1000, enchantability: 14});

var Mobs = { 
drop: function(mobs, id, drop){ 
Callback.addCallback("EntityDeath", function(entity){ 
 let item = Player.getCarriedItem(); 
 if((Entity.getType(entity) == mobs) && (item.id == id)){ 
   var coords = Entity.getPosition(entity); 
 World.drop(coords.x, coords.y, coords.z, drop, 1, 0); 
 } 
 }); 
} 
}; 

Mobs.drop(33, ItemID.scythe, ItemID.soul)
Mobs.drop(15, ItemID.scythe, ItemID.soul)
Mobs.drop(10, ItemID.scythe, ItemID.soul)
Mobs.drop(11, ItemID.scythe, ItemID.soul)
Mobs.drop(12, ItemID.scythe, ItemID.soul)
Mobs.drop(13, ItemID.scythe, ItemID.soul)
Mobs.drop(14, ItemID.scythe, ItemID.soul)
Mobs.drop(28, ItemID.scythe, ItemID.soul)
Mobs.drop(22, ItemID.scythe, ItemID.soul)
Mobs.drop(16, ItemID.scythe, ItemID.soul)
Mobs.drop(19, ItemID.scythe, ItemID.soul)
Mobs.drop(18, ItemID.scythe, ItemID.soul)
Mobs.drop(23, ItemID.scythe, ItemID.soul)
Mobs.drop(24, ItemID.scythe, ItemID.soul)
Mobs.drop(25, ItemID.scythe, ItemID.soul)
Mobs.drop(26, ItemID.scythe, ItemID.soul)
Mobs.drop(27, ItemID.scythe, ItemID.soul)
Mobs.drop(37, ItemID.scythe, ItemID.soul)
Mobs.drop(39, ItemID.scythe, ItemID.soul)
Mobs.drop(34, ItemID.scythe, ItemID.soul)
Mobs.drop(48, ItemID.scythe, ItemID.soul)
Mobs.drop(46, ItemID.scythe, ItemID.soul)
Mobs.drop(37, ItemID.scythe, ItemID.soul)
Mobs.drop(36, ItemID.scythe, ItemID.soul)
Mobs.drop(44, ItemID.scythe, ItemID.soul)
Mobs.drop(36, ItemID.scythe, ItemID.soul)
Mobs.drop(47, ItemID.scythe, ItemID.soul)
Mobs.drop(17, ItemID.scythe, ItemID.soul)
Mobs.drop(36, ItemID.scythe, ItemID.soul)
Mobs.drop(40, ItemID.scythe, ItemID.soul)
Mobs.drop(45, ItemID.scythe, ItemID.soul)
Mobs.drop(68, ItemID.scythe, ItemID.soul)
Mobs.drop(50, ItemID.scythe, ItemID.soul)
Mobs.drop(55, ItemID.scythe, ItemID.soul)
Mobs.drop(42, ItemID.scythe, ItemID.soul)
Mobs.drop(41, ItemID.scythe, ItemID.soul)
Mobs.drop(43, ItemID.scythe, ItemID.soul)
Mobs.drop(54, ItemID.scythe, ItemID.soul)
//На про­тяже­нии 2000 лет сим­во­лом ужас­но­го Ан­тихрис­та, ко­торый при­дет пра­вить ми­ром пе­ред Страш­ным су­дом, счи­талось чис­ло 666. Для мно­гих это чис­ло нес­час­тли­вое: да­же в Ев­ро­пар­ла­мен­те мес­то под но­мером 666 всег­да ос­та­ет­ся пус­тым. Чис­ло 666 приш­ло к нам из От­кро­вения — са­мой пос­ледней и са­мой стран­ной из всех книг Биб­лии. «Кто име­ет ум, тот соч­ти чис­ло зве­ря, ибо это чис­ло че­лове­чес­кое; чис­ло его шесть­сот шесть­де­сят шесть». Но это неп­ра­виль­ное чис­ло. В 2005 го­ду был сде­лан пе­ревод са­мого ран­не­го из из­вес­тных че­лове­чес­тву тек­стов Кни­ги От­кро­вения, ко­торый яс­но да­ет по­нять, что речь идет о чис­ле 616. 1700-лет­ний па­пирус был най­ден на свал­ке еги­пет­ско­го го­рода Ок­си­рин­хус и рас­шифро­ван груп­пой уче­ных-па­ле­ог­ра­фов из Бир­мингем­ско­го уни­вер­си­тета под ру­ководс­твом про­фес­со­ра Дэ­вида Пар­ке­ра.
Mobs.drop(53, ItemID.scythe, ItemID.soul)
Mobs.drop(52, ItemID.scythe, ItemID.soul)

IDRegistry.genItemID("truesoul");
Item.createItem("truesoul", "∆уша", {name: "truesoul", meta: 0}, {});

Recipes.addShaped({id: ItemID.truesoul, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.soul, 0, 'b', ItemID.mithrilingot, 0]);

Recipes.addShaped({id: ItemID.soul_bottle, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.truesoul, 0, 'b', 374, 0]);

Recipes.addShaped({id: ItemID.soul_pearl, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.truesoul, 0, 'b', 368, 0]);

ToolAPI.setTool(ItemID.scythe, "scythe", ToolType.sword);

ToolAPI.setTool(ItemID.death_scythe, "death_scythe", ToolType.sword);

  var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ 
  lightlevel: 11, 
  lightopacity: 0 
  }); 

IDRegistry.genItemID("deathblood");
Item.createItem("deathblood", "Кровь мертвеца", {name: "deathblood", meta: 0}, {});

IDRegistry.genItemID("demonblood");
Item.createItem("demonblood", "∆емоническая кровь", {name: "demonblood", meta: 0}, {});

IDRegistry.genItemID("enderblood");
Item.createItem("enderblood", "Кровь из Края", {name: "enderblood", meta: 0}, {});

IDRegistry.genItemID("sprutblood");
Item.createItem("sprutblood", "Кровь спрута", {name: "sprutblood", meta: 0}, {});

IDRegistry.genItemID("bloods");
Item.createItem("bloods", "Жертвенный кинжал", {name: "bloods", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bloods", {durability: 200, level: 5, efficiency: 10, damage: 5, enchantability: 10});
ToolAPI.setTool(ItemID.bloods, "bloods", ToolType.sword);

Mobs.drop(33, ItemID.bloods, ItemID.blood)
Mobs.drop(15, ItemID.bloods, ItemID.blood)
Mobs.drop(10, ItemID.bloods, ItemID.blood)
Mobs.drop(11, ItemID.bloods, ItemID.blood)
Mobs.drop(12, ItemID.bloods, ItemID.blood)
Mobs.drop(13, ItemID.bloods, ItemID.blood)
Mobs.drop(14, ItemID.bloods, ItemID.blood)
Mobs.drop(28, ItemID.bloods, ItemID.blood)
Mobs.drop(22, ItemID.bloods, ItemID.blood)
Mobs.drop(16, ItemID.bloods, ItemID.blood)
Mobs.drop(19, ItemID.bloods, ItemID.blood)
Mobs.drop(18, ItemID.bloods, ItemID.blood)
Mobs.drop(23, ItemID.bloods, ItemID.blood)
Mobs.drop(24, ItemID.bloods, ItemID.blood)
Mobs.drop(25, ItemID.bloods, ItemID.blood)
Mobs.drop(37, ItemID.bloods, ItemID.blood)
Mobs.drop(39, ItemID.bloods, ItemID.blood)
Mobs.drop(36, ItemID.bloods, ItemID.blood)
Mobs.drop(36, ItemID.bloods, ItemID.blood)
Mobs.drop(40, ItemID.bloods, ItemID.blood)
Mobs.drop(45, ItemID.bloods, ItemID.blood)
Mobs.drop(68, ItemID.bloods, ItemID.blood)
Mobs.drop(50, ItemID.bloods, ItemID.blood)
Mobs.drop(41, ItemID.bloods, ItemID.blood)
Mobs.drop(43, ItemID.bloods, ItemID.blood)
Mobs.drop(27, ItemID.bloods, ItemID.deathblood)
Mobs.drop(44, ItemID.bloods, ItemID.deathblood)
Mobs.drop(47, ItemID.bloods, ItemID.deathblood)
Mobs.drop(38, ItemID.bloods, ItemID.enderblood)
Mobs.drop(54, ItemID.bloods, ItemID.enderblood)
Mobs.drop(53, ItemID.bloods, ItemID.enderblood)
Mobs.drop(55, ItemID.bloods, ItemID.enderblood)
Mobs.drop(36, ItemID.bloods, ItemID.demonblood)
Mobs.drop(42, ItemID.bloods, ItemID.demonblood)
Mobs.drop(41, ItemID.bloods, ItemID.demonblood)
Mobs.drop(43, ItemID.bloods, ItemID.demonblood)
Mobs.drop(17, ItemID.bloods, ItemID.sprutblood)

Mobs.drop(33, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(15, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(10, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(11, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(12, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(13, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(14, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(28, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(22, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(16, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(19, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(18, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(23, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(24, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(25, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(26, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(27, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(37, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(39, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(34, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(48, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(46, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(37, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(36, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(44, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(36, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(47, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(17, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(36, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(40, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(45, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(68, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(50, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(55, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(42, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(41, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(43, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(54, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(53, ItemID.death_scythe, ItemID.truesoul)
Mobs.drop(52, ItemID.death_scythe, ItemID.truesoul)

//Для превращения песка душ в слабые души. Пишу что бы не забыть.
IDRegistry.genBlockID("mitsob");
Block.createBlock("mitsob", [{name: "Мифриловый собиратель", texture: [["mitsob", 0], ["mitsob", 0], ["mitsobdisp", 0], ["mitsob", 0], ["mitsobpen", 0], ["mitsob", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mitsob, count: 1, data: 0}, [ "aba", "aca", "ada"], ['a', ItemID.mithrilingot, 0, 'b', ItemID.soul_pearl, 0, 'c', ItemID.lilithium, 0, 'd', BlockID.pentagram, 0]);

Recipes.addShaped({id: ItemID.bloods, count: 1, data: 0}, [ "  a", "  b", "   "], ['a', 1, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.death_scythe, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.truesoul, 0, 'b', ItemID.scythe, 0]);

IDRegistry.genItemID("souldust");
Item.createItem("souldust", "Пыль душ", {name: "souldust", meta: 0}, {});

Recipes.addShaped({id: ItemID.souldust, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 88, 0]);

IDRegistry.genBlockID("alchemyfurnace");
Block.createBlock("alchemyfurnace", [{name: "Алхимическая печь", texture: [["brick", 0], ["furnace_top", 0], ["alchemyfurnace", 0], ["alchemyfurnace1", 0], ["alchemyfurnace1", 0], ["alchemyfurnace1", 0]], inCreative: true}]);

IDRegistry.genItemID("krest");
Item.createItem("krest", "Золотой крестик", {name: "krest", meta: 0}, {});

IDRegistry.genItemID("silverkrest");
Item.createItem("silverkrest", "Cepeбрянный крестик", {name: "silverkrest", meta: 0}, {});

IDRegistry.genItemID("woodkrest");
Item.createItem("woodkrest", "Деревянный крест", {name: "woodkrest", meta: 0}, {});

IDRegistry.genItemID("soulsword");
IDRegistry.genItemID("soulshovel");
IDRegistry.genItemID("soulpickaxe");
IDRegistry.genItemID("soulaxe");
Item.createItem("soulsword", "Меч душ", {name: "soulsword", meta: 0}, {stack: 1});
Item.createItem("soulshovel", "Лопата душ", {name: "soulshovel", meta: 0}, {stack: 1});
Item.createItem("soulpickaxe", "Кирка душ", {name: "soulpickaxe", meta: 0}, {stack: 1});
Item.createItem("soulaxe", "Топор душ", {name: "soulaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("soul", {durability: 3000, level: 5, efficiency: 10, damage: 20, enchantability: 10});
ToolAPI.setTool(ItemID.soulsword, "soul", ToolType.sword);
ToolAPI.setTool(ItemID.soulshovel, "soul", ToolType.shovel);
ToolAPI.setTool(ItemID.soulpickaxe, "soul", ToolType.pickaxe);
ToolAPI.setTool(ItemID.soulaxe, "soul", ToolType.axe);

Recipes.addShaped({id: ItemID.soulpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.truesoul, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.soulaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.truesoul, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.soulshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.truesoul, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.soulsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.truesoul, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.krest, count: 1, data: 0}, [ " a ", "aaa", " a "], ['a', 266, 0]);

Recipes.addShaped({id: ItemID.silverkrest, count: 1, data: 0}, [ " a ", "aaa", " a "], ['a', ItemID.silveringot, 0]);

Recipes.addShaped({id: ItemID.woodkrest, count: 1, data: 0}, [ " a ", "aaa", " a "], ['a', 17, 0]);

//гуи мифрилового собирателя

var guiMithrilSob = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Мифриловый собиратель"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.mitsob, { 
 
getGuiScreen: function(){ 
return guiMithrilSob; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.souldust, data: 0},{id: ItemID.soul, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});

//гуи алхимической печи

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

  var guiAlchemyFurnace = new UI.StandartWindow({
       standart: {
        header: {text: {text: "Алхимическая печь"}},
        inventory: {standart: true},
        background: {standart: true}
       },
       
       drawing: [
        {type: "bitmap", x: 530, y: 150, bitmap: "furnace_bar_background", scale: 3.2},
       ],
       
       elements: {
       "slotFuel1": {type: "slot", x: 410, y: 312},
       "slotFuel2": {type: "slot", x: 472, y: 312},
       "burningScale": {type: "scale", x: 440, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "progressScale": {type: "scale", x: 530, y: 150, direction: 0, value: 0, bitmap: "furnace_bar_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 460, y: 177},
        "slotSource2": {type: "slot", x: 398, y: 177},
        "slotSource3": {type: "slot", x: 460, y: 115},
        "slotSource4": {type: "slot", x: 398, y: 115},
        "slotResult1": {type: "slot", x: 610, y: 116},
        "slotResult2": {type: "slot", x: 671, y: 116},
        "slotResult3": {type: "slot", x: 610, y: 176},
        "slotResult4": {type: "slot", x: 671, y: 176},
      
       }
      });
  TileEntity.registerPrototype(BlockID.alchemyfurnace, {
  	
    getGuiScreen: function(){
    return guiAlchemyFurnace
  }
  });
  
  IDRegistry.genBlockID("angeliz");
  IDRegistry.genBlockID("tipettulpa");
  IDRegistry.genBlockID("reaper");
  
  Block.createBlock("angeliz", [{name: "Изгонение ангела", texture: [["angeliz", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.angeliz, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Block.createBlock("tipettulpa", [{name: "Тибетская тульпа", texture: [["tipettulpa", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.tipettulpa, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Block.createBlock("reaper", [{name: "Ловушка для жнецов", texture: [["reaper", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.reaper, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("limbdoors");
Block.createBlock("limbdoors", [{name: "Дверь чистилища", texture: [["limbdoors", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.limbdoors, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});


//MOBS______________________________

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Ghost");
Item.createItem("Ghost", "Призыв призрака", {name: "Ghost", data: 0});

var Ghost = MobRegistry.registerEntity("Ghost");
Ghost.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Ghost.png");//skin
},

attackedBy: function(attacker, amount){
 //sound
}
});

Ghost.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Ghost.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Ghost", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Ghost", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Ghost){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

//_____________________________________________

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("JeffTheKiller");
Item.createItem("JeffTheKiller", "Призыв Джеффа Убийцы", {name: "JeffTheKiller", data: 0});

var JeffTheKiller = MobRegistry.registerEntity("JeffTheKiller");
JeffTheKiller.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/JeffTheKiller.png");//skin
 Entity.setCarriedItem(this.entity, ItemID.bloods, 1, 0);
},

attackedBy: function(attacker, amount){
 //sound
}
});

JeffTheKiller.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
JeffTheKiller.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("JeffTheKiller", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("JeffTheKiller", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == JeffTheKiller){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.bloods, 0, 2);
}
});*/ //droped жертвенный кинжал

//_____________________________________________

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Slenderman");
Item.createItem("Slenderman", "Призыв Слендермена", {name: "Slenderman", data: 0});

var Slenderman = MobRegistry.registerEntity("Slenderman");
Slenderman.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 26);//render
 Entity.setSkin(this.entity, "mob/Slenderman.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},

attackedBy: function(attacker, amount){
 //sound
}
});

Slenderman.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 3}
}
});
Slenderman.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 2,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Slenderman", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Slenderman", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Slenderman){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

Callback.addCallback("DestroyBlock ", function (coords, block, player) {

});

IDRegistry.genBlockID("Soul"); 
  Block.createBlock("Soul", [{name: "Душа в бутылке", texture: [["soulbottleniz", 0], ["soulbottletop", 0], ["soulbottle", 0], ["soulbottle", 0], ["soulbottle", 0], ["soulbottle", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 13/16, 14/16, "soulbottle", 0);
model.addBox(5/16, 13/16, 5/16, 11/16, 15/16, 11/16, "oakk", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.Soul, -1, render);

Block.setBlockShape(BlockID.Soul, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

IDRegistry.genBlockID("plesen"); 
Block.createBlock("plesen", [{name: "Незримая плесень", texture: [["plesen", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.plesen, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("bloody"); 
Block.createBlock("bloody", [{name: "Кровь", texture: [["bloody", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.bloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("deathbloody"); 
Block.createBlock("deathbloody", [{name: "Кровь мертвеца", texture: [["deathbloody", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.deathbloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("demonbloody"); 
Block.createBlock("demonbloody", [{name: "∆емоническая кровь", texture: [["demonbloody", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.demonbloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("enderbloody"); 
Block.createBlock("enderbloody", [{name: "Кровь Края", texture: [["enderbloody", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.enderbloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("sprutbloody"); 
Block.createBlock("sprutbloody", [{name: "Кровь спрута", texture: [["sprutbloody", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.sprutbloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.blood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bloody, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.demonblood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.demonbloody, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.enderblood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.enderbloody, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.deathblood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.deathbloody, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.sprutblood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.sprutbloody, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genBlockID("ripdustblock"); 
Block.createBlock("ripdustblock", [{name: "Могильная пыль", texture: [["ripdustblock", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.ripdustblock, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("saltblock"); 
Block.createBlock("saltblock", [{name: "Соль", texture: [["saltblock", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.saltblock, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.sil)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.saltblock, 0);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.ripdust)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ripdustblock, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genBlockID("angelallo"); 
Block.createBlock("angelallo", [{name: "Разговор с ангелом", texture: [["angelallo", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.angelallo, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

IDRegistry.genBlockID("vase");
Block.createBlock("vase", [{name: "Чудовищная ваза", texture: [["vaseniz", 0], ["vasetop", 0], ["monstervase", 0], ["monstervase", 0], ["monstervase", 0], ["monstervase", 0]], inCreative: true}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(4/16, 0/16, 4/16, 12/16, 8/16, 12/16, "monstervase", 0);
model.addBox(5/16, 5/16, 5/16, 11/16, 13/16, 11/16, "monstervase", 0);
model.addBox(4/16, 13/16, 4/16, 12/16, 14/16, 12/16, "vasetop", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.vase, -1, render);

Block.setBlockShape(BlockID.vase, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

//00000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Oldman");
Item.createItem("Oldman", "Призыв SCP 106 - Старик", {name: "Oldman", data: 0});

var Oldman = MobRegistry.registerEntity("Oldman");
Oldman.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Oldman.png");//skin
Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},


attackedBy: function(attacker, amount){
 //sound
}
});

Oldman.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Oldman.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 20,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Oldman", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Oldman", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Oldman){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

//¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Scr");
Item.createItem("Scr", "Призыв SCP 096 - Скромник", {name: "Scr", data: 0});

var Scr = MobRegistry.registerEntity("Scr");
Scr.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Scr.png");//skin
},

attackedBy: function(attacker, amount){
 //sound
}
});

Scr.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Scr.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Scr", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Scr", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Scr){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

//llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Statue");
Item.createItem("Statue", "Призыв SCP 173 - Статуя", {name: "Statue", data: 0});

var Statue = MobRegistry.registerEntity("Statue");
Statue.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Statue.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Statue.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Statue.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 2,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Statue", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Statue", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Statue){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

IDRegistry.genBlockID("kres"); 
  Block.createBlock("kres", [{name: "Деревянный крест", texture: [["oakk", 0], ["oakk", 0], ["oakk", 0], ["oakk", 0], ["oakk", 0], ["oakk", 0]], inCreative: true}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(0/16, 8/16, 6/16, 16/16, 12/16, 10/16, "oakk", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.kres, -1, render);

Block.setBlockShape(BlockID.kres, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

IDRegistry.genItemID("angelsword");
Item.createItem("angelsword", "Клинок Ангела", {name: "angelsword", data: 0},{stack: 1});
ToolAPI.addToolMaterial("angel", {durability: 3400, level: 10, efficiency: 10, damage: 20, enchantability: 20});
ToolAPI.setTool(ItemID.angelsword, "angel", ToolType.sword);

IDRegistry.genItemID("vampireblood");
Item.createItem("vampireblood", "Кровь вампира", {name: "vampireblood", data: 0},{stack: 64});
IDRegistry.genBlockID("vampirebloody"); 
  Block.createBlock("vampirebloody", [{name: "Кровь вампира", texture: [["vampirebloody", 0], ["vampirebloody", 0], ["vampirebloody", 0], ["vampirebloody", 0], ["vampirebloody", 0], ["vampirebloody", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.vampirebloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.vampireblood)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.vampirebloody, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("werewolfteeth");
Item.createItem("werewolfteeth", "Клык вервульфа", {name: "werewolfteeth", data: 0},{stack: 64});

IDRegistry.genItemID("hellcrystal");
Item.createItem("hellcrystal", "Адский кристалл", {name: "hellcrystal", data: 0},{stack: 64});

IDRegistry.genItemID("adskajakakaha");
Item.createItem("adskajakakaha", "Адскайа какаха", {name: "adskajakakaha", data: 0},{isTech: true},{stack: 1});

IDRegistry.genItemID("Lucifer");
Item.createItem("Lucifer", "Призыв того к чему ты еще не готов", {name: "Lucifer", data: 0},{stack: 1});

IDRegistry.genItemID("lol");
Item.createItem("lol", "ЛОЛ Ты еще не готов!!!!!!!!!!!!!!!!", {name: "lol", data: 0},{isTech: true},{stack: 1});

IDRegistry.genItemID("figtebe");
Item.createItem("figtebe", "Фиг тебе", {name: "figtebe", data: 0},{isTech: true},{stack: 1});

Recipes.addShaped({id: 7, count: 1, data: 0}, [ "ab ", "ba ", "   "], ['a', 49, 0, 'b', 264, 0]);

Recipes.addShaped({id: 7, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 49, 0, 'b', ItemID.mithrilingot, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.Lucifer)
{
Player.addItemToInventory (ItemID.lol, 1);
Player.decreaseCarriedItem (1);
}
});

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Demon");
Item.createItem("Demon", "Призыв Демона", {name: "Demon", data: 0});

var Demon = MobRegistry.registerEntity("Demon");
Demon.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Demon.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Demon.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Demon.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Demon", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Demon", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Demon){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.demonblood, 0, 2);
}
});*/ //droped 

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Death");
Item.createItem("Death", "Призыв Смерти", {name: "Death", data: 0});

var Death = MobRegistry.registerEntity("Death");
Death.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Death.png");//skin
 Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);

},

attackedBy: function(attacker, amount){
 //sound
}
});

Death.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Death.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 20,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Death", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Death", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Death){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.dearhscythe, 0, 2);
}
});*/ //droped 

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Angel");
Item.createItem("Angel", "Призыв Ангела", {name: "Angel", data: 0});

var Angel = MobRegistry.registerEntity("Angel");
Angel.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Angel.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.three, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Angel.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Angel.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Angel", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Angel", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Angel){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.angelsword, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Ent");
Item.createItem("Ent", "Призыв Энта", {name: "Ent", data: 0});

var Ent = MobRegistry.registerEntity("Ent");
Ent.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Ent.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.twentyfive, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Ent.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Ent.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Ent", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Ent", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Ent){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 5, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Vampire");
Item.createItem("Vampire", "Призыв Вампира", {name: "Vampire", data: 0});

var Vampire = MobRegistry.registerEntity("Vampire");
Vampire.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Vampire.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Vampire.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Vampire.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 3,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Vampire", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Vampire", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Vampire){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.vampireblood, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Werewolf");
Item.createItem("Werewolf", "Призыв Вервульфа", {name: "Werewolf", data: 0});

var Werewolf = MobRegistry.registerEntity("Werewolf");
Werewolf.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Werewolf.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Werewolf.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Werewolf.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 3,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Werewolf", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Werewolf", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Werewolf){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.werewolfteeth, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Werewolfman");
Item.createItem("Werewolfman", "Призыв Вервульфа", {name: "Werewolf", data: 0});

var Werewolfman = MobRegistry.registerEntity("Werewolfman");
Werewolfman.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Werewolfman.png");//skin
},

attackedBy: function(attacker, amount){
 //sound
}
});

Werewolfman.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Werewolfman.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.2,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Werewolfman", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Werewolfman", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Werewolfman){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Suicidepashka");
Item.createItem("Suicidepashka", "Призыв Пашки Суицидника", {name: "Suicidepashka", data: 0},{isTech: true});

var Suicidepashka = MobRegistry.registerEntity("Suicidepashka");
Suicidepashka.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Suicidepashka.png");//skin
 Entity.setHealth(this.entity, 1000);

Entity.setArmorSlot(this.entity, 2, ItemID.million, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Suicidepashka.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Suicidepashka.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 20,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Suicidepashka", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Suicidepashka", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Suicidepashka){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.figtebe, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Angelstatue");
Item.createItem("Angelstatue", "Призыв Плачущего Ангела", {name: "Angelstatue", data: 0});

var Angelstatue = MobRegistry.registerEntity("Angelstatue");
Angelstatue.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Angelstatue.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Angelstatue.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Angelstatue.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.1,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Angelstatue", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Angelstatue", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Angelstatue){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 2, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Hellelemental");
Item.createItem("Hellelemental", "Призыв Адского Элементаля", {name: "Hellelemental", data: 0});

var Hellelemental = MobRegistry.registerEntity("Hellelemental");
Hellelemental.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Hellelemental.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Hellelemental.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Hellelemental.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Hellelemental", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Hellelemental", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Hellelemental){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, hellcrystal, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Adskajkakatonij");
Item.createItem("Adskajkakatonij", "Призыв Адскава Какатония", {name: "Adskajkakatonij", data: 0},{isTech: true});

var Adskajkakatonij = MobRegistry.registerEntity("Adskajkakatonij");
Adskajkakatonij.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 16);//render
 Entity.setSkin(this.entity, "mob/Adskajkakatonij.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Adskajkakatonij.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Adskajkakatonij.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.2,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Adskajkakatonij", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Adskajkakatonij", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Adskajkakatonij){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.adskayakakaha, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("SCP0871");
Item.createItem("SCP0871", "Призыв SCP 087-1 - Лестница", {name: "SCP0871", data: 0});

var SCP0871 = MobRegistry.registerEntity("SCP0871");
SCP0871.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/SCP0871.png");//skin
},

attackedBy: function(attacker, amount){
 //sound
}
});

SCP0871.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
SCP0871.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.2,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 0,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16

}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("SCP0871", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("SCP0871", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == SCP0871){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("God");
Item.createItem("God", "Призыв Бога", {name: "God", data: 0});

var God = MobRegistry.registerEntity("God");
God.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/God.png");//skin


Entity.setArmorSlot(this.entity, 2, ItemID.million, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

God.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
God.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 20,
attack_range: 1,
attack_rate: 60
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("God", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("God", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == God){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//GENERATION_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, 98, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.aedestone, 0);   
}}});

//Структура с чудовищной вазой

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 57, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 41, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 42, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 133, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.copperblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.amethistblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.aquamarineblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.Silverblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.mithrilblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.nenicblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.lilithiumblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.poceidonijblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.saphirreblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.melblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-2,  coords.z, 155, 0);
World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.vase, 0);  
World.setBlock(coords.x+1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x-1,coords.y-1,  coords.z, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z+1, 155, 0);   
World.setBlock(coords.x,coords.y-1,  coords.z-1, 155, 0);   
World.setBlock(coords.x,coords.y,  coords.z, 8, 0);

World.setBlock(coords.x+1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 155, 0); 

World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 155, 0); 
World.setBlock(coords.x+1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x-1,coords.y+3,  coords.z, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z+1, 155, 0); 
World.setBlock(coords.x,coords.y+3,  coords.z-1, 155, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.topazblock, 0);
}}});

IDRegistry.genBlockID("amethistblock");
Block.createBlock("amethistblock", [{name: "Аметистовый блок", texture: [["amethistblock", 0], ["amethistblock", 0], ["amethistblock", 0], ["amethistblock", 0], ["amethistblock", 0], ["amethistblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.amethistblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.amethyst, 0]);
Recipes.addShaped({id: ItemID.amethyst, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.amethistblock, 0]);

IDRegistry.genBlockID("aquamarineblock");
Block.createBlock("aquamarineblock", [{name: "Аквамариновый блок", texture: [["aquamarineblock", 0], ["aquamarineblock", 0], ["aquamarineblock", 0], ["aquamarineblock", 0], ["aquamarineblock", 0], ["aquamarineblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.aquamarineblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.aquamarine, 0]);
Recipes.addShaped({id: ItemID.aquamarine, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.aquamarineblock, 0]);

IDRegistry.genBlockID("Silverblock");
Block.createBlock("Silverblock", [{name: "Серебрянный блок", texture: [["Silverblock", 0], ["Silverblock", 0], ["Silverblock", 0], ["Silverblock", 0], ["Silverblock", 0], ["Silverblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.Silverblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.silveringot, 0]);
Recipes.addShaped({id: ItemID.silveringot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.Silverblock, 0]);

IDRegistry.genBlockID("mithrilblock");
Block.createBlock("mithrilblock", [{name: "Мифриловый блок", texture: [["mithrilblock", 0], ["mithrilblock", 0], ["mithrilblock", 0], ["mithrilblock", 0], ["mithrilblock", 0], ["mithrilblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.mithrilblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.mithrilingot, 0]);
Recipes.addShaped({id: ItemID.mithrilingot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.mithrilblock, 0]);

IDRegistry.genBlockID("nenicblock");
Block.createBlock("nenicblock", [{name: "Нениковый блок", texture: [["nenicblock", 0], ["nenicblock", 0], ["nenicblock", 0], ["nenicblock", 0], ["nenicblock", 0], ["nenicblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.nenicblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.nenic, 0]);
Recipes.addShaped({id: ItemID.nenic, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.nenicblock, 0]);

IDRegistry.genBlockID("lilithiumblock");
Block.createBlock("lilithiumblock", [{name: "Лилитиумный блок", texture: [["lilithiumblock", 0], ["lilithiumblock", 0], ["lilithiumblock", 0], ["lilithiumblock", 0], ["lilithiumblock", 0], ["lilithiumblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.lilithiumblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.lilithium, 0]);
Recipes.addShaped({id: ItemID.lilithium, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.lilithiumblock, 0]);

IDRegistry.genBlockID("poceidonijblock");
Block.createBlock("poceidonijblock", [{name: "Посейдониевый блок", texture: [["poceidoniumblock", 0], ["poceidoniumblock", 0], ["poceidoniumblock", 0], ["poceidoniumblock", 0], ["poceidoniumblock", 0], ["poceidoniumblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.poceidonijblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.poceidoniy, 0]);
Recipes.addShaped({id: ItemID.poceidoniy, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.poceidonijblock, 0]);

IDRegistry.genBlockID("saphirreblock");
Block.createBlock("saphirreblock", [{name: "Сапфировый блок", texture: [["saphirreblock", 0], ["saphirreblock", 0], ["saphirreblock", 0], ["saphirreblock", 0], ["saphirreblock", 0], ["saphirreblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.saphirreblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.saphirre, 0]);
Recipes.addShaped({id: ItemID.saphirre, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.saphirreblock, 0]);

IDRegistry.genBlockID("melblock");
Block.createBlock("melblock", [{name: "Меловой блок", texture: [["melblock", 0], ["melblock", 0], ["melblock", 0], ["melblock", 0], ["melblock", 0], ["melblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.melblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.mel, 0]);
Recipes.addShaped({id: ItemID.mel, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.melblock, 0]);

IDRegistry.genBlockID("topazblock");
Block.createBlock("topazblock", [{name: "Топазовый блок", texture: [["topazblock", 0], ["topazblock", 0], ["topazblock", 0], ["topazblock", 0], ["topazblock", 0], ["topazblock", 0]], inCreative: true}]);
Recipes.addShaped({id: ItemID.topaz, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.topazblock, 0]);
Recipes.addShaped({id: BlockID.topazblock, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.topaz, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-1,  coords.z, 41, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z, 41, 0);
World.setBlock(coords.x-1,coords.y-1,  coords.z, 41, 0);

World.setBlock(coords.x,coords.y,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+2,coords.y+2,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+3,coords.y+4,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+2,coords.y+5,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+3,coords.y+5,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+4,coords.y+6,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+3,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+4,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+2,coords.y+7,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+3,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+4,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+5,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+6,coords.y+8,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+3,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+4,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+5,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+6,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+7,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+8,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+9,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+10,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+11,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+12,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+13,coords.y+9,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+14,coords.y+9,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+11,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+12,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+13,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+14,coords.y+8,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+13,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+14,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+15,coords.y+7,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+13,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+14,coords.y+8,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+15,coords.y+8,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+14,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+15,coords.y+7,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+16,coords.y+7,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+14,coords.y+6,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+15,coords.y+6,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+16,coords.y+6,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+15,coords.y+5,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+16,coords.y+5,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+17,coords.y+5,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+15,coords.y+4,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+16,coords.y+4,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+17,coords.y+4,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+16,coords.y+3,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+17,coords.y+3,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+18,coords.y+3,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+16,coords.y+2,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+17,coords.y+2,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+18,coords.y+2,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+17,coords.y+1,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+18,coords.y+1,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+19,coords.y+1,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+17,coords.y,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+18,coords.y,  coords.z, BlockID.rainbow, 0);
World.setBlock(coords.x+19,coords.y,  coords.z, BlockID.rainbow, 0);

World.setBlock(coords.x+17,coords.y-1,  coords.z, 41, 0);
World.setBlock(coords.x+18,coords.y-1,  coords.z, 41, 0);
World.setBlock(coords.x+19,coords.y-1,  coords.z, 41, 0);
}}});
//SOLOMON KEY GENERATION_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.000002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.solomonkey, 0);
}}});

Recipes.addShaped({id: BlockID.solomonkey, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 7, 0]);

Recipes.addShaped({id: ItemID.Suicidepashka, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 7, 0]);

Recipes.addShaped({id: ItemID.Adskajkakatonij, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 7, 0]);

IDRegistry.genBlockID("beladonna"); 
  Block.createBlock("beladonna", [{name: "Беладонна", texture: [["beladonna", 0], ["beladonna", 0], ["beladonna", 0], ["beladonna", 0], ["beladonna", 0], ["beladonna", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "beladonna", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "beladonna", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.beladonna, -1, render);
Block.setBlockShape(BlockID.beladonna, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.beladonna, 0);
}}});

IDRegistry.genBlockID("mandragora"); 
  Block.createBlock("mandragora", [{name: "Мандрагора", texture: [["mandragora", 0], ["mandragora", 0], ["mandragora", 0], ["mandragora", 0], ["mandragora", 0], ["mandragora", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "mandragora", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "mandragora", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mandragora, -1, render);
Block.setBlockShape(BlockID.mandragora, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("fourclever"); 
  Block.createBlock("fourclever", [{name: "Четырехлистный клевер", texture: [["fourclever", 0], ["fourclever", 0], ["fourclever", 0], ["fourclever", 0], ["fourclever", 0], ["fourclever", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fourclever", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fourclever", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fourclever, -1, render);
Block.setBlockShape(BlockID.fourclever, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("iceium"); 
  Block.createBlock("iceium", [{name: "Ицеиум", texture: [["iceium", 0], ["iceium", 0], ["iceium", 0], ["iceium", 0], ["iceium", 0], ["iceium", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "iceium", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "iceium", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.iceium, -1, render);
Block.setBlockShape(BlockID.iceium, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("stoneflower"); 
  Block.createBlock("stoneflower", [{name: "Каменный цветок", texture: [["stoneflower", 0], ["stoneflower", 0], ["stoneflower", 0], ["stoneflower", 0], ["stoneflower", 0], ["stoneflower", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "stoneflower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "stoneflower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.stoneflower, -1, render);
Block.setBlockShape(BlockID.stoneflower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("bedrockflower"); 
  Block.createBlock("bedrockflower", [{name: "Бедрокоцвет", texture: [["bedrockflower", 0], ["bedrockflower", 0], ["bedrockflower", 0], ["bedrockflower", 0], ["bedrockflower", 0], ["bedrockflower", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "bedrockflower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "bedrockflower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bedrockflower, -1, render);
Block.setBlockShape(BlockID.bedrockflower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.mandragora, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.fourclever, 0); 
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bedrockflower, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.stoneflower, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.iceium, 0);
}}});

IDRegistry.genBlockID("blackbookshelf"); 
  Block.createBlock("blackbookshelf", [{name: "Книжная полка", texture: [["planks_oak", 0], ["planks_oak", 0], ["blackbookshelf", 0], ["bookshelf", 0], ["bookshelf", 0], ["bookshelf", 0]], inCreative: false}]);

//ЖИВАЯ КОМНАТА_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
    	//1
       World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-2, BlockID.stonemet, 0);
       //2
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.fleshblock, 0);
       //3
       World.setBlock(coords.x+4,coords.y+1,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 85, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 85, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 47, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.blackbookshelf, 0);
       //4
       World.setBlock(coords.x+4,coords.y+2,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-4, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+3, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-1, 72, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z, 72, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+2, 47, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+2, 47, 0);
       //5
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.fleshblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.fleshblock, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.fleshblock, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+3, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-3, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.stonemet, 0);
       //6 FINAL
       World.setBlock(coords.x,coords.y-1,  coords.z+4, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.z+4,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.stonemet, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.stonemet, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.stonemet, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.stonemet, 0);
}}});

IDRegistry.genItemID("hellsword");
IDRegistry.genItemID("hellshovel");
IDRegistry.genItemID("hellpickaxe");
IDRegistry.genItemID("hellaxe");
Item.createItem("hellsword", "Адский меч", {name: "hellsword", meta: 0}, {stack: 1});
Item.createItem("hellshovel", "Адская лопата", {name: "hellshovel", meta: 0}, {stack: 1});
Item.createItem("hellpickaxe", "Адская кирка", {name: "hellpickaxe", meta: 0}, {stack: 1});
Item.createItem("hellaxe", "Адский топор", {name: "hellaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("hell", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.hellsword, "hell", ToolType.sword);
ToolAPI.setTool(ItemID.hellshovel, "hell", ToolType.shovel);
ToolAPI.setTool(ItemID.hellpickaxe, "hell", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hellaxe, "hell", ToolType.axe);

IDRegistry.genItemID("hellhelmet");
IDRegistry.genItemID("hellchestplate");
IDRegistry.genItemID("hellleggings");
IDRegistry.genItemID("hellboots");

Item.createArmorItem("hellhelmet", "Адский шлем", {name: "hellhelmet", meta: 0}, {type: "helmet", armor: 10, durability: 650, texture: "armor/hellarmor_1.png"});
Item.createArmorItem("hellchestplate", "Адский нагрудник", {name: "hellchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/hellarmor_1.png"});
Item.createArmorItem("hellleggings", "Адские поножи", {name: "hellleggings", meta: 0}, {type: "leggings", armor: 12, durability: 700, texture: "armor/hellarmor_2.png"});
Item.createArmorItem("hellboots", "Адские ботинки", {name: "hellboots", meta: 0}, {type: "boots", armor: 10, durability: 600, texture: "armor/hellarmor_1.png"});

Recipes.addShaped({id: ItemID.hellsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.hellcrystal, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.hellcrystal, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.hellcrystal, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.hellcrystal, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.hellhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.hellcrystal, 0]);
Recipes.addShaped({id: ItemID.hellchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.hellcrystal, 0]);
Recipes.addShaped({id: ItemID.hellleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.hellcrystal, 0]);

Recipes.addShaped({id: ItemID.hellboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.hellcrystal, 0]);

Block.registerDropFunction(BlockID.blackbookshelf, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.blackbook, 1, 0]);
 return drop;
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.motherplate, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 41, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 42, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 57, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 133, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.copperblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.Silverblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.amethistblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.aquamarineblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.mithrilblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.nenicblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.lilithiumblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.poceidoniumblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.saphirreblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.melblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.topazblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 41, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 42, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 57, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 133, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.amethistblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.aquamarineblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.Silverblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.copperblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.mithrilblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.nenicblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.lilithiumblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.poceidoniumblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.saphirreblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.melblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.motherplate, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.motherplate, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.topazblock, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, 98, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, 98, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, 98, 0); 
       //2
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.ancientbloody, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.ancientbloody, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.ancientbloody, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 173, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 5, 0);
       //3
       World.setBlock(coords.x-2,coords.y+2,  coords.z, BlockID.blackbookshelf, 0);
       }}});
       
       IDRegistry.genBlockID("ancientbloody"); 
  Block.createBlock("ancientbloody", [{name: "Окаменелая кровь", texture: [["ancientbloody", 0], ["ancientbloody", 0], ["ancientbloody", 0], ["ancientbloody", 0], ["ancientbloody", 0], ["ancientbloody", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.ancientbloody, {x: 0, y: 0, z: 0}, {x: 1, y: 0.008, z: 1});

Recipes.addShaped({id: ItemID.nastoy, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.woodcora, 0, 'b', 374, 0]);

Recipes.addShaped({id: ItemID.pistol, count: 1, data: 0}, [ "aab", "a  ", "b  "], ['a', ItemID.silveringot, 0, 'b', ItemID.mithrilingot, 0]);





    
    

//GUIDE_API BLACK_BOOK_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("blackbook", { 
item: ItemID.blackbook, 
debug: false, 
textures: { 
background: "Black_in_Black", 
nextLink: "next", 
preLink: "pre", 
close: "close", 
}, 

				
pages: {
 
			"default": {
				nextLink: "next",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Paranormal", size: 30, color: android.graphics.Color.RED},
						{text: "В этой книге собрана вся информация о паранормальном и сверхъестественном.", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
						{text: "Руды, металлы, драгоценные камни", size: 26, link: "blocks", color: android.graphics.Color.BLUE},
						{text: "Травоведение", size: 26, link: "grass", color: android.graphics.Color.BLUE},
						{text: "Артефакты, первая глава", size: 26, link: "artefacts", color: android.graphics.Color.BLUE},
						{text: "Артефакты, вторая глава", size: 26, link: "artefactstwo", color: android.graphics.Color.BLUE},
						{text: "Симвология", size: 26, link: "symbols", color: android.graphics.Color.BLUE},
						{text: "Магические приборы", size: 26, link: "magic_machine", color: android.graphics.Color.BLUE},
						{text: "Бестиарий, глава 1", size: 26, link: "mobs", color: android.graphics.Color.BLUE},
						{text: "Бестиарий, глава 2", size: 26, link: "mobstwo", color: android.graphics.Color.BLUE},
						{text: "Стуктуры", size: 26, link: "structures", color: android.graphics.Color.BLUE},
						{text: "Ритуалы", size: 26, link: "rituals", color: android.graphics.Color.BLUE},
						
					]
				}
			},
			
						
			"items": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Предметы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны предметы не входящие в другие вкладки", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кора дуба", size: 29, link: "woodcora", color: android.graphics.Color.BLUE},
						{text: "Пистолет с серебрянными пулями", size: 25, link: "pistol", color: android.graphics.Color.BLUE},
						{text: "Пыль душ", size: 25, link: "souldust", color: android.graphics.Color.BLUE},						
					]
				}
			},
			

	"woodcora": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.woodcora, data: 0, clicker: {onClick: function(){alert("Кора дуба");}}},

 ],
 elements: [
 {text: "Кора дуба - предмет нужный для крафта настоя долголетия. Делается из дуба.", size: 18}
 ]
 }
	},
	
	
	"pistol": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.pistol, data: 0, clicker: {onClick: function(){alert("Пистолет");}}},

 ],
 elements: [
 {text: "Пистолет с серебрянными пулями довольно эффективное оружее, особенно против вервульфов. Крафт пистолета: серебрянный слиток х4, мифриловый слиток х2. Крафт серебрянной пули: серебрянный слиток х1", size: 18}
 ]
 }
	},
	
	"souldust": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.souldust, data: 0, clicker: {onClick: function(){alert("Пыль душ");}}},

 ],
 elements: [
 {text: "Пыль душ - пыль делающаяся из песка душ, нужна для переработки в слабые души в мифриловом собирателе. Сам по себе песок душ это рассыпанные души, долго находившиеся в аду и не вынесшие адских мучений", size: 18}
 ]
 }
	},
	
	"blocks": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Руды, металлы, драгоценные камни", size: 30, color: android.graphics.Color.RED},
						{text: "Металлы, драгоценные камни и некоторые вещи из них", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Мел", size: 29, link: "mel", color: android.graphics.Color.BLUE},
						{text: "Медь", size: 25, link: "copper", color: android.graphics.Color.BLUE},
						{text: "Серебро", size: 25, link: "silver", color: android.graphics.Color.BLUE},	
					{text: "Мифрил", size: 25, link: "mithril", color: android.graphics.Color.BLUE},	
					{text: "Соль", size: 25, link: "sil", color: android.graphics.Color.BLUE},	
					{text: "Мрамор", size: 25, link: "marble", color: android.graphics.Color.BLUE},	
					{text: "Аметист", size: 25, link: "amethyst", color: android.graphics.Color.BLUE},
	{text: "Аквамарин", size: 25, link: "aquamarine", color: android.graphics.Color.BLUE},	
	{text: "Лилитиум", size: 25, link: "lilithium", color: android.graphics.Color.BLUE},	
	{text: "Неник", size: 25, link: "nenic", color: android.graphics.Color.BLUE},	
	{text: "Посейдоний", size: 25, link: "poceidonij", color: android.graphics.Color.BLUE},	
	{text: "Сапфир", size: 25, link: "saphire", color: android.graphics.Color.BLUE},	
	{text: "Адский кристалл", size: 25, link: "hellcrystal", color: android.graphics.Color.BLUE},
	{text: "Топаз", size: 25, link: "toppaz", color: android.graphics.Color.BLUE},
					]
				}
			},
	
"mel": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.melkusok, data: 0, clicker: {onClick: function(){alert("Кусок мела");}}},

 ],
 elements: [
 {text: "Мел появляется в виде руды, переплавив ее можно получить кусок мела, а уже из 3 кусков сделать мел, которым можно рисовать. Так же моловые блоки встречаются в некоторых структурах.", size: 18}
 ]
 }
	},
	
	"copper": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.copperingot, data: 0, clicker: {onClick: function(){alert("Медный слиток");}}},

 ],
 elements: [
 {text: "Медь встречается в виде руды и в виде блоков в структурах. Можно переплавить, сделать броню и инструменты чуть слабее железных. Медь полезна своими свойствами отпугивающими ракшас", size: 18}
 ]
 }
	},
	
	"silver": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.silveringot, data: 0, clicker: {onClick: function(){alert("Серебрянный слиток");}}},

 ],
 elements: [
 {text: "Серебро встречается в виде руды и блоках в структурах. Можно переплавить, сделать броню, инструменты, пистолет и пули. Серебро известно тем что если до него дотронится вервульф, оборотень или перевертыш то у него будет ожог, поэтому серебро лучшее средство против вервульфов", size: 18}
 ]
 }
	},
	
	"mithril": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.mithrilingot, data: 0, clicker: {onClick: function(){alert("Мифриловый слиток");}}},

 ],
 elements: [
 {text: "Мифрил - металл из мифов. Очень прочен и броня с инструментами из него прочнее алмазных. Мифрил используется во многих крафтах.", size: 18}
 ]
 }
	},
	
	"sil": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.sil, data: 0, clicker: {onClick: function(){alert("Соль");}}},

 ],
 elements: [
 {text: "Соль - руда, может быть перемолата в порошок, а потом высыпана на землю. Призраки, баньши, полтергейсты и цибульгейсты боятся ее.", size: 18}
 ]
 }
	},
	
	"marble": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.marble, data: 0, clicker: {onClick: function(){alert("Мрамор");}}},

 ],
 elements: [
 {text: "В древней Греции очень часто использовался мрамор для украшений, ваз, горшков и т.д. и из-за этого он приобрел магические свойства и начал использоваться в крафтах артефактов", size: 18}
 ]
 }
	},
	
	"amethyst": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.amethyst, data: 0, clicker: {onClick: function(){alert("Аметист");}}},

 ],
 elements: [
 {text: "Аметист - руда. В переплавленом виде используется в крафтах.", size: 18}
 ]
 }
	},
	
	"aquamarine": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.aquamarine, data: 0, clicker: {onClick: function(){alert("Аквамарин");}}},

 ],
 elements: [
 {text: "Aqua в переводе с латинского - вода, а также вода это один из начальных элементов алхимии, поэтому аквамарин используется в крафтах артефактов. По молекулярному строению схож с посейдонием - камнем названым в честь бога воды - Посейдоном", size: 18}
 ]
 }
	},
	
	"lilithium": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lilithium, data: 0, clicker: {onClick: function(){alert("Лилитиум");}}},

 ],
 elements: [
 {text: "Лилитиум назван в честь Лилит - первого в мире демона, первого ребенка Люцифера. Из-за связи с Лилит он начал использоваться в крафтах артефактов", size: 18}
 ]
 }
	},
	
	"nenic": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.nenic, data: 0, clicker: {onClick: function(){alert("Неник");}}},

 ],
 elements: [
 {text: "Неник - камень название, которого происходит от Nenic Avostol, но это настолько древнее слово, что его значения ниуто не знает, известно только то что оно связано с магией, что дает ненику возможность использоваться в крафте артефактов.", size: 18}
 ]
 }
	},
	
	"poceidoniy": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.poceidonij, data: 0, clicker: {onClick: function(){alert("Посейдоний");}}},

 ],
 elements: [
 {text: "Посейдоний - камень созданый и названый в честь бога морей и океанов - Посейдона. Посейдон дал возможность этому камню использоваться в крафтах артефактов. По молекулярному строению схож с аквамарином - камнем воды", size: 18}
 ]
 }
	},
	
	"saphire": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.saphirre, data: 0, clicker: {onClick: function(){alert("Сапфир");}}},

 ],
 elements: [
 {text: "Сапфир - драгоценный камень использующийся в крафтах артефактов.", size: 18}
 ]
 }
	},
	
	"hellcrystal": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.hellcrystal, data: 0, clicker: {onClick: function(){alert("Адский кристалл");}}},

 ],
 elements: [
 {text: "По названию поеятно что его добыть модно только в аду из адских элементалей. Броня и инструменты из него сильнее мифриловых.", size: 18}
 ]
 }
	},
	
	"toppaz": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.topaz, data: 0, clicker: {onClick: function(){alert("Топаз");}}},

 ],
 elements: [
 {text: "Топаз - драгоценный камень для крафта артефактов.", size: 18}
 ]
 }
	},


"grass": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Травоведение", size: 30, color: android.graphics.Color.RED},
						{text: "Растения и то что из них делается", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Беладонна", size: 29, link: "beladonna", color: android.graphics.Color.BLUE},
						{text: "Мандрагора", size: 25, link: "mandragora", color: android.graphics.Color.BLUE},
						{text: "Бедрокоцвет", size: 25, link: "bedrockflower", color: android.graphics.Color.BLUE},	
					{text: "Каменный цветок", size: 25, link: "stoneflower", color: android.graphics.Color.BLUE},	
					{text: "Четырехлистный клевер", size: 25, link: "fourclever", color: android.graphics.Color.BLUE},	
					{text: "Ицеиум", size: 25, link: "iceium", color: android.graphics.Color.BLUE},	
					{text: "Клевер", size: 25, link: "clever", color: android.graphics.Color.BLUE},	
					{text: "Пятилистный клевер", size: 25, link: "fiveclever", color: android.graphics.Color.BLUE},	
					{text: "Табак", size: 25, link: "tabak", color: android.graphics.Color.BLUE},	
					
					{text: "Синий табак", size: 25, link: "bluetabak", color: android.graphics.Color.BLUE},	
					]
				}
			},
			
			
			"beladonna": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.beladonnaflower, data: 0, clicker: {onClick: function(){alert("Беладонна");}}},

 ],
 elements: [
 {text: "В древности беладонну часто использовали вместе с мандрагорой для создания зелий.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.beladonnaring, data: 0, clicker: {onClick: function(){alert("Кольцо беладонны");}}},

 ],
 elements: [
 {text: "Кольцо беладонны - кольцо из беладонны, дает прыгучесть 3 уровня. Крафт из 3 беладонн, одного золотого кольца и камня беладонны (из каменного цветка и беладонны).", size: 18}
            
 ]
 }
	},
	
	"mandragora": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.mandragoraflower, data: 0, clicker: {onClick: function(){alert("Мандрагора");}}},

 ],
 elements: [
 {text: "Мандрагора имеет корень в виде человека. При определенных обстоятельствах он может ожить.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.mandragoraring, data: 0, clicker: {onClick: function(){alert("Кольцо мандрагоры");}}},

 ],
 elements: [
 {text: "Кольцо мандрагоры  дает силу 5 уровня. Крафт из 3 мандрагор, одного золотого кольца и камня мандрагоры (из каменного цветка и мандрагоры).", size: 18}
            
 ]
 }
 },
 
 "bedrockflower": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.bedrockflowerflower, data: 0, clicker: {onClick: function(){alert("Бедрокоцвет");}}},

 ],
 elements: [
 {text: "Бедрокоцвет это бедрок, который вырос на земле ввиде розы.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.bedrockflowerring, data: 0, clicker: {onClick: function(){alert("Кольцо бедрокоцвета");}}},

 ],
 elements: [
 {text: "Кольцо бедрокоцвета дает защиту 3 уровня. Крафт из 3 бедрокоцветов, одного золотого кольца и камня бедрокоцвета (из каменного цветка и бедрокоцвета).", size: 18}
            
 ]
 }
 },
 
  "iceium": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.iceiumflower, data: 0, clicker: {onClick: function(){alert("Ицеиум");}}},

 ],
 elements: [
 {text: "Ицеиум - цветок из снега. Имеет свойства защищающие от огня", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.iceiumring, data: 0, clicker: {onClick: function(){alert("Кольцо ицеиума");}}},

 ],
 elements: [
 {text: "Кольцо ицеиума наполнена силой холода и поэтому дает огнестойкость 10 уровня. Крафт из 3 ицеиумов, одного золотого кольца и камня ицеиума (из каменного цветка и ицеиума).", size: 18}
            
 ]
 }
 },
 
  "fourclever": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fourcleverflower, data: 0, clicker: {onClick: function(){alert("Четырехлистный клевер");}}},

 ],
 elements: [
 {text: "Четырехлистный клевер - клевер с четырьмя лепестками, 3 лепестка символизируют веру, надежду и любовь, 4 - удачу. С помощью ритуала можно создать пятилистный клевер.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fourcleverring, data: 0, clicker: {onClick: function(){alert("Кольцо четырехлистного клевера");}}},

 ],
 elements: [
 {text: "Кольцо четырехлистного клевера дает повышение здоровья 1 уровня. Крафт из 3 четырехлистных клеверов, одного золотого кольца и камня четырехлистного клевера (из каменного цветка и четырехлистного клевера).", size: 18}
            
 ]
 }
 },
 
  "stoneflower": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.stoneflowerflower, data: 0, clicker: {onClick: function(){alert("Каменный цветок");}}},

 ],
 elements: [
 {text: "Каменный цветок совмещенный с другими цветами дает камень принадлежащий этому цветку, сам каменный цветок не имеет своего камня ведь он и есть камень.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.beladonnastone, data: 0, clicker: {onClick: function(){alert("Камень беладонны");}}},
          {id: ItemID.mandragorastone, data: 0, clicker: {onClick: function(){alert("Камень мандрагоры");}}},
               {id: ItemID.bedrockflowerstone, data: 0, clicker: {onClick: function(){alert("Камень бедрокоцвета");}}},
                    {id: ItemID.iceiumstone, data: 0, clicker: {onClick: function(){alert("Камень ицеиума");}}},
                         {id: ItemID.fourcleverstone, data: 0, clicker: {onClick: function(){alert("Камень четырехлистного клевера");}}},

 ],
 elements: [
 {text: "Камни разных растений", size: 18}
            
 ]
 }
 },
			
			"artefacts": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты - вещи имеющие какие-либо магические способности.", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Шлем Аида", size: 29, link: "aidhelmet", color: android.graphics.Color.BLUE},
						{text: "Ботинки Гермеса", size: 25, link: "germesboots", color: android.graphics.Color.BLUE},
						{text: "Трезубец Посейдона", size: 25, link: "poceidontrident", color: android.graphics.Color.BLUE},	
					{text: "SCP 005 - Отмычка", size: 25, link: "key", color: android.graphics.Color.BLUE},	
					{text: "SCP 012 - Скверная мелодия", size: 25, link: "melody", color: android.graphics.Color.BLUE},	
					{text: "SCP 013 - Сигареты Blue Lady", size: 25, link: "bluelady", color: android.graphics.Color.BLUE},	
					{text: "Настой долголетия", size: 25, link: "nastoy", color: android.graphics.Color.BLUE},	
					{text: "Книга", size: 25, link: "blackbook", color: android.graphics.Color.BLUE},	
					{text: "SCP 004 - 12 ключей и дверь", size: 25, link: "keydoor", color: android.graphics.Color.BLUE},	
					{text: "Кицунэ-би", size: 25, link: "kitsunebi", color: android.graphics.Color.BLUE},	
					{text: "Инструменты Люцифера", size: 25, link: "lucifertools", color: android.graphics.Color.BLUE},	
					{text: "Дезомбирующее зелье", size: 25, link: "dezombiepotion", color: android.graphics.Color.BLUE},	
					]
				}
			},
			
			"artefactstwo": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты - вещи имеющие какие-либо магические способности.", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Плащ полувидимка", size: 25, link: "plachshpoluvidimka", color: android.graphics.Color.BLUE},	
					{text: "Души и все что с ними связано", size: 25, link: "souls", color: android.graphics.Color.BLUE},	
					{text: "Монета нет и да", size: 25, link: "coinnoyes", color: android.graphics.Color.BLUE},
	{text: "Святая вода", size: 25, link: "hollywater", color: android.graphics.Color.BLUE},	
	{text: "Клинок Ангела", size: 25, link: "angelsword", color: android.graphics.Color.BLUE},	
	{text: "Клык Вервульфа", size: 25, link: "werewolfteeth", color: android.graphics.Color.BLUE},	
	{text: "Кровь", size: 25, link: "blood", color: android.graphics.Color.BLUE},	
					]
				}
			},
			
			  "aidhelmet": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.aidhelmet, data: 0, clicker: {onClick: function(){alert("Шлем Аида");}}},

 ],
 elements: [
 {text: "Шлем Аида - магический артефакт когда то принадлежащий Аиду - богу подземного мира, дает невидимость.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Крафт шлема Аида: медный слиток х4, мрамор х3, топаз х1.", size: 18}
            
 ]
 }
 },
 
   "germesboots": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.germesboots, data: 0, clicker: {onClick: function(){alert("Ботинки Гермеса");}}},

 ],
 elements: [
 {text: "Ботинки Гермеса - ботинки бога Гермеса, посланника богов. Он мог за секунду оказаться в любой точке Земли, но из-за того что  ты не Гермес скорость ботинков меньше.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Крафт ботинков Гермеса: лилитиум х3, аметист х3, серебрянный слиток х2, неник х1", size: 18}
            
 ]
 }
 },
 
    "poceidontrident": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.poceidontrident, data: 0, clicker: {onClick: function(){alert("Трезубец Посейдона");}}},

 ],
 elements: [
 {text: "Трезубец Посейдона - артефакт когда то принадлежащий Посейдону - богу морей и океанов. Наносит 20 урона", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Крафт трезубца Посейдона: сапфир х2, посейдоний х1, мифриловый слиток х1, аквамарин х2, лилитиум х1", size: 18}
            
 ]
 }
 },
 
    "key": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.key, data: 0, clicker: {onClick: function(){alert("SCP 005 - отмычка");}}},

 ],
 elements: [
 {text: "Отмычка - SCP способный открыть любую закрытую дверь", size: 18}
 ]
 },
 },
 
     "melody": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.coursemelody, data: 0, clicker: {onClick: function(){alert("SCP 012 - скверная мелодия");}}},

 ],
 elements: [
 {text: "Скверная мелодия - музыкальное произведение назвывающееся На горе Голгофа. Написана кровью разных людей и человек, который долго будет держать ее в руках начнет пытаться дописать ее своей кровью. Проиграв это произведение получается некрасивая несвязная музыка из разных музыкальных инструментов", size: 18}
 ]
 },
 },
 
     "bluelady": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.bluelady, data: 0, clicker: {onClick: function(){alert("SCP 013 - Сигареты Blue Lady");}}},

 ],
 elements: [
 {text: "Сигареты Blue Lady - сигареты, которые если выкурить то начинаешь видеть и вести себя как девушка, себя видишь как женщину с синими волосами и губами", size: 18}
 ]
 },
 },
 
     "nastoy": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.nastoy, data: 0, clicker: {onClick: function(){alert("Настой долголетия");}}},

 ],
 elements: [
 {text: "Настой долголетия - зелье из коры дуба, которое дает регенерацию и вы будете дольше жить. Чем старее дуб у которого взята кора тем дольше вы будете жить.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Крафт настоя долголетия: бутылка с водой и кора дуба", size: 18}
            
 ]
 }
 },
 
     "blackbook": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blackbook, data: 0, clicker: {onClick: function(){alert("Путеводитель по паранормальному и сверхъестественному");}}},

 ],
 elements: [
 {text: "Эта книга - путеводитель по паранормальному и сверхъестественному. Здесь собрана вся информация о паранормальном, а так же некоторые мифы.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Найти путеводитель можно в различных структурах или скрафтить: папирус (бумага х3) х3, черная кожа (кожа + чернильный мешок) х1", size: 18}
            
 ]
 }
 },
 
      "keydoor": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.keytwo, data: 0, clicker: {onClick: function(){alert("SCP 004 - 12 ключей и дверь");}}},

 ],
 elements: [
 {text: "Этот SCP это 12 ключей из которых сохранились только 3 и дверь. Разные ключи открывают проход в разные миры", size: 18}
 ]
 },
 },
 
      "kitsunebi": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.kicunebi, data: 0, clicker: {onClick: function(){alert("Кицунэ-би");}}},

 ],
 elements: [
 {text: "Кицунэ-би в переводе с японского означает лисий огонь. Он выпадает из кицунэ и дает много полезных эффектов", size: 18}
 ]
 },
 },
 
      "lucifertools": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.satanasword, data: 0, clicker: {onClick: function(){alert("Меч Люцифера");}}},
        {id: ItemID.satanapickaxe, data: 0, clicker: {onClick: function(){alert("Кирка Люцифера");}}},
           {id: ItemID.satanaaxe, data: 0, clicker: {onClick: function(){alert("Топор Люцифера");}}},
              {id: ItemID.satanashovel, data: 0, clicker: {onClick: function(){alert("Лопата Люцифера");}}},

 ],
 elements: [
 {text: "Инструменты Люцифера это самые сильные паранормальные инструменты. Выпадают из того к чему вы еще не готовы. Tools Lucifer. Non parati in occursum cum Lucifero precipitentur.", size: 18}
 ]
 },
 },
 
 
       "dezombiepotion": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.dezombiepotion, data: 0, clicker: {onClick: function(){alert("Дезомбирующее зелье");}}},

 ],
 elements: [
 {text: "Дезомбирующее зелье - зелье способное вылечить зомби, если он зомби недавно, а обыным людям дает регенерацию", size: 18}
 ]
 },
 },
 
       "plachshpoluvidimka": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.plashchpoluvidimka, data: 0, clicker: {onClick: function(){alert("Плащ полувидимка");}}},

 ],
 elements: [
 {text: "Плащ полувидимка дает невидимость, но при этом сам не становится невидимым и ты периодически мигаешь становясь видимым на пару миллисекунд", size: 18}
 ]
 },
 },
 
  "souls": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.soul, data: 0, clicker: {onClick: function(){alert("Слабая душа");}}},
          {id: ItemID.truesoul, data: 0, clicker: {onClick: function(){alert("Душа");}}},
               {id: ItemID.soulscythe, data: 0, clicker: {onClick: function(){alert("Коса душ");}}},
                    {id: ItemID.soulbottle, data: 0, clicker: {onClick: function(){alert("Бутылка душ");}}},
                         {id: BlockID.Soul, data: 0, clicker: {onClick: function(){alert("Бутылка душ");}}},
                              {id: ItemID.soulpearl, data: 0, clicker: {onClick: function(){alert("Жемчуг душ");}}},
                                   {id: BlockID.mitsob, data: 0, clicker: {onClick: function(){alert("Мифриловый собиратель");}}},

 ],
 elements: [
 {text: "Души используются в разных целях. Добыть их можно несколькими способами. Сначала сделайте косу душ из 2 палок, 1 мифрилового слитка и 2 камней, эта коса выбивает слабые души, а уже из них и мифрилового слитка делается душа.", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Из косы душ и 8 душ делается коса Смерти, выбивающая сразу не слабые души. И последний способ это мифриловый собиратель. Он перерабатывает пыль душ в слабые души, только надо перерабатывать по одной, а то души сливаются в одну. Крафт мифрилового собирателя: мифриловый слиток х6, жемчуг душ х1, защищающая пентаграмма х1, лилитиум х1", size: 18}
            
 ]
 }
 },
 
        "coinnoyes": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.coinyes, data: 0, clicker: {onClick: function(){alert("Монета нет");}}},
          {id: ItemID.coinno, data: 0, clicker: {onClick: function(){alert("Монета да");}}},

 ],
 elements: [
 {text: "Некоторые типагадалкинонегадалки вообще не умеющие колдовать используют такую монету, которая типа правильно отвечает на вопрос. Использовать ее можно для принятия каких-либо решений.", size: 18}
 ]
 },
 },
 
     "hollywater": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.hollywater, data: 0, clicker: {onClick: function(){alert("Святая вода");}}},

 ],
 elements: [
 {text: "Святая вода может отпугивать демонов, от нее у одержимых появляются ожоги", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Заклинание освящения воды, во время освящения надо кидать в воду соль или держать над ней крест Exorcizo te creature acquae in nomine Deo, patris omnipotentis et in virtute Spiritu Sancti", size: 18}
            
 ]
 }
 },
 
       "angelsword": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.angelsword, data: 0, clicker: {onClick: function(){alert("Клинок Ангела");}}},


 ],
 elements: [
 {text: "Клинок Ангела выпадает из Ангелов и наносит 20 урона.", size: 18}
 ]
 },
 },
 
        "werewolfteeth": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.werewolfteeth, data: 0, clicker: {onClick: function(){alert("Клык Вервульфа");}}},

 ],
 elements: [
 {text: "Клык Вервульфа выпадает из вервульфов когда они в волчьем обличие. Используется в крафтах.", size: 18}
 ]
 },
 },
 
       "blood": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.blood, data: 0, clicker: {onClick: function(){alert("Кровь");}}},


 ],
 elements: [
 {text: "Кровь используется в разных ритуалах. Добыть ее можно убив моба жертвенным ножем, который делается из палки и двух камней. Есть несколько видов крови: обычная, спрута, вампира, демоническая (из существ ада), эндера (из существ энда) и метрвая (из оживших мертвецов). Выпив кровь вампира можно заразится вампиризмом, мертвая кровь для вампира как яд, демоническая кровь дает некоторые эффекты и вызывает зависимость.", size: 18}
 ]
 },
 },
 
  "symbols": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Символы", size: 30, color: android.graphics.Color.RED},
						{text: "Различные символы начертаные чем-либо могут иметь полезные и не очень полезные свойства.", size: 23},
					]
				},			
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Призыв Люцифера", size: 25, link: "summonlucifer", color: android.graphics.Color.BLUE},	
					{text: "Защищающая пентаграмма", size: 25, link: "pentagramm", color: android.graphics.Color.BLUE},	
					{text: "Призыв Лилит", size: 25, link: "lilithsamael", color: android.graphics.Color.BLUE},
	{text: "Изгнание ангела", size: 25, link: "antiangel", color: android.graphics.Color.BLUE},	
	{text: "Тибетская тульпа", size: 25, link: "tibettulpa", color: android.graphics.Color.BLUE},	
	{text: "Ловушка для жнецов", size: 25, link: "reapers", color: android.graphics.Color.BLUE},	
	{text: "Дверь чистилища", size: 25, link: "limbdoor", color: android.graphics.Color.BLUE},	
	{text: "Разговор с ангелом", size: 25, link: "angelallo", color: android.graphics.Color.BLUE},
	{text: "Дьявольский запрет", size: 25, link: "chamite", color: android.graphics.Color.BLUE},	
	
					]
				}
			},
 
         "summonlucifer": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.summon_satan, data: 0, clicker: {onClick: function(){alert("Призыв Люцифера");}}},

 ],
 elements: [
 {text: "Когда-нибудь эта хрень призовет кого то, но пока что ты не готов.", size: 18}
 ]
 },
 },
 
          "pentagramm": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.pentagram, data: 0, clicker: {onClick: function(){alert("Защищающая пентаграмма");}}},

 ],
 elements: [
 {text: "Защищающая пентаргамма не дает одержимому выйти из нее. Рисуется адский мелом (4 куска мела и адский камень)", size: 18}
 ]
 },
 },
 
          "lilithsamael": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.lilithsamael, data: 0, clicker: {onClick: function(){alert("Призыв Лилит");}}},

 ],
 elements: [
 {text: "Лилит это первый демон, первый ребенок Люцифера. Он создал ее что бы показать Богу как можно изменить человеческую душу. Рисуется древесным углем", size: 18}
 ]
 },
 },
 
          "antiangel": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.angeliz, data: 0, clicker: {onClick: function(){alert("Изгнание Ангела");}}},

 ],
 elements: [
 {text: "Изгоняет ангелов в случайную точку Земли и на время лишает их сил.", size: 18}
 ]
 },
 },
 
          "tibettulpa": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.tipettulpa, data: 0, clicker: {onClick: function(){alert("Тибетская тульпа");}}},

 ],
 elements: [
 {text: "Может вызывать массовые галлюцинации, если в них верит много людей.", size: 18}
 ]
 },
 },
 
          "reapers": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.reaper, data: 0, clicker: {onClick: function(){alert("Ловушка для жнецов");}}},

 ],
 elements: [
 {text: "Этот символ ловит жнецов - существ забирающих души людей после смерти", size: 18}
 ]
 },
 },
 
          "limbdoor": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.limbdoors, data: 0, clicker: {onClick: function(){alert("Дверь чистилища");}}},

 ],
 elements: [
 {text: "Рисуется кровью обитателя частилища и девственницы в лунное затмение. Открывает дверть в чистилище - место в которое попадают монстры после смерти.", size: 18}
 ]
 },
 
 right: {
 controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Заклинание открытия двери: Ianua Magna Purgatorii, Clausa Est Ob Nos Lumine Euius Ab Oculis Nostris Retento Sed Nunc Stamus Ad Limen Huius Ianuae Magnae Et Demisse Fideliter Perhonorifice Paramus Aperire Eam Creaturae Terrificae Quarum Ungulae Et Dentes Nunquam Tetigerunt Carnem Humanam Aperit Fauces Eius Ad Mundum Nostrum Nunc Ianua Magna Aperta Tandem!", size: 18}
 ]
 },
 },
 
           "angelallo": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.angelallo, data: 0, clicker: {onClick: function(){alert("Разговор с ангелом");}}},

 ],
 elements: [
 {text: "Неизвестно как с помощью этого символа разговаривать с ангелом, но он рисуется на коробках с артефактами что бы артефакты не имели магических свойств.", size: 18}
 ]
 },
 },
 
            "chamite": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.chamite, data: 0, clicker: {onClick: function(){alert("Дьявольский запрет");}}},

 ],
 elements: [
 {text: "Если в этот символ положить предмет, то демоны не смогут взять его. Рисуется мелом.", size: 18}
 ]
 },
 },
 
 
   "magic_machine": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Магические приборы", size: 30, color: android.graphics.Color.RED},
						{text: "Эти приборы могут использовать магию в каких либо целях", size: 23}
					]
				},
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Мифриловый собиратель", size: 25, link: "mitsob", color: android.graphics.Color.BLUE},
					{text: "Алхимическая печь", size: 25, link: "alchemyfurnace", color: android.graphics.Color.BLUE}
					]
				},
			},
 
			            "mitsob": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.mitsob, data: 0, clicker: {onClick: function(){alert("Мифриловый собиратель");}}},

 ],
 elements: [
 {text: "Мифриловый собиратель может перерабатывать пыль душ в слабые души. Только перерабатывать надо по одном иначе души сольются в одну. Крафт мифрилового собирателя: мифриловый слиток х6, жемчуг душ х1, защищающая пентаграмма х1, лилитиум х1", size: 18}
 ]
 },
 },
			
			            "alchemyfurnace": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.alchemyfurnace, data: 0, clicker: {onClick: function(){alert("Алхимическая печь");}}},

 ],
 elements: [
 {text: "Алхимическая печь - продвинутая печь. Она может брать сразу несколько предметов и перерабатывать их в несколько других в отличии от обычной печки, перерабатывающей один предмет в один другой.", size: 18},
 {text: "ПЕЧЬ ВРЕМЕННО НЕ РАБОТАЕТ", size: 18, color: android.graphics.Color.RED}
 ]
 },
 },
 
   "mobs": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Бестиарий", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны все паранормальные существа", size: 23}
					]
				},
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Призрак", size: 25, link: "ghost", color: android.graphics.Color.BLUE},
					{text: "Джефф Убийца", size: 25, link: "jeffthekiller", color: android.graphics.Color.BLUE},
					{text: "Слендермен", size: 25, link: "slendermen", color: android.graphics.Color.BLUE},
					{text: "SCP 106 - Старик", size: 25, link: "oldman", color: android.graphics.Color.BLUE},
					{text: "SCP 096 - Скромник", size: 25, link: "scr", color: android.graphics.Color.BLUE},
					{text: "SCP 073 - Статуя", size: 25, link: "statue", color: android.graphics.Color.BLUE},
					{text: "То к чему ты еще не готов", size: 25, link: "lol", color: android.graphics.Color.BLUE},
					{text: "Демон", size: 25, link: "demon", color: android.graphics.Color.BLUE},
					{text: "Смерть", size: 25, link: "death", color: android.graphics.Color.BLUE},
					{text: "Ангел", size: 25, link: "angel", color: android.graphics.Color.BLUE},
					{text: "Энт", size: 25, link: "groot", color: android.graphics.Color.BLUE},
					{text: "Вампир", size: 25, link: "vampire", color: android.graphics.Color.BLUE},
					{text: "Вервульф", size: 25, link: "werewolf", color: android.graphics.Color.BLUE},
					{text: "Статуя Плачущего Ангела", size: 25, link: "angelstatue", color: android.graphics.Color.BLUE},
					{text: "Адский Элементаль", size: 25, link: "hellelemental", color: android.graphics.Color.BLUE},
					{text: "SCP 087 - Лестница", size: 25, link: "ladder", color: android.graphics.Color.BLUE}
					]
				}
			},
			
			            "ghost": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ghost, data: 0, clicker: {onClick: function(){alert("Призрак");}}},

 ],
 elements: [
 {text: "Призраки - неупокоеные по какой то причине души людей. Могут быть агрессивными и мстить своим обидчикам. Боятся соли и железа.", size: 18},
 ]
 },
 },
 
             "jeffthekiller": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.JeffTheKiller, data: 0, clicker: {onClick: function(){alert("Джефф Убийца");}}},

 ],
 elements: [
 {text: "Джефф Убийца - сошедший с ума серийный убийца. Убивает всех на своем пути. Выпадает жертвенный нож", size: 18}
 ]
 },
 },
 
             "slendermen": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Slenderman, data: 0, clicker: {onClick: function(){alert("Слендермен");}}},

 ],
 elements: [
 {text: "Слендермен - опасное лесное существо. Ловит и ест людей, предпочитает на обед детей.", size: 18},
 ]
 },
 },
 
 
              "oldman": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Oldman, data: 0, clicker: {onClick: function(){alert("SCP 106 - Старик");}}},

 ],
 elements: [
 {text: "SCP 106 - Старик - существо выглядит как разлагающийся человек. Довольно быстрый и сильный. Может отправлять людей в свое карманное изменение. Что там происходит неизвестно. Босс.", size: 18},
 ]
 },
 },
 
             "scr": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Scr, data: 0, clicker: {onClick: function(){alert("SCP 096 - Скромник");}}},

 ],
 elements: [
 {text: "SCP 096 - Скромник - скромное существо. Часто забивается в угол и плачет. Нападает на людей.", size: 18}
 ]
 },
 },
 
              "statue": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Statue, data: 0, clicker: {onClick: function(){alert("SCP 073 - Статуя");}}},
    
 ],
 elements: [
 {text: "SCP 073 - Статуя - живая статуя странного существа. Может передвигаться на огромной скорости и убивает людей.", size: 18},
 ]
 },
 },
 
              "lol": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lol, data: 0, clicker: {onClick: function(){alert("Ты еще не готов");}}},

 ],
 elements: [
 {text: "Кому сказано ты еще не готов!", size: 18, color: android.graphics.Color.RED},
 ]
 },
 },
 
          "demon": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Demon, data: 0, clicker: {onClick: function(){alert("Демон");}}},

 ],
 elements: [
 {text: "Одержимые демоном не владуют собой и делают все что захочет демон. Боятся святой воды, не могут выйти из защищающей пентаграммы, не могут взят предмет из дьявольского запрета и отзываются на слово Кристо", size: 18}
 ]
 },
 
 right: {
 controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Экзорцизм: Regna terrae, cantate deo psallite Domino qui véhitur per calus, caelos antíquos! Ecce, edit vocem suam, vocem potentem: Akinoscite potentiam dei! Majestas ejus, Et potentia ejus In nubibus. Timendus est dues e sancto suo, Dues Israel: ipse potentiam Datet robur populo suo Benedictus dues. Gloria Patri.", size: 18},
 {text: "Обратный экзорцизм заставляет демона вернуться в человека: Et Secta Diabolica, Omnis Congregatio, Omnis Legio, Omnis Incursio Infernalis Adversarii, Omnis Spiritus, Exorcizamus", size: 18}
 ]
 },
 },
 
               "angel": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Angel, data: 0, clicker: {onClick: function(){alert("Ангел");}}},

 ],
 elements: [
 {text: "Ангелы - защитники небес. Но они не полностью незгрешные как их описывают в Библии. Они могут грешить, убивать, чаще всего грешат потому что следуют предсказаниям или отреклись от небес. Выпадает клинок Ангела. Могут быть прогнаны изгонением ангела. Каким то образом с ними можно поговорить через разговор с ангелом", size: 18}
 ]
 },
 
 right: {
 	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Изгнание англела из человека: Omni potentis Dei potestatem invoco, omni potentis Dei potestatem invoco, abrogo terra, hoc angelorum in obse quentum, Domine expuere, Domine expuere, unde abeo Dei per...", size: 18}
 ]
 },
 },
 
               "death": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Death, data: 0, clicker: {onClick: function(){alert("Смерть");}}},

 ],
 elements: [
 {text: "Смерть - существо забирающее тех кто должен умереть. Выпажает коса смерти. По его словам он может забрать кого угодно и даже однажды заберет Бога. Босс.", size: 18},
 ]
 },
 },
 
         "groot": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ent, data: 0, clicker: {onClick: function(){alert("Энт");}}},

 ],
 elements: [
 {text: "Энт - живое ходячее дерево. Агрессивны к людям. Они есть Грут!", size: 18},
 ]
 },
 },
 
         "vampire": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Vampire, data: 0, clicker: {onClick: function(){alert("Вампир");}}},

 ],
 elements: [
 {text: "Вампир - человек пьющий кровь других людей. Боятся сосен, чеснока, прямых солнечных лучей и кровь мертвеца для них как яд. Так же можно убить обезглавив. Дракула - отец всех вампиров", size: 18}
 ]
 },
 },
 
         "werewolf": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Werewolf, data: 0, clicker: {onClick: function(){alert("Вервульф");}}},

 ],
 elements: [
 {text: "Вервульф - человек, который может превращатся в волка, либо по своей воле, либо ночью, либо ночью в полнолуние. Так же вервульфы часто не помнят того что было с ними в волчьем обличии. Некоторые монут контролировать свои действия в волчьей шкуре. Болезнь вервульфов называется ликантропия. Боятся серебра из-за того что луна в алхимии связана с серебром.", size: 18}
 ]
 },
 },
 
         "angelstatue": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Angelstatue, data: 0, clicker: {onClick: function(){alert("Статуя Плачущего Ангела");}}},

 ],
 elements: [
 {text: "Статуя Плачущего Ангела - ожившая по неизвестным причинам статуя. Нападает на людей и очень медленная.", size: 18},
 ]
 },
 },
 
         "hellelemental": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hellelemental, data: 0, clicker: {onClick: function(){alert("Адский элементаль");}}},

 ],
 elements: [
 {text: "Адский Элементаль - существо из ада. Выпадает адский кристалл.", size: 18}
 ]
 },
 },
 
         "ladder": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.SCP0871, data: 0, clicker: {onClick: function(){alert("SCP 087-1 - Лестница");}}},

 ],
elements: [
 {text: "SCP 087-1 - Лестница - странное безлицее существо из SCP 087.", size: 18},
 ]
 }
    },
 
    "structures": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Структуры", size: 30, color: android.graphics.Color.RED},
						{text: "Структуры это строения которые вы можете найти в мире.", size: 23}
					]
				},
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Столб Аэдэ", size: 25, link: "aede", color: android.graphics.Color.BLUE},
					{text: "SCP 002 - Живая комната", size: 25, link: "room", color: android.graphics.Color.BLUE},
					{text: "SCP 003  - Живая материнская плата", size: 25, link: "motherplate", color: android.graphics.Color.BLUE},
					{text: "Радуга", size: 25, link: "rainbow", color: android.graphics.Color.BLUE},
					{text: "SCP 019 - Чудовищная ваза", size: 25, link: "vase", color: android.graphics.Color.BLUE},
					{text: "Заброшенная библиотека", size: 25, link: "library", color: android.graphics.Color.BLUE},	
					{text: "Могила", size: 25, link: "mogile", color: android.graphics.Color.BLUE},	
					{text: "Бездонная яма", size: 25, link: "pit", color: android.graphics.Color.BLUE},	
					]
				}
			},
 
          "aede": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.aedestone, data: 0, clicker: {onClick: function(){alert("Столб аэдэ");}}},

 ],
elements: [
 {text: "Столб Аэдэ это столб из каменных кирпичей наверху которых камень аэдэ. Древние верили что он охраняет от монстра", size: 18},
 ]
 }
    },
    
              "room": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.fleshblock, data: 0, clicker: {onClick: function(){alert("SCP 002 - Живая комната");}}},

 ],
elements: [
 {text: "SCP 002 - Живая комната это метеорит внутри которого есть комната, стол и книжный шкаф, но это все сделано из человеческой плоти. ", size: 18},
 ]
 }
    },
    
              "motherplate": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.motherplate, data: 0, clicker: {onClick: function(){alert("SCP 003 - Живая материнская плата");}}},

 ],
elements: [
 {text: "SCP 003 - Живая материнская плата это материнская плата, которая может медленно расти. Если материнская плата большая то в ней могут появлятся полезные металлы или камни.", size: 18},
 ]
 }
    },
    
              "rainbow": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.rainbow, data: 0, clicker: {onClick: function(){alert("Радуга");}}},

 ],
elements: [
 {text: "По легенде на краю радуги можно найти лепрекона который даст вам горшок золота, но лепрекон почему то покинул это место.", size: 18},
 ]
 }
    },
    
                 "vase": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.vase, data: 0, clicker: {onClick: function(){alert("SCP 019 - Чудовищная ваза");}}},

 ],
elements: [
 {text: "SCP 019 - Чудовищная ваза это строение из кварца в котором есть ваза и один драгоценный блок.", size: 18},
 ]
 }
    },
    
             "clever": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cleverflower, data: 0, clicker: {onClick: function(){alert("Клевер");}}},

 ],
elements: [
 {text: "Клевер это растение, которое служит только в декоративных целях.", size: 18},
 ]
 }
    },
    
             "fiveclever": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fivecleverflower, data: 0, clicker: {onClick: function(){alert("Пятилистный клевер");}}},

 ],
elements: [
 {text: "Пятилистный клевер это очень сильное и полезное растение. Из него можно сделать 20 лилитиума, алмазов, неников, изумрудов или призыв демона. Его нельзя взять в креативе, но можно создать с помощью ритуала.", size: 18},
 ]
 }
    },
    
             "library": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.blackbookshelf, data: 0, clicker: {onClick: function(){alert("Библиотека");}}},

 ],
elements: [
 {text: "Библеотека это строение с книжными полками и еще кое-чем. Там можно найти одну интересную книгу", size: 18},
 ]
 }
    },
    
             "mogile": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.kres, data: 0, clicker: {onClick: function(){alert("Могила");}}},

 ],
elements: [
 {text: "Неизвестно кто здесь похоронен...", size: 18},
 ]
 }
    },
    
             "pit": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.BASIC_PAGE,
elements: [
 {text: "Бездна это яма которая ведет вникуда", size: 18},
 ]
 }
    }, 
    
    
            "rituals": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Ритуалы", size: 30, color: android.graphics.Color.RED},
						{text: "С помощью ритуалов можно создавать блоки или призывать существ. Сам ритуал это когда ставишь определенные блоки в определенном порядке. Во время ритуалов в радиусе 40 блоков бьет 4 молнии. Иногда ритуал может не работать, при этом поменяйте какие нибудь блоки местами, у блоков есть связь со сторонами света. Ритуалы с цветами могут не работать, тогда поставьте на цветок любой блок.", size: 23}
					]
				},
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Филосовский камень", size: 25, link: "fil", color: android.graphics.Color.BLUE},
					{text: "Камень разрушения", size: 25, link: "destroy", color: android.graphics.Color.BLUE},
					{text: "Камень эрозии", size: 25, link: "erosion", color: android.graphics.Color.BLUE},
					{text: "Стихийные кристаллы", size: 25, link: "crystals", color: android.graphics.Color.BLUE},
					{text: "Пятилистный клевер", size: 25, link: "rfive", color: android.graphics.Color.BLUE},
					{text: "Синий табак", size: 25, link: "rblue", color: android.graphics.Color.BLUE},
					{text: "Смена времени суток", size: 25, link: "time", color: android.graphics.Color.BLUE},
					{text: "Влажность", size: 25, link: "liquid", color: android.graphics.Color.BLUE},
					{text: "Копание", size: 25, link: "mine", color: android.graphics.Color.BLUE},
					{text: "Создание блоков", size: 25, link: "waterandbasalt", color: android.graphics.Color.BLUE},
					{text: "Огненый круг", size: 25, link: "fire", color: android.graphics.Color.BLUE},
					{text: "Магическая стена", size: 25, link: "magicwall", color: android.graphics.Color.BLUE},
					{text: "Звериный зов", size: 25, link: "animals", color: android.graphics.Color.BLUE},
					{text: "Вулкан", size: 25, link: "vulkan", color: android.graphics.Color.BLUE},
					]
				}
			},
			
                 "fil": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.filstone, data: 0, clicker: {onClick: function(){alert("Филосовский камень");}}},

 ],
elements: [
 {text: "Филосовский камень может превращать блоки в золото. Чтобы его создать вам нужно поставить аметистовый блок и вокруг него с каждой стороны на расстоянии в один блок поставить три топазовых блока и один аметистовый.", size: 18},
 ]
 }
    },
    
                     "destroy": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.destroystone, data: 0, clicker: {onClick: function(){alert("Камень разрушений");}}},

 ],
elements: [
 {text: "Камень разрушений способен разрушать любой блок, но без дропа. Что бы его создать надо вокруг аквамаринового блока поставить три аметистовых и один аквамариновый блок.", size: 18},
 ]
 }
    },
    
                         "erosion": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.erosionstone, data: 0, clicker: {onClick: function(){alert("Камень эрозии");}}},

 ],
elements: [
 {text: "Камень эрозии это улучшенный камень разрушений. Он разрушает сразу 5 блоков. Делается из золотого блока по середине и трех топазовых и одного золотого блока вокруг.", size: 18},
 ]
 }
    },
    
                             "crystals": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.aethercrystal, data: 0, clicker: {onClick: function(){alert("Кристаллы эфира");}}},

 ],
elements: [
 {text: "Создайте ритуальный нож из лилитиума и двух камней. Этот нож способен убивая моба собирать с них специальные стихийные кристаллы. Кристаллы огня, природы, воды и воздуха, с существ энда выпадают кристаллы эфира. Из кристаллов создайте блоки и окружите булыжник блоками каждого вида кристаллов и появится блок кристаллов эфира. Эти кристаллы будут использоваться в крафтах и ритуалах.", size: 18},
 ]
 }
    },
    
                                 "tabak": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.tabakflower, data: 0, clicker: {onClick: function(){alert("Табак");}}},

 ],
elements: [
 {text: "Табак - растение нужное только для создания синего табака (см. Ритуалы/синий табак)", size: 18},
 ]
 }
    },
    
                                     "bluetabak": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.tabakflower, data: 0, clicker: {onClick: function(){alert("Синий табак");}}},

 ],
elements: [
 {text: "Синий табак нужен для создания сигарет blue lady. Возьмите 3 синего табака и бумагу. Синий табак создается ритуалом.", size: 18},
 ]
 }
    },

                     "rfive": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fivecleverflower, data: 0, clicker: {onClick: function(){alert("Пятилистный клевер");}}},

 ],
elements: [
 {text: "Пятилистный клевер создается с помощью четырехлистного клевера окруженного блоками лилитиума. По легенде в пятом листе живет демон, а лилитиум от имени Лилит - первого в мире демона.", size: 18},
 ]
 }
    },
    
                     "rblue": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.bluetabakflower, data: 0, clicker: {onClick: function(){alert("Синий табак");}}},

 ],
elements: [
 {text: "Синий табак создается с помощью табака окруженного блоками лазурита", size: 18},
 ]
 }
    },
    
    
       "mobstwo": {
				preLink: "pre",
				nextLink: "next",
			left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Бестиарий", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны все паранормальные существа", size: 23}
					]
				},
				
		right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
			{text: "Бог", size: 25, link: "god", color: android.graphics.Color.BLUE},
					{text: "Шептун", size: 25, link: "sheptun", color: android.graphics.Color.BLUE},
					{text: "Черный пес", size: 25, link: "blackdog", color: android.graphics.Color.BLUE},
					{text: "Микмак Чиноо", size: 25, link: "mikmakchinoo", color: android.graphics.Color.BLUE},
					{text: "Водяной", size: 25, link: "waterman", color: android.graphics.Color.BLUE},
					{text: "Кицунэ", size: 25, link: "kicune", color: android.graphics.Color.BLUE},
					{text: "Леший", size: 25, link: "forest", color: android.graphics.Color.BLUE},
					{text: "Ачери", size: 25, link: "achery", color: android.graphics.Color.BLUE},
					{text: "Кровавая Мэри", size: 25, link: "bloodymary", color: android.graphics.Color.BLUE},
					{text: "Вендиго", size: 25, link: "vendigo", color: android.graphics.Color.BLUE},
					{text: "Баньши", size: 25, link: "banshi", color: android.graphics.Color.BLUE},
					{text: "Полтергейст", size: 25, link: "poltergeyst", color: android.graphics.Color.BLUE},
					{text: "SCP 017 - Тень Человека", size: 25, link: "shadow", color: android.graphics.Color.BLUE},
					{text: "Прячущийся", size: 25, link: "prach", color: android.graphics.Color.BLUE},
					]
				}
			},

			                     "god": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.God, data: 0, clicker: {onClick: function(){alert("Бог");}}},

 ],
elements: [
 {text: "Бог это создатель всего. Он создал вселенную и почти всех живых существ.", size: 18},
 ]
 }
    },
			
			                     "sheptun": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Sheptun, data: 0, clicker: {onClick: function(){alert("Шептун");}}},

 ],
elements: [
 {text: "Шептун это вид болотного водяного, сводящего с ума людей своим шепотом.", size: 18},
 ]
 }
    },
    
                         "blackdog": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Blackdog, data: 0, clicker: {onClick: function(){alert("Черный пес");}}},

 ],
elements: [
 {text: "Черный пес это близкий родственник адской гончей и Цербера. Забирает людей заключивших доровор с демоном.", size: 18},
 ]
 }
    },
    
                         "mikmakchinoo": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Mikmakchinoo, data: 0, clicker: {onClick: function(){alert("Микмак Чиноо");}}},

 ],
elements: [
 {text: "Микмак Чиноо это существо, когда то бывшее человеком, ест только снег и убивает все на своем пути.", size: 18},
 ]
 }
    },
    
                         "waterman": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Waterman, data: 0, clicker: {onClick: function(){alert("Водяной");}}},

 ],
elements: [
 {text: "Водяной это существо живущее в воде, может зачекотать людей досмерти или превратить их в русалок и заставить служить ему. Рыбаков, которые отдали первый улов водяному, не трогает.", size: 18},
 ]
 }
    },
    
                         "kicune": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kicune, data: 0, clicker: {onClick: function(){alert("Кицунэ");}}},

 ],
elements: [
 {text: "В японской мифологии все лисы это кицунэ. Могут иметь до 9 хвостов. Чем больше хвостов, тем сильнее кицунэ. С девятым хвостом становятся почти всемогущими. Могут принимать человеческую форму для размножения. Боятся собак. Могут вызывать кицунэ-би, лисий огонь, завладев таким огнем человек получает власть над кицунэ или получает их силу или часть их силы.", size: 18},
 ]
 }
    },
    
                         "forest": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Forest, data: 0, clicker: {onClick: function(){alert("Леший");}}},

 ],
elements: [
 {text: "Леший - охранник леса. Может запутать дровосеков или тех кто вредит лесу, тем кто помогает лесу, наоборот помогает. Боится огня и рубашет навыворот. Может принимать облик любых людей и читать мысли.", size: 18},
 ]
 }
    },
    
                         "achery": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Achery, data: 0, clicker: {onClick: function(){alert("Ачери");}}},

 ],
elements: [
 {text: "Ачери это демон в виде маленькой девочки, встречается в горах и съедает путешественников. Защищает от них красная нить вокруг шеи", size: 18},
 ]
 }
    },
    
                         "bloodymary": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Bloodymary, data: 0, clicker: {onClick: function(){alert("Кровавая Мэри");}}},

 ],
elements: [
 {text: "Кровавая Мэри это призрак. Появляется обычно там где была убита какая нибудь Мэри рядом с зеркалом. Можно призвать ночью если сказать три раза перед зеркалом Кровавая Мэри. Так же известны призывающие ее фразы: Кровавая Мэри я убил твоего ребенка, Я верю в Мэри Уорт, Кровавая Мэри у меня твой ребенок. Убивает тех кто ее призвал или тех кто винит себя в чьей то смерти, но убийство обязательно будет перед зеркалом. Убить ее можно призвав ее в ее зеркало и разбив его.", size: 18},
 ]
 }
    },
    
                         "vendigo": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Vendigo, data: 0, clicker: {onClick: function(){alert("Вендиго");}}},

 ],
elements: [
 {text: "Вендиго это человек который начал заниматься каннибализмом на холоде. Ое потерял человечность и стал зверем. Хороший охотник. Модет долго не есть. Поймав человека может оставлять его живым чтобы съесть позже. Умирает если сжечь его полностью. Защищает от него круг из магических символов.", size: 18},
 ]
 }
    },
    
                         "banshi": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Banshi, data: 0, clicker: {onClick: function(){alert("Баньши");}}},

 ],
elements: [
 {text: "Баньши это вид призрака. Может оглушить или убить человека криком. Чаще всего это призрак женщины. Так же ее крик это знак что вы или кто-то в вашей семье умрет", size: 18},
 ]
 }
    },
    
                         "poltergeyst": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Poltergeyst, data: 0, clicker: {onClick: function(){alert("Полтергейст");}}},

 ],
elements: [
 {text: "Полтергейст это очень сильный призрак или слившиеся воедино несколько призраков. Могут перемещать предметы  и обладают телекинезом", size: 18},
 ]
 }
    },
    
                         "shadow": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Shadow, data: 0, clicker: {onClick: function(){alert("SCP 017 - Тень Человека");}}},

 ],
elements: [
 {text: "SCP 017 - Тень Человека это тень в форме человека. Поедает все что отбрасывает тень.", size: 18},
 ]
 }
    },
    
                         "prach": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Prach, data: 0, clicker: {onClick: function(){alert("Прячущийся");}}},

 ],
elements: [
 {text: "Прячущийся это существо которое практически не возможно увидеть. Очень хорошо прячется и издает шепот.", size: 18},
 ]
 }
    },

         "time": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: 347, data: 0, clicker: {onClick: function(){alert("Смена дня и ночи");}}},

 ],
 elements: [
 {text: "Для смены времени на день надо окружить топаз золотом", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Для ночи надо окружить серебро золотом", size: 18}
            
 ]
 }
 },
 
      "liquid": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Если окружить посейдоний влажным камнем то под ним появится вода", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Адский камень окруденный базальтом наоборот создают лаву", size: 18}
            
 ]
 }
 },
 
                          "mine": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: 285, data: 0, clicker: {onClick: function(){alert("Копание");}}},

 ],
elements: [
 {text: "Алмаз окруженный лазуритом копает вниз на 10 блоков", size: 18},
 ]
 }
    },
    
      "waterandbasalt": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.waterstone, data: 0, clicker: {onClick: function(){alert("Создание блоков");}}},
          {id: BlockID.basalt, data: 0, clicker: {onClick: function(){alert("Создание блоков");}}},

 ],
 elements: [
 {text: "Эти блоки нудны в других ритуалах и крафтах. Влажный камень создается если на камень разлить воду", size: 18}
 ]
 },
 
             right: {
             	controller: PageControllers.BASIC_PAGE,
 elements: [
 {text: "Базальт получается если на обсидиан разлить лаву.", size: 18}
            
 ]
 }
 },
    
                              "fire": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: 87, data: 0, clicker: {onClick: function(){alert("Огненый крун");}}},

 ],
elements: [
 {text: "Окружив базальт адским камнем получается круг из огня", size: 18},
 ]
 }
    },
    
                              "magicwall": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.magicwall, data: 0, clicker: {onClick: function(){alert("Магическая стена");}}},

 ],
elements: [
 {text: "Создать магическую стену можно окружив каменные кирпичи кирпичами.", size: 18},
 ]
 }
    },
    
                              "animals": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: 383, data: 10, clicker: {onClick: function(){alert("Звериный зов");}}},

 ],
elements: [
 {text: "Чтобы призвать животных надо вокруг стога сена посадить пшеницу", size: 18},
 ]
 }
    },
    
                              "vulkan": {
				preLink: "pre",
				nextLink: "next",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: BlockID.basalt, data: 0, clicker: {onClick: function(){alert("Вулкан");}}},

 ],
elements: [
 {text: "Вулкан (не казино) создается если окружить лилитиум лилитиумом.", size: 18},
 ]
 }
    },
    
    
    
    
    
    
    
    
    
    
    
 //Те скобки внизу не трогать!
}

})
});

IDRegistry.genItemID("beladonnaflower");
Item.createItem("beladonnaflower", "Цветок беладонны", {name: "beladonnaflower", meta: 0}, {stack: 64});

IDRegistry.genItemID("mandragoraflower");
Item.createItem("mandragoraflower", "Цветок мандрагоры", {name: "mandragoraflower", meta: 0}, {stack: 64});

IDRegistry.genItemID("bedrockflowerflower");
Item.createItem("bedrockflowerflower", "Цветок бедрокоцвета", {name: "bedrockflowerflower", meta: 0}, {stack: 42});

IDRegistry.genItemID("stoneflowerflower");
Item.createItem("stoneflowerflower", "Каменный цветок", {name: "stoneflowerflower", meta: 0}, {stack: 64});

IDRegistry.genItemID("fourcleverflower");
Item.createItem("fourcleverflower", "Цветок четырехлистного клевера", {name: "fourcleverflower", meta: 0}, {stack: 64});

IDRegistry.genItemID("iceiumflower");
Item.createItem("iceiumflower", "Цветок ицеиума", {name: "iceiumflower", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.beladonna, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.beladonnaflower, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.mandragora, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mandragoraflower, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.bedrockflowet, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bedrockflowerflower, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.stoneflower, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.stoneflowerflower, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fourclever, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.fourcleverflower, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.iceium, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.iceiumflower, 1, 0]);
 return drop;
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.beladonnaflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.beladonna, 0);
Player.decreaseCarriedItem (1);
}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mandragoraflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mandragora, 0);
Player.decreaseCarriedItem (1);
}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bedrockflowerflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bedrockflower, 0);
Player.decreaseCarriedItem (1);
}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.stoneflowerflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.stoneflower, 0);
Player.decreaseCarriedItem (1);
}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fourcleverflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.fourclever, 0);
Player.decreaseCarriedItem (1);
}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.iceiumflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.iceium, 0);
Player.decreaseCarriedItem (1);
}
});
 
 IDRegistry.genBlockID("fiveclever"); 
  Block.createBlock("fiveclever", [{name: "Пятилистный клевер", texture: [["fiveclever", 0], ["fiveclever", 0], ["fiveclever", 0], ["fiveclever", 0], ["fiveclever", 0], ["fiveclever", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fiveclever", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fiveclever", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fiveclever, -1, render);
Block.setBlockShape(BlockID.fiveclever, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.fiveclever, 0);
}}});

IDRegistry.genItemID("fivecleverflower");
Item.createItem("fivecleverflower", "Цветок пятилистного клевера", {name: "fivecleverflower", meta: 0},{isTech: true},{stack: 64});
 
Block.registerDropFunction(BlockID.fiveclever, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.fivecleverflower, 1, 0]);
 return drop;
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fivecleverflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.fiveclever, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genBlockID("clever"); 
  Block.createBlock("clever", [{name: "Клевер", texture: [["clever", 0], ["clever", 0], ["clever", 0], ["clever", 0], ["clever", 0], ["clever", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "clever", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "clever", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.clever, -1, render);
Block.setBlockShape(BlockID.clever, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.clever, 0);
}}});

IDRegistry.genItemID("cleverflower");
Item.createItem("cleverflower", "Цветок клевера", {name: "cleverflower", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.clever, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cleverflower, 1, 0]);
 return drop;
});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cleverflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.clever, 0);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.Demon, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.fivecleverflower, 0]);

Recipes.addShaped({id: ItemID.nenic, count: 20, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.fivecleverflower, 0]);

Recipes.addShaped({id: ItemID.lilithium, count: 20, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.fivecleverflower, 0]);

Recipes.addShaped({id: 264, count: 20, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.fivecleverflower, 0]);

Recipes.addShaped({id: 388, count: 20, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.fivecleverflower, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bluelady)
{
Player.addItemToInventory (ItemID.blueladyhelmet, 1);
Player.addItemToInventory (ItemID.blueladychestplate, 1);
Player.addItemToInventory (ItemID.blueladyleggings, 1);
Player.addItemToInventory (ItemID.blueladyboots, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("blueladyhelmet");
IDRegistry.genItemID("blueladychestplate");
IDRegistry.genItemID("blueladyleggings");
IDRegistry.genItemID("blueladyboots");

Item.createArmorItem("blueladyhelmet", "Голова Blue Lady", {name: "blueladyhelmet", meta: 0}, {type: "helmet", armor: 0, durability: 650, texture: "armor/bluelady1.png"},{isTech: true});
Item.createArmorItem("blueladychestplate", "Платье Blue Lady", {name: "blueladychestplate", meta: 0}, {type: "chestplate", armor: 0, durability: 750, texture: "armor/bluelady1.png"},{isTech: true});
Item.createArmorItem("blueladyleggings", "Ноги Blue Lady", {name: "blueladyleggings", meta: 0}, {type: "leggings", armor: 0, durability: 700, texture: "armor/bluelady2.png"},{isTech: true});
Item.createArmorItem("blueladyboots", "Туфли Blue Lady", {name: "blueladyboots", meta: 0}, {type: "boots", armor: 0, durability: 600, texture: "armor/bluelady1.png"},{isTech: true});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.nastoy)
{
Entity.addEffect(Player.get(), Native.PotionEffect.heal, 100, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 3, 100)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.kicunebi)
{
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 9, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 9, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.heal, 100, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 4, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 249, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 4, 10000)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 10000)
Player.addItemToInventory (263, 1, 1);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dezombiepotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 100)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("hollywater");
Item.createThrowableItem("hollywater", "Святая вода", {name: "hollywater", data: 0}, {});
Item.registerThrowableFunction("hollywater", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);
Recipes.addShaped({id: ItemID.hollywater, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 373, 0]);

Recipes.addShaped({id: ItemID.hollywater, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 373, 0, 'b', ItemID.silverkrest, 0]);

Recipes.addShaped({id: ItemID.hollywater, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 373, 0, 'b', ItemID.krest, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.coursemelody)
{
Entity.addEffect(Player.get(), Native.PotionEffect.wither, 100, 3000)
}
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-1,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-5,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-6,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-6,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-6,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-6,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-6,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-6,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-6,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-6,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-6,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-7,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-7,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-7,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-7,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-7,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-7,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-7,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-7,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-7,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-8,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-8,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-8,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-8,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-8,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-8,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-8,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-8,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-8,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-9,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-9,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-9,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-9,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-9,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-9,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-9,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-9,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-9,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-10,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-10,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-10,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-10,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-10,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-10,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-10,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-10,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-10,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-11,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-11,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-11,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-11,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-11,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-11,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-11,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-11,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-11,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-12,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-12,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-12,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-12,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-12,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-12,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-12,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-12,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-12,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-13,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-13,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-13,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-13,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-13,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-13,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-13,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-13,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-13,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-14,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-14,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-14,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-14,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-14,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-14,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-14,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-14,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-14,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-15,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-15,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-15,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-15,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-15,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-15,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-15,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-15,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-15,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-16,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-16,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-16,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-16,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-16,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-16,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-16,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-16,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-16,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-17,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-17,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-17,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-17,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-17,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-17,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-17,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-17,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-17,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-18,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-18,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-18,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-18,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-18,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-18,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-18,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-18,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-18,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-19,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-19,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-19,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-19,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-19,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-19,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-19,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-19,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-19,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-20,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-20,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-20,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-20,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-20,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-20,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-20,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-20,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-20,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-21,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-21,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-21,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-21,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-21,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-21,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-21,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-21,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-21,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-22,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-22,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-22,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-22,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-22,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-22,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-22,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-22,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-22,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-23,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-23,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-23,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-23,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-23,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-23,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-23,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-23,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-23,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-24,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-24,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-24,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-24,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-24,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-24,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-24,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-24,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-24,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-25,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-25,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-25,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-25,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-25,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-25,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-25,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-25,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-25,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-26,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-26,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-26,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-26,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-26,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-26,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-26,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-26,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-26,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-27,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-27,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-27,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-27,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-27,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-27,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-27,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-27,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-27,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-28,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-28,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-28,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-28,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-28,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-28,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-28,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-28,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-28,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-29,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-29,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-29,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-29,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-29,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-29,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-29,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-29,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-29,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-30,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-30,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-30,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-30,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-30,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-30,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-30,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-30,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-30,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-31,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-31,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-31,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-31,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-31,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-31,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-31,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-31,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-31,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-32,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-32,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-32,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-32,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-32,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-32,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-32,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-32,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-32,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-33,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-33,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-33,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-33,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-33,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-33,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-33,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-33,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-33,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-34,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-34,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-34,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-34,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-34,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-34,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-34,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-34,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-34,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-35,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-35,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-35,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-35,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-35,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-35,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-35,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-35,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-35,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-36,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-36,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-36,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-36,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-36,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-36,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-36,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-36,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-36,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-37,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-37,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-37,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-37,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-37,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-37,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-37,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-37,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-37,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-38,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-38,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-38,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-38,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-38,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-38,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-38,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-38,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-38,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-39,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-39,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-39,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-39,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-39,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-39,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-39,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-39,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-39,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-40,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-40,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-40,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-40,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-40,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-40,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-40,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-40,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-40,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-41,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-41,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-41,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-41,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-41,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-41,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-41,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-41,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-41,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-42,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-42,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-42,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-42,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-42,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-42,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-42,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-42,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-42,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-43,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-43,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-43,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-43,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-43,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-43,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-43,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-43,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-43,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-44,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-44,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-44,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-44,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-44,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-44,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-44,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-44,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-44,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-45,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-45,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-45,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-45,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-45,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-45,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-45,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-45,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-45,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-46,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-46,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-46,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-46,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-46,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-46,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-46,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-46,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-46,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-47,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-47,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-47,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-48,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-48,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-48,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-48,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-48,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-48,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-48,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-48,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-48,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-49,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-49,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-49,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-49,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-49,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-49,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-49,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-49,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-49,  coords.z+1, 0, 0);
       
       World.setBlock(coords.x,coords.y-50,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-50,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-50,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-50,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-50,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-50,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-50,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-50,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-50,  coords.z+1, 0, 0);
       
       }}});
       
       Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, 88, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 88, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.kres, 0);
       }}});
       
       //STONEHENDGE_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
       
       Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x+6,coords.y+1,  coords.z-1, 1, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+1, 1, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, 1, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-5, 1, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-6, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+6, 1, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-6, 1, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+6, 1, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-5, 1, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, 1, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, 1, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-1, 1, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+1, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 1, 0);
       
       //2
       
       World.setBlock(coords.x+6,coords.y+2,  coords.z-1, 1, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+1, 1, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, 1, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-5, 1, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+5, 1, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-6, 1, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+6, 1, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-6, 1, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+6, 1, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-5, 1, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+5, 1, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+3, 1, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-1, 1, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+1, 1, 0);
       
       //3
       
       World.setBlock(coords.x+6,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z+3, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-5, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+5, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-6, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+6, 1, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-6, 1, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+6, 1, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-5, 1, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+5, 1, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+3, 1, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z, 1, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z-4, 1, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z+4, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-6, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+6, 1, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z-4, 1, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+4, 1, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z, 1, 0);
       }}});
       
       //BunkirBleyat_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
       
       Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x+9,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+8,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+7,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+6,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+5,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+4,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
      
      World.setBlock(coords.x+1,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-5,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z-4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-8, 8, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-7, 8, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-6, 8, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-5, 8, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z-4, 8, 0);
       
       World.setBlock(coords.x+1,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-8, 60, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-7, 60, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-6, 60, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-5, 60, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z-4, 60, 0);
       
       World.setBlock(coords.x,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z-4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-8, 60, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-7, 60, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-6, 60, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-5, 60, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z-4, 60, 0);
       
       World.setBlock(coords.x-2,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-8, 8, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-7, 8, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-6, 8, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-5, 8, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z-4, 8, 0);
       
       World.setBlock(coords.x-3,coords.y-5,  coords.z-9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z-4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+1,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-5,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-5,  coords.z+4, BlockID.bunkerblock, 0);
       
       //2
       
       World.setBlock(coords.x+9,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+8,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z+2, BlockID.blackbookshelf, 0);
       World.setBlock(coords.x+8,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+7,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z+2, 47, 0);
       World.setBlock(coords.x+7,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+6,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x+6,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+5,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z-2, 26, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x+5,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+4,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z-2, 26, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x+4,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+8, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+7, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+6, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+5, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+4, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+4, 57, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+5, 41, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+6, 42, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+7, 133, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z+8, BlockID.melblock, 0);
       World.setBlock(coords.x+2,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+1,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-8, 59, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-7, 59, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-6, 59, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-5, 59, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-4, 59, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+4, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+5, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+6, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+7, 0, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z+8, BlockID.amethistblock, 0);
       World.setBlock(coords.x+1,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-8, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-7, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-6, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-5, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-4, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+3, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-3, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+4, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+5, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+6, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+7, 0, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z+8, BlockID.aquamarineblock, 0);
       World.setBlock(coords.x,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-8, 59, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-7, 59, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-6, 59, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-5, 59, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-4, 59, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+4, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+5, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+6, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+7, 0, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z+8, BlockID.copperblock, 0);
       World.setBlock(coords.x-1,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-8, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-7, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-6, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-5, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-4, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+2, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+1, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-1, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-2, 0, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+4, BlockID.saphirreblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+5, BlockID.topazblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+6, BlockID.Silverblock, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+7, 57, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z+8, 41, 0);
       World.setBlock(coords.x-2,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-4,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-4,  coords.z-9, BlockID.bunkerblock, 0);
       
       //3
       
       World.setBlock(coords.x+9,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+8,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+2, 47, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+7,coords.y-3,  coords.z-3, 20, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+2, 47, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+6,coords.y-3,  coords.z-3, 20, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+5,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+4,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-8, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-7, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-6, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-5, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-4, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+4, BlockID.Silverblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+5, BlockID.poceidoniyblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+6, BlockID.saphirreblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+7, 133, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+8, BlockID.melblock, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+1,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-8, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-7, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-6, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-5, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-4, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+4, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+5, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+6, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+7, 0, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+8, BlockID.amethistblock, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-8, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-7, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-6, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-5, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-4, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+3, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-3, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+4, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+5, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+6, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+7, 0, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+8, BlockID.aquamarineblock, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-8, 59, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-7, 59, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-6, 59, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-5, 59, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-4, 59, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+4, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+5, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+6, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+7, 0, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+8, BlockID.topazblock, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-8, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-7, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-6, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-5, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-4, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+2, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+1, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-1, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-2, 0, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+4, BlockID.melblock, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+5, 57, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+6, 41, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+7, 42, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+8, 133, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-3,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-9, BlockID.bunkerblock, 0);
       
       //4
       
       World.setBlock(coords.x+9,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+8,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+2, 47, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+7,coords.y-2,  coords.z-3, 20, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+2, 47, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+6,coords.y-2,  coords.z-3, 20, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+5,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+4,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-8, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-7, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-6, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-5, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-4, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+4, 57, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+5, 41, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+6, 42, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+7, 133, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+8, BlockID.melblock, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+1,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-8, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-7, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-6, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-5, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-4, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+4, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+5, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+6, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+7, 0, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+8, BlockID.amethistblock, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-8, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-7, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-6, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-5, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-4, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+3, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-3, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+4, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+5, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+6, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+7, 0, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+8, BlockID.aquamarineblock, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-1,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-8, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-7, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-6, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-5, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-4, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+4, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+5, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+6, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+7, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+8, 0, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-8, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-7, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-6, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-5, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-4, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+2, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+1, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-1, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-2, 0, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+4, 41, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+5, 42, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+6, BlockID.nenicblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+7, BlockID.mithrilblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+8, BlockID.lilithiumblock, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-9, BlockID.bunkerblock, 0);
       
       //5
       
       World.setBlock(coords.x+9,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+8,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+7,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+6,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z, 89, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+5,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+4,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+3,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+2,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x+1,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+6, 89, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z, 89, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-6, 89, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0); 
       
       World.setBlock(coords.x-1,coords.y-2,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-2,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       World.setBlock(coords.x-3,coords.y-1,  coords.z+9, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-2, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-3, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-4, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-5, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-6, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-7, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-8, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-9, BlockID.bunkerblock, 0);
       
       //подъем
       
       //1
       
       World.setBlock(coords.x-4,coords.y-4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y-4,  coords.z, BlockID.bunkerblock, 0);
       
       //2
       
       World.setBlock(coords.x-5,coords.y-3,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-3,  coords.z+1, BlockID.bunkerblock, 0);
       
       //3
       
      World.setBlock(coords.x-3,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y-2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y-2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y-2,  coords.z, BlockID.bunkerblock, 0);
       
       //4
       
       World.setBlock(coords.x-3,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y-1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y-1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y-1,  coords.z, BlockID.bunkerblock, 0);
       
       //5
       
       World.setBlock(coords.x-3,coords.y,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y,  coords.z, BlockID.bunkerblock, 0);
       
       //6
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-9,coords.y+1,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-9,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-10,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-2, 5, 0);
       
       
      World.setBlock(coords.x-4,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-9,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-10,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z+2, 5, 0);
       
       World.setBlock(coords.x-11,coords.y+1,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z, 5, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-1, 5, 0);
       World.setBlock(coords.x-10,coords.y+1,  coords.z, BlockID.bunkerblock, 0);
       
       //7
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-9,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-10,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-2, 5, 0);
       
       
      World.setBlock(coords.x-4,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-9,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-10,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-11,coords.y+2,  coords.z+2, 5, 0);
       
       World.setBlock(coords.x-11,coords.y+2,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-1, 5, 0);
       
       //8
       
       World.setBlock(coords.x-3,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+3,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+3,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-7,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-8,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-9,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-10,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-11,coords.y+3,  coords.z-2, 5, 0);
       
       
      World.setBlock(coords.x-4,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-7,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-8,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-9,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-10,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-11,coords.y+3,  coords.z+2, 5, 0);
       
       World.setBlock(coords.x-11,coords.y+3,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+3,  coords.z-1, 5, 0);
       
       //9
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+4,  coords.z-1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+4,  coords.z+1, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-9,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-7,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-8,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-9,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-10,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-11,coords.y+4,  coords.z-2, 5, 0);
       
       
      World.setBlock(coords.x-4,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-7,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-8,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-9,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-10,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-11,coords.y+4,  coords.z+2, 5, 0);
       
       World.setBlock(coords.x-11,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+4,  coords.z-1, 5, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-7,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-8,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-9,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-10,coords.y+4,  coords.z, BlockID.bunkerblock, 0);
       World.setBlock(coords.x-11,coords.y+4,  coords.z, 5, 0);
       
       //10
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-7,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-7,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-8,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-8,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-9,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-7,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-8,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-9,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-10,coords.y+5,  coords.z-2, 5, 0);
       World.setBlock(coords.x-11,coords.y+5,  coords.z-2, 5, 0);
       
       
      World.setBlock(coords.x-4,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-7,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-8,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-9,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-10,coords.y+5,  coords.z+2, 5, 0);
       World.setBlock(coords.x-11,coords.y+5,  coords.z+2, 5, 0);
       
       World.setBlock(coords.x-11,coords.y+5,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+5,  coords.z-1, 5, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-7,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-8,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-9,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-10,coords.y+5,  coords.z, 5, 0);
       World.setBlock(coords.x-11,coords.y+5,  coords.z, 5, 0);
       
       //11
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-7,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-8,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-9,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-10,coords.y+6,  coords.z, 5, 0);
       World.setBlock(coords.x-11,coords.y+6,  coords.z, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-7,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-8,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-9,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-10,coords.y+6,  coords.z-1, 5, 0);
       World.setBlock(coords.x-11,coords.y+6,  coords.z-1, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-7,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-8,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-9,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-10,coords.y+6,  coords.z+1, 5, 0);
       World.setBlock(coords.x-11,coords.y+6,  coords.z+1, 5, 0);
       
       //12
       
       World.setBlock(coords.x-2,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-4,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-5,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-6,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-7,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-8,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-9,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-10,coords.y+7,  coords.z, 5, 0);
       World.setBlock(coords.x-11,coords.y+7,  coords.z, 5, 0);
       }}});
       
       Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
       
       let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, 4, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, 4, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, 4, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, 4, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, 4, 0);
       
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, 4, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-3, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, 4, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, 4, 0);
       
       //2
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-1, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z-3, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 53, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 53, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 53, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.plesen, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.plesen, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.plesen, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.plesen, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.plesen, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 85, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, 85, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.plesen, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-+1, BlockID.plesen, 0);
       
       //3
       
       World.setBlock(coords.x+3,coords.y+2,  coords.z-3, 5, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-1, 102, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z, 102, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+1, 102, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z-3, 5, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z-3, 102, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+3, 102, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z-3, 102, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+3, 102, 0);
       
       World.setBlock(coords.x-1,coords.y+2,  coords.z-3, 5, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-3, 5, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z-3, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z-1, 72, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 72, 0);
       
       //4
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, 5, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-1, 102, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z, 102, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+1, 102, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-3, 5, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z-3, 102, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 102, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z-3, 102, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+3, 102, 0);
       
       World.setBlock(coords.x-1,coords.y+3,  coords.z-3, 5, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-3, 5, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-3,coords.y+3,  coords.z-3, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-3, 47, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.blackbookshelf, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, 47, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 47, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 47, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 47, 0);
       
       //5
       World.setBlock(coords.x+3,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+3, 5, 0);
       
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 5, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-2, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-1, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+1, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, 5, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, 5, 0);
}}});

IDRegistry.genBlockID("pit");
Block.createBlock("pit", [{name: "Яма", texture: [["pit", 0], ["pit", 0], ["pit", 0], ["pit", 0], ["pit", 0], ["pit", 0]], inCreative: true}]);

Callback.addCallback("tick",function() {
var eff = Entity.getPosition(Player.get());
var block = World.getBlockID(eff.x, eff.y+1, eff.z);
if(block == BlockID.pit){
Entity.damageEntity(Player.get(), 1);   
Entity.addEffect(Player.get(), 20, 205, 1, false,false);   
}
});

//v7

 //v7_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆


IDRegistry.genItemID("pn");
Item.createItem("pn", "Пентаграмма для AchievementsAPI", {name: "pn", meta: 0}, {isTech:true}, {stack: 1}); 

ModAPI.addAPICallback("AchievementsAPI", function (api) { 
 api.AchievementAPI.registerGroup({ 
unique: "pn_materials", 
name: "Paranormal, материалы", 
width: 600, 
height: 250, 
size: 100, 
bgTexture: "paranormalachievement", 
icon: { 
id: ItemID.lilithium 
} 
}); 

api.AchievementAPI.register("pn_materials", { 
unique: "mel", 
name: { 
text: "Мел", 

}, 
description: { 
text: "Добыть мел", 
}, 
column: 1, 
row: 1, 
item: { 
id: ItemID.melkusok 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("Paranormal", "mel"); 

if (!data[ItemID.melkusok]) { 
data[ItemID.melkusol] = true; 
api.AchievementAPI.give("pn_materials", "mel") 
} 
});

////////////

api.AchievementAPI.register("pn_materials", { 
unique: "copper", 
name: { 
text: "Медь", 

}, 
description: { 
text: "Добыть медь", 
}, 
column: 1, 
row: 2, 
item: { 
id: ItemID.copperingot 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "mel"); 

if (!data[ItemID.copperingot]) { 
data[ItemID.copperingot] = true; 
api.AchievementAPI.give("pn_materials", "copper") 
} 
});

////////////

api.AchievementAPI.register("pn_materials", { 
unique: "silver", 
name: { 
text: "Страх вервульфа", 

}, 
description: { 
text: "Добыть серебро", 
}, 
column: 1, 
row: 3, 
item: { 
id: ItemID.silveringot 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "silver"); 

if (!data[ItemID.silveringot]) { 
data[ItemID.silveringot] = true; 
api.AchievementAPI.give("pn_materials", "silver") 
} 
});

//////////////

api.AchievementAPI.register("pn_materials", { 
unique: "mithril", 
name: { 
text: "Мифический металл", 

}, 
description: { 
text: "Добыть мифрил", 
}, 
column: 2, 
row: 1, 
item: { 
id: ItemID.mithrilingot 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "mithril"); 

if (!data[ItemID.mithrilingot]) { 
data[ItemID.mithrilingot] = true; 
api.AchievementAPI.give("pn_materials", "mithril") 
} 
});

///////////////

api.AchievementAPI.register("pn_materials", { 
unique: "amethyst", 
name: { 
text: "Аметист", 

}, 
description: { 
text: "Добыть аметист", 
}, 
column: 3, 
row: 1, 
item: { 
id: ItemID.amethyst 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "amethyst"); 

if (!data[ItemID.amethyst]) { 
data[ItemID.amethyst] = true; 
api.AchievementAPI.give("pn_materials", "amethyst") 
} 
});

////////////

api.AchievementAPI.register("pn_materials", { 
unique: "poceidoniy", 
name: { 
text: "Посейдоново творение", 

}, 
description: { 
text: "Добыть посейдоний", 
}, 
column: 3, 
row: 2, 
item: { 
id: ItemID.poceidoniy 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "poceidoniy"); 

if (!data[ItemID.poceidoniy]) { 
data[ItemID.poceidoniy] = true; 
api.AchievementAPI.give("pn_materials", "poceidoniy") 
} 
});

///////////////

api.AchievementAPI.register("pn_materials", { 
unique: "topaz", 
name: { 
text: "Топаз", 

}, 
description: { 
text: "Добыть топаз", 
}, 
column: 3, 
row: 3, 
item: { 
id: ItemID.topaz 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "topaz"); 

if (!data[ItemID.topaz]) { 
data[ItemID.topaz] = true; 
api.AchievementAPI.give("pn_materials", "topaz") 
} 
});

//////////////////

api.AchievementAPI.register("pn_materials", { 
unique: "germesboots", 
name: { 
text: "Беги, Гермес, беги!", 

}, 
description: { 
text: "Создайте ботинки Гермеса", 
}, 

parent: {
	unique: "germesboots"
	},
	
column: 4, 
row: 1, 
item: { 
id: ItemID.germesboots 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "germesboots"); 

if (!data[ItemID.germesboots]) { 
data[ItemID.germesboots] = true; 
api.AchievementAPI.give("pn_materials", "germesboots") 
} 
});

///////////////

api.AchievementAPI.register("pn_materials", { 
unique: "poceidontrident", 
name: { 
text: "Это Посейдонов район", 

}, 
description: { 
text: "Сделать трезубец Посейдона", 
}, 

parent: {
	unique: "poceidoniy"
	},
	
column: 4, 
row: 2, 
item: { 
id: ItemID.poceidontrident 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "poceidontrident"); 

if (!data[ItemID.poceidontrident]) { 
data[ItemID.poceidontrident] = true; 
api.AchievementAPI.give("pn_materials", "poceidontrident") 
} 
});

////////////

api.AchievementAPI.register("pn_materials", { 
unique: "aidhelmet", 
name: { 
text: "Невидимый король ада", 

}, 
description: { 
text: "Сделать шлем Аида", 
}, 

parent: {
	unique: "topaz"
	},
	
column: 4, 
row: 3, 
item: { 
id: ItemID.aidhelmet 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_materials", "aidhelmet"); 

if (!data[ItemID.aidhelmet]) { 
data[ItemID.aidhelmet] = true; 
api.AchievementAPI.give("pn_materials", "aidhelmet") 
} 
});

///////////

ModAPI.addAPICallback("AchievementsAPI", function (api) { 
 api.AchievementAPI.registerGroup({ 
unique: "pn_soul", 
name: "Paranormal, души", 
width: 600, 
height: 250, 
size: 100, 
bgTexture: "asasss", 
icon: { 
id: ItemID.soul 
} 
}); 

//////////////

api.AchievementAPI.register("pn_soul", { 
unique: "truesoul", 
name: { 
text: "А ночью по лесу идет Сатана и собирает свежие души", 

}, 
description: { 
text: "Создайте душу", 
}, 

parent: {
	unique: "soul"
	},
	
column: 2, 
row: 1, 
item: { 
id: ItemID.truesoul 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_soul", "truesoul"); 

if (!data[ItemID.truesoul]) { 
data[ItemID.truesoul] = true; 
api.AchievementAPI.give("pn_soul", "truesoul") 
} 
});

//////////////

api.AchievementAPI.register("pn_soul", { 
unique: "soul", 
name: { 
text: "Бездушный", 

}, 
description: { 
text: "Выбейте слабую душу", 
}, 
	
column: 1, 
row: 1, 
item: { 
id: ItemID.soul 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_soul", "soul"); 

if (!data[ItemID.soul]) { 
data[ItemID.soul] = true; 
api.AchievementAPI.give("pn_soul", "soul") 
} 
});

////////////////

api.AchievementAPI.register("pn_soul", { 
unique: "deathscythe", 
name: { 
text: "И настанет конец...", 

}, 
description: { 
text: "Создайте косу Смерти", 
}, 

parent: {
	unique: "truesoul"
	},
column: 3, 
row: 1, 
item: { 
id: ItemID.death_scythe 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_soul", "deathscythe"); 

if (!data[ItemID.deathscythe]) { 
data[ItemID.deathscythe] = true; 
api.AchievementAPI.give("pn_soul", "deathscythe") 
} 
});

////////////////

api.AchievementAPI.register("pn_soul", { 
unique: "soulpearl", 
name: { 
text: "Черная Жемчужина", 

}, 
description: { 
text: "Создайте жемчуг душ", 
}, 

parent: {
	unique: "deathscythe"
	},
column: 4, 
row: 1, 
item: { 
id: ItemID.soul_pearl 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_soul", "soulpearl"); 

if (!data[ItemID.soulpearl]) { 
data[ItemID.soulpearl] = true; 
api.AchievementAPI.give("pn_soul", "soulpearl") 
} 
});

//////////////

api.AchievementAPI.register("pn_soul", { 
unique: "soulbottle", 
name: { 
text: "Заключена навеки", 

}, 
description: { 
text: "Создайте бутылку душ", 
}, 

parent: {
	unique: "soulpearl"
	},
column: 4, 
row: 2, 
item: { 
id: ItemID.soul_bottle 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_soul", "soulbottle"); 

if (!data[ItemID.soulbottle]) { 
data[ItemID.soulbottle] = true; 
api.AchievementAPI.give("pn_soul", "soulbottle") 
} 
});

/////////////////////////

ModAPI.addAPICallback("AchievementsAPI", function (api) { 
 api.AchievementAPI.registerGroup({ 
unique: "pn_other", 
name: "Paranormal, разное", 
width: 600, 
height: 250, 
size: 100, 
bgTexture: "acdc", 
icon: { 
id: ItemID.pn 
} 
}); 

///////////////

api.AchievementAPI.register("pn_other", { 
unique: "hollywater", 
name: { 
text: "Изыди, нечисть!", 

}, 
description: { 
text: "Создайте святую воду", 
}, 
	
column: 1, 
row: 1, 
item: { 
id: ItemID.hollywater 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_other", "hollywater"); 

if (!data[ItemID.hollywater]) { 
data[ItemID.hollywater] = true; 
api.AchievementAPI.give("pn_other", "hollywater") 
} 
});

/////////////////

api.AchievementAPI.register("pn_other", { 
unique: "fiveclever", 
name: { 
text: "Вера, надежда, любовь, удача и... демон?", 

}, 
description: { 
text: "Найдите пятилистный клевер", 
}, 
	
column: 1, 
row: 2, 
item: { 
id: ItemID.fivecleverflower 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_other", "fiveclever"); 

if (!data[ItemID.fivecleverflower]) { 
data[ItemID.fivecleverflower] = true; 
api.AchievementAPI.give("pn_other", "fiveclever") 
} 
});

/////////////

api.AchievementAPI.register("pn_other", { 
unique: "fourclever", 
name: { 
text: "Берете три, четвертый в подарок!", 

}, 
description: { 
text: "Найдите четырехлистный клевер", 
}, 
	
column: 1, 
row: 3, 
item: { 
id: ItemID.fourcleverflower 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_other", "fourclever"); 

if (!data[ItemID.fourcleverflower]) { 
data[ItemID.fourcleverflower] = true; 
api.AchievementAPI.give("pn_other", "fourclever") 
} 
});

//////////////////

api.AchievementAPI.register("pn_other", { 
unique: "demon", 
name: { 
text: "В нем сидит демон", 

}, 
description: { 
text: "Призовите демона", 
}, 
	
column: 2, 
row: 1, 
item: { 
id: ItemID.Demon 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_other", "demon"); 

if (!data[ItemID.Demon]) { 
data[ItemID.Demon] = true; 
api.AchievementAPI.give("pn_other", "demon") 
} 
});

///////////////////

api.AchievementAPI.register("pn_other", { 
unique: "blackbook", 
name: { 
text: "Мой личный дневник", 

}, 
description: { 
text: "Найдите путеводитель по паранормальному и сверхъестественному", 
}, 
	
column: 2, 
row: 2, 
item: { 
id: ItemID.blackbook 
} 
});

Callback.addCallback("ItemUse", function (coords, item, block) { 
let data = api.AchievementAPI.getData("pn_other", "blackbook"); 

if (!data[ItemID.blackbook]) { 
data[ItemID.blackbook] = true; 
api.AchievementAPI.give("pn_other", "blackbook") 
} 
});



});
});
});

ModAPI.addAPICallback("Baubles", function(api){
 

api.Baubles.registerBauble({
    id: ItemID.beladonnaring, 
    type: "ring0", 
    onEquip: function () {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    },
    
    onTakeOff: function () {
    },
    
    tick: function () {
        Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    }
});
});

IDRegistry.genItemID("earthcrystal");
Item.createItem("earthcrystal", "Кристалл природы", {name: "earthcrystal", data: 0},{stack: 64});

IDRegistry.genItemID("watercrystal");
Item.createItem("watercrystal", "Кристалл воды", {name: "watercrystal", data: 0},{stack: 64});

IDRegistry.genItemID("aircrystal");
Item.createItem("aircrystal", "Кристалл холода", {name: "aircrystal", data: 0},{stack: 64});

IDRegistry.genItemID("firecrystal");
Item.createItem("firecrystal", "Кристалл огня", {name: "firecrystal", data: 0},{stack: 64}); 

IDRegistry.genItemID("aethercrystal");
Item.createItem("aethercrystal", "Кристалл эфира", {name: "aethercrystal", data: 0},{stack: 64});

IDRegistry.genItemID("ritualknife");
Item.createItem("ritualknife", "Ритуальный нож", {name: "ritualknife", data: 0},{stack: 1});
ToolAPI.addToolMaterial("ritualknife", {durability: 50, level: 0, damage: 5});
ToolAPI.setTool(ItemID.ritualknife, "ritualknife", ToolType.sword);

var Mobs = { 
drop: function(mobs, id, drop){ 
Callback.addCallback("EntityDeath", function(entity){ 
 let item = Player.getCarriedItem(); 
 if((Entity.getType(entity) == mobs) && (item.id == id)){ 
   var coords = Entity.getPosition(entity); 
 World.drop(coords.x, coords.y, coords.z, drop, 1, 0); 
 } 
 }); 
} 
}; 

Mobs.drop(15, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(19, ItemID.ritualknife, ItemID.aircrystal)
Mobs.drop(11, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(10, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(16, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(12, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(18, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(23, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(24, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(25, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(27, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(26, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(13, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(22, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(17, ItemID.ritualknife, ItemID.watercrystal)
Mobs.drop(21, ItemID.ritualknife, ItemID.aircrystal)
Mobs.drop(25, ItemID.ritualknife, ItemID.aircrystal)
Mobs.drop(14, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(20, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(36, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(40, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(38, ItemID.ritualknife, ItemID.aethercrystal)
Mobs.drop(42, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(34, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(48, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(37, ItemID.ritualknife, ItemID.watercrystal)
Mobs.drop(49, ItemID.ritualknife, ItemID.watercrystal)
Mobs.drop(39, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(55, ItemID.ritualknife, ItemID.aethercrystal)
Mobs.drop(54, ItemID.ritualknife, ItemID.aethercrystal)
Mobs.drop(53, ItemID.ritualknife, ItemID.aethercrystal)
Mobs.drop(52, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(50, ItemID.ritualknife, ItemID.watercrystal)
Mobs.drop(36, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(45, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(45, ItemID.ritualknife, ItemID.watercrystal)
Mobs.drop(46, ItemID.ritualknife, ItemID.aircrystal)
Mobs.drop(32, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(44, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(43, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(47, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(47, ItemID.ritualknife, ItemID.firecrystal)
Mobs.drop(33, ItemID.ritualknife, ItemID.earthcrystal)
Mobs.drop(33, ItemID.ritualknife, ItemID.firecrystal)

//филстоун

TileEntity.registerPrototype(BlockID.amethystblock, {
 
 tick: function(){
  var wgc = World.getBlock;
  
        var wgc1 = wgc(this.x+2,this.y,this.z);
  var wgc2 = wgc(this.x-2,this.y,this.z);
        var wgc3 = wgc(this.x,this.y,this.z+2);
        var wgc4 = wgc(this.x,this.y,this.z-2);
        var blc1 = wgc1.id== BlockID.topazblock;var blc2 = wgc2.id== BlockID.topazblock;var blc3 = wgc3.id== BlockID.topazblock;
        var blc4 = wgc4.id== BlockID.amethystblock;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.filstonebl);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

IDRegistry.genItemID("filstone");
Item.createItem("filstone", "Филосовский камень", {name: "filstone", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.filstone)
{
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z, 41, 0);
}
});

IDRegistry.genBlockID("filstonebl"); 
  Block.createBlock("filstonebl", [{name: "Филосовский камень", texture: [["filstonebl", 0], ["filstonebl", 0], ["filstonebl", 0], ["filstonebl", 0], ["filstonebl", 0], ["filstonebl", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 4/16, 2/16, 14/16, 13/16, 14/16, "filstonebl", 0);
model.addBox(3/16, 3/16, 3/16, 13/16, 13/16, 13/16, "filstonebl", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 3/16, 13/16, "filstoneosn", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.filstonebl, -1, render);
Block.setBlockShape(BlockID.filstonebl, {"x":0,"y":0,"z":0}, {"x":0.8125,"y":0.8125,"z":0.8125});

//дэстройстоун


TileEntity.registerPrototype(BlockID.aquamarineblock, {
 
 tick: function(){
  var wgb = World.getBlock;
  
        var wgb1 = wgb(this.x+2,this.y,this.z);
  var wgb2 = wgb(this.x-2,this.y,this.z);
        var wgb3 = wgb(this.x,this.y,this.z+2);
        var wgb4 = wgb(this.x,this.y,this.z-2);
        var blc1 = wgb1.id== BlockID.amethystblock;var blc2 = wgb2.id== BlockID.amethystblock;var blc3 = wgb3.id== BlockID.amethystblock;
        var blc4 = wgb4.id== BlockID.aquamarineblock;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.destroystonebl);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

IDRegistry.genItemID("destroystone");
Item.createItem("destroystone", "Камень разрушения", {name: "destroystone", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.destroystone)
{
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z, 0, 0);
}
});

IDRegistry.genBlockID("destroystonebl"); 
  Block.createBlock("destroystonebl", [{name: "Камень разрушения", texture: [["destroystonebl", 0], ["destroystonebl", 0], ["destroystonebl", 0], ["destroystonebl", 0], ["destroystonebl", 0], ["destroystonebl", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 4/16, 2/16, 14/16, 13/16, 14/16, "destroystonebl", 0);
model.addBox(3/16, 3/16, 3/16, 13/16, 13/16, 13/16, "destroystonebl", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 3/16, 13/16, "destroystoneosn", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.destroystonebl, -1, render);
Block.setBlockShape(BlockID.destroystonebl, {"x":0,"y":0,"z":0}, {"x":0.8125,"y":0.8125,"z":0.8125});

//эросионстоун

TileEntity.registerPrototype(41, {
 
 tick: function(){
  var wgb = World.getBlock;
  
        var wgb1 = wgb(this.x+2,this.y,this.z);
  var wgb2 = wgb(this.x-2,this.y,this.z);
        var wgb3 = wgb(this.x,this.y,this.z+2);
        var wgb4 = wgb(this.x,this.y,this.z-2);
        var blc1 = wgb1.id== BlockID.topazblock;var blc2 = wgb2.id== BlockID.topazblock;var blc3 = wgb3.id== BlockID.topazblock;
        var blc4 = wgb4.id== 41;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.erosionstonebl);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

IDRegistry.genItemID("erosionstone");
Item.createItem("erosionstone", "Камень эрозии", {name: "erosionstone", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.erosionstone)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-2, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z+1, 0, 0);
}
});

IDRegistry.genBlockID("erosionstonebl"); 
  Block.createBlock("erosionstonebl", [{name: "Камень эрозии", texture: [["erosionstonebl", 0], ["erosionstonebl", 0], ["erosionstonebl", 0], ["erosionstonebl", 0], ["erosionstonebl", 0], ["erosionstonebl", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 4/16, 2/16, 14/16, 13/16, 14/16, "erosionstonebl", 0);
model.addBox(3/16, 3/16, 3/16, 13/16, 13/16, 13/16, "erosionstonebl", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 3/16, 13/16, "erosionstoneosn", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.erosionstonebl, -1, render);
Block.setBlockShape(BlockID.erosionstonebl, {"x":0,"y":0,"z":0}, {"x":0.8125,"y":0.8125,"z":0.8125});

Block.registerDropFunction(BlockID.filstonebl, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.filstone, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.destroystonebl, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.destroystone, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.erosionstonebl, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.erosionstone, 1, 0]);
 return drop;
});

Recipes.addShaped({id: BlockID.filstonebl, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.filstone, 0]);

Recipes.addShaped({id: BlockID.destroystonebl, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.destroystone, 0]);

Recipes.addShaped({id: BlockID.erosionstonebl, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.erosionstone, 0]);

//elementalcrystals

IDRegistry.genBlockID("firecrystalblock"); 
  Block.createBlock("firecrystalblock", [{name: "Блок огненных кристаллов", texture: [["firecrystalblock", 0], ["firecrystalblock", 0], ["firecrystalblock", 0], ["firecrystalblock", 0], ["firecrystalblock", 0], ["firecrystalblock", 0]], inCreative: true}]);
  
  IDRegistry.genBlockID("aethercrystalblock"); 
  Block.createBlock("aethercrystalblock", [{name: "Блок эфирных кристаллов", texture: [["aethercrystalblock", 0], ["aethercrystalblock", 0], ["aethercrystalblock", 0], ["aethercrystalblock", 0], ["aethercrystalblock", 0], ["aethercrystalblock", 0]], inCreative: true}]);
  
  IDRegistry.genBlockID("earthcrystalblock"); 
  Block.createBlock("earthcrystalblock", [{name: "Блок природных кристаллов", texture: [["earthcrystalblock", 0], ["earthcrystalblock", 0], ["earthcrystalblock", 0], ["earthcrystalblock", 0], ["earthcrystalblock", 0], ["earthcrystalblock", 0]], inCreative: true}]);
  
  IDRegistry.genBlockID("watercrystalblock"); 
  Block.createBlock("watercrystalblock", [{name: "Блок водных кристаллов", texture: [["watercrystalblock", 0], ["watercrystalblock", 0], ["watercrystalblock", 0], ["watercrystalblock", 0], ["watercrystalblock", 0], ["watercrystalblock", 0]], inCreative: true}]);
  
  IDRegistry.genBlockID("aircrystalblock"); 
  Block.createBlock("aircrystalblock", [{name: "Блок холодных кристаллов", texture: [["aircrystalblock", 0], ["aircrystalblock", 0], ["aircrystalblock", 0], ["aircrystalblock", 0], ["aircrystalblock", 0], ["aircrystalblock", 0]], inCreative: true}]);
  
  Recipes.addShaped({id: BlockID.earthcrystalblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.earthcrystal, 0]);
  Recipes.addShaped({id: BlockID.aircrystalblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.aircrystal, 0]);
  Recipes.addShaped({id: BlockID.watercrystalblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.watercrystal, 0]);
  Recipes.addShaped({id: BlockID.firecrystalblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.firecrystal, 0]);
  Recipes.addShaped({id: BlockID.aethercrystalblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.aethercrystal, 0]);
  
  Recipes.addShaped({id: ItemID.earthcrystal, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.earthcrystalblock, 0]);
  Recipes.addShaped({id: ItemID.aircrystal, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.aircrystalblock, 0]);
  Recipes.addShaped({id: ItemID.watercrystal, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.watercrystalblock, 0]);
  Recipes.addShaped({id: ItemID.firecrystal, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.firecrystalblock, 0]);
  Recipes.addShaped({id: ItemID.aethercrystal, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.aethercrystalblock, 0]);
  
  TileEntity.registerPrototype(4, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
  var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
        var blc1 = wgd1.id== BlockID.earthcrystalblock;var blc2 = wgd2.id== BlockID.aircrystalblock;var blc3 = wgd3.id== BlockID.watercrystalblock;
        var blc4 = wgd4.id== BlockID.firecrystalblock;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.aethercrystalblock);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});


Recipes.addShaped({id: ItemID.ritualknife, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 4, 0, 'b', ItemID.lilithium, 0]);

IDRegistry.genItemID("goldring");
Item.createItem("goldring", "Золотое кольцо", {name: "goldring", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.goldring, count: 1, data: 0}, [ " a ", "a a", " a "], ['a', 266, 0]);
  


IDRegistry.genItemID("beladonnastone");
Item.createItem("beladonnastone", "Камень беладонны", {name: "beladonnastone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.beladonnastone, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.beladonnaflower, 0, 'b', ItemID.stoneflowerflower, 0]);   

IDRegistry.genItemID("mandragorastone");
Item.createItem("mandragorastone", "Камень мандрагоры", {name: "mandragorastone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mandragorastone, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.mandragoraflower, 0, 'b', ItemID.stoneflowerflower, 0]);   

IDRegistry.genItemID("bedrockflowerstone");
Item.createItem("bedrockflowerstone", "Камень бедрокоцвета", {name: "bedrockflowerstone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.bedrockflowerstone, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.bedrockflowerflower, 0, 'b', ItemID.stoneflowerflower, 0]);

IDRegistry.genItemID("iceiumstone");
Item.createItem("iceiumstone", "Камень ицеиума", {name: "iceiumstone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.iceiumstone, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.iceiumflower, 0, 'b', ItemID.stoneflowerflower, 0])

IDRegistry.genItemID("fourcleverstone");
Item.createItem("fourcleverstone", "Камень четырехлистного клевера", {name: "fourcleverstone", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.fourcleverstone, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.fourcleverflower, 0, 'b', ItemID.stoneflowerflower, 0]);    



IDRegistry.genItemID("beladonnaring");
Item.createItem("beladonnaring", "Кольцо беладонны", {name: "beladonnaring", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.beladonnaring, count: 1, data: 0}, [ " a ", "bcb", " b "], ['a', ItemID.beladonnastone, 0, 'b', ItemID.beladonnaflower, 0, 'c', ItemID.goldring, 0]); 
  
IDRegistry.genItemID("mandragoraring");
Item.createItem("mandragoraring", "Кольцо мандрагоры", {name: "mandragoraring", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.mandragoraring, count: 1, data: 0}, [ " a ", "bcb", " b "], ['a', ItemID.mandragorastone, 0, 'b', ItemID.mandragoraflower, 0, 'c', ItemID.goldring, 0]);

IDRegistry.genItemID("bedrockflowerring");
Item.createItem("bedrockflowerring", "Кольцо бедрокоцвета", {name: "bedrockflowerring", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bedrockflowerring, count: 1, data: 0}, [ " a ", "bcb", " b "], ['a', ItemID.bedrockflowerstone, 0, 'b', ItemID.bedrockflowerflower, 0, 'c', ItemID.goldring, 0]);

IDRegistry.genItemID("iceiumring");
Item.createItem("iceiumring", "Кольцо ицеиума", {name: "iceiumring", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.iceiumring, count: 1, data: 0}, [ " a ", "bcb", " b "], ['a', ItemID.iceiumstone, 0, 'b', ItemID.iceiumflower, 0, 'c', ItemID.goldring, 0]);

IDRegistry.genItemID("fourcleverring");
Item.createItem("fourcleverring", "Кольцо четырехлистного клевера", {name: "fourcleverring", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.fourcleverring, count: 1, data: 0}, [ " a ", "bcb", " b "], ['a', ItemID.fourcleverstone, 0, 'b', ItemID.fourcleverflower, 0, 'c', ItemID.goldring, 0]);

  
      

 



IDRegistry.genItemID("papirus");
Item.createItem("papirus", "Папирус", {name: "papirus", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.papirus, count: 1, data: 0}, [ "   ", "aaa", "   "], ['a', 339, 0]);

IDRegistry.genItemID("blackleather");
Item.createItem("blackleather", "Черная кожа", {name: "blackleather", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.blackleather, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 351, 0, 'b', 335, 0]);

Recipes.addShaped({id: ItemID.blackbook, count: 1, data: 0}, [ " b ", "aaa", "   "], ['a', ItemID.papirus, 0, 'b', ItemID.blackleather, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.beladonnaring)
{
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 30000)
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mandragoraring)
{
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 30000)
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bedrockflowerring)
{
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 30000)
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.iceiumring)
{
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 2, 30000)
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fourcleverring)
{
Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 0, 30000)
}
});

IDRegistry.genBlockID("tabak"); 
  Block.createBlock("tabak", [{name: "Табак", texture: [["tabak", 0], ["tabak", 0], ["tabak", 0], ["tabak", 0], ["tabak", 0], ["tabak", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "tabak", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "tabak", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.tabak, -1, render);
Block.setBlockShape(BlockID.tabak, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.tabak, 0);
}}});

IDRegistry.genBlockID("bluetabak"); 
  Block.createBlock("bluetabak", [{name: "Синий табак", texture: [["bluetabak", 0], ["bluetabak", 0], ["bluetabak", 0], ["bluetabak", 0], ["bluetabak", 0], ["bluetabak", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "bluetabak", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "bluetabak", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bluetabak, -1, render);
Block.setBlockShape(BlockID.bluetabak, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


IDRegistry.genItemID("tabakflower");
Item.createItem("tabakflower", "Цветок табака", {name: "tabakflower", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.tabak, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.tabakflower, 1, 0]);
 return drop;
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.tabakflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.tabak, 0);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("bluetabakflower");
Item.createItem("bluetabakflower", "Синий цветок табака", {name: "bluetabakflower", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.bluetabak, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bluetabakflower, 1, 0]);
 return drop;
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bluetabakflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bluetabak, 0);
Player.decreaseCarriedItem (1);
}
});

TileEntity.registerPrototype(BlockID.fourclever, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
  var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
        var blc1 = wgd1.id== BlockID.lilithiumblock;var blc2 = wgd2.id== BlockID.lilithiumblock;var blc3 = wgd3.id== BlockID.lilithiumblock;
        var blc4 = wgd4.id== BlockID.lilithiumblock;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.fiveclever);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

TileEntity.registerPrototype(BlockID.tabak, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
  var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
        var blc1 = wgd1.id== 22;var blc2 = wgd2.id== 22;var blc3 = wgd3.id== 22;
        var blc4 = wgd4.id== 22;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, BlockID.bluetabak);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

Recipes.addShaped({id: ItemID.bluelady, count: 1, data: 0}, [ " b ", "aaa", "   "], ['a', 339, 0, 'b', ItemID.bluetabakflower, 0]);

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Sheptun");
Item.createItem("Sheptun", "Призыв Шептуна", {name: "Sheptun", data: 0});

var Sheptun = MobRegistry.registerEntity("Sheptun");
Sheptun.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Sheptun.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Sheptun.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Sheptun.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Sheptun", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Sheptun", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Sheptun){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Blackdog");
Item.createItem("Blackdog", "Призыв Черного Пса", {name: "Blackdog", data: 0});

var Blackdog = MobRegistry.registerEntity("Blackdog");
Blackdog.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);//render
 Entity.setSkin(this.entity, "mob/Blackdog.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Blackdog.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Blackdog.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.4,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.4,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Blackdog", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Blackdog", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Blackdog){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Mikmakchinoo");
Item.createItem("Mikmakchinoo", "Призыв Микмак Чиноо", {name: "Mikmakchinoo", data: 0});

var Mikmakchinoo = MobRegistry.registerEntity("Mikmakchinoo");
Mikmakchinoo.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Mikmakchinoo.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Mikmakchinoo.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Mikmakchinoo.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Mikmakchinoo", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Mikmakchinoo", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Mikmakchinoo){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped



//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Kicune");
Item.createItem("Kicune", "Призыв Кицунэ", {name: "Kicune", data: 0});

var Kicune = MobRegistry.registerEntity("Kicune");
Kicune.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);//render
 Entity.setSkin(this.entity, "mob/Kicune.png");//skin
 
 Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
 getDrop: function(){
var r = randomInt(0,1);
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.kicunebi, r);//дроп
}
});

Kicune.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Kicune.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Kicune", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Kicune", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Kicune){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.kicunebi, 2, 0);
}
});

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Forest");
Item.createItem("Forest", "Призыв Лешего", {name: "Forest", data: 0});

var Forest = MobRegistry.registerEntity("Forest");
Forest.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Forest.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Forest.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Forest.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Forest", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Forest", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Forest){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Achery");
Item.createItem("Achery", "Призыв Ачери", {name: "Achery", data: 0});

var Achery = MobRegistry.registerEntity("Achery");
Achery.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Achery.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Achery.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Achery.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Achery", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Achery", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Sheptun){
var coords = Entity.getPosition(Achery);
World.drop(coords.x, coords.y, coords.z, ItemID.demonblood, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Bloodymary");
Item.createItem("Bloodymary", "Призыв Кровавой Мэри", {name: "Bloodymary", data: 0});

var Bloodymary = MobRegistry.registerEntity("Bloodymary");
Bloodymary.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Bloodymary.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Bloodymary.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Bloodymary.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Bloodymary", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Bloodymary", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Bloodymary){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Vendigo");
Item.createItem("Vendigo", "Призыв Вендиго", {name: "Vendigo", data: 0});

var Vendigo = MobRegistry.registerEntity("Vendigo");
Vendigo.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Vendigo.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threery, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Vendigo.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Vendigo.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Vendigo", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Vendigo", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Vendigo){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Banshi");
Item.createItem("Banshi", "Призыв Баньши", {name: "Banshi", data: 0});

var Banshi = MobRegistry.registerEntity("Banshi");
Banshi.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Banshi.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Banshi.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Banshi.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Banshi", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Banshi", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Sheptun){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Poltergeyst");
Item.createItem("Poltergeyst", "Призыв Полтергейста", {name: "Poltergeyst", data: 0});

var Poltergeyst = MobRegistry.registerEntity("Poltergeyst");
Poltergeyst.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Poltergeyst.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Poltergeyst.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Poltergeyst.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 3,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Poltergeyst", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Poltergeyst", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Poltergeyst){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Prach");
Item.createItem("Prach", "Призыв Прячущегося", {name: "Prach", data: 0});

var Prach = MobRegistry.registerEntity("Prach");
Prach.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 26);//render
 Entity.setSkin(this.entity, "mob/Prach.png");//skin
 
},

attackedBy: function(attacker, amount){
 //sound
}
});

Prach.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Prach.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Prach", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Prach", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Prach){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

importLib("AdvancedAI", "*");

/*var mas = ["skin","skin1","skin2","skin3","skin4","skin5"];
var r = random(0, 5); mas[r]*/

IDRegistry.genItemID("Shadow");
Item.createItem("Shadow", "Призыв SCP 017 - Тень Человека", {name: "Shadow", data: 0});

var Shadow = MobRegistry.registerEntity("Shadow");
Shadow.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/Shadow.png");//skin
 

Entity.setArmorSlot(this.entity, 2, ItemID.threety, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
}
});

Shadow.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Shadow.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("Shadow", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Shadow", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == Shadow){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped

//000000000000000000000000000000000000

IDRegistry.genItemID("Waterman");
Item.createItem("Waterman", "Призыв Водяного", {name: "Waterman", data: 0});

var Waterman = MobRegistry.registerEntity("Waterman");
Waterman.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);
 Entity.setSkin(this.entity, "mob/Waterman.png");
},
attackedBy: function(attacker, amount){
 
}
});

Waterman.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Waterman.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.9,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 26
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 6,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});

Item.registerUseFunction("Waterman", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Waterman", coords.x + .5, coords.y + 1, coords.z + .5);
});

IDRegistry.genItemID("million");
Item.createArmorItem("million", "миллион", {name: "million", meta: 0}, {type: "helmet", armor: 24999500, durability: 3400, texture: "armor/aidhelmet1.png"});

IDRegistry.genItemID("threety");
Item.createArmorItem("threety", "тридцать", {name: "threety", meta: 0}, {type: "helmet", armor: 250, durability: 3400, texture: "armor/aidhelmet1.png"});

IDRegistry.genItemID("twentyfive");
Item.createArmorItem("twentyfive", "двадцать пять", {name: "twentyfive", meta: 0}, {type: "helmet", armor: 125, durability: 3400, texture: "armor/aidhelmet1.png"});

IDRegistry.genItemID("onehundred");
Item.createArmorItem("onehundred", "сто", {name: "onehundred", meta: 0}, {type: "helmet", armor: 2000, durability: 3400, texture: "armor/aidhelmet1.png"});

IDRegistry.genItemID("thousand");
Item.createArmorItem("thousand", "тыща", {name: "thousand", meta: 0}, {type: "helmet", armor: 24500, durability: 3400, texture: "armor/aidhelmet1.png"});

IDRegistry.genItemID("fourthousand");
Item.createArmorItem("fourthousand", "четыре тыщи", {name: "million", meta: 0}, {type: "helmet", armor: 99500, durability: 3400, texture: "armor/aidhelmet1.png"});

TileEntity.registerPrototype(BlockID.topazblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 41;
var blc2 = wgd2.id== 41;
var blc3 = wgd3.id== 41;
var blc4 = wgd4.id== 41;
 if(blc1 && blc2 && blc3 && blc4){
  World.setWorldTime(0) 
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

TileEntity.registerPrototype(BlockID.Silverblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 41;
var blc2 = wgd2.id== 41;
var blc3 = wgd3.id== 41;
var blc4 = wgd4.id== 41;
 if(blc1 && blc2 && blc3 && blc4){
  World.setWorldTime(13800) 
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

TileEntity.registerPrototype(BlockID.poceidonijblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== BlockID.waterstone;
var blc2 = wgd2.id== BlockID.waterstone;
var blc3 = wgd3.id== BlockID.waterstone;
var blc4 = wgd4.id== BlockID.waterstone;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  
  World.setBlock(this.x, this.y-1, this.z, 8);
  World.setBlock(this.x+1, this.y-1, this.z, 8);
  World.setBlock(this.x-1, this.y-1, this.z, 8);
  World.setBlock(this.x, this.y-1, this.z+1, 8);
  World.setBlock(this.x, this.y-1, this.z-1, 8);
  World.setBlock(this.x+1, this.y-1, this.z+1, 8);
  World.setBlock(this.x-1, this.y-1, this.z-1, 8);
  World.setBlock(this.x+1, this.y-1, this.z-1, 8);
  World.setBlock(this.x-1, this.y-1, this.z+1, 8);
  
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

TileEntity.registerPrototype(87, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== BlockID.basalt;
var blc2 = wgd2.id== BlockID.basalt;
var blc3 = wgd3.id== BlockID.basalt;
var blc4 = wgd4.id== BlockID.basalt;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  
  World.setBlock(this.x, this.y-1, this.z, 10);
  World.setBlock(this.x+1, this.y-1, this.z, 10);
  World.setBlock(this.x-1, this.y-1, this.z, 10);
  World.setBlock(this.x, this.y-1, this.z+1, 10);
  World.setBlock(this.x, this.y-1, this.z-1, 10);
  World.setBlock(this.x+1, this.y-1, this.z+1, 10);
  World.setBlock(this.x-1, this.y-1, this.z-1, 10);
  World.setBlock(this.x+1, this.y-1, this.z-1, 10);
  World.setBlock(this.x-1, this.y-1, this.z+1, 10);
  
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

TileEntity.registerPrototype(57, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 22;
var blc2 = wgd2.id== 22;
var blc3 = wgd3.id== 22;
var blc4 = wgd4.id== 22;
 if(blc1 && blc2 && blc3 && blc4){
 World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  
  World.setBlock(this.x, this.y-1, this.z, 0);
  World.setBlock(this.x+1, this.y-1, this.z, 0);
  World.setBlock(this.x-1, this.y-1, this.z, 0);
  World.setBlock(this.x, this.y-1, this.z+1, 0);
  World.setBlock(this.x, this.y-1, this.z-1, 0);
  World.setBlock(this.x+1, this.y-1, this.z+1, 0);
  World.setBlock(this.x-1, this.y-1, this.z-1, 0);
  World.setBlock(this.x+1, this.y-1, this.z-1, 0);
  World.setBlock(this.x-1, this.y-1, this.z+1, 0);
  
  World.setBlock(this.x, this.y-2, this.z, 0);
  World.setBlock(this.x+1, this.y-2, this.z, 0);
  World.setBlock(this.x-1, this.y-2, this.z, 0);
  World.setBlock(this.x, this.y-2, this.z+1, 0);
  World.setBlock(this.x, this.y-2, this.z-1, 0);
  World.setBlock(this.x+1, this.y-2, this.z+1, 0);
  World.setBlock(this.x-1, this.y-2, this.z-1, 0);
  World.setBlock(this.x+1, this.y-2, this.z-1, 0);
  World.setBlock(this.x-1, this.y-2, this.z+1, 0);
  
  World.setBlock(this.x, this.y-3, this.z, 0);
  World.setBlock(this.x+1, this.y-3, this.z, 0);
  World.setBlock(this.x-1, this.y-3, this.z, 0);
  World.setBlock(this.x, this.y-3, this.z+1, 0);
  World.setBlock(this.x, this.y-3, this.z-1, 0);
  World.setBlock(this.x+1, this.y-3, this.z+1, 0);
  World.setBlock(this.x-1, this.y-3, this.z-1, 0);
  World.setBlock(this.x+1, this.y-3, this.z-1, 0);
  World.setBlock(this.x-1, this.y-3, this.z+1, 0);
  
  World.setBlock(this.x, this.y-4, this.z, 0);
  World.setBlock(this.x+1, this.y-4, this.z, 0);
  World.setBlock(this.x-1, this.y-4, this.z, 0);
  World.setBlock(this.x, this.y-4, this.z+1, 0);
  World.setBlock(this.x, this.y-4, this.z-1, 0);
  World.setBlock(this.x+1, this.y-4, this.z+1, 0);
  World.setBlock(this.x-1, this.y-4, this.z-1, 0);
  World.setBlock(this.x+1, this.y-4, this.z-1, 0);
  World.setBlock(this.x-1, this.y-4, this.z+1, 0);
  
  World.setBlock(this.x, this.y-5, this.z, 0);
  World.setBlock(this.x+1, this.y-5, this.z, 0);
  World.setBlock(this.x-1, this.y-4, this.z, 0);
  World.setBlock(this.x, this.y-5, this.z+1, 0);
  World.setBlock(this.x, this.y-5, this.z-1, 0);
  World.setBlock(this.x+1, this.y-5, this.z+1, 0);
  World.setBlock(this.x-1, this.y-5, this.z-1, 0);
  World.setBlock(this.x+1, this.y-5, this.z-1, 0);
  World.setBlock(this.x-1, this.y-5, this.z+1, 0);
  
  World.setBlock(this.x, this.y-6, this.z, 0);
  World.setBlock(this.x+1, this.y-6, this.z, 0);
  World.setBlock(this.x-1, this.y-6, this.z, 0);
  World.setBlock(this.x, this.y-6, this.z+1, 0);
  World.setBlock(this.x, this.y-6, this.z-1, 0);
  World.setBlock(this.x+1, this.y-6, this.z+1, 0);
  World.setBlock(this.x-1, this.y-6, this.z-1, 0);
  World.setBlock(this.x+1, this.y-6, this.z-1, 0);
  World.setBlock(this.x-1, this.y-6, this.z+1, 0);
  
  World.setBlock(this.x, this.y-7, this.z, 0);
  World.setBlock(this.x+1, this.y-7, this.z, 0);
  World.setBlock(this.x-1, this.y-7, this.z, 0);
  World.setBlock(this.x, this.y-7, this.z+1, 0);
  World.setBlock(this.x, this.y-7, this.z-1, 0);
  World.setBlock(this.x+1, this.y-7, this.z+1, 0);
  World.setBlock(this.x-1, this.y-7, this.z-1, 0);
  World.setBlock(this.x+1, this.y-7, this.z-1, 0);
  World.setBlock(this.x-1, this.y-7, this.z+1, 0);
  
  World.setBlock(this.x, this.y-8, this.z, 0);
  World.setBlock(this.x+1, this.y-8, this.z, 0);
  World.setBlock(this.x-1, this.y-8, this.z, 0);
  World.setBlock(this.x, this.y-8, this.z+1, 0);
  World.setBlock(this.x, this.y-8, this.z-1, 0);
  World.setBlock(this.x+1, this.y-8, this.z+1, 0);
  World.setBlock(this.x-1, this.y-8, this.z-1, 0);
  World.setBlock(this.x+1, this.y-8, this.z-1, 0);
  World.setBlock(this.x-1, this.y-8, this.z+1, 0);
  
  World.setBlock(this.x, this.y-9, this.z, 0);
  World.setBlock(this.x+1, this.y-9, this.z, 0);
  World.setBlock(this.x-1, this.y-9, this.z, 0);
  World.setBlock(this.x, this.y-9, this.z+1, 0);
  World.setBlock(this.x, this.y-9, this.z-1, 0);
  World.setBlock(this.x+1, this.y-9, this.z+1, 0);
  World.setBlock(this.x-1, this.y-9, this.z-1, 0);
  World.setBlock(this.x+1, this.y-9, this.z-1, 0);
  World.setBlock(this.x-1, this.y-9, this.z+1, 0);
  
  World.setBlock(this.x, this.y-10, this.z, 0);
  World.setBlock(this.x+1, this.y-10, this.z, 0);
  World.setBlock(this.x-1, this.y-10, this.z, 0);
  World.setBlock(this.x, this.y-10, this.z+1, 0);
  World.setBlock(this.x, this.y-10, this.z-1, 0);
  World.setBlock(this.x+1, this.y-10, this.z+1, 0);
  World.setBlock(this.x-1, this.y-10, this.z-1, 0);
  World.setBlock(this.x+1, this.y-10, this.z-1, 0);
  World.setBlock(this.x-1, this.y-10, this.z+1, 0);
  
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

IDRegistry.genBlockID("waterstone");
Block.createBlock("waterstone", [{name: "Влажный камень", texture: [["waterstone", 0], ["waterstone", 0], ["waterstone", 0], ["waterstone", 0], ["waterstone", 0], ["waterstone", 0]], inCreative: true}]);

IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [{name: "Базальт", texture: [["basalt", 0], ["basalt", 0], ["basalt", 0], ["basalt", 0], ["basalt", 0], ["basalt", 0]], inCreative: true}]);

IDRegistry.genBlockID("magicwall");
Block.createBlock("magicwall", [{name: "Магическая стена", texture: [["magicwall", 0], ["magicwall", 0], ["magicwall", 0], ["magicwall", 0], ["magicwall", 0], ["magicwall", 0]], inCreative: true}]);

TileEntity.registerPrototype(1, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x,this.y+1,this.z);
var blc1 = wgd1.id== 8;
 if(blc1){
  World.setBlock(this.x, this.y+1, this.z, 0);
  World.setBlock(this.x, this.y, this.z, BlockID.waterstone);
  }
 }
});


TileEntity.registerPrototype(49, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x,this.y+1,this.z);
var blc1 = wgd1.id== 10;
 if(blc1){
  World.setBlock(this.x, this.y+1, this.z, 0);
  World.setBlock(this.x, this.y, this.z, BlockID.basalt);
  }
 }
});

TileEntity.registerPrototype(BlockID.basalt, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 87;
var blc2 = wgd2.id== 87;
var blc3 = wgd3.id== 87;
var blc4 = wgd4.id== 87;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  
  World.setBlock(this.x+4, this.y, this.z-1, 51);
  World.setBlock(this.x+4, this.y, this.z, 51);
  World.setBlock(this.x+4, this.y, this.z+1, 51);
  World.setBlock(this.x+3, this.y, this.z+2, 51);
  World.setBlock(this.x+2, this.y, this.z+3, 51);
  World.setBlock(this.x+1, this.y, this.z+4, 51);
  World.setBlock(this.x, this.y, this.z+4, 51);
  World.setBlock(this.x-1, this.y, this.z+4, 51);
  World.setBlock(this.x-2, this.y, this.z+3, 51);
  World.setBlock(this.x-3, this.y, this.z+2, 51);
  World.setBlock(this.x-4, this.y, this.z+1, 51);
  World.setBlock(this.x-4, this.y, this.z, 51);
  World.setBlock(this.x-4, this.y, this.z-1, 51);
  World.setBlock(this.x-3, this.y, this.z-2, 51);
  World.setBlock(this.x-2, this.y, this.z-3, 51);
  World.setBlock(this.x-1, this.y, this.z-4, 51);
  World.setBlock(this.x, this.y, this.z-4, 51);
  World.setBlock(this.x+1, this.y, this.z-4, 51);
  World.setBlock(this.x+2, this.y, this.z-3, 51);
  World.setBlock(this.x+3, this.y, this.z-2, 51);
  
  
  }
 }
});

IDRegistry.genItemID("Sonicexe");
Item.createItem("Sonicexe", "Призыв Водяного", {name: "Sonicexe", data: 0});

var Sonicexe = MobRegistry.registerEntity("Sonicexe");
Sonicexe.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);
 Entity.setSkin(this.entity, "mob/Sonicexe.png");
},
attackedBy: function(attacker, amount){
 
}
});

Sonicexe.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Sonicexe.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.9,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 26
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 6,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});

Item.registerUseFunction("Sonicexe", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Sonicexe", coords.x + .5, coords.y + 1, coords.z + .5);
});

///////////////////////

IDRegistry.genItemID("Tailsdoll");
Item.createItem("Tailsdoll", "Призыв Тейлс Долл", {name: "Tailsdoll", data: 0});

var Tailsdoll = MobRegistry.registerEntity("Tailsdoll");
Tailsdoll.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);
 Entity.setSkin(this.entity, "mob/Tailsdoll.png");
},
attackedBy: function(attacker, amount){
 
}
});

Tailsdoll.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
Tailsdoll.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.9,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 26
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 6,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});

Item.registerUseFunction("Tailsdoll", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Tailsdoll", coords.x + .5, coords.y + 1, coords.z + .5);
});


////////4815162342481516234248151623424815162342481516234248151623424815162342

TileEntity.registerPrototype(98, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 45;
var blc2 = wgd2.id== 45;
var blc3 = wgd3.id== 45;
var blc4 = wgd4.id== 45;
 if(blc1 && blc2 && blc3 && blc4){
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  
  World.setBlock(this.x+4, this.y, this.z-1, BlockID.magicwall);
  World.setBlock(this.x+4, this.y, this.z, BlockID.magicwall);
  World.setBlock(this.x+4, this.y, this.z+1, BlockID.magicwall);
  World.setBlock(this.x+3, this.y, this.z+2, BlockID.magicwall);
  World.setBlock(this.x+2, this.y, this.z+3, BlockID.magicwall);
  World.setBlock(this.x+1, this.y, this.z+4, BlockID.magicwall);
  World.setBlock(this.x, this.y, this.z+4, BlockID.magicwall);
  World.setBlock(this.x-1, this.y, this.z+4, BlockID.magicwall);
  World.setBlock(this.x-2, this.y, this.z+3, BlockID.magicwall);
  World.setBlock(this.x-3, this.y, this.z+2, BlockID.magicwall);
  World.setBlock(this.x-4, this.y, this.z+1, BlockID.magicwall);
  World.setBlock(this.x-4, this.y, this.z, BlockID.magicwall);
  World.setBlock(this.x-4, this.y, this.z-1, BlockID.magicwall);
  World.setBlock(this.x-3, this.y, this.z-2, BlockID.magicwall);
  World.setBlock(this.x-2, this.y, this.z-3, BlockID.magicwall);
  World.setBlock(this.x-1, this.y, this.z-4, BlockID.magicwall);
  World.setBlock(this.x, this.y, this.z-4, BlockID.magicwall);
  World.setBlock(this.x+1, this.y, this.z-4, BlockID.magicwall);
  World.setBlock(this.x+2, this.y, this.z-3, BlockID.magicwall);
  World.setBlock(this.x+3, this.y, this.z-2, BlockID.magicwall);
  
  World.setBlock(this.x+4, this.y+1, this.z-1, BlockID.magicwall);
  World.setBlock(this.x+4, this.y+1, this.z, BlockID.magicwall);
  World.setBlock(this.x+4, this.y+1, this.z+1, BlockID.magicwall);
  World.setBlock(this.x+3, this.y+1, this.z+2, BlockID.magicwall);
  World.setBlock(this.x+2, this.y+1, this.z+3, BlockID.magicwall);
  World.setBlock(this.x+1, this.y+1, this.z+4, BlockID.magicwall);
  World.setBlock(this.x, this.y+1, this.z+4, BlockID.magicwall);
  World.setBlock(this.x-1, this.y+1, this.z+4, BlockID.magicwall);
  World.setBlock(this.x-2, this.y+1, this.z+3, BlockID.magicwall);
  World.setBlock(this.x-3, this.y+1, this.z+2, BlockID.magicwall);
  World.setBlock(this.x-4, this.y+1, this.z+1, BlockID.magicwall);
  World.setBlock(this.x-4, this.y+1, this.z, BlockID.magicwall);
  World.setBlock(this.x-4, this.y+1, this.z-1, BlockID.magicwall);
  World.setBlock(this.x-3, this.y+1, this.z-2, BlockID.magicwall);
  World.setBlock(this.x-2, this.y+1, this.z-3, BlockID.magicwall);
  World.setBlock(this.x-1, this.y+1, this.z-4, BlockID.magicwall);
  World.setBlock(this.x, this.y+1, this.z-4, BlockID.magicwall);
  World.setBlock(this.x+1, this.y+1, this.z-4, BlockID.magicwall);
  World.setBlock(this.x+2, this.y+1, this.z-3, BlockID.magicwall);
  World.setBlock(this.x+3, this.y+1, this.z-2, BlockID.magicwall);
  
  
  }
 }
});

TileEntity.registerPrototype(170, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== 59;
var blc2 = wgd2.id== 59;
var blc3 = wgd3.id== 59;
var blc4 = wgd4.id== 59;
 if(blc1 && blc2 && blc3 && blc4){
  World.setWorldTime(0) 
  World.setBlock(this.x, this.y, this.z, 0);
  World.setBlock(this.x+2, this.y, this.z, 0);
  World.setBlock(this.x-2, this.y, this.z, 0);
  World.setBlock(this.x, this.y, this.z+2, 0);
  World.setBlock(this.x, this.y, this.z-2, 0);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  
  Entity.spawn(this.x, this.y, this.z, 10);
  Entity.spawn(this.x, this.y, this.z, 10);
  
  Entity.spawn(this.x, this.y, this.z, 11);
  Entity.spawn(this.x, this.y, this.z, 11);
  Entity.spawn(this.x, this.y, this.z, 11);
  
  Entity.spawn(this.x, this.y, this.z, 12);
  Entity.spawn(this.x, this.y, this.z, 12);
  
  Entity.spawn(this.x, this.y, this.z, 13);
  Entity.spawn(this.x, this.y, this.z, 13);
  Entity.spawn(this.x, this.y, this.z, 13);
  }
 }
});

TileEntity.registerPrototype(BlockID.lilithiumblock, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+2,this.y,this.z);
        var wgd2 = wgd(this.x-2,this.y,this.z);
        var wgd3 = wgd(this.x,this.y,this.z+2);
        var wgd4 = wgd(this.x,this.y,this.z-2);
var blc1 = wgd1.id== BlockID.lilithiumblock;
var blc2 = wgd2.id== BlockID.lilithiumblock;
var blc3 = wgd3.id== BlockID.lilithiumblock;
var blc4 = wgd4.id== BlockID.lilithiumblock;
 if(blc1 && blc2 && blc3 && blc4){
  World.setWorldTime(0) 
  World.setBlock(this.x, this.y, this.z, 10);
  World.setBlock(this.x+2, this.y, this.z, 1);
  World.setBlock(this.x-2, this.y, this.z, 1);
  World.setBlock(this.x, this.y, this.z+2, 1);
  World.setBlock(this.x, this.y, this.z-2, 1);
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  
  World.setBlock(this.x+2, this.y, this.z-1, 1);
  World.setBlock(this.x+2, this.y, this.z+1, 1);
  
  World.setBlock(this.x+1, this.y, this.z+2, 1);
  World.setBlock(this.x-1, this.y, this.z+2, 1);
  
  World.setBlock(this.x+1, this.y, this.z-2, 1);
  World.setBlock(this.x-1, this.y, this.z-2, 1);
  
  World.setBlock(this.x-2, this.y, this.z-1, 1);
  World.setBlock(this.x+2, this.y, this.z-1, 1);
  
  //
  
  World.setBlock(this.x+1, this.y, this.z, 1);
  World.setBlock(this.x-1, this.y, this.z, 1);
  World.setBlock(this.x, this.y, this.z-1, 1);
  World.setBlock(this.x, this.y, this.z+1, 1);
  World.setBlock(this.x+1, this.y, this.z-1, 1);
  World.setBlock(this.x-1, this.y, this.z+1, 1);
  World.setBlock(this.x+1, this.y, this.z+1, 1);
  World.setBlock(this.x-1, this.y, this.z-1, 1);
  
  //
  
  World.setBlock(this.x+1, this.y+1, this.z, 1);
  World.setBlock(this.x-1, this.y+1, this.z, 1);
  World.setBlock(this.x, this.y+1, this.z-1, 1);
  World.setBlock(this.x, this.y+1, this.z+1, 1);
  World.setBlock(this.x+1, this.y+1, this.z-1, 1);
  World.setBlock(this.x-1, this.y+1, this.z+1, 1);
  World.setBlock(this.x+1, this.y+1, this.z+1, 1);
  World.setBlock(this.x-1, this.y+1, this.z-1, 1);
  
  }
 }
});
