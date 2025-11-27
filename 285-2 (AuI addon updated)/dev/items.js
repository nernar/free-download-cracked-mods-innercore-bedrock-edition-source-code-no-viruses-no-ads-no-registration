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