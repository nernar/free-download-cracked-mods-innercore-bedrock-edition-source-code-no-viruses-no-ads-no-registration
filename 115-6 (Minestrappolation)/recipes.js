Item.setMaxDamage(ItemID.ironhammer, CRAFTING_TOOL_ITEM_MAX_DAMAGE);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Recipes.addShaped({id: ItemID.ironhammer, count: 1, data: 0}, [
	"bbb",
	"bab",
	" a "
], ['a', 280, 0, 'b', 265, 0]);

	Callback.addCallback("PostLoaded", function(){
Recipes.deleteRecipe({id: 54, count: 1, data: 0}) 
	addRecipeWithCraftingTool({id: ItemID.titaniumingot, count: 1, data: 0}, [{id: ItemID.titaniumchunk, data: 0}], ItemID.ironhammer);
	addRecipeWithCraftingTool({id: ItemID.toriteingot, count: 1, data: 0}, [{id: ItemID.toritechunk, data: 0}], ItemID.ironhammer);
		addRecipeWithCraftingTool({id: 266, count: 2, data: 0}, [{id: ItemID.goldchunk, data: 0}], ItemID.ironhammer);
		addRecipeWithCraftingTool({id: 265, count: 2, data: 0}, [{id: ItemID.ironchunk, data: 0}], ItemID.ironhammer);
		addRecipeWithCraftingTool({id: ItemID.ingotTin, count: 2, data: 0}, [{id: ItemID.tinchunk, data: 0}], ItemID.ironhammer);
	addRecipeWithCraftingTool({id: ItemID.ingotCopper, count: 2, data: 0}, [{id: ItemID.copperchunk, data: 0}], ItemID.ironhammer);
Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
Recipes.addFurnace(350, ItemID.friedfish, 0);
Recipes.addFurnace(463, ItemID.friedsalmon, 0);
Recipes.addFurnace(393, ItemID.fries, 0);

Recipes.addShaped({id: ItemID.sugarcookie, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', 353, 0, 'b', 357, 0]); 
Recipes.addShaped({id: ItemID.applepie, count: 1, data: 0}, [
	"abc",
	"   ",
	"   "
], ['a', 344, 0, 'b', 260, 0, 'c', 353, 0]); 
Recipes.addShaped({id: ItemID.blueberrypie, count: 1, data: 0}, [
	"abc",
	"   ",
	"   "
], ['a', 344, 0, 'b', ItemID.blueberry, 0, 'c', 353, 0]); 
Recipes.addShaped({id: ItemID.blackberrypie, count: 1, data: 0}, [
	"abc",
	"   ",
	"   "
], ['a', 344, 0, 'b', ItemID.blackberry, 0, 'c', 353, 0]); 
Recipes.addShaped({id: ItemID.raspberrypie, count: 1, data: 0}, [
	"abc",
	"   ",
	"   "
], ['a', 344, 0, 'b', ItemID.raspberry, 0, 'c', 353, 0]); 
Recipes.addShaped({id: ItemID.strawberrypie, count: 1, data: 0}, [
	"abc",
	"   ",
	"   "
], ['a', 344, 0, 'b', ItemID.strawberry, 0, 'c', 353, 0]); 
Recipes.addShaped({id: ItemID.salad, count: 1, data: 0}, [
	" b ",
	"acd",
	"   "
], ['a', ItemID.cabbage, 0, 'b', ItemID.celery, 0, 'c', 281, 0, 'd', ItemID.lettuce, 0]); 
Recipes.addShaped({id: ItemID.blueberrysalad, count: 1, data: 0}, [
	" b ",
	"aca",
	"   "
], ['a', ItemID.lettuce, 0, 'b', ItemID.blueberry, 0, 'c', 281, 0]); 
Recipes.addShaped({id: ItemID.blackberrysalad, count: 1, data: 0}, [
	" b ",
	"aca",
	"   "
], ['a', ItemID.lettuce, 0, 'b', ItemID.blackberry, 0, 'c', 281, 0]); 
Recipes.addShaped({id: ItemID.raspberrysalad, count: 1, data: 0}, [
	" b ",
	"aca",
	"   "
], ['a', ItemID.lettuce, 0, 'b', ItemID.raspberry, 0, 'c', 281, 0]); 
Recipes.addShaped({id: ItemID.strawberrysalad, count: 1, data: 0}, [
	" b ",
	"aca",
	"   "
], ['a', ItemID.lettuce, 0, 'b', ItemID.strawberry, 0, 'c', 281, 0]); 
Recipes.addShaped({id: ItemID.saltedchiken, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', ItemID.salt, 0, 'b', 366, 0]); 
Recipes.addShaped({id: ItemID.saltedporkchop, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', ItemID.salt, 0, 'b', 320, 0]); 
Recipes.addShaped({id: ItemID.saltedsteak, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', ItemID.salt, 0, 'b', 364, 0]); 
Recipes.addShaped({id: ItemID.saltedmutton, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', ItemID.salt, 0, 'b', 424, 0]); 
Recipes.addShaped({id: ItemID.saltedrabbit, count: 1, data: 0}, [
	"   ",
	" a ",
	" b "
], ['a', ItemID.salt, 0, 'b', 412, 0]); 
Recipes.addShaped({id: ItemID.hamburger, count: 1, data: 0}, [
	"aaa",
	"bcd",
	"aaa"
], ['a', 297, 0, 'b', ItemID.tomato, 0, 'c', 320, 0, 'd', ItemID.lettuce, 0]); 
Recipes.addShaped({id: ItemID.salmonburger, count: 1, data: 0}, [
	"aaa",
	"bcd",
	"aaa"
], ['a', 297, 0, 'b', ItemID.tomato, 0, 'c', ItemID.friedsalmon, 0, 'd', ItemID.lettuce, 0]); 
Recipes.addShaped({id: ItemID.pbj, count: 1, data: 0}, [
	"aaa",
	"b c",
	"aaa"
], ['a', 297, 0, 'b', ItemID.jam, 0, 'c', ItemID.peanutbutter, 0]); 
Recipes.addShaped({id: ItemID.ricebowl, count: 1, data: 0}, [
	" a ",
	" ba",
	" c "
], ['a', 280, 0, 'b', ItemID.rice, 0, 'c', 281, 0]); 
Recipes.addShaped({id: ItemID.onigiri, count: 1, data: 0}, [
	" a",
	"aaa",
	"aba"
], ['a', ItemID.rice, 0, 'b', ItemID.seaweed, 0]); 
Recipes.addShaped({id: ItemID.peanutbutter, count: 1, data: 0}, [
	" a",
	" a",
	"aba"
], ['a', ItemID.peanuts, 0, 'b', 374, 0]); 
Recipes.addShaped({id: ItemID.jam, count: 1, data: 0}, [
	" a ",
	" b ",
	"dce"
], ['a', ItemID.blueberry, 0, 'b', ItemID.blackberry, 0, 'c', 281, 0, 'd', ItemID.raspberry, 0, 'e', ItemID.strawberry, 0]); 
Recipes.addShaped({id: ItemID.fishandchips, count: 1, data: 0}, [
	"   ",
	"ab ",
	"   "
], ['a', ItemID.friedfish, 0, 'b', ItemID.fries, 0]); 

Recipes.addShaped({id: ItemID.coppersword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: ItemID.copperpickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: ItemID.copperaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: ItemID.coppershovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: ItemID.copperhoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: ItemID.tinhelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: ItemID.tinchestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: ItemID.tinleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: ItemID.tinboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: ItemID.meuroditehelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditechestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditeleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditeboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.toritehelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toritechestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toriteleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toriteboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.titaniumhelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumchestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumhelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumchestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumsword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', 369, 0, 'b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumpickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', 369, 0, 'b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', 369, 0, 'b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumshovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', 369, 0, 'b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.blaziumhoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', 369, 0, 'b', ItemID.blaziumingot, 0]);
Recipes.addShaped({id: ItemID.tinplate, count: 1, data: 0}, [
	"bbb",
	"bbb",
	"   "
], ['b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: ItemID.meuroditesword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditepickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditeaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditeshovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.gemMeurodite, 0]);
Recipes.addShaped({id: ItemID.meuroditehoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toritesword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toritepickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toriteaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toriteshovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.toriteingot, 0]);
Recipes.addShaped({id: ItemID.toritehoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumsword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumpickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumshovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.titaniumhoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', ItemID.reinforcedstick, 0, 'b', ItemID.titaniumingot, 0]);
Recipes.addShaped({id: ItemID.steelsword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', 280, 0, 'b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelpickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelaxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', 280, 0, 'b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelshovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelhoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.bronzeSword, count: 1, data: 0}, [
	" b ",
	" b ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzePickaxe, count: 1, data: 0}, [
	"bbb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeAxe, count: 1, data: 0}, [
	" bb",
	" ab",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeShovel, count: 1, data: 0}, [
	" b ",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeHoe, count: 1, data: 0}, [
	" bb",
	" a ",
	" a "
], ['a', 280, 0, 'b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.steelhelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelchestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelleggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.steelboots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.steelingot, 0]);
Recipes.addShaped({id: ItemID.bronzeHelmet, count: 1, data: 0}, [
	"bbb",
	"b b",
	"   "
], ['b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeChestplate, count: 1, data: 0}, [
	"b b",
	"bbb",
	"bbb"
], ['b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeLeggings, count: 1, data: 0}, [
	"bbb",
	"b b",
	"b b"
], ['b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: ItemID.bronzeBoots, count: 1, data: 0}, [
	"b b",
	"b b",
	"   "
], ['b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: BlockID.crate, count: 1, data: 0}, [
	"bbb",
	"aaa",
	"bbb"
], ['a', 280, 0, 'b', 5, 0]);
Recipes.addShaped({id: BlockID.barrel, count: 1, data: 0}, [
	"bbb",
	"aaa",
	"bbb"
], ['a', 5, 0, 'b', ItemID.ingotTin, 0]);
Recipes.addShaped({id: BlockID.blockCopper, count: 1, data: 0}, [
	"bbb",
	"bbb",
	"bbb"
], ['b', ItemID.ingotCopper, 0]);
Recipes.addShaped({id: BlockID.blockBronze, count: 1, data: 0}, [
	"bbb",
	"bbb",
	"bbb"
], ['b', ItemID.ingotBronze, 0]);
Recipes.addShaped({id: BlockID.alloyfurnace1, count: 1, data: 0}, [
	"ccc",
	"ada",
	"bbb"
], ['a', 61, 0, 'b', 1, 2, 'c', ItemID.tinplate, 0, 'd', ItemID.reinforcedstick, 0]); 

Recipes.addShaped({id: BlockID.carpentersbench, count: 1, data: 0}, [
	"ccc",
	"cac",
	"bbb"
], ['a', 58, 0, 'b', 17, 0, 'c', BlockID.blockCopper, 0]); 
Recipes.addShaped({id: BlockID.mcrusher, count: 1, data: 0}, [
	"ccc",
	"cac",
	"bbb"
], ['a', 33, 0, 'b', 49, 0, 'c', BlockID.blockBronze, 0]); 
});