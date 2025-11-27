IMPORT("RecipeTileEntityLib");

IDRegistry.genBlockID("stone_craftingtable");
Block.createBlockWithRotation("stone_craftingtable", [{name: "Улучшенный верстак", texture: [
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0]
], inCreative: true}], "opaque");
 Recipes.addShaped({id: BlockID.stone_craftingtable, count: 1, data: 0}, [
  "aa",
  "aa"],
   ['a', 122, 0]);  
   ToolAPI.registerBlockMaterial(BlockID.stone_craftingtable, "stone");
 
   
var container = new UI.Container();  
var craftingtable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Улучшенный  верстак"}},
        inventory: {standart:true},
        background: {standart: true}
    },
    drawing: [],
    elements:{
		"inputSlot0": {type: "slot", x: 400, y: 160, size: 75}, 
		"inputSlot1": {type: "slot", x: 480, y: 160, size: 76}, 
		"inputSlot2": {type: "slot", x: 560, y: 160, size: 76}, 
		"inputSlot3": {type: "slot", x: 400, y: 240, size: 76}, 
		"inputSlot4": {type: "slot", x: 480, y: 240, size: 76}, 
		"inputSlot5": {type: "slot", x: 560, y: 240, size: 76},
		"inputSlot6": {type: "slot", x: 400, y: 320, size: 76},
		"inputSlot7": {type: "slot", x: 480, y: 320, size: 76},
		"inputSlot8": {type: "slot", x: 560, y: 320, size: 76},
		"outputSlot": {type: "slot", x: 850, y: 240, size: 76, isValid:RecipeTE.outputSlotValid},
		"image_1": {type: "image", x: 679, y: 230, bitmap: "arrow", scale: 6.25}
    }
});

RecipeTE.registerWorkbench("stone_craftingtable",
{
    rows:3,
    cols:3,
    GuiScreen:craftingtable 
    //TileEntity
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwords,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skilll
    }
,
    b: {
        id: ItemID.EndSword
    }
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwor,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skil
    }
,
    b: {
        id: ItemID.EndSwords
    }
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwords,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skilll
    }
,
    b: {
        id: ItemID.EndSword
    }
});


           //standart crafts
		   