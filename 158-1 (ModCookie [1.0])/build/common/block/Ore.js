Translation.addTranslation("Cookie Ore", {ru: "Печенюшная руда"});
	IDRegistry.genBlockID("cookie_ore");
	Block.createBlock("cookie_ore", [{
		name:"Cookie Ore",
		texture: [["cookie_ore",0]], 
		inCreative: true
		}],"opaque");
	Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 8; i++){
		d=GenerationUtils.randomCoords(a,b,1,100);
		GenerationUtils.generateOre(d.x, d.y, d.z, BlockID.cookie_ore, 0, 13);
	}
	});
	ToolAPI.registerBlockMaterial(BlockID.cookie_ore,"stone");
		Block.registerDropFunction("cookie_ore", function(coords, blockID, blockData, level){
		if (level > 1){
			return [[BlockID.cookie_ore,1,0]]
		}
		return [];
	}, 2);
	
Translation.addTranslation("Cookie Block", {ru: "Печенюшный блок"});
	IDRegistry.genBlockID("cookie_block");
	Block.createBlock("cookie_block", [{
		name:"Cookie Block",
		texture: [["cookie_block",0]], 
		inCreative: true
		}],"opaque");