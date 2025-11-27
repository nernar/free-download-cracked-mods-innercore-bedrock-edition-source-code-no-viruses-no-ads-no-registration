IDRegistry.genItemID("azuriteSword");
Item.createItem("azuriteSword", "Azurite Sword", {name: "azurite_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("azuriteShovel");
Item.createItem("azuriteShovel", "Azurite Shovel", {name: "azurite_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("azuritePickaxe");
Item.createItem("azuritePickaxe", "Azurite Pickaxe", {name: "azurite_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("azuriteAxe");
Item.createItem("azuriteAxe", "Azurite Axe", {name: "azurite_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("azuriteHoe");
Item.createItem("azuriteHoe", "Azurite Hoe", {name: "azurite_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("azuritesw", {durability: 912, level: 3, efficiency: 3, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("azuritesh", {durability: 856, level: 3, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("azuritepi", {durability: 864, level: 3, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("azuriteaxe", {durability: 862, level: 3, efficiency: 4, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("azuritehoe", {durability: 857, level: 3, efficiency: 4, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.azuriteSword, "azuritesw", ToolType.sword);
Item.setToolRender(ItemID.azuriteSword, true);

ToolAPI.setTool(ItemID.azuriteShovel, "azuritesh", ToolType.shovel);
Item.setToolRender(ItemID.azuriteShovel, true);

ToolAPI.setTool(ItemID.azuritePickaxe, "azuritepi", ToolType.pickaxe);
Item.setToolRender(ItemID.azuritePickaxe, true);

ToolAPI.setTool(ItemID.azuriteAxe, "azuriteaxe", ToolType.axe);
Item.setToolRender(ItemID.azuriteAxe, true);

ToolAPI.setTool(ItemID.azuriteHoe, "azuritehoe", ToolType.hoe);
Item.setToolRender(ItemID.azuriteHoe, true);

Recipes.addShaped({id: ItemID.azuriteSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.azurite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.azuriteShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.azurite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.azuritePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.azurite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.azuriteAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.azurite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.azuriteHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.azurite, 0, 'b', 280, 0]);


IDRegistry.genItemID("inferniumSword");
Item.createItem("inferniumSword", "Infernium Sword", {name: "infernium_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("inferniumShovel");
Item.createItem("inferniumShovel", "Infernium Shovel", {name: "infernium_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("inferniumPickaxe");
Item.createItem("inferniumPickaxe", "Infernium Pickaxe", {name: "infernium_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("inferniumAxe");
Item.createItem("inferniumAxe", "Infernium Axe", {name: "infernium_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("inferniumHoe");
Item.createItem("inferniumHoe", "Infernium Hoe", {name: "infernium_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("inferniumsw", {durability: 1634, level: 3, efficiency: 3, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("inferniumsh", {durability: 1581, level: 3, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("inferniumpi", {durability: 1558, level: 3, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("inferniumaxe", {durability: 1549, level: 3, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("inferniumhoe", {durability: 1540, level: 3, efficiency: 5, damage: 2, enchantability: 14});


ToolAPI.setTool(ItemID.inferniumSword, "inferniumsw", ToolType.sword);
Item.setToolRender(ItemID.inferniumSword, true);

ToolAPI.setTool(ItemID.inferniumShovel, "inferniumsh", ToolType.shovel);
Item.setToolRender(ItemID.inferniumShovel, true);

ToolAPI.setTool(ItemID.inferniumPickaxe, "inferniumpi", ToolType.pickaxe);
Item.setToolRender(ItemID.inferniumPickaxe, true);

ToolAPI.setTool(ItemID.inferniumAxe, "inferniumaxe", ToolType.axe);
Item.setToolRender(ItemID.inferniumAxe, true);

ToolAPI.setTool(ItemID.inferniumHoe, "inferniumhoe", ToolType.hoe);
Item.setToolRender(ItemID.inferniumHoe, true);

Recipes.addShaped({id: ItemID.inferniumSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.inferniumshard, 0, 'b', 377, 0]);

Recipes.addShaped({id: ItemID.inferniumShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.inferniumshard, 0, 'b', 377, 0]);

Recipes.addShaped({id: ItemID.inferniumPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.inferniumshard, 0, 'b', 377, 0]);

Recipes.addShaped({id: ItemID.inferniumAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.inferniumshard, 0, 'b', 377, 0]);

Recipes.addShaped({id: ItemID.inferniumHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.inferniumshard, 0, 'b', 377, 0]);
//night
IDRegistry.genItemID("nightSword");
Item.createItem("nightSword", "Sword of night", {name: "night_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("nightShovel");
Item.createItem("nightShovel", "Shovel of night", {name: "night_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("nightPickaxe");
Item.createItem("nightPickaxe", "Pickaxe of night", {name: "night_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("nightAxe");
Item.createItem("nightAxe", "Axe of night", {name: "night_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("nightHoe");
Item.createItem("nightHoe", "Hoe of night", {name: "night_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("nightsw", {durability: 1648, level: 3, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("nightsh", {durability: 1604, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nightpi", {durability: 1602, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("nightaxe", {durability: 1600, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("nighthoe", {durability: 1592, level: 3, efficiency: 6, damage: 2, enchantability: 14});


ToolAPI.setTool(ItemID.nightSword, "nightsw", ToolType.sword);
Item.setToolRender(ItemID.nightSword, true);

ToolAPI.setTool(ItemID.nightShovel, "nightsh", ToolType.shovel);
Item.setToolRender(ItemID.nightShovel, true);

ToolAPI.setTool(ItemID.nightPickaxe, "nightpi", ToolType.pickaxe);
Item.setToolRender(ItemID.nightPickaxe, true);

ToolAPI.setTool(ItemID.nightAxe, "nightaxe", ToolType.axe);
Item.setToolRender(ItemID.nightAxe, true);

ToolAPI.setTool(ItemID.nightHoe, "nighthoe", ToolType.hoe);
Item.setToolRender(ItemID.nightHoe, true);

Recipes.addShaped({id: ItemID.nightSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.nightCryst, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nightShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.nightCryst, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nightPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.nightCryst, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nightAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.nightCryst, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.nightHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.nightCryst, 0, 'b', 280, 0]);
//blood
IDRegistry.genItemID("bloodrockSword");
Item.createItem("bloodrockSword", "Blood Rock Sword", {name: "blood_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("bloodrockShovel");
Item.createItem("bloodrockShovel", "Blood Rock Shovel", {name: "blood_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("bloodrockPickaxe");
Item.createItem("bloodrockPickaxe", "Blood Rock Pickaxe", {name: "blood_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("bloodrockAxe");
Item.createItem("bloodrockAxe", "Blood Rock Axe", {name: "blood_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("bloodrockHoe");
Item.createItem("bloodrockHoe", "Blood Rock Hoe", {name: "blood_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bloodrocksw", {durability: 1674, level: 4, efficiency: 4, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("bloodrocksh", {durability: 1681, level: 4, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("bloodrockpi", {durability: 1658, level: 4, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("bloodrockaxe", {durability: 1649, level: 4, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("bloodrockhoe", {durability: 1640, level: 3, efficiency: 5, damage: 2, enchantability: 14});


ToolAPI.setTool(ItemID.bloodrockSword, "bloodrocksw", ToolType.sword);
Item.setToolRender(ItemID.bloodrockSword, true);

ToolAPI.setTool(ItemID.bloodrockShovel, "bloodrocksh", ToolType.shovel);
Item.setToolRender(ItemID.bloodrockShovel, true);

ToolAPI.setTool(ItemID.bloodrockPickaxe, "bloodrockpi", ToolType.pickaxe);
Item.setToolRender(ItemID.bloodrockPickaxe, true);

ToolAPI.setTool(ItemID.bloodrockAxe, "bloodrockaxe", ToolType.axe);
Item.setToolRender(ItemID.bloodrockAxe, true);

ToolAPI.setTool(ItemID.bloodrockHoe, "bloodrockhoe", ToolType.hoe);
Item.setToolRender(ItemID.bloodrockHoe, true);

Recipes.addShaped({id: ItemID.bloodrockSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.bloodrock, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.bloodrockShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.bloodrock, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.bloodrockPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.bloodrock, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.bloodrockAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.bloodrock, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.bloodrockHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.bloodrock, 0, 'b', 280, 0]);

//shadowquwartz
IDRegistry.genItemID("shadowquartzSword");
Item.createItem("shadowquartzSword", "Shadowquartz Sword", {name: "shadow_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("shadowquartzShovel");
Item.createItem("shadowquartzShovel", "Shadowquartz Shovel", {name: "shadow_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("shadowquartzPickaxe");
Item.createItem("shadowquartzPickaxe", "Shadowquartz Pickaxe", {name: "shadow_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("shadowquartzAxe");
Item.createItem("shadowquartzAxe", "Shadowquartz Axe", {name: "shadow_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("shadowquartzHoe");
Item.createItem("shadowquartzHoe", "Shadowquartz Hoe", {name: "shadow_hoe", meta: 0}, {stack: 1});


ToolAPI.addToolMaterial("shadowsw", {durability: 1778, level: 4, efficiency: 3, damage: 5, enchantability: 14});
ToolAPI.addToolMaterial("shadowsh", {durability: 1781, level: 4, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("shadowpi", {durability: 1760, level: 4, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("shadowaxe", {durability: 1749, level: 4, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("shadowhoe", {durability: 1740, level: 3, efficiency: 5, damage: 2, enchantability: 14});


ToolAPI.setTool(ItemID.shadowquartzSword, "shadowsw", ToolType.sword);
Item.setToolRender(ItemID.shadowquartzSword, true);

ToolAPI.setTool(ItemID.shadowquartzShovel, "shadowsh", ToolType.shovel);
Item.setToolRender(ItemID.shadowquartzShovel, true);

ToolAPI.setTool(ItemID.shadowquartzPickaxe, "shadowpi", ToolType.pickaxe);
Item.setToolRender(ItemID.shadowquartzPickaxe, true);

ToolAPI.setTool(ItemID.shadowquartzAxe, "shadowaxe", ToolType.axe);
Item.setToolRender(ItemID.shadowquartzAxe, true);

ToolAPI.setTool(ItemID.shadowquartzHoe, "shadowhoe", ToolType.hoe);
Item.setToolRender(ItemID.shadowquartzHoe, true);


Recipes.addShaped({id: ItemID.shadowquartzSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.shadowquartz, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.shadowquartzShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.shadowquartz, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.shadowquartzPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.shadowquartz, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.shadowquartzAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.shadowquartz, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.shadowquartzHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.shadowquartz, 0, 'b', 280, 0]);


//starcilium
IDRegistry.genItemID("starciliumSword");
Item.createItem("starciliumSword", "Starcilium Sword", {name: "starcilium_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("starciliumShovel");
Item.createItem("starciliumShovel", "Starcilium Shovel", {name: "starcilium_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("starciliumPickaxe");
Item.createItem("starciliumPickaxe", "Starcilium Pickaxe", {name: "starcilium_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("starciliumAxe");
Item.createItem("starciliumAxe", "Starcilium Axe", {name: "starcilium_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("starciliumHoe");
Item.createItem("starciliumHoe", "Starcilium Hoe", {name: "starcilium_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("starciliumsw", {durability: 1878, level: 5, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("starciliumsh", {durability: 1881, level: 5, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("starciliumpi", {durability: 1860, level: 5, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("starciliumaxe", {durability: 1849, level: 5, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("starciliumhoe", {durability: 1840, level: 3, efficiency: 5, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.starciliumSword, "starciliumsw", ToolType.sword);
Item.setToolRender(ItemID.starciliumSword, true);

ToolAPI.setTool(ItemID.starciliumShovel, "starciliumsh", ToolType.shovel);
Item.setToolRender(ItemID.starciliumShovel, true);

ToolAPI.setTool(ItemID.starciliumPickaxe, "starciliumpi", ToolType.pickaxe);
Item.setToolRender(ItemID.starciliumPickaxe, true);

ToolAPI.setTool(ItemID.starciliumAxe, "starciliumaxe", ToolType.axe);
Item.setToolRender(ItemID.starciliumAxe, true);

ToolAPI.setTool(ItemID.starciliumHoe, "starciliumhoe", ToolType.hoe);
Item.setToolRender(ItemID.starciliumHoe, true);


Recipes.addShaped({id: ItemID.starciliumSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.starcilium, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.starciliumShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.starcilium, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.starciliumPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.starcilium, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.starciliumAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.starcilium, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.starciliumHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.starcilium, 0, 'b', 280, 0]);


IDRegistry.genItemID("spectralSword");
Item.createItem("spectralSword", "Spectral sword", {name: "spectral_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("spectralShovel");
Item.createItem("spectralShovel", "Spectral Shovel", {name: "ectoplazm_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("spectralPickaxe");
Item.createItem("spectralPickaxe", "Spectral Pickaxe", {name: "ectoplazm_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("spectralAxe");
Item.createItem("spectralAxe", "Spectral Axe", {name: "ectoplazm_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("spectralHoe");
Item.createItem("spectralHoe", "Spectral Hoe", {name: "ectoplazm_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("spectralsw", {durability: 2255, level: 6, efficiency: 6, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("spectralsh", {durability: 2218, level: 6, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("spectralpi", {durability: 2244, level: 6, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("spectralaxe", {durability: 2233, level: 6, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("spectralhoe", {durability: 2222, level: 6, efficiency: 5, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.spectralSword, "spectralsw", ToolType.sword);
Item.setToolRender(ItemID.spectralSword, true);

ToolAPI.setTool(ItemID.spectralShovel, "spectralsh", ToolType.shovel);
Item.setToolRender(ItemID.spectralShovel, true);

ToolAPI.setTool(ItemID.spectralPickaxe, "spectralpi", ToolType.pickaxe);
Item.setToolRender(ItemID.spectralPickaxe, true);

ToolAPI.setTool(ItemID.spectralAxe, "spectralaxe", ToolType.axe);
Item.setToolRender(ItemID.spectralAxe, true);

ToolAPI.setTool(ItemID.spectralHoe, "spectralhoe", ToolType.hoe);
Item.setToolRender(ItemID.spectralHoe, true);


Recipes.addShaped({id: ItemID.spectralSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ectoplasm, 0, 'b', ItemID.azuriterod, 0]);

Recipes.addShaped({id: ItemID.spectralShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ectoplasm, 0, 'b', ItemID.azuriterod, 0]);

Recipes.addShaped({id: ItemID.spectralPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ectoplasm, 0, 'b', ItemID.azuriterod, 0]);

Recipes.addShaped({id: ItemID.spectralAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ectoplasm, 0, 'b', ItemID.azuriterod, 0]);

Recipes.addShaped({id: ItemID.spectralHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ectoplasm, 0, 'b', ItemID.azuriterod, 0]);
//determination
IDRegistry.genItemID("determSword");
Item.createItem("determSword", "Determination sword", {name: "determiation_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("determPickaxe");
Item.createItem("determPickaxe", "Determination Pickaxe", {name: "determination_pickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("determsw", {durability: 10000, level: 6, efficiency: 7, damage: 12, enchantability: 15});

ToolAPI.addToolMaterial("determpi", {durability: 10000, level: 6, efficiency: 7, damage: 4, enchantability: 15});

ToolAPI.setTool(ItemID.determSword, "determsw", ToolType.sword);
Item.setToolRender(ItemID.determSword, true);

ToolAPI.setTool(ItemID.determPickaxe, "determpi", ToolType.pickaxe);
Item.setToolRender(ItemID.determPickaxe, true);

Recipes.addShaped({id: ItemID.determSword, count: 1, data: 0}, [
    "c",
    "b",
    "a"
], ['c', ItemID.ectoplasm, 0, 'b', ItemID.spectralSword, 0, 'a', ItemID.nightSword, 0]);

Recipes.addShaped({id: ItemID.determSword, count: 1, data: 0}, [
    "c",
    "b",
    "a"
], ['c', ItemID.ectoplasm, 0, 'b', ItemID.spectralPickaxe, 0, 'a', ItemID.nightPickaxe, 0]);