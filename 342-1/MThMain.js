/*
BUILD INFO:
  dir: dev
  target: MThMain.js
  files: 32
*/



// file: hyy.js

var rand = Math.random();




// file: blocks/ores.js

var GM = Block.createSpecialType({
    destroytime: 1,
    explosionres: 1
});


var BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 6,
    solid: false,
    destroytime: 0.001,
    explosionres: 1,
    opaque: false
});


IDRegistry.genBlockID("luxtarore");
Block.createBlock("luxtarore", [{name: "Лукстарровая руда", texture: [["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.luxtarore, "stone", 2, true);
Block.setDestroyLevel (BlockID.luxtarore, 3) 
Block.registerDropFunction("luxtarore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.luxtarore, 1, 0]]
	}
	return [];
}, 1);


IDRegistry.genBlockID("darkhamore");
Block.createBlock("darkhamore", [{name: "Даркэмовая руда", texture: [["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.darkhamore, "stone", 2, true);
Block.setDestroyLevel (BlockID.darkhamore, 3) 
Block.registerDropFunction("darkhamore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.darkhamore, 1, 0]]
	}
	return [];
}, 1);



IDRegistry.genBlockID("aquaturaore");
Block.createBlock("aquaturaore", [{name: "Акватуровая руда", texture: [["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.aquaturaore, "stone", 2, true);
Block.setDestroyLevel (BlockID.aquaturaore, 4) 
Block.registerDropFunction("aquaturaore", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[BlockID.aquaturaore, 1, 0]]
	}
	return [];
}, 1);



IDRegistry.genBlockID("flisotuachewnore");
Block.createBlock("flisotuachewnore", [{name: "Флисотуачеуновая руда", texture: [["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.flisotuachewnore, "stone", 2, true);
Block.setDestroyLevel (BlockID.flisotuachewnore, 2) 
Block.registerDropFunction("flisotuachewnore", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.flisotuachewn, 1, 0]]
	}
	return [];
}, 1);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.luxtarore, 0, 5);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.darkhamore, 0, 3);
    }
}
)




Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquaturaore, 0, 2);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.flisotuachewnore, 0, 15);
    }
}
)










































// file: blocks/bricks.js

IDRegistry.genBlockID("moonbricks");
Block.createBlock("moonbricks", [{name: "Лунные кирпичи", texture: [["moonbricks", 0], ["moonbricks", 0], ["moonbricks", 0], ["moonbricks", 0], ["moonbricks", 0], ["moonbricks", 0]], inCreative: true}]);




IDRegistry.genBlockID("cometbricks");
Block.createBlock("cometbricks", [{name: "Кирпичи комет", texture: [["cometbricks", 0], ["cometbricks", 0], ["cometbricks", 0], ["cometbricks", 0], ["cometbricks", 0], ["cometbricks", 0]], inCreative: true}]);

IDRegistry.genBlockID("blackbricks");
Block.createBlock("blackbricks", [{name: "Кирпичи Преисподней", texture: [["blackbricks", 0], ["blackbricks", 0], ["blackbricks", 0], ["blackbricks", 0], ["blackbricks", 0], ["blackbricks", 0]], inCreative: true}]);

IDRegistry.genBlockID("redbricks");
Block.createBlock("redbricks", [{name: "Кровавые Кирпичи", texture: [["redbricks", 0], ["redbricks", 0], ["redbricks", 0], ["redbricks", 0], ["redbricks", 0], ["redbricks", 0]], inCreative: true}]);

















// file: blocks/plants.js

IDRegistry.genBlockID("fireleav"); 
  Block.createBlock("fireleav", [{name: "Огнелист", texture: [["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav, -1, render);
Block.setBlockShape(BlockID.fireleav, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Block.registerDropFunction(BlockID.fireleav, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.fireleavpetal, 3, 0]);
  drop.push([ItemID.fireleavseeds, 2, 0]);
 return drop;
});




IDRegistry.genBlockID("fireleav4"); 
  Block.createBlock("fireleav4", [{name: "Огнелист", texture: [["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav4, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 4);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 4);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav4, -1, render);
Block.setBlockShape(BlockID.fireleav4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});



IDRegistry.genBlockID("fireleav3"); 
  Block.createBlock("fireleav3", [{name: "Огнелист", texture: [["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav3, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 3);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 3);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav3, -1, render);
Block.setBlockShape(BlockID.fireleav3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


IDRegistry.genBlockID("fireleav2"); 
  Block.createBlock("fireleav2", [{name: "Огнелист", texture: [["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav2, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 2);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 2);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav2, -1, render);
Block.setBlockShape(BlockID.fireleav2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});



IDRegistry.genBlockID("fireleav1"); 
  Block.createBlock("fireleav1", [{name: "Огнелист", texture: [["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav1, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 1);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 1);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav1, -1, render);
Block.setBlockShape(BlockID.fireleav1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});





Block.setRandomTickCallback(BlockID.fireleav4, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav4 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav3);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav3, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav3 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav2);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav2, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav2 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav1);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav1, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav1 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    
    Block.registerDropFunction(BlockID.fireleav4, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav3, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav2, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav1, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});











Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==1){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.fireleav, 0);
}}});




// file: blocks/aFurnace.js

IDRegistry.genBlockID("aFurnace");
Block.createBlock("aFurnace", [{name: "Алхимическая печь", texture: [["aFurnacebottom", 0], ["aFurnacetop", 0], ["aFurnace", 0], ["aFurnace", 0], ["aFurnace1", 0], ["aFurnace", 0]], inCreative: true}]);


var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 0/16, "aFurnace1", 0);

model.addBox(0/16, 0/16, 16/16, 16/16, 16/16, 16/16, "aFurnace1", 0);

model.addBox(0/16, 0/16, 0/16, 0/16, 16/16, 16/16, "aFurnace1", 0);

model.addBox(16/16, 0/16, 0/16, 16/16, 16/16, 16/16, "aFurnace", 0);




model.addBox(0/16, 0/16, 0/16, 16/16, 0.2/16, 16/16, "aFurnacebottom", 0);

model.addBox(0/16, 15.9/16, 0/16, 16/16, 16/16, 16/16, "aFurnacetop", 0);





render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.aFurnace, -1, render);
Block.setBlockShape(BlockID.aFurnace, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Recipes.addShaped({id: BlockID.aFurnace, count: 1, data: 0}, [ "aaa", "aba", "ccc"], ['a', ItemID.aquaturaingot, 0, 'b', 61, 0, 'c', ItemID.flisotuachewn, 0]);


var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiAF = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Алхимическая печь"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "aFsc", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "aFire", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "aFsc1", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "aFireSc", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 503, y: 175},
        "slotSource3": {type: "slot", x: 410, y: 51},
        "slotSource4": {type: "slot", x: 472, y: 51},
        "slotSource5": {type: "slot", x: 410, y: 113},
        "slotSource6": {type: "slot", x: 472, y: 113},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});



    
var AF = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6,])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

AF.set(0, 0, ItemID.rustyingot, ItemID.rustyingot, 0, 0, {
    id: 265, count: 1, data: 0
});


AF.set(0, 0, 173, 173, 173, 173, {
    id: ItemID.graphit, count: 1, data: 0
});


AF.set(0, 0, ItemID.graphit, ItemID.graphit, ItemID.graphit, ItemID.graphit, {
    id: 264, count: 1, data: 0
});


/*THE END*/

TileEntity.registerPrototype(BlockID.aFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiAF;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        let source4 = this.container.getSlot("slotSource4");
        let source5 = this.container.getSlot("slotSource5");
        let source6 = this.container.getSlot("slotSource6");
        var resultSlot = this.container.getSlot("slotResult");
        let f = AF.get(source1.id,source2.id,source3.id, source4.id, source5.id, source6.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            source4.count--;
            source5.count--;
            source6.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
            
        }
        return 0;
    }
});




// file: blocks/banners.js

IDRegistry.genBlockID("realitybanner"); 
  Block.createBlockWithRotation("realitybanner", [{name: "Знамя Яви", texture: [["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0], ["realitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "realitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "realitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.realitybanner, -1, render);
Block.setBlockShape(BlockID.realitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("realitybanner");
Item.createItem("realitybanner", "Знамя Яви", {name: "realitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.realitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.realitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.realitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.realitybanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzerealitybanner"); 
  Block.createBlockWithRotation("bronzerealitybanner", [{name: "Бронзовое знамя Яви", texture: [["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0], ["bronzerealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzerealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzerealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzerealitybanner, -1, render);
Block.setBlockShape(BlockID.bronzerealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzerealitybanner");
Item.createItem("bronzerealitybanner", "Бронзовое знамя Яви", {name: "bronzerealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzerealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzerealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzerealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzerealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzerealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.realitybanner, 0, 'b', 265, 0]);






IDRegistry.genBlockID("silverrealitybanner"); 
  Block.createBlockWithRotation("silverrealitybanner", [{name: "Серебрянное знамя Яви", texture: [["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0], ["silverrealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverrealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverrealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverrealitybanner, -1, render);
Block.setBlockShape(BlockID.silverrealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverrealitybanner");
Item.createItem("silverrealitybanner", "Серебрянное знамя Яви", {name: "silverrealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverrealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverrealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverrealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverrealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverrealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzerealitybanner, 0, 'b', 264, 0]);



IDRegistry.genBlockID("goldrealitybanner"); 
  Block.createBlockWithRotation("goldrealitybanner", [{name: "Серебрянное знамя Яви", texture: [["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0], ["goldrealitybanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldrealitybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldrealitybannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldrealitybanner, -1, render);
Block.setBlockShape(BlockID.goldrealitybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldrealitybanner");
Item.createItem("goldrealitybanner", "Серебрянное знамя Яви", {name: "goldrealitybanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldrealitybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldrealitybanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldrealitybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldrealitybanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldrealitybanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silverrealitybanner, 0, 'b', ItemID.flisotuachewn, 0]);












IDRegistry.genBlockID("mushroombanner"); 
  Block.createBlockWithRotation("mushroombanner", [{name: "Знамя Грибов", texture: [["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0], ["mushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "mushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "mushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mushroombanner, -1, render);
Block.setBlockShape(BlockID.mushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("mushroombanner");
Item.createItem("mushroombanner", "Знамя Грибов", {name: "mushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.mushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mushroombanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzemushroombanner"); 
  Block.createBlockWithRotation("bronzemushroombanner", [{name: "Бронзовое знамя Грибов", texture: [["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0], ["bronzemushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzemushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzemushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzemushroombanner, -1, render);
Block.setBlockShape(BlockID.bronzemushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzemushroombanner");
Item.createItem("bronzemushroombanner", "Бронзовое знамя Грибов", {name: "bronzemushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzemushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzemushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzemushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzemushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzemushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.mushroombanner, 0, 'b', 40, 0]);






IDRegistry.genBlockID("silvermushroombanner"); 
  Block.createBlockWithRotation("silvermushroombanner", [{name: "Серебрянное знамя Грибов", texture: [["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0], ["silvermushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvermushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvermushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvermushroombanner, -1, render);
Block.setBlockShape(BlockID.silvermushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvermushroombanner");
Item.createItem("silvermushroombanner", "Серебрянное знамя Грибов", {name: "silvermushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvermushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvermushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvermushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvermushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvermushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzemushroombanner, 0, 'b', 39, 0]);



IDRegistry.genBlockID("goldmushroombanner"); 
  Block.createBlockWithRotation("goldmushroombanner", [{name: "Серебрянное знамя Грибов", texture: [["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0], ["goldmushroombanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldmushroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldmushroombannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldmushroombanner, -1, render);
Block.setBlockShape(BlockID.goldmushroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldmushroombanner");
Item.createItem("goldmushroombanner", "Серебрянное знамя Грибов", {name: "goldmushroombanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldmushroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldmushroombanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldmushroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldmushroombanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldmushroombanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvermushroombanner, 0, 'b', 110, 0]);













IDRegistry.genBlockID("waterbanner"); 
  Block.createBlockWithRotation("waterbanner", [{name: "Знамя Океана", texture: [["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0], ["waterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "waterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "waterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.waterbanner, -1, render);
Block.setBlockShape(BlockID.waterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("waterbanner");
Item.createItem("waterbanner", "Знамя Океана", {name: "waterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.waterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.waterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.waterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.waterbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzewaterbanner"); 
  Block.createBlockWithRotation("bronzewaterbanner", [{name: "Бронзовое знамя Океана", texture: [["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0], ["bronzewaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzewaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzewaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzewaterbanner, -1, render);
Block.setBlockShape(BlockID.bronzewaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzewaterbanner");
Item.createItem("bronzewaterbanner", "Бронзовое знамя Океана", {name: "bronzewaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzewaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzewaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzewaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzewaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzewaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.waterbanner, 0, 'b', 168, 1]);






IDRegistry.genBlockID("silverwaterbanner"); 
  Block.createBlockWithRotation("silverwaterbanner", [{name: "Серебрянное знамя Океана", texture: [["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0], ["silverwaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverwaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverwaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverwaterbanner, -1, render);
Block.setBlockShape(BlockID.silverwaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverwaterbanner");
Item.createItem("silverwaterbanner", "Серебрянное знамя Океана", {name: "silverwaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverwaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverwaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverwaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverwaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverwaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzewaterbanner, 0, 'b', 168, 2]);



IDRegistry.genBlockID("goldwaterbanner"); 
  Block.createBlockWithRotation("goldwaterbanner", [{name: "Серебрянное знамя Океана", texture: [["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0], ["goldwaterbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldwaterbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldwaterbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldwaterbanner, -1, render);
Block.setBlockShape(BlockID.goldwaterbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldwaterbanner");
Item.createItem("goldwaterbanner", "Серебрянное знамя Океана", {name: "goldwaterbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldwaterbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldwaterbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldwaterbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldwaterbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldwaterbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silverwaterbanner, 0, 'b', 169, 0]);













IDRegistry.genBlockID("netherbanner"); 
  Block.createBlockWithRotation("netherbanner", [{name: "Знамя Преисподней", texture: [["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0], ["netherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "netherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "netherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.netherbanner, -1, render);
Block.setBlockShape(BlockID.netherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("netherbanner");
Item.createItem("netherbanner", "Знамя Преисподней", {name: "netherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.netherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.netherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.netherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.netherbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzenetherbanner"); 
  Block.createBlockWithRotation("bronzenetherbanner", [{name: "Бронзовое знамя Преисподней", texture: [["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0], ["bronzenetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzenetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzenetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzenetherbanner, -1, render);
Block.setBlockShape(BlockID.bronzenetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzenetherbanner");
Item.createItem("bronzenetherbanner", "Бронзовое знамя Преисподней", {name: "bronzenetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzenetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzenetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzenetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzenetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzenetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.netherbanner, 0, 'b', 89, 0]);






IDRegistry.genBlockID("silvernetherbanner"); 
  Block.createBlockWithRotation("silvernetherbanner", [{name: "Серебрянное знамя Преисподней", texture: [["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0], ["silvernetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvernetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvernetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvernetherbanner, -1, render);
Block.setBlockShape(BlockID.silvernetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvernetherbanner");
Item.createItem("silvernetherbanner", "Серебрянное знамя Преисподней", {name: "silvernetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvernetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvernetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvernetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvernetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvernetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzenetherbanner, 0, 'b', 370, 0]);



IDRegistry.genBlockID("goldnetherbanner"); 
  Block.createBlockWithRotation("goldnetherbanner", [{name: "Серебрянное знамя Преисподней", texture: [["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0], ["goldnetherbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldnetherbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldnetherbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldnetherbanner, -1, render);
Block.setBlockShape(BlockID.goldnetherbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldnetherbanner");
Item.createItem("goldnetherbanner", "Серебрянное знамя Преисподней", {name: "goldnetherbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldnetherbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldnetherbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldnetherbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldnetherbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldnetherbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvernetherbanner, 0, 'b', 399, 0]);













IDRegistry.genBlockID("endbanner"); 
  Block.createBlockWithRotation("endbanner", [{name: "Знамя Края", texture: [["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0], ["endbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "endbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "endbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.endbanner, -1, render);
Block.setBlockShape(BlockID.endbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("endbanner");
Item.createItem("endbanner", "Знамя Края", {name: "endbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.endbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.endbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.endbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.endbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzeendbanner"); 
  Block.createBlockWithRotation("bronzeendbanner", [{name: "Бронзовое знамя Края", texture: [["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0], ["bronzeendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzeendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzeendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzeendbanner, -1, render);
Block.setBlockShape(BlockID.bronzeendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzeendbanner");
Item.createItem("bronzeendbanner", "Бронзовое знамя Края", {name: "bronzeendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzeendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzeendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzeendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzeendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzeendbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.endbanner, 0, 'b', 206, 0]);






IDRegistry.genBlockID("silverendbanner"); 
  Block.createBlockWithRotation("silverendbanner", [{name: "Серебрянное знамя Края", texture: [["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0], ["silverendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverendbanner, -1, render);
Block.setBlockShape(BlockID.silverendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silverendbanner");
Item.createItem("silverendbanner", "Серебрянное знамя Края", {name: "silverendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silverendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silverendbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzeendbanner, 0, 'b', 433, 0]);



IDRegistry.genBlockID("goldendbanner"); 
  Block.createBlockWithRotation("goldendbanner", [{name: "Серебрянное знамя Края", texture: [["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0], ["goldendbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldendbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldendbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldendbanner, -1, render);
Block.setBlockShape(BlockID.goldendbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldendbanner");
Item.createItem("goldendbanner", "Серебрянное знамя Края", {name: "goldendbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldendbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldendbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldendbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldendbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.goldendbanner, count: 1, data: 0}, [ "ba ", "aaa", " ac"], ['a', ItemID.silverendbanner, 0, 'b', 397, 5, 'c', 122, 0]);













IDRegistry.genBlockID("cometbanner"); 
  Block.createBlockWithRotation("cometbanner", [{name: "Знамя Комет", texture: [["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0], ["cometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "cometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "cometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometbanner, -1, render);
Block.setBlockShape(BlockID.cometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("cometbanner");
Item.createItem("cometbanner", "Знамя Комет", {name: "cometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometbanner, 1, 0]);
 return drop;
});



IDRegistry.genBlockID("bronzecometbanner"); 
  Block.createBlockWithRotation("bronzecometbanner", [{name: "Бронзовое знамя Комет", texture: [["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0], ["bronzecometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "bronzecometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "bronzecometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bronzecometbanner, -1, render);
Block.setBlockShape(BlockID.bronzecometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("bronzecometbanner");
Item.createItem("bronzecometbanner", "Бронзовое знамя Комет", {name: "bronzecometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bronzecometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bronzecometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.bronzecometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bronzecometbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.bronzecometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.cometbanner, 0, 'b', BlockID.cometwood, 0]);






IDRegistry.genBlockID("silvercometbanner"); 
  Block.createBlockWithRotation("silvercometbanner", [{name: "Серебрянное знамя Комет", texture: [["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0], ["silvercometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silvercometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silvercometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silvercometbanner, -1, render);
Block.setBlockShape(BlockID.silvercometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("silvercometbanner");
Item.createItem("silvercometbanner", "Серебрянное знамя Комет", {name: "silvercometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silvercometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silvercometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.silvercometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silvercometbanner, 1, 0]);
 return drop;
});
Recipes.addShaped({id: ItemID.silvercometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.bronzecometbanner, 0, 'b', ItemID.goldendust, 0]);



IDRegistry.genBlockID("goldcometbanner"); 
  Block.createBlockWithRotation("goldcometbanner", [{name: "Серебрянное знамя Комет", texture: [["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0], ["goldcometbanner", 0]], inCreative: false}], GM);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "ooak", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "ooak", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "ooak", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "ooak", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "ooak", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "goldcometbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "goldcometbannerniz", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.goldcometbanner, -1, render);
Block.setBlockShape(BlockID.goldcometbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});
IDRegistry.genItemID("goldcometbanner");
Item.createItem("goldcometbanner", "Серебрянное знамя Комет", {name: "goldcometbanner", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.goldcometbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.goldcometbanner, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.goldcometbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.goldcometbanner, 1, 0]);
 return drop;
});
//Recipes.addShaped({id: ItemID.goldcometbanner, count: 1, data: 0}, [ "bab", "aaa", "bab"], ['a', ItemID.silvercometbanner, 0, 'b', ItemID.flisotuachewn, 0]);



























































// file: items/ingots.js

IDRegistry.genItemID("luxtaringot");
Item.createItem("luxtaringot", "Лукстарровый слиток", {name: "luxtaringot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.luxtarore, ItemID.luxtaringot, 1);



IDRegistry.genItemID("darkhamingot");
Item.createItem("darkhamingot", "Дархэмовый слиток", {name: "darkhamingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.darkhamore, ItemID.darkhamingot, 1);



IDRegistry.genItemID("aquaturaingot");
Item.createItem("aquaturaingot", "Акватуровый слиток", {name: "aquaturaingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.aquaturaore, ItemID.aquaturaingot, 1);







IDRegistry.genItemID("rustyingot");
Item.createItem("rustyingot", "Ржавый слиток", {name: "rustyingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("aeroliteingot");
Item.createItem("aeroliteingot", "Аэролитовый слиток", {name: "aeroliteingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("skyliteingot");
Item.createItem("skyliteingot", "Скайлитовый слиток", {name: "skyliteingot", meta: 0}, {stack: 64});














































































// file: items/nometalls.js

IDRegistry.genItemID("flisotuachewn");
Item.createItem("flisotuachewn", "Флисотуачеун", {name: "flisotuachewn", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.flisotuachewnore, ItemID.flisotuachewn, 1);



Recipes.addShaped({id: 35, count: 1, data: 6}, [ "   ", "ab ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 35, 0]);

Recipes.addShaped({id: 351, count: 2, data: 13}, [ "   ", "ab ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 351, 5]);

Recipes.addShaped({id: 351, count: 3, data: 13}, [ "   ", "abc", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 351, 4, 'c', 351, 1]);

Recipes.addShaped({id: 159, count: 1, data: 6}, [ "bbb", "bab", "bbb"], ['a', ItemID.flisotuachewn, 0, 'b', 172, 0]);



IDRegistry.genItemID("graphit");
Item.createItem("graphit", "Графит", {name: "graphit", meta: 0}, {stack: 64});


IDRegistry.genItemID("icecrystal");
Item.createItem("icecrystal", "Ледяной кристалл", {name: "icecrystal", meta: 0}, {stack: 64});

IDRegistry.genItemID("forceicecrystal");
Item.createItem("forceicecrystal", "Кристалл Арктики", {name: "forceicecrystal", meta: 0}, {stack: 64});


IDRegistry.genItemID("nightmare");
Item.createItem("nightmare", "Ночной Кошмар", {name: "nightmare", meta: 0}, {stack: 64});

IDRegistry.genItemID("bloodstone");
Item.createItem("bloodstone", "Кровавый камень", {name: "bloodstone", meta: 0}, {stack: 64});

IDRegistry.genItemID("agat");
Item.createItem("agat", "Агат", {name: "agat", meta: 0}, {stack: 64});





















































// file: items/ais.js

importLib("ToolType","*")





IDRegistry.genItemID("luhsamhelmet");
IDRegistry.genItemID("luhsamchestplate");
IDRegistry.genItemID("luhsamleggings");
IDRegistry.genItemID("luhsamboots");

Item.createArmorItem("luhsamhelmet", "§cЛюхсамовый шлем\n§r 5 защита\n Бонус комплекта - скороть копания", {name: "luhsamhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/luhsamarmor.png"});
Item.createArmorItem("luhsamchestplate", "§cЛюхсамовый нагрудник\n§r 10 защита\n Бонус комплекта - скороть копания", {name: "luhsamchestplate", meta: 0}, {type: "chestplate", armor: 10, durability: 750, texture: "armor/luhsamarmor.png"});
Item.createArmorItem("luhsamleggings", "§cЛюхсамовые поножи\n§r 8 защита\n Бонус комплекта - скороть копания", {name: "luhsamleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/luhsamarmor0.png"});
Item.createArmorItem("luhsamboots", "§cЛюхсамовые ботинки\n§r 5 защита\n Бонус комплекта - скороть копания", {name: "luhsamboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/luhsamarmor.png"});

Recipes.addShaped({id: ItemID.luhsamhelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamchestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);
Recipes.addShaped({id: ItemID.luhsamboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.darkhamingot, 0, 'b', ItemID.luxtaringot, 0]);






IDRegistry.genItemID("nighturahelmet");
IDRegistry.genItemID("nighturachestplate");
IDRegistry.genItemID("nighturaleggings");
IDRegistry.genItemID("nighturaboots");

Item.createArmorItem("nighturahelmet", "§cНайтуровый шлем\n§r 7 защита", {name: "nighturahelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/nighturaarmor.png"});
Item.createArmorItem("nighturachestplate", "§cНайтуровый нагрудник\n§r 13 защита", {name: "nighturachestplate", meta: 0}, {type: "chestplate", armor: 13, durability: 750, texture: "armor/nighturaarmor.png"});
Item.createArmorItem("nighturaleggings", "§cНайтуровые поножи\n§r 10 защита", {name: "nighturaleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/nighturaarmor0.png"});
Item.createArmorItem("nighturaboots", "§cНайтуровые ботинки\n§r 7 защита", {name: "nighturaboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/nighturaarmor.png"});

Recipes.addShaped({id: ItemID.nighturahelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturachestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturaleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);
Recipes.addShaped({id: ItemID.nighturaboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.nightmare, 0, 'b', ItemID.aquaturaingot, 0]);




IDRegistry.genItemID("skyhelmet");
IDRegistry.genItemID("skychestplate");
IDRegistry.genItemID("skyleggings");
IDRegistry.genItemID("skyboots");

Item.createArmorItem("skyhelmet", "§cНебесный шлем\n§r 9 защита", {name: "skyhelmet", meta: 0}, {type: "helmet", armor: 9, durability: 650, texture: "armor/skyarmor.png"});
Item.createArmorItem("skychestplate", "§cНебесный нагрудник\n§r 15 защита", {name: "skychestplate", meta: 0}, {type: "chestplate", armor: 15, durability: 750, texture: "armor/skyarmor.png"});
Item.createArmorItem("skyleggings", "§cНебесные поножи\n§r 12 защита", {name: "skyleggings", meta: 0}, {type: "leggings", armor: 12, durability: 700, texture: "armor/skyarmor0.png"});
Item.createArmorItem("skyboots", "§cНебесные ботинки\n§r 9 защита", {name: "skyboots", meta: 0}, {type: "boots", armor: 9, durability: 600, texture: "armor/skyarmor.png"});

Recipes.addShaped({id: ItemID.skyhelmet, count: 1, data: 0}, [ "bab", "a a", "   "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skychestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skyleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);
Recipes.addShaped({id: ItemID.skyboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.skyliteingot, 0, 'b', ItemID.aeroliteingot, 0]);



IDRegistry.genItemID("thornhelmet");
IDRegistry.genItemID("thornchestplate");
IDRegistry.genItemID("thornleggings");
IDRegistry.genItemID("thornboots");

Item.createArmorItem("thornhelmet", "§cШипастый шлем\n§r 11 защита", {name: "thornhelmet", meta: 0}, {type: "helmet", armor: 11, durability: 650, texture: "armor/thornarmor.png"});
Item.createArmorItem("thornchestplate", "§cШипастый нагрудник\n§r 17 защита", {name: "thornchestplate", meta: 0}, {type: "chestplate", armor: 17, durability: 750, texture: "armor/thornarmor.png"});
Item.createArmorItem("thornleggings", "§cШипастые поножи\n§r 14 защита", {name: "thornleggings", meta: 0}, {type: "leggings", armor: 14, durability: 700, texture: "armor/thornarmor0.png"});
Item.createArmorItem("thornboots", "§cШипастые ботинки\n§r 11 защита", {name: "thornboots", meta: 0}, {type: "boots", armor: 11, durability: 600, texture: "armor/thornarmor.png"});










IDRegistry.genItemID("bloodhelmet");
IDRegistry.genItemID("bloodchestplate");
IDRegistry.genItemID("bloodleggings");
IDRegistry.genItemID("bloodboots");

Item.createArmorItem("bloodhelmet", "§cКровавый шлем\n§r 13 защита\n Бонус комплекта - регенерация", {name: "bloodhelmet", meta: 0}, {type: "helmet", armor: 13, durability: 650, texture: "armor/bloodarmor.png"});
Item.createArmorItem("bloodchestplate", "§cКровавый нагрудник\n§r 19 защита\n Бонус комплекта - регенерация", {name: "bloodchestplate", meta: 0}, {type: "chestplate", armor: 19, durability: 750, texture: "armor/bloodarmor.png"});
Item.createArmorItem("bloodleggings", "§cКровавые поножи\n§r 16 защита\n Бонус комплекта - регенерация", {name: "bloodleggings", meta: 0}, {type: "leggings", armor: 16, durability: 700, texture: "armor/bloodarmor0.png"});
Item.createArmorItem("bloodboots", "§cКровавые ботинки\n§r 12 защита\n Бонус комплекта - регенерация", {name: "bloodboots", meta: 0}, {type: "boots", armor: 12, durability: 600, texture: "armor/bloodarmor.png"});


Recipes.addShaped({id: ItemID.bloodhelmet, count: 1, data: 0}, [ "aba", "a a", "   "], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodchestplate, count: 1, data: 0}, [ "a a", "aba", "aaa"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodleggings, count: 1, data: 0}, [ "aba", "a a", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);
Recipes.addShaped({id: ItemID.bloodboots, count: 1, data: 0}, [ "   ", "a b", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.nightmare, 0]);




IDRegistry.genItemID("birdhelmet");
IDRegistry.genItemID("birdchestplate");
IDRegistry.genItemID("birdleggings");
IDRegistry.genItemID("birdboots");

Item.createArmorItem("birdhelmet", "§cСоловьиный шлем\n§r 15 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdhelmet", meta: 0}, {type: "helmet", armor: 15, durability: 650, texture: "armor/birdarmor.png"});
Item.createArmorItem("birdchestplate", "§cСоловьиный нагрудник\n§r 21 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdchestplate", meta: 0}, {type: "chestplate", armor: 21, durability: 750, texture: "armor/birdarmor.png"});
Item.createArmorItem("birdleggings", "§cСоловьиные поножи\n§r 18 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdleggings", meta: 0}, {type: "leggings", armor: 18, durability: 700, texture: "armor/birdarmor0.png"});
Item.createArmorItem("birdboots", "§cСоловьиные ботинки\n§r 14 защита\n Бонус комплекта - регенерация, сила и скорость копания", {name: "birdboots", meta: 0}, {type: "boots", armor: 14, durability: 600, texture: "armor/birdarmor.png"});


Recipes.addShaped({id: ItemID.birdhelmet, count: 1, data: 0}, [ "aba", "b b", "   "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdchestplate, count: 1, data: 0}, [ "b b", "aba", "bab"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.birdboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);





































































// file: items/armor.js


IDRegistry.genItemID("DirtusBoots");
Item.createArmorItem("DirtusBoots", "§cБотинки Диртуса\n§r 3 защита\nСтавит блоки под вашими ногами\nПолезны при прохождении на Кометы", {name: "DirtusBoots", meta: 0}, {type: "boots", armor: 3, durability: 600, texture: "armor/DirtusBoots.png"});


Recipes.addShaped({id: ItemID.DirtusBoots, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.luhsamboots, 0, 'b', 2, 0]);




// file: items/instruments.js

IDRegistry.genItemID("luxtarsword");
IDRegistry.genItemID("luxtarpickaxe");
IDRegistry.genItemID("luxtaraxe");
IDRegistry.genItemID("luxtarshovel");
Item.createItem("luxtarsword", "§aЛукстарровый меч\n§r\n 6.5 урон", {name: "luxtarsword", meta: 0}, {stack: 1});
Item.createItem("luxtarpickaxe", "§2Лукстарровая кирка", {name: "luxtarpickaxe", meta: 0}, {stack: 1});
Item.createItem("luxtaraxe", "§2Лукстарровый топор", {name: "luxtaraxe", meta: 0}, {stack: 1});
Item.createItem("luxtarshovel", "§2Лукстарровая лопата", {name: "luxtarshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("luxtar", {durability: 1500, level: 3, efficiency: 50, damage: 6.5, enchantability: 14});
ToolAPI.setTool(ItemID.luxtarsword, "luxtar", ToolType.sword);
ToolAPI.setTool(ItemID.luxtarpickaxe, "luxtar", ToolType.pickaxe);
ToolAPI.setTool(ItemID.luxtaraxe, "luxtar", ToolType.axe);
ToolAPI.setTool(ItemID.luxtarshovel, "luxtar", ToolType.shovel);



IDRegistry.genItemID("darkhamsword");
IDRegistry.genItemID("darkhampickaxe");
IDRegistry.genItemID("darkhamaxe");
IDRegistry.genItemID("darkhamshovel");
Item.createItem("darkhamsword", "§aДаркхэмовый меч\n§r\n 7 урон", {name: "darkhamsword", meta: 0}, {stack: 1});
Item.createItem("darkhampickaxe", "§2Даркхэмовая кирка", {name: "darkhampickaxe", meta: 0}, {stack: 1});
Item.createItem("darkhamaxe", "§2Даркхэмовый топор", {name: "darkhamaxe", meta: 0}, {stack: 1});
Item.createItem("darkhamshovel", "§2Даркхэмовая лопата", {name: "darkhamshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkham", {durability: 1570, level: 4, efficiency: 50, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.darkhamsword, "darkham", ToolType.sword);
ToolAPI.setTool(ItemID.darkhampickaxe, "darkham", ToolType.pickaxe);
ToolAPI.setTool(ItemID.darkhamaxe, "darkham", ToolType.axe);
ToolAPI.setTool(ItemID.darkhamshovel, "darkham", ToolType.shovel);



IDRegistry.genItemID("aquaturasword");
IDRegistry.genItemID("aquaturapickaxe");
IDRegistry.genItemID("aquaturaaxe");
IDRegistry.genItemID("aquaturashovel");
Item.createItem("aquaturasword", "§aАкватуровый меч\n§r\n 8 урон", {name: "aquaturasword", meta: 0}, {stack: 1});
Item.createItem("aquaturapickaxe", "§2Акватуровая кирка", {name: "aquaturapickaxe", meta: 0}, {stack: 1});
Item.createItem("aquaturaaxe", "§2Акватуровый топор", {name: "aquaturaaxe", meta: 0}, {stack: 1});
Item.createItem("aquaturashovel", "§2Акватуровая лопата", {name: "aquaturashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aquatura", {durability: 1600, level: 5, efficiency: 70, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.aquaturasword, "aquatura", ToolType.sword);
ToolAPI.setTool(ItemID.aquaturapickaxe, "aquatura", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aquaturaaxe, "aquatura", ToolType.axe);
ToolAPI.setTool(ItemID.aquaturashovel, "aquatura", ToolType.shovel);





Recipes.addShaped({id: ItemID.luxtarsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtarpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtaraxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.luxtarshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.luxtaringot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.darkhamsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhampickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhamaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkhamshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.aquaturasword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturapickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturaaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaturashovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aquaturaingot, 0, 'b', 280, 0]);











IDRegistry.genItemID("nightsword");
IDRegistry.genItemID("nightpickaxe");
IDRegistry.genItemID("nightaxe");
IDRegistry.genItemID("nightshovel");
Item.createItem("nightsword", "§aНочной меч\n§r\n 25 урон", {name: "nightsword", meta: 0}, {stack: 1});
Item.createItem("nightpickaxe", "§2Ночная кирка", {name: "nightpickaxe", meta: 0}, {stack: 1});
Item.createItem("nightaxe", "§2Ночной топор", {name: "nightaxe", meta: 0}, {stack: 1});
Item.createItem("nightshovel", "§2Ночная лопата", {name: "nightshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("night", {durability: 2000, level: 5, efficiency: 50, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.nightsword, "night", ToolType.sword);
ToolAPI.setTool(ItemID.nightpickaxe, "night", ToolType.pickaxe);
ToolAPI.setTool(ItemID.nightaxe, "night", ToolType.axe);
ToolAPI.setTool(ItemID.nightshovel, "night", ToolType.shovel);

Recipes.addShaped({id: ItemID.nightsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.nightshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.nightmare, 0, 'b', 280, 0]);








IDRegistry.genItemID("skylitesword");
IDRegistry.genItemID("skylitepickaxe");
IDRegistry.genItemID("skyliteaxe");
IDRegistry.genItemID("skyliteshovel");
Item.createItem("skylitesword", "§aСкайлитовый меч\n§r\n 30 урон", {name: "skylitesword", meta: 0}, {stack: 1});
Item.createItem("skylitepickaxe", "§2Скайлитовая кирка", {name: "skylitepickaxe", meta: 0}, {stack: 1});
Item.createItem("skyliteaxe", "§2Скайлитовый топор", {name: "skyliteaxe", meta: 0}, {stack: 1});
Item.createItem("skyliteshovel", "§2Скайлитовая лопата", {name: "skyliteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("skylite", {durability: 2100, level: 6, efficiency: 50, damage: 30, enchantability: 14});
ToolAPI.setTool(ItemID.skylitesword, "skylite", ToolType.sword);
ToolAPI.setTool(ItemID.skylitepickaxe, "skylite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.skyliteaxe, "skylite", ToolType.axe);
ToolAPI.setTool(ItemID.skyliteshovel, "skylite", ToolType.shovel);

Recipes.addShaped({id: ItemID.skylitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skylitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skyliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.skyliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0]);











IDRegistry.genItemID("aerolitesword");
IDRegistry.genItemID("aerolitepickaxe");
IDRegistry.genItemID("aeroliteaxe");
IDRegistry.genItemID("aeroliteshovel");
Item.createItem("aerolitesword", "§aАэролитовый меч\n§r\n 37 урон", {name: "aerolitesword", meta: 0}, {stack: 1});
Item.createItem("aerolitepickaxe", "§2Аэролитовая кирка", {name: "aerolitepickaxe", meta: 0}, {stack: 1});
Item.createItem("aeroliteaxe", "§2Аэролитовый топор", {name: "aeroliteaxe", meta: 0}, {stack: 1});
Item.createItem("aeroliteshovel", "§2Аэролитовая лопата", {name: "aeroliteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aerolite", {durability: 2100, level: 6, efficiency: 100, damage: 37, enchantability: 14});
ToolAPI.setTool(ItemID.aerolitesword, "aerolite", ToolType.sword);
ToolAPI.setTool(ItemID.aerolitepickaxe, "aerolite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aeroliteaxe, "aerolite", ToolType.axe);
ToolAPI.setTool(ItemID.aeroliteshovel, "aerolite", ToolType.shovel);

Recipes.addShaped({id: ItemID.aerolitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aerolitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aeroliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);
Recipes.addShaped({id: ItemID.aeroliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);




IDRegistry.genItemID("bloodsword");
IDRegistry.genItemID("bloodpickaxe");
IDRegistry.genItemID("bloodaxe");
IDRegistry.genItemID("bloodshovel");
Item.createItem("bloodsword", "§aКровавый меч\n§r\n 37 урон", {name: "bloodsword", meta: 0}, {stack: 1});
Item.createItem("bloodpickaxe", "§2Кровавая кирка", {name: "bloodpickaxe", meta: 0}, {stack: 1});
Item.createItem("bloodaxe", "§2Кровавый топор", {name: "bloodaxe", meta: 0}, {stack: 1});
Item.createItem("bloodshovel", "§2Кровавая лопата", {name: "bloodshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("blood", {durability: 2100, level: 6, efficiency: 100, damage: 45, enchantability: 14});
ToolAPI.setTool(ItemID.bloodsword, "blood", ToolType.sword);
ToolAPI.setTool(ItemID.bloodpickaxe, "blood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bloodaxe, "blood", ToolType.axe);
ToolAPI.setTool(ItemID.bloodshovel, "blood", ToolType.shovel);

Recipes.addShaped({id: ItemID.bloodsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
Recipes.addShaped({id: ItemID.bloodshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);
































// file: items/swords.js

IDRegistry.genItemID("DirtusSword");
Item.createItem("DirtusSword", "§aМеч Диртуса\n§r\n 10 урон", {name: "DirtusSword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("DirtusSword", {durability: 2000, level: 5, efficiency: 70, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.DirtusSword, "DirtusSword", ToolType.sword);


IDRegistry.genItemID("RyusukeSword");
Item.createItem("RyusukeSword", "§aМеч Рйусуке\n§r\n 10 урон", {name: "RyusukeSword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("RyusukeSword", {durability: 2000, level: 5, efficiency: 70, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.DirtusSword, "RyusukeSword", ToolType.sword);



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.RyusukeSword){ 
Entity.setFire(victim, 200);
}
});





IDRegistry.genItemID("icecrystalsword");
Item.createItem("icecrystalsword", "§aМеч из ледяных коисталлов\n§r\n 8 урон", {name: "icecrystalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("icecrystalsword", {durability: 2000, level: 5, efficiency: 70, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.icecrystalsword, "icecrystalsword", ToolType.sword);

Recipes.addShaped({id: ItemID.icecrystalsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.icecrystal, 0, 'b', 280, 0]);

IDRegistry.genItemID("taigacrystalsword");
Item.createItem("taigacrystalsword", "§aМеч из ледяных коисталлов\n§r\n 12 урон\nЗамедляет врагов", {name: "taigacrystalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("taigacrystalsword", {durability: 2000, level: 5, efficiency: 70, damage: 13, enchantability: 14});
ToolAPI.setTool(ItemID.taigacrystalsword, "taigacrystalsword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.taigacrystalsword){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 2, 200)
}
});


Recipes.addShaped({id: ItemID.taigacrystalsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.forceicecrystal, 0, 'b', 280, 0]);






IDRegistry.genItemID("featherknife");
Item.createItem("featherknife", "§aПерьевой кинжал\n§r\n 20 урон", {name: "featherknife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("featherknife", {durability: 2000, level: 5, efficiency: 70, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.featherknife, "featherknife", ToolType.sword);

Recipes.addShaped({id: ItemID.featherknife, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);


IDRegistry.genItemID("evilaxe");
Item.createItem("evilaxe", "§aТопор Зла\n§r\n 40 урон\nРазрушение деревьев может призвать кое-что плохое...", {name: "evilaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("evilaxe", {durability: 616, level: 5, efficiency: 70, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.evilaxe, "evilaxe", ToolType.sword);

Recipes.addShaped({id: ItemID.evilaxe, count: 1, data: 0}, [ " b ", "bab", " b "], ['a', ItemID.aeroliteaxe, 0, 'b', ItemID.evildust, 0]);








IDRegistry.genItemID("glitchspear");
Item.createItem("glitchspear", "§aКопьё Глюка \n§r25 урона", {name: "glitchspear", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("glitchspear", {durability: 2000, level: 5, efficiency: 70, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.glitchspear, "glitchspear", ToolType.sword);


IDRegistry.genItemID("infernality");
Item.createItem("infernality", "§aИнферналити \n§r55 урона\nВо славу Сатане", {name: "infernality", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("infernality", {durability: 2000, level: 5, efficiency: 70, damage: 55, enchantability: 14});
ToolAPI.setTool(ItemID.infernality, "infernality", ToolType.sword);





































// file: items/greatblades.js

IDRegistry.genItemID("guardiansword");
Item.createItem("guardiansword", "§1Великий Меч Хранителя \n§r80-88 урона", {name: "guardiansword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("guardiansword", {durability: 2000, level: 5, efficiency: 70, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.guardiansword, "guardiansword", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.guardiansword && Math.random() <= 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
});




IDRegistry.genItemID("undergroundsword");
Item.createItem("undergroundsword", "§1Великий Подземный Меч \n§r82-98 урона\nНакладывает регенерацию на игрока", {name: "undergroundsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("undergroundsword", {durability: 2000, level: 5, efficiency: 70, damage: 82, enchantability: 14});
ToolAPI.setTool(ItemID.undergroundsword, "undergroundsword", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.undergroundsword && Math.random() <= 0.5){ 	
Entity.addEffect(victim, 7, 2, 20, true, true);
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
}
});






































// file: items/staffs.js


IDRegistry.genItemID("terraformingstaff");
Item.createItem("terraformingstaff", "§5 Посох терраформирования §r\n Уничтожает блоки", {name: "terraformingstaff", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fireleavseeds){
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y, coords.relative.z-1, 0, 0);



World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y+1, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y+1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y+1, coords.relative.z-1, 0, 0);



World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x, coords.relative.y-1, coords.relative.z-1, 0, 0);

World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z-1, 0, 0);
World.setBlock (coords.relative.x-1, coords.relative.y-1, coords.relative.z+1, 0, 0);
World.setBlock (coords.relative.x+1, coords.relative.y-1, coords.relative.z-1, 0, 0);

}
});























IDRegistry.genItemID("bloodstaff");
Item.createItem("bloodstaff", "§5 Пиропосох §r\n Создает огненные шары", {name: "bloodstaff", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.bloodstaff){


var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});

Recipes.addShaped({id: ItemID.bloodstaff, count: 1, data: 0}, [ " ab", " aa", "a  "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);









































// file: items/armorEffects.js

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.luhsamhelmet && chest.id == ItemID.luhsamchestplate && legs.id == ItemID.luhsamleggings && boots.id == ItemID.luhsamboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
    
    
    
    if (boots.id == ItemID.DirtusBoots) {
    	World.setBlock(pos.x, pos.y-2, pos.z, 2);
    World.setBlock(pos.x, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x, pos.y-2, pos.z+1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z+1, 2);
    World.setBlock(pos.x+1, pos.y-2, pos.z-1, 2);
    World.setBlock(pos.x-1, pos.y-2, pos.z+1, 2);
    }
    
    
    if (helmet.id == ItemID.bloodhelmet && chest.id == ItemID.bloodchestplate && legs.id == ItemID.bloodleggings && boots.id == ItemID.bloodboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
    }
    
    
    if (helmet.id == ItemID.birdhelmet && chest.id == ItemID.birdchestplate && legs.id == ItemID.birdleggings && boots.id == ItemID.birdboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 100)
    }
    
    	
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});




// file: items/seeds.js

IDRegistry.genItemID("fireleavpetal");
Item.createItem("fireleavpetal", "Лепестки огнецвета", {name: "fireleavpetal", meta: 0}, {stack: 64});


IDRegistry.genItemID("fireleavseeds");
Item.createItem("fireleavseeds", "Семена огнецвета", {name: "fireleavseeds", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.fireleavseeds)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.fireleav4, 0);
Player.decreaseCarriedItem (1);
}
});




// file: items/otherous.js

IDRegistry.genItemID("goldendust");
Item.createItem("goldendust", "Золотая пыль", {name: "goldendust", meta: 0}, {stack: 64});

IDRegistry.genItemID("evildust");
Item.createItem("evildust", "Пыль Зла", {name: "evildust", meta: 0}, {stack: 64});
/*
IDRegistry.genItemID("jungleeye");
Item.createItem("jungleeye", "Глаз Тарантула", {name: "jungleeye", meta: 0}, {stack: 64});

IDRegistry.genItemID("junglesoup");
Item.createFoodItem("junglesoup", "§eСуп из глаз Тарантула§1 \n 3 еды \n Регенерация 2 на 10 секунд ", {name: "lemon", meta: 0}, {food: 3});

Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.junglesoup){
Entity.addEffect(Player.get(), 10, 1, 200, false,false);
}});

Recipes.addShaped({id: ItemID.junglesoup, count: 1, data: 0}, [ "aaa", " b ", "   "], ['a', ItemID.jungleeye, 0, 'b', 281, 0]);
*/


IDRegistry.genItemID("phantomsoul");
Item.createItem("phantomsoul", "Измученная душа", {name: "phantomsoul", meta: 0}, {stack: 64});



IDRegistry.genItemID("returnticket");
Item.createItem("returnticket", "Билет обратно", {name: "returnticket", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.returnticket, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 339, 0]);

IDRegistry.genItemID("ancientartephact");
Item.createItem("ancientartephact", "Древний Артефакт", {name: "ancientartephact", meta: 0}, {stack: 64});






























// file: items/upgradeKits.js

IDRegistry.genItemID("darkupgradekit");
Item.createItem("darkupgradekit", "Дарковый улучшающий комплект", {name: "darkupgradekit", meta: 0}, {stack: 1});



IDRegistry.genItemID("beastupgradekit");
Item.createItem("beastupgradekit", "Хищный улучшающий комплект", {name: "beastupgradekit", meta: 0}, {stack: 1});




// file: items/guns1.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
	crosshairGUI:{
		bitmap:{
			name:-1,
			coords:{
				x:0,
				y:0,
				width:2048,
				height:512
			},
			size:{
				width:4000,
				height:1000
			}
		}
	}
});

ShootLib.addGun({
	id:"rocketgun",
	name:"Пушка Ракеты \n20 урона",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});




ShootLib.addGun({
	id:"brinathor",
	name:"Бринатхор \n35 урона",
	ammo:"luxtarbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"brinathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:35
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"darkinathor",
	name:"Даркинатхор \n50 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"darkinathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:50
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});





ShootLib.addGun({
	id:"dudlik",
	name:"Дудлик \n20 урона",
	ammo:"aerolitebullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"dudlik",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:5,
		damage:20
	},
	fov:{
		level:20
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"rainbowgun",
	name:"Радужная Пушка \n25 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rainbowgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:10,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"goodgun",
	name:"Хорошая Пушка \n30 урона",
	ammo:"darkhambullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"goodgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:30
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});




ShootLib.addGun({
	id:"minigun",
	name:"Минигатхор \n17 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"minigun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:50,
		damage:17
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"rocketlauncher",
	name:"Ракетопускатель \n60 урона",
	ammo:"rocket",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketlauncher",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:60
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/LongReload.ogg"
	}
});



ShootLib.addGun({
	id:"stormbow",
	name:"Штормовой лук \n55 урона",
	ammo:"skylitearrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"stormbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:55
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"VioletDrobovik",
	name:"Фиолетовый дробовик \n66 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"VioletDrobovik",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:66
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	},
    shotgun:{ //Только при gun.shotType:ShotType.SHOTGUN
        count:6, //Кол-во дробинок
        degreesSpread:3, //Разброс дроби
    }
});



ShootLib.addGun({
	id:"gigathor",
	name:"Гигатхор \n70 урона",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"gigathor",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:3,
		damage:70
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"firegun",
	name:"Огнемёт \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"firegun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:100,
		damage:100
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"RedDrobovik",
	name:"Красный дробовик \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"RedDrobovik",
		meta:0
	},
	shotType:ShotType.SHOTGUN,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:86,
		damage:100
	},
	fov:{
		level:46
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	},
    shotgun:{ //Только при gun.shotType:ShotType.SHOTGUN
        count:8, //Кол-во дробинок
        degreesSpread:3, //Разброс дроби
    }
});











ShootLib.addGun({
	id:"skullcrossbow",
	name:"Черепной арбалет \n35 урона",
	ammo:"bolt",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"skullcrossbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:1,
		damage:35
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"wildbow",
	name:"Хищный лук \n72 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"wildbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:70
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"stonerifle",
	name:"Каменная винтовка \n100 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"stonerifle",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:100,
		damage:100
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"wildminigun",
	name:"Хищноминигатхор \n30 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"wildminigun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:15,
		count:62,
		damage:30
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"bloodbow",
	name:"Лук с артериальной тетевой \n82 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"bloodbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:82
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"bloodgun",
	name:"Багряный бластер \n78 урона",
	ammo:"luxtarrbullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"bloodgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:78
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});




ShootLib.addGun({
	id:"shadowbow",
	name:"Теневой лук \n87 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"shadowbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:87
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});


ShootLib.addGun({
	id:"redlightning",
	name:"Красная молния \n93 урона",
	ammo:"bloodarrow",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"redlightning",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:93
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});




















ShootLib.addAmmos([
{
	id:"luxtarrbullet",
	name:"Пуля",
	texture:{
		name:"luxtarrbullet",
		meta:0
	}
},
{
	id:"darkhambullet",
	name:"Пушечное ядро",
	texture:{
		name:"darkhambullet",
		meta:0
	}
}, 
{
	id:"redpowerbullet",
	name:"Красная пуля",
	texture:{
		name:"redpowerbullet",
		meta:0
	}
}, 
{
	id:"energybullet",
	name:"Энергитическая пуля",
	texture:{
		name:"energybullet",
		meta:0
	}
}, 
{
	id:"rocket",
	name:"Ракета",
	texture:{
		name:"rocket",
		meta:0
	}
}, 
{
	id:"aerolitebullet",
	name:"Аэролитовая пуля",
	texture:{
		name:"aerolitebullet",
		meta:0
	}
}, 
{
	id:"skylitearrow",
	name:"Скайлитовая стрела",
	texture:{
		name:"skylitearrow",
		meta:0
	}
}, 

{
	id:"bloodarrow",
	name:"Кровавая стрела",
	texture:{
		name:"bloodarrow",
		meta:0
	}
}, 

{
	id:"bolt",
	name:"Арбалетный болт",
	texture:{
		name:"bolt",
		meta:0
	}
}, 

 ]);
 
 
 
 
 
 
 
 




// file: items/throw.js

IDRegistry.genItemID("arkenslansuriken");
Item.createThrowableItem("arkenslansuriken", "§a Аркенслановый сюрикен §r \n 110 урон \n Метательное оружие", {name:"arkenslansuriken"}, {stack:64});

Item.registerThrowableFunction("arkenslansuriken", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 110);
Entity.setFire(targetEntity, 1000);
} 
} 
);





















































// file: items/money.js

IDRegistry.genItemID("bronzemoney");
Item.createItem("bronzemoney", "Бронзовая монета", {name: "bronzemoney", meta: 0}, {stack: 64});


IDRegistry.genItemID("silvermoney");
Item.createItem("silvermoney", "Серебряная монета", {name: "silvermoney", meta: 0}, {stack: 64});


IDRegistry.genItemID("goldmoney");
Item.createItem("goldmoney", "Золотая монета", {name: "goldmoney", meta: 0}, {stack: 64});




// file: items/baubles.js

IMPORT ("BaublesAPI", "Baubles");
	
	IDRegistry.genItemID("valkiriaring");
Item.createItem("valkiriaring", "Кольцо Валькирии", {name: "valkiriaring", meta: 0}, {stack: 3});

Baubles.registerBauble({
    id: ItemID.valkiriaring, //Айди предмета
    type: "ring", //Тип (amulet, ring, belt, head, body или charm)
    onEquip: function () {
        //Вызывается при экипировке указанного предмета в соответствующий слот и при входе в мир, если предмет одет
    },

    onTakeOff: function () {
        //Вызывается, когда игрок снимет предмет или при его смерти
    },
    
    tick: function () {
    	Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
        //Вызывается каждый тик, если указанный предмет одет
    }
});

Recipes.addShaped({id: ItemID.valkiriaring, count: 1, data: 0}, [ " a ", "a a", " a "], ['a', ItemID.aeroliteingot, 0]);












// file: generations.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){ 
       World.setBlock(coords.x,coords.y+30,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+31,  coords.z-1, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+31,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+31,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x-1,coords.y+31,  coords.z-1, BlockID.cometbricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y+35,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x,coords.y+34,  coords.z-1, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x-1,coords.y+34,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+1,coords.y+34,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x-1,coords.y+34,  coords.z-1, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x,coords.y+33,  coords.z, BlockID.cometportal, 0);
       World.setBlock(coords.x,coords.y+32,  coords.z, BlockID.cometportal, 0);
}}});















































// file: dimensions/comet.js




var BLOCK_TYPE_BASE = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});

var BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 6,
    solid: false,
    destroytime: 0.001,
    explosionres: 1,
    opaque: false
});






IDRegistry.genBlockID("cometgrass");
Block.createBlock("cometgrass", [{name: "Земля с травой кометы", texture: [["cometdirt", 0], ["cometgrasstop", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometdirt");
Block.createBlock("cometdirt", [{name: "Земля кометы", texture: [["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometstone");
Block.createBlock("cometstone", [{name: "Камень кометы", texture: [["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("skyliteore");
Block.createBlock("skyliteore", [{name: "Скайлитовая руда", texture: [["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0]], inCreative: true}], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.skyliteore, "stone", 2, true);
Block.setDestroyLevel (BlockID.skyliteore, 4) 
Block.registerDropFunction("skyliteore", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[BlockID.skyliteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("cometwood");
Block.createBlock("cometwood", [{name: "Древесина кометы", texture: [["cometwoodtop", 0], ["cometwoodtop", 0], ["cometwood", 0], ["cometwood", 0], ["cometwood", 0], ["cometwood", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometplanks");
Block.createBlock("cometplanks", [{name: "Доски кометы", texture: [["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometleaves");
Block.createBlock("cometleaves", [{name: "Листва кометы", texture: [["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometportal");
Block.createBlock("cometportal", [{name: "Портал на Кометы", texture: [["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0]], inCreative: true}], BLOCK_TYPE_BASE);


IDRegistry.genBlockID("cometspawner");
Block.createBlock("cometspawner", [{name: "Спавнер Слизней Комет", texture: [["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometspawner1");
Block.createBlock("cometspawner1", [{name: "Спавнер Единорогов Комет", texture: [["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0]], inCreative: true}], BLOCK_TYPE_BASE);

ToolAPI.registerBlockMaterial(BlockID.cometspawner, "stone", 1, true);
Block.setDestroyLevel (BlockID.cometspawner, 1) 
Block.registerDropFunction("cometspawner", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);

ToolAPI.registerBlockMaterial(BlockID.cometspawner1, "stone", 1, true);
Block.setDestroyLevel (BlockID.cometspawner1, 1) 
Block.registerDropFunction("cometspawner1", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);


 







IMPORT("dimensions");




const COMET_SKY_COLOR = [1, 0.8, 1];
const COMET_FOG_COLOR = [0, 0.6, 1];

var Comet = new Dimension({
    name: "Comet",
    
    generation: {
        layers: [
            //island
            {
                range: [5, 256],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .0275, .016]
                    }
                },
                
                gradient: [[4, -8], [.15, -.16], [23, .42], [.108, -.19], [19, -19]],
                terrain: {
                    base: BlockID.cometstone,
                    cover: {
                        height: 4,
                        top: BlockID.cometgrass,
                        block: BlockID.cometdirt
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: COMET_SKY_COLOR,
        fog: COMET_FOG_COLOR
    },
    callbacks: {
       tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("CometChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
});


var teleporterComet = Comet.getTeleporter(); 
 
var teleporterBack = teleporterComet.OVERWORLD; 
// alert(dimension.id);


Callback.addCallback("ItemUse", function (coords, item, block) {
	var pos = Player.getPosition();
if (block.id==BlockID.cometportal){
teleporterComet.enter(); 
Player.setPosition(pos.x, pos.y-80, pos.z);
World.setBlock(pos.x, pos.y, pos.z, BlockID.cometbricks);
}
});



IDRegistry.genItemID("portablecometteleporter");
Item.createItem("portablecometteleporter", "Портативный портал на Кометы", {name: "portablecometteleporter", meta: 0}, {stack: 64});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.portablecometteleporter){
teleporterComet.enter(); 
}
});




Recipes.addShaped({id: ItemID.portablecometteleporter, count: 1, data: 0}, [ "b b", " a ", "b b"], ['a', BlockID.cometportal, 0, 'b', ItemID.darkhamingot, 0]);








IDRegistry.genBlockID("cometbluetallgrass"); 
  Block.createBlock("cometbluetallgrass", [{name: "Синяя трава Кометы", texture: [["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometbluetallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometbluetallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometbluetallgrass, -1, render);
Block.setBlockShape(BlockID.cometbluetallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometbluetallgrass");
Item.createItem("cometbluetallgrass", "Синяя трава Кометы", {name: "cometbluetallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometbluetallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometbluetallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometbluetallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometbluetallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometbluetallgrass, 0);
}}});



IDRegistry.genBlockID("cometdandelion"); 
  Block.createBlock("cometdandelion", [{name: "Стелларис Данделиорис", texture: [["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometdandelion", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometdandelion", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometdandelion, -1, render);
Block.setBlockShape(BlockID.cometbluetallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometdandelion");
Item.createItem("cometdandelion", "Стелларус Данделиорис", {name: "cometdandelion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometdandelion)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometdandelion, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometdandelion, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometdandelion, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometdandelion){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometdandelion, 0);
}}});



IDRegistry.genBlockID("cometflowercap"); 
  Block.createBlock("cometflowercap", [{name: "Синяя трава кометы", texture: [["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometflowercap", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometflowercap", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometflowercap, -1, render);
Block.setBlockShape(BlockID.cometflowercap, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometflowercap");
Item.createItem("cometflowercap", "Капуста кометы", {name: "cometflowercap", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometflowercap)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometflowercap, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometflowercap, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometflowercap, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometflowercap, 0);
}}});




IDRegistry.genBlockID("cometorchid"); 
  Block.createBlock("cometorchid", [{name: "§4Синяя трава кометы", texture: [["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometorchid", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometorchid", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometorchid, -1, render);
Block.setBlockShape(BlockID.cometorchid, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometorchid");
Item.createItem("cometorchid", "Комет орхид", {name: "cometorchid", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometorchid)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometorchid, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometorchid, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometorchid, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometorchid, 0);
}}});



IDRegistry.genBlockID("cometpinktallgrass"); 
  Block.createBlock("cometpinktallgrass", [{name: "Синяя трава кометы", texture: [["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometpinktallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometpinktallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometpinktallgrass, -1, render);
Block.setBlockShape(BlockID.cometpinktallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometpinktallgrass");
Item.createItem("cometpinktallgrass", "Розовая трава кометы", {name: "cometpinktallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometpinktallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometpinktallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometpinktallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometpinktallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometpinktallgrass, 0);
}}});





Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.cometleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.cometleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       
       
       World.setBlock(coords.x,coords.y-3,  coords.z, BlockID.skyliteore, 0);
}}});


IDRegistry.genItemID("cometstick");
Item.createItem("cometstick", "Палка Кометы", {name: "cometstick", meta: 0}, {stack: 64});
























Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.cometspawner1, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.cometspawner, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.comettrader, 0);
}}});






Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.comettrader1, 0);
}}});






Recipes.addShaped({id: ItemID.cometstick, count: 1, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.cometplanks, 0]);
Recipes.addShaped({id: BlockID.cometplanks, count: 1, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.cometwood, 0]);






























































// file: dimensions/purgatorium.js

IDRegistry.genBlockID("purgatoriumgrass");
Block.createBlock("purgatoriumgrass", [{name: "Земля Пургаториума", texture: [["purgatoriumstone", 0], ["purgatoriumgrasstop", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("purgatoriumstone");
Block.createBlock("purgatoriumstone", [{name: "Камень Пургаториума", texture: [["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("purgatoriumportal");
Block.createBlock("purgatoriumportal", [{name: "Портал в Пургаториум", texture: [["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genItemID("purgatoriumportal");
Item.createItem("purgatoriumportal", "Портативный портал в Пургаториум", {name: "purgatoriumportal", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.purgatoriumportal, count: 1, data: 0}, [ "b b", " a ", "b b"], ['a', BlockID.purgatoriumportal, 0, 'b', ItemID.darkhamingot, 0]);



const PURGATORIUM_SKY_COLOR = [0, 0, 0];
const PURGATORIUM_FOG_COLOR = [0.1, 0, 0];

var Purgatorium = new Dimension({
    name: "Purgatorium",
    
    generation: {
        layers: [
            // major islands
            { 
                range: [0, 80],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.6,
                        scale: [1, 0.4, 1]
                    }
                },
                
                gradient: [[0, 1], [0.4, 1], [0.5, 0], [0.6, -1], [1, -1]],
                
                terrain: {
                    base: BlockID.purgatoriumstone,
                    cover: {
                        height: 4,
                        top: BlockID.purgatoriumgrass,
                        block: BlockID.purgatoriumstone
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: PURGATORIUM_SKY_COLOR,
        fog: PURGATORIUM_FOG_COLOR
    },
    
    callbacks: {
tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("PurgatoriumChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
 }
});


IDRegistry.genBlockID("purgatoriumeyeflower"); 
  Block.createBlock("purgatoriumeyeflower", [{name: "§4Синяя трава кометы", texture: [["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumeyeflower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumeyeflower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumeyeflower, -1, render);
Block.setBlockShape(BlockID.purgatoriumeyeflower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumeyeflower");
Item.createItem("purgatoriumeyeflower", "§4 Глазоцвет", {name: "purgatoriumeyeflower", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumeyeflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumeyeflower, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumeyeflower, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumeyeflower, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumeyeflower, 0);
}}});

IDRegistry.genBlockID("purgatoriumeyelessgrass"); 
  Block.createBlock("purgatoriumeyelessgrass", [{name: "§4Синяя трава кометы", texture: [["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumeyelessgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumeyelessgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumeyelessgrass, -1, render);
Block.setBlockShape(BlockID.purgatoriumeyelessgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumeyelessgrass");
Item.createItem("purgatoriumeyelessgrass", "§4 Монстрова слепота", {name: "purgatoriumeyelessgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumeyelessgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumeyelessgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumeyelessgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumeyelessgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumeyelessgrass, 0);
}}});

IDRegistry.genBlockID("purgatoriumtallgrass"); 
  Block.createBlock("purgatoriumtallgrass", [{name: "§4Синяя трава кометы", texture: [["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumtallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumtallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumtallgrass, -1, render);
Block.setBlockShape(BlockID.purgatoriumtallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumtallgrass");
Item.createItem("purgatoriumtallgrass", "§4 Трава пургаториума", {name: "purgatoriumtallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumtallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumtallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumtallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumtallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumtallgrass, 0);
}}});

IDRegistry.genBlockID("boneblock");
Block.createBlock("boneblock", [{name: "Блок кости", texture: [["boneblocktop", 0], ["boneblocktop", 0], ["boneblock", 0], ["boneblock", 0], ["boneblock", 0], ["boneblock", 0]], inCreative: true}], BLOCK_TYPE_BASE);

Recipes.addShaped({id: BlockID.boneblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 352, 0]);

Recipes.addShaped({id: 352, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.boneblock, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+2,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+4,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-2,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-4,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       
       ////
       
       World.setBlock(coords.x+1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       
       ////////
       
       
       
       World.setBlock(coords.x+1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       
       ////
       
       World.setBlock(coords.x+1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
}}});






var teleporterPurgatorium = Purgatorium.getTeleporter(); 
 
var teleporterBack = teleporterPurgatorium.OVERWORLD; 

Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.purgatoriumportal){ 
teleporterPurgatorium.enter(); 
} 
if(item.id == ItemID.returnticket){ 
teleporterBack.enter(); 
} 
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (block.id==BlockID.purgatoriumportal){
teleporterPurgatorium.enter(); 
}
});











Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
	
       World.setBlock(coords.x+22, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+21, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+10,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z, BlockID.redbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+19, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+18, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+11,  coords.z, BlockID.purgatorytrader, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
	
       World.setBlock(coords.x+22, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+21, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+10,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z, BlockID.redbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+19, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+18, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+11,  coords.z, BlockID.purgatorytrader1, 0);
}}});







// file: scales1.js

//???????


IMPORT("ScalesRPG");

var BitmapFactory = android.graphics.BitmapFactory;
var Color = android.graphics.Color;
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;


var Force = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "gui/force_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "gui/force_1.png"), 
        empty: BitmapFactory.decodeFile(__dir__ + "gui/force_2.png")
    },
    value: 7,
    defaultValue: 0
});




















 
Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == 267 && val < 1){ 
World.drop(pos.x+5, pos.y, pos.z+5, 267, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == 276 && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, 276, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.aquaturasword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.aquaturasword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});


Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.RyusukeSword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.RyusukeSword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.feathersword && val < 4){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.feathersword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.aerolitesword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.aerolitesword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});


Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.skylitesword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.skylitesword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});





/*
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==304)
{
Force.decrease();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==303)
{
Force.increase();
}
});
*/







var Speed = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "gui/speed_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "gui/speed_1.png"), 
        empty: BitmapFactory.decodeFile(__dir__ + "gui/speed_2.png")
    },
    value: 10,
    defaultValue: 0
});







	
	
	






























 











// file: items/potions.js


var val = Force.getValue();

IDRegistry.genItemID("forcepotion");
Item.createItem("forcepotion", "§dЗелье силы\n§r +1 сила", {name: "forcepotion", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion2");
Item.createItem("forcepotion2", "§dЗелье силы\n§r +3 силы", {name: "forcepotion2", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion3");
Item.createItem("forcepotion3", "§dЗелье силы\n§r +5 силы", {name: "forcepotion3", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion4");
Item.createItem("forcepotion4", "§dЗелье силы\n§r +8 силы", {name: "forcepotion4", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion5");
Item.createItem("forcepotion5", "§dЗелье силы\n§r +10 сил", {name: "forcepotion5", meta: 0}, {stack: 3});


Recipes.addShaped({id: ItemID.forcepotion, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.fireleavpetal, 0, 'b', 374, 0]);


Recipes.addShaped({id: ItemID.forcepotion2, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 39, 0, 'b', ItemID.forcepotion, 0]);

Recipes.addShaped({id: ItemID.forcepotion2, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 40, 0, 'b', ItemID.forcepotion, 0]);

Recipes.addShaped({id: ItemID.forcepotion3, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 377, 0, 'b', ItemID.forcepotion2, 0]);



Recipes.addShaped({id: ItemID.forcepotion4, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 432, 0, 'b', ItemID.forcepotion3, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
	var val = Force.getValue();
if (item.id==ItemID.forcepotion && val <= 19)
{
Force.increase();
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion2  && val <= 17)
{
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion3  && val <= 15)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion4  && val <= 11)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion5  && val <= 10)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});




// file: traiders.js

IDRegistry.genBlockID("comettrader");
Block.createBlock("comettrader", [{name: "Аукцион Комет", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiCometTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Три золотых монеты для Фиолетового Дробовика"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.comettrader, { 
 
getGuiScreen: function(){ 
return guiCometTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.VioletDrobovik, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});







IDRegistry.genBlockID("comettrader1");
Block.createBlock("comettrader1", [{name: "Аукцион Комет", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiCometTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Три золотых монеты для Гигатхора"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.comettrader1, { 
 
getGuiScreen: function(){ 
return guiCometTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.gigathor, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});











IDRegistry.genBlockID("moneyblock");
Block.createBlock("moneyblock", [{name: "Обменник монет", texture: [["moneyblocktop", 0], ["moneyblocktop", 0], ["moneyblock", 0], ["moneyblock", 0], ["moneyblock", 0], ["moneyblock", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiMoney = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "10 монет"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.moneyblock, { 
 
getGuiScreen: function(){ 
return guiMoney; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.bronzemoney, count: 10, data: 0},{id: ItemID.silvermoney, data: 0, count: 1}); 
 
 this.addRecipes({id: ItemID.silvermoney, count: 10, data: 0},{id: ItemID.goldmoney, data: 0, count: 1}); 
 
 this.container.validateAll(); 
} 
});



Recipes.addShaped({id: BlockID.moneyblock, count: 1, data: 0}, [ "bbb", "b b", "aaa"], ['a', ItemID.flisotuachewn, 0, 'b', ItemID.darkhamingot, 0]);










IDRegistry.genBlockID("purgatorytrader");
Block.createBlock("purgatorytrader", [{name: "Аукцион Пургаториума", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiPurgatoryTraider = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "7 серебрянных монет для посоха терраформирования"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.purgatorytrader, { 
 
getGuiScreen: function(){ 
return guiPurgatoryTraider; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.silvermoney, count: 25, data: 0},{id: ItemID.terraformingstaff, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});




IDRegistry.genBlockID("purgatorytrader1");
Block.createBlock("purgatorytrader1", [{name: "Аукцион Пургаториума", texture: [["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0], ["comettrader", 0]], inCreative: true}], BLOCK_TYPE_BASE);


var guiPurgatoryTraider1 = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "3 золотых монет для хищного лука"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.purgatorytrader1, { 
 
getGuiScreen: function(){ 
return guiPurgatoryTraider1; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data) && (slotSource.count === source.count)){ 
 slotSource.count--; 
 slotSource.count--; 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.goldmoney, count: 3, data: 0},{id: ItemID.wildbow, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
});










// file: mobs.js

importLib("AdvancedAI", "*");
IMPORT("SoundAPI")


Callback.addCallback("PlayerAttack", function (player, victim) {
Game.message("hp"+Entity.getRender (victim));
});

 var GolemDamage = new Sound();
GolemDamage.setSource("Damage/GolemDamage.ogg");


var GolemDeath = new Sound();
GolemDeath.setSource("Death/GolemDeath.ogg");

var BowsDamage = new Sound();
BowsDamage.setSource("Damage/BowsDamage.ogg");

var BowsDeath = new Sound();
BowsDeath.setSource("Death/BowsDeath.ogg");

var EkatebrinaTheme = new Sound();
BowsDeath.setSource("Themes/EkatebrinaTheme.ogg");

var CometEntTheme = new Sound();
BowsDeath.setSource("Themes/CometEntTheme.ogg");

var NightQweenTheme = new Sound();
BowsDeath.setSource("Themes/NightQweenTheme.ogg");

var PurgatoryTheme = new Sound();
BowsDeath.setSource("Themes/PurgatoryTheme.ogg");



IDRegistry.genItemID("spawnsuperguy");
Item.createItem("spawnsuperguy", "Призвать существо - Супер Парень", {name: "spawnsuperguy", data: 0});


var SuperGuy = MobRegistry.registerEntity("SuperGuy");
SuperGuy.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/superguy.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Супер Парень " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

SuperGuy.customizeDescription({
	getHealth: function(){
  return 40;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.2});
 

 return drop;
 
}
});
SuperGuy.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 8,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnsuperguy", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("SuperGuy", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("spawnarkenian");
Item.createItem("spawnarkenian", "Призвать существо - Аркенианец", {name: "spawnarkenian", data: 0});


var Arkenian = MobRegistry.registerEntity("Arkenian");
Arkenian.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
Entity.setSkin(this.entity, "mobs/arkenian.png");//skin
 
 
 
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Аркениаенец " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 /*
 getGuiScreen: function(){ 
return guiCometTorg; 
}
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}
 
tick: function(){ 
 this.addRecipes({id: ItemID.aeroliteingot, data: 0},{id: ItemID.cometstick, data: 0, count: 1}); 
 this.container.validateAll(); 
} 
*/
Entity.damageEntity (63, 10) 
 
}
});

Arkenian.customizeDescription({
	getHealth: function(){
  return 80;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
// drop.push({id: ItemID.hpup7, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.4});
 return drop;
 
}
});
Arkenian.customizeAI({
getAITypes: function(){
return {
	
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg






var Arkenian2 = MobRegistry.registerEntity("Arkenian2");
Arkenian2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
Entity.setSkin(this.entity, "mobs/arkenian2.png");//skin
 
 
 
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Аркениаенец " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
Entity.damageEntity (63, 10) 
 
}
});

Arkenian2.customizeDescription({
	getHealth: function(){
  return 85;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.4});
 
 return drop;
 
}
});
Arkenian2.customizeAI({
getAITypes: function(){
return {
	
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnarkenian", function(coords, item, block){
 var coords = coords.relative;
 
 var IR = Math.round(rand * 1);
         if(IR == 0){
		Entity.spawnCustom("Arkenian", coords.x + .5, coords.y + 1, coords.z + .5);
	}
 if(IR == 1){
 	Entity.spawnCustom("Arkenian2", coords.x + .5, coords.y + 1, coords.z + .5);
 }
}); //spawn

















IDRegistry.genItemID("SpawnFox");
Item.createItem("SpawnFox", "Призвать существо - Лис", {name: "SpawnFox", data: 0});

var Fox = MobRegistry.registerEntity("Fox");
Fox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);
 Entity.setSkin(this.entity, "mobs/Fox.png");
 Entity.setNameTag(this.entity, "Лис " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
Fox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 2, max: 3}, data: 0, separate: true, chance: 1});
  drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 return drop;
 }
});
Fox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Fox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 





IDRegistry.genItemID("SpawnTamedFox");
Item.createItem("SpawnTamedFox", "Призвать существо - Прирученный Лис", {name: "SpawnTamedFox", data: 0});



var TamedFox = MobRegistry.registerEntity("TamedFox");
TamedFox.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 11);
 Entity.setSkin(this.entity, "mobs/Fox.png");
 Entity.setNameTag(this.entity, "Прирученный Лис " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
},
attackedBy: function(attacker, amount){

}
});
TamedFox.customizeDescription({
	getHealth: function(){
  return 40;},
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
  drop.push({id: ItemID.SpawnTamedFox, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
  drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 return drop;
 }
});
TamedFox.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Wander,
priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});
Item.registerUseFunction("SpawnTamedFox", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("TamedFox", coords.x + .5, coords.y + 1, coords.z + .5);
}); 

















IDRegistry.genItemID("spawnhalfworlder");
Item.createItem("spawnhalfworlder", "Призвать существо - Халфворлдер", {name: "spawnhalfworlder", data: 0});


var HalfWorlder = MobRegistry.registerEntity("HalfWorlder");
HalfWorlder.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/halfworlder.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Халфворлдер " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

HalfWorlder.customizeDescription({
	getHealth: function(){
  return 100;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.rocketgun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 return drop;
 
}
});
HalfWorlder.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("spawnhalfworlder", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("HalfWorlder", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


















IDRegistry.genItemID("SpawnRustyGolem");
Item.createItem("SpawnRustyGolem", "Призвать существо - Ржавый Голем", {name: "SpawnRustyGolem", data: 0});


var RustyGolem = MobRegistry.registerEntity("RustyGolem");
RustyGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/RustyGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Ржавый Голем " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 GolemDamage.play();

 
}
});

RustyGolem.customizeDescription({
	getHealth: function(){
  return 150;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.rustyingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 1, max: 4}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 
 
GolemDeath.play();
 return drop;
 
}
});
RustyGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnRustyGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("RustyGolem", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnGoldenGolem");
Item.createItem("SpawnGoldenGolem", "Призвать существо - Золотой Голем", {name: "SpawnGoldenGolem", data: 0});


var GoldenGolem = MobRegistry.registerEntity("GoldenGolem");
GoldenGolem.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/GoldenGolem.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Золотой Голем " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
GolemDamage.play();
 
}
});

GoldenGolem.customizeDescription({
	getHealth: function(){
  return 150;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.goldendust, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 266, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 drop.push({id: 294, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: ItemID.cometbanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.15});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.41});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.energybullet, count: {min: 1, max: 20}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 
 
GolemDeath.play();
 return drop;
 
}
});
GoldenGolem.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnGoldenGolem", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("GoldenGolem", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn












IDRegistry.genItemID("SpawnFakeChicken");
Item.createItem("SpawnFakeChicken", "Призвать существо - Лжекурица", {name: "SpawnFakeChicken", data: 0});


var FakeChicken = MobRegistry.registerEntity("FakeChicken");
FakeChicken.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 5);//render
 Entity.setSkin(this.entity, "mobs/FakeChicken.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();



//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 //PlaySoundFile("FakeChickenDamage.ogg");

 
}
});

FakeChicken.customizeDescription({
	getHealth: function(){
  return 20;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
// drop.push({id: ItemID.rustyingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});

var coords = Entity.getPosition(this.entity);

 Entity.spawnCustom("FakeChicken2", coords.x + .5, coords.y + 1, coords.z + .5);
//PlaySoundFile("FakeChickenDeath.ogg");
 return drop;
 
}
});
FakeChicken.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.2,
angular_speed: 0.2,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.2,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 8,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFakeChicken", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FakeChicken", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn






var FakeChicken2 = MobRegistry.registerEntity("FakeChicken2");
FakeChicken2.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 5);//render
 Entity.setSkin(this.entity, "mobs/FakeChicken2.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Лжекурица " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 //PlaySoundFile("FakeChickenDamage.ogg");

 
}
});

FakeChicken2.customizeDescription({
	getHealth: function(){
  return 15;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: 366, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});

drop.push({id: ItemID.fakefeather, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.2});
 
 
//PlaySoundFile("FakeChickenDeath.ogg");
 return drop;
 
}
});
FakeChicken2.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.4,
angular_speed: 0.4,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.4,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI








/*
IDRegistry.genItemID("SpawnTarantula");
Item.createItem("SpawnTarantula", "Призвать существо - Тарантул", {name: "SpawnTarantula", data: 0});


var Tarantula = MobRegistry.registerEntity("Tarantula");
Tarantula.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, Native.MobRenderType.creeper);//render
 Entity.setSkin(this.entity, "mobs/Tarantula.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Тарантул " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

Tarantula.customizeDescription({
	getHealth: function(){
  return 50;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.jungleeye, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 287, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 drop.push({id: 375, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 
//GolemDeath.play();
 return drop;
 
}
});
Tarantula.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnTarantula", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Tarantula", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(rand * 61);
    var v = parseInt(rand * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 18 && World.getBlockData (pos.x, pos.y, pos.z) == 3){
	if(rand < .0006){
Entity.spawnCustom("Tarantula", pos.x+10, pos.y + 1, pos.z);
}
}
});
*/





IDRegistry.genItemID("SpawnForceZombie");
Item.createItem("SpawnForceZombie", "Призвать существо - Сильный Зомби", {name: "SpawnForceZombie", data: 0});


var ForceZombie = MobRegistry.registerEntity("ForceZombie");
ForceZombie.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/ForceZombie.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
//Entity.setNameTag(this.entity, "Тарантул " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

ForceZombie.customizeDescription({
	getHealth: function(){
  return 50;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.DirtusSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: 367, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 391, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 drop.push({id: 392, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 drop.push({id: 351, count: {min: 1, max: 1}, data: 14, separate: true, chance: 0.01});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 
//GolemDeath.play();
 return drop;
 
}
});
ForceZombie.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnForceZombie", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("ForceZombie", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnWildCreeper");
Item.createItem("SpawnWildCreeper", "Призвать существо - Дикий Крипер", {name: "SpawnWildCreeper", data: 0});


var WildCreeper = MobRegistry.registerEntity("WildCreeper");
WildCreeper.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/WildCreeper.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Дикий Крипер " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
//GolemDamage.play();
 
}
});

WildCreeper.customizeDescription({
	getHealth: function(){
  return 40;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.DirtusSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 drop.push({id: 397, count: {min: 1, max: 1}, data: 4, separate: true, chance: 0.15});
 drop.push({id: 289, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 263, count: {min: 1, max: 3}, data: 1, separate: true, chance: 0.5});
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 
//GolemDeath.play();
 return drop;
 
}
});
WildCreeper.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnWildCreeper", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("WildCreeper", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn













IDRegistry.genItemID("SpawnBows");
Item.createItem("SpawnBows", "Призвать существо - Бовс", {name: "SpawnBows", data: 0});


var Bows = MobRegistry.registerEntity("Bows");
Bows.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 8);//render
 Entity.setSkin(this.entity, "mobs/Bows.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Бовс " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
BowsDamage.play();
 
}
});

Bows.customizeDescription({
	getHealth: function(){
  return 40;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.icecrystal, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.5});
 drop.push({id: 79, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 drop.push({id: 332, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.SpawnEkatebrina, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
BowsDeath.play();
 return drop;
 
}
});
Bows.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnBows", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Bows", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnHotSavanna");
Item.createItem("SpawnHotSavanna", "Призвать существо - Горячий Савахха", {name: "SpawnHotSavanna", data: 0});


var HotSavanna = MobRegistry.registerEntity("HotSavanna");
HotSavanna.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/HotSavanna.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Горячий Савахха " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
GolemDamage.play();
 
}
});

HotSavanna.customizeDescription({
	getHealth: function(){
  return 80;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.RyusukeSword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 drop.push({id: 49, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 
 
//GolemDeath.play();
 return drop;
 
}
});
HotSavanna.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnHotSavanna", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("HotSavanna", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn












IDRegistry.genItemID("SpawnEkatebrina");
Item.createItem("SpawnEkatebrina", "Призвать существо - Екатебрина", {name: "SpawnEkatebrina", data: 0});


var Ekatebrina = MobRegistry.registerEntity("Ekatebrina");
Ekatebrina.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Ekatebrina.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Екатебрина " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("Bows", pos.x, pos.y, pos.z);
 }
//GolemDamage.play();
 
}
});

Ekatebrina.customizeDescription({
	getHealth: function(){
  return 450;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.forceicecrystal, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 drop.push({id: ItemID.SpawnBows, count: {min: 1, max: 5}, data: 4, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
 drop.push({id: ItemID.silvermoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 4, max: 6}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 
 
//GolemDeath.play();
 return drop;
 
}
});
Ekatebrina.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnEkatebrina", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Ekatebrina", coords.x + .5, coords.y + 1, coords.z + .5);
 EkatebrinaTheme.play();
}); //spawn





IDRegistry.genItemID("SpawnMonsterWithWhiteEyes");
Item.createItem("SpawnMonsterWithWhiteEyes", "Призвать существо - Монстр с Белыми Глазами", {name: "SpawnMwWE", data: 0});


var MonsterWithWhiteEyes = MobRegistry.registerEntity("MonsterWithWhiteEyes");
MonsterWithWhiteEyes.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/MwWE.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Монстр с Белыми Глазами " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

MonsterWithWhiteEyes.customizeDescription({
	getHealth: function(){
  return 300;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.brinathor, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});

drop.push({id: ItemID.silvermoney, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 8}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 

 return drop;
 
}
});
MonsterWithWhiteEyes.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnMonsterWithWhiteEyes", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("MonsterWithWhiteEyes", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn



















IDRegistry.genItemID("SpawnDarker");
Item.createItem("SpawnDarker", "Призвать существо - Потёмник", {name: "SpawnDarker", data: 0});


var Darker = MobRegistry.registerEntity("Darker");
Darker.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Darker.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Потёмник " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 

 
}
});

Darker.customizeDescription({
	getHealth: function(){
  return 450;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.darkupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.realitybanner, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
 
drop.push({id: ItemID.silvermoney, count: {min: 4, max: 5}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 8}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
Darker.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnDarker", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Darker", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn



















IDRegistry.genItemID("SpawnNightQween");
Item.createItem("SpawnNightQween", "Призвать существо - Королева Ночи", {name: "SpawnNightQween", data: 0});


var NightQween = MobRegistry.registerEntity("NightQween");
NightQween.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/NightQween.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Королева Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
 var coords = Entity.getPosition(this.entity);
 
 if (Math.random > 0.4){
 Entity.spawnCustom("NightKnight", coords.x + .5, coords.y + 1, coords.z + .5);
 }
 if (Math.random > 0.4){
 Entity.spawnCustom("NightMage", coords.x + .5, coords.y + 1, coords.z + .5);
 }

 
}
});

NightQween.customizeDescription({
	getHealth: function(){
  return 500;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightmare, count: {min: 10, max: 23}, data: 0, separate: true, chance: 0.5});

drop.push({id: ItemID.SpawnNightQween, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.4});


drop.push({id: ItemID.silvermoney, count: {min: 3, max: 4}, data: 0, separate: true, chance: 0.4});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

  var coords = Entity.getPosition(this.entity);
 World.setBlock(coords.x,coords.y,  coords.z, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x+1, coords.y,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1, coords.y,  coords.z+1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.redbricks, 0);
 
 
 
 World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y+3,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x+1, coords.y+3,  coords.z, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.blackbricks, 0);
 World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.blackbricks, 0);
 
 World.setBlock(coords.x-1, coords.y+3,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1, coords.y+3,  coords.z+1, BlockID.redbricks, 0);
 World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.redbricks, 0);
 World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.redbricks, 0);
 
 World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.purgatoriumportal, 0);
 World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.purgatoriumportal, 0);
 
 

 return drop;
 
}
});
NightQween.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightQween", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightQween", coords.x + .5, coords.y + 1, coords.z + .5);
 NightQweenTheme.play();
}); //spawn








IDRegistry.genItemID("SpawnNightMage");
Item.createItem("SpawnNightMage", "Призвать существо - Маг Ночи", {name: "SpawnNightMage", data: 0});


var NightMage = MobRegistry.registerEntity("NightMage");
NightMage.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 14);//render
 Entity.setSkin(this.entity, "mobs/NightMage.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Маг Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //soun
 
}
});

NightMage.customizeDescription({
	getHealth: function(){
  return 15;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightmare, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.3});


 drop.push({id: ItemID.silvermoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});
 
 

 return drop;
 
}
});
NightMage.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightMage", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightMage", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnNightKnight");
Item.createItem("SpawnNightKnight", "Призвать существо - Рыцарь Ночи", {name: "SpawnNightKnight", data: 0});


var NightKnight = MobRegistry.registerEntity("NightKnight");
NightKnight.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/NightKnight.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Рыцарь Ночи " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 
 
 

 
}
});

NightKnight.customizeDescription({
	getHealth: function(){
  return 30;},
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
drop.push({id: ItemID.nightsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});


drop.push({id: ItemID.silvermoney, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.2});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 2, max: 3}, data: 0, separate: true, chance: 0.4});


 

 return drop;
 
}
});
NightKnight.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.1,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 5,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnNightKnight", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("NightKnight", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn















IDRegistry.genItemID("SpawnCometUnicorn");
Item.createItem("SpawnCometUnicorn", "Призвать существо - Единорог Комет", {name: "SpawnComet", data: 0});


var CometUnicorn = MobRegistry.registerEntity("CometUnicorn");
CometUnicorn.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);//render
 Entity.setSkin(this.entity, "mobs/CometUnicorn.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Единорог Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometUnicorn.customizeDescription({
	getHealth: function(){
  return 100;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.dudlik, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.4});
 drop.push({id: ItemID.rainbowgun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.3});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 
 return drop;
 
}
});
CometUnicorn.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometUnicorn", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometUnicorn", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn


IDRegistry.genItemID("SpawnCometSlime");
Item.createItem("SpawnCometSlime", "Призвать существо - Небесный Слизень", {name: "SpawnComet", data: 0});


var CometSlime = MobRegistry.registerEntity("CometSlime");
CometSlime.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/CometSlime.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Небесный Слизень " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometSlime.customizeDescription({
	getHealth: function(){
  return 140;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.minigun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.3});
 drop.push({id: ItemID.aeroliteingot, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

 return drop;
 
}
});
CometSlime.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 10,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometSlime", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometSlime", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn




IDRegistry.genItemID("SpawnCometBeetle");
Item.createItem("SpawnCometBeetle", "Призвать существо - Жук Комет", {name: "SpawnComet", data: 0});


var CometBeetle = MobRegistry.registerEntity("CometBeetle");
CometBeetle.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 10);//render
 Entity.setSkin(this.entity, "mobs/CometBeetle.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Жук Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

CometBeetle.customizeDescription({
	getHealth: function(){
  return 170;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.rocketlauncher, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.25});
 
 drop.push({id: ItemID.silvermoney, count: {min: 2, max: 5}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 4, max: 7}, data: 0, separate: true, chance: 0.6});
 
 drop.push({id: ItemID.evildust, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.6});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

 return drop;
 
}
});
CometBeetle.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometBeetle", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometBeetle", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn







IDRegistry.genItemID("SpawnCometEnt");
Item.createItem("SpawnCometEnt", "Призвать существо - Энт Комет", {name: "SpawnCometEnt", data: 0});


var CometEnt = MobRegistry.registerEntity("CometEnt");
CometEnt.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/CometEnt.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Энт Комет " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("CometBeetle", pos.x, pos.y, pos.z);
 }
 
 

 
}
});

CometEnt.customizeDescription({
	getHealth: function(){
  return 1616;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.silvermoney, count: {min: 4, max: 8}, data: 0, separate: true, chance: 0.3});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 6, max: 12}, data: 0, separate: true, chance: 0.6});
 
 drop.push({id: ItemID.evildust, count: {min: 5, max: 9}, data: 0, separate: true, chance: 1});
 
 drop.push({id: ItemID.gigathor, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
 
 drop.push({id: ItemID.guardiansword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.firegun, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.RedDrobovik, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.43});
 
 drop.push({id: ItemID.luxtarrbullet, count: {min: 32, max: 64}, data: 0, separate: true, chance: 0.9});
 
 drop.push({id: ItemID.energybullet, count: {min: 4, max: 32}, data: 0, separate: true, chance: 0.8});

drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});

 return drop;
 
}
});
CometEnt.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 15,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnCometEnt", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("CometEnt", coords.x + .5, coords.y + 1, coords.z + .5);
 CometEntTheme.play();
}); //spawn



Callback.addCallback("DestroyBlock", function (coords, block, player) {
var pos = Player.getPosition();
var item = Player.getCarriedItem();
if (block.id == BlockID.cometwood /*&& Math.random() == 0.5*/&& item.id == ItemID.evilaxe){
	Entity.spawnCustom("CometEnt", pos.x, pos.y, pos.z);
	CometEntTheme.play();
	}
});

















IDRegistry.genItemID("SpawnFat");
Item.createItem("SpawnFat", "Призвать существо - Толстый", {name: "SpawnPurgatory", data: 0});


var Fat = MobRegistry.registerEntity("Fat");
Fat.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/Fat.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Толстый " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

Fat.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.glitchspear, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 drop.push({id: ItemID.thornhelmet, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornchestplate, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornleggings, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 drop.push({id: ItemID.thornboots, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.124});
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
Fat.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFat", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Fat", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn





IDRegistry.genItemID("SpawnTwoFaces");
Item.createItem("SpawnTwoFaces", "Призвать существо - Двуликий", {name: "SpawnPurgatory", data: 0});


var TwoFaces = MobRegistry.registerEntity("TwoFaces");
TwoFaces.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/TwoFaces.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Двуликий " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

TwoFaces.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.skullcrossbow, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
TwoFaces.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 6,
attack_range: 0.5,
attack_rate: 0.5
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnTwoFaces", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("TwoFaces", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnThin");
Item.createItem("SpawnThin", "Призвать существо - Худой", {name: "SpawnPurgatory", data: 0});


var Thin = MobRegistry.registerEntity("Thin");
Thin.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 21);//render
 Entity.setSkin(this.entity, "mobs/Thin.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Худой " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

Thin.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.beastupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
Thin.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnThin", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Thin", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryBeast");
Item.createItem("SpawnPurgatoryBeast", "Призвать существо - Зверь Чистилища", {name: "SpawnPurgatory", data: 0});


var PurgatoryBeast = MobRegistry.registerEntity("PurgatoryBeast");
PurgatoryBeast.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 6);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryBeast.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Зверь Чистилища " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryBeast.customizeDescription({
	getHealth: function(){
  return 130;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.beastupgradekit, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryBeast.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryBeast", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryBeast", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryWatcher");
Item.createItem("SpawnPurgatoryWatcher", "Призвать существо - Надзиратель", {name: "SpawnPurgatory", data: 0});


var PurgatoryWatcher = MobRegistry.registerEntity("PurgatoryWatcher");
PurgatoryWatcher.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 2);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryWatcher.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Надзиратель " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryWatcher.customizeDescription({
	getHealth: function(){
  return 100;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.bloodstone, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.9});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryWatcher.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryWatcher", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryWatcher", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryPhantom");
Item.createItem("SpawnPurgatoryPhantom", "Призвать существо - Измученный Фантом", {name: "SpawnPurgatory", data: 0});


var PurgatoryPhantom = MobRegistry.registerEntity("PurgatoryPhantom");
PurgatoryPhantom.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 20);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryPhantom.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Измученный Фантом " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryWatcher.customizeDescription({
	getHealth: function(){
  return 120;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.phantomsoul, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryPhantom.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryPhantom", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryPhantom", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn








IDRegistry.genItemID("SpawnPurgatoryBeetle");
Item.createItem("SpawnPurgatoryBeetle", "Призвать существо - Жужжащее Создание", {name: "SpawnPurgatory", data: 0});


var PurgatoryBeetle = MobRegistry.registerEntity("PurgatoryBeetle");
PurgatoryBeetle.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 10);//render
 Entity.setSkin(this.entity, "mobs/PurgatoryBeetle.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Жужжащее Создание " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 
 
 

 
}
});

PurgatoryBeetle.customizeDescription({
	getHealth: function(){
  return 112;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.agat, count: {min: 2, max: 4}, data: 0, separate: true, chance: 1});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.2});
 

drop.push({id: ItemID.silvermoney, count: {min: 3, max: 6}, data: 0, separate: true, chance: 0.35});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 5, max: 8}, data: 0, separate: true, chance: 0.66});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.05});
 
 return drop;
 
}
});
PurgatoryBeetle.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnPurgatoryBeetle", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("PurgatoryBeetle", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn









IDRegistry.genItemID("SpawnFallenTitan");
Item.createItem("SpawnFallenTitan", "Призвать существо - Падший Титан", {name: "SpawnFallenTitan", data: 0});


var FallenTitan = MobRegistry.registerEntity("FallenTitan");
FallenTitan.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 47);//render
 Entity.setSkin(this.entity, "mobs/FallenTitan.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Падший Титан " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryWatcher", pos.x, pos.y, pos.z);
 }
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryPhantom", pos.x, pos.y, pos.z);
 }
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryBeetle", pos.x, pos.y, pos.z);
 }
 
 
 

 
}
});

FallenTitan.customizeDescription({
	getHealth: function(){
  return 1666;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.undergroundsword, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.7});
 
 drop.push({id: ItemID.stonerifle, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.7});
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 

drop.push({id: ItemID.silvermoney, count: {min: 5, max: 10}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 10, max: 15}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 return drop;
 
}
});
FallenTitan.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.3,
angular_speed: 0.3,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.3,
rotateHead: true
},

attack: {
type: EntityAI.Attack,

priority: 0,
attack_damage: 12,
attack_range: 1,
attack_rate: 1
},

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "attack",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnFallenTitan", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FallenTitan", coords.x + .5, coords.y + 1, coords.z + .5);
}); //spawn

Item.registerUseFunction("ancientartephact", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("FallenTitan", coords.x + .5, coords.y + 1, coords.z + .5);
 PurgatoryTheme.play();
}); //spawn







IDRegistry.genItemID("SpawnSmooce");
Item.createItem("SpawnSmooce", "Призвать существо - Смуц", {name: "SpawnSmooce", data: 0});


var Smooce = MobRegistry.registerEntity("Smooce");
Smooce.customizeEvents({
 tick: function(){
 Entity.setRender(this.entity, 3);//render
 Entity.setSkin(this.entity, "mobs/Smooce.png");//skin
 //Entity.setMaxHealth(Hollybot, 100);
Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth();
Entity.setNameTag(this.entity, "Смуц " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());


//Entity.setArmorSlot(this.entity, 2, ItemID.onehundred, 1, 0);
},
attackedBy: function(attacker, amount){
 //sound
 var pos = Entity.getPosition(this.entity);
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryPhantom", pos.x, pos.y, pos.z);
 }
 
 if(Math.random=0.4){
 	Entity.spawnCustom("PurgatoryBeetle", pos.x, pos.y, pos.z);
 }
 
 
 

 
}
});

Smooce.customizeDescription({
	getHealth: function(){
  return 850;}, 
	
 getHitbox: function(){
 return {w: 2, h: 3}
},
getDrop: function(){
 var drop = [];
 
 drop.push({id: ItemID.arkenslansuroken, count: {min: 50, max: 64}, data: 0, separate: true, chance: 0.7});
 
 
 
 drop.push({id: ItemID.returnticket, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 

drop.push({id: ItemID.silvermoney, count: {min: 5, max: 10}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.bronzemoney, count: {min: 10, max: 15}, data: 0, separate: true, chance: 0.8});
 
 drop.push({id: ItemID.goldmoney, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1});
 
 return drop;
 
}
});
Smooce.customizeAI({
getAITypes: function(){
return {
wander: {
type: EntityAI.Wander,

priority: 4,
speed: 0.5,
angular_speed: 0.5,
delay_weigth: 0.2
},

follow: {
type: EntityAI.Follow,
priority: 0,
speed: 0.5,
rotateHead: true
},

shoot: {
     type: AdvancedAI.Shooting,//стрельба
   ammo_type: Native.EntityType.FIREBALL,//ентити которым стрелять
   shoot_speed: 35,//время в тиках через которое стрелять
   projectile_speed: 20,//скорость снаряда
   priority: 0//приоритет (??‽)
    },

enemy_watcher: {
type: AdvancedAI.EnemyWatcher,

attackAI: "shoot",
followAI: "follow",
find_delay: 10,
priority_on_attack: 5,
priority_on_idle: 0,
feelingModifier: 16
}
};
}
});//AI

//spawn from egg


Item.registerUseFunction("SpawnSmooce", function(coords, item, block){
 var coords = coords.relative;
 Entity.spawnCustom("Smooce", coords.x + .5, coords.y + 1, coords.z + .5);
 PurgatoryTheme.play();
}); //spawn












































// file: spawners.js

/*TileEntity.registerPrototype(BlockID.cometspawner1, {
 
 tick: function(){
 	if(rand = 0.0005){
 	Entity.spawnCustom("CometSlime", this.x, this.y + 1, this.z);
 }
 }
 });
 
 
 TileEntity.registerPrototype(BlockID.cometspawner, {
 
 tick: function(){
 	if(rand = 0.0005){
 	Entity.spawnCustom("CometUnicorn", this.x, this.y + 1, this.z); 
 }
 }
 });
 */
 
 
 
 
 Block.setRandomTickCallback(BlockID.cometspawner, function(x, y, z, id, data) { 
    Entity.spawnCustom("CometSlime", x, y + 1, z); 
    });
    
    Block.setRandomTickCallback(BlockID.cometspawner1, function(x, y, z, id, data) { 
    Entity.spawnCustom("CometUnicorn", x, y + 1, z); 
    });
    
    
    
 
 
 
 
 
 
 
 




// file: items/gunsCraft.js

Callback.addCallback("GunsDefined",function(){
    
Recipes.addShaped({id: ItemID.luxtarrbullet, count: 16, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.luxtaringot, 0]);

Recipes.addShaped({id: ItemID.darkhambullet, count: 16, data: 0}, [ " a ", "aaa", " a "], ['a', ItemID.darkhamingot, 0]);

Recipes.addShaped({id: ItemID.redpowerbullet, count: 16, data: 0}, [ " a ", " b ", " c "], ['a', 331, 0, 'b', 265, 0, 'c', ItemID.flisotuachewn, 0]);


Recipes.addShaped({id: ItemID.darkinathor, count: 16, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.brinathor, 0, 'b', ItemID.darkupgradekit, 0]);

Recipes.addShaped({id: ItemID.aerolitebullet, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.aeroliteingot, 0]);

Recipes.addShaped({id: ItemID.rocket, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.darkhamingot, 0, 'b', 46, 0]);

Recipes.addShaped({id: ItemID.skylitearrow, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', ItemID.skyliteingot, 0, 'b', ItemID.cometstick, 0, 'c', ItemID.fireleavpetal, 0]);

Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 0, 'b', 4, 0]);

Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 1, 'b', 4, 0]);

Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 2, 'b', 4, 0]);
Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 3, 'b', 4, 0]);
Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 4, 'b', 4, 0]);
Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', 5, 5, 'b', 4, 0]);
Recipes.addShaped({id: ItemID.bolt, count: 10, data: 0}, [ "   ", " a ", " b "], ['a', BlockID.cometplanks, 0, 'b', 4, 0]);


Recipes.addShaped({id: ItemID.wildminigun, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.beastupgradekit, 0, 'b', ItemID.minigun, 0]);

Recipes.addShaped({id: ItemID.bloodarrow, count: 25, data: 0}, [ " a ", " b ", " c "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0, 'c', ItemID.fireleavpetal, 0]);

Recipes.addShaped({id: ItemID.bloodbow, count: 1, data: 0}, [ " aa", "a b", " aa"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);


Recipes.addShaped({id: ItemID.bloodgun, count: 1, data: 0}, [ "aab", " aa", "   "], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);

Recipes.addShaped({id: ItemID.shadowbow, count: 1, data: 0}, [ " ba", "b a", " ba"], ['a', ItemID.bloodstone, 0, 'b', ItemID.phantomsoul, 0]);

Recipes.addShaped({id: ItemID.bloodbow, count: 1, data: 0}, [ " a ", "a b", " a "], ['a', ItemID.bloodstone, 0, 'b', ItemID.shadowbow, 0]);






















});




// file: ticks.js



Callback.addCallback("tick", function (){
//force.show();
ScalesRPG.showAll();


var val = Force.getValue();
var hp = Entity.getHealth(Player.get());
var spd = Speed.getValue();











if(rand <= 0.00006 && val < 20){
Force.increase();
}

if(val > 6){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 100, false, false)
	}
	
	
	if(val > 9){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100, false, false)
	}
	
	if(val > 12){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100, false, false)
	}
	
	if(val > 15){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100, false, false)
	}
	
	
	if(val > 18){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100, false, false)
	}
	
	if(hp < 3){
	Force.setValue(0);
	}
	
	if(hp < 5){
	Force.setValue(1);
	}
	
	
	var hg = Player.getHunger () 
	var val = Force.getValue()
	if(hg < 5 && val > 10){
	Force.decrease();
	}
	
	
	
	
	
if(rand <= 0.006 && spd < 20){
Speed.increase();
}
	
	
	if(spd >= 0){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 0, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 0, 100, false, false)
	}
	
	
if(spd >= 2){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 0, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100, false, false)
	}
	
	if(spd >= 4){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100, false, false)
	}
	
	
	if(spd >= 6){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 100, false, false)
	}
	
	if(spd >= 8){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100, false, false)
	}
	
	if(spd >= 10){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100, false, false)
	}
	
	if(spd >= 12){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100, false, false)
	}
	
	if(spd >= 14){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 7, 100, false, false)
	}
	
	if(spd >= 16){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 8, 100, false, false)
	}
	
	if(spd >= 18){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100, false, false)
	}
	
	if(spd >= 20){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 5, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 100, false, false)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


});




















Callback.addCallback("tick", function(){
    var pos = Player.getPosition()
    var vr = parseInt(rand * 61);
    var v = parseInt(rand * 61);
    
    
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
		
		
		
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .00006){
Entity.spawnCustom("SuperGuy", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 2 &&  rand < .00003){
Entity.spawnCustom("Arkenian", pos.x+10, pos.y + 1, pos.z);
}

if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .00003){
Entity.spawnCustom("Arkenian2", pos.x+10, pos.y + 1, pos.z);
}















if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .00006){
Entity.spawnCustom("HalfWorlder", pos.x+10, pos.y + 1, pos.z);
}








if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .00003){
Entity.spawnCustom("RustyGolem", pos.x+10, pos.y + 1, pos.z);
}















if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .0006){
Entity.spawnCustom("FakeChicken", pos.x, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass && rand < .0006){
Entity.spawnCustom("GoldenGolem", pos.x+5, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .0006){
Entity.spawnCustom("Fox", pos.x+10, pos.y + 1, pos.z);

}



if(World.getBlockID(pos.x, pos.y, pos.z) == 1 && rand < .0006){
Entity.spawnCustom("ForceZombie", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 3 && rand < .00006){
Entity.spawnCustom("WildCreeper", pos.x+10, pos.y + 1, pos.z);
}






if(World.getBlockID(pos.x, pos.y, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}





if(World.getBlockID(pos.x, pos.y, pos.z) == 79 && rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}





if(World.getBlockID(pos.x, pos.y, pos.z) == 80 && rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y+1, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}



if(World.getBlockID(pos.x, pos.y-1, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 79 && rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 80 && rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}





if(World.getBlockID(pos.x, pos.y+1, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}




if(World.getBlockID(pos.x, pos.y-1, pos.z) == 78 && rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .0000006){
Entity.spawnCustom("MonsterWithWhiteEyes", pos.x+10, pos.y + 1, pos.z);
}






if(World.getBlockID(pos.x, pos.y, pos.z) == 2 && rand < .00000006){
Entity.spawnCustom("Darker", pos.x+10, pos.y + 1, pos.z);
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 87 && rand < .000006){
Entity.spawnCustom("NightQween", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == 87 && rand < .0006){
Entity.spawnCustom("FakeChicken2", pos.x+5, pos.y + 1, pos.z);
}



if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass && rand < .0006){
Entity.spawnCustom("CometUnicorn", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass && rand < .00002){
Entity.spawnCustom("CometBeetle", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass && rand < .0006){
Entity.spawnCustom("CometSlime", pos.x+5, pos.y + 1, pos.z);
}













if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0009){
Entity.spawnCustom("Fat", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0009){
Entity.spawnCustom("Thin", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0009){
Entity.spawnCustom("TwoFaces", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0007){
Entity.spawnCustom("PurgatoryBeast", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .00006){
Entity.spawnCustom("PurgatoryWatcher", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0009){
Entity.spawnCustom("PurgatoryPhantom", pos.x+5, pos.y + 1, pos.z);
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass && rand < .0009){
Entity.spawnCustom("PurgatoryBeetle", pos.x+5, pos.y + 1, pos.z);
}















});




















