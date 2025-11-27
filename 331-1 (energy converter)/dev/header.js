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