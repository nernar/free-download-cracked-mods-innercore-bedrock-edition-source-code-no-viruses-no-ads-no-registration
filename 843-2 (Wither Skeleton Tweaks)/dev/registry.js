IMPORT("ToolLib");
IDRegistry.genItemID("immolationBlade");
Item.createItem("immolationBlade", "Immolation Blade", {name: "immolationBlade", meta: 0}, {stack: 1});
IDRegistry.genItemID("blazingImmolationBlade");
Item.createItem("blazingImmolationBlade", "Blazing Immolation Blade", {name: "blazingImmolationBlade", meta: 0}, {stack: 1});
IDRegistry.genItemID("witherSkullFragment");
Item.createItem("witherSkullFragment", "Wither Skull Fragment", {name: "witherSkullFragment", meta: 0}, {stack: 64});
ToolAPI.addToolMaterial("ifrite", {durability: 2300, level: 1, efficiency: 1, damage: 16, enchantability: 4});
ToolLib.setTool(ItemID.immolationBlade, "ifrite", ToolType.sword);
ToolLib.setTool(ItemID.blazingImmolationBlade, "ifrite", ToolType.sword);
let twentyFramesFrequency = 0, twelveFramesFrequency = 0;
Item.registerIconOverrideFunction(ItemID.immolationBlade, function (item, texture) {
    return {name: "immolationBlade", meta: Math.trunc(twentyFramesFrequency / 2)};
});
Item.registerIconOverrideFunction(ItemID.blazingImmolationBlade, function (item, texture) {
    return {name: "blazingImmolationBlade", meta: Math.trunc(twelveFramesFrequency / 2)};
});
Callback.addCallback("ServerPlayerTick", function (playerUid) {
    twentyFramesFrequency = World.getThreadTime() % 40;
    twelveFramesFrequency = World.getThreadTime() % 24;
});
Recipes.addShaped({id: ItemID.immolationBlade, count: 1, data: 0}, [" ln", "lnl", "sl "], ["l", 843, 0, "n", 399, 0, "s", 280, 0]);
Recipes.addShaped({id: ItemID.blazingImmolationBlade, count: 1, data: 0}, [" in", "ini", "si "], ["i", 369, 0, "n", 399, 0, "s", 280, 0]);
Recipes.addShaped({id: 397, count: 1, data: 1}, ["fff", "fff", "fff"], ["f", ItemID.witherSkullFragment, 0]);

