IDRegistry.genItemID("ingottemtatite");
Item.createItem("ingottemtatite", "Temtatite Ingot", {name: "ingottemtatite", meta: 0}, {stack: 64});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");



IDRegistry.genBlockID("temtatiteOre");
Block.createBlock("temtatiteOre", [
 {name: "Temtatore", texture: [["temtaore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.temtatiteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.temtatiteOre, 0, 4);
    }
}
)

Recipes.addFurnace(BlockID.temtatiteOre, ItemID.ingottemtatite, 0)

importLib("ENV", "*");



IDRegistry.genItemID("temtatiteSword");
IDRegistry.genItemID("temtatiteShovel");
IDRegistry.genItemID("temtatitePickaxe");
IDRegistry.genItemID("temtatiteAxe");
IDRegistry.genItemID("temtatiteHoe");
Item.createItem("temtatiteSword", "Temtatite Sword", {name: "temtasword", meta: 0}, {stack: 1});
Item.createItem("temtatiteShovel", "Temtatite Shovel", {name: "temtashovel", meta: 0}, {stack: 1});
Item.createItem("temtatitePickaxe", "Temtatite Pickaxe", {name: "temtapickaxe", meta: 0}, {stack: 1});
Item.createItem("temtatiteAxe", "Temtatite Axe", {name: "temtaaxe", meta: 0}, {stack: 1});
Item.createItem("temtatiteHoe", "Temtatite Hoe", {name: "temtahoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("temtatite", {durability: 1200, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.temtatiteSword, "temtatite", ToolType.sword);
ToolAPI.setTool(ItemID.temtatiteShovel, "temtatite", ToolType.shovel);
ToolAPI.setTool(ItemID.temtatitePickaxe, "temtatite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.temtatiteAxe, "temtatite", ToolType.axe);
ToolAPI.setTool(ItemID.temtatiteHoe, "temtatite", ToolType.hoe);


Recipes.addShaped({id: ItemID.temtatiteSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ingottemtatite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.temtatiteShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ingottemtatite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.temtatitePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ingottemtatite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.temtatiteAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ingottemtatite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.temtatiteHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ingottemtatite, 0, 'b', 280, 0]);

IDRegistry.genItemID("temtatiteHelmet");
IDRegistry.genItemID("temtatiteChestplate");
IDRegistry.genItemID("temtatiteLeggings");
IDRegistry.genItemID("temtatiteBoots");

Item.createArmorItem("temtatiteHelmet", "Temtatite Helmet", {name: "helmettemtatite"}, {type: "helmet", armor: 3, durability: 200000, texture: "armor/temtatite_1.png"});
Item.createArmorItem("temtatiteChestplate", "Temtatite Chestplate", {name: "chestplatetemtatite"}, {type: "chestplate", armor: 6, durability: 200000, texture: "armor/temtatite_1.png"});
Item.createArmorItem("temtatiteLeggings", "Temtatite Leggings", {name: "leggingstemtatite"}, {type: "leggings", armor: 6, durability: 200000, texture: "armor/temtatite_2.png"});
Item.createArmorItem("temtatiteBoots", "Temtatite Boots", {name: "bootstemtatite"}, {type: "boots", armor: 3, durability: 200000, texture: "armor/temtatite_1.png"});

Recipes.addShaped({id: ItemID.temtatiteHelmet, count: 1, data: 0}, [
	"zyz",
	"x x"
], ['x', ItemID.ingottemtatite, 0, "y", 35, 0, "z", 334, 0]);

Recipes.addShaped({id: ItemID.temtatiteChestplate, count: 1, data: 0}, [
	"x x",
	"xzx",
	"y y"
], ['x', ItemID.ingottemtatite, 0, "y", 35, 0, "z", 334, 0]);

Recipes.addShaped({id: ItemID.temtatiteLeggings, count: 1, data: 0}, [
	"xzx",
	"y y",
	"x x"
], ['x', ItemID.ingottemtatite, 0, "y", 35, 0, "z", 334, 0]);

Recipes.addShaped({id: ItemID.temtatiteBoots, count: 1, data: 0}, [
	"y y",
	"x x"
], ['x', ItemID.ingottemtatite, 0, "y", 35, 0, "z", 334, 0]);






importLib("AdvancedAI", "*");

IDRegistry.genItemID("temtatoork");
Item.createItem("temtatoork", "Spawn Temtatork", {name: "temtatork", data: 0});

var temtatoork = MobRegistry.registerEntity("temtatoork");
temtatoork.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mob/temtatork_2.png");//skin
},

attackedBy: function(attacker, amount){
 //sound
}
});

temtatoork.customizeDescription({
 getHitbox: function(){
 return {w: 1, h: 2}
}
});
temtatoork.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.09,
angular_speed: 0.1,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.05,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 1,
attack_range: 1,
attack_rate: 30
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg
Item.registerUseFunction("temtatoork", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("temtatoork", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

/*
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == temtatoork){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 0, 0, 2);
}
});*/ //droped 

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.0002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, 1, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 1, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 1, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+2, 1, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 5, 0);
}}});