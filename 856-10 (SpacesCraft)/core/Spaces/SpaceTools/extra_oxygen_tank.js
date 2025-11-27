IMPORT("ChargeItem");
﻿IDRegistry.genItemID("extra_oxygen_tank"); 
Item.createItem("extra_oxygen_tank", "Extra Oxygen Tank", {name: "Extra Oxygen Tank", meta: 0}, {stack: 1});
Translation.addTranslation("Extra Oxygen Tank", {
ru: "Экстра кислородный баллон"
});

ChargeItemRegistry.registerItem(ItemID.extra_oxygen_tank, "ob", 5000, 20, 0, true);
oxygenStorage.set(ItemID.extra_oxygen_tank, {storage: 5000});