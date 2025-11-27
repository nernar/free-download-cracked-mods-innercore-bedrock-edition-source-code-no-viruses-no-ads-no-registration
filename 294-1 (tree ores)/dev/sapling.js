IDRegistry.genBlockID("oreSapling");
Block.createBlock("oreSapling", [{name: "", texture: [["empty", 0]]}]);

const render = new ICRender.CollisionShape();
render.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.oreSapling, 0, render);

Block.registerDropFunction("oreSapling", function(){
  return [];
});


Callback.addCallback("DestroyBlock", function(c){
  c.y++;
  World.getBlockID(c.x, c.y, c.z) == BlockID.oreSapling &&
    World.removeTileEntity(c.x, c.y, c.z) &
    World.setBlock(c.x, c.y, c.z, 0);
});


TileEntity.registerPrototype(BlockID.oreSapling, {

  defaultValues: {
    id: "",
    stage: 0,
    tall: false
  },

  anim1: null,
  anim2: null,

  init: function(){
    const id = ItemID["sapling" + this.data.id];
    id ?
      (this.anim1 = new Animation.Item(this.x + .48, this.y + .5, this.z + .44),
      this.anim2 = new Animation.Item(this.x + .44, this.y + .5, this.z + .52)) &
      this.anim1.describeItem({
        id: id,
        count: 1,
        data: 0,
        rotation: [0, Math.PI/4, 0],
        size: 1
      }) &
      this.anim2.describeItem({
        id: id,
        count: 1,
        data: 0,
        rotation: [0, -Math.PI/4, 0],
        size: 1
      }) &
      this.anim1.load() &
      this.anim2.load() :
      this.destroy();
  },

  destroy: function(){
    this.anim1 && this.anim1.destroy();
    this.anim2 && this.anim2.destroy();
    this.data.id && World.drop(this.x + 0.5, this.y, this.z + 0.5, ItemID["sapling" + this.data.id], 1, this.data.tall ? 1 : 0);
  },

  click: function(id, count, data){
    id == 351 && data == 15 &&
      (Math.random() < 0.45 ?
        (++this.data.stage >= 4 && this.genTree()) &
        Particles.addFarParticle(17, this.x + 0.5, this.y + 1, this.z + 0.5, 0, 1, 0) :
        Particles.addFarParticle(2, this.x + 0.5, this.y + 0.5, this.z + 0.5, 0, 1, 0)) &
      Player.decreaseCarriedItem();
  },

  genTree: function(){
    const min = this.data.tall ? 20 : 4;
    const max = Math.min(min + Math.random() * 4 |0, (this.dimension == 1 ? 128 : 256) - this.y);
    let height = 0;
    while(++height < max && !World.getBlockID(this.x, this.y + height, this.z));
    if(height < min){
      return;
    }

    const leaf = {id: BlockID["leaf" + this.data.id], data: this.data.tall ? 2 : 0};
    let xx = zz = 0;
    for(xx = -2; xx <= 2; xx++){
    for(zz = -2; zz <= 2; zz++){
      (!xx || xx&1 || !zz || zz&1 || Math.random() < 0.4) &&
        !World.getBlockID(this.x + xx, this.y + height - 3, this.z + zz) &&
          World.setFullBlock(this.x + xx, this.y + height - 3, this.z + zz, leaf);
      (!xx || xx&1 || !zz || zz&1 || Math.random() < 0.2) &&
        !World.getBlockID(this.x + xx, this.y + height - 2, this.z + zz) &&
          World.setFullBlock(this.x + xx, this.y + height - 2, this.z + zz, leaf);
    }
    }
    for(xx = -1; xx <= 1; xx++){
    for(zz = -1; zz <= 1; zz++){
      (!xx || !zz || Math.random() < 0.5) &&
        !World.getBlockID(this.x + xx, this.y + height - 1, this.z + zz) &&
          World.setFullBlock(this.x + xx, this.y + height - 1, this.z + zz, leaf);
      (!xx || !zz) &&
        !World.getBlockID(this.x + xx, this.y + height, this.z + zz) &&
          World.setFullBlock(this.x + xx, this.y + height, this.z + zz, leaf);
    }
    }

    for(; height--;){
      World.setBlock(this.x, this.y + height, this.z, BlockID["log" + this.data.id]);
    }

    this.data.id = "";
    this.selfDestroy();

  }

});


Block.setRandomTickCallback(BlockID.oreSapling, function(x, y, z){
  const tile = World.getTileEntity(x, y, z);
  tile && Math.random() < 0.2 && World.getLightLevel(x, y + 1, z) > 8 &&
    ++tile.data.stage >= 4 && tile.genTree();
});