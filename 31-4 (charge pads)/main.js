/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: pad.js

IMPORT("ChargeItem");
IMPORT("MachineRender");

const particleLine = function(id, c1, c2){
  const delta = {x: c2.x - c1.x, y: c2.y - c1.y, z: c2.z - c1.z};
  const size = Math.sqrt(delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);
  delta.x /= size;
  delta.y /= size;
  delta.z /= size;
  for(let pos = 0; pos < size; pos += Math.random() * 2){
    Particles.addFarParticle(id, c1.x + delta.x * pos, c1.y + delta.y * pos, c1.z + delta.z * pos, 0, 0, 0);
  }
};

const regChargepad = function(id, nam, tex, sto, tra, lev){

  IDRegistry.genBlockID(id);
  Block.createBlock(id, [{name: "Chargepad ("+nam+")", texture: [tex[0], ["chargepad", tex[1]], tex[2], tex[2], tex[2], tex[2]], inCreative: true}]);
  MachineRenderer.setStandartModel(BlockID[id], [tex[0], ["chargepad", tex[1]], tex[2], tex[2], tex[2], tex[2]]);
  MachineRenderer.registerRenderModel(BlockID[id], 0, [tex[0], ["chargepad", tex[1]+1], tex[2], tex[2], tex[2], tex[2]]);

  lev && Block.registerDropFunction(id, function(c, id, data, level){
    return ICore.Machine.getMachineDrop(c, id, level, lev == 2 ? BlockID.machineBlockBasic : lev == 3 ? BlockID.machineBlockAdvanced : 0);
  });

  const object = {
    standart: {
      header: {text: {text: "Chargepad ("+nam+")"}},
      inventory: {standart: true},
      background: {bitmap: "wall"}
    },  
    drawing: [
      {type: "bitmap", x: 450, y: 150, bitmap: "back", scale: 3.2},
      {type: "bitmap", x: 430, y: 85, bitmap: "bar_0", scale: 3.2}
    ],
    elements: {
      "bar": {type: "scale", x: 440, y: 98, direction: 1, value: .5, bitmap: "bar_1", scale: 3.2},
      "slotBat": {type: "slot", x: 430, y: 220, bitmap: "slot_bat"},
      "slotUpg0": {type: "slot", x: 630, y: 160, bitmap: "slot_upg"},
      "slotUpg1": {type:"slot",x:600,y:220,bitmap:"slot_upg"},
      "slotUpg2": {type: "slot", x: 660, y: 220, bitmap: "slot_upg"},
      "slotUpg3": {type:"slot",x:830,y:220,bitmap:"slot_wif"},
      "slotUpg4":  {type:"slot",x:830,y:125,bitmap:"slot_dus"},
      "text1": {type: "text", x: 520, y: 90, text: "EU :", font: {color: android.graphics.Color.BLACK}},
      "text2": {type: "text", x: 520, y: 120, text: "Max.: "+sto, font: {color: android.graphics.Color.BLACK}}
    }
  };

  lev <= 1 &&
    delete object.elements.slotUpg2 &
    object.drawing.push({type: "bitmap", x: 660, y: 220, bitmap: "lock", scale: 3.2}) & (
    lev ||
      delete object.elements.slotUpg1 &
      delete object.elements.slotUpg3 &
      delete object.elements.slotUpg4 &
      object.drawing.push({type: "bitmap", x: 600, y: 220, bitmap: "lock", scale: 3.2}) &
      object.drawing.push({type: "bitmap", x: 830, y: 220, bitmap: "lock", scale: 3.2}) &
      object.drawing.push({type: "bitmap", x: 830, y: 125, bitmap: "lock", scale: 3.2}));

  const GUI = new UI.StandartWindow(object);

  ICore.Machine.registerPrototype(BlockID[id], {
    getGuiScreen: function(){
      return GUI;
    },
    defaultValues: {
      isActive: false
    },
    getEnergyStorage: function(){
      return sto;
    },
    energyTick: function(type, src){
      this.data.energy += src.storage(Math.min(tra*4, this.getEnergyStorage()-this.data.energy), Math.min(tra, this.data.energy));
    },
    tick: function(){
      this.container.setScale("bar", this.data.energy/sto);-
      this.container.setText("text1", "EU    : "+this.data.energy);

      this.data.energy += ChargeItemRegistry.getEnergyFrom(
        this.container.getSlot("slotBat"),
        Math.min(tra, this.getEnergyStorage()-this.data.energy), lev);

      let ocount = 0;
      for(let i = 3; i--;){
        this.container.getSlot("slotUpg"+i).id == ItemID.upgradeOverclocker && (ocount++);
      }

      const field = this.container.getSlot("slotUpg3");
      const projector = this.container.getSlot("slotUpg4");

      const pos = Player.getPosition();
      const distance = Math.hypot(this.x-pos.x+.5, this.z-pos.z+.5);

      if(this.data.isActive){
        let i = 0;
        let slot, s, min, max, item, data, add;
        out: for(let j=5; j--;){
          i = field.id == ID("arm") ? 4-j : j;
          slot = Player.getSelectedSlotId();
          i != 4 ? 
            (min = max = 1) :
            projector.id == ID("boo1") ?
              (min = 9, max = 44) :
              projector.id == ID("boo") ?
                (min = slot == 0 ? 0 : slot-1, max = slot == 8 ? 8 : slot+1) :
                (min = max = slot);
          for(let s = min; s <= max; s++){
            item = i == 4 ?
              Player.getInventorySlot(s) :
              Player.getArmorSlot(i);
            data = ChargeItemRegistry.getItemData(item.id) || false; 
            if(data && data.level <= lev){
              if(field.id == ID("dra")){
                if(item.data < Item.getMaxDamage(item.id)){
                  add = Math.min(tra*Math.pow(1.5, ocount)|0, Item.getMaxDamage(item.id)-item.data);
                  sto-this.data.energy >= add &&
                    particleLine(10,
                      {x: this.x+.5, y: this.y+1, z: this.z+.5},
                      {x: pos.x, y: pos.y-1, z: pos.z}
                    ) &
                    (this.data.energy += add) & (
                    i == 4 ?
                      Player.setInventorySlot(s, item.id, 1, item.data+add) :
                      Player.setArmorSlot(i, item.id, 1, item.data+add));
                  break out;
                }
              }
              else{
                if(item.data > 1){
                  add = Math.min(tra*Math.pow(1.5, ocount)|0, item.data-1);
                  this.data.energy >= add &&
                    particleLine(33,
                      {x: this.x+.5, y: this.y+1, z: this.z+.5},
                      {x: pos.x, y: pos.y-1, z: pos.z}
                    ) &
                    (this.data.energy -= add) & (
                    i == 4 ?
                      Player.setInventorySlot(s, item.id, 1, item.data-add) :
                      Player.setArmorSlot(i, item.id, 1, item.data-add));
                  break out;
                }
              }
            }
          }
        }
        (distance > (
          projector.id == ID("fie2") ? 7 :
          projector.id == ID("fie1") ? 5 :
          projector.id == ID("fie") ? 3 : 1) ||
        this.y+2 != (pos.y|0)) && this.deactivate();
      }
      else{
        distance < 1 && this.y+2 == (pos.y|0) && this.activate();
      }

    },
    activate: ICore.Machine.activateMachine,
    deactivate: ICore.Machine.deactivateMachine
  });

Recipes.addShaped({id: BlockID[id]}, ["aba", "cdc"], ["a", ItemID.rubber, 0, "b", 70, 0, "c", ItemID.circuitBasic, 0, "d", BlockID["storage"+nam], 0]);

};

regChargepad("LVPad", "BatBox", [["batbox_bottom", 0], 0, ["batbox_side", 0]], 4e4, 32, 0);
regChargepad("MVPad", "CESU", [["cesu_back", 0], 2, ["cesu_side", 0]], 3e5, 256, 1);
regChargepad("HVPad", "MFE", [["mfe", 2], 4, ["mfe", 1]], 4e6, 2048, 2);
regChargepad("EVPad", "MFSU", [["mfsu", 3], 6, ["mfsu", 1]], 4e7, 8192, 3);




// file: upg.js

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




