
IDRegistry.genBlockID("twBlockPortal")
Block.createBlock("twBlockPortal", [
    {name: "twilight forest block portal", texture: [["dirt_day", 1], ["tw_top", 1], ["tw", 0], ["tw", 0], ["tw", 0], ["tw", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.twBlockPortal, count: 1, data: 0}, [
		"ooo",
		"oxo",
		"ooo"
	], ['o', 3, 0, 'h', 326, 0]);
	
	
	/*
	var hydra = new RenderMesh();
hydra.setBlockTexture("hydra4",0);
hydra.importFromFile(__dir__+"/models/hydra.obj","obj",null);
IDRegistry.genBlockID("hydra_boss_statue");
Block.createBlock("hydra_boss_statue", [
    {name: "Hydra Statue", texture: [["hydra_boss_statue", 0],["hydra_boss_statue", 1],["hydra_boss_statue", 2],["hydra_boss_statue", 3],["hydra_boss_statue", 4],["hydra_boss_statue", 5]], inCreative: false}
]);
var hydra_model = new ICRender.Model();
hydra_model.addEntry(new BlockRenderer.Model(hydra));
BlockRenderer.setStaticICRender(BlockID.hydra_boss_statue,0,hydra_model);
	*/
	







IDRegistry.genBlockID("etched_nagastone_mossy");
Block.createBlock("etched_nagastone_mossy", [{
	name: "Etched Nagastone Mossy",
	texture: [["etched_nagastone_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone_mossy, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone_mossy, "stone", 2, true);



IDRegistry.genBlockID("etched_nagastone_weathered");
Block.createBlock("etched_nagastone_weathered", [{
	name: "Etched Nagastone Weathered",
	texture: [["etched_nagastone_weathered", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone_weathered, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone_weathered, "stone", 2, true);

IDRegistry.genBlockID("etched_nagastone");
Block.createBlock("etched_nagastone", [{
	name: "Etched Nagastone",
	texture: [["etched_nagastone", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.etched_nagastone, 2);
ToolAPI.registerBlockMaterial(BlockID.etched_nagastone, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_mossy");
Block.createBlock("maze_stone_mossy", [{
	name: "Maze Stone Mossy",
	texture: [["maze_stone_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_mossy, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_mossy, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_mosaic");
Block.createBlock("maze_stone_mosaic", [{
	name: "Maze Stone Mosaic",
	texture: [["maze_stone_mosaic", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_mosaic, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_mosaic, "stone", 2, true);

IDRegistry.genBlockID("mazestone_large_brick");
Block.createBlock("mazestone_large_brick", [{
	name: "Mazestone Large Brick",
	texture: [["mazestone_large_brick", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.mazestone_large_brick, 30);
ToolAPI.registerBlockMaterial(BlockID.mazestone_large_brick, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_border");
Block.createBlock("maze_stone_border", [{
	name: "Maze Stone Border",
	texture: [["maze_stone_border", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_border, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_border, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_cracked");
Block.createBlock("maze_stone_cracked", [{
	name: "Maze Stone Cracked",
	texture: [["maze_stone_cracked", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_cracked, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_cracked, "stone", 2, true);

IDRegistry.genBlockID("maze_stone_brick");
Block.createBlock("maze_stone_brick", [{
	name: "Maze Stone Brick",
	texture: [["maze_stone_brick", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_brick, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_brick, "stone", 2, true);





IDRegistry.genBlockID("maze_stone_decorative");
Block.createBlock("maze_stone_decorative", [{
	name: "Maze Stone Decorative",
    texture: [["maze_stone_top", 0],
                  ["maze_stone_top", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0],
                  ["maze_stone_decorative", 0]],
   inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_decorative, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_decorative, "stone", 2, true);


IDRegistry.genBlockID("maze_stone_chiseled");
Block.createBlock("maze_stone_chiseled", [{
	name: "Maze Stone Chiseled",
    texture: [["maze_stone_top", 0],
                  ["maze_stone_top", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0],
                  ["maze_stone_chiseled", 0]],
   inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.maze_stone_chiseled, 30);
ToolAPI.registerBlockMaterial(BlockID.maze_stone_chiseled, "stone", 2, true);


IDRegistry.genBlockID("underbrick_floor");
Block.createBlock("underbrick_floor", [{
	name: "Underbrick Floor",
	texture: [["underbrick_floor", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.underbrick_floor, 2);
ToolAPI.registerBlockMaterial(BlockID.underbrick_floor, "stone", 2, true);

	IDRegistry.genBlockID("underbrick_mossy");
Block.createBlock("underbrick_mossy", [{
	name: "Underbrick Mossy",
	texture: [["underbrick_mossy", 0]],
	inCreative: true
}], "opaque");
Block.setDestroyTime(BlockID.underbrick_mossy, 2);
ToolAPI.registerBlockMaterial(BlockID.underbrick_mossy, "stone", 2, true);

	//huge_lilypad//
	
	
IDRegistry.genItemID("huge_lilypad");
Item.createItem("huge_lilypad", "Huge Lilypad", {name: "huge_lilypad", meta: 0}, {stack: 64});
IDRegistry.genBlockID("huge_lilypad"); 
 Block.createBlock("huge_lilypad", [{name: "huge_lilypad", texture: [["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0], ["huge_lilypad", 0]], inCreative: true}], BLOCK_TYPE_LEAVES);
const huge_lilypad = new ICRender.CollisionShape();
huge_lilypad.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.huge_lilypad, 0, huge_lilypad);
Block.setShape(BlockID.huge_lilypad, 0, 0, 0, 1, 1/16, 1, 0);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.huge_lilypad){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.huge_lilypad, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
Block.registerDropFunction(BlockID.huge_lilypad, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.huge_lilypad, 1, 0]);
	return drop;
});
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if(dimensionId== TwilightForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
if(Math.random() < 0.3){
coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==2){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.huge_lilypad, 0);
} 
} 
}
});
	
	
	
	
	
	
	