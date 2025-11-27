/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 18
*/



// file: commands.js

Callback.addCallback("NativeCommand", function (str) { 
  if(str.substr(0,6) == '/utils'){
    var commands = str.substr(7).split(" ");
    if(commands[0] == "execute"){
      if(commands.length == 1) return Game.message("/utils execute [command]");
      eval(str.substr(15));
    } else if(commands[0] == "get"){
      if(commands[1] == "death_items"){
        if(!__config__.getBool("grave")) return Game.message("grave is disabled");
        if(commands.length == 2) return Game.message("/utils get death_items [id]");
        if(!title_death_datas[+commands[2]]) return Game.message("§cWrong params!");
        var pos = Player.getPosition();
        pos.y -= 1;
        World.setBlock(pos.x, pos.y, pos.z, BlockID.grave, 0);
        World.addTileEntity(pos.x, pos.y, pos.z)
        for(var i in title_death_datas[+commands[2]].items){
          var Item = title_death_datas[+commands[2]].items[i];
          World.getContainer(pos.x, pos.y, pos.z).getSlot("slot"+i).id = Item.id;
          World.getContainer(pos.x, pos.y, pos.z).getSlot("slot"+i).count = Item.count;
          World.getContainer(pos.x, pos.y, pos.z).getSlot("slot"+i).data = Item.data;
          World.getContainer(pos.x, pos.y, pos.z).getSlot("slot"+i).extra = Item.extra;
        }
      } else {
        Game.message("death_items");
      }
    } else {
      Game.message("execute, get");
    }
  }
});




// file: other.js

IMPORT('StorageInterface');

const mod = FileTools.ReadJSON(__dir__ + 'mod.info');

Callback.addCallback("LevelLoaded", function () { 
    Game.tipMessage('§c' + mod.name + '\n§a  ' + mod.version)
});

var levelloaded = false;

const searchItem = function (id, data) {
 var data = data || -1;
 var id = id || -1;
	for(var i = 9;i < 45;i++) {
	 var item = Player.getInventorySlot(i);
		if((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)){
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

const searchItemOnContainer = function(container, slots, id, data){
 var data = data || -1;
 var id = id || -1;
 for(var i in slots.length) {
   var item = container.getSlot(slots[i])
   if((item.id == id || (id == -1 && item.id != 0)) && (item.data == data || data == -1)){
	 return {
		  id: item.id,
		  data: item.data,
		  extra: item.extra,
		  count: item.count,
		  slot: slots[i]
	  }
	}
  }
}

const getPointed = ModAPI.requireGlobal("Player.getPointed");

const setTimeout = function(func, ticks){
    var upd = {
        ticks: 0,
        update: function () {
            this.ticks++
            if (this.ticks >= ticks) {
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
        update: function () {
            this.ticks++
            if (this.ticks >= ticks) {
                this.ticks = 0;
                if (func()) this.remove = true;
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
    Logger.Log(text, "Utils+ Log");
    return true;
}

var __dev = __config__.getBool("dev");
const devLog = function(text){
    if (!__dev) return false;
    if(levelloaded){
        Game.message(text);
    };
    Logger.Log(text, "Utils+ devLog");
    return true;
}

Callback.addCallback("LevelLoaded", function(){
 levelloaded = true
})

Callback.addCallback("LevelLeft", function(){ 
 levelloaded = false
});

const items_vanilla = [6,27,28,30,32,37,38,39,40,50,69,76,106,111,126,175,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511];

const blocks_vanilla = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255];

const items_and_blocks_vanilla = items_vanilla.concat(blocks_vanilla);

var all_items = items_vanilla;

var all_blocks = blocks_vanilla;

var all_items_and_blocks;

/*var files = FileTools.GetListOfFiles("/storage/emulated/0/Download/InnerCore_com.zhekasmirnov.innercore_source_from_JADX/InnerCore_com.zhekasmirnov.innercore_source_from_JADX/InnerCore_com.zhekasmirnov.innercore_source_from_JADX/assets/resource_packs/vanilla/innercore/icons", "png")
for(var i in files){
  files[i] = files[i].toString().split("/")[files[i].toString().split("/").length - 1].replace(".png", "").split("_");
  files[i][0] = Number(files[i][0]);
  //if(files[i].length == 1)files[i].push(0);
}
log(files);*/

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

const cts = function(coords){
  if(typeof(coords) != "object") return null;
  return coords.x+","+coords.y+","+coords.z;
}




// file: translate.js

Translation.addTranslation("Angel ring", {ru: "Ангельское кольцо"});
Translation.addTranslation("XP Storage", {ru: "Хранилище опыта"});
Translation.addTranslation("Builder wand", {ru: "Палочка строителя"});
Translation.addTranslation("World Clock", {ru: "Мировые часы"});
Translation.addTranslation("Magnet", {ru: "Магнит"});
Translation.addTranslation("Item Collector", {ru: "Сборщик предметов"});
Translation.addTranslation("Concentrated dust", {ru: "Концентрированная пыль"});
Translation.addTranslation("Hammer", {ru: "Молот"});
Translation.addTranslation("Flacon for souls", {ru: "Флакон для душ"});
Translation.addTranslation("Flacon with soul", {ru: "Флакон с душой"});
Translation.addTranslation("Description of death", {ru: "Описание смерти"});
Translation.addTranslation("Update frequency (in ticks)", {ru: "Частота обновления (в тиках)"});
Translation.addTranslation("Extraction pipe", {ru: "Извлекающая труба"});
Translation.addTranslation("Item pipe", {ru: "Предметная труба"});
Translation.addTranslation("Wrench", { ru: "Гаечный ключ" });
Translation.addTranslation("1 second = 20 ticks", { ru: "1 секунда = 20 тиков" });




// file: items/angelRing.js

IDRegistry.genItemID("angelRing");
Item.createItem("angelRing", "Angel ring", {
	name: "angelRing"
}, {
	stack: 1
});
var baubleEquip = false;
var ringEquiped = false;

Recipes.addShaped({
	id: ItemID.angelRing,
	count: 1,
	data: 0
}, [
	"g#g",
	"#s#",
	" # "
], ['s', 399, 0, '#', 266, 0, 'g', 20, 0]);

Callback.addCallback("tick", function() {
	if (!ringEquiped) {
		if (searchItem(ItemID.angelRing)) {
			Player.setFlyingEnabled(true);
			ringEquiped = true;
		}
	} else if (ringEquiped && !baubleEquip) {
		if (!searchItem(ItemID.angelRing)) {
			Player.setFlyingEnabled(false);
			ringEquiped = false;
		}
	}
});

ModAPI.addAPICallback("BaublesAPI", function(api) {
	api.Baubles.registerBauble({
		id: ItemID.angelRing,
		type: "ring",
		onEquip: function() {
			Player.setFlyingEnabled(true);
			ringEquiped = true;
			baubleEquip = true;
		},
		onTakeOff: function() {
			Player.setFlyingEnabled(false);
			ringEquiped = false;
			baubleEquip = false;
		}
	});
})

Callback.addCallback("EntityHurt", function(attacker, victim, damage) {
	if (searchItem(ItemID.angelRing) || baubleEquip) {
		var vel = Player.getVelocity().y;
		var time = vel / -0.06;
		var height = 0.06 * time * time / 2;
		if (height >= 4) {
			Game.prevent();
		}
	}
});




// file: items/builderWand.js

IDRegistry.genItemID("builderWand");
Item.createItem("builderWand", "Builder wand", {name: "builderWand"}, {stack: 1});

IDRegistry.genBlockID('BW_GhostBlock');
Block.createBlock('BW_GhostBlock', [
{
	name: 'GhostBlock',
	texture: [
		['BW_GhostBlock', 0]
	]
}
], Block.createSpecialType({
	base: 0,
	opaque: false,
	renderLayer: 1,
	lightopacity: 0
}));

Block.registerDropFunction(BlockID.BW_GhostBlock, function(coords, id, data, diggingLevel, toolLevel){
	return [];
})

Recipes.addShaped({id: ItemID.builderWand, count: 1, data: 0}, [
	" gg",
	" sg",
	"s  "
], ['s', 280, 0, 'g', 266, 0]);

function set(xxx,yyy,zzz, id, data, deleteInInventory){
 var getBck = World.getBlock(xxx, yyy, zzz);
	if(getBck.id == BlockID.BW_GhostBlock || getBck.id == 0 || getBck.id == 9 || getBck.id == 11){
		if(deleteInInventory){
		 if(!searchItem(id, data)) return;
			Player.setInventorySlot(searchItem(id, data).slot, id, searchItem(id, data).count - 1, data)
			if(searchItem(id, data).count <= 0){
				Player.setInventorySlot(searchItem(id, data).slot, 0, 0, 0);
				if(!searchItem(id, data)) return;
			}
		}
		World.setBlock(xxx, yyy, zzz, id, data);
	}
}

Item.registerUseFunction("builderWand", function(coords, item, block){
	if(!searchItem(block.id, block.data)) return;
	var multiplier = 3;
	var x,y,z;
	x = y = z = 0;
	var xx,yy,zz;
	xx = yy = zz = 0;
	if(coords.side==Native.BlockSide.EAST){
		x = 1;
	}
	if(coords.side == Native.BlockSide.WEST){
		x = -1;
	}
	if(coords.side == Native.BlockSide.UP){
		y = 1;
	}
	if(coords.side == Native.BlockSide.DOWN){
		y = -1;
	}
	if(coords.side == Native.BlockSide.NORTH){
		z = -1;
	}
	if(coords.side == Native.BlockSide.SOUTH){
		z = 1;
	}
	
	if(coords.side == Native.BlockSide.UP || coords.side == Native.BlockSide.DOWN){
		for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(xx, coords.y, zz).id == block.id && World.getBlock(xx, coords.y, zz).data == block.data ){
					set(xx, coords.y + y, zz, block.id, block.data, true);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.EAST || coords.side == Native.BlockSide.WEST){
		for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(coords.x, yy, zz).id == block.id && World.getBlock(coords.x, yy, zz).data == block.data){
					set(coords.x + x, yy, zz, block.id, block.data, true);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.NORTH || coords.side == Native.BlockSide.SOUTH){
	 	for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
				if(World.getBlock(xx, yy, coords.z).id == block.id && World.getBlock(xx, yy, coords.z).data == block.data){
					set(xx, yy, coords.z + z, block.id, block.data, true);
				}
			}
		}
	}
}); 

var GBinitAnim = function (){
 var GBblocks = [];

var poss = {
	x: 0,
	y: 0,
	z: 0
}
 var asddd = 0;
 Callback.addCallback("tick", function () { 
	 asddd++
  	if(asddd >= __config__.getNumber("ghost blocks update")){
	  	asddd = 0;
	  	var pos = getPointed().pos;
	  	if(pos.x != poss.x || pos.y != poss.y || pos.z != poss.z){
			poss = pos;
			for(var i in GBblocks){
			 if(GBblocks[i].destroy){
			  GBblocks[i].destroy();
			 }
			 GBblocks.splice(i, 1);
			}
		}
		
		var item = Player.getCarriedItem();
		if((item.id == ItemID.builderWand || item.id == ItemID.creativeBuilderWand) && (pos.x !== 0 || pos.y !== 0 || pos.z !== 0)){
		 var block = World.getBlock(pos.x, pos.y, pos.z);
		 var multiplier = 3;
		 if(item.id == ItemID.builderWand){
		  multiplier = 3;
		 } else if(Player.getCarriedItem().id == ItemID.creativeBuilderWand){
		  multiplier = 7;
		 }
			var x,y,z;
			x = y = z = 0;
			if(pos.side==Native.BlockSide.EAST){
				x = 1;
			} else
			if(pos.side == Native.BlockSide.WEST){
				x = -1;
			} else 
			if(pos.side == Native.BlockSide.UP){
				y = 1;
			} else
			if(pos.side == Native.BlockSide.DOWN){
				y = -1;
			} else
			if(pos.side == Native.BlockSide.NORTH){
				z = -1;
			} else
			if(pos.side == Native.BlockSide.SOUTH){
				z = 1;
			}
			if(pos.side == Native.BlockSide.UP || pos.side == Native.BlockSide.DOWN){
				for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(xx, pos.y, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, pos.y, zz).data == World.getBlock(pos.x, pos.y, pos.z).data){
						 var animation = new Animation.Item(xx + 0.65625, pos.y + y + 0.3125, zz + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			} else if(pos.side == Native.BlockSide.EAST || pos.side == Native.BlockSide.WEST){
				for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(pos.x, yy, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(pos.x, yy, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(pos.x + x, yy, zz).id == 0){
							var animation = new Animation.Item(pos.x + x + 0.65625, yy + 0.3125, zz + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			} else if(pos.side == Native.BlockSide.NORTH || pos.side == Native.BlockSide.SOUTH){
			 	for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
						if(World.getBlock(xx, yy, pos.z).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, yy, pos.z).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, yy, pos.z + z).id == 0){
							World.setBlock(xx, yy, pos.z + z, BlockID.BW_GhostBlock, 0);
							var animation = new Animation.Item(xx + 0.65625, yy + 0.3125, pos.z + z + 0.34375);
						 animation.describeItem({
					         id: 20, 
					         count: 1, 
					         data: 0, 
					         size: 1, 
					         //rotation: [Math.PI / 2, 0, 0], 
					         notRandomize: true 
					        });  
						 animation.load();
							GBblocks.push(animation);
						}
					}
				}
			}
		}
		}
	 })
	}

var GBinitBlock = function (){
TileEntity.registerPrototype(BlockID.BW_GhostBlock, {
 created: function(){
 	Game.message('Wow');
 	this.destroy();
 }
});

var GBrender = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.BW_GhostBlock, 0, GBrender);
var GBmodel = BlockRenderer.createModel();
GBmodel.addBox(0, 0, 0, 1, 1, 1, BlockID.BW_GhostBlock, 0);
GBrender.addEntry(GBmodel);

Block.setBlockShape(BlockID.BW_GhostBlock, {x: 0, y: 0, z: 0}, {x: 0.01, y: 0.01, z: 0.01});

var GBblocks = [];

var poss = {
	x: 0,
	y: 0,
	z: 0
}

var asddd = 0;
Callback.addCallback("tick", function () { 
	asddd++
	if(asddd >= __config__.getNumber("ghost blocks update")){
		asddd = 0;
		var pos = getPointed().pos;
		if(pos.x != poss.x || pos.y != poss.y || pos.z != poss.z){
			poss = pos;
			for(var i in GBblocks){
			 if(World.getBlock(GBblocks[i].x, GBblocks[i].y, GBblocks[i].z).id == BlockID.BW_GhostBlock){
				 World.setBlock(GBblocks[i].x, GBblocks[i].y, GBblocks[i].z, 0);
				}
				GBblocks.splice(i, 1);
			}
		}
		var item = Player.getCarriedItem();
		if((item.id == ItemID.builderWand || item.id == ItemID.creativeBuilderWand) && (pos.x !== 0 || pos.y !== 0 || pos.z !== 0)){
		 var block = World.getBlock(pos.x, pos.y, pos.z);
		 var multiplier = 3;
		 if(item.id == ItemID.builderWand){
		  multiplier = 3;
		 } else if(Player.getCarriedItem().id == ItemID.creativeBuilderWand){
		  multiplier = 7;
		 }
			var x,y,z;
			x = y = z = 0;
			if(pos.side==Native.BlockSide.EAST){
				x = 1;
			}
			if(pos.side == Native.BlockSide.WEST){
				x = -1;
			}
			if(pos.side == Native.BlockSide.UP){
				y = 1;
			}
			if(pos.side == Native.BlockSide.DOWN){
				y = -1;
			}
			if(pos.side == Native.BlockSide.NORTH){
				z = -1;
			}
			if(pos.side == Native.BlockSide.SOUTH){
				z = 1;
			}
			if(pos.side == Native.BlockSide.UP || pos.side == Native.BlockSide.DOWN){
				for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(xx, pos.y, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, pos.y, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, pos.y + y, zz).id == 0){
							World.setBlock(xx, pos.y + y, zz, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: xx,
							 y: pos.y + y,
						  	z: zz
						 })
						}
					}
				}
			} else if(pos.side == Native.BlockSide.EAST || pos.side == Native.BlockSide.WEST){
				for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(zz = pos.z - multiplier; zz <= pos.z + multiplier; zz++){
						if(World.getBlock(pos.x, yy, zz).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(pos.x, yy, zz).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(pos.x + x, yy, zz).id == 0){
							World.setBlock(pos.x + x, yy, zz, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: pos.x + x,
							 y: yy,
							 z: zz
						 })
						}
					}
				}
			} else if(pos.side == Native.BlockSide.NORTH || pos.side == Native.BlockSide.SOUTH){
			 	for(yy = pos.y - multiplier; yy <= pos.y + multiplier; yy++){
					for(xx = pos.x - multiplier; xx <= pos.x + multiplier; xx++){
						if(World.getBlock(xx, yy, pos.z).id == World.getBlock(pos.x, pos.y, pos.z).id && World.getBlock(xx, yy, pos.z).data == World.getBlock(pos.x, pos.y, pos.z).data && World.getBlock(xx, yy, pos.z + z).id == 0){
							World.setBlock(xx, yy, pos.z + z, BlockID.BW_GhostBlock, 0);
							GBblocks.push({
							 x: xx,
							 y: yy,
							 z: pos.z + z
						 })
						}
					}
				}
			}
		}
	}
}); 
}

if(__config__.getBool("ghost blocks")){
	if(__config__.getBool("Ghost blocks/Anim")){
		GBinitAnim();
	} else {
		GBinitBlock();
	}
}




// file: items/creativeBuilderWand.js

IDRegistry.genItemID("creativeBuilderWand");
Item.createItem("creativeBuilderWand", "Creative Builder wand", {name: "creativeBuilderWand"}, {stack: 1});

Item.registerUseFunction("creativeBuilderWand", function(coords, item, block){
	var multiplier = 7;
	var x,y,z;
	x = y = z = 0;
	var xx,yy,zz;
	xx = yy = zz = 0;
	if(coords.side==Native.BlockSide.EAST){
		x = 1;
	}
	if(coords.side == Native.BlockSide.WEST){
		x = -1;
	}
	if(coords.side == Native.BlockSide.UP){
		y = 1;
	}
	if(coords.side == Native.BlockSide.DOWN){
		y = -1;
	}
	if(coords.side == Native.BlockSide.NORTH){
		z = -1;
	}
	if(coords.side == Native.BlockSide.SOUTH){
		z = 1;
	}
	if(coords.side == Native.BlockSide.UP || coords.side == Native.BlockSide.DOWN){
		for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(xx, coords.y, zz).id == block.id && World.getBlock(xx, coords.y, zz).data == block.data ){
					set(xx, coords.y + y, zz, block.id, block.data);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.EAST || coords.side == Native.BlockSide.WEST){
		for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(zz = coords.z - multiplier; zz <= coords.z + multiplier; zz++){
				if(World.getBlock(coords.x, yy, zz).id == block.id && World.getBlock(coords.x, yy, zz).data == block.data){
					set(coords.x + x, yy, zz, block.id, block.data);
				}
			}
		}
	} else if(coords.side == Native.BlockSide.NORTH || coords.side == Native.BlockSide.SOUTH){
	 	for(yy = coords.y - multiplier; yy <= coords.y + multiplier; yy++){
			for(xx = coords.x - multiplier; xx <= coords.x + multiplier; xx++){
				if(World.getBlock(xx, yy, coords.z).id == block.id && World.getBlock(xx, yy, coords.z).data == block.data){
					set(xx, yy, coords.z + z, block.id, block.data);
				}
			}
		}
	}
}); 




// file: items/magnet.js

IDRegistry.genItemID("magnet");
Item.createItem("magnet", "Magnet", {
	name: "magnet"
}, {
	stack: 1
});

Recipes.addShaped({
	id: ItemID.magnet,
	count: 1,
	data: 0
}, [
	"iir",
	"  i",
	"iib"
], ['i', 265, 0, 'r', 35, 14, 'b', 35, 11]);

var baubleEquipMagnet = false;
var baubleDescMagnet = false;
var Baubles = false;;

ModAPI.addAPICallback("BaublesAPI", function(api) {
	Baubles = api.Baubles;
	api.Baubles.registerBauble({
		id: ItemID.magnet,
		type: "ring",
		onEquip: function() {
			baubleEquipMagnet = true;
			baubleDescMagnet = api.Baubles.getDesc(ItemID.magnet);
		},
		onTakeOff: function() {
			baubleEquipMagnet = false;
			baubleDescMagnet = false;
		}
	});
})

Item.registerUseFunction("magnet", function(coords, item, block) {
	var extra = new ItemExtraData(Player.getCarriedItem().extra);
	if (!extra.getBoolean("active")) {
		Game.tipMessage(Native.Color.GREEN + 'Power: ' + Native.Color.WHITE + 'On');
		Item.setGlint(ItemID.magnet, true);
		extra.putBoolean('active', true);
		Player.setCarriedItem(ItemID.magnet, 1, 0, extra);
	} else {
		Game.tipMessage(Native.Color.GREEN + 'Power: ' + Native.Color.WHITE + 'Off');
		Item.setGlint(ItemID.magnet, false);
		extra.putBoolean('active', false);
		Player.setCarriedItem(ItemID.magnet, 1, 0, extra);
	}
});

var tickssss = 0;
Callback.addCallback("tick", function() {
	tickssss++;
	if (tickssss >= 10) {
		tickssss = 0;
		var equiped = searchItem(ItemID.magnet, 0) || baubleEquipMagnet;
		var magnetActivated;
		if (searchItem(ItemID.magnet, 0)) {
			var extra = new ItemExtraData(searchItem(ItemID.magnet, 0).extra);
			if (!extra.getBoolean("active")) {
				magnetActivated = false
			} else {
				magnetActivated = true
			}
		} else if (baubleEquipMagnet) {
			var baublesMagnet = {
				extra: null
			};
			for (var i = 0; i <= 1; i++) {
				if (Baubles.container.getSlot("ring" + i).id == ItemID.magnet) {
					baublesMagnet = Baubles.container.getSlot("ring" + i);
				}
			};
			var extra = new ItemExtraData(baublesMagnet.extra);
			if (!extra.getBoolean("active")) {
				magnetActivated = false
			} else {
				magnetActivated = true
			}
		}
		if (equiped && magnetActivated) {
			var p = Player.getPosition();
			var entity = Entity.getAllInRange(p, 15, 64);
			for (var i = 0; i < entity.length; i++) {
				Entity.moveToTarget(entity[i], p, {
					speed: 0.5,
					denyY: false,
					jumpVel: 0.5
				})
			}
		}
	}
});




// file: items/craftingItems.js

IDRegistry.genItemID("concentratedDust");
Item.createItem("concentratedDust", "Concentrated dust", {
 name: "conc_dust"
}, {
 stack: 64
});

Callback.addCallback("PostLoaded", function () { 
 Combiner.addCraft({
  item1: {
   id: 331, 
   data: -1
  }, 
  item2: {
   id: 348, 
   data: -1
  }, 
  result: {
   id: ItemID.concentratedDust, 
   data:0
  }
 })
});




// file: items/flacon.js

IDRegistry.genItemID("flacon_for_souls");
Item.createItem("flacon_for_souls", "Flacon for souls", {
	name: "flacon_for_souls"
}, {
	stack: 1
});

IDRegistry.genItemID("flacon_with_soul");
Item.createItem("flacon_with_soul", "Flacon with soul", {
	name: "flacon_with_soul"
}, {
	stack: 1
});

Recipes.addShaped({
	id: ItemID.flacon_for_souls,
	count: 1,
	data: 0
}, [
	" s ",
	"g g",
	" g "
], ['s', 158, -1, 'g', 20, 0]);

Item.registerNoTargetUseFunction("flacon_for_souls", function(item) {
	var data = getPointed();
	if (data.entity != -1) {
		var entity = {
			health: Entity.getHealth(data.entity),
			carriedItem: Entity.getCarriedItem(data.entity),
			type: Entity.getType(data.entity),
			age: Entity.getAge(data.entity),
			mobile: Entity.getMobile(data.entity),
			sneaking: Entity.getSneaking(data.entity),
			lookAngle: Entity.getLookAngle(data.entity),
			armorSlot0: Entity.getArmorSlot(data.entity, 0),
			armorSlot1: Entity.getArmorSlot(data.entity, 1),
			armorSlot2: Entity.getArmorSlot(data.entity, 2),
			armorSlot3: Entity.getArmorSlot(data.entity, 3),
		}
		Entity.remove(data.entity);
		var extra = new ItemExtraData();
		extra.putString("entity", JSON.stringify(entity));
		Player.setCarriedItem(ItemID.flacon_with_soul, 1, 0, extra);
		devLog(JSON.stringify(entity));
	}
})

Item.registerUseFunction("flacon_with_soul", function(coords) {
	var item = Player.getCarriedItem();
	var extra = new ItemExtraData(item.extra);
	if (!extra.getString("entity")) return;
	var entity = JSON.parse(extra.getString("entity"));
	var newCoords = {
		x: coords.x + 0.5,
		y: coords.y + 1,
		z: coords.z + 0.5
	}
	Entity.spawnAtCoords(newCoords, entity.type);
	var newEntity = Entity.findNearest(newCoords, entity.type, 1);
	Entity.setHealth(newEntity, entity.health);
	Entity.setCarriedItem(newEntity, entity.carriedItem.id, entity.carriedItem.count, entity.carriedItem.data);
	if (entity.mobile) Entity.setMobile(newEntity, true);
	Entity.setAge(newEntity, entity.age);
	Entity.setSneaking(newEntity, entity.sneaking);
	Entity.setLookAngle(newEntity, entity.lookAngle.yaw, entity.lookAngle.pitch);
	for (var i = 0; i < 4; i++) {
		Entity.setArmorSlot(newEntity, i, entity["armorSlot" + i].id, entity["armorSlot" + i].count, entity["armorSlot" + i].data);
	}
	Player.setCarriedItem(ItemID.flacon_for_souls, 1, 0);
})




// file: blocks/XPStorage.js

IDRegistry.genBlockID("XPStorage");

Block.createBlock("XPStorage", [
    {
     name: "XP Storage",
     texture: [
      ["XPStorage", 0]
     ], 
     inCreative: true}
], 'opaque');

Block.setTempDestroyTime(BlockID.XPStorage, 3);

Recipes.addShaped({id:BlockID.XPStorage, count: 1, data: 0}, [
    "ibi",
    "b#b",
    "ibi"
], ['b', 42, 0, 'g', 266, 0, 'i', 265, 0]);

var guiXPS = new UI.StandartWindow({
    standart: {
        header: {
         text: {
          text: "XP Storage"
         }
        },
        inventory: {
         standart: true
        },
        background: {
         standart: true
        }
    },
    
    drawing: [],
    
    elements: {
        "text": {
         type: "text", 
         x: 650, 
         y: 172, 
         width: 300, 
         height: 30, 
         text: "0"
        },
        "xp5": {
         type: "button", 
         x: 550, 
         y: 172, 
         bitmap: "Button_xpstorage_xp5", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              if(Player.getLevel() < 5) return;
              Player.setLevel(+Player.getLevel() - 5);
              tile.data.XP += 5;
              Game.tipMessage(Native.Color.RED + '-5 lvl');
             }
        }},
        "xp-5": {
         type: "button", 
         x: 750, 
         y: 172, 
         bitmap: "Button_xpstorage_xp-5", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              if(tile.data.XP < 5) return;
              Player.setLevel(+Player.getLevel() + 5);
              tile.data.XP -= 5;
              Game.tipMessage(Native.Color.GREEN + '+5 lvl');
             }
        }},
        "xpall": {
         type: "button", 
         x: 550, 
         y: 122, 
         bitmap: "Button_xpstorage_xpall", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              tile.data.XP += Player.getLevel();
              Game.tipMessage(Native.Color.RED + '-' + Player.getLevel() + ' lvl');
              Player.setLevel(0);
             }
        }},
        "xp-all": {
         type: "button", 
         x: 750, 
         y: 122, 
         bitmap: "Button_xpstorage_xp-all", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              Player.setLevel(+Player.getLevel() + tile.data.XP);
              Game.tipMessage(Native.Color.GREEN + '+' + tile.data.XP + ' lvl');
              tile.data.XP = 0;
             }
        }},
        "xp1": {
         type: "button", 
         x: 550, 
         y: 222, 
         bitmap: "Button_xpstorage_xp1", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              if(Player.getLevel() < 1) return;
              Player.setLevel(+Player.getLevel() - 1);
              tile.data.XP++;
              Game.tipMessage(Native.Color.RED + '-1 lvl');
             }
        }},
        "xp-1": {
         type: "button", 
         x: 750, 
         y: 222, 
         bitmap: "Button_xpstorage_xp-1", 
         scale: 2.5, 
         clicker: {
             onClick: function(container, tile){
              var content = container.getGuiContent();
              if(tile.data.XP < 1) return;
              Player.setLevel(+Player.getLevel() + 1);
              tile.data.XP--;
              Game.tipMessage(Native.Color.GREEN + '+1 lvl');
             }
        }}
    }
});

TileEntity.registerPrototype(BlockID.XPStorage, {
 defaultValues:{
  XP: 0
 },
 getGuiScreen: function(){
    return guiXPS;
 },
 tick: function(){
  var content = this.container.getGuiContent();
		if(content){
			content.elements.text.text = "" + this.data.XP;
		}
 }
});

ModAPI.addAPICallback("WailaAPI", function(api){ 
 api.Waila.addExtension(BlockID.XPStorage, function(id, data, elements, tile, yPos){
   elements["LVLs"] = {
    type: "text",
    text: "LVLs: " + tile.data.XP,
    x: 200,
    y: yPos,
    font: {color: api.Style.DEF, size: 40}
   };
   yPos += 60;
   
   api.Waila.requireHeight(20);
   return yPos;
 })
})




// file: blocks/WorldT.js

IDRegistry.genBlockID("worldClock");

Block.createBlock("worldClock", [
	{
	 name: "World Clock",
	 texture: [
	  ["worldClock", 0]
	 ], 
	 inCreative: true
	}
], 'opaque');

Block.setTempDestroyTime(BlockID.worldClock, 3);

Recipes.addShaped({id:BlockID.worldClock, count: 1, data: 0}, [
	"dbd",
	"bcb",
	"dbd"
], ['c', 347, 0, 'b', 42, 0, 'd', 264, 0]);

TileEntity.registerPrototype(BlockID.worldClock, {
 defaultValues:{
  redstonePower: 0,
  redstoneSignal: false
 },
	redstone: function(params){
		this.data.redstonePower = +params.power;
		if(this.data.redstonePower == 0){
			this.data.redstoneSignal = false;
		} else if(this.data.redstoneSignal == false){
			this.data.redstoneSignal = true;
		}
	},
	tick: function(){
		if(this.data.redstoneSignal){
			if(this.data.redstonePower == 0){
				this.data.redstoneSignal = false;
			} else {
				World.setWorldTime(+World.getWorldTime() + 50);
			}
		}
	}
});





// file: blocks/grave.js

var title_death_datas = [];

function asd() {
	IDRegistry.genBlockID("grave");

	var graveContainer = new UI.Container();

	Block.createBlock("grave", [{
		name: "Grave",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}]);

	TileEntity.registerPrototype(BlockID.grave, {
		container: graveContainer
	});
	var Dmodel = new ICRender.CollisionShape();
	var entry = Dmodel.addEntry();

	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.grave, 0, render);

	var boxes = [{
			box: [0, 0, 0, 1, 0.05, 1],
			material: {
				id: 3,
				data: 1
			}
		},
		{
			box: [0.05, 0.05, 0.05, 0.95, 0.1, 0.95],
			material: {
				id: 3,
				data: 1
			}
		},
		{
			box: [0.1, 0.1, 0.15, 0.13, 0.85, 0.85],
			material: {
				id: 4,
				data: 0
			}
		},
		{
			box: [0.1, 0.85, 0.20, 0.13, 0.9, 0.8],
			material: {
				id: 4,
				data: 0
			}
		}
	]

	for (var i in boxes) {
		var box = boxes[i].box;
		var material = boxes[i].material;

		var model = BlockRenderer.createModel();

		model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], material.id, material.data);

		render.addEntry(model);
	}
	entry.addBox(0, 0, 0, 1, 0.2, 1);

	BlockRenderer.setCustomCollisionShape(BlockID.grave, 0, Dmodel)

	//BlockRenderer.setStaticICRender(BlockID.grave, -1, icRenderModel)

	Block.setTempDestroyTime(BlockID.grave, 1);

	Block.registerDropFunction(BlockID.grave, function() {
		return [];
	})

	IDRegistry.genItemID("title_death");
	Item.createItem("title_death", "Description of death", {
		name: "descOfDeath"
	}, {
		stack: 1
	});

	Saver.addSavesScope("UtilsGrave",
		function read(scope) {
			if (typeof (scope) != 'object')title_death_datas = scope.title_death_datas;
			if (!title_death_datas || typeof (scope) == 'object') title_death_datas = [];
		},
		function save() {
			var data = {
				title_death_datas: title_death_datas
			}
			return data;
		}
	);

	Callback.addCallback("LevelLeft", function () {
		title_death_datas = [];
	});

	Item.registerNameOverrideFunction(ItemID.title_death, function(item, name) {
		name = "§b" + name;
		if (!title_death_datas[item.data]) return name;
		name += " #" + item.data;
		var items = title_death_datas[item.data].items;
		var length = (items.length > 10) ? 10 : items.length;
		for (var i = 0; i < length; i++) {
			name += "\n§7" + Item.getName(items[i].id, items[i].data) + " * " + items[i].count;
		}
		if (items.length > 10) name += "\n§7and " + (items.length - length) + " more...";
		return name
	})

	Item.registerUseFunction("title_death", function(coords, item, block) {
		if (!title_death_datas[item.data]) {
			return Game.message("§cWrong data!");
		}
		var data = title_death_datas[item.data];
		var gui = new UI.Window({
			location: {
				x: 200,
				y: 75,
				width: 600,
				height: 400
			},
			drawing: [{
				type: "color",
				color: android.graphics.Color.TRANSPARENT
			}],
			elements: {
				"frame": {
					type: "frame",
					x: 0,
					y: 0,
					width: 1000,
					height: 670,
					bitmap: "frame",
					scale: 5,
				}
			}
		})
		gui.setAsGameOverlay(true);
		var container = new UI.Container();
		container.openAs(gui);
		var items = data.items;
		var content = container.getGuiContent();
		var x = 10,
			y = 10;
		content.elements["date"] = {
			type: "text",
			x: 600,
			y: 20,
			text: "Date: " + data.date,
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 20
			}
		}
		content.elements["dim"] = {
			type: "text",
			x: 600,
			y: 50,
			text: "Dimension: " + data.dimension,
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 20
			}
		}
		var length = 10;
		var pages = [];
		var z = [];
		var f = 0;
		var b = 0;
		for (var i = 1; i <= items.length; i++) {
			z[f] = i - 1;
			f++;
			if (("" + i / length).indexOf(".") == -1 && i / length != 0) {
				pages[b] = z;
				z = [];
				f = 0;
				b++;
			}
		}
		pages[b] = z;
		var page = 1;
		for (var i = 0; i < length; i++) {
			content.elements["slot_item" + i] = {
				type: "slot",
				x: x,
				y: y,
				bitmap: "_default_slot_empty",
				isTransparentBackground: true,
				visual: true
			};
			container.getSlot("slot_item" + i).id = 0;
			container.getSlot("slot_item" + i).data = 0;
			container.getSlot("slot_item" + i).count = 0;
			container.getSlot("slot_item" + i).extra = null;
			content.elements["text_item" + i] = {
				type: "text",
				x: x + 60,
				y: y + 15,
				text: "",
				font: {
					color: android.graphics.Color.WHITE,
					shadow: 0.5,
					size: 20
				}
			}
			y += 54;
		}
		content.elements["frame2"] = {
			type: "frame",
			x: 0,
			y: y,
			width: 1000,
			height: content.elements["frame"].height - y,
			bitmap: "frame",
			scale: 5,
		}
		content.elements["pages"] = {
			type: "text",
			x: 390,
			y: 580,
			text: "Page: " + page + "/" + pages.length,
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 41
			}
		}
		content.elements["closeButton"] = {
			type: "closeButton",
			x: 900,
			y: 0,
			bitmap: "close_button",
			bitmap2: "close_button",
			scale: 5
		}

		function clearSlots() {
			for (var i = 0; i < length; i++) {
				container.getSlot("slot_item" + i).id = 0;
				container.getSlot("slot_item" + i).data = 0;
				container.getSlot("slot_item" + i).count = 0;
				container.getSlot("slot_item" + i).extra = null;
				content.elements["text_item" + i].text = "";
			}
		}

		function switchPage(p) {
			if (p < 1 || p > pages.length) return
			page = p;
			content.elements["pages"].text = "Page: " + page + "/" + pages.length;
			clearSlots();
			var g = 0;
			for (var i = 0; i < pages[p - 1].length; i++) {
				container.getSlot("slot_item" + g).id = items[pages[p - 1][i]].id;
				container.getSlot("slot_item" + g).data = items[pages[p - 1][i]].data;
				container.getSlot("slot_item" + g).count = items[pages[p - 1][i]].count;
				container.getSlot("slot_item" + g).extra = items[pages[p - 1][i]].extra;
				var name = Item.getName(items[pages[p - 1][i]].id, items[pages[p - 1][i]].data).replace(/§[a-z0-9]/g, "")
				content.elements["text_item" + g].text = (name.length > 30) ? name.substr(0, 30) + "..." : name;
				g++;
			}
		}
		switchPage(1);
		content.elements["arrow_left"] = {
			type: "image",
			x: 20,
			y: 570,
			bitmap: "arrow_left",
			scale: 5,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					switchPage(page - 1);
				},
				onLongClick: function(position, container, tileEntity, window, canvas, scale) {

				}
			}
		}
		content.elements["arrow_right"] = {
			type: "image",
			x: 900,
			y: 570,
			bitmap: "arrow_right",
			scale: 5,
			clicker: {
				onClick: function(position, container, tileEntity, window, canvas, scale) {
					switchPage(page + 1);
				},
				onLongClick: function(position, container, tileEntity, window, canvas, scale) {

				}
			}
		}
	})

	Callback.addCallback("EntityDeath", function(entity) {
		if (entity == Player.get()) {
			var items = [];
			var pos = Player.getPosition();
			pos.y -= 1;
			World.setBlock(pos.x, pos.y, pos.z, BlockID.grave, 0);
			World.addTileEntity(pos.x, pos.y, pos.z)
			for (var i = 9; i < 45; i++) {
				var Item = Player.getInventorySlot(i);
				World.getContainer(pos.x, pos.y, pos.z).getSlot("slot" + i).id = Item.id;
				World.getContainer(pos.x, pos.y, pos.z).getSlot("slot" + i).count = Item.count;
				World.getContainer(pos.x, pos.y, pos.z).getSlot("slot" + i).data = Item.data;
				World.getContainer(pos.x, pos.y, pos.z).getSlot("slot" + i).extra = Item.extra;
				Player.setInventorySlot(i, 0, 0, 0);
				if (Item.id != 0) items.push({
					id: Item.id,
					data: Item.data,
					extra: Item.extra,
					count: Item.count
				});
			}
			var date = new Date();
			date = ((date.getHours() < 10) ? "0" + date.getHours() : date.getHours()) + "." + ((date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()) + "." + ((date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()) + " " + ((date.getDate() < 10) ? "0" + date.getDate() : date.getDate()) + "." + ((date.getMonth() < 10) ? "0" + date.getMonth() : date.getMonth()) + "." + date.getFullYear();
			var dim = Player.getDimension();
			setTimeout(function() {
				Player.addItemToInventory(ItemID.title_death, 1, title_death_datas.length);
				var full_data = {
					items: items,
					date: date,
					dimension: dim
				}
				title_death_datas[title_death_datas.length] = full_data
			}, 10);
		}
	});
}
if (__config__.getBool("grave")) {
	asd()
}




// file: blocks/itemCollector.js

var tickss = 0;

var lastCoords;
IDRegistry.genBlockID("itemCollector");

Recipes.addShaped({
    id: BlockID.itemCollector,
    count: 1,
    data: 0
}, [
    "cpc",
    "php",
    "cpc"
], ['h', 410, 0, 'p', 381, 0, 'c', 54, 0]);

Block.createBlock("itemCollector", [{
    name: "Item Collector",
    texture: [
        ["itemCollector", 0]
    ],
    inCreative: true
}], 'opaque');

var itemCollector_container = new UI.Container();

var itemColRad = 15;

TileEntity.registerPrototype(BlockID.itemCollector, {
    defaultValues: {
        coords: null,
        slot: null,
        ticks: 0
    },
    container: itemCollector_container,
    getTransportSlots: function() {
        return {
            //input: ["slot"],
            output: ["slot"]
        };
    },
    created: function() {
        this.data.coords = lastCoords;
        this.data.slot = this.container.getSlot("slot")
    },
    click: function(id, count, data) {
        if (this.data.slot.id == 0) return Game.message('Not available');
        Game.message(Item.getName(this.data.slot.id, this.data.slot.data) + ' * ' + this.data.slot.count);
    },
    tick: function() {
        this.data.ticks++
        if (this.data.ticks >= 30) {
            var x, y, z;
            x = y = z = 0;
            this.data.ticks = 0;
            x = y = z = 0;
            for (var i in sides) {
                if (World.getContainer(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2]) || World.addTileEntity(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2]) || World.getTileEntity(this.data.coords.x + sides[i][0], this.data.coords.y + sides[i][1], this.data.coords.z + sides[i][2])) {
                    x = sides[i][0];
                    y = sides[i][1];
                    z = sides[i][2];
                    break;
                }
            }
            if (x != 0 || y != 0 || z != 0) {
                if (this.data.slot.id != 0) {
                    if (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) || World.addTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) || World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z)) {
                        //Game.message('Что то найдено');
                        if (World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z) && World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots) {
                            //Game.message('Найдена модная хрень');
                            var size = World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input.length
                            var slot;
                            for (var l = 0; l < size; l++) {
                                if ((World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).id == 0 || (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.containerthis.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).id == this.data.slot.id && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).data == this.data.slot.data)) && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l]).count != Item.getMaxStack(this.data.slot.id)) {
                                    slot = World.getTileEntity(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getTransportSlots().input[l];
                                    l = size;
                                    //Game.message('Найден подходящий слот модной хрени');
                                }
                            };
                            while (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count < Item.getMaxStack(this.data.slot.id) && this.data.slot.count > 0) {
                                this.data.slot.count--;
                                World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).setSlot(slot, this.data.slot.id, World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count + 1, this.data.slot.data)
                            };
                            if (this.data.slot.count <= 0) {
                                this.data.slot.id = 0;
                            }
                        } else if (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z)) {
                            //Game.message('Найдена ванильная хрень');
                            var size = World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).size
                            var slot;
                            for (var l = 0; l < size; l++) {
                                if ((World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).id == 0 || (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).id == this.data.slot.id && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).data == this.data.slot.data)) && World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(l).count != Item.getMaxStack(this.data.slot.id)) {
                                    slot = l;
                                    l = size;
                                    //Game.message('Найден подходящий слот ванильной хрени');
                                }
                            };
                            while (World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count < Item.getMaxStack(this.data.slot.id) && this.data.slot.count > 0) {
                                this.data.slot.count--;
                                World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).setSlot(slot, this.data.slot.id, World.getContainer(this.data.coords.x + x, this.data.coords.y + y, this.data.coords.z + z).getSlot(slot).count + 1, this.data.slot.data)
                            };
                            if (this.data.slot.count <= 0) {
                                this.data.slot.id = 0;
                            }
                        }
                    }
                }
            }
            for (var i in Entity.getAllInRange(this.data.coords, itemColRad, 64)) {
                var ent = Entity.getAllInRange(this.data.coords, itemColRad, 64)[i];
                if (!ent) return;
                if (Entity.getDroppedItem(ent).id == this.data.slot.id && Entity.getDroppedItem(ent).data == this.data.slot.data) {
                    while (Entity.getDroppedItem(ent).count > 0 && this.data.slot.count < Item.getMaxStack(this.data.slot.id)) {
                        Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                        if (Entity.getDroppedItem(ent).count <= 0) {
                            Entity.remove(ent);
                        };
                        this.data.slot.count++;
                    }
                } else if (this.data.slot.id == 0) {
                    this.data.slot.id = Entity.getDroppedItem(ent).id;
                    this.data.slot.count = 1;
                    this.data.slot.data = Entity.getDroppedItem(ent).data;
                    Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                    while (Entity.getDroppedItem(ent).count > 0 && this.data.slot.count < Item.getMaxStack(this.data.slot.id)) {
                        Entity.setDroppedItem(ent, Entity.getDroppedItem(ent).id, Entity.getDroppedItem(ent).count - 1, Entity.getDroppedItem(ent).data);
                        if (Entity.getDroppedItem(ent).count <= 0) {
                            Entity.remove(ent);
                        };
                        this.data.slot.count++;
                    }
                    if (Entity.getDroppedItem(ent).count <= 0) {
                        Entity.remove(ent);
                    };
                }
                //Entity.getDroppedItem(Entity.getAllInRange(this.data.coords, 5)[i])
            }

        }
    }
});

Callback.addCallback("BuildBlock", function(coords, block, entity) {
    lastCoords = coords.relative;
});

ModAPI.addAPICallback("WailaAPI", function(api) {
    api.Waila.addExtension(BlockID.itemCollector, function(id, data, elements, tile, yPos) {
        var item = tile.container.getSlot("slot");
        item.name = Item.getName(item.id, item.data) + " * " + item.count;
        if (!Item.getName(item.id, item.data)) item.name = "Not available";
        elements["itemCollector_slot"] = {
            type: "text",
            text: "Item: " + item.name,
            x: 200,
            y: yPos,
            font: {
                color: api.Style.DEF,
                size: 40
            }
        };
        yPos += 60;

        api.Waila.requireHeight(20);
        return yPos;
    })
})




// file: blocks/Combiner.js

IDRegistry.genBlockID("Combiner");

Block.createBlock("Combiner", [
  {
    name: "Combiner",
    texture: [
      ["combiner", 1],
      ["combiner", 0],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1]
    ], 
    inCreative: true
  }/*,
  {
    name: "Combiner",
    texture: [
      ["combiner", 1],
      ["combiner", 3],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1]
    ], 
    inCreative: true
  },
  {
    name: "Combiner",
    texture: [
      ["combiner", 1],
      ["combiner", 0],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1]
    ], 
    inCreative: true
  },
  {
    name: "Combiner",
    texture: [
      ["combiner", 1],
      ["combiner", 3],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1],
      ["combiner", 1]
    ], 
    inCreative: true
  }*/
]);

IDRegistry.genItemID("utilsHammer");
Item.createItem("utilsHammer", "Hammer", {
 name: "utilsHammer"
}, {
 stack: 1
});
Item.setMaxDamage(ItemID.utilsHammer, 100);

Recipes.addShaped({id: BlockID.Combiner, count: 1, data: 0}, [
	"cpc",
	"p p",
	"cpc"
], ['p', 49, 0, 'c', 159, 14]);

Recipes.addShaped({id: ItemID.utilsHammer, count: 1, data: 0}, [
	" is",
	" si",
	"s  "
], ['s', 280, 0, 'i', 265, 0]);

var CombinerGUI = new UI.StandartWindow({
  standart: {
    header: {
      text: {
        text: "Combiner"
      }
    },
    inventory: {
      standart: true
    },
    background: {
      standart: true
    }
  },
    
  drawing: [],
    
  elements: {
    "item1": {
    	type: "slot",
    	x: 420,
    	y: 180
    },
    "plus": {
    	type: "image",
    	x: 520,
    	y: 182,
    	scale: 0.8,
    	bitmap: "plus"
    },
    "item2": {
    	type: "slot",
    	x: 615,
    	y: 180
    },
    "arrow": {
    	type: "image",
    	x: 715,
    	y: 182,
    	scale: 0.8,
    	bitmap: "_workbench_bar"
    },
    "result": {
    	type: "slot",
    	x: 810,
    	y: 180
    }
  }
});

var render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.Combiner, -1, render);

var boxes = [
	[0, 0, 0, 1, 0.8, 1]
]

for(var i in boxes){
 var box = boxes[i];
 var model = BlockRenderer.createModel();
 model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], BlockID.Combiner, 0);
 render.addEntry(model);
}

var shakingAnim = function(anim, data, coords){
  data.rotation[0] += Math.PI/180*10;
  anim.setPos(coords.x, coords.y + 0.1, coords.z);
  anim.describeItem(data);
  setTimeout(function(){
   data.rotation[1] += Math.PI/180*10;
   anim.setPos(coords.x, coords.y + 0.085, coords.z);
   anim.describeItem(data);
   setTimeout(function(){
    data.rotation[0] -= Math.PI/180*20;
    anim.setPos(coords.x, coords.y + 0.070, coords.z);
    anim.describeItem(data);
    setTimeout(function(){
     data.rotation[0] += Math.PI/180*10;
     data.rotation[1] -= Math.PI/180*10;
     anim.setPos(coords.x, coords.y, coords.z);
     anim.describeItem(data);
     return true;
    }, 2)
   }, 2)
  }, 2)
}

var Crafts = []

var Combiner = {
 /*
  data = {
   item1: {
    id: 331, 
    data: -1
   }, 
   item2: {
    id: 348, 
    data: -1
   }, 
   result: {
    id: ItemID.concentratedDust, 
    data:0
   }
  }
  Если data = -1, то будут верны блоки/предметы с любой data
 */
	addCraft: function(data){
  	if(!data) return Logger.Log("Data not listed", "UtilsAPI ERROR")
  	if(!data.item1 || !data.item2 || !data.result) return Logger.Log("Data wrong", "UtilsAPI ERROR");
    for(k in data){
      if(!data[k].id || (data[k].data != 0 && !data[k].data)) return Logger.Log('Data wrong "' + k + '"', "UtilsAPI ERROR")
  	}
  	Crafts.push(data)
	},
	/*
  data = {
   item1: {
    id: 331, 
    data: -1
   }, 
   item2: {
    id: 348, 
    data: -1
   }, 
   result: {
    id: ItemID.concentratedDust, 
    data:0
   }
  }
  Если data = -1, то будут верны блоки/предметы с любой data
 */
	removeCraft: function(data){
	  if(!data) return Logger.Log("Data not listed", "UtilsAPI ERROR")
    if(!data.item1 || !data.item2 || !data.result) return Logger.Log("Data wrong", "UtilsAPI ERROR");
    for(k in data){
      if(!data[k].id || !data[k].data) return Logger.Log("Data wrong", "UtilsAPI ERROR")
    }
	  Crafts.splice(Crafts.find(function(element, index, array){
 		  if(element.item1.id == data.item1.id && (element.item1.data == data.item1.data || data.item1.data == -1) && element.item2.id == data.item2.id && (element.item2.data == data.item2.data  || data.item2.data == -1) && data.result.id == element.result.id && (data.result.id == element.result.id || data.result.id == -1)){
 		   return index
 		  }
 		}), 1);
	}
}

TileEntity.registerPrototype(BlockID.Combiner, {
 defaultValues:{
  coords: null,
  anim1: null,
  anim2: null,
  ticks: 0,
  item1: null,
  item2: null,
  used: 0,
  rotation1: null,
  rotation2: null,
  crafting: false
 },
 getGuiScreen: function(){
    return CombinerGUI;
 },
 getTransportSlots: function(){
		return {
		 input: ["item1", "item2"], 
		 output: ["result"]
		};
	},
 click: function(id, count, data, coords){
 	if(id == ItemID.utilsHammer){
 		if(this.container.getSlot('item1').id != 0 && this.container.getSlot('item2').id != 0){
 		var container = this.container;
 		var anim1 = this.data.anim1;
 		var anim2 = this.data.anim2;
 		var used = this.data.used;
 		var coords = this.data.coords;
 		var rotation1 = this.data.rotation1;
 		var rotation2 = this.data.rotation2;
 		var crafting = this.data.crafting;
 		var ths = this;
 		 if(Crafts.find(function(element, index, array){
 		  if(element.item1.id == container.getSlot('item1').id && (element.item1.data == container.getSlot('item1').data || element.item1.data == -1) && element.item2.id == container.getSlot('item2').id && (element.item2.data == container.getSlot('item2').data  || element.item2.data == -1)){
 		   return element
 		  }
 		 })){
 		  var result = Crafts.find(function(element, index, array){
 		  if(element.item1.id == container.getSlot('item1').id && (element.item1.data == container.getSlot('item1').data || element.item1.data == -1) && element.item2.id == container.getSlot('item2').id && (element.item2.data == container.getSlot('item2').data  || element.item2.data == -1)){
 		   return element
 		  }
 		 }).result;
 		 if((container.getSlot('result').id == result.id || container.getSlot('result').id == 0) && container.getSlot('result').count <= Item.getMaxStack(result.id) && !crafting){
 		  ths.data.crafting = true;
 		  setTimeout(function(){
 		   ths.data.crafting = false;
 		  }, 10)
 		  Player.setCarriedItem(id, count, data + 2);
 		  if(data >= 98){
 			  Player.setCarriedItem(0, 0, 0);
 		  }
 		  shakingAnim(anim1, {
 		   id: container.getSlot('item1').id, 
				 count: 1, 
				 data: container.getSlot('item1').data, 
				 size: 0.25, 
				 rotation: rotation1, 
				 notRandomize: true 
 		  }, anim1.coords);
 		  shakingAnim(anim2, {
 		   id: container.getSlot('item2').id, 
				 count: 1, 
				 data: container.getSlot('item2').data, 
				 size: 0.25, 
				 rotation: rotation2, 
				 notRandomize: true
 		  }, anim2.coords);
 		  ths.data.used++
 		  if(ths.data.used >= 3){
 		  ths.data.used = 0;
 		  var slot = container.getSlot('result');
 		  slot.id = result.id;
 		  slot.count += 1;
 		  slot.data = result.data;
 		  var item1 = container.getSlot('item1');
 		  var item2 = container.getSlot('item2');
 		  if(item1.count == 1){
 		   item1.id = 0;
 		   item1.count = 0;
 		   item1.data = 0;
 		  } else {
 		   item1.count -= 1
 		  }
 		  if(item2.count == 1){
 		   item2.id = 0;
 		   item2.count = 0;
 		   item2.data = 0;
 		  } else {
 		   item2.count -= 1
 		  }
 		  }
 		  
 		 }
 		 }
 		}
 		return true
 	}
 },
 created: function(){
	this.data.coords = lastCoords;
 },
 tick: function(){
 	this.data.ticks++;
 	if(this.data.ticks >= 10){
 		this.data.ticks = 0;
 		if(this.container.getSlot('item1').id != 0){
 			if(!this.data.anim1){
        var bonus_coords = {x:0,y:0,z:0};
        this.data.rotation1 = [0,0,0];
        if(all_items.indexOf(this.container.getSlot('item1').id) != -1){
          bonus_coords.x -= 0.0625/2+0.0625/8;
          bonus_coords.y -= 0.0625-0.0625/6;
          bonus_coords.z += 0.0625/2+0.0625/8;
          this.data.rotation1 = [Math.PI / 2, Math.PI, 0];
        }
	 			this.data.anim1 = new Animation.Item(this.data.coords.x + 0.3203125 + bonus_coords.x, this.data.coords.y + 0.870 + bonus_coords.y, this.data.coords.z + 0.4609375 + bonus_coords.z);
	 			this.data.anim1.describeItem({
				  id: this.container.getSlot('item1').id, 
				  count: 1, 
				  data: this.container.getSlot('item1').data, 
				  size: 0.25, 
				  rotation: this.data.rotation1, 
				  notRandomize: true 
				});
				this.data.anim1.load();
 			}
 		} else if(this.data.anim1){
 			this.data.anim1.destroy();
 			this.data.anim1 = null;
 		}
 		if(this.container.getSlot('item2').id != 0){
 		  if(!this.data.anim2){
        var bonus_coords = {x:0,y:0,z:0};
        this.data.rotation2 = [0,0,0];
        if(all_items.indexOf(this.container.getSlot('item2').id) != -1){
          bonus_coords.x -= 0.0625/2+0.0625/8;
          bonus_coords.y -= 0.0625-0.0625/6;
          bonus_coords.z += 0.0625/2+0.0625/8;
          this.data.rotation2 = [Math.PI / 2, Math.PI, 0];
        }
	 			this.data.anim2 = new Animation.Item(this.data.coords.x + 0.7578125 + bonus_coords.x, this.data.coords.y + 0.870 + bonus_coords.y, this.data.coords.z + 0.4609375 + bonus_coords.z);
	 			this.data.anim2.describeItem({
				  id: this.container.getSlot('item2').id, 
				  count: 1, 
				  data: this.container.getSlot('item2').data, 
				  size: 0.25, 
				  rotation: this.data.rotation2,
				  notRandomize: true 
				});
				this.data.anim2.load();
 			}
 		} else if(this.data.anim2){
 			this.data.anim2.destroy();
 			this.data.anim2 = null;
 		}
 	}
 },
 init: function(){
	if(this.data.anim1){
		this.data.anim1.load();
	}
	if(this.data.anim2){
		this.data.anim2.load();
	}
 },
 destroyBlock: function(coords, player){
  if(this.data.anim1){
		this.data.anim1.destroy();
		this.data.anim1 = null;
	}
	if(this.data.anim2){
		this.data.anim2.destroy();
		this.data.anim2 = null;
	}
 }
});

ModAPI.addAPICallback("WailaAPI", function(api){ 
 api.Waila.addExtension(BlockID.Combiner, function(id, data, elements, tile, yPos){
   var item1 = tile.container.getSlot("item1");
   item1.name = Item.getName(item1.id, item1.data) + " * " + item1.count;
   if(!Item.getName(item1.id, item1.data)) item1.name = "Not available";
   var item2 = tile.container.getSlot("item2");
   item2.name = Item.getName(item2.id, item2.data) + " * " + item2.count;
   if(!Item.getName(item2.id, item2.data)) item2.name = "Not available";
   var result = tile.container.getSlot("result");
   result.name = Item.getName(result.id, result.data) + " * " + result.count;
   if(!Item.getName(result.id, result.data)) result.name = "Not available";
   elements["Item1"] = {
    type: "text",
    text: "Item1: " + item1.name,
    x: 200,
    y: yPos,
    font: {color: api.Style.DEF, size: 40}
   };
   yPos += 60;

   elements["Item2"] = {
    type: "text",
    text: "Item2: " + item2.name,
    x: 200,
    y: yPos,
    font: {color: api.Style.DEF, size: 40}
   };
   yPos += 60;
   
   elements["Result"] = {
    type: "text",
    text: "Result: " + result.name,
    x: 200,
    y: yPos,
    font: {color: api.Style.DEF, size: 40}
   };
   yPos += 60;
   
   api.Waila.requireHeight(60);
   return yPos;
 })
})




// file: blocks/wire.js

var groups = {
	last: 0
};
var ignored = {}

IDRegistry.genBlockID("utilsWire");
Block.createBlock("utilsWire", [{
	name: "Pipe",
	texture: [
		["utilsWire", 0]
	],
	inCreative: false
}]);
IDRegistry.genItemID("utilsWire_item");
Item.createItem("utilsWire_item", "Item pipe", {
	name: "pipe_item"
}, {
	stack: 64
});
Recipes.addShaped({
	id: ItemID.utilsWire_item,
	count: 16,
	data: 0
}, [
	"sss",
	"iii",
	"sss"
], ['i', 265, 0, 's', 1, 0]);

IDRegistry.genBlockID("utilsItemGetter");
Block.createBlock("utilsItemGetter", [{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //left
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //right
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //forward
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //back
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	}, //up
	{
		name: "Extraction pipe",
		texture: [
			["stone", 0]
		],
		inCreative: false
	} //down
]);
IDRegistry.genItemID("utilsItemGetter_item");
Item.createItem("utilsItemGetter_item", "Extraction pipe", {
	name: "Epipe_item"
}, {
	stack: 64
});
Recipes.addShaped({
	id: ItemID.utilsItemGetter_item,
	count: 1,
	data: 0
}, [
	"ssi",
	"iih",
	"ssi"
], ['i', 265, 0, 's', 1, 0, 'h', 410, 0]);

var lastBlockUtilsItemGetterId;
var blacklist = {};

Saver.addSavesScope("UtilsWire",
	function read(scope) {
		if (typeof (scope) != 'object')groups = JSON.parse(scope);
		if (!groups || typeof (scope) == 'object') {
			groups = {
				last: 0
			};
		}
	},
	function save() {
		return JSON.stringify(groups);
	}
);

function getDataOnSide(side) {
	var blockDaata = [4, 5, 1, 0, 2, 3];
	return blockDaata[side];
}

Callback.addCallback("LevelLoaded", function() {
	for (var i in groups) {
		if (i == 'last') continue;
		var splited = i.split(",");
		var coords = {
			x: splited[0],
			y: splited[1],
			z: splited[2]
		};
		if (groups[i].not) {
			for (var d in groups[i].not) {
				ICRender.getGroup("not" + coords.x + "," + coords.y + "," + coords.z + ":" + groups[i].not[d].x + "," + groups[i].not[d].y + "," + groups[i].not[d].z + "utilsWire").add(World.getBlock(groups[i].not[d].x, groups[i].not[d].y, groups[i].not[d].z).id, -1);
			}
		};
		mapGetter(coords, groups[i].i, groups[i].meta, true);
	}
});

Callback.addCallback("LevelLeft", function () {
	groups = {last:0};
});

Item.registerUseFunction("utilsItemGetter_item", function(coords, item, block) {
	var relBlock = World.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
	if (relBlock.id != 0 && relBlock.id != 9 && relBlock.id != 11) return;
	lastBlockUtilsItemGetterId = getDataOnSide(coords.side);
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.utilsItemGetter, lastBlockUtilsItemGetterId);
	World.addTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
	groups.last++;
	groups[coords.relative.x + "," + coords.relative.y + "," + coords.relative.z] = {
		i: groups.last,
		meta: lastBlockUtilsItemGetterId
	};
	mapGetter(coords.relative, groups.last, lastBlockUtilsItemGetterId);
	Player.decreaseCarriedItem(1);
});

Item.registerUseFunction("utilsWire_item", function(coords, item, block) {
	var relBlock = World.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
	if (relBlock.id != 0 && relBlock.id != 9 && relBlock.id != 11) return;
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.utilsWire, 0);
	groups.last++;
	groups[coords.relative.x + "," + coords.relative.y + "," + coords.relative.z] = {
		i: groups.last
	};
	mapGetter(coords.relative, groups.last);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("utilsWire", function(coords, id, data, diggingLevel, toolLevel) {
	groups[coords.x + "," + coords.y + "," + coords.z] = undefined;
	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
	return [[ItemID.utilsWire_item, 1, 0]];
});

Block.registerDropFunction("utilsItemGetter", function(coords, id, data, diggingLevel, toolLevel) {
	groups[coords.x + "," + coords.y + "," + coords.z] = undefined;
	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
	return [[ItemID.utilsItemGetter_item, 1, 0]];
});

(function() {

	var group = ICRender.getGroup("utilsWire");
	group.add(BlockID.utilsItemGetter, -1);
	group.add(BlockID.utilsWire, -1);

	var boxes = [
		[
			[0.2, 0.2, 0.001, 0.8, 0.8, 0.03] //left
		],
		[
			[0.8, 0.8, 0.97, 0.2, 0.2, 0.999] //right
		],
		[
			[0.97, 0.8, 0.8, 0.999, 0.2, 0.2] //forward
		],
		[
			[0.001, 0.2, 0.2, 0.03, 0.8, 0.8] //back
		],
		[
			[0.8, 0.97, 0.8, 0.2, 0.999, 0.2] //up
		],
		[
			[0.2, 0.001, 0.2, 0.8, 0.03, 0.8] //down
		]
	];

	var width = 0.2;
	var centerWidth = 0.3;

	var boxesWire = [
		[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2], //left
		[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1], //right
		[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2], //forward
		[0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2], //back
		[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2], //up
		[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] //down
	];

	for (var meta = 0; meta < 6; meta++) {
		var boxe = boxes[meta];
		var wire = boxesWire[meta]

		var Dmodel = new ICRender.CollisionShape();
		var render = new ICRender.Model();
		BlockRenderer.enableCoordMapping(BlockID.utilsItemGetter, meta, render);
		var model = BlockRenderer.createModel();
		model.addBox(wire[0], wire[1], wire[2], wire[3], wire[4], wire[5], BlockID.utilsWire, 0);
		model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
		render.addEntry(model);

		var boxes1 = [{
				side: [1, 0, 0],
				box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]
			},
			{
				side: [-1, 0, 0],
				box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]
			},
			{
				side: [0, 1, 0],
				box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]
			},
			{
				side: [0, -1, 0],
				box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]
			},
			{
				side: [0, 0, 1],
				box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]
			},
			{
				side: [0, 0, -1],
				box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]
			},
		]
		var entry = Dmodel.addEntry();
		entry.addBox(0.2, 0.2, 0.2, 0.8, 0.8, 0.8);
		BlockRenderer.setCustomCollisionShape(BlockID.utilsItemGetter, meta, Dmodel)
	}
	var Dmodel = new ICRender.CollisionShape();
	var render = new ICRender.Model();
	var model = BlockRenderer.createModel();
	model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
	render.addEntry(model);
	var entry = Dmodel.addEntry();
	entry.addBox(0.2, 0.2, 0.2, 0.8, 0.8, 0.8);
	BlockRenderer.setCustomCollisionShape(BlockID.utilsWire, -1, Dmodel);
	BlockRenderer.enableCoordMapping(BlockID.utilsWire, -1, render);
})()

function mapGetter(coords, i, meta, atach) {
	coords.x = Number(coords.x);
	coords.y = Number(coords.y);
	coords.z = Number(coords.z);

	var boxes = [
		[
			[0.2, 0.2, 0.001, 0.8, 0.8, 0.03] //left
		],
		[
			[0.8, 0.8, 0.97, 0.2, 0.2, 0.999] //right
		],
		[
			[0.97, 0.8, 0.8, 0.999, 0.2, 0.2] //forward
		],
		[
			[0.001, 0.2, 0.2, 0.03, 0.8, 0.8] //back
		],
		[
			[0.8, 0.97, 0.8, 0.2, 0.999, 0.2] //up
		],
		[
			[0.2, 0.001, 0.2, 0.8, 0.03, 0.8] //down
		]
	];

	var width = 0.2;
	var centerWidth = 0.3;

	var boxesWire = [
		[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2], //left
		[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1], //right
		[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2], //forward
		[0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2], //back
		[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2], //up
		[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] //down
	];

	var boxe = [];
	if (meta >= 0) {
		boxe = boxes[meta];
		var wire = boxesWire[meta]
	}

	var render = new ICRender.Model();

	for (var n in boxe) {
		var box = boxe[n];
		var model = BlockRenderer.createModel();

		model.addBox(box[0], box[1], box[2], box[3], box[4], box[5], "quartz_block_side", 0);
		render.addEntry(model);
	}
	var model = BlockRenderer.createModel();
	if (meta >= 0) model.addBox(wire[0], wire[1], wire[2], wire[3], wire[4], wire[5], BlockID.utilsWire, 0);
	model.addBox(0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 - centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, 0.5 + centerWidth / 2, BlockID.utilsWire, 0);
	render.addEntry(model);

	var boxes1 = [{
			side: [1, 0, 0],
			box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]
		},
		{
			side: [-1, 0, 0],
			box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]
		},
		{
			side: [0, 1, 0],
			box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]
		},
		{
			side: [0, -1, 0],
			box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]
		},
		{
			side: [0, 0, 1],
			box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]
		},
		{
			side: [0, 0, -1],
			box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]
		},
	]
	for (var l in boxes1) {
		var box = boxes1[l];
		var blockg = groups[(coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2])];
		if (!atach && blockg) {
			BlockRenderer.unmapAtCoords(coords.x + box.side[0], coords.y + box.side[1], coords.z + box.side[2]);
			var crds = {
				x: coords.x + box.side[0],
				y: coords.y + box.side[1],
				z: coords.z + box.side[2]
			}
			mapGetter(crds, blockg.i, blockg.meta, true)
		}
		var model = BlockRenderer.createModel();
		model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], BlockID.utilsWire, 0);
		var gp = "not" + coords.x + "," + coords.y + "," + coords.z + ":" + (coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2]) + "utilsWire";
		var gp2 = "not" + (coords.x + box.side[0]) + "," + (coords.y + box.side[1]) + "," + (coords.z + box.side[2]) + ":" + coords.x + "," + coords.y + "," + coords.z + "utilsWire";
		render.addEntry(model).setCondition(ICRender.AND(ICRender.BLOCK(box.side[0], box.side[1], box.side[2], ICRender.getGroup(gp + (ignored[gp] >= 0 ? ignored[gp] : '')), true), ICRender.BLOCK(box.side[0], box.side[1], box.side[2], ICRender.getGroup("utilsWire"), false)));
	}
	BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, render);
}

function coordsOnBlockData(blockData, coords) {
	var retCoords = [{
			x: coords.x,
			y: coords.y,
			z: coords.z - 1
		},
		{
			x: coords.x,
			y: coords.y,
			z: coords.z + 1
		},
		{
			x: coords.x + 1,
			y: coords.y,
			z: coords.z
		},
		{
			x: coords.x - 1,
			y: coords.y,
			z: coords.z
		},
		{
			x: coords.x,
			y: coords.y + 1,
			z: coords.z
		},
		{
			x: coords.x,
			y: coords.y - 1,
			z: coords.z
		}
	]

	return retCoords[blockData];
}

Callback.addCallback("BuildBlock", function(coords, block, entity) {
	var coordss = {};
	for (var i in sides) {
		coordss.x = coords.x + sides[i][0]
		coordss.y = coords.y + sides[i][1]
		coordss.z = coords.z + sides[i][2]
		var bck = World.getBlock(coordss.x, coordss.y, coordss.z);
		if (bck.id == BlockID.utilsWire || bck.id == BlockID.utilsItemGetter) {
			searchContainers(coordss, coordss)
		}
	}
});

function searchContainers(coordsf, outCoordsf) {
	var containers = [];
	var outCoords = [];
	var started = [];

	function asdds(coords) {
		if (started.indexOf(cts(coords)) != -1) return;
		started.push(cts(coords));
		//devLog("Поиск контейнера на " + coords.x + " " + coords.y + " " + coords.z);
		var tc;
		var coordss = {};
		for (var i in sides) {

			var bonus;

			coordss.x = coords.x + sides[i][0];
			coordss.y = coords.y + sides[i][1];
			coordss.z = coords.z + sides[i][2];

			if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.utilsItemGetter && World.getTileEntity(coords.x, coords.y, coords.z)) bonus = World.getTileEntity(coords.x, coords.y, coords.z).data.target;
			var not = false;
			if (groups && groups[cts(coords)] && groups[cts(coords)].not && groups[cts(coords)].not.map(function(d) {
					return d.x + ',' + d.y + ',' + d.z
				}).indexOf(cts(coordss)) != -1) not = true;
			if (outCoords.indexOf(cts(coordss)) == -1 && cts(coords) != cts(bonus) && !not) {
				var cont = World.getContainer(coordss.x, coordss.y, coordss.z);
				var tile = World.addTileEntity(coordss.x, coordss.y, coordss.z) || World.getTileEntity(coordss.x, coordss.y, coordss.z);
				if (cont) {
					//devLog("Что то найдено");
					tc = {
						container: cont,
						type: "vanilla"
					};
					if (!tile) {
						//devLog("Найден ванильный контейнер");
						tc.size = World.getContainer(coordss.x, coordss.y, coordss.z).size;
						tc.slots = [];
						for (var k = 0; k < tc.size; k++) {
							tc.slots.push(k);
						}
					} else if (tile && tile.getTransportSlots && tile.getTransportSlots().input) {
						//devLog("Найден контейнер из мода");
						tc.size = tile.getTransportSlots().input.length;
						tc.type = "modded";
						tc.TileEntity = tile;
						tc.slots = tile.getTransportSlots().input;
					} else if (tile && !tile.getTransportSlots) {
						//devLog("У контейнера не указаны слоты");
						tc = false;
					}
				}
				if (tc && (containers && !containers.find(function(element, index, array) {
						if (element.x == coordss.x && element.y == coordss.y && element.z == coordss.z) return index;
					}))) {
					tc.x = coordss.x;
					tc.y = coordss.y;
					tc.z = coordss.z;
					if (tc.size != 0) {
						ICRender.getGroup("utilsWire").add(World.getBlock(coordss.x, coordss.y, coordss.z).id, -1);
					}
					//devLog("pushed");
					containers.push(tc);
					/*if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.utilsWire) World.setBlock(coords.x, coords.y, coords.z, BlockID.utilsWire, 0);*/
					tc = false;
				}
				if (World.getBlock(coordss.x, coordss.y, coordss.z).id == BlockID.utilsWire || World.getBlock(coordss.x, coordss.y, coordss.z).id == BlockID.utilsItemGetter) {
					outCoords.push(cts(coords));
					asdds(coordss);
				}
			}
		}

	}
	outCoords.push(cts(outCoordsf));
	asdds(coordsf);
	//devLog('Поиск окончен');
	/*devLog(containers.map(function (d) {
		return d.x + ',' + d.y + ',' + d.z
	}));*/
	/*var _containers = [];
	for (var i = containers.length - 1; i >= 0; i--) {
		_containers.push(containers[i]);
	}*/
	return containers;

}

/*Callback.addCallback('tick', function () {
	Game.tipMessage(cts(getPointed().pos));
});*/

function targetIsContainer(coords) {
	var tc = false;
	var coordss = coords;
	if (World.getContainer(coordss.x, coordss.y, coordss.z)) {
		//devLog("target Что то найдено");
		tc = {
			container: World.getContainer(coordss.x, coordss.y, coordss.z),
			type: "vanilla"
		};
		if (!World.getTileEntity(coordss.x, coordss.y, coordss.z)) {
			//devLog("target Найдена ванильная хрень");
			tc.size = World.getContainer(coordss.x, coordss.y, coordss.z).size;
			tc.slots = [];
			for (var k = 0; k < tc.size; k++) {
				tc.slots.push(k);
			}
		} else if ((World.addTileEntity(coordss.x, coordss.y, coordss.z) || World.getTileEntity(coordss.x, coordss.y, coordss.z)) && World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots && World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output) {
			//devLog("target Найдена модная хрень");
			tc.size = World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output.length;
			tc.type = "modded";
			tc.TileEntity = World.getTileEntity(coordss.x, coordss.y, coordss.z);
			tc.slots = World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots().output;
		} else if (World.getTileEntity(coordss.x, coordss.y, coordss.z) && !World.getTileEntity(coordss.x, coordss.y, coordss.z).getTransportSlots) {
			tc = false;
		}
	}

	return tc;
}

function searchExportSlot(container, slots, slot) {
	if (container.getSlot(slots[slot]).id != 0) {
		//devLog("True slot: " + slot);
		return slots[slot];
	} else if (slot < slots.length - 1) {
		return searchExportSlot(container, slots, slot + 1);
	} else {
		//devLog("Slot not found");
		return "Slot not found";
	}
}

function searchImportSlot(containers, slot, cont, item) {
	var item2 = containers[cont].container.getSlot(containers[cont].slots[slot]);
	if (item2.id == 0 || (item2.id == item.id && item2.data == item.data && item2.count < Item.getMaxStack(item.id) && !item.extra)) {
		devLog('cont: ' + cont);
		return {
			slot: containers[cont].slots[slot],
			container: containers[cont].container
		};
	} else if (slot < containers[cont].slots.length - 1) {
		return searchImportSlot(containers, slot + 1, cont, item);
	} else if (cont < containers.length - 1) {
		return searchImportSlot(containers, 0, cont + 1, item);
	} else {
		//devLog("Error on export((");
		return false;
	}
}

function pay(container1, container2, slot1, slot2, item) {
	//devLog("pay");
	var item1 = container1.getSlot(slot1);
	if (item1.count != item.count) return;
	var item2 = container2.getSlot(slot2);
	var count = Math.min(item2.count + item.count, 64);
	var other = Math.max(item2.count + item.count - 64, 0);
	container2.setSlot(slot2, item.id, count, item.data);
	container1.setSlot(slot1, item1.id, other, item1.data)
	if (container1.validateSlot) container1.validateSlot(slot1);
	if (container2.validateSlot) container2.validateSlot(slot2);
}

function apply(ths) {
	var target = targetIsContainer(ths.data.target);
	if (!target) return devLog("!target");
	var containers = searchContainers(ths, ths.data.target);
	if (containers.length == 0) return devLog("no containers");
	var exportSlot = searchExportSlot(target.container, target.slots, 0)
	if (exportSlot == "Slot not found") return devLog("export slot not found");
	var exportItem = target.container.getSlot(exportSlot);
	var importData = searchImportSlot(containers, 0, 0, target.container.getSlot(exportSlot));
	if (!importData) return devLog("no import slot");
	pay(target.container, importData.container, exportSlot, importData.slot, target.container.getSlot(exportSlot));
}

var containerWIRE = new UI.Container();
var wireGUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: Translation.translate('Extraction pipe')
			}
		},
		background: {
			standart: true
		}
	},
	drawing: [],
	elements: {
		"DellayScroll": {
			type: "scroll",
			x: 100,
			y: 200,
			length: 800,
			min: 1,
			max: 120,
			isInt: true,
			value: 0
		},
		"text": {
			type: "text",
			x: 300,
			y: 150,
			text: "Частота обновления (в тиках) : 0"
		},
		"text2": {
			type: "text",
			x: 425,
			y: 450,
			font: {
				color: android.graphics.Color.WHITE,
				shadow: 0.5,
				size: 15
			},
			text: Translation.translate("1 second = 20 ticks")
		}
	}
})

TileEntity.registerPrototype(BlockID.utilsItemGetter, {
	defaultValues: {
		blockData: null,
		target: null,
		slot: null,
		ticks: 0,
		updateFreq: 60,
		value: 0
	},
	getGuiScreen: function() {
		if (Player.getCarriedItem().id == ItemID.utilsWrench) return;
		Game.prevent();
		this.container.openAs(wireGUI);
		var content = this.container.getGuiContent();
		var ths = this;
		content.elements.DellayScroll.onNewValue = function(value, container, element) {
			ths.data.updateFreq = value;
			content.elements.text.text = Translation.translate("Update frequency (in ticks)") + " : " + ths.data.updateFreq;
		}
		content.elements.DellayScroll.value = this.data.updateFreq;
		content.elements.text.text = Translation.translate("Update frequency (in ticks)") + " : " + this.data.updateFreq;
	},
	created: function() {
		this.data.blockData = lastBlockUtilsItemGetterId;
		this.data.target = coordsOnBlockData(this.data.blockData, this);
	},
	tick: function() {
		this.data.ticks++;
		if (this.data.ticks >= this.data.updateFreq) {
			this.data.ticks = 0;
			try {
				eval("apply(this)");
			} catch (err) {
				devLog(err);
			};
		}
	},
	init: function() {
		searchContainers(this, this.data.target);
	}
})




// file: blocks/XPFarm.js

IDRegistry.genBlockID("XPFarm_core");

Block.createBlock("XPFarm_core", [
    {
     name: "XP Reactor Core",
     texture: [
      ["XPFarm_core", 0]
     ], 
     inCreative: false
    }
],  Block.createSpecialType({base: 49, destroytime: -1}));

IDRegistry.genBlockID("XPFarm_block");

Block.createBlock("XPFarm_block", [
    {
     name: "XP Reactor Frame",
     texture: [
      ["XPFarmBlock", 0]
     ], 
     inCreative: false
    }
], Block.createSpecialType({base: 49}));

Block.registerDropFunctionForID(BlockID.XPFarm_core, function(coords, id, data, diggingLevel, toolLevel){
     return [];
});

Block.registerDropFunctionForID(BlockID.XPFarm_block, function(coords, id, data, diggingLevel, toolLevel){
     return [];
});

var XPFarm = {
	cores: [],
	blocks: []
}
TileEntity.registerPrototype(BlockID.XPFarm_core, { 
 defaultValues: { 
  XPFarmBlocks: null,
  XP: 0,
  ticks: 0,
  tiicks: 0
 }, 
 tick: function(){ 
  if(!this.data) return;
  if(!this.data.XPFarmBlocks){
   this.data.XPFarmBlocks = [];
   for(var x = this.x-1; x <= this.x+1; x++){
    if(x == this.x) continue;
    this.data.XPFarmBlocks.push({x: x, y: this.y, z: this.z})
   }
   for(var y = this.y-1; y <= this.y+1; y++){
    if(y == this.y) continue;
    this.data.XPFarmBlocks.push({x: this.x, y: y, z: this.z})
   }
   for(var z = this.z-1; z <= this.z+1; z++){
    if(z == this.z) continue;
    this.data.XPFarmBlocks.push({x: this.x, y: this.y, z: z})
   }
   return;
  }
  this.data.ticks++ 
  if(this.data.ticks >= 1200){
   this.data.ticks = 0;
   this.data.XP += 30;
  }
  this.data.tiicks++
  if(this.data.tiicks >= 40){
   this.data.tiicks = 0;
   for(var i in this.data.XPFarmBlocks){
    var coords = this.data.XPFarmBlocks[i];
    if(World.getBlock(coords.x, coords.y, coords.z).id != BlockID.XPFarm_block){
    	for(var i in this.data.XPFarmBlocks){
    		var coords = this.data.XPFarmBlocks[i];
    		World.removeTileEntity(coords.x, coords.y, coords.z);
    	}
    	World.removeTileEntity(this.x, this.y, this.z);
    	World.explode(this.x, this.y, this.z, 10, true);
    	return;
    }
   }
  }
 },
 init: function(){
 	XPFarm.cores.push({x: this.x, y: this.y, z: this.z});
 }
});

TileEntity.registerPrototype(BlockID.XPFarm_block, { 
 defaultValues: { 
  XPFarmCore: null,
  ticks: 0
 }, 
 tick: function(){ 
  this.data.ticks++;
  if(this.data.ticks >= 30){
   this.data.ticks = 0;
   if(!this.data.XPFarmCore){
    var coords = {
     x: this.x,
     y: this.y,
     z: this.z
    };
    this.data.XPFarmCore = searchXPFarmCore(coords);
    return;
   };
  }
 }, 
 click: function(id, count, data, coords){ 
  if(!this.data.XPFarmCore) return;
  var XPFarmCore = this.data.XPFarmCore;
  var tile = World.getTileEntity(XPFarmCore.x, XPFarmCore.y, XPFarmCore.z);
  if(tile.data.XP == 0) return Game.tipMessage("§cExperience not available");
  Player.addExperience(tile.data.XP);
  Game.tipMessage("§a" + tile.data.XP + " XP added");
  tile.data.XP = 0;
 },
 init: function(){
 	XPFarm.blocks.push({x: this.x, y: this.y, z: this.z});
 }
});

function searchXPFarmCore(coords){
  for(var x = coords.x-1;x <= coords.x+1;x++){
  if(x == coords.x) continue;
  if(World.getBlock(x, coords.y, coords.z).id == BlockID.XPFarm_core){
   return {
    x: x,
    y: coords.y,
    z: coords.z
   }
  }
 }
 for(var y = coords.y-1;y <= coords.y+1;y++){
  if(y == coords.y) continue;
  if(World.getBlock(coords.x, y, coords.z).id == BlockID.XPFarm_core){
   return {
    x: coords.x,
    y: y,
    z: coords.z
   }
  }
 }
 for(var z = coords.z-1;z <= coords.z+1;z++){
  if(z == coords.z) continue;
  if(World.getBlock(coords.x, coords.y, z).id == BlockID.XPFarm_core){
   return {
    x: coords.x,
    y: coords.y,
    z: z
   }
  }
 }
}

function searchDiamondBlock(coords){
 //var x = coords.x,y = coords.y, z = coords.z;
 for(var x = coords.x-1;x <= coords.x+1;x++){
  if(x == coords.x) continue;
  if(World.getBlock(x, coords.y, coords.z).id == 57){
   return {
    x: x,
    y: coords.y,
    z: coords.z
   }
  }
 }
 for(var y = coords.y-1;y <= coords.y+1;y++){
  if(y == coords.y) continue;
  if(World.getBlock(coords.x, y, coords.z).id == 57){
   return {
    x: coords.x,
    y: y,
    z: coords.z
   }
  }
 }
 for(var z = coords.z-1;z <= coords.z+1;z++){
  if(z == coords.z) continue;
  if(World.getBlock(coords.x, coords.y, z).id == 57){
   return {
    x: coords.x,
    y: coords.y,
    z: z
   }
  }
 }
}

function searchXPandClockBlocks(coords){
 var XPStorages = [];
 var WorldClocks = [];
 for(var x = coords.x-1;x <= coords.x+1;x++){
  if(x == coords.x) continue;
  var block = World.getBlock(x, coords.y, coords.z);
  if(block.id == BlockID.worldClock) WorldClocks.push({
    x: x,
    y: coords.y,
    z: coords.z
   });
  if(block.id == BlockID.XPStorage) XPStorages.push({
    x: x,
    y: coords.y,
    z: coords.z
   });
 }
 for(var y = coords.y-1;y <= coords.y+1;y++){
  if(y == coords.y) continue;
  var block = World.getBlock(coords.x, y, coords.z);
  if(block.id == BlockID.worldClock) WorldClocks.push({
    x: coords.x,
    y: y,
    z: coords.z
   });
  if(block.id == BlockID.XPStorage) XPStorages.push({
    x: coords.x,
    y: y,
    z: coords.z
   });
 }
 for(var z = coords.z-1;z <= coords.z+1;z++){
  if(z == coords.z) continue;
  var block = World.getBlock(coords.x, coords.y, z);
  if(block.id == BlockID.worldClock) WorldClocks.push({
    x: coords.x,
    y: coords.y,
    z: z
   });
  if(block.id == BlockID.XPStorage) XPStorages.push({
    x: coords.x,
    y: coords.y,
    z: z
   });
 }
 return {
  allCoords: XPStorages.concat(WorldClocks),
  XPStorages: XPStorages,
  WorldClocks: WorldClocks
 }
}

Callback.addCallback("ItemUse", function (coords, item, block) { 
 if(item.id != ItemID.utilsHammer) return;
 if(block.id != BlockID.worldClock && block.id != BlockID.XPStorage) return;
 var DBCoords = searchDiamondBlock(coords);
 if(!DBCoords) return;
 var XPClocksCoords = searchXPandClockBlocks(DBCoords);
 if(!XPClocksCoords) return;
 if(XPClocksCoords.XPStorages.length != 3 || XPClocksCoords.WorldClocks.length != 3) return Game.message('§cIncorrect structure, requires 3 XPStorage and 3 WorldClock');
 XPClocksCoords = XPClocksCoords.allCoords;
 World.setBlock(DBCoords.x, DBCoords.y, DBCoords.z, BlockID.XPFarm_core, 0);
 for(var i in XPClocksCoords){
  var crds = XPClocksCoords[i];
  World.removeTileEntity(crds.x, crds.y, crds.z);
  World.setBlock(crds.x, crds.y, crds.z, BlockID.XPFarm_block, 0);
  World.addTileEntity(crds.x, crds.y, crds.z).data.XPFarmCore = DBCoords;
 }
 World.addTileEntity(DBCoords.x, DBCoords.y, DBCoords.z).data.XPFarmBlocks = XPClocksCoords;
});

ModAPI.addAPICallback("WailaAPI", function(api){ 
 api.Waila.addExtension(BlockID.XPFarm_block, function(id, data, elements, tile, yPos){
   if(!tile) return yPos;
   if(!tile.data.XPFarmCore) return yPos;
   var coords = tile.data.XPFarmCore;
   var CoreTile = World.getTileEntity(coords.x, coords.y, coords.z);
   if(!CoreTile) return yPos;
   
   elements["XP"] = {
    type: "text",
    text: "XP: " + CoreTile.data.XP,
    x: 200,
    y: yPos,
    font: {color: api.Style.DEF, size: 40}
   };
   yPos += 60;
   
   api.Waila.requireHeight(20);
   return yPos;
 })
})




// file: items/wrench.js

IDRegistry.genItemID("utilsWrench");
Item.createItem("utilsWrench", "Wrench", {
	name: "wrench"
}, {
	stack: 1
});

Recipes.addShaped({
	id: ItemID.utilsWrench,
	count: 1,
	data: 0
}, [
	"i i",
	"iii",
	" i "
], ['i', 265, 0]);

var wrenches = [ItemID.utilsWrench];

ModAPI.addAPICallback("ICore", function(api) {
	wrenches.push(ItemID.wrenchBronze);
});

var render = new Render({
	skin: "wire.png"
});
render.setPart("body", [{
		type: "box",
		coords: {
			x: 8,
			y: 8,
			z: 0
		},
		size: {
			x: 16,
			y: 1,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 0,
			y: 8,
			z: -8
		},
		size: {
			x: 1,
			y: 1,
			z: 16
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 0,
			y: 16,
			z: 0
		},
		size: {
			x: 1,
			y: 16,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 8,
			y: 8,
			z: -16
		},
		size: {
			x: 16,
			y: 1,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 16,
			y: 8,
			z: -8
		},
		size: {
			x: 1,
			y: 1,
			z: 16
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 16,
			y: 16,
			z: -16
		},
		size: {
			x: 1,
			y: 16,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 16,
			y: 16,
			z: 0
		},
		size: {
			x: 1,
			y: 16,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 0,
			y: 16,
			z: -16
		},
		size: {
			x: 1,
			y: 16,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 8,
			y: 24,
			z: 0
		},
		size: {
			x: 16,
			y: 1,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 8,
			y: 24,
			z: -16
		},
		size: {
			x: 16,
			y: 1,
			z: 1
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 0,
			y: 24,
			z: -8
		},
		size: {
			x: 1,
			y: 1,
			z: 16
		},
		uv: {
			x: 20,
			y: 20
		}
	},
	{
		type: "box",
		coords: {
			x: 16,
			y: 24,
			z: -8
		},
		size: {
			x: 1,
			y: 1,
			z: 16
		},
		uv: {
			x: 20,
			y: 20
		}
	}
], {})

var animationRED = new Animation.Base(0, 0, 0);
animationRED.describe({
	render: render.getId()
});

var selectedWire = {
	x: 0,
	y: 0,
	z: 0,
	selected: false
};

Callback.addCallback("ItemUse", function(coords, item, block) {
	if (wrenches.indexOf(item.id) != -1) {
		//Game.prevent();
		if (Entity.getSneaking(Player.get()) && (block.id == BlockID.utilsWire || block.id == BlockID.utilsItemGetter)) {
			//devLog('block selected');
			if (selectedWire.selected) animationRED.destroy();
			selectedWire.x = coords.x;
			selectedWire.y = coords.y;
			selectedWire.z = coords.z;
			selectedWire.selected = true;
			animationRED.setPos(coords.x, coords.y, coords.z);
			animationRED.load();
			return;
		}
		if (selectedWire.selected) {
			//devLog('search target');
			if (Math.sqrt(Math.pow(coords.x - selectedWire.x, 2) + Math.pow(coords.y - selectedWire.y, 2) + Math.pow(coords.z - selectedWire.z, 2)) != 1) {
				//devLog('target is selector or target is far ER... ER... ER... ER...')
				selectedWire.selected = false;
				animationRED.destroy();
				return;
			}
			var sel = selectedWire.x + "," + selectedWire.y + "," + selectedWire.z;
			var crds = coords.x + "," + coords.y + "," + coords.z;
			if (!groups[sel]) return Game.tipMessage("§aERROR");
			if (groups[sel].not) groups_sel = groups[sel].not.map(function(d) {
				return d.x + ',' + d.y + ',' + d.z
			});
			if (groups[crds] && groups[crds].not) groups_crds = groups[crds].not.map(function(d) {
				return d.x + ',' + d.y + ',' + d.z
			});
			var a = groups[sel].not && groups[sel].not.length > 0 && groups_sel.indexOf(crds) != -1;
			var b = groups[crds] && groups[crds].not && groups[crds].not.length > 0 && groups_crds.indexOf(sel) != -1;
			if (a || b) {
				if (a) {
					//devLog('target must be destroyed')
					groups[sel].not.splice(groups_sel.indexOf(crds), 1);
					ignored['not' + sel + ':' + crds + 'utilsWire'] = ignored['not' + sel + ':' + crds + 'utilsWire'] >= 0 ? ignored['not' + sel + ':' + crds + 'utilsWire'] + 1 : 0;
					BlockRenderer.unmapAtCoords(selectedWire.x, selectedWire.y, selectedWire.z);
					mapGetter(selectedWire, groups[sel].i, groups[sel].meta);
					//devLog('target destroyed')
				};
				if (b) {
					//devLog('target must be destroyed')
					groups[crds].not.splice(groups_crds.indexOf(sel), 1);
					ignored['not' + crds + ':' + sel + 'utilsWire'] = ignored['not' + crds + ':' + sel + 'utilsWire'] >= 0 ? ignored['not' + crds + ':' + sel + 'utilsWire'] + 1 : 0;
					BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
					mapGetter(coords, groups[crds].i, groups[crds].meta);
					//devLog('target destroyed')
				};
			} else {
				//devLog('target must be added')
				if (groups[sel].not) {
					groups[sel].not.push({
						x: coords.x,
						y: coords.y,
						z: coords.z
					});
				} else {
					groups[sel].not = [{
						x: coords.x,
						y: coords.y,
						z: coords.z
					}];
				}
				ICRender.getGroup('not' + sel + ':' + crds + 'utilsWire' + (ignored['not' + sel + ':' + crds + 'utilsWire'] >= 0 ? ignored['not' + sel + ':' + crds + 'utilsWire'] : '')).add(block.id, -1);
				if (block.id == BlockID.utilsWire || block.id == BlockID.utilsItemGetter) {
					if (groups[crds].not) {
						groups[crds].not.push({
							x: selectedWire.x,
							y: selectedWire.y,
							z: selectedWire.z
						});
					} else {
						groups[crds].not = [{
							x: selectedWire.x,
							y: selectedWire.y,
							z: selectedWire.z
						}];
					}
					ICRender.getGroup('not' + crds + ':' + sel + 'utilsWire' + (ignored['not' + crds + ':' + sel + 'utilsWire'] >= 0 ? ignored['not' + crds + ':' + sel + 'utilsWire'] : '')).add(World.getBlock(selectedWire.x, selectedWire.y, selectedWire.z).id, -1);
				}
				BlockRenderer.unmapAtCoords(selectedWire.x, selectedWire.y, selectedWire.z);
				mapGetter(selectedWire, groups[sel].i, groups[sel].meta)
				//devLog('target added')
			}
		}
	}
});




// file: shared.js

ModAPI.registerAPI("UtilsAPI", {
    Combiner: Combiner,

    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("UtilsAPI Loaded", "API");




