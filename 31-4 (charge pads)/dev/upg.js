const regUpg=function(tex, nam, met){
  tex = "ChargePads_"+tex;
  const id = tex+(met||"");
  IDRegistry.genItemID(id);
  Item.createItem(id, nam, {name:tex, data:met}, {stack: 1});
};

const ID=function(str){
  return ItemID["ChargePads_"+str];
};

regUpg("eff", "Efficiency Upgrade");
regUpg("arm", "Armour Priority Module");
regUpg("dra", "Drain Conversion Module");
regUpg("boo", "Proximity Booster Module");
regUpg("boo", "Wide-Band Booster Module", 1);
regUpg("fie", "Field Expansion Module (Alpha)");
regUpg("fie", "Field Expansion Module (Delta)", 1);
regUpg("fie", "Field Expansion Module (Theta)", 2);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped( {id: ID("eff")},
    ["aba", "cdc"], [
    "a", ItemID.storageBattery, -1,
    "b", ItemID.cableOptic, 0,
    "c", ItemID.cableGold2, 0,
    "d", ItemID.circuitAdvanced, 0
  ]);
  Recipes.addShaped({id: ID("arm")},
    ["aba", "cdc"], [
    "a", 348, 0,
    "b", 368, 0,
    "c", ItemID.cableGold2, 0, 
    "d", ID("boo"), 0
  ]);
  Recipes.addShaped({id: ID("dra")},
    ["aaa", "bcb"], [
    "a", 348, 0,
    "b", ItemID.cableGold2, 0,
    "c", ItemID.circuitAdvanced, 0
  ]);
  Recipes.addShaped({id: ID("boo")},
    ["aaa", "bcb", "dad"], [
    "a", ItemID.circuitAdvanced, 0,
    "b", ItemID.upgradeOverclocker, 0,
    "c", ItemID.cableIron3, 0,
    "d", ItemID.cableGold2, 0
  ]);
  Recipes.addShaped({id: ID("boo1")},
    ["aba", "cdc", "aba"], [
    "a", ItemID.circuitAdvanced, 0,
    "b", ID("boo"), 0,
    "c", ItemID.storageCrystal, -1,
    "d", ItemID.cableIron3, 0
  ]);
  Recipes.addShaped({id: ID("fie")},
    ["aba", "bcb", "aba"], [
    "a", ItemID.plateCopper, 0,
    "b", ItemID.cableIron3, 0,
    "c", ID("boo1"), 0
  ]);
  Recipes.addShaped({id: ID("fie1")},
    ["aba", "cdc", "aba"], [
    "a", ID("eff"), 0,
    "b", ID("fie"), 0,
    "c", ItemID.cableIron3, 0,
    "d", ItemID.circuitAdvanced, 0
  ]);
  Recipes.addShaped({id: ID("fie2")},
    ["aba", "cdc", "efe"], [
    "a", ItemID.plateCopper, 0,
    "b", ItemID.upgradeOverclocker, 0,
    "c", ID("fie1"), 0,
    "d", ItemID.cableIron3, 0,
    "e", ID("eff"), 0,
    "f", ItemID.circuitAdvanced, 0
  ]);
});

Item.registerUseFunction("upgradeMFSU", function(c, item, block){
  if(block.id == BlockID.storageMFE || block.id == BlockID.HVPad){
    const tile = World.getTileEntity(c.x , c.y, c.z) || {};
    tile.selfDestroy();
    World.setBlock(c.x, c.y, c.z,
      BlockID[block.id == BlockID.storageMFE ?
        "storageMFSU" :
        "EVPad"
      ], block.data);
    block = World.addTileEntity(c.x , c.y, c.z);
    block.data = tile.data;
    Player.decreaseCarriedItem();
  }
});