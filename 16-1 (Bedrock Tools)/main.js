var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 30,
	explosionres: 5
}, "stone");



IDRegistry.genBlockID("bedrockiumOre");
Block.createBlock("bedrockiumOre", [
	{name: "Bedrockium Ore", texture: [["bedrockiumOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bedrockiumOre, "stone", 3, true);

Block.registerDropFunction("bedrockiumOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[BlockID.bedrockiumOre, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.bedrockiumShard, 1, 0]]
	}
	return [];
}, 3);





IDRegistry.genItemID("diamondStick");
Item.createItem("diamondStick", "Diamond Stick", {name: "diamondStick", meta: 0}, {stack: 64});

IDRegistry.genItemID("bedrockiumShard");
Item.createItem("bedrockiumShard", "Bedrockium Shard", {name: "bedrockiumShard", meta: 0}, {stack: 64});

IDRegistry.genItemID("bedrockiumBlend");
Item.createItem("bedrockiumBlend", "Bedrockium Blend", {name: "bedrockiumBlend", meta: 0}, {stack: 64});

IDRegistry.genItemID("bedrockiumPlate");
Item.createItem("bedrockiumPlate", "Bedrockium Plate", {name: "bedrockiumPlate", meta: 0}, {stack: 64});





importLib("ENV", "*");



IDRegistry.genItemID("bedrockSword");
IDRegistry.genItemID("bedrockShovel");
IDRegistry.genItemID("bedrockPickaxe");
IDRegistry.genItemID("bedrockAxe");
IDRegistry.genItemID("bedrockHoe");
Item.createItem("bedrockSword", "Bedrock Sword", {name: "bedrockSword", meta: 0}, {stack: 1});
Item.createItem("bedrockShovel", "Bedrock Shovel", {name: "bedrockShovel", meta: 0}, {stack: 1});
Item.createItem("bedrockPickaxe", "Bedrock Pickaxe", {name: "bedrockPickaxe", meta: 0}, {stack: 1});
Item.createItem("bedrockAxe", "Bedrock Axe", {name: "bedrockAxe", meta: 0}, {stack: 1});
Item.createItem("bedrockHoe", "Bedrock Hoe", {name: "bedrockHoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bedrock", {durability: 5000, level: 3, efficiency: 12, damage: 15, enchantability: 14});

ToolAPI.setTool(ItemID.bedrockSword, "bedrock", ToolType.sword);
ToolAPI.setTool(ItemID.bedrockShovel, "bedrock", ToolType.shovel);
ToolAPI.setTool(ItemID.bedrockPickaxe, "bedrock", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bedrockAxe, "bedrock", ToolType.axe);
ToolAPI.setTool(ItemID.bedrockHoe, "bedrock", ToolType.hoe);





IDRegistry.genItemID("bedrockiumSword");
IDRegistry.genItemID("bedrockiumShovel");
IDRegistry.genItemID("bedrockiumPickaxe");
IDRegistry.genItemID("bedrockiumAxe");
IDRegistry.genItemID("bedrockiumHoe");
Item.createItem("bedrockiumSword", "Bedrockium Sword", {name: "bedrockiumSword", meta: 0}, {stack: 1});
Item.createItem("bedrockiumShovel", "Bedrockium Shovel", {name: "bedrockiumShovel", meta: 0}, {stack: 1});
Item.createItem("bedrockiumPickaxe", "Bedrockium Pickaxe", {name: "bedrockiumPickaxe", meta: 0}, {stack: 1});
Item.createItem("bedrockiumAxe", "Bedrockium Axe", {name: "bedrockiumAxe", meta: 0}, {stack: 1});
Item.createItem("bedrockiumHoe", "Bedrockium Hoe", {name: "bedrockiumHoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bedrockium", {durability: 7000, level: 3, efficiency: 12, damage: 30, enchantability: 14});

ToolAPI.setTool(ItemID.bedrockiumSword, "bedrockium", ToolType.sword);
ToolAPI.setTool(ItemID.bedrockiumShovel, "bedrockium", ToolType.shovel);
ToolAPI.setTool(ItemID.bedrockiumPickaxe, "bedrockium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bedrockiumAxe, "bedrockium", ToolType.axe);
ToolAPI.setTool(ItemID.bedrockiumHoe, "bedrockium", ToolType.hoe);





IDRegistry.genItemID("bedrockHelmet");
IDRegistry.genItemID("bedrockChestplate");
IDRegistry.genItemID("bedrockLeggings");
IDRegistry.genItemID("bedrockBoots");

Item.createArmorItem("bedrockHelmet", "Bedrock Helmet", {name: "bedrockHelmet"}, {type: "helmet", armor: 5, durability: 5000, texture: "armor/bedrock_crude_1.png"});
Item.createArmorItem("bedrockChestplate", "Bedrock Chestplate", {name: "bedrockChestplate"}, {type: "chestplate", armor: 8, durability: 5000, texture: "armor/bedrock_crude_1.png"});
Item.createArmorItem("bedrockLeggings", "Bedrock Leggings", {name: "bedrockLeggings"}, {type: "leggings", armor: 7, durability: 5000, texture: "armor/bedrock_crude_2.png"});
Item.createArmorItem("bedrockBoots", "Bedrock Boots", {name: "bedrockBoots"}, {type: "boots", armor: 6, durability: 5000, texture: "armor/bedrock_crude_1.png"});



IDRegistry.genItemID("bedrockiumHelmet");
IDRegistry.genItemID("bedrockiumChestplate");
IDRegistry.genItemID("bedrockiumLeggings");
IDRegistry.genItemID("bedrockiumBoots");

Item.createArmorItem("bedrockiumHelmet", "Bedrockium Plate Helmet", {name: "bedrockiumPlateHelmet"}, {type: "helmet", armor: 7, durability: 7000, texture: "armor/bedrockium_plate_1.png"});
Item.createArmorItem("bedrockiumChestplate", "Bedrock Plate Chestplate", {name: "bedrockiumPlateChestplate"}, {type: "chestplate", armor: 9, durability: 7000, texture: "armor/bedrockium_plate_1.png"});
Item.createArmorItem("bedrockiumLeggings", "Bedrock Plate Leggings", {name: "bedrockiumPlateLeggings"}, {type: "leggings", armor: 8, durability: 7000, texture: "armor/bedrockium_plate_2.png"});
Item.createArmorItem("bedrockiumBoots", "Bedrock Plate Boots", {name: "bedrockiumPlateBoots"}, {type: "boots", armor: 6, durability: 7000, texture: "armor/bedrockium_plate_1.png"});





Recipes.addShaped({id: 7, count: 1, data: 0}, [
		"aba",
		"bab",
		"aba"
	], ['a', 49, 0, 'b', 264, 0]);



Recipes.addShaped({id: ItemID.diamondStick, count: 1, data: 0}, [
		"a  ",
		"a  ",
		"   "
	], ['a', 264, 0]);



Recipes.addShaped({id: ItemID.bedrockiumBlend, count: 1, data: 0}, [
		"ab ",
		"ba ",
		"   "
	], ['a', 7, 0, 'b', ItemID.bedrockiumShard, 0]);



Recipes.addFurnace(ItemID.bedrockiumBlend, ItemID.bedrockiumPlate, 0)






Recipes.addShaped({id: ItemID.bedrockSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', 7, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', 7, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 7, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', 7, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', 7, 0, 'b', ItemID.diamondStick, 0]);



Recipes.addShaped({id: ItemID.bedrockiumSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.bedrockiumPlate, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockiumShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.bedrockiumPlate, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockiumPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.bedrockiumPlate, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockiumAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.bedrockiumPlate, 0, 'b', ItemID.diamondStick, 0]);

Recipes.addShaped({id: ItemID.bedrockiumHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.bedrockiumPlate, 0, 'b', ItemID.diamondStick, 0]);







Recipes.addShaped({id: ItemID.bedrockHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 7, 0]);

Recipes.addShaped({id: ItemID.bedrockChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 7, 0]);

Recipes.addShaped({id: ItemID.bedrockLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 7, 0]);

Recipes.addShaped({id: ItemID.bedrockBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 7, 0]);



Recipes.addShaped({id: ItemID.bedrockiumHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.bedrockiumPlate, 0]);

Recipes.addShaped({id: ItemID.bedrockiumChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.bedrockiumPlate, 0]);

Recipes.addShaped({id: ItemID.bedrockiumLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.bedrockiumPlate, 0]);

Recipes.addShaped({id: ItemID.bedrockiumBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.bedrockiumPlate, 0]);





Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bedrockiumOre, 0, 5);
    }
}
)