IDRegistry.genItemID("AncientDust");
Item.createItem("AncientDust", "Ancient Dust", {name: "ancientdust"});

IDRegistry.genItemID("frostspineRod");
Item.createItem("frostspineRod", "Spince Stem", {name: "frostspinerod"});

IDRegistry.genItemID("NeciceSh");
Item.createItem("NeciceSh", "Necice Shard", {name: "neiceshard"});

IDRegistry.genItemID("PolusSh");
Item.createItem("PolusSh", "Polus Shard", {name: "magishard"});

IDRegistry.genItemID("coldiciteSh");
Item.createItem("coldiciteSh", "Coldicite Shard", {name: "coldiciteshard"});

IDRegistry.genItemID("coldiciteSh");
Item.createItem("coldiciteSh", "Coldicite Shard", {name: "coldiciteshard"});

IDRegistry.genItemID("manuartzGw");
Item.createItem("manuartzGw", "Manuartz Growth", {name: "manuartzitem"});

IDRegistry.genItemID("manuartzSh");
Item.createItem("manuartzSh", "Manuartz Shard", {name: "manuartzshard"});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.manuartzSh, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzGw, 0]);

Recipes.addShaped({id: ItemID.manuartzGw, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesS, 0]);

Recipes.addShaped({id: ItemID.manuartzSh, count: 1, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesM, 0]);

Recipes.addShaped({id: ItemID.manuartzSh, count: 5, data: 0}, [
    "ooa",
    "oao"
], ['a', ItemID.manuartzSpikesB, 0]);

});

IDRegistry.genItemID("southiveSc");
Item.createItem("southiveSc", "Southive Scrap", {name: "southivescrap"});

IDRegistry.genItemID("northositLp");
Item.createItem("northositLp", "Northosit Lump", {name: "northositlump"});

IDRegistry.genItemID("magnemiveIngot");
Item.createItem("magnemiveIngot", "Magnemive Ingot", {name: "magnemiveingot"});

Recipes.addShaped({id: ItemID.magnemiveIngot, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.southiveSc, 0, 'b', ItemID.northositLp, 0]);

IDRegistry.genItemID("northositLp");
Item.createItem("northositLp", "Northosit Lump", {name: "northositlump"});

IDRegistry.genItemID("fluroomiteIngot");
Item.createItem("fluroomiteIngot", "Fluroomite Ingot", {name: "fluroomiteingot"});

Callback.addCallback("PostLoaded", function(){
Recipes.addFurnace(BlockID.oreFluroomiteAutumn, 0, ItemID.fluroomiteIngot, 0);
});


IDRegistry.genItemID("mantrLeather");
Item.createItem("mantrLeather", "Mantr Leather", {name: "mantrleather"});

IDRegistry.genItemID("fruskGel");
Item.createItem("fruskGel", "Frusk Gel", {name: "fruskgel"});

IDRegistry.genItemID("faithEye");
Item.createItem("faithEye", "Faith Eye", {name: "fraitheye"});


IDRegistry.genItemID("ironkey");
Item.createItem("ironkey", "Iron Key", {name: "ironkey"});

Recipes.addShaped({id: ItemID.ironkey, count: 1, data: 0}, [
    "a",
    "a"
], ['a', 265, 0]);

IDRegistry.genItemID("goldenkey");
Item.createItem("goldenkey", "Golden Key", {name: "goldenkey"});

Recipes.addShaped({id: ItemID.goldenkey, count: 1, data: 0}, [
    "a",
    "a"
], ['a', 266, 0]);

IDRegistry.genItemID("magnemivekey");
Item.createItem("magnemivekey", "Magnemive Key", {name: "magnemivekey"});

Recipes.addShaped({id: ItemID.magnemivekey, count: 1, data: 0}, [
    "a",
    "b"
], ['a', ItemID.PolusSh, 0, 'b', ItemID.magnemiveIngot, 0 ]);