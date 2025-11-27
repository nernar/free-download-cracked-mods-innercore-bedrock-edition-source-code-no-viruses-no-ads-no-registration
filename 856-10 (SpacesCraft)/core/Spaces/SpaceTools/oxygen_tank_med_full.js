IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_medfull"); 
Item.createItem("oxygentank_medfull", "Oxygen Tank Med Full", {name: "Oxygen Tank Med Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Med Full", {
ru: "Средний кислородный баллон"
});

ChargeItemRegistry.registerItem(ItemID.oxygentank_medfull, "ob", 1800, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_medfull, {storage: 1800});