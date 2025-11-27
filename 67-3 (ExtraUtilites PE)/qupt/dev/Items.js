IDRegistry.genItemID("unstableNugget");
Item.createItem("unstableNugget", "Unstable Nugget", {name: "unstablenugget"});
IDRegistry.genItemID("unstableNugget1");
Item.createItem("unstableNugget1", "Unstable Nugget1", {name: "unstablenugget1"});
IDRegistry.genItemID("unstableIngot");
Item.createItem("unstableIngot", "Unstable Ingot", {name: "unstableingot"});
IDRegistry.genItemID("unstableIngot1");
Item.createItem("unstableIngot1", "Unstable Ingot1", {name: "unstableingot1"});
IDRegistry.genItemID("bedrockiumNugget");
Item.createItem("bedrockiumNugget", "Bedrockium Nugget", {name: "bedrockiumNugget"});
IDRegistry.genItemID("bedrockiumIngot");
Item.createItem("bedrockiumIngot", "Bedrockium Ingot", {name: "bedrockiumIngot"});
IDRegistry.genItemID("bedrockiumIngot");
Item.createItem("bedrockiumIngot", "Bedrockium Ingot", {name: "bedrockiumIngot"});
IDRegistry.genItemID("ethericsSwordHead");
Item.createItem("ethericsSwordHead", "Etherics Sword Head", {name: "ethericsword1"});
IDRegistry.genItemID("erosionShovelHead");
Item.createItem("erosionShovelHead", "Erosion Shovel Head", {name: "erosionShovel1"});
IDRegistry.genItemID("destructionPickaxeHead");
Item.createItem("destructionPickaxeHead", "Destruction Pickaxe Head", {name: "destructionpickaxe1"});
IDRegistry.genItemID("defoliageAxeHead");
Item.createItem("defoliageAxeHead", "Defoliage Axe Head", {name: "defoliageAxe1"});
IDRegistry.genItemID("temporialHoeHead");
Item.createItem("temporialHoeHead", "Temporial Hoe Head", {name: "temporalHoe1"});
IDRegistry.genItemID("divisionSigil");
Item.createItem("divisionSigil", "Division Sigil", {name: "divisionSigil"});
Callback.addCallback("EntityDeath", function (entity) {
    if (Entity.getType(entity) == 52) {
        var coords = Entity.getPosition(entity);
        World.drop(coords.x, coords.y, coords.z, ItemID.divisionSigil, 1, 0);
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.unstableNugget, count: 9, data: 0}, ["b"], ["b", ItemID.unstableIngot, 0]);
    Recipes.addShaped({id: ItemID.unstableNugget1, count: 9, data: 0}, ["b"], ["b", ItemID.unstableIngot1, 0]);
    Recipes.addShaped({id: ItemID.unstableIngot, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.unstableNugget, 0]);
    Recipes.addShaped({id: ItemID.unstableIngot1, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.unstableNugget1, 0]);
    Recipes.addShaped({id: ItemID.bedrockiumNugget, count: 9, data: 0}, ["b"], ["b", ItemID.bedrockiumIngot, 0]);
    Recipes.addShaped({id: ItemID.bedrockiumIngot, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.bedrockiumNugget, 0]);
    Recipes.addShaped({id: ItemID.bedrockiumIngot, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", 49, 0]);
    Recipes.addShaped({id: 7, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.bedrockiumIngot, 0]);
    Recipes.addShaped({id: ItemID.unstableIngot, count: 1, data: 0}, ["b", "c", "d"], ["b", 264, 0, "c", ItemID.divisionSigil, 0, "d", 266, 0]);
    Recipes.addShaped({id: ItemID.unstableIngot1, count: 1, data: 0}, ["b", "c", "d"], ["b", 264, 0, "c", ItemID.divisionSigil, 0, "d", 266, 0]);
});

