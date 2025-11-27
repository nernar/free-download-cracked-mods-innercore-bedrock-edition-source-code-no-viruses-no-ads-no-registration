var DefenseCore = {
 ENDER_BLOCKS: [121, 122, 130, 200, 201, 203, 206, 208, 209],

 BUILDINGS_BLOCKS: [4, 5, 17, 20, 35, 43, 45, 53, 54, 67, 85, 98, 102, 107, 108, 109, 112, 113, 114, 128, 134, 135, 136, 139, 155, 156, 158, 159, 160, 163, 164, 168, 171, 180, 181, 182, 183, 184, 185, 186, 187, 201, 203, 206],

 _3X3_COORDS_AREAS: [
  [
   {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}, {x: 1, y: 0, z: 1}, {x: -1, y: 0, z: -1}, {x: 1, y: 0, z: -1}, {x: -1, y: 0, z: 1}
  ],
  [
   {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}, {x: 1, y: 0, z: 1}, {x: -1, y: 0, z: -1}, {x: 1, y: 0, z: -1}, {x: -1, y: 0, z: 1}
  ],
  [
   {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 1, z: 0}, {x: -1, y: -1, z: 0}, {x: 1, y: -1, z: 0}, {x: -1, y: 1, z: 0}
  ],
  [
   {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 1, z: 0}, {x: -1, y: -1, z: 0}, {x: 1, y: -1, z: 0}, {x: -1, y: 1, z: 0}
  ],
  [
   {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}, {x: 0, y: 1, z: 1}, {x: 0, y: -1, z: -1}, {x: 0, y: -1, z: 1}, {x: 0, y: 1, z: -1}
  ],
  [
   {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}, {x: 0, y: 1, z: 1}, {x: 0, y: -1, z: -1}, {x: 0, y: -1, z: 1}, {x: 0, y: 1, z: -1}
  ]
 ],

 FURNACE_FUEL: {
	5: 300,
	6: 100,
	17: 300,
	263: 1600,
	280: 100,
	268: 200,
	269: 200,
	270: 200,
	271: 200,
	85: 300,
	107: 300,
	134: 300,
	135: 300,
	158: 150,
	162: 300,
	163: 300,
	164: 300,
	184: 300,
	185: 300,
	186: 300,
	187: 300,
	53: 300,
	54: 300,
	58: 300
 },

 NOT_LIVING_ENTITIES: [Native.EntityType.ARROW, Native.EntityType.SMALL_FIREBALL, Native.EntityType.FIREBALL, Native.EntityType.ITEM, Native.EntityType.PRIMED_TNT, Native.EntityType.FALLING_BLOCK, Native.EntityType.EXPERIENCE_ORB, Native.EntityType.EXPERIENCE_POTION, Native.EntityType.THROWN_POTION, Native.EntityType.LIGHTNING_BOLT, Native.EntityType.FISHING_HOOK, Native.EntityType.SNOWBALL],

 UNDEAD_MOBS: [Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, Native.EntityType.SKELETON, Native.EntityType.PIG_ZOMBIE],

 isUndead: function(entity){
  var type = Entity.getType(entity);
  for (var i = 0; i < DefenseCore.UNDEAD_MOBS.length; i++){
   if (type == DefenseCore.UNDEAD_MOBS[i]){
    return true;
   }
  }
 },

 ORES_NATIVE: [14, 15, 16, 21, 56, 73, 129, 153],

 isCommonBlock: function(id){
  if (GenerationUtils.isTerrainBlock(id)){
   for (var i = 0; i < DefenseCore.ORES_NATIVE.length; i++){
    if (DefenseCore.ORES_NATIVE[i] == id){
     return false;
    }
   }
   return true;
  }
  return false;
 },

 isBuildingBlock: function(id){
  for (var i = 0; i < DefenseCore.BUILDINGS_BLOCKS.length; i++){
   if (id == DefenseCore.BUILDINGS_BLOCKS[i]){
    return true;
   }
  }
 },

 addExpAtEntity: function(entity, value){
  var coords = Entity.getPosition();
  ToolAPI.dropExpOrbs(coords.x, coords.y, coords.z, value);
 },

 getDestroyTimeNative: ModAPI.requireGlobal("Block.getDestroyTime"),

 getDestroyTime: function(id, data){
  var block = Unlimited.API.GetReal(id, data);
  return DefenseCore.getDestroyTimeNative(block.id);
 },

 isLiving: function(entity){
  for (var i = 0; i < DefenseCore.NOT_LIVING_ENTITIES.length; i++){
   if (Entity.getType(entity) == DefenseCore.NOT_LIVING_ENTITIES[i]){
    return false;
   }
  }
  return true;
 },

 findTarget: function(x, y, z, range){
  var target = parseInt(Entity.findNearest({x: x+0.5, y: y+0.5, z: z+0.5}, null, range*2));
  if (Entity.isExist(target) && DefenseCore.isLiving(target)) return target;
 },

 consumeEnergy: function(data, count){
  var energy;
  if (data.energy >= count){
   data.energy -= count;
   energy = 0;
  }
  else {
   energy = count - data.energy;
   data.energy = 0
  }
  return energy;
 },

 PRECISE_PLACE_FUNCTION: function(coords, item, block){
  World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, item.data);
 },

 registerOreDrop: function(id, drop, neededLevel, exp){
  Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant){
   if (level > ((neededLevel - 1) || 0)){
    if (enchant.silk) return [[BlockID[id], 1, 0]];
    ToolAPI.dropOreExp(coords, exp.min || 1, exp.max || 2, enchant.experience);
    return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
   }
   return [];
  }, neededLevel || 1);
 },

 cloneArray: function(arr){
  var clon = [];
  for (var key in arr){
   clon[key] = arr[key]
  }
  return clon;
 },

 random: function(min, max){
  return Math.floor(Math.random()*(max - min+1) + min);
 },

 get3x3CoordsArea: function(coords, side){
  var coords_template = DefenseCore._3X3_COORDS_AREAS[side];
  var area = [];
  for (var temp in coords_template){
   area[temp] = {x: coords.x + coords_template[temp], y: coords.y + coords_template[temp], z: coords.z + coords_template[temp]};
  }
  return area;
 },

 Tool: {
	 add: function (id, block, properties) {
		 Item.setToolRender(id, true);
		 ToolAPI.registerTool(id, properties.material, block, properties);
		 if (properties.enchant) {
			 Item.setEnchantType(id, properties.enchant.type, properties.enchant.max);
		 }
		 if (properties.useItem) {
			 Item.registerUseFunctionForID(id, properties.useItem);
		 }
		 Item.setMaxDamage(id, properties.durability);
	 },

	 broke: function (damage) {
		 item = Player.getCarriedItem();
		 item.data += damage;
		
		 if (item.data > Item.getMaxDamage (item.id)) {
		 	item.id = 0;
	  } else {
			Player.setCarriedItem (item.id, item.count, item.data, item.enchant);
		 }
	 },

  pickaxe: function(id, material, advanced){
    var properties = {};
    var tool_material = ToolAPI.toolMaterials[material];
    var blocks = ["stone"];
    properties.material = material;
    properties.durability = tool_material.durability;
    properties.damage = 2;
    properties.enchant = {
     type: Native.EnchantType.pickaxe,
     max: tool_material.enchantability
    };
    if (advanced) {
     for (var prop in advanced){
      properties[prop] = advanced[prop];
     }
    }
    DefenseCore.Tool.add(id, blocks, properties);
   },

   axe: function(id, material, advanced){
    var properties = {};
    var tool_material = ToolAPI.toolMaterials[material];
    var blocks = ["wood"];
    properties.material = material;
    properties.durability = tool_material.durability;
    properties.damage = 2.5;
    properties.enchant = {
     type: Native.EnchantType.axe,
     max: tool_material.enchantability
    };
    if (advanced) {
     for (var prop in advanced){
      properties[prop] = advanced[prop];
     }
    }
    DefenseCore.Tool.add(id, blocks, properties);
  },

   shovel: function(id, material, advanced){
    var properties = {};
    var tool_material = ToolAPI.toolMaterials[material];
    var blocks = ["dirt"];
    properties.material = material;
    properties.durability = tool_material.durability;
    properties.damage = 1;
    properties.enchant = {
     type: Native.EnchantType.shovel,
     max: tool_material.enchantability
    };
    properties.useItem = function (coords, item, block) {
		 if (block.id == 2 && coords.side == 1) {
			World.setBlock (coords.x, coords.y, coords.z, 198);
			World.playSound (coords.x, coords.y, coords.z, 'step.grass', 1, 1);
			DefenseCore.Tool.broke (1);
		 }
    };
    if (advanced) {
     for (var prop in advanced){
      properties[prop] = advanced[prop];
     }
    }
    DefenseCore.Tool.add(id, blocks, properties);
   },

   hoe: function(id, material, advanced){
    var properties = {};
    var tool_material = ToolAPI.toolMaterials[material];
    var blocks = [];
    properties.material = material;
    properties.durability = tool_material.durability;
    properties.damage = 0;
    properties.enchant = {
     type: Native.EnchantType.hoe,
     max: tool_material.enchantability
    };
    properties.useItem = function (coords, item, block) {
		 if (block.id == 2 && coords.side == 1) {
			World.setBlock (coords.x, coords.y, coords.z, 60);
			World.playSound (coords.x, coords.y, coords.z, 'step.grass', 1, 1);
			DefenseCore.Tool.broke (1);
		 }
	  };
    if (advanced) {
     for (var prop in advanced){
      properties[prop] = advanced[prop];
     }
    }
    DefenseCore.Tool.add(id, blocks, properties);
   },

   sword: function(id, material, advanced){
    var properties = {};
    var tool_material = ToolAPI.toolMaterials[material];
    var blocks = ["plant", "corweb"];
    properties.material = material;
    properties.isWeapon = true;
    properties.durability = tool_material.durability;
    properties.damage = 4;
    properties.enchant = {
     type: Native.EnchantType.sword,
     max: tool_material.enchantability
    };
    if (advanced) {
     for (var prop in advanced){
      properties[prop] = advanced[prop];
     }
    }
    DefenseCore.Tool.add(id, blocks, properties);
   }
 },

 AI: {
 EnemyWatcher: new EntityAIWatcher({
  execute: function() {
   if (World.getThreadTime()%this.params.find_delay==0){
    var attackAI = this.getAI(this.params.attackAI);
    var followAI = this.getAI(this.params.followAI);
    if (Entity.getDistanceToCoords(Player.get(), Entity.getPosition(this.entity)) <= this.params.feelingModifier){
     this.setPriority(this.params.attackAI, this.params.priority_on_attack);
     this.setPriority(this.params.followAI, this.params.priority_on_attack);

     attackAI.data.target = parseInt(Player.get());
     followAI.data.target = Player.getPosition();
    }
    else{
     this.setPriority(this.params.attackAI, this.params.priority_on_idle);
     this.setPriority(this.params.followAI, this.params.priority_on_idle);
     attackAI.data.target = null;
     followAI.data.target = null;
    }
   }
  },

  params: {

   attackAI: "attack",

   followAI: "follow",
 
   find_delay: 20,
 
   priority_on_attack: 5,

   priority_on_idle: 0,

   feelingModifier: 10
  }
 }),

 Shooting: new EntityAIClass({
  execute: function(){
   if (this.params.isQueue){
    if (World.getThreadTime()%this.params.queue_delay == 0 && !this.data.timer){
     this.data.timer = this.params.queue_length;
    }
    if (World.getThreadTime()%this.params.shoot_speed == 0 && this.data.timer){
     this.shoot(this.entity, this.params.ammo_type);
     this.data.timer--;
    }
   }
   else{
    if (World.getThreadTime()%this.params.shoot_speed == 0){
     this.shoot(this.entity, this.params.ammo_type);
    }
   }
  },

  params: {
   ammo_type: Native.EntityType.FIREBALL,

   shoot_speed: 20,

   isQueue: false,

   queue_length: 3,

   projectile_speed: 0.2,

   queue_delay: 40
  },

  shoot: function(attacker, ammo){
   var coords = Entity.getPosition(attacker);
   Entity.moveToAngle(Entity.spawn(coords.x, coords.y + 1, coords.z, ammo), Entity.getLookAngle(attacker), {speed: this.params.projectile_speed});
  }
 }),

 PhaseWatcher: new EntityAIWatcher({
  execute: function(){
   var i = 0;
   var phases = this.params.phases;
   if (phases && !this.data.inited){
    this.data.inited = true;
    this.data.phase = 0;
    this.data.timer = phases[0].time;
   }
   if (this.data.timer > 0){
    this.data.timer--;
    for (i = 0; i < phases[this.data.phase].ai.length; i++){
      var phase = phases[this.data.phase];
      this.setPriority(phase.ai[i], phase.priority);
    }
   }
   else if (phases) {
    for (i = 0; i < phases[this.data.phase].ai.length; i++){
      let phase = phases[this.data.phase];
      this.setPriority(phase.ai[i], phase.other_priority);
    }
    if (!phases[++this.data.phase]){
     this.data.phase = 0;
    }
    this.data.timer = phases[this.data.phase].time;
   }
  },

  params: {
   phases: []
  }
 }),

 PlayerWatcher: new EntityAIWatcher({
  execute: function(){
   var ais = this.params.ai;
   if (ais){
    for (var i = 0; i < ais.length; i++){
     let ai = this.getAI(ais[i]);
     if (ais[i].search(/follow/) != -1){
      ai.data.targetEntity = parseInt(Player.get());
      }
     else {
      ai.data.target = parseInt(Player.get());
     }
    }
   }
  },

  params: {
   ai: []
  }
 }),

 Summoning: new EntityAIClass({
  execute: function(){
   if (World.getThreadTime()%this.params.summon_delay==0){
    var coords = Entity.getPosition(this.entity);
    coords = {x: coords.x + DefenseCore.random(-3, 3), y: coords.y + DefenseCore.random(-3, 3), z: coords.z + DefenseCore.random(-3, 3)};
    var area = this.params.spawn_area;
    if (typeof this.params.entity == "string"){
     Entity.spawnCustom(this.params.entity, coords.x, coords.y, coords.z);
    }
    else {
     Entity.spawn(coords.x, coords.y, coords.z, this.params.entity);
    }
   }
  },

  params: {
   entity: Native.EntityType.ZOMBIE,

   spawn_area: 2,

   summon_delay: 30
  }
 }),

 Guarding: new EntityAIWatcher({
  execute: function() {
   if (World.getThreadTime()%this.params.find_delay==0){
    var coords = Entity.getPosition(this.entity);
    var attackAI = this.getAI(this.params.attackAI);
    var followAI = this.getAI(this.params.followAI);
    var target = DefenseCore.findTarget(coords.x, coords.y, coords.z, this.params.feelingModifier);
    if (target){
     this.setPriority(this.params.attackAI, this.params.priority_on_attack);
     this.setPriority(this.params.followAI, this.params.priority_on_attack);

     attackAI.data.target = parseInt(target);
     followAI.data.target = Entity.getPosition(target);
    }
    else{
     this.setPriority(this.params.attackAI, this.params.priority_on_idle);
     this.setPriority(this.params.followAI, this.params.priority_on_idle);
     attackAI.data.target = null;
     followAI.data.target = null;
    }
   }
  },

  params: {

   attackAI: "attack",

   followAI: "follow",
 
   find_delay: 50,
 
   priority_on_attack: 5,

   priority_on_idle: 0,

   feelingModifier: 5
  }
 }),

 Lifetimer: new EntityAIClass({
  getDefaultPriority: function(){
   return -1;
  },

  execute: function(){
   if (World.getThreadTime()%this.params.damageTimer==0 && Entity.getHealth(this.entity) > 0){
    Entity.setHealth(this.entity, Entity.getHealth(this.entity) - 1);
   }
  },

  params: {
   damageTimer: 60
  }
 })
 },

 UIButtons: {
  	isEnabled: false,
  	container: null,
  	Window: new UI.Window({
		 location: {
			 x: 940,
			 y: 0,
			 width: 60,
			 height: 180
		 },
		 drawing: [{type: "background", color: 0}],
		 elements: {}
	 }),
	
 	enableButton: function(name){
		DefenseCore.UIButtons.isEnabled = true;
		DefenseCore.buttonMap[name] = true;
	},

	registerButton: function(name, properties){
    DefenseCore.buttonMap[name] = false;
		DefenseCore.buttonContent[name] = properties;
	}
 },

 buttonMap: {
  
 },

 buttonContent: {

 },

 updateUIbuttons: function(){
	var elements = DefenseCore.UIButtons.Window.content.elements;
	for(var name in DefenseCore.buttonMap){
		if(DefenseCore.buttonMap[name]){
			if(!elements[name]){
				elements[name] = DefenseCore.buttonContent[name];
				elements[name].x = 0;
			}
		}
		else{
			elements[name] = null;
		}
	}
 },

 UI_tick: function(){
	DefenseCore.updateUIbuttons();
	if(DefenseCore.UIButtons.isEnabled){
		if(!DefenseCore.UIButtons.container){
			DefenseCore.UIButtons.container = new UI.Container();
			DefenseCore.UIButtons.container.openAs(DefenseCore.UIButtons.Window);
		}
	for(var name in DefenseCore.buttonMap){
		DefenseCore.buttonMap[name] = false;
	}
	DefenseCore.UIButtons.isEnabled = false;
  }
 },

 UI_left: function(){
	if(DefenseCore.UIButtons.container){
		DefenseCore.UIButtons.container.close();
	}
 },

 generateOre: function(id, data, chunkX, chunkZ, params){
   for (var i = 0; i < params.veinCounts; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
   if (Math.random() < params.veinChance) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: id,
   data: data,
   size: params.size,
   ratio: params.ratio,
   checkerTile: params.checkerTile,
   checkerMode: params.checkerMode
   });
  }
 } 
 };

registerAPIUnit("DC", DefenseCore);