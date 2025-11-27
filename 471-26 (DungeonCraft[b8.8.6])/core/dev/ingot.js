IDRegistry.genItemID("god_ingot");
Item.createItem("god_ingot", "dc.item.god_ingot", {name: "god_ingot", meta: 0}, {stack: 1});
IDRegistry.genItemID("fire_ingot");
Item.createItem("fire_ingot", "dc.item.fire_ingot", {name: "fire_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("melted_stone");
Item.createItem("melted_stone", "dc.item.melted_stone", {name: "melted_stone", meta: 0}, {stack: 64});
Item.addCreativeGroup("ingot", Translation.translate("dc.tab.ingot"), [ItemID.god_ingot, ItemID.fire_ingot, ItemID.melted_stone]);

