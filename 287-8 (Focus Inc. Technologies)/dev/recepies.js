var CRAFTING_TOOL_MAX_DAMAGE = 96;

function addRecipeWithCraftingTool(result, data, tool){
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function(api, field, result){
        for (var i in field){
            if (field[i].id == tool){
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_MAX_DAMAGE){
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}

Callback.addCallback("LevelLoaded", function(){
alert("recipes");
    
    //tools
    Recipes.deleteRecipe({id: ItemID.craftingHammer, count: 1, data: 0});
    Recipes.addShaped({id: ItemID.craftingHammer, count: 1, data: 0}, [
    "xx ",
    "x##",
    "xx "
    ], ['x', 265, 0, '#', ItemID.stickImpregnated, 0]);
    
    Recipes.deleteRecipe({id: ItemID.scoop, count: 1, data: 0});
    Recipes.addShaped({id: ItemID.scoop, count: 1, data: 0}, [
        "sws",
        "sss",
        " s "
    ], ['w', 35, -1, 's', ItemID.stickImpregnated, -1]);
    
    //plates
    Recipes.deleteRecipe({id: ItemID.plateCopper, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateTin, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateBronze, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateIron, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateSteel, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateGold, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.plateLead, count: 1, data: 0});
    
    addRecipeWithCraftingTool({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateTin, count: 1, data: 0}, [{id: ItemID.ingotTin, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{id: 266, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateLead, count: 1, data: 0}, [{id: ItemID.plateLead, data: 0}], ItemID.craftingHammer);
    
    //Capacitor
    Recipes.deleteRecipe({id: ItemID.basicCapacitor, count: 1, data: 0});
    Recipes.addShaped({id: ItemID.basicCapacitor, count: 1, data: 0}, [
    " nd",
    "nin",
    "dn "
    ], ['i', 266, 0, 'n', ItemID.nuggetSignalum, 0, 'd', 331, 0]);
    
    Recipes.deleteRecipe({id: ItemID.doublelayerCapacitor, count: 1, data: 0});
    Recipes.addShaped({id: ItemID.doublelayerCapacitor, count: 1, data: 0}, [
    " a ",
    "clc",
    " a "
    ], ['l', ItemID.thermionicTubeBlaze, 0, 'a', ItemID.ingotSignalum, 0, 'c', ItemID.basicCapacitor, 0]);
    
    //chassi and frames 
    Recipes.deleteRecipe({id: BlockID.machineBlockBasic, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.machineBlockBasic, count: 1, data: 0}, [
        "ppp",
        "pgp",
        "ppp"
    ],[
        'p',ItemID.plateIron,0,
        'g',ItemID.gearTin,0
    ]);
    
    Recipes.deleteRecipe({id: BlockID.machineFrameBasic, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.machineFrameBasic, count: 1, data: 0}, [
        "igi",
        "gbg",
        "igi"
    ], ['g', 20, 0, 'i', 265, 0, 'b', BlockID.machineBlockBasic, 0]); 
    
    Recipes.deleteRecipe({id: BlockID.machineChassi, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.machineChassi, count: 1, data: 0}, [
        "blb",
        "cfc",
        "blb"
    ], [
    'c', ItemID.basicCapacitor, 0,
    'f', BlockID.machineFrameBasic, 0,
    'l', ItemID.ingotSignalum, 0,
    'b', 101, 0
    ]);

    
//Machines 
   //furnace branch
    Recipes.deleteRecipe({id: BlockID.redFurnace, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.redFurnace, count: 1, data: 0}, [
        " f ",
        "b#b",
        "gcg"
    ], [
    'f', BlockID.electricFurnace, 0,
    '#',BlockID.machineFrameBasic, 0,
    'g', ItemID.gearCopper, 0,
    'b', 45, 0,
    'c', ItemID.redstoneReceptionCoil, 0
    ]);
    
    Recipes.deleteRecipe({id: BlockID.alloySmelter, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.alloySmelter, count: 1, data: 0}, [
        "oio",
        "fmf",
        "oco"
    ], [
    'o', 49, 0,
    'f', BlockID.electricFurnace, 0,
    'i', BlockID.inductionFurnace, 0,
    'm', BlockID.machineChassi, 0,
    'c', ItemID.basicCapacitor, 0
    ]);

    
        

   //Dusters)
    Recipes.deleteRecipe({id: BlockID.macerator, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.macerator, count: 1, data: 0}, [
        "fdf",
        "c#c",
        " e "
    ], [
    'd', 264, 0,
    'f', 318, 0,
    'c', 4, 0,
    '#',BlockID.machineBlockBasic, 0,
    'e', ItemID.circuitBasic, 0
    ]);
   
    Recipes.deleteRecipe({id: BlockID.pulverizer, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.pulverizer, count: 1, data: 0}, [
        " p ",
        "f#f",
        "gcg"
    ], [
    'p', BlockID.macerator, 0,
    'f', 318, 0,
    '#',BlockID.machineFrameBasic, 0,
    'g', ItemID.gearCopper, 0,
    'c', ItemID.redstoneReceptionCoil, 0
    ]);
    
    Recipes.deleteRecipe({id: BlockID.sagmill, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.sagmill, count: 1, data: 0}, [
        "ooo",
        "p#p",
        "ici"
    ], [
    'p', 33, 0,
    'o', 49, 0,
    '#',BlockID.machineChassi, 0,
    'i', 265, 0,
    'c', ItemID.basicCapacitor, 0
    ]);
    
   //generator
    Recipes.deleteRecipe({id: BlockID.sagmill, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.sagmill, count: 1, data: 0}, [
        "gfg",
        "p#p",
        "ici"
    ], [
    'p', ItemID.circuitBasic, 0,
    'c', BlockID.machineChassi, 0,
    '#', BlockID.machineFrameBasic, 0,
    'f', BlockID.ironFurnace, 0,
    'i', 265, 0,
    'g', ItemID.gearIron, 0
    ]);
});