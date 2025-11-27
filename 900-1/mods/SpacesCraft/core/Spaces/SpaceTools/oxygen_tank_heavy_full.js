IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_heavyfull"); 
Item.createItem("oxygentank_heavyfull", "Oxygen Tank Heavy Full", {name: "Oxygen Tank Heavy Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Heavy Full", {
ru: "Большой кислородный баллон"
});
ChargeItemRegistry.registerItem(ItemID.oxygentank_heavyfull, "ob", 2700, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_heavyfull, {storage: 2700});