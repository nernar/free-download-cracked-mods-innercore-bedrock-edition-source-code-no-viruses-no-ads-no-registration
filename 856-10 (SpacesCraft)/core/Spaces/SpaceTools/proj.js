/*IDRegistry.genItemID("compactable_computer"); 
Item.createItem("compactable_computer", "Mobile Computer", {name: "Compact computer", meta: 0}, {stack: 1});
//IAHelper.makeAdvancedAnim(ItemID.compactable_computer, "proj", 1, [1, 2, 3, 4, 5]);
Translation.addTranslation("Mobile Computer", {
ru: "Электронное руководство"
});
Item.registerUseFunction("compactable_computer",function(coords, item, block, player) {
ScrutinyAPI.open(player, "SpacesCraftTab");
});*/
ScrutinyAPI.register("SpacesCraftTab", {
	frame: "projframe",
	dscrFrame: "classic_tab_up_light_left",
	closeButtonFrame: "tab_up_close_button",
	default_tab: "projframe",
});
//Табы,вкладки по-другому
ScrutinyAPI.setTab("SpacesCraftTab", "Beginning", {
	title: Translation.translate("Beginning"),
	id: 0,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.oxygen_compressor,
	auto_size: true 
});
ScrutinyAPI.setTab("SpacesCraftTab", "Moon", {
	title: Translation.translate("Moon adventures"),
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.moon_top_side||0,
	auto_size: true 
});
Translation.addTranslation("Moon adventures", {
	ru: "Лунные приключения"
});
ScrutinyAPI.setTab("SpacesCraftTab", "Mars", {
	title: Translation.translate("Mars adventures"),
	id: 2,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.mars_stone||0,
	auto_size: true 
});


ScrutinyAPI.setTab("SpacesCraftTab", "Venus", {
	title: Translation.translate("Venus adventures"),
	id: 3,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.venus_rock_2 ||0,
	auto_size: true 
});

ScrutinyAPI.setTab("SpacesCraftTab", "Asteroids", {
	title: Translation.translate("Asteroids"),
	id: 4,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.ore_iron_asteroids ||0,
	auto_size: true 
});

ScrutinyAPI.setTab("SpacesCraftTab", "Coiper belt", {
	title: Translation.translate("Coiper belt"),
	id: 8,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.arkanite_ore ||0,
	auto_size: true 
});

ScrutinyAPI.setTab("SpacesCraftTab", "Schematic", {
	title: Translation.translate("Schematic"),
	id: 6,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: ItemID.schematic_rocket_2 ||0,
	auto_size: true 
});

ScrutinyAPI.setTab("SpacesCraftTab", "Oxygen gear", {
	title: Translation.translate("Oxygen gear"),
	id: 7,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: ItemID.oxygentank_heavyfull ||0,
	auto_size: true 
});

ScrutinyAPI.setTab("SpacesCraftTab", "Others", {
	title: Translation.translate("Others"),
	id: 8,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: ItemID.wafer_advanced ||0,
	auto_size: true 
});

ScrutinyAPI.setScrutiny("SpacesCraftTab", "Beginning", "Ores", {
	name: Translation.translate("Get copper ore"),
	size: 90,
	cellX: 1,//1,
	cellY: 1,//2,
	icon: {
		id: ItemID.ingot_copper_sc
	},
	book_pre: {
		left: [
			{text: Translation.translate("Get copper ore"), size: 35},
			{text: Translation.translate("reward:"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: VanillaItemID.iron_ingot}}]}
		]
	},
	book_post: {
		left: [
         			{text: Translation.translate("Get copper ore"), size: 35},
			{text: Translation.translate("Completed"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: VanillaItemID.iron_ingot}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});



ScrutinyAPI.setScrutiny("SpacesCraftTab", "Beginning", "First wire", {
	name: Translation.translate("You can get first cable"),
	size: 90,
	cellX: 2,//1,
	cellY: 1,//2,
	icon: {
		id: ItemID.aluminum_bare_wire
	},
	book_pre: {
		left: [
			{text: Translation.translate("You can craft this first wire"),size: 35},
			{text: Translation.translate("And this wire"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.copper_bare_wire}}]}
		]
	},
	book_post: {
		left: [
         			{text: Translation.translate("Super,you craft this wire!"), size: 35},
			{text: Translation.translate("And this wire"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.copper_bare_wire}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});


ScrutinyAPI.setScrutiny("SpacesCraftTab", "Beginning", "Coal generator", {
	name: Translation.translate("Coal generator"),
	size: 90,
	cellX: 3,//1,
	cellY: 1,//2,
	icon: {
		id: BlockID.coal_generator
	},
	book_pre: {
		left: [
			{text: Translation.translate("You need craft coal generator to get energy"),size: 35},
			{text: Translation.translate("And you need coal"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: VanillaItemID.coal}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("You need craft coal generator to get energy"),size: 35},
			{text: Translation.translate("And you need coal"), size: 25},

			{type: "slot", slots: [{size: 90, item:{id: VanillaItemID.coal}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});


ScrutinyAPI.setScrutiny("SpacesCraftTab", "Beginning", "Circuit Fabricator", {
	name: Translation.translate("Circuit fabricator"),
	size: 90,
	cellX: 4,//1,
	cellY: 1,//2,
	icon: {
		id: BlockID.circuit_fabricator
	},
	book_pre: {
		left: [
			{text: Translation.translate("Circuit fabricator using for crafting item to Workbench NASA"),size: 35},
			{text: Translation.translate("You can craft wafers"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.wafer_advanced}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Circuit fabricator using for crafting item to Workbench NASA"),size: 35},
			{text: Translation.translate("You can craft wafers"), size: 25},

			{type: "slot", slots: [{size: 90, item:{id: ItemID.wafer_advanced}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});


ScrutinyAPI.setScrutiny("SpacesCraftTab", "Beginning", "Compressor", {
	name: Translation.translate("Compressor"),
	size: 90,
	cellX: 5,//1,
	cellY: 1,//2,
	icon: {
		id: BlockID.compressor_sj
	},
	book_pre: {
		left: [
			{text: Translation.translate("Compressor using for compressing ingots"),size: 35},

			{type: "slot", slots: [{size: 90, item:{id: ItemID.compressed_steel}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("Compressor using for compressing ingots"),size: 35},
			

			{type: "slot", slots: [{size: 90, item:{id: ItemID.compressed_steel}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});

ScrutinyAPI.setScrutiny("SpacesCraftTab", "Others", "Tinted glass", {
	name: Translation.translate("Tinted glass"),
	size: 90,
	cellX: 1,//1,
	cellY: 1,//2,
	icon: {
		id: BlockID.tinted_glass_pane_green
	},
	book_pre: {
		left: [
			{text: Translation.translate("You can craft more colors of tinted glass"),size: 35},
	{text: Translation.translate("And you can craft tinted glass plane"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: BlockID.tinted_glass_plane_green}}]}
		]
	},
	book_post: {
		left: [
			{text: Translation.translate("You can craft more colors of tinted glass"),size: 35},
					
			{text: Translation.translate("And you can craft tinted glass plane"), size: 25},

			{type: "slot", slots: [{size: 90, item:{id: BlockID.tinted_glass_plane_green}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});


ScrutinyAPI.setScrutiny("SpacesCraftTab", "Schematic", "Rocket of 2 level", {
	name: Translation.translate("First schema"),
	size: 90,
	cellX: 1,//1,
	cellY: 1,//2,
	icon: {
		id: ItemID.schematic_rocket_2
	},
	book_pre: {
		left: [
			{text: Translation.translate("In order to get a level 2 rocket diagram, you need to get into an abandoned shelter on the moon, and pick up a schema from the chest"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.schematic_rocket_2
			}}]}
		]
	},
	book_post: {
		left: [
         			{text: Translation.translate("In order to get a level 2 rocket diagram, you need to get into an abandoned shelter on the moon, and pick up a schema from the chest"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.schematic_rocket_2}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});




ScrutinyAPI.setScrutiny("SpacesCraftTab", "Schematic", "Rocket of 3 level", {
	name: Translation.translate("Second schema"),
	size: 90,
	cellX: 2,//1,
	cellY: 1,//2,
	icon: {
		id: ItemID.schematic_rocket_3
	},
	book_pre: {
		left: [
			{text: Translation.translate("In order to get a level 3 rocket diagram, you need to get into an abandoned shelter on the mars, and pick up a schema from the chest"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.schematic_rocket_3
			}}]}
		]
	},
	book_post: {
		left: [
         			{text: Translation.translate("In order to get a level 2 rocket diagram, you need to get into an abandoned shelter on the mars, and pick up a schema from the chest"), size: 25},
			{type: "slot", slots: [{size: 90, item:{id: ItemID.schematic_rocket_3}}]}
		],
		right: [
			{text: Translation.translate("Done"), size: 25}
		]
	}
});


//addLoot("SpacesCraftTab", "Beginning", "Ores", [VanillaItemID.iron_ingot]);

Translation.addTranslation("reward:", {
	ru:"Награда:"
})
Translation.addTranslation("Done", {
	ru:"Найдено"
});

Translation.addTranslation("Completed", {
	ru:"Получено"
});

Translation.addTranslation("Beginning", {
	ru:"Начало"
})

Translation.addTranslation("Get copper ore", {
	ru:"Получи первую медную руду"
})

Translation.addTranslation("Mars adventures", {
	ru: "Марсианские приключения"
});

Translation.addTranslation("Venus adventures", {
	ru: "Венерианские приключения"
});

Translation.addTranslation("Asteroids", {
	ru: "Астероиды"
});

Translation.addTranslation("Coiper belt", {
	ru: "Пояс Койпера"
});

Translation.addTranslation("Schematic", {
	ru: "Схемы"
});

Translation.addTranslation("Oxygen gear", {
	ru: "Кислородное оборудование"
});

Translation.addTranslation("You can get first wire", {
	ru: "Ты можешь смастерить первый провод"
});


Translation.addTranslation("First wire", {
	ru: "Первый провод"
});

Translation.addTranslation("You can craft this first wire", {
	ru: "Первый провод который ты сможешь смастерить"
});

Translation.addTranslation("Super,you craft this wire!", {
	ru: "Отлично!Теперь у тебя есть первый провод"
});

Translation.addTranslation("Rocket of 2 level", {
	ru: "Ракета 2го уровня"
});

Translation.addTranslation("First schema", {ru: "Первая схема"})
Translation.addTranslation("In order to get a level 2 rocket diagram, you need to get into an abandoned shelter on the moon, and pick up a schema from the chest", {
	ru: "Для того чтобы заполучить чертёж ракеты 2го уровня,тебе нужно пробраться в заброшенный бункер на луне и забрать чертёж из сундука"
});

Translation.addTranslation("Second schema", {ru: "Первая схема"})
Translation.addTranslation("In order to get a level 3 rocket diagram, you need to get into an abandoned shelter on the mars, and pick up a schema from the chest", {
	ru: "Для того чтобы заполучить чертёж ракеты 3го уровня,тебе нужно пробраться в заброшенный бункер на Марсе и забрать чертёж из сундука"
});

Translation.addTranslation("Rocket of 3 level", {
	ru: "Ракета 3го уровня"
});

Translation.addTranslation("And this wire", {
	ru: "И более дешёвый аналог провода"
});

Translation.translate("You need craft coal generator to get energy", {
    ru: "Тебе нужно смастерить угольный генератор для получения энергии"
})

Translation.addTranslation("And you need coal", {
	ru: "И тебе нужен уголь"
});



Translation.addTranslation("Circuit fabricator using for crafting item to Workbench NASA", {
	ru: "Производитель микросхем используют для предметов крафта верстака НАСА"
});

Translation.addTranslation("You can craft wafers", {
	ru: "Ты можешь скрафтить пластины"
});

Translation.addTranslation("Circuit fabricator", {
	ru: "Производитель микросхем"
});

Translation.addTranslation("Compressor", {
	ru: "Компрессор"
});

Translation.addTranslation("Others", {
	ru: "Другое"
});


Translation.addTranslation("Compressor using for compressing ingots", {
	ru: "Компрессор используют для сжатия слитков"
});
Translation.addTranslation("You can craft more colors of tinted glass", {
	ru: "Ты можешь скрафтить множество цветов тонированного стекла"
});

Translation.addTranslation("And you can craft tinted glass plane", {
	ru: "И ты можешь скрафтить панели из тонированного стекла"
});