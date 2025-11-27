IDRegistry.genItemID("bfurnace_fuel");
Item.createItem("bfurnace_fuel", "Fuel Efficiency Upgrade", {name: "bfurnace_fuel", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.bfurnace_fuel, 128);
Recipes2.addShaped(ItemID.bfurnace_fuel, "aba:bcb:aba", {a: 264, b: 368, c: {id: 263}});
Upgrade.register(ItemID.bfurnace_fuel, "fuel", {modifier: 2, isBreakable: true});

IDRegistry.genItemID("bfurnace_advfuel");
Item.createItem("bfurnace_advfuel", "Advanced Fuel Efficiency Upgrade", {name: "bfurnace_fuel", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_advfuel, "aba:cdc:aca", {a: 264, b: 370, c: 381, d: {id: ItemID.bfurnace_fuel}});
Upgrade.register(ItemID.bfurnace_advfuel, "fuel", {modifier: 2});

IDRegistry.genItemID("bfurnace_ore");
Item.createItem("bfurnace_ore", "Ore Processing Upgrade", {name: "bfurnace_ore", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.bfurnace_ore, 512);
Recipes2.addShaped(ItemID.bfurnace_ore, "aaa:aba:aca", {a: {id: 1}, b: 318, c: 33});
Upgrade.register(ItemID.bfurnace_ore, "ore", {modifier: 2, isBreakable: true});

IDRegistry.genItemID("bfurnace_advore");
Item.createItem("bfurnace_advore", "Advanced Ore Processing Upgrade", {name: "bfurnace_ore", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_advore, "aba:cdc:aba", {a: 264, b: 33, c: 49, d: {id: ItemID.bfurnace_ore}});
Upgrade.register(ItemID.bfurnace_advore, "ore", {modifier: 2});

IDRegistry.genItemID("bfurnace_storage");
Item.createItem("bfurnace_storage", "Storage Upgrade", {name: "bfurnace_storage", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_storage, "aba:bcb:aba", {a: 1, b: 20, c: 54});
Upgrade.register(ItemID.bfurnace_storage, "storage");

IDRegistry.genItemID("bfurnace_liquid");
Item.createItem("bfurnace_liquid", "Liquid Upgrade", {name: "bfurnace_liquid", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_liquid, "aoa:bcb:aba", {a: 265, b: 20, c: {id: 325}});
Upgrade.register(ItemID.bfurnace_liquid, "liquid", {amount: 4});

IDRegistry.genItemID("bfurnace_output");
Item.createItem("bfurnace_output", "Auto-Output Upgrade", {name: "bfurnace_factory", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_output, "aoa:bcb:aoa", {a: 265, b: 266, c: 20});
Upgrade.register(ItemID.bfurnace_output, "factory", {output: true});

IDRegistry.genItemID("bfurnace_input");
Item.createItem("bfurnace_input", "Auto-Input Upgrade", {name: "bfurnace_factory", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_input, "aba:aca:aba", {a: 266, b: 20, c: 264});
Upgrade.register(ItemID.bfurnace_input, "factory", {input: true, inputFuel: true});

IDRegistry.genItemID("bfurnace_factory");
Item.createItem("bfurnace_factory", "Factory Upgrade", {name: "bfurnace_factory", meta: 2}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_factory, "aba:aca:ada", {a: 264, b: ItemID.bfurnace_output, c: 20, d: ItemID.bfurnace_input});
Upgrade.register(ItemID.bfurnace_factory, "factory", {input: true, inputFuel: true, output: true});

IDRegistry.genItemID("bfurnace_pack");
Item.createItem("bfurnace_pack", "Upgrade Package", {name: "bfurnace_pack", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_pack, "aba:oco:aba", {a: 266, b: 58, c: 54});
Upgrade.register(ItemID.bfurnace_pack, "pack");
BackpackRegistry.register(ItemID.bfurnace_pack, {
    slots: 3,
    inRow: 3,
    isValidItem: function(id){
        const upgData = Upgrade.getData(id);
        return upgData && upgData.type != "pack";
    }
});