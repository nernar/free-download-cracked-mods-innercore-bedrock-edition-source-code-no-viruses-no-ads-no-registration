IDRegistry.genBlockID("producer_eu");
IDRegistry.genBlockID("consumer_eu");

Block.createBlock("producer_eu", [{name: "EU Energy Producer", texture: [["producer_eu", 0]], inCreative: true}]);
Block.createBlock("consumer_eu", [{name: "EU Energy Consumer", texture: [["consumer_eu", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.producer_eu, "stone");
ToolAPI.registerBlockMaterial(BlockID.consumer_eu, "stone");

Block.setDestroyTime(BlockID.producer_eu, 5);
Block.setDestroyTime(BlockID.consumer_eu, 5);

Recipes.addShaped({id: BlockID.producer_eu}, ["aba", "cde", "afa"], ["a", 1, 0, "b", ItemID.cableCopper0, 0, "c", ItemID.storageBattery, -1, "d", BlockID.machineBlockBasic, 0, "e", 266, 0, "f", ItemID.coil, 0]);
Recipes.addShapeless({id: BlockID.consumer_eu}, [{id: BlockID.producer_eu}]);
Recipes.addShapeless({id: BlockID.producer_eu}, [{id: BlockID.consumer_eu}]);

ICRender.getGroup("ic-wire").add(BlockID.producer_eu, 0);
ICRender.getGroup("ic-wire").add(BlockID.consumer_eu, 0);

Block.registerPlaceFunction("producer_eu", connectionFunc);
Block.registerPlaceFunction("consumer_eu", connectionFunc);


TileEntity.registerPrototype(BlockID.producer_eu, {
  bridge: null,
  defaultValues: {x: 0, y: 0, z: 0},
  init: function(){
    const tile = World.getTileEntity(this.data.x, this.data.y, this.data.z);
    tile && (this.bridge = tile.data);
  },
  energyTick: function(type, src){
    this.bridge && (this.bridge.energy = src.add(this.bridge.energy * Value) / Value | 0);
  }
});

TileEntity.registerPrototype(BlockID.consumer_eu, {
  bridge: null,
  defaultValues: {x: 0, y: 0, z: 0},
  init: function(){
    const tile = World.getTileEntity(this.data.x, this.data.y, this.data.z);
    tile && (this.bridge = tile.data);
  },
  energyTick: function(type, src){
    this.bridge && (this.bridge.energy += src.getAll((Storage - this.bridge.energy) * Value) / Value * (1 - Loss / 100) | 0);
  }
});