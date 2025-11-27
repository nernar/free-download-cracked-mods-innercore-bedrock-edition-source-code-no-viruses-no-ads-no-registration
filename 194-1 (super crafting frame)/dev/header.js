/*
┏━━┳━━┳━━┓
┃━━┫┏━┫━┳┛
┣━━┃┗━┫┏┛
┗━━┻━━┻┛
by NikuJagajaga
*/


const CHEST = {54: 54};
BlockID.iron_chest && (
  CHEST[BlockID.iron_chest] = 54,
  CHEST[BlockID.gold_chest] = 81,
  CHEST[BlockID.diamond_chest] = 108,
  CHEST[BlockID.obsidian_chest] = 108,
  CHEST[BlockID.crystal_chest] = 108
);
BlockID.copper_chest && (
  CHEST[BlockID.copper_chest] = 45,
  CHEST[BlockID.tin_chest] = 54,
  CHEST[BlockID.bronze_chest] = 54,
  CHEST[BlockID.steel_chest] = 72
);

const sideCoords = function(c, dir){
  return [
    {x: c.x, y: c.y + 1, z: c.z},
    {x: c.x, y: c.y - 1, z: c.z},
    {x: c.x, y: c.y, z: c.z + 1},
    {x: c.x, y: c.y, z: c.z - 1},
    {x: c.x + 1, y: c.y, z: c.z},
    {x: c.x - 1, y: c.y, z: c.z}
  ][dir];
};

const regFrame = function(name, rec){
  const id = "scf" + name;

  IDRegistry.genItemID(id);
  Item.createItem(id, "Super " + name + " Frame", {name: id});

  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]}
  ]);

  let render, model;
  const base = [[2/16, 11/64], [2/16, 53/64], [53/64, 14/16], [11/64, 14/16]];
  let arr;
  for(let i = 6; i--;){
    render = new ICRender.Model();
    model = BlockRenderer.createModel();
    for(let j = 4; j--;){
      arr = [base[0], base[1]];
      arr.splice(-~(i / 2) % 3, 0, i & 1 ? [0, 1/16] : [15/16, 1]);
      model.addBox(arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], 5, 0);
     base.unshift(base.pop());
    }
    arr = [[11/64, 53/64], [11/64, 53/64]];
    arr.splice(-~(i / 2) % 3, 0, i & 1 ? [0, 1/32] : [31/32, 1]);
    model.addBox(arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], BlockID[id], 0);
    Block.setShape(BlockID[id], arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], i);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID[id], i, render);
  }

  Block.setDestroyTime(id, 0);

  Item.registerUseFunction(id, function(c){
    const tile = World.getTileEntity(c.x, c.y, c.z);
    const side = c.side;
    c = c.relative;
    (Entity.getSneaking(Player.get()) || !tile) &&
    GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z)) &&
      Game.prevent() &
      World.setBlock(c.x, c.y, c.z, BlockID[id], side) &
      World.addTileEntity(c.x, c.y, c.z) &
      Player.decreaseCarriedItem();
  });

  Block.registerDropFunction(id, function(){
    return [[ItemID[id], 1, 0]];
  });

  Recipes.addShaped({id: ItemID[id]}, ["aaa", "aba", "aaa"], ["a", 280, 0, "b", rec, 0]);

};

const FRAME = [BlockID.scfCrafting, BlockID.scfItem, BlockID.scfVoid];

Callback.addCallback("DestroyBlock", function(c){

  const side = [
    {x: c.x, y: c.y-1, z: c.z},
    {x: c.x, y: c.y+1, z: c.z},
    {x: c.x, y: c.y, z: c.z-1},
    {x: c.x, y: c.y, z: c.z+1},
    {x: c.x-1, y: c.y, z: c.z},
    {x: c.x+1, y: c.y, z: c.z}
  ];
  let block, tile;
  for(let i = 6; i--;){
    block = World.getBlock(side[i].x, side[i].y, side[i].z);
    ~FRAME.indexOf(block.id) && block.data == i &&
      (tile = World.getTileEntity(side[i].x, side[i].y, side[i].z)) &
      tile.container.clearSlot("slotResult") &
      tile.anim.destroy() &
      World.removeTileEntity(side[i].x, side[i].y, side[i].z) &
      World.destroyBlock(side[i].x, side[i].y, side[i].z, true);
  }
});

const setAnim = function(tile, item){
  item || (item = tile.data);
  const dir = World.getBlock(tile.x, tile.y, tile.z).data;
  const notCube = [6, 27, 28, 30, 31, 32, 37, 38, 39, 40, 50, 65, 66, 69, 76, 101, 102];
  const isCube = item.id < 256 && !~notCube.indexOf(item.id) || item.id >= 8000;
  const add = isCube ? {
    x: dir == 4 ? 31/32 : dir == 5 ? 2/32 : dir == 0 || dir == 1 || dir == 3 ? 29/64 : 35/64,
    y: dir == 0 ? 31/32 : dir == 1 ? 2/32 : 29/64,
    z: dir == 2 ? 31/32 : dir == 3 ? 2/32 : dir == 0 || dir == 4 ? 29/64 : 35/64
  } : {
    x: dir == 4 ? 31/32 : dir == 5 ? 2/32 : .5,
    y: dir == 0 ? 31/32 : dir == 1 ? 2/32 : .5,
    z: dir == 2 ? 31/32 : dir == 3 ? 2/32 : .5
  };
  tile.anim = new Animation.item(tile.x + add.x, tile.y + add.y, tile.z + add.z);
  item.id && tile.anim.describeItem({
    id: item.id >= 8000 ? 1 : item.id,
    data: item.id >= 8000 ? 0 : item.data,
    count: 1,
    size: isCube ? 0.25 : 0.5,
    rotation: isCube ? [
      dir == 0 ? Math.PI/2 : dir == 1 ? -Math.PI/2 : 0,
      dir == 2 ? Math.PI/2 : dir == 3 ? -Math.PI/2 : dir == 5 ? Math.PI : 0,
      dir == 0 ? -Math.PI/2 : dir == 1 ? Math.PI/2 : 0
    ] : [
      dir == 0 ? Math.PI/2 : dir == 1 ? -Math.PI/2 : 0,
      dir == 2 ? Math.PI : dir == 4 ? Math.PI/2 : dir == 5 ? -Math.PI/2 : 0,
      0
    ]
  });
  tile.anim.load();
};

const output = function(c, dir, item, count){
  Entity.setVelocity(
    World.drop(c.x + .5, c.y + .5, c.z + .5, item.id, count || item.count, item.data),
    dir == 4 ? -0.2 : dir == 5 ? 0.2 : 0,
    dir == 0 ? -0.2 : dir == 1 ? 0.2 : 0,
    dir == 2 ? -0.2 : dir == 3 ? 0.2 : 0
  );
};