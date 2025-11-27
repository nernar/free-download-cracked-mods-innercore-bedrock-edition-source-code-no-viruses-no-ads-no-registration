IDRegistry.genItemID("mythaningot");
Item.createItem("mythaningot", "Mythan Ingot", {name: "mythaningot", meta: 0}, {stack: 64});



IDRegistry.genItemID("octineingot");
Item.createItem("octineingot", "Octine Ingot", {name: "octineingot", meta: 0}, {stack: 64});



IDRegistry.genItemID("reminantingot");
Item.createItem("reminantingot", "Reminant Ingot", {name: "reminantingot", meta: 0}, {stack: 64});





var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");



IDRegistry.genBlockID("mythanore");
Block.createBlock("mythanore", [
 {name: "Mythan Ore", texture: [["mythanore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.mythanore, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mythanore, 0, 4);
    }
}
)





IDRegistry.genBlockID("octineore");
Block.createBlock("octineore", [
 {name: "Octine Ore", texture: [["octineore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.octineore, "stone", 4, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.octineore, 0, 4);
    }
}
)





IDRegistry.genBlockID("reminantore");
Block.createBlock("reminantore", [
 {name: "Reminant Ore", texture: [["reminantore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.reminantore, "stone", 5, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.reminantore, 0, 4);
    }
}
)







Recipes.addFurnace(BlockID.mythanore, ItemID.mythaningot, 0)
Recipes.addFurnace(BlockID.octineore, ItemID.octineingot, 0)
Recipes.addFurnace(BlockID.reminantore, ItemID.reminantingot, 0)



importLib("ENV", "*");



IDRegistry.genItemID("mythanSword");
IDRegistry.genItemID("mythanShovel");
IDRegistry.genItemID("mythanPickaxe");
IDRegistry.genItemID("mythanAxe");
IDRegistry.genItemID("mythanHoe");
Item.createItem("mythanSword", "Mythan Sword", {name: "swordMythan", meta: 0}, {stack: 1});
Item.createItem("mythanShovel", "Mythan Shovel", {name: "shovelMythan", meta: 0}, {stack: 1});
Item.createItem("mythanPickaxe", "Mythan Pickaxe", {name: "pickaxeMythan", meta: 0}, {stack: 1});
Item.createItem("mythanAxe", "Mythan Axe", {name: "axeMythan", meta: 0}, {stack: 1});
Item.createItem("mythanHoe", "Mythan Hoe", {name: "hoeMythan", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("mythan", {durability: 400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.mythanSword, "mythan", ToolType.sword);
ToolAPI.setTool(ItemID.mythanShovel, "mythan", ToolType.shovel);
ToolAPI.setTool(ItemID.mythanPickaxe, "mythan", ToolType.pickaxe);
ToolAPI.setTool(ItemID.mythanAxe, "mythan", ToolType.axe);
ToolAPI.setTool(ItemID.mythanHoe, "mythan", ToolType.hoe);


Recipes.addShaped({id: ItemID.mythanSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.mythaningot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.mythanShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.mythaningot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.mythanPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.mythaningot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.mythanAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.mythaningot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.mythanHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.mythaningot, 0, 'b', 280, 0]);





IDRegistry.genItemID("octineSword");
IDRegistry.genItemID("octineShovel");
IDRegistry.genItemID("octinePickaxe");
IDRegistry.genItemID("octineAxe");
IDRegistry.genItemID("octineHoe");
Item.createItem("octineSword", "Octine Sword", {name: "swordOctine", meta: 0}, {stack: 1});
Item.createItem("octineShovel", "Octine Shovel", {name: "shovelOctine", meta: 0}, {stack: 1});
Item.createItem("octinePickaxe", "Octine Pickaxe", {name: "pickaxeOctine", meta: 0}, {stack: 1});
Item.createItem("octineAxe", "Octine Axe", {name: "axeOctine", meta: 0}, {stack: 1});
Item.createItem("octineHoe", "Octine Hoe", {name: "hoeOctine", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("octine", {durability: 500, level: 5, efficiency: 9, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.octineSword, "octine", ToolType.sword);
ToolAPI.setTool(ItemID.octineShovel, "octine", ToolType.shovel);
ToolAPI.setTool(ItemID.octinePickaxe, "octine", ToolType.pickaxe);
ToolAPI.setTool(ItemID.octineAxe, "octine", ToolType.axe);
ToolAPI.setTool(ItemID.octineHoe, "octine", ToolType.hoe);


Recipes.addShaped({id: ItemID.octineSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.octineingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.octineShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.octineingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.octinePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.octineingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.octineAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.octineingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.octineHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.octineingot, 0, 'b', 280, 0]);





IDRegistry.genItemID("reminantSword");
IDRegistry.genItemID("reminantShovel");
IDRegistry.genItemID("reminantPickaxe");
IDRegistry.genItemID("reminantAxe");
IDRegistry.genItemID("reminantHoe");
Item.createItem("reminantSword", "Reminant Sword", {name: "swordReminant", meta: 0}, {stack: 1});
Item.createItem("reminantShovel", "Reminant Shovel", {name: "shovelReminant", meta: 0}, {stack: 1});
Item.createItem("reminantPickaxe", "Reminant Pickaxe", {name: "pickaxeReminant", meta: 0}, {stack: 1});
Item.createItem("reminantAxe", "Reminant Axe", {name: "axeReminant", meta: 0}, {stack: 1});
Item.createItem("reminantHoe", "Reminant Hoe", {name: "hoeReminant", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("reminant", {durability: 600, level: 6, efficiency: 9, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.reminantSword, "reminant", ToolType.sword);
ToolAPI.setTool(ItemID.reminantShovel, "reminant", ToolType.shovel);
ToolAPI.setTool(ItemID.reminantPickaxe, "reminant", ToolType.pickaxe);
ToolAPI.setTool(ItemID.reminantAxe, "reminant", ToolType.axe);
ToolAPI.setTool(ItemID.reminantHoe, "reminant", ToolType.hoe);


Recipes.addShaped({id: ItemID.reminantSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.reminantingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.reminantShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.reminantingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.reminantPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.reminantingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.reminantAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.reminantingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.reminantHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.reminantingot, 0, 'b', 280, 0]);