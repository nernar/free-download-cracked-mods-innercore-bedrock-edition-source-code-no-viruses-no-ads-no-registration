//Руды Кусочками
IDRegistry.genItemID("mental_ore_piece");
Item.createItem("mental_ore_piece", "Образец ментальной руды", {name: "mental_ore_piece", meta: 0}, {stack: 64});

//Слитки
IDRegistry.genItemID("mental_ingot");
Item.createItem("mental_ingot", "Слиток ментальной руды", {name: "mental_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Crystas_ingot");
Item.createItem("Crystas_ingot", "Слиток Кристас", {name: "Crystas_ingot", meta: 0}, {stack: 64});


//Руды
IDRegistry.genBlockID("mental_ore"); 
Block.createBlock("mental_ore", [
    {name: "Ментальная руда", texture: 
    [["mental_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mental_ore, "stone", 3, true);
Block.setDestroyTime(BlockID.mental_ore, 3.8);
Block.setDestroyLevel("mental_ore", 3);
Block.registerDropFunction("mental_ore", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.mental_ore, 1, 0]];
        }
        var drop = [[ItemID.mental_ore_piece, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("Crystas_ore"); 
Block.createBlock("Crystas_ore", [
    {name: "Руда кристаса", texture: 
    [["Crystas_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.Crystas_ore, "stone", 5, true);
Block.setDestroyTime(BlockID.Crystas_ore, 4.2);
Block.setDestroyLevel("Crystas_ore", 3);
Block.registerDropFunction("Crystas_ore", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.Crystas_ore, 1, 0]];
        }
        var drop = [[BlockID.Crystas_ore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("PostLoaded", function(){
	if(config.spawn_ores){
		Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 55);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mental_ore, 0, 6);
    }
}
)
Callback.addCallback("JungleChunk", function(chunkX, chunkZ){
for(var i = 0; i < 168; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 256);
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.Djcobblestone, 0, 7);
  
          } 
});
Callback.addCallback("JungleChunk", function(chunkX, chunkZ){
for(var i = 0; i < 56; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 256);
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.Crystas_ore, 0, 5);
   
          } 
});
	}
});