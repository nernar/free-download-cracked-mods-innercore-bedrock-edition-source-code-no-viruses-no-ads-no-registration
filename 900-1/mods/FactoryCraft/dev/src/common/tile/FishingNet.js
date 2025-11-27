Translation.addTranslation("Fishing Net", {
	ru: "Рыболовная сеть"
});

IDRegistry.genBlockID("fishingnet");
Block.createBlock("fishingnet", [{name:"Fishing Net", texture:[["fishingnet",0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.fishingnet, count: 1, data: 0}, [
	"a a",
	" a ",
	"a a"
], ['a', 287,0]);
	
Block.setBlockShape(BlockID.fishingnet, {x: 0, y: 0, z: 0}, {x: 1, y: 1/8,z: 1});

Callback.addCallback("ItemUse",function(c,i,b){
	if(b.id==BlockID.fishingnet){
		var id =World.getBlockID(c.x,c.y-1,c.z);
		if(Math.random()<0.03&&(id==8||id==9)){
			World.drop(c.x+0.5, c.y+1, c.z+0.5, 349, 1, Random.integer(0,3));
		}
	}
});