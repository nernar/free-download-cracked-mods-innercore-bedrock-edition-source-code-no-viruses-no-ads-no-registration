IDRegistry.genItemID("shardCinder");
Item.createItem("shardCinder", "Cinder Shard  \n   Rarity: Foundable", {name: "shardCinder", meta: 0}, {stack: 64});



IDRegistry.genItemID("shardFreezarite");
Item.createItem("shardFreezarite", "Freezarite Shard  \n   Rarity: Foundable", {name: "shardFreezarite", meta: 0}, {stack: 64});



IDRegistry.genItemID("shardXoanon");
Item.createItem("shardXoanon", "Xoanon Shard  \n   Rarity: Foundable", {name: "shardXoanon", meta: 0}, {stack: 64});


IDRegistry.genItemID("shardMinurite");
Item.createItem("shardMinurite", "Minurite Shard  \n  Rarity: Foundable", {name: "shardMinurite", meta: 0}, {stack: 64});





var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");



IDRegistry.genBlockID("cinderOre");
Block.createBlock("cinderOre", [
 {name: "Cinder Ore", texture: [["oreCinder", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.cinderOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.cinderOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("freezariteOre");
Block.createBlock("freezariteOre", [
 {name: "Freezarite Ore", texture: [["oreFreezarite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.freezariteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.freezariteOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("xoanonOre");
Block.createBlock("xoanonOre", [
 {name: "Xoanon Ore", texture: [["oreXoanon", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xoanonOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xoanonOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("minuriteOre");
Block.createBlock("minuriteOre", [
 {name: "Minurite Ore", texture: [["oreMinurite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.minuriteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.minuriteOre, 0, 4);
    }
}
)








Recipes.addFurnace(BlockID.cinderOre, ItemID.shardCinder, 0)
Recipes.addFurnace(BlockID.freezariteOre, ItemID.shardFreezarite, 0)
Recipes.addFurnace(BlockID.xoanonOre, ItemID.shardXoanon, 0)
Recipes.addFurnace(BlockID.minuriteOre, ItemID.shardMinurite, 0)



var generateItems =[ 
]; 

function addItemsToGenerateChest(id, random, count, data){ 
random = random||1; 
count = count||{}; 
count.min = count.min||1; 
count.max = count.max||1; 
data = data||0; 
generateItems.push({id:id, data:data, random:random, count:count}); 
} 

function fillChest(x,y,z){ 
var container = World.getContainer(x, y, z); 
var size = container.getSize(); 
var random = Math.random(); 
var slot = 0; 
for(var i in generateItems){ 
if(random<generateItems[i].random){ 
var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min; 
container.setSlot(slot, generateItems[i].id, count, generateItems[i].data); 
slot++; 
} 
} 
} 

addItemsToGenerateChest(ItemID.godeater, 0.5, {max:1});
addItemsToGenerateChest(ItemID.bladeofjustice, 0.1, {max:1});




importLib("ENV", "*");



IDRegistry.genItemID("cinderSword");
IDRegistry.genItemID("freezariteSword");
IDRegistry.genItemID("xoanonSword");
IDRegistry.genItemID("minuriteSword");
IDRegistry.genItemID("godeater");
IDRegistry.genItemID("bladeofjustice");
Item.createItem("cinderSword", "Cinder Sword \n Rarity: Craftable \n Damage: +8", {name: "cinders", meta: 0}, {stack: 1});
Item.createItem("freezariteSword", "Freezarite Sword \n Rarity: Craftable \n Damage: +8", {name: "freezarites", meta: 0}, {stack: 1});
Item.createItem("xoanonSword", "Xoanon Sword \n Rarity: Craftable \n Damage: +8", {name: "xoanons", meta: 0}, {stack: 1});
Item.createItem("minuriteSword", "Minurite Sword \n Rarity: Craftable \n Damage: +8", {name: "minurites", meta: 0}, {stack: 1});
Item.createItem("godeater", "God Eater \n Rarity: Uncommon \n Damage: +80", {name: "godeater", meta: 0}, {stack: 1});
Item.createItem("bladeofjustice", "Blade Of Justice \n Rarity: Extremely Rare \n Damage: +100", {name: "bladeofjustice", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("cinder", {durability: 120, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.cinderSword, "cinder", ToolType.sword);


Recipes.addShaped({id: ItemID.cinderSword, count: 1, data: 0}, [
	"a",
	"aaa",
	"b"
], ['a', ItemID.shardCinder, 0, 'b', 280, 0]);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.cinderSword){ 
Entity.setFire(victim, 200);
}
});

ToolAPI.addToolMaterial("freez", {durability: 120, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.freezariteSword, "freez", ToolType.sword);


Recipes.addShaped({id: ItemID.freezariteSword, count: 1, data: 0}, [
	"a",
	"aaa",
	"b"
], ['a', ItemID.shardFreezarite, 0, 'b', 280, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.freezariteSword){ 
Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 3, 999999, true, true); 
}
});

ToolAPI.addToolMaterial("xoanon", {durability: 120, level: 4, efficiency: 10, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.xoanonSword, "xoanon", ToolType.sword);


Recipes.addShaped({id: ItemID.xoanonSword, count: 1, data: 0}, [
	"a",
	"aaa",
	"b"
], ['a', ItemID.shardXoanon, 0, 'b', 280, 0]);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.xoanonSword){ 
Entity.setFire(victim, 200);
}
});

ToolAPI.addToolMaterial("minurite", {durability: 120, level: 4, efficiency: 9, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.minuriteSword, "minurite", ToolType.sword);


Recipes.addShaped({id: ItemID.minuriteSword, count: 1, data: 0}, [
	"a",
	"aaa",
	"b"
], ['a', ItemID.shardMinurite, 0, 'b', 280, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.xoanonSword){ 
Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 3, 10, true, true); 
}
});

ToolAPI.addToolMaterial("godsword", {durability: 1000, level: 4, efficiency: 9, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.godeater, "godsword", ToolType.sword);

ToolAPI.addToolMaterial("bladeo", {durability: 1000, level: 4, efficiency: 9, damage: 100, enchantability: 14});
ToolAPI.setTool(ItemID.bladeofjustice, "bladeo", ToolType.sword);