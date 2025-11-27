IDRegistry.genBlockID("MPChest");
Block.createBlockWithRotation("MPChest", [{name: "Multi Page Chest", texture: [["MPChest", 0], ["MPChest", 0], ["MPChest", 1], ["MPChest", 2], ["MPChest", 1], ["MPChest", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.MPChest, "wood");
Block.setDestroyTime(BlockID.MPChest, 1);
Block.setBlockShape(BlockID.MPChest, {x: 1/16, y: 0, z: 1/16}, {x: 15/16, y: 14/16, z: 15/16});

const slotFunc = function(obj){
  let i = 0;
  for(let x = 13; x--;)for(let y = 9; y--;)obj.elements["slot" + i++] = {
    type: "slot",
    x: x*40+330, y: y*40+40,
    size: 40
  };
  return obj;
}

const transition = function(tile, minus){
  let s = {};
  for(let i = 117; i--;){
    s = tile.container.getSlot("slot" + i);
    tile.data["con"+tile.data.page][i] = [s.id, s.count, s.data];
    tile.container.clearSlot("slot" + i);
  }
  tile.data.page += minus?tile.data.page==0?4:-1:tile.data.page==4?-4:1;
  tile.container.setText("text", tile.data.page+1 + " / 5");
  const arr = tile.data["con"+tile.data.page];
  for(let i = 117; i--;){
    tile.container.setSlot("slot" + i, arr[i][0], arr[i][1], arr[i][2]);
  }
}

TileEntity.registerPrototype(BlockID.MPChest, {
  defaultValues: {
    page: 0, con0: [], con1: [], con2: [], con3: [], con4: []
  },
  getGuiScreen: function(){
    return new UI.StandartWindow(slotFunc({
      standart: {
        header: {text: {text: "Multi Page Chest"}},
        inventory: {standart: true},
        background: {standart: true}
      },
      elements: {
        "text": {
          type: "text",
          x: 895, y: 300,
          width: 16, height: 8,
          text: this.data.page+1 + " / 5"
        },
        "minus": {
          type: "button",
          x: 860, y: 340,
          bitmap: "minus",
          scale: 3.2,
          clicker: {onClick: function(con, tile){
            transition(tile, true);
          }}
        },
        "plus": {
          type: "button",
          x: 920, y: 340,
          bitmap: "plus",
          scale: 3.2,
          clicker: {onClick: function(con, tile){
            transition(tile);
          }}
        }
      }
    }));
  },
/*
  destroy: function(){
    let arr = [];
    for(let i = 5; i--;){
      if(this.data.page != i && this.data["con"+i] != null){
        for(let j = 117; j--;){
          arr = this.data["con"+i][j];
          if(arr[0] != 0){
            World.drop(this.x, this.y, this.z, arr[0], arr[1], arr[2]);
          }
        }
      }
    }
  }
*/
});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.MPChest}, ["aba", "bob", "aba"], ['a', 264, 0, 'b', 54, 0]);
});