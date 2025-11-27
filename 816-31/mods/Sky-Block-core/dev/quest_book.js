ScrutinyAPI.register("skyblock", {
	frame: "quest_book_frame",
	dscrFrame: "classic_tab_up_light_left",
	closeButtonFrame: "tab_up_close_button",
	default_tab: "gl",
	//default_bitmap: "quest_frame",
	//default_bitmap_click: "quest_completed_frame"
});
Callback.addCallback("ModsLoaded", function(){
ScrutinyAPI.setTab("skyblock", "gl", {
	title: Translation.translate("Skyblock Basics"),
	id: 0,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: ItemID.skyblock_icon,
	auto_size: true 
});

ScrutinyAPI.setScrutiny("skyblock", "gl", "wood", {
	name: Translation.translate("Get a tree"),
	size: 90,
	cellX: 1,//1,
	cellY: 2,//2,
	icon: {
		id: 17
	},
	book_pre: {
		left: [
			{text: Translation.translate("Get a tree"), size: 35},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Get a tree"), size: 35},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "wood", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "crock", {
	lines: ["wood"],
	name: Translation.translate("Infected foliage"),
	size: 90,
	cellX: 3,
	cellY: 1,
	icon: {
		id: ItemID.ex_crookWood
	},
	book_pre: {
		left: [
			{text: Translation.translate("Infected foliage"), size: 35},
			{text: Translation.translate("Get the threads from the infected foliage, it is necessary to break the foliage with a hook. To infect the foliage, get a Silkworm and press it on the foliage (wait until the foliage turns white). The hook is made of 4 sticks, the silkworm falls from the foliage if you break it with a hook."), size: 15},
			{text: "    ", size: 25},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Infected foliage"), size: 35},
			{text: Translation.translate("Get the threads from the infected foliage, it is necessary to break the foliage with a hook. To infect the foliage, get a Silkworm and press it on the foliage (wait until the foliage turns white). The hook is made of 4 sticks, the silkworm falls from the foliage if you break it with a hook."), size: 15},
			{text: "    ", size: 25},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "crock", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "barrel", {
	name: Translation.translate("Barrel"),
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: ["wood"],
	icon: {
		id: BlockID.ex_barrelOak
	},
	book_pre: {
		left: [
			{text: Translation.translate("Barrel"), size: 35},
			{text: Translation.translate("Get a block of land with a barrel. To get the land, fill it with seedlings, the barrel will be filled with water during the rain."), size: 15},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Barrel"), size: 35},
			{text: Translation.translate("Get a block of land with a barrel. To get the land, fill it with seedlings, the barrel will be filled with water during the rain."), size: 15},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "barrel", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "sieve", {
	name: Translation.translate("Get the first resources!"),
	size: 90,
	cellX: 4,
	cellY: 2,
	lines: ["barrel"],
	icon: {
		id: BlockID.ex_sieve
	},
	book_pre: {
		left: [
			{text: Translation.translate("Get the first resources!"), size: 35},
			{text: Translation.translate("Get the stones by sifting the ground, after which you can make a cobblestone of 4 stones."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Get the first resources!"), size: 35},
			{text: Translation.translate("Get the stones by sifting the ground, after which you can make a cobblestone of 4 stones."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "sieve", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "drawers", {
	name: Translation.translate("Colictionner"),
	size: 90,
	cellX: 2,
	cellY: 4,
	lines: ["wood"],
	icon: {
		id: BlockID.oakDrawer
	},
	book_pre: {
		left: [
			{text: Translation.translate("Colictionner"), size: 35},
			{text: Translation.translate("Craft all types of Storage Drawers"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Colictionner"), size: 35},
			{text: Translation.translate("Craft all types of Storage Drawers"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "drawers", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "woods", {
	name: Translation.translate("Break all kinds of trees"),
	size: 90,
	cellX: 3,
	cellY: 4,
	lines: ["wood"],
	icon: {
		id: 17
	},
	book_pre: {
		left: [
			{text: Translation.translate("Break all kinds of trees"), size: 35},
			{text: Translation.translate("Break all kinds of trees(oak, dark oak, acacia, tropic tree, birch, spruce)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Break all kinds of trees"), size: 35},
			{text: Translation.translate("Break all kinds of trees(oak, dark oak, acacia, tropic tree, birch, spruce)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "woods", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "boiler", {
	name: Translation.translate("Cauldron"),
	size: 90,
	cellX: 6,
	cellY: 4,
	lines: ["sieve"],
	icon: {
		id: BlockID.ex_crucibleRaw
	},
	book_pre: {
		left: [
			{text: Translation.translate("Cauldron"), size: 35},
			{text: Translation.translate("Craft a boiler, the boiler is needed for lava extraction, put it over a block that can blow heat, for example, a torch or fire, then put a cobblestone in the boiler."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Cauldron"), size: 35},
			{text: Translation.translate("Craft a boiler, the boiler is needed for lava extraction, put it over a block that can blow heat, for example, a torch or fire, then put a cobblestone in the boiler."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "boiler", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "ironChest", {
	name: Translation.translate("Iron chest"),
	size: 100,
	cellX: 8,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.ironChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Iron chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an iron chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Iron chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an iron chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "ironChest", [ItemID.rare_lbag, ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "silverChest", {
	name: Translation.translate("Silver chest"),
	size: 100,
	cellX: 9,
	cellY: 2,
	lines: ["ironChest"],
	icon: {
		id: BlockID.silverChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Silver chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an silver chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Silver chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an silver chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "silverChest", [ItemID.rare_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "goldChest", {
	name: Translation.translate("Gold chest"),
	size: 100,
	cellX: 8,
	cellY: 3,
	lines: ["silverChest"],
	icon: {
		id: BlockID.goldChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Gold chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an gold chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Gold chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an gold chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "goldChest", [ItemID.rare_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "diamondChest", {
	name: Translation.translate("Diamond chest"),
	size: 100,
	cellX: 9,
	cellY: 4,
	lines: ["goldChest"],
	icon: {
		id: BlockID.diamondChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Diamond chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an diamond chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Diamond chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an diamond chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "diamondChest", [ItemID.legendary_lbag, ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "crystalChest", {
	name: Translation.translate("Crystal chest"),
	size: 100,
	cellX: 8,
	cellY: 5,
	lines: ["diamondChest"],
	icon: {
		id: BlockID.crystalChest
	},
	book_pre: {
		left: [
			{text: Translation.translate("Crystal chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an crystal chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Crystal chest"), size: 35},
			{text: Translation.translate("As usual, but better! Craft an crystal chest."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}},{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "crystalChest", [ItemID.legendary_lbag, ItemID.rare_lbag]);
















ScrutinyAPI.setTab("skyblock", "auto", {
	title: Translation.translate("Automation"),
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.energyAutoHammer||0,
	auto_size: true 
});



ScrutinyAPI.setScrutiny("skyblock", "auto", "fuel_generator", {
	name: Translation.translate("The first energy"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.machineEnergyGeneratorFuel
	},
	book_pre: {
		left: [
			{text: Translation.translate("The first energy"), size: 35},
			{text: Translation.translate("Craft a coal generator from the Factory craft mod. For the generator to work, you need fuel, for example coal."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("The first energy"), size: 35},
			{text: Translation.translate("Craft a coal generator from the Factory craft mod. For the generator to work, you need fuel, for example coal."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "fuel_generator", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "machine_block", {
	name: "Механик",
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.blockMachineWooden
	},
	book_pre: {
		left: [
			{text: "Механик", size: 35},
			{text: "Скрафтите Деревянный машинный блок, Каменный машинный блок и Железный машинный блок. Для ускорения работы механических блоков нужно положить шестерёнки в слоты улучшения. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Механик", size: 35},
			{text: "Скрафтите Деревянный машинный блок, Каменный машинный блок и Железный машинный блок. Для ускорения работы механических блоков нужно положить шестерёнки в слоты улучшения. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "machine_block", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "sawmill", {
	name: "Бесконечное дерево",
	size: 90,
	cellX: 1,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicSawmill
	},
	book_pre: {
		left: [
			{text: "Бесконечное дерево", size: 35},
			{text: "Скрафтите угольный механическую лесопилку. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Бесконечное дерево", size: 35},
			{text: "Скрафтите угольный механическую лесопилку. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "sawmill", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "food", {
	name: "Бесконечная еда",
	size: 90,
	cellX: 2,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicFarm
	},
	book_pre: {
		left: [
			{text: "Бесконечная еда", size: 35},
			{text: "Скрафтите Механическую ферму, Механическая ферма рыбы. Для работы фермы рыбы трубуются рыбаловные сети, поставьте их вокруг фермы, а ферму над водой.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Бесконечная еда", size: 35},
			{text: "Скрафтите Механическую ферму, Механическая ферма рыбы. Для работы фермы рыбы трубуются рыбаловные сети, поставьте их вокруг фермы, а ферму над водой.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "food", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "pump", {
	name: "Помпы",
	size: 90,
	cellX: 3,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicPumpLava
	},
	book_pre: {
		left: [
			{text: "Помпы", size: 35},
			{text: "Скрафтите Лавовую помпу и водную помпу. Водная помпа - собират воду под собой. Лавовая помпа - собирает лаву в радиусе. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Помпы", size: 35},
			{text: "Скрафтите Лавовую помпу и водную помпу. Водная помпа - собират воду под собой. Лавовая помпа - собирает лаву в радиусе. ", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "pump", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "quarry", {
	name: "Просто мусор",
	size: 90,
	cellX: 4,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicQuarry
	},
	book_pre: {
		left: [
			{text: "Просто мусор", size: 35},
			{text: "Скрафтите карьер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Просто мусор", size: 35},
			{text: "Скрафтите карьер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "quarry", [ItemID.legendary_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "tower", {
	name: "РЕЗНЯ",
	size: 90,
	cellX: 5,
	cellY: 5,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineMechanicTowerFlame
	},
	book_pre: {
		left: [
			{text: "РЕЗНЯ", size: 35},
			{text: "Скрафтите Механический арбалет, Механический уничтожитель мобов, Механический огнемет.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "РЕЗНЯ", size: 35},
			{text: "Скрафтите Механический арбалет, Механический уничтожитель мобов, Механический огнемет.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "tower", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_hammer", {
	name: "Автоматический молот",
	size: 90,
	cellX: 6,
	cellY: 4,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoHammer
	},
	book_pre: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический молот. Автоматический молот может как и обычный молот передрабливать булыжник в гравий, а гравий в песок.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический молот. Автоматический молот может как и обычный молот передрабливать булыжник в гравий, а гравий в песок.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_hammer", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_click", {
	name: "Автоматический кликер",
	size: 90,
	cellX: 6,
	cellY: 3,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoClick
	},
	book_pre: {
		left: [
			{text: "Автоматический кликер", size: 35},
			{text: "Скрафтите Автоматический кликер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Автоматический молот", size: 35},
			{text: "Скрафтите Автоматический кликер.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_click", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "liquid_crucible", {
	name: "Плавитель",
	size: 90,
	cellX: 6,
	cellY: 2,
	lines: ["machine_block"],
	icon: {
		id: BlockID.machineEnergyLiquidCrucible
	},
	book_pre: {
		left: [
			{text: "Плавитель", size: 35},
			{text: "Скрафтите Плавитель. Плавитель перабатывает камень, булыжник и некоторые другие блоки в лаву.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: "Плавитель", size: 35},
			{text: "Скрафтите Плавитель. Плавитель перабатывает камень, булыжник и некоторые другие блоки в лаву.", size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "liquid_crucible", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "auto_sieve", {
	name: Translation.translate("Automatic Sieve"),
	size: 90,
	cellX: 6,
	cellY: 1,
	lines: ["machine_block"],
	icon: {
		id: BlockID.energyAutoSieve
	},
	book_pre: {
		left: [
			{text: Translation.translate("Automatic Sieve"), size: 35},
			{text: Translation.translate("An automatic sieve is the same sieve, but automatic, as efficient as an iron mesh."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Automatic Sieve"), size: 35},
			{text: Translation.translate("An automatic sieve is the same sieve, but automatic, as efficient as an iron mesh."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "auto_sieve", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "iron_key", {
	name: Translation.translate("Engineer's Key"),
	size: 90,
	cellX: 7,
	cellY: 1,
	icon: {
		id: ItemID.factoryWrench
	},
	book_pre: {
		left: [
			{text: Translation.translate("Engineer's Key"), size: 35},
			{text: Translation.translate("Iron key - can turn off/on machines from the Factory craft modification. How do I know that the mechanism is enabled? If particles are coming from the mechanism, then it is turned on."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Engineer's Key"), size: 35},
			{text: Translation.translate("Iron key - can turn off/on machines from the Factory craft modification. How do I know that the mechanism is enabled? If particles are coming from the mechanism, then it is turned on."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "iron_key", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "plumber", {
	name: Translation.translate("Plumber"),
	size: 90,
	cellX: 7,
	cellY: 2,
	icon: {
		id: BlockID.machineEnergyLiquidPump
	},
	book_pre: {
		left: [
			{text: Translation.translate("Plumber"), size: 35},
			{text: Translation.translate("Make a liquid pump, liquid loader, liquid pipes. Liquid pump - draws liquids from nearby blocks. Liquid loader - transfers liquids to nearby blocks. Liquid pipes - transfer liquids between the pump and the loader. To transfer the liquid to the loader and the pump, energy is needed."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Plumber"), size: 35},
			{text: Translation.translate("Make a liquid pump, liquid loader, liquid pipes. Liquid pump - draws liquids from nearby blocks. Liquid loader - transfers liquids to nearby blocks. Liquid pipes - transfer liquids between the pump and the loader. To transfer the liquid to the loader and the pump, energy is needed."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "plumber", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "energyCollector", {
	name: Translation.translate("Matter from the air"),
	size: 90,
	cellX: 8,
	cellY: 1,
	icon: {
		id: BlockID.energyCollector1
	},
	book_pre: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make a collector MK 1. The collector collects energy that can then be processed into items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make a collector MK 1. The collector collects energy that can then be processed into items."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "energyCollector", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "energyCondenser", {
	name: Translation.translate("Matter from the air"),
	size: 90,
	cellX: 8,
	cellY: 3,
	lines: ["energyCollector"],
	icon: {
		id: BlockID.energyCondenser1
	},
	book_pre: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make an energy capacitor. The capacitor converts the emc energy into objects."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Matter from the air"), size: 35},
			{text: Translation.translate("Make an energy capacitor. The capacitor converts the emc energy into objects."), size: 15},
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "energyCondenser", [ItemID.legendary_lbag, ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "auto", "pipe", {
	name: Translation.translate("Mario"),
	size: 90,
	cellX: 7,
	cellY: 4,
	icon: {
		id: BlockID.utilsWire
	},
	book_pre: {
		left: [
			{text: Translation.translate("Mario"), size: 35},
			{text: Translation.translate("Make a subject pipe from Utils+."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Mario"), size: 35},
			{text: Translation.translate("Make a subject pipe from Utils+."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "pipe", [ItemID.rare_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "auto", "rp_block_breaker", {
	name: Translation.translate("Block breaker"),
	size: 90,
	cellX: 9,
	cellY: 1,
	icon: {
		id: BlockID.rp_block_breaker
	},
	book_pre: {
		left: [
			{text: Translation.translate("Block breaker"), size: 35},
			{text: Translation.translate("When the redstone is applied, it destroys the block."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Block breaker"), size: 35},
			{text: Translation.translate("When the redstone is applied, it destroys the block."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag, count: 2}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "auto", "rp_block_breaker", [ItemID.rare_lbag]);























ScrutinyAPI.setTab("skyblock", "industrial", {
	title: "Industrial craft 2",
	id: 2,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.primalGenerator,
	auto_size: true 
});

ScrutinyAPI.setScrutiny("skyblock", "industrial", "primalGenerator", {
	name: Translation.translate("Energy"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.primalGenerator
	},
	book_pre: {
		left: [
			{text: Translation.translate("Energy"), size: 35},
			{text: Translation.translate("Make a generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Energy"), size: 35},
			{text: Translation.translate("Make a generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "primalGenerator", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "geothermalGenerator", {
	name: Translation.translate("Lava flow"),
	size: 90,
	cellX: 1,
	cellY: 3,
	lines: ["primalGenerator"],
	icon: {
		id: BlockID.geothermalGenerator
	},
	book_pre: {
		left: [
			{text: Translation.translate("Lava flow"), size: 35},
			{text: Translation.translate("Make a Geothermal generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Lava flow"), size: 35},
			{text: Translation.translate("Make a Geothermal generator."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "geothermalGenerator", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "extractor", {
	name: Translation.translate("Extractor"),
	size: 90,
	cellX: 2,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.extractor
	},
	book_pre: {
		left: [
			{text: Translation.translate("Extractor"), size: 35},
			{text: Translation.translate("With the help of the extract, more rubber can be extracted. You can also make Nicolite from redstone."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Extractor"), size: 35},
			{text: Translation.translate("With the help of the extract, more rubber can be extracted. You can also make Nicolite from redstone."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "extractor", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "furnace", {
	name: Translation.translate("Furnace"),
	size: 90,
	cellX: 3,
	cellY: 3,
	lines: [],
	icon: {
		id: BlockID.electricFurnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Furnace"), size: 35},
			{text: Translation.translate("Make an electric stove"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Furnace"), size: 35},
			{text: Translation.translate("Make an electric stove"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "furnace", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "reactor", {
	name: Translation.translate("Reactor"),
	size: 90,
	cellX: 1,
	cellY: 4,
	lines: [],
	icon: {
		id: BlockID.nuclearReactor
	},
	book_pre: {
		left: [
			{text: Translation.translate("Reactor"), size: 35},
			{text: Translation.translate("Make a nuclear reactor"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Reactor"), size: 35},
			{text: Translation.translate("Make a nuclear reactor"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "reactor", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "ASP", {
	name: Translation.translate("Improved solar panel"),
	size: 90,
	cellX: 4,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.ASP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Improved solar panel"), size: 35},
			{text: Translation.translate("Craft an improved solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Improved solar panel"), size: 35},
			{text: Translation.translate("Craft an improved solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "ASP", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "HSP", {
	name: Translation.translate("Hybrid solar panel"),
	size: 90,
	cellX: 5,
	cellY: 2,
	lines: ["ASP"],
	icon: {
		id: BlockID.HSP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Hybrid solar panel"), size: 35},
			{text: Translation.translate("Craft an hybrid solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Hybrid solar panel"), size: 35},
			{text: Translation.translate("Craft an hybrid solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "HSP", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "USP", {
	name: Translation.translate("Hybrid solar panel"),
	size: 90,
	cellX: 4,
	cellY: 3,
	lines: ["HSP"],
	icon: {
		id: BlockID.USP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Perfect solar panel"), size: 35},
			{text: Translation.translate("Craft an perfect solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Perfect solar panel"), size: 35},
			{text: Translation.translate("Craft an perfect solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "USP", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "QSP", {
	name: Translation.translate("Quant solar panel"),
	size: 90,
	cellX: 5,
	cellY: 4,
	lines: ["USP"],
	icon: {
		id: BlockID.QSP
	},
	book_pre: {
		left: [
			{text: Translation.translate("Quant solar panel"), size: 35},
			{text: Translation.translate("Craft an quant solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Quant solar panel"), size: 35},
			{text: Translation.translate("Craft an quant solar panel."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "QSP", [ItemID.avaritia_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "molecularTransformer", {
	name: Translation.translate("Molecular transformer"),
	size: 90,
	cellX: 6,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.molecularTransformer
	},
	book_pre: {
		left: [
			{text: Translation.translate("Molecular transformer"), size: 35},
			{text: Translation.translate("The malecular converter converts one substance into another."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Molecular transformer"), size: 35},
			{text: Translation.translate("The malecular converter converts one substance into another."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.avaritia_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "molecularTransformer", [ItemID.avaritia_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "industrial", "miner", {
	name: Translation.translate("Molecular transformer"),
	size: 90,
	cellX: 7,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.miner
	},
	book_pre: {
		left: [
			{text: Translation.translate("Junk"), size: 35},
			{text: Translation.translate("Make a drilling rig."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Junk"), size: 35},
			{text: Translation.translate("Make a drilling rig."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "miner", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "industrial", "ironFurnace", {
	name: Translation.translate("Iron furnace"),
	size: 90,
	cellX: 2,
	cellY: 2,
	lines: [],
	icon: {
		id: BlockID.ironFurnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Iron furnace"), size: 35},
			{text: Translation.translate("Better than a stone! Make an iron stove."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Iron furnace"), size: 35},
			{text: Translation.translate("Better than a stone! Make an iron stove."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "industrial", "ironFurnace", [ItemID.rare_lbag]);















ScrutinyAPI.setTab("skyblock", "storage", {
	title: "Refined Storage",
	id: 3,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_pressed",
	icon: BlockID.diskDrive,
	auto_size: true 
});


ScrutinyAPI.setScrutiny("skyblock", "storage", "RSmachine_casing", {
	name: Translation.translate("Machine block"),
	size: 90,
	cellX: 1,
	cellY: 1,
	lines: [],
	icon: {
		id: BlockID.RSmachine_casing
	},
	book_pre: {
		left: [
			{text: Translation.translate("Machine block"), size: 35},
			{text: Translation.translate("This block is used in the Refined Storage mod crafting."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Machine block"), size: 35},
			{text: Translation.translate("This block is used in the Refined Storage mod crafting."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RSmachine_casing", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_controller", {
	name: Translation.translate("Controller"),
	size: 90,
	cellX: 2,
	cellY: 2,
	lines: ["RSmachine_casing"],
	icon: {
		id: BlockID.RS_controller
	},
	book_pre: {
		left: [
			{text: Translation.translate("Controller"), size: 35},
			{text: Translation.translate("The network controller is not bypassed for network operation."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Controller"), size: 35},
			{text: Translation.translate("The network controller is not bypassed for network operation."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_controller", [ItemID.legendary_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "diskDrive", {
	name: Translation.translate("Disk Drive"),
	size: 90,
	cellX: 1,
	cellY: 3,
	lines: ["RS_controller"],
	icon: {
		id: BlockID.diskDrive
	},
	book_pre: {
		left: [
			{text: Translation.translate("Disk Drive"), size: 35},
			{text: Translation.translate("The drive stores memory disks in which you can already save your items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Disk Drive"), size: 35},
			{text: Translation.translate("The drive stores memory disks in which you can already save your items."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "diskDrive", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_grid", {
	name: Translation.translate("Grid"),
	size: 90,
	cellX: 4,
	cellY: 2,
	lines: ["RS_controller"],
	icon: {
		id: BlockID.RS_grid
	},
	book_pre: {
		left: [
			{text: Translation.translate("Grid"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Grid"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_grid", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "storage", "RS_crafting_grid", {
	name: Translation.translate("Grid crafting"),
	size: 90,
	cellX: 5,
	cellY: 2,
	lines: ["RS_grid"],
	icon: {
		id: BlockID.RS_crafting_grid
	},
	book_pre: {
		left: [
			{text: Translation.translate("Grid crafting"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network and can serve as a workbench."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Grid crafting"), size: 35},
			{text: Translation.translate("The terminal serves for the space of objects in the network and can serve as a workbench."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "storage", "RS_crafting_grid", [ItemID.rare_lbag]);













ScrutinyAPI.setScrutiny("skyblock", "gl", "wood_tools", {
	name: Translation.translate("Craft all wooden tools"),
	size: 90,
	cellX: 4,
	cellY: 1,
	lines: ["crock"],
	icon: {
		id: VanillaItemID.wooden_axe
	},
	book_pre: {
		left: [
			{text: Translation.translate("Craft all wooden tools"), size: 35},
			{text: Translation.translate("Craft all the wooden tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Craft all wooden tools"), size: 35},
			{text: Translation.translate("Craft all the wooden tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "wood_tools", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "stone_tools", {
	name: Translation.translate("Craft all stone tools"),
	size: 90,
	cellX: 5,
	cellY: 1,
	lines: ["wood_tools"],
	icon: {
		id: VanillaItemID.stone_axe
	},
	book_pre: {
		left: [
			{text: Translation.translate("Craft all stone tools"), size: 35},
			{text: Translation.translate("Craft all the stone tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Craft all stone tools"), size: 35},
			{text: Translation.translate("Craft all the stone tools, you need to craft the tip.(axe, pickaxe, hoe, sword, shovel)"), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.uncommon_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "stone_tools", [ItemID.uncommon_lbag]);


ScrutinyAPI.setScrutiny("skyblock", "gl", "furnace", {
	name: Translation.translate("Make a furnace"),
	size: 90,
	cellX: 6,
	cellY: 2,
	lines: ["sieve"],
	icon: {
		id: VanillaBlockID.furnace
	},
	book_pre: {
		left: [
			{text: Translation.translate("Make a furnace"), size: 35},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Make a furnace"), size: 35},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "furnace", [ItemID.rare_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "tree_growing", {
	name: Translation.translate("Ritual dance"),
	size: 90,
	cellX: 1,
	cellY: 5,//5,
	lines: [],
	icon: {
		id: 6
	},
	book_pre: {
		left: [
			{text: Translation.translate("Ritual dance"), size: 35},
			{text: Translation.translate("Plant an oak sapling, and get up and sit on the shift until the tree grows."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Ritual dance"), size: 35},
			{text: Translation.translate("Plant an oak sapling, and get up and sit on the shift until the tree grows."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "tree_growing", [ItemID.uncommon_lbag]);

ScrutinyAPI.setScrutiny("skyblock", "gl", "ingots", {
	name: Translation.translate("The breadwinner!"),
	size: 90,
	cellX: 7,
	cellY: 4,
	lines: ["furnace"],
	icon: {
		id: ItemID.ex_Ironbroken
	},
	book_pre: {
		left: [
			{text: Translation.translate("The breadwinner!"), size: 35},
			{text: Translation.translate("Mine all types of gravel ore or sand or dust. Sift gravel or sand and craft ore from fragments of ore. Sand can be obtained by breaking gravel with a hammer, and gravel can be obtained by breaking a cobblestone with a hammer."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}, {size: 90, item:{id: ItemID.rare_lbag}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("The breadwinner!"), size: 35},
			{text: Translation.translate("Mine all types of gravel ore or sand or dust. Sift gravel or sand and craft ore from fragments of ore. Sand can be obtained by breaking gravel with a hammer, and gravel can be obtained by breaking a cobblestone with a hammer."), size: 15},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.legendary_lbag}}, {size: 90, item:{id: ItemID.rare_lbag}}]}
		],
		right: [
			{text: Translation.translate("done"), size: 25}
		]
	}
});
addLoot("skyblock", "gl", "ingots", [ItemID.legendary_lbag, ItemID.rare_lbag]);

});







