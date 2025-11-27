/*
BUILD INFO:
  dir: development/code
  target: main.js
  files: 18
*/



// file: header.js

﻿/*
   [RU]
 *Запрещено распространять на сторонних источниках,без указания ссылки на официальный канал автора!
 (https://www.youtube.com/channel/UCV8voj_BFupB6UbfqyQn1-w)
   [EN]
 *It is prohibited to distribute on third-party sources, without specifying the reference to the author's official channel!
 (https://www.youtube.com/channel/UCV8voj_BFupB6UbfqyQn1-w)
*/

IMPORT("ToolLib");




// file: core/config.js

let Config = {
   reload: function(){
	  this.soundEnabled = __config__.getBool("sound_enabled");
	}
}

Config.reload();

var player;
Callback.addCallback("LevelLoaded", function(){
	Config.reload();
	player = Player.get();
});

isLevelDisplayed = false;
Callback.addCallback("LevelDisplayed", function(){
	isLevelDisplayed = true;
});
Callback.addCallback("LevelLeft", function(){
	isLevelDisplayed = false;
});




// file: core/sound_engine.js

let SoundAPI = {
	soundPlayers: [],
	soundsToRelease: [],
	maxPlayersCount: 28,
	
	getFilePath: function(name){
		return __dir__ + "development/assets/sounds/" + name;
	},
	
	isSoundEnabled: function(){
		return Config.soundEnabled && isLevelDisplayed;
	},
	
	addSoundPlayer: function(name, loop, priorized){
		if(this.soundPlayers.length >= this.maxPlayersCount){
			Logger.Log(__name__ + " sound stack is full", "WARNING");
			return null;
		}
		let sound = new Sound(name, priorized);
		sound.setDataSource(this.getFilePath(name));
		sound.setLooping(loop || false);
		sound.prepare();
		this.soundPlayers.push(sound);
		return sound;
	},
	
	addMultiSoundPlayer: function(startingSound, startSound, finishingSound){
		if(this.soundPlayers.length >= this.maxPlayersCount){
			Logger.Log(__name__ + " sound stack is full", "WARNING");
			return;
		}
		let sound = new MultiSound(startingSound, startSound, finishingSound);
		this.soundPlayers.push(sound);
		return sound;
	},
	
	playSound: function(name, loop, disableMultiPlaying){
		if(!this.isSoundEnabled()) {return null;}
		let curSound = null;
		try{
		for(let i in this.soundPlayers){
			let sound = this.soundPlayers[i];
			if(sound.isPlaying()){
				if(sound.name == name && disableMultiPlaying){
					return sound;
				}
			}
			else if(sound.name == name) {
				sound.start();
				return sound;
			}
			else if(!sound.isPreparing && !sound.priorized){
				curSound = new Sound(name, false);
				curSound.setDataSource(this.getFilePath(name));
				curSound.setLooping(loop || false);
				curSound.prepare();
				sound = this.soundPlayers[i];
				if(!sound.isPreparing && !sound.isPlaying()){ // second check after preparing because of multi-threading
					this.soundPlayers[i] = curSound;
					this.soundsToRelease.push(sound);
				} else {
					this.soundPlayers.push(curSound);
				}
				break;
			}
		}
		if(!curSound){
			curSound = this.addSoundPlayer(name, loop, false);
		}
		curSound.start();
		//Game.message("sound "+ name +" started");
		}
		catch(err) {
			Logger.Log("sound "+ name +" start failed", "ERROR");
			Logger.Log(err, "ERROR");
		}
		return curSound;
	},
	
	playSoundAt: function(coord, name, loop, radius){
		if(loop && Entity.getDistanceBetweenCoords(coord, Player.getPosition()) > radius){
			return null;
		}
		let sound = this.playSound(name, loop);
		if(sound){
			sound.setSource(coord, radius);
		}
		return sound;
	},
	
	updateVolume: function(){
		for(let i in this.soundPlayers){
			let sound = this.soundPlayers[i];
			sound.setVolume(sound.volume);
		}
	},
	
	createSource: function(fileName, coord, radius){
		if(!this.isSoundEnabled()) {return null;}
		let curSound = null;
		try{
		for(let i in this.soundPlayers){
			let sound = this.soundPlayers[i];
			if(!sound.isPlaying() && !sound.isPreparing && !sound.priorized){
				curSound = new MultiSound(fileName[0], fileName[1], fileName[2]);
				sound = this.soundPlayers[i];
				if(!sound.isPreparing && !sound.isPlaying()){ // second check after preparing because of multi-threading
					this.soundPlayers[i] = curSound;
					this.soundsToRelease.push(sound);
				} else {
					this.soundPlayers.push(curSound);
				}
				break;
			}
		}
		if(!curSound){
			curSound = this.addMultiSoundPlayer(fileName[0], fileName[1], fileName[2]);
		}
		curSound.setSource(coord, radius);
		curSound.start();
		} 
		catch(err) {
			Logger.Log("multi-sound ["+ fileName +"] start failed", "ERROR");
			Logger.Log(err, "ERROR");
		}
		return curSound;
	},
	
	updateSourceVolume: function(sound){
		let s = sound.source;
		let p = Player.getPosition();
		let volume = Math.max(0, 1 - Math.sqrt(Math.pow(p.x - s.x, 2) + Math.pow(p.y - s.y, 2) + Math.pow(p.z - s.z, 2))/s.radius);
		sound.setVolume(volume);
	},
	
	clearSounds: function(){
		for(let i = 0; i < this.soundPlayers.length; i++){
			let sound = this.soundPlayers[i];
			if(sound.isPlaying()){
				sound.stop();
			}
			if(!sound.priorized){
				sound.release();
				this.soundPlayers.splice(i--, 1);
			}
		}
	}
}

function Sound(name, priorized){
	this.name = name;
	this.media = new android.media.MediaPlayer();
	this.priorized = priorized || false;
	this.isPreparing = true;
	
	this.setDataSource = function(path){
		this.media.setDataSource(path);
	}
	
	this.setLooping = function(loop){
		this.media.setLooping(loop);
	}
	
	this.prepare = function(){
		this.media.prepare();
	}
	
	this.isPlaying = function(){
		return this.media.isPlaying();
	}
	
	this.isLooping = function(){
		return this.media.isLooping();
	}
	
	this.start = function(){
		this.media.start();
		this.isPreparing = false;
	}
	
	this.pause = function(){
		this.media.pause();
	}
	
	this.seekTo = function(ms){
		this.media.seekTo(ms);
	}
	
	this.stop = function(){
		this.media.pause();
		this.media.seekTo(0);
	}
	
	this.release = function(){
		this.media.release();
	}
	
	this.setVolume = function(volume){
		this.volume = volume;
		volume *= gameVolume;
		this.media.setVolume(volume, volume);
	}
	
	this.setVolume(1);
	
	this.setSource = function(coord, radius){
		this.source = {x: coord.x + 0.5, y: coord.y + 0.5, z: coord.z + 0.5, radius: radius, dimension: Player.getDimension()};
		SoundAPI.updateSourceVolume(this);
	}
}

function MultiSound(startingSound, startSound, finishingSound){
	this.parent = Sound;
	this.parent(startingSound || startSound, 0, true);
	
	this.startingSound = null;
	this.startSound = null;
	this.finishingSound = null;
	
	this.setDataSource(SoundAPI.getFilePath(startingSound || startSound));
	if(startingSound){
		this.startingSound = this.media;
		this.startSound = new android.media.MediaPlayer();
		this.startSound.setDataSource(SoundAPI.getFilePath(startSound));
		this.startSound.setLooping(true);
		let self = this;
		this.media.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({
			onCompletion: function(mp){
				self.playStartSound();
			}
		}));
		this.startSound.prepareAsync();
	} else {
		this.startSound = this.media;
		this.setLooping(true);
	}
	this.prepare();
	
	if(finishingSound){
		let media = new android.media.MediaPlayer();
		media.setDataSource(SoundAPI.getFilePath(finishingSound));
		media.prepareAsync();
		this.finishingSound = media;
	}
	
	this.playStartSound = function(){
		this.media = this.startSound;
		this.media.start();
	}
	
	this.playFinishingSound = function(){
		if(!this.isFinishing){
			this.media = this.finishingSound;
			this.media.start();
			this.isFinishing = true;
		}
	}
	
	this.release = function(){
		this.startSound.release();
		if(this.startingSound){
			this.startingSound.release();
		}
		if(this.finishingSound){
			this.finishingSound.release();
		}
	}
}

Callback.addCallback("tick", function(){
	for(let i in SoundAPI.soundsToRelease){
		SoundAPI.soundsToRelease[i].release();
	}
	SoundAPI.soundsToRelease = [];
	for(let i in SoundAPI.soundPlayers){
		let sound = SoundAPI.soundPlayers[i];
		if(sound.isPlaying() && sound.source){
			if(sound.source.dimension == Player.getDimension()){
				SoundAPI.updateSourceVolume(sound);
			} else {
				sound.stop();
			}
		}
	}
});

Callback.addCallback("LevelLeft", function(){
	SoundAPI.clearSounds();
});

/*Volume in the settings*/
/*From SoundAPI lib by WolfTeam*/
var settings_path = "/storage/emulated/0/games/com.mojang/minecraftpe/options.txt";
var gameVolume = FileTools.ReadKeyValueFile(settings_path)["audio_sound"];
var prevScreen = false;
Callback.addCallback("NativeGuiChanged", function (screen) {
    var currentScreen = screen.startsWith("screen_world_controls_and_settings") || screen.startsWith("screen_controls_and_settings");
    if(prevScreen && !currentScreen){
        gameVolume = FileTools.ReadKeyValueFile(settings_path)["audio_sound"];
		SoundAPI.updateVolume();
    }
    prevScreen = currentScreen;
});




// file: items/resources/cloth.js

IDRegistry.genItemID("desert_camo_cloth");
Item.createItem("desert_camo_cloth", "Desert Camouflage Cloth", {name: "Desert_Camo_Cloth"});

IDRegistry.genItemID("forest_camo_cloth");
Item.createItem("forest_camo_cloth", "Forest Camouflage Cloth", {name: "Forest_Camo_Cloth"});

IDRegistry.genItemID("snow_camo_cloth");
Item.createItem("snow_camo_cloth", "Snow Camouflage Cloth", {name: "Snow_Camo_Cloth"});

Item.addCreativeGroup("cloth", Translation.translate("Cloth"), [
	ItemID.desert_camo_cloth,
	ItemID.forest_camo_cloth,
	ItemID.snow_camo_cloth
]);




// file: items/armor/desert_camo.js

IDRegistry.genItemID("desert_camo_helmet");
IDRegistry.genItemID("desert_camo_body");
IDRegistry.genItemID("desert_camo_legs");
IDRegistry.genItemID("desert_camo_boots");

Item.createArmorItem("desert_camo_helmet", "Desert Camouflage",
   {name: "Desert_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Desert_Camo_1.png"});
Item.createArmorItem("desert_camo_body", "Desert Camouflage",
   {name: "Desert_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Desert_Camo_1.png"});
Item.createArmorItem("desert_camo_legs", "Desert Camouflage",
   {name: "Desert_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Desert_Camo_2.png"});
Item.createArmorItem("desert_camo_boots", "Desert Camouflage",
   {name: "Desert_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Desert_Camo_1.png"});


Item.addRepairItemIds(ItemID.desert_camo_helmet, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_body, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_legs, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_boots, [ItemID.desert_camo_cloth]);

Item.addCreativeGroup("desert_camo", Translation.translate("Desert Camouflage"), [
	ItemID.desert_camo_helmet,
	ItemID.desert_camo_body,
	ItemID.desert_camo_legs,
   ItemID.desert_camo_boots
]);




// file: items/armor/forest_camo.js

IDRegistry.genItemID("forest_camo_helmet");
IDRegistry.genItemID("forest_camo_body");
IDRegistry.genItemID("forest_camo_legs");
IDRegistry.genItemID("forest_camo_boots");

Item.createArmorItem("forest_camo_helmet", "Forest Camouflage",
   {name: "Forest_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Forest_Camo_1.png"});
Item.createArmorItem("forest_camo_body", "Forest Camouflage",
   {name: "Forest_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Forest_Camo_1.png"});
Item.createArmorItem("forest_camo_legs", "Forest Camouflage",
   {name: "Forest_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Forest_Camo_2.png"});
Item.createArmorItem("forest_camo_boots", "Forest Camouflage",
   {name: "Forest_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Forest_Camo_1.png"});

Item.addRepairItemIds(ItemID.forest_camo_helmet, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_body, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_legs, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_boots, [ItemID.forest_camo_cloth]);

Item.addCreativeGroup("forest_camo", Translation.translate("Forest Camouflage"), [
	ItemID.forest_camo_helmet,
	ItemID.forest_camo_body,
	ItemID.forest_camo_legs,
   ItemID.forest_camo_boots
]);




// file: items/armor/snow_camo.js

IDRegistry.genItemID("snow_camo_helmet");
IDRegistry.genItemID("snow_camo_body");
IDRegistry.genItemID("snow_camo_legs");
IDRegistry.genItemID("snow_camo_boots");

Item.createArmorItem("snow_camo_helmet", "Snow Camouflage",
   {name: "Snow_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Snow_Camo_1.png"});
Item.createArmorItem("snow_camo_body", "Snow Camouflage",
   {name: "Snow_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Snow_Camo_1.png"});
Item.createArmorItem("snow_camo_legs", "Snow Camouflage",
   {name: "Snow_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Snow_Camo_2.png"});
Item.createArmorItem("snow_camo_boots", "Snow Camouflage",
   {name: "Snow_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Snow_Camo_1.png"});

Item.addRepairItemIds(ItemID.snow_camo_helmet, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_body, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_legs, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_boots, [ItemID.snow_camo_cloth]);

Item.addCreativeGroup("snowCamo", Translation.translate("Snow Camouflage"), [
	ItemID.snow_camo_helmet,
	ItemID.snow_camo_body,
	ItemID.snow_camo_legs,
   ItemID.snow_camo_boots
]);




// file: items/medicine/bandages.js

﻿//Bandage
IDRegistry.genItemID("bandage");
Item.createItem("bandage", "Bandage", {name: "Bandage"}, {stack: 16});

Item.registerUseFunction("bandage", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 3);
     SoundAPI.playSound("Bandage.ogg");
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});

//Emergency Bandage
IDRegistry.genItemID("emergency_bandage");
Item.createItem("emergency_bandage", "Emergency Bandage", {name: "Emergency_Bandage"}, {stack: 16});

Item.registerUseFunction("emergency_bandage", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 5);
     SoundAPI.playSound("Bandage.ogg");
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});




// file: items/medicine/medkits.js

﻿//Small Medkit
IDRegistry.genItemID("small_medkit");
Item.createItem("small_medkit", "Small Medkit", {name: "Small_Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.small_medkit, 5);

Item.registerUseFunction("small_medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 7);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 5 ? item.count : 0, item.data);
     }
});

//Medkit
IDRegistry.genItemID("medkit");
Item.createItem("medkit", "Medkit", {name: "Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.medkit, 7);

Item.registerUseFunction("medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 10);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 7 ? item.count : 0, item.data);
     }
});

//Nig Medkit
IDRegistry.genItemID("big_medkit");
Item.createItem("big_medkit", "Big Medkit", {name: "Big_Medkit"}, {stack: 1});
Item.setMaxDamage(ItemID.big_medkit, 10);

Item.registerUseFunction("big_medkit", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 10);
     SoundAPI.playSound("Medkit.ogg");
     Player.setCarriedItem(item.id, ++item.data < 10 ? item.count : 0, item.data);
     }
});




// file: items/medicine/tablets.js

﻿//Pain Killer
IDRegistry.genItemID("pain_killer");
Item.createItem("pain_killer", "Pain Killer", {name: "Pain_Killer"}, {stack: 64});

Item.registerUseFunction("pain_killer", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 7);
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});




// file: items/medicine/plaster.js

﻿//Plaster
IDRegistry.genItemID("plaster");
Item.createItem("plaster", "Plaster", {name: "Plaster"}, {stack: 64});

Item.registerUseFunction("plaster", function(coords, item, block){
   var Health = Player.getHealth();
   if(Health < 20){
     Player.setHealth(Health + 1);
     Player.setCarriedItem(item.id,  item.count - 1, item.data);
     }
});




// file: items/medicine/medical_items_group.js

﻿Item.addCreativeGroup("medicine", Translation.translate("Medicine"), [
	ItemID.bandage,
	ItemID.emergency_bandage,
	ItemID.plaster,
	ItemID.pain_killer,
	ItemID.small_medkit,
   ItemID.medkit,
   ItemID.big_medkit
]);




// file: items/weapon/knifes.js

﻿//Combat Knife
IDRegistry.genItemID("combat_knife");
Item.createItem("combat_knife", "Combat Knife", {name: "Combat_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("combat_knife", {durability: 1024, level: 1, efficiency: 1, damage: 8, enchantability: 14});
ToolLib.setTool(ItemID.combat_knife, "combat_knife", ToolType.sword);

//Tectical Knife
IDRegistry.genItemID("tactical_knife");
Item.createItem("tactical_knife", "Tactical Knife", {name: "Tactical_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("tactical_knife", {durability: 1024, level: 1, efficiency: 1, damage: 9, enchantability: 14});
ToolLib.setTool(ItemID.tactical_knife, "tactical_knife", ToolType.sword);

//Army Knife
IDRegistry.genItemID("army_knife");
Item.createItem("army_knife", "Army Knife", {name: "Army_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("army_knife", {durability: 1024, level: 1, efficiency: 1, damage: 10, enchantability: 14});
ToolLib.setTool(ItemID.army_knife, "army_knife", ToolType.sword);

Item.addCreativeGroup("knifes", Translation.translate("Knifes"), [
	ItemID.combat_knife,
	ItemID.tactical_knife,
	ItemID.army_knife
]);




// file: blocks/sandbags.js

﻿Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 5,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
   translucency: 0
}, "sandbag");

//Desert Sandbags
IDRegistry.genBlockID("desert_sandbags");
Block.createBlock("desert_sandbags", [{
   name: "Desert Sandbags",
   texture: [["Desert_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("desert_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.desert_sandbags, "stone");

//Forest Sandbags
IDRegistry.genBlockID("forest_sandbags");
Block.createBlock("forest_sandbags", [{
   name: "Forest Sandbags",
   texture: [["Forest_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("forest_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.forest_sandbags, "stone");


//Snow Sandbags
IDRegistry.genBlockID("snow_sandbags");
Block.createBlock("snow_sandbags", [{
   name: "Snow Sandbags",
   texture: [["Snow_Sandbags", 0]],
   inCreative: true
}], "sandbag");
Block.registerDropFunction("snow_sandbags",
   function(coords, blockID){
	  return [[blockID, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.snow_sandbags, "stone");

Item.addCreativeGroup("sandbags", Translation.translate("Sandbags"), [
	BlockID.desert_sandbags,
	BlockID.forest_sandbags,
	BlockID.snow_sandbags
]);




// file: blocks/reinforced.js

//Reinforced Stone
IDRegistry.genBlockID("reinforced_stone");
Block.createBlock("reinforced_stone", [{
   name: "Reinforced Stone",
   texture: [["Reinforced_Stone", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 24,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.reinforced_stone, "stone", 2, true);
Block.setDestroyLevel("reinforced_stone", 2);

//Reinforced Iron
IDRegistry.genBlockID("reinforced_iron");
Block.createBlock("reinforced_iron", [{
   name: "Reinforced Iron",
   texture: [["Reinforced_Iron", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 32,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.reinforced_iron, "stone", 2, true);
Block.setDestroyLevel("reinforced_iron", 3);

//Reinforced Glass
IDRegistry.genBlockID("reinforced_glass");
Block.createBlock("reinforced_glass", [{
   name: "Reinforced Glass",
   texture: [["Reinforced_Glass", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 16,
	explosionres: 150,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.reinforced_glass, "stone", 2, true);
Block.setDestroyLevel("reinforced_glass", 2);

Item.addCreativeGroup("reinforced", Translation.translate("Reinforced"), [
	BlockID.reinforced_stone,
	BlockID.reinforced_iron,
	BlockID.reinforced_glass
]);




// file: blocks/windows.js

﻿//Desert Window
IDRegistry.genBlockID("desert_window");
Block.createBlock("desert_window", [{
   name: "Desert Window",
   texture: [["Desert_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.desert_window, "stone", 1, true);
Block.setDestroyLevel("desert_window", 2);

//Forest Window
IDRegistry.genBlockID("forest_window");
Block.createBlock("forest_window", [{
   name: "Forest Window",
   texture: [["Forest_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.forest_window, "stone", 1, true);
Block.setDestroyLevel("forest_window", 2);

//Snow Window
IDRegistry.genBlockID("snow_window");
Block.createBlock("snow_window", [{
   name: "Snow Window",
   texture: [["Snow_Window", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 4,
	explosionres: 4,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.snow_window, "stone", 1, true);
Block.setDestroyLevel("snow_window", 2);

Item.addCreativeGroup("windows", Translation.translate("Windows"), [
	BlockID.desert_window,
	BlockID.forest_window,
	BlockID.snow_window
]);




// file: blocks/markup.js

﻿//Keep Clear
IDRegistry.genBlockID("keep_clear");
Block.createBlock("keep_clear", [{
   name: "Keep Clear",
   texture: [["Keep_Clear", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 24,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.keep_clear, "stone", 2, true);
Block.setDestroyLevel("keep_clear", 2);

//Keep Clear Another
IDRegistry.genBlockID("keep_clear_another");
Block.createBlock("keep_clear_another", [{
   name: "Keep Clear",
   texture: [["Keep_Clear_Another", 0]],
   inCreative: true
}],
{
	base: 1,
	solid: true,
	destroytime: 24,
	explosionres: 150,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
});
ToolAPI.registerBlockMaterial(BlockID.keep_clear_another, "stone", 2, true);
Block.setDestroyLevel("keep_clear_another", 2);

//Hazard Glass
IDRegistry.genBlockID("hazard_glass");
Block.createBlock("hazard_glass", [{
   name: "Hazard Glass",
   texture: [["Hazard_Glass", 0]],
   inCreative: true
}],
{
	base: 1,
	destroytime: 12,
	explosionres: 150,
	renderlayer: 1
});
ToolAPI.registerBlockMaterial(BlockID.hazard_glass, "stone", 2, true);
Block.setDestroyLevel("hazard_glass", 2);

Item.addCreativeGroup("markup", Translation.translate("Markup"), [
	BlockID.keep_clear,
	BlockID.keep_clear_another,
	BlockID.hazard_glass
]);




// file: translate.js

﻿Translation.addTranslation("Bandage", {
   ru: "Повязка"
});
Translation.addTranslation("Emergency Bandage", {
   ru: "Бинт"
});
Translation.addTranslation("Plaster", {
   ru: "Пластырь"
});
Translation.addTranslation("Pain Killer", {
   ru: "Обезболивающее"
});
Translation.addTranslation("Small Medkit", {
   ru: "Маленькая аптечка"
});
Translation.addTranslation("Medkit", {
   ru: "Аптечка"
});
Translation.addTranslation("Big Medkit", {
   ru: "Большая аптечка"
});
Translation.addTranslation("Desert Camouflage", {
   ru: "Пустынный камуфляж"
});
Translation.addTranslation("Forest Camouflage", {
   ru: "Лесной камуфляж"
});
Translation.addTranslation("Snow Camouflage", {
   ru: "Снежный камуфляж"
});
Translation.addTranslation("Cloth", {
   ru: "Ткань"
});
Translation.addTranslation("Desert Camouflage Cloth", {
   ru: "Пустынная камуфляжная ткань"
});
Translation.addTranslation("Forest Camouflage Cloth", {
   ru: "Лесная камуфляжная ткань"
});
Translation.addTranslation("Snow Camouflage Cloth", {
   ru: "Снежная камуфляжная ткань"
});
Translation.addTranslation("Knifes", {
   ru: "Ножи"
});
Translation.addTranslation("Combat Knife", {
   ru: "Боевой нож"
});
Translation.addTranslation("Tactical Knife", {
   ru: "Тактический нож"
});
Translation.addTranslation("Army Knife", {
   ru: "Армейский нож"
});
Translation.addTranslation("Medicine", {
   ru: "Лекарства"
});
Translation.addTranslation("Sandbags", {
   ru: "Мешки с песком"
});
Translation.addTranslation("Desert Sandbags", {
   ru: "Мешки с песком"
});
Translation.addTranslation("Forest Sandbags", {
   ru: "Мешки с песком"
});
Translation.addTranslation("Snow Sandbags", {
   ru: "Мешки с песком"
});
Translation.addTranslation("Markup", {
   ru: "Разметка"
});
Translation.addTranslation("Keep Clear", {
   ru: "Предупреждающая зона"
});
Translation.addTranslation("Hazard Glass", {
   ru: "Предупреждающее стекло"
});
Translation.addTranslation("Windows", {
   ru: "Окна"
});
Translation.addTranslation("Desert Window", {
   ru: "Пустынное окно"
});
Translation.addTranslation("Forest Window", {
   ru: "Лесное окно"
});
Translation.addTranslation("Snow Window", {
   ru: "Снежное окно"
});
Translation.addTranslation("Reinforced", {
   ru: "Бронированные блоки"
});
Translation.addTranslation("Reinforced Stone", {
   ru: "Бронированный камень"
});
Translation.addTranslation("Reinforced Iron", {
   ru: "Армированное железо"
});
Translation.addTranslation("Reinforced Glass", {
   ru: "Бронестекло"
});




