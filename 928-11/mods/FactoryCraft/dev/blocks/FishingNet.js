Translation.addTranslation("Fishing Net", {
	ru: "Рыболовная сеть"
});

IDRegistry.genBlockID("fishingnet");
Block.createBlock("fishingnet", [{name:"Fishing Net", texture:[["fishingnet",0]], inCreative: true}]);
	
Block.setBlockShape(BlockID.fishingnet, {x: 0, y: 0, z: 0}, {x: 1, y: 1/8,z: 1});

Callback.addCallback("ItemUse",function(c,i,b, is, player){
let region = BlockSource.getDefaultForActor(player);
	if(b.id==BlockID.fishingnet){
		let id =region.getBlockId(c.x,c.y-1,c.z);
		if(Math.random()<0.03&&(id==8||id==9)){
			region.spawnDroppedItem(c.x+0.5, c.y+1, c.z+0.5, 809, 1, Random.integer(0,3));
		}
	}
});
