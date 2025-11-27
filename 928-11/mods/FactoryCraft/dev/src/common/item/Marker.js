Translation.addTranslation("Blue Marker", {
	ru: "Синий маркер"
});
Translation.addTranslation("Green Marker", {
	ru: "Зелёный маркер"
});
Translation.addTranslation("Yellow Marker", {
	ru: "Жёлтый маркер"
});

IDRegistry.genItemID("markerBlue");
IDRegistry.genItemID("markerGreen");
IDRegistry.genItemID("markerYellow");
Item.createItem("markerBlue", "Blue Marker", { name: "blue_marker", meta: 0 });
Item.createItem("markerGreen", "Green Marker", { name: "green_marker", meta: 0 });
Item.createItem("markerYellow", "Yellow Marker", { name: "yellow_marker", meta: 0 });

Recipes.addShaped({ id: ItemID.markerBlue, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 4
]);
Recipes.addShaped({ id: ItemID.markerGreen, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 2
]);
Recipes.addShaped({ id: ItemID.markerYellow, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 76, 0,
	'b', 351, 11
]);

IDRegistry.genBlockID("markerBlueBlock");
IDRegistry.genBlockID("markerGreenBlock");
IDRegistry.genBlockID("markerYellowBlock");

Block.createBlock("markerBlueBlock", [
	{
		name:"Marker",
		texture: [
			["blue_marker",0]
		],
		inCreative: false
	}
]);
Block.createBlock("markerGreenBlock", [
	{
		name:"Marker",
		texture: [
			["green_marker",0]
		],
		inCreative: false
	}
]);
Block.createBlock("markerYellowBlock", [
	{
		name:"Marker",
		texture: [
			["yellow_marker",0]
		],
		inCreative: false
	}
]);

ToolAPI.registerBlockMaterial(BlockID.markerBlueBlock, "plant");
ToolAPI.registerBlockMaterial(BlockID.markerGreenBlock, "plant");
ToolAPI.registerBlockMaterial(BlockID.markerYellowBlock, "plant");

Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerBlue&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerBlueBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerGreen&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerGreenBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("ItemUse",function(crd,item){
	var hk=crd.relative;
	if(item.id==ItemID.markerYellow&&World.getBlockID(hk.x,hk.y-1,hk.z)!=0){
		World.setBlock(hk.x,hk.y,hk.z,BlockID.markerYellowBlock,0);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

Block.registerDropFunction("markerBlueBlock", function(){
	return [[ItemID.markerBlue, 1, 0]]
});
Block.registerDropFunction("markerGreenBlock", function(){
	return [[ItemID.markerGreen, 1, 0]]
});
Block.registerDropFunction("markerYellowBlock", function(){
	return [[ItemID.markerYellow, 1, 0]]
});

Block.setBlockShape(BlockID.markerBlueBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
Block.setBlockShape(BlockID.markerGreenBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
Block.setBlockShape(BlockID.markerYellowBlock, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});

BlockRenderer.addRenderCallback(BlockID.markerBlueBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})
BlockRenderer.addRenderCallback(BlockID.markerGreenBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})
BlockRenderer.addRenderCallback(BlockID.markerYellowBlock, function(api, coords,block) {
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,block.id, block.data);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, block.id, block.data);
})

BlockRenderer.enableCustomRender(BlockID.markerBlueBlock);
BlockRenderer.enableCustomRender(BlockID.markerGreenBlock);
BlockRenderer.enableCustomRender(BlockID.markerYellowBlock);

var Particles = ModAPI.requireGlobal("Particles");

TileEntity.registerPrototype(BlockID.markerBlueBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});
TileEntity.registerPrototype(BlockID.markerGreenBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});
TileEntity.registerPrototype(BlockID.markerYellowBlock,{
	click:function(){
		if(Player.getCarriedItem().id==ItemID.factoryWrench){
			FactAPI.Marker.load(this.x,this.y,this.z)
			this.data.active=true;
		}
	},
	destroy:function(){
		FactAPI.Marker.clearList();
	},
	tick:function(){
		Particles.addParticle(this.x, this.y, this.z, 6, 0.1, 0.1, 0.1, 0);
		var emitter=new Particles.ParticleEmitter(this.x,this.y,this.z);
		if(World.getThreadTime()%10==0&&this.data.active){
			emitter.emit(Native.ParticleType.redstone, 0, this.x+.5,this.y+.5,this.z+.5);
		}
	}
});