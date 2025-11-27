IDRegistry.genBlockID("water_tnt");
Block.createBlock("water_tnt", [
	 {name: "Водный Динамит", texture: [
	   ["water_tnt_bottom",0],
	   ["water_tnt_top",0],
	   ["water_tnt_side",0],
  ],inCreative: true}
], "opaque");




Callback.addCallback("ItemUse", function (c, i, b){
  if(i.id == 259 && (b.id == BlockID.water_tnt)){
    World.getTileEntity(c.x, c.y, c.z).data.flame = 1;
    Game.prevent();
    
  }
});



TileEntity.registerPrototype(BlockID.water_tnt, {
  defaultValues: {
    flame: 0, time: 120
  },
  radius: 2,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
      for(x = -this.radius; x <= this.radius; x++){
        for(y = -this.radius; y <= this.radius; y++){
          for(z = -this.radius; z <= this.radius; z++){
            block = World.getBlock(this.x+x, this.y+y, this.z+z);
            if(block.id == BlockID.water_tnt){
              World.getTileEntity(this.x+x, this.y+y, this.z+z).time = 0;
            }
            if(System.getValue(block.id, block.data) <= 1){
              World.setBlock(this.x+x, this.y+y-4, this.z+z, 9);
            }
          }
        }
      }
      for(x1 = -this.radius*2; x1 <= this.radius*2; x1 ++){
        for(y1 = -this.radius*2; y1 <= this.radius*2; y1 ++){
          for(z1 = -this.radius*2; z1 <= this.radius*2; z1 ++){
            if(Math.random()<=.8){
              World.setBlock(this.x+x1, this.y+y1-4, this.z+z1, 9);
            }
          }
        }
      }
    }
  }
});