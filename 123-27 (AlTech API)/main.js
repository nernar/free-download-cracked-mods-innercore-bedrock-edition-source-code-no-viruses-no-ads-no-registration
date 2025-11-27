/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 20
*/



// file: api/ATAPI.js

//Author - Alex Fack

IMPORT("ToolType", "*");
IMPORT("SoundAPI", "*");
//IMPORT("energylib", "*");
IMPORT("MachineRender", "*");
IMPORT("flags", "*");
IMPORT("ModifierAPI", "*");

var round = function(num, x){
	var multiplier = Math.pow(10, x)
	return Math.floor(num * multiplier) / multiplier
}

var rollPercentage = function(pr){
    return pr>=round(Math.random()*100, 2)
}
var random = function(min, max){
	return Math.floor(java.lang.Math.random() * (max - min + 1)) + min;
}

var setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");

let ICore
ModAPI.addAPICallback("ICore", function(api){
ICore = api
})

let ConfigTemplate =
	{
  "vanileFurnaceTemp":1000,
  "hardmode":true,
  "decorateBlocks":false,
  "radiationDebuff":false,
  "generation":{
    "genLargeOresStone":true,
    "genLargeOresNether":true,
    "genLargeOresEnd":true,
    "genSmallOresStone":true,
    "genSmallOresNether":true,
    "genSmallOresEnd":true,
    "genBreeds":true,
    "simpleGeneration":false,
    "chanceMultiplier":1,
    "checkChanceLimit":5,
    "genChanceForBreed":100,
    "chunkNumForGen":3,
    "chunkNumForGenBreed":7,
    "smallOresStoneMinY":10,
    "smallOresStoneMaxY":120,
    "smallOresStoneCount":48,
    "smallOresNetherMinY":10,
    "smallOresNetherMaxY":120,
    "smallOresNetherCount":48,
    "smallOresEndMinY":10,
    "smallOresEndMaxY":120,
    "smallOresEndCount":48,
    "simpleOresEarthCount":36,
    "simpleOresNetherCount":72,
    "simpleOresStoneCount":24,
    "simpleOresSize":6,
    "Ores":{
    }
  },
  "furnaces":{
    "cobbFurnaceRecEff":150,
    "cobbFurnaceFuelEff":150,
    "cobbFurnaceMaxTemp":1100,
    "cobbFurnaceTimer":60,
    "blastFurnaceRecEff":150,
    "blastFurnaceFuelEff":200,
    "blastFurnaceMaxTemp":1600,
    "blastFurnaceTimer":120,
    "indFurnaceRecEff":250,
    "indFurnaceFuelEff":300,
    "indFurnaceTimer":240
  },
    "configGenerated":true
}
__config__.checkAndRestore(ConfigTemplate)
__config__.save()

let Config = {
	hardmode: __config__.getBool("hardmode"),
	decorateBlocks: __config__.getBool("decorateBlocks"),
	radiation: __config__.getBool("radiationDebuff"),
	
	vanileFurnaceTemp: __config__.getNumber("vanileFurnaceTemp"),
	cobbleFurnaceRecEff: __config__.getNumber("furnaces.cobbFurnaceRecEff"),
	cobbleFurnaceFuelEff: __config__.getNumber("furnaces.cobbFurnaceFuelEff"),
	cobbleFurnaceMaxTemp: __config__.getNumber("furnaces.cobbFurnaceMaxTemp"),
	cobbleFurnaceTimer: __config__.getNumber("furnaces.cobbFurnaceTimer"),
	
	blastFurnaceRecEff: __config__.getNumber("furnaces.blastFurnaceRecEff"),
	blastFurnaceFuelEff: __config__.getNumber("furnaces.blastFurnaceFuelEff"),
	blastFurnaceMaxTemp: __config__.getNumber("furnaces.blastFurnaceMaxTemp"),
	blastFurnaceTimer: __config__.getNumber("furnaces.blastFurnaceTimer"),
	
	indFurnaceRecEff: __config__.getNumber("furnaces.indFurnaceRecEff"),
	indFurnaceFuelEff: __config__.getNumber("furnaces.indFurnaceFuelEff"),
	indFurnaceTimer: __config__.getNumber("furnaces.indFurnaceTimer"),
	
	limit: __config__.getNumber("generation.checkChanceLimit"),
	chunkNumForGen: __config__.getNumber("generation.chunkNumForGen"),
	chunkNumForGenBreed: __config__.getNumber("generation.chunkNumForGenBreed"),
	genChanceForBreed: __config__.getNumber("generation.genChanceForBreed"),
	chanceMultiplier: __config__.getNumber("generation.chanceMultiplier"),
	
	smallOresStoneMinY: __config__.getNumber("generation.smallOresStoneMinY"),
	smallOresStoneMaxY: __config__.getNumber("generation.smallOresStoneMaxY"),
	smallOresStoneCount: __config__.getNumber("generation.smallOresStoneCount"),
	
	smallOresNetherMinY: __config__.getNumber("generation.smallOresNetherMinY"),
	smallOresNetherMaxY: __config__.getNumber("generation.smallOresNetherMaxY"),
	smallOresNetherCount: __config__.getNumber("generation.smallOresNetherCount"),
	
	smallOresEndMinY: __config__.getNumber("generation.smallOresEndMinY"),
	smallOresEndMaxY: __config__.getNumber("generation.smallOresEndMaxY"),
	smallOresEndCount: __config__.getNumber("generation.smallOresEndCount"),
	
	genLargeOresStone: __config__.getBool("generation.genLargeOresStone"),
	genLargeOresNether: __config__.getBool("generation.genLargeOresNether"),
	genLargeOresEnd: __config__.getBool("generation.genLargeOresEnd"),
	
	genSmallOresStone: __config__.getBool("generation.genSmallOresStone"),
	genSmallOresNether: __config__.getBool("generation.genSmallOresNether"),
	genSmallOresEnd: __config__.getBool("generation.genSmallOresEnd"),
	
	simpleOresEarthCount: __config__.getNumber("generation.simpleOresEarthCount"),
	simpleOresNetherCount: __config__.getNumber("generation.simpleOresNetherCount"),
	simpleOresEndCount: __config__.getNumber("generation.simpleOresEndCount"),
	
	simpleOresSize: __config__.getNumber("generation.simpleOresSize"),
	
	genBreeds: __config__.getBool("generation.genBreeds"),
	
	simpleGeneration: __config__.getBool("generation.simpleGeneration"),
	
    write: function(ev, val){
    	eval("ConfigTemplate." + ev + " = " + val)
        FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate)
    },
    read: function(ev){
    	return eval("ConfigTemplate." + ev)
    }
}
if(!__config__.getBool("configGenerated")) FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate)
ConfigTemplate = JSON.parse(FileTools.ReadText(__dir__ + "config.json"))

var CTR = {tools:[],
    Tool(api, field, result){
    	var toolCount
        var toolData
        for (var i in field){
            if (CTR.ToolID(field[i].id)){
            	if(field[i].count == 1){
                    field[i].data++;
                   //Game.message(field[i].data);
                   if (CTR.ToolData(field[i].data, field[i].id)){
                       field[i].id = field[i].count = field[i].data = 0;
                   }
               }else{
               	toolCount = field[i].count - 1 
                   toolData = field[i].data
                   field[i].count = 1
                   field[i].data++;
                   Player.addItemToInventory (field[i].id, toolCount, toolData)
                   //Game.message(field[i].data);
                   if (CTR.ToolData(field[i].data, field[i].id)){
                       field[i].id = field[i].count = field[i].data = 0;
                   }
               }
           }else{api.decreaseFieldSlot(i)}
        }
    },
        /*for(var ach in AchievementUIDS){
            if(AchievementUIDS[ach][0] == result.id){
                Achievement.AchievementgiveForUID(AchievementUIDS[ach][1]);
            }
        }
        if(AcApi){
            result.id == ItemID.stonepickaxe ? AcApi.AchievementAPI.give("story", "upgrade_tools") : null
            result.id == 257 ? AcApi.AchievementAPI.give("story", "iron_tools") : null
            result.id == 307 ? AcApi.AchievementAPI.give("story", "obtain_armor") : null
            result.id == 377 ? AcApi.AchievementAPI.give("story", "follow_ender_eye") : null
        }
    },*/
   ToolID(id){
       for(var key in this.tools){
            if(id== this.tools[key][0]){
            	for(var keys in ATMat.hammers){	
                	if(this.tools[key][0] == ATMat.hammers[keys].id){
                	    PlaySoundFile("HammerUse.ogg")
                    }
                }
                for(var keys in ATMat.wrenchs){	
                	if(this.tools[key][0] == ATMat.wrenchs[keys].id){
                	    PlaySoundFile("Wrench.ogg")
                    }
                }
                return (id == this.tools[key][0])
           }
       }
    },
    ToolData(data, id){
        for(var key in this.tools){
            if(data >= this.tools[key][1] && id== this.tools[key][0]){
                //Game.message( this.tools[key][1]);
                return (data == this.tools[key][1])
            }
        }
    },
    addTool(i, d){
        this.tools.push([i, d]);
        Item.setMaxDamage(i, d);
    },
RegisterHammer(name, data, lvl, lvl1){
	var id = IDRegistry.genItemID(name+"Hammer");
    Item.createItem(name+"Hammer", name+" Hammer", {name:name+"_hammer"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.hammers.push({id:id, mat:name, s:'h', lvl:lvl})
    var hammer = {durability:data, level: lvl1, efficiency:5, damage: 5, enchantability:0};
    ToolAPI.setTool(id, hammer, ToolType.pickaxe);
},
	
RegisterFile(name, data, lvl){
	var id = IDRegistry.genItemID(name+"File");
    Item.createItem((name)+"File", (name)+" File", {name:(name)+"_file"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.files.push({id:id, mat:(name), s:'f', lvl:lvl})
},

RegisterMortar(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Mortar");
    Item.createItem((name)+"Mortar", (name)+" Mortar", {name:(name)+"_mortar"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.mortars.push({id:id, mat:(name), s:'m', lvl:lvl})
},

RegisterCutter(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Cutter");
    Item.createItem((name)+"Cutter", (name)+" Cutter", {name:(name)+"_cutter"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.cutters.push({id:id, mat:(name), s:'n', lvl:lvl})
},
RegisterWrench(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Wrench");
    Item.createItem((name)+"Wrench", (name)+" Wrench", {name:(name)+"_wrench"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.wrenchs.push({id:id, mat:(name), s:'w', lvl:lvl})
},
RegisterScrewdriver(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Screwdriver");
    Item.createItem((name)+"Screwdriver", (name)+" Screwdriver", {name:(name)+"_screwdriver"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.screwdrivers.push({id:id, mat:(name), s:'s', lvl:lvl})
},
RegisterKnife(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Knife");
    Item.createItem((name)+"Knife", (name)+" Knife", {name:(name)+"_knife"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.knifes.push({id:id, mat:(name), s:'k', lvl:lvl})
},
RegisterSoldering(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Soldering");
    Item.createItem((name)+"Soldering", (name)+" Soldering", {name:(name)+"_soldering"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.solderings.push({id:id, mat:(name), s:'l', lvl:lvl})
},
RegisterSaw(name, data, lvl){
	var id = IDRegistry.genItemID((name)+"Saw");
    Item.createItem((name)+"Saw", (name)+" Saw", {name:(name)+"_saw"}, {stack:1});
    CTR.addTool(id, data)
    ATMat.saws.push({id:id, mat:(name), s:'s', lvl:lvl})
    var saw = {durability:data, level:5, efficiency:5, damage: 3, enchantability:0};
    ToolAPI.setTool(id, saw, ToolType.axe);
},
RegisterToolsSet(name, data, lvl, lvl1){
	this.RegisterHammer((name), data, lvl, lvl1)
	this.RegisterFile((name), data, lvl)
	this.RegisterMortar((name), data, lvl)
	this.RegisterCutter((name), data, lvl)    
	this.RegisterWrench((name), data, lvl)   
	this.RegisterScrewdriver((name), data, lvl)    
    this.RegisterKnife((name), data, lvl)    
    this.RegisterSaw((name), data, lvl)
}
}

Recipes.ReplaceWithShaped = function(item, newRecipe, transcript, tool){
	Recipes.deleteRecipe(item)
	Recipes.addShaped(item, newRecipe, transcript, tool);
}

Recipes.ReplaceWithShapeless = function(item, newRecipe, transcript, tool){
	Recipes.deleteRecipe(item)
	Recipes.addShapeless(item, newRecipe, tool);
}

let strongIfForTools = function(lvl, i){
	let gg = null
	for(var a = 0; a<i; a++){
		if(gg==null){
			gg = "tool_arr["+a+"][keys"+(a+1)+"].lvl>=lvl"
		}else{
			gg = gg + " && tool_arr["+a+"][keys"+(a+1)+"].lvl>=lvl"
		}
	}
    return gg
}

CreateRecipeWithTool = function(result, ing, tr, tool_arr, lvl){
	if(!Config.hardmode){
		lvl = lvl--
	}
	let code
	let i = 0
	code = "for(var key = 0; key<tool_arr.length; key++){    "
	for(var key = 0; key<tool_arr.length; key++){
		code = code + "for(var keys"+(key+1)+" in tool_arr["+key+"]){    "
		i++
	}
	code = code + "if("+strongIfForTools(lvl, i)+"){    "
	for(let a = 0; a<i; a++){
		code = code + "tr.push(tool_arr["+a+"][keys"+(a+1)+"].s);    "
		code = code + "tr.push(tool_arr["+a+"][keys"+(a+1)+"].id);    "
		code = code + "tr.push(-1);    "
	}
	code = code + "Recipes.addShaped(result, ing, tr, CTR.Tool);    "
	for(let a = 0; a<i+2; a++){
		code = code + "}    "
	}
	//alert(code)
	eval(code)
}

ReplaceRecipeWithTool = function(result, ing, tr, tool_arr, lvl){
	if(!Config.hardmode){
		lvl = lvl--
	}
	Recipes.deleteRecipe(result)
    let code
	let i = 0
	code = "for(let key = 0; key<tool_arr.length; key++){    "
	for(var key = 0; key<tool_arr.length; key++){
		code = code + "for(let keys"+(key+1)+" in tool_arr["+key+"]){    "
		i++
	}
	code = code + "if("+strongIfForTools(lvl, i)+"){    "
	for(let a = 0; a<i; a++){
		code = code + "tr.push(tool_arr["+a+"][keys"+(a+1)+"].s);    "
		code = code + "tr.push(tool_arr["+a+"][keys"+(a+1)+"].id);    "
		code = code + "tr.push(-1);    "
	}
	code = code + "Recipes.addShaped(result, ing, tr, CTR.Tool);    "
	for(let a = 0; a<i+2; a++){
		code = code + "}    "
	}
	//alert(code)
	eval(code)
}

CreateShapelessRecipeWithTool = function(result, ing, tool_arr, lvl){
	let code
	let i = 0
	let ingridients
	code = "for(let key = 0; key<tool_arr.length; key++){    "
	for(var key = 0; key<tool_arr.length; key++){
		code = code + "for(let keys"+(key+1)+" in tool_arr["+key+"]){    "
		i++
	}
	code = code + "if("+strongIfForTools(lvl, i)+"){    "
	code = code + "ingridients = [];    "
    code = code + "for(let k in ing){    ingridients.push(ing[k])    }"
	code = code + "for(let l = 0; l < tool_arr.length; l++){    ingridients.push({id: tool_arr[l][eval('keys'+(l+1))].id, data: -1})    }"
	code = code + "Recipes.addShapeless(result, ingridients, CTR.Tool);    "
	for(let a = 0; a<i+2; a++){
		code = code + "}    "
	}
	eval(code)
}

ReplaceShapelessRecipeWithTool = function(result, ing, tool_arr, lvl){
	Recipes.deleteRecipe(result)
    let code
	let i = 0
	let ingridients
	code = "for(let key = 0; key<tool_arr.length; key++){    "
	for(var key = 0; key<tool_arr.length; key++){
		code = code + "for(let keys"+(key+1)+" in tool_arr["+key+"]){    "
		i++
	}
	code = code + "if("+strongIfForTools(lvl, i)+"){    "
	code = code + "ingridients = [];    "
    code = code + "for(let k in ing){    ingridients.push(ing[k])    }"
	code = code + "for(let l = 0; l < tool_arr.length; l++){    ingridients.push({id: tool_arr[l][eval('keys'+(l+1))].id, data: -1})    }"
	code = code + "Recipes.addShapeless(result, ingridients, CTR.Tool);    "
	for(let a = 0; a<i+2; a++){
		code = code + "}    "
	}
	eval(code)
}

let CreateHelmetRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool({id:id, count:1, data:0}, [
"ppp",
"php"
], ['p', eval("ItemID.plate"+mat), 0], [hammers], lvl);
}

let CreateChestplateRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"php",
"ppp",
"ppp"
], ['p', eval("ItemID.plate"+mat), 0], [hammers], lvl)
}

let CreateLeggingsRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"ppp",
"php",
"p p"
], ['p', eval("ItemID.plate"+mat), 0], [hammers], lvl)
}

let CreateBootsRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"php",
"p p"
], ['p', eval("ItemID.plate"+mat), 0], [hammers], lvl);
}

let CreateArmorSet = function(mat, lvl){
	CreateHelmetRecipe(eval("ItemID.helmet"+mat), mat, lvl)
    CreateChestplateRecipe(eval("ItemID.chestplate"+mat), mat, lvl)
    CreateLeggingsRecipe(eval("ItemID.leggings"+mat), mat, lvl)
    CreateBootsRecipe(eval("ItemID.boots"+mat), mat, lvl)
}

let CreateToolSet = function(mat, lvl){
	CreatePickaxeRecipe(eval("ItemID.pickaxe"+mat), mat, lvl)
    CreateAxeRecipe(eval("ItemID.axe"+mat), mat, lvl)
    CreateHoeRecipe(eval("ItemID.hoe"+mat), mat, lvl)
    CreateSwordRecipe(eval("ItemID.sword"+mat), mat, lvl)
    CreateShovelRecipe(eval("ItemID.shovel"+mat), mat, lvl)
}

let CreateSet = function(mat, lvl){
	CreateToolSet(mat, lvl)
	CreateArmorSet(mat, lvl)
}

let CreatePickaxeRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"pii",
"fsh",
" s "
], ['p', eval("ItemID.plate"+mat), 0, 'i', eval("ItemID.ingot"+mat), 0, 's', 280, 0], [hammers, files], 2);
}

let CreateAxeRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"pih",
"ps ",
"fs "
], ['p', eval("ItemID.plate"+mat), 0, 'i', eval("ItemID.ingot"+mat), 0, 's', 280, 0], [hammers, files], 2);
}

let CreateHoeRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"pih",
"fs ",
" s "
], ['p', eval("ItemID.plate"+mat), 0, 'i', eval("ItemID.ingot"+mat), 0, 's', 280, 0], [hammers, files], 2);
}

let CreateSwordRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"ph",
"pf",
"s "
], ['p', eval("ItemID.plate"+mat), 0, 'i', eval("ItemID.ingot"+mat), 0, 's', 280, 0], [hammers, files], 2);
}

let CreateShovelRecipe = function(id, mat, lvl){
ReplaceRecipeWithTool ({id:id, count:1, data:0}, [
"pf",
"s ",
"s "
], ['p', eval("ItemID.plate"+mat), 0, 'i', eval("ItemID.ingot"+mat), 0, 's', 280, 0], [files], 2);
}

var MAPI = {multiblocks:[],
strongIf(a, m){
	let rt = null
	if(a[3] == -1){
		//alert(World.getBlockID(m.x, m.y, m.z))
		return World.getBlockID(m.x+a[0], m.y+a[1], m.z+a[2]) != World.getBlockID(m.x, m.y, m.z)
	}
	for(let keys in a[3]){
		if(rt==null){
		    rt = World.getBlockID(m.x+a[0], m.y+a[1], m.z+a[2]) == a[3][keys]
		}else{
			rt = rt || World.getBlockID(m.x+a[0], m.y+a[1], m.z+a[2]) == a[3][keys]
	    }
	}
	return rt
},
    Register(name, struc){
    	name._tick = name.tick
        name.tick = function(){
        	if(World.getWorldTime()%40==0){
                MAPI.Corpus(this)
             }
            this._tick()
        }    
        this.multiblocks.push({name:(name), struc:struc});
    },
    Load(){
        for(var key in this.multiblocks){
            this.multiblocks[key].name.defaultValues.MAPIbl=0;
            this.multiblocks[key].name.defaultValues.MAPIact=false;
            this.multiblocks[key].name.defaultValues.MAPIside=0;
            this.multiblocks[key].name.defaultValues.MAPIkey=key;
        }
    },
    Corpus(m){
    //Game.message(m.x+", "+m.y+", "+m.z)
    //Game.message(m.data.MAPIact);
        for(var key in this.multiblocks){ 
            if(key==m.data.MAPIkey){
                if(m.data.MAPIact!=true){
                    for(var side in this.multiblocks[key].struc){
                    	m.data.MAPIbl = 0
                        for(var keyi in this.multiblocks[key].struc[side]){ 
                            if(this.strongIf(this.multiblocks[key].struc[side][keyi], m)){ 
                                m.data.MAPIbl++; 
                                //alert(m.data.MAPIbl);
                                if(m.data.MAPIbl == this.multiblocks[key].struc[side].length){ 
                                	//Game.message("Duck")
                                    m.data.MAPIact=true; 
                                    m.data.MAPIside=side;
                                    //return true
                                }
                            }else{
                            	//alert("break")
                                break
                            }
                        } 
                    } 
                }else{
                	m.data.MAPIbl = 0
                    for(var keyi in this.multiblocks[key].struc[m.data.MAPIside]){ 
                        if(this.strongIf(this.multiblocks[key].struc[m.data.MAPIside][keyi], m)){ 
                            m.data.MAPIbl++; 
                            if(m.data.MAPIbl == this.multiblocks[key].struc[m.data.MAPIside].length){ 
                                m.data.MAPIact = true
                                return
                            }
                        }else{
                        	m.data.MAPIact=false
                            return
                        }
                    }
                }
            }
        }
    },
    Rotate(originalStruct){
        for (var side = 1; side<=3; side++){
            originalStruct[side] = []
            for(var key in originalStruct[side-1]){
                originalStruct[side].push([originalStruct[side-1][key][2], originalStruct[side-1][key][1], -originalStruct[side-1][key][0], originalStruct[side-1][key][3]])
            }
        }
    }
}; 


Callback.addCallback("PostLoaded", function(){
MAPI.Load();
})


var ATMech = {
	furnaceRecipes:[], 
	maceratorRecipes:[],
	centrifugeRecipes:[],
	forgeHammerRecipes:[],
	oreWasherRecipes:[],
	compressorRecipes:[],
OreWasherRecipe(obj){
	this.oreWasherRecipes.push(obj)
},
ForgeHammerRecipe(obj){
	this.forgeHammerRecipes.push(obj)
},
CentrifugeRecipe(obj){
	if(!obj.rS1){
        obj.rS1=[0, 0, 0];
    }
    if(!obj.rS2){
        obj.rS2=[0, 0, 0];
    }
    if(!obj.rS3){
        obj.rS3=[0, 0, 0];
    }
    if(!obj.rS4){
        obj.rS4=[0, 0, 0];
    }
    this.centrifugeRecipes.push(obj)
},
FurnaceRecipe(obj){
    if(!obj.rS1){
        obj.rS1=[0, 0, 0];
    }
    if(!obj.rS2){
        obj.rS2=[0, 0, 0];
    }
   if(!obj.sS1){
        obj.sS1=[0, 0, 0];
    }
    if(!obj.sS2){
        obj.sS2=[0, 0, 0];
    }    
    this.furnaceRecipes.push({sS1:obj.sS1, sS2:obj.sS2, rS1:obj.rS1, rS2:obj.rS2, long:obj.long, temp:obj.temp});
    this.furnaceRecipes.push({sS1:obj.sS2, sS2:obj.sS1, rS1:obj.rS1, rS2:obj.rS2, long:obj.long, temp:obj.temp}); 
}, 
MaceratorRecipe(obj, craftTable){
	if(craftTable) CreateShapelessRecipeWithTool({id: obj.sS[0], count: 1, data: obj.sS[2]}, [{id: obj.rS1[0], data: obj.rS1[2]}], [ATMat.mortars], obj.lvl)
	if(!obj.rS1){
        obj.rS1=[0, 0, 0];
    }
    if(!obj.rS2){
        obj.rS2=[0, 0, 0];
    }
    if(!obj.rS3){
        obj.rS3=[0, 0, 0];
    }
    if(!obj.rS4){
        obj.rS4=[0, 0, 0];
    }
    this.maceratorRecipes.push(obj);
},
CompressorRecipe(obj){
	if(!obj.sS1){
        obj.rS1=[0, 0, 0];
    }
    if(!obj.sS2){
        obj.rS2=[0, 0, 0];
    }
	this.compressorRecipes.push({sS1: obj.sS1, sS2: obj.sS2, rS: obj.rS, lvl: obj.lvl})
	this.compressorRecipes.push({sS1: obj.sS2, sS2: obj.sS1, rS: obj.rS, lvl: obj.lvl})
}
};

let ores_types = [{name:"stone", level:1, id: [1, 0]}, {name:"nether", level:1, id: [87, 0]}, {name:"end", level:1, id: [121, 0]}]//, {name: "stone_andesite", level: 1, id: [1, 1]}, {name: "stone_diorite", level: 1, id: [1, 3]}, {name: "stone_granite", level: 1, id: [1, 5]}, {name: "sand", level: 1, id: [12, 0]}, {name: "sandstone", level: 1, id: [24, 0]}, {name: "red_sand", level: 1, id: [12, 1]}, {name: "red_sandstone", level: 1, id: [179, 0]}]
let genChanceForBreed = Config.genChanceForBreed
let limit = Config.limit
let chunkNumForGen = Config.chunkNumForGen
let chunkNumForGenBreed = Config.chunkNumForGenBreed
const ATGen = {
	strongIf(coords){
		return World.getBlockID(coords.x, coords.y, coords.z) != 0 && World.getBlockID(coords.x, coords.y, coords.z) != 8 && World.getBlockID(coords.x, coords.y, coords.z) != 9 && World.getBlockID(coords.x, coords.y, coords.z) != 10 && World.getBlockID(coords.x, coords.y, coords.z) != 11 && World.getBlockID(coords.x, coords.y, coords.z) != 7 && World.getBlockID(coords.x, coords.y, coords.z) != 2
	},
	chunkNumber(chunkX, chunkZ, n){
		return chunkX % n == 0 && chunkZ % n == 0
	},
	oresEarth:[],
	oresNether:[],
	oresEnd:[],
	breeds:[],
	oresSmallStone:[],
	oresSmallNether:[],
	oresSmallEnd:[],
	
    SmallOreEarth(){
        //var tiles = [0]
        return Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
        	var minY = Config.smallOresStoneMinY
            var maxY = Config.smallOresStoneMaxY
            var count = Config.smallOresStoneCount
            var tiles = [1, 14, 15, 16, 56, 73, 74, 129, 21]
            
            for(var c = 0; c<count; c++){
            	//alert(c)
            	var key = random(0, ATGen.oresSmallStone.length-1)
                for(var i = maxY; i > minY; i--){
                	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, i);
                	for(var keys = 0; keys < tiles.length; keys++){    	
                        if(World.getBlockID(coords.x, coords.y, coords.y) == tiles[keys]){
                        	//alert(ATMat.smallOres[ATGen.oresSmallStone[key]].mat)
                            ATGen.setOre(coords.x, coords.y, coords.z, ATGen.oresSmallStone[key], 0, tiles); 
                            i = minY
                            break
                        }
                    }
                }
            }
        });
    },
    SmallOreNether(){
        //var tiles = [0]
        return Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
        	var minY = Config.smallOresNetherMinY
            var maxY = Config.smallOresNetherMaxY
            var count = Config.smallOresNetherCount
            var tiles = [87]
            
            for(var c = 0; c<count; c++){
            	//alert(c)
            	var key = random(0, ATGen.oresSmallNether.length-1)
                for(var i = maxY; i > minY; i--){
                	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, i);
                	for(var keys in tiles){    	
                        if(World.getBlockID(coords.x, coords.y, coords.y) == tiles[keys]){
                        	//alert(ATMat.smallOres[ATGen[key]].mat)
                            ATGen.setOre(coords.x, coords.y, coords.z, ATGen.oresSmallNether[key], 0, tiles); 
                            i = minY
                            break
                        }
                    }
                }
            }
        });
    },
    SmallOreEnd(){
        //var tiles = [0]
        return Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
        	var minY = Config.smallOresEndMinY
            var maxY = Config.smallOresEndMaxY
            var count = Config.smallOresEndCount
            var tiles = [121]
            
            for(var c = 0; c<count; c++){
            	//alert(c)
            	var key = random(0, ATGen.oresSmallEnd.length-1)
                for(var i = maxY; i > minY; i--){
                	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, minY, i);
                	for(var keys in tiles){    	
                        if(World.getBlockID(coords.x, coords.y, coords.y) == tiles[keys]){
                        	//alert(ATMat.smallOres[ATGen.oresSmallEnd[key]].mat)
                            ATGen.setOre(coords.x, coords.y, coords.z, ATGen.oresSmallEnd[key], 0, tiles); 
                            i = minY
                            break
                        }
                    }
                }
            }
        });
    },
    GenBreed(){
    	return Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    	    var key = random(0, ATGen.breeds.length-1)
            var arr = ATGen.breeds[key]
            
    	    if(ATGen.chunkNumber(chunkX, chunkZ, chunkNumForGenBreed)){
            	for(var i = arr.maxY; i > arr.minY; i--){
            	    //alert(i)
            	   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, i);
                   if(arr.tiles == -1 && ATGen.strongIf(coords)){
                   	//alert("go")
                       var r = arr.diameter
                         for(var x = -r; x < r; x++){
                             for(var y = -r; y < r; y++) {
                                 for(var z = -r; z < r; z++){
                                    if((x * x) + (y * y) + (z * z) <= (r * r)){
                                       ATGen.setOre(x+coords.x, y+coords.y, z+coords.z, arr.id, arr.data, arr.tiles);
                                       //i = arr.maxY
                                   }
                               }
                           }
                       }
                    }else if(arr.tiles != -1){
                    	for(var keys in arr.tiles){    	
                            if(World.getBlockID(coords.x, coords.y, coords.z) == arr.tiles[keys]){
                               //alert("go")
                               var r = arr.diameter
                                 for(var x = -r; x < r; x++){
                                     for(var y = -r; y < r; y++) {
                                         for(var z = -r; z < r; z++){
                                            if((x * x) + (y * y) + (z * z) <= (r * r)){
                                               ATGen.setOre(x+coords.x, y+coords.y, z+coords.z, arr.id, arr.data, arr.tiles);
                                               i = arr.minY
                                           }
                                       }
                                   }
                               }
                            }
                        }
                    }
                var chance = 0
                var oresBreed = eval("ATGen.ores"+arr.name)
                for(var keys in oresBreed){
                	chance+=oresBreed[keys].chance
                }
                chance = round(genChanceForBreed / (chance / oresBreed.length) * 100, 1)
                if(rollPercentage(chance)){
                    eval("ATGen.GenLargeOreDepositeOn_"+arr.name+"(arr, coords)")
                    return
                    }
                }
            }
        })
    },
    GenLargeOreDepositeOnStone(){                                
            return Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
            var arr
            var key
            
            if(Config.simpleGeneration){
        	for (let i = 0; i < Config.simpleOresEarthCount; i++) {
        	    let a = true
        	    while(a){
            	    key = random(0, ATGen.oresEarth.length-1)
                    arr = ATGen.oresEarth[key]
                    //Flags.addUniqueAction("oreGen"+arr.name, function () {
                    if(rollPercentage(arr.chance)){
                        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, arr.maxY);
                        if(Config.radiation){
        	                    let id = World.getBlockID(coords.x, coords.y, coords.z)
        	                    let base = Radiation.blocks[id]
                                if(base) Radiation.world[coords.x + "$" + coords.y + "$" + coords.z] = {key: id, coords: {x: coords.x, y: coords.y, z: coords.z}, dimension: Player.getDimension()} 
                         }
                        GenerationUtils.generateOre(coords.x, coords.y, coords.z, arr.ids[0], 0, Config.simpleOresSize);
                        a = false
                    }
                    //})
                }
            }
        	return
            }
        
            var chance = Config.chanceMultiplier            
            if(ATGen.chunkNumber(chunkX, chunkZ, chunkNumForGen)){
            	for(var l = 0; l < limit; l++){
            	    chance+=Config.chanceMultiplier
                     key = random(0, ATGen.oresEarth.length-1)
                     arr = ATGen.oresEarth[key]
                     //Flags.addUniqueAction("oreGen"+arr.name, function () {
                     //alert(arr.chance * chance)
                	if(rollPercentage(arr.chance * chance)){
                	    //alert(arr.chance)
                	    for(var a = 0; a<arr.count; a++){
                    	    for(var i = arr.maxY; i > arr.minY; i--){                   	        
                                //alert(i+", "+arr.minY)
                                
                                if(i==arr.minY+1){
                                	//alert("return")
                    	            return
                                }
                            	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, i);
                                for(var keys in arr.tiles){                             
                                    if(World.getBlockID(coords.x, coords.y, coords.z) == arr.tiles[keys]){
                                       ATGen.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, arr.ids, arr.size, arr.density, arr.tiles)
                                       i = arr.minY
                                       if(a == arr.count - 1){
                                           return
                                        }
                                       break                  
                                   }/*else if(i == arr.minY){                                
                                   	//alert(l)
                                       key = random(0, ATGen.oresEarth.length-1)
                                       arr = ATGen.oresEarth[key]
                                       //alert(i)
                                       if(rollPercentage(arr.chance)){
                                           a = 0
                                           break
                                       }else{
                                           //alert("return")
                                           return
                                       }
                                   }*/
                               }
                           }
                        }
                    }
                    //})
                }
            }
        })
    },
    GenLargeOreDepositeOnNether(){
        return Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
        	var arr
            var key
               
            if(Config.simpleGeneration){
        	for (let i = 0; i < Config.simpleOresNetherCount; i++) {
        	    let a = true
        	    while(a){
            	    key = random(0, ATGen.oresNether.length-1)
                    arr = ATGen.oresNether[key]
                    //Flags.addUniqueAction("oreGen"+arr.name, function () {
                    if(rollPercentage(arr.chance)){
                        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, arr.maxY);
                        if(Config.radiation){
        	                    let id = World.getBlockID(coords.x, coords.y, coords.z)
        	                    let base = Radiation.blocks[id]
                                if(base) Radiation.world[coords.x + "$" + coords.y + "$" + coords.z] = {key: id, coords: {x: coords.x, y: coords.y, z: coords.z}, dimension: Player.getDimension()} 
                         }
                        GenerationUtils.generateOre(coords.x, coords.y, coords.z, arr.ids[0], 0, Config.simpleOresSize);
                        a = false
                    }
                    //})
                }
            }
        	return
            }
        
            var chance = Config.chanceMultiplier
            if(ATGen.chunkNumber(chunkX, chunkZ, chunkNumForGen)){
            	for(var l = 0; l < limit; l++){
            	    chance+=Config.chanceMultiplier
                	 key = random(0, ATGen.oresNether.length-1)
                     arr = ATGen.oresNether[key]
                     //Flags.addUniqueAction("oreGen"+arr.name, function () {
                	if(rollPercentage(arr.chance * chance)){
                	    for(var a = 0; a<arr.count; a++){
                       	 for(var i = arr.maxY; i > arr.minY; i--){
                       	    if(i==arr.minY+1){
                                	//alert("return")
                    	            return
                                }
                            	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, i);
                                for(var keys in arr.tiles){
                                    if(World.getBlockID(coords.x, coords.y, coords.z) == arr.tiles[keys]){
                                       ATGen.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, arr.ids, arr.size, arr.density, arr.tiles)
                                       if(a == arr.count - 1){
                                           return
                                       }
                                       break      
                                   }/*else if(i == arr.minY){
                                       key = random(0, ATGen.oresNether.length-1)
                                       arr = ATGen.oresNether[key]
                                       //alert(i)
                                       if(rollPercentage(ATGen.oresNether[key].chance)){
                                           a = 0
                                           break
                                       }else{
                                           //alert("return")
                                           return
                                       }
                                   }*/
                               }
                           }
                       }
                    }
                    //})
                }
            }               
        })
    },
    GenLargeOreDepositeOnEnd(){
        return Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
        	var arr
            var key
                
            if(Config.simpleGeneration){   
        	for (let i = 0; i < Config.simpleOresEndCount; i++) {
        	    let a = true
        	    while(a){
            	    key = random(0, ATGen.oresEnd.length-1)
                    arr = ATGen.oresEnd[key]
                    Flags.addUniqueAction("oreGen"+arr.name, function () {
                    if(rollPercentage(arr.chance)){
                        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, arr.maxY);
                        if(Config.radiation){
        	                    let id = World.getBlockID(coords.x, coords.y, coords.z)
        	                    let base = Radiation.blocks[id]
                                if(base) Radiation.world[coords.x + "$" + coords.y + "$" + coords.z] = {key: id, coords: {x: coords.x, y: coords.y, z: coords.z}, dimension: Player.getDimension()} 
                         }
                        GenerationUtils.generateOre(coords.x, coords.y, coords.z, arr.ids[0], 0, Config.simpleOresSize);
                        a = false
                    }
                    })
                }
            }
        	return
            }
        
            var chance = Config.chanceMultiplier
            if(ATGen.chunkNumber(chunkX, chunkZ, chunkNumForGen)){
            	for(var l = 0; l < limit; l++){
            	    chance+=Config.chanceMultiplier
                   key = random(0, ATGen.oresEnd.length-1)
              	 arr = ATGen.oresEnd[key]
                   //Flags.addUniqueAction("oreGen"+arr.name, function () {
               	if(rollPercentage(arr.chance * chance)){
              	    for(var a = 0; a<arr.count; a++){
                  	    for(var i = arr.maxY; i > arr.minY; i--){    
                              if(i==arr.minY+1){
                                 //alert("return")
                    	          return
                              }              	        
                          	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, arr.minY, i);
                              for(var keys in arr.tiles){  
                              	if(i==arr.minY){
                    	                return
                                    }
                                  if(World.getBlockID(coords.x, coords.y, coords.z) == arr.tiles[keys]){
                                      ATGen.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, arr.ids, arr.size, arr.density, arr.tiles)
                                      if(a == arr.count - 1){
                                          return
                                      }
                                      break
                                  }/*else if(i == arr.minY){
                                      key = random(0, ATGen.oresEnd.length-1)
                                      arr = ATGen.oresEnd[key]
                                      //alert(i)
                                      if(rollPercentage(ATGen.oresEnd[key].chance)){
                                         a = 0
                                         break
                                      }else{
                                         //alert("return")
                                         return
                                      }
                                  }*/
                              }
                          }
                      }
                   }
                   //})
                }
            }               
        })
    },
    RegisterLargeOreDepositeOnStone(ids, chance, tiles, minY, maxY, size, density, count){
    	this.oresEarth.push({ids:ids, chance:chance, tiles:tiles, minY:minY, maxY:maxY, size:size, density:density, count:count})
    },
    RegisterLargeOreDepositeOnNether(ids, chance, tiles, minY, maxY, size, density, count){
    	this.oresNether.push({ids:ids, chance:chance, tiles:tiles, minY:minY, maxY:maxY, size:size, density:density, count:count})
    },
    RegisterLargeOreDepositeOnEnd(ids, chance, tiles, minY, maxY, size, density, count){
    	this.oresEnd.push({ids:ids, chance:chance, tiles:tiles, minY:minY, maxY:maxY, size:size, density:density, count:count})
    },
    RegisterBreed(id, data, diameter, chance, minY, maxY, tiles, world, name, level){
    	this.breeds.push({id:id, data:data, diameter:diameter, chance:chance, minY:minY, maxY:maxY, tiles:tiles, world:world, name:name})
        //alert(lvl)
        ores_types.push({name:name, data: ores_types.length, level:level})
        eval("this.ores"+name+" = []")
        eval("this.RegisterLargeOreDepositeOn_"+name+" = function(ids, chance, density){ this.ores"+name+".push({ids:ids, chance:chance, density:density}) }")
        eval("ATGen.GenLargeOreDepositeOn_"+name+" = function(arr, coords){ var key = random(0, ATGen.ores"+name+".length-1); var ore = ATGen.ores"+name+"[key]; let i = 0; while(i<limit){ i++; if(rollPercentage(ore.chance)){ return ATGen.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, ore.ids, {xz:arr.diameter*2, y:arr.diameter}, ore.density, [arr.id])} } }")
    },
    setOre(x, y, z, id, data, tile) {
    	//alert(id)
        if(tile == -1 && this.strongIf({x:x, y:y, z:z})){
        	if(Config.radiation){
        	        let base = Radiation.blocks[id]
                    if(base) Radiation.world[coords.x + "$" + coords.y + "$" + coords.z] = {key: id, coords: {x: coords.x, y: coords.y, z: coords.z}, dimension: Player.getDimension()} 
            }
        	World.setBlock(x, y, z, id, data);
            //alert(-1)
        }else{
        	//alert(tile[0])
        	for(var keys in tile){    	
                 if(World.getBlockID(x, y, z) == tile[keys]){
                    World.setBlock(x, y, z, id, data);
                }
            }
        }
    },
    LargeOreDepositeTemplate(x, y, z, ids, size, density, tiles){
    	    var rand1 = 1.5
            var rand2 = 10
            var rand3 = 1.5
            var rand4 = 6
            var rx = size.xz
            var ry = Math.floor(size.y/2)
            var rz = size.xz
            var n = Math.floor(size.y/ids.length) //2
            var code
            var chance
            var num 
            var id = []
            //alert(size.xz)
            
            /*for(var key1 = 0; key1 < Math.floor(size.y / n); key1++){ // < 8 / 2 = 4
                id[key1] = []
                for(var key2 = 0; key2 < ids.length; key2++){ // ids.length = 4
                    num = key2 + key1
                	if(num < ids.length-1){
                        id[key1].push(ids[num])
                    }else{
                    	num = 0+key1
                    	id[key1].push(ids[num])
                    }
                }
            }*/
            
            for (var xx = -rx; xx <= rx; xx++) {
                for (var yy = -ry; yy < ry; yy++) { // 2
                    for (var zz = -rz; zz <= rz; zz++) {
                        if(yy % n == 0){
                        	//alert(yy)
                        	for(var a = 0; a < n; a++){
                        	    code = ""
                        	    if (Math.sqrt(xx * xx + yy * yy + zz * zz) < Math.floor((size.xz + size.xz) / 4) && rollPercentage(density)) {
                            	    for(var key = 0; key < ids.length; key++){
                            	        if(code == ""){
                            	            chance = Math.floor(ids.length-key-1)
                            	            code = code + "if (Math.random() < 1 / "+chance+") { ATGen.setOre(x + xx, y + yy - a, z + zz, ids[key], 0, tiles); }"
                                         }else{
                                         	chance = Math.floor(ids.length-key-1)
                                             code = code + "else if (Math.random() < 1 / "+chance+") { ATGen.setOre(x + xx, y + yy - a, z + zz, ids[key], 0, tiles); }"
                                         }  
                                         eval(code)
                                         //break
                                     }
                                 }      
                            }
                        }
                    }
                }
            }
    },
}
                        
/*                            if (yy == 1) {
                                if (Math.random() < 1 / 7) {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id4, 0, tiles)
                                } else {
                                    if (Math.random() < 1 / 2) {
                                        ATGen.setOre(x + xx, y + yy, z + zz, id2, 0, tiles);
                                    } else {
                                        ATGen.setOre(x + xx, y + yy, z + zz, id1, 0, tiles);
                                    }
                                }
                            }
                            if (yy == -1) {
                                if (Math.random() < 1 / 7) {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id4, 0, tiles)
                                } else {
                                    if (Math.random() < 1 / 2) {
                                        ATGen.setOre(x + xx, y + yy, z + zz, id2, 0, tiles);
                                    } else {
                                        ATGen.setOre(x + xx, y + yy, z + zz, id3, 0, tiles);
                                    }
                                }
                            }
                            if (yy > 1) {
                                if (Math.random() < 1 / 7) {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id4, 0, tiles)
                                } else {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id1, 0, tiles);
                                }
                            }
                            if (yy < -1) {
                                 if (Math.random() < 1 / 7) {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id4, 0, tiles)
                                } else {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id3, 0, tiles);
                                }
                            }
                            if (yy == 0) {
                                if (Math.random() < 1 / 7) {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id4, 0, tiles)
                                } else {
                                    ATGen.setOre(x + xx, y + yy, z + zz, id2, 0, tiles);
                                }
                            }
                        }
                    }
                }
            }
        }
}*/

Callback.addCallback("PostLoaded", function(){
	if(Config.simpleGeneration) Config.genBreeds, Config.genSmallOresEarth, Config.genSmallOresNether, Config.genSmallOresEnd = false
	
	if(Config.genBreeds == true){ ATGen.GenBreed(); }
	if(Config.genLargeOresStone == true){ ATGen.GenLargeOreDepositeOnStone(); }
	if(Config.genLargeOresNether == true){ ATGen.GenLargeOreDepositeOnNether(); }
	if(Config.genLargeOresEnd == true){ ATGen.GenLargeOreDepositeOnEnd(); }
	if(Config.genSmallOresEarth == true){ ATGen.SmallOreEarth(); }
	if(Config.genSmallOresNether == true){ ATGen.SmallOreNether(); }
	if(Config.genSmallOresEnd == true){ ATGen.SmallOreEnd(); }
})

var vanileFurnaceTemp = Config.vanileFurnaceTemp

var loadTextures = false

Callback.addCallback("PostLoaded", function(){
    if(loadTextures){
        alert("[AlTech]: Textures generated, please restart......")
    	UI.getContext().finish();
    }
})

Flags.allFlags = {}

const ATMat = {
	materials:{},
	hammers:[], files:[], mortars:[], cutters:[], wrenchs:[], screwdrivers:[], knifes:[], saws:[], solderings:[],
	
    ingots:{}, plates:{}, dusts:{}, dustsSmall:{}, bolts:{}, nuggets:{}, modules:{}, littleOres:{}, gems:{}, rods:{}, long_rods:{}, rings:{}, wires:{}, blocks:{}, ores:{}, impaleDusts:{}, casings:{}, crusheds:{}, crushedsPurified:{}, crushedsCentrifuged:{}, dustsImpure:{}, dustsPure: {}, screws: {}, gears: {}, machineBlocks: {}, smallOres: {}, dustsTiny: {}, chunks: {}, tools: {},
    
    createBase: function(){
    	return [this.ingots, this.plates, this.dusts, this.dustsSmall, this.bolts, this.nuggets, this.modules, this.littleOres, this.gems, this.rods, this.long_rods, this.rings, this.wires, this.blocks, this.ores, this.impaleDusts, this.casings, this.crusheds, this.crushedsPurified, this.crushedsCentrifuged, this.dustsImpure, this.dustsPure, this.machineBlocks, this.screws, this.gears, this.machineBlocks, this.smallOres, this.dustsTiny, this.chunks, this.tools]
    },
    
    generateItemTexture: function(material, tool, color){
    	material = material.toLowerCase()
    	var template_dir = __dir__ + "templates/materials/";
        var output_tools_dir = __dir__ + "res/images/items-opaque/"+tool+"s/";
    	if(!new java.io.File(output_tools_dir+ (material + "_" + tool) + "_0.png").exists()){
     	    setLoadingTip("[AlTech]: Generate items textures: "+this.FixName(material));
     
           var template = android.graphics.BitmapFactory.decodeFile(template_dir + tool + ".png");
 
            var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
            var canvas = new android.graphics.Canvas(bitmap);
            var paint = new android.graphics.Paint();
             
            paint.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
            canvas.drawBitmap(template, 0, 0, paint); 
            
            var file = new java.io.File(output_tools_dir+ (material + "_" + tool) + "_0.png")
            file.getParentFile().mkdirs();
            file.createNewFile();
            var fos = new java.io.FileOutputStream(output_tools_dir+ (material + "_" + tool) + "_0.png");
            bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
            loadTextures = true
         }
     },
     
     generateBlockTexture: function(material, tool, color){
    	material = material.toLowerCase()
    	var template_dir = __dir__ + "templates/materials/";
        var output_tools_dir = __dir__ + "res/images/terrain-atlas/blocks/";
    	if(!new java.io.File(output_tools_dir+ (material + "_" + tool) + "_block_0.png").exists()){
    	     setLoadingTip("[AlTech]: Generate blocks textures: "+this.FixName(material));
             var template = android.graphics.BitmapFactory.decodeFile(template_dir + tool + "_block.png");
 
            if(tool != "machine"){ var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888); }
            else{
            var bitmap = new android.graphics.Bitmap.createBitmap(32, 32, android.graphics.Bitmap.Config.ARGB_8888); }
            var canvas = new android.graphics.Canvas(bitmap);
            var paint = new android.graphics.Paint();
             
            paint.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
            canvas.drawBitmap(template, 0, 0, paint); 
            
            var file = new java.io.File(output_tools_dir+ (material + "_" + tool) + "_block_0.png")
            file.getParentFile().mkdirs();
            file.createNewFile();
            var fos = new java.io.FileOutputStream(output_tools_dir+ (material + "_" + tool) + "_block_0.png");
            bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
            loadTextures = true
         }
     },
     
    generateOreTexture: function(material, background, data, color, type){
    	material = material.toLowerCase()
    	var template_dir = __dir__ + "templates/ores/";
        var output_tools_dir = __dir__ + "res/images/terrain-atlas/ores/"+background+"/";
    	if(!new java.io.File(output_tools_dir+ ("ore_" + material) + "_"+data+".png").exists()){
    	setLoadingTip("[AlTech]: Generate ores textures: "+this.FixName(material));
        var template = android.graphics.BitmapFactory.decodeFile(template_dir + type + ".png");
        var back = android.graphics.BitmapFactory.decodeFile(template_dir + "back/" + background + ".png");
 
        var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        var canvas = new android.graphics.Canvas(bitmap);
        
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(back, 0, 0,  null);
        canvas.drawBitmap(template, 0, 0, paint);
 
        var file = new java.io.File(output_tools_dir+ ("ore_" + material) + "_"+data+".png");
        file.getParentFile().mkdirs();
        file.createNewFile();
        var fos = new java.io.FileOutputStream(output_tools_dir+ ("ore_" + material) + "_"+data+".png");
        bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
        loadTextures = true
        }
    },
    
    generateToolTexture: function(material, tool, color, NoLever){
    	material = material.toLowerCase()
    	var template_dir = __dir__ + "templates/tools/";
        var output_tools_dir = __dir__ + "res/images/items-opaque/tools/"+tool+"/";
    	if(!new java.io.File(output_tools_dir+ (material + "_" + tool) + "_0.png").exists()){
    	setLoadingTip("[AlTech]: Generate tools textures: "+this.FixName(material));
        var template = android.graphics.BitmapFactory.decodeFile(template_dir + tool + ".png");
        var lever = android.graphics.BitmapFactory.decodeFile(template_dir + "lever.png")
        
        if(!NoLever){
            if(tool == "sword"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "sword_lever.png") 
            }else if(tool == "hammer"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "hammer_lever.png") 
            }else if(tool == "cutter"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "cutter_lever.png") 
            }else if(tool == "file"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "file_lever.png") 
            }else if(tool == "mortar"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "mortar.png") 
            }else if(tool == "saw"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "saw_lever.png") 
            }else if(tool == "screwdriver"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "screwdriver_lever.png") 
            }else if(tool == "soldering"){ lever = android.graphics.BitmapFactory.decodeFile(template_dir + "hammer_lever.png") }
        }
 
        var bitmap = new android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
        var canvas = new android.graphics.Canvas(bitmap); 
        
        var paint = new android.graphics.Paint();
        paint.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
        if(!NoLever) canvas.drawBitmap(lever, 0, 0,  null);
        canvas.drawBitmap(template, 0, 0, paint);
 
        var file = new java.io.File(output_tools_dir+ (material + "_" + tool) + "_0.png");
        file.getParentFile().mkdirs();
        file.createNewFile();
        var fos = new java.io.FileOutputStream(output_tools_dir+ (material + "_" + tool) + "_0.png");
        bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
        loadTextures = true
        }
    },
    
    generateArmorTexture: function(material, color){
    	material = material.toLowerCase()
    	var template_dir = __dir__ + "templates/tools/armor/";
        var output_tools_dir = __dir__ + "res/images/armor/";
    	if(!new java.io.File(output_tools_dir + material + "_1.png").exists()){
     	    setLoadingTip("[AlTech]: Generate armor textures: "+this.FixName(material));
     
           var template1 = android.graphics.BitmapFactory.decodeFile(template_dir + "armor_1.png");
           var template2 = android.graphics.BitmapFactory.decodeFile(template_dir + "armor_2.png");
 
            var bitmap1 = new android.graphics.Bitmap.createBitmap(64, 32, android.graphics.Bitmap.Config.ARGB_8888);
            var bitmap2 = new android.graphics.Bitmap.createBitmap(64, 32, android.graphics.Bitmap.Config.ARGB_8888);
            
            var canvas1 = new android.graphics.Canvas(bitmap1);
            var canvas2 = new android.graphics.Canvas(bitmap2);
            
            var paint = new android.graphics.Paint();
            paint.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
            
            canvas1.drawBitmap(template1, 0, 0, paint);             
            canvas2.drawBitmap(template2, 0, 0, paint); 
            
            var file1 = new java.io.File(output_tools_dir+ material + "_1.png")
            file1.getParentFile().mkdirs();
            file1.createNewFile();
            var fos = new java.io.FileOutputStream(output_tools_dir+ material + "_1.png")
            bitmap1.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
            
            var file2 = new java.io.File(output_tools_dir+ material + "_2.png")
            file2.getParentFile().mkdirs();
            file2.createNewFile();
            var fos = new java.io.FileOutputStream(output_tools_dir+ material + "_2.png")
            bitmap2.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, fos);
            
            loadTextures = true
         }
    },
    
    RetArg(type, mat, arg){
    	for(var keys in eval("this."+type)){
    	    var t = eval("this."+type+"[keys]")
            if(t.mat == mat){
            	return eval("t."+arg)
            }
        }
    },
    RegisterImpaleDust(id, mat, lvl, n){
    	this.impaleDusts[id] = {id: id, mat: mat, lvl: lvl}
        ATMech.OreWasherRecipe({sS:[id, 1, 0], rS:mat})
		
        if(n == true){
        Item.registerUseFunction(id, function(coords, item, b){
        	var c = coords.relative
            //alert(World.getBlockID(c.x, c.y, c.z))
            if(World.getBlockID(c.x, c.y, c.z) == 9 && rollPercentage(10)){
            	//alert("take this")
            	World.drop(c.x+0.5, c.y+0.1, c.z+0.5, mat[0], mat[1], 0)
                World.setBlock(c.x, c.y, c.z, 0, 0)
                item.count--;
	            if(!item.count){ 
                    item.id = 0;
                 }
	             Player.setCarriedItem(item.id, item.count, 0)
	         }
	    })
	    }
    },
    SmallOreRegister(name, type, data, color, lvl){
    	this.generateOreTexture(name.toLowerCase()+"_small", type, data, color, "SMALL")
        let oreType = "opaque"
    	var ID = IDRegistry.genBlockID("oreSmall"+name+"_"+type);
        Block.createBlock("ore"+"Small"+(name)+"_"+type, [
	    {name: (name)+" Small ore", texture: [[("ore_" + name.toLowerCase())+"_small", data]], inCreative: true}
        ], oreType);
        ToolAPI.registerBlockMaterial(ID, "stone", lvl, true);
        Block.setDestroyLevel(ID, lvl);
        eval("ATGen.oresSmall"+type+".push(ID)")
        this.smallOres[ID] = {id:ID, type: type, data:0, mat: name, lvl: lvl}
        
            Block.registerDropFunction(ID, function(coords, id, data, level, enchant){
            	if(level>=lvl){
                	return [[eval("ItemID.dustImpure"+name), 1, 0]]
                }else{
                	return []
                }
            })
        return ID
    },
    OreRegister: function(name, materials, types, generateDrop, isSmallOre, c, type, gen, lvl){
        if(Config.read("generation.Ores." + name)) types = Config.read("generation.Ores." + name + ".types")
    	let IDS = []
    	if(!lvl) lvl = 0
        let oreType = "opaque"
        let type
        for(var keys in types){
        	for(var key = 0; key < ores_types.length; key++){
        	    if(!types[keys]) continue 
        	    if(types[keys].toLowerCase()==ores_types[key].name){
        	 
                    let cfgName = name + "_" + types[keys]
        	        if(!Config.read("generation.Ores." + name)){
                   	Config.write("generation.Ores." + name, "{}")
                       Config.write("generation.Ores." + name + ".enabled", "true")
                       Config.write("generation.Ores." + name + ".level", lvl)
                       Config.write("generation.Ores." + name + ".isSmallOre", JSON.stringify(isSmallOre))
                       Config.write("generation.Ores." + name + ".generateDrop", JSON.stringify(generateDrop))
                       Config.write("generation.Ores." + name + ".types", JSON.stringify(types))
                       Config.write("generation.Ores." + name + ".materials", JSON.stringify(materials))
                       Config.write("generation.Ores." + name + ".gen", "{}")
                    }else{
                        lvl = Config.read("generation.Ores." + name + ".level")
                        isSmallOre = Config.read("generation.Ores." + name + ".isSmallOre")
                        generateDrop = Config.read("generation.Ores." + name + ".generateDrop")
                        materials = Config.read("generation.Ores." + name + ".materials")
                    }
                    if(!Config.read("generation.Ores." + name + ".enabled")) return
                                        
        	        c = c || "#FFFFFF"
		            let color = android.graphics.Color.parseColor(c);
                    this.generateOreTexture(name.toLowerCase(), types[keys], key, color, type || "METALL")
                    var ID = IDRegistry.genBlockID("ore"+name+"_"+types[keys]);
                    IDS.push(ID)
                    Block.createBlock("ore"+name+"_"+types[keys], [
	                {name: this.FixName(name)+" ore", texture: [[("ore_" + name.toLowerCase()), key]], inCreative: true}
                    ], oreType);
                    ToolAPI.registerBlockMaterial(ID, "stone", ores_types[key].level + lvl, true);
                    Block.setDestroyLevel(ID, (ores_types[key].level + lvl));
                    this.ores[ID] = {id:ID, type:(name), data:0, mat: materials, lvl: ores_types[key].level + lvl, c: 1.5}
                    setLoadingTip("[AlTech]: Register ore: "+this.FixName(name));
                    
                    if(isSmallOre && key <=2){ 
                        setLoadingTip( "[AlTech]: Register small ore: "+this.FixName(name));
                        IDS.push(this.SmallOreRegister(name, types[keys], key, color, ores_types[key].level + lvl))
                    }
                    if(gen){
                    	//Flags.allFlags["oreGen"+name] = true
                    	if(!materials[1]) materials[1] = [name]
                        if(!materials[2]) materials[2] = [name]  	
                    	let doIt = true
                    	let tileTemplate = []
                    	if(types[keys] == "Stone"){
                    	    tileTemplate = [1, 14, 15, 16, 56, 73, 74, 129, 21]
                        }else if(types[keys] == "Nether"){
                        	tileTemplate = [87]
                        }else if(types[keys] == "End"){
                        	tileTemplate = [121]
                        }else{
                        	if(Config.read("generation.Ores." + name + ".gen." + types[keys])){
                                if(Config.read("generation.Ores." + name + ".gen." + types[keys] + ".enabled")){
                                	let chance = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".chance")
                                    let density = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".density")
                                    eval("ATGen.RegisterLargeOreDepositeOn_" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], chance, density)")
                                }
                            }else{
                            	Config.write("generation.Ores." + name + ".gen." + types[keys], "{}")
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".enabled", "true")
                            	Config.write("generation.Ores." + name + ".gen." + types[keys] + ".chance", gen * 2)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".density", 5)
                                eval("ATGen.RegisterLargeOreDepositeOn_" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], 100, 5)")
                            }
                        	doIt = false
                        }
                        if(doIt){                        	
                    	if(Config.read("generation.Ores." + name + ".gen." + types[keys])){
                            if(Config.read("generation.Ores." + name + ".gen." + types[keys] + ".enabled")){
                        	    let chance = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".chance")
                                let minY = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".minY")
                                let maxY = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".maxY")
                                let xz = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".xz")
                                let y = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".y")
                                let density = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".density")
                                let count = Config.read("generation.Ores." + name + ".gen." + types[keys] + ".count")
                            	eval("ATGen.RegisterLargeOreDepositeOn" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], chance, tileTemplate, minY, maxY, {xz: xz, y: y}, density, count)")
                            }
                        }else{
                        	Config.write("generation.Ores." + name + ".gen." + types[keys], "{}")
                            Config.write("generation.Ores." + name + ".gen." + types[keys] + ".enabled", "true")
                            Config.write("generation.Ores." + name + ".gen." + types[keys] + ".xz", 32)
                            Config.write("generation.Ores." + name + ".gen." + types[keys] + ".y", 8)                            
                            Config.write("generation.Ores." + name + ".gen." + types[keys] + ".count", 1)
                            
                            if(types[keys] == "Stone"){
                            	Config.write("generation.Ores." + name + ".gen." + types[keys] + ".chance", gen)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".minY", 10)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".maxY", 64)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".density", 8)
                                eval("ATGen.RegisterLargeOreDepositeOn" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], 100, tileTemplate, 10, 64, {xz: 32, y: 8}, 8, 1)")
                            }
                            if(types[keys] == "Nether"){
                            	Config.write("generation.Ores." + name + ".gen." + types[keys] + ".chance", gen * 2)
                            	Config.write("generation.Ores." + name + ".gen." + types[keys] + ".minY", 10)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".maxY", 120)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".density", 12)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".xz", 16)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".y", 4)                            
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".count", 2)
                                eval("ATGen.RegisterLargeOreDepositeOn" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], 100, tileTemplate, 10, 120, {xz: 16, y: 4}, 12, 2)")
                            }
                            if(types[keys] == "End"){
                            	Config.write("generation.Ores." + name + ".gen." + types[keys] + ".chance", gen * 2.5)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".minY", 32)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".maxY", 64)
                                Config.write("generation.Ores." + name + ".gen." + types[keys] + ".density", 16)               	
                                eval("ATGen.RegisterLargeOreDepositeOn" + types[keys] + "([BlockID.ore" + cfgName + ", BlockID.ore" + materials[1][0] + "_" + types[keys] + ", BlockID.ore" + materials[2][0] + "_" + types[keys] + ", BlockID.ore" + cfgName + "], 100, tileTemplate, 32, 64, {xz: 32, y: 8}, 16, 1)")
                            }
                        }
                        }
                    }
                    
                    if(generateDrop==true){
                    	
                    	this.GenerateRecipes({ore:ID, resourses:materials, lvl:ores_types[key].level})
                                    
                        Block.registerDropFunction(ID, function(coords, id, data, level, enchant){
                            	var A = ATMat
                    	        var a = true
                                if(level>=A.ores[ID].lvl){
                            	    for(var h in A.hammers){
                                        if(Player.getCarriedItem().id==A.hammers[h].id){
                                	         //alert(keys)
                                             var drop = []
                                                                                                
                                    	         if(materials[0][1]==0){
                                    	             if(a == true && materials[0][0] == A.RetArg("nuggets", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("nuggets", materials[0][0], "id"), 1, 0])
                                                         a = false
                                                     }
                                             	    if(a == true && materials[0][0] == A.RetArg("dustsSmall", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("dustsSmall", materials[0][0], "id"), 1, 0]) 
                                                     }
                                                 } 
                                                 a = true
                                                 if(materials[0][1]==1){
                                                     if(a == true && materials[0][0] == A.RetArg("nuggets", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("nuggets", materials[0][0], "id"), 5, 0])
                                                         a = false
                                                     }
                                             	    if(a == true && materials[0][0] == A.RetArg("dustsSmall", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("dustsSmall", materials[0][0], "id"), 5, 0]) 
                                                     }
                                                 } 
                                                 a = true
                                                 if(materials[0][1]==2){
                                                     if(a == true && materials[0][0] == A.RetArg("littleOres", materials[0][0], "mat")){
                                                     	drop.push([A.RetArg("littleOres", materials[0][0], "id"), 1, A.RetArg("littleOres", materials[0][0], "data")])
                                                         a = false                                                                               
                                                     }
                                                 	if(a == true && materials[0][0] == A.RetArg("crusheds", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("crusheds", materials[0][0], "id"), 1, 0])
                                                         a = false                                                                               
                                                     }
                                                     if(a == true && materials[0][0] == A.RetArg("dusts", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("dusts", materials[0][0], "id"), 1, 0])                 
                                                     }                                                
                                                 }
                                                 a = true
                                                 if(materials[0][1]==3 && materials[0][0] == A.RetArg("littleOres", materials[0][0], "mat")){ 
                                                 	if(a == true){
                                                         drop.push([A.RetArg("littleOres", materials[0][0], "id"), random(2, 3), A.RetArg("littleOres", materials[0][0], "data")])
                                                         a = false                                                                                                                                        
                                                     }
                                                     if(a == true && materials[0][0] == A.RetArg("crusheds", materials[0][0], "mat")){
                                                     	drop.push([A.RetArg("crusheds", materials[0][0], "id"), random(2, 3), 0])
                                                         a = false                                                                                                                                        
                                                     }
                                                     if(a == true && materials[0][0] == A.RetArg("dusts", materials[0][0], "mat")){
                                                         drop.push([A.RetArg("dusts", materials[0][0], "id"), random(2, 3), 0])
                                                         ToolAPI.dropOreExp(coords, 13, 28, enchant.experience);                                                         
                                                     }                                                
                                                 }
                                             //alert(drop.length)                                                                                                            
                                             return drop
                                         }                                        
                                     }
                                     return [[id, 1, data]]
                                  }                 
                                  return []                   
                              })
                          }
                }
            }
        }
        return IDS
    },
    FixName(name, pr){
    	let w = []
    	for(var key = 0; key < name.length; key++){
    	    if(name[key] == "_"){
    	        if(!pr){w.push(" ")}else{w.push("")}
            }else{
                w.push(name[key])
            }
        }
        let n = ""
        for(var keys in w){
        	n+=w[keys]
        }
        return n
    },
    NewParams: {
        params: {
        	lvl: 1,
            long: 10,
            temp: 100,
            genRec: true,
            rad: 0
        },
        add: function(name, d){
        	params[name] = d
        }
    },
	MaterialRegister: function(name, obj, obj1, c){
		c = c || "#FFFFFF"
		color = android.graphics.Color.parseColor(c)
		setLoadingTip("[AlTech]: Register material: "+ATMat.FixName(name));
		let IDS = []
		var it = {}
		if(obj1){
			for(var keys in this.NewParams.params){
			    let par = this.NewParams.params[keys]
			    if(!obj1[keys]) obj1[keys] = par
			}
		}
		ATMat.materials[name] = obj1
		it.temp = obj1.temp
        it.lvl = obj1.lvl
        it.mat =  (name)
        it.long = obj1.long
        
        if(obj1.compound && !obj1.adRes && obj.isCrushed){
        	obj1.adRes = obj1.compound
        }
        
        if(obj1.tool){
        	let objTools = ATMat.tools[name] = {}
            objTools.attributes = obj1.tool
            
        	ATMat.generateToolTexture(name, "pickaxe", color)
			it.pickaxe = IDRegistry.genItemID("pickaxe"+name);
            Item.createItem("pickaxe"+name, ATMat.FixName(name)+" Pickaxe", {name:(name.toLowerCase())+"_pickaxe", data:0}, {stack: 1});
            objTools[it.pickaxe] = {mat:(name), type: "pickaxe", id: it.pickaxe, data: 0, c:3}
            obj1.rad ? Item.setGlint(it.pickaxe, true) : null
            ToolAPI.setTool(it.pickaxe, obj1.tool, ToolType.pickaxe);
            
            ATMat.generateToolTexture(name, "sword", color)
			it.sword = IDRegistry.genItemID("sword"+name);
            Item.createItem("sword"+name, ATMat.FixName(name)+" Sword", {name:(name.toLowerCase())+"_sword", data:0}, {stack: 1});
            objTools[it.sword] = {mat:(name), type: "sword", id: it.sword, data: 0, c:2}
            obj1.rad ? Item.setGlint(it.sword, true) : null
            ToolAPI.setTool(it.sword, obj1.tool, ToolType.sword);
            
            ATMat.generateToolTexture(name, "axe", color)
			it.axe = IDRegistry.genItemID("axe"+name);
            Item.createItem("axe"+name, ATMat.FixName(name)+" Axe", {name:(name.toLowerCase())+"_axe", data:0}, {stack: 1});
            objTools[it.axe] = {mat:(name), type: "axe", id: it.axe, data: 0, c:3}
            obj1.rad ? Item.setGlint(it.axe, true) : null
            ToolAPI.setTool(it.axe, obj1.tool, ToolType.axe);
            
            ATMat.generateToolTexture(name, "hoe", color)
			it.hoe = IDRegistry.genItemID("hoe"+name);
            Item.createItem("hoe"+name, ATMat.FixName(name)+" Hoe", {name:(name.toLowerCase())+"_hoe", data:0}, {stack: 1});
            objTools[it.hoe] = {mat:(name), type: "hoe", id: it.hoe, data: 0, c:2}
            obj1.rad ? Item.setGlint(it.hoe, true) : null
            ToolAPI.setTool(it.hoe, obj1.tool, ToolType.hoe);
            
            ATMat.generateToolTexture(name, "shovel", color)
			it.shovel = IDRegistry.genItemID("shovel"+name);
            Item.createItem("shovel"+name, ATMat.FixName(name)+" Shovel", {name:(name.toLowerCase())+"_shovel", data:0}, {stack: 1});
            objTools[it.shovel] = {mat:(name), type: "shovel", id: it.shovel, data: 0, c:2}
            obj1.rad ? Item.setGlint(it.shovel, true) : null
            ToolAPI.setTool(it.shovel, obj1.tool, ToolType.shovel);
            
            if(obj1.tool.def){
            	let summDef = obj1.tool.def
            	ATMat.generateArmorTexture(name, color)
                ATMat.generateToolTexture(name, "helmet", color, true)
                ATMat.generateToolTexture(name, "chestplate", color, true)
                ATMat.generateToolTexture(name, "leggings", color, true)
                ATMat.generateToolTexture(name, "boots", color, true)
                
            	it.helmet = IDRegistry.genItemID("helmet"+name);
                Item.createArmorItem("helmet"+name, name + " Helmet", {name: name.toLowerCase() + "_helmet"}, {type: "helmet", armor: Math.round(summDef * 0.2), durability: Math.round(1.5 * 0.2 * obj1.tool.durability), texture: "images/armor/" + name.toLowerCase() + "_1.png"});
                objTools[it.helmet] = {mat:(name), type: "helmet", id: it.helmet, data: 0, def: Math.round(summDef * 0.2), c:5}
                obj1.rad ? Item.setGlint(it.helmet, true) : null
                
                it.chestplate = IDRegistry.genItemID("chestplate"+name);
                Item.createArmorItem("chestplate"+name, name + " Chestplate", {name: name.toLowerCase() + "_chestplate"}, {type: "chestplate", armor: Math.round(summDef * 0.4), durability: Math.round(1.5 * 0.4 * obj1.tool.durability), texture: "images/armor/" + name.toLowerCase() + "_1.png"});
                objTools[it.chestplate] = {mat:(name), type: "chestplate", id: it.chestplate, data: 0, def: Math.round(summDef * 0.4), c:8}
                obj1.rad ? Item.setGlint(it.chestplate, true) : null
                
                it.leggings = IDRegistry.genItemID("leggings"+name);
                Item.createArmorItem("leggings"+name, name + " leggings", {name: name.toLowerCase() + "_leggings"}, {type: "leggings", armor: Math.round(summDef * 0.3), durability: Math.round(1.5 * 0.3 * obj1.tool.durability), texture: "images/armor/" + name.toLowerCase() + "_2.png"});
                objTools[it.leggings] = {mat:(name), type: "leggings", id: it.leggings, data: 0, def: Math.round(summDef * 0.3), c:7}
                obj1.rad ? Item.setGlint(it.leggings, true) : null
                
                it.boots = IDRegistry.genItemID("boots"+name);
                Item.createArmorItem("boots"+name, name + " Boots", {name: name.toLowerCase() + "_boots"}, {type: "boots", armor: Math.round(summDef * 0.1), durability: Math.round(1.5 * 0.1 * obj1.tool.durability), texture: "images/armor/" + name.toLowerCase() + "_1.png"});
                objTools[it.boots] = {mat:(name), type: "boots", id: it.boots, data: 0, def: Math.round(summDef * 0.1), c:4}
                obj1.rad ? Item.setGlint(it.boots, true) : null
                
                if(obj.isPlate && obj1.genRec) CreateSet(name, obj1.lvl)
            }else if(obj.isIngot && obj.isPlate && obj1.genRec) CreateToolSet(name, obj1.lvl)
        }
		if(obj.isDust){
			ATMat.generateItemTexture(name, "dust", color)
			it.dust = IDRegistry.genItemID("dust"+(name));
            Item.createItem("dust"+name, ATMat.FixName(name)+" Dust", {name:(name.toLowerCase())+"_dust", data:0});
            ATMat.dusts[it.dust] = {mat:(name), id:it.dust, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.dust, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.dust, 0, obj1.fuel) : null
            if(obj1.compound) ATMat.RegisterImpaleDust(it.dust, [eval("ItemID.dust"+obj1.compound[0]), 1, eval("ItemID.smallDust"+obj1.compound[1]), 1, eval("ItemID.smallDust"+obj1.compound[2]), 1], obj1.lvl)
        }/*else if(obj.isDust){
        	ATMat.generateItemTexture(name, "dust", color)
			it.dust = IDRegistry.genItemID("dust"+(name));
            Item.createItem("dust"+name, ATMat.FixName(name)+" Dust", {name:(name.toLowerCase())+"_dust", data:0});
            ATMat.dusts[it.dust] = {mat:(name), id:it.dust, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.dust, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.dust, 0, obj1.fuel) : null
        	ATMat.RegisterImpaleDust(it.dust, [eval("ItemID.dust"+obj.isDust[0]), 1, eval("ItemID.smallDust"+obj.isDust[1]), 1, eval("ItemID.smallDust"+obj.isDust[2]), 1], obj1.lvl)
        }*/
        if(obj1.adRes){
        if(obj.isCrushed){
            ATMat.generateItemTexture(name, "crushed", color)
        	it.crushed = IDRegistry.genItemID("crushed"+(name));
            it.res1 = obj1.adRes[0]
            Item.createItem("crushed"+name, "Crushed "+ATMat.FixName(name)+" Ore", {name:(name.toLowerCase())+"_crushed", data: 0});
            ATMat.crusheds[it.crushed] = {mat:(name), id: it.crushed, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.crushed, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.crushed, 0, obj1.fuel) : null
    }   
    if(obj.isCrushedPurified){
    	ATMat.generateItemTexture(name, "purified", color)
        it.purified = IDRegistry.genItemID("crushedPurified"+(name));
        it.res2 = obj1.adRes[1]
        Item.createItem("crushedPurified"+name, "Crushed Purified "+ATMat.FixName(name)+" Ore", {name:(name.toLowerCase())+"_purified", data: 0});
        ATMat.crushedsPurified[it.purified] = {mat:(name), id: it.purified, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        obj1.rad ? Item.setGlint(it.purified, true) : null
        obj1.fuel ? Recipes.addFurnaceFuel(it.purified, 0, obj1.fuel) : null
    }  
    if(obj.isCrushedCentrifuged){
    	ATMat.generateItemTexture(name, "centrifuged", color)
        it.centrifuged = IDRegistry.genItemID("crushedCentrifuged"+(name));
        Item.createItem("crushedCentrifuged"+(name), "Centrifuged "+ATMat.FixName(name)+" Ore", {name:(name.toLowerCase())+"_centrifuged", data: 0});
        ATMat.crushedsCentrifuged[it.crushedCentrifuget] = {mat:(name), id: it.cent, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        obj1.rad ? Item.setGlint(it.centrifuged, true) : null
        obj1.fuel ? Recipes.addFurnaceFuel(it.centrifuged, 0, obj1.fuel) : null
    }
    }
	    if(obj.isIngot){
		    if(!obj1.compound) ATMat.generateItemTexture(name, "ingot", color)
			if(!obj1.compound){ it.ingot = IDRegistry.genItemID("ingot"+(name))}else it.ingot = eval("ItemID.ingot"+obj.isIngot)
			if(!obj1.compound) it.originalIngot = true
            if(!obj1.compound) Item.createItem("ingot"+(name), ATMat.FixName(name)+" Ingot", {name:(name.toLowerCase())+"_ingot" || "ingot_"+(name)});
            ATMat.ingots[it.ingot] = {mat:(name), id:it.ingot, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            if(!obj1.compound) obj1.rad ? Item.setGlint(it.ingot, true) : null
	    }/*else if(obj.isIngot){
		    it.ingot = eval("ItemID.ingot"+obj.isIngot)
		    ATMat.ingots[it.ingot] = {mat:(name), id:it.ingot, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
		}*/
	    if(obj.isPlate){
		    ATMat.generateItemTexture(name, "plate", color)
			it.plate = IDRegistry.genItemID("plate"+(name));
            Item.createItem("plate"+(name), ATMat.FixName(name)+" Plate", {name:(name.toLowerCase())+"_plate" || "plate_"+(name)});
            ATMat.plates[it.plate] = {mat:(name), id: it.plate, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.plate, true) : null
	    }
	    if(obj.isNugget==true){
		    if(!obj1.compound) ATMat.generateItemTexture(name, "nugget", color)
			if(!obj1.compound){ it.nugget = IDRegistry.genItemID("nugget"+(name))}else it.nugget = eval("ItemID.nugget"+obj.isNugget)
            if(!obj1.compound) Item.createItem("nugget"+(name), ATMat.FixName(name)+" Nugget", {name:(name.toLowerCase())+"_nugget" || "nugget_"+(name)});
            ATMat.nuggets[it.nugget] = {mat:(name), id: it.nugget, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/9}
            if(!obj1.compound) obj1.rad ? Item.setGlint(it.nugget, true) : null
	    }/*else if(obj.isNugget){
		    it.nugget = eval("ItemID.nugget"+obj.isNugget)
		    ATMat.nuggets[it.nugget] = {mat:(name), id:it.nugget, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
		}*/
	    if(obj.isSmallDust){
		    ATMat.generateItemTexture(name, "small_dust", color)
			it.smallDust = IDRegistry.genItemID("dustSmall"+(name));
            Item.createItem("dustSmall"+(name), "Small "+ATMat.FixName(name)+" Dust", {name:(name.toLowerCase())+"_small_dust"});
            ATMat.dustsSmall[it.smallDust] = {mat:(name), id: it.smallDust, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/4}
            obj1.rad ? Item.setGlint(it.smallDust, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.smallDust, 0, Math.floor(obj1.fuel / 9)) : null
	    }
	    if(obj.isTinyDust){
		    ATMat.generateItemTexture(name, "tiny_dust", color)
			it.tinyDust = IDRegistry.genItemID("dustTiny"+(name));
            Item.createItem("dustTiny"+(name), "Tiny "+ATMat.FixName(name)+" Dust", {name:(name.toLowerCase())+"_tiny_dust"});
            ATMat.dustsTiny[it.tinyDust] = {mat:(name), id: it.tinyDust, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/9}
            obj1.rad ? Item.setGlint(it.tinyDust, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.tinyDust, 0, Math.floor(obj1.fuel / 9)) : null
	    }
	    if(obj.isChunk){
		    ATMat.generateItemTexture(name, "chunk", color)
			it.chunk = IDRegistry.genItemID("chunk"+(name));
            Item.createItem("chunk"+(name), ATMat.FixName(name)+" Chunk", {name:(name.toLowerCase())+"_chunk"});
            ATMat.chunks[it.chunk] = {mat:(name), id: it.chunk, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/4}
            obj1.rad ? Item.setGlint(it.chunk, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.chunk, 0, Math.floor(obj1.fuel / 4)) : null
	    }
	    if(obj.isBolt){
		    ATMat.generateItemTexture(name, "bolt", color)
			it.bolt = IDRegistry.genItemID("bolt"+(name));
            Item.createItem("bolt"+(name), ATMat.FixName(name)+" Bolt", {name:(name.toLowerCase())+"_bolt"});
            ATMat.bolts[it.bolt] = {mat:(name), id: it.bolt, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/8}
            obj1.rad ? Item.setGlint(it.bolt, true) : null
	    }
	    if(obj.isLittleOre){
			it.littleOre = IDRegistry.genItemID(name);
            Item.createItem((name), ATMat.FixName(name), {name:"little_"+name.toLowerCase()});
            ATMat.littleOres[it.littleOre] = {mat:(name), id: it.littleOre, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.littleOre, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.littleOre, 0, obj1.fuel) : null
	    }
	    if(obj.isModule){
			it.module = IDRegistry.genItemID("module"+(name));
			ATMat.generateItemTexture(name, "module", color)
            Item.createItem("module"+(name), ATMat.FixName(name)+" Module", {name:(name.toLowerCase())+"_module"});
            ATMat.modules[it.module] = {mat:(name), id: it.module, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 10}
            obj1.rad ? Item.setGlint(it.module, true) : null
	    }
	    if(obj.isGem){
		    let types = ["diamond", "opal", "rectangle", "flint", "lapis", "quartz", "emerald", "metallic", "lignite", "apatite"]
		    let type = "gem"
		    if(obj1.gemType != true){
			    for(var k in types){
				    if(types[k] == obj1.gemType){
                        type = "gem_" + obj1.gemType
                    }
                }
            }
		    ATMat.generateItemTexture(name, type, color)
			it.gem = IDRegistry.genItemID("gem"+(name));
            Item.createItem("gem"+(name), ATMat.FixName(name), {name:(name.toLowerCase())+"_"+type});
            ATMat.gems[it.gem] = {mat:(name), id: it.gem, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
            obj1.rad ? Item.setGlint(it.gem, true) : null
            obj1.fuel ? Recipes.addFurnaceFuel(it.gem, 0, obj1.fuel) : null
	    }
	if(obj.isRod){
		ATMat.generateItemTexture(name, "rod", color)
		it.rod = IDRegistry.genItemID("rod"+(name));
        Item.createItem("rod"+(name), ATMat.FixName(name)+" Rod", {name:(name.toLowerCase())+"_rod"});
        ATMat.rods[it.rod] = {mat:(name), id: it.rod, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 2}
        obj1.rad ? Item.setGlint(it.rod, true) : null
    }
    if(obj.isLongRod){
    	ATMat.generateItemTexture(name, "long_rod", color)
        it.long_rod = IDRegistry.genItemID("longRod"+(name));
        Item.createItem("longRod"+(name), "Long "+ATMat.FixName(name)+" Rod", {name:(name.toLowerCase())+"_long_rod"});
        ATMat.long_rods[it.long_rod] = {mat:(name), id: it.long_rod, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 3}
        obj1.rad ? Item.setGlint(it.long_rod, true) : null
	}
	if(obj.isRing){
		ATMat.generateItemTexture(name, "ring", color)
		it.ring = IDRegistry.genItemID("ring"+(name));
        Item.createItem("ring"+(name), ATMat.FixName(name)+" Ring", {name:(name.toLowerCase())+"_ring"});
        ATMat.rings[it.ring] = {mat:(name), id: it.ring, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        obj1.rad ? Item.setGlint(it.ring, true) : null
    }
    if(obj.isBlock && Config.decorateBlocks){
    	let type
        obj1.block = obj1.block || "metall"
        let blockType = "opaque"
        ATMat.generateBlockTexture(name, obj1.block, color)
    	it.block = IDRegistry.genBlockID("block"+(name));
        Block.createBlock("block"+(name), [
	    {name: ATMat.FixName(name)+" Block", texture: [[(name.toLowerCase())+"_"+obj1.block+"_block", 0]], inCreative: true}], blockType);
        ToolAPI.registerBlockMaterial(it.block, "stone");
        Block.setDestroyLevel(it.block, obj1.lvl);
        ATMat.blocks[it.block] = {mat:(name), id: it.block, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 9}
        obj1.fuel ? Recipes.addFurnaceFuel(it.block, 0, obj1.fuel * 9) : null
    }
    if(obj.isWire){
    	ATMat.generateItemTexture(name, "cable", color)
    	it.wire = IDRegistry.genItemID("cable"+(name));
        Item.createItem("cable"+(name), ATMat.FixName(name)+" Cable", {name:(name.toLowerCase())+"_cable"});
        ATMat.wires[it.wire] = {mat:(name), id: it.wire, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/3}
        obj1.rad ? Item.setGlint(it.wire, true) : null
    }
    if(obj.isCasing){
    	ATMat.generateItemTexture(name, "casing", color)
    	it.casing = IDRegistry.genItemID("casing"+(name));
        Item.createItem("casing"+(name), ATMat.FixName(name)+" Casing", {name:(name.toLowerCase())+"_casing"});
        ATMat.casings[it.casing] = {mat:(name), id: it.casing, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/2}
        obj1.rad ? Item.setGlint(it.casing, true) : null
    }
    if(obj.isPureDust){
    	ATMat.generateItemTexture(name, "pure_dust", color)
	    it.dustPure = IDRegistry.genItemID("dustPure"+(name));
        Item.createItem("dustPure"+(name), ATMat.FixName(name)+" Pure Dust", {name:(name.toLowerCase())+"_pure_dust"});
        ATMat.dustsPure[it.dustPure] = {mat:(name), id: it.dustPure, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        obj1.lvl >= 1 ? ATMat.RegisterImpaleDust(it.dustPure, [it.dust, 1, ItemID.dustSmallStone, 3], obj1.lvl, true) : ATMat.RegisterImpaleDust(it.dustPure, [it.dust, 1, ItemID.dustSmallStone, 3], obj1.lvl, false)
        obj1.rad ? Item.setGlint(it.dustPure, true) : null
        obj1.fuel ? Recipes.addFurnaceFuel(it.dustPure, 0, obj1.fuel) : null
    }
    if(obj.isMachineBlock && Config.decorateBlocks){
    	let blockType = "opaque"
    	ATMat.generateBlockTexture(name, "machine", color)
	    it.machineBlock = IDRegistry.genBlockID("machineBlock"+(name));
        Block.createBlock("machineBlock"+(name), [
	    {name: ATMat.FixName(name)+" Machine Block", texture: [[(name.toLowerCase())+"_machine_block", 0]], inCreative: true}], blockType );
        ToolAPI.registerBlockMaterial(it.machineBlock, "stone");
        Block.setDestroyLevel(it.machineBlock, obj1.lvl);
        ATMat.machineBlocks[it.machineBlock] = {mat:(name), id: it.machineBlock, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 7}
    }
    if(obj.isScrew){
    	ATMat.generateItemTexture(name, "screw", color)
	    it.screw = IDRegistry.genItemID("screw"+(name));
        Item.createItem("screw"+(name), ATMat.FixName(name)+" Screw", {name:(name.toLowerCase())+"_screw"});
        ATMat.screws[it.screw] = {mat:(name), id: it.screw, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 1/9}
        obj1.rad ? Item.setGlint(it.screw, true) : null
    }
    if(obj.isGear){
    	ATMat.generateItemTexture(name, "gear", color)
	    it.gear = IDRegistry.genItemID("gear"+(name));
        Item.createItem("gear"+(name), ATMat.FixName(name)+" Gear", {name:(name.toLowerCase())+"_gear"});
        ATMat.gears[it.gear] = {mat:(name), id: it.gear, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long, c: 2}
        obj1.rad ? Item.setGlint(it.gear, true) : null
    }
    if((name) == "Redstone"){
    	it.dust = 331
        ATMat.dusts[it.dust] = {mat:(name), id: 331, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(obj.isImpureDust){
    	ATMat.generateItemTexture(name, "impure_dust", color)
	    it.dustImpure = IDRegistry.genItemID("dustImpure"+(name));
        Item.createItem("dustImpure"+(name), ATMat.FixName(name)+" Impure Dust", {name:(name.toLowerCase())+"_impure_dust"});
        ATMat.dustsImpure[it.dustImpure] = {mat:(name), id: it.dustImpure, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        obj1.lvl >= 1 ? ATMat.RegisterImpaleDust(it.dustImpure, [it.dust, 1, ItemID.dustSmallStone, 3], obj1.lvl, true) : ATMat.RegisterImpaleDust(it.dustImpure, [it.dust, 1, ItemID.dustSmallStone, 3], obj1.lvl, false)
        obj1.rad ? Item.setGlint(it.dustImpure, true) : null
        obj1.fuel ? Recipes.addFurnaceFuel(it.dustImpure, 0, obj1.fuel) : null
    }
    if(name == "Tin"){
    	if(ICore) it.wire = ItemID.cableTin0
        if(ICore) ATMat.wires[it.wire] = {mat:(name), id: it.wire, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(name == "Copper"){
    	if(ICore) it.wire = ItemID.cableCopper0
        if(ICore) ATMat.wires[it.wire] = {mat:(name), id: it.wire, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(name == "Iridium"){
    	if(ICore) it.chunk = ItemID.iridiumChunk
        if(ICore) ATMat.chunks[it.chunk] = {mat:(name), id: ItemID.iridiumChunk, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(name == "Apatite"){
        it.gem = ItemID.apatite
        ATMat.gems[it.gem] = {mat:(name), id: ItemID.apatite, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(name == "Diamond"){
    	ItemID.gemDiamond = 264
        it.gem = 264
        ATMat.gems[it.gem] = {mat:(name), id: 264, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if(name == "Emerald"){
    	ItemID.gemEmerald = 388
        it.gem = 388
        ATMat.gems[it.gem] = {mat:(name), id: 388, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if((name) == "Iron"){
    	ItemID.ingotIron = 265
    	it.ingot = 265
        ATMat.ingots[it.ingot] = {mat:(name), id: 265, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        it.block = 42
        ATMat.blocks[it.block] = {mat:(name), id: 42, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        if(ICore) it.wire = ItemID.cableIron0
        if(ICore) ATMat.wires[it.wire] = {mat:(name), id: it.wire, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if((name) == "Gold"){
    	it.block = 41
        ATMat.blocks[it.block] = {mat:(name), id: 41, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        it.nugget = 371
        ATMat.nuggets[it.nugget] = {mat:(name), id: 371, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        ItemID.ingotGold = 266
        it.ingot = 266
        ATMat.ingots[it.ingot] = {mat:(name), id: 266, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
        if(ICore) it.wire = ItemID.cableGold0
        if(ICore) ATMat.wires[it.wire] = {mat:(name), id: it.wire, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if((name) == "Coal"){
    	it.gem = 263
        ATMat.gems[it.gem] = {mat:(name), id: it.gem, data:0, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
    if((name) == "Lapis"){
    	it.gem = 351
        ATMat.gems[it.gem] = {mat:(name), id: it.gem, data:4, temp:obj1.temp, lvl:obj1.lvl, long: obj1.long}
    }
        
        if(obj1.genRec){      
	        ATMat.GenerateRecipes(it)
	    }
	},
	GenerateRecipes: function(obj) {
		if(obj.ore){
			var rS1 = [0, 0, 0]
		    var rS2 = [0, 0, 0]
		    var rS3 = [0, 0, 0]
		    var rS4 = [0, 0, 0]
		    var a
		    var A = this
		
            for(var key = 0; key<obj.resourses.length; key++){
				a = true
				//alert(key)
				    if(obj.resourses[key][1]==3){
					    if(a == true && obj.resourses[key][0] == A.RetArg("littleOres", obj.resourses[key][0], "mat")){
						    ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("littleOres", obj.resourses[key][0], "id"), 3, A.RetArg("littleOres", obj.resourses[key][0], "data")], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("littleOres", obj.resourses[key][0], "long"), temp: A.RetArg("littleOres", obj.resourses[key][0], "temp")});
                            if(A.RetArg("littleOres", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                            	Recipes.addFurnace(obj.ore, A.RetArg("littleOres", obj.resourses[key][0], "id"), A.RetArg("littleOres", obj.resourses[key][0], "data"));
                                //alert(A.RetArgFromID(A.RetArg("littleOres", obj.resourses[key][0], "id"), "mat"))
                            }
                            eval("rS"+(key+1)+" = [A.RetArg('littleOres', obj.resourses[key][0], 'id'), 3, A.RetArg('littleOres', obj.resourses[key][0], 'data')]")
                            a = false                       
                        }
                        if(a == true && obj.resourses[key][0] == A.RetArg("crusheds", obj.resourses[key][0], "mat")){
                            if(A.RetArg("ingots", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("ingots", obj.resourses[key][0], "id"), 3, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("ingots", obj.resourses[key][0], "long"), temp: A.RetArg("ingots", obj.resourses[key][0], "temp")});
                                if(A.RetArg("ingots", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){                            	
                                   Recipes.addFurnace(obj.ore, A.RetArg("ingots", obj.resourses[key][0], "id"), 0);
                               }
                            }else if(A.RetArg("gems", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("gems", obj.resourses[key][0], "id"), 3, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("gems", obj.resourses[key][0], "long"), temp: A.RetArg("gems", obj.resourses[key][0], "temp")});
                               if(A.RetArg("gems", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                                    Recipes.addFurnace(obj.ore, A.RetArg("gems", obj.resourses[key][0], "id"), 0);
                                }
                            }                         
                            eval("rS"+(key+1)+" = [A.RetArg('crusheds', obj.resourses[key][0], 'id'), 3, 0]")
                            a = false               
                        }
                        if(a == true && obj.resourses[key][0] == A.RetArg("dusts", obj.resourses[key][0], "mat")){
                        	if(A.RetArg("ingots", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("ingots", obj.resourses[key][0], "id"), 3, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("ingots", obj.resourses[key][0], "long"), temp: A.RetArg("ingots", obj.resourses[key][0], "temp")});
                                if(A.RetArg("ingots", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){                            	
                                   Recipes.addFurnace(obj.ore, A.RetArg("ingots", obj.resourses[key][0], "id"), 0);
                               }
                            }else if(A.RetArg("gems", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("gems", obj.resourses[key][0], "id"), 3, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("gems", obj.resourses[key][0], "long"), temp: A.RetArg("gems", obj.resourses[key][0], "temp")});
                               if(A.RetArg("gems", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                                    Recipes.addFurnace(obj.ore, A.RetArg("gems", obj.resourses[key][0], "id"), 0);
                                }
                            }                         
                            eval("rS"+(key+1)+" = [A.RetArg('dusts', obj.resourses[key][0], 'id'), 3, 0]")
                            a = false                        
                        }
                    }                                                
                    a = true
                    if(obj.resourses[key][1]==2){   
                        if(a == true && obj.resourses[key][0] == A.RetArg("littleOres", obj.resourses[key][0], "mat")){
                        	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("littleOres", obj.resourses[key][0], "id"), 1, A.RetArg("littleOres", obj.resourses[key][0], "data")], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("littleOres", obj.resourses[key][0], "long"), temp: A.RetArg("littleOres", obj.resourses[key][0], "temp")});
                            if(A.RetArg("littleOres", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                               Recipes.addFurnace(obj.ore, A.RetArg("littleOres", obj.resourses[key][0], "id"), A.RetArg("littleOres", obj.resourses[key][0], "data"))
                               //alert(A.RetArgFromID(A.RetArg("littleOres", obj.resourses[key][0], "id"), "mat"))
                            }
                            eval("rS"+(key+1)+" = [A.RetArg('littleOres', obj.resourses[key][0], 'id'), 1, A.RetArg('littleOres', obj.resourses[key][0], 'data')]")
                            a = false                                                                               
                        }                        
                        if(a == true && obj.resourses[key][0] == A.RetArg("crusheds", obj.resourses[key][0], "mat")){
                        	if(A.RetArg("ingots", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("ingots", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("ingots", obj.resourses[key][0], "long"), temp: A.RetArg("ingots", obj.resourses[key][0], "temp")});
                                if(A.RetArg("ingots", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){                            	
                                   Recipes.addFurnace(obj.ore, A.RetArg("ingots", obj.resourses[key][0], "id"), 0);
                               }
                            }else if(A.RetArg("gems", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("gems", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("gems", obj.resourses[key][0], "long"), temp: A.RetArg("gems", obj.resourses[key][0], "temp")});
                               if(A.RetArg("gems", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                                    Recipes.addFurnace(obj.ore, A.RetArg("gems", obj.resourses[key][0], "id"), 0);
                                }
                            }                         
                            eval("rS"+(key+1)+" = [A.RetArg('crusheds', obj.resourses[key][0], 'id'), 1, 0]")
                            a = false
                        }                        
                        if(a == true && obj.resourses[key][0] == A.RetArg("dusts", obj.resourses[key][0], "mat")){
                        	if(A.RetArg("ingots", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("ingots", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("ingots", obj.resourses[key][0], "long"), temp: A.RetArg("ingots", obj.resourses[key][0], "temp")});
                                if(A.RetArg("ingots", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){                            	
                                   Recipes.addFurnace(obj.ore, A.RetArg("ingots", obj.resourses[key][0], "id"), 0);
                               }
                            }else if(A.RetArg("gems", obj.resourses[key][0], "temp")){
                            	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("gems", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("gems", obj.resourses[key][0], "long"), temp: A.RetArg("gems", obj.resourses[key][0], "temp")});
                               if(A.RetArg("gems", obj.resourses[key][0], "temp") <= vanileFurnaceTemp){
                                    Recipes.addFurnace(obj.ore, A.RetArg("gems", obj.resourses[key][0], "id"), 0);
                                }
                            }                         
                           eval("rS"+(key+1)+" = [A.RetArg('dusts', obj.resourses[key][0], 'id'), 1, 0]")
                        }                                                
                    }
                    a = true
                    if(obj.resourses[key][1]==1){              
					    if(a == true && obj.resourses[key][0] == A.RetArg("chunks", obj.resourses[key][0], "mat")){      
						    ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("chunks", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("chunks", obj.resourses[key][0], "long")/4, temp: A.RetArg("chunks", obj.resourses[key][0], "temp")});
                            eval("rS"+(key+1)+" = [A.RetArg('chunks', obj.resourses[key][0], 'id'), 1, 0]")
                            a = false                                                                               
                        }
                        if(a == true && obj.resourses[key][0] == A.RetArg("dustsSmall", obj.resourses[key][0], "mat")){
                        	ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("dustsSmall", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 2, 0], long: A.RetArg("dustsSmall", obj.resourses[key][0], "long")/4, temp: A.RetArg("dustsSmall", obj.resourses[key][0], "temp")});
                           eval("rS"+(key+1)+" = [A.RetArg('dustsSmall', obj.resourses[key][0], 'id'), 1, 0]")
                        }                                                
                    }
                    a = true
                    if(obj.resourses[key][1]==0){
					    if(a == true && obj.resourses[key][0] == A.RetArg("nuggets", obj.resourses[key][0], "mat")){
						    ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("nuggets", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 3, 0], long: A.RetArg("nuggets", obj.resourses[key][0], "long")/9, temp: A.RetArg("nuggets", obj.resourses[key][0], "temp")});
                            eval("rS"+(key+1)+" = [A.RetArg('nuggets', obj.resourses[key][0], 'id'), 1, 0]")
                            a = false                                                                               
                        }
                        ATMech.FurnaceRecipe ({sS1:[obj.ore, 1, 0], rS1:[A.RetArg("dustsTiny", obj.resourses[key][0], "id"), 1, 0], rS2:[ItemID.Stone, 3, 0], long: A.RetArg("dustsTiny", obj.resourses[key][0], "long")/9, temp: A.RetArg("dustsTiny", obj.resourses[key][0], "temp")});
                        if(a == true && obj.resourses[key][0] == A.RetArg("dustsTiny", obj.resourses[key][0], "mat")){ 
                           eval("rS"+(key+1)+" = [A.RetArg('dustsTiny', obj.resourses[key][0], 'id'), 1, 0]")
                        }    
                    }
                }
                //ATMech.ForgeHammerRecipe ({sS:[obj.ore, 1, 0], rS:rS1, lvl: obj.lvl})
                ATMech.MaceratorRecipe ({sS:[obj.ore, 1, 0], rS1:rS1, rS2:rS2, rS3:rS3, rS4:rS4, long:obj.lvl*100+Math.floor(Math.random()*20), lvl:obj.lvl});
		}
		if(obj.dust && obj.littleOre && !obj.ingot){
			ATMech.FurnaceRecipe({sS1:[obj.dust, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) 
			if(obj.temp <= vanileFurnaceTemp){
				Recipes.addFurnace(obj.dust, obj.littleOre, this.littleOres[obj.littleOre].data)
		    }
		    obj.crushed ? ATMech.FurnaceRecipe({sS1:[obj.crushed, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.purified ? ATMech.FurnaceRecipe({sS1:[obj.purified, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.centrifuged ? ATMech.FurnaceRecipe({sS1:[obj.centrifuged, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.crushed && obj.temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.crushed, obj.littleOre, this.littleOres[obj.littleOre].data) : null
	        obj.purified && obj.temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.purified, obj.littleOre, this.littleOres[obj.littleOre].data) : null
	        obj.centrifuged && obj.temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.centrifuged, obj.littleOre, this.littleOres[obj.littleOre].data) : null
	    }
		obj.crushed && obj.purified ? ATMech.OreWasherRecipe({sS:[obj.crushed, 1, 0], rS:[obj.purified, 1, eval("ItemID.dustTiny"+obj.res1), 1, ItemID.dustStone, 1]}) : null
	    obj.purified && obj.centrifuged ? ATMech.CentrifugeRecipe({sS:[obj.purified, 1, 0], rS:[obj.centrifuged, 1, eval("ItemID.dustTiny"+obj.res2), 1], lvl:obj.lvl, long: obj.long}) : null
	
	    if(obj.centrifuged && obj.dust) ATMech.MaceratorRecipe ({sS:[obj.centrifuged, 1, 0], rS1:[obj.dust, 1, 0], rS2: [eval("ItemID.dustTiny"+obj.mat), 1, 0], long:obj.lvl*100+Math.floor(Math.random()*20), lvl:obj.lvl});
	    if(obj.purified && obj.dustPure) ATMech.MaceratorRecipe ({sS:[obj.purified, 1, 0], rS1:[obj.dustPure, 1, 0], rS2: [eval("ItemID.dustTiny"+obj.mat), 1, 0], long:obj.lvl*100+Math.floor(Math.random()*20), lvl:obj.lvl});
	    if(obj.crushed && obj.dustImpure) ATMech.MaceratorRecipe ({sS:[obj.crushed, 1, 0], rS1:[obj.dustImpure, 1, 0], rS2: [eval("ItemID.dustTiny"+obj.mat), 1, 0], long:obj.lvl*100+Math.floor(Math.random()*20), lvl:obj.lvl});
			//ATMech.ForgeHammerRecipe ({sS:[obj.centrifuged, 1, 0], rS:[obj.dust, 1, 0], lvl: obj.lvl})
		if(obj.ingot){
	        obj.crushed ? ATMech.FurnaceRecipe({sS1:[obj.crushed, 1, 0], rS1:[obj.ingot, 1, 0], long: obj.long, temp:obj.temp}) : null
	        obj.purified ? ATMech.FurnaceRecipe({sS1:[obj.purified, 1, 0], rS1:[obj.ingot, 1, 0], long: obj.long, temp:obj.temp}) : null
	        obj.centrifuged ? ATMech.FurnaceRecipe({sS1:[obj.centrifuged, 1, 0], rS1:[obj.ingot, 1, 0], long: obj.long, temp:obj.temp}) : null
	        obj.crushed && this.ingots[obj.ingot].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.crushed, obj.ingot, 0) : null
	        obj.purified && this.ingots[obj.ingot].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.purified, obj.ingot, 0) : null
	        obj.centrifuged && this.ingots[obj.ingot].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.centrifuged, obj.ingot, 0) : null
	    }        
        if(obj.gem){
	        obj.crushed ? ATMech.FurnaceRecipe({sS1:[obj.crushed, 1, 0], rS1:[obj.gem, 1, 0], long: obj.long, temp:obj.temp}) : null
	        obj.purified ? ATMech.FurnaceRecipe({sS1:[obj.purified, 1, 0], rS1:[obj.gem, 1, 0], long: obj.long, temp:obj.temp})  : null
	        obj.centrifuged ? ATMech.FurnaceRecipe({sS1:[obj.centrifuged, 1, 0], rS1:[obj.gem, 1, 0], long: obj.long, temp:obj.temp}) : null
	        obj.crushed  && this.gems[obj.gem].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.crushed, obj.gem, 0) : null
	        obj.purified && this.gems[obj.gem].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.purified, obj.gem, 0) : null
	        obj.centrifuged && this.gems[obj.gem].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.centrifuged, obj.gem, 0) : null
       }
       if(obj.littleOre && !obj.ingot && !obj.gem){
       	obj.crushed ? ATMech.FurnaceRecipe({sS1:[obj.crushed, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.purified ? ATMech.FurnaceRecipe({sS1:[obj.purified, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.centrifuged ? ATMech.FurnaceRecipe({sS1:[obj.centrifuged, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) : null
	        obj.crushed && this.littleOres[obj.littleOre].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.crushed, obj.littleOre, this.littleOres[obj.littleOre].data) : null
	        obj.purified && this.littleOres[obj.littleOre].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.purified, obj.littleOre, this.littleOres[obj.littleOre].data) : null
	        obj.centrifuged && this.littleOres[obj.littleOre].temp <= vanileFurnaceTemp ? Recipes.addFurnace(obj.centrifuged, obj.littleOre, this.littleOres[obj.littleOre].data) : null
       }
       
	    if(obj.dustImpure){
		    if(obj.crushed){
			    CreateShapelessRecipeWithTool({id: obj.dustImpure, count: 1, data: 0}, [{id: obj.crushed, data:0}], [this.hammers], obj.lvl)
			    CreateShapelessRecipeWithTool({id: obj.crushed, count: 1, data: 0}, [{id: obj.dustImpure, data:0}], [this.hammers], obj.lvl)
			}
		    if(obj.ingot){
		        ATMech.FurnaceRecipe({sS1:[obj.dustImpure, 1, 0], rS1:[obj.ingot, 1, 0], long: obj.long, temp:obj.temp})
		        if(this.ingots[obj.ingot].temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.dustImpure, obj.ingot, 0);
                }
		    }
		    if(obj.gem){
		        ATMech.FurnaceRecipe({sS1:[obj.dustImpure, 1, 0], rS1:[obj.gem, 1, 0], long: obj.long, temp:obj.temp})
		        if(this.gems[obj.gem].temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.dustImpure, obj.gem, 0);
                }
		    }
		    if(obj.littleOre && !obj.ingot && !obj.gem){
			    ATMech.FurnaceRecipe({sS1:[obj.dustImpure, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) 
			    if(obj.temp <= vanileFurnaceTemp){
				    Recipes.addFurnace(obj.dustImpure, obj.littleOre, this.littleOres[obj.littleOre].data)
		        }
	        }
		    obj.crushed ? ATMech.OreWasherRecipe({sS:[obj.dustImpure, 1, 0], rS:[obj.dust, 1, eval("ItemID.dustTiny"+obj.res1), 1, ItemID.dustStone, 1]}) : ATMech.OreWasherRecipe({sS:[obj.dustImpure, 1, 0], rS:[obj.dust, 1, this.RetArg("dustsSmall", obj.mat, "id"), 1, ItemID.dustStone, 1]})
		}
		if(obj.dustPure){
		    if(obj.purified){
			    CreateShapelessRecipeWithTool({id: obj.dustPure, count: 1, data: 0}, [{id: obj.purified, data:0}], [this.hammers], obj.lvl)
			    CreateShapelessRecipeWithTool({id: obj.purified, count: 1, data: 0}, [{id: obj.dustPure, data:0}], [this.hammers], obj.lvl)
			}
		    if(obj.ingot){
		        ATMech.FurnaceRecipe({sS1:[obj.dustPure, 1, 0], rS1:[obj.ingot, 1, 0], long: obj.long, temp:obj.temp})
		        if(this.ingots[obj.ingot].temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.dustPure, obj.ingot, 0);
                }
		    }
		    if(obj.gem){
		        ATMech.FurnaceRecipe({sS1:[obj.dustPure, 1, 0], rS1:[obj.gem, 1, 0], long: obj.long, temp:obj.temp})
		        if(this.gems[obj.gem].temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.dustPure, obj.gem, 0);
                }
		    }
		    if(obj.littleOre && !obj.ingot){
			    ATMech.FurnaceRecipe({sS1:[obj.dustPure, 1, 0], rS1:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], long: obj.long, temp:obj.temp}) 
			    if(obj.temp <= vanileFurnaceTemp){
				    Recipes.addFurnace(obj.dustPure, obj.littleOre, this.littleOres[obj.littleOre].data)
		        }
	        }
		    obj.purified ? ATMech.OreWasherRecipe({sS:[obj.dustPure, 1, 0], rS:[obj.dust, 1, eval("ItemID.dustTiny"+obj.res1), 1, ItemID.dustStone, 1]}) : ATMech.OreWasherRecipe({sS:[obj.dustPure, 1, 0], rS:[obj.dust, 1, this.RetArg("dustsSmall", obj.mat, "id"), 1, ItemID.dustStone, 1]})
		}
		if(obj.plate && obj.rod && obj.gear){
			CreateRecipeWithTool({id: obj.gear, count:1, data:0}, ["bab", "awa", "bab"], ['a', obj.plate, 0, 'b', obj.rod, 0], [this.wrenchs], obj.lvl)
		}
		if(obj.block && !obj.ingot && !obj.gem && obj.littleStone){
			Recipes.deleteRecipe({id:obj.block, count:1, data:0})
            Recipes.addShapeless({id:obj.littleStone, count:9, data:0}, [ {id:obj.block, data:0}]);
            if(obj.lvl <= 1) Recipes.addShaped({id:obj.block, count:1, data:0}, ["aaa", "aaa", "aaa"], ['a', obj.littleStone, 0]);
            ATMech.CompressorRecipe({sS1: [obj.littleStone, 9, 0], rS: [obj.block, 1, 0], lvl: obj.lvl})
        }
        if(obj.block && obj.gem){
			Recipes.deleteRecipe({id:obj.block, count:1, data:0})
            Recipes.addShapeless({id:obj.gem, count:9, data:0}, [ {id:obj.block, data:0}]);
            if(obj.lvl <= 1) Recipes.addShaped({id:obj.block, count:1, data:0}, ["aaa", "aaa", "aaa"], ['a', obj.gem, 0]);
            ATMech.CompressorRecipe({sS1: [obj.gem, 9, 0], rS: [obj.block, 1, 0], lvl: obj.lvl})
        }
		if(obj.dust){
			if(obj.tinyDust){
			    Recipes.addShapeless({id:obj.tinyDust, count:9, data:0}, [ {id:obj.dust, data:0}]);
			    Recipes.addShaped({id:obj.dust, count:1, data:0}, ["aaa", "aaa", "aaa"], ['a', obj.tinyDust, 0])
			}
			if(obj.littleOre&& !obj.crushed){
				ATMech.MaceratorRecipe ({sS:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], rS1:[obj.dust, 1, 0], long:obj.lvl*10, lvl:obj.lvl}, true);
		    }else if(obj.littleOre && obj.crushed){
			    ATMech.MaceratorRecipe ({sS:[obj.littleOre, 1, this.littleOres[obj.littleOre].data], rS1:[obj.crushed, 1, 0], long:obj.lvl*10, lvl:obj.lvl}, true);
		    }
            if(obj.nugget){
            	if(obj.tinyDust){
                	ATMech.MaceratorRecipe ({sS:[obj.nugget, 1, 0], rS1:[obj.tinyDust, 1, 0], long:obj.lvl*10, lvl:obj.lvl}, true);
                	ATMech.FurnaceRecipe ({sS1:[obj.tinyDust, 1, 0], rS1:[obj.nugget, 1, 0], long:round(obj.long/9, 1), temp:obj.temp});               
                }                                           
                if(obj.ingot && obj.lvl <=2){
        	        Recipes.addShapeless({id:obj.nugget, count:9, data:0}, [{id:obj.ingot, data:0}]);
                    Recipes.addShaped({id: obj.ingot, count: 1, data: 0}, ["xxx", "xxx", "xxx"], ['x', obj.nugget, 0])
                }
                if(obj.ingot){
                	ATMech.FurnaceRecipe ({sS1:[obj.nugget, 9, 0], rS1:[obj.ingot, 1, 0], long:round(obj.long, 1), temp:obj.temp});
                }
            }
            if(obj.gem){
            	ATMech.MaceratorRecipe ({sS:[obj.gem, 1, 0], rS1:[obj.dust, 1, 0], long:obj.lvl*10, lvl:obj.lvl}, true);
            	ATMech.FurnaceRecipe ({sS1:[obj.dust, 1, 0], rS1:[obj.gem, 1, 0], long:round(obj.long, 1), temp:obj.temp});
            }
            if(obj.ingot){
            	ATMech.FurnaceRecipe ({sS1:[obj.dust, 1, 0], rS1:[obj.ingot, 1, 0], long:obj.long, temp:obj.temp});
                obj.originalIngot ? ATMech.MaceratorRecipe ({sS:[obj.ingot, 1, 0], rS1:[obj.dust, 1, 0], long:obj.long, lvl:obj.lvl}, true) : null
                if(obj.temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.dust, obj.ingot, 0);
                }else{
                	Recipes.removeFurnaceRecipe(obj.dust, 0)
                }
            }
        }
        if(obj.ingot){
        	if(obj.long_rod){
                CreateRecipeWithTool({id:obj.long_rod, count:1, data:0}, ["fa"], ['a', obj.ingot, 0], [this.files], obj.lvl);
                if(obj.rod){
                    CreateRecipeWithTool({id:obj.rod, count:2, data:0}, ["sa"], ['a', obj.long_rod, 0], [this.saws], obj.lvl);
                    if(obj.bolt){
                    	CreateRecipeWithTool({id:obj.bolt, count:3, data:0}, ["sa"], ['a', obj.rod, 0], [this.saws], obj.lvl);
                        if(obj.screw){
                        	CreateShapelessRecipeWithTool({id:obj.screw, count:1, data:0}, [{id:obj.bolt, data:0}], [this.files], obj.lvl)
                        }
                    }
                }
                if(obj.ring){
                	CreateRecipeWithTool({id:obj.ring, count:1, data:0}, ["haf"], ['a', obj.rod, 0], [this.hammers], obj.lvl);
                }
            }
        	if(obj.block){
            	Recipes.deleteRecipe({id:obj.block, count:1, data:0})
                Recipes.addShapeless({id:obj.ingot, count:9, data:0}, [ {id:obj.block, data:0}]);
                if(obj.lvl <= 1) Recipes.addShaped({id:obj.block, count:1, data:0}, ["aaa", "aaa", "aaa"], ['a', obj.ingot, 0]);
                ATMech.CompressorRecipe({sS1: [obj.ingot, 9, 0], rS: [obj.block, 1, 0], lvl: obj.lvl})
            }
            if(obj.plate){
            	if(obj.machineBlock && obj.module){
            	    CreateRecipeWithTool({id: obj.machineBlock, data: 0, count: 1}, ["bab", "awa", "bab"], ['a', obj.plate, 0, 'b', obj.module, 0], [this.wrenchs], 2)
                }
            	ATMech.MaceratorRecipe ({sS:[obj.ingot, 1, 0], rS1:[obj.dust, 1, 0], long:obj.lvl*10, lvl:obj.lvl}, true);
                //ATMech.ForgeHammerRecipe ({sS:[obj.ingot, 2, 0], rS: [obj.plate, 1, 0], lvl: obj.lvl})
                if(Config.hardmode){
                    ReplaceRecipeWithTool({id:obj.plate, count:1, data:0}, ["h", "a", "a"], ['a', obj.ingot, 0], [this.hammers], obj.lvl);
                }else{
                	ReplaceShapelessRecipeWithTool({id:obj.plate, count:1, data:0}, [{id: obj.ingot, data: 0}], [this.hammers], obj.lvl);
                }
                if(obj.wire){
                	ReplaceShapelessRecipeWithTool({id:obj.wire, count:3, data:0}, [{id:obj.plate, data:0}], [this.cutters], obj.lvl)
                }
                if(obj.casing){
                	ReplaceShapelessRecipeWithTool({id:obj.casing, count:3, data:0}, [{id:obj.plate, data:0}], [this.hammers], obj.lvl)
                }
            }
        }
        if(obj.bolt && obj.nugget){            
            CreateShapelessRecipeWithTool({id:obj.bolt, count:1, data:0}, [{id:obj.nugget, data:0}], [this.files], obj.lvl)
        }
        if(obj.module){
            if(obj.screw && obj.casing){        	        
               CreateRecipeWithTool({id:obj.module, count:1, data:0}, ["cwc", "bpb", "csc"], ['b', obj.screw, 0, 'p', obj.plate, 0, 'c', obj.casing, 0], [this.screwdrivers, this.wrenchs], 2);
            }else{                	                
                CreateRecipeWithTool({id:obj.module, count:1, data:0}, ["cwc", "bpb", "csc"], ['b', ItemID.screwSteel, 0, 'p', obj.plate, 0, 'c', obj.casing, 0], [this.screwdrivers, this.wrenchs], 2);
            }
        }
        if(obj.smallDust){
            if(obj.dust){
            	Recipes.addShaped({id:obj.dust, count:1, data:0}, ["aa", "aa"], ['a', obj.smallDust, 0])
                Recipes.addShapeless({id:obj.smallDust, count:4, data:0}, [ {id:obj.dust, data:0}]);
            }
            if(obj.chunk){
            	ATMech.MaceratorRecipe ({sS:[obj.chunk, 1, 0], rS1:[obj.smallDust, 1, 0], long:obj.lvl*2.5, lvl:obj.lvl}, true);
            	ATMech.FurnaceRecipe ({sS1:[obj.smallDust, 1, 0], rS1:[obj.chunk, 1, 0], long:obj.long, temp:obj.temp});
                if(obj.temp <= vanileFurnaceTemp){
                	Recipes.addFurnace(obj.smallDust, obj.chunk, 0);
                }else{
                	//Recipes.removeFurnaceRecipe(obj.smallDust, 0)
                }
            }
        }
        if(obj.chunk){
        	if(obj.ingot){
        	    ATMech.FurnaceRecipe ({sS1:[obj.chunk, 4, 0], rS1:[obj.ingot, 1, 0], long:obj.long, temp:obj.temp});
                CreateShapelessRecipeWithTool({id:obj.chunk, count:4, data:0}, [{id:obj.ingot, data:0}], [this.hammers], obj.lvl)
            }
        }
	}
}




// file: api/shared.js

ModAPI.registerAPI("ATCore", {
	MAPI:MAPI,
    ATMech:ATMech,
    ATGen:ATGen,
    ATMat:ATMat,
    
    CTR:CTR,
    CreateRecipeWithTool: CreateRecipeWithTool,
    ReplaceRecipeWithTool: ReplaceRecipeWithTool,
    CreateShapelessRecipeWithTool: CreateShapelessRecipeWithTool,
    ReplaceShapelessRecipeWithTool: ReplaceShapelessRecipeWithTool,
    
    DeleteOre:DeleteOre,
    
    CreateHelmetRecipe:CreateHelmetRecipe,
    CreateChestplateRecipe:CreateChestplateRecipe,
    CreateLeggingsRecipe:CreateLeggingsRecipe,
    CreateBootsRecipe:CreateBootsRecipe,

    CreatePickaxeRecipe:CreatePickaxeRecipe,
    CreateAxeRecipe:CreateAxeRecipe,
    CreateHoeRecipe:CreateHoeRecipe,
    CreateSwordRecipe:CreateSwordRecipe,
    CreateHelmetRecipe:CreateHelmetRecipe,
    
    Config: Config,
    
    GetNaturalMetallsParams: GetNaturalMetallsParams,
    GetRadMetallsParams: GetRadMetallsParams,
    GetNoMetallsParams: GetNoMetallsParams,    
    GetAlloyParams: GetAlloyParams,
    GetGemsParams: GetGemsParams,
    GetCompoundParams: GetCompoundParams,
    
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("GregTechAPI shared", "API");




// file: common/head.js

//IMPORT("ATAPI", "*");
//IMPORT("ToolType", "*");
//IMPORT("Chemistry", "*");
//IMPORT("SoundAPI", "*");

var furnaceRecipes = ATMech.furnaceRecipes
var maceratorRecipes = ATMech.maceratorRecipes

var ironTemp = 1600
var ironLong = 40

var goldTemp = 1000
var goldLong = 10

var copperTemp = 1000
var copperLong = 10

var tinTemp = 200
var tinLong = 10

var steelLong = 240
var steelTemp = 1600

let _ = null




// file: common/translation.js

//Food
Translation.addTranslation("Flour", {ru: "Мука",  zh: "面粉"});
Translation.addTranslation("Dough", {ru: "Тесто",  zh: "面团"});
Translation.addTranslation("Dough Bread", {ru: "Тесто в форме Хлеба",  zh: "面团，面包"});
Translation.addTranslation("Cocoa Powder", {ru: "Какао-порошок",  zh: "可可粉"});
Translation.addTranslation("Chocolate Dough", {ru: "Шоколадное тесто",  zh: "巧克力面团"});
Translation.addTranslation("Cookie shaped Dough", {ru: "Тесто в форме печенья",  zh: "饼形状的面"});

// Small Ore
Translation.addTranslation("Small Silver Ore", {ru: "Малая серебрянная руда",  zh: "小银矿"});
Translation.addTranslation("Small Lead Ore", {ru: "Малая свинцовая руда",  zh: "小鉛礦石"});
Translation.addTranslation("Small Tin Ore", {ru: "Малая оловянная руда",  zh: "小錫礦"});
Translation.addTranslation("Small Copper Ore", {ru: "Малая медная руда",  zh: "小銅礦石"});
Translation.addTranslation("Small Diamond Ore", {ru: "Малая алмазная руда",  zh: "小鑽石礦石"});
Translation.addTranslation("Small Emerald Ore", {ru: "Малая изумрудная руда",  zh: "小祖母綠礦石"});
Translation.addTranslation("Small Redstone Ore", {ru: "Малая красная руда",  zh: "小紅石礦石"});
Translation.addTranslation("Small Gold Ore", {ru: "Малая золотая руда",  zh: "小金礦"});
Translation.addTranslation("Small Iron Ore", {ru: "Малая железная руда",  zh: "小鐵礦石"});
Translation.addTranslation("Small Lapis-Lazuli Ore", {ru: "Малая руда ляпис-лазури",  zh: "小青金石礦石"});
Translation.addTranslation("Small Coal Ore", {ru: "Малая угольная руда",  zh: "小煤礦"});

// Ore
Translation.addTranslation("Malachite Ore", {ru: "Малахитовая руда",  zh: "孔雀石礦石"});
Translation.addTranslation("Banded Iron Ore", {ru: "Руда полосчатого железа",  zh: "帶狀鐵礦石"});
Translation.addTranslation("Yellow Limonite Ore", {ru: "Руда жёлтого лимонита",  zh: "黃褐鐵礦礦石"});
Translation.addTranslation("Brown Limonite Ore", {ru: "Руда коричневого лимонита",  zh: "棕色褐鐵礦礦石"});
Translation.addTranslation("Pyrite Ore", {ru: "Пиритовая руда",  zh: "硫鐵礦"});
Translation.addTranslation("Chalcopyrite Ore", {ru: "Халькопиритовая руда",  zh: "黃銅礦"});
Translation.addTranslation("Vanadium-Magnetite Ore", {ru: "Ванадий-Магнетитовая руда",  zh: "釩磁鐵礦"});
Translation.addTranslation("Magnetite Ore", {ru: "Магнетитовая руда",  zh: "磁鐵礦"});
Translation.addTranslation("Iron Ore", {ru: "Железная руда",  zh: "鐵礦"});
Translation.addTranslation("Cassiterite Ore", {ru: "Касситеритная руда",  zh: "錫石礦石"});
Translation.addTranslation("Antimonite Ore", {ru: "Антимонитовая руда",  zh: "銻礦"});
Translation.addTranslation("Tetrahedrite Ore", {ru: "Тетраэдритная руда",  zh: "四鐵礦礦石"});
Translation.addTranslation("Galena Ore", {ru: "Галенитовая руда",  zh: "方鉛礦礦石"});
Translation.addTranslation("Silver Ore", {ru: "Серебрянная руда",  zh: "银矿"});
Translation.addTranslation("Coal Ore", {ru: "Угольная руда",  zh: "煤礦"});
Translation.addTranslation("Lignite Coal Ore", {ru: "Руда бурого угля",  zh: "褐煤煤礦"});
Translation.addTranslation("Lazurite Ore", {ru: "Лазуритовая руда",  zh: "Lazurite礦石"});
Translation.addTranslation("Lapis-Lazuli Ore", {ru: "Руда ляпис-лазури",  zh: "Lapis-Lazuli礦石"});
Translation.addTranslation("Sodalite Ore", {ru: "Содалитовая руда",  zh: "方鈉石礦石"});
Translation.addTranslation("Calcite Ore", {ru: "Кальцитовая руда",  zh: "方解石礦石"});
Translation.addTranslation("Redstone Ore", {ru: "Руда красного камня",  zh: "紅石礦石"});
Translation.addTranslation("Cinnabar Ore", {ru: "Киноварная руда",  zh: "硃砂礦石"});
Translation.addTranslation("Ruby Ore", {ru: "Рубиновая руда",  zh: "紅寶石礦石"});
Translation.addTranslation("Diamond Ore", {ru: "Алмазная руда",  zh: "鑽石礦石"});
Translation.addTranslation("Graphite Ore", {ru: "Графитовая руда",  zh: "石墨礦"});
Translation.addTranslation("Gold Ore", {ru: "Золотая руда",  zh: "金礦"});


//MATERIAL
Translation.addTranslation("Lignite", {ru: "Бурый уголь",  zh: "褐煤"});
Translation.addTranslation("Rubber Ingot", {ru: "Резиновый брусок",  zh: "橡胶酒吧"});
Translation.addTranslation("Silver Ingot", {ru: "Серебряный слиток",  zh: "银锭"});
Translation.addTranslation("Antimony Ingot", {ru: "Слиток сурьмы",  zh: "锑锭"});
Translation.addTranslation("WroughtIron Ingot", {ru: "Слиток кованого железа",  zh: "铁铸锭"});


//NUGGETS
Translation.addTranslation("Rubber Nugget", {ru: "Резиновый обломок",  zh: "橡胶片"});
Translation.addTranslation("Tin Nugget", {ru: "Оловянный самородок",  zh: "锡金块"});
Translation.addTranslation("Copper Nugget", {ru: "Медный самородок",  zh: "铜金块"});
Translation.addTranslation("Bronze Nugget", {ru: "Бронзовый самородок",  zh: "铜金块"});
Translation.addTranslation("Silver Nugget", {ru: "Серебряный самородок",  zh: "银块"});
Translation.addTranslation("Iron Nugget", {ru: "Железный самородок",  zh: "铁块"});
Translation.addTranslation("Steel Nugget", {ru: "Стальной самородок",  zh: "鋼塊"});
Translation.addTranslation("Lead Nugget", {ru: "Свинцовый самородок",  zh: "铅块"});
Translation.addTranslation("Antimony Nugget", {ru: "Самородок из сурьмы",  zh: "金块的锑"});
Translation.addTranslation("WroughtIron Nugget", {ru: "Самородок кованого железа",  zh: "锻铁块"});


//PLATES
Translation.addTranslation("Rubber Plate", {ru: "Резиновый лист",  zh: "橡胶板"});
Translation.addTranslation("LapisLazuli Plate", {ru: "Лазуритная пластина",  zh: "青金石板"});
Translation.addTranslation("Redstone Plate", {ru: "Пластина из красного камня",  zh: "紅石板"});
Translation.addTranslation("Emerald Plate", {ru: "Изумрудная пластина",  zh: "綠寶石板"});
Translation.addTranslation("Diamond Plate", {ru: "Алмазная пластина",  zh: "鑽石板"});
Translation.addTranslation("Silver Plate", {ru: "Серебрянная пластина",  zh: "银板"});
Translation.addTranslation("Antimony Plate", {ru: "Пластина из сурьмы",  zh: "板锑"});
Translation.addTranslation("WroughtIron Plate", {ru: "Пластина кованого железа",  zh: "锻铁板"});
Translation.addTranslation("Wood Plate", {ru: "Деревянная пластина",  zh: "木板"});
Translation.addTranslation("RedAlloy Plate", {ru: "Пластина из красного сплава",  zh: "红合金板"});


//RODS
Translation.addTranslation("Rubber Rod", {ru: "Резиновый стержень",  zh: "橡胶棒"});
Translation.addTranslation("Tin Rod", {ru: "Оловянный стержень",  zh: "锡杆"});
Translation.addTranslation("Copper Rod", {ru: "Медный стержень",  zh: "铜终端"});
Translation.addTranslation("Bronze Rod", {ru: "Бронзовый стержень",  zh: "铜板"});
Translation.addTranslation("Iron Rod", {ru: "Железный стержень",  zh: "铁杆"});
Translation.addTranslation("Steel Rod", {ru: "Стальной стержень",  zh: "鋼棒"});
Translation.addTranslation("Silver Rod", {ru: "Серебряный стержень",  zh: "银杆"});
Translation.addTranslation("Gold Rod", {ru: "Золотой стержень",  zh: "金棒"});
Translation.addTranslation("Lead Rod", {ru: "Свинцовый стержень",  zh: "导致网"});
Translation.addTranslation("Antimony Rod", {ru: "Стержень из сурьмы",  zh: "棒的锑"});
Translation.addTranslation("WroughtIron Rod", {ru: "Стержень кованого железа",  zh: "锻铁杆"});
Translation.addTranslation("Magnetic Iron Rod", {ru: "Магнитный железный стержень",  zh: "磁铁杆"});

//LONG ROD
Translation.addTranslation("Long Rubber Rod", {ru: "Длинный резиновый стержень",  zh: "长橡胶棒"});
Translation.addTranslation("Long Tin Rod", {ru: "Длинный оловянный стержень",  zh: "只要锡杆"});
Translation.addTranslation("Long Copper Rod", {ru: "Длинный медный стержень",  zh: "长长铜杆"});
Translation.addTranslation("Long Bronze Rod", {ru: "Длинный бронзовый стержень",  zh: "长长铜杆"});
Translation.addTranslation("Long Silver Rod", {ru: "Длинный серебряный стержень",  zh: "只要银杆"});
Translation.addTranslation("Long Gold Rod", {ru: "Длинный золотой стержень",  zh: "金色的长杆"});
Translation.addTranslation("Long Iron Rod", {ru: "Длинный железный стержень",  zh: "长的铁杆"});
Translation.addTranslation("Long Steel Rod", {ru: "Длинный стальной стержень",  zh: "長鋼棒"});
Translation.addTranslation("Long Lead Rod", {ru: "Длинный свинцовый стержень",  zh: "长导杆"});
Translation.addTranslation("Long Antimony Rod", {ru: "Длинный стержень из сурьмы",  zh: "一个漫长的杆的锑"});
Translation.addTranslation("Long WroughtIron Rod", {ru: "Длинный стержень кованого железа",  zh: "长锻铁杆"});

// Ring
Translation.addTranslation("Rubber Ring", {ru: "Резиновое кольцо",  zh: "橡皮圈"});
Translation.addTranslation("Tin Ring", {ru: "Оловянное кольцо",  zh: "环锡"});


//BOLTS
Translation.addTranslation("Rubber Bolt", {ru: "Резиновый болт",  zh: "橡胶螺栓"});
Translation.addTranslation("Tin Bolt", {ru: "Оловянный болт",  zh: "锡螺栓"});
Translation.addTranslation("Copper Bolt", {ru: "Медный болт",  zh: "铜的螺栓"});
Translation.addTranslation("Bronze Bolt", {ru: "Бронзовый болт",  zh: "铜牌螺栓"});
Translation.addTranslation("Iron Bolt", {ru: "Железный болт",  zh: "一个铁的螺栓"});
Translation.addTranslation("Steel Bolt", {ru: "Стальной болт",  zh: "鋼螺栓"});
Translation.addTranslation("Silver Bolt", {ru: "Серебряный болт",  zh: "银螺栓"});
Translation.addTranslation("Gold Bolt", {ru: "Золотой болт",  zh: "金螺栓"})
Translation.addTranslation("Lead Bolt", {ru: "Свинцовый болт",  zh: "导致螺栓"});
Translation.addTranslation("Antimony Bolt", {ru: "Болт из сурьмы",  zh: "螺栓从锑"});
Translation.addTranslation("WroughtIron Bolt", {ru: "Болт кованого железа",  zh: "锻铁螺栓"});


//DUSTS
Translation.addTranslation("Rubber Dust", {ru: "Резиновая масса",  zh: "橡胶纸浆"});
Translation.addTranslation("Glass Dust", {ru: "Стеклянная пыль",  zh: "玻璃粉尘"});
Translation.addTranslation("Stone Dust", {ru: "Каменная пыль",  zh: "石灰尘"});
Translation.addTranslation("Wood Dust", {ru: "Деревянная масса",  zh: "木屑"});
Translation.addTranslation("Lignite Dust", {ru: "Пыль бурого угля",  zh: "褐煤灰"});
Translation.addTranslation("RedAlloy Dust", {ru: "Пыль красного сплава",  zh: "红合金粉尘"});
Translation.addTranslation("Ashes Dust", {ru: "Пепел",  zh: "灰燼"});
Translation.addTranslation("DarkAshes Dust", {ru: "Зола",  zh: "黑暗的灰燼"});

Translation.addTranslation("LapisLazuli Dust", {ru: "Лазуритная пыль",  zh: "青金石灰塵"});
Translation.addTranslation("Emerald Dust", {ru: "Изумрудная пыль",  zh: "祖母綠的塵埃"});

Translation.addTranslation("Steel Dust", {ru: "Стальная пыль",  zh: "鋼塵"});
Translation.addTranslation("Antimony Dust", {ru: "Пыль сурьмы",  zh: "灰尘的锑"});
Translation.addTranslation("WroughtIron Dust", {ru: "Пыль кованого железа",  zh: "锻铁粉"});


//SMALL DUSTS
Translation.addTranslation("Small Pile of Rubber Dust", {ru: "Малая кучка резиновой массы",  zh: "一小堆的橡胶纸浆"});

Translation.addTranslation("Small Pile of Emerald Dust", {ru: "Малая кучка изумрудной пыли",  zh: "小堆翠綠的塵土"});
Translation.addTranslation("Small Pile of Diamond Dust", {ru: "Малая кучка алмазной пыли",  zh: "小堆金剛石粉塵"});

Translation.addTranslation("Small Pile of Tin Dust", {ru: "Малая кучка оловянной пыли",  zh: "一小堆的锡灰尘"});
Translation.addTranslation("Small Pile of Copper Dust", {ru: "Малая кучка медной пыли",  zh: "一小堆铜灰尘"});
Translation.addTranslation("Small Pile of Bronze Dust", {ru: "Малая кучка бронзовой пыли",  zh: "一小堆铜灰尘"});

Translation.addTranslation("Small Pile of Iron Dust", {ru: "Малая кучка железной пыли",  zh: "小堆的铁粉"});
Translation.addTranslation("Small Pile of Steel Dust", {ru: "Малая кучка стальной пыли",  zh: "一小堆鋼塵"});

Translation.addTranslation("Small Pile of Silver Dust", {ru: "Малая кучка серебряной пыли",  zh: "一小堆银灰尘"});
Translation.addTranslation("Small Pile of Gold Dust", {ru: "Малая кучка золотой пыли",  zh: "一小堆黄尘"});

Translation.addTranslation("Small Pile of Lead Dust", {ru: "Малая кучка свинцовой пыли",  zh: "一小堆铅粉尘"});
Translation.addTranslation("Small Pile of Antimony Dust", {ru: "Малая кучка пыли из сурьмы",  zh: "一小堆的粉尘从锑"});
Translation.addTranslation("Small Pile of WroughtIron Dust", {ru: "Малая кучка пыли кованого железа",  zh: "小堆的锻铁粉"});


//TINY DUSTS
Translation.addTranslation("Tiny Pile of Rubber Dust", {ru: "Крошечная кучка резиновой массы",  zh: "小堆的橡胶纸浆"});

Translation.addTranslation("Tiny Pile of Ashes Dust", {ru: "Крошечная кучка пепла",  zh: "一小堆灰燼"});
Translation.addTranslation("Tiny Pile of DarkAshes Dust", {ru: "Крошечная кучка золы",  zh: "一小堆黑灰"});

Translation.addTranslation("Tiny Pile of Emerald Dust", {ru: "Крошечная кучка изумрудной пыли",  zh: "一小堆翠綠的灰塵"});
Translation.addTranslation("Tiny Pile of Diamond Dust", {ru: "Крошечная кучка алмазной пыли",  zh: "一小堆金剛石粉塵尘"});

Translation.addTranslation("Tiny Pile of Tin Dust", {ru: "Крошечная кучка оловянной пыли",  zh: "小堆的锡灰尘"});
Translation.addTranslation("Tiny Pile of Copper Dust", {ru: "Крошечная кучка медной пыли",  zh: "小堆铜灰尘"});
Translation.addTranslation("Tiny Pile of Bronze Dust", {ru: "Крошечная кучка бронзовой пыли",  zh: "小堆铜灰尘"});

Translation.addTranslation("Tiny Pile of Iron Dust", {ru: "Крошечная кучка железной пыли",  zh: "微小的鐵塵埃堆"});
Translation.addTranslation("Tiny Pile of Steel Dust", {ru: "Крошечная кучка стальной пыли",  zh: "一小堆鋼塵"});

Translation.addTranslation("Tiny Pile of Silver Dust", {ru: "Крошечная кучка серебряной пыли",  zh: "小堆银灰尘"});
Translation.addTranslation("Tiny Pile of Gold Dust", {ru: "Крошечная кучка золотой пыли",  zh: "小堆黄尘"});

Translation.addTranslation("Tiny Pile of Lead Dust", {ru: "Крошечная кучка свинцовой пыли",  zh: "小堆铅粉尘"});
Translation.addTranslation("Tiny Pile of Antimony Dust", {ru: "Крошечная кучка пыли из сурьмы",  zh: "小堆的粉尘从锑"});
Translation.addTranslation("Tiny Pile of WroughtIron Dust", {ru: "Крошечная кучка пыли кованого железа",  zh: "小堆的锻铁粉"});


//CRUSHED
Translation.addTranslation("Crushed Lignite Ore", {ru: "Измельчённая руда бурого угля",  zh: "粉碎的褐煤礦"});

Translation.addTranslation("Crushed Malachite Ore", {ru: "Измельчённая малахитовая руда",  zh: "粉碎石矿"});

Translation.addTranslation("Crushed BandedIron Ore", {ru: "Измельчённая железо-полосчатая руда",  zh: "粉碎铁矿石镶边"});

Translation.addTranslation("Crushed YellowLimonite Ore", {ru: "Измельчённая руда жёлтого лимонита",  zh: "粉碎矿石的黄褐铁矿"});

Translation.addTranslation("Crushed BrownLimonite Ore", {ru: "Измельчённая руда коричневого лимонита",  zh: "粉碎矿石棕褐铁矿"});

Translation.addTranslation("Crushed Pyrite Ore", {ru: "Измельчённая пиритовая руда",  zh: "碎黄铁矿石"});

Translation.addTranslation("Crushed Chalcopyrite Ore", {ru: "Измельчённая халькопиритовая руда",  zh: "粉碎黄铜矿石"});

Translation.addTranslation("Crushed VanadiumMagnetite Ore", {ru: "Измельчённая ванадий-магнетитовая руда",  zh: "碎钒-磁铁矿"});

Translation.addTranslation("Crushed Magnetite Ore", {ru: "Измельчённая магнетитовая руда",  zh: "粉碎的磁铁矿"});

Translation.addTranslation("Crushed Cassiterite Ore", {ru: "Измельчённая касситеритовая руда",  zh: "粉碎矿石，锡石"});

Translation.addTranslation("Crushed Antimony Ore", {ru: "Измельчённая антимонитовая руда",  zh: "粉碎矿石Antimonova"});

Translation.addTranslation("Crushed Tetrahedrite Ore", {ru: "Измельчённая тетраэдритная руда",  zh: "粉碎矿石Tetraedrica"});

Translation.addTranslation("Crushed Galena Ore", {ru: "Измельчённая галенитовая руда",  zh: "碾碎的方铅矿矿石"});

Translation.addTranslation("Crushed LapisLazuli Ore", {ru: "Измельчённая лазуритная руда",  zh: "粉碎的青金石礦石"});

Translation.addTranslation("Crushed Redstone Ore", {ru: "Измельчённая красная руда",  zh: "碾碎的紅石礦石"});

Translation.addTranslation("Crushed Emerald Ore", {ru: "Измельчённая изумрудная руда",  zh: "祖母綠碾碎的礦石"});

Translation.addTranslation("Crushed Diamond Ore", {ru: "Измельчённая алмазная руда",  zh: "粉碎的鑽石礦石"});

Translation.addTranslation("Crushed Coal Ore", {ru: "Измельчённая угольная руда",  zh: "碎煤礦"});

Translation.addTranslation("Crushed Iron Ore", {ru: "Измельчённая железная руда",  zh: "粉碎的鐵礦石"});

Translation.addTranslation("Crushed Tin Ore", {ru: "Измельчённая оловянная руда",  zh: "被擊碎的錫礦石"});

Translation.addTranslation("Crushed Silver Ore", {ru: "Измельчённая серебряная руда",  zh: "粉碎銀礦"});

Translation.addTranslation("Crushed Gold Ore", {ru: "Измельчённая золотая руда",  zh: "粉碎的金礦石"});

Translation.addTranslation("Crushed Copper Ore", {ru: "Измельчённая медная руда",  zh: "銅礦粉碎"});

Translation.addTranslation("Crushed Lead Ore", {ru: "Измельчённая свинцовая руда",  zh: "鉛礦石粉碎"});


// PURIFIED
Translation.addTranslation("Purified Crushed LapisLazuli Ore", {ru: "Очищенная лазуритная руда",  zh: "純淨的青金石礦石"});

Translation.addTranslation("Purified Crushed Redstone Ore", {ru: "Очищенная красная руда",  zh: "純化的紅石礦石"});

Translation.addTranslation("Purified Crushed Emerald Ore", {ru: "Очищенная изумрудная руда",  zh: "純淨的祖母綠礦石"});

Translation.addTranslation("Purified Crushed Diamond Ore", {ru: "Очищенная алмазная руда",  zh: "純淨的鑽石礦石"});

Translation.addTranslation("Purified Crushed Coal Ore", {ru: "Очищенная угольная руда",  zh: "淨化煤礦"});

Translation.addTranslation("Purified Crushed Iron Ore", {ru: "Очищенная железная руда",  zh: "純化的鐵礦石"});

Translation.addTranslation("Purified Crushed Tin Ore", {ru: "Очищенная оловянная руда",  zh: "純錫礦石"});

Translation.addTranslation("Purified Crushed Silver Ore", {ru: "Очищенная серебряная руда",  zh: "純銀礦石"});

Translation.addTranslation("Purified Crushed Gold Ore", {ru: "Очищенная золотая руда",  zh: "純化的金礦石"});

Translation.addTranslation("Purified Crushed Copper Ore", {ru: "Очищенная медная руда",  zh: "純化的銅礦"});

Translation.addTranslation("Purified Crushed Lead Ore", {ru: "Очищенная свинцовая руда",  zh: "純化鉛礦石"});

Translation.addTranslation("Purified Crushed Lignite Ore", {ru: "Очищенная руда бурого угля",  zh: "純化的褐煤礦石"});

//IMPURE DUST
Translation.addTranslation("Impure Stone Dust", {ru: "Загрязнённая каменная пыль",  zh: "不純的石頭塵土"});

Translation.addTranslation("Impure Lignite Dust", {ru: "Загрязнённая пыль бурого угля",  zh: "不純的褐煤粉塵"});

Translation.addTranslation("Impure Malachite Dust", {ru: "Загрязнённая малахитовая пыль",  zh: "被污染的石灰尘"});

Translation.addTranslation("Impure BandedIron Dust", {ru: "Загрязнённая железо-полосчатая пыль",  zh: "受污染的铁-带状灰尘"});

Translation.addTranslation("Impure YellowLimonite Dust", {ru: "Загрязнённая пыль жёлтого лимонита",  zh: "被污染的粉尘黄褐铁矿"});

Translation.addTranslation("Impure BrownLimonite Dust", {ru: "Загрязнённая пыль коричневого лимонита",  zh: "被污染的粉尘棕褐铁矿"});

Translation.addTranslation("Impure Pyrite Dust", {ru: "Загрязнённая пиритовая пыль",  zh: "受污染的黄铁矿灰尘"});

Translation.addTranslation("Impure Chalcopyrite Dust", {ru: "Загрязнённая халькопиритовая пыль",  zh: "黄铜矿污染的粉尘"});

Translation.addTranslation("Impure VanadiumMagnetite Dust", {ru: "Загрязнённая ванадий-магнетитовая пыль",  zh: "受污染的钒磁铁矿的灰尘"});

Translation.addTranslation("Impure Magnetite Dust", {ru: "Загрязнённая магнетитовая пыль",  zh: "受污染的磁铁矿的灰尘"});

Translation.addTranslation("Impure Cassiterite Dust", {ru: "Загрязнённая касситеритовая пыль",  zh: "锡石被污染的粉尘"});

Translation.addTranslation("Impure Antimony Dust", {ru: "Загрязнённая антимонитовая пыль",  zh: "Antimonova被污染的粉尘"});

Translation.addTranslation("Impure Tetrahedrite Dust", {ru: "Загрязнённая тетраэдритовая пыль",  zh: "Tetraedrica被污染的粉尘"});

Translation.addTranslation("Impure Galena Dust", {ru: "Загрязнённая галенитовая пыль",  zh: "Galena被污染的粉尘"});

Translation.addTranslation("Impure LapisLazuli Dust", {ru: "Загрязнённая лазуритная пыль",  zh: "不純的青金石礦石"});

Translation.addTranslation("Impure Redstone Dust", {ru: "Загрязнённая красная пыль",  zh: "不純的紅石礦"});

Translation.addTranslation("Impure Emerald Dust", {ru: "Загрязнённая изумрудная пыль",  zh: "不純的祖母綠礦石"});

Translation.addTranslation("Impure Diamond Dust", {ru: "Загрязнённая алмазная пыль",  zh: "不純的鑽石礦石"});

Translation.addTranslation("Impure Coal Dust", {ru: "Загрязнённая угольная пыль",  zh: "不純的煤礦"});

Translation.addTranslation("Impure Tin Dust", {ru: "Загрязнённая оловянная пыль",  zh: "不純淨的錫塵"});

Translation.addTranslation("Impure Iron Dust", {ru: "Загрязнённая железная пыль",  zh: "不純的鐵屑"});

Translation.addTranslation("Impure Silver Dust", {ru: "Загрязнённая серебряная пыль",  zh: "不純的銀灰"});

Translation.addTranslation("Impure Gold Dust", {ru: "Загрязнённая золотая пыль",  zh: "不純的金粉"});

Translation.addTranslation("Impure Copper Dust", {ru: "Загрязнённая медная пыль",  zh: "不純的銅塵"});

Translation.addTranslation("Impure Lead Dust", {ru: "Загрязнённая cвинцовая пыль",  zh: "不純的鉛塵"});

//GEMS
Translation.addTranslation("Perfect Diamond", {ru: "Совершенный алмаз",  zh: "完美的鑽石"});

Translation.addTranslation("Flawless Diamond", {ru: "Безупречный алмаз",  zh: "完美無瑕的鑽石"});

Translation.addTranslation("Defective Diamond", {ru: "Дефектный алмаз",  zh: "有缺陷的鑽石"});

Translation.addTranslation("Split Diamond", {ru: "Расколотый алмаз",  zh: "分裂的鑽石"});

Translation.addTranslation("Perfect Emerald", {ru: "Совершенный изумруд",  zh: "完美的祖母綠"});

Translation.addTranslation("Flawless Emerald", {ru: "Безупречный изумруд",  zh: "完美無瑕的祖母綠"});

Translation.addTranslation("Defective Emerald", {ru: "Дефектный изумруд",  zh: "有缺陷的祖母綠"});

Translation.addTranslation("Split Emerald", {ru: "Расколотый изумруд",  zh: "分裂祖母綠"});

//SCREWS
Translation.addTranslation("Bronze Screw", {ru: "Бронзовый винт",  zh: "铜牌螺钉"});

Translation.addTranslation("Copper Screw", {ru: "Медный винт",  zh: "铜螺钉"});

Translation.addTranslation("Gold Screw", {ru: "Золотой винт",  zh: "金螺钉"});

Translation.addTranslation("Lead Screw", {ru: "Свинцовый винт",  zh: "导致螺钉"});

Translation.addTranslation("Steel Screw", {ru: "Стальной винт",  zh: "钢钉"});

Translation.addTranslation("Tin Screw", {ru: "Оловянный винт",  zh: "锡螺钉"});

//Axe
Translation.addTranslation("Wood Axe", {ru: "Деревянный топор",  zh: "木斧头"});

Translation.addTranslation("Stone Axe", {ru: "Каменный топор",  zh: "石斧"});

Translation.addTranslation("Iron Axe", {ru: "Железный топор",  zh: "铁斧头"});

Translation.addTranslation("Steel Axe", {ru: "Стальной топор",  zh: "钢斧头"});

Translation.addTranslation("Emerald Axe", {ru: "Изумрудный топор",  zh: "绿宝石斧头"});

Translation.addTranslation("Flint Axe", {ru: "Кремневый топор",  zh: "弗林特斧头"});

Translation.addTranslation("Diamond Axe", {ru: "Алмазный топор",  zh: "钻石斧头"});

//Shovel
Translation.addTranslation("Wood Shovel", {ru: "Деревянная лопата",  zh: "木铲"});

Translation.addTranslation("Stone Shovel", {ru: "Каменная лопата",  zh: "石铲"});

Translation.addTranslation("Iron Shovel", {ru: "Железная лопата",  zh: "铁铲"});

Translation.addTranslation("Steel Shovel", {ru: "Стальная лопата",  zh: "钢铁铲"});

Translation.addTranslation("Emerald Shovel", {ru: "Изумрудная лопата",  zh: "铲子翡翠"});

Translation.addTranslation("Flint Shovel", {ru: "Кремневая лопата",  zh: "弗林特铲"});

Translation.addTranslation("Diamond Shovel", {ru: "Алмазная лопата",  zh: "钻石铲"});

//Hoe
Translation.addTranslation("Wood Hoe", {ru: "Деревянная мотыга",  zh: "木锄头"});

Translation.addTranslation("Stone Hoe", {ru: "Каменная мотыга",  zh: "石锄头"});

Translation.addTranslation("Iron Hoe", {ru: "Железная мотыга",  zh: "铁锄头"});

Translation.addTranslation("Steel Hoe", {ru: "Стальная мотыга",  zh: "钢铁锄头"});

Translation.addTranslation("Emerald Hoe", {ru: "Изумрудная мотыга",  zh: "翡翠锄头"});

Translation.addTranslation("Flint Hoe", {ru: "Кремневая мотыга",  zh: "弗林特锄头"});

Translation.addTranslation("Diamond Hoe", {ru: "Алмазная мотыга",  zh: "钻石锄头"});

//Pickaxe
Translation.addTranslation("Wood Pickaxe", {ru: "Деревянная кирка",  zh: "木镐"});

Translation.addTranslation("Stone Pickaxe", {ru: "Каменная кирка",  zh: "石镐"});

Translation.addTranslation("Iron Pickaxe", {ru: "Железная кирка",  zh: "铁镐头"});

Translation.addTranslation("Steel Pickaxe", {ru: "Стальная кирка",  zh: "钢铁镐头"});

Translation.addTranslation("Emerald Pickaxe", {ru: "Изумрудная кирка",  zh: "翡翠镐头"});

Translation.addTranslation("Flint Pickaxe", {ru: "Кремневая кирка",  zh: "弗林特镐头"});

Translation.addTranslation("Diamond Pickaxe", {ru: "Алмазная кирка",  zh: "钻石镐头"});

//Sword
Translation.addTranslation("Wood Sword", {ru: "Деревянный меч",  zh: "木剑"});

Translation.addTranslation("Stone Sword", {ru: "Каменный меч",  zh: "石剑"});

Translation.addTranslation("Iron Sword", {ru: "Железный меч",  zh: "铁剑"});

Translation.addTranslation("Steel Sword", {ru: "Стальной меч",  zh: "钢刀"});

Translation.addTranslation("Emerald Sword", {ru: "Изумрудный меч",  zh: "绿宝剑"});

Translation.addTranslation("Flint Sword", {ru: "Кремневый меч",  zh: "弗林特剑"});

Translation.addTranslation("Diamond Sword", {ru: "Алмазный меч",  zh: "钻石的剑"});


//HAMMERS

Translation.addTranslation("Iron Hammer", {ru: "Железный молот",  zh: "铁锤"});

Translation.addTranslation("Bronze Hammer", {ru: "Бронзовый молот",  zh: "青铜锤"});

Translation.addTranslation("Diamond Hammer", {ru: "Алмазный молот",  zh: "钻石锤"});

Translation.addTranslation("Emerald Hammer", {ru: "Изумрудный молот",  zh: "翡翠锤"});

Translation.addTranslation("Quartz Hammer", {ru: "Кварцевый молот",  zh: "石英锤"});

Translation.addTranslation("Star Hammer", {ru: "Молот из адской звезды",  zh: "锤狱星"});

Translation.addTranslation("Steel Hammer", {ru: "Стальной молот",  zh: "钢铁锤"});

Translation.addTranslation("Lead Hammer", {ru: "Свинцовый молот",  zh: "铅锤"});

Translation.addTranslation("Gold Hammer", {ru: "Золотой молот",  zh: "金锤"});

Translation.addTranslation("Silver Hammer", {ru: "Серебряный молот",  zh: "银锤"});

//Wrenchs

Translation.addTranslation("Iron Wrench", {ru: "Железный ключ",  zh: "铁键"});

Translation.addTranslation("Gold Wrench", {ru: "Золотой ключ",  zh: "铁键"});

Translation.addTranslation("Bronze Wrench", {ru: "Бронзовый ключ",  zh: "青铜钥匙"});

Translation.addTranslation("Lead Wrench", {ru: "Свинцовый ключ",  zh: "导致关键"});

Translation.addTranslation("Steel Wrench", {ru: "Стальной ключ",  zh: "钢关键"});

Translation.addTranslation("Silver Wrench", {ru: "Серебряный ключ",  zh: "银色的钥匙"});

//Files

Translation.addTranslation("Bronze File", {ru: "Бронзовый напильник",  zh: "青铜文件"});

Translation.addTranslation("Steel File", {ru: "Стальной напильник",  zh: "钢文件"});

Translation.addTranslation("Iron File", {ru: "Железный напильник",  zh: "铁文件"});

Translation.addTranslation("Gold File", {ru: "Золотой напильник",  zh: "黄金的文件"});

Translation.addTranslation("Silver File", {ru: "Серебряный напильник",  zh: "银文件"});

Translation.addTranslation("Lead File", {ru: "Свинцовый напильник",  zh: "导文件"});

//Knifes

Translation.addTranslation("Lead Knife", {ru: "Свинцовый нож",  zh: "导致刀"});

Translation.addTranslation("Silver Knife", {ru: "Серебряный нож",  zh: "银刀"});

Translation.addTranslation("Bronze Knife", {ru: "Бронзовый нож",  zh: "青铜刀"});

Translation.addTranslation("Gold Knife", {ru: "Золотой нож",  zh: "金色的刀"});

Translation.addTranslation("Iron Knife", {ru: "Железный нож",  zh: "铁刀"});

Translation.addTranslation("Steel Knife", {ru: "Стальной нож",  zh: "钢刀"});

//SawBlades
Translation.addTranslation("Bronze Saw Blade", {ru: "Бронзовая часть пилы",  zh: "铜的一部分，看到了"});

Translation.addTranslation("Gold Saw Blade", {ru: "Золотая часть пилы",  zh: "黄金的一部分，看到了"});

Translation.addTranslation("Iron Saw Blade", {ru: "Железная часть пилы",  zh: "铁的一部分，看到了"});

Translation.addTranslation("Silver Saw Blade", {ru: "Серебряная часть пилы",  zh: "银的一部分，看到了"});

Translation.addTranslation("Steel Saw Blade", {ru: "Стальная часть пилы",  zh: "的钢材的一部分，看到了"});

//saw
Translation.addTranslation("Bronze Saw", {ru: "Бронзовая пила",  zh: "青铜看到了"});

Translation.addTranslation("Gold Saw", {ru: "Золотая пила",  zh: "金看到了"});

Translation.addTranslation("Iron Saw", {ru: "Железная пила",  zh: "钢锯"});

Translation.addTranslation("Lead Saw", {ru: "Свинцовая пила",  zh: "致看到了"});

Translation.addTranslation("Silver Saw", {ru: "Серебряная пила",  zh: "银看到了"});

Translation.addTranslation("Steel Saw", {ru: "Стальная пила",  zh: "钢锯"});

//mortar
Translation.addTranslation("Flint Mortar", {ru: "Кремневая ступка",  zh: "石灰浆"});

Translation.addTranslation("Iron Mortar", {ru: "Железная ступка",  zh: "铁砂浆"});

Translation.addTranslation("Bronze Mortar", {ru: "Бронзовая ступка",  zh: "青铜灰浆"});

Translation.addTranslation("Diamond Mortar", {ru: "Алмазная ступка",  zh: "钻石砂浆"});

Translation.addTranslation("Gold Mortar", {ru: "Золотая ступка",  zh: "金色的砂浆"});

Translation.addTranslation("Lead Mortar", {ru: "Свинцовая ступка",  zh: "导致砂浆"});

Translation.addTranslation("Steel Mortar", {ru: "Стальная ступка",  zh: "钢铁砂浆"});

Translation.addTranslation("Silver Mortar", {ru: "Серебряная ступка",  zh: "银灰浆"});

//cutter
Translation.addTranslation("Lead Cutter", {ru: "Свинцовые кусачки",  zh: "导致"});

Translation.addTranslation("Gold Cutter", {ru: "Золотые кусачки",  zh: "金刀"});

Translation.addTranslation("Iron Cutter", {ru: "Железные кусачки",  zh: "铁刀"});

Translation.addTranslation("Bronze Cutter", {ru: "Бронзовые кусачки",  zh: "青铜刀"});

Translation.addTranslation("Steel Cutter", {ru: "Стальные кусачки",  zh: "钢刀"});

//screwdriver
Translation.addTranslation("Gold Screwdriver", {ru: "Золотая отвёртка",  zh: "黄金丝刀"});

Translation.addTranslation("Iron Screwdriver", {ru: "Железная отвёртка",  zh: "铁制螺丝刀"});

Translation.addTranslation("Steel Screwdriver", {ru: "Стальная отвёртка",  zh: "钢丝刀"});

//components
Translation.addTranslation("Resistor", {ru: "Резистор",  zh: "阻"});

Translation.addTranslation("Glass Tube", {ru: "Стеклянная трубка",  zh: "玻璃管"});

Translation.addTranslation("Vacuum Tube", {ru: "Вакумная трубка",  zh: "真空管"});

Translation.addTranslation("Coated Circuit Board", {ru: "Печатная плата",  zh: "复电路板"});

Translation.addTranslation("Electric Motor (LV)", {ru: "Электрический мотор (LV)",  zh: "电动机(LV)"});

Translation.addTranslation("Tin Rotor", {ru: "Оловянный ротор",  zh: "锡转子"});




// file: common/items/tools.js

CTR.RegisterToolsSet("Iron", 256, 2, 3)
CTR.RegisterSoldering("Iron", 256, 2)

CTR.RegisterToolsSet("Gold", 32, 2, 2, 3)
CTR.RegisterToolsSet("Steel", 512, 3, 4)

CTR.RegisterHammer("Diamond", 1024, 2, 4)

CTR.RegisterHammer("Emerald", 1024, 2, 4)

CTR.RegisterHammer("Bronze", 128, 2, 3)
CTR.RegisterCutter("Bronze", 128, 2)
CTR.RegisterFile("Bronze", 128, 2)
CTR.RegisterMortar("Bronze", 128, 2)
CTR.RegisterWrench("Bronze", 128, 2)
CTR.RegisterSaw("Bronze", 128, 2)

CTR.RegisterHammer("Stone", 8, 1, 2)
CTR.RegisterMortar("Stone", 8, 1)

CTR.RegisterWrench("Lead", 128, 2)
CTR.RegisterScrewdriver("Lead", 128, 2)
CTR.RegisterKnife("Lead", 128, 2)
CTR.RegisterSaw("Lead", 128, 2)

CTR.RegisterWrench("Silver", 128, 2)
CTR.RegisterKnife("Silver", 128, 2)
CTR.RegisterSaw("Silver", 128, 2)

CTR.RegisterHammer("Rubber", 128, 0, 0)

CTR.RegisterHammer("Volfram", 4096, 3, 4)
CTR.RegisterScrewdriver("Volfram", 4096, 3)
CTR.RegisterFile("Volfram", 4096, 3)
CTR.RegisterWrench("Volfram", 4096, 3)


//CTR.RegisterScrewdriver("Bronze", 128, 2)
//CTR.RegisterScrewdriver("Silver", 128)
	
var hammers = ATMat.hammers
var files = ATMat.files
var mortars = ATMat.mortars
var cutters = ATMat.cutters
var wrenchs = ATMat.wrenchs
var screwdrivers = ATMat.screwdrivers
var solderings = ATMat.solderings
	
Callback.addCallback("PostLoaded", function(){
	var A = ATMat
	var stick = 280
	for(var key1 in A.gems){
		for(var key2 in A.hammers){
		    if(A.gems[key1].mat == A.hammers[key2].mat){
		        Recipes.addShaped({id:A.hammers[key2].id, count:1, data:0}, ["aa ", "aab", "aa"], ['a', A.gems[key1].id, 0, 'b', 280, 0])
		    }
        }
    }
    stick = 280
    for(var key1 in A.plates){
    	for(var key4 in A.rods){
    	    for(var key5 in A.solderings){
    	        for(var key6 in A.bolts){
    	            if(A.plates[key1].mat == A.solderings[key5].mat && A.rods[key4].mat == A.solderings[key5].mat && A.bolts[key6].mat == A.solderings[key5].mat){
    	                CreateRecipeWithTool({id:A.solderings[key5].id, count:1, data:0}, [
                       "as ", 
                       "cab", 
                       " bb"], ['a', A.rods[key4].id, 0, 'b', A.plates[key1].id, 0, 'c', A.bolts[key6].id, 0], [screwdrivers], 2)
                    }
                }
            }
        }  
    	for(var key2 in A.cutters){
    	    for(var key3 in A.bolts){
              if(A.plates[key1].mat == A.cutters[key2].mat && A.bolts[key3].mat == A.cutters[key2].mat){
                	for(var key4 in A.rods){
                	    if(A.rods[key4].mat==A.cutters[key2].mat){
					        stick = A.rods[key4].id
			            }
			        }
                    CreateRecipeWithTool({id:A.cutters[key2].id, count:1, data:0}, ["d d", "fdh", "cbc"], ['c', stick, 0, 'd', A.plates[key1].id, 0, 'b', A.bolts[key3].id, 0], [hammers, files], 2);
                }
            }
        }
        stick = 280
        for(var key2 in A.knifes){
            if(A.plates[key1].mat == A.knifes[key2].mat){
            	for(var key3 in A.rods){
				    if(A.rods[key3].mat==A.knifes[key2].mat){
					    stick = A.rods[key3].id
			        }
		        }
                CreateRecipeWithTool({id:A.knifes[key2].id, count:1, data:0}, ["h ", "af", "b "], ['a', A.plates[key1].id, 0, 'b', stick, 0], [hammers, files], 2);
            }
        }
        stick = 280
        for(var key2 in A.saws){
            if(A.plates[key1].mat == A.saws[key2].mat){
            	for(var key3 in A.rods){
				    if(A.rods[key3].mat==A.saws[key2].mat){
					    stick = A.rods[key3].id
			        }
		        }
                CreateRecipeWithTool({id:A.saws[key2].id, count:1, data:0}, ["bbb", "aab", "fh "], ['a', A.plates[key1].id, 0, 'b', 280, 0], [hammers, files], 2);
            }
        }
    }
    stick = 280
    for(var key1 in A.ingots){
    	for(var key2 in A.wrenchs){
            if(A.ingots[key1].mat == A.wrenchs[key2].mat){
                CreateRecipeWithTool({id:A.wrenchs[key2].id, count:1, data:0}, ["aha", "aaa", " a "], ['a', A.ingots[key1].id, 0], [hammers], 2);
            }
        }
		for(var key2 in A.hammers){
			if(A.ingots[key1].mat == A.hammers[key2].mat){
			    Recipes.addShaped({id:A.hammers[key2].id, count:1, data:0}, ["aa ", "aab", "aa"], ['a', A.ingots[key1].id, 0, 'b', stick, 0]);
            }
        }
        for(var key2 in A.mortars){
        	if(A.ingots[key1].mat == A.mortars[key2].mat){
                Recipes.addShaped({id:A.mortars[key2].id, count:1, data:0}, [" a ", "cac", " c "], ['a', A.ingots[key1].id, 0, 'c', 1, 0]);
            }
        }
        stick = 280
        for(var key2 in A.files){
        	if(A.ingots[key1].mat == A.files[key2].mat){
                CreateRecipeWithTool({id:A.files[key2].id, count:1, data:0}, ["a ", "ah", "b "], ['a', A.ingots[key1].id, 0, 'b', stick, 0], [hammers], 2);
                //alert(A.files[key2].id)
            }
        }
    }
    stick = 280
    for(var key3 in A.long_rods){
        for(var key2 in A.screwdrivers){
        	if(A.long_rods[key3].mat == A.screwdrivers[key2].mat){
        	    for(var key4 in A.rods){
		            if(A.rods[key4].mat==A.screwdrivers[key2].mat){
		                stick = A.rods[key4].id
			        }
                }
        	    CreateRecipeWithTool({id:A.screwdrivers[key2].id, count:1, data:0}, [" fd", " dh", "c  "], ['c', stick, 0, 'd', A.long_rods[key3].id, 0], [hammers, files], 2);
                //alert(A.screwdrivers[key2].id)
            }
        }
    }
})

IDRegistry.genItemID("flintpickaxe");
Item.createItem("flintpickaxe", "Кремневая кирка", {name:"flint_pickaxe"}, {stack:1});

IDRegistry.genItemID("flintsword");
Item.createItem("flintsword", "Кремневый меч", {name:"flint_sword"}, {stack:1});

IDRegistry.genItemID("flintaxe");
Item.createItem("flintaxe", "Кремневый топор", {name:"flint_axe"}, {stack:1});

IDRegistry.genItemID("flintshovel");
Item.createItem("flintshovel", "Кремневая лопата", {name:"flint_shovel"}, {stack:1});

IDRegistry.genItemID("flinthoe");
Item.createItem("flinthoe", "Кремневая мотыга", {name:"flint_hoe"}, {stack:1});

if(Config.hardmode){
//tools
IDRegistry.genItemID("stonepickaxe");
Item.createItem("stonepickaxe", "Каменная кирка", {name:"stone_pickaxe"}, {stack:1});

IDRegistry.genItemID("stonesword");
Item.createItem("stonesword", "Каменный меч", {name:"stone_sword"}, {stack:1});

IDRegistry.genItemID("stoneaxe");
Item.createItem("stoneaxe", "Каменный топор", {name:"stone_axe"}, {stack:1});

IDRegistry.genItemID("stoneshovel");
Item.createItem("stoneshovel", "Каменная лопата", {name:"stone_shovel"}, {stack:1});

IDRegistry.genItemID("stonehoe");
Item.createItem("stonehoe", "Каменная мотыга", {name:"stone_hoe"}, {stack:1});


IDRegistry.genItemID("woodpickaxe");
Item.createItem("woodpickaxe", "Деревянная кирка", {name:"wood_pickaxe"}, {stack:1});

IDRegistry.genItemID("woodsword");
Item.createItem("woodsword", "Деревянный меч", {name:"wood_sword"}, {stack:1});

IDRegistry.genItemID("woodaxe");
Item.createItem("woodaxe", "Деревянный топор", {name:"wood_axe"}, {stack:1});

IDRegistry.genItemID("woodshovel");
Item.createItem("woodshovel", "Деревянная лопата", {name:"wood_shovel"}, {stack:1});

IDRegistry.genItemID("woodhoe");
Item.createItem("woodhoe", "Деревянная мотыга", {name:"wood_hoe"}, {stack:1});

IDRegistry.genItemID("woodpickaxe");
Item.createItem("woodpickaxe", "Деревянная кирка", {name:"wood_pickaxe"}, {stack:1});

var cwood = {durability: 12, level: 1, efficiency:2.5, damage: 2, enchantability: 16};
var cstone = {durability: 38, level: 2, efficiency:3.75, damage: 2, enchantability: 16};
var cflint = {durability: 114, level: 2, efficiency:3.5, damage: 2, enchantability: 16};

ToolAPI.setTool(ItemID.stonepickaxe, cstone, ToolType.pickaxe);
ToolAPI.setTool(ItemID.stonesword, cstone, ToolType.sword);
ToolAPI.setTool(ItemID.stoneaxe, cstone, ToolType.axe);
ToolAPI.setTool(ItemID.stoneshovel, cstone, ToolType.shovel);
ToolAPI.setTool(ItemID.stonehoe, cstone, ToolType.hoe);

ToolAPI.setTool(ItemID.woodpickaxe, cwood, ToolType.pickaxe);
ToolAPI.setTool(ItemID.woodsword, cwood, ToolType.sword);
ToolAPI.setTool(ItemID.woodaxe, cwood, ToolType.axe);
ToolAPI.setTool(ItemID.woodshovel, cwood, ToolType.shovel);
ToolAPI.setTool(ItemID.woodhoe, cwood, ToolType.hoe);
}else{
	var cflint = {durability: 228, level: 2, efficiency:4, damage: 2, enchantability: 16};
}

ToolAPI.setTool(ItemID.flintpickaxe, cflint, ToolType.pickaxe);
ToolAPI.setTool(ItemID.flintsword, cflint, ToolType.sword);
ToolAPI.setTool(ItemID.flintaxe, cflint, ToolType.axe);
ToolAPI.setTool(ItemID.flintshovel, cflint, ToolType.shovel);
ToolAPI.setTool(ItemID.flinthoe, cflint, ToolType.hoe);




// file: common/items/materialRegister.js

var stones = {isLittleOre: true, isDust:true, isTinyDust: true, isSmallDust:true, generateRecipes:true}
var iron = {isGear: true, isDust:true, isPlate:true, isNugget:true, isChunk:true, isTinyDust:true, isSmallDust:true, isBolt:true, isScrew: true, isMachineBlock: true, isRing: true,  isModule:true, isRod:true, isLongRod:true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust:true, isPureDust: true}
var gold = {isGear: true, isDust:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isBolt:true, isScrew: true, isMachineBlock: true, isRing: true,  isModule:true, isRod:true, isLongRod:true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust:true, isPureDust: true}

const GetNaturalMetallsParams = function(){
	return {isTools: true, isModule: true, isBolt: true, isScrew: true, isGear: true, isRing: true, isMachineBlock: true, isImpureDust:true, isPureDust: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isRod:true, isLongRod:true, isBlock: true, isWire:true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetRadMetallsParams = function(){
	return {isTools: true, isImpureDust:true, isPureDust: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isBlock: true, isCasing:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetNoMetallsParams = function(par){
    return {isGem: par, isBlock: true, isDust:true, isImpureDust: true, isPureDust: true, isChunk: true, isTinyDust: true, isSmallDust: true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}
const GetAlloyParams = function(){
	return {isTools: true, isModule: true, isBolt: true, isScrew: true, isGear: true, isRing: true, isMachineBlock: true, isDust:true, isIngot:true, isPlate:true, isNugget:true, isChunk: true, isTinyDust: true, isSmallDust: true, isRod:true, isLongRod:true, isBlock: true, isWire:true, isCasing:true}
}
const GetGemsParams = function(par){
	return {isDust: true, isTinyDust: true, isSmallDust: true, generateRecipes:true, isImpureDust:true, isPureDust: true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isGem: par}
}
const GetCompoundParams = function(arr, par){
	return {isIngot: true, isDust: true, isTinyDust: true, isSmallDust: true, isImpureDust: true, isPureDust: true, generateRecipes:true, isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true}
}

//Callback.addCallback("PostLoaded", function(){
ATMat.MaterialRegister("Stone", stones, {lvl:2, temp: 1000, long: 10}, "#FF9B9B9B")
ATMat.MaterialRegister("Red_Granit", stones, {lvl:2, temp: 1000, long: 10}, "#FF2A272B")
ATMat.MaterialRegister("Black_Granit", stones, {lvl:3, temp: 1000, long: 10}, "#FF700000")

//ATMat.MaterialRegister("Test_No_Metall", GetNoMetallsParams(0, []), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Alloy", GetAlloyParams(), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Metall", GetNaturalMetallsParams([]), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Gem", GetGemsParams([], true), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Compound", GetCompoundParams([], false), {temp: 0, long: 0, lvl: 0})
//ATMat.MaterialRegister("Test_Rad_Metall", GetRadMetallsParams([]), {temp: 0, long: 0, lvl: 0})

ATMat.MaterialRegister("Sulfur", GetNoMetallsParams(true), {block: "no_metall", adRes: ["Manganese", "Lignite"], gemType: "metallic", fuel: 800, temp:200, long:10, lvl:1}, "#FE9D9F00")
ATMat.MaterialRegister("Lignite", GetNoMetallsParams(true), {block: "no_metall", adRes: ["Lignite", "Coal"], gemType:"lignite", fuel: 1000, temp:200, long:10, lvl:1}, "#FF563C3C")
ATMat.MaterialRegister("Lapis", {isDust: true, isSmallDust:true, isCrushed: true,  isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust: true, isPureDust: true}, {block: "no_metall", adRes: ["Nickel", "Saphire"], compound: ["Aluminium", "Manganese", "Saphire"], temp:600, long:10, lvl:1}, "#FF1F50B8")
ATMat.MaterialRegister("Redstone", {isCrushed: true, isCrushedPurified: true, isCrushedCentrifuged:true, isImpureDust: true, isPureDust: true}, {block: "no_metall", block: "no_metall", adRes: ["Tetrahedrite", "Ruby"], temp:600, long:10, lvl:1}, "#FF0018")
ATMat.MaterialRegister("Coal", {isCrushed: true, isCrushedPurified: true, isCrushedCenrifuged:true, isSmallDust:true, isDust:true, isImpureDust:true, isPureDust: true}, {adRes: ["Lignite", "Graphite"], fuel: 1600, lvl:1, temp:200, long:10}, "#FF363636")

ATMat.MaterialRegister("Rubber", {isGear: true, isDust:true, isSmallDust:true, isIngot:true, isRod:true, isLongRod:true, isNugget:true, isPlate:true, isRing:true, generateRecipes:true, isWire:true}, {temp:200, long:10, lvl:1}, "#FF000000")

ATMat.MaterialRegister("Steel", GetAlloyParams(), {block: "metall", tool: {durability: 400, level: 3, efficiency:5.2, damage: 4, enchantability: 32, def: 12}, temp:steelTemp, long:steelLong, lvl:2}, "#FF585766")
ATMat.MaterialRegister("Bronze", GetAlloyParams(), {block: "metall", tool: {durability: 250, level: 2, efficiency:4.8, damage: 3, enchantability: 32}, temp:1100, long:10, lvl:2}, "#FFCF752D")
ATMat.MaterialRegister("Stainless", GetAlloyParams(), {block: "metall", tool: {durability: 625, level: 5, efficiency:6, damage: 5, enchantability: 32, def: 16}, temp:1800, long:260, lvl:3}, "#FFDDDDDD")
ATMat.MaterialRegister("Electrum", GetAlloyParams(), {block: "metall", tool: {durability: 300, level: 2, efficiency:4.2, damage: 2, enchantability: 32, def: 8}, temp: 1108, long: 10, lvl: 2}, "#FFD36B")
ATMat.MaterialRegister("Invar", GetAlloyParams(), {block: "metall", tool: {durability: 320, level: 2, efficiency:4.5, damage: 2, enchantability: 32, def: 9}, temp: 1513, long: 34, lvl: 2}, "#FF9B9376")

ATMat.MaterialRegister("Zinc", GetNaturalMetallsParams(), {block: "metall", adRes: ["Antimony", "Manganese"], tool: {durability: 200, level: 2, efficiency:3.8, damage: 2, enchantability: 24, def: 6}, temp:1900,  long:300, lvl:3}, "#FFBDFB")
ATMat.MaterialRegister("Chrome", GetNaturalMetallsParams(), {block: "metall", adRes: ["Zinc", "Manganese"], tool: {durability: 230, level: 2, efficiency:4.125, damage: 2, enchantability: 24, def: 6}, temp:1900,  long:300, lvl:3}, "#FFF8E9FF")
ATMat.MaterialRegister("Aluminum", GetNaturalMetallsParams(), {block: "metall", adRes: ["Bauxite", "Iron"], tool: {durability: 185, level: 3, efficiency:4.4, damage: 3, enchantability: 32, def: 8}, temp:600, long:10, lvl:2}, "#FF657EEA")
ATMat.MaterialRegister("Titanium",  GetNaturalMetallsParams(), {block: "metall", adRes: ["Bauxite", "Aluminium"], tool: {durability: 2250, level: 5, efficiency:5.0, damage: 4, enchantability: 24, def: 16}, temp:1600, long:240, lvl:3}, "#FFBAC5F5")
ATMat.MaterialRegister("Tungsten", GetNaturalMetallsParams(), {block: "metall", adRes: ["Aluminium", "Manganese"], tool: {durability: 4525, level: 6, efficiency:4.75, damage: 3, enchantability: 32, def: 20}, temp:3400, long:400, lvl:4}, "#000A49") 
ATMat.MaterialRegister("Copper", GetNaturalMetallsParams(), {block: "metall", adRes: ["Malachite", "Tetrahedrite"], tool: {durability: 150, level: 1, efficiency:3.8, damage: 1, enchantability: 16, def: 6}, temp:copperTemp, long:copperLong, lvl:1}, "#FF7A3B")
ATMat.MaterialRegister("Tin", GetNaturalMetallsParams(), {block: "metall", adRes: ["Casseterute", "Iron"], tool: {durability: 120, level: 1, efficiency:3, damage: 1, enchantability: 16, def: 5}, temp:tinTemp, long:tinLong, lvl:1}, "#B1B1B1")
ATMat.MaterialRegister("Manganese", GetNaturalMetallsParams(), {block: "metall", adRes: ["Tungsten", "Zinc"], tool: {durability: 180, level: 1, efficiency:3, damage: 1, enchantability: 16, def:4}, temp:1300, long:20, lvl:2}, "#FFB969")
ATMat.MaterialRegister("Nickel",  GetNaturalMetallsParams(), {block: "metall", adRes: ["Iron", "Aluminium"], tool: {durability: 80, level: 1, efficiency:2.6, damage: 1, enchantability: 16, def: 5}, temp:1400, long:60, lvl:1}, "#FFBFC2EC")
ATMat.MaterialRegister("Antimony", GetNaturalMetallsParams(), {block: "metall", adRes: ["Chrome", "Zinc"], tool: {durability: 100, level: 1, efficiency:2.2, damage: 1, enchantability: 16, def: 3}, temp:1600, long:30, lvl:1}, "#A9C1C4")
ATMat.MaterialRegister("Silver", GetNaturalMetallsParams(), {block: "metall", adRes: ["Gold", "Platinum"], tool: {durability: 190, level: 2, efficiency:3.8, damage: 2, enchantability: 32, def: 8}, temp:900, long:10, lvl:1}, "#D3D3D3")
ATMat.MaterialRegister("Lead", GetNaturalMetallsParams(), {block: "metall", adRes: ["Galena", "Zinc"], tool: {durability: 220, level: 1, efficiency:2.75, damage: 1, enchantability: 16, def: 6}, temp:300, long:10, lvl:1}, "#360058")
ATMat.MaterialRegister("Platinum", GetNaturalMetallsParams(), {block: "metall", adRes: ["Gold", "Iridium"], tool: {durability: 400, level: 3, efficiency:4, damage: 3, enchantability: 32, def: 10}, temp: 1290, long: 20, lvl: 3}, "#D3FFFF")
ATMat.MaterialRegister("Iridium", GetNaturalMetallsParams(), {block: "metall", adRes: ["Diamond", "Platinum"], tool: {durability: 775, level: 4, efficiency:5, damage: 5, enchantability: 32, def: 12}, temp: 3400, long: 200, lvl: 4}, "#FFE0E0E0")

ATMat.MaterialRegister("Iron", iron, {adRes: ["Aluminium", "Nickel"], temp: 1000, long: 10, lvl:2}, "#A9ACA4")
ATMat.MaterialRegister("Gold", gold, {adRes: ["Silver", "Platinum"], temp: 1000, long: 10, lvl:1}, "#FFFDFF47")

ATMat.MaterialRegister("Diamond", GetGemsParams(), {adRes: ["Graphite", "Chrome"], temp:4000, long:400, lvl:3}, "#00D0E9")
ATMat.MaterialRegister("Ruby", GetGemsParams(true), {gemType:"opal", compound: ["Chrome", "Aluminium"], temp:2000, long:400, lvl:3}, "#FF0200")
ATMat.MaterialRegister("Saphire", GetGemsParams(true), {gemType:"rectangle", compound: ["Aluminium", "Manganese"], temp:2300, long:400, lvl:3}, "#3200FF")
ATMat.MaterialRegister("Emerald", GetGemsParams(), {compound: ["Malachite", "Manganese"], temp:1400, long:400, lvl:3}, "#13D800")

ATMat.MaterialRegister("Bauxite", GetCompoundParams(), {compound: ["Aluminium", "Titanium"], temp:1446, long: 40, lvl:1}, "#680007")
ATMat.MaterialRegister("Magnetite", GetCompoundParams(), {compound: ["Iron", "Gold"], temp:1200, lvl:2, long:10}, "#393939")
ATMat.MaterialRegister("Tetrahedrite", GetCompoundParams(), {compound: ["Copper"], temp:copperTemp, long:copperLong, lvl:1}, "#781F1A")
ATMat.MaterialRegister("Galena", GetCompoundParams(), {compound: ["Lead", "Silver"], temp: 800, long: 10, lvl:1}, "#FF271F2E")
ATMat.MaterialRegister("Malachite", GetCompoundParams(), {compound: ["Manganese", "Emerald"], temp: 1000, long: 10, lvl: 2}, "#698C43")
ATMat.MaterialRegister("Cassiterite", GetCompoundParams(), {compound: ["Tin", "Silver"], temp: 309, long: 10, lvl: 1}, "#9F9F9F")
ATMat.MaterialRegister("Graphite", GetCompoundParams(), {compound: ["Coal", "Diamond"], temp: 1211, long: 30, lvl: 2}, "#283030")
ATMat.MaterialRegister("Brown_Limonite", GetCompoundParams(), {compound: ["Iron", "Yellow_Limonite"], temp: 1000, long: 10, lvl:2}, "#FFA55300")
ATMat.MaterialRegister("Yellow_Limonite", GetCompoundParams(), {compound: ["Iron", "Brown_Limonite"], temp: 1000, long: 10, lvl:2}, "#FFA5A500")
ATMat.MaterialRegister("Banded_Iron", GetCompoundParams(), {compound: ["Iron"], temp: 1000, long: 10, lvl:2}, "#FF513232")

ATMat.MaterialRegister("Thorium", GetRadMetallsParams(), {block: "metall", adRes: ["Palladium", "Plutonium"], tool: {durability: 350, level: 5, efficiency:4, damage: 7, enchantability: 0}, temp: 2014, long: 39, lvl: 3, def: 10, rad: 1}, "#000346")
ATMat.MaterialRegister("Uranium", GetRadMetallsParams(), {block: "metall", adRes: ["Uranium", "Plutonium"], tool: {durability: 450, level: 4, efficiency:4.2, damage: 5, enchantability: 0}, temp: 1648, long: 30, lvl: 3, def: 8, rad: 0.7}, "#59B000")
ATMat.MaterialRegister("Plutonium", GetRadMetallsParams(), {block: "metall", adRes: ["Thorium", "Palladium"], tool: {durability: 200, level: 4, efficiency:3, damage: 10, enchantability: 0}, temp: 2451, long: 46, lvl: 3, def: 6, rad: 0.8}, "#FF0008")
ATMat.MaterialRegister("Palladium", GetRadMetallsParams(), {block: "metall", adRes: ["Thorium", "Uranium"], tool: {durability: 310, level: 4, efficiency:4, damage: 6, enchantability: 0}, temp: 1894, long: 55, lvl: 3, def: 9, rad: 0.5}, "#B3BBAA")

ATMat.RegisterImpaleDust(331, [ItemID.dustNikel, 1, ItemID.dustTinyRuby, 1], ATMat.RetArg("dusts", "Redstone", "lvl"))




// file: common/items/ids.js

//id items
var irhum = ItemID.IronHammer;
var irtung = ItemID.IronTungstensteel;
var mort = ItemID.StoneMortar;
var litst = ItemID.Stone
var irpl = ItemID.plateIron;
var brpl = ItemID.plateBronze;
var gpl = ItemID.plateGold;
var litir = ItemID.Iron
var litcopp = ItemID.Copper
var littin = ItemID.Tin
var litg = ItemID.Gold
var igbr = ItemID.ingotBronze;
var igst = ItemID.ingotSteel;
var duir = ItemID.dustIron;
var dug = ItemID.dustGold;
var ducopp = ItemID.dustCopper;
var dutin = ItemID.dustTin;
var dubr = ItemID.dustBronze;
var sduir = ItemID.smallDustIron;
var sdug = ItemID.smallDustGold;
var sducopp = ItemID.smallDustCopper;
var sdutin = ItemID.smallDustTin;
var brmod = ItemID.moduleBronze;
var brbolt = ItemID.boltBronze
ItemID.nuggetGold = 371
ItemID.ingotGold = 266
ItemID.ingotIron = 265
ItemID.coal = 263
 
var lava = ItemID.itemlava;




// file: common/items/other.js

//???
IDRegistry.genItemID("itemlava");
Item.createItem("itemlava", "item_lava", {name:"lava"}, {isTech:true})

IDRegistry.genItemID("dataOrb");
Item.createItem("dataOrb", "Data Orb", {name:"dataOrb"})

IDRegistry.genItemID("integratedCirquit");
Item.createItem("integratedCirquit", "Integrated Cirquit", {name:"integratedCirquit"})

IDRegistry.genItemID("lapotronicOrb");
Item.createItem("lapotronicOrb", "Lapotronic Orb", {name:"lapotronicOrb"})


//Translation.addTranslation("Empty Shape Plate", {ru: "Пустая пластина формы",  zh: "空盘形式"});
IDRegistry.genItemID("EmptyShapePlate");
Item.createItem("EmptyShapePlate", "Empty Shape Plate", {name: "EMPTY"});

//Translation.addTranslation("Mold (Cylinder)", {ru: "Прессформа (Цилиндр)",  zh: "模(气缸)"});
IDRegistry.genItemID("MoldCylinder");
Item.createItem("MoldCylinder", "Mold (Cylinder)", {name: "CYLINDER"});

//Translation.addTranslation("Mold (Anvil)", {ru: "Прессформа (Наковальня)",  zh: "模(砧)"});
IDRegistry.genItemID("MoldAnvil");
Item.createItem("MoldAnvil", "Mold (Anvil)", {name: "ANVIL"});

//Translation.addTranslation("Mold (Plate)", {ru: "Прессформа (Пластина)",  zh: "模(板)"});
IDRegistry.genItemID("MoldPlate");
Item.createItem("MoldPlate", "Mold (Plate)", {name: "MPLATE"});

//Translation.addTranslation("Mold (Ingot)", {ru: "Прессформа (Слиток)",  zh: "模(锭)"});
IDRegistry.genItemID("MoldIngot");
Item.createItem("MoldIngot", "Mold (Ingot)", {name: "MINGOT"});

//Translation.addTranslation("Mold (Nuggets)", {ru: "Прессформа (Самородок)",  zh: "模(金块)"});
IDRegistry.genItemID("MoldNuggets");
Item.createItem("MoldNuggets", "Mold (Nuggets)", {name: "MNUGGET"});

//Translation.addTranslation("Mold (Block)", {ru: "Прессформа (Блок)",  zh: "模(单元)"});
IDRegistry.genItemID("MoldBlock");
Item.createItem("MoldBlock", "Mold (Block)", {name: "MBLOCK"});

//Translation.addTranslation("Mold (Ball)", {ru: "Прессформа (Шар)",  zh: "模(球)"});
IDRegistry.genItemID("MoldBall");
Item.createItem("MoldBall", "Mold (Ball)", {name: "MBALL"});




// file: common/blocks/sheathings.js

IDRegistry.genBlockID("IronSheathing");
Block.createBlock("IronSheathing", [
	{name: "Standard Machine Casing", texture: [["iron_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.IronSheathing, "stone");
Block.setDestroyLevel(BlockID.IronSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.IronSheathing, "stone", 4, true);

IDRegistry.genBlockID("SteelSheathing");
Block.createBlock("SteelSheathing", [
	{name: "Reinforced Machine Casing", texture: [["steel_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.SteelSheathing, "stone");
Block.setDestroyLevel(BlockID.SteelSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.SteelSheathing, "stone", 4, true)

IDRegistry.genBlockID("ChromeSheathing");
Block.createBlock("ChromeSheathing", [
	{name: "Advanced Machine Casing", texture: [["chrome_sheathing", 0]], inCreative: true}], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.ChromeSheathing, "stone");
Block.setDestroyLevel(BlockID.ChromeSheathing, 3);
ToolAPI.registerBlockMaterial(BlockID.ChromeSheathing, "stone", 4, true)

var irsh = BlockID.IronSheathing
var chsh = BlockID.ChromeSheathing
var stsh = BlockID.SteelSheathing




// file: common/blocks/machines/multiblocks/template.js

var FurnaceTemplate = function(FuelEffPct, MaxTemp, RecipesEffPct, gui, timer) { return {
    defaultValues: {
        progress1:0,
        prog1end:0,
        progress2:0,
        prog2end:0,
        fire:0, 
        burn:1,
        temp:0,
        lava:0,
        keys:0,
        result1:0,
        result2:0,
        maxTemp:0,
        fuelEfr:0,
        timer: 0,
	},
    container:gui,
    click: function(){
    	Game.prevent()
    
        this.container.openAs(gui)
        //Game.message("Duck")
       /*var key = this.data.MAPIkey
        var m = this
        var side = 0
        var bl = 0
        //for(var side in MAPI.multiblocks[key].struc){
        	bl=0
            //Game.message(side);
            for(var keyi in MAPI.multiblocks[key].struc[side]){ 
            	World.setBlock(m.x+MAPI.multiblocks[key].struc[side][keyi][0], m.y+MAPI.multiblocks[key].struc[side][keyi][1], m.z+MAPI.multiblocks[key].struc[side][keyi][2], MAPI.multiblocks[key].struc[side][keyi][3])
            }
        //}         */         	
    },
    tick: function(){

		var sourseSlot1 = this.container.getSlot("slot1");
		var sourseSlot2 = this.container.getSlot("slot2");
		var resultSlot1 = this.container.getSlot("slot4");
		var resultSlot2 = this.container.getSlot("slot5");
		var metallSlot = this.container.getSlot("slot3");
		var fuelSlot = this.container.getSlot("slot6");
	    
	    //alert(this.data.MAPIact)
         if(this.data.MAPIact==true){
         	if(AcApi){
         	    //this.id == BlockID.compactedfurnace ? AcApi.AchievementAPI.give("altech", "comp_furnace") : null
                 //this.id == BlockID.blastfurnace ? AcApi.AchievementAPI.give("altech", "blast_furnace") : null
             }
            this.container.setText("struct", "");
				//alert(Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data));
				if(fuelSlot.id > 0 && Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data) && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) && this.data.fire==0){
					fuelSlot.count--;
					this.data.fire=Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data)
					this.data.burn=this.data.fire;
					this.data.fuelEff=1
					this.container.validateAll()
					//Game.message(this.data.fuelEff)
			}
			if(this.data.fire>0){
				this.data.timer = 0
				this.data.fire--;
				this.data.temp+=this.data.fuelEff
				this.activate()
			}else{ this.deactivate() }
	
			if(this.data.temp>MaxTemp){
				this.data.temp=MaxTemp;
			}

			for(var key in furnaceRecipes){
				if(
				furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0
				&&
				this.data.temp>=furnaceRecipes[key].temp){
					sourseSlot1.count-=furnaceRecipes[key].sS1[1];
					sourseSlot2.count-=furnaceRecipes[key].sS2[1];
					this.data.prog1end=round(furnaceRecipes[key].long*20/ 1.33 / RecipesEffPct * 100, 1)
					this.data.keys=key
					this.data.maxtemp = furnaceRecipes[key].temp
					this.container.validateAll();
				    //Game.message(round(furnaceRecipes[key].long*20/ 1.33 / 100 * RecipesEffPct, 1))
				}else if(
                furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0){
				    this.container.setText("sec", "Time: "+round(furnaceRecipes[key].long / RecipesEffPct * 100, 1))
			        this.container.setText("needTemp", "Need temp: "+furnaceRecipes[key].temp);
			        this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[key].rS1[0], furnaceRecipes[key].rS1[1]));
			        break
			    }
			}
		   if(this.data.progress1<this.data.prog1end &&
                this.data.temp>=this.data.maxtemp &&this.data.lava==0){
                this.data.progress1++;
            }
           if(this.data.prog1end<=this.data.progress1&&this.data.lava==0&&this.data.prog1end>0){
                this.data.lava=1;
                this.data.prog2end=round(furnaceRecipes[this.data.keys].long*20 / RecipesEffPct * 100 - this.data.prog1end, 1)
                //Game.message(this.data.prog1end)
                //Game.message(this.data.prog2end)
            }
            if(this.data.progress2<this.data.prog2end &&
                this.data.temp>=this.data.maxtemp &&this.data.lava==1){
                this.data.progress2++;
                
            }
    
			if(this.data.prog2end<=this.data.progress2&&this.data.lava==1&&this.data.prog2end>0&&
			(resultSlot1.id==0||resultSlot1.id==furnaceRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==furnaceRecipes[this.data.keys].rS2[0])&&
            (resultSlot1.count==0||resultSlot1.count<64-furnaceRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-furnaceRecipes[this.data.keys].rS2[1]) ){
				resultSlot1.id = furnaceRecipes[this.data.keys].rS1[0]
				resultSlot1.count += furnaceRecipes[this.data.keys].rS1[1]
				resultSlot1.data = furnaceRecipes[this.data.keys].rS1[2]
				resultSlot2.id = furnaceRecipes[this.data.keys].rS2[0]
				resultSlot2.count += furnaceRecipes[this.data.keys].rS2[1]
				resultSlot2.data = furnaceRecipes[this.data.keys].rS2[2]
				this.data.lava=0;
				this.data.progress1=0;
				this.data.progress2=0;
				this.data.prog1end=0;
				this.data.prog2end=0;
				this.container.validateAll();
			}
			
			if(this.data.prog1end > 0){
			    this.container.setText("secLeft", "Left time: "+round((furnaceRecipes[this.data.keys].long *20 / RecipesEffPct * 100-this.data.progress1-this.data.progress2)/20, 1));
			}else{
				this.container.setText("secLeft", "Left time: ");
		    }
			
			if(this.data.progress1 > 0){
		        this.container.setText("sec", "Time: "+round(furnaceRecipes[this.data.keys].long / RecipesEffPct * 100, 1))
			    this.container.setText("needTemp", "Need temp: "+furnaceRecipes[this.data.keys].temp);
			    this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[this.data.keys].rS1[0], furnaceRecipes[this.data.keys].rS1[1]));
			}else if(sourseSlot1.id==0 && sourseSlot2.id==0){
			    this.container.setText("sec", "Time: ");
			    this.container.setText("needTemp", "Need temp: ");
			    this.container.setText("result", "Result: ");
			}
			
	    }else{
		    this.deactivate()
            this.data.fire=0; 
            this.container.setText("struct", "Incorrect struct");
            this.container.setText("sec", "");
			this.container.setText("needTemp", "");
			this.container.setText("result", "");
			this.container.setText("secLeft", "");
        }
	
	    if(this.data.fire==0 && this.data.timer < timer * 20){
			this.data.timer++
		}
		if(this.data.timer == timer * 20 && this.data.temp>0){
			this.data.temp--
		}

		if(this.data.lava==1){
			metallSlot.id=lava;
			metallSlot.count=1;
		}else{
			metallSlot.id=0;
			metallSlot.count=0
		}

		this.container.setText("temp", "t: "+Math.floor(this.data.temp)+" / "+MaxTemp+" C");
		this.container.setScale("fire", this.data.fire/this.data.burn);
		this.container.setScale("progbar1", this.data.progress1/this.data.prog1end)
		this.container.setScale("progbar2", this.data.progress2/this.data.prog2end);
		},
		
		init: MachineRenderer.initModel,
		activate: MachineRenderer.activateMachine,
	    deactivate: MachineRenderer.deactivateMachine,
	    destroy: function(){ this.deactivate; if(this.container.getSlot("slot3").id){ this.container.getSlot("slot3").id = this.container.getSlot("slot3").data = this.container.getSlot("slot3").count = 0 } }
	}
}




// file: common/blocks/machines/multiblocks/blast_Furnace.js

var bFuelEffPct = Config.blastFurnaceFuelEff
var bRecipesEffPct = Config.blastFurnaceRecEff
var bMaxTemp = Config.blastFurnaceMaxTemp
var bTimer = Config.blastFurnaceTimer

//mechs
IDRegistry.genBlockID("blastfurnace");
Block.createBlockWithRotation("blastfurnace", [
	{name: "Blast furnace", texture: [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blastfurnace, "stone");
Block.setDestroyLevel(BlockID.blastfurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.blastfurnace, "stone", 3, true);
MachineRenderer.setStandartModel(BlockID.blastfurnace, [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], true)
MachineRenderer.registerRenderModel(BlockID.blastfurnace, 0, [["blast_furnace_block", 0], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ], ["blast_furnace", 1], [ "blast_furnace_block", 0 ], [ "blast_furnace_block", 0 ]], true)
	
IDRegistry.genBlockID("bronzeblock");
Block.createBlock("bronzeblock", [
	{name: "Blast furnace block", texture: [["blast_furnace_block", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone");
Block.setDestroyLevel(BlockID.blastfurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone", 3, true); 
	
Block.registerDropFunction("blastfurnace", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})
	
Block.registerDropFunction("bronzeblock", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})
	
var b = BlockID.bronzeblock;

var blastfurnacestruct = [[	
   [0, -1, 1, [b]], 
   [0, -1, 0, [b]],
   [0, -1, -1, [b]],
   
   [1, -1, 1, [b]],
   [1, -1, 0, [b]],
   [1, -1, -1, [b]],
   
   [2, -1, 1, [b]],
   [2, -1, 0, [b]],
   [2, -1, -1, [b]],
   
   [0, 0, 1, [b]], 
   [0, 0, -1, [b]],
   
   [1, 0, 1, [b]],
   [1, 0, 0, [0]],
   [1, 0, -1, [b]],
   
   [2, 0, 1, [b]],
   [2, 0, 0, [b]],
   [2, 0, -1, [b]],
   
   [0, 1, 1, [b]], 
   [0, 1, 0, [b]],
   [0, 1, -1, [b]],
   
   [1, 1, 1, [b]],
   [1, 1, 0, [0]],
   [1, 1, -1, [b]],
   
   [2, 1, 1, [b]],
   [2, 1, 0, [b]],
   [2, 1, -1, [b]],
   
   [0, 2, 1, [b]], 
   [0, 2, 0, [b]],
   [0, 2, -1, [b]],
   
   [1, 2, 1, [b]],
   [1, 2, 0, [0]],
   [1, 2, -1, [b]],
   
   [2, 2, 1, [b]],
   [2, 2, 0, [b]],
   [2, 2, -1, [b]]
]]

var bfgui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Доменная печь"
			},
color: android.graphics.Color.rgb(0x5a, 0x11, 0x00)
		},
		inventory: {
			standart: true
		},
		background: {
	  color: android.graphics.Color.rgb(0xa2, 0x3c, 0x00)
		}
	},
	drawing: [
        {type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
        {type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
        {type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
        {type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
    ],
	elements:{
        "slot1":{type: "slot", x: 330, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot2":{type: "slot", x: 390, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
        "slot4":{type: "slot", x: 700, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot5":{type: "slot", x: 760, y: 200, size:60, bitmap:"BronzeSlot"},
        "slot6":{type: "slot", x: 360, y: 270, size:60, bitmap:"BronzeSlot"},
        "progbar1":{type: "scale", x:460, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
        "progbar2":{type: "scale", x:610, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
        "fire":{type: "scale", x:436, y:280, direction:1, bitmap: "fire_scale", scale:3},
        "temp":{type: "text", x:480, y:300, width:30, height:10, text: ""},
        "struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
        "sec":{type: "text", x:500, y:100, width:8, height:3, text: ""},
        "needTemp":{type: "text", x:500, y:120, width:8, height:3, text: ""},
        "secLeft":{type: "text", x:500, y:140, width:8, height:3, text: ""},
        "result":{type: "text", x:500, y:160, width:8, height:3, text: ""},
    }
});

var blastfurnacecon = FurnaceTemplate(bFuelEffPct, bMaxTemp, bRecipesEffPct, bfgui, bTimer)
MAPI.Rotate(blastfurnacestruct);
MAPI.Register(blastfurnacecon, blastfurnacestruct);
TileEntity.registerPrototype(BlockID.blastfurnace, blastfurnacecon)




// file: common/blocks/machines/multiblocks/compacted_Furnace.js

var cFuelEffPct = Config.cobbleFurnaceFuelEff
var cRecipesEffPct = Config.cobbleFurnaceRecEff
var cMaxTemp = Config.cobbleFurnaceMaxTemp
var cTimer = Config.cobbleFurnaceTimer

//mechs
IDRegistry.genBlockID("compactedfurnace");
Block.createBlockWithRotation("compactedfurnace", [
	{name: "Cobb furnace", texture: [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.compactedfurnace, "stone");
Block.setDestroyLevel(BlockID.compactedfurnace, 2);
ToolAPI.registerBlockMaterial(BlockID.compactedfurnace, "stone", 2, true);
MachineRenderer.setStandartModel(BlockID.compactedfurnace, [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], true)
MachineRenderer.registerRenderModel(BlockID.compactedfurnace, 0, [["compacted_stone", 0], ["compacted_stone", 0 ], ["compacted_stone", 0 ], ["furnace", 1], ["compacted_stone", 0 ], ["compacted_stone", 0 ]], true)
	
IDRegistry.genBlockID("compactedcobblestone");
Block.createBlock("compactedcobblestone", [
{name: "Cobb furnace block", texture: [["compacted_stone", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.compactedcobblestone, "stone");
Block.setDestroyLevel(BlockID.compactedcobblestone, 2);
ToolAPI.registerBlockMaterial(BlockID.compactedcobblestone, "stone", 2, true);

Block.registerDropFunction("compactedfurnace", function(coords, id, data, level){ 
	if(level>=1){
		return [[id, 1, data]]
	}
	return []
})

Block.registerDropFunction("compactedcobblestone", function(coords, id, data, level){ 
	if(level>=1){
		return [[id, 1, data]]
	}
	return []
})

var c = BlockID.compactedcobblestone;

var compactedfurnacestruct = [[
[-1, 0, 0, [c]],
[-1, 0, 1, [c]],
[-1, 0, 2, [c]],
[1, 0, 0, [c]],
[1, 0, 1, [c]],
[1, 0, 2, [c]],
[0, 0, 2, [c]],

[-1, 1, 1, [c]],
[1, 1, 1, [c]],
[0, 1, 2, [c]],
[0, 1, 0, [c]],

[-1, 2, 1, [c]],
[1, 2, 1, [c]],
[0, 2, 2, [c]],
[0, 2, 0, [c]],

[-1, 3, 1, [c]],
[1, 3, 1, [c]],
[0, 3, 2, [c]],
[0, 3, 0, [c]],

[-1, 4, 1, [c]],
[1, 4, 1, [c]],
[0, 4, 2, [c]],
[0, 4, 0, [c]],

[0, 0, 1, [0]],
[0, 1, 1, [0]],
[0, 2, 1, [0]],
[0, 3, 1, [0]],
[0, 4, 1, [0]],
[0, 5, 1, [0]]
]];

var cfguicon = {
	standart: {
		header:{
			text:{
				text: "Промышленная каменная печь"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
		{type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
		{type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
		{type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
		{type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"slot2":{type: "slot", x: 390, y: 200, size:60},
		"slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
		"slot4":{type: "slot", x: 700, y: 200, size:60},
		"slot5":{type: "slot", x: 760, y: 200, size:60},
		"slot6":{type: "slot", x: 360, y: 270, size:60},
		"progbar1":{type: "scale", x:460, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"progbar2":{type: "scale", x:610, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"fire":{type: "scale", x:436, y:280, direction:1, bitmap: "fire_scale", scale:3},
		"temp":{type: "text", x:480, y:300, width:30, height:10, text: ""},
		"struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"sec":{type: "text", x:500, y:100, width:8, height:3, text: ""},
        "needTemp":{type: "text", x:500, y:120, width:8, height:3, text: ""},
        "secLeft":{type: "text", x:500, y:140, width:8, height:3, text: ""},
        "result":{type: "text", x:500, y:160, width:8, height:3, text: ""},
		}
}

var cfgui = new UI.StandartWindow(cfguicon);

var compactedfurnacecon = FurnaceTemplate(cFuelEffPct, cMaxTemp, cRecipesEffPct, cfgui, cTimer)
MAPI.Rotate(compactedfurnacestruct);
MAPI.Register(compactedfurnacecon, compactedfurnacestruct);
TileEntity.registerPrototype(BlockID.compactedfurnace, compactedfurnacecon); 




// file: common/blocks/machines/multiblocks/steam_Turbine.js





// file: common/blocks/ores.js

//ores

IDRegistry.genBlockID("blackstone");
Block.createBlock("blackstone", [
	{name: "Black granite", texture: [["black_stone", 0]], inCreative: true}
], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.blackstone, "stone");
Block.setDestroyLevel(BlockID.blackstone, 4);
ToolAPI.registerBlockMaterial(BlockID.blackstone, "stone", 4, true);

IDRegistry.genBlockID("blackcobblestone");
Block.createBlock("blackcobblestone", [
	{name: "Black cobblestone", texture: [["black_cobblestone", 0]], inCreative: true}
], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.blackcobblestone, "stone");
Block.setDestroyLevel(BlockID.blackcobblestone, 4);
ToolAPI.registerBlockMaterial(BlockID.blackcobblestone, "stone", 4, true);

IDRegistry.genBlockID("redstone");
Block.createBlock("redstone", [
	{name: "Red granite", texture: [["red_stone", 0]], inCreative: true}
], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.redstone, "stone");
Block.setDestroyLevel(BlockID.redstone, 3);
ToolAPI.registerBlockMaterial(BlockID.redstone, "stone", 3, true);

IDRegistry.genBlockID("redcobblestone");
Block.createBlock("redcobblestone", [
	{name: "Red cobblestone", texture: [["red_cobblestone", 0]], inCreative: true}
], "opaque" );
ToolAPI.registerBlockMaterial(BlockID.redcobblestone, "stone");
Block.setDestroyLevel(BlockID.redcobblestone, 3);
ToolAPI.registerBlockMaterial(BlockID.redcobblestone, "stone", 3, true);

ATGen.RegisterBreed(BlockID.blackstone, 0, 16, 7, 32, 48, -1, "GenerateChunk", "black_granite", 4)
ATGen.RegisterBreed(BlockID.redstone, 0, 16, 7, 32, 48, -1, "GenerateChunk", "red_granite", 3)

    ATMat.OreRegister("Tetrahedrite", [["Tetrahedrite", 2], ["Copper", 1],  ["Chrome", 0], ["Nickel", 0]], ["Stone", "Nether", "End"], true, true, "#781F1A", "NO_METALL", 40)
    ATMat.OreRegister("Copper", [["Copper", 2],  ["Tetrahedrite", 1], ["Iron", 0], ["Nickel", 0]], ["Stone", "Nether", "End"], true, true, "#99220D", "METALL", 40)
    ATMat.OreRegister("Tin", [["Tin", 2],  ["Cassiterite", 1], ["Iron", 0], ["Aluminum", 0]], ["Stone", "red_granite", "End"], true, true, "#B3B3B3", "METALL", 40)
    ATMat.OreRegister("Iron", [["Iron", 2], ["Magnetite", 1], ["Aluminum", 1]], ["Stone", "Nether", "End"], true, true, "#D9674B", "METALL", 40)
    ATMat.OreRegister("Lead", [["Lead", 2], ["Galena", 1], ["Iron", 0], ["Tin", 0]], ["Stone", "End"], true, true, "#232329", "METALL", 40)
    ATMat.OreRegister("Silver", [["Silver", 2],  ["Casseterite", 1], ["Tin", 1], ["Nickel", 0]], ["Stone", "red_granite", "End"], true, true, "#BEBEBE", "METALL", 20, 1)
    ATMat.OreRegister("Galena", [["Galena", 2], ["Silver", 1], ["Lead", 1], ["Aluminum", 1]], ["Stone", "End"], true, true, "#FF271F2E", "METALL", 40)
    ATMat.OreRegister("Gold", [["Gold", 2], ["Magnetite", 1], ["Silver", 1]], ["Stone", "red_granite", "black_granite", "Nether", "End"], true, true, "#FFFDFF47", "METALL", 20, 1)
    ATMat.OreRegister("Coal", [["Coal", 2], ["Lignite", 1]], ["Stone", "Nether", "End"], true, true, "#1B1B1B", "COAL", 40)
    ATMat.OreRegister("Bauxite", [["Bauxite", 2], ["Aluminium", 0], ["Nickel", 1], ["Titanium", 1]], ["Stone", "black_granite", "End"], true, false, "#5C0A00", "NO_METALL", 20)
    ATMat.OreRegister("Saphire", [["Saphire", 2], ["Lapis", 1], ["Nickel", 1]], ["Stone", "red_granite", "black_granite", "End"], true, false, "#0700FF", "GEM", 10, 1)
    ATMat.OreRegister("Ruby", [["Ruby", 2], ["Chrome", 0]], ["Stone", "red_granite", "black_granite", "End"], true, false, "#FF0015", "GEM", 10, 1)
    ATMat.OreRegister("Chrome", [["Chrome", 2], ["Ruby", 0]], ["Stone", "red_granite", "black_granite", "End"], true, false, "#FF6882", "METALL", 20, 1)
    ATMat.OreRegister("Emerald", [["Emerald", 2], ["Malachite", 0], ["Chrome", 1]], ["red_granite", "black_granite", "End", "Stone"], true, false, "#19C000", "GEM", 10, 1)
    ATMat.OreRegister("Diamond", [["Diamond", 2], ["Graphite", 1]], ["Stone", "End"], true, false, "#8AFFFF", "GEM", 10, 1)
    ATMat.OreRegister("Redstone", [["Redstone", 3], ["Ruby", 0], ["Chrome", 0]], ["Stone", "End"], true, true, "#FF0018", "NO_METALL", 20, 1)
    ATMat.OreRegister("Magnetite", [["Magnetite", 2], ["Iron", 1], ["Gold", 1], ["Aluminum", 0]], ["Stone", "red_granite", "black_granite", "Nether", "End"], true, true, "#393939", "METALL", 40, 1)
    ATMat.OreRegister("Tungsten", [["Tungsten", 2], ["Manganese", 1], ["Aluminum", 1]], ["Stone", "black_granite", "Nether"], true, false, "#000011", "METALL", 20, 2)
    ATMat.OreRegister("Manganese", [["Manganese", 2], ["Sulfur", 1], ["Aluminum", 1]], ["Stone", "black_granite", "Nether"], true, false, "#FFCC4C", "METALL", 40, 1)
    ATMat.OreRegister("Lapis", [["Lapis", 3], ["Nickel", 1], ["Saphire", 0]], ["Stone", "black_granite", "red_granite", "End"], true, true, "#000070", "NO_METALL", 40)
    ATMat.OreRegister("Lignite", [["Lignite", 2], ["Coal", 1]], ["Stone", "Nether", "End"], true, true, "#FF563C3C", "COAL", 40)
    ATMat.OreRegister("Sulfur", [["Sulfur", 3], ["Manganese", 1], ["Bauxite", 1], ["Copper", 1]], ["Stone", "black_granite", "Nether"], true, true, "#FE9D9F00", "COAL", 20)
    ATMat.OreRegister("Malachite", [["Malachite", 2], ["Copper", 1], ["Emerald", 0], ["Nickel", 1]], ["Stone", "Nether", "End"], true, true, "#698C43", "NO_METALL", 40)
    ATMat.OreRegister("Cassiterite", [["Cassiterite", 2], ["Tin", 1], ["Silver", 1]], ["Stone", "red_granite", "End"], true, true, "#9F9F9F", "METALL", 40)
    ATMat.OreRegister("Graphite", [["Graphite", 2], ["Coal", 1], ["Diamond", 0]], ["Stone", "End"], true, true, "#283030", "METALL", 40)
    ATMat.OreRegister("Uranium", [["Uranium", 2], ["Plutonium", 1], ["Palladium", 0]], ["Stone", "End"], true, false, "#59B000", "METALL", 5, 1)
    ATMat.OreRegister("Iridium", [["Iridium", 2], ["Platinum", 1]], ["Stone", "End"], true, false, "#FFE0E0E0", "METALL", 1, 2)
    ATMat.OreRegister("Platinum", [["Platinum", 2], ["Iridium", 1]], ["Stone", "End"], true, false, "#D3FFFF", "METALL", 1, 1)
    ATMat.OreRegister("Palladium", [["Palladium", 2], ["Thorium", 1], ["Uranium", 0]], ["Stone", "End"], true, false, "#FF92A2", "METALL", 5, 1)
    ATMat.OreRegister("Plutonium", [["Plutonium", 2], ["Uranium", 1], ["Palladium", 0]], ["Stone", "End"], false, false, "#FF92A2", "METALL", 5, 1)
    ATMat.OreRegister("Thorium", [["Thorium", 2], ["Palladium", 1], ["Palladium", 0]], ["Stone", "End"], true, false, "#000346", "METALL", 5, 2)
    ATMat.OreRegister("Aluminum", [["Aluminum", 2], ["Nickel", 1], ["Iron", 1]], ["Stone", "black_granite", "red_granite", "Nether", "End"], true, true, "#FF657EEA", "METALL", 40)
    ATMat.OreRegister("Nickel", [["Nickel", 2], ["Aluminum", 1], ["Iron", 1]], ["Stone", "black_granite", "red_granite", "Nether", "End"], true, true, "#FFBFC2EC", "METALL", 40)
    ATMat.OreRegister("Brown_Limonite", [["Brown_Limonite", 2], ["Iron", 0], ["Malachite", 0]], ["Stone", "Nether", "End"], true, true, "#FFA55300", "METALL", 40)
    ATMat.OreRegister("Yellow_Limonite", [["Yellow_Limonite", 2], ["Iron", 0], ["Malachite", 0]], ["Stone", "Nether", "End"], true, true, "#FFA5A500", "METALL", 40)
    //ATMat.OreRegister("Banded_Iron", [["Banded_Iron", 2], ["Iron", 0]], ["Stone", "Nether", "End"], true, true, "#FF513232", "METALL", 40)
    ATMat.OreRegister("Titanium", [["Titanium", 2], ["Bauxite", 1], ["Aluminium", 1]], ["Stone", "black_granite", "End"], true, false, "#FFBAC5F5", "METALL", 20)
    
//var tileTemplate = [1, 14, 15, 16, 56, 73, 74, 129, 21]

/*ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreBanded_IronStone, BlockID.oreIronStone, BlockID.oreBanded_IronStone, BlockID.oreBanded_IronStone], (100), tileTemplate, 40, 120, {x:32, y:8, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreBanded_IronStone, BlockID.oreIronStone, BlockID.oreIronStone, BlockID.oreIronStone], (100), tileTemplate, 80, 120, {x:32, y:8, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreMalachiteStone, BlockID.oreCopperStone, BlockID.oreTetrahedriteStone, BlockID.oreCopperStone], (100), tileTemplate, 40, 120, {x:28, y:8, z:28}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreMagnetiteStone, BlockID.oreGoldStone, BlockID.oreGoldStone, BlockID.oreMagnetiteStone, BlockID.oreMagnetiteStone], (30), tileTemplate, 32, 48, {x:24, y:5, z:24}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreTungstenStone, BlockID.oreMagnetiteStone, BlockID.oreMagnetiteStone, BlockID.oreTungstenStone], (30), tileTemplate, 32, 48, {x:20, y:4, z:20}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreLigniteStone, BlockID.oreCoalStone, BlockID.oreLigniteStone, BlockID.oreLigniteStone], (100), tileTemplate, 40, 120, {x:36, y:8, z:36}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreCoalStone, BlockID.oreCoalStone, BlockID.oreLigniteStone, BlockID.oreCoalStone], (100), tileTemplate, 80, 120, {x:36, y:8, z:36}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreCassiteriteStone, BlockID.oreSilverStone, BlockID.oreLeadStone, BlockID.oreGalenaStone], (100), tileTemplate, 32, 48, {x:32, y:8, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreCassiteriteStone, BlockID.oreTinStone, BlockID.oreTinStone], (100), tileTemplate, 32, 48, {x:24, y:6, z:24}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreBauxiteStone, BlockID.oreIronStone, BlockID.oreBauxiteStone, BlockID.oreMagnetiteStone], (30), tileTemplate, 80, 120, {x:36, y:8, z:36}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreCoalStone, BlockID.oreDiamondStone, BlockID.oreGraphiteStone, BlockID.oreLigniteStone], (10), tileTemplate, 10, 32, {x:16, y:4, z:16}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreRedstoneStone, BlockID.oreRubyStone, BlockID.oreRedstoneStone, BlockID.oreRedstoneStone], (10), tileTemplate, 10, 32, {x:16, y:4, z:16}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreLapisStone, BlockID.oreSaphireStone, BlockID.oreLapisStone, BlockID.oreLapisStone], (10), tileTemplate, 10, 32, {x:16, y:4, z:16}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreEmeraldStone, BlockID.oreEmeraldStone, BlockID.oreMalachiteStone, BlockID.oreMalachiteStone], (10), tileTemplate, 10, 32, {x:20, y:4, z:20}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreRedstoneStone, BlockID.oreRedstoneStone, BlockID.oreTetrahedriteStone, BlockID.oreRedstoneStone, BlockID.oreRedstone, BlockID.oreRedstone, BlockID.oreTetrahedriteStone, BlockID.oreRedstoneStone], (33), tileTemplate, 10, 32, {x:32, y:8, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreIridiumStone, BlockID.orePlatinumStone], 0.5, tileTemplate, 10, 32, {x:24, y:4, z:24}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreUraniumStone, BlockID.oreMagnetiteStone, BlockID.oreMagnetiteStone], 3, tileTemplate, 16, 48, {x:32, y:6, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreThoriumStone, BlockID.oreMagnetiteStone, BlockID.oreMagnetiteStone], 3, tileTemplate, 16, 48, {x:32, y:6, z:32}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreAluminumStone, BlockID.oreNickelStone, BlockID.oreGalenaStone], 100, tileTemplate, 32, 48, {x:30, y:6, z:30}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreBrown_LimoniteStone, BlockID.oreYellow_LimoniteStone, BlockID.oreBrown_LimoniteStone], 100, tileTemplate, 40, 120, {x: 26, y:9, x:26}, 20, 1)
ATGen.RegisterLargeOreDepositeOnStone([BlockID.oreBrown_LimoniteStone, BlockID.oreYellow_LimoniteStone, BlockID.oreYellow_LimoniteStone], 100, tileTemplate, 40, 120, {x: 26, y:9, x:26}, 20, 1)

ATGen.RegisterLargeOreDepositeOn_red_granite([BlockID.oreTetrahedrite_red_granite, BlockID.oreSulfur_red_granite, BlockID.oreSulfur_red_granite, BlockID.oreTetrahedrite_red_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_red_granite([BlockID.oreLapis_red_granite, BlockID.oreLapis_red_granite, BlockID.oreSaphire_red_granite, BlockID.oreLapis_red_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_red_granite([BlockID.oreRuby_red_granite, BlockID.oreEmerald_red_granite, BlockID.oreEmerald_red_granite, BlockID.oreRuby_red_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_red_granite([BlockID.oreTin_red_granite], (50), 5)

ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreTetrahedrite_black_granite, BlockID.oreSulfur_black_granite, BlockID.oreSulfur_black_granite, BlockID.oreTetrahedrite_black_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreLapis_black_granite, BlockID.oreLapis_black_granite, BlockID.oreSaphire_black_granite, BlockID.oreLapis_black_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreRuby_black_granite, BlockID.oreEmerald_black_granite, BlockID.oreEmerald_black_granite, BlockID.oreRuby_black_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreTungsten_black_granite, BlockID.oreMagnetite_black_granite, BlockID.oreTungsten_black_granite, BlockID.oreMagnetite_black_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreMagnetite_black_granite, BlockID.oreGold_black_granite, BlockID.oreMagnetite_black_granite, BlockID.oreGold_black_granite], (50), 5)
ATGen.RegisterLargeOreDepositeOn_black_granite([BlockID.oreTin_black_granite, BlockID.oreMagnetite_black_granite, BlockID.oreSilver_black_granite, BlockID.oreBauxite_black_granite], (50), 5)

ATGen.RegisterLargeOreDepositeOnNether([BlockID.oreGoldNether, BlockID.oreTetrahedriteNether, BlockID.oreSulfurNether, BlockID.oreSulfurNether], (50), [87], 32, 120, {x:16, y:4, z:16}, 20, 1)

ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreLapisEnd], (40), [121], 10, 120, {x:24, y:8, z:32}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreLeadEnd, BlockID.oreSilverEnd, BlockID.oreLeadEnd, BlockID.oreSilverEnd], (80), [121], 32, 64, {x:32, y:8, z:28}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreCassiteriteEnd, BlockID.oreCassiteriteEnd, BlockID.oreTinEnd], (100), [121], 10, 128, {x:32, y:6, z:32}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreRedstoneEnd, BlockID.oreRubyEnd, BlockID.oreRubyEnd], (33), [121], 10, 128, {x:24, y:6, z:24}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreCoalEnd, BlockID.oreLigniteEnd, BlockID.oreGraphiteEnd, BlockID.oreDiamondEnd, BlockID.oreDiamondEnd], (20), [121], 10, 128, {x:40, y:10, z:40}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreEmeraldEnd, BlockID.oreMalachiteEnd, BlockID.oreEmeraldEnd, BlockID.oreMalachiteEnd], (33), [121], 10, 128, {x:30, y:8, z:30}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreGoldEnd, BlockID.oreMagnetiteEnd, BlockID.oreGoldEnd], (50), [121], 10, 128, {x:32, y:6, z:32}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreCopperEnd, BlockID.oreTetrahedriteEnd, BlockID.oreCopperEnd, BlockID.oreTetrahedriteEnd], (100), [121], 10, 128, {x:48, y:8, z:48}, 40, 1)
ATGen.RegisterLargeOreDepositeOnEnd([BlockID.oreIronEnd, BlockID.oreMagnetiteEnd, BlockID.oreIronEnd, BlockID.oreMagnetiteEnd], (100), [121], 10, 128, {x:48, y:8, z:48}, 40, 1)*/

//drop ores
let DeleteOre = function(id){
	Block.setDestroyLevel(id, 0.5)
	
    Block.registerDropFunctionForID(id, function(coords, id, data, level){ 
        if(level>=1&&data==0&&rollPercentage(5)){
            return [[litst, 4, 0]];
        }else if(level>=1&&data==0){
        	//Game.message(data)
        	return[[4, 1, 0]]
        }
        /*if(level>=1){
    	    //Game.message(data)
    	    return[[id, 1, data]]
        }*/
        return []
    })
}

Callback.addCallback("PostLoaded", function(){
	//alert("b")
DeleteOre(14)
DeleteOre(15)
DeleteOre(16)
DeleteOre(56)
DeleteOre(73)
DeleteOre(74)
DeleteOre(129)
DeleteOre(21)

Block.registerDropFunctionForID(153, function(coords, id, data, level){ 
    if(level>=1&&data==0){
    	//Game.message(data)
    	return[[87, 1, 0]]
    }
    return []
})

Block.registerDropFunction(49, function(coords, id, data, level){ 
    if(level>=3){
        return [[BlockID.blackcobblestone, 1, 0]];
    }
       return []
    });
Block.setDestroyLevel(49, 3)

Block.registerDropFunction("blackstone", function(coords, id, data, level){ 
    if(level>=4){
        return [[BlockID.blackcobblestone, 1, 0]];
    }
       return []
    });
Block.registerDropFunction("redstone", function(coords, id, data, level){ 
    if(level>=3){
        return [[BlockID.redcobblestone, 1, 0]];
    }
       return []
    });
Block.registerDropFunction("blackcobblestone", function(coords, id, data, level){ 
    if(level>=4){
        return [[BlockID.blackcobblestone, 1, 0]];
    }
       return []
    });
Block.registerDropFunction("redcobblestone", function(coords, id, data, level){ 
    if(level>=3){
        return [[BlockID.redcobblestone, 1, 0]];
    }
       return []
    });
if(Config.hardmode){
Block.registerDropFunctionForID(17, function(coords, id, data, level){ 
	for(var key in ATMat.saws){
		if(Player.getCarriedItem().id==ATMat.saws[key].id){
			return [[id, 1, data]]
	    }
	}
    return [[5, 2, data]];
    });
Block.registerDropFunctionForID(162, function(coords, id, data, level){ 
	for(var key in ATMat.saws){
		if(Player.getCarriedItem().id==ATMat.saws[key].id){
			return [[id, 1, data]]
	    }
	}
    return [[5, 2, data+4]];
    })
    
   Block.registerDropFunction(1, function(coords, id, data, level){ 
    if(level>=1&&data==0&&rollPercentage(5)){
        return [[litst, 4, 0]];
    }else if(level>=1&&data==0){
    	//Game.message(data)
    	return[[4, 1, 0]]
    }
    if(level>=1){
    	//Game.message(data)
    	return[[id, 1, data]]
    }
    return []
    })
}
})




// file: common/recipes/standart.js

ATMech.FurnaceRecipe ({sS1:[ItemID.ingotIron, 1, 0], sS2:[ItemID.dustCoal, 1, 0], rS1:[igst, 1, 0], long:steelLong, temp:steelTemp});
ATMech.FurnaceRecipe ({sS1:[1, 1, 1], rS1:[ItemID.nuggetCopper, 1, 0], rS2:[ItemID.Stone, 4, 0], long:copperLong*2, temp:copperTemp});
ATMech.FurnaceRecipe ({sS1:[1, 1, 3], rS1:[ItemID.nuggetTin, 1, 0], rS2:[ItemID.Stone, 4, 0], long:tinLong*2, temp:tinTemp});
ATMech.FurnaceRecipe ({sS1:[1, 1, 5], rS1:[ItemID.nuggetIron, 1, 0], rS2:[ItemID.Stone, 4, 0], long:ironLong*2, temp:ironTemp});
ATMech.FurnaceRecipe({sS1:[265, 1, 0], rS1:[ItemID.ingotNickel, 1, 0], rS1:[ItemID.ingotInvar, 2, 0], long: ATMat.ingots[ItemID.ingotInvar].long, temp: ATMat.ingots[ItemID.ingotInvar].temp})
ATMech.FurnaceRecipe({sS1:[266, 1, 0], rS1:[ItemID.ingotSilver, 1, 0], rS1:[ItemID.ingotElectrum, 2, 0], long: ATMat.ingots[ItemID.ingotElectrum].long, temp: ATMat.ingots[ItemID.ingotElectrum].temp})

ItemID.ingotIron = 265
ItemID.ingotGold = 266

Callback.addCallback("PostLoaded", function(){

//??????
Recipes.addShaped({id: ItemID.dustStainless, count: 1, data: 0}, ["iin", "inn", "ssc"], ['i', ItemID.dustSmallIron, 0, 'n', ItemID.dustSmallNickel, 0, 's', ItemID.dustSmallManganese, 0, 'c', ItemID.dustSmallChrome, 0])
Recipes.addShaped({id: ItemID.dustStainless, count: 9, data: 0}, ["iin", "inn", "ssc"], ['i', ItemID.dustIron, 0, 'n', ItemID.dustNickel, 0, 's', ItemID.dustManganese, 0, 'c', ItemID.dustChrome, 0])
Recipes.addShapeless({id:ItemID.dustSteel, count:1, data:0}, [{id:ItemID.dustIron, data:0}, {id:ItemID.dustCoal, data:0}])
Recipes.ReplaceWithShapeless({id:ItemID.dustBronze, count:4, data:0}, [{id:ItemID.dustCopper, data:0}, {id:ItemID.dustCopper, data:0}, {id:ItemID.dustCopper, data:0}, {id:ItemID.dustTin, data:0}])
Recipes.addShaped({id: ItemID.dustInvar, count: 4, data: 0}, ["ii", "in"], ['i', ItemID.dustIron, 0, 'n', ItemID.dustNickel, 0])
Recipes.addShaped({id: ItemID.dustElectrum, count: 4, data: 0}, ["sg"], ['s', ItemID.dustSilver, 0, 'g', ItemID.dustGold, 0])
 
 //cobblestone
CreateRecipeWithTool({id:4, count:1, data:0}, [
	"h ",
	"bb",
	"bb"
], ['b', ItemID.Stone, 0], [hammers], 1); 

//little stones
CreateShapelessRecipeWithTool({id:ItemID.Stone, count:4, data:0}, [{id:4, data:0}], [hammers], 1)

//replaced recipes
if(Config.hardmode){
CreateHelmetRecipe(306, "Iron", 2)
CreateChestplateRecipe(307, "Iron", 2)
CreateLeggingsRecipe(308, "Iron", 2)
CreateBootsRecipe(309, "Iron", 2)

CreatePickaxeRecipe(257, "Iron", 2)
CreateAxeRecipe(258, "Iron", 2)
CreateHoeRecipe(292, "Iron", 2)
CreateSwordRecipe(267, "Iron", 2)
CreateShovelRecipe(256, "Iron", 2)

CreateHelmetRecipe(314, "Gold", 2)
CreateChestplateRecipe(315, "Gold", 2)
CreateLeggingsRecipe(316, "Gold", 2)
CreateBootsRecipe(317, "Gold", 2)

CreatePickaxeRecipe(285, "Gold", 2)
CreateAxeRecipe(286, "Gold", 2)
CreateHoeRecipe(294, "Gold", 2)
CreateSwordRecipe(283, "Gold", 2)
CreateShovelRecipe(284, "Gold", 2)

ReplaceRecipeWithTool({id:325, count:1, data:0}, [
	"aha",
	" a "
], ['a', ItemID.plateIron, 0], [hammers], 2); 
ReplaceRecipeWithTool({id:359, count:1, data:0}, [
	"ah",
	" a"
], ['a', ItemID.plateIron, 0], [hammers], 2); 

ReplaceRecipeWithTool({id: 66, data: 0, count: 16}, ["isi", "ihi", "isi"], ['i', ItemID.longRodIron, 0, 's', 280, 0], [hammers], 2)
ReplaceRecipeWithTool({id: 126, data: 0, count: 6}, ["wlw", "grg", "sch"], ['w', ItemID.cableGold, 0, 'g', ItemID.longRodGold, 0, 'r', 280, 0], [solderings, screwdrivers, hammers], 2)
Recipes.ReplaceWithShaped({id: 259, count:1, data: 0}, ["n ", " c"], ['n', ItemID.nuggetSteel, 0, 'c', 318, 0])
Recipes.ReplaceWithShaped({id: 259, count:1, data: 0}, ["n ", " c"], ['n', ItemID.nuggetIron, 0, 'c', 318, 0])
Recipes.ReplaceWithShaped({id: 259, count:1, data: 0}, ["n ", " c"], ['n', ItemID.nuggetTin, 0, 'c', 318, 0])
ReplaceRecipeWithTool({id: 328, count: 1, data: 0}, ["php", "ppp"], ['p', ItemID.plateIron, 0], [hammers], 2)
ReplaceRecipeWithTool({id: 330, count: 1, data: 0}, ["ppw", "pp ", "pp "], ['p', ItemID.plateIron, 0], [wrenchs], 2)
Recipes.ReplaceWithShaped({id: 345, count:1, data: 0}, [" p ", "prp", " p "], ['p', ItemID.plateIron, 0, 'r', 331, 0])
Recipes.ReplaceWithShaped({id: 347, count:1, data: 0}, [" p ", "prp", " p "], ['p', ItemID.plateGold, 0, 'r', 331, 0])
ReplaceRecipeWithTool({id: 410, count: 1, data: 0}, ["php", "pcp", " p "], ['p', ItemID.plateIron, 0, 'c', 54, 0], [hammers], 2)
ReplaceShapelessRecipeWithTool({id: 377, count:2, data:0}, [{id: 369, data:0}], [mortars], 1)
ReplaceRecipeWithTool({id: 380, count: 1, data: 0}, ["p p", "php", "ppp"], ['p', ItemID.plateIron, 0, 'c', 54, 0], [hammers], 2)
	
Recipes.deleteRecipe({id:272, count:1, data:0});
Recipes.deleteRecipe({id:273, count:1, data:0});
Recipes.deleteRecipe({id:274, count:1, data:0});
Recipes.deleteRecipe({id:275, count:1, data:0});
Recipes.deleteRecipe({id:291, count:1, data:0});

Recipes.deleteRecipe({id:268, count:1, data:0});
Recipes.deleteRecipe({id:269, count:1, data:0});
Recipes.deleteRecipe({id:270, count:1, data:0});
Recipes.deleteRecipe({id:270, count:1, data:0});
Recipes.deleteRecipe({id:271, count:1, data:0});
Recipes.deleteRecipe({id:290, count:1, data:0});

Recipes.deleteRecipe({id:266, count:1, data:0});

Recipes.removeFurnaceRecipe(265, -1);
Recipes.removeFurnaceRecipe(ItemID.dustBronze, -1)

//tools
CreateRecipeWithTool({id:ItemID.flintpickaxe, count:1, data:0}, [
	"bbb",
	"psh",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.flintsword, count:1, data:0}, [
	"bh",
	"bp",
	"s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.flintaxe, count:1, data:0}, [
	"bbh",
	"bsp",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.flintshovel, count:1, data:0}, [
	"pbh",
	" s ",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1); 

CreateRecipeWithTool({id:ItemID.flinthoe, count:1, data:0}, [
	"bbh",
	"ps ",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.stonepickaxe, count:1, data:0}, [
	"bbb",
	"psh",
	" s "
], ['b', litst, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.stonesword, count:1, data:0}, [
	"bh",
	"bp",
	"s "
], ['b', litst, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.stoneaxe, count:1, data:0}, [
	"bbh",
	"bsp",
	" s "
], ['b', litst, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

CreateRecipeWithTool({id:ItemID.stoneshovel, count:1, data:0}, [
	"pbh",
	" s ",
	" s "
], ['b', litst, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1); 

CreateRecipeWithTool({id:ItemID.stonehoe, count:1, data:0}, [
	"bbh",
	"ps ",
	" s "
], ['b', litst, 0, 's', 280, 0, 'p', 287, 0], [hammers], 1);

Recipes.addShaped ({id:ItemID.woodpickaxe, count:1, data:0}, [
"www",
"ps ",
" s "
], ['w', 5, -1, 's', 280, 0, 'p', 287, 0]);

Recipes.addShaped({id:ItemID.woodsword, count:1, data:0}, [
	"b ",
	"bp",
	"s "
], ['b', 5, -1, 's', 280, 0, 'p', 287, 0]); 

Recipes.addShaped({id:ItemID.woodaxe, count:1, data:0}, [
	"bbt",
	"bsp",
	" s "
], ['b', 5, -1, 's', 280, 0, 'p', 287, 0]); 

Recipes.addShaped({id:ItemID.woodshovel, count:1, data:0}, [
	"pbt",
	" s ",
	" s "
], ['b', 5, -1, 's', 280, 0, 'p', 287, 0]); 

Recipes.addShaped({id:ItemID.woodhoe, count:1, data:0}, [
	"pbt",
	" s ",
	" s "
], ['b', 5, -1, 's', 280, 0, 'p', 287, 0]); 
}else{
Recipes.addShaped({id:ItemID.flintpickaxe, count:1, data:0}, [
	"bbb",
	" s ",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0]);

Recipes.addShaped({id:ItemID.flintsword, count:1, data:0}, [
	"b",
	"b",
	"s"
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0]);

Recipes.addShaped({id:ItemID.flintaxe, count:1, data:0}, [
	"bb",
	"bs",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0]);

Recipes.addShaped({id:ItemID.flintshovel, count:1, data:0}, [
	"b",
	"s",
	"s"
], ['b', 318, 0, 's', 280, 0]); 

Recipes.addShaped({id:ItemID.flinthoe, count:1, data:0}, [
	"bbh",
	"ps ",
	" s "
], ['b', 318, 0, 's', 280, 0, 'p', 287, 0]);
}

//wool
Recipes.addShapeless({id:287, count:4, data:0}, [{id:35, data:-1}]); 

//torch
Recipes.addShaped({id:50, count:4, data:0}, [
	"a",
	"b"
], ['a', ItemID.gemLignite, 0, 'b', 280, 0]); 

//furnace
ReplaceRecipeWithTool({id:61, count:1, data:0}, [
"bbb",
"bhb",
"bbb"
], ['b', ItemID.Stone, 0], [hammers],1);

//cobb furnace and blocks
CreateRecipeWithTool({id:BlockID.compactedfurnace, count:1, data:0}, [
	" h ",
	"bfb",
	"ggg"
], ['b', c, 0, 'f', 61, 0, 'g', 82, 0], [hammers], 1);

Recipes.addShaped({id:c, count:1, data:0}, [
	"aba",
	"bab",
	"aba"
], ['b', ItemID.Stone, 0, 'a', 337, 0]);

//blast furnace and blocks
Recipes.addShaped({id:BlockID.blastfurnace, count:1, data:0}, [
	"bmb",
	"mfm",
	"bmb"
], ['b', brbolt, 0, 'm', ItemID.plateBronze, 0, 'f', BlockID.compactedfurnace, 0]); 

CreateRecipeWithTool({id:b, count:1, data:0}, [
	"bmb",
	"psp",
	"bmb"
], ['p', 45, 0, 'b', brbolt, 0, 'm', brmod, 0], [screwdrivers], 2);

//molds
    //CreateRecipeWithTool({id: ItemID.EmptyShapePlate, count:1, data:0}, ["hf","##","##"], ['#', ItemID.plateSteel, 0], [hammers, files], 2);

	//CreateRecipeWithTool({id: ItemID.MoldCylinder, count:1, data:0}, ["  #","   ","  h"], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldAnvil, count:1, data:0}, ["  #","   "," h "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldPlate, count:1, data:0}, [" h "," # ","   "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldIngot, count:1, data:0}, ["   "," # "," h "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldNuggets, count:1, data:0}, ["#  h","   ","   "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldBlock, count:1, data:0}, ["   ","h# ","   "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);
	//CreateRecipeWithTool({id: ItemID.MoldBall, count:1, data:0}, ["   "," # ","h  "], ['#', ItemID.EmptyShapePlate, 0], [hammers], 2);

//craft tools
//from stone
Recipes.addShaped({id:ItemID.StoneHammer, count:1, data:0}, ["aa ", "aab", "aa"], ['a', litst, 0, 'b', 280, 0]);

Recipes.addShaped({id:ItemID.StoneMortar, count:1, data:0}, [" a ", "cac", " c "], ['a', litst, 0, 'c', 1, 0]);

//rubber
ATMech.FurnaceRecipe ({sS1:[ItemID.rubber, 2, 0], rS1:[ItemID.nuggetRubber, 1, 0], long:2, temp:200});

//new blocks
Recipes.addFurnace(BlockID.redcobblestone, BlockID.redstone, 0)
Recipes.addFurnace(BlockID.blackcobblestone, BlockID.blackstone, 0)
})




// file: common/items/radiation.js

ModifierAPI.reg("radiation", {
	destroy: function(){
		//alert("destroy")
		Custom_StopSoundFile("geiger.wav")
	},
    tick: function(){
    	if(this.data.stack <= 0){
    	    ModifierAPI.remove(this.entity, this.name)
            if(this) this.destroy()
        }
    	let stack = this.data.stack
        let entity = this.data.entity
        if(stack >= 5){ if(World.getWorldTime() % 69 * 20 == 0){ Custom_PlaySoundFile("geiger.wav") }}else Custom_StopSoundFile("geiger.wav")
        if(stack < 10 && World.getWorldTime() % 280 == 0){ 
             if(rollPercentage(40))  Entity.addEffect(entity, 2, 0, 10 * 20)
             if(rollPercentage(40))  Entity.addEffect(entity, 4, 0, 10 * 20)
             if(rollPercentage(40)) Entity.addEffect(entity, 18, 0, 10 * 20)
             if(rollPercentage(40)) Entity.addEffect(entity, 17, 0, 10 * 20)
             if(rollPercentage(25)) Entity.addEffect(entity, 9, 1, 8 * 20)
             if(rollPercentage(25)) Entity.addEffect(entity, 15, 1, 2 * 20)
        }
        if(stack >= 10){
        	let coeff = stack / 10
        	if(World.getWorldTime() % 300 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 2, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //slow
            if(World.getWorldTime() % 310 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 4, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //ystalost
            if(World.getWorldTime() % 320 == 0 && rollPercentage(coeff * 40)) Entity.addEffect(entity, 18, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff * 2)) * 20) //slabost
            if(World.getWorldTime() % 110 == 0 && rollPercentage(coeff * 10)) Entity.setHealth(entity, Math.round(Entity.getHealth(entity) - Entity.getMaxHealth(entity) * 0.1 * coeff)) //damage
            if(World.getWorldTime() % 330 == 0 && rollPercentage(coeff * 25)) Entity.addEffect(entity, 9, 1, (8 + Math.round(coeff * 2)) * 20) //toshnota
            if(World.getWorldTime() % 120 == 0 && rollPercentage(coeff * 25)) Entity.addEffect(entity, 15, 1, 3 * 20) //slepota
            if(World.getWorldTime() % 240 == 0 && rollPercentage(coeff * 20)) Entity.addEffect(entity, 17, 1 + Math.round(coeff * 0.5), (10 + Math.round(coeff)) * 20) //hunger
            if(World.getWorldTime() % 150 == 0 && rollPercentage(coeff * 20)) Entity.addEffect(entity, 19, 0 + Math.round(coeff * 0.25), (6 + Math.round(coeff)) * 20) //poison
        }
        
        this.data.isWane++
        if(this.data.isWane >= 100) this.data.stack = this.data.stack-=0.01
        //if(World.getWorldTime()%20==0) Debug.message("Stack :" + this.data.stack)
    }
})

let A = ATMat
const Radiation = {
	items: [],
	blocks: [],
	armor: {
		hazmat: {
            set: [
		        ItemID.hazmatHelmet,
		        ItemID.hazmatChestplate,
		        ItemID.hazmatLeggings,
		        ItemID.rubberBoots],
		    resistange: 100
		},
		nano: {
            set: [
		        ItemID.nanoHelmet,
		        ItemID.nanoChestplate,
		        ItemID.nanoLeggings,
		        ItemID.nanoBoots],
		    resistange: 100
		},
		quantium: {
			set: [
			    ItemID.quantumHelmet,
		        ItemID.quantumChestplate,
		        ItemID.quantumLeggings,
		        ItemID.quantumBoots],
		    resistange: 100
		},
		lead: {
			set: [
			    ItemID.leadHelmet,
		        ItemID.leadChestplate,
		        ItemID.leadLeggings,
		        ItemID.leadBoots],
		    resistange: 50
		}
	},
	inventory: {},
	world: {},
	
	createItemsBase: function(){
		let base = A.createBase()
		for(var k1 in base){
			for(var k2 in base[k1]){
				let obj = base[k1][k2]
				//alert(k1 + ", " + obj.mat)
				if(k1 != 14 && k1 != 15 && k1 != 29 && A.materials[obj.mat].rad) this.items[obj.id] = {id: obj.id, c: obj.c || 1, rad: A.materials[obj.mat].rad}
			}
		}
		for(var k1 in A.tools){
			for(var k2 in A.tools[k1]){
				let obj = A.tools[k1][k2]
				if(A.materials[k1].rad) this.items[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[k1].rad}
			}
		}
		for(var keys in A.ores){
			let obj = A.ores[keys]
			if(A.materials[obj.type].rad) this.items[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.type].rad}
		}
	},
	
	createBlocksBase: function(){
		for(var keys in A.ores){
			let obj = A.ores[keys]
			if(A.materials[obj.type].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.type].rad}
		}
		for(var keys in A.blocks){
			let obj = A.blocks[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
		for(var keys in A.machineBlocks){
			let obj = A.machineBlocks[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
		for(var keys in A.smallOres){
			let obj = A.smallOres[keys]
			if(A.materials[obj.mat].rad) this.blocks[obj.id] = {id: obj.id, c: obj.c, rad: A.materials[obj.mat].rad}
		}
	},
	
	resistange: function(){
		let resistange = 1
		for(var keys in this.armor){
			let base = this.armor[keys]
			for(var i = 0; i < 4; i++){
				//alert(base.set[i])
			    if(Player.getArmorSlot(i).id == base.set[i]){
				    //alert(base.set[i] + ", " + base.resistange / 100 * percents[i])
				    resistange -= base.resistange / 100 * 0.25
				}
			}
		}
		//alert(resistange)
		return resistange
	},
	
	checkInventory: function(){
		//this.inventory = []
		//Debug.message("check")
		if(this.i < 45){
			//Debug.message(this.i +", " + Player.getInventorySlot(this.i).id)
			if(!this.inventory[this.i]){
			        let item = Player.getInventorySlot(this.i)
			        let base = this.items[item.id]
			        if(base) this.inventory[this.i] = {key: item.id, count: item.count}
			}
			this.i++
			//alert(this.i)
		}else this.i = 9;
	},
	
	checkBlocks: function(){
		/*this.x = -this.r; if(this.x < this.r){
            this.y = -this.r; if(this.y < this.r){
                 this.z = -this.r; if(this.z < this.r){
                    if((this.x * this.x) + (this.y * this.y) + (this.z * this.z) <= (this.r * this.r)){
                    	for(var keys in 
                    	if(World.getBlockID(Player.getPosition().x + this.x, Player.getPosition().y + this.y, Player.getPosition().z + this.z)*/
        let r = 5
        for(var x = -r; x < r; x++){
            for(var y = -r; y < r; y++) {
                for(var z = -r; z < r; z++){
                    if((x * x) + (y * y) + (z * z) <= (r * r)){
                    	let sx = Player.getPosition().x + x
                        let sy = Player.getPosition().y + y
                        let sz = Player.getPosition().z + z
                    	if(!this.world[sx + "$" + sy + "$" + sz]){
                    	    let id = World.getBlockID(sx, sy, sz)
                    	    let base = this.blocks[id]
                            if(base) this.world[sx + "$" + sy + "$" + sz] = {key: id, coords: {x: sx, y: sy, z: sz}, dimension: Player.getDimension()} 
                        }
                    }
                }
            }
        }
	}
}
//alert(JSON.stringify(Player.getArmorSlot)
for(var keys in Player){
    //alert(keys)
}

if(Config.radiation) Radiation.createItemsBase()
if(Config.radiation) Radiation.createBlocksBase()

if(Config.radiation){ for(var keys in Radiation.blocks){
	let base = Radiation.blocks[keys]
    Item.registerUseFunction(base.id, function(coords, item, b){
	    let c = coords.relative
	    if(World.getBlockID(c.x, c.y, c.z) == 0){ World.setBlock(c.x, c.y, c.z, base.id); Radiation.world[c.x + "$" + c.y + "$" + c.z] = {key: keys, coords: {x: c.x, y: c.y, z: c.z}, dimension: Player.getDimension()}; }
    })
}}

if(Config.radiation){ Callback.addCallback("tick", function(){
	//if(World.getWorldTime()%40==0) ModifierAPI.add(Player.get(), "radiation", {stack: 5})
	//Entity.addEffect(Player.get(), 2, 2, 10000)
	if(World.getWorldTime() % 5 == 0) Radiation.checkInventory()
	if(World.getWorldTime() % 200 == 0) Radiation.checkBlocks()
	if(Radiation.resistange() && World.getWorldTime() % 20 == 0){
        for(var keys in Radiation.inventory){
        	let inv = Radiation.inventory[keys]
            if(!inv) continue
            //Debug.message("Item")
        	let base = Radiation.items[inv.key]
            if(Player.getInventorySlot(keys).id != base.id){ delete Radiation.inventory[keys]; break }
            inv.count = Player.getInventorySlot(keys).count
            //alert("Count: "+inv.count)
            let eID = ModifierAPI.entities[Player.get()]
            let rad = base.rad * base.c * inv.count / 10
            rad = rad * Radiation.resistange()
            //alert(Radiation.resistange())
                if(!eID){ ModifierAPI.add(Player.get(), "radiation", {stack: rad, isWane: 0}) }else{ ModifierAPI.change(eID["radiation"]).stack += rad; ModifierAPI.change(eID["radiation"]).isWane = 0 } 
         }
     }
     if(Radiation.resistange() && World.getWorldTime() % 40 == 0){
     	for(var keys in Radiation.world){
     	    let block = Radiation.world[keys]
             if(!block) continue
             if(block.dimension != Player.getDimension()) continue
             let base = Radiation.blocks[block.key]
             //Debug.message("Block")
             let range = Math.round((Math.abs(Player.getPosition().x - block.coords.x) + Math.abs(Player.getPosition().y - block.coords.y) + Math.abs(Player.getPosition().z - block.coords.z)) / 3)
             //alert("Range: "+range)
             //alert(block.coords.x + ", " + block.coords.y + ", " + block.coords.z)
             if(range > 16) continue
             if(World.getBlockID(block.coords.x, block.coords.y, block.coords.z) != base.id){ delete Radiation.world[keys]; break }
             let eID = ModifierAPI.entities[Player.get()]
             let rad = base.rad * base.c / range * 2 / 20
             rad = rad * Radiation.resistange()
                if(!eID){ ModifierAPI.add(Player.get(), "radiation", {stack: rad, isWane: 0}) }else{ ModifierAPI.change(eID["radiation"]).stack += rad; ModifierAPI.change(eID["radiation"]).isWane = 0 } 
         }
     }
})}

if(Config.radiation){ Saver.addSavesScope("RadObjectes", 
    function read(scope){
        Radiation.world = scope.blocks || {}
        Radiation.inv = scope.inv || {}
    },
    function save(){
        return {blocks: Radiation.world, inv: Radiation.inv}
    }
)}
Callback.addCallback("LevelLeft", function(){
	Radiation.world = {}
	Radiation.inv = {}
})






// file: common/integration/IndustrialCraft.js

ModAPI.addAPICallback("ICore", function(api){
let ICore = api

let iFuelEffPct = Config.indFurnaceFuelEff
let iRecipesEffPct = Config.indFurnaceRecEff
let iTimer = Config.indFurnaceTimer

let IrEff = 80
let StEff = 110
let ChEff = 150

IDRegistry.genBlockID("IndustrialFurnace");
Block.createBlockWithRotation("IndustrialFurnace", [
	{name: "Industrial Furnace", texture: [
["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]
], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IndustrialFurnace, "stone");
Block.setDestroyLevel(BlockID.IndustrialFurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.IndustrialFurnace, "stone", 3, true);
ICore.Render.setStandartModel(BlockID.IndustrialFurnace, [["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]], true)
ICore.Render.registerRenderModel(BlockID.IndustrialFurnace, 0, [["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_e", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]], true)
	
Block.registerDropFunction("IndustrialFurnace", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})

let industrialfurnacestruct =[[
[1, 0, 1, [irsh, stsh, chsh]],
[1, 0, 0, [irsh, stsh, chsh]],
[1, 0, -1, [irsh, stsh, chsh]],

[2, 0, 2, -1],
[2, 0, 1, [irsh, stsh, chsh]],
[2, 0, 0, [irsh, stsh, chsh]],
[2, 0, -1, [irsh, stsh, chsh]],
[2, 0, -2, -1],

[3, 0, 1, [irsh, stsh, chsh]],
[3, 0, 0, [irsh, stsh, chsh]],
[3, 0, -1, [irsh, stsh, chsh]],

[4, 0, 0, -1],

[1, 1, 1, [irsh, stsh, chsh]],
[1, 1, 0, [irsh, stsh, chsh]],
[1, 1, -1, [irsh, stsh, chsh]],

[2, 1, 1, [irsh, stsh, chsh]],
[2, 1, 0, [0, 11]],
[2, 1, -1, [irsh, stsh, chsh]],

[3, 1, 1, [irsh, stsh, chsh]],
[3, 1, 0, [irsh, stsh, chsh]],
[3, 1, -1, [irsh, stsh, chsh]],

[1, 2, 1, [irsh, stsh, chsh]],
[1, 2, 0, [irsh, stsh, chsh]],
[1, 2, -1, [irsh, stsh, chsh]],

[2, 2, 1, [irsh, stsh, chsh]],
[2, 2, 0, [irsh, stsh, chsh]],
[2, 2, -1, [irsh, stsh, chsh]],

[3, 2, 1, [irsh, stsh, chsh]],
[3, 2, 0, [irsh, stsh, chsh]],
[3, 2, -1, [irsh, stsh, chsh]]
]]

let ifguicon = {
	standart: {
		header:{
			text:{
				text: "Промышленная печь"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
	    {type: "bitmap", bitmap:"energy_bar_background", x:346, y:340, scale:3},
		{type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
		{type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
		{type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
		{type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"slot2":{type: "slot", x: 390, y: 200, size:60},
		"slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
		"slot4":{type: "slot", x: 700, y: 200, size:60},
		"slot5":{type: "slot", x: 760, y: 200, size:60},
		"slot6":{type: "slot", x: 360, y: 270, size:60},
		"progbar1":{type: "scale", x:460, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"progbar2":{type: "scale", x:610, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"fire":{type: "scale", x:436, y:280, direction:1, bitmap: "fire_scale", scale:3},
		"temp":{type: "text", x:480, y:300, width:30, height:10, text: ""},
		"struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"sec":{type: "text", x:500, y:100, width:8, height:3, text: ""},
        "needTemp":{type: "text", x:500, y:120, width:8, height:3, text: ""},
        "secLeft":{type: "text", x:500, y:140, width:8, height:3, text: ""},
        "result":{type: "text", x:500, y:160, width:8, height:3, text: ""},
        "energy":{type: "scale", x:346 + 3.2 * 4, y:340, direction:0, bitmap: "energy_bar_scale", scale:3},
        "energyText":{type: "text", x:450, y:360, width:8, height:3, text: ""},
		}
}

let ifgui = new UI.StandartWindow(ifguicon);

let industrialfurnacecon = {
    defaultValues: {
    	energy_storage: 100000,
        progress1:0,
        prog1end:0,
        progress2:0,
        prog2end:0,
        fire:0, 
        burn:1,
        temp:0,
        lava:0,
        keys:0,
        result1:0,
        result2:0,
        maxTemp:0,
        fuelEff:0,
        needTemp:0,
        ir:0,
        st:0,
        ch:0,
        lv:0,
        timer: 0,
	},
    container:ifgui,
    click: function(){
    	Game.prevent()
    
        this.container.openAs(ifgui)
        //Game.message("Duck")
       /*let key = this.data.MAPIkey
        let m = this
        let side = 0
        let bl = 0
        //for(let side in MAPI.multiblocks[key].struc){
        	bl=0
            //Game.message(side);
            for(let keyi in MAPI.multiblocks[key].struc[side]){ 
            	World.setBlock(m.x+MAPI.multiblocks[key].struc[side][keyi][0], m.y+MAPI.multiblocks[key].struc[side][keyi][1], m.z+MAPI.multiblocks[key].struc[side][keyi][2], MAPI.multiblocks[key].struc[side][keyi][3])
            }
        //}         */         	
    },
    
    calcTemp: function(a){
    	if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][0]){
            this.data.ir++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][1]){
            this.data.st++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][2]){
            this.data.ch++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == 11){
            this.data.lv++
        }
    },
    
    checkSheathingTemp: function(){
    	this.data.ir = 0
        this.data.st = 0
        this.data.ch = 0
        this.data.lv = 0
        //let i = 0
        let m = MAPI.multiblocks[this.data.MAPIkey]
        for(let key in m.struc[this.data.MAPIside]){ 
        	let a = m.struc[this.data.MAPIside][key]
            if(MAPI.strongIf(a, this)){ 
                this.calcTemp(a)
                //alert(i)
            }
        }
    },
    
    tick: function(){

	    let sourseSlot1 = this.container.getSlot("slot1");
		let sourseSlot2 = this.container.getSlot("slot2");
		let resultSlot1 = this.container.getSlot("slot4");
		let resultSlot2 = this.container.getSlot("slot5");
		let metallSlot = this.container.getSlot("slot3");
		let fuelSlot = this.container.getSlot("slot6");
	    
	    //alert(this.data.MAPIact)
         if(this.data.MAPIact==true){
         	
            this.activate()
            
            if(this.data.MAPIbl == MAPI.multiblocks[this.data.MAPIkey].struc[this.data.MAPIside].length){
            	this.checkSheathingTemp()
            	this.data.maxTemp = this.data.ir * IrEff + this.data.st * StEff + this.data.ch * ChEff + this.data.lv * 350
            }
            
            let RecipesEffPct = round(this.data.maxTemp/15, 0)
            
            this.container.setText("struct", "");
			//Game.message(this.data.fuel.length);
			if(fuelSlot.id > 0 && Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data) && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) && this.data.fire==0){
			    fuelSlot.count--;
				this.data.fire=Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data)
				this.data.burn=this.data.fire;
				this.data.fuelEff=4
				this.container.validateAll()
				//Game.message(this.data.fuelEff)
			}
			if(this.data.fire>0 && this.data.energy >= 128){
				this.data.timer = 0
				this.data.energy-=128
				this.data.fire--;
				this.data.temp+=this.data.fuelEff
			}
	
			if(this.data.temp>this.data.maxTemp){
				this.data.temp=this.data.maxTemp;
			}

			for(let key in furnaceRecipes){
				if(
				furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0
				&&
				this.data.temp>=furnaceRecipes[key].temp){
					sourseSlot1.count-=furnaceRecipes[key].sS1[1];
					sourseSlot2.count-=furnaceRecipes[key].sS2[1];
					this.data.prog1end=round(furnaceRecipes[key].long*20/ 1.33 / RecipesEffPct * 100, 1)
					this.data.keys=key
					this.data.needTemp = furnaceRecipes[key].temp
					this.container.validateAll();
				    //Game.message(round(furnaceRecipes[key].long*20/ 1.33 / 100 * RecipesEffPct, 1))
				}else if(
                furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0){
				    this.container.setText("sec", "Time: "+round(furnaceRecipes[key].long / RecipesEffPct * 100, 1))
			        this.container.setText("needTemp", "Need temp: "+furnaceRecipes[key].temp);
			        this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[key].rS1[0], furnaceRecipes[key].rS1[1]));
			        break
			    }
			}
		   if(this.data.progress1<this.data.prog1end &&
                this.data.temp>=this.data.needTemp &&this.data.lava==0){
                this.data.progress1++;
            }
           if(this.data.prog1end<=this.data.progress1&&this.data.lava==0&&this.data.prog1end>0){
                this.data.lava=1;
                this.data.prog2end=round(furnaceRecipes[this.data.keys].long*20 / RecipesEffPct * 100 - this.data.prog1end, 1)
                //Game.message(this.data.prog1end)
                //Game.message(this.data.prog2end)
            }
            if(this.data.progress2<this.data.prog2end &&
                this.data.temp>=this.data.needTemp &&this.data.lava==1){
                this.data.progress2++;
                
            }
    
			if(this.data.prog2end<=this.data.progress2&&this.data.lava==1&&this.data.prog2end>0&&
			(resultSlot1.id==0||resultSlot1.id==furnaceRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==furnaceRecipes[this.data.keys].rS2[0])&&
            (resultSlot1.count==0||resultSlot1.count<64-furnaceRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-furnaceRecipes[this.data.keys].rS2[1]) ){
				resultSlot1.id = furnaceRecipes[this.data.keys].rS1[0]
				resultSlot1.count += furnaceRecipes[this.data.keys].rS1[1]
				resultSlot1.data = furnaceRecipes[this.data.keys].rS1[2]
				resultSlot2.id = furnaceRecipes[this.data.keys].rS2[0]
				resultSlot2.count += furnaceRecipes[this.data.keys].rS2[1]
				resultSlot2.data = furnaceRecipes[this.data.keys].rS2[2]
				this.data.lava=0;
				this.data.progress1=0;
				this.data.progress2=0;
				this.data.prog1end=0;
				this.data.prog2end=0;
				this.container.validateAll();
			}
			
			if(this.data.prog1end > 0){
			    this.container.setText("secLeft", "Left time: "+round((furnaceRecipes[this.data.keys].long *20 / RecipesEffPct * 100-this.data.progress1-this.data.progress2)/20, 1));
			}else{
				this.container.setText("secLeft", "Left time: ");
		    }
			
			if(this.data.progress1 > 0){
		        this.container.setText("sec", "Time: "+round(furnaceRecipes[this.data.keys].long / RecipesEffPct * 100, 1))
			    this.container.setText("needTemp", "Need temp: "+furnaceRecipes[this.data.keys].temp);
			    this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[this.data.keys].rS1[0], furnaceRecipes[this.data.keys].rS1[1]));
			}else if(sourseSlot1.id==0 && sourseSlot2.id==0){
			    this.container.setText("sec", "Time: ");
			    this.container.setText("needTemp", "Need temp: ");
			    this.container.setText("result", "Result: ");
			}
			
	    }else{
		    this.data.maxTemp = 0
		    this.deactivate()
            this.data.fire=0; 
            this.container.setText("struct", "Incorrect struct");
            this.container.setText("sec", "");
			this.container.setText("needTemp", "");
			this.container.setText("result", "");
			this.container.setText("secLeft", "");
        }
	
	    if(this.data.fire==0 && this.data.timer < iTimer * 20){
			this.data.timer++;
		}
		if(this.data.timer == iTimer * 20 && this.data.temp>0){
			this.data.temp--
		}

		if(this.data.lava==1){
			metallSlot.id=lava;
			metallSlot.count=1;
		}else{
			metallSlot.id=0;
			metallSlot.count=0
		}

		this.container.setScale("fire", this.data.fire/this.data.burn);
		this.container.setText("temp", "t: "+Math.floor(this.data.temp)+" / "+this.data.maxTemp+" C");
		this.container.setScale("progbar1", this.data.progress1/this.data.prog1end)
		this.container.setScale("progbar2", this.data.progress2/this.data.prog2end);
		
		this.container.setText("energyText", this.data.energy+" / "+this.data.energy_storage+" Eu")
	    this.container.setScale("energy", this.data.energy/this.data.energy_storage)
	},
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: function(type, src){
      let energyNeed = this.getEnergyStorage() - this.data.energy;
      this.data.energy += src.getAll(energyNeed);
   },
    init: ICore.Machine.initModel,
    activate: ICore.Machine.activateMachine,
    deactivate: ICore.Machine.deactivateMachine,
    destroy: function(){ this.deactivate; if(this.container.getSlot("slot3").id){ this.container.getSlot("slot3").id = this.container.getSlot("slot3").data = this.container.getSlot("slot3").count = 0 } }
}

MAPI.Rotate(industrialfurnacestruct);
MAPI.Register(industrialfurnacecon, industrialfurnacestruct);

ICore.Machine.registerPrototype(BlockID.IndustrialFurnace, industrialfurnacecon)


var IndustrialMaceratorRecipesEffPct = 600

IDRegistry.genBlockID("IndustrialMacerator");
Block.createBlockWithRotation("IndustrialMacerator", [
	{name: "Industrial Macerator", texture: [
["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]
], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IndustrialMacerator, "stone");
Block.setDestroyLevel(BlockID.IndustrialMacerator, 3);
ToolAPI.registerBlockMaterial(BlockID.IndustrialMacerator, "stone", 3, true);
ICore.Render.setStandartModel(BlockID.IndustrialMacerator, [["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]], true)
ICore.Render.registerRenderModel(BlockID.IndustrialMacerator, 0, [["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_e", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]], true)
	
Block.registerDropFunction("IndustrialMacerator", function(coords, id, data, level){ 
	return ICore.Machine.getMachineDrop(coords, id, level, BlockID.machineBlockBasic);
})

var industrialmaceratorstruct =[[
[1, 0, 1, [irsh]],
[1, 0, 0, [irsh]],
[1, 0, -1, [irsh]],

[2, 0, 2, -1],
[2, 0, 1, [irsh]],
[2, 0, 0, [irsh]],
[2, 0, -1, [irsh]],
[2, 0, -2, -1],

[3, 0, 1, [irsh]],
[3, 0, 0, [irsh]],
[3, 0, -1, [irsh]],

[4, 0, 0, -1],

[1, 1, 1, [stsh]],
[1, 1, 0, [stsh]],
[1, 1, -1, [stsh]],

[2, 1, 1, [stsh]],
[2, 1, 0, [0]],
[2, 1, -1, [stsh]],

[3, 1, 1, [stsh]],
[3, 1, 0, [stsh]],
[3, 1, -1, [stsh]],

[1, 2, 1, [irsh]],
[1, 2, 0, [irsh]],
[1, 2, -1, [irsh]],

[2, 2, 1, [irsh]],
[2, 2, 0, [irsh]],
[2, 2, -1, [irsh]],

[3, 2, 1, [irsh]],
[3, 2, 0, [irsh]],
[3, 2, -1, [irsh]]
]]

var imguicon = {
	standart: {
		header:{
			text:{
				text: "Industrial Macerator"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
	    {type: "bitmap", x: 330, y: 275, bitmap: "energy_small_background", scale: 4},
	    {type: "bitmap", bitmap:"macerator_bar_background", x:460, y:200, scale: 4},
	    {type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"cells":{type: "slot", x: 390, y: 200, size:60},
		"slot2":{type: "slot", x: 550, y:200, size:60},
		"slot3":{type: "slot", x: 610, y:200, size:60},
		"slot4":{type: "slot", x: 670, y:200, size:60},
		"slot5":{type: "slot", x: 730, y:200, size:60},
		"slot6":{type: "slot", x: 730, y:270, size:60},
		"progress":{type: "scale", x:460, y:200, direction:0, bitmap: "macerator_bar_scale", scale:4},
		"energy":{type: "scale", x:330, y:275, direction:1, bitmap: "energy_small_scale", scale:4},
		"energyText":{type: "text", x:500, y:100, width:30, height:10, text: ""},
		"struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"needEnergy":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"secLeft":{type: "text", x:500, y:140, width:30, height:10, text: ""},
		"energySec":{type: "text", x:500, y:160, width:30, height:10, text: ""},
		}
}

var imgui = new UI.StandartWindow(imguicon);
//UI.openUI(imgui)

var industrialmaceratorcon = {
	defaultValues: {
		energy_storage: 100000,
		level:10,
		progress:0, 
		end:0,
		key:0,
    },
	
	container: imgui,
    click: function(){
    	Game.prevent()
        this.container.openAs(imgui)
    },
	
	tick: function(){
		//alert(this.data.MAPIact)
		//alert(this.data.energy)
		//this.data.energy_storage = 10000;
		
		var sourseSlot = this.container.getSlot("slot1");
		var cells = this.container.getSlot("cells");
		var resultSlot1 = this.container.getSlot("slot2");
		var resultSlot2 = this.container.getSlot("slot3");
		var resultSlot3 = this.container.getSlot("slot4");
		var resultSlot4 = this.container.getSlot("slot5");
		var emptyCells = this.container.getSlot("slot6");
		
		if(this.data.MAPIact==true){
			this.activate()
			this.container.setText("struct", "");
			
			for(var key in maceratorRecipes){
				if(
				maceratorRecipes[key].sS[0]==sourseSlot.id && 
				maceratorRecipes[key].sS[1]<=sourseSlot.count &&
				maceratorRecipes[key].sS[2]==sourseSlot.data &&
				cells.id==ItemID.cellWater &&
				cells.data == 0 &&
				cells.count >= maceratorRecipes[key].lvl && 
				this.data.level>=maceratorRecipes[key].lvl &&
                this.data.end==0){
					sourseSlot.count-=maceratorRecipes[key].sS[1];
					cells.count-=maceratorRecipes[key].lvl
					this.data.end=round(maceratorRecipes[key].long*20/ IndustrialMaceratorRecipesEffPct * 100, 1)
					this.data.keys=key
					this.container.validateAll();
				}else if(
				maceratorRecipes[key].sS[0]==sourseSlot.id && 
				maceratorRecipes[key].sS[1]<=sourseSlot.count &&
				maceratorRecipes[key].sS[2]==sourseSlot.data &&
                this.data.end==0){
					this.container.setText("needEnergy", "Total energy: "+maceratorRecipes[key].lvl * 10 * maceratorRecipes[key].long+" Eu");
			        this.container.setText("energySec", "Eu/s: "+maceratorRecipes[key].lvl * 10);
				}
			}
			if(this.data.progress<this.data.end && this.data.energy > maceratorRecipes[this.data.keys].lvl * 10){
				this.data.progress++
				this.data.energy -= maceratorRecipes[this.data.keys].lvl * 10
			}
			if(this.data.end<=this.data.progress&&this.data.progress>0&&
			(resultSlot1.id==0||resultSlot1.id==maceratorRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==maceratorRecipes[this.data.keys].rS2[0])&&
            (resultSlot3.id==0||resultSlot3.id==maceratorRecipes[this.data.keys].rS3[0])&&
			(resultSlot4.id==0||resultSlot4.id==maceratorRecipes[this.data.keys].rS4[0])&&
			(resultSlot1.count==0||resultSlot1.count<64-maceratorRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-maceratorRecipes[this.data.keys].rS2[1])&&
			(resultSlot3.count==0||resultSlot3.count<64-maceratorRecipes[this.data.keys].rS3[1])&&
			(resultSlot4.count==0||resultSlot4.count<64-maceratorRecipes[this.data.keys].rS4[1])&&
            (emptyCells.id==0||emptyCells.id==ItemID.cellEmpty)){
				resultSlot1.id = maceratorRecipes[this.data.keys].rS1[0]
				resultSlot1.count += maceratorRecipes[this.data.keys].rS1[1]
				resultSlot1.data = maceratorRecipes[this.data.keys].rS1[2]
				resultSlot2.id = maceratorRecipes[this.data.keys].rS2[0]
				resultSlot2.count += maceratorRecipes[this.data.keys].rS2[1]
				resultSlot2.data = maceratorRecipes[this.data.keys].rS2[2]
				resultSlot3.id = maceratorRecipes[this.data.keys].rS3[0]
				resultSlot3.count += maceratorRecipes[this.data.keys].rS3[1]
				resultSlot3.data = maceratorRecipes[this.data.keys].rS3[2]
				resultSlot4.id = maceratorRecipes[this.data.keys].rS4[0]
				resultSlot4.count += maceratorRecipes[this.data.keys].rS4[1]
				resultSlot4.data = maceratorRecipes[this.data.keys].rS4[2]
				emptyCells.id = ItemID.cellEmpty
				emptyCells.count += maceratorRecipes[this.data.keys].lvl
				emptyCells.data = 0
				this.data.progress=0
				this.data.end=0
				this.container.validateAll();
			}
			
			if(this.data.progress > 0){
			    this.container.setText("secLeft", "Left time: "+round((maceratorRecipes[this.data.keys].long *20 / IndustrialMaceratorRecipesEffPct * 100-this.data.progress)/20, 1));
			    this.container.setText("needEnergy", "Total energy: "+maceratorRecipes[this.data.keys].lvl * 10 * maceratorRecipes[this.data.keys].long+" Eu");
			    this.container.setText("energySec", "Eu/s: "+maceratorRecipes[this.data.keys].lvl * 10);
			}else{
				this.container.setText("secLeft", "Left time: ");
				this.container.setText("needEnergy", "Total energy: ");
			    this.container.setText("energySec", "Eu/s: ");
		    }
		}else{
			this.deactivate()
            this.data.fire=0; this.container.setText("struct", "Incorrect struct");
            this.container.setText("needEnergy", "");
			this.container.setText("energySec", "");
			this.container.setText("energyText", "")
			this.container.setText("secLeft", "")
	    }
	this.container.setScale("progress", this.data.progress/this.data.end)
	this.container.setText("energyText", this.data.energy+" / "+this.data.energy_storage+" Eu")
	this.container.setScale("energy", this.data.energy/this.data.energy_storage)
	},
	
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: function(type, src){
      var energyNeed = this.getEnergyStorage() - this.data.energy;
      this.data.energy += src.getAll(energyNeed);
   },
   init: ICore.Machine.initModel,
    activate: ICore.Machine.activateMachine,
	deactivate: ICore.Machine.deactivateMachine,
	destroy: this.deactivate,
}

MAPI.Rotate(industrialmaceratorstruct);
MAPI.Register(industrialmaceratorcon, industrialmaceratorstruct);

ICore.Machine.registerPrototype(BlockID.IndustrialMacerator, industrialmaceratorcon)
	
//industrial
	
	Callback.addCallback("PostLoaded", function(){
	if(Config.hardmode){
CreateHelmetRecipe(ItemID.compositeHelmet, "Alloy", 2)
CreateChestplateRecipe(ItemID.compositeChestplate, "Alloy", 2)
CreateLeggingsRecipe(ItemID.compositeLeggings, "Alloy", 2)
CreateBootsRecipe(ItemID.compositeBoots, "Alloy", 2)

CreateHelmetRecipe(ItemID.bronzeHelmet, "Bronze", 2)
CreateChestplateRecipe(ItemID.bronzeChestplate, "Bronze", 2)
CreateLeggingsRecipe(ItemID.bronzeLeggings, "Bronze", 2)
CreateBootsRecipe(ItemID.bronzeBoots, "Bronze", 2)

CreatePickaxeRecipe(ItemID.bronzePickaxe, "Bronze", 2)
CreateAxeRecipe(ItemID.bronzeAxe, "Bronze", 2)
CreateHoeRecipe(ItemID.bronzeHoe, "Bronze", 2)
CreateSwordRecipe(ItemID.bronzeSword, "Bronze", 2)
CreateShovelRecipe(ItemID.bronzeShovel, "Bronze", 2)

    Recipes.ReplaceWithShaped({id: ItemID.ingotAlloy, count: 1, data: 0}, ["sss", "bbb", "ttt"], ['s', ItemID.ingotStainless, 0, 'b', ItemID.ingotBronze, 0, 't', ItemID.ingotTin, 0])
	
	ReplaceRecipeWithTool({id:ItemID.circuitBasic, count:1, data:0}, [
	"clc",
	"cpc",
	"crc"], ['c', ItemID.cableCopper, 0, 'p', ItemID.plateSilver, 0, 'r', 331, 0], [solderings], 2)
	
	ReplaceRecipeWithTool({id:ItemID.lappack, count:1, data:Item.getMaxDamage(ItemID.lappack)}, [
	"plp",
	"ses",
	"pap"], ['p', ItemID.plateLapis, 0, 's', ItemID.gemSaphire, 0, 'a', ItemID.circuitAdvanced, 0, 'e', ItemID.storageLapotronCrystal, -1], [solderings], 2)
	
	Recipes.ReplaceWithShaped({id:ItemID.dustEnergium, count:9, data:0}, [
	"aba",
	"bab", 
	"aba"], ['a', ItemID.dustRuby, 0, 'b', ItemID.dustDiamond, 0])
	
	ReplaceRecipeWithTool({id:ItemID.circuitAdvanced, count:1, data:0}, [
	"ala",
	"aca",
	"apa"], ['a', ItemID.cableGold, 0, 'p', ItemID.plateLapis, 0, 'c', ItemID.circuitBasic, 0], [solderings], 2)
	
	Recipes.ReplaceWithShaped({id: ItemID.storageLapotronCrystal, count: 1, data: Item.getMaxDamage(ItemID.storageLapotronCrystal)}, [
	"aca",
	"aea",
	"aca"], ['a', ItemID.dustSaphire, 0, 'c', ItemID.circuitAdvanced, 0, 'e', ItemID.storageCrystal, -1])
	
	ReplaceRecipeWithTool({id: BlockID.massFabricator, count: 1, data: 0}, ["vwv", "lal", "vlv"], ['v', ItemID.moduleTungsten, 0, 'l', ItemID.lapotronicOrb, 0, 'a', BlockID.machineBlockAdvanced, 0], [wrenchs], 2)
	}
	
Recipes.deleteRecipe({id:ItemID.plateGold, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.craftingHammer, count:1, data:0});
Recipes.deleteRecipe({id:ItemID.craftingCutter, count:1, data:0});
Recipes.deleteRecipe({id:ItemID.wrenchBronze, count:1, data:0});

Recipes.deleteRecipe({id:BlockID.blockCopper, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotCopper, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockLead, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotLead, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockSteel, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotSteel, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockBronze, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotBronze, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockTin, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotTin, count:9, data:0})

Recipes.removeFurnaceRecipe(ItemID.latex, -1)

Recipes.removeFurnaceRecipe(BlockID.oreLead, -1)

//sheathings
CreateRecipeWithTool({id:irsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltIron, 0, 'm', ItemID.moduleStainless, 0, 'p', ItemID.circuitBasic, 0], [screwdrivers], 2)
Recipes.addShaped({id:stsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltSteel, 0, 'm', ItemID.moduleSteel, 0, 'p', ItemID.circuitAdvanced, 0, 's', irsh, 0])
Recipes.addShaped({id:chsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltChrome, 0, 'm', ItemID.moduleChrome, 0, 'p', ItemID.integratedCirquit, 0, 's', stsh, 0])

//other
CreateRecipeWithTool({id: ItemID.dataOrb, count: 1, data: 0}, ["ala", "pep", "apa"], ['a', ItemID.circuitAdvanced, 0, 'p', ItemID.plateStainless, 0, 'e', ItemID.dustEmerald, 0], [solderings], 2)
CreateRecipeWithTool({id: ItemID.integratedCirquit, count: 1, data: 0}, ["wlw", "waw", "wsw"], ['w', ItemID.cableOptic, 0, 'a', ItemID.circuitAdvanced, 0, 's', ItemID.plateNickel, 0], [solderings, screwdrivers], 2)
CreateRecipeWithTool({id: ItemID.lapotronicOrb, count: 1, data: 0}, ["ala", "pep", "apa"], ['a', ItemID.integratedCirquit, 0, 'p', ItemID.plateTitanium, 0, 'e', ItemID.dataOrb, 0], [solderings], 2)
	
	//machines
    CreateRecipeWithTool({id: BlockID.IndustrialMacerator, count: 1, data: 0}, ["mwm", "obo", "mom"], ['m', ItemID.moduleSteel, 0, 'o', ItemID.dataOrb, 0, 'b', BlockID.macerator, 0], [wrenchs], 2)
    CreateRecipeWithTool({id: BlockID.IndustrialFurnace, count: 1, data: 0}, ["mwm", "obo", "mom"], ['m', ItemID.moduleSteel, 0, 'o', ItemID.dataOrb, 0, 'b', BlockID.electricFurnace, 0], [wrenchs], 2)
})

    Callback.addCallback("PreLoaded", function(){
	BlockID.oreCopper = 1
	BlockID.oreTin = 1
	BlockID.oreLead = 1
	BlockID.oreUranium = 1
	BlockID.oreIridium = 1
	

	ICore.Recipe.registerRecipesFor("extractor", {
		"ItemID.latex": {id: ItemID.dustRubber, count: 3, data: 0, level: 1, time: 150},
		"BlockID.rubberTreeLog": {id: ItemID.dustRubber, count: 1, data: 0, level: 1, time: 150},
		289: {id: ItemID.dustSulfur, count: 1, data: 0, level: 1, time: 150},		
		37: {id: 351, count: 2, data: 11, level: 1, time: 150},
		38: {id: 351, count: 2, data: 1, level: 1, time: 150},
		"38:2": {id: 351, count: 2, data: 13, level: 1, time: 150},
		"38:3": {id: 351, count: 2, data: 7, level: 1, time: 150},
		"38:4": {id: 351, count: 2, data: 1, level: 1, time: 150},
		"38:5": {id: 351, count: 2, data: 14, level: 1, time: 150},
		"38:6": {id: 351, count: 2, data: 7, level: 1, time: 150},
		"38:7": {id: 351, count: 2, data: 9, level: 1, time: 150},
		"38:8": {id: 351, count: 2, data: 7, level: 1, time: 150},
		45: {id: 336, count: 4, data: 0, level: 1, time: 150},
		47: {id: 340, count: 3, data: 0, level: 1, time: 150},
		80: {id: 332, count: 4, data: 0, level: 1, time: 150},
		82: {id: 337, count: 4, data: 0, level: 1, time: 150},
		112: {id: 405, count: 4, data: 0, level: 1, time: 150},
		175: {id: 351, count: 3, data: 11, level: 1, time: 150},
		"175:1": {id: 351, count: 3, data: 13, level: 1, time: 150},
		"175:4": {id: 351, count: 3, data: 1, level: 1, time: 150},
		"175:5": {id: 351, count: 3, data: 9, level: 1, time: 150},
	}, true);
	ICore.Recipe.registerRecipesFor("forgehammer", {}, true)
})
	
Callback.addCallback("PostLoaded", function(){
		for(var w in ATMat.wires){
		    for(var p in ATMat.plates){
			    var cables = ATMat.wires[w]
			    var plates = ATMat.plates[p]
			    if(cables.mat == plates.mat){
		            ICore.Recipe.addRecipeFor("metalFormer1", plates.id, {id: cables.id, count: 1})
		         }
		     }
		 }
		for(var p in ATMat.plates){
		    for(var i in ATMat.ingots){
			    var ingots = ATMat.ingots[i]
			    var plates = ATMat.plates[p]
			    if(plates.mat == ingots.mat){
		            ICore.Recipe.addRecipeFor("metalFormer0", ingots.id, {id: plates.id, count: 1})
		         }
		     }
		 }
         for(var o in ATMat.ores){
         	var ores = ATMat.ores[o]
             for(var keys in ATMech.maceratorRecipes){
             	var rec = ATMech.maceratorRecipes[keys]
                 if(ores.id == rec.sS[0]){
                 	ICore.Recipe.addRecipeFor("metalFormer0", ores.id, {id: rec.rS1[0], count: rec.rS1[1]});
                 }
             }
         }
         for(var key in ATMech.centrifugeRecipes){
         	var r = ATMech.centrifugeRecipes[key]
             ICore.Recipe.addRecipeFor("thermalCentrifuge", r.sS[0], {result: r.rS, heat: r.lvl * 400});
         }
         for(var key in ATMech.oreWasherRecipes){
         	var r = ATMech.oreWasherRecipes[key]
             ICore.Recipe.addRecipeFor("oreWasher", r.sS[0], r.rS);
         }
         for(var key in ATMech.maceratorRecipes){
         	var r = ATMech.maceratorRecipes[key]
             ICore.Recipe.addRecipeFor("macerator", r.sS[0], {id: r.rS1[0], count: r.rS1[1], data: r.rS1[2]});
         }
         for(var b in ATMat.blocks){
         	let block = ATMat.blocks[b]
             let ing = ATMat.RetArg("ingots", block.mat, "id")
             let ls = ATMat.RetArg("littleStones", block.mat, "id")
             let g = ATMat.RetArg("gems", block.mat, "id")
         	if(ing){
                 ICore.Recipe.addRecipeFor("compressor", ing, {id: block.id, data: block.data, ingredientCount: 9})
             }else 
             if(!ing && !g && ls){
             	ICore.Recipe.addRecipeFor("compressor", ls, {id: block.id, data: block.data, ingredientCount: 9})
             }else
             if(g){
             	ICore.Recipe.addRecipeFor("compressor", g, {id: block.id, data: block.data, ingredientCount: 9})
             }
         }
         
         ICore.Recipe.addRecipeFor("macerator", BlockID.redcobblestone, {id: ItemID.Red_Granit, count: 4, data: 0});
});

Callback.addCallback("PreLoaded", function(){
	BlockID.oreCopper = 1
	BlockID.oreTin = 1
	BlockID.oreLead = 1
	BlockID.oreUranium = 1
	BlockID.oreIridium = 1
	ItemID.cableCopper0 = ItemID.cableCopper
	ItemID.cableTin0 = ItemID.cableTin
	ItemID.cableIron0 = ItemID.cableIron
	ItemID.cableGold0 = ItemID.cableGold
})
    
    let AllWrenchsID = function(it){
	let code = null
	for(var i in ATMat.wrenchs){
		let id = ATMat.wrenchs[i].id
		code == null ? code = id == it : code = code || it == id
    }
    return code
}

Callback.addCallback("PostLoaded", function(){
    //alert("a")
    Callback.addCallback("DestroyBlockStart", function(coords, block){
	    if(ICore.Machine.machineIDs[block.id]){
		    var item = Player.getCarriedItem();
		    if(AllWrenchsID(item.id) || (item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id))){
			    Block.setTempDestroyTime(block.id, 0);
		    }
	    }
    });

        ICore.Machine.getMachineDrop = function(coords, blockID, level, standartDrop){        	
        	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		    var item = Player.getCarriedItem();
		    if(AllWrenchsID(item.id)){
			    
			    PlaySoundFile("Wrench.ogg")
			    ToolAPI.breakCarriedTool(1);
			    World.setBlock(coords.x, coords.y, coords.z, 0);
			    if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			    if(item.data == Item.getMaxDamage(item.id)){ Player.setCarriedItem(0, 0, 0); }
			
			    return [[standartDrop || blockID, 1, 0]];
		    }
		    if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			    PlaySoundFile("Wrench.ogg")
			    Player.setCarriedItem(item.id, 1, item.data + 500);
			    World.setBlock(coords.x, coords.y, coords.z, 0);
			    return [[blockID, 1, 0]];
		    }
            return [];
        }
})
})




// file: common/integration/Foresty.js

ModAPI.addAPICallback("ForestryAPI", function(api){
	Callback.addCallback("PostLoaded", function(){
	//Recipes.deleteRecipe({id: ItemID.bronzePickaxe, count:1, data:0}
	//Recipes.deleteRecipe({id: ItemID.bronzeShovel, count:1, data:0})
if(Config.hardmode){
	Recipes.deleteRecipe({id: ItemID.canEmpty, count: 12, data: 0})
	Recipes.deleteRecipe({id: ItemID.waxCapsuleEmpty, count: 4, data: 0})
	Recipes.deleteRecipe({id: ItemID.refractoryEmpty, count: 4, data: 0})
	
	ReplaceRecipeWithTool({id: ItemID.sturdyMachine, count:1, data:0},
	    ['aaa', 'aha', 'aaa'], ['a', ItemID.plateBronze, 0], [hammers], 2)
	
	CreateRecipeWithTool({id: ItemID.canEmpty, count: 4, data: 0}, [
        " x ",
        "xhx",
        " x "
    ], ['x', ItemID.plateTin, 0], [hammers], 2);
    
    Recipes.addShaped({id: ItemID.waxCapsuleEmpty, count: 1, data: 0}, [
        " x ",
        "xax",
        " x "
    ], ['x', ItemID.beeswax, 0, 'a', ItemID.canEmpty, 0]);
    
	Recipes.addShaped({id: ItemID.refractoryEmpty, count: 1, data: 0}, [
        " x ",
        "xax",
        " x "
    ], ['x', ItemID.refractoryWax, 0, 'a', ItemID.canEmpty, 0]);
}
})

	Callback.addCallback("PreLoaded", function(){
		BlockID.oreCopper = 1
		BlockID.oreTin = 1
		BlockID.oreApatite = 1
	})
	ATMat.MaterialRegister("Apatite", GetNoMetallsParams(false), {block: "no_metall", adRes: ["Lapis", "Manganese"], temp:200, lvl:1}, "#00E5FF")
    ATMat.OreRegister("Apatite", [["Apatite", 2],  ["Lapis", 1], ["Manganese", 0]], ["Stone", "black_granite", "red_granite", "End"], true, true, "#00E5FF", "COAL", true)
	//ATGen.RegisterLargeOreDepositeOnEarth([BlockID.oreApatiteStone, BlockID.oreApatiteStone, BlockID.oreLapisStone, BlockID.oreLapisStone, BlockID.oreApatiteStone, BlockID.oreApatiteStone, BlockID.oreApatiteStone, BlockID.oreApatiteStone], 80, tileTemplate, 32, 48, {x:32, y:8, z:32}, 20, 1)
})




// file: common/integration/ThermalExpansion.js

ModAPI.addAPICallback("ThermalExpansionAPI", function(api){
	ATMat.MaterialRegister("Mithril", GetNaturalMetallsParams(), {adRes: ["Silver", "Platinum"], tool: {durability: 1200, level: 3, efficiency:4.4, damage: 3, enchantability: 32, def: 12}, temp:2300,  long:100, lvl:3}, "#F8DAFF")
	ATMat.MaterialRegister("Constantan", GetAlloyParams(), {tool: {durability: 655, level: 2, efficiency:3.65, damage: 2, enchantability: 32, def: 10}, temp:2500,  long:50, lvl:2}, "#FF9C4F")
	ATMat.MaterialRegister("Signalum", GetAlloyParams(), {tool: {durability: 230, level: 2, efficiency:3, damage: 1, enchantability: 24, def: 6}, temp:1900,  long:30, lvl:2}, "#A3291E")
	ATMat.MaterialRegister("Enderium", GetAlloyParams(), {tool: {durability: 475, level: 4, efficiency:5, damage: 4, enchantability: 32, def: 16}, temp:2150,  long:40, lvl:2}, "#007776")
	
	ATMat.OreRegister("Mithril", [["Mithril", 2], ["Silver", 1], ["Platinum", 0]], ["Stone"],  true, true, "#F8DAFF", "METALL", true, 1)
	
	Callback.addCallback("PostLoaded", function(){
	if(Config.hardmode){
	    CreateSet("Copper", 1)
	    CreateSet("Tin", 1)
	    CreateSet("Silver", 2)
	    CreateSet("Aluminum", 2)
	    CreateSet("Lead", 1)
	    CreateSet("Nickel", 1)
	    CreateSet("Platinum", 3)
	    CreateSet("Steel", 3)
	    CreateSet("Electrum", 2)
	    CreateSet("Invar", 2)
	    CreateSet("Bronze", 2)
	    CreateSet("Constantan", 2)
	    //CreateSet("Iridium", 1)
	    //CreateSet("Mithril", 1)
	
	    Recipes.removeFurnaceRecipe(ItemID.dustBronze, 0)
        Recipes.removeFurnaceRecipe(ItemID.dustPlatinum, 0)
        Recipes.removeFurnaceRecipe(ItemID.dustInvar, 0)
        Recipes.removeFurnaceRecipe(ItemID.dustElectrum, 0)
        Recipes.removeFurnaceRecipe(ItemID.dustMithril, 0)
        
        Recipes.removeFurnaceRecipe(BlockID.oreMithril, -1)
    }
    
    for(var key in ATMech.maceratorRecipes){
         var r = ATMech.maceratorRecipes[key]
        api.PulverizerRecipes.add({
            input: {id: r.sS[0], data: r.sS[2]},
            result: {id: r.rS1[0], data: r.rS1[2], count: r.rS1[1]},
            dop: {id: r.rS2[0], data: r.rS2[2], count: r.rS2[1], chance: 0.15}
        });
    }
})
	
	Callback.addCallback("PreLoaded", function(){
	    BlockID.oreLead = 1
	    BlockID.oreSilver = 1
	    BlockID.oreAluminium = 1
	    BlockID.oreNikel = 1
	    BlockID.orePlatinum = 1
	    BlockID.oreCopper = 1
	    BlockID.oreTin = 1
	    BlockID.oreIridium = 1
	    BlockID.oreMithril = 1
	})
})




// file: common/integration/Achievements.js

let AcApi

ModAPI.addAPICallback("AchievementsAPI", function(api){
    AcApi = api;

	   Callback.addCallback("PostLoaded", function(){
		//Recipes.ReplaceWithShaped({id:ItemID.StoneHammer, count:1, data:0}, ["aa ", "aab", "aa"], ['a', litst, 0, 'b', 280, 0], function(){api.AchievementAPI.give("altech", "stone_hammer")});
		Recipes.ReplaceWithShaped({id:311, count:1, data:0}, [
	        "a a",
	        "aaa",
	        "aaa"
        ], ['a', ItemID.gemDiamond, 0], function(){api.AchievementAPI.give("story", "shiny_gear")});
	   });
	   Callback.addCallback("DestroyBlock", function (coords, block, player) {
          switch (block.id) {
          case 14:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 15:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 16:
            api.AchievementAPI.give("story", "mine_stone");
            break;   
          case 56:
            api.AchievementAPI.give("story", "mine_stone");
            break;  
          case 73:
            api.AchievementAPI.give("story", "mine_stone");
            break;  	
          case 74:
            api.AchievementAPI.give("story", "mine_stone");
            break;  
          case 129:
            api.AchievementAPI.give("story", "mine_stone");
            break; 
          case 21:
            api.AchievementAPI.give("story", "mine_stone");
            break;   			
          case BlockID.oreDiamondStone:
            api.AchievementAPI.give("story", "mine_diamond");
            break;
            case BlockID.oreDiamondEnd:
            api.AchievementAPI.give("story", "mine_diamond");
            break;
         }           
       });
	   //Achievements
       api.AchievementAPI.registerGroup({ 
	        unique: "altech_otherworld", 
			name: "AlTech Otherworld", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.stone",
			icon: { 
			    id: BlockID.oreGoldStone
			}
	   });
	
	    api.AchievementAPI.registerGroup({ 
	        unique: "altech_nether", 
			name: "AlTech Nether", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.nether",
			icon: { 
			    id: BlockID.oreGoldNether
			}
	   });
	
	    api.AchievementAPI.registerGroup({ 
	        unique: "altech_end", 
			name: "AlTech End", 
			width: 1000, 
			height: 1000, 
			size: 40, 
			bgTexture: "groups_bg.end",
			icon: { 
			    id: BlockID.oreGoldEnd
			}
	   });
	   
	   /*api.AchievementAPI.register("altech", { 
	        unique: "stone_hammer",
			name: { 
			    text: "First Tool!",
				translate: "at.stone_hammer"
			},
			description: { 
			    text: "Craft a Stone hammer",
				translate: "at.stone_hammer_info"
			},
			column: 1, 
			row: 2,
			item: {
				id: ItemID.StoneHammer
			}
	   });
	
	api.AchievementAPI.register("altech", { 
	        unique: "comp_furnace",
			name: { 
			    text: "First furnace!",
				translate: "at.comp_furnace"
			},
			description: { 
			    text: "Build a cobblestone furnace!",
				translate: "at.comp_furnace_info"
			},
			column: 1, 
			row: 3,
			item: {
				id: BlockID.compactedfurnace
			}
	   });*/
	
	   let x = 0
	   let y = 0
	   for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresEarth.length; a++){
			    let ids = ATGen.oresEarth[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresEarth[a]
		                Achievement.AchievementRegister(api, "altech_otherworld", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"Stone");
		
		              //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	
	   x = 0
       y = 0
	   for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresNether.length; a++){
			    let ids = ATGen.oresNether[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresNether[a]
		                Achievement.AchievementRegister(api, "altech_nether", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"Nether");
		
		               //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	  
	    x = 0
        y = 0
        for(let i = 0; i < ATMat.ores.length; i++){
		    for(let a = 0; a < ATGen.oresEnd.length; a++){
			    let ids = ATGen.oresEnd[a].ids
		        for(let b = 0; b < ids.length; b++){
			        if(ids[b] == ATMat.ores[i].id){        
		                let ores = ATMat.ores[i]
		                let deposite = ATGen.oresEnd[a]
		                Achievement.AchievementRegister(api, "altech_end", ores.type, {text: ores.type+" ore"}, {text: "Min Y: "+deposite.minY+", max Y: "+deposite.maxY+", chance: "+deposite.chance+"%"}, x, y, "BlockID.ore"+ores.type+"End");
		
		               //alert(x+", "+y)
	                   if(x < 14){
		                   x++
                       }else{
                       	x=0;
                           y++
                       }
	               }
	           }
	       }
	   }
	   
	   //Achievement.AchievementRegister(api, "altech", "flint_pick", {text: "Alternative tool!", translate: "at.flint_pick"}, {text: "Craft a flint pickaxe", translate: "at.flint_pick_info"}, 2, 2, "ItemID.flintpickaxe", "stone_hammer");
	   //Achievement.AchievementRegister(api, "altech", "blast_furnace", {text: "Oh, so hot!", translate: "at.blast_furnace"}, {text: "Build a blast furnace", translate: "at.blast_furnace_info"}, 2, 3, "BlockID.blastfurnace", "comp_furnace");

	   //Translation
	   //Translation.addTranslation("at.stone_hammer", {en: "First Tool!", ru: "Первый инструмент!"})
	   //Translation.addTranslation("at.stone_hammer_info", {en: "Craft a Srone hammer.", ru: "Скрафтить каменный молот"})
});




