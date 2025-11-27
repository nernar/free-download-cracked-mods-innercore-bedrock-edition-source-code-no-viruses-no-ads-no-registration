var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 50;
IDRegistry.genItemID("ironhammer");
Item.createItem("ironhammer", "ironhammer", {name: "iron_hammer"}, {stack: 1});
IDRegistry.genItemID("reinforcedstick");
Item.createItem("reinforcedstick", "reinforcedstick", {name: "reinforced_stick", meta: 0}, {isTech: false, stack: 64});
Item.setMaxDamage(ItemID.ironhammer, CRAFTING_TOOL_ITEM_MAX_DAMAGE);
function addRecipeWithCraftingTool(result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            } else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}
Recipes.addShaped({id: ItemID.ironhammer, count: 1, data: 0}, ["bbb", "bab", " a "], ["a", 280, 0, "b", 265, 0]);
Callback.addCallback("PostLoaded", function () {
    Recipes.deleteRecipe({id: 54, count: 1, data: 0});
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
    Recipes.addShaped({id: ItemID.sugarcookie, count: 1, data: 0}, ["   ", " a ", " b "], ["a", 353, 0, "b", 357, 0]);
    Recipes.addShaped({id: ItemID.applepie, count: 1, data: 0}, ["abc", "   ", "   "], ["a", 344, 0, "b", 260, 0, "c", 353, 0]);
    Recipes.addShaped({id: ItemID.blueberrypie, count: 1, data: 0}, ["abc", "   ", "   "], ["a", 344, 0, "b", ItemID.blueberry, 0, "c", 353, 0]);
    Recipes.addShaped({id: ItemID.blackberrypie, count: 1, data: 0}, ["abc", "   ", "   "], ["a", 344, 0, "b", ItemID.blackberry, 0, "c", 353, 0]);
    Recipes.addShaped({id: ItemID.raspberrypie, count: 1, data: 0}, ["abc", "   ", "   "], ["a", 344, 0, "b", ItemID.raspberry, 0, "c", 353, 0]);
    Recipes.addShaped({id: ItemID.strawberrypie, count: 1, data: 0}, ["abc", "   ", "   "], ["a", 344, 0, "b", ItemID.strawberry, 0, "c", 353, 0]);
    Recipes.addShaped({id: ItemID.salad, count: 1, data: 0}, [" b ", "acd", "   "], ["a", ItemID.cabbage, 0, "b", ItemID.celery, 0, "c", 281, 0, "d", ItemID.lettuce, 0]);
    Recipes.addShaped({id: ItemID.blueberrysalad, count: 1, data: 0}, [" b ", "aca", "   "], ["a", ItemID.lettuce, 0, "b", ItemID.blueberry, 0, "c", 281, 0]);
    Recipes.addShaped({id: ItemID.blackberrysalad, count: 1, data: 0}, [" b ", "aca", "   "], ["a", ItemID.lettuce, 0, "b", ItemID.blackberry, 0, "c", 281, 0]);
    Recipes.addShaped({id: ItemID.raspberrysalad, count: 1, data: 0}, [" b ", "aca", "   "], ["a", ItemID.lettuce, 0, "b", ItemID.raspberry, 0, "c", 281, 0]);
    Recipes.addShaped({id: ItemID.strawberrysalad, count: 1, data: 0}, [" b ", "aca", "   "], ["a", ItemID.lettuce, 0, "b", ItemID.strawberry, 0, "c", 281, 0]);
    Recipes.addShaped({id: ItemID.saltedchicken, count: 1, data: 0}, ["   ", " a ", " b "], ["a", ItemID.salt, 0, "b", 366, 0]);
    Recipes.addShaped({id: ItemID.saltedporkchop, count: 1, data: 0}, ["   ", " a ", " b "], ["a", ItemID.salt, 0, "b", 320, 0]);
    Recipes.addShaped({id: ItemID.saltedsteak, count: 1, data: 0}, ["   ", " a ", " b "], ["a", ItemID.salt, 0, "b", 364, 0]);
    Recipes.addShaped({id: ItemID.saltedmutton, count: 1, data: 0}, ["   ", " a ", " b "], ["a", ItemID.salt, 0, "b", 424, 0]);
    Recipes.addShaped({id: ItemID.saltedrabbit, count: 1, data: 0}, ["   ", " a ", " b "], ["a", ItemID.salt, 0, "b", 412, 0]);
    Recipes.addShaped({id: ItemID.hamburger, count: 1, data: 0}, ["aaa", "bcd", "aaa"], ["a", 297, 0, "b", ItemID.tomato, 0, "c", 320, 0, "d", ItemID.lettuce, 0]);
    Recipes.addShaped({id: ItemID.salmonburger, count: 1, data: 0}, ["aaa", "bcd", "aaa"], ["a", 297, 0, "b", ItemID.tomato, 0, "c", ItemID.friedsalmon, 0, "d", ItemID.lettuce, 0]);
    Recipes.addShaped({id: ItemID.pbj, count: 1, data: 0}, ["aaa", "b c", "aaa"], ["a", 297, 0, "b", ItemID.jam, 0, "c", ItemID.peanutbutter, 0]);
    Recipes.addShaped({id: ItemID.ricebowl, count: 1, data: 0}, [" a ", " ba", " c "], ["a", 280, 0, "b", ItemID.rice, 0, "c", 281, 0]);
    Recipes.addShaped({id: ItemID.onigiri, count: 1, data: 0}, [" a", "aaa", "aba"], ["a", ItemID.rice, 0, "b", ItemID.seaweed, 0]);
    Recipes.addShaped({id: ItemID.peanutbutter, count: 1, data: 0}, [" a", " a", "aba"], ["a", ItemID.peanuts, 0, "b", 374, 0]);
    Recipes.addShaped({id: ItemID.jam, count: 1, data: 0}, [" a ", " b ", "dce"], ["a", ItemID.blueberry, 0, "b", ItemID.blackberry, 0, "c", 374, 0, "d", ItemID.raspberry, 0, "e", ItemID.strawberry, 0]);
    Recipes.addShaped({id: ItemID.fishandchips, count: 1, data: 0}, ["   ", "ab ", "   "], ["a", ItemID.friedfish, 0, "b", ItemID.fries, 0]);
    Recipes.addShaped({id: ItemID.coppersword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", 280, 0, "b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: ItemID.copperpickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: ItemID.copperaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", 280, 0, "b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: ItemID.coppershovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: ItemID.copperhoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: ItemID.tinhelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: ItemID.tinchestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: ItemID.tinleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: ItemID.tinboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: ItemID.meuroditehelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditechestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditeleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditeboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.toritehelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toritechestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toriteleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toriteboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumhelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumchestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumhelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumchestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumsword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", 369, 0, "b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumpickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", 369, 0, "b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", 369, 0, "b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumshovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", 369, 0, "b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.blaziumhoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", 369, 0, "b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: ItemID.tinplate, count: 1, data: 0}, ["bbb", "bbb", "   "], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: ItemID.meuroditesword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditepickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditeaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditeshovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: ItemID.meuroditehoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toritesword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toritepickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toriteaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toriteshovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: ItemID.toritehoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumsword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumpickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumshovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.titaniumhoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", ItemID.reinforcedstick, 0, "b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: ItemID.steelsword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", 280, 0, "b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelpickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", 280, 0, "b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelaxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", 280, 0, "b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelshovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", 280, 0, "b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelhoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", 280, 0, "b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.bronzeSword, count: 1, data: 0}, [" b ", " b ", " a "], ["a", 280, 0, "b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzePickaxe, count: 1, data: 0}, ["bbb", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeAxe, count: 1, data: 0}, [" bb", " ab", " a "], ["a", 280, 0, "b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeShovel, count: 1, data: 0}, [" b ", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeHoe, count: 1, data: 0}, [" bb", " a ", " a "], ["a", 280, 0, "b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.steelhelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelchestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelleggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.steelboots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: ItemID.bronzeHelmet, count: 1, data: 0}, ["bbb", "b b", "   "], ["b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeChestplate, count: 1, data: 0}, ["b b", "bbb", "bbb"], ["b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeLeggings, count: 1, data: 0}, ["bbb", "b b", "b b"], ["b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: ItemID.bronzeBoots, count: 1, data: 0}, ["b b", "b b", "   "], ["b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: BlockID.crate, count: 1, data: 0}, ["bbb", "aaa", "bbb"], ["a", 280, 0, "b", 5, 0]);
    Recipes.addShaped({id: BlockID.barrel, count: 1, data: 0}, ["bbb", "aaa", "bbb"], ["a", 5, 0, "b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: BlockID.blockCopper, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.ingotCopper, 0]);
    Recipes.addShaped({id: BlockID.blockTin, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.ingotTin, 0]);
    Recipes.addShaped({id: BlockID.blockMeurodite, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.gemMeurodite, 0]);
    Recipes.addShaped({id: BlockID.blockTorite, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.toriteingot, 0]);
    Recipes.addShaped({id: BlockID.blockTitanium, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.titaniumingot, 0]);
    Recipes.addShaped({id: BlockID.blockSalt, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.shardsalt, 0]);
    Recipes.addShaped({id: BlockID.blockSunstone, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.shardsunstone, 0]);
    Recipes.addShaped({id: BlockID.blockSteel, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.steelingot, 0]);
    Recipes.addShaped({id: BlockID.blockBlazium, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.blaziumingot, 0]);
    Recipes.addShaped({id: BlockID.blockBronze, count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID.ingotBronze, 0]);
    Recipes.addShaped({id: BlockID.alloyfurnace1, count: 1, data: 0}, ["ccc", "ada", "bbb"], ["a", 61, 0, "b", 1, 2, "c", ItemID.tinplate, 0, "d", ItemID.reinforcedstick, 0]);
    Recipes.addShaped({id: BlockID.carpentersbench, count: 1, data: 0}, ["ccc", "cac", "bbb"], ["a", 58, 0, "b", 17, 0, "c", BlockID.blockCopper, 0]);
    Recipes.addShaped({id: BlockID.mcrusher, count: 1, data: 0}, ["ccc", "cac", "bbb"], ["a", 33, 0, "b", 49, 0, "c", BlockID.blockBronze, 0]);
});
IDRegistry.genItemID("seaweed");
Item.createItem("seaweed", "Seaweed", {name: "seaweed", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("salt");
Item.createItem("salt", "Salt", {name: "salt", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("blueberry");
Item.createFoodItem("blueberry", "Blueberry", {name: "blueberry", meta: 0}, {food: 1});
IDRegistry.genItemID("blackberry");
Item.createFoodItem("blackberry", "Blackberry", {name: "blackberry", meta: 0}, {food: 1});
IDRegistry.genItemID("raspberry");
Item.createFoodItem("raspberry", "Raspberry", {name: "raspberry", meta: 0}, {food: 1});
IDRegistry.genItemID("strawberry");
Item.createFoodItem("strawberry", "Strawberry", {name: "strawberry", meta: 0}, {food: 1});
IDRegistry.genItemID("onion");
Item.createFoodItem("onion", "Onion", {name: "onion", meta: 0}, {food: 2});
IDRegistry.genItemID("lettuce");
Item.createFoodItem("lettuce", "lettuce", {name: "lettuce", meta: 0}, {food: 4});
IDRegistry.genItemID("corn");
Item.createFoodItem("corn", "Corn", {name: "corn", meta: 0}, {food: 5});
IDRegistry.genItemID("peanuts");
Item.createFoodItem("peanuts", "Peanuts", {name: "peanuts", meta: 0}, {food: 6});
IDRegistry.genItemID("pepperSeed");
Item.createFoodItem("pepperSeed", "pepperSeed", {name: "pepperSeed", meta: 0});
IDRegistry.genItemID("pepper");
Item.createFoodItem("pepper", "pepper", {name: "pepper", meta: 0}, {food: 4});
IDRegistry.genItemID("cabbageseed");
Item.createItem("cabbageseed", "cabbageseed", {name: "cabbageseed", meta: 0}, {stack: 64});
IDRegistry.genItemID("cabbage");
Item.createFoodItem("cabbage", "cabbage", {name: "cabbage", meta: 0}, {food: 4});
IDRegistry.genItemID("celeryseed");
Item.createItem("celeryseed", "celeryseed", {name: "celeryseed", meta: 0}, {stack: 64});
IDRegistry.genItemID("celery");
Item.createFoodItem("celery", "celery", {name: "celery", meta: 0}, {food: 4});
IDRegistry.genItemID("tomatoseed");
Item.createItem("tomatoseed", "tomatoseed", {name: "tomatoseed", meta: 0}, {stack: 64});
IDRegistry.genItemID("tomato");
Item.createFoodItem("tomato", "tomato", {name: "tomato", meta: 0}, {food: 4});
IDRegistry.genItemID("rice");
Item.createItem("rice", "rice", {name: "rice", meta: 0}, {stack: 64});
IDRegistry.genItemID("applepie");
IDRegistry.genItemID("sugarcookie");
Item.createFoodItem("sugarcookie", "sugarcookie", {name: "sugar_cookie", meta: 0}, {food: 3});
Item.createFoodItem("applepie", "applepie", {name: "apple_pie", meta: 0}, {food: 6});
IDRegistry.genItemID("blueberrypie");
Item.createFoodItem("blueberrypie", "blueberrypie", {name: "blueberry_pie", meta: 0}, {food: 6});
IDRegistry.genItemID("blackberrypie");
Item.createFoodItem("blackberrypie", "blackberrypie", {name: "blackberry_pie", meta: 0}, {food: 6});
IDRegistry.genItemID("raspberrypie");
Item.createFoodItem("raspberrypie", "raspberrypie", {name: "raspberry_pie", meta: 0}, {food: 6});
IDRegistry.genItemID("strawberrypie");
Item.createFoodItem("strawberrypie", "strawberrypie", {name: "strawberry_pie", meta: 0}, {food: 6});
IDRegistry.genItemID("salad");
Item.createFoodItem("salad", "salad", {name: "salad", meta: 0}, {food: 6});
IDRegistry.genItemID("blueberrysalad");
Item.createFoodItem("blueberrysalad", "blueberrysalad", {name: "blueberry_salad", meta: 0}, {food: 5});
IDRegistry.genItemID("blackberrysalad");
Item.createFoodItem("blackberrysalad", "blackberrysalad", {name: "blackberry_salad", meta: 0}, {food: 5});
IDRegistry.genItemID("raspberrysalad");
Item.createFoodItem("raspberrysalad", "raspberrysalad", {name: "raspberry_salad", meta: 0}, {food: 5});
IDRegistry.genItemID("strawberrysalad");
Item.createFoodItem("strawberrysalad", "strawberrysalad", {name: "strawberry_salad", meta: 0}, {food: 5});
IDRegistry.genItemID("friedegg");
Item.createFoodItem("friedegg", "friedegg", {name: "fried_egg", meta: 0}, {food: 5});
IDRegistry.genItemID("fries");
Item.createFoodItem("fries", "fries", {name: "fries", meta: 0}, {food: 7});
IDRegistry.genItemID("friedfish");
Item.createFoodItem("friedfish", "friedfish", {name: "fried_fish", meta: 0}, {food: 7});
IDRegistry.genItemID("friedsalmon");
Item.createFoodItem("friedsalmon", "friedsalmon", {name: "fried_salmon", meta: 0}, {food: 7});
IDRegistry.genItemID("fishandchips");
Item.createFoodItem("fishandchips", "fishandchips", {name: "fish_and_chips", meta: 0}, {food: 10});
IDRegistry.genItemID("hamburger");
Item.createFoodItem("hamburger", "hamburger", {name: "hamburger", meta: 0}, {food: 20});
IDRegistry.genItemID("salmonburger");
Item.createFoodItem("salmonburger", "salmonburger", {name: "salmon_burger", meta: 0}, {food: 20});
IDRegistry.genItemID("saltedchicken");
Item.createFoodItem("saltedchicken", "saltedchicken", {name: "salted_chicken", meta: 0}, {food: 7});
IDRegistry.genItemID("saltedmutton");
Item.createFoodItem("saltedmutton", "saltedmutton", {name: "salted_mutton", meta: 0}, {food: 7});
IDRegistry.genItemID("saltedporkchop");
Item.createFoodItem("saltedporkchop", "saltedporkchop", {name: "salted_porkchop", meta: 0}, {food: 9});
IDRegistry.genItemID("saltedrabbit");
Item.createFoodItem("saltedrabbit", "saltedrabbit", {name: "salted_rabbit", meta: 0}, {food: 7});
IDRegistry.genItemID("saltedsteak");
Item.createFoodItem("saltedsteak", "saltedsteak", {name: "salted_steak", meta: 0}, {food: 9});
IDRegistry.genItemID("ricebowl");
Item.createFoodItem("ricebowl", "ricebowl", {name: "rice_bowl", meta: 0}, {food: 6});
IDRegistry.genItemID("onigiri");
Item.createFoodItem("onigiri", "onigiri", {name: "onigiri", meta: 0}, {food: 12});
IDRegistry.genItemID("jam");
Item.createFoodItem("jam", "jam", {name: "jam", meta: 0}, {food: 2});
IDRegistry.genItemID("peanutbutter");
Item.createFoodItem("peanutbutter", "peanutbutter", {name: "peanut_butter", meta: 0}, {food: 2});
IDRegistry.genItemID("pbj");
Item.createFoodItem("pbj", "pbj", {name: "pbj", meta: 0}, {food: 7});
IDRegistry.genItemID("popcorn");
Item.createFoodItem("popcorn", "popcorn", {name: "popcorn", meta: 0}, {food: 6});
IDRegistry.genItemID("tomatosoup");
Item.createFoodItem("tomatosoup", "tomatosoup", {name: "tomato_soup", meta: 0}, {food: 6});
importLib("ToolType", "*");
importLib("Harvest_aCore", "*");
importLib("Plant_Model", "*");
var GUI_BAR_STANDART_SCALE = 3.2;
var debugMode = false;
var BLOCK_TYPE_STONE = Block.createSpecialType({base: 1, solid: true, destroytime: 3, explosionres: 3}, "stone");
var BLOCK_TYPE_GLOWING = Block.createSpecialType({base: 50, solid: true, destroytime: 3, explosionres: 3, lightopacity: 0, lightlevel: 15});
IDRegistry.genBlockID("blueberrybush");
Block.createBlockWithRotation("blueberrybush", [{name: "Blueberry Bush", texture: [["blueberry_bush", 0], ["blueberry_bush", 0], ["blueberry_bush", 0], ["blueberry_bush", 0], ["blueberry_bush", 0], ["blueberry_bush", 0]], inCreative: true}]);
IDRegistry.genBlockID("blackberrybush");
Block.createBlockWithRotation("blackberrybush", [{name: "Blackberry Bush", texture: [["blackberry_bush", 0], ["blackberry_bush", 0], ["blackberry_bush", 0], ["blackberry_bush", 0], ["blackberry_bush", 0], ["blackberry_bush", 0]], inCreative: true}]);
IDRegistry.genBlockID("raspberrybush");
Block.createBlockWithRotation("raspberrybush", [{name: "Raspberry Bush", texture: [["raspberry_bush", 0], ["raspberry_bush", 0], ["raspberry_bush", 0], ["raspberry_bush", 0], ["raspberry_bush", 0], ["raspberry_bush", 0]], inCreative: true}]);
IDRegistry.genBlockID("strawberrybush");
Block.createBlockWithRotation("strawberrybush", [{name: "Strawberry Bush", texture: [["strawberry_bush", 0], ["strawberry_bush", 0], ["strawberry_bush", 0], ["strawberry_bush", 0], ["strawberry_bush", 0], ["strawberry_bush", 0]], inCreative: true}]);
IDRegistry.genBlockID("seaweedbl");
Block.createBlockWithRotation("seaweedbl", [{name: "seaweedbl", texture: [["void", 0], ["void", 0], ["seaweedbl", 0], ["seaweedbl", 0], ["seaweedbl", 0], ["seaweedbl", 0]], inCreative: false}]);
Block.registerDropFunction("seaweedbl", function (coords, blockID, blockData, level) {
    var drop = [];
    if (Math.random() < 1) {
        drop.push([ItemID.seaweed, 1 + parseInt(Math.random() * 2), 0]);
    }
    return drop;
});
var SaltBiomes = [0, 24, 10];
PlantModel.crop(BlockID.seaweedbl, 0);
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < 100) {
        for (var idd in SaltBiomes) {
            var id = SaltBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.seaweedbl, 0);
            }
        }
    }
});
Block.registerDropFunction("blackberrybush", function (coords, blockID, blockData, level) {
    var drop = [];
    if (Math.random() < 1) {
        drop.push([ItemID.blackberry, 1 + parseInt(Math.random() * 2), 0]);
    }
    return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < 0.05) {
        for (var idd in BerryBiomes) {
            var id = BerryBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.blackberrybush, 0);
                if (Math.random() < 0.0005) {
                }
            }
        }
    }
});
Block.registerDropFunction("blueberrybush", function (coords, blockID, blockData, level) {
    var drop = [];
    if (Math.random() < 1) {
        drop.push([ItemID.blueberry, 1 + parseInt(Math.random() * 2), 0]);
    }
    return drop;
});
var BlueberryCount = 3;
var BerryBiomes = [1, 4, 18, 27, 28, 13];
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < 0.05) {
        for (var idd in BerryBiomes) {
            var id = BerryBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.blueberrybush, 0);
                if (Math.random() < 0.0005) {
                }
            }
        }
    }
});
Block.registerDropFunction("raspberrybush", function (coords, blockID, blockData, level) {
    var drop = [];
    if (Math.random() < 1) {
        drop.push([ItemID.raspberry, 1 + parseInt(Math.random() * 2), 0]);
    }
    return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < 0.05) {
        for (var idd in BerryBiomes) {
            var id = BerryBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.raspberrybush, 0);
                if (Math.random() < 0.0005) {
                }
            }
        }
    }
});
Block.registerDropFunction("strawberrybush", function (coords, blockID, blockData, level) {
    var drop = [];
    if (Math.random() < 1) {
        drop.push([ItemID.strawberry, 1 + parseInt(Math.random() * 2), 0]);
    }
    return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if (Math.random() < 0.05) {
        for (var idd in BerryBiomes) {
            var id = BerryBiomes[idd];
            if ((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16) == id)) {
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.strawberrybush, 0);
                if (Math.random() < 0.0005) {
                }
            }
        }
    }
});
IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "tin_ingot", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("tinplate");
Item.createItem("tinplate", "Tin Plate", {name: "tin_plate", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [{name: "Tin Ore", texture: [["tin_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 2, true);
Block.setDestroyLevel("oreTin", 2);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 8; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 52);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTin, 6, 10);
    }
});
IDRegistry.genItemID("tinhelmet");
IDRegistry.genItemID("tinchestplate");
IDRegistry.genItemID("tinleggings");
IDRegistry.genItemID("tinboots");
Item.createArmorItem("tinhelmet", "Tin Helmet", {name: "tin_helmet", meta: 0}, {type: "helmet", armor: 2, durability: 180, texture: "armor/tin_1.png"});
Item.createArmorItem("tinchestplate", "Tin Chestplate", {name: "tin_chestplate", meta: 0}, {type: "chestplate", armor: 3, durability: 200, texture: "armor/tin_1.png"});
Item.createArmorItem("tinleggings", "Tin Leggings", {name: "tin_leggings", meta: 0}, {type: "leggings", armor: 2, durability: 190, texture: "armor/tin_2.png"});
Item.createArmorItem("tinboots", "Tin Boots", {name: "tin_boots", meta: 0}, {type: "boots", armor: 1, durability: 170, texture: "armor/tin_1.png"});
IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "copper_ingot", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 8, 12);
    }
});
IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [{name: "Copper Ore", texture: [["copper_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
ToolAPI.getBlockDestroyLevel(BlockID.oreCopper, 3);
ToolAPI.addToolMaterial("copper", {durability: 200, level: 2, efficiency: 2, damage: 1, enchantability: 30});
IDRegistry.genItemID("copperpickaxe");
Item.createItem("copperpickaxe", "Copper Pickaxe", {name: "copper_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("copperaxe");
Item.createItem("copperaxe", "Copper Axe", {name: "copper_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("coppershovel");
Item.createItem("coppershovel", "Copper Shovel", {name: "copper_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("coppersword");
Item.createItem("coppersword", "Copper Sword", {name: "copper_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("copperhoe");
Item.createItem("copperhoe", "Copper Hoe", {name: "copper_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.copperhoe, "copper", ToolType.hoe);
ToolAPI.setTool(ItemID.copperpickaxe, "copper", ToolType.pickaxe);
ToolAPI.setTool(ItemID.copperaxe, "copper", ToolType.axe);
ToolAPI.setTool(ItemID.coppershovel, "copper", ToolType.shovel);
ToolAPI.setTool(ItemID.coppersword, "copper", ToolType.sword);
IDRegistry.genItemID("chunkUranium");
Item.createItem("chunkUranium", "Uranium", {name: "uranium", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 3; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 48);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreUranium, 1, 4);
    }
});
IDRegistry.genBlockID("oreUranium");
Block.createBlock("oreUranium", [{name: "Uranium Ore", texture: [["uranium_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreUranium, "stone", 3, true);
Block.registerDropFunction("oreUranium", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.chunkUranium, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genItemID("plutonium");
Item.createItem("plutonium", "Plutonium", {name: "plutonium", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 3; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 48);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.plutoniumore, 1, 4);
    }
});
IDRegistry.genBlockID("plutoniumore");
Block.createBlock("plutoniumore", [{name: "Plutonium Ore", texture: [["plutonium_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.plutoniumore, "stone", 3, true);
Block.registerDropFunction("plutoniumore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.plutonium, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genItemID("gemMeurodite");
Item.createItem("gemMeurodite", "Meurodite Gem", {name: "gem_meurodite", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 7; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.meuroditeore, 7, 4);
    }
});
IDRegistry.genBlockID("meuroditeore");
Block.createBlock("meuroditeore", [{name: "Meurodite Ore", texture: [["meurodite_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.meuroditeore, "stone", 3, true);
Block.registerDropFunction("meuroditeore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.gemMeurodite, 1, 0]];
    }
    return [];
}, 3);
ToolAPI.addToolMaterial("meurodite", {durability: 700, level: 3, efficiency: 4, damage: 4, enchantability: 30});
IDRegistry.genItemID("meuroditepickaxe");
Item.createItem("meuroditepickaxe", "Meurodite Pickaxe", {name: "meurodite_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("meuroditeaxe");
Item.createItem("meuroditeaxe", "Meurodite Axe", {name: "meurodite_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("meuroditeshovel");
Item.createItem("meuroditeshovel", "Meurodite Shovel", {name: "meurodite_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("meuroditesword");
Item.createItem("meuroditesword", "Meurodite Sword", {name: "meurodite_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("meuroditehoe");
Item.createItem("meuroditehoe", "Meurodite Hoe", {name: "meurodite_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.meuroditehoe, "meurodite", ToolType.hoe);
ToolAPI.setTool(ItemID.meuroditepickaxe, "meurodite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.meuroditeaxe, "meurodite", ToolType.axe);
ToolAPI.setTool(ItemID.meuroditeshovel, "meurodite", ToolType.shovel);
ToolAPI.setTool(ItemID.meuroditesword, "meurodite", ToolType.sword);
IDRegistry.genItemID("meuroditehelmet");
IDRegistry.genItemID("meuroditechestplate");
IDRegistry.genItemID("meuroditeleggings");
IDRegistry.genItemID("meuroditeboots");
Item.createArmorItem("meuroditehelmet", "Meurodite Helmet", {name: "meurodite_helmet", meta: 0}, {type: "helmet", armor: 3, durability: 500, texture: "armor/meurodite_1.png"});
Item.createArmorItem("meuroditechestplate", "Meurodite Chestplate", {name: "meurodite_chestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/meurodite_1.png"});
Item.createArmorItem("meuroditeleggings", "Meurodite Leggings", {name: "meurodite_leggings", meta: 0}, {type: "leggings", armor: 4, durability: 500, texture: "armor/meurodite_2.png"});
Item.createArmorItem("meuroditeboots", "Meurodite Boots", {name: "meurodite_boots", meta: 0}, {type: "boots", armor: 1, durability: 500, texture: "armor/meurodite_1.png"});
Callback.addCallback("tick", function () {
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    if (helmet.id == ItemID.meuroditehelmet && chest.id == ItemID.meuroditechestplate && legs.id == ItemID.meuroditeleggings && boots.id == ItemID.meuroditeboots) {
        Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
    }
});
IDRegistry.genItemID("toriteingot");
Item.createItem("toriteingot", "Torite Ingot", {name: "torite_ingot", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 5; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 25);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.toriteore, 7, 4);
    }
});
IDRegistry.genBlockID("toriteore");
Block.createBlock("toriteore", [{name: "Torite Ore", texture: [["torite_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.toriteore, "stone", 3, true);
ToolAPI.addToolMaterial("torite", {durability: 1000, level: 3, efficiency: 6, damage: 6, enchantability: 30});
IDRegistry.genItemID("toritepickaxe");
Item.createItem("toritepickaxe", "Torite Pickaxe", {name: "torite_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("toriteaxe");
Item.createItem("toriteaxe", "Torite Axe", {name: "torite_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("toriteshovel");
Item.createItem("toriteshovel", "Torite Shovel", {name: "torite_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("toritesword");
Item.createItem("toritesword", "Torite Sword", {name: "torite_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("toritehoe");
Item.createItem("toritehoe", "Torite Hoe", {name: "torite_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.toritehoe, "torite", ToolType.hoe);
ToolAPI.setTool(ItemID.toritepickaxe, "torite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.toriteaxe, "torite", ToolType.axe);
ToolAPI.setTool(ItemID.toriteshovel, "torite", ToolType.shovel);
ToolAPI.setTool(ItemID.toritesword, "torite", ToolType.sword);
IDRegistry.genItemID("toritehelmet");
IDRegistry.genItemID("toritechestplate");
IDRegistry.genItemID("toriteleggings");
IDRegistry.genItemID("toriteboots");
Item.createArmorItem("toritehelmet", "Torite Helmet", {name: "torite_helmet", meta: 0}, {type: "helmet", armor: 5, durability: 700, texture: "armor/torite_1.png"});
Item.createArmorItem("toritechestplate", "Torite Chestplate", {name: "torite_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 700, texture: "armor/torite_1.png"});
Item.createArmorItem("toriteleggings", "Torite Leggings", {name: "torite_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/torite_2.png"});
Item.createArmorItem("toriteboots", "Torite Boots", {name: "torite_boots", meta: 0}, {type: "boots", armor: 4, durability: 700, texture: "armor/torite_1.png"});
Callback.addCallback("tick", function () {
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    if (helmet.id == ItemID.titaniumhelmet && chest.id == ItemID.titaniumchestplate && legs.id == ItemID.titaniumleggings && boots.id == ItemID.titaniumboots) {
        Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 3);
    }
});
IDRegistry.genItemID("shardsunstone");
Item.createItem("shardsunstone", "Sunstone Shard", {name: "shard_sunstone", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 7; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sunstoneore, 7, 4);
    }
});
IDRegistry.genBlockID("sunstoneore");
Block.createBlock("sunstoneore", [{name: "Sunstone Ore", texture: [["sunstone_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.sunstoneore, "stone", 3, true);
Block.registerDropFunction("sunstoneore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.shardsunstone, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genItemID("shardsalt");
Item.createItem("shardsalt", "Salt Shard", {name: "shard_salt", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 8; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 100);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.saltore, 7, 15);
    }
});
IDRegistry.genBlockID("saltore");
Block.createBlock("saltore", [{name: "Salt Ore", texture: [["salt_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.saltore, "stone", 2, true);
Block.registerDropFunction("saltore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.shardsalt, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genItemID("radiantquartz");
Item.createItem("radiantquartz", "Radiant Quartz", {name: "radiant_quartz", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 3; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.radiantore, 1, 2);
    }
});
IDRegistry.genBlockID("radiantore");
Block.createBlock("radiantore", [{name: "Radiant Ore", texture: [["radiant_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.radiantore, "stone", 3, true);
Block.registerDropFunction("radiantore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.radiantquartz, 2, 0]];
    }
    return [];
}, 3);
IDRegistry.genItemID("titaniumingot");
Item.createItem("titaniumingot", "Titanium Ingot", {name: "titanium_ingot", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 3; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 15);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.titaniumore, 1, 4);
    }
});
IDRegistry.genBlockID("titaniumore");
Block.createBlock("titaniumore", [{name: "Titanium Ore", texture: [["titanium_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.titaniumore, "stone", 3, true);
ToolAPI.addToolMaterial("titanium", {durability: 2000, level: 4, efficiency: 10, damage: 10, enchantability: 30});
IDRegistry.genItemID("titaniumpickaxe");
Item.createItem("titaniumpickaxe", "Titanium Pickaxe", {name: "titanium_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("titaniumaxe");
Item.createItem("titaniumaxe", "Titanium Axe", {name: "titanium_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("titaniumshovel");
Item.createItem("titaniumshovel", "Titanium Shovel", {name: "titanium_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("titaniumsword");
Item.createItem("titaniumsword", "Titanium Sword", {name: "titanium_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("titaniumhoe");
Item.createItem("titaniumhoe", "Titanium Hoe", {name: "titanium_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumhoe, "titanium", ToolType.hoe);
ToolAPI.setTool(ItemID.titaniumpickaxe, "titanium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.titaniumaxe, "titanium", ToolType.axe);
ToolAPI.setTool(ItemID.titaniumshovel, "titanium", ToolType.shovel);
ToolAPI.setTool(ItemID.titaniumsword, "titanium", ToolType.sword);
IDRegistry.genItemID("titaniumhelmet");
IDRegistry.genItemID("titaniumchestplate");
IDRegistry.genItemID("titaniumleggings");
IDRegistry.genItemID("titaniumboots");
Item.createArmorItem("titaniumhelmet", "Titanium Helmet", {name: "titanium_helmet", meta: 0}, {type: "helmet", armor: 4, durability: 1000, texture: "armor/titanium_1.png"});
Item.createArmorItem("titaniumchestplate", "Titanium Chestplate", {name: "titanium_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 1000, texture: "armor/titanium_1.png"});
Item.createArmorItem("titaniumleggings", "Titanium Leggings", {name: "titanium_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 1000, texture: "armor/titanium_2.png"});
Item.createArmorItem("titaniumboots", "Titanium Boots", {name: "titanium_boots", meta: 0}, {type: "boots", armor: 3, durability: 1000, texture: "armor/titanium_1.png"});
IDRegistry.genItemID("shardblazium");
Item.createItem("shardblazium", "Blazium Shard", {name: "shard_blazium", meta: 0}, {isTech: false, stack: 64});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 7; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.blaziumore, 7, 4);
    }
});
IDRegistry.genItemID("blaziumingot");
Item.createItem("blaziumingot", "Blazium Ingot", {name: "blazium_ingot", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genBlockID("blaziumore");
Block.createBlock("blaziumore", [{name: "Blazium Ore", texture: [["blazium_ore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.blaziumore, "stone", 3, true);
Block.registerDropFunction("blaziumore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.shardblazium, 1, 0]];
    }
    return [];
}, 3);
ToolAPI.addToolMaterial("blazium", {durability: 3000, level: 4, efficiency: 5, damage: 8, enchantability: 30});
IDRegistry.genItemID("blaziumpickaxe");
Item.createItem("blaziumpickaxe", "Blazium Pickaxe", {name: "blazium_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("blaziumaxe");
Item.createItem("blaziumaxe", "Blazium Axe", {name: "blazium_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("blaziumshovel");
Item.createItem("blaziumshovel", "Blazium Shovel", {name: "blazium_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("blaziumsword");
Item.createItem("blaziumsword", "Blazium Sword", {name: "blazium_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("blaziumhoe");
Item.createItem("blaziumhoe", "Blazium Hoe", {name: "blazium_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.blaziumhoe, "blazium", ToolType.hoe);
ToolAPI.setTool(ItemID.blaziumpickaxe, "blazium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.blaziumaxe, "blazium", ToolType.axe);
ToolAPI.setTool(ItemID.blaziumshovel, "blazium", ToolType.shovel);
ToolAPI.setTool(ItemID.blaziumsword, "blazium", ToolType.sword);
Block.registerDropFunctionForID(15, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[265, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(14, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[266, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(BlockID.oreCopper, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[ItemID.ingotCopper, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(BlockID.oreTin, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[ItemID.ingotTin, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(BlockID.toriteore, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[ItemID.toriteingot, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(BlockID.titaniumore, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumpickaxe) {
        return [[ItemID.titaniumingot, 1, 0]];
    } else {
        return [[id, 1, 0]];
    }
});
Block.registerDropFunctionForID(17, function (coords, id, data, diggingLevel, toolLevel) {
    if (Player.getCarriedItem().id === ItemID.blaziumaxe) {
        return [[263, 1, 1]];
    } else {
        return [[id, 1, 0]];
    }
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.blaziumsword) {
        World.setBlock(coords.x, coords.y + 1, coords.z, 51);
        ToolAPI.breakCarriedTool(1);
    }
});
IDRegistry.genItemID("blaziumhelmet");
IDRegistry.genItemID("blaziumchestplate");
IDRegistry.genItemID("blaziumleggings");
IDRegistry.genItemID("blaziumboots");
Item.createArmorItem("blaziumhelmet", "Blazium Helmet", {name: "blazium_helmet", meta: 0}, {type: "helmet", armor: 4, durability: 2000, texture: "armor/blazium_1.png"});
Item.createArmorItem("blaziumchestplate", "Blazium Chestplate", {name: "blazium_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 2000, texture: "armor/blazium_1.png"});
Item.createArmorItem("blaziumleggings", "Blazium Leggings", {name: "blazium_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/blazium_2.png"});
Item.createArmorItem("blaziumboots", "Blazium Boots", {name: "blazium_boots", meta: 0}, {type: "boots", armor: 3, durability: 2000, texture: "armor/blazium_1.png"});
Callback.addCallback("tick", function () {
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    if (helmet.id == ItemID.blaziumhelmet && chest.id == ItemID.blaziumchestplate && legs.id == ItemID.blaziumleggings && boots.id == ItemID.blaziumboots) {
        Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 25, 3);
    }
});
IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin", [{name: "Tin block", texture: [["block_tin", 0]], inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper", [{name: "Copper block", texture: [["copper_block", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.blockCopper, "stone", 2, true);
IDRegistry.genBlockID("blockBronze");
Block.createBlock("blockBronze", [{name: "bronze block", texture: [["bronze_block", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.blockBronze, "stone", 2, true);
IDRegistry.genBlockID("blockMeurodite");
Block.createBlock("blockMeurodite", [{name: "meurodite block", texture: [["block_meurodite", 0]], inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("blockTorite");
Block.createBlock("blockTorite", [{name: "Torite block", texture: [["block_torite", 0]], inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("blockSalt");
Block.createBlock("blockSalt", [{name: "salt block", texture: [["block_salt", 0]], inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("blockSunstone");
Block.createBlock("blockSunstone", [{name: "sunstone block", texture: [["block_sunstone", 0]], inCreative: true}], BLOCK_TYPE_GLOWING);
IDRegistry.genBlockID("blockBlazium");
Block.createBlock("blockBlazium", [{name: "Blazium block", texture: [["block_blazium", 0]], inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("blockSteel");
Block.createBlockWithRotation("blockSteel", [{name: "steel block", texture: [["block_steel_bottom", 0], ["block_steel_top", 0], ["block_steel_side", 0], ["block_steel_side", 0], ["block_steel_side", 0], ["block_steel_side", 0]], inCreative: true}]);
IDRegistry.genBlockID("blockTitanium");
Block.createBlockWithRotation("blockTitanium", [{name: "titanium block", texture: [["block_titanium", 0], ["block_titanium", 0], ["block_titanium", 0], ["block_titanium", 0], ["block_titanium", 0], ["block_titanium", 0]], inCreative: true}]);
IDRegistry.genItemID("copperchunk");
Item.createItem("copperchunk", "copperchunk", {name: "copper_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("tinchunk");
Item.createItem("tinchunk", "tinchunk", {name: "tin_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("toritechunk");
Item.createItem("toritechunk", "toritechunk", {name: "torite_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("titaniumchunk");
Item.createItem("titaniumchunk", "titaniumchunk", {name: "titanium_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("ironchunk");
Item.createItem("ironchunk", "ironchunk", {name: "iron_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genItemID("goldchunk");
Item.createItem("goldchunk", "goldchunk", {name: "gold_chunk", meta: 0}, {isTech: false, stack: 64});
IDRegistry.genBlockID("crate");
Block.createBlockWithRotation("crate", [{name: "Crate", texture: [["crate_top", 0], ["crate_top", 0], ["crate_side", 0], ["crate_side", 0], ["crate_side", 0], ["crate_side", 0]], inCreative: true}]);
TileEntity.registerPrototype(IDData.block.crate, {tick: function () {
    if (this.container.isOpened()) {
    }
}, getGuiScreen: function () {
    return crateGui;
}});
var crateGui = new UI.StandartWindow();
crateGui.setContent({standart: {header: {text: {text: "Crate/\u042f\u0449\u0438\u043a"}}, inventory: {standart: true}, background: {standart: true}}, elements: {"slot1": {type: "slot", x: 500, y: 100, size: 100}, "slot2": {type: "slot", x: 600, y: 100, size: 100}, "slot3": {type: "slot", x: 700, y: 100, size: 100}, "slot11": {type: "slot", x: 500, y: 200, size: 100}, "slot12": {type: "slot", x: 600, y: 200, size: 100}, "slot13": {type: "slot", x: 700, y: 200, size: 100}, "slot14": {type: "slot", x: 500, y: 300, size: 100}, "slot15": {type: "slot", x: 600, y: 300, size: 100}, "slot16": {type: "slot", x: 700, y: 300, size: 100}}});
IDRegistry.genBlockID("barrel");
Block.createBlockWithRotation("barrel", [{name: "Reinforced Crate", texture: [["barrel_top", 0], ["barrel_top", 0], ["barrel_side", 0], ["barrel_side", 0], ["barrel_side", 0], ["barrel_side", 0]], inCreative: true}]);
TileEntity.registerPrototype(IDData.block.barrel, {tick: function () {
    if (this.container.isOpened()) {
    }
}, getGuiScreen: function () {
    return barrelGui;
}});
var barrelGui = new UI.StandartWindow();
barrelGui.setContent({standart: {header: {text: {text: "Reinforced crate/\u0423\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u044f\u0449\u0438\u043a"}}, inventory: {standart: true}, background: {standart: true}}, elements: {"slot1": {type: "slot", x: 350, y: 100, size: 100}, "slot2": {type: "slot", x: 450, y: 100, size: 100}, "slot3": {type: "slot", x: 550, y: 100, size: 100}, "slot11": {type: "slot", x: 650, y: 100, size: 100}, "slot12": {type: "slot", x: 750, y: 100, size: 100}, "slot13": {type: "slot", x: 850, y: 100, size: 100}, "slot14": {type: "slot", x: 350, y: 200, size: 100}, "slot15": {type: "slot", x: 450, y: 200, size: 100}, "slot16": {type: "slot", x: 550, y: 200, size: 100}, "slot17": {type: "slot", x: 650, y: 200, size: 100}, "slot172": {type: "slot", x: 750, y: 200, size: 100}, "slot171": {type: "slot", x: 850, y: 200, size: 100}, "slot167": {type: "slot", x: 350, y: 300, size: 100}, "slot147": {type: "slot", x: 450, y: 300, size: 100}, "slot177": {type: "slot", x: 550, y: 300, size: 100}, "slot179": {type: "slot", x: 650, y: 300, size: 100}, "slot178": {type: "slot", x: 750, y: 300, size: 100}, "slot917": {type: "slot", x: 850, y: 300, size: 100}}});
IDRegistry.genBlockID("carpentersbench");
Block.createBlockWithRotation("carpentersbench", [{name: "Carpenters Workbench", texture: [["c_bench_bottom", 0], ["c_bench_top", 0], ["c_bench_side", 0], ["c_bench_side", 0], ["c_bench_side", 0], ["c_bench_side", 0]], inCreative: true}]);
TileEntity.registerPrototype(IDData.block.carpentersbench, {defaultValues: {progress: 0}, getGuiScreen: function () {
    return cwGui;
}, tick: function () {
    let source1 = this.container.getSlot("cwslot1");
    var source2 = this.container.getSlot("cwslot2");
    let source3 = this.container.getSlot("cwslot3");
    var source4 = this.container.getSlot("cwslot4");
    let source5 = this.container.getSlot("cwslot5");
    var source6 = this.container.getSlot("cwslot6");
    let source7 = this.container.getSlot("cwslot7");
    var source8 = this.container.getSlot("cwslot8");
    let source9 = this.container.getSlot("cwslot9");
    var resultSlot = this.container.getSlot("cwslotresult");
    let f = cwRecipes.get(source1.id, source2.id, source3.id, source4.id, source5.id, source6.id, source7.id, source8.id, source9.id);
    if (f != null) {
        if ((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress++ >= 300) {
            source1.count--;
            source2.count--;
            source3.count--;
            source4.count--;
            source5.count--;
            source6.count--;
            source7.count--;
            source8.count--;
            source9.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    this.container.setScale("cwscale", this.data.progress / 300);
}});
var cwGui = new UI.StandartWindow();
cwGui.setContent({standart: {header: {text: {text: "Carpenters workbench/\u0412\u0435\u0440\u0441\u0442\u0430\u043a \u043f\u043b\u043e\u0442\u043d\u0438\u043a\u0430"}}, inventory: {standart: true}, background: {standart: true}, drawing: [{type: "bitmap", x: 651, y: 182, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE}]}, elements: {"cwslot1": {type: "slot", x: 441, y: 122, size: 60}, "cwslot2": {type: "slot", x: 441, y: 182, size: 60}, "cwslot3": {type: "slot", x: 441, y: 242, size: 60}, "cwslot4": {type: "slot", x: 501, y: 122, size: 60}, "cwslot5": {type: "slot", x: 501, y: 182, size: 60}, "cwslot6": {type: "slot", x: 501, y: 242, size: 60}, "cwslot7": {type: "slot", x: 561, y: 122, size: 60}, "cwslot8": {type: "slot", x: 561, y: 182, size: 60}, "cwslot9": {type: "slot", x: 561, y: 242, size: 60}, "cwslotresult": {type: "slot", x: 741, y: 182, size: 60}, "cwscale": {type: "scale", x: 655, y: 185, direction: 0, value: 1, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE}}});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (block.id == 31) {
        var fff = Math.random() * 1;
        if (fff <= 0.05) {
            World.drop(coords.x, coords.y, coords.z, ItemID.onion, 1);
        }
        if (fff <= 0.025) {
            World.drop(coords.x, coords.y, coords.z, ItemID.pepperseed, 1);
        }
        if (fff <= 0.025) {
            World.drop(coords.x, coords.y, coords.z, ItemID.cabbageseed, 1);
        }
        if (fff <= 0.025) {
            World.drop(coords.x, coords.y, coords.z, ItemID.celeryseed, 1);
        }
        if (fff <= 0.025) {
            World.drop(coords.x, coords.y, coords.z, ItemID.tomatoseed, 1);
        }
        if (fff <= 0.01) {
            World.drop(coords.x, coords.y, coords.z, ItemID.lettuce, 1);
        }
        if (fff <= 0.005) {
            World.drop(coords.x, coords.y, coords.z, ItemID.corn, 1);
        }
        if (fff <= 0.0025) {
            World.drop(coords.x, coords.y, coords.z, ItemID.peanuts, 1);
        }
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (block.id == 59) {
        var fff = Math.random() * 1;
        if (fff <= 0.1) {
            World.drop(coords.x, coords.y, coords.z, ItemID.rice, 1);
        }
    }
});
IDRegistry.genBlockID("alloyfurnace1");
Block.createBlockWithRotation("alloyfurnace1", [{name: "Alloy Furnace", texture: [["alloy_furnace_top", 0], ["alloy_furnace_top", 0], ["alloy_furnace_side", 0], ["alloy_furnace_front", 0], ["alloy_furnace_side", 0], ["alloy_furnace_side", 0]], inCreative: true}]);
TileEntity.registerPrototype(IDData.block.alloyfurnace1, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return alloyGui;
}, tick: function () {
    let source1 = this.container.getSlot("slotSource");
    var source2 = this.container.getSlot("slotSource1");
    let source3 = this.container.getSlot("slotSource999");
    var resultSlot = this.container.getSlot("slotResult");
    let f = MalloyRecipes.get(source1.id, source2.id);
    if (this.data.burn > 0) {
        if (f != null) {
            if ((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress++ >= 200) {
                source1.count--;
                source2.count--;
                resultSlot.id = f.id;
                resultSlot.data = f.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        this.data.burn--;
    } else {
        if (f) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 200);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = FURNACE_FUEL_MAP[fuelSlot.id];
        if (burn) {
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
        if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
            var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
            fuelSlot.id = empty.id;
            fuelSlot.data = empty.data;
            return 20000;
        }
    }
    return 0;
}});
var alloyGui = new UI.StandartWindow({standart: {header: {text: {text: "Alloy Furnace/\u041f\u043b\u0430\u0432\u0438\u043b\u044c\u043d\u044f"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2}, {type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}], elements: {"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, "burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2}, "slotSource": {type: "slot", x: 441, y: 75, size: 60}, "slotSource999": {type: "slot", x: 44991, y: 75999, size: 1}, "slotFuel": {type: "slot", x: 441, y: 212, size: 60}, "slotResult": {type: "slot", x: 625, y: 142, size: 60}, "slotSource1": {type: "slot", x: 501, y: 75, size: 60}}});
IDRegistry.genItemID("steelingot");
Item.createItem("steelingot", "steel ingot", {name: "steel_ingot", meta: 0}, {isTech: false, stack: 64});
ToolAPI.addToolMaterial("steel", {durability: 1100, level: 3, efficiency: 5, damage: 5, enchantability: 30});
IDRegistry.genItemID("steelpickaxe");
Item.createItem("steelpickaxe", "steel Pickaxe", {name: "steel_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("steelaxe");
Item.createItem("steelaxe", "steel Axe", {name: "steel_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("steelshovel");
Item.createItem("steelshovel", "steel Shovel", {name: "steel_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("steelsword");
Item.createItem("steelsword", "steel Sword", {name: "steel_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("steelhoe");
Item.createItem("steelhoe", "steel Hoe", {name: "steel_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.steelhoe, "steel", ToolType.hoe);
ToolAPI.setTool(ItemID.steelpickaxe, "steel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.steelaxe, "steel", ToolType.axe);
ToolAPI.setTool(ItemID.steelshovel, "steel", ToolType.shovel);
ToolAPI.setTool(ItemID.steelsword, "steel", ToolType.sword);
IDRegistry.genItemID("steelhelmet");
IDRegistry.genItemID("steelchestplate");
IDRegistry.genItemID("steelleggings");
IDRegistry.genItemID("steelboots");
Item.createArmorItem("steelhelmet", "steel Helmet", {name: "steel_helmet", meta: 0}, {type: "helmet", armor: 3, durability: 800, texture: "armor/steel_1.png"});
Item.createArmorItem("steelchestplate", "steel Chestplate", {name: "steel_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 800, texture: "armor/steel_1.png"});
Item.createArmorItem("steelleggings", "steel Leggings", {name: "steel_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 800, texture: "armor/steel_2.png"});
Item.createArmorItem("steelboots", "steel Boots", {name: "steel_boots", meta: 0}, {type: "boots", armor: 2, durability: 800, texture: "armor/steel_1.png"});
IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "bronze ingot", {name: "bronze_ingot", meta: 0}, {isTech: false, stack: 64});
ToolAPI.addToolMaterial("bronze", {durability: 700, level: 3, efficiency: 6, damage: 5, enchantability: 30});
IDRegistry.genItemID("bronzePickaxe");
Item.createItem("bronzePickaxe", "bronze Pickaxe", {name: "bronze_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("bronzeAxe");
Item.createItem("bronzeAxe", "bronze Axe", {name: "bronze_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("bronzeShovel");
Item.createItem("bronzeShovel", "bronze Shovel", {name: "bronze_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("bronzeSword");
Item.createItem("bronzeSword", "bronze Sword", {name: "bronze_sword", meta: 0}, {stack: 1});
IDRegistry.genItemID("bronzeHoe");
Item.createItem("bronzeHoe", "bronze Hoe", {name: "bronze_hoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzeHoe, "bronze", ToolType.hoe);
ToolAPI.setTool(ItemID.bronzePickaxe, "bronze", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bronzeAxe, "bronze", ToolType.axe);
ToolAPI.setTool(ItemID.bronzeShovel, "bronze", ToolType.shovel);
ToolAPI.setTool(ItemID.bronzeSword, "bronze", ToolType.sword);
IDRegistry.genItemID("bronzeHelmet");
IDRegistry.genItemID("bronzeChestplate");
IDRegistry.genItemID("bronzeLeggings");
IDRegistry.genItemID("bronzeBoots");
Item.createArmorItem("bronzeHelmet", "bronze Helmet", {name: "bronze_helmet", meta: 0}, {type: "helmet", armor: 4, durability: 500, texture: "armor/bronze_1.png"});
Item.createArmorItem("bronzeChestplate", "bronze Chestplate", {name: "bronze_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 500, texture: "armor/bronze_1.png"});
Item.createArmorItem("bronzeLeggings", "bronze Leggings", {name: "bronze_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 500, texture: "armor/bronze_2.png"});
Item.createArmorItem("bronzeBoots", "bronze Boots", {name: "bronze_boots", meta: 0}, {type: "boots", armor: 2, durability: 500, texture: "armor/bronze_1.png"});
var FURNACE_FUEL_MAP = {5: 300, 6: 100, 17: 300, 263: 1600, 280: 100, 268: 200, 269: 200, 270: 200, 271: 200, 85: 300, 107: 300, 134: 300, 135: 300, 158: 150, 162: 300, 163: 300, 164: 300, 184: 300, 185: 300, 186: 300, 187: 300, 53: 300, 54: 300, 58: 300};
var MalloyRecipes = {recipes: {}, set: function (a1, a2, result) {
    this.recipes[JSON.stringify([a1, a2])] = {id: result.id, count: result.count, data: result.data || 0};
}, get: function (a1, a2) {
    return this.recipes[JSON.stringify([a1, a2])];
}};
MalloyRecipes.set(ItemID.tomato, 281, {id: ItemID.tomatosoup, count: 1, data: 0});
MalloyRecipes.set(344, 281, {id: ItemID.friedegg, count: 1, data: 0});
MalloyRecipes.set(ItemID.corn, 281, {id: ItemID.popcorn, count: 1, data: 0});
MalloyRecipes.set(ItemID.ingotCopper, ItemID.ingotTin, {id: ItemID.ingotBronze, count: 1, data: 0});
MalloyRecipes.set(265, 173, {id: ItemID.steelingot, count: 1, data: 0});
MalloyRecipes.set(ItemID.shardblazium, ItemID.toriteingot, {id: ItemID.blaziumingot, count: 1, data: 0});
var cwRecipes = {recipes: {}, set: function (a1, a2, a3, a4, a5, a6, a7, a8, a9, result) {
    this.recipes[JSON.stringify([a1, a2, a3, a4, a5, a6, a7, a8, a9])] = {id: result.id, count: result.count, data: result.data || 0};
}, get: function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    return this.recipes[JSON.stringify([a1, a2, a3, a4, a5, a6, a7, a8, a9])];
}};
cwRecipes.set(5, 5, 5, 5, 265, 5, 5, 5, 5, {id: 54, count: 1, data: 0});
cwRecipes.set(280, 280, 280, 280, ItemID.tinplate, 280, 280, 280, 280, {id: ItemID.reinforcedstick, count: 1, data: 0});
var McrusherRecipes = {recipes: {}, set: function (a1, result) {
    this.recipes[JSON.stringify([a1])] = {id: result.id, count: result.count, data: result.data || 0};
}, get: function (a1) {
    return this.recipes[JSON.stringify([a1])];
}};
McrusherRecipes.set(BlockID.oreCopper, {id: ItemID.copperchunk, count: 1, data: 0});
McrusherRecipes.set(BlockID.oreTin, {id: ItemID.tinchunk, count: 1, data: 0});
McrusherRecipes.set(BlockID.toriteore, {id: ItemID.toritechunk, count: 1, data: 0});
McrusherRecipes.set(BlockID.titaniumore, {id: ItemID.titaniumchunk, count: 1, data: 0});
McrusherRecipes.set(14, {id: ItemID.goldchunk, count: 1, data: 0});
McrusherRecipes.set(15, {id: ItemID.ironchunk, count: 1, data: 0});
McrusherRecipes.set(ItemID.shardsalt, {id: ItemID.salt, count: 1, data: 0});
CropRegistry.registerWithID("pepperCrop", "pepperCrop", "pepperCrop", ItemID.pepperSeed);
CropRegistry.fruitPush(BlockID.pepperCrop, ItemID.pepper);
Harvest.registerDroppingBlock(BlockID.pepperCrop);
PlantModel.tree(BlockID.pepperCrop, 0);
TileEntity.registerPrototype(BlockID.pepperCrop, cropPROTO);
CropRegistry.registerSeed(ItemID.pepperSeed, BlockID.pepperCrop);
CropRegistry.registerWithID("cabbagecrop", "cabbagecrop", "cabbagecrop", ItemID.cabbageseed);
CropRegistry.fruitPush(BlockID.cabbagecrop, ItemID.cabbage);
Harvest.registerDroppingBlock(BlockID.cabbagecrop);
PlantModel.tree(BlockID.cabbagecrop, 0);
TileEntity.registerPrototype(BlockID.cabbagecrop, cropPROTO);
CropRegistry.registerSeed(ItemID.cabbageseed, BlockID.cabbagecrop);
CropRegistry.registerWithID("celerycrop", "celerycrop", "celerycrop", ItemID.celeryseed);
CropRegistry.fruitPush(BlockID.celerycrop, ItemID.celery);
Harvest.registerDroppingBlock(BlockID.celerycrop);
PlantModel.tree(BlockID.celerycrop, 0);
TileEntity.registerPrototype(BlockID.celerycrop, cropPROTO);
CropRegistry.registerSeed(ItemID.celeryseed, BlockID.celerycrop);
CropRegistry.registerWithID("tomatocrop", "tomatocrop", "tomatocrop", ItemID.tomatoseed);
CropRegistry.fruitPush(BlockID.tomatocrop, ItemID.tomato);
Harvest.registerDroppingBlock(BlockID.tomatocrop);
PlantModel.tree(BlockID.tomatocrop, 0);
TileEntity.registerPrototype(BlockID.tomatocrop, cropPROTO);
CropRegistry.registerSeed(ItemID.tomatoseed, BlockID.tomatocrop);
CropRegistry.registerWithID("onioncrop", "onioncrop", "onioncrop", ItemID.onion);
CropRegistry.fruitPush(BlockID.onioncrop, ItemID.onion);
Harvest.registerDroppingBlock(BlockID.onioncrop);
PlantModel.tree(BlockID.onioncrop, 0);
TileEntity.registerPrototype(BlockID.onioncrop, cropPROTO);
CropRegistry.registerSeed(ItemID.onion, BlockID.onioncrop);
CropRegistry.registerWithID("lettucecrop", "lettucecrop", "lettucecrop", ItemID.lettuce);
CropRegistry.fruitPush(BlockID.lettucecrop, ItemID.lettuce);
Harvest.registerDroppingBlock(BlockID.lettucecrop);
PlantModel.tree(BlockID.lettucecrop, 0);
TileEntity.registerPrototype(BlockID.lettucecrop, cropPROTO);
CropRegistry.registerSeed(ItemID.lettuce, BlockID.lettucecrop);
CropRegistry.registerWithID("corncrop", "corncrop", "corncrop", ItemID.corn);
CropRegistry.fruitPush(BlockID.corncrop, ItemID.corn);
Harvest.registerDroppingBlock(BlockID.corncrop);
PlantModel.tree(BlockID.corncrop, 0);
TileEntity.registerPrototype(BlockID.corncrop, cropPROTO);
CropRegistry.registerSeed(ItemID.corn, BlockID.corncrop);
CropRegistry.registerWithID("peanutscrop", "peanutscrop", "peanutscrop", ItemID.peanuts);
CropRegistry.fruitPush(BlockID.peanutscrop, ItemID.peanuts);
Harvest.registerDroppingBlock(BlockID.peanutscrop);
PlantModel.tree(BlockID.peanutscrop, 0);
TileEntity.registerPrototype(BlockID.peanutscrop, cropPROTO);
CropRegistry.registerSeed(ItemID.peanuts, BlockID.peanutscrop);
CropRegistry.registerWithID("ricecrop", "ricecrop", "ricecrop", ItemID.rice);
CropRegistry.fruitPush(BlockID.ricecrop, ItemID.rice);
Harvest.registerDroppingBlock(BlockID.ricecrop);
PlantModel.tree(BlockID.ricecrop, 0);
TileEntity.registerPrototype(BlockID.ricecrop, cropPROTO);
CropRegistry.registerSeed(ItemID.rice, BlockID.ricecrop);
IDRegistry.genBlockID("mcrusher");
Block.createBlockWithRotation("mcrusher", [{name: "Crusher", texture: [["crusher_bottom", 0], ["crusher_top", 0], ["crusher_side", 0], ["crusher_front", 0], ["crusher_side", 0], ["crusher_side", 0]], inCreative: true}]);
TileEntity.registerPrototype(IDData.block.mcrusher, {defaultValues: {progress: 0, burn: 0, burnMax: 0}, getGuiScreen: function () {
    return McrusherGui;
}, tick: function () {
    let source1 = this.container.getSlot("slotSource");
    var source2 = this.container.getSlot("slotSource111");
    let source3 = this.container.getSlot("slotSource999");
    var resultSlot = this.container.getSlot("slotResult");
    let f = McrusherRecipes.get(source1.id);
    if (this.data.burn > 0) {
        if (f != null) {
            if ((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress++ >= 100) {
                source1.count--;
                resultSlot.id = f.id;
                resultSlot.data = f.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        this.data.burn--;
    } else {
        if (f) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
    }
    this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("progressScale", this.data.progress / 100);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = FURNACE_FUEL_MAP[fuelSlot.id];
        if (burn) {
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
        if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava") {
            var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
            fuelSlot.id = empty.id;
            fuelSlot.data = empty.data;
            return 20000;
        }
    }
    return 0;
}});
var McrusherGui = new UI.StandartWindow({standart: {header: {text: {text: "Crusher/\u0414\u0440\u043e\u0431\u0438\u0442\u0435\u043b\u044c"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2}, {type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}], elements: {"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, "burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2}, "slotSource": {type: "slot", x: 441, y: 75, size: 60}, "slotSource999": {type: "slot", x: 44991, y: 75999, size: 1}, "slotFuel": {type: "slot", x: 441, y: 212, size: 60}, "slotResult": {type: "slot", x: 625, y: 142, size: 60}, "slotSource111": {type: "slot", x: 505661, y: 767565, size: 1}}});

