IDRegistry.genBlockID("producer_rf");
IDRegistry.genBlockID("consumer_rf");

Block.createBlock("producer_rf", [{name: "RF Energy Producer", texture: [["producer_rf", 0]], inCreative: true}]);
Block.createBlock("consumer_rf", [{name: "RF Energy Consumer", texture: [["consumer_rf", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.producer_rf, "stone");
ToolAPI.registerBlockMaterial(BlockID.consumer_rf, "stone");

Block.setDestroyTime(BlockID.producer_rf, 5);
Block.setDestroyTime(BlockID.consumer_rf, 5);

Recipes.addShaped({id: BlockID.producer_rf}, ["aba", "cde", "afa"], ["a", 1, 0, "b", 265, 0, "c", 61, 0, "d", 42, 0, "e", 266, 0, "f", 101, 0]);
Recipes.addShapeless({id: BlockID.consumer_rf}, [{id: BlockID.producer_rf}]);
Recipes.addShapeless({id: BlockID.producer_rf}, [{id: BlockID.consumer_rf}]);

ICRender.getGroup("rf-wire").add(BlockID.producer_rf, 0);
ICRender.getGroup("rf-wire").add(BlockID.consumer_rf, 0);

Block.registerPlaceFunction("producer_rf", connectionFunc);
Block.registerPlaceFunction("consumer_rf", connectionFunc);


TileEntity.registerPrototype(BlockID.producer_rf, {
  bridge: null,
  defaultValues: {x: 0, y: 0, z: 0},
  init: function(){
    const tile = World.getTileEntity(this.data.x, this.data.y, this.data.z);
    tile && (this.bridge = tile.data);
  },
  energyTick: function(type, src){
    this.bridge && (this.bridge.energy = src.add(this.bridge.energy) | 0);
  }
});

TileEntity.registerPrototype(BlockID.consumer_rf, {
  bridge: null,
  defaultValues: {x: 0, y: 0, z: 0},
  init: function(){
    const tile = World.getTileEntity(this.data.x, this.data.y, this.data.z);
    tile && (this.bridge = tile.data);
  },
  energyTick: function(type, src){
    this.bridge && (this.bridge.energy += src.getAll(Storage - this.bridge.energy) * (1 - Loss / 100) | 0);
  }
});