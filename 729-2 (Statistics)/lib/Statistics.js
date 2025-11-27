LIBRARY({
	name: "Statistics",
	version: 2.0,
	shared: true,
	api: "CoreEngine"
});


////////////////////Save////////////////////
var data = {}, func ={}, description = {}, display = [];

Saver.addSavesScope("Statistics",
function read(scope){data = scope},
function save(){return data}
);

Callback.addCallback("LevelSelected", function(){
	data = {};
	func = {};
});


////////////////////API////////////////////
var Statistics={
	suffix: ":Stat",
	check: function(name, key, Uid){
		if(!data[Uid]){data[Uid] = {}};
		if(!data[Uid][name]){data[Uid][name] = {}};
		if(key && !data[Uid][name][key+Statistics.suffix]){data[Uid][name][key+Statistics.suffix] = 0};
		
		if(!func[Uid]){func[Uid] = {}};
		if(!func[Uid][name]){func[Uid][name] = []};
	},
	check_func: function(name, Uid){
		Statistics.check(name, null, Uid);
		(func[Uid][name]).map(function(i1, i2, self){
			if(i1 && i1.c && i1.c(data[Uid][name]) ){
				i1.r(Uid);
				self[i2] = null;
			};
		});
	},
	setStat: function(name, key, value, Uid){
		Statistics.check(name, key, Uid);
		data[Uid][name][key+Statistics.suffix] = value;
		Statistics.check_func(name, Uid);
	},
	addStat: function(name, key, number, Uid){
		Statistics.check(name, key, Uid);
		data[Uid][name][key+Statistics.suffix] += number;
		Statistics.check_func(name, Uid);
	},
	getStat: function(name, Uid){
		return data[Uid] ? (data[Uid][name] || {}) : {};
	},
	addStatCallback: function(name, condition, result, repeat, Uid){
		Statistics.check(name, null, Uid);
		if(repeat){
			(func[Uid][name]).push({"c": condition, "r": result});
			Statistics.check_func(name, Uid);
		}else if(!(condition && condition(data[Uid][name]))){
			(func[Uid][name]).push({"c": condition, "r": result});
		};
	},
	describeStat: function(name, describe){
		description[name] = describe;
		display.push(name);
	},
	getStatDescription: function(name){
		return description[name];
	},
};


////////////////////Example////////////////////
Translation.addTranslation("Craft output", {"zh": "合成输出"});
Translation.addTranslation("Use item", {"zh": "使用物品"});
Translation.addTranslation("Destroy block", {"zh": "破坏方块"});
Translation.addTranslation("Player attacks mob", {"zh": "玩家攻击生物"});
Translation.addTranslation("Mob attacks player", {"zh": "生物攻击玩家"});
Translation.addTranslation("Player kills mob", {"zh": "玩家击杀生物"});
Translation.addTranslation("Player death", {"zh": "玩家死亡"});
Translation.addTranslation("Dimension", {"zh": "维度"});
Translation.addTranslation("Biome", {"zh": "生物群系"});
Translation.addTranslation("Player moving distance", {"zh": "玩家移动距离"});
Translation.addTranslation("Play time", {"zh": "游玩时间"});

Translation.addTranslation("times", {"zh": "次数"});
Translation.addTranslation("damageValue", {"zh": "伤害"});
Translation.addTranslation("whether reached", {"zh": "是否到达"});
Translation.addTranslation("distance/(m)", {"zh": "距离/(米)"});
Translation.addTranslation("play time/(min)", {"zh": "时间/(分钟)"});

Statistics.describeStat("Default_Craft_Output", {"name": Translation.translate("Craft output"),
  "header": [{"x": 100, "text": "item"}, {"x": 300, "text": "id"}, {"x": 500, "text": "data"}, {"x": 700, "text": Translation.translate("count")}],
  "getStat": function(key, value){
  	if(key.split(":")[0]=="0"){return};
  	return [
  	  {"type": "slot", "x": 100, "item": {id: Number(key.split(":")[0]), data: Number(key.split(":")[1]), count: 1}},
  	  {"type": "text", "x": 300, "text": key.split(":")[0]},
  	  {"type": "text", "x": 500, "text": key.split(":")[1]},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Item_Use", {"name": Translation.translate("Use item"),
  "header": [{"x": 100, "text": "item"}, {"x": 400, "text": "id"}, {"x": 700, "text": Translation.translate("times")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	if(key_=="0"){return};
  	return [
  	  {"type": "slot", "x": 100, "item": {id: Number(key_), data: 0, count: 1}},
  	  {"type": "text", "x": 400, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Block_Destroy", {"name": Translation.translate("Destroy block"),
  "header": [{"x": 100, "text": "item"}, {"x": 400, "text": "id"}, {"x": 700, "text": Translation.translate("times")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	if(key_=="0"){return};
  	return [
  	  {"type": "slot", "x": 100, "item": {id: (255<Number(key_) && Number(key_)<1024) ? 255-Number(key_) : Number(key_), data: 0, count: 1}},
  	  {"type": "text", "x": 400, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Player_Attack", {"name": Translation.translate("Player attacks mob"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("damageValue")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Player_Attacked", {"name": Translation.translate("Mob attacks player"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("damageValue")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Player_Kills", {"name": Translation.translate("Player kills mob"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("times")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Player_Death", {"name": Translation.translate("Player death"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("times")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": String(value)}
  	];
  }
});
Statistics.describeStat("Default_Player_Dimension", {"name": Translation.translate("Dimension"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("whether reached")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": "Yes"}
  	];
  }
});
Statistics.describeStat("Default_Player_Biome", {"name": Translation.translate("Biome"),
  "header": [{"x": 100, "text": "id"}, {"x": 700, "text": Translation.translate("whether reached")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": "Yes"}
  	];
  }
});
Statistics.describeStat("Default_Player_MovingDistance", {"name": Translation.translate("Player moving distance"),
  "header": [{"x": 300, "text": Translation.translate("distance/(m)")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [{"type": "text", "x": 300, "text": String(Math.floor(value))}];
  }
});
Statistics.describeStat("Default_Player_Time", {"name": Translation.translate("Play time"),
  "header": [{"x": 100, "text": "type"}, {"x": 700, "text": Translation.translate("play time/(min)")}],
  "getStat": function(key, value){
  	var key_ = key.split(":")[0];
  	return [
  	  {"type": "text", "x": 100, "text": key_},
  	  {"type": "text", "x": 700, "text": String(Math.floor(value/60*100)/100)}
  	];
  }
});


Callback.addCallback("VanillaWorkbenchPostCraft", function(result, container, player){
	//craft output
	Statistics.addStat("Default_Craft_Output", result.id+":"+result.data, result.count, player);
});

Callback.addCallback("EntityHurt", function(attacker, entity, damageValue){
	if(Entity.getType(attacker) == 63){
		//player attack
		Statistics.addStat("Default_Player_Attack", Entity.getType(entity), damageValue, attacker);
	} else if(Entity.getType(entity) == 63){
		//player is attacked
		Statistics.addStat("Default_Player_Attacked", Entity.getType(attacker), damageValue, entity);
	};
});

Callback.addCallback("EntityDeath", function(entity, attacker, damagetype){
	if(Entity.getType(attacker) == 63){
		//mob kills
		Statistics.addStat("Default_Player_Kills", Entity.getType(entity), 1, attacker);
	} else if(Entity.getType(entity) == 63){
		//player death
		Statistics.addStat("Default_Player_Death", Entity.getType(attacker), 1, entity);
	};
});

var t = 0;
Callback.addCallback("ServerPlayerTick", function(player){
	t++;
	let tt = t%10;

	if(tt == 1 && !Statistics.getStat("Default_Player_Dimension", player)[(new PlayerActor(player)).getDimension()+Statistics.suffix]){
		//dimension (id)
		Statistics.setStat("Default_Player_Dimension", (new PlayerActor(player)).getDimension(), 1, player);
	};

	if(tt == 2){
		let p = Entity.getPosition(player);
		if(!Statistics.getStat("Default_Player_Biome", player)[World.getBiome(p.x, p.y)+Statistics.suffix]){
			//biome (id)
			Statistics.setStat("Default_Player_Biome", World.getBiome(p.x, p.y), 1, player);
		};
	};

	if(tt == 3){
		let vel = Entity.getVelocity(player);
		let speed = Math.sqrt(vel.x*vel.x + vel.z*vel.z);
		//movement distance
		Statistics.addStat("Default_Player_MovingDistance", "distance", speed*20, player);
	};

	if(tt == 4){
			//play time (seconds)
			Statistics.addStat("Default_Player_Time", "play", 0.5, player);
		if(Entity.getSneaking(player)){
			//sneak time (seconds)
			Statistics.addStat("Default_Player_Time", "sneak", 0.5, player);
		};
	};
});
Callback.addCallback("LevelLeft", function(){t = 0});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
	//use item
	Statistics.addStat("Default_Item_Use", item.id, 1, player);
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(player){
		//destroy block
		Statistics.addStat("Default_Block_Destroy", block.id, 1, player);
	};
});


////////////////////Export////////////////////
EXPORT("Statistics", Statistics);
EXPORT("Statistics_display", display);