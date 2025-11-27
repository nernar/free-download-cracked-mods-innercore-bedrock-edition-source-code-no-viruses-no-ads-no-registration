Block.createSpecialType({
    base: 17,
    solid: true,
    destroytime: 2,
    explosionres: 10,
    lightopacity: 0,
    renderlayer: 0,
    translucency: 0,
    sound: "wood"
}, "wood");
Translation.addTranslation("Christmas tree", {
	ru: "Новогодняя ёлка",
})
IDRegistry.genBlockID("ChristmasTree");
Block.createBlockWithRotation("ChristmasTree", [{name:"Christmas tree", texture: [["log_spruce", 0]], inCreative: true}
],"wood");

model.setBlockModel(BlockID.ChristmasTree, 0);
Translation.addTranslation("skyblock.holiday", {
	ru: "Праздники",
	en: "Holidays"
})
ScrutinyAPI.setTab("skyblock", "holiday", {
	title: Translation.translate("skyblock.holiday"),
	id: 6,
	frame: "classic_tab_right_light_up",
	frame2: "classic_tab_right_dark_up",
	icon: BlockID.ChristmasTree,
 auto_size: true
});

ScrutinyAPI.setScrutiny("skyblock", "holiday", "new_year", {
	name: "С новым годом!",
	size: 90,
	cellX: 1,
	cellY: 1,
	icon: {
		id: BlockID.ChristmasTree
	},
	book_pre: {
		left: [
			{text: "Новогодние праздники", size: 35},
			{text: "Войдите в игру в новогодние праздники. Нажмите на ёлку чтобы забрать ежедневнный Новогодний подарок.", size: 15},
			{text: "награда:", size: 25},
			{type: "slot", slots: [{size: 90, item:{id: BlockID.ChristmasTree}}]}
		]
	},
	book_post: {
		left: [
			{text: "Новогодние праздники", size: 35},
			{text: "Войдите в игру в новогодние праздники. Нажмите на ёлку чтобы забрать ежедневнный Новогодний подарок.", size: 15},
			{text: "награда:", size: 25},
			{type: "slot", slots: [{size: 90, item:{id: BlockID.ChristmasTree}}]}
		],
		right: [
			{text: "выполнено", size: 25}
		]
	}
});
addLoot("skyblock", "holiday", "new_year", [BlockID.ChristmasTree]);

let day_now = -1;
let day = {};
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	let date = new Date();
	if(block.id == BlockID.ChristmasTree && day_now != day[player] && (date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10)){
		let arr = RareBag.getItemsRandom();
		let region = BlockSource.getDefaultForActor(player); 
		for(let i in arr)
			region.spawnDroppedItem(coords.x, coords.y+1, coords.z, arr[i].id, arr[i].count, arr[i].data, arr[i].extra);
		day[player] = day_now;
	}
});
Callback.addCallback("ServerPlayerTick", function(player){
	if(World.getThreadTime() % 500 == 0){
		let date = new Date();
		if(date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10)
			ScrutinyAPI_V1.giveScrutiny(player, "skyblock", "holiday", "new_year", true);
		day_now = date.getDate();
	}
});
