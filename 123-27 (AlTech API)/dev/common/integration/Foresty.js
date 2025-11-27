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