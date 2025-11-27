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