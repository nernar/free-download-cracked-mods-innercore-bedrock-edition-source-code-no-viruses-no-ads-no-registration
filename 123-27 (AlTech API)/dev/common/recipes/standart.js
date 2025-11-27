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