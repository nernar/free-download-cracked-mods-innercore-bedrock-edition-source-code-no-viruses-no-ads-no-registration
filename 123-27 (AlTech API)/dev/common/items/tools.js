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