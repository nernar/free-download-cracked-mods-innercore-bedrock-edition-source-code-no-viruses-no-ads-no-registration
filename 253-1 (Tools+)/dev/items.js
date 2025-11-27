IDRegistry.genItemID("psword");
IDRegistry.genItemID("ppickaxe");
IDRegistry.genItemID("paxe");
IDRegistry.genItemID("pshovel");



Item.createItem("psword", "Sword+", {name: "Sword+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("ppickaxe", "Pickaxe+", {name: "Pickaxe+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("paxe", "Axe+", {name: "Axe+", meta: 0}, {isTech: false, stack: 1});

Item.createItem("pshovel","Shovel+", {name: "Shovel+", meta:0}, {isTech: false, stack:1});

//Отображение

Item.setToolRender(ItemID.psword, true);

Item.setToolRender(ItemID.ppickaxe, true);

Item.setToolRender(ItemID.paxe, true);

Item.setToolRender(ItemID.pshovel, true);