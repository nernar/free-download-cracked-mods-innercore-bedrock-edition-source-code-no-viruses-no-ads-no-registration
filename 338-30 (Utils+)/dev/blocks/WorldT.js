IDRegistry.genBlockID("worldClock");

Block.createBlock("worldClock", [
	{
	 name: "World Clock",
	 texture: [
	  ["worldClock", 0]
	 ], 
	 inCreative: true
	}
], 'opaque');

Block.setTempDestroyTime(BlockID.worldClock, 3);

Recipes.addShaped({id:BlockID.worldClock, count: 1, data: 0}, [
	"dbd",
	"bcb",
	"dbd"
], ['c', 347, 0, 'b', 42, 0, 'd', 264, 0]);

TileEntity.registerPrototype(BlockID.worldClock, {
 defaultValues:{
  redstonePower: 0,
  redstoneSignal: false
 },
	redstone: function(params){
		this.data.redstonePower = +params.power;
		if(this.data.redstonePower == 0){
			this.data.redstoneSignal = false;
		} else if(this.data.redstoneSignal == false){
			this.data.redstoneSignal = true;
		}
	},
	tick: function(){
		if(this.data.redstoneSignal){
			if(this.data.redstonePower == 0){
				this.data.redstoneSignal = false;
			} else {
				World.setWorldTime(+World.getWorldTime() + 50);
			}
		}
	}
});

