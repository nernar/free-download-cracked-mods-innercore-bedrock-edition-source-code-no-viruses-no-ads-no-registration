/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: header.js

/*
┏━━━━┓╋╋╋╋╋╋╋┏━━━┓
┃┏┓┏┓┃╋╋╋╋╋╋╋┃┏━┓┃
┗┛┃┃┣┻┳━━┳━━┓┃┃╋┃┣━┳━━┓
╋╋┃┃┃┏┫┃━┫┃━┫┃┃╋┃┃┏┫┃━┫
╋╋┃┃┃┃┃┃━┫┃━┫┃┗━┛┃┃┃┃━┫
╋╋┗┛┗┛┗━━┻━━┛┗━━━┻┛┗━━┛s

by NikuJagajaga
*/


const BOSS = {
  type: null,
  uuid: null
};

Saver.addSavesScope("TreeOresScope",
  function read(scope){
    BOSS.type = scope.type;
    BOSS.uuid = scope.uuid;
  },
  function save(){
    return BOSS;
  }
);

Callback.addCallback("LevelLoaded", function(){
  BOSS.uuid && Entity.isExist(BOSS.uuid) ?
    Entity.setSkin(BOSS.uuid, "entity/boss_" + BOSS.type + ".png") :
    BOSS.type = BOSS.uuid = null;
});


IDRegistry.genItemID("spawnerBroken");
Item.createItem("spawnerBroken", "Broken Spawner Frame", {name: "spawnerBroken"});

IDRegistry.genItemID("spawnerNull");
Item.createItem("spawnerNull", "Spawner Frame", {name: "spawnerNull"});

Callback.addCallback("EntityDeath", function(ent){
  const pos = Player.getPosition();
  Entity.getType(ent) == 52 &&
    World.drop(pos.x, pos.y, pos.z, ItemID.spawner_broken, 1);
  ent == BOSS.uuid &&
    World.drop(pos.x, pos.y, pos.z, ItemID["sapling" + BOSS.type], 1, 1) &
    (BOSS.type = BOSS.uuid = null);
});

Recipes.addShaped({id: ItemID.spawnerNull},
  ["aa", "aa"],
  ["a", ItemID.spawnerBroken, 0]
);


const useFunc = function(c, item){
  Game.tipMessage("§b" + (item.data ? "Single" : "Stack"));
  Player.setCarriedItem(item.id, 1, item.data + 1 & 1);
};

const nameFunc = function(item, name){
  return name + "\n§b" + (item.data ? "Stack" : "Single");
};

const craftFunc = function(api, field){
  for(let i = 9; i--;){
    field[i].id != ItemID.transNormal && api.decreaseFieldSlot(i);
  }
};

const transFunc = function(trans){
  trans = ItemID["trans" + trans];
  return function(api, field, result){
    let n = 64;
    let slot = 0;
    for(let i = 9; i--;){
      switch(field[i].id){
        case 0:
          break;
        case trans:
          field[i].data || (n = 1);
          break;
        default:
          n = Math.min(field[i].count, n);
          slot = i;
          break;
      }
    }
    result.count = n;
    for(; n--;){
      api.decreaseFieldSlot(slot);
    }
  };
};

IDRegistry.genItemID("transNormal");
Item.createItem("transNormal", "Normal Transformer", {name: "transNormal"}, {stack: 1});
Item.registerUseFunction("transNormal", useFunc);
Item.registerNameOverrideFunction(ItemID.transNormal, nameFunc);
Recipes.addShapeless({id: ItemID.transNormal}, [
  {id: 265},
  {id: 266},
  {id: 351, data: 4},
  {id: 263},
  {id: 331},
  {id: 267},
  {id: 388},
  {id: 264},
  {id: 341}
]);

IDRegistry.genItemID("transNether");
Item.createItem("transNether", "Nether Transformer", {name: "transNether"}, {stack: 1});
Item.registerUseFunction("transNether", useFunc);
Item.registerNameOverrideFunction(ItemID.transNether, nameFunc);
Recipes.addShapeless({id: ItemID.transNether}, [
  {id: 348},
  {id: 406},
  {id: ItemID.transNormal, data: -1}
], craftFunc);

IDRegistry.genItemID("transReinforced");
Item.createItem("transReinforced", "Reinforced Transformer", {name: "transReinforced"}, {stack: 1});
Item.registerUseFunction("transReinforced", useFunc);
Item.registerNameOverrideFunction(ItemID.transReinforced, nameFunc);
Recipes.addShapeless({id: ItemID.transReinforced}, [
  {id: 264},
  {id: 264},
  {id: 264},
  {id: 264},
  {id: 265},
  {id: 265},
  {id: 265},
  {id: 265},
  {id: ItemID.transNormal, data: -1}
], craftFunc);




// file: tree.js

const regTree = function(id, hp, base, result, trans){

  const chop = "chop" + id;
  const sapling = "sapling" + id;
  const spawner = "spawner" + id;
  const log = "log" + id;
  const leaf = "leaf" + id;


  IDRegistry.genItemID(chop);
  Item.createItem(chop, id + " Tree Chop", {name: chop});


  IDRegistry.genItemID(sapling);
  Item.createItem(sapling, id + " Tree Sapling", {name: sapling});

  Item.registerNameOverrideFunction(ItemID[sapling], function(item){
    return id + (item.data ? " Tree Boss Sapling" : " Tree Sapling");
  });

  Item.registerUseFunction(sapling, function(c, item, block){
    let tile;
    c.y++;
    (block.id == 2 || block.id == 3) && c.side == 1 &&
      World.setBlock(c.x, c.y, c.z, BlockID.oreSapling) &
      World.addTileEntity(c.x, c.y, c.z) &
      (tile = World.getTileEntity(c.x, c.y, c.z),
      tile.data.id = id,
      tile.data.tall = !!item.data) &
      Player.decreaseCarriedItem();
  });

  base && Recipes.addShaped({id: ItemID[sapling]},
    ["aaa", "aba", "aaa"],
    ["a", base[0], base[1] || 0, "b", 6, -1]
  );


  IDRegistry.genItemID(spawner);
  Item.createItem(spawner, id + " Boss Spawner", {name: spawner});

  Item.registerUseFunction(spawner, function(c){
    BOSS.type ||
      (BOSS.type = id,
      BOSS.uuid = Entity.spawn(c.x, c.y + 1, c.z, 36, "entity/boss" + id + ".png")) &
      Entity.setAge(BOSS.uuid, 0) &
      Entity.setNameTag(BOSS.uuid, id + " Tree Boss") &
      Entity.setMaxHealth(BOSS.uuid, hp) &
      Entity.setHealth(BOSS.uuid, hp) &
      Entity.setCarriedItem(BOSS.uuid, 279, 1) &
      Entity.addEffect(BOSS.uuid, 1, 3, 1e6) &
      Player.decreaseCarriedItem();
  });


  IDRegistry.genBlockID(log);
  Block.createBlock(log, [
    {name: id + " Tree Log", texture: [[log, 0], [log, 0], [log, 1]], inCreative: true},
  ]);
  ToolAPI.registerBlockMaterial(BlockID[log], "wood");
  Block.setDestroyTime(BlockID[log], 1.5);

  Block.registerDropFunction(log, function(c){
    let xx = zz = 0;
    let block;
    for(xx = -2; xx <= 2; xx++){
    for(zz = -2; zz <= 2; zz++){
      block = World.getBlock(c.x + xx, c.y, c.z + zz);
      block.id == BlockID[leaf] && !(block.data&1) && World.setBlock(c.x + xx, c.y, c.z + zz, block.id, block.data + 1);
    }
    }
    for(xx = -1; xx <= 1; xx++){
    for(zz = -1; zz <= 1; zz++){
      block = World.getBlock(c.x + xx, c.y + 1, c.z + zz);
      block.id == BlockID[leaf] && !(block.data&1) && World.setBlock(c.x + xx, c.y + 1, c.z + zz, block.id, block.data + 1);
    }
    }
    return [[ItemID[chop], 1, 0]];
  });

  Recipes.addShaped({id: BlockID[log]},
    ["aaa", "aaa", "aaa"],
    ["a", ItemID[chop], 0]
  );

  Recipes.addShaped({id: ItemID[spawner]},
    ["aaa", "aba", "aaa"],
    ["a", BlockID[log], 0, "b", ItemID.spawnerNull, 0]
  );


  IDRegistry.genBlockID(leaf);
  Block.createBlock(leaf, [
    {name: id + " Tree Leaf", texture: [[leaf, 0]]},
    {name: "", texture: [[leaf, 0]]},
    {name: id + " Tree Boss Leaf", texture: [[leaf, 0]]},
    {name: "", texture: [[leaf, 0]]}
  ]);
  ToolAPI.registerBlockMaterial(BlockID[leaf], "plant");
  Block.setDestroyTime(BlockID[leaf], 0.2);

  Block.registerDropFunction(leaf, function(c, id, data){
    return Math.random() < 0.05 ? [[ItemID[sapling], 1, data <= 1 ? 0 : 1]] : [];
  });

  Block.setRandomTickCallback(BlockID[leaf], function(x, y, z, id, data){
    data&1 &&
      World.setBlock(x, y, z, 0) &
      (Math.random() < 0.05 && World.drop(x + 0.5, y, z + 0.5, ItemID[sapling], 1, data <= 1 ? 0 : 1));
  });


  Recipes.addShapeless({id: result[0], data: result[1] || 0}, [
    {id: ItemID["trans" + trans], data: -1},
    {id: BlockID[log]}
  ], transFunc(trans));


};


regTree("Iron", 300, [42], [265], "Normal");
regTree("Gold", 350, [41], [266], "Normal");
regTree("Coal", 250, [173], [263], "Normal");
regTree("Redstone", 350, [152], [331], "Normal");
regTree("Diamond", 450, [57], [264], "Normal");
regTree("Emerald", 500, [133], [388], "Normal");
regTree("Lapis", 200, [22], [351, 4], "Normal");
regTree("Obsidian", 300, [49], [49], "Reinforced");
regTree("Glowstone", 369, [89], [348], "Nether");
regTree("Quartz", 369, [155, -1], [406], "Nether");
regTree("Xp", 650, false, [384], "Normal");

Recipes.addShapeless({id: ItemID.saplingXp}, [
  {id: 287},
  {id: 375},
  {id: 261, data: -1},
  {id: 367},
  {id: 289},
  {id: 262},
  {id: 352},
  {id: 276},
  {id: 6, data: -1}
]);




// file: sapling.js

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




