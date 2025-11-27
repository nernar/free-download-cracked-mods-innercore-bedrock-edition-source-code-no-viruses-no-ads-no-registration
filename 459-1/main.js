/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 11
*/



// file: main.js

IMPORT("ToolType");
IMPORT("EntityState");
IMPORT("ScalesRPG");
IMPORT("ThirstLib");




// file: fma_api.js

//Welcome to Hell...


/*examples:
Stick -> Diamond x2
Grindstone.addRecipe([280, 0], [264, 2, 0]);

//Usage in tile

var recipe = Grindstone.getRecipe(slotInput.id, slotInput.data);
if(recipe){
alert(recipe);

*/
var Grindstone = {
list: {},
addRecipe: function(input, output){
this.list[input[0]+":"+input[1]] = output
},
getRecipe: function(id, data){
return this.list[id+":"+data];
}
};
//Translate api
var TranslateText = function(eng,ru){
  if(Item.getName(280)=="Палка"){
    return ru;
  } else return eng;
};




// file: blocks.js

IDRegistry.genBlockID("mining_chute");
Block.createBlockWithRotation("mining_chute", [{"name":"Mining Chute","texture":[["planks",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, "planks", 0);
model.addBox(0/16, 1/16, 14/16, 16/16, 2/16, 15/16, "planks", 0);
model.addBox(0/16, 1/16, 12/16, 16/16, 3/16, 13/16, "planks", 0);
model.addBox(0/16, 1/16, 10/16, 16/16, 4/16, 11/16, "planks", 0);
model.addBox(0/16, 1/16, 8/16, 16/16, 5/16, 9/16, "planks", 0);
model.addBox(0/16, 1/16, 6/16, 16/16, 6/16, 7/16, "planks", 0);
model.addBox(0/16, 1/16, 4/16, 16/16, 7/16, 5/16, "planks", 0);
model.addBox(0/16, 1/16, 2/16, 16/16, 8/16, 3/16, "planks", 0);
model.addBox(0/16, 1/16, 0/16, 16/16, 9/16, 1/16, "planks", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mining_chute, -1, render);

Block.setBlockShape(BlockID.mining_chute, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});


Block.registerDropFunction(31, function(){ 
    if(Player.getCarriedItem().id == ItemID.stone_knife && Math.random()<=1){return [[ItemID.sheaf, 1,0]];
  } 
});

IDRegistry.genBlockID("mow")
Block.createBlock("mow", [{"name":"Mow", "texture":[["mow",0]],"inCreative":true}]);

IDRegistry.genBlockID("rockblock");
Block.createBlock("rockblock", [{"name":"Rock","texture":[["rockblock",0]],"inCreative":false}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(4/16, 0/16, 3/16, 13/16, 1/16, 13/16, "rockblock", 0);
model.addBox(5/16, 0/16, 2/16, 12/16, 1/16, 3/16, "rockblock", 0);
model.addBox(3/16, 0/16, 5/16, 4/16, 1/16, 11/16, "rockblock", 0);
model.addBox(5/16, 0/16, 13/16, 10/16, 1/16, 14/16, "rockblock", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.custom, -1, render);

Block.setBlockShape(BlockID.rockblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(BlockID.rockblock, function(){ 
    if(Math.random()<=1){return [[ItemID.rock, 1,0]];
  } 
});

Block.registerDropFunction(106, function(){ 
    if(Math.random()<=0.8){return [[106, 1,0]];
  } 
});

IDRegistry.genBlockID("stickblock");
Block.createBlock("stickblock", [{"name":"Stick Block","texture":[["sticks",0]],"inCreative": false}]);
Block.registerDropFunction(BlockID.stickblock, function(){ 
    if(Math.random()<=1){return [[280, 1,0]];
  } 
});
Block.setBlockShape(BlockID.stickblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(18, function(){ 
    if(Math.random()<=0.2){return [[280, 1,0]];
  } 
});

IDRegistry.genBlockID("coppernug");
Block.createBlock("coppernug", [{"name":"Copper nugget","texture":[["coppernug",0]],"inCreative": false}]);
Block.registerDropFunction(BlockID.coppernug, function(){ 
    if(Math.random()<=1){return [[ItemID.minicopper, 1,0]];
  } 
});
Block.setBlockShape(BlockID.coppernug, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

IDRegistry.genBlockID("copperore");
Block.createBlock("copperore", [{"name":"Copper Ore","texture":[["copperore",0]],"inCreative": true}]);
ToolAPI.registerBlockMaterial(BlockID.copperore, "stone")

Block.registerDropFunction(3, function(){ 
    if(Math.random()<=1){return [[ItemID.mudball, 1,0]];
  } 
});

Block.registerDropFunction(2, function(){ 
    if(Math.random()<=1){return [[ItemID.mudball, 1,0]];
  } 
});

Block.registerDropFunction(17, function(){ 
    if(Player.getCarriedItem().id == ItemID.stone_knife && Math.random()<=1){return [[ItemID.bark, 1,0]];
  } 
});






// file: items.js

IDRegistry.genItemID("rock");
Item.createItem("rock", "Rock", {name: "rock", meta: 0}, {}); 

IDRegistry.genItemID("sheaf");
Item.createItem("sheaf", "Sheaf", {name: "sheaf", meta: 0}, {});

IDRegistry.genItemID("pick_template")
Item.createItem("pick_template", "Pickaxe Template", {name: "picktemplate", meta: 0}, {});

IDRegistry.genItemID("axe_template")
Item.createItem("axe_template", "Axe Template", {name: "axetemplate", meta: 0}, {});

IDRegistry.genItemID("shovel_template")
Item.createItem("shovel_template", "Shovel Template", {name: "shoveltemplate", meta: 0}, {});

IDRegistry.genItemID("sword_template")
Item.createItem("sword_template", "Sword Template", {name: "swordtemplate", meta: 0}, {});

IDRegistry.genItemID("knife_template")
Item.createItem("knife_template", "Knife Template", {name: "knifetemplate", meta: 0}, {});

IDRegistry.genItemID("minicopper");
Item.createItem("minicopper", "Copper Slice", {name: "minicopper", meta: 0}, {});

IDRegistry.genItemID("copper_ingot");
Item.createItem("copper_ingot", "Copper Ingot", {name: "copper_ingot", meta: 0}, {});

IDRegistry.genItemID("mudball");
Item.createItem("mudball", "Mud Ball", {name: "mud", meta: 0}, {});

IDRegistry.genItemID("bark");
Item.createItem("bark", "Bark", {name: "bark", meta: 0}, {});







// file: tools.js

ToolAPI.addToolMaterial("copper", {durability: 100, level: 1, efficiency: 3 , damage: 2, enchantability: 6});

IDRegistry.genItemID("stone_knife");
Item.createItem("stone_knife", "Stone Knife", {name: "stone_knife", meta: 0}, {stack: 1}); 

ToolAPI.registerTool(ItemID.stone_knife, {level: 3, durability: 30, damage: 1}, ["stone"]);

IDRegistry.genItemID("stone_sharpened_knife");
Item.createItem("stone_sharpened_knife", "Stone Sharpened Knife", {name: "stone_sharpened_knife", meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID.stone_sharpened_knife, {level: 3, durability: 120, damage: 3}, ["stone"]);

IDRegistry.genItemID ("copperAxe");
Item.createItem("copperAxe", "Copper Axe", {name: "copperaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.copperAxe, "copper", ToolType.axe);
Recipes.addShaped({id: ItemID.copperAxe, count: 1, data: 0}, [
	"aa",
	"ay",
	" b"
], ['a', ItemID.copper_ingot, 0, 'b', 280, 0, 'y', ItemID.axe_template, 0]);

IDRegistry.genItemID ("copperPick");
Item.createItem("copperPick", "Copper Pickaxe", {name: "copperpick", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.copperPick, "copper", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.copperPick, count: 1, data: 0}, [
	"aaa",
	" y ",
	" b "
], ['a', ItemID.copper_ingot, 0, 'b', 280, 0, 'y', ItemID.pick_template, 0]);





// file: worldgeneration.js

//Generation on surface

var rock = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in rock ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.rockblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

var stick = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in stick ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.stickblock, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

var coppernug = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < .2){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        for(var id in stick ){
            if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)){
                World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.coppernug, 0);
                World.addTileEntity(coords.x, coords.y + 1, coords.z);
                        
        }
    }
}
});

//Generation UNDERGROUND

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copperore, 50, 6);
    }
});




// file: machinery/grindstone.js

IDRegistry.genBlockID("grindstone");
Block.createBlock("grindstone", [{"name":"Grindstone","texture":[["stone",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(6/16, 0/16, 1/16, 10/16, 10/16, 4/16, "logvinov", 0);
model.addBox(6/16, 0/16, 12/16, 10/16, 10/16, 15/16, "logvinov", 0);
model.addBox(7/16, 7/16, 0/16, 9/16, 8/16, 16/16, "planks", 0);
model.addBox(3/16, 3/16, 5/16, 13/16, 12/16, 11/16, "stone", 0);
model.addBox(2/16, 4/16, 5/16, 3/16, 11/16, 11/16, "stone", 0);
model.addBox(4/16, 12/16, 5/16, 12/16, 13/16, 11/16, "stone", 0);
model.addBox(4/16, 2/16, 5/16, 12/16, 3/16, 11/16, "stone", 0);
model.addBox(13/16, 4/16, 5/16, 14/16, 11/16, 11/16, "stone", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.grindstone, -1, render);

Block.setBlockShape(BlockID.grindstone, {"x":0.125,"y":0,"z":0}, {"x":0.875,"y":0.8125,"z":1});

var guiGrindstone = new UI.StandartWindow({
standart:
{
        header:
        {
            text: { text: "Grindstone / Точильный камень"},
        },
        inventory: {standart: true},
        background: {standart: true},
        minHeight: 500,
},
params:
{
},
drawing:
[
],
elements:
{
    "progressScale":
    {
        type: "scale",
        x: 578,
        y: 219,
        scale: 3,
        bitmap: "furnace_bar_scale",
        invert: false,
        direction: 0,
        overlay: "furnace_bar_backgroun",
        overlay_scale: 3,
        overlayOffset: { x:0 , y: 0},
    },
    "slotInput":
    {
        type: "slot",
        x: 466,
        y: 210,
        size: 60,
    },
    "slotOutput":
    {
        type: "slot",
        x: 707,
        y: 211,
        size: 60,
    },
}
});

TileEntity.registerPrototype(BlockID.grindstone, {
getGuiScreen: function(){
return guiGrindstone;
},

tick: function(){
var slotInput = this.container.getSlot("slotInput")
var slotOutput = this.container.getSlot("slotOutput")  
  
var recipe = Grindstone.getRecipe(slotInput.id, slotInput.data);
if(recipe){
this.container.setSlot("slotOutput", recipe[0], recipe[1], recipe[2]);
this.container.clearSlot("slotInput");
}
}
});
Callback.addCallback("PostLoaded", function(){
Grindstone.addRecipe([ItemID.stone_knife, 0], [ItemID.stone_sharpened_knife, 1, 0]);
}); 




// file: machinery/template_creator.js

IDRegistry.genBlockID("template_creator");
Block.createBlock("template_creator", [{"name":"Template Creator","texture":[["stone",0]],"inCreative":true}]);

Block.setBlockShape(BlockID.template_creator, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1})


var guiTemplateCreator = new UI.StandartWindow({
standart: 
{
        header: 
        { 
            text: { text: "Template Creator / Создатель шаблонов"},
        },
        inventory: { standart: true},
        background: {standart: true},
        minHeight: 700,
},
params: 
{
},
drawing: 
[
],
elements: 
{
    "costClay": 
    {
        type: "image",
        x: 400,
        y: 100,
        scale: 2,
        bitmap: "cost",
    },
    "slotOutput": 
    {
        type: "slot",
        x: 595,
        y: 284,
        size: 60,
    },
    "pickButton": 
    {  
        type: "button",
        x: 715,
        y: 188,
        scale: 1,
        bitmap: "pickButton",
        bitmap2: "butto",
        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.pick_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "axeButton": 
    {
        type: "button",
        x: 715,
        y: 88,
        scale: 1,
        bitmap: "axeButton",
        bitmap2: "butto",
                clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.axe_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "shovelButton": 
    {
        type: "button",
        x: 716,
        y: 283,
        scale: 1,
        bitmap: "shovelButton",
        bitmap2: "butto",
                clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.shovel_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "swordButton": 
    {
        type: "button",
        x: 716,
        y: 389,
        scale: 1,
        bitmap: "swordButton",
        bitmap2: "butto",
                        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.sword_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "knifeButton": 
    {
        type: "button",
        x: 715,
        y: 489,
        scale: 1,
        bitmap: "knifeButton",
        bitmap2: "butto",
                        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.knife_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
}
});
TileEntity.registerPrototype(BlockID.template_creator, {
getGuiScreen: function(){
return guiTemplateCreator;
},
});





// file: machinery/kiln.js

IDRegistry.genBlockID("forgeStone");
Block.createBlock("forgeStone", [{"name":"Forge stone","texture":[["stone",0]],"inCreative":true}]);

var forgeStone_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "stone", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 15/16, "stone", 0);

forgeStone_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.forgeStone, -1, forgeStone_render);

Block.setBlockShape(BlockID.forgeStone, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genBlockID("unfiredKiln");
Block.createBlock("unfiredKiln", [{"name":"Unfired kiln","texture":[["clay",0]],"inCreative":true}]);

var unfiredkiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "clay", 0);

unfiredkiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.unfiredKiln, -1, unfiredkiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});


IDRegistry.genBlockID("firedKiln");
Block.createBlock("firedKiln", [{"name":"Kiln","texture":[["hardened_clay",0]],"inCreative":true}]);

var kiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "hardened_clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "hardened_clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "hardened_clay", 0);

kiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.firedKiln, -1, kiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: BlockID.firedKiln, count: 1, data: 0}, 
   ["ofo", 
    "fof",
    "fff"],
  ["f", 82, 0
]);


});

var KilnGUI = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Kiln"}},
        inventory: {standart: true},
        background: {standart: true}
     },
     drawing: [
    {type: "bitmap", x: 500, y: 200, bitmap: "fire_scale0", scale: 3.2},
  ],
        elements: {
     "slotSource": {type: "slot", x: 400, y: 200},
     "slotResult": {type: "slot", x: 600, y: 200},
     "progress": {type: "scale", x: 500, y: 200, bitmap: "fire_scale1", direction: 1, scale: 3.2},
     "text": {type: "text", x: 500, y: 100, width: 100, height: 30, text: " "}
     }
});

TileEntity.registerPrototype(BlockID.firedKiln, {
  defaultValues: {
    progress: 0,
  },
  initAnimation: function(){
        this.animation = new Animation.Item(this.x + .5, this.y+.2, this.z + .65);
        if(this.container.getSlot("slotSource").id!=0){
          this.animation.describeItem({
                id: this.container.getSlot("slotSource").id,
               count: 1,
               data: this.container.getSlot("slotSource").data,
               rotation: [3.14/2,0,0],
               size: 0.3
        });
            this.animation.load();
          }
     },
     updateAnimation: function(){
        this.animation.destroy();
         this.initAnimation();
     },
     init: function(){
         this.initAnimation();
     },
     destroy: function(){
          this.animation.destroy();
    },
    getGuiScreen: function(){
      return KilnGUI;
    },
    tick: function(){
      if(World.getThreadTime()%30==0){
        this.updateAnimation();
        this.container.setText("text", " ");
        if(World.getBlockID(this.x,this.y-1,this.z)==51) World.setBlock(this.x,this.y-1,this.z,51);
      }
      
      this.container.setScale("progress", this.data.progress/400);
      
      let src = this.container.getSlot("slotSource");
      let result = this.container.getSlot("slotResult");
      let recipe = Recipes.getFurnaceRecipeResult(src.id, "iron");
      
      if(recipe&&(result.id==recipe.id&&result.data==recipe.data&&result.count<64||result.id==0)){
        if(World.getBlockID(this.x,this.y-1,this.z)==51){
          this.data.progress++;
        } else this.container.setText("text", TranslateText("This needs fire under block.", "Блоку нужен огонь снизу."));
        if(this.data.progress>=400){
          this.data.progress=0;
          result.id = recipe.id;
          result.count++;
          result.data = recipe.data;
          
          src.count--;
          this.container.validateAll();
        }
      }
    }
});




// file: recipes.js

//removed Recipes

/*Callback.addCallback("PostLoaded", function(){
  if(!__config__.getBool("enable_vannila_tools")){
    for(let i = 267; i<=287); i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 290; i<=294; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 306; i<=317; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    Recipes.deleteRecipe({id: 256, count: 1, data: 0});
    Recipes.deleteRecipe({id: 257, count: 1, data: 0});
    Recipes.deleteRecipe({id: 258, count: 1, data: 0});
  }
  Recipes.deleteRecipe({id: 5, count: 4, data: 0});
  Recipes.deleteRecipe({id: 5, count: 4, data: 1});
  Recipes.deleteRecipe({id: 5, count: 4, data: 2});
  Recipes.deleteRecipe({id: 5, count: 4, data: 3});
  Recipes.deleteRecipe({id: 5, count: 4, data: 4});
  Recipes.deleteRecipe({id: 5, count: 4, data: 5});
  Recipes.deleteRecipe({id: 5, count: 4, data: 0})
  for(let i = 0; i<5; i++){
    Recipes.deleteRecipe({id: 5, count: 4, data: i});
  }
});
*/
//suck my desk

Callback.addCallback("PostLoaded", function(){
	
Recipes.addShaped({id: ItemID.stone_knife, count: 1, data: 0}, [

     "xyy",

     "yiy",

     "yyz"

], ['z', 280, 0, 'x', ItemID.rock, 0, 'i', 106, 0]);

Recipes.addShaped({id: BlockID.mow, count: 1, data: 0}, [

     "xx",

     "xx",

     ""

], ['x', ItemID.sheaf, 0]);

Recipes.addShaped({id: BlockID.grindstone, count: 1, data: 0}, [
     "oxo",
     "xxx",
     "pxp"
], ['x', ItemID.rock, 0, 'p', 280, 0]);;

Recipes.addShaped({id: 374, count: 1, data: 0}, [
     "oxo",
     "xox",
     "xxx"
], ['x', 337, 0]);;



Recipes.addShaped({id: BlockID.template_creator, count: 1, data: 0}, [
     "ooo",
     "xox",
     "xxx"
], ['x', ItemID.rock, 0]);;

Recipes.addShaped({id: BlockID.copperore, count: 1, data: 0}, [
     "xxx",
     "xxx",
     "xxx"
], ['x', ItemID.minicopper, 0]);;

Recipes.addShaped({id: 259, count: 1, data: 0}, [
    "xo",
    "ox"
], ['x', 280, 0]);;

Recipes.addShaped({id: 3, count: 1, data: 0}, [
     "xxo",
     "xxo",
     "ooo"
], ['x', ItemID.mudball, 0]);;

Recipes.addShaped({id: 5, count: 1, data: 0}, [
    "xxx",
    "xxx",
	"xxx"
], ['x', ItemID.bark, 0]);;

});

//furnace Recipes

Recipes.addFurnace(BlockID.copperore, ItemID.copper_ingot, 0);












// file: armor.js

IDRegistry.genItemID("wood_chestplate");
Item.createArmorItem("wood_chestplate", "Wooden Chestplate", {name: "woodchestplate"}, {type: "chestplate", armor: 3, durability: 85, texture: "armor/woodlayer_0.png"});
Recipes.addShaped({id: ItemID.wood_chestplate, count: 1, data: 0}, [
	"xyx",
	"xxx",
	"xxx"
], ['x', ItemID.bark, 0, 'y', 106, 0]);

IDRegistry.genItemID("wood_leggings");
Item.createArmorItem("wood_leggings", "Wooden Leggins", {name: "woodleggins"}, {type: "leggings", armor: 2, durability: 70, texture: "armor/woodlayer_1.png"});
Recipes.addShaped({id: ItemID.wood_leggins, count: 1, data: 0}, [
	"xxx",
	"xyx",
	"x x"
], ['x', ItemID.bark, 0, 'y', 106, 0]);






