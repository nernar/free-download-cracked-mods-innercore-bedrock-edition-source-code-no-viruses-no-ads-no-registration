IMPORT("ChargeItem");
﻿IDRegistry.genItemID("battery"); 
Item.createItem("battery", "Battery", {name: "Battery", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery", {
ru: "Батарейка"
});
ChargeItemRegistry.registerItem(ItemID.battery, "sj", 500, 20, 1, true);
ChargeItemRegistry.registerItem(ItemID.battery, "ft", 500, 20, 1, true);

IDRegistry.genItemID("battery_infinity"); 
Item.createItem("battery_infinity", "Battery Infinity", {name: "Oxygen Canistre Infinite", meta: 0}, {stack: 1, inCreative:false});
Translation.addTranslation("Battery Infinity", {
ru: "§6Бесконечная батарейка"
});

ChargeItemRegistry.registerItem(ItemID.battery_infinity, "sj", 500, 20, 0, true);
ChargeItemRegistry.registerItem(ItemID.battery_infinity, "ft", 500, 20, 0, true);


Item.setGlint(ItemID.battery_infinity, true);

Item.registerNameOverrideFunction(ItemID.battery_infinity, function(item, name){
    return Translation.translate("Battery Infinity") + "\n§7⚡ : Бесконечность";
});
/*Translation.addTranslation("\n§7⚡: Бесконечность", {
en: "\n§7⚡: Infinity"
});*/