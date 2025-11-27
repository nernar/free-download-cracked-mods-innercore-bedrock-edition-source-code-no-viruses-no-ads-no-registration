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


 






