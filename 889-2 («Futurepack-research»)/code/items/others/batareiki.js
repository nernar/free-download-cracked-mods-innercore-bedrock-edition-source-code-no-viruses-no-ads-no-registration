
IDRegistry.genItemID("battery_I"); 
Item.createItem("battery_I", "Battery l", {name: "battery_l", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.battery_I, "ft", 300, 20, 0, true)
Futurepack.addFuturetock(ItemID.battery_I, {futock: 300});

IDRegistry.genItemID("battery_n"); 
Item.createItem("battery_n", "Battery N", {name: "battery_n", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.battery_n, "ft", 420, 20, 0, true);
Futurepack.addFuturetock(ItemID.battery_n, {futock: 420});

IDRegistry.genItemID("neon_battery"); 
Item.createItem("neon_battery", "Battery neon", {name: "neon_battery", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.neon_battery, "ft", 1000, 20, 0, true);
Futurepack.addFuturetock(ItemID.neon_battery, {futock: 1000});

IDRegistry.genItemID("energie_zelle"); 
Item.createItem("energie_zelle", "Zelle energy", {name: "energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.energie_zelle, "ft", 760, 20, 0, true);
Futurepack.addFuturetock(ItemID.energie_zelle, {futock: 760});

IDRegistry.genItemID("compact_energie_zelle"); 
Item.createItem("compact_energie_zelle", "Zelle compact energy", {name: "compact_energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.compact_energie_zelle, "ft", 760, 20, 0, true);
Futurepack.addFuturetock(ItemID.compact_energie_zelle, {futock: 760});

IDRegistry.genItemID("kristall_energie_zelle"); 
Item.createItem("kristall_energie_zelle", "Kristall zelle energy", {name: "kristall_energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.kristall_energie_zelle, "ft", 860, 20, 0, true);
Futurepack.addFuturetock(ItemID.kristall_energie_zelle, {futock: 860});
