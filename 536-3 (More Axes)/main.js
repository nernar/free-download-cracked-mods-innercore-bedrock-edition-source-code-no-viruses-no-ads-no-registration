IMPORT("ToolType");

ToolAPI.addToolMaterial("sandstonex", {     durability: 100, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("sandstonex");
Item.createItem("sandstonex", "sandstonex", {name: "sandstonex", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["sandstonex"], "sandstonex", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("sandstonex", {ru: "Топор из песка"});

Recipes.addShaped({id: ItemID.sandstonex, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 12, 0, 'b', 280, 0]);

ToolAPI.addToolMaterial("breadax", {     durability: 100, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("breadax");
Item.createItem("breadax", "breadax", {name: "breadax", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["breadax"], "breadax", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("breadax", {ru: "Топор из хлеба"});

Recipes.addShaped({id: ItemID.breadax, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 297, 0, 'b', 280, 0]);

ToolAPI.addToolMaterial("enderaxe", {     durability: 1000, level: 1, efficiency: 3,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("enderaxe");
Item.createItem("enderaxe", "enderaxe", {name: "enderaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["enderaxe"], "enderaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("enderaxe", {ru: "Топор из Эндер Жемчуга"});

Recipes.addShaped({id: ItemID.enderaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 368, 0, 'b', 280, 0]);

ToolAPI.addToolMaterial("emeraldaxe", {     durability: 3000, level: 1, efficiency: 7,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("emeraldaxe");
Item.createItem("emeraldaxe", "emeraldaxe", {name: "emeraldaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["emeraldaxe"], "emeraldaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("emeraldaxe", {ru: "Топор из Изумрудов"});

Recipes.addShaped({id: ItemID.emeraldaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 388, 0, 'b', 280, 0]);

ToolAPI.addToolMaterial("neteheraxe", {     durability: 1000, level: 1, efficiency: 4,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("neteheraxe");
Item.createItem("neteheraxe", "neteheraxe", {name: "neteheraxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["neteheraxe"], "neteheraxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("neteheraxe", {ru: "Топор из Адского Камня"});

Recipes.addShaped({id: ItemID.neteheraxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 87, 0, 'b', 280, 0]);



ToolAPI.addToolMaterial("grassaxe", {     durability: 25, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("grassaxe");
Item.createItem("grassaxe", "grassaxe", {name: "grassaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["grassaxe"], "grassaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("grassaxe", {ru: "Топор из Земли"});

Recipes.addShaped({id: ItemID.grassaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 3, 0, 'b', 280, 0]);



ToolAPI.addToolMaterial("woodax", {     durability: 300, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("woodax");
Item.createItem("woodax", "woodax", {name: "woodax", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["woodax"], "woodax", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("woodax", {ru: "Топор из Древесины"});

Recipes.addShaped({id: ItemID.woodax, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 17, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.woodax, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 17, 1, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.woodax, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 17, 2, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.woodax, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 17, 3, 'b', 280, 0]);



ToolAPI.addToolMaterial("redstoneaxe", {     durability: 1000, level: 1, efficiency: 5,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("redstoneaxe");
Item.createItem("redstoneaxe", "redstoneaxe", {name: "redstoneaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["redstoneaxe"], "redstoneaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("redstoneaxe", {ru: "Топор из Красного Камня"});

Recipes.addShaped({id: ItemID.redstoneaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 331, 0, 'b', 280, 0]);





ToolAPI.addToolMaterial("sandpesch", {     durability: 1000, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("sandpesch");
Item.createItem("sandpesch", "sandpesch", {name: "sandpesch", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["sandpesch"], "sandpesch", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("sandpesch", {ru: "Топор из Гладкого Песчанника"});

Recipes.addShaped({id: ItemID.sandpesch, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 24, 2, 'b', 280, 0]);






ToolAPI.addToolMaterial("ygolaxe", {     durability: 1000, level: 1, efficiency: 3,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("ygolaxe");
Item.createItem("ygolaxe", "ygolaxe", {name: "ygolaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["ygolaxe"], "ygolaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("ygolaxe", {ru: "Топор из Угля"});

Recipes.addShaped({id: ItemID.ygolaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 263, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ygolaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 263, 1, 'b', 280, 0]);








ToolAPI.addToolMaterial("potatoaxe", {     durability: 500, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("potatoaxe");
Item.createItem("potatoaxe", "potatoaxe", {name: "potatoaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["potatoaxe"], "potatoaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("potatoaxe", {ru: "Топор из Картошки"});

Recipes.addShaped({id: ItemID.potatoaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 392, 0, 'b', 280, 0]);







ToolAPI.addToolMaterial("gravelaxe", {     durability: 100, level: 1, efficiency: 2,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("gravelaxe");
Item.createItem("gravelaxe", "gravelaxe", {name: "gravelaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["gravelaxe"], "gravelaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("gravelaxe", {ru: "Топор из Гравия"});

Recipes.addShaped({id: ItemID.gravelaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 13, 0, 'b', 280, 0]);







ToolAPI.addToolMaterial("sandsoulaxe", {     durability: 800, level: 1, efficiency: 4,    damage: 2, enchantability: 100 });
IDRegistry.genItemID("sandsoulaxe");
Item.createItem("sandsoulaxe", "sandsoulaxe", {name: "sandsoulaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["sandsoulaxe"], "sandsoulaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("sandsoulaxe", {ru: "Топор из Песка Душ"});

Recipes.addShaped({id: ItemID.sandsoulaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 88, 0, 'b', 280, 0]);






ToolAPI.addToolMaterial("glaasaxe", {     durability: 10, level: 1, efficiency: 10,    damage: 10, enchantability: 100 });
IDRegistry.genItemID("glaasaxe");
Item.createItem("glaasaxe", "glaasaxe", {name: "glaasaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["glaasaxe"], "glaasaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("glaasaxe", {ru: "Топор из Стекла"});

Recipes.addShaped({id: ItemID.glaasaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 20, 0, 'b', 280, 0]);






ToolAPI.addToolMaterial("glowstoneaxe", {     durability: 2000, level: 1, efficiency: 4,    damage: 5, enchantability: 100 });
IDRegistry.genItemID("glowstoneaxe");
Item.createItem("glowstoneaxe", "glowstoneaxe", {name: "glowstoneaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["glowstoneaxe"], "glowstoneaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("glowstoneaxe", {ru: "Топор из Светокамня"});

Recipes.addShaped({id: ItemID.glowstoneaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 89, 0, 'b', 280, 0]);






ToolAPI.addToolMaterial("leavaxe", {     durability: 30, level: 1, efficiency: 3,    damage: 6, enchantability: 100 });
IDRegistry.genItemID("leavaxe");
Item.createItem("leavaxe", "leavaxe", {name: "leavaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["leavaxe"], "leavaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("leavaxe", {ru: "Топор из Листвы"});

Recipes.addShaped({id: ItemID.leavaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 18, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.leavaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 18, 1, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.leavaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 18, 2, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.leavaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 18, 3, 'b', 280, 0]);






ToolAPI.addToolMaterial("upgd", {     durability: 800, level: 1, efficiency: 3,    damage: 6, enchantability: 100 });
IDRegistry.genItemID("upgd");
Item.createItem("upgd", "upgd", {name: "upgd", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["upgd"], "upgd", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("upgd", {ru: "Топор из Листвы с Алмазной рукояткой"});

Recipes.addShaped({id: ItemID.upgd, count: 1, data: 0}, [
 " a ",
 " b ",
 " b "
], ['a', ItemID.leavaxe, 0, 'b', 264, 0]);






ToolAPI.addToolMaterial("upg", {     durability: 200, level: 1, efficiency: 4,    damage: 5, enchantability: 100 });
IDRegistry.genItemID("upg");
Item.createItem("upg", "upg", {name: "upg", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["upg"], "upg", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("upg", {ru: "Топор из Листвы с Железной Рукояткой"});

Recipes.addShaped({id: ItemID.upg, count: 1, data: 0}, [
 " a",
 " b",
 " b "
], ['a', ItemID.leavaxe, 0, 'b', 265, 0]);





IDRegistry.genItemID("lapisingot");
Item.createItem("lapisingot", "lapisingot", {name: "lapisingot", meta: 0}, {stack: 64});

Translation.addTranslation("lapisingot", {ru: "Лазуритовый слиток"});


Recipes.addFurnace(351, 4, ItemID.lapisingot, 0);







ToolAPI.addToolMaterial("lapisaxe", {     durability: 2000, level: 1, efficiency: 5,    damage: 5, enchantability: 100 });
IDRegistry.genItemID("lapisaxe");
Item.createItem("lapisaxe", "lapisaxe", {name: "lapisaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["lapisaxe"], "lapisaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("lapisaxe", {ru: "Топор из Лазуритовых слитков"});

Recipes.addShaped({id: ItemID.lapisaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', ItemID.lapisingot, 0, 'b', 280, 0]);






ToolAPI.addToolMaterial("obsaxe", {     durability: 3000, level: 1, efficiency: 4,    damage: 5, enchantability: 100 });
IDRegistry.genItemID("obsaxe");
Item.createItem("obsaxe", "obsaxe", {name: "obsaxe", meta: 0}, {stack: 1});
 ToolAPI.setTool(ItemID["obsaxe"], "obsaxe", ToolType.axe); //чтобы сделать кирку, пропишите вместо axe pickaxe, для мотыги hoe и так далее

Translation.addTranslation("obsaxe", {ru: "Топор из Обсидиана"});

Recipes.addShaped({id: ItemID.obsaxe, count: 1, data: 0}, [
 " aa",
 " ba",
 " b "
], ['a', 49, 0, 'b', 280, 0]);






Item.addCreativeGroup("axes", Translation.translate("Axes"), [
	ItemID.emeraldaxe,
	ItemID.breadax,
	ItemID.sandstonex,
 ItemID.glaasaxe,
 ItemID.enderaxe,
 ItemID.glowstoneaxe,
 ItemID.gravelaxe,
 ItemID.grassaxe,
 ItemID.lapisaxe,
 ItemID.leavaxe,
 ItemID.neteheraxe,
 ItemID.obsaxe,
 ItemID.redstoneaxe,
 ItemID.potatoaxe,
 ItemID.sandsoulaxe,
 ItemID.sandpesch,
 ItemID.ygolaxe,
 ItemID.upgd,
 ItemID.upg,
 ItemID.woodax
]);