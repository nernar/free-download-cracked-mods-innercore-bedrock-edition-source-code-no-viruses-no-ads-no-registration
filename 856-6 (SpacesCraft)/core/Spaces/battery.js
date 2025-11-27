IMPORT("ChargeItem");
﻿IDRegistry.genItemID("battery"); 
Item.createItem("battery", "Battery", {name: "Battery", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery", {
ru: "Батарейка"
});
ChargeItemRegistry.registerItem(ItemID.battery, "sj", 500, 20, 0, true);
ChargeItemRegistry.registerItem(ItemID.battery, "ft", 500, 20, 0, true);
battery.set(ItemID.battery, {storage: 500});
IDRegistry.genItemID("battery_infinity"); 
Item.createItem("battery_infinity", "Battery Infinity", {name: "Oxygen Canistre Infinite", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery Infinity", {
ru: "Бесконечная батарейка"
});
ChargeItemRegistry.registerItem(ItemID.battery_infinity, "sj", 500, 20, 0, true);
ChargeItemRegistry.registerItem(ItemID.battery_infinity, "ft", 500, 20, 0, true);
//if(ItemID.battery == data = 500){alert(500)}
battery.set(ItemID.battery_infinity, {storage: 500});
Item.setGlint(ItemID.battery_infinity, true);
