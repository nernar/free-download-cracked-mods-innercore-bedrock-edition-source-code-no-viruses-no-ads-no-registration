/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: api.js

ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}


Recipes.deleteRecipe({id: 262, count: 8, data: -1}) 


var McMath = {
 rtd(rotation, dgr) {
  return Math.floor(rotation * (dgr / Math.PI));
 },
 dtr(dgr) {
  return dgr * (Math.PI / 180);
 },
 getYaw(r) {
  var yawRTD = this.rtd(r, 180);
  var yaw = 0;
  yaw = yawRTD % 360;
  yaw = (yaw + 360) % 360;
  return yaw;
 },
 lookDirection(yaw, pitch) {
  return {
   x: -Math.sin(yaw) * Math.cos(pitch),
   y: Math.sin(pitch),
   z: Math.cos(yaw) * Math.cos(pitch)
  };
 },
 random(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
 }
}  
  
 
var rippers = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "ripper");
Item.createItem(id + "ripper", id + " ripper", {name: id + "ripper", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "ripper"], true);
ToolAPI.registerTool(ItemID[id + "ripper"], material, ["plant"], {damage: 0});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "ripper"], count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', i1, -1, 'b', i2, -1]);});}}




















// file: item.js

IDRegistry.genItemID("pili_soul");
Item.createItem("pili_soul", "soul invader", {name: "pili_soul", meta: 0}); 

IDRegistry.genItemID("spawnerchunk");
Item.createItem("spawnerchunk", "spawner scrap", {name: "spawnerscrab", meta: 0},{stack: 64});


IDRegistry.genItemID("bedbre");
Item.createItem("bedbre", "Bedrock breaker", {name: "bedbre", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bedbre, true);



IDRegistry.genItemID("soulHelmet");
Item.createArmorItem("soulHelmet", "soul Helmet", {name: "soul_helmet"}, {type: "helmet", armor: 3, durability: 1530, texture: "armor/soul_1.png"});

IDRegistry.genItemID("soulChestplate");
Item.createArmorItem("soulChestplate", "soul Chestplate", {name: "soul_chestplate"}, {type: "chestplate", armor: 8, durability: 1780, texture: "armor/soul_1.png"});

IDRegistry.genItemID("soulLeggings");
Item.createArmorItem("soulLeggings", "soul Leggings", {name: "soul_leggings"}, {type: "leggings", armor: 6, durability: 1650, texture: "armor/soul_2.png"});

IDRegistry.genItemID("soulBoots");
Item.createArmorItem("soulBoots", "soul Boots", {name: "soul_boots"}, {type: "boots", armor: 3, durability: 1590, texture: "armor/soul_1.png"});


ToolAPI.addToolMaterial("headKT", {
      durability: 462, 
      level: 5, 
      efficiency: 2, 
      damage: 7, 
      enchantability: 15
});



rippers.addItem("heaD", "headKT", ItemID.pili_soul, ItemID.spawnerchunk);


IDRegistry.genItemID("wither_staff");
Item.createItem("wither_staff", "Wither staff",{name: "wither_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.wither_staff, 234);

IDRegistry.genItemID("dragon_staff");
Item.createItem("dragon_staff", "Dragon staff",{name: "dragon_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.dragon_staff, 234);

IDRegistry.genItemID("ghast_staff");
Item.createItem("ghast_staff", "Ghast staff",{name: "ghast_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ghast_staff, 234);

IDRegistry.genItemID("ifrit_staff");
Item.createItem("ifrit_staff", "Ifrit staff",{name: "ifrit_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ghast_staff, 234);

IDRegistry.genItemID("ender_staff");
Item.createItem("ender_staff", "Ender staff",{name: "ender_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.ender_staff, 234);

IDRegistry.genItemID("tnt_staff");
Item.createItem("tnt_staff", "Tnt staff",{name: "tnt_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.tnt_staff, 234);

IDRegistry.genItemID("phantom_staff");
Item.createItem("phantom_staff", "phantom staff",{name: "phantom_staff", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.phantom_staff, 234);









// file: block.js

IDRegistry.genBlockID("pilimob_grinder");
Block.createBlockWithRotation("pilimob_grinder", [
	{name: "Mob grinder", texture: [["mob_grinder", 0], ["mob_grinder", 0], ["mob_grinder", 0], ["mob_grinder", 0], ["mob_grinder", 0], ["mob_grinder", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.pilimob_grinder, "stone");

	





// file: recipe.js

Recipes.addShaped({id:
ItemID.pili_soul, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 266, -1, 'b', 152, -1, 'c', 344, -1]); 


Recipes.addShaped({id: ItemID.spawnerchunk, count: 3, data: 0}, 
["aba",
"bcb",
"aba"], 
["a", 101, -1, "b", 266, -1, "c", 49, -1]);

Recipes.addShaped({id: 52, count: 1, data: 0}, 
["aaa",
"aba",
"aaa"], 
["a", ItemID.spawnerchunk, -1, "b", 344, -1]);

Recipes.addShaped({id: ItemID.bedbre, count: 1, data: 0}, 
[ "aba",
 " c ",
 " c " ], ['a', 41, -1,'b', ItemID.pili_soul, -1,'c',ItemID.spawnerchunk, -1]);

Recipes.addShaped({id: ItemID.soulHelmet, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', ItemID.pili_soul, -1, 'b', 406, -1, 'c', 310, -1]);

Recipes.addShaped({id: ItemID.soulChestplate, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', ItemID.pili_soul, -1, 'b', 406, -1, 'c', 311, -1]);

Recipes.addShaped({id: ItemID.soulLeggings, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', ItemID.pili_soul, -1, 'b', 406, -1, 'c', 312, -1]);

Recipes.addShaped({id: ItemID.soulBoots, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', ItemID.pili_soul, -1, 'b', 406, -1, 'c', 313, -1]);

//staff

Recipes.addShaped({id: ItemID.wither_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 397, 1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);

Recipes.addShaped({id: ItemID.dragon_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 397, 5, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);

Recipes.addShaped({id: ItemID.ghast_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 370, -1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);

Recipes.addShaped({id: ItemID.ender_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 368, -1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);

Recipes.addShaped({id: ItemID.tnt_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 46, -1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);

Recipes.addShaped({id: ItemID.ifrit_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 369, -1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);


Recipes.addShaped({id: ItemID.phantom_staff, count: 1, data: 0}, [
	"ac ",
	"cb ",
	"  b"
], ['a', 288, -1, 'b', ItemID.pili_soul, -1, 'c', 266, -1]);



Recipes.addShaped({id: BlockID.pilimob_grinder, count: 1, data: 0}, [
		"aaa",
		"bcb",
		"ada"
	], ['a', 42, -1, 'b', ItemID.pili_soul, -1, 'c', 276, -1, 'd', 331, -1]);



















// file: function.js

//функция брони 

Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);


if(helmet.id==ItemID.soulHelmet&&chestplate.id==ItemID.soulChestplate&&leggings.id==ItemID.soulLeggings&&boots.id==ItemID.soulBoots){
	Entity.clearEffect(Player.get(),2);
Entity.clearEffect(Player.get(),4);
Entity.clearEffect(Player.get(),7);
Entity.clearEffect(Player.get(),9);
Entity.clearEffect(Player.get(),15);
Entity.clearEffect(Player.get(),17);
Entity.clearEffect(Player.get(),18);
Entity.clearEffect(Player.get(),19);
Entity.clearEffect(Player.get(),20);
Entity.clearEffect(Player.get(),25);
Entity.clearEffect(Player.get(),28);

}});
 
// staff

Item.registerNoTargetUseFunction("wither_staff", function(item){
if(item.id == ItemID.wither_staff){
var lookAngle = Entity.getLookAngle(Player.get());
  if (lookAngle.yaw == 0) { this.spawn(params); return; }
  var c = Entity.getPosition(Player.get()),
   v = McMath.lookDirection(lookAngle.yaw, lookAngle.pitch);
  entity = Entity.spawn(c.x + (v.x * 1.1), c.y + (v.y * .12), c.z + (v.z * 1.1), 89);
  Entity.setVelocity(entity, v.x * 5, v.y * 5 + 0.2, v.z * 5);
}});

Item.registerNoTargetUseFunction("dragon_staff", function(item){
if(item.id == ItemID.dragon_staff){
var lookAngle = Entity.getLookAngle(Player.get());
  if (lookAngle.yaw == 0) { this.spawn(params); return; }
  var c = Entity.getPosition(Player.get()),
   v = McMath.lookDirection(lookAngle.yaw, lookAngle.pitch);
  entity = Entity.spawn(c.x + (v.x * 1.1), c.y + (v.y * .12), c.z + (v.z * 1.1), 79);
  Entity.setVelocity(entity, v.x * 10, v.y * 10 + 0.2, v.z * 10);
}});


Item.registerNoTargetUseFunction("ghast_staff", function(item){
if(item.id == ItemID.ghast_staff){
var lookAngle = Entity.getLookAngle(Player.get());
  if (lookAngle.yaw == 0) { this.spawn(params); return; }
  var c = Entity.getPosition(Player.get()),
   v = McMath.lookDirection(lookAngle.yaw, lookAngle.pitch);
  entity = Entity.spawn(c.x + (v.x * 1.1), c.y + (v.y * .12), c.z + (v.z * 1.1), 85);
  Entity.setVelocity(entity, v.x * 5, v.y * 5 + 0.2, v.z * 5);
}});


Item.registerNoTargetUseFunction("ifrit_staff", function(item){
if(item.id == ItemID.ifrit_staff){
var lookAngle = Entity.getLookAngle(Player.get());
  if (lookAngle.yaw == 0) { this.spawn(params); return; }
  var c = Entity.getPosition(Player.get()),
   v = McMath.lookDirection(lookAngle.yaw, lookAngle.pitch);
  entity = Entity.spawn(c.x + (v.x * 1.1), c.y + (v.y * .12), c.z + (v.z * 1.1), 94);
  Entity.setVelocity(entity, v.x * 5, v.y * 5 + 0.2, v.z * 5);
}});


Item.registerNoTargetUseFunction("ender_staff", function(item){
  if(item.id == ItemID.ender_staff){
    let pos = Player.getPosition();
    let vec = Entity.getLookVector(Player.get());
    let crd = {};
    for(let t = 0; t <= 64; t++){
      crd.x = pos.x + vec.x * t;
      crd.y = pos.y + vec.y * t;
      crd.z = pos.z + vec.z * t;
        if(!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))){
          Game.tipMessage("X: "+Math.round(crd.x)+" Y: "+Math.round(crd.y+2)+" Z: "+Math.round(crd.z));
          Entity.setPosition(Player.get(), crd.x, crd.y+2, crd.z);   
        break;
      }
    }
  }
});




Item.registerNoTargetUseFunction("tnt_staff", function(item){
if(item.id == ItemID.tnt_staff){
var lookAngle = Entity.getLookAngle(Player.get());
  if (lookAngle.yaw == 0) { this.spawn(params); return; }
  var c = Entity.getPosition(Player.get()),
   v = McMath.lookDirection(lookAngle.yaw, lookAngle.pitch);
  entity = Entity.spawn(c.x + (v.x * 1.1), c.y + (v.y * .12), c.z + (v.z * 1.1), 65);
  Entity.setVelocity(entity, v.x * 5, v.y * 5 + 0.2, v.z * 5);
}});


Item.registerNoTargetUseFunction("phantom_staff", function(item){
  if(item.id == ItemID.phantom_staff){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
{
Entity.setVelocity(Player.get(), 5*vec.x, 5*vec.y, 5*vec.z);   

}}}); 



//soul

Callback.addCallback("PlayerAttack",function(player,victim){
var mobV=Entity.getType(victim);
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.pili_soul&&mobV==mobV){
var coords = Entity.getPosition(victim);
Entity.remove(victim);
Player.decreaseCarriedItem(1);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobV);}}});


Callback.addCallback("PlayerAttack",function(player,victim){
var rnd = Math.floor((Math.random()*100)+0);
var mobId = [34,48,32,45,33];
var dropDt = [0,1,2,3,4];
for(var i=0; i<12; i++)
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.heaDripper&&Entity.getType(victim)==mobId[i]&&rnd<=20)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);
World.drop(coords.x, coords.y, coords.z, 397, 1, dropDt[i]);}}});



// spawner


Block.registerDropFunctionForID("52", function(coords, blockID, blockData, level, enchant){ if(level > 1){ 
	var rnd = Math.floor((Math.random()*3)+1);
	var dr = Math.floor((Math.random()*5)+3);
if(enchant.silk){ return [[blockID, 1, 0]];}
if(enchant.fortune){ 
ToolAPI.dropOreExp(coords, 3, 7, enchant.experience); 
return 
[[ItemID.spawnerchunk, dr+rnd, 0]];}
 ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.spawnerchunk, dr, 0]]} return [];},3);


// bedrock
Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.bedbre&&block.id==7){
	World.destroyBlock(coords.x, coords.y, coords.z);
	World.drop(coords.x, coords.y, coords.z, 7, 1, 0)
	}});
	
	Callback.addCallback("tick", function () { 
	item=Player.getCarriedItem(true);
	if(item.id==ItemID.bedbre){
		Block.setDestroyTime(7, 0.08); 
	}
	else
	if(item.id!==ItemID.bedbre){
		Block.setDestroyTime(7, 99999*99999);
	}});
	
//
var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62, 103,104,105,106,107,108,109,110,111,112,113,114,115,116,118];

TileEntity.registerPrototype(BlockID.pilimob_grinder,{
	defaultValues: {
  damage: 100,
  range: 5,
  kill:0
  },
redstone: function(params){ 
if(params.power >3){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 10000);
}}}}});


 










// file: other.js

Item.setEnchantType(ItemID.soulHelmet, Native.EnchantType.helmet, 25);
Item.setEnchantType(ItemID.soulChestplate, Native.EnchantType.chestplate, 25);
Item.setEnchantType(ItemID.soulLeggings, Native.EnchantType.leggings, 25);
Item.setEnchantType(ItemID.soulBoots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.soulHelmet, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulChestplate, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulLeggings, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.soulBoots, [ItemID.pili_soul]);

Item.setEnchantType(ItemID.heaDripper, Native.EnchantType.weapon, 14);
Item.addRepairItemIds(ItemID.heaDripper, [ItemID.spawnerchunk]);

Item.addRepairItemIds(ItemID.wither_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.dragon_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ender_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.tnt_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ghast_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.ifrit_staff, [ItemID.pili_soul]);
Item.addRepairItemIds(ItemID.phantom_staff, [ItemID.pili_soul]);



Item.addCreativeGroup("ripper", Translation.translate("ripper"), [
	ItemID.heaDripper,
	ItemID.spawnerchunk,
	ItemID.pili_soul,
	ItemID.bedbre,
ItemID.soulHelmet,
ItemID.soulChestplate,
ItemID.soulLeggings,
ItemID.soulBoots,
ItemID.wither_staff,
ItemID.dragon_staff,
ItemID.tnt_staff,
ItemID.ghast_staff,
ItemID.ifrit_staff,
ItemID.ender_staff,
ItemID.phantom_staff,
BlockID.pilimob_grinder

]);






