IDRegistry.genBlockID("burnblock");
IDRegistry.genBlockID("blooddirtt");
IDRegistry.genBlockID("pixi_brick");
IDRegistry.genBlockID("skyfence");
IDRegistry.genBlockID("diamondfence");
IDRegistry.genBlockID("goldfence");
IDRegistry.genBlockID("ironfence");
IDRegistry.genBlockID("bloodbrick");
IDRegistry.genBlockID("blooddirt");
IDRegistry.genBlockID("gravestone");

Block.createBlock("blooddirt", [{name: "Blood grass", texture: [["blooddirt", 0], ["bloodgrass_top", 0], ["bloodgrass", 0], ["bloodgrass", 0], ["bloodgrass", 0], ["bloodgrass", 0]], inCreative: true}]);
IDRegistry.genBlockID("bloodstone");
Block.createBlock("bloodstone", [{name: "Blood stone", texture: [["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0], ["bloodstone", 0]], inCreative: true}]);
IDRegistry.genBlockID("portalblock");
Block.createBlock("portalblock", [{name: "Terrible block", texture: [["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0], ["portalblock", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.sky_brick, "stone", 2);
Block.registerDropFunction("sky_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.sky_brick, 1, 0]];
			return [];
	}, 2);
	
ToolAPI.registerBlockMaterial(BlockID.skyfence, "stone", 1);
Block.registerDropFunction("skyfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.skyfence, 1, 0]];
			return [];
	}, 1);
	
ToolAPI.registerBlockMaterial(BlockID.gravestone, "stone", 1);
Block.registerDropFunction("gravestone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[ItemID.graveshard, 1, 0]];
			return [];
	}, 1);
	
ToolAPI.registerBlockMaterial(BlockID.pixi_brick, "stone", 2);
Block.registerDropFunction("pixi_brick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.pixi_brick, 1, 0]];
			return [];
	}, 2);

ToolAPI.registerBlockMaterial(BlockID.bloodstone, "stone", 1);
Block.registerDropFunction("bloodstone", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.bloodstone, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.bloodbrick, "stone", 1);
Block.registerDropFunction("bloodbrick", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[BlockID.bloodbrick, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.burnblock, "stone", 2);
Block.registerDropFunction("burnblock", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[BlockID.burnblock, 1, 0]];
			return [];
	}, 2);

ToolAPI.registerBlockMaterial(BlockID.ironfence, "stone", 1);
Block.registerDropFunction("ironfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[265, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.goldfence, "stone", 1);
Block.registerDropFunction("goldfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 1) return [[266, 1, 0]];
			return [];
	}, 1);

ToolAPI.registerBlockMaterial(BlockID.diamondfence, "stone", 2);
Block.registerDropFunction("diamondfence", function(coords, id, data, diggingLevel, toolLevel){
			if (diggingLevel > 2) return [[264, 1, 0]];
			return [];
	}, 2);
	
Block.createBlock("gravestone", [
{name: "Tombstone", texture: [["gravestone", 0]], inCreative: true}
] );
Block.createBlock("burnblock", [
{name: "Burning block", texture: [["burnblock", 0]], inCreative: true}
] );
Block.createBlock("blooddirtt", [
{name: "Blood dirt", texture: [["blooddirt", 0]], inCreative: true}
] );
Block.createBlock("bloodbrick", [
{name: "Blood brick", texture: [["bloodbrick", 0]], inCreative: true}
] );
Block.createBlock("pixi_brick", [
{name: "Pixie brick", texture: [["pixi_brick", 0]], inCreative: true}
] );
Block.createBlock("skyfence", [
{name: "Sky brick balk", texture: [["sky_brick", 0]], inCreative: true}
] );
Block.createBlock("diamondfence", [
{name: "Diamond balk", texture: [["diamond_bloc", 0]], inCreative: true}
] );
Block.createBlock("goldfence", [
{name: "Gold balk", texture: [["gold_bloc", 0]], inCreative: true}
] );
Block.createBlock("ironfence", [
{name: "Iron balk", texture: [["iron_bloc", 0]], inCreative: true}
] );

Block.setBlockShape(BlockID.gravestone, {x: 1/16, y: 0, z: 1/16}, {x: 15/16, y: 1, z: 8/16})
Block.setBlockShape(BlockID.diamondfence, {x: 6/16, y: 0, z: 6/16}, {x: 10/16, y: 1, z: 10/16})
Block.setBlockShape(BlockID.goldfence, {x: 4/16, y: 0, z: 4/16}, {x: 12/16, y: 1, z: 12/16})
Block.setBlockShape(BlockID.ironfence, {x: 3/16, y: 0, z: 3/16}, {x: 13/16, y: 1, z: 13/16})
Block.setBlockShape(BlockID.skyfence, {x: 4/16, y: 0, z: 4/16}, {x: 12/16, y: 1, z: 12/16})