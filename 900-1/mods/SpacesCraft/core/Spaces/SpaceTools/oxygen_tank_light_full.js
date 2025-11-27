IMPORT("ChargeItem");
﻿IDRegistry.genItemID("oxygentank_lightfull"); 
Item.createItem("oxygentank_lightfull", "Oxygen Tank Light Full", {name: "Oxygen Tank Light Full", meta: 0}, {stack: 1});
Translation.addTranslation("Oxygen Tank Light Full", {
ru: "Маленький кислородный баллон"
});
ChargeItemRegistry.registerItem(ItemID.oxygentank_lightfull, "ob", 900, 20, 0, true);
oxygenStorage.set(ItemID.oxygentank_lightfull, {storage: 900});