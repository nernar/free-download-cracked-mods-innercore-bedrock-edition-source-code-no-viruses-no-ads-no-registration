IDRegistry.genBlockID("mutatron");
Block.createBlock("mutatron", [{name: "Mutatron", texture: [["gdmachine", 0], ["mutatron", 0], ["mutatron", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mutatron, "stone");
ICRender.getGroup("rf-wire").add(BlockID.mutatron, -1); 

TileEntity.registerPrototype(BlockID.mutatron, {
  defaultValues: {
    energy: 0,
    progress: 0
  },
  energyTick: function(type, src){
    this.data.energy += src.get(1e6-this.data.energy);
  },
  getGuiScreen: function(){
    const full = Player.getCarriedItem();
    if(LiquidRegistry.getItemLiquid(full.id, full.data) == "mutagen"){
      if(this.liquidStorage.getAmount("mutagen") <= 9){
        const empty = LiquidRegistry.getEmptyItem(full.id, full.data);
        this.liquidStorage.addLiquid("mutagen", 1);
        Player.decreaseCarriedItem();
        Player.addItemToInventory(empty.id, 1, empty.data);
      }
    }
    else return mutatronGUI;
  },
  getTransportSlots: function(){
    return {output: ["slotQueen"]};
  },
  init: function(){
    this.liquidStorage.setLimit(null, 10);
  },
  tick: function(){
    const labware = this.container.getSlot("slotLabware");
    const queen = this.container.getSlot("slotQueen");
    if(labware.id == ItemID.labware && !queen.id){
      if(this.liquidStorage.getAmount("mutagen") >= 1){
        const slot1 = this.container.getSlot("slot1");
        const slot2 = this.container.getSlot("slot2");
        const type1 = !FAPI.BeeRegistry.getBeeTypeByID(slot1.id)?FAPI.BeeRegistry.getTypeByID(slot1.id):0;
        const type2 = FAPI.BeeRegistry.getBeeTypeByID(slot2.id)==1?FAPI.BeeRegistry.getTypeByID(slot2.id):0;
        const com= FAPI.BeeRegistry.getMutations(type1, type2);
        const len = com.length;
        if(len && this.data.energy >= 200){
          this.data.energy -= 200;
          this.data.progress++;
          if(this.data.progress >= 100){
            labware.count--;
            this.container.validateSlot("slotLabware");
            slot1.id = slot1.count = 0;
            slot2.id = slot2.count = 0;
            this.liquidStorage.getLiquid("mutagen", 1);
            const i = FAPI.Util.random(0, len);
            queen.id = FAPI.BeeRegistry.getQueenByType(com[i].result);
            queen.count = 1;
            this.data.progress = 0;
          }
        }
      }
    }
    this.container.setScale("energy", this.data.energy/1e6);
    this.container.setScale("progress", this.data.progress/100);
    this.liquidStorage.updateUiScale("liquid", "mutagen");
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.mutatron, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.mutatron},
    ["abc", "dea", "afc"], [
    "a", ItemID.beeReceptacle, 0,
    "b", ItemID.genProcessor, 0,
    "c", ItemID.ingotBronze, 0,
    "d", ItemID.powModule, 0,
    "e", ItemID.sturdyMachine, 0,
    "f", ItemID.mutagenTank, 0
  ]);
});