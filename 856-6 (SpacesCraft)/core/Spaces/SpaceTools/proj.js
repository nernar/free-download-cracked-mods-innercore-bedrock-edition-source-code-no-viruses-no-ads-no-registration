IDRegistry.genItemID("compactable_computer"); 
Item.createItem("compactable_computer", "Mobile Computer", {name: "Mobile Computer", meta: 1}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.compactable_computer, "proj", 1, [1, 2, 3, 4, 5]);
Translation.addTranslation("Mobile Computer", {
ru: "Портативный компьютер(A#%R+-Tēm8{}oN$)"
});
Item.registerUseFunction("compactable_computer",function(coords, item, block, player) {
ScrutinyAPI.open(player, "SpacesCraftTab");
});
//Future pack? Questions?Задачи?
//может быть
ScrutinyAPI.register("SpacesCraftTab", {
	frame: "projframe",
	dscrFrame: "classic_tab_up_light_left",
	closeButtonFrame: "tab_up_close_button",
	default_tab: "projframe",
});
//Табы,вкладки по-другому
ScrutinyAPI.setTab("SpacesCraftTab", "projframe", {
	title: Translation.translate("Beginning"),
	id: 0,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.oxygen_compressor,
	auto_size: true 
});
Translation.addTranslation("Beginning", {
	ru: "Начало"
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
	id: 1,
	frame: "classic_tab_left_light",
	frame2: "classic_tab_left_dark",
	onTouchFrame: "classic_tab_left_dark",
	icon: BlockID.mars_stone||0,
	auto_size: true 
});
Translation.addTranslation("Mars adventures", {
	ru: "Марсианские приключения"
});