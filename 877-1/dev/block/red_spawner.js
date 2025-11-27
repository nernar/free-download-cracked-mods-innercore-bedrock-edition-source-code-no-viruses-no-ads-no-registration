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
	
	
	
	