/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: items.js

importLib("ToolType", "*");
IDRegistry.genItemID("azurite");
Item.createItem("azurite", "Azurite", {name: "azurite"});

IDRegistry.genItemID("azuriterod");
Item.createItem("azuriterod", "Azurite rod", {name: "azurite_rod"});

Recipes.addShaped({id: ItemID.azuriterod, count: 4, data: 0}, [
    "a",
    "a",
], ['a', ItemID.azurite, 0]);

IDRegistry.genItemID("ectoplasm");
Item.createItem("ectoplasm", "Ectoplasm", {name: "ectoplasm"});

IDRegistry.genItemID("inferniumshard");
Item.createItem("inferniumshard", "Infernium shard", {name: "infernium_shard"});

IDRegistry.genItemID("nightCryst");
Item.createItem("nightCryst", "Night crystal", {name: "night_crystal"});

IDRegistry.genItemID("bloodrock");
Item.createItem("bloodrock", "Blood rock", {name: "blood_rock"});

IDRegistry.genItemID("shadowquartz");
Item.createItem("shadowquartz", "Shadow quartz", {name: "shadow_quartz"});

IDRegistry.genItemID("starcilium");
Item.createItem("starcilium", "Starcilium", {name: "starcilium"});




// file: tools.js

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




// file: armor.js

IDRegistry.genItemID("azuriteHelmet");
Item.createArmorItem("azuriteHelmet", "Azurite Helmet", {name: "azurite_helmet"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/azurite_layer_1.png"});

IDRegistry.genItemID("azuriteChestplate");
Item.createArmorItem("azuriteChestplate", "Azurite Chestplate", {name: "azurite_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/azurite_layer_1.png"});

IDRegistry.genItemID("azuriteLeggings");
Item.createArmorItem("azuriteLeggings", "Azurite Leggings", {name: "azurite_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/azurite_layer_2.png"});

IDRegistry.genItemID("azuriteBoots");
Item.createArmorItem("azuriteBoots", "Azurite Boots", {name: "azurite_boots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/azurite_layer_1.png"});

Recipes.addShaped({id: ItemID.azuriteHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.azuriteChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.azuriteLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.azuriteBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.azurite, 0]);


IDRegistry.genItemID("inferniumHelmet");
Item.createArmorItem("inferniumHelmet", "Infernium Helmet", {name: "infernium_helmet"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/infernium_layer_1.png"});

IDRegistry.genItemID("inferniumChestplate");
Item.createArmorItem("inferniumChestplate", "Infernium Chestplate", {name: "infernium_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/infernium_layer_1.png"});

IDRegistry.genItemID("inferniumLeggings");
Item.createArmorItem("inferniumLeggings", "Infernium Leggings", {name: "infernium_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/infernium_layer_2.png"});

IDRegistry.genItemID("inferniumBoots");
Item.createArmorItem("inferniumBoots", "Infernium Boots", {name: "infernium_boots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/infernium_layer_1.png"});

Recipes.addShaped({id: ItemID.inferniumHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.inferniumshard, 0]);

Recipes.addShaped({id: ItemID.inferniumChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.inferniumshard, 0]);

Recipes.addShaped({id: ItemID.inferniumLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.inferniumshard, 0]);

Recipes.addShaped({id: ItemID.inferniumBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.inferniumshard, 0]);


IDRegistry.genItemID("nightHelmet");
Item.createArmorItem("nightHelmet", "Night Helmet", {name: "night_helmet"}, {type: "helmet", armor: 3, durability: 156, texture: "armor/night_skin_1.png"});

IDRegistry.genItemID("nightChestplate");
Item.createArmorItem("nightChestplate", "Night Chestplate", {name: "night_chestplate"}, {type: "chestplate", armor: 7, durability: 238, texture: "armor/night_skin_1.png"});

IDRegistry.genItemID("nightLeggings");
Item.createArmorItem("nightLeggings", "Night Leggings", {name: "night_leggings"}, {type: "leggings", armor: 5, durability: 217, texture: "armor/night_skin_2.png"});

IDRegistry.genItemID("nightBoots");
Item.createArmorItem("nightBoots", "Night Boots", {name: "night_boots"}, {type: "boots", armor: 3, durability: 184, texture: "armor/night_skin_1.png"});

Recipes.addShaped({id: ItemID.nightHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.nightCryst, 0]);

Recipes.addShaped({id: ItemID.nightChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.nightCryst, 0]);

Recipes.addShaped({id: ItemID.nightLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.nightCryst, 0]);

Recipes.addShaped({id: ItemID.nightBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.nightCryst, 0]);

IDRegistry.genItemID("bloodHelmet");
Item.createArmorItem("bloodHelmet", "Blood Helmet", {name: "blood_helmet"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/blood_layer_1.png"});

IDRegistry.genItemID("bloodChestplate");
Item.createArmorItem("bloodChestplate", "Blood Chestplate", {name: "blood_chestplate"}, {type: "chestplate", armor: 7, durability: 216, texture: "armor/blood_layer_1.png"});

IDRegistry.genItemID("bloodLeggings");
Item.createArmorItem("bloodLeggings", "Blood Leggings", {name: "blood_leggings"}, {type: "leggings", armor: 6, durability: 203, texture: "armor/blood_layer_2.png"});

IDRegistry.genItemID("bloodBoots");
Item.createArmorItem("bloodBoots", "Blood Boots", {name: "blood_boots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/blood_layer_1.png"});

Recipes.addShaped({id: ItemID.bloodHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.bloodrock, 0]);

Recipes.addShaped({id: ItemID.bloodChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.bloodrock, 0]);

Recipes.addShaped({id: ItemID.bloodLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.bloodrock, 0]);

Recipes.addShaped({id: ItemID.bloodBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.bloodrock, 0]);



IDRegistry.genItemID("shadowHelmet");
Item.createArmorItem("shadowHelmet", "Shadow Helmet", {name: "shadow_helmet"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/shadow_layer_1.png"});

IDRegistry.genItemID("shadowChestplate");
Item.createArmorItem("shadowChestplate", "Shadow Chestplate", {name: "shadow_chestplate"}, {type: "chestplate", armor: 7, durability: 216, texture: "armor/shadow_layer_1.png"});

IDRegistry.genItemID("shadowLeggings");
Item.createArmorItem("shadowLeggings", "Shadow Leggings", {name: "shadow_leggings"}, {type: "leggings", armor: 6, durability: 203, texture: "armor/shadow_layer_2.png"});

IDRegistry.genItemID("shadowBoots");
Item.createArmorItem("shadowBoots", "Shadow Boots", {name: "shadow_boots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/shadow_layer_1.png"});

Recipes.addShaped({id: ItemID.shadowHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.shadowquartz, 0]);

Recipes.addShaped({id: ItemID.shadowChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.shadowquartz, 0]);

Recipes.addShaped({id: ItemID.shadowLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.shadowquartz, 0]);

Recipes.addShaped({id: ItemID.shadowBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.shadowquartz, 0]);



IDRegistry.genItemID("starciliumHelmet");
Item.createArmorItem("starciliumHelmet", "Starcilium Helmet", {name: "starcilium_helmet"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/starcilium_layer_1.png"});

IDRegistry.genItemID("starciliumChestplate");
Item.createArmorItem("starciliumChestplate", "Starcilium Chestplate", {name: "starcilium_chestplate"}, {type: "chestplate", armor: 7, durability: 216, texture: "armor/starcilium_layer_1.png"});

IDRegistry.genItemID("starciliumLeggings");
Item.createArmorItem("starciliumLeggings", "Starcilium Leggings", {name: "starcilium_leggings"}, {type: "leggings", armor: 6, durability: 203, texture: "armor/starcilium_layer_2.png"});

IDRegistry.genItemID("starciliumBoots");
Item.createArmorItem("starciliumBoots", "Starcilium Boots", {name: "starcilium_boots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/starcilium_layer_1.png"});

Recipes.addShaped({id: ItemID.starciliumHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.starcilium, 0]);

Recipes.addShaped({id: ItemID.starciliumChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.starcilium, 0]);

Recipes.addShaped({id: ItemID.starciliumLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.starcilium, 0]);

Recipes.addShaped({id: ItemID.starciliumBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.starcilium, 0]);

IDRegistry.genItemID("spectralHelmet");
Item.createArmorItem("spectralHelmet", "Spectral Helmet", {name: "ectoplazmhel"}, {type: "helmet", armor: 3, durability: 149, texture: "armor/ectoplazm_layer_1.png"});

IDRegistry.genItemID("spectralChestplate");
Item.createArmorItem("spectralChestplate", "Spectral Chestplate", {name: "ectplazmchest"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/ectoplazm_layer_1.png"});

IDRegistry.genItemID("spectralLeggings");
Item.createArmorItem("spectralLeggings", "Spectral Leggings", {name: "ectoplazmlegg"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/ectoplazm_layer_2.png"});

IDRegistry.genItemID("spectralBoots");
Item.createArmorItem("spectralBoots", "Spectral Boots", {name: "ectoplazmboots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/ectoplazm_layer_1.png"});

Recipes.addShaped({id: ItemID.spectralHelmet, count: 1, data: 0}, [
    "xxx",
    "z z"
], ['x', ItemID.ectoplasm, 0,'z', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.spectralChestplate, count: 1, data: 0}, [
    "x x",
    "xzx",
    "xxx"
], ['x', ItemID.ectoplasm, 0,'z', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.spectralLeggings, count: 1, data: 0}, [
    "xxx",
    "z z",
    "x x"
], ['x', ItemID.ectoplasm, 0,'z', ItemID.azurite, 0]);

Recipes.addShaped({id: ItemID.spectralBoots, count: 1, data: 0}, [
    "x x",
    "z z"
], ['x', ItemID.ectoplasm, 0,'z', ItemID.azurite, 0]);




// file: terrain.js

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

IDRegistry.genBlockID("azuriteore"); 
Block.createBlock("azuriteore", [
    {name: "Azurite ore", texture: [["azurite_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.azuriteore,2);
ToolAPI.registerBlockMaterial(BlockID.azuriteore, "stone", 3, true);

IDRegistry.genBlockID("azuriteblock"); 
Block.createBlock("azuriteblock", [
    {name: "Azurite block", texture: [["azurite_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.azuriteblock,3);
ToolAPI.registerBlockMaterial(BlockID.azuriteblock, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.azuriteblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.azurite, 0]);
});

IDRegistry.genBlockID("etheriumore"); 
Block.createBlock("etheriumore", [
    {name: "Etherium ore", texture: [["etherium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.etheriumore,2);
ToolAPI.registerBlockMaterial(BlockID.etheriumore, "stone", 3, true);

IDRegistry.genBlockID("inferniumoreb"); 
Block.createBlock("inferniumoreb", [
    {name: "Infernium ore", texture: [["infernium_ore", 1]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumoreb,3);
ToolAPI.registerBlockMaterial(BlockID.inferniumoreb, "stone", 3, true);

IDRegistry.genBlockID("inferniumore"); 
Block.createBlock("inferniumore", [
    {name: "Infernium ore", texture: [["infernium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumore,2);
ToolAPI.registerBlockMaterial(BlockID.inferniumore, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.inferniumblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.inferniumshard, 0]);
});

IDRegistry.genBlockID("inferniumblock"); 
Block.createBlock("inferniumblock", [
    {name: "Infernium block", texture: [["infernium_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.inferniumblock,3);
ToolAPI.registerBlockMaterial(BlockID.inferniumblock, "stone", 3, true);

IDRegistry.genBlockID("nightOre"); 
Block.createBlock("nightOre", [
    {name: "Night ore", texture: [["NethNightyOre", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.nightOre,3);
ToolAPI.registerBlockMaterial(BlockID.nightOre, "stone", 4, true);

IDRegistry.genBlockID("bloodrockore"); 
Block.createBlock("bloodrockore", [
    {name: "Blood ore", texture: [["bloodrock_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.bloodrockore,2);
ToolAPI.registerBlockMaterial(BlockID.bloodrockore, "stone", 3, true);

IDRegistry.genBlockID("bloodrockblock"); 
Block.createBlock("bloodrockblock", [
    {name: "Blood block", texture: [["bloodrock_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.bloodrockblock,3);
ToolAPI.registerBlockMaterial(BlockID.bloodrockblock, "stone", 3, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.bloodrockblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.bloodrock, 0]);
});

IDRegistry.genBlockID("shadowquartzore"); 
Block.createBlock("shadowquartzore", [
    {name: "Shadow quartz ore", texture: [["shadow_quartz_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowquartzore,3);
ToolAPI.registerBlockMaterial(BlockID.shadowquartzore, "stone", 4, true);

IDRegistry.genBlockID("shadowquartzblock"); 
Block.createBlock("shadowquartzblock", [
    {name: "Shadow quartz block", texture: [["shadow_quartz_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowquartzblock,3);
ToolAPI.registerBlockMaterial(BlockID.shadowquartzblock, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.shadowquartzblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.shadowquartz, 0]);
});

IDRegistry.genBlockID("starciliumore"); 
Block.createBlock("starciliumore", [
    {name: "Starcilium ore", texture: [["starcilium_ore", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.starciliumore,4);
ToolAPI.registerBlockMaterial(BlockID.starciliumore, "stone", 5, true);

IDRegistry.genBlockID("starciliumblock"); 
Block.createBlock("starciliumblock", [
    {name: "Starcilium block", texture: [["starcilium_block", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.starciliumblock,3);
ToolAPI.registerBlockMaterial(BlockID.starciliumblock, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.starciliumblock, count: 1, data: 0}, [
    "aaa",
    "aaa",
    "aaa"
], ['a', ItemID.starcilium, 0]);
});

IDRegistry.genBlockID("basalt"); 
Block.createBlock("basalt", [
    {name: "Basalt", texture: [["basalt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.basalt,6);
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 4, true);

IDRegistry.genBlockID("basaltCb"); 
Block.createBlock("basaltCb", [
    {name: "Basalt cobblestone", texture: [["basalt_cobblestone", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.basaltCb,6);
ToolAPI.registerBlockMaterial(BlockID.basaltCb, "stone", 4, true);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 36; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 230);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.azuriteore, 0, randomInt(2, 6));          
          } 
});

Block.registerDropFunction("azuriteore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.azurite, randomInt(1, 4), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 10; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 230);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.etheriumore, 0, randomInt(1, 3));          
          } 
});

Block.registerDropFunction("etheriumore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.ectoplasm, randomInt(1, 2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 10; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 8);
if(World.getBlockID(coords.x+1,coords.y,coords.z+1)==BlockID.basalt){GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.inferniumoreb, 0, randomInt(2, 6));
    }             
          } 
});

Block.registerDropFunction("inferniumoreb", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.inferniumshard, randomInt(2, 5), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 29; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 68);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.inferniumore, 0, randomInt(2, 5));            
          } 
});

Block.registerDropFunction("inferniumore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.inferniumshard, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 28; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 211);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bloodrockore, 0, randomInt(2, 5));          
          } 
});

Block.registerDropFunction("bloodrockore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.bloodrock, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 35; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 243);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.shadowquartzore, 0, randomInt(4, 9));          
          } 
});

Block.registerDropFunction("shadowquartzore", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.shadowquartz, randomInt(1, 3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 14; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 5);   if(World.getBlockID(coords.x+1,coords.y,coords.z+1)==BlockID.basalt){GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.starciliumore, 0, randomInt(2, 3));
    }        
          } 
});

Block.registerDropFunction("starciliumore", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.starcilium, randomInt(1, 2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 68; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 180);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, randomInt(5, 11));
          } 
});

Block.registerDropFunction("basalt", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[BlockID.basaltCb, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        return drop;
    }
    return [];
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 31; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 180);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nightOre, 0, randomInt(1,5));
          } 
});

Block.registerDropFunction("nightOre", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.nightCryst, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        return drop;
    }
    return [];
});




// file: structure.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeavesE(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.ebonLog){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.ebonLog){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.ebonSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}


IDRegistry.genBlockID("ebonLog");
Block.createBlock("ebonLog", [
    {name: "Ebonite Log", texture: [["ebonlog_top", 0], ["ebonlog_top", 0], ["ebonlog_side", 0], ["ebonlog_side", 0], ["ebonlog_side", 0], ["ebonlog_side", 0]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("plankEbonite");
Block.createBlock("plankEbonite", [{name: "Ebonite Planks", texture: [["ebon_planks", 0]], inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.plankEbonite, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.ebonLog, 0]);
});
        
Block.registerDropFunction("ebonLog", function(coords, blockID){
    destroyLeavesE(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.ebonLog, 2);
ToolAPI.registerBlockMaterial(BlockID.ebonLog, "wood");

IDRegistry.genBlockID("ebonLeaves");
Block.createBlock("ebonLeaves", [
    {name: "Ebonite Leaves", texture: [["ebon_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("ebonLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.ebonSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.ebonLeaves, "plant");



IDRegistry.genBlockID("ebonSapling");
Block.createBlock("ebonSapling", [{name: "Ebonite Sapling", texture: [["ebon_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.ebonSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("ebonSapling", function(){
    return [[ItemID.ebonSapling, 1, 0]];
});

IDRegistry.genItemID("ebonSapling");
Item.createItem("ebonSapling", "Ebonite Sapling", {name: "ebon_sapling", data: 1});



BlockRenderer.addRenderCallback(BlockID.ebonSapling, function(api, coords, block) {

var box = BlockID.ebonSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.ebonSapling);


ToolAPI.registerBlockMaterial(BlockID.ebonSapling, "plant");
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.ebonSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.ebonSapling,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 48; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(World.getBlockID(d.x,k-1,d.z)==88){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
EtreeGenerationHelper.generateEtree({x: d.x, y: k, z: d.z});return
}
}
}
}
}
});

var EtreeGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateEtree:function(crds, block){
        var block = {
            stik: BlockID.ebonLog,
            leaves: BlockID.ebonLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("ebonSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.ebonSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.ebonSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=88){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
 EtreeGenerationHelper.generateEtree({x: this.x, y: this.k+1, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                                   World.destroyBlock(this.x,this.y,this.z,false);
 EtreeGenerationHelper.generateEtree({x: this.x, y: this.k+1, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
        
//RED
        
function destroyLeavesH(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.hellbarkLog){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.hellbarkLog){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.hellbarkSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}


IDRegistry.genBlockID("hellbarkLog");
Block.createBlock("hellbarkLog", [
    {name: "Hellbark Log", texture: [["hellbark_log_top", 0], ["hellbark_log_top", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("plankHellbark");
Block.createBlock("plankHellbark", [
    {name: "Hellbark Planks", texture: [["hellbark_planks", 0]], inCreative: true}], "opaque");        
        
Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.plankHellbark, count: 4, data: 0}, [
    "ooa",
], ['a', BlockID.hellbarkLog, 0]);
});        
        
Block.registerDropFunction("hellbarkLog", function(coords, blockID){
    destroyLeavesH(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.hellbarkLog, 2);
ToolAPI.registerBlockMaterial(BlockID.hellbarkLog, "wood");

IDRegistry.genBlockID("hellbarkLeaves");
Block.createBlock("hellbarkLeaves", [
    {name: "Hellbark Leaves", texture: [["hellbark_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("hellbarkLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.hellbarkSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.hellbarkLeaves, "plant");



IDRegistry.genBlockID("hellbarkSapling");
Block.createBlock("hellbarkSapling", [{name: "Hellbark Sapling", texture: [["hellbark_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.hellbarkSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("hellbarkSapling", function(){
    return [[ItemID.hellbarkSapling, 1, 0]];
});

IDRegistry.genItemID("hellbarkSapling");
Item.createItem("hellbarkSapling", "Hellbark Sapling", {name: "hellbark_sapling", data: 1});

BlockRenderer.addRenderCallback(BlockID.hellbarkSapling, function(api, coords, block) {

var box = BlockID.hellbarkSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.hellbarkSapling);


ToolAPI.registerBlockMaterial(BlockID.hellbarkSapling, "plant");
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.hellbarkSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.hellbarkSapling,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 43; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(World.getBlockID(d.x,k-1,d.z)==88){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
HtreeGenerationHelper.generateHtree({x: d.x, y: k, z: d.z});return
}
}

}
}
}
});

var HtreeGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateHtree:function(crds, block){
        var block = {
            stik: BlockID.hellbarkLog,
            leaves: BlockID.hellbarkLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("hellbarkSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.hellbarkSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.hellbarkSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=88){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false); HtreeGenerationHelper.generateHtree({x: this.x, y: this.k+1, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false); HtreeGenerationHelper.generateHtree({x: this.x, y: this.k+1, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
       
//PILLAR        
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 9; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(GenerationUtils.isTransparentBlock(World.getBlockID(d.x, k, d.z))!=0){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
SpillarGenerationHelper.generateSpillar({x: d.x, y: k, z: d.z});return
}
}
}
}
}
});

var SpillarGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateSpillar:function(crds, block){
        var block = {
            brick: BlockID.carvedBr,
            tile: BlockID.carvBr,
            gbrick: BlockID.carvedsBr,
            lamp: BlockID.lampSt
        }
        if(this.random()){
            var a = [];  
            //pillar
            this.p(crds.x, crds.y, crds.z, block.tile);
            this.p(crds.x, crds.y+1, crds.z, block.gbrick);
            this.p(crds.x, crds.y+2, crds.z, block.brick);
            this.p(crds.x, crds.y+3, crds.z, block.gbrick);
            this.p(crds.x, crds.y+4, crds.z, block.brick);
            this.p(crds.x, crds.y+5, crds.z, block.lamp);          
            //pillarbottom
            this.p(crds.x, crds.y, crds.z+1, block.tile);
            this.p(crds.x, crds.y, crds.z-1, block.tile);
            this.p(crds.x+1, crds.y, crds.z, block.tile);
            this.p(crds.x-1, crds.y, crds.z, block.tile);
            //sharp
            this.p(crds.x+1, crds.y, crds.z+1, block.brick);
            this.p(crds.x+1, crds.y, crds.z-1, block.brick);
            this.p(crds.x-1, crds.y, crds.z+1, block.brick);
            this.p(crds.x-1, crds.y, crds.z-1, block.brick);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.tile);
            this.p(crds.x, crds.y+1, crds.z, block.gbrick);
            this.p(crds.x, crds.y+2, crds.z, block.brick);
            this.p(crds.x, crds.y+3, crds.z, block.gbrick);
            this.p(crds.x, crds.y+4, crds.z, block.brick);
            this.p(crds.x, crds.y+5, crds.z, block.lamp);          
            //pillarbottom(1)
            this.p(crds.x, crds.y, crds.z+1, block.tile);
            this.p(crds.x, crds.y, crds.z-1, block.tile);
            this.p(crds.x+1, crds.y, crds.z, block.tile);
            this.p(crds.x-1, crds.y, crds.z, block.tile);
            //2
            this.p(crds.x, crds.y, crds.z+2, block.brick);
            this.p(crds.x, crds.y, crds.z-2, block.brick);
            this.p(crds.x+2, crds.y, crds.z, block.brick);
            this.p(crds.x-2, crds.y, crds.z, block.brick);
            //sharp
            this.p(crds.x+1, crds.y, crds.z+1, block.brick);
            this.p(crds.x+1, crds.y, crds.z-1, block.brick);
            this.p(crds.x-1, crds.y, crds.z+1, block.brick);
            this.p(crds.x-1, crds.y, crds.z-1, block.brick);
            
            }
    }
}        




// file: decorations.js

var BLOCK_LOW_LIGHT = Block.createSpecialType({
    lightlevel: 9,
    opaque: true});

var BLOCK_LOWEST_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    opaque: true});

IDRegistry.genBlockID("basaltBr");
Block.createBlock("basaltBr", [{name: "Basalt bricks", texture:[["basalt_bricks", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.basaltBr,6);
ToolAPI.registerBlockMaterial(BlockID.basaltBr, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.basaltBr, count: 4, data: 0}, [
    "oaa",
    "oaa",
], ['a', BlockID.basalt, 0]);
Recipes.addFurnace(BlockID.basaltCb, BlockID.basalt, 0);
});

IDRegistry.genBlockID("basaltSm");
Block.createBlock("basaltSm", [{name: "Basalt smooth", texture:[["basalt_smooth", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.basaltSm,6);
ToolAPI.registerBlockMaterial(BlockID.basaltSm, "stone", 5, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.basaltSm, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.basalt, 0]);
});

IDRegistry.genBlockID("shadowbricks"); 
Block.createBlock("shadowbricks", [{name: "Shadow quartz bricks", texture:[["shadow_bricks_bottom", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.shadowbricks,3);
ToolAPI.registerBlockMaterial(BlockID.shadowbricks, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.shadowbricks, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.shadowquartzblock, 0]);
});

IDRegistry.genBlockID("splitshadowbricks"); 
Block.createBlock("splitshadowbricks", [{name: "Shadow quartz bricks", texture:[["split_shadow_bricks_top", 0], ["split_shadow_bricks_bottom", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0], ["split_shadow_bricks", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.splitshadowbricks,3);
ToolAPI.registerBlockMaterial(BlockID.splitshadowbricks, "stone", 4, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.splitshadowbricks, count: 1, data: 0}, [
    "ooa"
], ['a', BlockID.shadowbricks, 0]);
});

IDRegistry.genBlockID("carvBr");
Block.createBlock("carvBr", [{name: "Sky tile", texture:[["tile_sky", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.carvBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvBr, "stone", 4, true);

IDRegistry.genBlockID("carvedBr");
Block.createBlock("carvedBr", [{name: "Sky bricks", texture:[["bricks_sky", 0]],inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.carvedBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvedBr, "stone", 4, true);

IDRegistry.genBlockID("carvedsBr");
Block.createBlock("carvedsBr", [{name: "Carved sky bricks", texture:[["carved_bricks_sky", 0]],inCreative: false}], BLOCK_LOWEST_LIGHT);
Block.setDestroyTime(BlockID.carvedsBr,4);
ToolAPI.registerBlockMaterial(BlockID.carvedsBr, "stone", 4, true);

IDRegistry.genBlockID("lampSt");
Block.createBlock("lampSt", [{name: "Storm lamp", texture:[["storm_lamp", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setDestroyTime(BlockID.lampSt,2);
ToolAPI.registerBlockMaterial(BlockID.lampSt, "stone", 2, true);

IDRegistry.genBlockID("cen");
Block.createBlock("cen", [{name: "Candel", texture: [["candle", 0]], inCreative: false}],BLOCK_LIGHT);
Block.setBlockShape(BlockID.cen, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("cen", function(){
    return [[ItemID.cen, 1, 0]];
});

IDRegistry.genItemID("cen");
Item.createItem("cen", "Candle", {name: "candle", data: 1});

BlockRenderer.addRenderCallback(BlockID.cen, function(api, coords, block) {
var box = BlockID.cen;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);               
});
BlockRenderer.enableCustomRender(BlockID.cen);

Item.registerUseFunction("cen", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  World.setBlock(place.x, place.y, place.z, BlockID.cen);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Block.setBlockShape(BlockID.con, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("con", function(){
    return [[ItemID.con, 1, 0]];
});

IDRegistry.genItemID("chendelier");
Item.createItem("chendelier", "Chandelier", {name: "chandelier", data: 1});

IDRegistry.genBlockID("chendelier");
Block.createBlock("chendelier", [{"name":"Chendelier","texture":[["chandelier",0]],"inCreative":false}], BLOCK_LIGHT);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
model.addBox(8/16, 1/16, 0/16, 8/16, 16/16, 16/16, "chandelier", 0);
model.addBox(0/16, 1/16, 8/16, 16/16, 16/16, 8/16, "chandelier", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.chendelier, -1, render);

Block.setBlockShape(BlockID.chendelier, {"x":0.46875,"y":1,"z":0.46875}, {"x":0.53125,"y":0.03125,"z":0.53125});

Item.registerUseFunction("chendelier", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  World.setBlock(place.x, place.y, place.z, BlockID.chendelier);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});




// file: translation.js

Translation.addTranslation("Azurite", {ru: "Азурит"});
Translation.addTranslation("Azurite rod", {ru: "Азуритовый стержень"});
Translation.addTranslation("Ectoplasm", {ru: "Эктоплазма"});
Translation.addTranslation("Infernium shard", {ru: "Осколок инферниума"});
Translation.addTranslation("Blood rock", {ru: "Кровавый камень"});
Translation.addTranslation("Shadow quartz", {ru: "Теневой кварц"});
Translation.addTranslation("Starcilium", {ru: "Старцилиум"});

Translation.addTranslation("Azurite Sword", {ru: "Азуритовый меч"});
Translation.addTranslation("Azurite Shovel", {ru: "Азуритовая лопата"});
Translation.addTranslation("Azurite Pickaxe", {ru: "Азуритовая кирка"});
Translation.addTranslation("Azurite Axe", {ru: "Азуртиовый топор"});
Translation.addTranslation("Azurite Hoe", {ru: "Азуритовая мотыга"});

Translation.addTranslation("Infernium Sword", {ru: "Инферниумовый меч"});
Translation.addTranslation("Infernium Shovel", {ru: "Инферниувомая лопата"});
Translation.addTranslation("Infernium Pickaxe", {ru: "Инферниумовая кирка"});
Translation.addTranslation("Infernium Axe", {ru: "Инферниумовый топор"});
Translation.addTranslation("Infernium Hoe", {ru: "Инферниумовая мотыга"});

Translation.addTranslation("Blood Rock Sword", {ru: "Кроваво-каменный меч"});
Translation.addTranslation("Blood Rock Shovel", {ru: "Кроваво-каменная лопата"});
Translation.addTranslation("Blood Rock Pickaxe", {ru: "Кроваво-каменная кирка"});
Translation.addTranslation("Blood Rock Axe", {ru: "Кроваво-каменный топор"});
Translation.addTranslation("Blood Rock Hoe", {ru: "Кроваво-каменная мотыга"});

Translation.addTranslation("Shadowquartz Sword", {ru: "Теневой меч"});
Translation.addTranslation("Shadowquartz Shovel", {ru: "Теневая лопата"});
Translation.addTranslation("Shadowquartz Pickaxe", {ru: "Теневая кирка"});
Translation.addTranslation("Shadowquartz Axe", {ru: "Теневой топор"});
Translation.addTranslation("Shadowquartz Hoe", {ru: "Теневая мотыга"});

Translation.addTranslation("Starcilium Sword", {ru: "Старцилиумовый меч"});
Translation.addTranslation("Starcilium Shovel", {ru: "Старцилиумовая лопата"});
Translation.addTranslation("Starcilium Pickaxe", {ru: "Старцилиумовая кирка"});
Translation.addTranslation("Starcilium Axe", {ru: "Старцилиумовый топор"});
Translation.addTranslation("Starcilium Hoe", {ru: "Старцилиумовая мотыга"});

Translation.addTranslation("Starcilium Sword", {ru: "Старцилиумовый меч"});
Translation.addTranslation("Starcilium Shovel", {ru: "Старцилиумовая лопата"});
Translation.addTranslation("Starcilium Pickaxe", {ru: "Старцилиумовая кирка"});
Translation.addTranslation("Starcilium Axe", {ru: "Старцилиумовый топор"});
Translation.addTranslation("Starcilium Hoe", {ru: "Старцилиумовая мотыга"});

Translation.addTranslation("Spectral sword", {ru: "Спектральный меч"});
Translation.addTranslation("Spectral Shovel", {ru: "Спектральная лопата"});
Translation.addTranslation("Spectral Pickaxe", {ru: "Спектральная кирка"});
Translation.addTranslation("Spectral Axe", {ru: "Спектральный топор"});
Translation.addTranslation("Spectral Hoe", {ru: "Спектральная мотыга"});

//armor
Translation.addTranslation("Azurite Helmet", {ru: "Азуритовый шлем"});
Translation.addTranslation("Azurite Chestplate", {ru: "Азуритовый нагрудник"});
Translation.addTranslation("Azurite Leggings", {ru: "Азуритовые поножи"});
Translation.addTranslation("Azurite Boots", {ru: "Азуритовые ботики"});

Translation.addTranslation("Infernium Helmet", {ru: "Инферниумовый шлем"});
Translation.addTranslation("Infernium Chestplate", {ru: "Инферниумовый нагрудник"});
Translation.addTranslation("Infernium Leggings", {ru: "Инферниумовые поножи"});
Translation.addTranslation("Infernium Boots", {ru: "Инферниумовые ботики"});

Translation.addTranslation("Blood Helmet", {ru: "Кровокаменный шлем"});
Translation.addTranslation("Blood Chestplate", {ru: "Кровокаменный нагрудник"});
Translation.addTranslation("Blood Leggings", {ru: "Кровокаменные поножи"});
Translation.addTranslation("Blood Boots", {ru: "Кровокаменные ботики"});

Translation.addTranslation("Shadow Helmet", {ru: "Теневой шлем"});
Translation.addTranslation("Shadow Chestplate", {ru: "Теневой нагрудник"});
Translation.addTranslation("Shadow Leggings", {ru: "Теневые поножи"});
Translation.addTranslation("Shadow Boots", {ru: "Теневые ботики"});

Translation.addTranslation("Night Helmet", {ru: "Шлем ночи"});
Translation.addTranslation("Night Chestplate", {ru: "Нагрудник ночи"});
Translation.addTranslation("Night Leggings", {ru: "Поножи ночи"});
Translation.addTranslation("Night Boots", {ru: "Ботики ночи"});

Translation.addTranslation("Starcilium Helmet", {ru: "Старцилиумовый шлем"});
Translation.addTranslation("Starcilium Chestplate", {ru: "Старцилиумовый нагрудник"});
Translation.addTranslation("Starcilium Leggings", {ru: "Старцилиумовые поножи"});
Translation.addTranslation("Starcilium Boots", {ru: "Старцилиумовые ботики"});

Translation.addTranslation("Spectral Helmet", {ru: "Спектральный шлем"});
Translation.addTranslation("Spectral Chestplate", {ru: "Спектральный нагрудник"});
Translation.addTranslation("Spectral Leggings", {ru: "Спектральные поножи"});
Translation.addTranslation("Spectral Boots", {ru: "Спектральные ботики"});


Translation.addTranslation("Basalt bricks", {ru: "Базальтовые кирпичи"});
Translation.addTranslation("Basalt smooth", {ru: "Полированый базальт"});
Translation.addTranslation("Shadow quartz bricks", {ru: "Теневые кирпичи"});
Translation.addTranslation("Sky tile", {ru: "Нбесная плита"});
Translation.addTranslation("Sky bricks", {ru: "Небесные кирпичи"});
Translation.addTranslation("Carved sky bricks", {ru: "Небесные руны"});
Translation.addTranslation("Storm lamp", {ru: "Штормовая лампа"});
Translation.addTranslation("Candel", {ru: "Свеча"});
Translation.addTranslation("Chandelier", {ru: "Канделябр"});

Translation.addTranslation("Azurite ore", {ru: "Азуритовая руда"});
Translation.addTranslation("Azurite block", {ru: "Азуритовые блок"});
Translation.addTranslation("Etherium ore", {ru: "Спектральный песок"});
Translation.addTranslation("Infernium ore", {ru: "Инферниумовая руда"});
Translation.addTranslation("Infernium block", {ru: "Инферниумовый блок"});
Translation.addTranslation("Blood ore", {ru: "Кровокаменная руда"});
Translation.addTranslation("Blood block", {ru: "Кровокаменный блок"});
Translation.addTranslation("Shadow quartz ore", {ru: "Теневая руда"});
Translation.addTranslation("Shadow quartz block", {ru: "Теневой блок"});
Translation.addTranslation("Starcilium ore", {ru: "Старцилиумовая руда"});
Translation.addTranslation("Starcilium block", {ru: "Старцилеумовый блок"});
Translation.addTranslation("Basalt", {ru: "Бзазальт"});
Translation.addTranslation("Basalt cobblestone", {ru: "Базальтовый буыжник"});

Translation.addTranslation("Ebonite Log", {ru: "Эбонитовое бревно"});
Translation.addTranslation("Ebonite Planks", {ru: "Эбонитовые доски"});
Translation.addTranslation("Ebonite Leaves", {ru: "Эбонитовые листья"});
Translation.addTranslation("Ebonite Sapling", {ru: "Эбонитовый саженец"});

Translation.addTranslation("Hellbark Log", {ru: "Адское бревно"});
Translation.addTranslation("Hellbark Planks", {ru: "Адские доски"});
Translation.addTranslation("Hellbark Leaves", {ru: "Адские листья"});
Translation.addTranslation("Hellbark Sapling", {ru: "Адский саженец"});

Translation.addTranslation("Determination sword", {ru: "Разрушиьельный меч"});
Translation.addTranslation("Determination Pickaxe", {ru: "Разрушительная кирка"});

Translation.addTranslation("Swordof night", {ru: "Меч ночи"});
Translation.addTranslation("Shovel of night", {ru: "Лопата ночи"});
Translation.addTranslation("Pickaxe of night", {ru: "Кирка ночи"});
Translation.addTranslation("Axe of night", {ru: "Топор ночи"});
Translation.addTranslation("Hoe of night", {ru: "Мотыга ночи"});

Translation.addTranslation("Night ore", {ru: "Руда ночи"});




