ModAPI.addAPICallback("GuideAPI", function(api){
	const GuideAPI = api.GuideAPI;
	const GuideHelper = api.GuideHelper;
	const PageControllers = api.PageControllers;
     
	IDRegistry.genItemID("book_of_sticks");
Item.createItem("book_of_sticks", "Book Of Sticks", {name: "book_of_sticks", meta: 0}, {stack: 64});
	
	GuideAPI.registerGuide("guideTest", {
		item: ItemID.book_of_sticks,
		//debug: true,
		/*textures: {
			background: "test_bg_guide",
			nextLink: "next_page_test",
			preLink: "pre_page_test",
			close: "btn_close_test",
		},*/
		pages: {
			"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Basic Material", size: 30, color: android.graphics.Color.BLUE},
						{text: "Wood", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: 0"},
					{text: "Max uses: 59"},
					{text: "Efficiency: 2"},
					{text: "Damage: 0"},
					{text: "Enchantability: 15"},
					{text: "______________________"},
					{text: "Stone", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: 1"},
					{text: "Max uses: 131"},
					{text: "Efficiency: 4"},
					{text: "Damage: 1"},
					{text: "Enchantability: 5"},
					{text: "______________________"},
					{text: "Iron", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: 2"},
					{text: "Max uses: 250"},
					{text: "Efficiency: 6"},
					{text: "Damage: 2"},
					{text: "Enchantability: 14"},
					
					]
				},
					
				right: {
					controller: PageControllers.BASIC_PAGE,
			
				    elements: [
						{text: "Gold", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: 0"},
					{text: "Max uses: 32"},
					{text: "Efficiency: 12"},
					{text: "Damage: 0"},
					{text: "Enchantability: 22"},
					{text: "______________________"},
					{text: "Diamond", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: 3"},
					{text: "Max uses: 1561"},
					{text: "Efficiency: 8"},
					{text: "Damage: 3"},
					{text: "Enchantability: 10"},
					]
				}
			},
			
			"test": {
				preLink: "default",
				nextLink: "test2",
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
												{text: "Emerald", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +100"},
					{text: "Efficiency: +1.3"},
					{text: "Damage: +0.7"},
					{text: "Enchantability: +10"},
					{text: "______________________"},
					{text: "Bone", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +15"},
					{text: "Efficiency: +4"},
					{text: "Damage: +0"},
					{text: "Enchantability: +3"},
					{text: "______________________"},
					{text: "Redstone", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +0"},
					{text: "Efficiency: +0.5"},
					{text: "Damage: +0.8"},
					{text: "Enchantability: +3"},
						
					]
				},
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Stick Modifier", size: 30, color: android.graphics.Color.BLUE},
						{text: "Iron", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +50"},
					{text: "Efficiency: +1"},
					{text: "Damage: +0.5"},
					{text: "Enchantability: +5"},
					{text: "______________________"},
					{text: "Gold", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +0"},
					{text: "Efficiency: +5"},
					{text: "Damage: +0"},
					{text: "Enchantability: +10"},
					{text: "______________________"},
					{text: "Diamond", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +150"},
					{text: "Efficiency: +1.5"},
					{text: "Damage: +0.8"},
					{text: "Enchantability: +5"},
					]
				},
			},
			
			"test2": {
				preLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Quartz", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +20"},
					{text: "Efficiency: +3"},
					{text: "Damage: +0.3"},
					{text: "Enchantability: +8"},
					{text: "______________________"},
					{text: "Blazerod", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +45"},
					{text: "Efficiency: +3"},
					{text: "Damage: +0"},
					{text: "Enchantability: +10"},
					{text: "______________________"},
					{text: "Endrod", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +70"},
					{text: "Efficiency: +6"},
					{text: "Damage: +0.5"},
					{text: "Enchantability: +6"},
						
					]
				},
				
				right: {
				    controller: PageControllers.BASIC_PAGE,
                    elements: [
						{text: "Advanced", size: 20, color: android.graphics.Color.RED},
					{text: "Harvest Lvl: x"},
					{text: "Max uses: +180"},
					{text: "Efficiency: +2"},
					{text: "Damage: +1.0"},
					{text: "Enchantability: +6"},
						
					]
				}
			}
		}
	});
	
});

