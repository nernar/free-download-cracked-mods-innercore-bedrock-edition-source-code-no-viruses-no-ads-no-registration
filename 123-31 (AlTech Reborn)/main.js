/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: config.js

var ConfigTemplate ={
    "configGenerated":true,
    "constants":{
    	"DEPOSITES_SIZE": 64,
        "DEBUG_CHANCE": 100000
        },
    "test": true,
    "debug": true,
};

__config__.checkAndRestore(ConfigTemplate)
__config__.save()

var Config = {
	configGenerated: __config__.getBool("configGenerated"),
	debug: __config__.getBool("debug"),
	DEPOSITES_SIZE: __config__.getNumber("constants.DEPOSITES_SIZE"),
	DEBUG_CHANCE: __config__.getNumber("constants.DEBUG_CHANCE"),
	test: __config__.getBool("test"),
	
    write: function(ev, val){
    	eval("ConfigTemplate." + ev + " = " + val);
        FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate);
    },
    read: function(ev){
    	return eval("ConfigTemplate." + ev);
    }
}
if(!__config__.getBool("configGenerated")) FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate)
ConfigTemplate = JSON.parse(FileTools.ReadText(__dir__ + "config.json"));




// file: header.js

IMPORT("ToolLib");
IMPORT("PhysicBlocks");

var loadTextures = false;

var round = function(num, x){
	var multiplier = Math.pow(10, x);
	return Math.floor(num * multiplier) / multiplier;
}

var rollPercentage = function(pr, seed){
	if(seed){
		var r = new java.util.Random(seed);
		return pr>=r.nextInt(100);
    }
    return pr>=round(Math.random()*100, 2);
}
var random = function(min, max, seed){
	if(seed){
	    var r = new java.util.Random(seed).nextInt(100) / 100;
	    return Math.floor(r * (max - min + 1)) + min;
	}
	return Math.floor(java.lang.Math.random() * (max - min + 1)) + min;
}

Callback.addCallback("PostLoaded", function(){
    if(loadTextures){
    	UI.getContext().finish();
    }
})

//RegisterPhysicBlock(88, true);




// file: localization.js

Translation.addTranslation("Diamond ore", {ru: "Алмазная руда"});

Translation.addTranslation("Coal ore", {ru: "Угольная руда"});

Translation.addTranslation("Iron ore", {ru: "Железная руда"});

Translation.addTranslation("Redstone ore", {ru: "Руда красного камня"});

Translation.addTranslation("Gold ore", {ru: "Золотая руда"});

Translation.addTranslation("Emerald ore", {ru: "Изумрудная руда"});

Translation.addTranslation("Lapis ore", {ru: "Лазуритовая руда"});




// file: api/debug.js

if(Config.debug){
var lasttime = -1;
var frame = 0;
Callback.addCallback('LevelDisplayed', function () {
Updatable.addUpdatable({
	update: function(){
		var t = Debug.sysTime();
		if(frame++ % 20 == 0){
			if(lasttime != -1){
				tps = 1000 / (t - lasttime) * 20;
				Game.tipMessage(Math.round(tps * 10) / 10 + "tps");
			}
			lasttime = t;
		}
	}
});
});

Item.registerUseFunction(263, function(c, item, block){
	Debug.message("ID: "+block.id+", data:"+block.data+", level:"+ToolAPI.getBlockDestroyLevel(block.id));
});

Item.registerUseFunction(264, function(c, item, block){
	//Debug.message(ToolAPI.getBlockDestroyLevel(block.id));
for(var k in Base.backTypes){
    	    var bt = Base.backTypes[k];
            var name = "Diamond";
            if(!bt.data) bt.data = 0;
            if(World.getBlockID(c.x, c.y, c.z) == bt.id && World.getBlockData(c.x, c.y, c.z) == bt.data){
                World.setBlock(c.x, c.y, c.z, BlockID["ore"+name+"_"+k], 0);
            }
        }
});
}




// file: api/base.js

var Base = {
	backTypes: 
    {stone: {id: 1, type: "stone"}, 
    cobblestone: {id: 4, type: "stone"}, 
    stone_andesite: {id: 1, data: 5, type: "stone"}, 
    stone_diorite: {id: 1, data: 3, type: "stone"}, 
    stone_granite: {id: 1, data: 1, type: "stone"},

    dirt: {id: 3, type: "dirt"}, 
    gravel: {physic: true, id: 13, type: "dirt"}, 
    clay: {id: 82, type: "dirt"}, 
    sand: {physic: true, sound: "sand", id: 12, type: "dirt"}, 
    sandstone: {id: 24, type: "stone"}, 

    red_sand: {physic: true, sound: "sand", id: 12, data: 1, type: "dirt"}, 
    red_sandstone: {id: 179, type: "stone"}, 
    
    clay_brown: {id: 172, data: 0, type: "stone"},
    clay_red: {id: 159, data: 14, type: "stone"},
    clay_silver: {id: 159, data: 8, type: "stone"},
    clay_white: {id: 159, data: 0, type: "stone"},
    clay_yellow: {id: 159, data: 4, type: "stone"},
    clay_orange: {id: 159, data: 1, type: "stone"},

    nether: {id: 87, type: "stone"}, 
    soul_sand: {physic: true, sound: "sand", id: 88, type: "dirt"}, 
    end: {id: 121, type: "stone"}},
    
	Ores: {
        Vanila: {
            Diamond: {
                color: "#8AFFFF",
                type: "GEM",
                level: ToolAPI.getBlockDestroyLevel(56) - ToolAPI.getBlockDestroyLevel(1)
             },
             Redstone: {
                color: "#FF0000",
                type: "NO_METALL",
                level: ToolAPI.getBlockDestroyLevel(73) - ToolAPI.getBlockDestroyLevel(1),
             },
             Emerald: {
                color: "#19C000",
                type: "GEM",
                level: ToolAPI.getBlockDestroyLevel(129) - ToolAPI.getBlockDestroyLevel(1)
             },
             Lapis: {
                color: "#0700FF",
                type: "NO_METALL",
                level: ToolAPI.getBlockDestroyLevel(21) - ToolAPI.getBlockDestroyLevel(1),
             },
             Coal: {
                color: "#1B1B1B",
                type: "COAL",
                level: ToolAPI.getBlockDestroyLevel(16) / 1.5
             },
             Iron: {
                color: "#FF513232",
                type: "METALL",
                level: ToolAPI.getBlockDestroyLevel(15)
             },
             Gold: {
                color: "#FFFDFF47",
                type: "METALL",
                level: ToolAPI.getBlockDestroyLevel(14) - ToolAPI.getBlockDestroyLevel(1)
             }
         }
    }
};




// file: api/ores.js

function generateOreTexture(material, background, data, color, type){
	var c = android.graphics.Color.parseColor(color);
    material = material.toLowerCase();
    var template_dir = __dir__ + "templates/ores/";
    var output_tools_dir = __dir__ + "res/images/terrain-atlas/ores/"+material+"/";
    var name = "ore_" + material + "_" + background + "_" + data + ".png";
    if(!new java.io.File(output_tools_dir + name).exists()){
    	//setLoadingTip("[AlTech]: Generate ores textures: "+ FixName(material));
        var template = android.graphics.BitmapFactory.decodeFile(template_dir + type + ".png");
        var back = android.graphics.BitmapFactory.decodeFile(template_dir + "back/" + background + ".png");
 
        var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        var canvas = new android.graphics.Canvas(bitmap);
        
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.PorterDuffColorFilter(c, android.graphics.PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(back, 0, 0,  null);
        canvas.drawBitmap(template, 0, 0, paint);
 
        var file = new java.io.File(output_tools_dir + name);
        file.getParentFile().mkdirs();
        file.createNewFile();
        var fos = new java.io.FileOutputStream(output_tools_dir+ name);
        bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
        
        loadTextures = true;
    }
};

function dropFunction(ID, name, drop_type, level){
    Block.registerDropFunction(ID, function(coords, id, data, lvl, enchant){
    	if(ID == BlockID["ore"+name+"_stone"]) var ID2 = BlockID["ore"+name+"_cobblestone"] || ID;
        var drop = [];
        var dt = drop_type;
        if(lvl>=level){
        	if(enchant.silk){
			    return [[ID, 1, 0]];
		    }
        	if(!dt.exp && !ID2){
        	    return [[ID, 1, 0]]; 
            }else if(dt.exp){
		        ToolAPI.dropOreExp(coords, dt.exp[0], dt.exp[1], enchant.experience);
		        var count = random(dt.count[0], dt.count[1]) + random(0, enchant.fortune);
		        for (var a = 0; a < count; a++){
			        drop.push([dt.id, 1, 0]);
	            }
                return drop;
            }else if(ID2){
            	return [[ID2, 1, 0]];
            }
               
        }else{
            return []
        }
    });
}

//============================

function RegisterOre(name, resource, rarity, params, back_type){
	
	if(Base.Ores.Vanila[name]){
		var v = Base.Ores.Vanila[name];
	}else{
		var v = params;
	}
	
		var ids = [];
		
		for(var k in Base.backTypes){
			if(!back_type || back_type != "ALL"){
				for(var kk in back_type){
			        if(back_type[kk] != k) continue;
			    }
			}
			
			var s = Base.backTypes[k];
			var level = v.level + ToolAPI.getBlockDestroyLevel(s.id);
			
			var sound = "stone";
			if(s.type == "dirt"){
                sound = "gravel";
			}
			
			var special_type = {
			     base: s.id, 
                 opaque: true,
                 renderlayer: 0,
                 destroytime: level,
                 redstoneconsumer: false, 
                 lightopacity: 15, 
                 lightlevel: 0, 
                 explosionres: 15, 
                 sound: s.sound || sound,
                 solid: true,
	             translucency: 0
            };
            generateOreTexture(name.toLowerCase(), k, 0, v.color, v.type);
            var n = "ore"+name+"_"+k;
            var ID = IDRegistry.genBlockID(n);
            ids.push(ID);
		    Block.createBlock(n, [{name: name+" ore", texture: [["ore_" + name.toLowerCase()+"_"+k, 0]], inCreative: true}], special_type);
            ToolAPI.registerBlockMaterial(ID, s.type);
            Block.setDestroyLevel(n, level);
            ToolLib.addBlockDropOnExplosion(n);
            dropFunction(ID, name, resource, level);
            if(resource) Recipes.addFurnace(ID, resource.id, resource.data || 0);
            if(s.physic) RegisterPhysicBlock(ID);
        }
        Base.Ores[name] = {back_type: back_type || "ALL", resource: resource, rarity: rarity, ids: ids};
        Item.addCreativeGroup("ores"+name, Translation.translate(name + "ores"), ids);
}




// file: api/generation.js

var Generation = {
	LargeOreDepositeTemplate(x, y, z, name, size, seed, debug){
		//Debug.message(seed);
        var xz = size;
        var ry = Math.floor(size / 8);
        
        for (var xx = -xz; xx <= xz; xx++) {
            for (var yy = -ry; yy < ry; yy++) {
                for (var zz = -xz; zz <= xz; zz++) {
                     if (Math.sqrt(xx * xx + yy * yy + zz * zz) < size && rollPercentage(15)) {
                         //if(rollPercentage(1)) Debug.message("Block");
                         Generation.setOre(x + xx, y + yy, z + zz, name, debug);
                     }
                 }
            }
        }
    },
    
    setOre: function(x, y, z, name, debug){
    	for(var k in Base.backTypes){
    	    var bt = Base.backTypes[k];
            if(!bt.data) bt.data = 0;
            if(!debug && World.getBlockID(x, y, z) == bt.id && World.getBlockData(x, y, z) == bt.data){
                World.setBlock(x, y, z, BlockID["ore"+name+"_"+k], 0);
            }else if(debug){
            	World.setBlock(x, y, z, BlockID["ore"+name+"_stone"], 0);
            }
        }
    },
    
    strongIf(coords){
    	var b = {
    	0: true,
        7:true,
        8: true,
        9: true,
        10: true,
        11: true,
        199: true,
        200: true};
		return !b[World.getBlockID(coords.x, coords.y, coords.z)];
	},
	
	chunkNumber(chunkX, chunkZ, n){
		return chunkX % n == 0 && chunkZ % n == 0
	},
};

World.addGenerationCallback("GenerateChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	//if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, z: chunkZ * 16};
	var chance = 250;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			var i = 0;
			for(var y = 128; y > 10; y--){
				if(Generation.strongIf({x: coords.x, y: y, z: coords.z})){
					i += 600 / o.rarity;
					if(y == 10) i = 100;
			        if(rollPercentage(i, cSeed + y)){
						var size = Math.round(125 / o.rarity * Config.DEPOSITES_SIZE);
						if(size < 8) size = 8;
						if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                        Generation.LargeOreDepositeTemplate(coords.x, y, coords.z, k, size, cSeed);
                        if(Config.debug) Debug.message("x: "+coords.x+", y: "+y+", z: "+coords.z+", type: "+k);
                        return;
				    }
			    }
            }
        }
    }
});

World.addGenerationCallback("GenerateNetherChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, y: random(32, 120, cSeed), z: chunkZ * 16};
	var chance = 500;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			for(var i = 32; i > 0; i--){
			    if(Generation.strongIf({x: coords.x, y: coords.y, z: coords.z})){
				    var size = Math.round(500 / o.rarity * Config.DEPOSITES_SIZE);
					if(size < 8) size = 8;
					if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                    Generation.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, k, size, cSeed);
                    if(Config.debug) Debug.message("x: "+coords.x+", y: "+coords.y+", z: "+coords.z+", type: "+k);
                    return;
			    }else{
				    var y = coords.y;
				    coords.y = random(32, 120, cSeed * coords.y / 100);
				    //if(coords.y == y) random(10, 120, cSeed + coords.y +1);
			    }
		    }
        }
    }
});

World.addGenerationCallback("GenerateEndChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, z: chunkZ * 16};
	var chance = 1000;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			var i = 0;
			for(var y = 80; y > 10; y--){
				if(Generation.strongIf({x: coords.x, y: y, z: coords.z})){
					i += 600 / o.rarity;
					if(y == 10) i = 100;
			        if(rollPercentage(i, cSeed * y)){
						var size = Math.round(1000 / o.rarity * Config.DEPOSITES_SIZE);
						if(size < 8) size = 8;
						if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                        Generation.LargeOreDepositeTemplate(coords.x, y, coords.z, k, size, cSeed);
                        if(Config.debug) Debug.message("x: "+coords.x+", y: "+y+", z: "+coords.z+", type: "+k);
                        return;
				    }
			    }
		    }
        }
    }
});




// file: common/ores.js

//vanila

RegisterOre("Diamond", {id: 264, count: [1, 1], data: 0, exp: [6, 12]}, 1200, true);
RegisterOre("Gold", {id: 266}, 400, 14, true);
RegisterOre("Iron", {id: 265}, 100, 15, true);
RegisterOre("Coal", {id: 263, count: [1, 1], data: 0, exp: [0, 1]}, 50, true);
RegisterOre("Lapis", {id: 351, count: [2, 4], data: 4, exp: [4, 6]}, 300, true);
RegisterOre("Emerald", {id: 388, count: [1, 1], data: 0, exp: [8, 16]}, 2400, true);
RegisterOre("Redstone", {id: 331, count: [2, 4], data: 0, exp: [4, 6]}, 200, true);




// file: integration/IndustrialCraft.js

ModAPI.addAPICallback("ICore", function(api){
    RegisterOre("Copper", {id: ItemID.ingotCopper}, 90, {color: "#99220D", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Tin", {id: ItemID.ingotTin}, 90, {color: "#B3B3B3", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Lead", {id: ItemID.ingotLead}, 180, {color: "#232329", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Uranium", false, 800, {color: "#59B000", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Iridium", {id: ItemID.iridiumChunk, count: [1, 1], data: 0, exp: [16, 32]}, 32000, {color: "#FFE0E0E0", type: "METALL", level:Base.Ores.Vanila.Diamond.level});
    
    Callback.addCallback("PostLoaded", function(){
    	for(var k in Base.Ores){
    	    if(k == "Vanila") continue;
            var b = Base.Ores[k];
            for(var i in b.ids){
            	var id = b.ids[i];
    	        if(ItemID["crushed"+k]){
                    api.Recipe.addRecipeFor("macerator", id, {id: ItemID["crushed"+k], count: 2, data: 0});
                }else if(ItemID["dust"+k]){
                    api.Recipe.addRecipeFor("macerator", id, {id: ItemID["dust"+k], count: 2, data: 0});
                }
            }
        }
    });
});




// file: integration/Forestry.js

ModAPI.addAPICallback("ForestryAPI", function(api){
	RegisterOre("Copper", {id: ItemID.ingotCopper}, 90, {color: "#99220D", type: "METALL", level:Base.Ores.Vanila.Iron.level});
    RegisterOre("Tin", {id: ItemID.ingotTin}, 90, {color: "#B3B3B3", type: "METALL", level:Base.Ores.Vanila.Iron.level});
	RegisterOre("Apatite", {id: ItemID.apatite, count: [0, 1], data: 0, exp: [16, ]}, 150, {color: "#00E5FF", type: "COAL", level:Base.Ores.Vanila.Coal.level});
});




