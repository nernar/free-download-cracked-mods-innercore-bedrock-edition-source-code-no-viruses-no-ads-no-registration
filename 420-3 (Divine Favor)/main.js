/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 20
*/



// file: header.js

importLib("CIM", '*');
IMPORT("NativeAPI");
//Added colors
var Color = {
	AQUA: "§b",
	BEGIN: "§",
	BLACK: "§0",
	BLUE: "§9",
	BOLD: "§l",
	DARK_AQUA: "§3",
	DARK_BLUE: "§1",
	DARK_GRAY: "§8",
	DARK_GREEN: "§2",
	DARK_PURPLE: "§5",
	DARK_RED: "§4",
	GOLD: "§6",
	GRAY: "§7",
	GREEN: "§a",
	LIGHT_PURPLE: "§d",
	RED: "§c",
	RESET: "§r",
	WHITE: "§f",
	YELLOW: "§e"
}

function getInformation() {
	return {
		name: "Divine Favor",
		author: "TooManyMods",
		version: "0.6.2",
		description: "Magic, spirits and other..."
	};
};

var NetworkReader = {
	readText: function (url) {
		var reader = new java.io.BufferedReader(new java.io.InputStreamReader(java.net.URL(url).openStream(), "UTF-8"));
		var text = "";
		var temp = "";
		while ((temp = reader.readLine()) != null) {
			text+=temp;
		}
		reader.close();
		return text;
	}
	// readText: function (url) {
	// 	return this.readTextArray(url).join("\n");
	// }
};

var Updater = {
	source: "https://raw.githubusercontent.com/ToxesFoxes/DivineFavor/master/mod.info",
	check: function() {
		new java.lang.Thread(new java.lang.Runnable({
			run: function () {
				try {
					// Server side info
					var githubVer = NetworkReader.readText(Updater.source);
					// Client side info
					var information = getInformation();
					var curVer = information.version;
					var obj = eval('var ver=' + githubVer);
					obj = ver["version"];
					if (curVer === obj) {
						obj = "No update found";
					} else {
						obj = "Please update to new version - "+obj;
					}
					Logger.Log(obj, "Divine Favor", "Updater");
				} catch (e) { Logger.LogError(e) }
			}
		})).start();
	}
};

try {
	Updater.check();
} catch (e) { Logger.LogError(e) }




// file: translations.js

// talismans
translateRu("Usable", "Готов");
translateRu("Unusable", "Не готов");
translateRu("Spirit: ", "Дух: ");
translateRu("Favor: ", "Исполнитель:");
translateRu("Favor cost: ", " Стоимость исполнения: ");
translateRu("talisman", "талисман");
translateRu(" is active", " прилетел и активен");
translateRu(" is inactive", " улетел");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");
translateRu("", "");




// file: Api's/FileApi.js

/*
	(╯°□°）╯︵ ┻━┻
*/
var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var sdcard = android.os.Environment.getExternalStorageDirectory();
var FileAPI={
	getName: function(dir){
		let name = new File(dir).name;
		return(name.replace('.png', ''));
	},
	select:function(dir,Name){
		return (new File(dir,Name));
	},
	createNewDir:function(dir, newDirName){
		return (new File(dir, newDirName).mkdir());
	},
	exists:function(file){
		return file.exist();
	},
	create:function(path, name){
		new File(path, name).createNewFile();
		return File;
	},
	deleteF:function(path){
		try{var filed = new java.io.File(path);
			if(filed.isDirectory()){
			var directoryFiles = filed.listFiles();
			for(var i in directoryFiles){
				FileAPI.deleteF(directoryFiles[i].getAbsolutePath());
			}
			filed.deleteF();
		}
			if(filed.isFile()){
			filed.deleteF();}
		}catch(e){
			print(e);
		}
	},
	read:function(selectedFile){
		var readed=(new BufferedReader(new FileReader(selectedFile)));
		var data=new StringBuilder();
		var string;
		while((string=readed.readLine())!=null){
			data.append(string);
			data.append('\n');
		}
		return data.toString();
	},
	readLine:function(selectedFile, line){
		var readT=new FileAPI.read(selectedFile);
		var lineArray=readT.split('\n');
		return lineArray[line-1];
	},
	write:function(selectedFile , text){
		FileAPI.rewrite(selectedFile,(new FileAPI.read(selectedFile)) + text);
	},
	rewrite:function(selectedFile, text){
		var writeFOS = new FOS(selectedFile);
		writeFOS.write(new String(text).getBytes());
	},
	getFilesList:function(path, endsWith){
		var c = [], d = (new java.io.File(path)).listFiles();
		for(var e = 0; e < d.length; e++) {
			var f = d[e];
			f.isDirectory() || endsWith && !f.getName().endsWith(endsWith) || c.push(f.getName())
		}
		return c
	},
	//my
	filesIfIsDirectory:function(path) {
		var files = new java.io.File(path);
		if (files.isDirectory()) {
			return files.listFiles();
		}
	},
	checkDir:function(name){
		for(let i in name){
			if(FileTools.isExists(__dir__+name[i])==false)
			FileAPI.createNewDir(__dir__, name[i]);
		}
	},
	list:function(dir) {
		let list = [];
		for(let i in dir){
			list.push(FileTools.GetListOfFiles(__dir__+dir[i]));
		}
		return list;
	},
	getFilesCount:function(list) {
		let count=0;
		for(let i in list)count++;
		return count;
	},
	getGuiItems: function(gui){
		let count = 0;
		for(let i in gui.elements){
			if(gui.elements[i]!=null){count++;}
		}
		if(count>0)return true; else return false;
	}
};
/*
	┬─┬ノ( º _ ºノ)
*/




// file: Api's/GunRegistry.js

IMPORT("Inventory");
//some stuff
var Color = android.graphics.Color;
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;

var ctx = UI.getContext();

function runAsUI(func) {
  ctx.runOnUiThread(new java.lang.Runnable({
    run: function () {
      try {
        func();
      } catch (err) {
        Game.message(err);
        alert(err);
      }
    }
  }));
};

var t_bool = java.lang.Boolean.TYPE;
var t_int = java.lang.Integer.TYPE;
var t_double = java.lang.Double.TYPE;
var t_string = java.lang.String;

var nativeApi = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeItem", true, UI.getContext().getClass().getClassLoader());
// var pressBack = java.lang.Class.forName("com.mojang.minecraftpe.MainActivity", true, UI.getContext().getClass().getClassLoader());

var overrideItemIcon = nativeApi.getMethod("overrideItemIcon", t_string, t_int);
var setItemRequiresIconOverride = nativeApi.getMethod("setItemRequiresIconOverride", t_int, t_bool);
Item.setItemRequiresIconOverride = function(id, bool){
  setItemRequiresIconOverride.invoke(null, new java.lang.Integer(id), bool);
}
Item.overrideItemIcon = function(name, index, id){
  try{overrideItemIcon.invoke(null, name, new java.lang.Integer(index));}catch(e){}
  Game.message("Name: "+name+", index: "+index)
}
var GunRegistry = {
  guns: [],
  bullets: [],
  hurt: [],
  inGame: false,
  registerGun: function (gun) {
    gun.shooting = false;
    GunRegistry.guns.push(gun);
    Item.setItemRequiresIconOverride(gun.gun, true);
    Item.registerNoTargetUseFunction(gun.gun, GunRegistry.animatedShoot);
    // Item.registerUseFunction(gun.gun, GunRegistry.animatedShoot);
    Item.registerIconOverrideFunction(gun.gun, function (item, name) {
      return { name: gun.texture, meta: gun.state }
    });
    Item.setEnchantType(gun.gun, 32, 14);
  },
  getGun: function (gunId) {
    for (var i in GunRegistry.guns) {
      let gun = GunRegistry.guns[i];
      if (gun.gun == gunId)
        return gun;
    }
    return false;
  },
  shoot: function () {
    let gun = GunRegistry.getGun(Player.getCarriedItem().id);
    let coords = Entity.getPosition(Player.get());
    let lookAngle = Entity.getLookAngle(Player.get());
    let velocity = {
      x: -Math.sin(lookAngle.yaw) * gun.speed,
      y: Math.sin(lookAngle.pitch) * gun.speed,
      z: Math.cos(lookAngle.yaw) * gun.speed
    }
    let entity = Entity.spawn(coords.x, coords.y, coords.z, 80);
    GunRegistry.bullets.push({
      entity: entity,
      damage: gun.damage
    });
    Entity.setSkin(entity, gun.skin);
    Entity.setVelocity(entity, velocity.x, velocity.y, velocity.z);
  },
  runAnim: function(gun) {
    if(PlayerInventory.haveItem(gun.bullet)){
      gun.state++;
      if (gun.state == gun.variations) {
        gun.state = 0;
        if (PlayerInventory.retrieveItem(gun.bullet)) {
          GunRegistry.shoot();
          PlayerInventory.damageItem(1);
        }
        gun.shooting = false;
      }
    }else{
      gun.shooting = false;
    }
  },
  animatedShoot: function() {
    let gun = GunRegistry.getGun(Player.getCarriedItem().id);
    gun.shooting=true;
  },
  showAim: function (gun) {
    if (GunRegistry.aimShown || !GunRegistry.inGame) return;
    runAsUI(function () {
      GunRegistry.aimShown = true;
      GunRegistry.aimImage.setImageBitmap(gun.aim);
      GunRegistry.windowAim.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
    });
  },
  hideAim: function () {
    if (!GunRegistry.aimShown) return;
    runAsUI(function () {
      GunRegistry.windowAim.dismiss();
      GunRegistry.aimShown = false;
    });
    Player.resetFov();
  }
};

runAsUI(function () {
  //Main layout of the whole window
  var layoutMain = new LinearLayout(ctx);
  layoutMain.setOrientation(0);
  layoutMain.setGravity(Gravity.CENTER);
  var params = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);

  layoutMain.setLayoutParams(params);
  GunRegistry.aimImage = new android.widget.ImageView(ctx);
  layoutMain.addView(GunRegistry.aimImage);

  //Popup Window for displaying the staff
  GunRegistry.windowAim = new android.widget.PopupWindow(layoutMain, LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
  GunRegistry.windowAim.setTouchable(false);
  GunRegistry.windowAim.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
  GunRegistry.bullets = GunRegistry.bullets.filter(function (bullet) {
    if (bullet.entity == projectile) {
      Entity.remove(projectile);
      if (target.entity != -1) {
        GunRegistry.hurt.push({
          entity: target.entity,
          damage: bullet.damage
        });
      }
      return false;
    }
    return true;
  });
});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
  var entity = -1;
  let gun = GunRegistry.getGun(Player.getCarriedItem().id);
  GunRegistry.hurt = GunRegistry.hurt.filter(function (ent) {
    if (ent.entity == victim) {
      entity = ent;
      return false;
    }
    if (entity != -1) {
      Entity.damageEntity(entity.entity, entity.damage);
      Entity.addEffect(entity.entity, gun.effect, 1, gun.efftime, false, false);
      Entity.addEffect(Player.get(), gun.playereff, 1, gun.plefftime, false, false);
      Entity.setFire(entity.entity, gun.ftime);
      Game.prevent();
    }
    return true;
  })
});

Callback.addCallback("tick", function () {
  let gun = GunRegistry.getGun(Player.getCarriedItem().id);
  let ticks = World.getThreadTime();
  if (ticks % 4 === 0) {
    if (gun) {
      if (gun != GunRegistry.currentGun) {
        GunRegistry.currentGun = gun;
        GunRegistry.hideAim();
      }
      if(gun.shooting){
        runAsUI(function () { GunRegistry.runAnim(gun) });
        }
      GunRegistry.showAim(gun);
    } else {
      GunRegistry.hideAim();
    }
  }
});


Callback.addCallback("NativeGuiChanged", function (screenName) {
  if (screenName == "hud_screen" ||
    screenName == "in_game_play_screen") {
    GunRegistry.inGame = true;
  } else {
    GunRegistry.inGame = false;
    GunRegistry.hideAim();
  }
});

Callback.addCallback("DestroyBlockStart", function () {
  if (GunRegistry.getGun(Player.getCarriedItem().id) != false) {
    Game.prevent();
  }
});




// file: mod/gui/guis.js

var pouch = new UI.StandartWindow({
	standart: {header: {text: {text: "Ritual pouch"}},
	background: {color: android.graphics.Color.parseColor("#b3b3b3")}, inventory: {standart: true}},
	drawing: [],
	elements: {
		"slot_0": {type: "slot", x: 490, y: 270, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_1": {type: "slot", x: 550, y: 270, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_2": {type: "slot", x: 610, y: 270, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_3": {type: "slot", x: 550, y: 210, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_4": {type: "slot", x: 490, y: 150, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_5": {type: "slot", x: 550, y: 150, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
		"slot_6": {type: "slot", x: 610, y: 150, size: 60, visual: false, bitmap: "custom.slot_default",  needClean: true, isTransparentBackground: true},
	}
});




// file: mod/gui/reg.js

CIM.reg(ItemID.ritual_pouch, {gui: pouch, name: "Ritual Pouch"});




// file: mod/spirits.js

var spirit = {
	list: ["Arbow", "Blizrabi", "Endererer", "Loon", "Materia", "Neblaze", "Redwind", "Romol", "Squarefury", "Timbler"],
	spirits: {
		"Arbow":      {id: 0, start: 11, end: 15, active: false, energy: 0, maxEnergy: 50}, // spiritID: 0
		"Blizrabi":   {id: 1, start: 14, end: 18, active: false, energy: 0, maxEnergy: 50}, // spiritID: 1
		"Endererer":  {id: 2, start: 19, end: 23, active: false, energy: 0, maxEnergy: 50}, // spiritID: 2
		"Loon":       {id: 3, start: 1,  end: 4 , active: false, energy: 0, maxEnergy: 50}, // spiritID: 3
		"Materia":    {id: 4, start: 5,  end: 9 , active: false, energy: 0, maxEnergy: 50}, // spiritID: 4
		"Neblaze":    {id: 5, start: 10, end: 14, active: false, energy: 0, maxEnergy: 50}, // spiritID: 5
		"Redwind":    {id: 6, start: 9,  end: 12, active: false, energy: 0, maxEnergy: 50}, // spiritID: 6
		"Romol":      {id: 7, start: 7,  end: 10, active: false, energy: 0, maxEnergy: 50}, // spiritID: 7
		"Squarefury": {id: 8, start: 22, end: 2 , active: false, energy: 0, maxEnergy: 50}, // spiritID: 8
		"Timbler":    {id: 9, start: 18, end: 22, active: false, energy: 0, maxEnergy: 50}  // spiritID: 9
	},
	setActive: function (id) {
		if (spirit.getActive(id) == false) { 
			spirit.getProp(id).active = true;
			spirit.informate(id);
		}
	},
	setInactive: function (id) {
		if (spirit.getActive(id) == true) {
			spirit.getProp(id).active = false;
			spirit.informate(id);
		}
	},
	getActive: function (id) {
		return spirit.getProp(id).active;
	},
	getNameByID: function (id) {
		return spirit.list[id];
	},
	getProp: function(id){
		return spirit.spirits[spirit.list[id]];
	},
	informate: function(id) {
		if (spirit.getActive(id) != false) Game.message(getTranslate("Spirit: ") + spirit.list[id] + getTranslate(" is active"));
		if (spirit.getActive(id) != true) Game.message(getTranslate("Spirit: ") + spirit.list[id] + getTranslate(" is inactive"));
	},
	recieveEnergy: function(id, value){
		if(spirit.getProp(id).energy > value)spirit.getProp(id).energy-=value;
	},
	addEnergy: function(id, value) {
		if (spirit.getProp(id).energy < value && spirit.getProp(id).energy + value < spirit.getProp(id).maxEnergy) spirit.getProp(id).energy += value;
	},
	setMaxEnergy: function(id, value) {
		spirit.getProp(id).maxEnergy+=value;
	}
}
Callback.addCallback("tick", function () {
	let ticks = World.getThreadTime();
	if (ticks % 40 == 0) {
		var worldTime = (World.getWorldTime())%24000;
		for (let id in spirit.list) {
			var start = spirit.getProp(id).start * 1000,
				end = spirit.getProp(id).end * 1000;
			if ((worldTime > start && worldTime < end ) && spirit.getProp(id).active != true) {
				spirit.setActive(id);
				break;
			} else if ((worldTime > end || worldTime < start)  && spirit.getProp(id).active != false) {
				spirit.setInactive(id);
				break;
			}
		}
	}
});




// file: mod/items/regItems.js

function translateRu(name, ru) {
    return Translation.addTranslation(name, {ru: ru});
}
function getTranslate(name) {
    return Translation.translate(name);
}
function regItem(texture, name, stack, tooltip) {
    IDRegistry.genItemID(texture);
    Item.createItem(texture, name, { name: texture }, { stack: stack });
    if(tooltip)Item.registerNameOverrideFunction(ItemID[texture], function (item, name) {
        return name + tooltip;
    });
    return texture;
}
// regItem("", "", 1);
// regex \);\nItem\.createItem\("(.*?)"
// regex \{ name: "(.*?)" \}, \{ stack: 
// regex ); to);
// regex IDRegistry\.genItemID\(to regItem(


regItem("charcoal_blend", "Charcoal blend", 64);
regItem("ender_pearl_blend", "Ender pearl blend", 64);
regItem("ethereal_goo_blend", "Ethereal goo blend", 64);
regItem("feathers_blend", "Feathers blend", 64);
regItem("fleshy_blend", "Fleshy blend", 64);
regItem("flint_blend", "Flint blend", 64);
regItem("lapis_blend", "Lapis blend", 64);
regItem("redstone_blend", "Redstone blend", 64);
regItem("snow_blend", "Snow blend", 64);
regItem("wood_blend", "Wood blend", 64);
regItem("ice_arrow", "Ice arrow", 64);
regItem("memory_drop", "Memory drop", 64);
regItem("blade_green", "Green Spell blade", 1);
regItem("blade_red", "Red Spell blade", 1);
regItem("pick_blue", "Blue Spell pickaxe", 1);
regItem("pick_orange", "Orange Spell pickaxe", 1);
regItem("banishing_wand", "Banishing wand", 1);
regItem("paint", "Paint Ethereal Brush", 1);
regItem("big_vial", "Goo vial", 64);
Item.registerIconOverrideFunction(ItemID.big_vial, function (item, name) {
    return { name: "big_vial", meta: item.data }
}); regItem("medium_vial", "Goo vial", 1);
Item.registerIconOverrideFunction(ItemID.medium_vial, function (item, name) {
    return { name: "medium_vial", meta: item.data }
});
regItem("small_vial", "Goo vial", 1);
Item.registerIconOverrideFunction(ItemID.small_vial, function (item, name) {
    return { name: "small_vial", meta: item.data }
});
regItem("mystic_architect_stick", "Mystic architect stick", 1);
regItem("contract_binder", "Contract binder", 1);
regItem("grimoire", "Grimoire", 1);
regItem("memory_pouch", "Memory pouch", 1);
regItem("capacity_major", "Capacity major contract", 1);
regItem("capacity_minor", "Capacity minor contract", 1);
regItem("creative", "Creative contract", 1);
regItem("inform", "Inform contract", 1);
regItem("regen_major", "Regen major contract", 1);
regItem("regen_minor", "Regen minor contract", 1);
regItem("milky_apple", "Milky apple", 1);
regItem("ritual_pouch", "Ritual pouch", 1);
regItem("stone_ball", "Stone ball", 1);
// regItem("roots", "Roots Cursed Arrow", 1);
regItem("book_green", "Book green Spell blade", 1);
regItem("book_red", "Book red Spell blade", 1);
regItem("spell_bow_book", "Spell bow book", 1);
regItem("book_blue", "Book blue Spell pickaxe", 1);
regItem("book_orange", "Book orange Spell pickaxe", 1);
// regItem("hand_swap", "Hand swap Spell arrow", 1);
regItem("bone_key", "Bone key", 1);
regItem("caving_rope", "Caving rope", 1);
// regItem("clock", "Clock", 1);
regItem("immaterial_guide", "Immaterial guide", 1);
regItem("invite_gem", "Invite gem", 1);
regItem("invite_pebble", "Invite pebble", 1);
regItem("marked_glass", "Marked glass", 1);
regItem("storage_gem", "Storage gem", 1);
regItem("warp_gem", "Warp gem", 1);
regItem("warp_pebble", "Warp pebble", 1);





// file: mod/items/regTalismans.js

var talismans = {
	types: ["Arrow", "Blade", "Spell", "Tool"],
	textures: ["arrow", "blade", "spell", "tool"],
	talismanTooltip: function (name, info){
		var isActive = spirit.getActive(info.spiritID);
		var usable = getTranslate("Unusable");
		if (isActive == true) { usable = getTranslate("Usable") } else usable = getTranslate("Unusable");
		var tooltip = "\n" + getTranslate("Spirit: ") + spirit.getNameByID(info.spiritID) + " " + usable + "\n" +getTranslate("Favor cost: ") + info.cost;
		return name + tooltip;
	},
	regTalisman: function (obj, en, ru, func) { //([type, texture, spiritID, cost], "en", "ru", function(){func})
		var info = {}; info["type"] = obj[0], info["texture"] = obj[1], info["spiritID"] = obj[2], info["cost"] = obj[3];
		var itemTexture = info.texture + "_" + info.type + "_talisman";
		var itemName = en;
		var id = regItem(itemTexture, itemName, 1);
		Item.registerNameOverrideFunction(ItemID[id], function(item, name) {
			return talismans.talismanTooltip(name, info);
		});
		Item.registerUseFunction(id, function() {
			talismans.useTalisman(info.spiritID, info.cost, func);
		});
		if(ru!="ru")translateRu(en, ru);
	},
	useTalisman: function(id, cost, func){
		
	}
}

// Translation.translate("Power Tier: ")
// Translation.addTranslation("Batpack", {ru: "Аккумуляторный ранец", es: "Mochila de Baterías", pt: "Mochila de Baterias", zh: "电池背包"});




// file: mod/items/bow.js

IDRegistry.genItemID("spell_bow");
Item.createItem("spell_bow", "Spell bow", {name: "spell_bow", meta: 0}, {stack: 1});
Item.describeItem(ItemID.spell_bow, {
  toolRender: false,
  maxDamage: 250,
  useAnimation: 4
});
GunRegistry.registerGun({
  gun: ItemID.spell_bow,
  texture: "spell_bow",
  bullet: 262,
  skin: "entity/projectiles/arrow.png",
  speed: 6,
  damage: 4,
  aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
  variations: 4,
  state: 0
});




// file: mod/items/shards.js

regItem("end_soul_shard", "End Soul shard", 64);
regItem("mind_soul_shard", "Mind Soul shard", 64);
regItem("nether_soul_shard", "Nether Soul shard", 64);
regItem("peace_soul_shard", "Peace Soul shard", 64);
regItem("undeath_soul_shard", "Undeath Soul shard", 64);
regItem("water_soul_shard", "Water Soul shard", 64);
regItem("wild_soul_shard", "Wild Soul shard", 64);
regItem("will_soul_shard", "Will Soul shard", 64);
regItem("wither_soul_shard", "Wither Soul shard", 64);




// file: mod/items/sort/ropes.js

regItem("barrier_rope", "Barrier rope", 64);
regItem("explosive_rope", "Explosive rope", 64);
regItem("glowing_rope", "Glowing rope", 64);
regItem("guide_rope", "Guide rope", 64);
regItem("inert_rope", "Inert rope", 64);
regItem("luminous_rope", "Luminous rope", 64);
regItem("teleporting_rope", "Teleporting rope", 64);




// file: mod/items/sort/wishing_stones.js

regItem("arbow_wishing_stone", "Arbow Wishing stone", 64);
regItem("blizrabi_wishing_stone", "Blizrabi Wishing stone", 64);
regItem("endererer_wishing_stone", "Endererer Wishing stone", 64);
regItem("loon_wishing_stone", "Loon Wishing stone", 64);
regItem("materia_wishing_stone", "Materia Wishing stone", 64);
regItem("neblaze_wishing_stone", "Neblaze Wishing stone", 64);
regItem("redwind_wishing_stone", "Redwind Wishing stone", 64);
regItem("romol_wishing_stone", "Romol Wishing stone", 64);
regItem("squarefury_wishing_stone", "Squarefury Wishing stone", 64);
regItem("timber_wishing_stone", "Timber Wishing stone", 64);




// file: mod/items/sort/calling_stones.js

regItem("arbow_calling_stone", "Arbow Calling Stone", 1);
regItem("blizrabi_calling_stone", "Blizrabi Calling Stone", 1);
regItem("endererer_calling_stone", "Endererer Calling Stone", 1);
regItem("loon_calling_stone", "Loon Calling Stone", 1);
regItem("materia_calling_stone", "Materia Calling Stone", 1);
regItem("neblaze_calling_stone", "Neblaze Calling Stone", 1);
regItem("redwind_calling_stone", "Redwind Calling Stone", 1);
regItem("romol_calling_stone", "Romol Calling Stone", 1);
regItem("squarefury_calling_stone", "Squarefury Calling Stone", 1);
regItem("timber_calling_stone", "Timber Calling Stone", 1);




// file: mod/items/sort/favor_marks.js

regItem("arbow_favor_mark", "Arbow Favor mark", 1);
regItem("blizrabi_favor_mark", "Blizrabi Favor mark", 1);
regItem("endererer_favor_mark", "Endererer Favor mark", 1);
regItem("loon_favor_mark", "Loon Favor mark", 1);
regItem("materia_favor_mark", "Materia Favor mark", 1);
regItem("neblaze_favor_mark", "Neblaze Favor mark", 1);
regItem("redwind_favor_mark", "Redwind Favor mark", 1);
regItem("romol_favor_mark", "Romol Favor mark", 1);
regItem("squarefury_favor_mark", "Squarefury Favor mark", 1);
regItem("timber_favor_mark", "Timber Favor mark", 1);




// file: mod/items/sort/arrow_talismans.js

//{type: , texture: , spiritID: , cost}, "ru", function(){func}
talismans.regTalisman(["arrow", "anti_gravity", 0, 5], "Anti gravity arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "armor_corrosion", 9, 100], "Armor corrosion", "ru", function () {  });
talismans.regTalisman(["arrow", "blast", 5, 30], "Blast arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "blink", 2, 10], "Blink arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "climbing", 0, 10], "Climbing arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "crawling_mist", 9, 80], "Crawling mist", "ru", function () {  });
talismans.regTalisman(["arrow", "cripple", 9, 100], "Cripple", "ru", function () {  });
talismans.regTalisman(["arrow", "destructive_1", 0, 10], "Destructive arrow I", "ru", function () {  });
talismans.regTalisman(["arrow", "destructive_2", 0, 100], "Destructive arrow II", "ru", function () {  });
talismans.regTalisman(["arrow", "destructive_3", 0, 300], "Destructive arrow III", "ru", function () {  });
talismans.regTalisman(["arrow", "disarm", 0, 80], "Disarm", "ru", function () {  });
talismans.regTalisman(["arrow", "explosive", 5, 120], "Explosive arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "extinguish", 1, 10], "Extinguish fire", "ru", function () {  });
talismans.regTalisman(["arrow", "fiery_mark", 9, 120], "Fiery mark", "ru", function () {  });
talismans.regTalisman(["arrow", "fill_lungs", 9, 100], "Fill lungs", "ru", function () {  });
talismans.regTalisman(["arrow", "flak", 0, 80], "Flak arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "force", 0, 120], "", "ru", function () {  });
talismans.regTalisman(["arrow", "gamble", 0, 5], "Gamble arrow", "ru", function(){  });
talismans.regTalisman(["arrow", "hand_swap", 0, 60], "Hand swap", "ru", function () {  });
talismans.regTalisman(["arrow", "high_speed", 0, 40], "High speed arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "hollow_leg", 9, 40], "Hollow leg", "ru", function () {  });
talismans.regTalisman(["arrow", "hover_bubble", 0, 150], "Hover bubble arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "hyper_speed", 0, 400], "Hyper speed arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "ice_breaker", 1, 60], "Ice breaker", "ru", function () {  });
talismans.regTalisman(["arrow", "ice_sphere", 1, 60], "Ice sphere", "ru", function () {  });
talismans.regTalisman(["arrow", "impulse", 0, 30], "Impulse arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "incendiary", 0, 40], "Incendiary arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "life_steal", 3, 20], "Life steal arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "limp_leg", 9, 120], "Limp leg", "ru", function () {  });
talismans.regTalisman(["arrow", "lucky_arrow", 30, 30], "Lucky arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "mine", 0, 80], "Mine arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "nether", 2, 10], "Nether swap", "ru", function () {  });
talismans.regTalisman(["arrow", "nuke", 5, 400], "Nuke arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "petrification", 9, 100], "Petrification", "ru", function () {  });
talismans.regTalisman(["arrow", "piercing", 0, 40], "Piercing arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "reinforced_1", 8, 10], "Reinforced arrow I", "ru", function () {  });
talismans.regTalisman(["arrow", "reinforced_2", 8, 1000], "Reinforced arrow II", "ru", function () {  });
talismans.regTalisman(["arrow", "reinforced_3", 8, 400], "Reinforced arrow III", "ru", function () {  });
talismans.regTalisman(["arrow", "ricochet", 0, 80], "Ricochet arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "roots", 9, 80], "Roots", "ru", function () {  });
talismans.regTalisman(["arrow", "skyfall", 9, 80], "Skyfall", "ru", function () {  });
talismans.regTalisman(["arrow", "sniper", 0, 80], "Sniper arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "spooky", 3, 30], "Spooky arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "stasis", 3, 80], "Stasis arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "suffocating_fumes", 9, 100], "Suffocating fumes", "ru", function () {  });
talismans.regTalisman(["arrow", "tracer", 0, 10], "Tracer arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "vacuum", 3, 80], "Vacuum arrow", "ru", function () {  });
talismans.regTalisman(["arrow", "wind", 9, 80], "Wind leash", "ru", function () {  });
talismans.regTalisman(["arrow", "yummy", 9, 140], "Yummy smell", "ru", function () {  });
talismans.regTalisman(["arrow", "zero", 0, 30], "Zero g arrow", "ru", function(){  });




// file: mod/items/sort/blade_talismans.js

talismans.regTalisman(["blade", "blade_of_snow", 1, 5], "Blade of snow", "ru", function () {  });
talismans.regTalisman(["blade", "butchering_strike", 8, 20], "Butchering strike", "ru", function () {  });
talismans.regTalisman(["blade", "confusion", 8, 20], "Confusion", "ru", function () {  });
talismans.regTalisman(["blade", "corrosion", 8, 30], "Corrosion", "ru", function () {  });
talismans.regTalisman(["blade", "crawling_mist", 9, 80], "Crawling mist", "ru", function () {  });
talismans.regTalisman(["blade", "fiery_mark", 5, 120], "Fiery mark", "ru", function () {  });
talismans.regTalisman(["blade", "fill_lungs", 9, 100], "Fill lungs", "ru", function () {  });
talismans.regTalisman(["blade", "gamble", 8, 5], "Gamble", "ru", function () {  });
talismans.regTalisman(["blade", "hand_swap", 8, 5], "Hand swap", "ru", function () {  });
talismans.regTalisman(["blade", "heavy", 8, 30], "Heavy blade", "ru", function () {  });
talismans.regTalisman(["blade", "holy", 8, 5], "Holy blade", "ru", function () {  });
talismans.regTalisman(["blade", "hungry", 8, 10], "Hungry blade", "ru", function () {  });
talismans.regTalisman(["blade", "inflame", 5, 5], "Inflame", "ru", function () {  });
talismans.regTalisman(["blade", "lucky_strike", 8, 10], "Lucky strike", "ru", function () {  });
talismans.regTalisman(["blade", "memory", 8, 5], "Memory blade", "ru", function () {  });
talismans.regTalisman(["blade", "obliteration", 8, 5], "Obliteration", "ru", function () {  });
talismans.regTalisman(["blade", "poison_coating", 8, 5], "Poison coating", "ru", function () {  });
talismans.regTalisman(["blade", "rain_sword", 1, 5], "Rain sword", "ru", function () {  });
talismans.regTalisman(["blade", "skyfall", 9, 80], "Skyfall", "ru", function () {  });
talismans.regTalisman(["blade", "suffocating_fumes", 9, 100], "Suffocating fumes", "ru", function () {  });
talismans.regTalisman(["blade", "vengeful", 8, 5], "Vengeful blade", "ru", function () {  });
talismans.regTalisman(["blade", "wind_leash", 9, 80], "Wind leash", "ru", function () {  });
talismans.regTalisman(["blade", "wither_coating", 9, 5], "Wither coating", "ru", function () {  });
talismans.regTalisman(["blade", "yummy_smell", 9, 140], "Yummy smell", "ru", function () {  });




// file: mod/items/sort/spell_talismans.js

talismans.regTalisman(["spell", "armor_of_pacifist", 1, 80000], "Armor of pacifist", "ru", function () {  });
talismans.regTalisman(["spell", "arrow_deflection", 6, 80000], "Arrow deflection", "ru", function () {  });
talismans.regTalisman(["spell", "arrow_throw", 0, 80000], "Arrow throw", "ru", function () {  });
talismans.regTalisman(["spell", "bind_ice_arrows", 1, 80000], "Bind ice arrows", "ru", function () {  });
talismans.regTalisman(["spell", "blade_of_grass", 9, 80000], "Blade of grass", "ru", function () {  });
talismans.regTalisman(["spell", "blazing_palm", 5, 80000], "Blazing palm", "ru", function () {  });
talismans.regTalisman(["spell", "blink", 2, 80000], "Blink", "ru", function () {  });
talismans.regTalisman(["spell", "blood_of_grass", 9, 80000], "Blood of grass", "ru", function () {  });
talismans.regTalisman(["spell", "bonemeal", 9, 80000], "Bonemeal", "ru", function () {  });
// talismans.regTalisman(["spell", "build_block_relative", spiritID, 80000], "Build block relative", "ru", function () {  });
talismans.regTalisman(["spell", "build_column", 4, 80000], "Build column", "ru", function () {  });
talismans.regTalisman(["spell", "build_cylinder", 4, 80000], "Build cylinder", "ru", function () {  });
talismans.regTalisman(["spell", "build_extrusion", 4, 80000], "Build extrusion", "ru", function () {  });
talismans.regTalisman(["spell", "build_floor", 4, 80000], "Build floor", "ru", function () {  });
talismans.regTalisman(["spell", "build_from_surface", 4, 80000], "Build from surface", "ru", function () {  });
talismans.regTalisman(["spell", "build_hollow_sphere", 4, 80000], "Build hollow sphere", "ru`", function () {  });
talismans.regTalisman(["spell", "build_horizontal_line", 4, 80000], "Build horizontal line", "ru", function () {  });
talismans.regTalisman(["spell", "build_sphere", 4, 80000], "Build sphere", "ru", function () {  });
talismans.regTalisman(["spell", "build_square_floor", 4, 80000], "Build square floor", "ru", function () {  });
talismans.regTalisman(["spell", "build_square_wall", 4, 80000], "Build square wall", "ru", function () {  });
talismans.regTalisman(["spell", "build_template", 4, 80000], "Build template", "ru", function () {  });
talismans.regTalisman(["spell", "build_wall", 4, 80000], "Build wall", "ru", function () {  });
talismans.regTalisman(["spell", "clock", 6, 80000], "Clock", "ru", function () {  });
talismans.regTalisman(["spell", "combustion", 5, 80000], "Combustion", "ru", function () {  });
talismans.regTalisman(["spell", "consuming_fury", 8, 80000], "Consuming fury", "ru", function () {  });
talismans.regTalisman(["spell", "copy_area", 4, 80000], "Copy area", "ru", function () {  });
talismans.regTalisman(["spell", "copy_blocks", 4, 80000], "Copy blocks", "ru", function () {  });
talismans.regTalisman(["spell", "copy_cuboid", 4, 80000], "Copy cuboid", "ru", function () {  });
talismans.regTalisman(["spell", "crushing_palm", 7, 80000], "Crushing palm", "ru", function () {  });
talismans.regTalisman(["spell", "crystalline_road", 1, 80000], "Crystalline road", "ru", function () {  });
talismans.regTalisman(["spell", "crystallize_memory", 4, 80000], "Crystallize memory", "ru", function () {  });
talismans.regTalisman(["spell", "deserialize_memory", 4, 80000], "Deserialize memory", "ru", function () {  });
talismans.regTalisman(["spell", "destroy_cuboid_remotely", 5, 80000], "Destroy cuboid remotely", "ru", function () {  });
talismans.regTalisman(["spell", "distant_spark", 5, 80000], "Distant spark", "ru", function () {  });
talismans.regTalisman(["spell", "earthen_dive", 2, 80000], "Earthen dive", "ru", function () {  });
talismans.regTalisman(["spell", "empower_axe", 7, 80000], "Empower axe", "ru", function () {  });
talismans.regTalisman(["spell", "empower_pickaxe", 7, 80000], "Empower pickaxe", "ru", function () {  });
// talismans.regTalisman(["spell", "ender_pearl", spiritID, 80000], "Ender pearl", "ru", function () {  });
talismans.regTalisman(["spell", "escape_plan", 2, 80000], "Escape plan", "ru", function () {  });
talismans.regTalisman(["spell", "ethereal_flash", 6, 80000], "Ethereal flash", "ru", function () {  });
talismans.regTalisman(["spell", "ethereal_light", 6, 80000], "Ethereal light", "ru", function () {  });
talismans.regTalisman(["spell", "evil_eye", 3, 80000], "Evil eye", "ru", function () {  });
talismans.regTalisman(["spell", "extreme_buoyancy", 1, 80000], "Extreme buoyancy", "ru", function () {  });
talismans.regTalisman(["spell", "fall_negation", 6, 80000], "Fall negation", "ru", function () {  });
talismans.regTalisman(["spell", "fins", 1, 80000], "Fins", "ru", function () {  });
talismans.regTalisman(["spell", "flood", 1, 80000], "Flood", "ru", function () {  });
talismans.regTalisman(["spell", "focused_fury", 8, 80000], "Focused fury", "ru", function () {  });
talismans.regTalisman(["spell", "follow", 3, 80000], "Follow", "ru", function () {  });
talismans.regTalisman(["spell", "frost_wave", 1, 80000], "Frost wave", "ru", function () {  });
talismans.regTalisman(["spell", "gills", 1, 80000], "Gills", "ru", function () {  });
talismans.regTalisman(["spell", "green_cycle", 7, 80000], "Green cycle", "ru", function () {  });
talismans.regTalisman(["spell", "ground_flow", 6, 80000], "Ground flow", "ru", function () {  });
talismans.regTalisman(["spell", "grudge", 8, 80000], "Grudge", "ru", function () {  });
talismans.regTalisman(["spell", "harvest", 7, 80000], "Harvest", "ru", function () {  });
talismans.regTalisman(["spell", "heat_wave", 5, 80000], "Heat wave", "ru", function () {  });
talismans.regTalisman(["spell", "hellisphere", 5, 80000], "Hellisphere", "ru", function () {  });
talismans.regTalisman(["spell", "hovering", 6, 80000], "Hovering", "ru", function () {  });
talismans.regTalisman(["spell", "ice_bubble", 1, 80000], "Ice bubble", "ru", function () {  });
// talismans.regTalisman(["spell", "ice_carving", spiritID, 80000], "Ice carving", "ru", function () {  });
talismans.regTalisman(["spell", "ice_surface", 1, 80000], "Ice surface", "ru", function () {  });
talismans.regTalisman(["spell", "ignition", 5, 80000], "Ignition", "ru", function () {  });
talismans.regTalisman(["spell", "infernal_touch", 5, 80000], "Infernal touch", "ru", function () {  });
talismans.regTalisman(["spell", "instant_dive", 1, 80000], "Instant dive", "ru", function () {  });
talismans.regTalisman(["spell", "invite_gem", 2, 80000], "Invite gem", "ru", function () {  });
talismans.regTalisman(["spell", "invite_pebble", 2, 80000], "Invite pebble", "ru", function () {  });
talismans.regTalisman(["spell", "lake_thawing", 1, 80000], "Lake thawing", "ru", function () {  });
talismans.regTalisman(["spell", "miners_focus", 7, 80000], "Miners focus", "ru", function () {  });
talismans.regTalisman(["spell", "mist_blade", 8, 80000], "Mist blade", "ru", function () {  });
talismans.regTalisman(["spell", "molten_skin", 5, 80000], "Molten skin", "ru", function () {  });
talismans.regTalisman(["spell", "nether_surge", 5, 80000], "Nether surge", "ru", function () {  });
talismans.regTalisman(["spell", "night_eye", 3, 80000], "Night eye", "ru", function () {  });
talismans.regTalisman(["spell", "obsidian_bubble", 5, 80000], "Obsidian bubble", "ru", function () {  });
talismans.regTalisman(["spell", "obsidian_road", 1, 80000], "Obsidian road", "ru", function () {  });
// talismans.regTalisman(["spell", "overblink", spiritID, 80000], "Overblink", "ru", function () {  });
// talismans.regTalisman(["spell", "overwarp", spiritID, 80000], "Overwarp", "ru", function () {  });
talismans.regTalisman(["spell", "pearl_crumbs", 2, 80000], "Pearl crumbs", "ru", function () {  });
talismans.regTalisman(["spell", "piercing_inferno", 5, 80000], "Piercing inferno", "ru", function () {  });
talismans.regTalisman(["spell", "ping", 6, 80000], "Ping", "ru", function () {  });
talismans.regTalisman(["spell", "place_block", 4, 80000], "Place block", "ru", function () {  });
talismans.regTalisman(["spell", "place_torch", 4, 80000], "Place torch", "ru", function () {  });
talismans.regTalisman(["spell", "prismatic_eyes", 3, 80000], "Prismatic eyes", "ru", function () {  });
talismans.regTalisman(["spell", "pull_side", 4, 80000], "Pull side", "ru", function () {  });
talismans.regTalisman(["spell", "push_side", 4, 80000], "Push side", "ru", function () {  });
talismans.regTalisman(["spell", "red_pulse", 6, 80000], "Red pulse", "ru", function () {  });
talismans.regTalisman(["spell", "red_signal", 6, 80000], "Red signal", "ru", function () {  });
talismans.regTalisman(["spell", "redo", 4, 80000], "Redo", "ru", function () {  });
talismans.regTalisman(["spell", "remote_chest", 2, 80000], "Remote chest", "ru", function () {  });
talismans.regTalisman(["spell", "replace_blocks", 4, 80000], "Replace blocks", "ru", function () {  });
talismans.regTalisman(["spell", "replace_cuboid", 4, 80000], "Replace cuboid", "ru", function () {  });
talismans.regTalisman(["spell", "replace_side", 4, 80000], "Replace side", "ru", function () {  });
talismans.regTalisman(["spell", "replace_surface", 4, 80000], "Replace surface", "ru", function () {  });
talismans.regTalisman(["spell", "rotten_might", 3, 80000], "Rotten might", "ru", function () {  });
talismans.regTalisman(["spell", "searing_pulse", 5, 80000], "Searing pulse", "ru", function () {  });
talismans.regTalisman(["spell", "serialize_memory", 4, 80000], "Serialize memory", "ru", function () {  });
talismans.regTalisman(["spell", "small_fireball_throw", 5, 80000], "Small fireball throw", "ru", function () {  });
talismans.regTalisman(["spell", "snowball_throw", 1, 80000], "Snowball throw", "ru", function () {  });
talismans.regTalisman(["spell", "spider_might", 3, 80000], "Spider might", "ru", function () {  });
talismans.regTalisman(["spell", "starvation", 9, 80000], "Starvation", "ru", function () {  });
talismans.regTalisman(["spell", "stone_fever", 7, 80000], "Stone fever", "ru", function () {  });
talismans.regTalisman(["spell", "stoneball_throw", 7, 80000], "Stoneball throw", "ru", function () {  });
talismans.regTalisman(["spell", "summon_blaze", 5, 80000], "Summon blaze", "ru", function () {  });
talismans.regTalisman(["spell", "summon_cave_spider", 3, 80000], "Summon cave spider", "ru", function () {  });
talismans.regTalisman(["spell", "summon_creeper", 3, 80000], "Summon creeper", "ru", function () {  });
talismans.regTalisman(["spell", "summon_husk", 3, 80000], "Summon husk", "ru", function () {  });
talismans.regTalisman(["spell", "summon_skeleton", 3, 80000], "Summon skeleton", "ru", function () {  });
talismans.regTalisman(["spell", "summon_spider", 3, 80000], "Summon spider", "ru", function () {  });
talismans.regTalisman(["spell", "summon_stray", 3, 80000], "Summon stray", "ru", function () {  });
talismans.regTalisman(["spell", "summon_zombie", 3, 80000], "Summon zombie", "ru", function () {  });
talismans.regTalisman(["spell", "surface_blink", 2, 80000], "Surface blink", "ru", function () {  });
talismans.regTalisman(["spell", "surface_shift", 2, 80000], "Surface shift", "ru", function () {  });
talismans.regTalisman(["spell", "target", 3, 80000], "Target", "ru", function () {  });
// talismans.regTalisman(["spell", "tell_time", spiritID, 80000], "Tell time", "ru", function () {  });
talismans.regTalisman(["spell", "toadic_jump", 6, 80000], "Toadic jump", "ru", function () {  });
talismans.regTalisman(["spell", "undo", 4, 80000], "Undo", "ru", function () {  });
talismans.regTalisman(["spell", "vitalize", 1, 80000], "Vitalize", "ru", function () {  });
talismans.regTalisman(["spell", "wall_slip", 2, 80000], "Wall slip", "ru", function () {  });
talismans.regTalisman(["spell", "warp", 2, 80000], "Warp", "ru", function () {  });
talismans.regTalisman(["spell", "warp_gem", 2, 80000], "Warp gem", "ru", function () {  });
talismans.regTalisman(["spell", "warp_pebble", 2, 80000], "Warp pebble", "ru", function () {  });
talismans.regTalisman(["spell", "wild_sprint", 6, 80000], "Wild sprint", "ru", function () {  });
talismans.regTalisman(["spell", "wind_step", 6, 80000], "Wind step", "ru", function () {  });
talismans.regTalisman(["spell", "winter_breath", 1, 80000], "Winter breath", "ru", function () {  });
talismans.regTalisman(["spell", "wooden_punch", 7, 80000], "Wooden punch", "ru", function () {  });




// file: mod/items/sort/tool_talismans.js

regItem("aquatic", "Aquatic Tool talisman", 1);
regItem("break_blocks", "Break blocks Tool talisman", 1);
regItem("break_radius", "Break radius Tool talisman", 1);
regItem("break_side", "Break side Tool talisman", 1);
regItem("break_surface", "Break surface Tool talisman", 1);
regItem("destroy_blocks", "Destroy blocks Tool talisman", 1);
regItem("destroy_cuboid", "Destroy cuboid Tool talisman", 1);
regItem("destroy_side", "Destroy side Tool talisman", 1);
regItem("destroy_surface", "Destroy surface Tool talisman", 1);
regItem("fell_tree", "Fell tree Tool talisman", 1);
regItem("ground_pick", "Ground pick Tool talisman", 1);
regItem("ice_carving", "Ice carving Tool talisman", 1);
regItem("memory_tool", "Memory tool Tool talisman", 1);
regItem("molten_tool", "Molten tool Tool talisman", 1);
regItem("obsidian_carving", "Obsidian carving Tool talisman", 1);
regItem("void_tool", "Void tool Tool talisman", 1);
regItem("volcanic_glass_cutter", "Volcanic glass cutter Tool talisman", 1);
regItem("wood_peck", "Wood peck Tool talisman", 1);




// file: mod/items/Bone_Dagger.js

function random(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
IDRegistry.genItemID("bone_dagger");
Item.createItem("bone_dagger", "Bone dagger", {name: "bone_dagger"}, {stack: 1});
Recipes.addShaped({
  id: ItemID.bone_dagger,
  count: 1,
  data: 0
}, ["  a", "bc ", "db "], ['a', 352, 0, 'b', 2, 0, 'c', 264, 0, 'd', 280, 0]);

IDRegistry.genItemID("bone_dagger_awakened");
Item.createItem("bone_dagger_awakened", "Bone dagger awakened", {name: "bone_dagger_awakened"}, {stack: 1});

function dropByEntity(victim, entityID, item, drop) {
  if (Entity.getType(victim) == entityID && Player.getCarriedItem().id == item) {
    var pos = Entity.getPosition(victim);
    if(random(0,2)==1)World.drop(pos.x, pos.y, pos.z, drop.id, drop.count, drop.data);
  }
}
Callback.addCallback("PlayerAttack", function (player, victim) {
  var rand = random(0, 10);
  if (rand == 10 && Player.getCarriedItem().id === ItemID.bone_dagger) {
    Player.setCarriedItem(ItemID.bone_dagger_awakened, 1, 0);
    Game.message("Awakened bone Dagger");
  }
  dropByEntity(victim, 38, ItemID.bone_dagger_awakened, {id: ItemID.end_soul_shard, count: 1, data: 0}); //ENDERMAN
  dropByEntity(victim, 15, ItemID.bone_dagger_awakened, {id: ItemID.mind_soul_shard, count: 1, data: 0}); //VILLAGER

  dropByEntity(victim, 42, ItemID.bone_dagger_awakened, {id: ItemID.nether_soul_shard, count: 1, data: 0}); //LAVA SLIME
  dropByEntity(victim, 43, ItemID.bone_dagger_awakened, {id: ItemID.nether_soul_shard, count: 1, data: 0}); //BLAZE
  dropByEntity(victim, 41, ItemID.bone_dagger_awakened, {id: ItemID.nether_soul_shard, count: 1, data: 0}); //GHAST
  dropByEntity(victim, 36, ItemID.bone_dagger_awakened, {id: ItemID.nether_soul_shard, count: 1, data: 0}); //PIGMAN
  dropByEntity(victim, 48, ItemID.bone_dagger_awakened, {id: ItemID.nether_soul_shard, count: 1, data: 0}); //WITHER SKELETON

  dropByEntity(victim, 11, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //COW
  dropByEntity(victim, 10, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //CHICKEN
  dropByEntity(victim, 16, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //MUSHROOM COW
  dropByEntity(victim, 22, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //OCELOT
  dropByEntity(victim, 12, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //PIG
  dropByEntity(victim, 18, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //RABBIT
  dropByEntity(victim, 13, ItemID.bone_dagger_awakened, {id: ItemID.peace_soul_shard, count: 1, data: 0}); //SHEEP

  dropByEntity(victim, 32, ItemID.bone_dagger_awakened, {id: ItemID.undeath_soul_shard, count: 1, data: 0}); //ZOMBIE
  dropByEntity(victim, 34, ItemID.bone_dagger_awakened, {id: ItemID.undeath_soul_shard, count: 1, data: 0}); //SKELETON

  dropByEntity(victim, 17, ItemID.bone_dagger_awakened, {id: ItemID.water_soul_shard, count: 1, data: 0}); //SQUID
  dropByEntity(victim, 49, ItemID.bone_dagger_awakened, {id: ItemID.water_soul_shard, count: 1, data: 0}); //GUARDIANS
  
  dropByEntity(victim, 37, ItemID.bone_dagger_awakened, {id: ItemID.wild_soul_shard, count: 1, data: 0}); //SLIME
  dropByEntity(victim, 33, ItemID.bone_dagger_awakened, {id: ItemID.wild_soul_shard, count: 1, data: 0}); //CREEPER
  dropByEntity(victim, 35, ItemID.bone_dagger_awakened, {id: ItemID.wild_soul_shard, count: 1, data: 0}); //SPIDER

  dropByEntity(victim, 63, ItemID.bone_dagger_awakened, {id: ItemID.end_soul_shard, count: 1, data: 0});
});




