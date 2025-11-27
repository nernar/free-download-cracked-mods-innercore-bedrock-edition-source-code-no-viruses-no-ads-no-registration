Translation.addTranslation("Cookie Dirt Grass", {ru: "Печенюшная земля с травой"});
	IDRegistry.genBlockID("cookie_grass");
	Block.createBlock("cookie_grass", [{
		name: "Cookie Dirt Grass",
		texture: [
			["dirt_cookie",0],["grass_cookie",0],
			["grass_cookie",1],["grass_cookie",1],
			["grass_cookie",1],["grass_cookie",1]
		], 
		inCreative: true
		}],"opaque");
	ToolAPI.registerBlockMaterial(BlockID.cookie_grass,"dirt");
		Block.registerDropFunction("cookie_grass", function(coords, blockID, blockData, level){
			return [[BlockID.cookie_dirt,1,0]]
		}, 2);

Translation.addTranslation("Cookie Dirt", {ru: "Печенюшная земля"});
	IDRegistry.genBlockID("cookie_dirt");
	Block.createBlock("cookie_dirt", [{
		name: "Cookie Dirt",
		texture: [
			["dirt_cookie",0]
		], 
		inCreative: true
		}],"opaque");
	ToolAPI.registerBlockMaterial(BlockID.cookie_dirt,"dirt");

IDRegistry.genBlockID("cookie_farmland");
	Block.createBlock("cookie_farmland", [
		{
		name: "Cookie Dirt",
		texture: [
			["dirt_cookie",0],["cookie_farmland",1],
			["dirt_cookie",0],["dirt_cookie",0],
			["dirt_cookie",0],["dirt_cookie",0],
		], 
		inCreative: false
		}
		]);
	ToolAPI.registerBlockMaterial(BlockID.cookie_farmland,"dirt");
		Block.registerDropFunction("cookie_farmland", function(coords, blockID, blockData, level){
			return [[BlockID.cookie_dirt,1,0]]
		}, 2);
	ToolAPI.registerHoeBlock(BlockID.cookie_grass,function(){
		return BlockID.cookie_farmland
	});
	Block.setBlockShape(BlockID.cookie_farmland, {x: 0, y: 0, z: 0}, {x: 1, y: 15/16, z: 1});
	
	Block.setRandomTickCallback(BlockID.cookie_farmland,function(x,y,z,id,data){
		value=false;
		for(var xx=-4;xx<9;xx++){
			for(var zz=-4;zz<9;zz++){
				id=World.getBlockID(x+xx,y,z+zz);
				if(id==8||id==9)value=true;
			}
		}
		if(!value)World.setBlock(x,y,z,BlockID.cookie_grass,0);
	});