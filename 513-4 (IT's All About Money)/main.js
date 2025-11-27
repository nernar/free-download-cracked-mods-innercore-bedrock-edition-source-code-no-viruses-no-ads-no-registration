importLib("ToolType", "*");
IMPORT("RecipeTileEntityLib");


IDRegistry.genItemID("onedollar");
Item.createItem("onedollar", "One Dollar", {name: "dollaro"}, {stack: 64});
IDRegistry.genItemID("tdollar");
Item.createItem("tdollar", "Two Dollars", {name: "dollart"}, {stack: 64});
IDRegistry.genItemID("fdollar");
Item.createItem("fdollar", "Five Dollars", {name: "dollarf"}, {stack: 64});
IDRegistry.genItemID("tndollar");
Item.createItem("tndollar", "Ten Dollars", {name: "dollartn"}, {stack: 64});
IDRegistry.genItemID("twdollar");
Item.createItem("twdollar", "Twenty Dollars", {name: "dollartw"}, {stack: 64});
IDRegistry.genItemID("ffdollar");
Item.createItem("ffdollar", "Fifty Dollars", {name: "dollarff"}, {stack: 64});
IDRegistry.genItemID("hdollar");
Item.createItem("hdollar", "Hundred Dollars", {name: "dollarh"}, {stack: 64});
Recipes.addShaped({id: ItemID.onedollar, count: 8, data: 0}, [
		"ccc",
		"aba",
		"ccc"
	], ['b', 266, 0, 'a', ItemID.linen, 0, 'c', ItemID.cotton, 0]);
Recipes.addShaped({id: ItemID.tdollar, count: 1, data: 0}, [
		"aax",
		"xxx",
		"ccc"
	], ['a', ItemID.onedollar, 0]);
Recipes.addShaped({id: ItemID.fdollar, count: 1, data: 0}, [
		"aax",
		"aaa",
		"ccc"
	], ['a', ItemID.onedollar, 0]);
Recipes.addShaped({id: ItemID.tndollar, count: 1, data: 0}, [
		"aax",
		"aaa",
		"ccc"
	], ['a', ItemID.tdollar, 0]);
Recipes.addShaped({id: ItemID.twdollar, count: 1, data: 0}, [
		"aax",
		"xxx",
		"ccc"
	], ['a', ItemID.tndollar, 0]);
Recipes.addShaped({id: ItemID.ffdollar, count: 1, data: 0}, [
		"aax",
		"aaa",
		"ccc"
	], ['a', ItemID.tndollar, 0]);
Recipes.addShaped({id: ItemID.hdollar, count: 1, data: 0}, [
		"aax",
		"xxx",
		"ccc"
	], ['a', ItemID.ffdollar, 0]);
Recipes.addShaped({id: ItemID.hdollar, count: 1, data: 0}, [
		"aax",
		"aaa",
		"ccc"
	], ['a', ItemID.twdollar, 0]);

IDRegistry.genItemID("cotton");
Item.createItem("cotton", "Cotton Sheet", {name: "sheetcotton"}, {stack: 64});
IDRegistry.genItemID("linen");
Item.createItem("linen", "Linen Sheet", {name: "sheetlinen"}, {stack: 64});
Recipes.addShaped({id: ItemID.cotton, count: 6, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', 339, 0, 'a', 35, 0]);
Recipes.addShaped({id: ItemID.linen, count: 6, data: 0}, [
    " x ",
    "xax",
    " x "
], ['x', 287, 0, 'a', 339, 0]);

IDRegistry.genItemID("bacon");
Item.createFoodItem("bacon", "Bacon", {name: "bacon"}, {food: 10});
IDRegistry.genItemID("cegg");
Item.createFoodItem("cegg", "Cooked Egg", {name: "cegg"}, {food: 6});
Recipes.addShaped({id: ItemID.bacon, count: 2, data: 0}, [
    "abx",
    "xxx",
    " x "
], ['b', 320, 0, 'a', ItemID.fdollar, 0]);
Recipes.addFurnace(344, ItemID.cegg, 0);
IDRegistry.genBlockID("moneystacko");
Block.createBlock("moneystacko", [
	{name: "Stack of 1 Dollar", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystacko", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystackt");
Block.createBlock("moneystackt", [
	{name: "Stack of 2 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystackt", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystackf");
Block.createBlock("moneystackf", [
	{name: "Stack of 5 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystackf", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystacktn");
Block.createBlock("moneystacktn", [
	{name: "Stack of 10 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystacktn", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystacktw");
Block.createBlock("moneystacktw", [
	{name: "Stack of 20 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystacktw", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystackff");
Block.createBlock("moneystackff", [
	{name: "Stack of 50 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystackff", 0]], inCreative: true}
]);
IDRegistry.genBlockID("moneystackh");
Block.createBlock("moneystackh", [
	{name: "Stack of 100 Dollars", texture: [["moneystackside", 0], ["moneystackside", 0], ["moneystackh", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.moneystacko, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.onedollar, 0]);
Recipes.addShaped({id: BlockID.moneystackt, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.tdollar, 0]);
Recipes.addShaped({id: BlockID.moneystackf, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.fdollar, 0]);
Recipes.addShaped({id: BlockID.moneystacktn, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.tndollar, 0]);
Recipes.addShaped({id: BlockID.moneystacktw, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.twdollar, 0]);
Recipes.addShaped({id: BlockID.moneystackff, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.ffdollar, 0]);
Recipes.addShaped({id: BlockID.moneystackh, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.hdollar, 0]);

IDRegistry.genItemID("americanDust");
Item.createItem("americanDust", "American Dust", {name: "americanDust"}, {stack: 64});
Recipes.addShaped({id: ItemID.americanDust, count: 1, data: 0}, [
		"aba",
		"bcb",
		"aba"
	], ['a', 371, 0, 'b', 265, 0, 'c', BlockID.moneystackh, 0]);

IDRegistry.genItemID("americanIngot");
Item.createItem("americanIngot", "American Ingot", {name: "americanIngot"}, {stack: 64});
Recipes.addFurnace(ItemID.americanDust, ItemID.americanIngot, 0);

IDRegistry.genItemID("obsidianStick");
Item.createItem("obsidianStick", "Obsidian Stick", {name: "obsidianStick"}, {stack: 64});
Recipes.addShaped({id: ItemID.obsidianStick, count: 2, data: 0}, [
		"axx",
		"xxx",
		"xxx"
	], ['a', 49, 0]);

IDRegistry.genItemID("blackDust");
Item.createItem("blackDust", "Black Dust", {name: "blackDust"}, {stack: 64});
Recipes.addShaped({id: ItemID.blackDust, count: 1, data: 0}, [
		"xax",
		"bcb",
		"xax"
	], ['a', ItemID.americanIngot, 0, 'b', 325, 10, 'c', 264, 0]);

IDRegistry.genItemID("diamondEntropy");
Item.createItem("diamondEntropy", "Diamond Of Entropy", {name: "diamondEntropy"}, {stack: 64});
Recipes.addFurnace(ItemID.blackDust, ItemID.diamondEntropy, 0);

IDRegistry.genBlockID("moneyOre");
Block.createBlock("moneyOre", [
	{name: "Money Ore", texture: [["moneyOre", 0], ["moneyOre", 0], ["moneyOre", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.moneyOre, "stone");

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.moneyOre, 0, 7);
    }
}
);

Block.registerDropFunction("moneyOre", function(coords, blockID, blockData, level){ 
if (level > 2){ 
return [[ItemID.onedollar, 2 + Math.random() * 5,0], [ItemID.tdollar, 1 + Math.random() * 2,0]] 
} 
return []; 
}, 2);

ToolAPI.addToolMaterial("money", {durability: 99999, level: 5, efficiency: 1000, damage: 20, enchantability: 8});

ToolAPI.addToolMaterial("moneyT", {durability: 99999, level: 5, efficiency: 1000, damage: 5, enchantability: 8});


IDRegistry.genItemID("entropySword");
IDRegistry.genItemID("entropyShovel");
IDRegistry.genItemID("entropyPickaxe");
IDRegistry.genItemID("entropyAxe");
Item.createItem("entropySword", "Entropy Sword", {name: "entropySword", meta: 0}, {stack: 1});
Item.createItem("entropyShovel", "Entropy Shovel", {name: "entropyShovel", meta: 0}, {stack: 1});
Item.createItem("entropyPickaxe", "Entropy Pickaxe", {name: "entropyPickaxe", meta: 0}, {stack: 1});
Item.createItem("entropyAxe", "Entropy Axe", {name: "entropyAxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.entropySword, "money", ToolType.sword);
ToolAPI.setTool(ItemID.entropyShovel, "moneyT", ToolType.shovel);
ToolAPI.setTool(ItemID.entropyPickaxe, "moneyT", ToolType.pickaxe);
ToolAPI.setTool(ItemID.entropyAxe, "moneyT", ToolType.axe);

Recipes.addShaped({id: ItemID.entropySword, count: 1, data: 0}, [
    "xaa",
    "bca",
    "dbx"
], ['a', ItemID.americanIngot, 0, 'b', 266, 0, 'c', ItemID.diamondEntropy, 0, 'd', ItemID.obsidianStick, 0]);

Recipes.addShaped({id: ItemID.entropyShovel, count: 1, data: 0}, [
    "xaa",
    "xba",
    "cxx"
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0, 'c', ItemID.obsidianStick, 0]);

Recipes.addShaped({id: ItemID.entropyPickaxe, count: 1, data: 0}, [
    "bab",
    "aca",
    " c "
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0, 'c', ItemID.obsidianStick, 0]);

Recipes.addShaped({id: ItemID.entropyAxe, count: 1, data: 0}, [
    "aac",
    "xab",
    "xxb"
], ['a', ItemID.americanIngot, 0, 'b', ItemID.obsidianStick, 0, 'c', ItemID.diamondEntropy, 0]);

IDRegistry.genItemID("entropyHelmet");
IDRegistry.genItemID("entropyChestplate");
IDRegistry.genItemID("entropyLeggings");
IDRegistry.genItemID("entropyBoots");

Item.createArmorItem("entropyHelmet", "Entropy Helmet", {name: "entropyHelmet"}, {type: "helmet", armor: 8, durability: 9999, texture: "armor/entropyArmorupper_0.png"});
Item.createArmorItem("entropyChestplate", "Entropy Chestplate", {name: "entropyChestplate"}, {type: "chestplate", armor: 14, durability: 9999, texture: "armor/entropyArmorupper_0.png"});
Item.createArmorItem("entropyLeggings", "Entropy Leggins", {name: "entropyLeggings"}, {type: "leggings", armor: 12, durability: 9999, texture: "armor/entropyArmorlower_0.png"});
Item.createArmorItem("entropyBoots", "Entropy Boots", {name: "entropyBoots"}, {type: "boots", armor: 6, durability: 9999, texture: "armor/entropyArmorupper_0.png"});
Recipes.addShaped({id: ItemID.entropyHelmet, count: 1, data: 0}, [
    "aba",
    "a a",
    "   "
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0]);

Recipes.addShaped({id: ItemID.entropyChestplate, count: 1, data: 0}, [
    "cbc",
    "aba",
    "aaa"
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0, 'c', 266, 0]);

Recipes.addShaped({id: ItemID.entropyLeggings, count: 1, data: 0}, [
    "aaa",
    "b b",
    "a a"
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0]);

Recipes.addShaped({id: ItemID.entropyBoots, count: 1, data: 0}, [
    "a a",
    "b b",
    "   "
], ['a', ItemID.americanIngot, 0, 'b', ItemID.diamondEntropy, 0]);

IDRegistry.genBlockID("copyMachine");
Block.createBlockWithRotation("copyMachine", [
	{name: "Copy Machine", texture: [["copyMachineunder", 0], ["copyMachineunder", 0], ["copyMachineside", 0],
["copyMachine", 0],
["copyMachineside", 0],
["copyMachineback", 0]],inCreative: true}
]);
var container = new UI.Container();  
var craftingtable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Copy Machine"}},
        inventory: {standart:true},
        background: {standart: true}
    },
    drawing: [
		  {
		/*type: "bitmap",
        bitmap: "arrow",
        x: 600,
        y: 170, scale: 4*/
    }],
    elements:{
		"inputSlot0": {type: "slot", x: 560, y: 160, size: 76}, 
		"inputSlot1": {type: "slot", x: 560, y: 240, size: 76}, 
		"outputSlot": {type: "slot", x: 850, y: 200, size: 76, isValid:RecipeTE.outputSlotValid},
		"image_1": {type: "image", x: 700, y: 200, bitmap: "arrow", scale: 4.25},
		"warning": {type: "image", x: 400, y: 80, bitmap: "warning", scale: 0.15}
    }
});

RecipeTE.registerGridCraftTable({
    name:"copyMachine",
    rows:2,
    cols:1
});

TileEntity.registerPrototype(BlockID["copyMachine"], {
    getGuiScreen: function(){
        return craftingtable;
    },
    
    tick:function(){
        RecipeTE.getTickResipes("copyMachine", this);
    }  
});
RecipeTE.addGridRecipe("copyMachine", {
    id: ItemID.onedollar,
    count: 16
},
[   "b",
    "a"
], {
    a: {
        id:351,
        data:0
    },
	b: {
		id:339,
		data:0
	}
    });

Recipes.addShaped({id: BlockID.copyMachine, count: 1, data: 0}, [
    "aba",
    "aca",
    "aaa"
], ['a', 265, 0, 'b', 351, 0, 'c', 42, 0]);
