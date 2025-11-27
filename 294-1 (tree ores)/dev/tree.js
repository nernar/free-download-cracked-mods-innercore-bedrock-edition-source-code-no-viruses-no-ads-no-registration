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