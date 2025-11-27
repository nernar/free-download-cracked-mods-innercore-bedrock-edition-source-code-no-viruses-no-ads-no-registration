/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

const Storage = __config__.getNumber("BridgeBuffer");
const Loss = __config__.getNumber("LossRate");

importLib("energylib", "*");

let EU, RF, Value = 0;
Callback.addCallback("PostLoaded", function(){
  EU = EnergyTypeRegistry.getEnergyType("Eu");
  RF = EnergyTypeRegistry.getEnergyType("RF");
  Value = RF.value;
  EnergyTileRegistry.addEnergyTypeForId(BlockID.producer_eu, EU);
  EnergyTileRegistry.addEnergyTypeForId(BlockID.consumer_eu, EU);
  EnergyTileRegistry.addEnergyTypeForId(BlockID.producer_rf, RF);
  EnergyTileRegistry.addEnergyTypeForId(BlockID.consumer_rf, RF);
});

const connectionFunc = function(c, item, block){
  let tile;
  Game.prevent();
  block.id == BlockID.energy_bridge ?
    World.setBlock(c.relative.x, c.relative.y, c.relative.z, item.id) & (tile = World.addTileEntity(c.relative.x, c.relative.y, c.relative.z), tile.data.x = c.x, tile.data.y = c.y, tile.data.z = c.z) :
    World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, item.id, 1) & Game.message("Please connect to Energy Bridge.");
};




// file: eu.js

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




// file: rf.js

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




// file: bridge.js

IDRegistry.genBlockID("energy_bridge");
Block.createBlock("energy_bridge", [{name: "Energy Bridge", texture: [["energy_bridge", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.energy_bridge, "stone");
Block.setDestroyTime(BlockID.energy_bridge, 5);
Recipes.addShaped({id: BlockID.energy_bridge}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 101, 0, "c", 381, 0]);

const render = new ICRender.Model();
const model = BlockRenderer.createModel();
model.addBox(0, 0, 0, 1, 1, 1, "energy_bridge", 0);
model.addBox(0.125, 0.125, 0.125, 0.875, 0.875, 0.875, "energy_bridge", 1);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.energy_bridge, 0, render);

const Coords = [[-1, 0, 0], [1, 0, 0], [0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1]];
const Children = [BlockID.producer_eu, BlockID.consumer_eu, BlockID.producer_rf, BlockID.consumer_rf];
Block.registerDropFunction("energy_bridge", function(c){
  let x = y = z = 0;
  for(let i = 6; i--;){
    x = c.x + Coords[i][0];
    y = c.y + Coords[i][1];
    z = c.z + Coords[i][2];
    ~Children.indexOf(World.getBlockID(x, y, z)) && World.removeTileEntity(x, y, z) & World.destroyBlock(x, y, z, true);
  }
  return [[BlockID.energy_bridge, 1]];
});

TileEntity.registerPrototype(BlockID.energy_bridge, {
  defaultValues: {
    energy: 0
  },
  click: function(id){
    id || Game.tipMessage((this.data.energy * Value | 0) + " EU  =  " + this.data.energy + " RF");
  }
});




