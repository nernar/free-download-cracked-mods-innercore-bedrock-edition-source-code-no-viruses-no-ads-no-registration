/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: item.js

IMPORT("ToolType"); 


var Random = {
    Float:function(min,max){
        var result = ((Math.random()*max)+min);
        return result;
    },
    Int:function(min,max){
        var result = Math.round((Math.random()*max)+min);
        return result;
    }
};


IDRegistry.genItemID("stonepebble");
Item.createItem("stonepebble", "Stone Pebble", {name: "stone_tablee", meta: 0}, {stack: 64});
Recipes.addShaped({id: 4, count: 1, data: 0}, 
["aao",
 "aao",
 "ooo"
], ['a', ItemID.stonepebble, 0]);

Block.setDestroyTime(1, 0.5); 
Block.registerDropFunction(1, function (coords, id, data, diggingLevel) {
if(diggingLevel == 0){return[[ItemID.stonepebble,
Random.Int(1,3), 0]];}else{return;} 
});
Callback.addCallback("DestroyBlockStart", function(coords, block, player){
if(Player.getCarriedItem ().id == 0 && (block.id == 1)){
Block.setDestroyTime (block.id, 1); // new time
}
else if(block.id == 1){
Block.setDestroyTime (block.id, 5); // default time
}
});


IDRegistry.genItemID("stonestick");
Item.createItem("stonestick", "Stone Stick",
{name: "stonestick", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.stonestick, count: 4, data: 0}, 
["ooa",
 "oao",
 "aoo"
], ['a', 4, 0]);


IDRegistry.genItemID("stonehook");
Item.createItem("stonehook", "Stone Crook", 
{name: "stonehook", meta: 0}, 
{stack: 1});
Recipes.addShaped({id: ItemID.stonehook, count: 1, data: 0}, 
["aao",
 "aoo",
 "aoo"
], ['a', ItemID.stonestick, 0]);
Item.setMaxDamage(ItemID.stonehook,200);
ToolAPI.addToolMaterial("stone", {durability: 280, level: 1, efficiency: 1, damage: 2, enchantability: 4});
ToolAPI.setTool(ItemID["stonehook"], "stone", ToolType.shovel);
Callback.addCallback("DestroyBlock", function(c,id){
    
        var it = Player.getCarriedItem();
        if(id.id==18&&
            (Player.getCarriedItem().id==ItemID.stonehook)
            ){
        if(Math.random()*100<10
                ){
                    World.drop(c.x,c.y,c.z,6,1);    
                }else if(
                Math.random()*100<6
                )
                    World.drop(c.x,c.y,c.z,280,1);  
                }else if(
                Math.random()*100<5
                ){
                    World.drop(c.x,c.y,c.z,260,1);  
                }
}); 
Block.registerDropFunctionForID(3, function(coords, id, data, level){
	        if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[6, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];  }
				 });



IDRegistry.genItemID("stonehamme"); Item.createItem("stonehamme", "Stone Hammer", 
{name: "stonehamme", meta: 0}, 
 {stack: 1});
 Recipes.addShaped({id: ItemID.stonehamme, count: 1, data: 0}, 
["oao",
 "oba",
 "boo"
], ['a', 4, 0, 'b', ItemID.stonestick, 0]);    
Item.setMaxDamage(ItemID.stonehamme, 475);      
ToolAPI.setTool(ItemID.stonehamme, "stone", ToolType.pickaxe);
Block.registerDropFunctionForID(1, function(coords, id, data, level){ 
if(Player.getCarriedItem().id==ItemID.stonehamme
){ 
return [[4, 1, 0]]; 
}else if(level == 0){ 
return[[ItemID.stonepebble, Random.Int(1,4), 0]]; 
}else{ 
return [[id, 1, data]]; 
} 
});


            
         Block.registerDropFunctionForID(4, function(coords, id, data, level){ 
            if(Player.getCarriedItem().id==ItemID.stonehamme){
		     return [[13, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(13, function(coords, id, data, level){  
		    if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[3, 1, 0]];  }else if(Math.random()*100<8){  return [[318,1,0]];  }else{
			     return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(2, function(coords, id, data, level){  
            if(Player.getCarriedItem().id==ItemID.stonehamme){
	         return [[3, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];
				 } 
				 });
         Block.registerDropFunctionForID(3, function(coords, id, data, level){
	        if(Player.getCarriedItem().id==ItemID.stonehamme){
			 return [[12, 1, 0]];  }else if(level > 1){
				 return [[id, 1, data]];  }
				 });






// file: translation.js

Translation.addTranslation("Stone Pebble", {ru: "Камушек", ua: "Камінчик"});
Translation.addTranslation("Stone Stick", {ru: "Каменная Палка", ua: "Кам'яна Палиця"});
Translation.addTranslation("Stone Hammer", {ru: "Каменный Молот", ua: "Кам'яний Молот"});
Translation.addTranslation("Stone Crafting Table", {ru: "Каменный Верстак", ua: "Кам'яний Верстак"});
Translation.addTranslation("Crafting", {ru: "Крафт", ua: "Крафт"});
Translation.addTranslation("Stone Crook", {ru: "Каменный Крюк", ua: "Кам'яний Крюк"});




// file: workbench.js

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




// file: miniworkbench.js

var SBInventory = {
    isEnabled: false,
    container: new UI.Container(),
    windowContainer: new UI.Container(),
    buttonWindow: new UI.Window({
        location: {
            x: 5,
            y: 185,
            width: 50,
            height: 50
        },
        drawing:[
            {type: "background", color: 0}
        ],
        elements:{
            "fuckButton":{type: "button", scale: 33, bitmap: "knopka", clicker:{onClick:function(){
                SBInventory.windowContainer.openAs(SBInventory.Window);
            }}}
        }
    }), 
    Window: new UI.StandartWindow({
        standart:{
			header: {text: {text: "Crafting"}},
            backgroud:{color: android.graphics.Color.parseColor("#c6c6c6")},
            inventory:{
                standart: true
            }
        },
        elements:{
		"inputSlot0": {type: "slot", x: 430, y: 190, size: 81}, 
		"inputSlot1": {type: "slot", x: 520, y: 190, size: 81},
		"inputSlot2": {type: "slot", x: 430, y: 280, size: 81},
		"inputSlot3": {type: "slot", x: 520, y: 280, size: 81},
		"image_0": {type: "image", x: 611, y: 241, bitmap: "arrow", scale: 4.5},
		"outputSlot": {type: "slot", x: 720, y: 232, size: 81, isValid:RecipeTE.outputSlotValid}
        } 
    }),
    open:function(){
        if(!this.isEnabled){
            this.container.openAs(this.buttonWindow);
            this.isEnabled = true;
        }
    },
    close:function(){
        if(this.isEnabled){
            this.container.close();
            this.isEnabled = false;
        }
    }
};

SBInventory.buttonWindow.setAsGameOverlay(true);

Callback.addCallback("NativeGuiChanged", function (screenName) {
    if(screenName == "survival_inventory_screen") {
        SBInventory.open();
    }else if(SBInventory.isEnabled){
        SBInventory.close();
    }
});


var getSlot = SBInventory.windowContainer.getSlot;
var clearSlot = SBInventory.windowContainer.clearSlot;
Callback.addCallback("tick", function (){
if(SBInventory.isEnabled&&SBInventory.windowContainer.isOpened()){
   if(SBInventory.windowContainer.getSlot("inputSlot0").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot1").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot2").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot3").id == 4
){
      SBInventory.windowContainer.clearSlot("inputSlot0");
      SBInventory.windowContainer.clearSlot("inputSlot1");
      SBInventory.windowContainer.clearSlot("inputSlot2");
      SBInventory.windowContainer.clearSlot("inputSlot3");
      SBInventory.windowContainer.setSlot("outputSlot", BlockID.craftingtable, 1, 0);
}
   if(SBInventory.windowContainer.getSlot("inputSlot0").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot1").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot2").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot3").id == ItemID.stonepebble
){
      SBInventory.windowContainer.clearSlot("inputSlot0");
      SBInventory.windowContainer.clearSlot("inputSlot1");
      SBInventory.windowContainer.clearSlot("inputSlot2");
      SBInventory.windowContainer.clearSlot("inputSlot3");
      SBInventory.windowContainer.setSlot("outputSlot", 4, 1, 0);
}
}
});





