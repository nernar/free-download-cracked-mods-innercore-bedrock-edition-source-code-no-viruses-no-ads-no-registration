/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 36
*/



// file: energy/armor_buttons.js

importLib("DefenseCore", "*");
importLib("ToolType", "*");
importLib("energylib", "*");
IMPORT("dimensions");

var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
});

var UIbuttons = {
	isEnabled: false,
	nightvision: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: 925,
			y: UI.getScreenHeight()/2-75,
			width: 75,
			height: 300
		},
		drawing: [{type: "background", color: 0}],
		elements: {}
	}),
	
	setButton: function(id, name){
		armorData[id] = name;
	},
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}

var armorData = {};

var buttonMap = {
	button_rage: false,
	button_turtle: false,
	button_fly: false,
}

var buttonContent = {
	button_rage: {
			y: 1500,
			type: "button",
			bitmap: "brave_rage_button",
			bitmap2: "brave_rage_button_on",
			scale: 50,
			clicker: {
				onClick: function(){
              Entity.clearEffect(Player.get(), 19);
              Entity.clearEffect(Player.get(), 20);
              Entity.addEffect(Player.get(), 15, 1, 200, true, false);
			    Entity.addEffect(Player.get(), 5, 2, 200, true, false);
				}
			}
		},

    button_turtle: {
			y: 2250,
			type: "button",
			bitmap: "brave_turtle_button",
			bitmap2: "brave_turtle_button_on",
			scale: 50,
      clicker: {
       onClick: function(){
          Entity.addEffect(Player.get(), 11, 1, 200, true, false);
         Entity.addEffect(Player.get(), 2, 2, 200, true, false);
            Entity.addEffect(Player.get(), 10, 1, 50, true, false);
        }
		}
	}, 

	button_fly: {
		y: 1000,
		type: "button",
		bitmap: "button_fly_off",
		bitmap2: "button_fly_on",
		scale: 50
	}
}

UIbuttons.Window.setAsGameOverlay(true);

function updateUIbuttons(){
	var elements = UIbuttons.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
			elements[name].x = 0;
			buttonMap[name] = false;
		}
		else{
			elements[name] = null;
		}
	}
}


Callback.addCallback("tick", function(){
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	activeButtons = [];
	for(var i in armor){
		var button = armorData[armor[i].id];
		if(button){
			buttonMap[button] = true;
			UIbuttons.isEnabled = true;
		}
	}
	if(UIbuttons.isEnabled && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		updateUIbuttons();
		if(!UIbuttons.container){
			UIbuttons.container = new UI.Container();
			UIbuttons.container.openAs(UIbuttons.Window);
		}
		if(UIbuttons.container.isElementTouched("button_fly")){
			var armor = armor[1];
			var y = Player.getPosition().y
			var maxDmg = Item.getMaxDamage(armor.id)
			if(armor.data < maxDmg && y < 256){ 
				if(World.getThreadTime() % 10 == 0){
					Player.setArmorSlot(1, armor.id, 1, Math.min(armor.data+50, maxDmg));
				}
				var vel = Player.getVelocity();
				var vy = Math.min(32, 264-y) / 160;
				if(vel.y < 0.67){
					Player.addVelocity(0, Math.min(vy, 0.67-vel.y), 0);
				}
			}
		}
	}
	else{
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
	UIbuttons.isEnabled = false;
});




// file: energy/charge_registry.js

var ChargeItemRegistry = {
	chargeData: {},
	
	registerItem: function(item, energy, level, preventUncharge, isTool){
		Item.setMaxDamage(item, energy + 1);
		this.chargeData[item] = {
			type: "normal",
			id: item,
			level: level || 0,
			maxDamage: energy + 1,
			maxCharge: energy,
			preventUncharge: preventUncharge,
			isTool: isTool
		};
	},
	
	registerFlashItem: function(item, energy, level){
		this.chargeData[item] = {
			type: "flash",
			id: item,
			level: level || 0,
			energy: energy,
		};
	},
	
	getItemData: function(id){
		return this.chargeData[id];
	},
	
	isFlashStorage: function(id){
		var data = this.getItemData(id);
		return data && data.type == "flash";
	},
	
	getEnergyFrom: function(item, amount, level, getFromAll){
		if(item.id==ItemID.debugItem){
			return amount;
		}
		
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.level > level || !getFromAll && data.preventUncharge){
			return 0;
		}
		if(data.type == "flash"){
			if(amount < 1){
				return 0;
			}
			item.count--;
			if(item.count < 1){
				item.id = item.data = 0;
			}
			return data.energy;
		}
		if(item.data < 1){
			item.data = 1;
		}
		
		var energyGot = Math.min(amount, data.maxDamage - item.data);
		item.data += energyGot;
		return energyGot;
	},
	
	addEnergyTo: function(item, energy, transf, level){
		level = level || 0;
		var data = this.getItemData(item.id);
		if(!data || data.type == "flash" || data.level > level){
			return 0;
		}
		
		var energyAdd = Math.min(item.data - 1, transf);
		if(energy >= energyAdd){
			item.data -= energyAdd;
			return energyAdd;
		}
		return 0;
	},
	
	getEnergyStored: function(item){
		var data = this.getItemData(item.id);
		if(!data){
			return 0;
		}
		return data.maxDamage - item.data;
	}
}

ChargeItemRegistry.registerFlashItem(331, 500, 0); // redstone

Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem();
	var data = ChargeItemRegistry.getItemData(item.id);
	if(item.data==0 && data && data.type != "flash"){
		Player.setCarriedItem(item.id, 1, 1);
	}
});




// file: energy/shared.js


var FURNACE_FUEL_MAP = {

	49: 1000,

	87: 250,

	88: 250,

	372: 300,

	122: 1000000,

	138: 150000,

	352: 175,

	367: 175,

	369: 275,

	375: 300,

	399: 100000,

};

var player;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Fe = EnergyTypeRegistry.assureEnergyType("Fe", 1);


ModAPI.registerAPI("ICore", {
	Machine: MachineRegistry,
	Recipe: MachineRecipeRegistry,
	ChargeRegistry: ChargeItemRegistry,
	UI: UIbuttons,
	
	requireGlobal: function(command){
		return eval(command);
	}
});

importLib("ToolType", "*");
importLib("energylib", "*");

Logger.Log("Industrial Core API shared with name ICore.", "API");

var GUI_BAR_STANDART_SCALE = 3.2;


var ENERGY_ITEM_NAME = function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	return name + "\n�7" + energyStored + "/" + energyStorage + " Eu";
}




// file: energy/define.js

var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype){
		// register render
		ICRender.getGroup("ic-wire").add(id, -1);
		// register ID
		this.machineIDs[id] = true;
		// setup energy value
		if (Prototype.defaultValues){
			Prototype.defaultValues.energy = 0;
		}
		else{
			Prototype.defaultValues = {
				energy: 0
			};
		}
		// copy functions
		if(!Prototype.getEnergyStorage){
			Prototype.getEnergyStorage = function(){
				return 0;
			};
		}
		/*
		Prototype.click = function(id, count, data, coords){
			if(id==ItemID.wrench || id==ItemID.electricWrench){
				return true;
			}
		}
		*/
		
		ToolAPI.registerBlockMaterial(id, "stone");
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		EnergyTileRegistry.addEnergyTypeForId(id, Fe);
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level > 0){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}




// file: energy/recipe.js

var MachineRecipeRegistry = {
	recipeData: {},
	
	registerRecipesFor: function(name, data, validateKeys){
		if(validateKeys){
			var newData = {};
			for(var key in data){
				var newKey = key;
				if(key.split(":").length < 2){
					newKey = eval(key);
				}
				newData[newKey] = data[key];
			}
			data = newData;
		}
		this.recipeData[name] = data;
	},
	
	addRecipeFor: function(name, source, result){
		this.requireRecipesFor(name, true)[source] = result;
	},
	
	requireRecipesFor: function(name, createIfNotFound){
		if(!this.recipeData[name] && createIfNotFound){
			this.recipeData[name] = {};
		}
		return this.recipeData[name];
	},
	
	getRecipeResult: function(name, key1, key2){
		var data = this.requireRecipesFor(name);
		if(data){
			return data[key1] || data[key1+":"+key2];
		}
	}
}




// file: materials/winx.js

IDRegistry.genItemID("pixi");
IDRegistry.genItemID("ocean");
IDRegistry.genItemID("otear");
IDRegistry.genItemID("oceanium");
IDRegistry.genItemID("siren_bok");
IDRegistry.genItemID("pixi_iron");
IDRegistry.genItemID("pixi_pickaxe");
IDRegistry.genItemID("pixi_shovel");
IDRegistry.genItemID("pixi_axe");
IDRegistry.genItemID("pixi_hoe");
IDRegistry.genItemID("bulatsword");
IDRegistry.genItemID("shardwings");
IDRegistry.genBlockID("pixiore")

Block.createBlock("pixiore", [
{name: "Magick stone", texture: [["pixi_ore", 0]], inCreative: true}
] );
Item.createItem("pixi", "Pixie Dust", {name: "pixi", meta: 0});
Item.createItem("oceanium", "Oceanium", {name: "oceanium", meta: 0});
Item.createItem("ocean", "Ocean breath", {name: "ocean", meta: 0});
Item.createItem("otear", "Ocean tear", {name: "otear", meta: 0});
Item.createItem("pixi_iron", "Pixie iron", {name: "Ipixi", meta: 0});
Item.createItem("pixi_pickaxe", "Pixie pickaxe", {name: "ppixi", meta: 0}, {stack: 1});
Item.createItem("siren_bok", "Sirenix books", {name: "sirenix", meta: 0});
Item.setGlint(ItemID.siren_bok, true);
Item.createItem("pixi_shovel", "Pixie shovel", {name: "spixi", meta: 0}, {stack: 1});
Item.createItem("pixi_axe", "Pixie axe", {name: "apixi", meta: 0}, {stack: 1});
Item.createItem("pixi_hoe", "Pixie hoe", {name: "hpixi", meta: 0}, {stack: 1});
Item.createItem("bulatsword", "Bulat beam", {name: "bulatsword", meta: 0}, {stack: 1});
Item.createItem("shardwings", "Shard of Fairy wings", {name: "shardwings", meta: 0}, {stack: 64});
ChargeItemRegistry.registerItem(ItemID.siren_bok, 6000, 0, true, true);
var SIRENIX_DURABILITY = 6001;
		
Item.registerUseFunctionForID(ItemID.siren_bok, function(coords, item, block){ 
if(item.data + 5999 <= Item.getMaxDamage(ItemID.siren_bok)){
Game.message(Native.Color.AQUA + "Who summon me?");
 Entity.spawnCustom("fairy", coords.x + 1, coords.y + 1.5, coords.z + .5);
         item.data = Math.min(item.data+6000, SIRENIX_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );

ToolAPI.registerBlockMaterial(BlockID.pixiore, "stone", 2);
Block.registerDropFunction("pixiore", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.pixi, 1, 0]];
			return [];
	}, 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.pixiore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});

ToolAPI.addToolMaterial("pixi", {durability: 10, level: 40, efficiency: 24, damage: 2, enchantability: 14});
ToolAPI.setTool(ItemID.bulatsword, "pixi", ToolType.sword);
ToolAPI.setTool(ItemID.pixi_shovel, "pixi", ToolType.shovel);
ToolAPI.setTool(ItemID.pixi_pickaxe, "pixi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.pixi_axe, "pixi", ToolType.axe);
ToolAPI.setTool(ItemID.pixi_hoe, "pixi", ToolType.hoe);




// file: sword_instrument/bloodsword.js

IDRegistry.genItemID("blo0");
IDRegistry.genItemID("blo1");
IDRegistry.genItemID("blo2");
IDRegistry.genItemID("blo3");
IDRegistry.genItemID("blo4");
Item.createItem("blo0", "Soul Eater", {name: "1blo", meta: 0}, {stack: 1});

Item.createItem("blo1", "Soul Eater 1 lvl", {name: "2blo", meta: 0}, {stack: 1});

Item.createItem("blo2", "Soul Eater 2 lvl", {name: "3blo", meta: 0}, {stack: 1});

Item.createItem("blo3", "Soul Eater 3 lvl", {name: "4blo", meta: 0}, {stack: 1});

Item.createItem("blo4", "Great Soul Eater", {name: "5blo", meta: 0}, {stack: 1});

ToolAPI.registerSword(ItemID.blo0, {level: 0, durability: 400, damage: 4});

ToolAPI.registerSword(ItemID.blo1, {level: 0, durability: 800, damage: 7});

ToolAPI.registerSword(ItemID.blo2, {level: 0, durability: 2000, damage: 10});

ToolAPI.registerSword(ItemID.blo3, {level: 0, durability: 4000, damage: 15});

ToolAPI.registerSword(ItemID.blo4, {level: 0, durability: 7000, damage: 20});

IDRegistry.genItemID("blop0");
IDRegistry.genItemID("blop1");
IDRegistry.genItemID("blop2");
IDRegistry.genItemID("blop3");
IDRegistry.genItemID("blop4");

Item.createItem("blop0", "Soul Pickaxe", {name: "blop0", meta: 0}, {stack: 1});

Item.createItem("blop1", "Soul Pickaxe 1 lvl", {name: "blop1", meta: 0}, {stack: 1});

Item.createItem("blop2", "Soul Pickaxe 2 lvl", {name: "blop2", meta: 0}, {stack: 1});

Item.createItem("blop3", "Soul Pickaxe 3 lvl", {name: "blop3", meta: 0}, {stack: 1});

Item.createItem("blop4", "Great Soul Pickaxe", {name: "blop4", meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID.blop0, {level: 2, durability: 400, efficiency: 3, damage: 3}, ["stone"]);

ToolAPI.registerTool(ItemID.blop1, {level: 3, durability: 800, efficiency: 6, damage: 4}, ["stone"]);

ToolAPI.registerTool(ItemID.blop2, {level: 4, durability: 2000, efficiency: 8, damage: 5}, ["stone"]);

ToolAPI.registerTool(ItemID.blop3, {level: 5, durability: 4000, efficiency: 14, damage: 6}, ["stone"]);

ToolAPI.registerTool(ItemID.blop4, {level: 1000, durability: 7000, efficiency: 20, damage: 7}, ["stone"]);




// file: wings/simplewings.js

IDRegistry.genItemID("simplewings");
Item.createArmorItem("simplewings", "Simple Wings", {name: "simplewings"}, {type: "chestplate", armor: 1, durability: 850, texture: "armor/simplewings_2.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.simplewings, 851, 0, true, true);

IDRegistry.genItemID("normalwings");
Item.createArmorItem("normalwings", "Fairy Wings", {name: "normalwings"}, {type: "chestplate", armor: 1, durability: 5000, texture: "armor/normalwings_2.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.normalwings, 5001, 0, true, true);

IDRegistry.genItemID("ironcrown");
Item.createArmorItem("ironcrown", "Iron Crown", {name: "ironcrown"}, {type: "helmet", armor: 1, durability: 750, texture: "armor/ironcrown_0.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.ironcrown, 751, 0);

UIbuttons.setButton(ItemID.normalwings, "button_fly");

Armor.registerFuncs("normalwings", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity();
			if(vel.y < -0.226 && vel.y > -0.9){
				Game.prevent();
			}
		}
		return false;
	},
	tick: function(){
		return false;
	},
});

	Recipes.addShaped({id: ItemID.ironcrown, count: 1, data: 0}, [
		" b ",
		"btb",
		"b b"
	], ['b', 265, 0, 't', ItemID.pixi, 0]);

UIbuttons.setButton(ItemID.simplewings, "button_fly");

Armor.registerFuncs("simplewings", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity();
			if(vel.y < -0.226 && vel.y > -0.9){
				Game.prevent();
			}
		}
		return false;
	},
	tick: function(){
		return false;
	},
});


IDRegistry.genItemID("goldcrown");
Item.createArmorItem("goldcrown", "Simple Magickal Crown", {name: "gold_crown"}, {type: "helmet", armor: 1, durability: 1200, texture: "armor/gold_crown_0.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.goldcrown, 1200, 0);

function registerStoragePack(id, level, tranfer){
	Armor.registerFuncs(id, {
		hurt: function(){
			return false;
		},
		tick: function(slot, index, maxDamage){
			return ENERGY_PACK_TICK(slot, maxDamage, level, tranfer);
		}
	});
}

var ENERGY_PACK_TICK = function(slot, maxDamage, level, transfer){
	if(World.getThreadTime()%20==0){
	    var item = Player.getCarriedItem();
	    var data = ChargeItemRegistry.getItemData(item.id);
	    if(!data || !data.isTool || data.level > level || item.data <= 1){
	        return false;
	    }
	    var energyAdd = Math.min(item.data - 1, Math.min(transfer*20, maxDamage - slot.data));
	    if(energyAdd > 0){
	        slot.data += energyAdd;
	        Player.setCarriedItem(item.id, 1, item.data - energyAdd);
	        return true;
		}
    }
    return false;
}

registerStoragePack("goldcrown", 0, 2);

registerStoragePack("ironcrown", 0, 1);





// file: wand/fire.js

IDRegistry.genItemID("fireballwand");
Item.createItem("fireballwand", "Wand of Fireball", {name: "fireballwand", meta: 0}, {stack: 1});
Item.setGlint(ItemID.fireballwand, true);
ChargeItemRegistry.registerItem(ItemID.fireballwand, 2000, 0, true, true);
var FIREBALLWAND_DURABILITY = 2001;
		
Item.registerUseFunctionForID(ItemID.fireballwand, function(coords, item, block){ 
if(item.data + 50 <= Item.getMaxDamage(ItemID.fireballwand)){
 var fireball = Entity.spawn(coords.x, coords.y + 2, coords.z, Native.EntityType.FIREBALL);
         Entity.moveToAngle(fireball, Entity.getLookAngle(Player.get()), {speed: 0.5});
         item.data = Math.min(item.data+200, FIREBALLWAND_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );




// file: wand/arrow.js

IDRegistry.genItemID("arrowrod");
Item.createItem("arrowrod", "Wand of Arrow fury", {name: "arrow_rod", meta: 0}, {stack: 1});
Item.setGlint(ItemID.arrowrod, true);
ChargeItemRegistry.registerItem(ItemID.arrowrod, 2000, 0, true, true);
var FIREBALLWAN_DURABILITY = 2001;
		
Item.registerUseFunctionForID(ItemID.arrowrod, function(coords, item, block){ 
if(item.data + 50 <= Item.getMaxDamage(ItemID.arrowrod)){
 var arrow = Entity.spawn(coords.x, coords.y + 2, coords.z, Native.EntityType.ARROW);
 var arrow2 = Entity.spawn(coords.x - 1, coords.y + 2, coords.z, Native.EntityType.ARROW);
 var arrow3 = Entity.spawn(coords.x + 1, coords.y + 2, coords.z, Native.EntityType.ARROW);
         Entity.moveToAngle(arrow, Entity.getLookAngle(Player.get()), {speed: 5.5});
         Entity.moveToAngle(arrow2, Entity.getLookAngle(Player.get()), {speed: 5.5});
         Entity.moveToAngle(arrow3, Entity.getLookAngle(Player.get()), {speed: 5.5});
         item.data = Math.min(item.data+200, FIREBALLWAN_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );




// file: wand/ocharm.js

IDRegistry.genItemID("ocharm");
Item.createItem("ocharm", "Eye of Ocean", {name: "ocharm", meta: 0}, {stack: 1});
  Item.setGlint(ItemID.ocharm, true);
ChargeItemRegistry.registerItem(ItemID.ocharm, 2500, 0, true, true);
var OCEANCHARM_DURABILITY = 2501;
		
Item.registerUseFunctionForID(ItemID.ocharm, function(coords, item, block){ 
if(item.data + 99 <= Item.getMaxDamage(ItemID.ocharm)){
  Entity.addEffect(Player.get(), 13, 1, 2500, false, false);
         item.data = Math.min(item.data+100, OCEANCHARM_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );




// file: armor/vitas.js

IDRegistry.genItemID("shelom_helmet");
IDRegistry.genItemID("ushman_chestplate");
IDRegistry.genItemID("latnitsa_leggings");
IDRegistry.genItemID("ichigi_boots");

Item.createArmorItem("shelom_helmet", "Shelom", {name: "shelom", meta: 0}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/bounty_1.png"});

Item.createArmorItem("ushman_chestplate", "Ushman", {name: "ushman", meta: 0}, {type: "chestplate", armor: 4, durability: 1500, texture: "armor/bounty_1.png"});

Item.createArmorItem("latnitsa_leggings", "Latnitsa", {name: "latnitsa", meta: 0}, {type: "leggings", armor: 3, durability: 1500, texture: "armor/bounty_2.png"});

Item.createArmorItem("ichigi_boots", "Ichigi", {name: "ichigi", meta: 0}, {type: "boots", armor: 3, durability: 1500, texture: "armor/bounty_1.png"});

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var pos = Player.getPosition();
if (helmet.id == ItemID.shelom_helmet){
    Entity.addEffect(Player.get(), 16, 1, 1000, false, false);
   }
});

Callback.addCallback("tick", function()
{
    var chest = Player.getArmorSlot(1);
    var pos = Player.getPosition();
if (chest.id == ItemID.ushman_chestplate){
    Entity.addEffect(Player.get(), 5, 1, 250, false, false);
   }
});
Callback.addCallback("tick", function()
{
    var leggings = Player.getArmorSlot(2);
    var pos = Player.getPosition();
if (leggings.id == ItemID.latnitsa_leggings){
    Entity.addEffect(Player.get(), 8, 3, 250, false, false);
   }
});

Callback.addCallback("tick", function()
{
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (boots.id == ItemID.ichigi_boots){
    Entity.addEffect(Player.get(), 1, 2, 250, false, false);
   }
});






// file: armor/terribl.js

IDRegistry.genItemID("terribl_helmet");
IDRegistry.genItemID("terribl_chestplate");
IDRegistry.genItemID("terribl_leggings");
IDRegistry.genItemID("terribl_boots");

Item.createArmorItem("terribl_helmet", "Terrifying Helmet", {name: "thelmet", meta: 0}, {type: "helmet", armor: 5, durability: 3500, texture: "armor/terribl_1.png"});

Item.createArmorItem("terribl_chestplate", "Terrifying Chestplate", {name: "tchestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 3500, texture: "armor/terribl_1.png"});

Item.createArmorItem("terribl_leggings", "Terrifying Leggings", {name: "tleggings", meta: 0}, {type: "leggings", armor: 5, durability: 3500, texture: "armor/terribl_2.png"});

Item.createArmorItem("terribl_boots", "Terrifying boots", {name: "tboots", meta: 0}, {type: "boots", armor: 5, durability: 3500, texture: "armor/terribl_1.png"});




// file: armor/ancient.js



IDRegistry.genItemID("ancientB_helmet");
IDRegistry.genItemID("ancientB_chestplate");
IDRegistry.genItemID("ancientB_leggings");
IDRegistry.genItemID("ancientB_boots");
IDRegistry.genItemID("ancientP_helmet");
IDRegistry.genItemID("ancientP_chestplate");
IDRegistry.genItemID("ancientP_leggings");
IDRegistry.genItemID("ancientP_boots");

Item.createArmorItem("ancientB_helmet", "Ancient Armored Helmet", {name: "ancient_helmetb", meta: 0}, {type: "helmet", armor: 3, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientB_chestplate", "Ancient Armored Chestplate", {name: "ancient_chestplateb", meta: 0}, {type: "chestplate", armor: 6, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientB_leggings", "Ancient Armored Leggings", {name: "ancient_leggingsb", meta: 0}, {type: "leggings", armor: 3, durability: 2450, texture: "armor/ancientB_2.png"});

Item.createArmorItem("ancientB_boots", "Ancient Armored Boots", {name: "ancient_bootsb", meta: 0}, {type: "boots", armor: 3, durability: 2450, texture: "armor/ancientB_1.png"});

Item.createArmorItem("ancientP_helmet", "Ancient Deadly Helmet", {name: "ancient_helmetp", meta: 0}, {type: "helmet", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

Item.createArmorItem("ancientP_chestplate", "Ancient Deadly Chestplate", {name: "ancient_chestplatep", meta: 0}, {type: "chestplate", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

Item.createArmorItem("ancientP_leggings", "Ancient Deadly Leggings", {name: "ancient_leggingsp", meta: 0}, {type: "leggings", armor: 3, durability: 1625, texture: "armor/ancientP_2.png"});

Item.createArmorItem("ancientP_boots", "Ancient Deadly Boots", {name: "ancient_bootsp", meta: 0}, {type: "boots", armor: 3, durability: 1625, texture: "armor/ancientP_1.png"});

UIbuttons.setButton(ItemID.ancientB_chestplate, "button_turtle");

UIbuttons.setButton(ItemID.ancientP_chestplate, "button_rage");




// file: materials/Dark.js

IDRegistry.genItemID("corpl");
IDRegistry.genItemID("gencor");
IDRegistry.genItemID("darkshard");
IDRegistry.genBlockID("dore");
IDRegistry.genItemID("drod");

Item.createItem("drod", "Dark Rod", {name: "drod", meta: 0}, {stack: 64});
Item.createItem("corpl", "Dark Plate", {name: "corpl", meta: 0}, {stack: 64});
Item.createItem("gencor", "Generator Core", {name: "gencor", meta: 0}, {stack: 1});
Item.createItem("darkshard", "Dark Shard", {name: "darkshard", meta: 0}, {stack: 64});
Block.createBlock("dore", [
{name: "Dark Ore", texture: [["dore", 0]], inCreative: true}
] );
ToolAPI.registerBlockMaterial(BlockID.dore, "stone", 2);
Block.registerDropFunction("dore", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.darkshard, 1, 0]];
			return [];
	}, 2);
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.dore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});
Recipes.addShaped({id: ItemID.corpl, count: 1, data: 0}, [
"cbc",
"bcb",
"cbc"
], ["b", ItemID.darkshard, 0, "c", 265, 0] );

Recipes.addShaped({id: ItemID.gencor, count: 1, data: 0}, [
"cbc",
"bxb",
"cbc"
], ["b", ItemID.corpl, 0, "c", 265, 0, "x", 152, 0] );




// file: materials/Burn.js

IDRegistry.genItemID("burnplate");
IDRegistry.genItemID("burncor");
IDRegistry.genItemID("burncr");

Item.createItem("burnplate", "Burning Plate", {name: "burnplate", meta: 0}, {stack: 64});
Item.createItem("burncor", "Burning core", {name: "burncor", meta: 0}, {stack: 1});
Item.createItem("burncr", "Burning crystal", {name: "burncr", meta: 0}, {stack: 64});






// file: materials/blooditem.js

IDRegistry.genItemID("fleshg");
IDRegistry.genItemID("bloodbone");
IDRegistry.genItemID("bloodskale");
IDRegistry.genItemID("bloodsword");
IDRegistry.genItemID("bloodpickaxe");
IDRegistry.genItemID("bloodknife");
IDRegistry.genItemID("boltknife");
IDRegistry.genItemID("bonesword");
IDRegistry.genItemID("bloodbonesword");
IDRegistry.genItemID("berserker_helmet");
IDRegistry.genItemID("berserker_chestplate");
IDRegistry.genItemID("clearknife");
IDRegistry.genItemID("skull");
IDRegistry.genItemID("bloodiron");
IDRegistry.genItemID("graveshard");

Item.createItem("graveshard", "Gravestone shard", {name: "graveshard", meta: 0}, {stack: 64});
Item.createItem("bloodiron", "Blood Iron", {name: "bloodiron", meta: 0}, {stack: 64});
Item.createItem("skull", "Cursed Skull", {name: "cursedskull", meta: 0}, {stack: 1});
Item.createItem("clearknife", "Empty Knife", {name: "clearknife", meta: 0}, {stack: 16});
Item.createItem("fleshg", "Blood Flash", {name: "fleshg", meta: 0}, {stack: 64});
Item.createItem("bloodbone", "Blood Bone", {name: "bloodbone", meta: 0}, {stack: 64});
Item.createItem("bloodskale", "Blood Scale", {name: "bloodskale", meta: 0}, {stack: 64});
Item.createItem("bloodpickaxe", "Idol Blood Pickaxe", {name: "blood_pickaxe", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bloodpickaxe, true);
ChargeItemRegistry.registerItem(ItemID.bloodpickaxe, 10000, 0, true, true);
var BLOODPICKAXE_DURABILITY = 10001;
Item.createItem("bloodsword", "Dual Madnes Sword", {name: "blood_sword", meta: 0}, {stack: 1});
Item.createItem("bloodbonesword", "Blood bone Sword", {name: "bloodbone_sword", meta: 0}, {stack: 1});
Item.createItem("bonesword", "Bonesword", {name: "bone_sword", meta: 0}, {stack: 1});
Item.createThrowableItem("bloodknife", "Blood Knife", {name: "blood_knife", meta: 0}, {stack: 16});
Item.createThrowableItem("boltknife", "Thunderbolt Knife", {name: "bolt_knife", meta: 0}, {stack: 16});

ToolAPI.registerSword(ItemID.bloodsword, {level: 0, durability: 2000, damage: 9});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.bloodsword){ 
Entity.addEffect(Player.get(), 10, 1, 200, false,false);
 } 
});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.boltknife){ 
     var pos = Entity.getPosition(victim);
     var x = pos.x;
     var y = pos.y;
     var z = pos.z;
 Entity.spawn(x, y, z, 93)
    }
 });
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==ItemID.boltknife)
{
     var pos = Entity.getPosition(victim);
     var x = pos.x;
     var y = pos.y;
     var z = pos.z;
 Entity.spawn(x, y, z, 93)
Player.decreaseCarriedItem (1)
Game.prevent();
}
});
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==ItemID.bloodknife)
{
Player.decreaseCarriedItem (1)
Game.prevent();
}
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.bloodknife){ 
Entity.addEffect(victim, 20, 1, 200, false,false); 
Entity.addEffect(Player.get(), 10, 1, 200, false,false); 
 } 
});

Item.registerUseFunctionForID(ItemID.bloodpickaxe, function(coords, item, block){ 
if(item.data + 799 <= Item.getMaxDamage(ItemID.bloodpickaxe)){
    Entity.addEffect(Player.get(), 3, 1, 1000, false, false);
         item.data = Math.min(item.data+800, BLOODPICKAXE_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );


ToolAPI.registerSword(ItemID.bonesword, {level: 0, durability: 55, damage: 6});

Item.createArmorItem("berserker_helmet", "Berserker Skull", {name: "berserker_skull", meta: 0}, {type: "helmet", armor: 4, durability: 1250, texture: "armor/berserker_1.png"});

Item.createArmorItem("berserker_chestplate", "Berserker Chestplate", {name: "berserker_chestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 1250, texture: "armor/berserker_1.png"});

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var pos = Player.getPosition();
if (helmet.id == ItemID.berserker_helmet && chest.id == ItemID.berserker_chestplate){
    Entity.addEffect(Player.get(), 15, 1, 100, false, false);
    Entity.addEffect(Player.get(), 5, 2, 50, false, false);
   }
});




// file: materials/block.js

IDRegistry.genBlockID("burnblock");
IDRegistry.genBlockID("blooddirtt");
IDRegistry.genBlockID("pixi_brick");
IDRegistry.genBlockID("skyfence");
IDRegistry.genBlockID("diamondfence");
IDRegistry.genBlockID("goldfence");
IDRegistry.genBlockID("ironfence");
IDRegistry.genBlockID("bloodbrick");
IDRegistry.genBlockID("blooddirt");
IDRegistry.genBlockID("gravestone");

Block.createBlock("blooddirt", [{name: "Blood grass", texture: [["blooddirt", 0], ["bloodgrass_top", 0], ["bloodgrass", 0], ["bloodgrass", 0], ["bloodgrass", 0], ["bloodgrass", 0]], inCreative: true}]);
IDRegistry.genBlockID("bloodstone");
Block.createBlock("bloodstone", [{name: "Blood stone", texture: [["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0]], inCreative: true}]);
IDRegistry.genBlockID("portalblock");
Block.createBlock("portalblock", [{name: "Terrible block", texture: [["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.sky_brick, "stone", 2);
Block.registerDropFunction("sky_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.sky_brick, 1, 0]];
			return [];
	}, 2);
	
ToolAPI.registerBlockMaterial(BlockID.skyfence, "stone", 1);
Block.registerDropFunction("skyfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.skyfence, 1, 0]];
			return [];
	}, 1);
	
ToolAPI.registerBlockMaterial(BlockID.gravestone, "stone", 1);
Block.registerDropFunction("gravestone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[ItemID.graveshard, 1, 0]];
			return [];
	}, 1);
	
ToolAPI.registerBlockMaterial(BlockID.pixi_brick, "stone", 2);
Block.registerDropFunction("pixi_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.pixi_brick, 1, 0]];
			return [];
	}, 2);

ToolAPI.registerBlockMaterial(BlockID.bloodstone, "stone", 1);
Block.registerDropFunction("bloodstone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.bloodstone, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.bloodbrick, "stone", 1);
Block.registerDropFunction("bloodbrick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.bloodbrick, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.burnblock, "stone", 2);
Block.registerDropFunction("burnblock", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.burnblock, 1, 0]];
			return [];
	}, 2);

ToolAPI.registerBlockMaterial(BlockID.ironfence, "stone", 1);
Block.registerDropFunction("ironfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[265, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.goldfence, "stone", 1);
Block.registerDropFunction("goldfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[266, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.diamondfence, "stone", 2);
Block.registerDropFunction("diamondfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[264, 1, 0]];
			return [];
	}, 2);
	
Block.createBlock("gravestone", [
{name: "Tombstone", texture: [["gravestone", 0]], inCreative: true}
] );
Block.createBlock("burnblock", [
{name: "Burning block", texture: [["burnblock", 0]], inCreative: true}
] );
Block.createBlock("blooddirtt", [
{name: "Blood dirt", texture: [["blooddirt", 0]], inCreative: true}
] );
Block.createBlock("bloodbrick", [
{name: "Blood brick", texture: [["bloodbrick", 0]], inCreative: true}
] );
Block.createBlock("pixi_brick", [
{name: "Pixie brick", texture: [["pixi_brick", 0]], inCreative: true}
] );
Block.createBlock("skyfence", [
{name: "Sky brick balk", texture: [["sky_brick", 0]], inCreative: true}
] );
Block.createBlock("diamondfence", [
{name: "Diamond balk", texture: [["diamond_bloc", 0]], inCreative: true}
] );
Block.createBlock("goldfence", [
{name: "Gold balk", texture: [["gold_bloc", 0]], inCreative: true}
] );
Block.createBlock("ironfence", [
{name: "Iron balk", texture: [["iron_bloc", 0]], inCreative: true}
] );

Block.setBlockShape(BlockID.gravestone, {x: 1/16, y: 0, z: 1/16}, {x: 15/16, y: 1, z: 8/16})
Block.setBlockShape(BlockID.diamondfence, {x: 6/16, y: 0, z: 6/16}, {x: 10/16, y: 1, z: 10/16})
Block.setBlockShape(BlockID.goldfence, {x: 4/16, y: 0, z: 4/16}, {x: 12/16, y: 1, z: 12/16})
Block.setBlockShape(BlockID.ironfence, {x: 3/16, y: 0, z: 3/16}, {x: 13/16, y: 1, z: 13/16})
Block.setBlockShape(BlockID.skyfence, {x: 4/16, y: 0, z: 4/16}, {x: 12/16, y: 1, z: 12/16})




// file: materials/vitas.js

IDRegistry.genItemID("enchanted_soul");
IDRegistry.genItemID("ecristal");
IDRegistry.genItemID("hleather");
IDRegistry.genItemID("etear");
IDRegistry.genItemID("efeather");
IDRegistry.genItemID("eslime");

Item.createItem("enchanted_soul", "Enchanted soul", {name: "esoul", meta: 0});
Item.createItem("hleather", "Hard Leather", {name: "hleather", meta: 0});
Item.createItem("ecristal", "Cristal of enchance", {name: "ecristal", meta: 0});
Item.createItem("etear", "Enchanted tear", {name: "etear", meta: 0});
Item.createItem("efeather", "Enchanted feather", {name: "efeather", meta: 0});
Item.createItem("eslime", "Enchanted slime", {name: "eslime", meta: 0});





// file: dimension/bloodthorn.js

function blood_thorn(x,y,z){
	GenerationUtils.lockInBlock(BlockID.bloodbrick, 0, 0, false);
  GenerationUtils.setLockedBlock(x, y, z );
  GenerationUtils.setLockedBlock(x , y + 1, z);
  GenerationUtils.setLockedBlock(x, y + 2, z);  
  GenerationUtils.setLockedBlock(x, y + 3, z);
  GenerationUtils.setLockedBlock(x + 1, y + 5, z);
  GenerationUtils.setLockedBlock(x - 1, y + 5, z);  
  GenerationUtils.setLockedBlock(x, y + 5, z + 1);
  GenerationUtils.setLockedBlock(x, y + 5, z - 1);
  GenerationUtils.setLockedBlock(x, y + 4, z); 
    GenerationUtils.setLockedBlock(x + 1, y, z);
  GenerationUtils.setLockedBlock(x - 1, y, z);  
  GenerationUtils.setLockedBlock(x, y, z + 1);
  GenerationUtils.setLockedBlock(x, y, z - 1);
  World.setBlock(x, y + 5, z, 87, 0);
World.setBlock(x, y + 6, z, 51, 0);
World.setBlock(x, y, z, 54, 4);
  World.setBlock(x + 1, y + 6, z, BlockID.diamondfence, 0);
World.setBlock(x - 1, y + 6, z, BlockID.diamondfence, 0);
World.setBlock(x, y + 6, z - 1, BlockID.diamondfence, 0);
World.setBlock(x, y + 6, z + 1, BlockID.diamondfence, 0);
fillChest(x, y, z);
}

Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,250);
		for(var k=60;k<256;k++){
			if (Math.random() < .0005){
		if(World.getBlockID(d.x,k,d.z)==BlockID.blooddirt){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
}
}blood_thorn(d.x,k+1,d.z);return}
		}
	 } 
	}
	});
	
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
addItemsToGenerateChest(ItemID.blo0, 0.2);
addItemsToGenerateChest(ItemID.bloodskale, 0.8, {max:6});
addItemsToGenerateChest(ItemID.bloodbone, 0.9, {max:8});
addItemsToGenerateChest(ItemID.soul_vita, 0.1);
addItemsToGenerateChest(ItemID.enchanted_soul, 0.05);
addItemsToGenerateChest(ItemID.skull, 0.13);
addItemsToGenerateChest(ItemID.bloodiron, 0.2, {max:4});
addItemsToGenerateChest(ItemID.bloodknife, 0.35, {max:16});
addItemsToGenerateChest(367, 0.9, {max:10});


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




// file: dimension/dimension.js


var Signius = new Dimension({
    name: "Signius",
 
    generation: {
        layers: [
            { 
                range: [0, 150],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .02752, .015]
                    }
                },
                
                gradient: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
                
                terrain: {
                    base: 49,
                    cover: {
                        height: 4,
                        top: BlockID.blooddirt,
                        block: 49
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    }, 
    environment: {
        sky: [.178, .034, .034], 
        fog: [.178, .034, .034]
    }
    
});


var SigniusTransferSequence = new TransferSequence(Signius);
SigniusTransferSequence.setPortalTimeout(40);

SigniusTransferSequence.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

SigniusTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("aetherPortall", ["aether_portall", 0], SigniusTransferSequence.getPortal(), {type: "u-plane", frameId: 4}, false);
SigniusTransferSequence.setPortalTiles(BlockID.aetherPortall);


var shape = new PortalShape();
shape.setPortalId(BlockID.aetherPortall);
shape.setFrameIds(BlockID.portalblock);
shape.setMinSize(2, 3);

SigniusTransferSequence.setPortalBuilder(shape.getBuilder());

IDRegistry.genItemID("key");

Item.createItem("key", "Dimension Key", {name: "key", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.key) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 4 || block.id == BlockID.aetherPortall) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.aetherPortall, [4]);
    }
});




// file: dimension/dungeon.js

function blood_dungeon(x,y,z){
  World.setBlock(x - 3, y + 1, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 1, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 1, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 1, z + 1,  BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 1, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 1, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 1, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 1, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 1, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 2, y + 1, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 1, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 1, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 1, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 1, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 1, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 1, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 1, z - 2, BlockID.bloodbrick, 0);

World.setBlock(x - 3, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 4, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 4, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 2, y + 4, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 4, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 4, z - 2, BlockID.bloodbrick, 0);

World.setBlock(x - 3, y + 2, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 2, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 2, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 2, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 2, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 2, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 2, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 2, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 2, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 2, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 2, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 2, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 2, y + 2, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 2, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 2, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 2, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 2, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 2, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 2, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 2, z - 2, BlockID.bloodbrick, 0);

World.setBlock(x - 3, y + 3, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 3, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 3, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 3, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 3, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 3, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 3, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 3, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y + 3, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 3, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 3, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 3, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 2, y + 3, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 3, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 3, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 3, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 3, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y + 3, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 3, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y + 3, z - 2, BlockID.bloodbrick, 0);


  World.setBlock(x - 3, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 3, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z - 3, BlockID.bloodbrick, 0);  
  World.setBlock(x - 2, y, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z - 3, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 3, y, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z + 3, BlockID.bloodbrick, 0);
  World.setBlock(x + 3, y, z - 2, BlockID.bloodbrick, 0);

 World.setBlock(x - 1, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 4, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x +2, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z - 2, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y + 4, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x, y + 4, z - 1, BlockID.bloodbrick, 0);
  
  World.setBlock(x - 1, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x +2, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z - 2, BlockID.bloodbrick, 0);
  World.setBlock(x - 2, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 2, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z + 2, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z - 2, BlockID.bloodbrick, 0);
 
World.setBlock(x - 1, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x - 1, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x + 1, y, z, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z + 1, BlockID.bloodbrick, 0);
  World.setBlock(x, y, z - 1, BlockID.bloodbrick, 0);
  World.setBlock(x, y - 1, z, 54, 4);
  World.setBlock(x - 1, y + 1, z + 1, BlockID.gravestone, 0);
  World.setBlock(x - 1, y + 1, z - 1, BlockID.gravestone, 0);

 World.setBlock(x + 3, y + 1, z, BlockID.ironfence);
 World.setBlock(x + 3, y + 1, z - 1, BlockID.ironfence);
 World.setBlock(x + 3, y + 1, z + 1, BlockID.ironfence);
 World.setBlock(x + 3, y + 2, z, BlockID.ironfence);
 World.setBlock(x + 3, y + 2, z - 1, BlockID.ironfence);
 World.setBlock(x + 3, y + 2, z + 1, BlockID.ironfence);
 World.setBlock(x + 3, y + 3, z, BlockID.ironfence);
 World.setBlock(x + 3, y + 3, z - 1, BlockID.ironfence);
 World.setBlock(x + 3, y + 3, z + 1, BlockID.ironfence);

World.setBlock(x - 3, y + 2, z + 1, BlockID.bloodbrick, 0);
World.setBlock(x - 3, y + 2, z - 1, BlockID.bloodbrick, 0);
World.setBlock(x - 3, y + 1, z, BlockID.bloodbrick, 0);
World.setBlock(x - 3, y + 3, z, BlockID.bloodbrick, 0);
World.setBlock(x - 3, y + 2, z, BlockID.bloodbrick, 0);

World.setBlock(x + 1, y + 1, z + 3, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y + 1, z + 3, BlockID.bloodbrick, 0);
World.setBlock(x + 1, y + 2, z + 3, BlockID.ironfence, 0);
World.setBlock(x - 1, y + 2, z + 3, BlockID.ironfence, 0);
World.setBlock(x + 1, y + 3, z + 3, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y + 3, z + 3, BlockID.bloodbrick, 0);
World.setBlock(x + 1, y + 1, z - 3, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y + 1, z - 3, BlockID.bloodbrick, 0);
World.setBlock(x + 1, y + 2, z - 3, BlockID.ironfence, 0);
World.setBlock(x - 1, y + 2, z - 3, BlockID.ironfence, 0);
World.setBlock(x + 1, y + 3, z - 3, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y + 3, z - 3, BlockID.bloodbrick, 0);
World.setBlock(x + 1, y - 1, z, BlockID.bloodbrick, 0);
World.setBlock(x - 1, y - 1, z, BlockID.bloodbrick, 0);
World.setBlock(x, y - 2, z, BlockID.bloodbrick, 0);
World.setBlock(x, y - 1, z - 1, BlockID.bloodbrick, 0);
World.setBlock(x, y - 1, z + 1, BlockID.bloodbrick, 0);
fillChest(x, y - 1, z);
} 

Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,250);
		for(var k=60;k<256;k++){
			if (Math.random() < .0002){
		if(World.getBlockID(d.x + 1,k,d.z)==BlockID.blooddirt){
				if(World.getBlockID(d.x - 1,k,d.z)==BlockID.blooddirt){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
}
}blood_dungeon(d.x,k+1,d.z);return}
		}
		} 
	 } 
	}
	});




// file: ancientB.js

var AncientB = MobRegistry.registerEntity("AncientB");
AncientB.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/ancientB.png");
  Entity.setNameTag(this.entity, "Ancient Armored: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  AncientB.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 4,

     attack_range: 1.5,

     attack_rate: 300
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

AncientB.customizeDescription({
getHealth: function(){
  return 400;},
getDrop: function(){ 
  var drop = [
  {id: ItemID.ancientB_helmet, count: 1, data: 0, separate: true, chance: .4}, 
  {id: ItemID.ancientB_chestplate, count: 1, separate: true, data: 0, chance: .2},
  {id: ItemID.ancientB_leggings, count: 1, data: 0, separate: true, chance: .4},
  {id: ItemID.ancientB_boots, count: 1, data: 0, separate: true, chance: .4}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: 4, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1}];
 }
});
IDRegistry.genItemID("talonr");

Item.createItem("talonr", "Red Ancient Talon", {name: "talonr", meta: 0}, {stack: 1});

Item.registerUseFunctionForID(ItemID.talonr, function(coords, item, block){ 
Game.message(Native.Color.DARK_RED + " Ancient Armored has Come");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("AncientB", coords.x + 1, coords.y + .5, coords.z + .5);
});




// file: ancientP.js

var AncientP = MobRegistry.registerEntity("AncientP");
AncientP.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/ancientP.png");
  Entity.setNameTag(this.entity, "Ancient Damager: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  AncientP.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 7,

     attack_range: 1,

     attack_rate: 250
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.2,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

AncientP.customizeDescription({
getHealth: function(){
  return 145;},

 getDrop: function(){
  var drop = [
  {id: ItemID.ancientP_helmet, count: 1, data: 0, separate: true, chance: .4}, 
  {id: ItemID.ancientP_chestplate, count: 1, separate: true, data: 0, chance: .2},
  {id: ItemID.ancientP_leggings, count: 1, data: 0, separate: true, chance: .4},
  {id: ItemID.ancientP_boots, count: 1, data: 0, separate: true, chance: .4}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: 4, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1}];
 }
});

IDRegistry.genItemID("talong");

Item.createItem("talong", "Green Ancient Talon", {name: "talong", meta: 0}, {stack: 1});

Item.registerUseFunctionForID(ItemID.talong, function(coords, item, block){ 
Game.message(Native.Color.DARK_GREEN + " Ancient Damager has Come");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("AncientP", coords.x + 1, coords.y + .5, coords.z + .5);
});




// file: trans.js

﻿Translation.addTranslation("Soul Eater", {ru: "Пожиратель Душ"});
Translation.addTranslation("Soul Eater 1 lvl", {ru: "Пожиратель Душ 1 уровня"});
Translation.addTranslation("Soul Eater 2 lvl", {ru: "Пожиратель Душ 2 уровня"});
Translation.addTranslation("Soul Eater 3 lvl", {ru: "Пожиратель Душ 3 уровня"});
Translation.addTranslation("Great Soul Eater", {ru: "Великий Пожиратель Душ"});
Translation.addTranslation("Soul Pickaxe", {ru: "Кирка Душ"});
Translation.addTranslation("Soul Pickaxe 1 lvl", {ru: "Кирка Душ 1 уровня"});
Translation.addTranslation("Soul Pickaxe 2 lvl", {ru: "Кирка Душ 2 уровня"});
Translation.addTranslation("Soul Pickaxe 3 lvl", {ru: "Кирка Душ 3 уровня"});
Translation.addTranslation("Great Soul Pickaxe", {ru: "Великая Кирка Душ"});

Translation.addTranslation("Simple Wings", {ru: "Простые крылья"});
Translation.addTranslation("Iron Crown", {ru: "Железная Корона"});
Translation.addTranslation("Fairy Wings", {ru: "Крылья Феи"});
Translation.addTranslation("Simple Magickal Crown", {ru: "Простая Волшебная Корона"});

Translation.addTranslation("Gravestone Shard", {ru: "Осколок Надгробия"});
Translation.addTranslation("Blood Iron", {ru: "Кровавое Железо"});
Translation.addTranslation("Cursed Skull", {ru: "Проклятый Череп"});
Translation.addTranslation("Empty Knife", {ru: "Чистый Кинжал"});
Translation.addTranslation("Blood Flash", {ru: "Кровавая Плоть"});
Translation.addTranslation("Blood Bone", {ru: "Кровавая Кость"});
Translation.addTranslation("Blood Scale", {ru: "Кровавая Чешуйка"});
Translation.addTranslation("Idol Blood Pickaxe", {ru: "Идол Кровавой Кирки"});
Translation.addTranslation("Dual Madnes Sword", {ru: "Двойной Меч Безумия"});
Translation.addTranslation("Blood bone Sword", {ru: "Кровавый костяной Меч"});
Translation.addTranslation("Bonesword", {ru: "Костяной меч"});
Translation.addTranslation("Berserker Chestplate", {ru: "Нагрудник Берсеркера"});
Translation.addTranslation("Berserker Skull", {ru: "Череп Берсеркера"});
Translation.addTranslation("Blood Knife", {ru: "Кровавый кинжал"});
Translation.addTranslation("Thunderbolt Knife", {ru: "Кинжал Молний"});

Translation.addTranslation("Magick stone", {ru: "Магический камень"});
Translation.addTranslation("Pixie Dust", {ru: "Пыль Пикси"});
Translation.addTranslation("Oceanium", {ru: "Океаниум"});
Translation.addTranslation("Ocean breath", {ru: "Дыхание Океана"});
Translation.addTranslation("Ocean tear", {ru: "Слеза Океана"});
Translation.addTranslation("Pixie iron", {ru: "Железо Пикси"});
Translation.addTranslation("Pixie pickaxe", {ru: "Кирка Пикси"});
Translation.addTranslation("Pixie shovel", {ru: "Лопата Пикси"});
Translation.addTranslation("Pixie axe", {ru: "Топор Пикси"});
Translation.addTranslation("Pixie hoe", {ru: "Мотыга Пикси"});
Translation.addTranslation("Bulat beam", {ru: "Луч Булата"});
Translation.addTranslation("Shard of Fairy wings", {ru: "Осколок Крыльев Фей"});
Translation.addTranslation("Sirenix books", {ru: "Книга Сиреникса"});

Translation.addTranslation("Wand of Fireball", {ru: "Посох Огненных шаров"});
Translation.addTranslation("Wand of Arrow fury", {ru: "Посох Ярости Стрел"});
Translation.addTranslation("Eye of Ocean", {ru: "Око Океана"});

Translation.addTranslation("Flaming stone", {ru: "Пылающий Камень"});
Translation.addTranslation("Flaming Bar", {ru: "Пылающий Слиток"});
Translation.addTranslation("Flaming Ore", {ru: "Пылающая Руда"});
Translation.addTranslation("Flaming Rod", {ru: "Пылающий Стержень"});
Translation.addTranslation("Flaming Sword", {ru: "Пылающий Меч"});
Translation.addTranslation("Chunk of flaming stone", {ru: "Кусок пылающего камня"});
Translation.addTranslation("Flaming Helmet", {ru: "Пылающий Шлем"});
Translation.addTranslation("Flaming Chestplate", {ru: "Пылающий Нагрудник"});
Translation.addTranslation("Flaming Leggings", {ru: "Пылающие Поножи"});
Translation.addTranslation("Flaming Boots", {ru: "Пылающие ботинки"});

Translation.addTranslation("Soul of Vita", {ru: "Душа Жизни "});
Translation.addTranslation("Enchanted soul", {ru: "Зачарованная Душа"});
Translation.addTranslation("Hard Leather", {ru: "Твердая Кожа"});
Translation.addTranslation("Cristal of enchance", {ru: "Кристалл Зачарования"});
Translation.addTranslation("Enchanted tear", {ru: "Зачарованная слеза"});
Translation.addTranslation("Enchanted feather", {ru: "Зачарованное перо"});
Translation.addTranslation("Enchanted slime", {ru: "Зачарованных слизь"});
Translation.addTranslation("Shelom", {ru: "Шелом"});
Translation.addTranslation("Ushman", {ru: "Юшман"});
Translation.addTranslation("Latnitsa", {ru: "Латница"});
Translation.addTranslation("Ichigi", {ru: "Ичиги"});

Translation.addTranslation("Burning Plate", {ru: "Пылающая Пластина"});
Translation.addTranslation("Burning core", {ru: "Пылающее Ядро"});
Translation.addTranslation("Burning crystal", {ru: "Пылающий Кристалл"});
Translation.addTranslation("Dark Rod", {ru: "Тёмный Стержень"});
Translation.addTranslation("Dark Plate", {ru: "Тёмная Пластина"});
Translation.addTranslation("Generator Core", {ru: "Ядро Генератора"});
Translation.addTranslation("Dark Shard", {ru: "Тёмный Осколок"});
Translation.addTranslation("Dark Ore", {ru: "Тёмная Руда"});

Translation.addTranslation("Blood grass", {ru: "Кровавая трава"});
Translation.addTranslation("Blood stone", {ru: "Кровавый камень"});
Translation.addTranslation("Terrible block", {ru: "Ужасающий блок"});
Translation.addTranslation("Tombstone", {ru: "Надгробие"});
Translation.addTranslation("Blood dirt", {ru: "Кровавая земля"});
Translation.addTranslation("Blood brick", {ru: "Кровавые кирпичи"});
Translation.addTranslation("Pixie brick", {ru: "Кирпичи Пикси"});
Translation.addTranslation("Burning block", {ru: "Пылающий блок"});
Translation.addTranslation("Sky brick balk", {ru: "Балка из небесных кирпичей"});
Translation.addTranslation("Diamond balk", {ru: "Алмазная балка"});
Translation.addTranslation("Gold balk", {ru: "Золотая балка"});
Translation.addTranslation("Iron balk", {ru: "Железная балка"});

Translation.addTranslation("Dimension Key", {ru: "Ключ измерений"});
Translation.addTranslation("Ancient Armored Helmet", {ru: "Древний Бронированный шлем"});
Translation.addTranslation("Ancient Armored Chestplate", {ru: "Древние Бронированные латы"});
Translation.addTranslation("Ancient Armored Leggings", {ru: "Древние Бронированные поножи"});
Translation.addTranslation("Ancient Armored Boots", {ru: "Древние Бронированные сапоги"});
Translation.addTranslation("Ancient Deadly Helmet", {ru: "Древний Смертоносный шлем"});
Translation.addTranslation("Ancient Deadly Chestplate", {ru: "Древний Смертоносный нагрудник"});
Translation.addTranslation("Ancient Deadly Leggings", {ru: "Древние Смертоносные поножи"});
Translation.addTranslation("Ancient Deadly Boots", {ru: "Древние Смертоносные ботинки"});

Translation.addTranslation("Terrifying Helmet", {ru: "Ужасающий шлем"});
Translation.addTranslation("Terrifying Chestplate", {ru: "Ужасающие латы"});
Translation.addTranslation("Terrifying Leggings", {ru: "Ужасающие поножи"});
Translation.addTranslation("Terrifying boots", {ru: "Ужасающие шоссы"});

Translation.addTranslation("Fairy Altar", {ru: "Алтарь Фей"});
Translation.addTranslation("Weak generator", {ru: "Слабый генератор"});
Translation.addTranslation("Hell furnace", {ru: "Адская Печь"});

Translation.addTranslation("Sky shards", {ru: "Небесные осколки"});
Translation.addTranslation("Gravestone shard", {ru: "Осколок гробницы"});

Translation.addTranslation("Red Ancient Talon", {ru: "Красный Древний талон"});
Translation.addTranslation("Green Ancient Talon", {ru: "Зелёный Древний талон"});
Translation.addTranslation("Blood Amulet", {ru: "Кровавый Амулет"});

Translation.addTranslation("Sky brick", {ru: "Небесный кирпич"});
Translation.addTranslation("Sky stone", {ru: "Небесный камень"});




// file: fairy.js

var fairy = MobRegistry.registerEntity("fairy");
 
fairy.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/fairy.png");
  Entity.setNameTag(this.entity, "Fairy: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
  }, 
 
  death: function(attacker) {
 Game.message("The curse of fairies fell on you!");
    Entity.addEffect(Player.get(), 15, 1, 600, false, false);
    Entity.addEffect(Player.get(), 20, 2, 350, false, false);
}, 
 
  created: function() {
      Game.message("You feeling magic power!");
   },
   attackedBy: function() {
      Game.message("Don't touch me!");
   }
});

fairy.customizeDescription({

 getHitbox: function(){
  return {w: 1, h: 2}
 }, 
 
getHealth: function(){
  return 45;},

 getDrop: function() {
      return [{
         id: ItemID.shardwings,
         count: {min: 1, max: 4}
       }]
}
});


    var fairy
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .00005){
 fairy=  Entity.spawnCustom("fairy", pos.x, pos.y + 1, pos.z);
}
}
});




// file: bloodmobs.js

var bloodbon = MobRegistry.registerEntity("bloodbon");
bloodbon.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 21);
  Entity.setSkin(this.entity, "mob/bloodbone.png");
  Entity.setNameTag(this.entity, "Blood Bones: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  bloodbon.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 1,

     attack_range: 1,

     attack_rate: 100
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.2,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodbon.customizeDescription({
getHealth: function(){
  return 7;},
getDrop: function(){
 return [ {id: ItemID.bloodbone, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});


var bloodhunter = MobRegistry.registerEntity("bloodhunter");
bloodhunter.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 23);
  Entity.setSkin(this.entity, "mob/bloodhunter.png");
  Entity.setNameTag(this.entity, "Blood Hunter: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  bloodhunter.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 3,

     attack_range: 1,

     attack_rate: 150
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.3,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodhunter.customizeDescription({
getHealth: function(){
  return 15;},
getDrop: function(){
 return [ {id: ItemID.bloodskale, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});


var bloodpig = MobRegistry.registerEntity("bloodpig");
bloodpig.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 6);
  Entity.setSkin(this.entity, "images/mob/bloodpig.png");
  Entity.setNameTag(this.entity, "It's a Life! : " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
  Entity.addEffect(Player.get(), Native.PotionEffect.poison, 100, 3, true, false);
 }
});
  bloodpig.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 1,

     attack_range: 2,

     attack_rate: 400
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

bloodpig.customizeDescription({
getHealth: function(){
  return 45;},
getDrop: function(){
 return [ {id: ItemID.fleshg, count: {min: 0, max: 	0}, data: 0, separate: true, chance: .6}];
 },
});




// file: fairyaltar.js

IDRegistry.genBlockID("simplefairyaltar");
Block.createBlockWithRotation("simplefairyaltar", [
	{name: "Fairy Altar", texture: [["ocepertop", 0], ["ocepertop", 0], ["oceper", 0], ["oceper", 0], ["oceper", 0], ["oceper", 0]], inCreative: true}
]);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.simplefairyaltar, count: 1, data: 0}, [
		"tct",
		"cbc",
		"xxx"
	], ['x', 49, 0, 'c', ItemID.corpl, 0, 't', ItemID.oceanium, 0, 'b', ItemID.gencor, 0]);
});
var guiFairyAltar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Fairy Altar"}},
		inventory: {standart: true},
		background: {standart: true}
	},

	drawing: [
		{type: "bitmap", x: 600, y: 200, bitmap: "energy_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 597, y: 75, bitmap: "rune_energy_background", scale: GUI_BAR_STANDART_SCALE},
	],


	elements: {
		"energyScale": {type: "scale", x: 600 + GUI_BAR_STANDART_SCALE * 4, y: 200, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 597, y: 75, direction: 1, value: 0.5, bitmap: "rune_energy", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 772, y: 197},
		"slotFuel": {type: "slot", x: 475, y: 197},
		
	}
});

MachineRegistry.registerPrototype(BlockID.simplefairyaltar, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiFairyAltar;
	},
	
	getTransportSlots: function(){
		return {input: ["slotFuel"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var energyStorage = this.getEnergyStorage();
		
		if(this.data.burn > 0){
			if(this.data.energy < energyStorage){
				this.data.energy = Math.min(this.data.energy + 2000, energyStorage);
				this.data.burn--;
			}
		}
		else {
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 2048, 0);
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
    var TRANSFER = 2048;
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotSource"), this.data.energy, TRANSFER, 0);
	},

	getFuel: function(slotName){

		var fuelSlot = this.container.getSlot(slotName);

		if (fuelSlot.id > 0){

			var burn = FURNACE_FUEL_MAP[fuelSlot.id];

			if (burn){

				fuelSlot.count--;

				this.container.validateSlot(slotName);

				return burn;

			}

			if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){

				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);

				fuelSlot.id = empty.id;

				fuelSlot.data = empty.data;

				return 20000;

			}

		}

		return 0;

	},
	
	isGenerator: function() {
		return true;
	},
	

	getEnergyStorage: function(){
		return 2000000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 2048;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}
});




// file: dungeon.js

IDRegistry.genItemID("sky_shard");
Item.createItem("sky_shard", "Sky shards", {name: "sky_shard", meta: 0});

IDRegistry.genBlockID("sky_stone");
Block.createBlock("sky_stone", [{name: "Sky stone", texture: [["sky_stone", 0]], inCreative: true}
] );

ToolAPI.registerBlockMaterial(BlockID.sky_stone, "stone", 2);
Block.registerDropFunction("sky_stone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[ItemID.sky_shard, 2, 0]];
			return [];
	}, 2);

IDRegistry.genBlockID("sky_brick");
Block.createBlock("sky_brick", [
{name: "Sky brick", texture: [["sky_brick", 0]], inCreative: true}
] );
ToolAPI.registerBlockMaterial(BlockID.sky_brick, "stone", 2);
Block.registerDropFunction("sky_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.sky_brick, 1, 0]];
			return [];
	}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 if (Math.random() < .02){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 200, 252);
 
 GenerationUtils.lockInBlock(BlockID.sky_brick, 0, 0, false);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 1, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 1, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 1, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 1, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 1, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 1, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 1, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 4, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 2, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 2, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 2, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 2, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 2, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 2, coords.z - 2);

GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 3, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 3, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 3, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y + 3, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 3, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y + 3, coords.z - 2);


  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 3);  
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 3);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 3, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z + 3);
  GenerationUtils.setLockedBlock(coords.x + 3, coords.y, coords.z - 2);

 GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x +2, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 2);
GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y + 4, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y + 4, coords.z - 1);
  
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x +2, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z - 2);
  GenerationUtils.setLockedBlock(coords.x - 2, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 2, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 2);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 2);
 
GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z - 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x - 1, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x + 1, coords.y, coords.z);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z + 1);
  GenerationUtils.setLockedBlock(coords.x, coords.y, coords.z - 1);
  World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.sky_stone);
  World.setBlock(coords.x, coords.y + 3, coords.z, BlockID.skyfence);
  World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.skyfence);

 World.setBlock(coords.x + 3, coords.y + 1, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 1, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 1, coords.z + 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 2, coords.z + 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z - 1, BlockID.ironfence);
 World.setBlock(coords.x + 3, coords.y + 3, coords.z + 1, BlockID.ironfence);

World.setBlock(coords.x - 3, coords.y + 2, coords.z + 1, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 2, coords.z - 1, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 1, coords.z, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 3, coords.z, BlockID.sky_brick, 0);
World.setBlock(coords.x - 3, coords.y + 2, coords.z, BlockID.sky_brick, 0);

World.setBlock(coords.x + 1, coords.y + 1, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 1, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 2, coords.z + 3, BlockID.diamondfence, 0);
World.setBlock(coords.x - 1, coords.y + 2, coords.z + 3, BlockID.diamondfence, 0);
World.setBlock(coords.x + 1, coords.y + 3, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 3, coords.z + 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 1, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 1, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y + 2, coords.z - 3, BlockID.diamondfence, 0);
World.setBlock(coords.x - 1, coords.y + 2, coords.z - 3, BlockID.diamondfence, 0);
World.setBlock(coords.x + 1, coords.y + 3, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x - 1, coords.y + 3, coords.z - 3, BlockID.goldfence, 0);
World.setBlock(coords.x + 1, coords.y - 1, coords.z, 80, 0);
World.setBlock(coords.x - 1, coords.y - 1, coords.z, 80, 0);
World.setBlock(coords.x, coords.y - 2, coords.z, 80, 0);
World.setBlock(coords.x, coords.y - 1, coords.z - 1, 80, 0);
World.setBlock(coords.x, coords.y - 1, coords.z + 1, 80, 0);
}
});




// file: drop.js


IDRegistry.genItemID("soul_vita");
Item.createItem("soul_vita", "Soul of Vita", {name: "soul"}, {stack: 1});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 10 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 11 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 12 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 13 && Math.random() < 1/20){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.soul_vita, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 50){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocean, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 49 && Math.random() < 1/3){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.otear, random(1, 1, 1, 1, 1, 1, 2, 2, 3), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 43 && Math.random() < 1/30){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.burncr, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 45 && Math.random() < 1/4){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocharm, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 37 && Math.random() < 1/15){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.ocharm, random(1, 1), 0);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if (Entity.getType(entity) == 42 && Math.random() < 1/30){
  var coords = Entity.getPosition(entity);
  World.drop(coords.x, coords.y, coords.z, ItemID.burncr, random(1, 1), 0);
 }
});




// file: hell.js

IDRegistry.genBlockID("hellstone");
Block.createBlock("hellstone", [
{name: "Flaming stone", texture: [["hellstone", 0]], inCreative: true}
] );

ToolAPI.registerBlockMaterial(BlockID.hellstone, "stone", 3);
Block.registerDropFunction("hellstone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 3) return [[ItemID.hellore, 2, 0]];
			return [];
	}, 3);
	
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
	if (Math.random() < 2){
	for (var k = 0; k < 7; k++){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, -30, 250);	GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
			id: BlockID.hellstone,
			data: 0,
			size: 2,
			ratio: 3,
			checkerTile: 87,
			checkerMode: false
		});
	}	
}
});

IDRegistry.genItemID("hellstonebar");
Item.createItem("hellstonebar", "Flaming Bar", {name: "hellbar", meta: 0}, {stack: 64});

IDRegistry.genItemID("hellore");
Item.createItem("hellore", "Flaming Ore", {name: "hellore", meta: 0}, {stack: 64});


IDRegistry.genItemID("moltenstick");
Item.createItem("moltenstick", "Flaming Rod", {name: "moltenstick", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.moltenstick, count: 1, data: 0},
 ["   ",
 " a ",
 " a "], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellsword");
Item.createItem("hellsword", "Flaming Sword", {name: "hellsword", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.hellsword, count: 1, data: 0},
 [" a",
 " a",
 " x"], ["a", ItemID.hellstonebar, 0, "x", ItemID.moltenstick, 0]);

IDRegistry.genItemID("hellbar");
Item.createItem("hellbar", "Chunk of flaming stone", {name: "hellstonebar", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.hellbar, count: 1, data: 0},
 [" a ",
 "aaa",
 " a "], ["a", ItemID.hellore, 0]);
 
IDRegistry.genItemID("hellhelmet");
Item.createArmorItem("hellhelmet", "Flaming Helmet", {name: "hellhelmet"}, {type: "helmet", armor: 3, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellhelmet, count: 1, data: 0},
 ["   ",
 "aaa",
 "a a"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellchestplate");
Item.createArmorItem("hellchestplate", "Flaming Chestplate", {name: "hellchestplate"}, {type: "chestplate", armor: 5, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellchestplate, count: 1, data: 0},
 ["a a",
 "aaa",
 "aaa"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellleggings");
Item.createArmorItem("hellleggings", "Flaming Leggings", {name: "hellleggings"}, {type: "leggings", armor: 4, durability: 1256, texture: "armor/hell_2.png"});
Recipes.addShaped({id: ItemID.hellleggings, count: 1, data: 0},
 ["aaa",
 "a a",
 "a a"], ["a", ItemID.hellstonebar, 0]);

IDRegistry.genItemID("hellboots");
Item.createArmorItem("hellboots", "Flaming Boots", {name: "hellboots"}, {type: "boots", armor: 3, durability: 1256, texture: "armor/hell_1.png"});
Recipes.addShaped({id: ItemID.hellboots, count: 1, data: 0},
 ["   ",
 "a a",
 "a a"], ["a", ItemID.hellstonebar, 0]);

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.hellhelmet && chest.id == ItemID.hellchestplate && legs.id == ItemID.hellleggings && boots.id == ItemID.hellboots){
    Entity.addEffect(Player.get(), 12, 25, 3, false, false);
   }
});


ToolAPI.registerSword(ItemID.hellsword, {level: 0, durability: 1564, damage: 8},
 {
	damage: 0,
	 onAttack: function(carriedItem, victim){
		Entity.setFire(victim, 1000) }
});




// file: hellfurn.js

IDRegistry.genBlockID("hell_furnace");

Block.createBlockWithRotation("hell_furnace", [

	{name: "Hell furnace", texture: [["fur_bottom", 0], ["fur_bottom", 0], ["fur_side", 0], ["fure_side", 0], ["fur_side", 0], ["fur_side", 0]], inCreative: true}

]);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.hell_furnace, count: 1, data: 0}, [
		"xcx",
		"cac",
		"xcx"
	], ['x', 369, 0, 'a', ItemID.burncor, 0, 'c', ItemID.burnplate, 0]);

});
var guiHelFer = new UI.StandartWindow({

	standart: {

		header: {text: {text: "Hell furnace"}},

		inventory: {standart: true},

		background: {standart: true}

	},


	drawing: [

		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE},

		{type: "bitmap", x: 530, y: 144, bitmap: "energy_bar_background", scale: GUI_BAR_STANDART_SCALE},

		//{type: "bitmap", x: 530, y: 144, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE}

	],


	elements: {

		"progressScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},

		"energyScale": {type: "scale", x: 530 + GUI_BAR_STANDART_SCALE * 4, y: 144, direction: 0, value: 1, bitmap: "energy_small_scale", scale: GUI_BAR_STANDART_SCALE},

		"slotSource": {type: "slot", x: 441, y: 202},

       "slotEnergy": {type: "slot", x: 1500, y: 1500},

		"slotResult": {type: "slot", x: 441, y: 82}

	}

});



Callback.addCallback("PreLoaded", function(){

	MachineRecipeRegistry.registerRecipesFor("hell_furnace", {

		"ItemID.hellbar": {id: ItemID.hellstonebar, count: 1, data: 0},

	}, true);

});


MachineRegistry.registerPrototype(BlockID.hell_furnace, {

	defaultValues: {

		progress: 0

	},


	getGuiScreen: function(){

		return guiHelFer;

	},


	tick: function(){

		var sourceSlot = this.container.getSlot("slotSource");

		var result = MachineRecipeRegistry.getRecipeResult("hell_furnace", sourceSlot.id);

		if (result && (sourceSlot.count >= result.ingredientCount || !result.ingredientCount)){

			if (this.data.energy > 2){

				this.data.energy -= 3;

				this.data.progress++;

			}

			if (this.data.progress >= 400){

				var resultSlot = this.container.getSlot("slotResult");

				if (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= Item.getMaxStack(result.id) - result.count || resultSlot.id == 0){

					sourceSlot.count -= result.ingredientCount || 1;

					resultSlot.id = result.id;

					resultSlot.data = result.data;

					resultSlot.count += result.count;

					this.container.validateAll();

					this.data.progress = 0;

				}

			}

		}

		else {

			this.data.progress = 0;

		}

		var energyStorage = this.getEnergyStorage();

		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(32, energyStorage - this.data.energy), 0);

		this.container.setScale("progressScale", this.data.progress / 400);

		this.container.setScale("energyScale", this.data.energy / energyStorage);

	},


	getEnergyStorage: function(){

		return 2000;

	},


	energyTick: MachineRegistry.basicEnergyReceiveFunc

});





// file: gener.js

IDRegistry.genBlockID("gener");
Block.createBlockWithRotation("gener", [
	{name: "Weak generator", texture: [["gener_bottom", 1], ["gener_bottom", 1], ["gener_side", 1], ["gener_front", 1], ["gener_side", 1], ["gener_side", 1]], inCreative: true}
]);

var guiFairyAltar = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Weak Generator"}},
		inventory: {standart: true},
		background: {standart: true}
	},

	drawing: [
		{type: "bitmap", x: 600, y: 200, bitmap: "energy_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 597, y: 75, bitmap: "rune_energy_background", scale: GUI_BAR_STANDART_SCALE},
	],


	elements: {
		"energyScale": {type: "scale", x: 600 + GUI_BAR_STANDART_SCALE * 4, y: 200, direction: 0, value: 0.5, bitmap: "energy_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 597, y: 75, direction: 1, value: 0.5, bitmap: "rune_energy", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 772, y: 197},
		"slotFuel": {type: "slot", x: 475, y: 197},
		
	}
});

MachineRegistry.registerPrototype(BlockID.gener, {
	defaultValues: {
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiFairyAltar;
	},
	
	getTransportSlots: function(){
		return {input: ["slotFuel"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var energyStorage = this.getEnergyStorage();
		
		if(this.data.burn > 0){
			if(this.data.energy < energyStorage){
				this.data.energy = Math.min(this.data.energy + 10, energyStorage);
				this.data.burn--;
			}
		}
		else {
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 32, 0);
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("energyScale", this.data.energy / energyStorage);
    var TRANSFER = 32;
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotSource"), this.data.energy, TRANSFER, 0);
	},

	getFuel: function(slotName){

		var fuelSlot = this.container.getSlot(slotName);

		if (fuelSlot.id > 0){

			var burn = FURNACE_FUEL_MAP[fuelSlot.id];

			if (burn){

				fuelSlot.count--;

				this.container.validateSlot(slotName);

				return burn;

			}

			if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){

				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);

				fuelSlot.id = empty.id;

				fuelSlot.data = empty.data;

				return 20000;

			}

		}

		return 0;

	},
	
	isGenerator: function() {
		return true;
	},
	

	getEnergyStorage: function(){
		return 20000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 32;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	}
});




// file: recips.js

Recipes.addShaped({id: ItemID.goldcrown, count: 1, data: 0},
 [" a ",
 "aba",
 "a a"], ["a", ItemID.pixi_iron, 0, "b", ItemID.ironcrown, 0]);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.gener, count: 1, data: 0}, [
		"xcx",
		"cbc",
		"xcx"
	], ['x', 265, 0, 'c', ItemID.darkshard, 0, 'b', 331, 0]);
});

Recipes.addShaped({id: ItemID.fireballwand, count: 1, data: 0},
 [" cb",
 " ac",
 "a  "], ["a", 369, 0, "c", ItemID.burnplate, 0, "b", ItemID.burncor, 0]);

Recipes.addShaped({id: ItemID.berserker_chestplate, count: 1, data: 0},
 ["c c",
 "bcb",
 "cbc"], ["c", ItemID.bloodskale, 0, "b", ItemID.bloodbone, 0]);

Recipes.addShaped({id: ItemID.berserker_helmet, count: 1, data: 0},
 ["cbc",
 " c ",
 "cbc"], ["c", ItemID.bloodskale, 0, "b", ItemID.bloodbone, 0]);

Recipes.addShaped({id: ItemID.clearknife, count: 4, data: 0},
 ["  b",
 "cb ",
 "cc "], ["c", 265, 0, "b", 352, 0]);

Recipes.addShaped({id: ItemID.bloodknife, count: 2, data: 0},
 ["  c",
 " b ",
 "a  "], ["a", ItemID.bloodbone, 0, "c", ItemID.bloodskale, 0, "b", ItemID.clearknife, 0]);

Recipes.addShaped({id: ItemID.boltknife, count: 2, data: 0},
 [" cc",
 "cbc",
 "ac "], ["a", ItemID.oceanium, 0, "c", 351, 4, "b", ItemID.clearknife, 0]);

Recipes.addShaped({id: ItemID.blo0, count: 1, data: 0}, [
"   ",
" b",
"i  "
], ["i", ItemID.soul_vita, 0, "b", ItemID.bulatsword, -1] );

Recipes.addShaped({id: ItemID.blo1, count: 1, data: 0}, [
"ixi",
"cbc",
"ixi"
], ["b", ItemID.blo0, -1, "c", ItemID.soul_vita, 0, "i", 265, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blo2, count: 1, data: 0}, [
"iii",
"xbx",
"xxx"
], ["b", ItemID.blo1, -1, "i", ItemID.soul_vita, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blo3, count: 1, data: 0}, [
"ccc",
"xbx",
"cic"
], ["b", ItemID.blo2, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.blo4, count: 1, data: 0}, [
"xix",
"cbc",
"xix"
], ["b", ItemID.blo3, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.pixi_iron, count: 2, data: 0}, [
"i i",
"xix",
"i i"
], ["i", 265, 0, "x", ItemID.pixi, 0] );

Recipes.addShaped({id: ItemID.oceanium, count: 2, data: 0}, [
"xxx",
"ixi",
"xxx"
], ["i", 265, 0, "x", ItemID.otear, 0] );

Recipes.addShaped({id: ItemID.bulatsword, count: 2, data: 0}, [
" x ",
" x ",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_pickaxe, count: 2, data: 0}, [
"   ",
"xxx",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_axe, count: 2, data: 0}, [
"   ",
" xx",
" ix"
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_shovel, count: 2, data: 0}, [
"   ",
" x ",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.pixi_hoe, count: 2, data: 0}, [
"   ",
" xx",
" i "
], ["i", 280, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.simplewings, count: 1, data: 0}, [
"x x",
"sts",
"x x"
], ["t", ItemID.sky_shard, 0, "x", ItemID.pixi, 0, "s", 334, 0] );

Recipes.addShaped({id: ItemID.ecristal, count: 1, data: 0}, [
" c ",
"cbc",
" c "
], ["b", 264, 0, "c", ItemID.pixi, 0] );

Recipes.addShaped({id: ItemID.etear, count: 1, data: 0}, [
"   ",
"cb ",
"   "
], ["b", 370, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.efeather, count: 1, data: 0}, [
"   ",
"cb",
"   "
], ["b", 288, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.eslime, count: 1, data: 0}, [
"   ",
"cb ",
"   "
], ["b", 341, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.enchanted_soul, count: 1, data: 0}, [
"   ",
"cbc",
" c "
], ["b", ItemID.soul_vita, 0, "c", ItemID.ecristal, 0] );

Recipes.addShaped({id: ItemID.hleather, count: 1, data: 0}, [
"iii",
"xix",
"iii"
], ["i", 334, 0, "x", 265, 0] );

Recipes.addShaped({id: ItemID.ushman_chestplate, count: 1, data: 0}, [
"i i",
"ibi",
"xix"
], ["b", ItemID.enchanted_soul, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.shelom_helmet, count: 1, data: 0}, [
"   ",
"xbx",
"i i"
], ["b", ItemID.etear, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.ichigi_boots, count: 1, data: 0}, [
"   ",
"xbx",
"i i"
], ["b", ItemID.efeather, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.latnitsa_leggings, count: 1, data: 0}, [
"xbx",
"i i",
"i i"
], ["b", ItemID.eslime, 0, "i", ItemID.hleather, 0, "x", ItemID.pixi_iron, 0] );

Recipes.addShaped({id: ItemID.burnplate, count: 1, data: 0}, [
"cbc",
"bcb",
"cbc"
], ["b", ItemID.hellore, 0, "c", 265, 0] );

Recipes.addShaped({id: ItemID.burncor, count: 1, data: 0}, [
"cbc",
"bxb",
"cbc"
], ["b", ItemID.burnplate, 0, "c", 266, 0, "x", ItemID.burncr, 0] );

Recipes.addShaped({id: BlockID.burnblock, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.hellstonebar, 0]);

Recipes.addShaped({id: ItemID.hellstonebar, count: 8, data: 0}, [
 "   ",
 " c ",
 "   "
], ["c", BlockID.burnblock, 0]);

Recipes.addShaped({id: BlockID.ironfence, count: 2, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 265, 0]);

Recipes.addShaped({id: BlockID.diamondfence, count: 3, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 264, 0]);

Recipes.addShaped({id: BlockID.goldfence, count: 2, data: 0}, [
 " c ",
 " c ",
 " c "
], ["c", 266, 0]);

Recipes.addShaped({id: BlockID.portalblock, count: 3, data: 0}, [
 "cxc",
 "xbx",
 "cxc"
], ["b", ItemID.skull, 0, "c", ItemID.bloodbone, 0, "x", ItemID.bloodskale, 0]);

Recipes.addShaped({id: ItemID.skull, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.darkshard, 0, "c", 367, 0, "t", 352, 0]);

Recipes.addShaped({id: ItemID.normalwings, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.simplewings, -1, "c", ItemID.shardwings, 0, "t", ItemID.pixi, 0]);

Recipes.addShaped({id: BlockID.pixi_brick, count: 8, data: 0}, [
 "ccc",
 "cbc",
 "ccc"
], ["b", ItemID.pixi, 0, "c", 45, 0]);

Recipes.addShaped({id: ItemID.blop0, count: 1, data: 0}, [
"   ",
" b",
"i  "
], ["i", ItemID.soul_vita, 0, "b", ItemID.pixi_pickaxe, -1] );

Recipes.addShaped({id: ItemID.blop1, count: 1, data: 0}, [
"ixi",
"cbc",
"ixi"
], ["b", ItemID.blop0, -1, "c", ItemID.soul_vita, 0, "i", 265, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blop2, count: 1, data: 0}, [
"iii",
"xbx",
"xxx"
], ["b", ItemID.blop1, -1, "i", ItemID.soul_vita, 0, "x", 266, 0] );

Recipes.addShaped({id: ItemID.blop3, count: 1, data: 0}, [
"ccc",
"xbx",
"cic"
], ["b", ItemID.blop2, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.blop4, count: 1, data: 0}, [
"xix",
"cbc",
"xix"
], ["b", ItemID.blop3, -1, "i", ItemID.enchanted_soul, 0, "x", 264, 0, "c", 266, 0] );

Recipes.addShaped({id: ItemID.siren_bok, count: 1, data: 0}, [
"xix",
"ibi",
"xix"
], ["b", 340, 0, "i", ItemID.pixi, 0, "x", ItemID.otear, 0] );

Recipes.addShaped({id: ItemID.key, count: 1, data: 0}, [
" ib",
"ici",
"ci "
], ["i", ItemID.darkshard, 0, "b", ItemID.skull, 0, "c", ItemID.drod, 0] );

Recipes.addShaped({id: ItemID.terribl_helmet, count: 1, data: 0}, [
"bib",
"i i",
"   "
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_chestplate, count: 1, data: 0}, [
"b b",
"ibi",
"bib"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_leggings, count: 1, data: 0}, [
"ibi",
"b b",
"i i"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.terribl_boots, count: 1, data: 0}, [
"   ",
"i i",
"b b"
], ["i", ItemID.graveshard, 0, "b", ItemID.bloodiron, 0] );

Recipes.addShaped({id: ItemID.drod, count: 1, data: 0}, [
"ibi",
" b ",
"ibi"
], ["i", 49, 0, "b", ItemID.darkshard, 0] );




// file: minion.js

function random(min, max){
 return Math.floor(Math.random()*(max - min) + min);
}

var AdvancedAI = {
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
    if (World.getThreadTime()%this.shoot_speed == 0 && this.data.timer){
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

 Teleporting: new EntityAIClass({
  getDefaultPriority: function(){
   return -1;
  },

  execute: function(){
   if (World.getThreadTime()%this.params.teleport_delay==0){
    var player = Player.getPosition();
    var distance = Entity.getDistanceToCoords(parseInt(this.entity), player);
    if (distance <= this.params.dist_for_teleport){
     var potentialCoords = {x: player.x + random(-(distance/2), distance/2), y: player.y + 1, z: player.z + random(-(distance/2), distance/2)};
     var blockID = World.getBlockID(potentialCoords.x, potentialCoords.y, potentialCoords.z);
     if (GenerationUtils.isTransparentBlock(blockID)) {Entity.setPosition(this.entity, potentialCoords); 
        Game.message("Teleported to " + Entity.getDistanceBetweenCoords(player, potentialCoords) + " blocks at player");
    }
    }
   }
  },

  params: {
   teleport_delay: 30,
   
   dist_for_teleport: 50
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
    coords = {x: coords.x + random(-3, 3), y: coords.y + random(-3, 3), z: coords.z + random(-3, 3)};
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
    var target = findTarget(coords.x, coords.y, coords.z, this.params.feelingModifier);
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

   feelingModifier: 10
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
};

var Bloodmag = MobRegistry.registerEntity("Bloodmag");
 
   Bloodmag.customizeAI({
 getAITypes: function(){
  return {
"summonhunter": {
  type: AdvancedAI.Summoning,
    entity: "bloodhunter",
    spawn_area: 2,
    summon_delay: 100
 },
   "summonbone": {
    type: AdvancedAI.Summoning,
    entity: "bloodbon",
    spawn_area: 2,
    summon_delay: 100
    },
    
  "attack_s": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 2,

     attack_range: 10,

     attack_rate: 200
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["attack_s"]
    },

 phase_watcher: {
     type: AdvancedAI.PhaseWatcher,
     phases: [
  
      {ai: ["summonbone, summonhunter"], priority: 5, other_priority: 0, time: 700}
   ]
  }
 };
}
});

Bloodmag.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/bloodmag.png");
 }
});

Bloodmag.customizeDescription({
getHealth: function(){
  return 450;},

 getDrop: function(){
  var drop = [
  {id: ItemID.bloodsword, count: 1, data: 0, separate: true, chance: 1},
  {id: ItemID.bloodknife, count: 32, data: 0, separate: true, chance: 1},
  {id: ItemID.bonesword, count: 1, data: 0, separate: true, chance: 1},
  {id: ItemID.bloodpickaxe, count: 1, data: 0, separate: true, chance: 1}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: ItemID.bloodskale, count: {min: 1, max: 7}, data: 0, separate: true, chance: 1}];
 },

 getHitbox: function(){
  return {w: 1, h: 2}
 }
});

IDRegistry.genItemID("amulet_o");
Item.createItem("amulet_o", "Blood Amulet", {name: "amulet_blood", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.amulet_o, count: 1, data: 0}, [
 "ctc",
 "tbt",
 "ctc"
], ["b", ItemID.skull, 0, "c", 49, 0, "t", ItemID.darkshard, 0]);

Item.registerUseFunctionForID(ItemID.amulet_o, function(coords, item, block){ 
Game.message(Native.Color.DARK_RED + "It belongs to me!");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("Bloodmag", coords.x + 1, coords.y + .5, coords.z + .5);
});





// file: OrdenW.js

var OrdenW = MobRegistry.registerEntity("OrdenW");
OrdenW.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/knight.png");
  Entity.setNameTag(this.entity, "Cursed Assasin: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }, 
  created: function() {
      Game.message("You do not go away!");
   }
});
  OrdenW.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 8,

     attack_range: 1,

     attack_rate: 400
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.15,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

OrdenW.customizeDescription({
getHealth: function(){
  return 75;},
getDrop: function(){
 var drop = [
  {id: ItemID.arrowrod, count: 1, data: 0, separate: true, chance: 0.4},
  {id: ItemID.skull, count: 1, data: 0, separate: true, chance: 0.7},
  {id: ItemID.talonb, count: 1, data: 0, separate: true, chance: 0.7},
  {id: ItemID.talonr, count: 1, data: 0, separate: true, chance: 0.7}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: ItemID.clearknife, count: {min: 4, max: 18}, data: 0, separate: true, chance: 1}];
 },
});

    var knight
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .00005){
 knight=  Entity.spawnCustom("OrdenW", pos.x, pos.y + 1, pos.z);
}
}
});




