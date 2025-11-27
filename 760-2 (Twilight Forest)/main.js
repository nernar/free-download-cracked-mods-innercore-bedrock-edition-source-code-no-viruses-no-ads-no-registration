/*
BUILD INFO:
  dir: core/dev
  target: main.js
  files: 29
*/



// file: IMPORT LIB.js

alert("The Twilight Forest Test Mod By XD GAMING \n Youtube XD GAMING");
IMPORT("ToolLib");
IMPORT("PortalUtils");
IMPORT("TileRender");
IMPORT("BaseBlocks");
//ModAPI.addAPICallback("AchievementsAPI", function (api) {
var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.1,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});











// file: Mod API/FieryTwAPI.js

const MOD_NAME = " Twilight Forest"
let _inventory_open = false
// API
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fuctions
Callback.addCallback('NativeGuiChanged', function(screenName) {
  if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
    _inventory_open = true;
  else
    _inventory_open = false;
});

const setinfo = {
  setNameMod: function(id) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + MOD_NAME;
        return name;
      })
    });
  },
  addComment: function(id, info) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Native.Color.AQUA + Translation.translate(info);
        return name;
      })
    });
  },
  setDropIngot: function(id,number,MinExtra,MaxExtra){
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" +Native.Color.GREEN +Translation.translate("Số Lượng Rơi:") + ' ' + number + "\n§9" + Native.Color.AQUA + Translation.translate("Thả thêm ngẫu nhiên:")  + ' ' +MinExtra + "-" + MaxExtra;
        return name;
      })
    });
  },
  setConsumes: function(id, number) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Native.Color.RED + Translation.translate("Tiêu thụ cho sự nóng chảy") + ' ' + number + Translation.translate("uses")
        return name;
      })
    });
  }
}
//core
let RegistryOre = {
  Ores: {},
  pick: {},
  /*
  params is blockId dropItem hasXP
  example
  RegistryOre.RegistryOreMelter(BlockID.randomOre,{
    id: BlockID.randomOre,
    out: ItemID.cooky,
    xp:{
      hasXp: true,
      minOut: 1,
      maxOut: 5
    }
  })
  */
  RegistryOreMelter: function(id, params) {
    this.Ores[id] = params
  },
  getAllOreMelter: function() {
    return this.Ores
  },
  getOreMeltee: function(id) {
    return this.Ores[id]
  },
  isOreMelter: function(id) {
    let oreMelter = this.getAllOreMelter()
    for (let block in oreMelter) {
      if (block == id) return true
    }
    return false
  },
  RegistryPickMelter: function(id){
    this.pick[id] = id
  },
  getAllPickMelter: function(){
    return this.pick
  },
  isPickMelter: function(id){
    let melter = this.getAllOreMelter();
    for(pick in melter){
      if(pick == id) return true
    }
    return false
  }
}

RegistryOre.RegistryOreMelter(14, {
  id: 14,
  out: 266,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})

RegistryOre.RegistryOreMelter(15, {
  id: 15,
  out: 265,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})


RegistryOre.RegistryOreMelter(16, {
  id: 16,
  out: 253,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})

RegistryOre.RegistryOreMelter(56, {
  id: 56,
  out: 264,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})











// file: Mod API/buttonAPI.js


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
	button_skill_resistance: false,
	button_fly: false,
	
}

var buttonContent = {
	button_skill_resistance: {
			y: 1500,
			type: "button",
			bitmap: "skill_resistance_off",
			bitmap2: "skill_resistance_on",
			scale: 20,
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
		scale: 20
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




// file: Mod API/Group.js



Item.addCreativeGroup("Key Boss", Translation.translate("Key Boss"), [
	ItemID.keyNaga,
	 ItemID.keyHydra,
	 ItemID.keyLich,
	 ItemID.keyUghast,
	 ItemID.keyMinoshroom,
	ItemID.keySnowQueen,
	 
]);

Item.addCreativeGroup("Item", Translation.translate("Item"), [
	
	ItemID.fieryblood,
	
	ItemID.fint,
	
	ItemID.steeleaf,
	ItemID.ironwood,
	
]);


Item.addCreativeGroup("Tools", Translation.translate("Tools"), [
	ItemID.v1,
	ItemID.v2,
	ItemID.v3,
	ItemID.v4,
	ItemID.pick,
    ItemID.minotauraxe,
]);


Item.addCreativeGroup("Trophy", Translation.translate("Trophy"), [
	ItemID.ughastTrophy,
	ItemID.lichTrophy,
	ItemID.nagaTrophy,
	ItemID.hydraTrophy,
	
]);

Item.addCreativeGroup("Helmet", Translation.translate("Helmet"), [
     
	ItemID.armor1,
	ItemID.lol,
	 ItemID.st1,
	ItemID.fieryH,
	
]);

Item.addCreativeGroup("Chestplate", Translation.translate("Chestplate "), [
	
	ItemID.armor2,
	ItemID.loz,
	ItemID.st2,
	ItemID.fieryC,
	
]);

Item.addCreativeGroup("Leggings", Translation.translate("leggings"), [
	
	ItemID.armor3,
	ItemID.st3,
	ItemID.fieryL,
	
]);

Item.addCreativeGroup("Boots", Translation.translate("Boots"), [
	
	ItemID.armor4,
	ItemID.st4,
	ItemID.fieryB,
	
]);






Item.addCreativeGroup("Log", Translation.translate("Log"), [
	BlockID.twDarkLog,
	 BlockID.twMangroveLog,
	BlockID.twCanopyLog,
	 BlockID.twTwilightOakLog,
	BlockID.twMiningLog,
	 BlockID.twSortingLog,
	BlockID.twTimeLog,
	 BlockID.twTransformationLog,
]);
Item.addCreativeGroup("Plank", Translation.translate("Plank"), [
	BlockID.tw_planks_dark_wood,
	 BlockID.tw_planks_mangrove,
	BlockID.tw_planks_canopy,
	 BlockID.tw_planks_twilight_oak,
	BlockID.tw_planks_mine,
	 BlockID.tw_planks_sort,
	BlockID.tw_planks_time,
	 BlockID.tw_planks_trans,
]);







// file: Core/Item/Item Mod.js


IDRegistry.genItemID("steeleaf");
Item.createItem("steeleaf", " steeleaf", {name: "steeleaf", meta: 0}, {stack: 64})
//4
IDRegistry.genItemID("ironwood");
Item.createItem("ironwood", "iron wood ", {name: "tao", meta: 0}, {stack: 64})

IDRegistry.genItemID("fieryblood");
Item.createItem("fieryblood", "fiery blood", {name: "fiery", meta: 0}, {stack: 64})

IDRegistry.genItemID("fint");
Item.createItem("fint", "fiery ingot ", {name: "fiery_ingot", meta: 0}, {stack: 64})

//4.5

	 IDRegistry.genItemID("twpo");
Item.createItem("twpo", "over world and twilight forest", {name: "over_world", meta: 0}, {stack: 1})
	Recipes.addShaped({id: ItemID.twpo, count: 2, data: 0}, [
		"ooo",
		"aaa",
		"aaa"
	], ['o', ItemID.steeleaf, 0,'a', 3, 0]);
	




// file: Core/Item/Key Boss.js

IDRegistry.genItemID("keyNaga");
Item.createItem("keyNaga", "Key Naga Boss", {name: "key_boss", meta: 0}, {stack: 1})

	 IDRegistry.genItemID("keyHydra");
Item.createItem("keyHydra", "Key Hydra Boss", {name: "key_boss", meta: 0}, {stack: 1})

	 IDRegistry.genItemID("keyLich");
Item.createItem("keyLich", "Key Lich Boss", {name: "key_boss", meta: 0}, {stack: 1})

	 IDRegistry.genItemID("keyMinoshroom");
Item.createItem("keyMinoshroom", "Key Minoshroom Boss", {name: "key_boss", meta: 0}, {stack: 1})

	 IDRegistry.genItemID("keyUghast");
Item.createItem("keyUghast", "Key Ughast Boss", {name: "key_boss", meta: 0}, {stack: 1})

IDRegistry.genItemID("keySnowQueen");
Item.createItem("keySnowQueen", "Key Snow Queen Boss", {name: "key_boss", meta: 0}, {stack: 1})



Item.setGlint("keyNaga", true);
Item.setGlint("keyHydra", true);
Item.setGlint("keyLich", true);
Item.setGlint("keyMinoshroom", true);
Item.setGlint("keyUghast", true);
Item.setGlint("keySnowQueen", true);

	




// file: Core/Armor/Tw Armor.js


IDRegistry.genItemID("st1");
IDRegistry.genItemID("st2");
IDRegistry.genItemID("st3");
IDRegistry.genItemID("st4");

Item.createArmorItem("st1", " steeleaf Helmet", {name: "sh1"}, {type: "helmet", armor: 3, durability: 1100, texture: "armor/sk1_1.png"});
Item.createArmorItem("st2", " steeleaf Chestplate", {name: "sh2"}, {type: "chestplate", armor: 4, durability: 1100, texture: "armor/sk1_1.png"});
Item.createArmorItem("st3", " steeleaf Leggings", {name: "sh3"}, {type: "leggings", armor: 4, durability: 1100, texture: "armor/sk2_2.png"});
Item.createArmorItem("st4", " steeleaf Boots", {name: "sh4"}, {type: "boots", armor: 3, durability: 1100, texture: "armor/sk1_1.png"});



Recipes.addShaped({id: ItemID.st1, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st2, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st3, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st4, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);



IDRegistry.genItemID("lol");
IDRegistry.genItemID("loz");

Item.createArmorItem("lol", " fantom Helmet", {name: "fantom1"}, {type: "helmet", armor: 6, durability: 1100, texture: "armor/fan1_1.png"});
Item.createArmorItem("loz", " fantom Chestplate", {name: "fantom2"}, {type: "chestplate", armor: 9, durability: 1100, texture: "armor/fan1_1.png"});

IDRegistry.genItemID("armor1");
IDRegistry.genItemID("armor2");
IDRegistry.genItemID("armor3");
IDRegistry.genItemID("armor4");

Item.createArmorItem("armor1", " ironwood Helmet", {name: "cr1"}, {type: "helmet", armor: 3, durability: 1100, texture: "armor/cr1_1.png"});
Item.createArmorItem("armor2", " ironwood Chestplate", {name: "cr2"}, {type: "chestplate", armor: 4, durability: 1100, texture: "armor/cr1_1.png"});
Item.createArmorItem("armor3", " ironwood Leggings", {name: "cr3"}, {type: "leggings", armor: 4, durability: 1100, texture: "armor/cr2_2.png"});
Item.createArmorItem("armor4", " ironwood Boots", {name: "cr4"}, {type: "boots", armor: 3, durability: 1100, texture: "armor/cr1_1.png"});



Recipes.addShaped({id: ItemID.armor1, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor2, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor3, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor4, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);
//fiery
IDRegistry.genItemID("fieryH");
IDRegistry.genItemID("fieryC");
IDRegistry.genItemID("fieryL");
IDRegistry.genItemID("fieryB");

Item.createArmorItem("fieryH", "Fiery Helmet \n Skill:§aTrue", {name: "FH1"}, {type: "helmet", armor: 6, durability: 1100, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryC", "Fiery Chestplate \n Skill:§aTrue", {name: "FC2"}, {type: "chestplate", armor: 7, durability: 1100, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryL", "Fiery Leggings \n Skill:§aTrue", {name: "FL3"}, {type: "leggings", armor: 7, durability: 1100, texture: "armor/FA2_2.png"});
Item.createArmorItem("fieryB", "Fiery Boots \n Skill:§aTrue", {name: "FB4"}, {type: "boots", armor: 6, durability: 1100, texture: "armor/FA1_1.png"});

Item.setGlint("fieryH", true);
Item.setGlint("fieryC", true);
Item.setGlint("fieryL", true);
Item.setGlint("fieryB", true);

Recipes.addShaped({id: ItemID.fieryH, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryB, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.fint, 0]);
//var armor all




// file: Core/Armor/Buttons/Tw Button.js

UIbuttons.setButton(ItemID.fieryC, "button_skill_resistance");




// file: Core/Block/Tree Block/Log.js

IDRegistry.genBlockID("twDarkLog");
IDRegistry.genBlockID("twMangroveLog");
IDRegistry.genBlockID("twCanopyLog");
IDRegistry.genBlockID("twTwilightOakLog");
IDRegistry.genBlockID("twMiningLog");
IDRegistry.genBlockID("twSortingLog");
IDRegistry.genBlockID("twTimeLog");
IDRegistry.genBlockID("twTransformationLog");

Block.createBlock("twDarkLog", [{
    name: "Dark Log",
    texture: [
        ["twDarkLog_top", 0],
        ["twDarkLog_top", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],
        ["twDarkLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twDarkLog, "wood", 1, true);
Block.setDestroyLevel("twDarkLog", 0);
        
        
Block.createBlock("twCanopyLog", [{
    name: "Canopy Log",
    texture: [
        ["twCanopyLog_top", 0],
        ["twCanopyLog_top", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],
        ["twCanopyLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twCanopyLog, "wood", 1, true);
Block.setDestroyLevel("twCanopyLog", 0);
        
        
        
        
Block.createBlock("twMangroveLog", [{
    name: "Mangrove Log",
    texture: [
        ["twMangroveLog_top", 0],
        ["twMangroveLog_top", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],
        ["twMangroveLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twMangroveLog, "wood", 1, true);
Block.setDestroyLevel("twMangroveLog", 0);
        
        
        
        
Block.createBlock("twTwilightOakLog", [{
    name: "Twilight Oak Log",
    texture: [
        ["twTwilightOakLog_top", 0],
        ["twTwilightOakLog_top", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],
        ["twTwilightOakLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTwilightOakLog, "wood", 1, true);
Block.setDestroyLevel("twTwilightOakLog", 0);
        
        
        
        
        
Block.createBlock("twMiningLog", [{
    name: "Mining Log",
    texture: [
        ["twMiningLog_top", 0],
        ["twMiningLog_top", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],
        ["twMiningLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twMiningLog, "wood", 1, true);
Block.setDestroyLevel("twMiningLog", 0);
        
        
        
Block.createBlock("twSortingLog", [{
    name: "Sorting Log",
    texture: [
        ["twSortingLog_top", 0],
        ["twSortingLog_top", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],
        ["twSortingLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twSortingLog, "wood", 1, true);
Block.setDestroyLevel("twSortingLog", 0);
        
        
        
        
Block.createBlock("twTimeLog", [{
    name: "Time Log",
    texture: [
        ["twTimeLog_top", 0],
        ["twTimeLog_top", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],
        ["twTimeLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTimeLog, "wood", 1, true);
Block.setDestroyLevel("twTimeLog", 0);
 

        
        
        
        
        
        
Block.createBlock("twTransformationLog", [{
    name: "Transformation Log",
    texture: [
        ["twTransformationLog_top", 0],
        ["twTransformationLog_top", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],
        ["twTransformationLog", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.twTransformationLog, "wood", 1, true);
Block.setDestroyLevel("twTransformationLog", 0);
        
        
        
        
        
        
        
        




// file: Core/Block/Tree Block/Wood.js

//Register ID
IDRegistry.genBlockID("tw_planks_dark_wood");
IDRegistry.genBlockID("tw_planks_mangrove");
IDRegistry.genBlockID("tw_planks_canopy");
IDRegistry.genBlockID("tw_planks_twilight_oak");
IDRegistry.genBlockID("tw_planks_mine");
IDRegistry.genBlockID("tw_planks_sort");
IDRegistry.genBlockID("tw_planks_time");
IDRegistry.genBlockID("tw_planks_trans");

//Create Blocks
Block.createBlock("tw_planks_dark_wood", [{
    name: "Dark Wood Planks",
    texture: [
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_dark_wood, "wood", 0, true);
Block.setDestroyLevel("tw_planks_dark_wood", 0);
    

    
    
    
    
Block.createBlock("tw_planks_mangrove", [{
    name: "Mangrove Planks",
    texture: [
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mangrove, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mangrove", 0);
    


    
    
    
    
Block.createBlock("tw_planks_canopy", [{
    name: "Canopy Planks",
    texture: [
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_canopy, "wood", 1, true);
Block.setDestroyLevel("tw_planks_canopy", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_mine", [{
    name: "Mine Planks",
    texture: [
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mine, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mine", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_twilight_oak", [{
    name: "Twilight Oak Planks",
    texture: [
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_twilight_oak, "wood", 1, true);
Block.setDestroyLevel("tw_planks_twilight_oak", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_time", [{
    name: "Time Planks",
    texture: [
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_time, "wood", 1, true);
Block.setDestroyLevel("tw_planks_time", 0);
    

    
    
    
    
    
    
Block.createBlock("tw_planks_sort", [{
    name: "Sort Planks",
    texture: [
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],],inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_sort, "wood", 1, true);
Block.setDestroyLevel("tw_planks_sort", 0);
    

    
    
    
    
Block.createBlock("tw_planks_trans", [{
    name: "Transformation Planks",
    texture: [
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_trans, "wood", 1, true);
Block.setDestroyLevel("tw_planks_trans", 0);
    




// file: Core/Block/Block.js






IDRegistry.genBlockID("g1")
Block.createBlock("g1", [
    {name: " Sunset tiles", texture: [["g", 0], ["g", 0], ["g", 0], ["g", 0], ["g", 0], ["g", 0]], inCreative: false}
]);




IDRegistry.genBlockID("k1")
Block.createBlock("k1", [
    {name: " Sunset tiles1", texture: [["k", 0], ["k", 0], ["k", 0], ["k", 0], ["k", 0], ["k", 0]], inCreative: false}
]);

IDRegistry.genBlockID("may2")
Block.createBlock("may2", [
    {name: "maz stone", texture: [["may", 0], ["may", 0], ["may", 0], ["may", 0], ["may", 0], ["may", 0]], inCreative: false}
]);

IDRegistry.genBlockID("may1"); 
Block.createBlock("may1", [
    {name: "may stone", texture: 
[["may3", 0], ["may3",0], 
["may3", 0], ["may3", 0], 
["may3", 0], ["may3", 0]], inCreative: false}
]) ;












IDRegistry.genBlockID("lo")
Block.createBlock("lo", [
    {name: "maze", texture: [["may5", 1], ["may5", 1], ["may4", 1], ["may4", 1], ["may4", 1], ["may4", 1]], inCreative: false}
]);

IDRegistry.genBlockID("lo1")
Block.createBlock("lo1", [
    {name: "maze forever", texture: [["may5", 1], ["may5", 1], ["may6", 1], ["may6", 1], ["may6", 1], ["may6", 1]], inCreative: false}
]);

IDRegistry.genBlockID("toto1")
Block.createBlock("toto1", [
    {name: "stone TW", texture: [["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0], ["toto1", 0]], inCreative: false}
]);






IDRegistry.genBlockID("goden")
Block.createBlock("goden", [
    {name: " towerwood alt", texture: [["go", 0], ["go", 0], ["go", 0], ["go", 0], ["go", 0], ["go", 0]], inCreative: false}
]);

IDRegistry.genBlockID("oh")
Block.createBlock("oh", [
    {name: " towerwood encased", texture: [["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0], ["go1", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk1")
Block.createBlock("uk1", [
    {name: " towerwood mossy", texture: [["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0], ["go2", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk2")
Block.createBlock("uk2", [
    {name: " towerwood infested", texture: [["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0], ["go3", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk3")
Block.createBlock("uk3", [
    {name: " towerdev reappearing off", texture: [["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0], ["go4", 0]], inCreative: false}
]);

IDRegistry.genBlockID("uk4")
Block.createBlock("uk4", [
    {name: " towerdev reappearing on", texture: [["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0], ["go5", 0]], inCreative: false}
]);








IDRegistry.genBlockID("twBlockPortal")
Block.createBlock("twBlockPortal", [
    {name: "twilight forest block portal", texture: [["dirt_day", 1], ["tw_top", 1], ["tw", 0], ["tw", 0], ["tw", 0], ["tw", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.twBlockPortal, count: 1, data: 0}, [
		"ooo",
		"oxo",
		"ooo"
	], ['o', 3, 0, 'h', 326, 0]);




// file: Core/Block/flowers.js

Item.addCreativeGroup("Flower", Translation.translate("Flower"), [
ItemID.flower1,
ItemID.flower2,
ItemID.flower3,
ItemID.flower4,
ItemID.flower5,
ItemID.flower6,
ItemID.flower7,
ItemID.flower8,
ItemID.flower9
]);
Item.setCategory(ItemID.flower1, 2);
Item.setCategory(ItemID.flower2, 2);
Item.setCategory(ItemID.flower3, 2);
Item.setCategory(ItemID.flower4, 2);
Item.setCategory(ItemID.flower5, 2);
Item.setCategory(ItemID.flower6, 2);
Item.setCategory(ItemID.flower7, 2);
Item.setCategory(ItemID.flower8, 2);
Item.setCategory(ItemID.flower9, 2);



IDRegistry.genItemID("flower1");
Item.createItem("flower1", "Двойной красный гладиолус", {name: "flower1", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower1"); 
 Block.createBlock("flower1", [{name: "Голубой цветок", texture: [["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower1", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.flower1, -1, render);
Block.setBlockShape(BlockID.flower1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower1){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower2");
Item.createItem("flower2", "Аконит", {name: "flower2", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower2"); 
 Block.createBlock("flower2", [{name: "Голубой цветок", texture: [["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower2, -1, render);
Block.setBlockShape(BlockID.flower2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower2){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
  
IDRegistry.genItemID("flower3");
Item.createItem("flower3", "Двойной оранжевый космос", {name: "flower3", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower3"); 
  Block.createBlock("flower3", [{name: "Голубой цветок", texture: [["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower3", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower3", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower3, -1, render);
Block.setBlockShape(BlockID.flower3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower3){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower4");
Item.createItem("flower4", "Алое", {name: "flower4", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower4"); 
  Block.createBlock("flower4", [{name: "Голубой цветок", texture: [["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower4", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower4", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower4, -1, render);
Block.setBlockShape(BlockID.flower4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower4){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower5");
Item.createItem("flower5", "Желтый мак", {name: "flower5", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower5"); 
  Block.createBlock("flower5", [{name: "Голубой цветок", texture: [["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower5", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower5", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower5, -1, render);
Block.setBlockShape(BlockID.flower5, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower5){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower6");
Item.createItem("flower6", "Эхинацея", {name: "flower6", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower6"); 
  Block.createBlock("flower6", [{name: "Голубой цветок", texture: [["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower6", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower6", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower6, -1, render);
Block.setBlockShape(BlockID.flower6, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower6){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower7");
Item.createItem("flower7", "Двойное дно боярышника", {name: "flower7", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower7"); 
  Block.createBlock("flower7", [{name: "Голубой цветок", texture: [["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower7", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower7", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower7, -1, render);
Block.setBlockShape(BlockID.flower7, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower7){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower8");
Item.createItem("flower8", "Маковое голубое дно", {name: "flower8", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower8"); 
  Block.createBlock("flower8", [{name: "Голубой цветок", texture: [["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower8", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower8", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower8, -1, render);
Block.setBlockShape(BlockID.flower8, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower8){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower9");
Item.createItem("flower9", "Темное осто", {name: "flower9", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower9"); 
  Block.createBlock("flower9", [{name: "Голубой цветок", texture: [["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0]], inCreative: false}
], BLOCK_TYPE_LEAVES);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower9", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower9", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower9, -1, render);
Block.setBlockShape(BlockID.flower9, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower9){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0);
}}});

Block.registerDropFunction(BlockID.flower1, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower1, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower2, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower2, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower3, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower3, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower4, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower4, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower5, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower5, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower6, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower6, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower7, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower7, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower8, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower8, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower9, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower9, 1, 0]);
	return drop;
});




// file: Core/Block/Block Trophy/Trophy Heart.js

IDRegistry.genBlockID("uk5")
Block.createBlock("uk5", [
    {name: "ghast health", texture: [["p11", 1], ["p11", 1], ["go6", 0], ["go6", 0], ["go6", 0], ["go6", 0]], inCreative: false }
]);

//

IDRegistry.genBlockID("he")
Block.createBlock("he", [
    {name: "naga health", texture: [["p11", 1], ["p11", 1], ["uk", 0], ["uk", 0], ["uk", 0], ["uk", 0]], inCreative: false }
]);

IDRegistry.genBlockID("boss")
Block.createBlock("boss", [ {name: "lich health", texture: [["p11", 1], ["p11", 1], ["boss12", 1], ["boss12", 1], ["boss22", 1], ["boss12", 1]], inCreative: false }]);

IDRegistry.genBlockID("hydraboss")
Block.createBlock("hydraboss", [
    {name: "hydra health", texture: [["p11", 1], ["p11", 1], ["hydra", 0], ["hydra", 0], ["hydra", 0], ["hydra", 0]], inCreative: false }
]);

IDRegistry.genBlockID("snowqueenboss")
Block.createBlock("snowqueenboss", [
    {name: "snow queen health", texture: [["p11", 1], ["p11", 1], ["snq", 0], ["snq", 0], ["snq", 0], ["snq", 0]], inCreative: false }
]);

//item spawn ugha
IDRegistry.genItemID("ughastTrophy");
Item.createItem("ughastTrophy", "Ur Ghast Trophy", {name: "UrGhastTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.ughastTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.uk5, 0);
}}); 
//naga


IDRegistry.genItemID("nagaTrophy");
Item.createItem("nagaTrophy", "Naga Trophy", {name: "nagaTrophy", meta: 0}, {stack: 1})
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.nagaTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.he, 0);
}}); 
//lich


IDRegistry.genItemID("lichTrophy");
Item.createItem("lichTrophy", "Lich Trophy", {name: "lichTrophy", meta: 0}, {stack: 1})
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.lichTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.boss, 0);
}}); 
//hydra

IDRegistry.genItemID("hydraTrophy");
Item.createItem("hydraTrophy", "Hydra Trophy", {name: "hydraTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hydraTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.hydraboss, 0);

}});

IDRegistry.genItemID("snowQueenTrophy");
Item.createItem("snowQueenTrophy", "snow queen Trophy", {name: "snowQueenTrophy", meta: 0}, {stack: 1})

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.snowQueenTrophy&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.snowqueenboss, 0);
}});



//drop
Item.addCreativeGroup("Trophy", Translation.translate("Trophy"), [
	ItemID.ughastTrophy,
	ItemID.lichTrophy,
	ItemID.nagaTrophy,
	ItemID.snowQueenTrophy,
	ItemID.hydraTrophy,
	
]);




// file: Core/Block/Block Trophy/Trophy Table.js

//naga

IDRegistry.genBlockID("na1")
Block.createBlock("na1", [{name: "§a  NAGA ON", texture: [["p1", 1], ["p1", 1], ["na1", 0], ["na1", 0], ["na1", 0], ["na1", 0]], inCreative: true}]);


//lich

IDRegistry.genBlockID("o")
Block.createBlock("o", [{name: "§a LICH ON", texture: [["p1", 1], ["p1", 1], ["o1", 0], ["o1", 0], ["o1", 0], ["o1", 0]], inCreative: true}]);

//hydra 



IDRegistry.genBlockID("hydraOn")
Block.createBlock("hydraOn", [{name: "§a HYDRA ON", texture: [["p1", 1], ["p1", 1], ["hydra", 1], ["hydra", 1], ["hydra", 1], ["hydra", 1]], inCreative: true}]);

//snow queen



IDRegistry.genBlockID("snowQueenOn")
Block.createBlock("snowQueenOn", [{name: "§a SNOW QUEEN ON", texture: [["p1", 1], ["p1", 1], ["snowqueen", 1], ["snowqueen", 1], ["snowqueen", 1], ["snowqueen", 1]], inCreative: true}]);

//ughast
IDRegistry.genBlockID("ughastOn")
Block.createBlock("ughastOn", [
    {name: "§a UGHAST ON", texture: [["p1", 1], ["p1", 1], ["ugh", 2], ["ugh", 2], ["ugh", 2], ["ugh", 2]], inCreative: true}]);





//group 
Item.addCreativeGroup("temple summoning", Translation.translate("temple summoning"), [
	 BlockID.na1,
	 BlockID.o,
	 BlockID.ughastOn,
	 
	 BlockID.snowQueenOn,
	 
	 BlockID.hydraOn,
	 
]);





// file: Core/Dimensions/THE TWILIGHT FOREST/Portal.js







//
Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==264 && block.id== BlockID.twBlockPortal) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
  World.setBlock(coords.x+2, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+3, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 2, 0);

World.setBlock(coords.x-1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+4, coords.z, 2, 0);
//
World.setBlock(coords.x+1, coords.y+2, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x+1, coords.y+3, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.twPortal, 0); 
Entity.spawn(coords.x, coords.y+1, coords.z, 93); 
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});













// file: Core/Dimensions/THE TWILIGHT FOREST/Twilight Forest.js

var twilightforest1 = new Dimensions.CustomDimension("twilightforest1", 1345); 
twilightforest1.setSkyColor(.4, .4, .5)
twilightforest1.setFogColor(.3, .3, .5);
 
 Callback.addCallback("ItemUse", function(coords, item) {
    
    if (item.id == ItemID.twpo) {
        Dimensions.transfer(Player.get(), Player.getDimension() == 0 ? twilightforest1.id : 0);
    }
})
twilightforest1.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 70, 
            yConversion: [[.0, 0], [0, 0]],
            material: {base: 1, surface: {id: 3, data: 0, width:4}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));

PortalUtils.newPortalBlock("twPortal", ["twilightforest1_portal", 0], {type: "h-plane", frameId: 2}, true);

var shapeTw = new PortalShape();
shapeTw.setPortalId(BlockID.twPortal);
shapeTw.setFrameIds(BlockID.twPortal);
shapeTw.setMinSize(2, 3);

Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTw.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTw.buildPortal(rect, false);      
   }
}); 
    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortal, [2]);
    }
}); 

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != twilightforest1.id) {
    Dimensions.transfer(Player.get(), twilightforest1.id);
   shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != twilightforest1.id)
       Dimensions.transfer(Player.get(), twilightforest1.id);   
      shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});





// file: Core/Dimensions/THE TWILIGHT FOREST/Mob Spawn Dimensions.js

//spawn firefly 

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.3){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+3, coords.z, "hexxit:firefly");
} 
} 
});
//bò
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.06){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+1, coords.z, "hexxit:minotaur");
} 
} 
});
//golem
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId <= twilightforest1.id){
        if(Math.random()<=0.06){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+1, coords.z, "hexxit:tower_golem");
} 
} 
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Tree/trans tree.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x+6, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+2, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+3, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+4, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+5, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+7, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+7, coords.y+2, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+8, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+9, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y+2, coords.z+10, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+8, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+12, BlockID.twTransformationLog, 0); 
//
//
World.setBlock(coords.x+5, coords.y+8, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+7, coords.z+12, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+6, coords.y+8, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y+7, coords.z+11, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+5, coords.y+7, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+5, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+4, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+10, BlockID.twTransformationLog, 0);
//
//
World.setBlock(coords.x+9, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+13, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+14, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+6, coords.y+1, coords.z+12, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 
//
World.setBlock(coords.x+5, coords.y+1, coords.z+11, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+5, coords.y, coords.z+11, BlockID.twTransformationLog, 0);
//
World.setBlock(coords.x+6, coords.y+1, coords.z+10, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+10, BlockID.twTransformationLog, 0); 
 World.setBlock(coords.x+6, coords.y, coords.z+9, BlockID.twTransformationLog, 0); 
World.setBlock(coords.x+4, coords.y, coords.z+12, BlockID.twTransformationLog, 0); 

//lá
World.setBlock(coords.x+5, coords.y+9, coords.z+15, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+14, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+13, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+8, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+8, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+9, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+8, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+3, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+2, coords.y+9, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+10, coords.z+9, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+11, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+8, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+8, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+8, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+12, 18, 0); 


} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Tree/tree canopy.js


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 



World.setBlock(coords.x+6, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+2, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+3, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+4, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+5, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+7, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+7, coords.y+2, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+8, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+9, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y+2, coords.z+10, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+8, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+8, coords.y+1, coords.z+12, BlockID.twCanopyLog, 0); 
//
//
World.setBlock(coords.x+5, coords.y+8, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+7, coords.z+12, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+6, coords.y+8, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y+7, coords.z+11, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+5, coords.y+7, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+5, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+4, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y+6, coords.z+10, BlockID.twCanopyLog, 0);
//
//
World.setBlock(coords.x+9, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+13, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+9, coords.y, coords.z+14, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+6, coords.y+1, coords.z+12, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 
//
World.setBlock(coords.x+5, coords.y+1, coords.z+11, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+5, coords.y, coords.z+11, BlockID.twCanopyLog, 0);
//
World.setBlock(coords.x+6, coords.y+1, coords.z+10, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+6, coords.y, coords.z+10, BlockID.twCanopyLog, 0); 
 World.setBlock(coords.x+6, coords.y, coords.z+9, BlockID.twCanopyLog, 0); 
World.setBlock(coords.x+4, coords.y, coords.z+12, BlockID.twCanopyLog, 0); 

//lá
World.setBlock(coords.x+5, coords.y+9, coords.z+15, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+14, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+13, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+9, coords.z+14, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+7, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+8, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+8, coords.y+9, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+6, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+9, 18, 0); 
World.setBlock(coords.x+5, coords.y+9, coords.z+8, 18, 0); 
//
World.setBlock(coords.x+4, coords.y+9, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+3, coords.y+9, coords.z+12, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+11, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+10, 18, 0); 
World.setBlock(coords.x+3, coords.y+9, coords.z+9, 18, 0); 
//
World.setBlock(coords.x+2, coords.y+9, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+10, coords.z+9, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+10, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+11, 18, 0); 
//
World.setBlock(coords.x+5, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+6, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
//
//
World.setBlock(coords.x+4, coords.y+8, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+8, coords.z+10, 18, 0); 
World.setBlock(coords.x+5, coords.y+8, coords.z+10, 18, 0); 
//
World.setBlock(coords.x+7, coords.y+10, coords.z+11, 18, 0); 
World.setBlock(coords.x+6, coords.y+10, coords.z+12, 18, 0); 
World.setBlock(coords.x+5, coords.y+10, coords.z+13, 18, 0); 
World.setBlock(coords.x+4, coords.y+10, coords.z+12, 18, 0); 



 









} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Ore.js





Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 3){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+25, coords.z, 16, 0, 10, true);

} 
} 
}
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 2){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+21, coords.z, 15, 0, 10, true);

} 
} 
}
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 2){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+23, coords.z, 14, 0, 10, true);

} 
} 
}
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
if (Math.random()*5 <= 1){
    for(var i = 0; i < 2; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y+11, coords.z, 56, 0, 10, true);

} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Hexxit.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.05){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	World.setBlock(coords.x,coords.y,  coords.z, 2, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.hexibiscus, 0);
	} 
} 
}
});




Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
	 World.setBlock(coords.x,coords.y,  coords.z+1, 4, 0);
World.setBlock(coords.x+1,coords.y,  coords.z+1, 4, 0);  
World.setBlock(coords.x-1,coords.y,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+3, 4, 0);

World.setBlock(coords.x,coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x,coords.y+2, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+3, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+4, coords.z, 97, 3);
World.setBlock(coords.x,coords.y+5, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+5, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+6, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+7, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+8, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+10, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+11, coords.z, 97, 2);
World.setBlock(coords.x,coords.y+12, coords.z, 97, 2);

World.setBlock(coords.x-1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+3,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x-1,coords.y+5,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+6,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z+4, 101, 0);  

World.setBlock(coords.x-1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z+4, 101, 0);  
//СОНГЫ ЭТАЖ
World.setBlock(coords.x+2,coords.y+11,  coords.z, 48, 0);  
World.setBlock(coords.x+2,coords.y+12,  coords.z, 48, 0);  

World.setBlock(coords.x-2,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z, 97, 2);  

World.setBlock(coords.x+2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-1,coords.y+10,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+3, 4, 0);

//лестница
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 4, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+2, 4, 0);
World.setBlock(coords.x,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 4, 0);
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+6,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+7,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+8,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+9,  coords.z+1, 4, 0);
	} 
} 
}
});





// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Boss/Lich Structure.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.005){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
 World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 98, 1);
       //
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 1); 
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.o, 0);// boss
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 98, 1);
       //
       //cột
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 98, 1);
       //
       //
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, 98, 1);
       

} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Boss/Naga Structure.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.005){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
 World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 98, 1);
       //
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 1); 
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.na1, 0);// boss
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 98, 1);
       //
       //cột
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 98, 1);
       //
       //
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, 98, 1);
       

} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Boss/Hydra Structure.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.005){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
 World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 98, 1);
       //
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 1); 
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.hydraOn, 0);// boss
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 98, 1);
       //
       //cột
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 98, 1);
       //
       //
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, 98, 1);
       

} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Dimensions Structure/Structure Boss/Snow Queen Structure.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==twilightforest1.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.005){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
 World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 98, 1);
       //
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z, 98, 1); 
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.snowQueenOn, 0);// boss
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 98, 1);
       //
       //cột
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 98, 1);
       //
       //
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, 98, 1);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 98, 1);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, 98, 1);
       //
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 98, 1);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 98, 1);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, 98, 1);
       

} 
} 
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Mob/hydra.js

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.keyHydra && block.id== BlockID.hydraOn) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
  /*
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:jts");
Entity.spawn(coords.x, coords.y+9, coords.z+5, 34); 
Entity.spawn(coords.x, coords.y+9, coords.z+5, 34); 
Entity.spawn(coords.x, coords.y+9, coords.z+4, 34); 
Entity.spawn(coords.x, coords.y+9, coords.z+5, 34); 
*/


World.setBlock(coords.x-13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x-13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+13, 98, 1);
       
      //2
      World.setBlock(coords.x-12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
       //3
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x+13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
//
World.setBlock(coords.x-12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
  
}
});













// file: Core/Dimensions/THE TWILIGHT FOREST/Mob/naga.js

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.keyNaga && block.id== BlockID.na1) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:nj");
World.setBlock(coords.x-13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x-13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+13, 98, 1);
       
      //2
      World.setBlock(coords.x-12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
       //3
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x+13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
//
World.setBlock(coords.x-12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
  
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Mob/lich.js

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.keyLich && block.id== BlockID.o) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "twilightforest:lich");
Entity.spawn(coords.x, coords.y+1, coords.z+3, 34); 
Entity.spawn(coords.x, coords.y+1, coords.z, 34); 
Entity.spawn(coords.x, coords.y+1, coords.z+5, 34); 
Entity.spawn(coords.x, coords.y+1, coords.z+6, 34); 
Entity.spawn(coords.x, coords.y+1, coords.z+5, 34); 

World.setBlock(coords.x-13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x-13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+13, 98, 1);
       
      //2
      World.setBlock(coords.x-12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
       //3
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-12, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-11, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-10, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-9, 98, 1);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-8, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-7, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-6, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-5, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-4, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-3, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-2, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-1, 98, 1);
       
       World.setBlock(coords.x+13,coords.y+3,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z, 98, 1);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+1, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+2, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+3, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+4, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+5, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+6, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+7, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+8, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+9, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+10, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+11, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+12, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 98, 1);
//
World.setBlock(coords.x-12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-12,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-11,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-10,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-9,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x-1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+1,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+2,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+3,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+4,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+5,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+6,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+7,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+8,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-13, 98, 1);
      World.setBlock(coords.x+9,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+10,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+11,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+12,coords.y-3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 98, 1);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 98, 1);
       
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
  
}
});




// file: Core/Dimensions/THE TWILIGHT FOREST/Mob/snowqueen.js

Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.keySnowQueen && block.id== BlockID.snowQueenOn) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:bxnw");
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:bj");
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:bj"); 
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:bj");
Entity.spawnAddon (coords.x, coords.y+1, coords.z+5, "ms:bj");




World.setBlock(coords.x-13,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-13, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-12, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-12, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-11, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-11, 174, 0);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-10, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-10, 174, 0);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-9, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-9, 174, 0);
//
World.setBlock(coords.x-13,coords.y+3,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-8, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-8, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-7, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-7, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-6, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-6, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-5, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-5, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-4, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-4, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-3, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-3, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-2, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-2, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z-1, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z-1, 174, 0);
       
       World.setBlock(coords.x-13,coords.y+3,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z, 174, 0);
       //
       World.setBlock(coords.x-13,coords.y+3,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+1, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+2, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+3, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+4, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+5, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+6, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+7, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+8, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+9, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+10, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+11, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+12, 174, 0);
       World.setBlock(coords.x-13,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-13,coords.y-3,  coords.z+13, 174, 0);
       
      //2
      World.setBlock(coords.x-12,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-12,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-11,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-11,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-10,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-10,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-9,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-9,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-8,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-8,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-7,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-7,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-6,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-6,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-5,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-5,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-4,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-4,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-3,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-2,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x-1,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+1,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+2,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+3,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+4,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+5,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+6,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+7,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+8,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z+13, 174, 0);
      World.setBlock(coords.x+9,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+10,coords.y-3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+11,coords.y-3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+12,coords.y-3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 174, 0);
       //3
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-12, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-12, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-11, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-11, 174, 0);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-10, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-10, 174, 0);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-9, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-9, 174, 0);
//
World.setBlock(coords.x+13,coords.y+3,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-8, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-8, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-7, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-7, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-6, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-6, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-5, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-5, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-4, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-4, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-3, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-3, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-2, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-2, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-1, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-1, 174, 0);
       
       World.setBlock(coords.x+13,coords.y+3,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z, 174, 0);
       //
       World.setBlock(coords.x+13,coords.y+3,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+1, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+2, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+3, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+4, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+5, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+6, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+7, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+8, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+9, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+10, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+11, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+12, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z+13, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z+13, 174, 0);
//
World.setBlock(coords.x-12,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-12,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-11,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-11,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-10,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-10,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-9,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-9,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-8,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-8,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-7,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-7,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-6,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-6,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-5,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-5,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-4,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-4,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-3,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-3,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-2,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-2,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x-1,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x-1,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+1,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+1,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+2,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+2,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+3,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+3,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+4,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+4,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+5,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+5,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+6,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+6,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+7,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+7,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+8,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+8,coords.y-3,  coords.z-13, 174, 0);
      World.setBlock(coords.x+9,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+9,coords.y-3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+10,coords.y-3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+11,coords.y-3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+12,coords.y-3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y+3,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y+2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y+1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-1,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-2,  coords.z-13, 174, 0);
       World.setBlock(coords.x+13,coords.y-3,  coords.z-13, 174, 0);
       




  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
  
}
});




