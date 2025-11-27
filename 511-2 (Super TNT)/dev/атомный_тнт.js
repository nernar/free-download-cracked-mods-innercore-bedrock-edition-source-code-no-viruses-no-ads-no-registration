IDRegistry.genBlockID("atom_tnt");
Block.createBlock("atom_tnt", [
	 {name: "Атомная Бомба", texture: [
	   ["atom_tnt_bottom",0],
	   ["atom_tnt_top",0],
	   ["atom_tnt_side",0],
  ],inCreative: true}
], "opaque");




Callback.addCallback("ItemUse", function (c, i, b){
  if(i.id == 259 && (b.id == BlockID.atom_tnt)){
    World.getTileEntity(c.x, c.y, c.z).data.flame = 1;
    Game.prevent();
    
  }
});

TileEntity.registerPrototype(BlockID.atom_tnt, {
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
              World.explode(this.x, this.y, this.z, 30,true);
            }}
  }
});