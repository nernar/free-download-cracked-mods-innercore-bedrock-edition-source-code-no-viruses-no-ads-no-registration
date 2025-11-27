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