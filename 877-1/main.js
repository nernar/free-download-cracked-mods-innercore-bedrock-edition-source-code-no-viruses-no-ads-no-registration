/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: api/api.js




ToolAPI.breakCarriedTool = function(damage, player) {
		if (!player) player = Player.get();
		let item = Entity.getCarriedItem(player);
		let enchant = ToolAPI.getEnchantExtraData(item.extra);
		if (Math.random() < 1 / (enchant.unbreaking + 1)) {
			item.data += damage;
		}
		if (item.data >= Item.getMaxDamage(item.id)) {
			let tool = ToolAPI.getToolData(item.id);
			item.id = tool ? tool.brokenId : 0;
			item.count = 1;
			item.data = 0;
		}
		Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
	}
    


var ITEM = {
Item: function(id, texture, name, stack/*, durability*/){
IDRegistry.genItemID(id);
Item.createItem(id, name, {name: texture, meta: 0}, {stack: stack});
Item.setAllowedInOffhand(ItemID[id], true);

//Item.setMaxDamage(ItemID[id], durability);
},

Food: function(id, texture, name, stack, food){
IDRegistry.genItemID(id);
Item.createFoodItem(id, name, {name: texture, meta: 0}, {stack: stack}, {food:food});
//Item.setGlint(ItemID[id], glint);
Item.setAllowedInOffhand(ItemID[id], true);
Item.addCreativeGroup("food", Translation.translate("food"), [
	ItemID[id]
]);
},

Fuel: function(id, texture, name, stack, fuel){
IDRegistry.genItemID(id);
Item.createItem(id, name, {name: texture, meta: 0}, {stack: stack});
//Item.setGlint(ItemID[id], glint);
Item.setAllowedInOffhand(ItemID[id], true);
Recipes.addFurnaceFuel(ItemID[id], -1, fuel*200);
Item.addCreativeGroup("fuel", Translation.translate("fuel"), [
	ItemID[id]
]);
}}




// file: block/red_spawner.js

var BLOCKTYPE_SPAWNER = Block.createSpecialType({ 
	base: 49,
 explosionres: 99*99,
 solid: true,
 opaque: true,
 lightopacity: 15,
 friction: 0.6,
 renderlayer: 2,
 rendertype: 0,
 destroytime: 1,
 sound: "stone"
});



IDRegistry.genBlockID("pili_spawner");
Block.createBlock("pili_spawner", [{
    name: "Redstone mob spawner", 
    texture: [
["pili_spawner", 0]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

IDRegistry.genBlockID("pili_spawner1");
Block.createBlock("pili_spawner1", [{
    name: "Iron mob spawner", 
    texture: [
["pili_spawner", 1]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

IDRegistry.genBlockID("pili_spawner2");
Block.createBlock("pili_spawner2", [{
    name: "Golden mob spawner", 
    texture: [
["pili_spawner", 2]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

IDRegistry.genBlockID("pili_spawner3");
Block.createBlock("pili_spawner3", [{
    name: "Diamond mob spawner", 
    texture: [
["pili_spawner", 3]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

IDRegistry.genBlockID("pili_spawner4");
Block.createBlock("pili_spawner4", [{
    name: "Emerald mob spawner", 
    texture: [
["pili_spawner", 4]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

Translation.addTranslation("Redstone mob spawner", {ru: "спавнер мобов на красном камне"});
Translation.addTranslation("Iron mob spawner", {ru: "железный спавнер мобов"});
Translation.addTranslation("Golden mob spawner", {ru: "золотой спавнер мобов"});
Translation.addTranslation("Diamond mob spawner", {ru: "алмазный спавнер мобов"});
Translation.addTranslation("Emerald mob spawner", {ru: "изумрудный спавнер мобов"});





Recipes.addShaped({id: BlockID.pili_spawner, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 331, -1, "b", 265, -1, "c", ItemID.mob_soul1, -1]);
        
        Recipes.addShaped({id: BlockID.pili_spawner1, count: 1, data: 0}, [
        "aaa",
        "aca",
        "aaa"
        ], ["a", 42, -1, "c", BlockID.pili_spawner, -1]);
        
        Recipes.addShaped({id: BlockID.pili_spawner2, count: 1, data: 0}, [
        "aaa",
        "aca",
        "aaa"
        ], ["a", 41, -1, "c", BlockID.pili_spawner1, -1]);
        
        Recipes.addShaped({id: BlockID.pili_spawner3, count: 1, data: 0}, [
        "aaa",
        "aca",
        "aaa"
        ], ["a", 57, -1, "c", BlockID.pili_spawner2, -1]);
        
        Recipes.addShaped({id: BlockID.pili_spawner4, count: 1, data: 0}, [
        "aaa",
        "aca",
        "aaa"
        ], ["a", 133, -1, "c", BlockID.pili_spawner3, -1]);
        

var spawnUI = new UI.StandartWindow({
  standart: {
  header: {
  text: {
  text: "Redstone mob spawer"
  }},
  inventory: {
  standart: true
  }, 
  background: { 
  standart: true 
  }
  },
  drawing: [
  {
  type: "bitmap", 
  x: 820, 
  y: 75, 
  bitmap: "spawnUI0", 
  scale: 5
  },
  {
  type: "text",
  text: "redstone signal: ",
  x: 350,
  y: 50,
  size: 18,
  width: 40, 
  height: 10
  }
  
  ],
  elements: {
  "text1": {type: "text", x: 535, y: 35, width: 40, height: 10, font: {size: 18}},
		"slotSource": {
		type: "slot", 
		x: 650, 
		y: 155,
		bitmap:"spawn_egg_slot",
		size: 110
		},
  "mobScale": {
  type: "scale", 
  x: 820, 
  y: 75, 
  direction: 1, 
  scale: 5, 
  bitmap: "spawnUI1"
  }
  
}});


//
TileEntity.registerPrototype(BlockID.pili_spawner,{
	defaultValues:{
	power:false,
	progress: 0
	},
	getGuiScreen: function(){
		return spawnUI;
	},
	tick:function(){
	this.container.setText("text1", this.data.power);
	var slot_mob = this.container.getSlot("slotSource");
	this.container.setScale("mobScale", this.data.progress / 200);	
if(this.data.power==true){	if(this.data.progress<202&&slot_mob.id==ItemID.mob_soul1){           
if(this.data.progress++ >= 200){	
this.data.progress = 0;
Entity.spawn(this.x+0.5, this.y+1, this.z+0.5, slot_mob.data);
}}}},
redstone: function(params){
 if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }});
    
    //////
    TileEntity.registerPrototype(BlockID.pili_spawner1,{
	defaultValues:{
	power:false,
	progress: 0
	},
	getGuiScreen: function(){
		return spawnUI;
	},
	tick:function(){
	this.container.setText("text1", this.data.power);
	var slot_mob = this.container.getSlot("slotSource");
	this.container.setScale("mobScale", this.data.progress / 150);	
if(this.data.power==true){	if(this.data.progress<152&&slot_mob.id==ItemID.mob_soul1){           
if(this.data.progress++ >= 150){	
this.data.progress = 0;
Entity.spawn(this.x+0.5, this.y+1, this.z+0.5, slot_mob.data);
}}}},
redstone: function(params){
 if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }});
	///////
	TileEntity.registerPrototype(BlockID.pili_spawner2,{
	defaultValues:{
	power:false,
	progress: 0
	},
	getGuiScreen: function(){
		return spawnUI;
	},
	tick:function(){
	this.container.setText("text1", this.data.power);
	var slot_mob = this.container.getSlot("slotSource");
	this.container.setScale("mobScale", this.data.progress / 100);	
if(this.data.power==true){	if(this.data.progress<102&&slot_mob.id==ItemID.mob_soul1){           
if(this.data.progress++ >= 100){	
this.data.progress = 0;
Entity.spawn(this.x+0.5, this.y+1, this.z+0.5, slot_mob.data);
}}}},
redstone: function(params){
 if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }});
	
	//
	TileEntity.registerPrototype(BlockID.pili_spawner3,{
	defaultValues:{
	power:false,
	progress: 0
	},
	getGuiScreen: function(){
		return spawnUI;
	},
	tick:function(){
	this.container.setText("text1", this.data.power);
	var slot_mob = this.container.getSlot("slotSource");
	this.container.setScale("mobScale", this.data.progress / 50);	
if(this.data.power==true){	if(this.data.progress<52&&slot_mob.id==ItemID.mob_soul1){           
if(this.data.progress++ >= 50){	
this.data.progress = 0;
Entity.spawn(this.x+0.5, this.y+1, this.z+0.5, slot_mob.data);
}}}},
redstone: function(params){
 if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }});
	
	//
	TileEntity.registerPrototype(BlockID.pili_spawner4,{
	defaultValues:{
	power:false,
	progress: 0
	},
	getGuiScreen: function(){
		return spawnUI;
	},
	tick:function(){
	this.container.setText("text1", this.data.power);
	var slot_mob = this.container.getSlot("slotSource");
	this.container.setScale("mobScale", this.data.progress / 6);	
if(this.data.power==true){	if(this.data.progress<6&&slot_mob.id==ItemID.mob_soul1){           
if(this.data.progress++ >= 5){	
this.data.progress = 0;
Entity.spawn(this.x+0.5, this.y+1, this.z+0.5, slot_mob.data);
}}}},
redstone: function(params){
 if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }});
	
	
	
	




// file: block/mob_grinder.js




IDRegistry.genBlockID("mob_grinder");
Block.createBlock("mob_grinder", [{
    name: "Redstone mob grinder", 
    texture: [
["mob_grinder", 0]], 
    inCreative: true 
}],BLOCKTYPE_SPAWNER);

Recipes.addShaped({id: BlockID.mob_grinder, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 331, -1, "b", 265, -1, "c", 276, -1]);


var evilMobs = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62, 103,104,105,106,107,108,109,110,111,112,113,114,115,116,118];

TileEntity.registerPrototype(BlockID.mob_grinder,{
	defaultValues: {
  damage: 100,
  range: 3,
  power:false,
  progress: 0,
  kill:0
  },
	tick:function(){
	
if(this.data.power==true){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){


Entity.damageEntity(ent, 10000);
}}}},  
  
  
  
redstone: function(params){
        if(params.power < 3)
            this.data.power = false;
        else
            this.data.power = true;
    }
    
    });


 




// file: item.js


ITEM.Item("mob_soul1", "mob_soul", "mob soul", 1);
Item.setMaxDamage(ItemID.mob_soul1, 300);
Translation.addTranslation("mob soul", {ru: "душа моба"});

ITEM.Item("soul_capture", "soul_capture", "soul invader", 1);
Translation.addTranslation("soul invader", {ru: "захватчик душ"});
Recipes.addShaped({id: ItemID.soul_capture, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 41, -1, "b", 264, -1, "c", 334, -1]);
        
        




Callback.addCallback("PlayerAttack",function(player,victim){
var mobV=Entity.getType(victim);
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.soul_capture&&mobV!=52|item.id==ItemID.soul_capture&&mobV!=53){

Game.prevent();
Entity.remove(victim);
Player.setCarriedItem(ItemID.mob_soul1, 1, mobV);
Game.prevent();

}}});



ITEM.Item("head_ripper", "heaDripper", "head ripper", 1);
Item.setToolRender(ItemID.head_ripper, true);
ToolAPI.registerTool(ItemID.head_ripper, "stone", ["plant"], {damage: 10});
Item.setEnchantType(ItemID.head_ripper, Native.EnchantType.weapon, 15);
Translation.addTranslation("head ripper", {ru: "головорез"});


Callback.addCallback("PlayerAttack",function(player,victim){
var rnd = Math.floor((Math.random()*100)+0);
var mobId = [34,48,32,45,33];
var dropDt = [0,1,2,3,4];
for(var i=0; i<12; i++)
{
item=Player.getCarriedItem(true);
if(item.id==ItemID.head_ripper&&Entity.getType(victim)==mobId[i]&&rnd<=20)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);
World.drop(coords.x, coords.y, coords.z, 397, 1, dropDt[i]);}}});




