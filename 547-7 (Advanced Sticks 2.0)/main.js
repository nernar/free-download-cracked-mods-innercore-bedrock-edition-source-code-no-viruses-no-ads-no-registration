ModAPI.addAPICallback("GuideAPI", function(api){
	const GuideAPI = api.GuideAPI;
	const GuideHelper = api.GuideHelper;
	const PageControllers = api.PageControllers;


IDRegistry.genItemID("book_of_sticks");
Item.createItem("book_of_sticks", "Book Of Sticks", {name: "book_of_sticks", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.book_of_sticks, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "
], ['a', 280, 0, 'b', 340, 0]);

IDRegistry.genBlockID("plakat");
Block.createBlock("plakat", [
	{name: "Plakat", texture: [["plakat", 0]], inCreative: false},
	{name: "Plakat", texture: [["plakat", 0]], inCreative: true},
	{name: "Plakat", texture: [["plakat", 0]], inCreative: false},
	{name: "Plakat", texture: [["plakat", 0]], inCreative: false},
	{name: "Plakat", texture: [["plakat", 0]], inCreative: false},
	{name: "Plakat", texture: [["plakat", 0]], inCreative: false}
], "part");

Block.setBlockShape(BlockID.plakat, {x: 0, y: 15/16, z: 0}, {x: 1, y: 1, z: 1}, 0);
Block.setBlockShape(BlockID.plakat, {x: 0, y: 0, z: 0}, {x: 1, y: 1/16, z: 1}, 1);
Block.setBlockShape(BlockID.plakat, {x: 0, y: 0, z: 15/16}, {x: 1, y: 1, z: 1}, 2);
Block.setBlockShape(BlockID.plakat, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1/16}, 3);
Block.setBlockShape(BlockID.plakat, {x: 15/16, y: 0, z: 0}, {x: 1, y: 1, z: 1}, 4);
Block.setBlockShape(BlockID.plakat, {x: 0, y: 0, z: 0}, {x: 1/16, y: 1, z: 1}, 5);

Block.registerDropFunction("plakat", function(coords, blockID, blockData, level, enchant){
	return [[blockID, 1, 1]];
});


Block.registerPlaceFunction("plakat", function(coords, item, block){
	Game.prevent();
	var x = coords.relative.x
	var y = coords.relative.y
	var z = coords.relative.z
	block = World.getBlockID(x, y, z)
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, coords.side);
		World.addTileEntity(x, y, z);
	}
});



Recipes.addShaped({id: BlockID.plakat, count: 1, data: 0}, [
	"",
	"a",
	""
], ['a', ItemID.book_of_sticks, 0]);

Recipes.addShaped({id: ItemID.book_of_sticks, count: 1, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.plakat, 0]);


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









IDRegistry.genItemID("bough");
Item.createItem("bough", "Bough", {name: "bough", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.bough, count: 1, data: 0}, [
	"",
	"a",
	""
], ['a', 18, -1]);

Recipes.addShaped({id: 280, count: 4, data: 0}, [
	"a",
	"a",
	"a"
], ['a', ItemID.bough, 0]);



IDRegistry.genItemID("stickAdvanced");
Item.createItem("stickAdvanced", "Stick Advanced", {name: "stick_advanced", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickAdvanced, count: 4, data: 0}, [
	"a",
	"b",
	"a"
], ['a', 264, 0, 'b', 265, 0]);

IDRegistry.genItemID("stickBone");
Item.createItem("stickBone", "Stick Bone", {name: "stick_bone", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickBone, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 352, 0]);

IDRegistry.genItemID("stickdiamond");
Item.createItem("stickdiamond", "Stick Diamond", {name: "stick_diamond", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickdiamond, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 264, 0]);

IDRegistry.genItemID("stickemerald");
Item.createItem("stickemerald", "Stick Emerald", {name: "stick_emerald", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickemerald, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 388, 0]);

IDRegistry.genItemID("stickend");
Item.createItem("stickend", "Stick End", {name: "stick_end", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickend, count: 2, data: 0}, [
	" ",
	"a",
	" "
], ['a', 208, 0]);

IDRegistry.genItemID("stickgold");
Item.createItem("stickgold", "Stick Gold", {name: "stick_gold", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickgold, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 266, 0]);

IDRegistry.genItemID("stickiron");
Item.createItem("stickiron", "Stick Iron", {name: "stick_iron", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickiron, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 265, 0]);

IDRegistry.genItemID("stickquartz");
Item.createItem("stickquartz", "Stick Quartz", {name: "stick_quartz", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickquartz, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 406, 0]);

IDRegistry.genItemID("stickredstone");
Item.createItem("stickredstone", "Stick Redstone", {name: "stick_redstone", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stickredstone, count: 2, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 331, 0, 'b', 280, 0]);










IDRegistry.genItemID("longstickAdvanced");
Item.createItem("longstickAdvanced", "Long Stick Advanced", {name: "longstick_advanced", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickAdvanced, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickAdvanced, 0]);

IDRegistry.genItemID("longBlazerod");
Item.createItem("longBlazerod", "Long Blaze Rod", {name: "long_blazerod", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longBlazerod, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 369, 0]);

IDRegistry.genItemID("longstickBone");
Item.createItem("longstickBone", "Long Stick Bone", {name: "longstick_bone", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickBone, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickBone, 0]);

IDRegistry.genItemID("longstickdiamond");
Item.createItem("longstickdiamond", "Long Stick Diamond", {name: "longstick_diamond", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickdiamond, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickdiamond, 0]);

IDRegistry.genItemID("longstickemerald");
Item.createItem("longstickemerald", "Long Stick Emerald", {name: "longstick_emerald", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickemerald, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickemerald, 0]);

IDRegistry.genItemID("longstickend");
Item.createItem("longstickend", "Long Stick End", {name: "longstick_end", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickend, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickend, 0]);

IDRegistry.genItemID("longstickgold");
Item.createItem("longstickgold", "Long Stick Gold", {name: "longstick_gold", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickgold, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickgold, 0]);

IDRegistry.genItemID("longstickiron");
Item.createItem("longstickiron", "Long Stick Iron", {name: "longstick_iron", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickiron, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickiron, 0]);

IDRegistry.genItemID("longstickquartz");
Item.createItem("longstickquartz", "Long Stick Quartz", {name: "longstick_quartz", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickquartz, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickquartz, 0]);

IDRegistry.genItemID("longstickredstone");
Item.createItem("longstickredstone", "Long Stick Redstone", {name: "longstick_redstone", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickredstone, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', ItemID.stickredstone, 0]);

IDRegistry.genItemID("longstickwood");
Item.createItem("longstickwood", "Long Stick Wood", {name: "longstick_wood", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.longstickwood, count: 4, data: 0}, [
	"a",
	"a",
	" "
], ['a', 280, 0]);





IDRegistry.genBlockID("blockadvanced");
Block.createBlockWithRotation("blockadvanced", [
	{name: "Block Of Advanced Sticks", texture: [["advanced1", 0], ["advanced1", 0], ["advanced2", 0], ["advanced2", 0], ["advanced2", 0], ["advanced2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockadvanced, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.stickAdvanced, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockadvanced, 0]);

IDRegistry.genBlockID("blockbone");
Block.createBlockWithRotation("blockbone", [
	{name: "Block Of Bone Sticks", texture: [["bone1", 0], ["bone1", 0], ["bone2", 0], ["bone2", 0], ["bone2", 0], ["bone2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockbone, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.stickBone, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockbone, 0]);

IDRegistry.genBlockID("blockdiamond");
Block.createBlockWithRotation("blockdiamond", [
	{name: "Block Of Diamond Sticks", texture: [["diamond1", 0], ["diamond1", 0], ["diamond2", 0], ["diamond2", 0], ["diamond2", 0], ["diamond2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockdiamond, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.stickdiamond, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockdiamond, 0]);

IDRegistry.genBlockID("blockemerald");
Block.createBlockWithRotation("blockemerald", [
	{name: "Block Of Emerald Sticks", texture: [["emerald1", 0], ["emerald1", 0], ["emerald2", 0], ["emerald2", 0], ["emerald2", 0], ["emerald2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockemerald, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.stickemerald, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockemerald, 0]);

IDRegistry.genBlockID("blockgold");
Block.createBlockWithRotation("blockgold", [
	{name: "Block Of Gold Sticks", texture: [["gold1", 0], ["gold1", 0], ["gold2", 0], ["gold2", 0], ["gold2", 0], ["gold2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockgold, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.stickgold, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockgold, 0]);

IDRegistry.genBlockID("blockiron");
Block.createBlockWithRotation("blockiron", [
	{name: "Block Of Iron Sticks", texture: [["iron1", 0], ["iron1", 0], ["iron2", 0], ["iron2", 0], ["iron2", 0], ["iron2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockiron, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.stickiron, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockiron, 0]);

IDRegistry.genBlockID("blockquartz");
Block.createBlockWithRotation("blockquartz", [
	{name: "Block Of Quartz Sticks", texture: [["quartz1", 0], ["quartz1", 0], ["quartz2", 0], ["quartz2", 0], ["quartz2", 0], ["quartz2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockquartz, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.stickquartz, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockquartz, 0]);

IDRegistry.genBlockID("blockredstone");
Block.createBlockWithRotation("blockredstone", [
	{name: "Block Of Redstone Sticks", texture: [["redstone1", 0], ["redstone1", 0], ["redstone2", 0], ["redstone2", 0], ["redstone2", 0], ["redstone2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockredstone, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.stickredstone, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockredstone, 0]);

IDRegistry.genBlockID("blockwood");
Block.createBlockWithRotation("blockwood", [
	{name: "Block Of Wood Sticks", texture: [["wood1", 0], ["wood1", 0], ["wood2", 0], ["wood2", 0], ["wood2", 0], ["wood2", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blockwood, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', 280, 0]);

Recipes.addShaped({id: 280, count: 9, data: 0}, [
	"",
	"a",
	""
], ['a', BlockID.blockwood, 0]);








importLib("ToolType", "*");








IDRegistry.genItemID("advanced_stick_wood_sword");
IDRegistry.genItemID("advanced_stick_wood_shovel");
IDRegistry.genItemID("advanced_stick_wood_pickaxe");
IDRegistry.genItemID("advanced_stick_wood_axe");
IDRegistry.genItemID("advanced_stick_wood_hoe");

Item.createItem("advanced_stick_wood_sword", "Advanced Stick Wood Sword", {name: "advanced_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_wood_shovel", "Advanced Stick Wood Shovel", {name: "advanced_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_wood_pickaxe", "Advanced Stick Wood Pickaxe", {name: "advanced_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_wood_axe", "Advanced Stick Wood Axe", {name: "advanced_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_wood_hoe", "Advanced Stick Wood Hoe", {name: "advanced_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("AdvancedWood", {durability: 240, level: 1, efficiency: 4, damage: 5, enchantability: 21});
ToolAPI.setTool(ItemID.advanced_stick_wood_sword, "AdvancedWood", ToolType.sword);
ToolAPI.setTool(ItemID.advanced_stick_wood_shovel, "AdvancedWood", ToolType.shovel);
ToolAPI.setTool(ItemID.advanced_stick_wood_pickaxe, "AdvancedWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.advanced_stick_wood_axe, "AdvancedWood", ToolType.axe);
ToolAPI.setTool(ItemID.advanced_stick_wood_hoe, "AdvancedWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.advanced_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickAdvanced, 0]);










IDRegistry.genItemID("advanced_stick_stone_sword");
IDRegistry.genItemID("advanced_stick_stone_shovel");
IDRegistry.genItemID("advanced_stick_stone_pickaxe");
IDRegistry.genItemID("advanced_stick_stone_axe");
IDRegistry.genItemID("advanced_stick_stone_hoe");

Item.createItem("advanced_stick_stone_sword", "Advanced Stick Stone Sword", {name: "advanced_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_stone_shovel", "Advanced Stick Stone Shovel", {name: "advanced_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_stone_pickaxe", "Advanced Stick Stone Pickaxe", {name: "advanced_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_stone_axe", "Advanced Stick Stone Axe", {name: "advanced_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_stone_hoe", "Advanced Stick Stone Hoe", {name: "advanced_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("AdvancedStone", {durability: 312, level: 2, efficiency: 6, damage: 6, enchantability: 11});
ToolAPI.setTool(ItemID.advanced_stick_stone_sword, "AdvancedStone", ToolType.sword);
ToolAPI.setTool(ItemID.advanced_stick_stone_shovel, "AdvancedStone", ToolType.shovel);
ToolAPI.setTool(ItemID.advanced_stick_stone_pickaxe, "AdvancedStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.advanced_stick_stone_axe, "AdvancedStone", ToolType.axe);
ToolAPI.setTool(ItemID.advanced_stick_stone_hoe, "AdvancedStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.advanced_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickAdvanced, 0]);












IDRegistry.genItemID("advanced_stick_iron_sword");
IDRegistry.genItemID("advanced_stick_iron_shovel");
IDRegistry.genItemID("advanced_stick_iron_pickaxe");
IDRegistry.genItemID("advanced_stick_iron_axe");
IDRegistry.genItemID("advanced_stick_iron_hoe");

Item.createItem("advanced_stick_iron_sword", "Advanced Stick Iron Sword", {name: "advanced_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_iron_shovel", "Advanced Stick Iron Shovel", {name: "advanced_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_iron_pickaxe", "Advanced Stick Iron Pickaxe", {name: "advanced_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_iron_axe", "Advanced Stick Iron Axe", {name: "advanced_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_iron_hoe", "Advanced Stick Iron Hoe", {name: "advanced_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("AdvancedIron", {durability: 431, level: 3, efficiency: 8, damage: 7, enchantability: 20});
ToolAPI.setTool(ItemID.advanced_stick_iron_sword, "AdvancedIron", ToolType.sword);
ToolAPI.setTool(ItemID.advanced_stick_iron_shovel, "AdvancedIron", ToolType.shovel);
ToolAPI.setTool(ItemID.advanced_stick_iron_pickaxe, "AdvancedIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.advanced_stick_iron_axe, "AdvancedIron", ToolType.axe);
ToolAPI.setTool(ItemID.advanced_stick_iron_hoe, "AdvancedIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.advanced_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickAdvanced, 0]);






IDRegistry.genItemID("advanced_stick_diamond_sword");
IDRegistry.genItemID("advanced_stick_diamond_shovel");
IDRegistry.genItemID("advanced_stick_diamond_pickaxe");
IDRegistry.genItemID("advanced_stick_diamond_axe");
IDRegistry.genItemID("advanced_stick_diamond_hoe");

Item.createItem("advanced_stick_diamond_sword", "Advanced Stick Diamond Sword", {name: "advanced_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_diamond_shovel", "Advanced Stick Diamond Shovel", {name: "advanced_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_diamond_pickaxe", "Advanced Stick Diamond Pickaxe", {name: "advanced_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_diamond_axe", "Advanced Stick Diamond Axe", {name: "advanced_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_diamond_hoe", "Advanced Stick Diamond Hoe", {name: "advanced_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("Advanceddiamond", {durability: 1741, level: 4, efficiency: 10, damage: 8, enchantability: 16});
ToolAPI.setTool(ItemID.advanced_stick_diamond_sword, "Advanceddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.advanced_stick_diamond_shovel, "Advanceddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.advanced_stick_diamond_pickaxe, "Advanceddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.advanced_stick_diamond_axe, "Advanceddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.advanced_stick_diamond_hoe, "Advanceddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.advanced_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickAdvanced, 0]);








IDRegistry.genItemID("advanced_stick_gold_sword");
IDRegistry.genItemID("advanced_stick_gold_shovel");
IDRegistry.genItemID("advanced_stick_gold_pickaxe");
IDRegistry.genItemID("advanced_stick_gold_axe");
IDRegistry.genItemID("advanced_stick_gold_hoe");

Item.createItem("advanced_stick_gold_sword", "Advanced Stick Gold Sword", {name: "advanced_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_gold_shovel", "Advanced Stick Gold Shovel", {name: "advanced_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_gold_pickaxe", "Advanced Stick Gold Pickaxe", {name: "advanced_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_gold_axe", "Advanced Stick Gold Axe", {name: "advanced_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("advanced_stick_gold_hoe", "Advanced Stick Gold Hoe", {name: "advanced_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("AdvancedGold", {durability: 213, level: 2, efficiency: 14, damage: 5, enchantability: 28});
ToolAPI.setTool(ItemID.advanced_stick_gold_sword, "AdvancedGold", ToolType.sword);
ToolAPI.setTool(ItemID.advanced_stick_gold_shovel, "AdvancedGold", ToolType.shovel);
ToolAPI.setTool(ItemID.advanced_stick_gold_pickaxe, "AdvancedGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.advanced_stick_gold_axe, "AdvancedGold", ToolType.axe);
ToolAPI.setTool(ItemID.advanced_stick_gold_hoe, "AdvancedGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.advanced_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickAdvanced, 0]);

Recipes.addShaped({id: ItemID.advanced_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickAdvanced, 0]);







IDRegistry.genItemID("blazerod_wood_sword");
IDRegistry.genItemID("blazerod_wood_shovel");
IDRegistry.genItemID("blazerod_wood_pickaxe");
IDRegistry.genItemID("blazerod_wood_axe");
IDRegistry.genItemID("blazerod_wood_hoe");

Item.createItem("blazerod_wood_sword", "Blazerod Wood Sword", {name: "blazerod_wood_sword", meta: 0}, {stack: 1});
Item.createItem("blazerod_wood_shovel", "Blazerod Wood Shovel", {name: "blazerod_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("blazerod_wood_pickaxe", "Blazerod Wood Pickaxe", {name: "blazerod_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blazerod_wood_axe", "Blazerod Wood Axe", {name: "blazerod_wood_axe", meta: 0}, {stack: 1});
Item.createItem("blazerod_wood_hoe", "Blazerod Wood Hoe", {name: "blazerod_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("blazerodWood", {durability: 105, level: 1, efficiency: 5, damage: 4, enchantability: 25});
ToolAPI.setTool(ItemID.blazerod_wood_sword, "blazerodWood", ToolType.sword);
ToolAPI.setTool(ItemID.blazerod_wood_shovel, "blazerodWood", ToolType.shovel);
ToolAPI.setTool(ItemID.blazerod_wood_pickaxe, "blazerodWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blazerod_wood_axe, "blazerodWood", ToolType.axe);
ToolAPI.setTool(ItemID.blazerod_wood_hoe, "blazerodWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.blazerod_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', 369, 0]);










IDRegistry.genItemID("blazerod_stone_sword");
IDRegistry.genItemID("blazerod_stone_shovel");
IDRegistry.genItemID("blazerod_stone_pickaxe");
IDRegistry.genItemID("blazerod_stone_axe");
IDRegistry.genItemID("blazerod_stone_hoe");

Item.createItem("blazerod_stone_sword", "Blazerod Stone Sword", {name: "blazerod_stone_sword", meta: 0}, {stack: 1});
Item.createItem("blazerod_stone_shovel", "Blazerod Stone Shovel", {name: "blazerod_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("blazerod_stone_pickaxe", "Blazerod Stone Pickaxe", {name: "blazerod_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blazerod_stone_axe", "Blazerod Stone Axe", {name: "blazerod_stone_axe", meta: 0}, {stack: 1});
Item.createItem("blazerod_stone_hoe", "Blazerod Stone Hoe", {name: "blazerod_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("blazerodStone", {durability: 177, level: 2, efficiency: 7, damage: 5, enchantability: 15});
ToolAPI.setTool(ItemID.blazerod_stone_sword, "blazerodStone", ToolType.sword);
ToolAPI.setTool(ItemID.blazerod_stone_shovel, "blazerodStone", ToolType.shovel);
ToolAPI.setTool(ItemID.blazerod_stone_pickaxe, "blazerodStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blazerod_stone_axe, "blazerodStone", ToolType.axe);
ToolAPI.setTool(ItemID.blazerod_stone_hoe, "blazerodStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.blazerod_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', 369, 0]);












IDRegistry.genItemID("blazerod_iron_sword");
IDRegistry.genItemID("blazerod_iron_shovel");
IDRegistry.genItemID("blazerod_iron_pickaxe");
IDRegistry.genItemID("blazerod_iron_axe");
IDRegistry.genItemID("blazerod_iron_hoe");

Item.createItem("blazerod_iron_sword", "Blazerod Iron Sword", {name: "blazerod_iron_sword", meta: 0}, {stack: 1});
Item.createItem("blazerod_iron_shovel", "Blazerod Iron Shovel", {name: "blazerod_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("blazerod_iron_pickaxe", "Blazerod Iron Pickaxe", {name: "blazerod_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blazerod_iron_axe", "Blazerod Iron Axe", {name: "blazerod_iron_axe", meta: 0}, {stack: 1});
Item.createItem("blazerod_iron_hoe", "Blazerod Iron Hoe", {name: "blazerod_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("blazerodIron", {durability: 296, level: 3, efficiency: 9, damage: 6, enchantability: 24});
ToolAPI.setTool(ItemID.blazerod_iron_sword, "blazerodIron", ToolType.sword);
ToolAPI.setTool(ItemID.blazerod_iron_shovel, "blazerodIron", ToolType.shovel);
ToolAPI.setTool(ItemID.blazerod_iron_pickaxe, "blazerodIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blazerod_iron_axe, "blazerodIron", ToolType.axe);
ToolAPI.setTool(ItemID.blazerod_iron_hoe, "blazerodIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.blazerod_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', 369, 0]);






IDRegistry.genItemID("blazerod_diamond_sword");
IDRegistry.genItemID("blazerod_diamond_shovel");
IDRegistry.genItemID("blazerod_diamond_pickaxe");
IDRegistry.genItemID("blazerod_diamond_axe");
IDRegistry.genItemID("blazerod_diamond_hoe");

Item.createItem("blazerod_diamond_sword", "Blazerod Diamond Sword", {name: "blazerod_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("blazerod_diamond_shovel", "Blazerod Diamond Shovel", {name: "blazerod_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("blazerod_diamond_pickaxe", "Blazerod Diamond Pickaxe", {name: "blazerod_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blazerod_diamond_axe", "Blazerod Diamond Axe", {name: "blazerod_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("blazerod_diamond_hoe", "Blazerod Diamond Hoe", {name: "blazerod_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("blazeroddiamond", {durability: 1606, level: 4, efficiency: 11, damage: 7, enchantability: 20});
ToolAPI.setTool(ItemID.blazerod_diamond_sword, "blazeroddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.blazerod_diamond_shovel, "blazeroddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.blazerod_diamond_pickaxe, "blazeroddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blazerod_diamond_axe, "blazeroddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.blazerod_diamond_hoe, "blazeroddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.blazerod_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', 369, 0]);








IDRegistry.genItemID("blazerod_gold_sword");
IDRegistry.genItemID("blazerod_gold_shovel");
IDRegistry.genItemID("blazerod_gold_pickaxe");
IDRegistry.genItemID("blazerod_gold_axe");
IDRegistry.genItemID("blazerod_gold_hoe");

Item.createItem("blazerod_gold_sword", "Blazerod Gold Sword", {name: "blazerod_gold_sword", meta: 0}, {stack: 1});
Item.createItem("blazerod_gold_shovel", "Blazerod Gold Shovel", {name: "blazerod_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("blazerod_gold_pickaxe", "Blazerod Gold Pickaxe", {name: "blazerod_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("blazerod_gold_axe", "Blazerod Gold Axe", {name: "blazerod_gold_axe", meta: 0}, {stack: 1});
Item.createItem("blazerod_gold_hoe", "Blazerod Gold Hoe", {name: "blazerod_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("blazerodGold", {durability: 78, level: 2, efficiency: 15, damage: 5, enchantability: 32});
ToolAPI.setTool(ItemID.blazerod_gold_sword, "blazerodGold", ToolType.sword);
ToolAPI.setTool(ItemID.blazerod_gold_shovel, "blazerodGold", ToolType.shovel);
ToolAPI.setTool(ItemID.blazerod_gold_pickaxe, "blazerodGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blazerod_gold_axe, "blazerodGold", ToolType.axe);
ToolAPI.setTool(ItemID.blazerod_gold_hoe, "blazerodGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.blazerod_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.blazerod_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', 369, 0]);






IDRegistry.genItemID("bone_stick_wood_sword");
IDRegistry.genItemID("bone_stick_wood_shovel");
IDRegistry.genItemID("bone_stick_wood_pickaxe");
IDRegistry.genItemID("bone_stick_wood_axe");
IDRegistry.genItemID("bone_stick_wood_hoe");

Item.createItem("bone_stick_wood_sword", "Bone Stick Wood Sword", {name: "bone_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("bone_stick_wood_shovel", "Bone Stick Wood Shovel", {name: "bone_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("bone_stick_wood_pickaxe", "Bone Stick Wood Pickaxe", {name: "bone_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_wood_axe", "Bone Stick Wood Axe", {name: "bone_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_wood_hoe", "Bone Stick Wood Hoe", {name: "bone_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("boneWood", {durability: 75, level: 1, efficiency: 6, damage: 4, enchantability: 18});
ToolAPI.setTool(ItemID.bone_stick_wood_sword, "boneWood", ToolType.sword);
ToolAPI.setTool(ItemID.bone_stick_wood_shovel, "boneWood", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_stick_wood_pickaxe, "boneWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_stick_wood_axe, "boneWood", ToolType.axe);
ToolAPI.setTool(ItemID.bone_stick_wood_hoe, "boneWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.bone_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickBone, 0]);




IDRegistry.genItemID("bone_stick_stone_sword");
IDRegistry.genItemID("bone_stick_stone_shovel");
IDRegistry.genItemID("bone_stick_stone_pickaxe");
IDRegistry.genItemID("bone_stick_stone_axe");
IDRegistry.genItemID("bone_stick_stone_hoe");

Item.createItem("bone_stick_stone_sword", "Bone Stick Stone Sword", {name: "bone_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("bone_stick_stone_shovel", "Bone Stick Stone Shovel", {name: "bone_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("bone_stick_stone_pickaxe", "Bone Stick Stone Pickaxe", {name: "bone_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_stone_axe", "Bone Stick Stone Axe", {name: "bone_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_stone_hoe", "Bone Stick Stone Hoe", {name: "bone_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("boneStone", {durability: 147, level: 2, efficiency: 8, damage: 5, enchantability: 8});
ToolAPI.setTool(ItemID.bone_stick_stone_sword, "boneStone", ToolType.sword);
ToolAPI.setTool(ItemID.bone_stick_stone_shovel, "boneStone", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_stick_stone_pickaxe, "boneStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_stick_stone_axe, "boneStone", ToolType.axe);
ToolAPI.setTool(ItemID.bone_stick_stone_hoe, "boneStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.bone_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickBone, 0]);












IDRegistry.genItemID("bone_stick_iron_sword");
IDRegistry.genItemID("bone_stick_iron_shovel");
IDRegistry.genItemID("bone_stick_iron_pickaxe");
IDRegistry.genItemID("bone_stick_iron_axe");
IDRegistry.genItemID("bone_stick_iron_hoe");

Item.createItem("bone_stick_iron_sword", "Bone Stick Iron Sword", {name: "bone_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("bone_stick_iron_shovel", "Bone Stick Iron Shovel", {name: "bone_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("bone_stick_iron_pickaxe", "Bone Stick Iron Pickaxe", {name: "bone_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_iron_axe", "Bone Stick Iron Axe", {name: "bone_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_iron_hoe", "Bone Stick Iron Hoe", {name: "bone_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("boneIron", {durability: 266, level: 3, efficiency: 10, damage: 6, enchantability: 17});
ToolAPI.setTool(ItemID.bone_stick_iron_sword, "boneIron", ToolType.sword);
ToolAPI.setTool(ItemID.bone_stick_iron_shovel, "boneIron", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_stick_iron_pickaxe, "boneIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_stick_iron_axe, "boneIron", ToolType.axe);
ToolAPI.setTool(ItemID.bone_stick_iron_hoe, "boneIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.bone_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickBone, 0]);






IDRegistry.genItemID("bone_stick_diamond_sword");
IDRegistry.genItemID("bone_stick_diamond_shovel");
IDRegistry.genItemID("bone_stick_diamond_pickaxe");
IDRegistry.genItemID("bone_stick_diamond_axe");
IDRegistry.genItemID("bone_stick_diamond_hoe");

Item.createItem("bone_stick_diamond_sword", "Bone Stick Diamond Sword", {name: "bone_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("bone_stick_diamond_shovel", "Bone Stick Diamond Shovel", {name: "bone_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("bone_stick_diamond_pickaxe", "Bone Stick Diamond Pickaxe", {name: "bone_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_diamond_axe", "Bone Stick Diamond Axe", {name: "bone_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_diamond_hoe", "Bone Stick Diamond Hoe", {name: "bone_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("bonediamond", {durability: 1576, level: 4, efficiency: 12, damage: 7, enchantability: 13});
ToolAPI.setTool(ItemID.bone_stick_diamond_sword, "bonediamond", ToolType.sword);
ToolAPI.setTool(ItemID.bone_stick_diamond_shovel, "bonediamond", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_stick_diamond_pickaxe, "bonediamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_stick_diamond_axe, "bonediamond", ToolType.axe);
ToolAPI.setTool(ItemID.bone_stick_diamond_hoe, "bonediamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.bone_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickBone, 0]);








IDRegistry.genItemID("bone_stick_gold_sword");
IDRegistry.genItemID("bone_stick_gold_shovel");
IDRegistry.genItemID("bone_stick_gold_pickaxe");
IDRegistry.genItemID("bone_stick_gold_axe");
IDRegistry.genItemID("bone_stick_gold_hoe");

Item.createItem("bone_stick_gold_sword", "Bone Stick Gold Sword", {name: "bone_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("bone_stick_gold_shovel", "Bone Stick Gold Shovel", {name: "bone_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("bone_stick_gold_pickaxe", "Bone Stick Gold Pickaxe", {name: "bone_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_gold_axe", "Bone Stick Gold Axe", {name: "bone_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("bone_stick_gold_hoe", "Bone Stick Gold Hoe", {name: "bone_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("boneGold", {durability: 48, level: 2, efficiency: 16, damage: 4, enchantability: 25});
ToolAPI.setTool(ItemID.bone_stick_gold_sword, "boneGold", ToolType.sword);
ToolAPI.setTool(ItemID.bone_stick_gold_shovel, "boneGold", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_stick_gold_pickaxe, "boneGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_stick_gold_axe, "boneGold", ToolType.axe);
ToolAPI.setTool(ItemID.bone_stick_gold_hoe, "boneGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.bone_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickBone, 0]);

Recipes.addShaped({id: ItemID.bone_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickBone, 0]);







IDRegistry.genItemID("diamond_stick_wood_sword");
IDRegistry.genItemID("diamond_stick_wood_shovel");
IDRegistry.genItemID("diamond_stick_wood_pickaxe");
IDRegistry.genItemID("diamond_stick_wood_axe");
IDRegistry.genItemID("diamond_stick_wood_hoe");

Item.createItem("diamond_stick_wood_sword", "Diamond Stick Wood Sword", {name: "diamond_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_wood_shovel", "Diamond Stick Wood Shovel", {name: "diamond_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_wood_pickaxe", "Diamond Stick Wood Pickaxe", {name: "diamond_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_wood_axe", "Diamond Stick Wood Axe", {name: "diamond_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_wood_hoe", "Diamond Stick Wood Hoe", {name: "diamond_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("diamondWood", {durability: 210, level: 1, efficiency: 4.5, damage: 4.8, enchantability: 20});
ToolAPI.setTool(ItemID.diamond_stick_wood_sword, "diamondWood", ToolType.sword);
ToolAPI.setTool(ItemID.diamond_stick_wood_shovel, "diamondWood", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_stick_wood_pickaxe, "diamondWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_stick_wood_axe, "diamondWood", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_stick_wood_hoe, "diamondWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.diamond_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickdiamond, 0]);




IDRegistry.genItemID("diamond_stick_stone_sword");
IDRegistry.genItemID("diamond_stick_stone_shovel");
IDRegistry.genItemID("diamond_stick_stone_pickaxe");
IDRegistry.genItemID("diamond_stick_stone_axe");
IDRegistry.genItemID("diamond_stick_stone_hoe");

Item.createItem("diamond_stick_stone_sword", "Diamond Stick Stone Sword", {name: "diamond_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_stone_shovel", "Diamond Stick Stone Shovel", {name: "diamond_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_stone_pickaxe", "Diamond Stick Stone Pickaxe", {name: "diamond_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_stone_axe", "Diamond Stick Stone Axe", {name: "diamond_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_stone_hoe", "Diamond Stick Stone Hoe", {name: "diamond_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("diamondStone", {durability: 282, level: 2, efficiency: 6.5, damage: 5.8, enchantability: 10.5});
ToolAPI.setTool(ItemID.diamond_stick_stone_sword, "diamondStone", ToolType.sword);
ToolAPI.setTool(ItemID.diamond_stick_stone_shovel, "diamondStone", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_stick_stone_pickaxe, "diamondStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_stick_stone_axe, "diamondStone", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_stick_stone_hoe, "diamondStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.diamond_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickdiamond, 0]);












IDRegistry.genItemID("diamond_stick_iron_sword");
IDRegistry.genItemID("diamond_stick_iron_shovel");
IDRegistry.genItemID("diamond_stick_iron_pickaxe");
IDRegistry.genItemID("diamond_stick_iron_axe");
IDRegistry.genItemID("diamond_stick_iron_hoe");

Item.createItem("diamond_stick_iron_sword", "Diamond Stick Iron Sword", {name: "diamond_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_iron_shovel", "Diamond Stick Iron Shovel", {name: "diamond_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_iron_pickaxe", "Diamond Stick Iron Pickaxe", {name: "diamond_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_iron_axe", "Diamond Stick Iron Axe", {name: "diamond_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_iron_hoe", "Diamond Stick Iron Hoe", {name: "diamond_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("diamondIron", {durability: 501, level: 3, efficiency: 8.5, damage: 6.8, enchantability: 19.5});
ToolAPI.setTool(ItemID.diamond_stick_iron_sword, "diamondIron", ToolType.sword);
ToolAPI.setTool(ItemID.diamond_stick_iron_shovel, "diamondIron", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_stick_iron_pickaxe, "diamondIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_stick_iron_axe, "diamondIron", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_stick_iron_hoe, "diamondIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.diamond_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickdiamond, 0]);






IDRegistry.genItemID("diamond_stick_diamond_sword");
IDRegistry.genItemID("diamond_stick_diamond_shovel");
IDRegistry.genItemID("diamond_stick_diamond_pickaxe");
IDRegistry.genItemID("diamond_stick_diamond_axe");
IDRegistry.genItemID("diamond_stick_diamond_hoe");

Item.createItem("diamond_stick_diamond_sword", "Diamond Stick Diamond Sword", {name: "diamond_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_diamond_shovel", "Diamond Stick Diamond Shovel", {name: "diamond_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_diamond_pickaxe", "Diamond Stick Diamond Pickaxe", {name: "diamond_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_diamond_axe", "Diamond Stick Diamond Axe", {name: "diamond_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_diamond_hoe", "Diamond Stick Diamond Hoe", {name: "diamond_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("diamonddiamond", {durability: 1711, level: 4, efficiency: 10.5, damage: 7.8, enchantability: 15.5});
ToolAPI.setTool(ItemID.diamond_stick_diamond_sword, "diamonddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.diamond_stick_diamond_shovel, "diamonddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_stick_diamond_pickaxe, "diamonddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_stick_diamond_axe, "diamonddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_stick_diamond_hoe, "diamonddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.diamond_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickdiamond, 0]);








IDRegistry.genItemID("diamond_stick_gold_sword");
IDRegistry.genItemID("diamond_stick_gold_shovel");
IDRegistry.genItemID("diamond_stick_gold_pickaxe");
IDRegistry.genItemID("diamond_stick_gold_axe");
IDRegistry.genItemID("diamond_stick_gold_hoe");

Item.createItem("diamond_stick_gold_sword", "Diamond Stick Gold Sword", {name: "diamond_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_gold_shovel", "Diamond Stick Gold Shovel", {name: "diamond_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_gold_pickaxe", "Diamond Stick Gold Pickaxe", {name: "diamond_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_gold_axe", "Diamond Stick Gold Axe", {name: "diamond_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("diamond_stick_gold_hoe", "Diamond Stick Gold Hoe", {name: "diamond_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("diamondGold", {durability: 183, level: 2, efficiency: 14.5, damage: 4.8, enchantability: 27.5});
ToolAPI.setTool(ItemID.diamond_stick_gold_sword, "diamondGold", ToolType.sword);
ToolAPI.setTool(ItemID.diamond_stick_gold_shovel, "diamondGold", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_stick_gold_pickaxe, "diamondGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_stick_gold_axe, "diamondGold", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_stick_gold_hoe, "diamondGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.diamond_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickdiamond, 0]);

Recipes.addShaped({id: ItemID.diamond_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickdiamond, 0]);







IDRegistry.genItemID("emerald_stick_wood_sword");
IDRegistry.genItemID("emerald_stick_wood_shovel");
IDRegistry.genItemID("emerald_stick_wood_pickaxe");
IDRegistry.genItemID("emerald_stick_wood_axe");
IDRegistry.genItemID("emerald_stick_wood_hoe");

Item.createItem("emerald_stick_wood_sword", "Emerald Stick Wood Sword", {name: "emerald_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_wood_shovel", "Emerald Stick Wood Shovel", {name: "emerald_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_wood_pickaxe", "Emerald Stick Wood Pickaxe", {name: "emerald_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_wood_axe", "Emerald Stick Wood Axe", {name: "emerald_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_wood_hoe", "Emerald Stick Wood Hoe", {name: "emerald_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("emeraldWood", {durability: 160, level: 1, efficiency: 3.3, damage: 4.7, enchantability: 25});
ToolAPI.setTool(ItemID.emerald_stick_wood_sword, "emeraldWood", ToolType.sword);
ToolAPI.setTool(ItemID.emerald_stick_wood_shovel, "emeraldWood", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_stick_wood_pickaxe, "emeraldWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_stick_wood_axe, "emeraldWood", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_stick_wood_hoe, "emeraldWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.emerald_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickemerald, 0]);




IDRegistry.genItemID("emerald_stick_stone_sword");
IDRegistry.genItemID("emerald_stick_stone_shovel");
IDRegistry.genItemID("emerald_stick_stone_pickaxe");
IDRegistry.genItemID("emerald_stick_stone_axe");
IDRegistry.genItemID("emerald_stick_stone_hoe");

Item.createItem("emerald_stick_stone_sword", "Emerald Stick Stone Sword", {name: "emerald_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_stone_shovel", "Emerald Stick Stone Shovel", {name: "emerald_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_stone_pickaxe", "Emerald Stick Stone Pickaxe", {name: "emerald_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_stone_axe", "Emerald Stick Stone Axe", {name: "emerald_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_stone_hoe", "Emerald Stick Stone Hoe", {name: "emerald_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("emeraldStone", {durability: 232, level: 2, efficiency: 5.3, damage: 5.7, enchantability: 15});
ToolAPI.setTool(ItemID.emerald_stick_stone_sword, "emeraldStone", ToolType.sword);
ToolAPI.setTool(ItemID.emerald_stick_stone_shovel, "emeraldStone", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_stick_stone_pickaxe, "emeraldStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_stick_stone_axe, "emeraldStone", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_stick_stone_hoe, "emeraldStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.emerald_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickemerald, 0]);












IDRegistry.genItemID("emerald_stick_iron_sword");
IDRegistry.genItemID("emerald_stick_iron_shovel");
IDRegistry.genItemID("emerald_stick_iron_pickaxe");
IDRegistry.genItemID("emerald_stick_iron_axe");
IDRegistry.genItemID("emerald_stick_iron_hoe");

Item.createItem("emerald_stick_iron_sword", "Emerald Stick Iron Sword", {name: "emerald_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_iron_shovel", "Emerald Stick Iron Shovel", {name: "emerald_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_iron_pickaxe", "Emerald Stick Iron Pickaxe", {name: "emerald_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_iron_axe", "Emerald Stick Iron Axe", {name: "emerald_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_iron_hoe", "Emerald Stick Iron Hoe", {name: "emerald_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("emeraldIron", {durability: 351, level: 3, efficiency: 7.3, damage: 6.7, enchantability: 24});
ToolAPI.setTool(ItemID.emerald_stick_iron_sword, "emeraldIron", ToolType.sword);
ToolAPI.setTool(ItemID.emerald_stick_iron_shovel, "emeraldIron", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_stick_iron_pickaxe, "emeraldIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_stick_iron_axe, "emeraldIron", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_stick_iron_hoe, "emeraldIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.emerald_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickemerald, 0]);






IDRegistry.genItemID("emerald_stick_diamond_sword");
IDRegistry.genItemID("emerald_stick_diamond_shovel");
IDRegistry.genItemID("emerald_stick_diamond_pickaxe");
IDRegistry.genItemID("emerald_stick_diamond_axe");
IDRegistry.genItemID("emerald_stick_diamond_hoe");

Item.createItem("emerald_stick_diamond_sword", "Emerald Stick Diamond Sword", {name: "emerald_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_diamond_shovel", "Emerald Stick Diamond Shovel", {name: "emerald_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_diamond_pickaxe", "Emerald Stick Diamond Pickaxe", {name: "emerald_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_diamond_axe", "Emerald Stick Diamond Axe", {name: "emerald_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_diamond_hoe", "Emerald Stick Diamond Hoe", {name: "emerald_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("emeralddiamond", {durability: 1661, level: 4, efficiency: 9.3, damage: 7.7, enchantability: 20});
ToolAPI.setTool(ItemID.emerald_stick_diamond_sword, "emeralddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.emerald_stick_diamond_shovel, "emeralddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_stick_diamond_pickaxe, "emeralddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_stick_diamond_axe, "emeralddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_stick_diamond_hoe, "emeralddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.emerald_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickemerald, 0]);








IDRegistry.genItemID("emerald_stick_gold_sword");
IDRegistry.genItemID("emerald_stick_gold_shovel");
IDRegistry.genItemID("emerald_stick_gold_pickaxe");
IDRegistry.genItemID("emerald_stick_gold_axe");
IDRegistry.genItemID("emerald_stick_gold_hoe");

Item.createItem("emerald_stick_gold_sword", "Emerald Stick Gold Sword", {name: "emerald_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_gold_shovel", "Emerald Stick Gold Shovel", {name: "emerald_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_gold_pickaxe", "Emerald Stick Gold Pickaxe", {name: "emerald_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_gold_axe", "Emerald Stick Gold Axe", {name: "emerald_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("emerald_stick_gold_hoe", "Emerald Stick Gold Hoe", {name: "emerald_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("emeraldGold", {durability: 133, level: 2, efficiency: 13.3, damage: 4.7, enchantability: 32});
ToolAPI.setTool(ItemID.emerald_stick_gold_sword, "emeraldGold", ToolType.sword);
ToolAPI.setTool(ItemID.emerald_stick_gold_shovel, "emeraldGold", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_stick_gold_pickaxe, "emeraldGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_stick_gold_axe, "emeraldGold", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_stick_gold_hoe, "emeraldGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.emerald_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickemerald, 0]);

Recipes.addShaped({id: ItemID.emerald_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickemerald, 0]);







IDRegistry.genItemID("endrod_wood_sword");
IDRegistry.genItemID("endrod_wood_shovel");
IDRegistry.genItemID("endrod_wood_pickaxe");
IDRegistry.genItemID("endrod_wood_axe");
IDRegistry.genItemID("endrod_wood_hoe");

Item.createItem("endrod_wood_sword", "Endrod Wood Sword", {name: "endrod_wood_sword", meta: 0}, {stack: 1});
Item.createItem("endrod_wood_shovel", "Endrod Wood Shovel", {name: "endrod_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("endrod_wood_pickaxe", "Endrod Wood Pickaxe", {name: "endrod_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("endrod_wood_axe", "Endrod Wood Axe", {name: "endrod_wood_axe", meta: 0}, {stack: 1});
Item.createItem("endrod_wood_hoe", "Endrod Wood Hoe", {name: "endrod_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("endrodWood", {durability: 130, level: 1, efficiency: 8, damage: 4.5, enchantability: 21});
ToolAPI.setTool(ItemID.endrod_wood_sword, "endrodWood", ToolType.sword);
ToolAPI.setTool(ItemID.endrod_wood_shovel, "endrodWood", ToolType.shovel);
ToolAPI.setTool(ItemID.endrod_wood_pickaxe, "endrodWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.endrod_wood_axe, "endrodWood", ToolType.axe);
ToolAPI.setTool(ItemID.endrod_wood_hoe, "endrodWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.endrod_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', 369, 0]);










IDRegistry.genItemID("endrod_stone_sword");
IDRegistry.genItemID("endrod_stone_shovel");
IDRegistry.genItemID("endrod_stone_pickaxe");
IDRegistry.genItemID("endrod_stone_axe");
IDRegistry.genItemID("endrod_stone_hoe");

Item.createItem("endrod_stone_sword", "Endrod Stone Sword", {name: "endrod_stone_sword", meta: 0}, {stack: 1});
Item.createItem("endrod_stone_shovel", "Endrod Stone Shovel", {name: "endrod_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("endrod_stone_pickaxe", "Endrod Stone Pickaxe", {name: "endrod_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("endrod_stone_axe", "Endrod Stone Axe", {name: "endrod_stone_axe", meta: 0}, {stack: 1});
Item.createItem("endrod_stone_hoe", "Endrod Stone Hoe", {name: "endrod_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("endrodStone", {durability: 202, level: 2, efficiency: 10, damage: 5.5, enchantability: 11});
ToolAPI.setTool(ItemID.endrod_stone_sword, "endrodStone", ToolType.sword);
ToolAPI.setTool(ItemID.endrod_stone_shovel, "endrodStone", ToolType.shovel);
ToolAPI.setTool(ItemID.endrod_stone_pickaxe, "endrodStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.endrod_stone_axe, "endrodStone", ToolType.axe);
ToolAPI.setTool(ItemID.endrod_stone_hoe, "endrodStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.endrod_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', 369, 0]);












IDRegistry.genItemID("endrod_iron_sword");
IDRegistry.genItemID("endrod_iron_shovel");
IDRegistry.genItemID("endrod_iron_pickaxe");
IDRegistry.genItemID("endrod_iron_axe");
IDRegistry.genItemID("endrod_iron_hoe");

Item.createItem("endrod_iron_sword", "Endrod Iron Sword", {name: "endrod_iron_sword", meta: 0}, {stack: 1});
Item.createItem("endrod_iron_shovel", "Endrod Iron Shovel", {name: "endrod_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("endrod_iron_pickaxe", "Endrod Iron Pickaxe", {name: "endrod_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("endrod_iron_axe", "Endrod Iron Axe", {name: "endrod_iron_axe", meta: 0}, {stack: 1});
Item.createItem("endrod_iron_hoe", "Endrod Iron Hoe", {name: "endrod_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("endrodIron", {durability: 321, level: 3, efficiency: 12, damage: 6.5, enchantability: 19});
ToolAPI.setTool(ItemID.endrod_iron_sword, "endrodIron", ToolType.sword);
ToolAPI.setTool(ItemID.endrod_iron_shovel, "endrodIron", ToolType.shovel);
ToolAPI.setTool(ItemID.endrod_iron_pickaxe, "endrodIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.endrod_iron_axe, "endrodIron", ToolType.axe);
ToolAPI.setTool(ItemID.endrod_iron_hoe, "endrodIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.endrod_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', 369, 0]);






IDRegistry.genItemID("endrod_diamond_sword");
IDRegistry.genItemID("endrod_diamond_shovel");
IDRegistry.genItemID("endrod_diamond_pickaxe");
IDRegistry.genItemID("endrod_diamond_axe");
IDRegistry.genItemID("endrod_diamond_hoe");

Item.createItem("endrod_diamond_sword", "Endrod Diamond Sword", {name: "endrod_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("endrod_diamond_shovel", "Endrod Diamond Shovel", {name: "endrod_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("endrod_diamond_pickaxe", "Endrod Diamond Pickaxe", {name: "endrod_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("endrod_diamond_axe", "Endrod Diamond Axe", {name: "endrod_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("endrod_diamond_hoe", "Endrod Diamond Hoe", {name: "endrod_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("endroddiamond", {durability: 1631, level: 4, efficiency: 14, damage: 7.5, enchantability: 16});
ToolAPI.setTool(ItemID.endrod_diamond_sword, "endroddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.endrod_diamond_shovel, "endroddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.endrod_diamond_pickaxe, "endroddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.endrod_diamond_axe, "endroddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.endrod_diamond_hoe, "endroddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.endrod_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', 369, 0]);








IDRegistry.genItemID("endrod_gold_sword");
IDRegistry.genItemID("endrod_gold_shovel");
IDRegistry.genItemID("endrod_gold_pickaxe");
IDRegistry.genItemID("endrod_gold_axe");
IDRegistry.genItemID("endrod_gold_hoe");

Item.createItem("endrod_gold_sword", "Endrod Gold Sword", {name: "endrod_gold_sword", meta: 0}, {stack: 1});
Item.createItem("endrod_gold_shovel", "Endrod Gold Shovel", {name: "endrod_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("endrod_gold_pickaxe", "Endrod Gold Pickaxe", {name: "endrod_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("endrod_gold_axe", "Endrod Gold Axe", {name: "endrod_gold_axe", meta: 0}, {stack: 1});
Item.createItem("endrod_gold_hoe", "Endrod Gold Hoe", {name: "endrod_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("endrodGold", {durability: 103, level: 2, efficiency: 18, damage: 5.5, enchantability: 28});
ToolAPI.setTool(ItemID.endrod_gold_sword, "endrodGold", ToolType.sword);
ToolAPI.setTool(ItemID.endrod_gold_shovel, "endrodGold", ToolType.shovel);
ToolAPI.setTool(ItemID.endrod_gold_pickaxe, "endrodGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.endrod_gold_axe, "endrodGold", ToolType.axe);
ToolAPI.setTool(ItemID.endrod_gold_hoe, "endrodGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.endrod_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.endrod_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', 369, 0]);





IDRegistry.genItemID("gold_stick_wood_sword");
IDRegistry.genItemID("gold_stick_wood_shovel");
IDRegistry.genItemID("gold_stick_wood_pickaxe");
IDRegistry.genItemID("gold_stick_wood_axe");
IDRegistry.genItemID("gold_stick_wood_hoe");

Item.createItem("gold_stick_wood_sword", "Gold Stick Wood Sword", {name: "gold_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("gold_stick_wood_shovel", "Gold Stick Wood Shovel", {name: "gold_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("gold_stick_wood_pickaxe", "Gold Stick Wood Pickaxe", {name: "gold_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_wood_axe", "Gold Stick Wood Axe", {name: "gold_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_wood_hoe", "Gold Stick Wood Hoe", {name: "gold_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("goldWood", {durability: 60, level: 1, efficiency: 7, damage: 4, enchantability: 25});
ToolAPI.setTool(ItemID.gold_stick_wood_sword, "goldWood", ToolType.sword);
ToolAPI.setTool(ItemID.gold_stick_wood_shovel, "goldWood", ToolType.shovel);
ToolAPI.setTool(ItemID.gold_stick_wood_pickaxe, "goldWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gold_stick_wood_axe, "goldWood", ToolType.axe);
ToolAPI.setTool(ItemID.gold_stick_wood_hoe, "goldWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.gold_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickgold, 0]);




IDRegistry.genItemID("gold_stick_stone_sword");
IDRegistry.genItemID("gold_stick_stone_shovel");
IDRegistry.genItemID("gold_stick_stone_pickaxe");
IDRegistry.genItemID("gold_stick_stone_axe");
IDRegistry.genItemID("gold_stick_stone_hoe");

Item.createItem("gold_stick_stone_sword", "Gold Stick Stone Sword", {name: "gold_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("gold_stick_stone_shovel", "Gold Stick Stone Shovel", {name: "gold_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("gold_stick_stone_pickaxe", "Gold Stick Stone Pickaxe", {name: "gold_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_stone_axe", "Gold Stick Stone Axe", {name: "gold_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_stone_hoe", "Gold Stick Stone Hoe", {name: "gold_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("goldStone", {durability: 132, level: 2, efficiency: 9, damage: 5, enchantability: 15});
ToolAPI.setTool(ItemID.gold_stick_stone_sword, "goldStone", ToolType.sword);
ToolAPI.setTool(ItemID.gold_stick_stone_shovel, "goldStone", ToolType.shovel);
ToolAPI.setTool(ItemID.gold_stick_stone_pickaxe, "goldStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gold_stick_stone_axe, "goldStone", ToolType.axe);
ToolAPI.setTool(ItemID.gold_stick_stone_hoe, "goldStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.gold_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickgold, 0]);












IDRegistry.genItemID("gold_stick_iron_sword");
IDRegistry.genItemID("gold_stick_iron_shovel");
IDRegistry.genItemID("gold_stick_iron_pickaxe");
IDRegistry.genItemID("gold_stick_iron_axe");
IDRegistry.genItemID("gold_stick_iron_hoe");

Item.createItem("gold_stick_iron_sword", "Gold Stick Iron Sword", {name: "gold_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("gold_stick_iron_shovel", "Gold Stick Iron Shovel", {name: "gold_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("gold_stick_iron_pickaxe", "Gold Stick Iron Pickaxe", {name: "gold_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_iron_axe", "Gold Stick Iron Axe", {name: "gold_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_iron_hoe", "Gold Stick Iron Hoe", {name: "gold_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("goldIron", {durability: 351, level: 3, efficiency: 11, damage: 6, enchantability: 24});
ToolAPI.setTool(ItemID.gold_stick_iron_sword, "goldIron", ToolType.sword);
ToolAPI.setTool(ItemID.gold_stick_iron_shovel, "goldIron", ToolType.shovel);
ToolAPI.setTool(ItemID.gold_stick_iron_pickaxe, "goldIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gold_stick_iron_axe, "goldIron", ToolType.axe);
ToolAPI.setTool(ItemID.gold_stick_iron_hoe, "goldIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.gold_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickgold, 0]);






IDRegistry.genItemID("gold_stick_diamond_sword");
IDRegistry.genItemID("gold_stick_diamond_shovel");
IDRegistry.genItemID("gold_stick_diamond_pickaxe");
IDRegistry.genItemID("gold_stick_diamond_axe");
IDRegistry.genItemID("gold_stick_diamond_hoe");

Item.createItem("gold_stick_diamond_sword", "Gold Stick Diamond Sword", {name: "gold_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("gold_stick_diamond_shovel", "Gold Stick Diamond Shovel", {name: "gold_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("gold_stick_diamond_pickaxe", "Gold Stick Diamond Pickaxe", {name: "gold_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_diamond_axe", "Gold Stick Diamond Axe", {name: "gold_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_diamond_hoe", "Gold Stick Diamond Hoe", {name: "gold_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("golddiamond", {durability: 1561, level: 4, efficiency: 13, damage: 7, enchantability: 20});
ToolAPI.setTool(ItemID.gold_stick_diamond_sword, "golddiamond", ToolType.sword);
ToolAPI.setTool(ItemID.gold_stick_diamond_shovel, "golddiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.gold_stick_diamond_pickaxe, "golddiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gold_stick_diamond_axe, "golddiamond", ToolType.axe);
ToolAPI.setTool(ItemID.gold_stick_diamond_hoe, "golddiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.gold_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickgold, 0]);








IDRegistry.genItemID("gold_stick_gold_sword");
IDRegistry.genItemID("gold_stick_gold_shovel");
IDRegistry.genItemID("gold_stick_gold_pickaxe");
IDRegistry.genItemID("gold_stick_gold_axe");
IDRegistry.genItemID("gold_stick_gold_hoe");

Item.createItem("gold_stick_gold_sword", "Gold Stick Gold Sword", {name: "gold_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("gold_stick_gold_shovel", "Gold Stick Gold Shovel", {name: "gold_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("gold_stick_gold_pickaxe", "Gold Stick Gold Pickaxe", {name: "gold_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_gold_axe", "Gold Stick Gold Axe", {name: "gold_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("gold_stick_gold_hoe", "Gold Stick Gold Hoe", {name: "gold_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("goldGold", {durability: 33, level: 2, efficiency: 17, damage: 4, enchantability: 32});
ToolAPI.setTool(ItemID.gold_stick_gold_sword, "goldGold", ToolType.sword);
ToolAPI.setTool(ItemID.gold_stick_gold_shovel, "goldGold", ToolType.shovel);
ToolAPI.setTool(ItemID.gold_stick_gold_pickaxe, "goldGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.gold_stick_gold_axe, "goldGold", ToolType.axe);
ToolAPI.setTool(ItemID.gold_stick_gold_hoe, "goldGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.gold_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickgold, 0]);

Recipes.addShaped({id: ItemID.gold_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickgold, 0]);






IDRegistry.genItemID("iron_stick_wood_sword");
IDRegistry.genItemID("iron_stick_wood_shovel");
IDRegistry.genItemID("iron_stick_wood_pickaxe");
IDRegistry.genItemID("iron_stick_wood_axe");
IDRegistry.genItemID("iron_stick_wood_hoe");

Item.createItem("iron_stick_wood_sword", "Iron Stick Wood Sword", {name: "iron_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("iron_stick_wood_shovel", "Iron Stick Wood Shovel", {name: "iron_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("iron_stick_wood_pickaxe", "Iron Stick Wood Pickaxe", {name: "iron_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_wood_axe", "Iron Stick Wood Axe", {name: "iron_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_wood_hoe", "Iron Stick Wood Hoe", {name: "iron_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("ironWood", {durability: 110, level: 1, efficiency: 3, damage: 4.5, enchantability: 20});
ToolAPI.setTool(ItemID.iron_stick_wood_sword, "ironWood", ToolType.sword);
ToolAPI.setTool(ItemID.iron_stick_wood_shovel, "ironWood", ToolType.shovel);
ToolAPI.setTool(ItemID.iron_stick_wood_pickaxe, "ironWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iron_stick_wood_axe, "ironWood", ToolType.axe);
ToolAPI.setTool(ItemID.iron_stick_wood_hoe, "ironWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.iron_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickiron, 0]);




IDRegistry.genItemID("iron_stick_stone_sword");
IDRegistry.genItemID("iron_stick_stone_shovel");
IDRegistry.genItemID("iron_stick_stone_pickaxe");
IDRegistry.genItemID("iron_stick_stone_axe");
IDRegistry.genItemID("iron_stick_stone_hoe");

Item.createItem("iron_stick_stone_sword", "Iron Stick Stone Sword", {name: "iron_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("iron_stick_stone_shovel", "Iron Stick Stone Shovel", {name: "iron_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("iron_stick_stone_pickaxe", "Iron Stick Stone Pickaxe", {name: "iron_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_stone_axe", "Iron Stick Stone Axe", {name: "iron_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_stone_hoe", "Iron Stick Stone Hoe", {name: "iron_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("ironStone", {durability: 182, level: 2, efficiency: 5, damage: 5.5, enchantability: 10});
ToolAPI.setTool(ItemID.iron_stick_stone_sword, "ironStone", ToolType.sword);
ToolAPI.setTool(ItemID.iron_stick_stone_shovel, "ironStone", ToolType.shovel);
ToolAPI.setTool(ItemID.iron_stick_stone_pickaxe, "ironStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iron_stick_stone_axe, "ironStone", ToolType.axe);
ToolAPI.setTool(ItemID.iron_stick_stone_hoe, "ironStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.iron_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickiron, 0]);












IDRegistry.genItemID("iron_stick_iron_sword");
IDRegistry.genItemID("iron_stick_iron_shovel");
IDRegistry.genItemID("iron_stick_iron_pickaxe");
IDRegistry.genItemID("iron_stick_iron_axe");
IDRegistry.genItemID("iron_stick_iron_hoe");

Item.createItem("iron_stick_iron_sword", "Iron Stick Iron Sword", {name: "iron_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("iron_stick_iron_shovel", "Iron Stick Iron Shovel", {name: "iron_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("iron_stick_iron_pickaxe", "Iron Stick Iron Pickaxe", {name: "iron_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_iron_axe", "Iron Stick Iron Axe", {name: "iron_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_iron_hoe", "Iron Stick Iron Hoe", {name: "iron_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("ironIron", {durability: 301, level: 3, efficiency: 7, damage: 6.5, enchantability: 19});
ToolAPI.setTool(ItemID.iron_stick_iron_sword, "ironIron", ToolType.sword);
ToolAPI.setTool(ItemID.iron_stick_iron_shovel, "ironIron", ToolType.shovel);
ToolAPI.setTool(ItemID.iron_stick_iron_pickaxe, "ironIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iron_stick_iron_axe, "ironIron", ToolType.axe);
ToolAPI.setTool(ItemID.iron_stick_iron_hoe, "ironIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.iron_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickiron, 0]);






IDRegistry.genItemID("iron_stick_diamond_sword");
IDRegistry.genItemID("iron_stick_diamond_shovel");
IDRegistry.genItemID("iron_stick_diamond_pickaxe");
IDRegistry.genItemID("iron_stick_diamond_axe");
IDRegistry.genItemID("iron_stick_diamond_hoe");

Item.createItem("iron_stick_diamond_sword", "Iron Stick Diamond Sword", {name: "iron_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("iron_stick_diamond_shovel", "Iron Stick Diamond Shovel", {name: "iron_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("iron_stick_diamond_pickaxe", "Iron Stick Diamond Pickaxe", {name: "iron_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_diamond_axe", "Iron Stick Diamond Axe", {name: "iron_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_diamond_hoe", "Iron Stick Diamond Hoe", {name: "iron_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("irondiamond", {durability: 1611, level: 4, efficiency: 9, damage: 7.5, enchantability: 15});
ToolAPI.setTool(ItemID.iron_stick_diamond_sword, "irondiamond", ToolType.sword);
ToolAPI.setTool(ItemID.iron_stick_diamond_shovel, "irondiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.iron_stick_diamond_pickaxe, "irondiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iron_stick_diamond_axe, "irondiamond", ToolType.axe);
ToolAPI.setTool(ItemID.iron_stick_diamond_hoe, "irondiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.iron_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickiron, 0]);








IDRegistry.genItemID("iron_stick_gold_sword");
IDRegistry.genItemID("iron_stick_gold_shovel");
IDRegistry.genItemID("iron_stick_gold_pickaxe");
IDRegistry.genItemID("iron_stick_gold_axe");
IDRegistry.genItemID("iron_stick_gold_hoe");

Item.createItem("iron_stick_gold_sword", "Iron Stick Gold Sword", {name: "iron_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("iron_stick_gold_shovel", "Iron Stick Gold Shovel", {name: "iron_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("iron_stick_gold_pickaxe", "Iron Stick Gold Pickaxe", {name: "iron_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_gold_axe", "Iron Stick Gold Axe", {name: "iron_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("iron_stick_gold_hoe", "Iron Stick Gold Hoe", {name: "iron_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("ironGold", {durability: 83, level: 2, efficiency: 13, damage: 4.5, enchantability: 27});
ToolAPI.setTool(ItemID.iron_stick_gold_sword, "ironGold", ToolType.sword);
ToolAPI.setTool(ItemID.iron_stick_gold_shovel, "ironGold", ToolType.shovel);
ToolAPI.setTool(ItemID.iron_stick_gold_pickaxe, "ironGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.iron_stick_gold_axe, "ironGold", ToolType.axe);
ToolAPI.setTool(ItemID.iron_stick_gold_hoe, "ironGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.iron_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickiron, 0]);

Recipes.addShaped({id: ItemID.iron_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickiron, 0]);




IDRegistry.genItemID("quartz_stick_wood_sword");
IDRegistry.genItemID("quartz_stick_wood_shovel");
IDRegistry.genItemID("quartz_stick_wood_pickaxe");
IDRegistry.genItemID("quartz_stick_wood_axe");
IDRegistry.genItemID("quartz_stick_wood_hoe");

Item.createItem("quartz_stick_wood_sword", "Quartz Stick Wood Sword", {name: "quartz_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_wood_shovel", "Quartz Stick Wood Shovel", {name: "quartz_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_wood_pickaxe", "Quartz Stick Wood Pickaxe", {name: "quartz_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_wood_axe", "Quartz Stick Wood Axe", {name: "quartz_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_wood_hoe", "Quartz Stick Wood Hoe", {name: "quartz_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("quartzWood", {durability: 80, level: 1, efficiency: 5, damage: 4.3, enchantability: 23});
ToolAPI.setTool(ItemID.quartz_stick_wood_sword, "quartzWood", ToolType.sword);
ToolAPI.setTool(ItemID.quartz_stick_wood_shovel, "quartzWood", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_stick_wood_pickaxe, "quartzWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_stick_wood_axe, "quartzWood", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_stick_wood_hoe, "quartzWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.quartz_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickquartz, 0]);




IDRegistry.genItemID("quartz_stick_stone_sword");
IDRegistry.genItemID("quartz_stick_stone_shovel");
IDRegistry.genItemID("quartz_stick_stone_pickaxe");
IDRegistry.genItemID("quartz_stick_stone_axe");
IDRegistry.genItemID("quartz_stick_stone_hoe");

Item.createItem("quartz_stick_stone_sword", "Quartz Stick Stone Sword", {name: "quartz_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_stone_shovel", "Quartz Stick Stone Shovel", {name: "quartz_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_stone_pickaxe", "Quartz Stick Stone Pickaxe", {name: "quartz_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_stone_axe", "Quartz Stick Stone Axe", {name: "quartz_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_stone_hoe", "Quartz Stick Stone Hoe", {name: "quartz_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("quartzStone", {durability: 152, level: 2, efficiency: 7, damage: 5.3, enchantability: 13.5});
ToolAPI.setTool(ItemID.quartz_stick_stone_sword, "quartzStone", ToolType.sword);
ToolAPI.setTool(ItemID.quartz_stick_stone_shovel, "quartzStone", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_stick_stone_pickaxe, "quartzStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_stick_stone_axe, "quartzStone", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_stick_stone_hoe, "quartzStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.quartz_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickquartz, 0]);












IDRegistry.genItemID("quartz_stick_iron_sword");
IDRegistry.genItemID("quartz_stick_iron_shovel");
IDRegistry.genItemID("quartz_stick_iron_pickaxe");
IDRegistry.genItemID("quartz_stick_iron_axe");
IDRegistry.genItemID("quartz_stick_iron_hoe");

Item.createItem("quartz_stick_iron_sword", "Quartz Stick Iron Sword", {name: "quartz_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_iron_shovel", "Quartz Stick Iron Shovel", {name: "quartz_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_iron_pickaxe", "Quartz Stick Iron Pickaxe", {name: "quartz_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_iron_axe", "Quartz Stick Iron Axe", {name: "quartz_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_iron_hoe", "Quartz Stick Iron Hoe", {name: "quartz_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("quartzIron", {durability: 271, level: 3, efficiency: 9, damage: 6.3, enchantability: 22.5});
ToolAPI.setTool(ItemID.quartz_stick_iron_sword, "quartzIron", ToolType.sword);
ToolAPI.setTool(ItemID.quartz_stick_iron_shovel, "quartzIron", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_stick_iron_pickaxe, "quartzIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_stick_iron_axe, "quartzIron", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_stick_iron_hoe, "quartzIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.quartz_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickquartz, 0]);






IDRegistry.genItemID("quartz_stick_diamond_sword");
IDRegistry.genItemID("quartz_stick_diamond_shovel");
IDRegistry.genItemID("quartz_stick_diamond_pickaxe");
IDRegistry.genItemID("quartz_stick_diamond_axe");
IDRegistry.genItemID("quartz_stick_diamond_hoe");

Item.createItem("quartz_stick_diamond_sword", "Quartz Stick Diamond Sword", {name: "quartz_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_diamond_shovel", "Quartz Stick Diamond Shovel", {name: "quartz_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_diamond_pickaxe", "Quartz Stick Diamond Pickaxe", {name: "quartz_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_diamond_axe", "Quartz Stick Diamond Axe", {name: "quartz_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_diamond_hoe", "Quartz Stick Diamond Hoe", {name: "quartz_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("quartzdiamond", {durability: 1581, level: 4, efficiency: 11, damage: 7.3, enchantability: 18.5});
ToolAPI.setTool(ItemID.quartz_stick_diamond_sword, "quartzdiamond", ToolType.sword);
ToolAPI.setTool(ItemID.quartz_stick_diamond_shovel, "quartzdiamond", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_stick_diamond_pickaxe, "quartzdiamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_stick_diamond_axe, "quartzdiamond", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_stick_diamond_hoe, "quartzdiamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.quartz_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickquartz, 0]);








IDRegistry.genItemID("quartz_stick_gold_sword");
IDRegistry.genItemID("quartz_stick_gold_shovel");
IDRegistry.genItemID("quartz_stick_gold_pickaxe");
IDRegistry.genItemID("quartz_stick_gold_axe");
IDRegistry.genItemID("quartz_stick_gold_hoe");

Item.createItem("quartz_stick_gold_sword", "Quartz Stick Gold Sword", {name: "quartz_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_gold_shovel", "Quartz Stick Gold Shovel", {name: "quartz_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_gold_pickaxe", "Quartz Stick Gold Pickaxe", {name: "quartz_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_gold_axe", "Quartz Stick Gold Axe", {name: "quartz_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("quartz_stick_gold_hoe", "Quartz Stick Gold Hoe", {name: "quartz_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("quartzGold", {durability: 53, level: 2, efficiency: 15, damage: 4.3, enchantability: 30.5});
ToolAPI.setTool(ItemID.quartz_stick_gold_sword, "quartzGold", ToolType.sword);
ToolAPI.setTool(ItemID.quartz_stick_gold_shovel, "quartzGold", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_stick_gold_pickaxe, "quartzGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_stick_gold_axe, "quartzGold", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_stick_gold_hoe, "quartzGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.quartz_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickquartz, 0]);

Recipes.addShaped({id: ItemID.quartz_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickquartz, 0]);








IDRegistry.genItemID("redstone_stick_wood_sword");
IDRegistry.genItemID("redstone_stick_wood_shovel");
IDRegistry.genItemID("redstone_stick_wood_pickaxe");
IDRegistry.genItemID("redstone_stick_wood_axe");
IDRegistry.genItemID("redstone_stick_wood_hoe");

Item.createItem("redstone_stick_wood_sword", "Redstone Stick Wood Sword", {name: "redstone_stick_wood_sword", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_wood_shovel", "Redstone Stick Wood Shovel", {name: "redstone_stick_wood_shovel", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_wood_pickaxe", "Redstone Stick Wood Pickaxe", {name: "redstone_stick_wood_pickaxe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_wood_axe", "Redstone Stick Wood Axe", {name: "redstone_stick_wood_axe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_wood_hoe", "Redstone Stick Wood Hoe", {name: "redstone_stick_wood_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("redstoneWood", {durability: 60, level: 1, efficiency: 2.5, damage: 4, enchantability: 18});
ToolAPI.setTool(ItemID.redstone_stick_wood_sword, "redstoneWood", ToolType.sword);
ToolAPI.setTool(ItemID.redstone_stick_wood_shovel, "redstoneWood", ToolType.shovel);
ToolAPI.setTool(ItemID.redstone_stick_wood_pickaxe, "redstoneWood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redstone_stick_wood_axe, "redstoneWood", ToolType.axe);
ToolAPI.setTool(ItemID.redstone_stick_wood_hoe, "redstoneWood", ToolType.hoe);







Recipes.addShaped({id: ItemID.redstone_stick_wood_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 5, -1, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_wood_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 5, -1, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_wood_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 5, -1, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_wood_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 5, -1, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_wood_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 5, -1, 'b', ItemID.stickredstone, 0]);




IDRegistry.genItemID("redstone_stick_stone_sword");
IDRegistry.genItemID("redstone_stick_stone_shovel");
IDRegistry.genItemID("redstone_stick_stone_pickaxe");
IDRegistry.genItemID("redstone_stick_stone_axe");
IDRegistry.genItemID("redstone_stick_stone_hoe");

Item.createItem("redstone_stick_stone_sword", "Redstone Stick Stone Sword", {name: "redstone_stick_stone_sword", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_stone_shovel", "Redstone Stick Stone Shovel", {name: "redstone_stick_stone_shovel", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_stone_pickaxe", "Redstone Stick Stone Pickaxe", {name: "redstone_stick_stone_pickaxe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_stone_axe", "Redstone Stick Stone Axe", {name: "redstone_stick_stone_axe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_stone_hoe", "Redstone Stick Stone Hoe", {name: "redstone_stick_stone_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("redstoneStone", {durability: 132, level: 2, efficiency: 4.5, damage: 5, enchantability: 9});
ToolAPI.setTool(ItemID.redstone_stick_stone_sword, "redstoneStone", ToolType.sword);
ToolAPI.setTool(ItemID.redstone_stick_stone_shovel, "redstoneStone", ToolType.shovel);
ToolAPI.setTool(ItemID.redstone_stick_stone_pickaxe, "redstoneStone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redstone_stick_stone_axe, "redstoneStone", ToolType.axe);
ToolAPI.setTool(ItemID.redstone_stick_stone_hoe, "redstoneStone", ToolType.hoe);







Recipes.addShaped({id: ItemID.redstone_stick_stone_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 4, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_stone_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 4, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_stone_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 4, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_stone_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 4, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_stone_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 4, 0, 'b', ItemID.stickredstone, 0]);












IDRegistry.genItemID("redstone_stick_iron_sword");
IDRegistry.genItemID("redstone_stick_iron_shovel");
IDRegistry.genItemID("redstone_stick_iron_pickaxe");
IDRegistry.genItemID("redstone_stick_iron_axe");
IDRegistry.genItemID("redstone_stick_iron_hoe");

Item.createItem("redstone_stick_iron_sword", "Redstone Stick Iron Sword", {name: "redstone_stick_iron_sword", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_iron_shovel", "Redstone Stick Iron Shovel", {name: "redstone_stick_iron_shovel", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_iron_pickaxe", "Redstone Stick Iron Pickaxe", {name: "redstone_stick_iron_pickaxe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_iron_axe", "Redstone Stick Iron Axe", {name: "redstone_stick_iron_axe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_iron_hoe", "Redstone Stick Iron Hoe", {name: "redstone_stick_iron_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("redstoneIron", {durability: 251, level: 3, efficiency: 6.5, damage: 6, enchantability: 18});
ToolAPI.setTool(ItemID.redstone_stick_iron_sword, "redstoneIron", ToolType.sword);
ToolAPI.setTool(ItemID.redstone_stick_iron_shovel, "redstoneIron", ToolType.shovel);
ToolAPI.setTool(ItemID.redstone_stick_iron_pickaxe, "redstoneIron", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redstone_stick_iron_axe, "redstoneIron", ToolType.axe);
ToolAPI.setTool(ItemID.redstone_stick_iron_hoe, "redstoneIron", ToolType.hoe);







Recipes.addShaped({id: ItemID.redstone_stick_iron_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 265, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_iron_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 265, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_iron_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 265, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_iron_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 265, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_iron_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 265, 0, 'b', ItemID.stickredstone, 0]);






IDRegistry.genItemID("redstone_stick_diamond_sword");
IDRegistry.genItemID("redstone_stick_diamond_shovel");
IDRegistry.genItemID("redstone_stick_diamond_pickaxe");
IDRegistry.genItemID("redstone_stick_diamond_axe");
IDRegistry.genItemID("redstone_stick_diamond_hoe");

Item.createItem("redstone_stick_diamond_sword", "Redstone Stick Diamond Sword", {name: "redstone_stick_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_diamond_shovel", "Redstone Stick Diamond Shovel", {name: "redstone_stick_diamond_shovel", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_diamond_pickaxe", "Redstone Stick Diamond Pickaxe", {name: "redstone_stick_diamond_pickaxe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_diamond_axe", "Redstone Stick Diamond Axe", {name: "redstone_stick_diamond_axe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_diamond_hoe", "Redstone Stick Diamond Hoe", {name: "redstone_stick_diamond_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("redstonediamond", {durability: 1561, level: 4, efficiency: 8.5, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.redstone_stick_diamond_sword, "redstonediamond", ToolType.sword);
ToolAPI.setTool(ItemID.redstone_stick_diamond_shovel, "redstonediamond", ToolType.shovel);
ToolAPI.setTool(ItemID.redstone_stick_diamond_pickaxe, "redstonediamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redstone_stick_diamond_axe, "redstonediamond", ToolType.axe);
ToolAPI.setTool(ItemID.redstone_stick_diamond_hoe, "redstonediamond", ToolType.hoe);







Recipes.addShaped({id: ItemID.redstone_stick_diamond_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 264, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_diamond_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 264, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_diamond_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 264, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_diamond_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 264, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_diamond_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 264, 0, 'b', ItemID.stickredstone, 0]);








IDRegistry.genItemID("redstone_stick_gold_sword");
IDRegistry.genItemID("redstone_stick_gold_shovel");
IDRegistry.genItemID("redstone_stick_gold_pickaxe");
IDRegistry.genItemID("redstone_stick_gold_axe");
IDRegistry.genItemID("redstone_stick_gold_hoe");

Item.createItem("redstone_stick_gold_sword", "Redstone Stick Gold Sword", {name: "redstone_stick_gold_sword", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_gold_shovel", "Redstone Stick Gold Shovel", {name: "redstone_stick_gold_shovel", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_gold_pickaxe", "Redstone Stick Gold Pickaxe", {name: "redstone_stick_gold_pickaxe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_gold_axe", "Redstone Stick Gold Axe", {name: "redstone_stick_gold_axe", meta: 0}, {stack: 1});
Item.createItem("redstone_stick_gold_hoe", "Redstone Stick Gold Hoe", {name: "redstone_stick_gold_hoe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("redstoneGold", {durability: 33, level: 2, efficiency: 12.5, damage: 4, enchantability: 26});
ToolAPI.setTool(ItemID.redstone_stick_gold_sword, "redstoneGold", ToolType.sword);
ToolAPI.setTool(ItemID.redstone_stick_gold_shovel, "redstoneGold", ToolType.shovel);
ToolAPI.setTool(ItemID.redstone_stick_gold_pickaxe, "redstoneGold", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redstone_stick_gold_axe, "redstoneGold", ToolType.axe);
ToolAPI.setTool(ItemID.redstone_stick_gold_hoe, "redstoneGold", ToolType.hoe);







Recipes.addShaped({id: ItemID.redstone_stick_gold_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 266, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_gold_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 266, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_gold_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 266, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_gold_axe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 266, 0, 'b', ItemID.stickredstone, 0]);

Recipes.addShaped({id: ItemID.redstone_stick_gold_hoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 266, 0, 'b', ItemID.stickredstone, 0]);