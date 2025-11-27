IDRegistry.genItemID("eyes_apple");
Item.createItem("eyes_apple","Глазное яблоко", {name:"eyes_apple"},{stack:64});


IDRegistry.genBlockID("eyes_crop"); 
Block.createBlock("eyes_crop", [{name: "Цветок глазное яблоко", texture: [["stone", 0]], inCreative: true}]);

var renderEyes_crop = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.eyes_crop, 0, renderEyes_crop); 

var modelEyes_crop = BlockRenderer.createModel();



modelEyes_crop.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "eyas", 0);//полено1

modelEyes_crop.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "eyas", 0);//полено2

renderEyes_crop.addEntry(modelEyes_crop);

Block.setBlockShape(BlockID.eyes_crop, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});






IDRegistry.genBlockID("eyes_crop_input"); 
Block.createBlock("eyes_crop_input", [{name: "Цветок глазное яблоко", texture: [["stone", 0]], inCreative: false}]);

var renderEyes_crop_input = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.eyes_crop_input, 0, renderEyes_crop_input); 

var modelEyes_crop_input = BlockRenderer.createModel();



modelEyes_crop_input.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "esi", 0);//полено1

modelEyes_crop_input.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "esi", 0);//полено2

renderEyes_crop_input.addEntry(modelEyes_crop_input);

Block.setBlockShape(BlockID.eyes_crop_input, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});




Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id==BlockID.eyes_crop){
   World.drop(coords.x,coords.y+1, coords.z, ItemID.eyes_apple, 1)

World.setBlock(coords.x,coords.y, coords.z, BlockID.eyes_crop_input, 0)
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}
});


Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id==BlockID.eyes_crop_input){
   World.drop(coords.x,coords.y+1, coords.z, 295, 1)

World.setBlock(coords.x,coords.y, coords.z, 0, 0)
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}
});





Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
     if(Math.random() <0.1){
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 70, 80);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.eyes_crop, 7, 6);
    }
}
}
)