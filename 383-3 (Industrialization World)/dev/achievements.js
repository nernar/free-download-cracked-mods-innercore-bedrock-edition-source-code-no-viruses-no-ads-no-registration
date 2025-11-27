var AchievementAPI;
ModAPI.addAPICallback("AchievementsAPI", function (api) {
	AchievementAPI = api.AchievementAPI;
	api.AchievementAPI.registerGroup({ 
		unique: "industrializationWorld", 
		name: "Industrialization World", 
		width: 600, 
		height: 250, 
		size: 100, 
		bgTexture: "bg_0", 
		icon: { 
			id: ItemID.indWorld
		} 
	});
});