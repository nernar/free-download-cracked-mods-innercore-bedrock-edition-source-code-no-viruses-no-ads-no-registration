IDRegistry.genBlockID("producer");
Block.createBlock("producer", [{name: "Mutagen Producer", texture: [["gdmachine", 0], ["producer", 0], ["producer", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.producer, "stone");
ICRender.getGroup("rf-wire").add(BlockID.producer, -1);

const rec = {
  331: .1,
  152: .9,
  348: .2,
  89: .8,
};
rec[ItemID.uraniumChunk] = .5;
rec[BlockID.blockUranium] = 4.5;

TileEntity.registerPrototype(BlockID.producer, {
  defaultValues: {
    energy: 0,
    progress: 0
  },
  energyTick: function(type, src){
    this.data.energy += src.get(5e6-this.data.energy);
  },
  getGuiScreen: function(){
    const empty = Player.getCarriedItem();
    if(empty.id == 325 && !empty.data || empty.id == ItemID.canEmpty){
      if(this.liquidStorage.getAmount("mutagen") >= 1){
        const full = LiquidRegistry.getFullItem(empty.id, empty.data, "mutagen");
        this.liquidStorage.getLiquid("mutagen", 1);
        Player.decreaseCarriedItem();
        Player.addItemToInventory(full.id, 1, full.data);
      }
    }
    else return producerGUI;
  },
  getTransportSlots: function(){
    return {input: ["slot"]};
  },
  init: function(){
    this.liquidStorage.setLimit(null, 10);
  },
  tick: function(){
    const slot = this.container.getSlot("slot");
    const result = rec[slot.id];
    if(result && this.data.energy >= 500){
      this.data.energy -= 500;
      this.data.progress++;
      if(this.data.progress >= 2e3 && this.liquidStorage.getAmount("mutagen")+result <= 10){
        slot.count--;
        this.container.validateSlot("slot");
        this.liquidStorage.addLiquid("mutagen", result);
        this.data.progress = 0;
      }
    }
    else this.data.progress = 0;
    this.container.setScale("energy", this.data.energy/5e6);
    this.container.setScale("progress", this.data.progress/2e3);
    this.liquidStorage.updateUiScale("liquid", "mutagen");
  }
});

EnergyTileRegistry.addEnergyTypeForId(BlockID.producer, RF);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.producer},
    ["aba", "cdc", "efe"], [
    "a", ItemID.ingotBronze, 0,
    "b", 410, 0,
    "c", ItemID.powModule, 0,
    "d", ItemID.sturdyMachine, 0,
    "e", ItemID.gearBronze, 0,
    "f", ItemID.mutagenTank, 0
  ]);
});