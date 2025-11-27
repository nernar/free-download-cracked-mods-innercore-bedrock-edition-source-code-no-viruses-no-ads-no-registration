Translation.addTranslation("Cookie Grass", {ru: "Печенюшная трава"});
IDRegistry.genItemID("cookie_tallGrass");
Item.createItem("cookie_tallGrass", "Cookie Grass", {name: "cookie_tallGrass", data: 0});

IDRegistry.genBlockID("cookie_tallGrass_b");
	Block.createBlock("cookie_tallGrass_b", [{
		name: "Cookie Grass",
		texture: [
			["cookie_tallGrass",0]
		], 
		inCreative: false
		}]);
Block.registerDropFunction("cookie_tallGrass_b", function(){
	if(Math.random()<0.2)return [[ItemID.cookie_rye_seeds, 1, 0]]
	return []
});
ToolAPI.registerBlockMaterial(BlockID.cookie_tallGrass_b, "plant");
Renderer.setSaplingRender(BlockID.cookie_tallGrass_b,0);

Callback.addCallback("ItemUse",function(crd,item){
	hk=crd.relative;
	if(item.id==ItemID.cookie_tallGrass&&World.getBlockID(hk.x,hk.y-1,hk.z)==BlockID.cookie_grass){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.cookie_tallGrass_b,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,100);
		for(var k=60;k<256;k++){
			if(World.getBlockID(d.x,k,d.z)==BlockID.cookie_grass){
				if(World.getBlockID(d.x,k+1,d.z)!=0)return
				World.setBlock(d.x,k+1,d.z,BlockID.cookie_tallGrass_b,0);
			}
		}
	}
});


Translation.addTranslation("Cookie Flower", {ru: "Печенюшный цветок"});
IDRegistry.genItemID("cookie_flower");
Item.createItem("cookie_flower", "Cookie Flower", {name: "cookie_flower", data: 0});

IDRegistry.genBlockID("cookie_flower_b");
	Block.createBlock("cookie_flower_b", [{
		name: "Cookie Flower",
		texture: [
			["cookie_flower",0]
		], 
		inCreative: false
		}]);
Block.registerDropFunction("cookie_flower_b", function(){
	return [[ItemID.cookie_flower, 1, 0]]
});
ToolAPI.registerBlockMaterial(BlockID.cookie_flower_b, "plant");
Renderer.setSaplingRender(BlockID.cookie_flower_b,0);

Callback.addCallback("ItemUse",function(crd,item){
	pl=crd.relative;
	if(item.id==ItemID.cookie_flower&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.cookie_grass){
		World.setBlock(pl.x,pl.y,pl.z,BlockID.cookie_flower_b,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,100);
		for(var k=60;k<256;k++){
			if(World.getBlockID(d.x,k,d.z)==BlockID.cookie_grass){
				if(World.getBlockID(d.x,k+1,d.z)!=0)return
				World.setBlock(d.x,k+1,d.z,BlockID.cookie_flower_b,0);
			}
		}
	}
});