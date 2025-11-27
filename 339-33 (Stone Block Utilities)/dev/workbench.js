IMPORT("RecipeTileEntityLib");


IDRegistry.genBlockID("craftingtable");
Block.createBlockWithRotation("craftingtable", [{name: "Stone Crafting Table", texture: [
    ["craftbotton", 0], 
    ["crafttop", 0], 
    ["craftside", 0], 
    ["craftfront", 0], 
    ["craftside", 0], 
    ["craftside", 0]
], inCreative: true}], "opaque");
 Recipes.addShaped({id: BlockID.craftingtable, count: 1, data: 0}, [
  "aa",
  "aa"],
   ['a', 4, 0]);  
   ToolAPI.registerBlockMaterial(BlockID.craftingtable, "stone");
 
   
var container = new UI.Container();  
var craftingtable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Stone Crafting Table"}},
        inventory: {standart:true},
        background: {color: android.graphics.Color.parseColor("#c6c6c6")}
    },
    drawing: [
		  {
		/*type: "bitmap",
        bitmap: "arrow",
        x: 600,
        y: 170, scale: 4*/
    }],
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

RecipeTE.registerWorkbench("craftingtable",{
    rows:3,
    cols:3,
	GuiScreen:craftingtable,
});

RecipeTE.addShapeRecipe("craftingtable", {
    id:4,
    count:1
	},
[   "aa",
    "aa"
], {
    a:{
        id:ItemID.stonepebble
    }
});

RecipeTE.addShapeRecipe("craftingtable", {
    id:BlockID.craftingtable,
    count:1
	},
[   "aa",
    "aa"
], {
    a:{
        id:4
    }
});

RecipeTE.addShapeRecipe("craftingtable", {
    id: ItemID.stonestick,
    count: 1
},
[   "  a",
    " a ",
    "a  "
], {
    a: {
        id: 4
    }
});

RecipeTE.addShapeRecipe("craftingtable", {
    id: ItemID.stonehook,
    count: 1
},
[   "aa ",
    "a  ",
    "a  "
], {
    a: {
        id: ItemID.stonestick
    }
});

RecipeTE.addShapeRecipe("craftingtable", {
    id: ItemID.stonehamme,
    count: 1
},
[   " b ",
    " ab",
    "a  "
], {
    a: {
        id: ItemID.stonestick
    },
	b: {
		id:4
	}
});

           //standart crafts
		   
Recipes.addShaped({id: 4, count: 1, data: 0}, 
["aao",
 "aao",
 "ooo"
], ['a', ItemID.stonepebble, 0]);
Recipes.addShaped({id: 4, count: 1, data: 0}, 
["aao",
 "aao",
 "ooo"
], ['a', BlockID.craftingtable, 0]);
Recipes.addShaped({id: ItemID.stonestick, count: 1, data: 0}, 
["ooa",
 "oao",
 "aoo"
], ['a', 4, 0]);
