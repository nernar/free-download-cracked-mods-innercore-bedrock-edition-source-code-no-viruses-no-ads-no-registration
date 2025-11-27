/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 9
*/



// file: other.js

IMPORT("SoundAPI")

const mod = FileTools.ReadJSON(__dir__ + 'mod.info');

Callback.addCallback("LevelLoaded", function () { 
	Game.tipMessage('§c' + mod.name + '\n§a ' + mod.version)
});

var levelloaded = false;

const searchItem = function (id, data) {
	var dat = data || -1;
	var od = id || -1;
	for(var i = 9;i < 45;i++) {
	 var item = Player.getInventorySlot(i);
		if((item.id == od || (od == -1 && item.id != 0)) && (item.data == dat || dat == -1)){
			return {
				id: item.id,
				data: item.data,
				extra: item.extra,
				count: item.count,
				slot: i
			}
		}
	}
}

const getPointed = ModAPI.requireGlobal("Player.getPointed");

const setTimeout = function(func, ticks){
	var upd = {
		ticks: 0,
		update: function(){
			this.ticks++
			if(this.ticks >= ticks){
				func();
				this.remove = true
			}
		}
	};
	Updatable.addUpdatable(upd);
}

const setInterval = function(func, ticks){
	var upd = {
		ticks: 0,
		update: function(){
			this.ticks++
			if(this.ticks >= ticks){
				this.ticks = 0;
				if(func())this.remove = true;
			}
		}
	};
	Updatable.addUpdatable(upd);
	return upd;
}

const clearInterval = function(upd){
	if(upd && upd == {} && upd.remove){
		upd.remove = true;
	}
}

const log = function(text){
	if(levelloaded){
		Game.message(text);
	};
	Logger.Log(text, "MagicMod Log");
}

const devLog = function(text){
	if(!__config__.getBool("dev")) return;
	if(levelloaded){
		Game.message(text);
	};
	Logger.Log(text, "MagicMod devLog");
}

Callback.addCallback("LevelLoaded", function(){
	levelloaded = true
})

Callback.addCallback("LevelLeft", function(){ 
	levelloaded = false
});

const items_vanilla = [6,27,28,30,32,37,38,39,40,50,69,76, 102,106,111,126,175,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511];

const blocks_vanilla = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255];

const items_and_blocks_vanilla = items_vanilla.concat(blocks_vanilla);

var all_items = items_vanilla;

var all_blocks = blocks_vanilla;

var all_items_and_blocks;


Callback.addCallback("ModsLoaded", function () {
	for(var i in ItemID){
		all_items.push(ItemID[i]);
	};
	for(var i in BlockID){
		all_blocks.push(BlockID[i]);
	};
	all_items_and_blocks = all_items.concat(all_blocks);
	//log(all_items_and_blocks);
});

const allParams = function(json, fullParams){
 if(typeof(json) != "object") return json;
 var params = '{\n';
 for(var key in json){
	if(fullParams){
	 params += key + ' : ' + allParams(json[key], true) + '\n';
	} else {
	 params += key + ' : ' + json[key] + '\n';
	}
 }
 params += '}';
 return params;
}

const JSONlength = function(json){
	var length = 0;
	for(var i in json){
		length++
	}
	return length;
}

const setCharAt = function (str,index,chr) { 
	if(index > str.length-1) return str; 
	return str.substr(0,index) + chr + str.substr(index+chr.length); 
}

const Timer = java.util.Timer;
const TimerTask = java.util.TimerTask;

const jSetInterval = function(__fun, __mil){
	var timer = new Timer();
	var task = new TimerTask({
		run: function(){
			if(__fun())timer.cancel();
		}
	})
	timer.scheduleAtFixedRate(task, 0, __mil);
	return timer;
}

const jSetTimeout = function(__fun, __mil){
	var timer = new Timer();
	var task = new TimerTask({
		run: function(){
			if(__fun())timer.cancel();
		}
	})
	timer.schedule(task, __mil);
	return timer;
}

const jClearInterval = function(__interval){
	if(__interval && __interval.cancel)__interval.cancel();
}

const sides = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
    [0, 1, 0],
    [0, -1, 0]
];

const drop = function(x, y, z, id, count, data, extra){
  var container = new UI.Container();
  var item = container.getSlot("asd");
  item.id = Number(id);
  item.count = Number(count);
  item.data = Number(data);
  item.extra = extra;
  container.dropAt(x, y, z);
}

const onCallbacks = {};

function onCallback(name,func){
  if(!onCallbacks[name]){
    onCallbacks[name] = [];
    Callback.addCallback(name, function (a,b,c,d,e,f,g,h) {
      for(var i in onCallbacks[name]){
        var res = onCallbacks[name][i](a,b,c,d,e,f,g,h);
        if(res == "delete")onCallbacks[name].splice(i,1);
      }
    });
  }
  onCallbacks[name].push(func);
}




// file: translate.js

Translation.addTranslation("Lens", {ru: "Линза"});
Translation.addTranslation("Air", {ru: "Воздух"});
Translation.addTranslation("Nope", {ru: "Нет"});
Translation.addTranslation("Magic Table", {ru: "Магический Стол"});
Translation.addTranslation("Magic Pedestal", {ru: "Магический Пьедестал"});
Translation.addTranslation("Lens Of Air", {ru: "Линза Воздуха"});
Translation.addTranslation("Blood Diamond", {ru: "Кровавый Алмаз"});
Translation.addTranslation("The wind will push you up and when you attack the mobs, the wind will push them further away\n\nOn use no target: You fly up\nOn attack: The mob pushes further", {ru: "Ветер будет подталкивать вас вверх и когда вы будете нападать на мобов, ветер будет отталкивать их гораздо дальше\n\nПри удерживание: Вы взлетаете вверх\nПри атаке: Моб отталкивается дальше"});
Translation.addTranslation("Fire", {ru: "Огонь"});
Translation.addTranslation("Lens Of Fire", {ru: "Линза Огня"});
Translation.addTranslation("Blood", {ru: "Кровь"});
Translation.addTranslation("Lens Of Blood", {ru: "Линза Крови"});
Translation.addTranslation("Magic Wand", {ru: "Магическая Палочка"});
Translation.addTranslation("Description", {ru: "Описание"});
Translation.addTranslation("Launches fireballs and sets fire to blocks\n\nOn use no target: Launch fareball\nOn use: Set fire", {ru: "Запускает огненные шары, а так же поджигает блоки\n\nПри удерживание: Запускает огненный шар\nПри использование: Поджигает блок"});
Translation.addTranslation("Restores health through target health\n\nWhen using on a mob: Inflicts 1hp to a mob and restore 1hp you\nOn use no target: If a diamond lies nearby, it replaces it with a bloody one and takes 19hp from you", {ru: "Восполняет здоровье за счёт здоровья цели\n\nПри использование на мобе: Наносит 1hp урона мобу и восполняет 1hp вам\nПри использование без цели: Если рядом лежит алмаз, то заменяет его на кровавый и отнимает у вас 19hp"});
Translation.addTranslation("Lens Of Telekinesis", {ru: "Линза Телекинеза"});
Translation.addTranslation("Telekinesis", {ru: "Телекинез"});
Translation.addTranslation("Allows you to lift mobs into the air and throw them far\n\nWhen using on a mob: raise mob\nLeft top button using for throw mob\nLeft down button using for let off mob", {ru: "Позволит вам поднимать мобов в воздух и далеко кидать их\n\nПри использование на мобе: Поднимает его\nЛевая верхняя кнопка бросает моба\nЛевая нижняя кнопка отпускает моба"});
Translation.addTranslation("Empty Lens", {ru: "Пустая Линза"});




// file: items/magicWand.js

IDRegistry.genItemID("magicWand");
Item.createItem("magicWand", "Magic Wand", {
	name: "magic_wand"
}, {
	stack: 1
});

var particle_air = Particles.registerParticleType({
	texture: "air",
	size: [1, 15],
	lifetime: [40, 120],
	render: 2,
	animators: {
		size: {
			period: 120,
			fadeIn: 1,
			fadeOut: 0,
			start: 0.2,
			end: 1
		}
	},
});

var lens_selection_menu = new UI.Window({
	location: {
		width: 400,
		height: 400,
		x: 300,
		y: 50 + 20
	},
	params: {

	},
	drawing: [{
		type: "color",
		color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"image": {
			type: "image",
			x: 0,
			y: 0,
			bitmap: "frame1",
			scale: 3.9,
		},
		"desc": {
			type: "text",
			x: 275,
			y: 275,
			text: "",
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 30
			}
		}
	}
});
lens_selection_menu.setAsGameOverlay(true);
var container = new UI.Container();

var fireballs = [];

var sound_air = new Sound("air.ogg");
var sound_air2 = new Sound("air2.ogg");
var sound_interval;
var interval;

var drop_mob = false;
var mob_captured;
var tel_window = new UI.Window({
	location: {
		width: 60,
		height: 60 * 2,
		x: 0,
		y: 150
	},
	drawing: [{
		type: "color",
		color: android.graphics.Color.TRANSPARENT
	}],
	elements: {
		"button_push": {
			x: 0,
			y: 0,
			type: "button",
			bitmap: "tel_push",
			scale: 50,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					drop_mob = true;
					var vel = Entity.getLookVector(Player.get());
					Entity.addVelocity(mob_captured, vel.x * 5, vel.y * 5, vel.z * 5);
				}
			}
		},
		"button_drop": {
			x: 0,
			y: 1000,
			type: "button",
			bitmap: "tel_drop",
			scale: 50,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					drop_mob = true;
				}
			}
		}
	}
})
var tel_container = new UI.Container();

var lenses = [{
		name: "Air",
		texture: "airLense",
		description: "The wind will push you up and when you attack the mobs, the wind will push them further away\n\nOn use no target: You fly up\nOn attack: The mob pushes further",
		onUseNoTarget: function(item) {
			sound_air.stop();
			clearInterval(interval);
			var speed = 0.15;
			sound_air.play();
			sound_air.setLooping(true);
			interval = setInterval(function() {
				if (Player.getCarriedItem().id != ItemID.magicWand || Player.getCarriedItem().data != 1) {
					sound_air.stop();
					sound_air.setLooping(false);
					return true;
				}
				if (Entity.getSneaking(Player.get())) {
					sound_air2.stop();
					sound_air.stop();
					sound_air.setLooping(false);
					return false;
				} else if (!sound_air.isPlaying()) {
					sound_air.play();
					sound_air.setLooping(true);
				}
				if (Player.getVelocity().y < 0) {
					speed = Player.getVelocity().y + 0.2;
				} else if (Player.getVelocity().y > 1) {
					speed = Player.getVelocity().y - 0.2;
				} else {
					speed = 0.15;
				}
				if (Math.random() >= 0.75) sound_air2.play();
				Player.setVelocity(Player.getVelocity().x, speed, Player.getVelocity().z);
				var player_pos = Player.getPosition();
				var emitter = new Particles.ParticleEmitter(player_pos.x, player_pos.y - 2.5, player_pos.z);
				emitter.setEmitRelatively(true);
				emitter.emit(particle_air, 0, 0, 0, 0, 0, 0.18, 0, 0, 0, 0);
			}, 1);
		},
		onPlayerAttack: function(player, victim) {
			var vel = Entity.getLookVector(player);
			Entity.addVelocity(victim, vel.x * 2, 0, vel.z * 2);
			var player_pos = Player.getPosition();
			var emitter = new Particles.ParticleEmitter(player_pos.x, player_pos.y, player_pos.z);
			emitter.setEmitRelatively(true);
			emitter.emit(particle_air, 0, 0, 0, 0, 0, 0, 0, vel.x / 10, vel.y / 10, vel.z / 10);
			sound_air.play();
		}
	},
	{
		name: "Fire",
		description: "Launches fireballs and sets fire to blocks\n\nOn use no target: Launch fareball\nOn use: Set fire",
		texture: "fireLense",
		onUseNoTarget: function(item) {
			var pos = Player.getPosition();
			var vel = Entity.getLookVector(Player.get());
			Entity.spawn(pos.x + vel.x * 2, pos.y + vel.y * 2, pos.z + vel.z * 2, 85);
			var entities = Entity.getAllInRange(pos, 5, 85);
			for (var i in entities) {
				if (fireballs.indexOf(entities[i]) == -1) {
					Entity.addVelocity(entities[i], vel.x, vel.y, vel.z);
					fireballs.push(entities[i]);
				}
			}
		},
		onUse: function(coords, item, block) {
			World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, 51, 0);
		},
		onPlayerAttack: function(player, victim) {
			Entity.setFire(victim, 120, true)
		}
	},
	{
		name: "Blood",
		description: "Restores health through target health\n\nWhen using on a mob: Inflicts 1hp to a mob and restore 1hp you\nOn use no target: If a diamond lies nearby, it replaces it with a bloody one and takes 19hp from you",
		texture: "bloodLense",
		onUseNoTarget: function(item) {
			var pointed = getPointed();
			var pos = Player.getPosition();
			pos.y--;
			if (pointed.entity != -1) {
				Entity.damageEntity(pointed.entity, 1);
				Entity.healEntity(Player.get(), 1);
				return
			}
			var items = Entity.getAllInRange(pos, 5, 64);
			if (items.length != 0) {
				var diamond;
				for (var i in items) {
					if (Entity.getDroppedItem(items[i]).id == 264) diamond = items[i];
				}
				if (!diamond || Entity.getHealth(Player.get()) < 20) return;
				Entity.damageEntity(Player.get(), 19);
				pos = Entity.getPosition(diamond);
				var item = Entity.getDroppedItem(items[i]);
				item.count == 1 ? Entity.setDroppedItem(diamond, 0, 0, 0) : Entity.setDroppedItem(diamond, 264, item.count - 1, item.data);
				World.drop(pos.x, pos.y, pos.z, ItemID.bloodDiamond, 1, 0);
			}
		}
	},
	{
		name: "Telekinesis",
		texture: "telLense",
		description: "Allows you to lift mobs into the air and throw them far\n\nWhen using on a mob: raise mob\nLeft top button using for throw mob\nLeft down button using for let off mob",
		onUseNoTarget: function(item) {
			var pointed = getPointed();
			if (pointed.entity == -1) return;
			mob_captured = pointed.entity;
			//Entity.setMobile(pointed.entity, false);
			var last = {
				x: 0,
				y: 0,
				z: 0
			};
			var lastp = {
				x: 0,
				y: 0,
				z: 0
			};
			if (!tel_container.isOpened()) tel_container.openAs(tel_window);
			setInterval(function() {
				var item = Player.getCarriedItem();
				if (pointed.entity != mob_captured) drop_mob = true;
				if (item.id != ItemID.magicWand || item.data != 4) drop_mob = true;
				if (drop_mob) {
					drop_mob = false;
					mob_captured = false;
					tel_container.close();
					return true;
				}
				var pos = Player.getPosition();
				var vec = Entity.getLookVector(Player.get());
				if (vec.x == 0 && vec.y == 0 && vec.z == 1) {
					vec.x = last.x, vec.y = last.y, vec.z = last.z;
				}
				last.x = vec.x, last.y = vec.y, last.z = vec.z;
				/*if(lastp.x != pos.x, lastp.y != pos.y, lastp.z != pos.z) log(JSON.stringify(pos));
				lastp = pos;*/
				var target_pos = {
					x: pos.x + vec.x * 5,
					y: pos.y + vec.y * 5,
					z: pos.z + vec.z * 5
				}
				Entity.moveToTarget(pointed.entity, target_pos, {
					speed: 10,
					denyY: false,
					jumpVel: 10
				})
			}, 1)
		}
	}
]

var lens = {
	/*
		data = {
			name: string,
			description: string,
			texture: string,
			onUse: function(coords, item, block),
			onUseNoTarget: function(item),
			onPlayerAttack: function(player, victim)
		}
		Returns data stuff with lens
	*/
	add: function(data) {
		if (!data) return Logger.Log("Data not listed", "MagicModAPI ERROR");
		if (!data.name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		if (!data.texture) return Logger.Log("Texture not listed", "MagicModAPI ERROR");
		lenses.push(data);
		return lenses.length;
	},
	/*
		name: string
	*/
	remove: function(name) {
		if (!name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		lenses.splice(lenses.find(function(element, index, array) {
			if (element.name == name) return index;
		}), 1)
	},
	/*
		name: string
	*/
	get: function(name) {
		if (!name) return Logger.Log("Name not listed", "MagicModAPI ERROR");
		return lenses.find(function(element, index, array) {
			if (element.name == name) return element;
		})
	}
}

Callback.addCallback("APILoaded", function() {
	for (var i in lenses) {
		IDRegistry.genItemID("LensOf" + lenses[i].name);
		Item.createItem("LensOf" + lenses[i].name, "Lens Of " + lenses[i].name, {
			name: lenses[i].texture
		}, {
			stack: 1
		});
	}
});

Item.registerNoTargetUseFunction("magicWand", function(item) {
	if (item.data == 0) return;
	if (lenses[item.data - 1].onUseNoTarget) lenses[item.data - 1].onUseNoTarget(item);
});

Callback.addCallback("PlayerAttack", function(player, victim) {
	var item = Player.getCarriedItem();
	if (item.id == ItemID.magicWand) {
		if (item.data == 0) return;
		if (lenses[item.data - 1].onPlayerAttack) lenses[item.data - 1].onPlayerAttack(player, victim);
	}
});

Item.registerNameOverrideFunction(ItemID.magicWand, function(item, name) {
	name = "§b" + name
	if (item.data == 0) return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate('Nope');
	if (lenses[item.data - 1]) {
		return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate(lenses[item.data - 1].name);
	} else {
		return name + "\n§7" + Translation.translate('Lens') + ': ' + Translation.translate('Nope');
	}
});

Item.registerUseFunction("magicWand", function(coords, item, block) {
	if (block.id == BlockID.magicTable) return;
	if (Entity.getSneaking(Player.get())) {
		if (item.data == 0) {
			container.openAs(lens_selection_menu);
			var content = container.getGuiContent();
			/*content.elements["image"].scale = 0.1;
			jSetInterval(function(){
				content.elements["image"].scale += 0.0005//3.9/(5000/25)/100;
				if(content.elements["image"].scale+"" == "3.9") return true;
			},1)
			var f = 0;
			function plus(){
				content.elements["image"].scale += 0.00015 + f;
				f += 0.0001;
				if(content.elements["image"].scale < 3.9)jSetTimeout(plus, 1);
			}
			plus();*/
			content.elements["desc"].text = "";
			for (var i = 1;; i++) {
				if (!content.elements["desc" + i]) break;
				content.elements["desc" + i] = null;
			}
			var k = 0;
			for (var i = 0; i < 6.27; i += 0.57) {
				content.elements['slot' + k] = {
					slot: 'slot' + k,
					type: 'slot',
					x: Math.sin(i) * 385 + 400,
					y: Math.cos(i) * -1 * 385 + 400,
					size: 200,
					bitmap: "_default_slot_empty",
					visual: true,
					isTransparentBackground: true,
					clicker: {
						onClick: function(position, container, tileEntity, window, canvas, scale) {
							var item = container.getSlot(this.slot);
							if (item.id == 0) return;
							Player.setInventorySlot(searchItem(item.id, -1).slot, 0, 0, 0);
							var data = 0;
							for (var i in ItemID) {
								if (ItemID[i] == item.id) {
									for (var d in lenses) {
										if ("LensOf" + lenses[d].name == i) data = (+d) + 1;
									}
									break;
								}
							}
							Player.setCarriedItem(ItemID.magicWand, 1, data);
							container.setSlot(this.slot, 0, 0, 0);
							container.close();
						},
						onLongClick: function(position, container, tileEntity, window, canvas, scale) {
							if (container.getSlot(this.slot).id == 0) return;
							var cont = container.getGuiContent();
							for (var i = 0; i < 11; i++) {
								cont.elements['slot' + i].bitmap = "_default_slot_empty";
							}
							cont.elements["desc"].text = "";
							for (var i = 1;; i++) {
								if (!cont.elements["desc" + i]) break;
								cont.elements["desc" + i] = null;
							}
							cont.elements[this.slot].bitmap = "selected_slot";
							var item = container.getSlot(this.slot);
							var data = 0;
							for (var i in ItemID) {
								if (ItemID[i] == item.id) {
									for (var d in lenses) {
										if ("LensOf" + lenses[d].name == i) data = (+d) + 1;
									}
									break;
								}
							}
							var text = Translation.translate("Description") + ": " + Translation.translate(lenses[data - 1].description);
							var last_sim = 0;
							for (var i = 0; i < Math.trunc(text.length / 25); i++) {
								text = setCharAt(text, text.substr(last_sim, 25).lastIndexOf(" ") + last_sim, "\n");
								last_sim += 25;
							}
							var splited = text.split("\n");
							cont.elements.desc.text = splited[0];
							var y = 35;
							for (var i = 1; i < splited.length; i++) {
								cont.elements["desc" + i] = {
									type: "text",
									x: 275,
									y: 275 + y,
									text: splited[i],
									font: {
										color: android.graphics.Color.WHITE,
										shadow: 0.5,
										size: 30
									}
								};
								y += 35;
							}
						}
					}
				}
				k++;
			}
			for (var i = 0; i <= 10; i++) {
				container.setSlot("slot" + i, 0, 0, 0);
			}
			var items = [];
			for (var i in lenses) {
				var item = searchItem(ItemID["LensOf" + lenses[i].name], -1);
				if (item) {
					items.push([item.id, item.data, item.slot]);
				}
			}
			var slots = [
				[],
				[0],
				[0, 5],
				[0, 4, 7],
				[1, 10, 4, 7],
				[0, 2, 4, 7, 9],
				[1, 3, 5, 6, 8, 10],
				[0, 1, 2, 3, 4, 5, 6],
				[0, 1, 2, 3, 4, 5, 6, 7],
				[0, 1, 2, 3, 4, 5, 6, 7, 8],
				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			];
			var l = 0;
			var length = items.length > 10 ? 10 : items.length;
			for (var i in slots[length]) {
				container.setSlot("slot" + slots[items.length][i], items[l][0], 1, items[l][1]);
				l++;
			}
			close();
		} else {
			Player.setCarriedItem(item.id, 1, 0);
			Player.addItemToInventory(ItemID["LensOf" + lenses[item.data - 1].name], 1, 0);
		}
		return
	}
	if (item.data == 0) return;
	if (lenses[item.data - 1].onUse) lenses[item.data - 1].onUse(coords, item, block);
});

function stop_capture_on_death(entity) {
	if (entity == mob_captured) drop_mob = true;
}

Callback.addCallback("EntityDeath", stop_capture_on_death);
Callback.addCallback("EntityRemoved", stop_capture_on_death);

function close() {
	var last_look = getPointed().vec;
	setInterval(function() {
		if (!container.isOpened()) return true;
		var look = getPointed().vec;
		if (look.x != last_look.x || look.y != last_look.y || look.z != last_look.z) {
			container.close();
			return true;
		}
		if (Player.getCarriedItem().id != ItemID.magicWand || Player.getCarriedItem().data != 0) {
			container.close();
			return true;
		}
	}, 5);
}




// file: blocks/magicPedestal.js

IDRegistry.genBlockID("magicPedestal");

Block.createBlock("magicPedestal", [{
	name: "Magic Pedestal",
	texture: [
		["obsidian", 0]
	],
	inCreative: false
}], Block.createSpecialType({
	base: 49
}));

Block.registerDropFunction("magicPedestal", function(coords, id, data, diggingLevel, toolLevel) {
	return [];
});

Block.setRandomTickCallback(BlockID.magicPedestal, function(x, y, z, id, data) {
	particles_for_pedestal(x, y, z);
});

function particles_for_pedestal(x, y, z) {
	var bonus_coords = [
		[1 / 16 * 4, 1 / 16 * 4],
		[1 / 16 * 13, 1 / 16 * 4],
		[1 / 16 * 4, 1 / 16 * 13],
		[1 / 16 * 12, 1 / 16 * 12]
	];
	for (var i in bonus_coords) {
		var emitter = new Particles.ParticleEmitter(x + bonus_coords[i][0], y + 1 / 16 * 14, z + bonus_coords[i][1]);
		emitter.setEmitRelatively(true);
		emitter.emit(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	}
}

(function() {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.magicPedestal, -1, render);

	var boxes = [
		[0, 0, 0, 1, 0.1, 1, BlockID.magicPedestal, 0],
		[0.15, 0.1, 0.15, 0.85, 0.2, 0.85, BlockID.magicPedestal, 0],
		[0.3, 0.2, 0.3, 0.7, 0.7, 0.7, BlockID.magicPedestal, 0],
		//[0.2, 0.7, 0.2, 0.8, 0.75, 0.8],
		[0.2, 0.75, 0.2, 0.25, 0.8, 0.25, 89, 0],
		[0.75, 0.8, 0.25, 0.8, 0.75, 0.2, 89, 0],
		[0.25, 0.8, 0.75, 0.2, 0.75, 0.8, 89, 0],
		[0.75, 0.75, 0.75, 0.8, 0.8, 0.8, 89, 0]
	]

	for (var i in boxes) {
		var box = boxes[i];
		var model = BlockRenderer.createModel();
		model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], box[6], box[7]);
		render.addEntry(model);
	}

	var Dmodel = new ICRender.CollisionShape();
	var entry = Dmodel.addEntry();

	entry.addBox(0, 0, 0, 1, 0.75, 1);

	var model = BlockRenderer.createModel();
	model.addBox(0.2, 0.7, 0.2, 0.8, 0.75, 0.8, [
		["magic_pedestal_top", 0],
		["magic_pedestal_top", 0],
		["magic_pedestal_side", 0],
		["magic_pedestal_side", 0],
		["magic_pedestal_side", 0],
		["magic_pedestal_side", 0]
	]);

	render.addEntry(model);

	BlockRenderer.setCustomCollisionShape(BlockID.magicPedestal, -1, Dmodel);
})()

TileEntity.registerPrototype(BlockID.magicPedestal, {
	defaultValues: {
		anim: null,
		rotation: [0, 0, 0],
		lastid: 0,
		lastdata: 0
	},
	getTransportSlots: function() {
		return {
			input: ["slot"],
			//output: ["slot"]
		};
	},
	setSlot: function(slot, id, count, data, extra) {
		var item = this.container.getSlot(slot);
		item.id = id;
		item.count = count;
		item.data = data;
		item.extra = extra;
	},
	click: function(id, count, data, coords) {
		Game.prevent();
		if (this.container.getSlot('slot').id == 0) {
			var item = Player.getCarriedItem();
			if (item.id == 0) return;
			this.setSlot('slot', item.id, 1, item.data, item.extra);
			Player.decreaseCarriedItem(1);
		} else {
			var slot = this.container.getSlot('slot');
			drop(this.x + 0.5, this.y + 1, this.z + 0.5, slot.id, slot.count, slot.data, slot.extra);
			this.setSlot('slot', 0, 0, 0);
		}
	},
	tick: function() {
		var item = this.container.getSlot('slot');
		if ((!this.data.anim || (this.data.lastid != item.id || this.data.lastdata != item.data)) && item.id != 0) {
			if ((this.data.lastid != item.id || this.data.lastdata != item.data) && this.data.anim) this.data.anim.destroy();
			this.data.lastid = item.id;
			this.data.lastdata = item.data;
			var bonus_coords = {
				x: 0,
				y: 0,
				z: 0
			};
			this.data.rotation = [0, 0, 0];
			if (all_items.indexOf(item.id) != -1) {
				bonus_coords.x -= 0.06;
				bonus_coords.y -= 0.095;
				bonus_coords.z += 0.06125;
				this.data.rotation = [Math.PI / 2, Math.PI, 0];
			}
			this.data.anim = new Animation.Item(this.x + 0.5 + 1 / 16 + bonus_coords.x, this.y + 0.75 + 0.125 + bonus_coords.y, this.z + 0.5 - 1 / 16 + bonus_coords.z);
			this.data.anim.describeItem({
				id: item.id,
				count: 1,
				data: item.data,
				size: 1 / (16 / 6),
				rotation: this.data.rotation,
				notRandomize: true
			});
			this.data.anim.load();
		} else if (this.data.anim && item.id == 0) {
			this.data.lastid = 0;
			this.data.lastdata = 0;
			this.data.anim.destroy();
			this.data.anim = null;
		}
	},
	init: function() {
		if (this.data.anim) this.data.anim.load();
	},
	destroyBlock: function(coords, player) {
		if (this.data.anim) {
			this.data.anim.destroy();
			this.data.anim = null;
		}
	}
})




// file: blocks/magicTable.js

IDRegistry.genBlockID("magicTable");

Block.createBlock("magicTable", [{
	name: "Magic Table",
	texture: [
		["magic_table_bottom", 0],
		["magic_table_top", 0],
		["magic_table_side", 0]
	],
	inCreative: false
}], Block.createSpecialType({
	base: 46
}));

IDRegistry.genItemID("magicTable_item");
Item.createItem("magicTable_item", "Magic Table", {
	name: "magic_table_item"
}, {
	stack: 64
});

Item.registerUseFunction("magicTable_item", function(coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.magicTable, 0);
	Player.decreaseCarriedItem(1);
})

Block.registerDropFunction("magicTable", function(coords, id, data, diggingLevel, toolLevel) {
	return [
		[ItemID.magicTable_item, 1, 0]
	];
});

(function() {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.magicTable, -1, render);

	var boxes = [
		[0, 0, 0, 1, 0.75, 1]
	]

	for (var i in boxes) {
		var box = boxes[i];
		var model = BlockRenderer.createModel();
		model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], BlockID.magicTable, 0);
		render.addEntry(model);
	}

	var Dmodel = new ICRender.CollisionShape();
	var entry = Dmodel.addEntry();

	entry.addBox(0, 0, 0, 1, 0.75, 1);

	BlockRenderer.setCustomCollisionShape(BlockID.magicTable, -1, Dmodel);
})()

var particle_table = Particles.registerParticleType({
	texture: "magicTableParticle",
	size: [0.5, 1],
	lifetime: [40, 40],
	render: 2
});

const Crafts = [];

const onCraftStart = {};

const onCraftEnd = {}

const MagicTable = {
	/*
		items = [[id, data],[id, data],[id, data]...];
		targetItem = [id, data];
		result = [id, data];
		recipeviewer_order = [1,2,3...]
		
		recipeviewer_order length must be equal 16
		
		if one of value's of recipeviewer_order equal -1 that is empty slot
		
		recipeviewer_order - order of indexes of items used for recipe viewer
	*/
	addCraft: function(items, targetItem, result, recipeviewer_order) {
		if (!items) return Logger.Log("items not listed", "MagicModAPI ERROR");
		if (!targetItem) return Logger.Log("targetItem not listed", "MagicModAPI ERROR");
		if (!result) return Logger.Log("result not listed", "MagicModAPI ERROR");
		if (recipeviewer_order && recipeviewer_order.length != 16) recipeviewer_order = null;
		Crafts.push({
			items: items,
			centre: targetItem,
			result: result,
			rv: recipeviewer_order
		});
	},
	/*
		item = [id, data];
	*/
	removeCraft: function(item) {
		if (!item) return Logger.Log("item not listed", "MagicModAPI ERROR");
		Crafts.splice(Crafts.find(function(element, index, array) {
			if (element.result[0] == item[0] && element.result[1] == item[1]) return index;
		}), 1)
	},
	/*
		item = [id, data];
	*/
	getCraft: function(item) {
		if (!item) return Logger.Log("item not listed", "MagicModAPI ERROR");
		return Crafts.find(function(element, index, array) {
			if (element.result[0] == item[0] && (element.result[1] == item[1] || item[1] == -1)) return element;
		})
	},
	/*
		item = [id, data];
	*/
	getCrafts: function(item) {
		if (!item) return Logger.Log("item not listed", "MagicModAPI ERROR");
		var listCrafts = [];
		Crafts.find(function(element, index, array) {
			if (element.result[0] == item[0] && (element.result[1] == item[1] || item[1] == -1)) listCrafts.push(element);
		})
		return listCrafts;
	},
	/*
		item = [id, data];
		func = function(coords){};
		
		If func returns 'stop', then craft stops
	*/
	onCraftStart: function(item, func) {
		if (!item) return Logger.Log("item not listed", "MagicModAPI ERROR");
		if (!func) return Logger.Log("func not listed", "MagicModAPI ERROR");
		onCraftStart[item.toString()] = func;
	},
	/*
		item = [id, data];
		func = function(coords){};
	*/
	onCraftEnd: function(item, func) {
		if (!item) return Logger.Log("item not listed", "MagicModAPI ERROR");
		if (!func) return Logger.Log("func not listed", "MagicModAPI ERROR");
		onCraftEnd[item.toString()] = func;
	}
}

TileEntity.registerPrototype(BlockID.magicTable, {
	defaultValues: {
		anim: null,
		rotation: [0, 0, 0],
		coords: null,
		step: null,
		lastid: 0,
		lastdata: 0
	},
	getTransportSlots: function() {
		return {
			input: ["slot"],
			//output: ["slot"]
		};
	},
	created: function() {
		this.data.coords = [
			[this.x + 3, this.z],
			[this.x + 3, this.z + 1],
			[this.x + 2, this.z + 2],
			[this.x + 1, this.z + 3],
			[this.x, this.z + 3],
			[this.x - 1, this.z + 3],
			[this.x - 2, this.z + 2],
			[this.x - 3, this.z + 1],
			[this.x - 3, this.z],
			[this.x - 3, this.z - 1],
			[this.x - 2, this.z - 2],
			[this.x - 1, this.z - 3],
			[this.x, this.z - 3],
			[this.x + 1, this.z - 3],
			[this.x + 2, this.z - 2],
			[this.x + 3, this.z - 1]
		]
	},
	setSlot: function(slot, id, count, data, extra) {
		var item = this.container.getSlot(slot);
		item.id = Number(id);
		item.count = Number(count);
		item.data = Number(data);
		item.extra = extra;
	},
	click: function(id, count, data, coords) {
		if(this.data.step) return;
		var pedestals = [];
		if (id == ItemID.magicWand && Entity.getSneaking(Player.get())) {
			for (var i in this.data.coords) {
				if (World.getBlock(this.data.coords[i][0], this.y, this.data.coords[i][1]).id == 49) {
					World.setBlock(this.data.coords[i][0], this.y, this.data.coords[i][1], BlockID.magicPedestal, 0);
					World.addTileEntity(this.data.coords[i][0], this.y, this.data.coords[i][1]);
					Entity.spawn(this.data.coords[i][0], this.y + 1, this.data.coords[i][1], 93);
				};
			}
			for (var i in this.data.coords) {
				if (World.getBlock(this.data.coords[i][0], this.y, this.data.coords[i][1]).id == BlockID.magicPedestal) {
					var tile = World.getTileEntity(this.data.coords[i][0], this.y, this.data.coords[i][1]);
					if (!tile) tile = World.addTileEntity(this.data.coords[i][0], this.y, this.data.coords[i][1]);
					if(tile && tile.container.getSlot('slot').id != 0)pedestals.push(this.data.coords[i]);
				}
			}
			if (this.container.getSlot('slot').id == 0 || pedestals.length == 0) return;
			var CraftingItems = {};
			for (var i in Crafts) {
				CraftingItems[Crafts[i].result.toString()] = {};
				for (var k in Crafts[i].items) {
					if (CraftingItems[Crafts[i].result.toString()][Crafts[i].items[k].toString()]) {
						CraftingItems[Crafts[i].result.toString()][Crafts[i].items[k].toString()]++;
					} else {
						CraftingItems[Crafts[i].result.toString()][Crafts[i].items[k].toString()] = 1;
					}
				}
				CraftingItems[Crafts[i].result.toString()].centre = Crafts[i].centre.toString();
			}
			var itemsInPedestals = {};
			for (var i in pedestals) {
				var tile = World.getTileEntity(pedestals[i][0], this.y, pedestals[i][1]);
				var item = tile.container.getSlot('slot');
				if (itemsInPedestals[item.id + ',' + item.data]) {
					itemsInPedestals[item.id + ',' + item.data]++
				} else {
					itemsInPedestals[item.id + ',' + item.data] = 1
				}
			}
			var centreItem = this.container.getSlot('slot').id + ',' + this.container.getSlot('slot').data;
			var result = 0
			for (var l in CraftingItems) {
				result = 0
				for (var i in itemsInPedestals) {
					if (centreItem != CraftingItems[l].centre || JSONlength(itemsInPedestals) != JSONlength(CraftingItems[l]) - 1 || !CraftingItems[l][i] || itemsInPedestals[i] != CraftingItems[l][i]) continue;
					result++
					if (result == JSONlength(itemsInPedestals) || typeof(result) == 'string') {
						result = l;
						break
					};
				}
				if (result == JSONlength(itemsInPedestals) || typeof(result) == 'string') break;
			}
			if (typeof(result) == 'string') {
				if (onCraftStart[result] && onCraftStart[result]({
						x: this.x,
						y: this.y,
						z: this.z
					}) == 'stop') return;
				for (var i in pedestals) {
					pedestals[i] = pedestals[i][0] + ";" + pedestals[i][1];
				}
				pedestals = pedestals.toString();
				this.data.step = {
					pedestals: pedestals,
					result: result
				};
				pedestals = pedestals.split(",");
				for (var i in pedestals) {
					pedestals[i] = pedestals[i].split(";");
					pedestals[i][0] = Number(pedestals[i][0]);
					pedestals[i][1] = Number(pedestals[i][1]);
				}
				var ths = this;
				asd(pedestals, 0, ths, function() {
					result = result.split(',');
					var ent = Entity.spawn(ths.x, ths.y + 1, ths.z, 93);
					if (ths.container.getSlot('slot').count > 1) {
						onCallback("EntityRemoved", function(entity) {
							if (entity == ent) {
								drop(ths.x + 0.5, ths.y + 1, ths.z + 0.5, result[0], 1, result[1]);
								return "delete";
							}
						});
						ths.container.getSlot('slot').count--;
					} else {
						ths.setSlot('slot', result[0], 1, result[1]);
					}
					ths.data.step = null;
					if (onCraftEnd[result.toString()]) onCraftEnd[result.toString()]({
						x: ths.x,
						y: ths.y,
						z: ths.z
					});
				});
			}
			return;
		} else if (this.container.getSlot('slot').id == 0) {
			Game.prevent();
			var item = Player.getCarriedItem();
			if (item.id == 0) return;
			this.setSlot('slot', item.id, 1, item.data, item.extra);
			Player.decreaseCarriedItem(1);
		} else {
			Game.prevent();
			var slot = this.container.getSlot('slot');
			drop(this.x + 0.5, this.y + 1, this.z + 0.5, slot.id, slot.count, slot.data, slot.extra);
			this.setSlot('slot', 0, 0, 0);
		}
	},
	tick: function() {
		var item = this.container.getSlot('slot');
		if ((!this.data.anim || (this.data.lastid != item.id || this.data.lastdata != item.data)) && item.id != 0) {
			if ((this.data.lastid != item.id || this.data.lastdata != item.data) && this.data.anim) this.data.anim.destroy();
			this.data.lastid = item.id;
			this.data.lastdata = item.data;
			var bonus_coords = {
				x: 0,
				y: 0,
				z: 0
			};
			this.data.rotation = [0, 0, 0];
			if (all_items.indexOf(item.id) != -1) {
				bonus_coords.x -= 0.06;
				bonus_coords.y -= 0.095;
				bonus_coords.z += 0.06125;
				this.data.rotation = [Math.PI / 2, Math.PI, 0];
			}
			this.data.anim = new Animation.Item(this.x + 0.5 + 1 / 16 + bonus_coords.x, this.y + 0.75 + 0.125 + bonus_coords.y, this.z + 0.5 - 1 / 16 + bonus_coords.z);
			this.data.anim.describeItem({
				id: item.id,
				count: 1,
				data: item.data,
				size: 1 / (16 / 6),
				rotation: this.data.rotation,
				notRandomize: true
			});
			this.data.anim.load();
		} else if (this.data.anim && item.id == 0) {
			this.data.lastid = 0;
			this.data.lastdata = 0;
			this.data.anim.destroy();
			this.data.anim = null;
		}
	},
	init: function() {
		if (this.data.anim) this.data.anim.load();
		if (this.data.step) {
			if (!this.data.step.i) return;
			var ths = this;
			var pedestals = ths.data.step.pedestals.split(",");
			for (var i in pedestals) {
				pedestals[i] = pedestals[i].split(";");
				pedestals[i][0] = Number(pedestals[i][0]);
				pedestals[i][1] = Number(pedestals[i][1]);
			}
			asd(pedestals, ths.data.step.i, ths, function() {
				var result = ths.data.step.result.split(',');
				var ent = Entity.spawn(ths.x, ths.y + 1, ths.z, 93);
				if (ths.container.getSlot('slot').count > 1) {
					onCallback("EntityRemoved", function(entity) {
						if (entity == ent) {
							drop(ths.x + 0.5, ths.y + 1, ths.z + 0.5, result[0], 1, result[1]);
							return "delete";
						}
					});
					ths.container.getSlot('slot').count--
				} else {
					ths.setSlot('slot', result[0], 1, result[1]);
				}
				ths.data.step = null;
				if (onCraftEnd[result.toString()]) onCraftEnd[result.toString()]({
					x: ths.x,
					y: ths.y,
					z: ths.z
				});
			});
		}
	},
	destroyBlock: function(coords, player) {
		if (this.data.anim) {
			this.data.anim.destroy();
		}
	}
});

function particles(tableCoords, pedestalCoords, tile, slot, particleType, interval, repeates, endFunc, curentRepeat) {
	curentRepeat = curentRepeat || 1;
	if (World.getBlock(pedestalCoords.x, pedestalCoords.y, pedestalCoords.z).id == 0 || tile.container.getSlot("slot").id == 0 || World.getBlock(tableCoords.x, tableCoords.y, tableCoords.z).id == 0 || World.getTileEntity(tableCoords.x, tableCoords.y, tableCoords.z).container.getSlot("slot").id == 0) {
		return
	}
	if (curentRepeat > repeates) {
		if (tile.container.getSlot('slot').count == 1) {
			tile.setSlot('slot', 0, 0, 0);
		} else {
			tile.container.getSlot("slot").count--;
		}
		setTimeout(function() {
			endFunc();
		}, 40);
		return;
	}
	for (var i = 0.1; i < Math.random() / 2; i += 0.1) {
		var emitter = new Particles.ParticleEmitter(pedestalCoords.x + 0.5 + Math.random() / 5, pedestalCoords.y + 0.75 + Math.random() / 5, pedestalCoords.z + 0.5 + Math.random() / 5);
		emitter.setEmitRelatively(true);
		emitter.emit(particleType, 0, 0, 0, 0, 0, 0, 0, (tableCoords.x - pedestalCoords.x) / 40 / 20, (tableCoords.y - pedestalCoords.y) / 40 / 20, (tableCoords.z - pedestalCoords.z) / 40 / 20);
	}
	setTimeout(function() {
		particles(tableCoords, pedestalCoords, tile, slot, particleType, interval, repeates, endFunc, curentRepeat + 1);
	}, interval)
}

function asd(pedestals, i, tileTable, endFunc) {
	tileTable.data.step.i = i;
	if (i >= pedestals.length) return endFunc();
	var tile = World.getTileEntity(pedestals[i][0], tileTable.y, pedestals[i][1]);
	if (tile && tile.container.getSlot('slot').id != 0) {
		particles({
			x: tileTable.x,
			y: tileTable.y,
			z: tileTable.z
		}, {
			x: pedestals[i][0],
			y: tileTable.y,
			z: pedestals[i][1]
		}, tile, 'slot', particle_table, 3, 40, function() {
			asd(pedestals, i + 1, tileTable, endFunc)
		});
	} else {
		tileTable.data.step = null;
		//asd(pedestals, i + 1, tileTable, endFunc)
	}
}




// file: items/craftingItems.js

IDRegistry.genItemID("bloodDiamond");
Item.createItem("bloodDiamond", "Blood Diamond", {
	name: "bloodDiamond"
}, {
	stack: 64
});

IDRegistry.genItemID("emptyLens");
Item.createItem("emptyLens", "Empty Lens", {
	name: "emptyLens"
}, {
	stack: 64
});




// file: crafts.js

Callback.addCallback("APILoaded", function () {
	Recipes.addShaped({id: ItemID.emptyLens, count: 1, data: 0}, [
		"did",
		"isi",
		"did"
	], ['d', 264, 0, 's', 102, 0, 'i', 265, 0]);//алмаз, панель, железо

	Recipes.addShaped({id: ItemID.magicWand, count: 1, data: 0}, [
		" gd",
		"gsg",
		"gg "
	], ['d', 264, 0, 's', 280, 0, 'g', 266, 0]);//алмаз, палка, золото

	Recipes.addShaped({id: ItemID.magicTable_item, count: 1, data: 0}, [
		"drd",
		"ooo",
		"ooo"
	], ['d', ItemID.bloodDiamond, 0, 'r', 171, 14, 'o', 49, 0]);//Кровавый алмаз, красный ковер, обсидиан

	Recipes.addShaped({id: ItemID.LensOfBlood, count: 1, data: 0}, [
		"rir",
		"ded",
		"rir"
	], ['e', ItemID.emptyLens, 0, 'i', 399, 0, 'r', 264, 0, 'd', 351, 5]);// Пустая линза, фиолетовый краситель, звезда ада, алмаз

	MagicTable.addCraft([[265, 0], [265, 0], [399, 0], [399, 0], [288, 0], [288, 0], [351, 11], [351, 11]], [ItemID.emptyLens, 0], [ItemID.LensOfAir, 0], [0,-1,7,-1,2,-1,4,-1,1,-1,6,-1,3,-1,5,-1]);// 2Железо,  2звезда ада, 2перо, 2желтый краситель, пустая линза
	MagicTable.addCraft([[265, 0], [265, 0], [399, 0], [399, 0], [377, 0], [289, 0], [351, 14], [263, 0]], [ItemID.emptyLens, 0], [ItemID.LensOfFire, 0], [0,-1,7,-1,2,-1,4,-1,1,-1,6,-1,3,-1,5,-1]);// 2Железо,  2звезда ада, огенный порошок, порох, оранжевый краситель, уголь, пустая линза
	MagicTable.addCraft([[265, 0], [265, 0], [399, 0], [399, 0], [420, 0], [420, 0], [351, 12], [351, 12]], [ItemID.emptyLens, 0], [ItemID.LensOfTelekinesis, 0], [0,-1,7,-1,2,-1,4,-1,1,-1,6,-1,3,-1,5,-1]);// 2Железо,  2звезда ада, 2поводок, 2голубой краситель, пустая линза
});




// file: RecipeViewer.js

const RVSettings = {
	size: 80,
	centre: {
		x: 500,
		y: 275
	},
	Rmul: 2.8,
	AngleMul: 0.8,
	Divider: 2.5
}

ModAPI.addAPICallback('RecipeViewer', function(RV) {
	RV.Core.registerRecipeType("MagicTable", {
		contents: {
			icon: ItemID.magicTable_item,
			elements: {
				input15: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * (RVSettings.Rmul / RVSettings.Divider),
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*10*/
				},
				input0: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 /*460*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*10*/
				},
				input1: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * (RVSettings.Rmul / RVSettings.Divider),
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*10*/
				},

				input2: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*610*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*60*/
				},

				input3: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*660*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * (RVSettings.Rmul / RVSettings.Divider)
				},
				input4: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*660*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 /*210*/
				},
				input5: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*660*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * (RVSettings.Rmul / RVSettings.Divider)
				},

				input6: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*610*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*360*/
				},

				input7: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 + RVSettings.size * (RVSettings.Rmul / RVSettings.Divider),
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*410*/
				},
				input8: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 /*460*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*410*/
				},
				input9: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * (RVSettings.Rmul / RVSettings.Divider),
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul /*410*/
				},

				input10: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*310*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*360*/
				},

				input11: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*260*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 + RVSettings.size * (RVSettings.Rmul / RVSettings.Divider)
				},
				input12: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*260*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 /*210*/
				},
				input13: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul /*260*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * (RVSettings.Rmul / RVSettings.Divider)
				},

				input14: {
					type: "slot",
					size: RVSettings.size,
					x: RVSettings.centre.x - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*310*/ ,
					y: RVSettings.centre.y - RVSettings.size / 2 - RVSettings.size * RVSettings.Rmul * RVSettings.AngleMul /*60*/
				},

				input16: {
					type: "slot",
					size: RVSettings.size * 1.2,
					x: RVSettings.centre.x - RVSettings.size / 2,
					y: RVSettings.centre.y - RVSettings.size / 2
				},

				output0: {
					type: "slot",
					x: 840,
					y: 215,
					size: 120
				},
			}
		},
		getList: function(id, data, isUsage) {
			//isUsage == true -> what crafting recipes it is used in
			//isUsage == false -> to craft that item
			var list = [];
			var crafts;
			if (isUsage) {
				crafts = [];
				Crafts.find(function(element, index, array) {
					var added = false;
					for (var l in element.items) {
						if (element.items[l][0] == id && element.items[l][1] == data && !added) {
							crafts.push(element);
							added = true;
						}
					}
					if (element.centre[0] == id && element.centre[1] == data && !added) {
						crafts.push(element);
						added = true;
					}
				})
			} else {
				crafts = MagicTable.getCrafts([id, data]);
			}
			//log(JSON.stringify(crafts));
			for (var i in crafts) {
				var input = []
				if (crafts[i].rv) {
					for (var k in crafts[i].rv) {
						if (crafts[i].rv[k] == -1) {
							input.push({
								id: 0,
								count: 0,
								data: 0
							});
						} else {
							input.push({
								id: Number(crafts[i].items[crafts[i].rv[k]][0]),
								count: 1,
								data: Number(crafts[i].items[crafts[i].rv[k]][1])
							});
						}
					}
				} else {
					for (var k in crafts[i].items) {
						input.push({
							id: Number(crafts[i].items[k][0]),
							count: 1,
							data: Number(crafts[i].items[k][1])
						});
					}
				}
				if (input.length < 16) {
					for (var k = input.length; k < 16; k++) {
						input.push({
							id: 0,
							count: 0,
							data: 0
						});
					}
				}
				input.push({
					id: Number(crafts[i].centre[0]),
					count: 1,
					data: Number(crafts[i].centre[1])
				});
				list.push({
					input: input,
					output: [{
						id: Number(crafts[i].result[0]),
						count: 1,
						data: Number(crafts[i].result[1])
					}]
				});
			}
			return list;
		}
	});
})




// file: shared.js

ModAPI.registerAPI("MagicModAPI", {
  lens: lens, //magicWand.js
  MagicTable: MagicTable, //magicTable.js
  requireGlobal: function (command) {
    return eval(command);
  }
});
Logger.Log("MagicModAPI Loaded", "API");




