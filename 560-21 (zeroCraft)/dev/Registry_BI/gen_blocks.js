IDRegistry.genBlockID("Scapoliteore"); Block.createBlock("Scapoliteore", [
   	{name: "Scapolite Ore", texture: [["ore0", 0]], inCreative: true} 
], ScapoliteOreBlock); ToolAPI.registerBlockMaterial(BlockID.Scapoliteore, "stone", 3, true);

IDRegistry.genBlockID("Latuneore"); Block.createBlock("Latuneore", [
   	{name: "Latune Ore", texture: [["ore1", 0]], inCreative: true} 
], LatuneOreBlock); ToolAPI.registerBlockMaterial(BlockID.Latuneore, "stone", 2, true);

IDRegistry.genBlockID("latuneFurnace");
Block.createBlockWithRotation("latuneFurnace", [
	{name: "Latune Furnace", texture: [["latune_fur_bottom", 0], 
["latune_fur_top", 0], 
["latune_fur_side", 0], 
["latune_fur_front", 0], 
["latune_fur_side", 0], [
"latune_fur_side", 0]], 
inCreative: true}
], 
"stone");

Block.registerDropFunction("latuneFurnace", function(coords, blockID, blockData){
return [[BlockID.latuneFurnace, 1, 0]]
});

Block.registerDropFunction("Latuneore", function(coords, blockID, blockData){
return [[BlockID.Latuneore, 1, 0]]
});
