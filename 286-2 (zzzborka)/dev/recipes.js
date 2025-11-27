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
    //gear
    
    Recipes.deleteRecipe({id: ItemID.gearCopper, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.gearTin, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.gearBronze, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.gearIron, count: 1, data: 0});
    Recipes.deleteRecipe({id: ItemID.gearGolden, count: 1, data: 0});
    
    addRecipeWithCraftingTool({id: ItemID.gearCopper, count: 1, data: 0}, [{id: ItemID.gearWooden, data: 0}   ,{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.gearTin, count: 1, data: 0}, [ {id: ItemID.gearWooden, data: 0}  ,{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.gearBronze, count: 1, data: 0}, [ {id: ItemID.gearWooden, data: 0}   ,{id: ItemID.ingotBronze, data: 0},{id: ItemID.ingotBronze, data: 0},{id: ItemID.ingotBronze, data: 0},{id: ItemID.ingotBronze, data: 0}], ItemID.craftingHammer);    
    addRecipeWithCraftingTool({id: ItemID.gearIron, count: 1, data: 0}, [ {id: ItemID.gearWooden, data: 0}   ,{id: 265, data: 0},{id: 265, data: 0},{id: 265, data: 0},{id: 265, data: 0}], ItemID.craftingHammer);    
    addRecipeWithCraftingTool({id: ItemID.gearGolden, count: 1, data: 0}, [ {id: ItemID.gearWooden, data: 0}   ,{id: 266, data: 0},{id: 266, data: 0},{id: 266, data: 0},{id: 266, data: 0}], ItemID.craftingHammer);    
    
    /*
    Recipes.addShapeless({id: ItemID.gearCopper, count: 1, data: 0},[{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0}]);
    Recipes.addShapeless({id: ItemID.gearTin, count: 1, data: 0},  [{id: ItemID.ingotTin,data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0}]);
    Recipes.addShapeless({id: ItemID.gearBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0},{id: ItemID.ingotBronze,data: 0}]);

    */
    //ingot
    Recipes.deleteRecipe({id: ItemID.ingotBronze, count: 4, data: 0});
    
    //dust
        Recipes.addShapeless({id: ItemID.dustIron, count: 1, data: 0}, [{id: 265,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustGold, count: 1, data: 0}, [{id: 266,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustTin, count: 1, data: 0}, [{id: ItemID.ingotTin,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustIron, count: 1, data: 0}, [{id: ItemID.ingotSteel,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustLead, count: 1, data: 0}, [{id: ItemID.ingotLead,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustSilver, count: 1, data: 0}, [{id: ItemID.ingotSilver,data: 0},{id: 318,data: 0}]);
        Recipes.addShapeless({id: ItemID.dustBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze,data: 0},{id: 318,data: 0}]);
    //casing
    
    Recipes.deleteRecipe({id: BlockID.blockMachineIron, count: 1, data: 0});
    Recipes.addShaped({id: BlockID.blockMachineIron, count: 1, data: 0}, [
        "xax",
        "aba",
        "xax"
    ],[
        'a',ItemID.gearIron,0,
        'b',BlockID.blockMachineStone,0,
        'x',265,0
    ]);
    
    Recipes.deleteRecipe({id: ItemID.sturdyMachine, count: 1, data: 0});
    Recipes.addShaped({id: ItemID.sturdyMachine, count: 1, data: 0}, [
        "WWW",
        "WzW",
        "WWW"
    ], ['W', ItemID.ingotBronze, -1,'z', BlockID.blockMachineIron,0]);
    //capsule
    Recipes.deleteRecipe({id: ItemID.canEmpty, count: 12, data: 0});
    modsAPI.ForestryAPI.CarpenterManager.registerRecipe({
        input: {
            "slot0": {id: ItemID.ingotTin, data: 0},
            "slot1": {id: ItemID.ingotTin, data: 0},
            "slot2": {id: ItemID.ingotTin, data: 0},
            "slot3": {id: ItemID.ingotTin, data: 0},
            "slot5": {id: ItemID.ingotTin, data: 0},
            "slot6": {id: ItemID.ingotTin, data: 0},
            "slot7": {id: ItemID.ingotTin, data: 0},
            "slot8": {id: ItemID.ingotTin, data: 0}
        },
        liquid: "water",
        liquidAmount: 2,
        time: 50,
        output: {
            id: ItemID.canEmpty,
            count: 1,
            data: 0
        }
    });
    //from stick
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
    
    addRecipeWithCraftingTool({id: ItemID.plateCopper, count: 1, data: 0}, [{id: ItemID.ingotCopper, data: 0},{id: ItemID.ingotCopper, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateTin, count: 1, data: 0}, [{id: ItemID.ingotTin, data: 0},{id: ItemID.ingotTin, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateBronze, count: 1, data: 0}, [{id: ItemID.ingotBronze, data: 0},{id: ItemID.ingotBronze, data: 0}], ItemID.craftingHammer);
    addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id: 265, data: 0},{id: 265, data: 0}], ItemID.craftingHammer);

    
});

