IDRegistry.genItemID("blo0");
IDRegistry.genItemID("blo1");
IDRegistry.genItemID("blo2");
IDRegistry.genItemID("blo3");
IDRegistry.genItemID("blo4");
Item.createItem("blo0", "Soul Eater", {name: "1blo", meta: 0}, {stack: 1});

Item.createItem("blo1", "Soul Eater 1 lvl", {name: "2blo", meta: 0}, {stack: 1});

Item.createItem("blo2", "Soul Eater 2 lvl", {name: "3blo", meta: 0}, {stack: 1});

Item.createItem("blo3", "Soul Eater 3 lvl", {name: "4blo", meta: 0}, {stack: 1});

Item.createItem("blo4", "Great Soul Eater", {name: "5blo", meta: 0}, {stack: 1});

ToolAPI.registerSword(ItemID.blo0, {level: 0, durability: 400, damage: 4});

ToolAPI.registerSword(ItemID.blo1, {level: 0, durability: 800, damage: 7});

ToolAPI.registerSword(ItemID.blo2, {level: 0, durability: 2000, damage: 10});

ToolAPI.registerSword(ItemID.blo3, {level: 0, durability: 4000, damage: 15});

ToolAPI.registerSword(ItemID.blo4, {level: 0, durability: 7000, damage: 20});

IDRegistry.genItemID("blop0");
IDRegistry.genItemID("blop1");
IDRegistry.genItemID("blop2");
IDRegistry.genItemID("blop3");
IDRegistry.genItemID("blop4");

Item.createItem("blop0", "Soul Pickaxe", {name: "blop0", meta: 0}, {stack: 1});

Item.createItem("blop1", "Soul Pickaxe 1 lvl", {name: "blop1", meta: 0}, {stack: 1});

Item.createItem("blop2", "Soul Pickaxe 2 lvl", {name: "blop2", meta: 0}, {stack: 1});

Item.createItem("blop3", "Soul Pickaxe 3 lvl", {name: "blop3", meta: 0}, {stack: 1});

Item.createItem("blop4", "Great Soul Pickaxe", {name: "blop4", meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID.blop0, {level: 2, durability: 400, efficiency: 3, damage: 3}, ["stone"]);

ToolAPI.registerTool(ItemID.blop1, {level: 3, durability: 800, efficiency: 6, damage: 4}, ["stone"]);

ToolAPI.registerTool(ItemID.blop2, {level: 4, durability: 2000, efficiency: 8, damage: 5}, ["stone"]);

ToolAPI.registerTool(ItemID.blop3, {level: 5, durability: 4000, efficiency: 14, damage: 6}, ["stone"]);

ToolAPI.registerTool(ItemID.blop4, {level: 1000, durability: 7000, efficiency: 20, damage: 7}, ["stone"]);