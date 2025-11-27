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