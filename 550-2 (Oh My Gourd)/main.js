/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: translation.js

Translation.addTranslation("Pumpkin", { ru: "Тыква" });
Translation.addTranslation("Pumpkins", { ru: "Тыквы" });
Translation.addTranslation("Light Pumpkins", { ru: "Светлые Тыквы" });




// file: pumpkins.js

var BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 5,
	opaque: true,
    destroytime: 2,
    lightopacity: 0,
    explosionres: 0.5,
});

var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 15
});

IDRegistry.genBlockID("carved_askabak");
Block.createBlockWithRotation("carved_askabak", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",1],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak2");
Block.createBlockWithRotation("carved_askabak2", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",2],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak2, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak3");
Block.createBlockWithRotation("carved_askabak3", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",3],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak3, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak4");
Block.createBlockWithRotation("carved_askabak4", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",4],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak4, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak5");
Block.createBlockWithRotation("carved_askabak5", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",5],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak5, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak6");
Block.createBlockWithRotation("carved_askabak6", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",6],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak6, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak7");
Block.createBlockWithRotation("carved_askabak7", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",7],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak7, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak8");
Block.createBlockWithRotation("carved_askabak8", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",8],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak8, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak9");
Block.createBlockWithRotation("carved_askabak9", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",9],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak9, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak10");
Block.createBlockWithRotation("carved_askabak10", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",10],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak10, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak11");
Block.createBlockWithRotation("carved_askabak11", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",11],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak11, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak12");
Block.createBlockWithRotation("carved_askabak12", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",12],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak12, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak13");
Block.createBlockWithRotation("carved_askabak13", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",13],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak13, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak14");
Block.createBlockWithRotation("carved_askabak14", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",14],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak14, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak15");
Block.createBlockWithRotation("carved_askabak15", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",15],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak15, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak16");
Block.createBlockWithRotation("carved_askabak16", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",16],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak16, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak17");
Block.createBlockWithRotation("carved_askabak17", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",17],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak17, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak18");
Block.createBlockWithRotation("carved_askabak18", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",18],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak18, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak19");
Block.createBlockWithRotation("carved_askabak19", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",19],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak19, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak20");
Block.createBlockWithRotation("carved_askabak20", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",20],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak20, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak21");
Block.createBlockWithRotation("carved_askabak21", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",21],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak21, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak22");
Block.createBlockWithRotation("carved_askabak22", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",22],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak22, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak23");
Block.createBlockWithRotation("carved_askabak23", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",23],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak23, "wood", 0, true);

IDRegistry.genBlockID("carved_askabak24");
Block.createBlockWithRotation("carved_askabak24", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["carved_pumpkin",24],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.carved_askabak24, "wood", 0, true);




// file: light_pumpkins.js

IDRegistry.genBlockID("jack_o_lantern");
Block.createBlockWithRotation("jack_o_lantern", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",1],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern2");
Block.createBlockWithRotation("jack_o_lantern2", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",2],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern2, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern3");
Block.createBlockWithRotation("jack_o_lantern3", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",3],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern3, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern4");
Block.createBlockWithRotation("jack_o_lantern4", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",4],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern4, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern5");
Block.createBlockWithRotation("jack_o_lantern5", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",5],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern5, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern6");
Block.createBlockWithRotation("jack_o_lantern6", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",6],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern6, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern7");
Block.createBlockWithRotation("jack_o_lantern7", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",7],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern7, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern8");
Block.createBlockWithRotation("jack_o_lantern8", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",8],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern8, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern9");
Block.createBlockWithRotation("jack_o_lantern9", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",9],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern9, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern10");
Block.createBlockWithRotation("jack_o_lantern10", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",10],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern10, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern11");
Block.createBlockWithRotation("jack_o_lantern11", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",11],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern11, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern12");
Block.createBlockWithRotation("jack_o_lantern12", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",12],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern12, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern13");
Block.createBlockWithRotation("jack_o_lantern13", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",13],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern13, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern14");
Block.createBlockWithRotation("jack_o_lantern14", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",14],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern14, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern15");
Block.createBlockWithRotation("jack_o_lantern15", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",15],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern15, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern16");
Block.createBlockWithRotation("jack_o_lantern16", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",16],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern16, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern17");
Block.createBlockWithRotation("jack_o_lantern17", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",17],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern17, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern18");
Block.createBlockWithRotation("jack_o_lantern18", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",18],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern18, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern19");
Block.createBlockWithRotation("jack_o_lantern19", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",19],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern19, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern20");
Block.createBlockWithRotation("jack_o_lantern20", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",20],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern20, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern21");
Block.createBlockWithRotation("jack_o_lantern21", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",21],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern21, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern22");
Block.createBlockWithRotation("jack_o_lantern22", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",22],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern22, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern23");
Block.createBlockWithRotation("jack_o_lantern23", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",23],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern23, "wood", 0, true);

IDRegistry.genBlockID("jack_o_lantern24");
Block.createBlockWithRotation("jack_o_lantern24", [
    {name:"Pumpkin", texture: [
	["pumpkin_top",0],["pumpkin_top", 0],
    ["pumpkin_side",0],["jack_o_lantern",24],
	["pumpkin_side",0],["pumpkin_side",0]
		 ], inCreative: true}
],BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jack_o_lantern24, "wood", 0, true);




// file: crafts.js

Recipes.addShaped({id: BlockID.jack_o_lantern, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak, 0, 'b', 50, 0]);

Recipes.addShaped({id: BlockID.jack_o_lantern2, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak2, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern3, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak3, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern4, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak4, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern5, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak5, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern6, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak6, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern7, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak7, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern8, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak8, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern9, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak9, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern10, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak10, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern11, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak11, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern12, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak12, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern13, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak13, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern14, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak14, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern15, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak15, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern16, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak16, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern17, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak17, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern18, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak18, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern19, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak19, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern20, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak20, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern21, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak21, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern22, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak22, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern23, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak23, 0, 'b', 50, 0]);
    
Recipes.addShaped({id: BlockID.jack_o_lantern24, count: 1, data: 0}, [
    "a  ","b  "], ['a', BlockID.carved_askabak24, 0, 'b', 50, 0]);




// file: group.js

Item.addCreativeGroup("pumpkins", Translation.translate("Pumpkins"), [
 BlockID.carved_askabak,
 BlockID.carved_askabak2,
BlockID.carved_askabak3,
BlockID.carved_askabak4,
BlockID.carved_askabak5,
BlockID.carved_askabak6,
 BlockID.carved_askabak7,
BlockID.carved_askabak8,
BlockID.carved_askabak9,
BlockID.carved_askabak10,
BlockID.carved_askabak11,
 BlockID.carved_askabak12,
BlockID.carved_askabak13,
BlockID.carved_askabak14,
BlockID.carved_askabak15,
BlockID.carved_askabak16,
 BlockID.carved_askabak17,
BlockID.carved_askabak18,
BlockID.carved_askabak19,
BlockID.carved_askabak20,
BlockID.carved_askabak21,
BlockID.carved_askabak22,
BlockID.carved_askabak23,
BlockID.carved_askabak24,
]);

Item.addCreativeGroup("lightpumpkins", Translation.translate("Light Pumpkins"), [
 BlockID.jack_o_lantern,
 BlockID.jack_o_lantern2,
BlockID.jack_o_lantern3,
BlockID.jack_o_lantern4,
BlockID.jack_o_lantern5,
BlockID.jack_o_lantern6,
 BlockID.jack_o_lantern7,
BlockID.jack_o_lantern8,
BlockID.jack_o_lantern9,
BlockID.jack_o_lantern10,
BlockID.jack_o_lantern11,
 BlockID.jack_o_lantern12,
BlockID.jack_o_lantern13,
BlockID.jack_o_lantern14,
BlockID.jack_o_lantern15,
BlockID.jack_o_lantern16,
 BlockID.jack_o_lantern17,
BlockID.jack_o_lantern18,
BlockID.jack_o_lantern19,
BlockID.jack_o_lantern20,
BlockID.jack_o_lantern21,
BlockID.jack_o_lantern22,
BlockID.jack_o_lantern23,
BlockID.jack_o_lantern24,
]);




// file: spawn.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak3, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak4, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak5, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak6, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak7, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak8, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak9, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak10, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak11, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak12, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak13, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak14, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak15, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak16, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak17, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak18, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak19, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak20, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak21, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak22, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak23, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) { 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.carved_askabak24, 0);
}}});




