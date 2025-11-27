Translation.addTranslation("Cookie Wood", {ru: "Печенюшный дуб"});
	IDRegistry.genBlockID("cookie_oak");
	Block.createBlock("cookie_oak", [{
		name: "Cookie Wood",
		texture: [
			["log_cookie",0],["log_cookie",0],
			["log_cookie",1],["log_cookie",1],
			["log_cookie",1],["log_cookie",1]
		], 
		inCreative: true
		}],"opaque");
Translation.addTranslation("Cookie Leaves", {ru: "Печенюшные листья"});
	IDRegistry.genBlockID("cookie_leaves");
	Block.createBlock("cookie_leaves", [{
		name: "Cookie Leaves",
		texture: [
			["leaves_cookie",0]
		], 
		inCreative: true
		}]);
Block.registerDropFunction("cookie_leaves", function(){
	if(Math.random() < .075){
		return [[ItemID.cookie_sapling, 1, 0]]
	}
	else {
		return [];
	}
});
ToolAPI.registerBlockMaterial(BlockID.cookie_leaves, "plant");

Translation.addTranslation("Cookie Sapling", {ru: "Печенюшный саженец"});
IDRegistry.genItemID("cookie_sapling");
Item.createItem("cookie_sapling", "Cookie Sapling", {name: "cookie_sapling", data: 0});
IDRegistry.genBlockID("cookie_sapling_b");
	Block.createBlock("cookie_sapling_b", [{
		name: "Cookie Leaves",
		texture: [
			["cookie_sapling",0]
		], 
		inCreative: false
		}]);
Block.registerDropFunction("cookie_sapling_b", function(){
	return [[ItemID.cookie_sapling, 1, 0]]
});
ToolAPI.registerBlockMaterial(BlockID.cookie_sapling_b, "plant");
Renderer.setSaplingRender(BlockID.cookie_sapling_b,0);
function cookieTree(x,y,z){
	for(var i=0;i<5;i++){
		for(var b=0;b<3;b++){
			for(var k=0;k<5;k++){
				if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.cookie_leaves,0);
			}
		}
	}
	for(var i=0;i<5;i++){
		if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.cookie_leaves)World.setBlock(x,y+i,z,BlockID.cookie_oak,0);
	}
	if(World.getBlockID(x+1,y+5,z)==0)World.setBlock(x+1,y+5,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x+1,y+6,z)==0)World.setBlock(x+1,y+6,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x-1,y+5,z)==0)World.setBlock(x-1,y+5,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x-1,y+6,z)==0)World.setBlock(x-1,y+6,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+5,z)==0)World.setBlock(x,y+5,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+6,z)==0)World.setBlock(x,y+6,z,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+5,z+1)==0)World.setBlock(x,y+5,z+1,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+6,z+1)==0)World.setBlock(x,y+6,z+1,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+5,z-1)==0)World.setBlock(x,y+5,z-1,BlockID.cookie_leaves,0);
	if(World.getBlockID(x,y+6,z-1)==0)World.setBlock(x,y+6,z-1,BlockID.cookie_leaves,0);
}
Callback.addCallback("ItemUse",function(crd,item){
	pl=crd.relative;
	if(item.id==ItemID.cookie_sapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.cookie_grass){
		World.setBlock(pl.x,pl.y,pl.z,BlockID.cookie_sapling_b,0);
		World.addTileEntity(pl.x,pl.y,pl.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,100);
		for(var k=60;k<256;k++){
		if(World.getBlockID(d.x,k,d.z)==BlockID.cookie_grass){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
}
}cookieTree(d.x,k+1,d.z);return}
		}
	}
	});
	
/*==Перенести на рандом тик==*/

TileEntity.registerPrototype(BlockID.cookie_sapling_b,{
	defaultValues:{
		age:0
	},
	tick: function(){
			if(!this.data.age)this.data.age=0;
			this.data.age++;
				if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.cookie_grass){
					World.destroyBlock(this.x, this.y, this.z, true);
				}
				if (this.data.age>1000&&Math.random()<0.3){
						World.destroyBlock(this.x,this.y,this.z,false);
						cookieTree(this.x,this.y,this.z);
					}
			},	
			click: function(id, count, data){
				if (id == 351 && data == 15){
					World.destroyBlock(this.x,this.y,this.z,false);
					cookieTree(this.x,this.y,this.z);
					Player.setCarriedItem(id, count - 1, data);
				}
			}
	});