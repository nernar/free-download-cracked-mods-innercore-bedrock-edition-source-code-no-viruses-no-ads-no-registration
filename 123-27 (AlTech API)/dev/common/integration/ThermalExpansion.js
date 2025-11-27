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