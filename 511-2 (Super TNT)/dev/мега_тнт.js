IDRegistry.genBlockID("mega_tnt");
Block.createBlock("mega_tnt", [
	 {name: "Мега Динамит", texture: [
	   ["mega_tnt_bottom",0],
	   ["mega_tnt_top",0],
	   ["mega_tnt_side",0],
  ],inCreative: true}
], "opaque");




Callback.addCallback("ItemUse", function (c, i, b){
  if(i.id == 259 && (b.id == BlockID.mega_tnt)){
    World.getTileEntity(c.x, c.y, c.z).data.flame = 1;
    Game.prevent();
    
  }
});

TileEntity.registerPrototype(BlockID.mega_tnt, {
  defaultValues: {
    flame: 0, time: 120
  },
  radius: 1,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
    if(Math.random()<=4){
              World.explode(this.x, this.y, this.z, 10,false);
            }}
  }
});




