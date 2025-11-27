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