let SAVE;
Saver.addSavesScope("FluidTankScope",
  function read(scope){
    SAVE = JSON.parse(JSON.stringify(scope));
  },
  function save(){
    return SAVE;
  }
);

IDRegistry.genBlockID("fluidTank");
Block.createBlock("fluidTank", [{name: "Fluid Tank", texture: [["fluidTank", 0], ["fluidTank", 0], ["fluidTank", 1]]}]);
ToolAPI.registerBlockMaterial(BlockID.fluidTank, "wood");

IDRegistry.genItemID("fluidTank");
Item.createItem("fluidTank", "Fluid Tank", {name: "fluidTank"}, {stack: 1});

Block.registerDropFunction("fluidTank", function(){
  return [];
});

Item.registerNameOverrideFunction(ItemID.fluidTank, function(item, name){
  if(item.data){
    const info = SAVE[item.data];
    return name+"\n"+LiquidRegistry.getLiquidName(info.fluid)+": "+info.amount;
  }
  return name;
});

Item.registerUseFunction("fluidTank", function(c, item){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.fluidTank);
    World.addTileEntity(c.x, c.y, c.z);
    Player.setCarriedItem(0);
    if(item.data){
      const tile = World.getTileEntity(c.x, c.y, c.z).liquidStorage;
      tile.addLiquid(SAVE[item.data].fluid, SAVE[item.data].amount);
      delete SAVE[item.data];
    }
  }
});

const GUI = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Fluid Tank"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [

  ],
  elements: {
    "slot0": {type: "slot", x: 450, y: 100, bitmap: "slot_in"},
    "slot1": {type: "slot", x: 450, y: 180, bitmap: "slot_out"},
    "text0": {type: "text", x: 600, y: 120, width: 40, height: 10, font: {size: 32}},
    "text1": {type: "text", x: 600, y: 180, width: 40, height: 10, font: {size: 32}},
  }
});

TileEntity.registerPrototype(BlockID.fluidTank, {
  getGuiScreen: function(){
    const item = Player.getCarriedItem();
    const stored = this.liquidStorage.getLiquidStored();
    const liq = LiquidRegistry.getItemLiquid(item.id, item.data);
    const full = LiquidRegistry.getFullItem(item.id, item.data, stored);
    Game.prevent();
    if(liq && (!stored || stored == liq)){
      const empty = LiquidRegistry.getEmptyItem(item.id, item.data);
      Player.decreaseCarriedItem();
      Player.addItemToInventory(empty.id, 1, empty.data);
      this.liquidStorage.addLiquid(liq, 1);
      return;
    }
    if(full){
      Player.decreaseCarriedItem();
      Player.addItemToInventory(full.id, 1, full.data);
      this.liquidStorage.getLiquid(stored, 1);
      return;
    }
    return GUI;
  },
  tick: function(){
    const s0 = this.container.getSlot("slot0");
    const s1 = this.container.getSlot("slot1");
    const stored = this.liquidStorage.getLiquidStored();
    this.container.setText("text0", stored?LiquidRegistry.getLiquidName(stored):"Empty");
    this.container.setText("text1", this.liquidStorage.getAmount(stored));
    if(s0.id && s1.count < Item.getMaxStack(s1.id) || 64){
      const liq = LiquidRegistry.getItemLiquid(s0.id, s0.data);
      const full = LiquidRegistry.getFullItem(s0.id, s0.data, stored);
      if(liq){
        const empty = LiquidRegistry.getEmptyItem(s0.id, s0.data);
        if((!stored || stored == liq) && (!s1.id || s1.id == empty.id && s1.data == empty.data)){
          s0.count--;
          this.container.validateSlot("slot0");
          s1.id = empty.id;
          s1.data = empty.data;
          s1.count++;
          this.liquidStorage.addLiquid(liq, 1);
        }
      }
      else if(full){
        if(!s1.id || s1.id == full.id && s1.data == full.data){
          s0.count--;
          this.container.validateSlot("slot0");
          s1.id = full.id;
          s1.data = full.data;
          s1.count++;
          this.liquidStorage.getLiquid(stored, 1);
        }
      }
    }
  },
  destroy: function(){
    const stored = this.liquidStorage.getLiquidStored();
    if(stored){
      let i = 0;
      while(++i in SAVE);
      SAVE[i] = {fluid: stored, amount: this.liquidStorage.getAmount(stored)};
      World.drop(this.x+.5, this.y, this.z+.5, ItemID.fluidTank, 1, i);
    }
    else World.drop(this.x+.5, this.y, this.z+.5, ItemID.fluidTank, 1);
  }
});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.fluidTank}, ["aaa", "aoa", "aaa"], ["a", 17, -1]);
  Recipes.addShaped({id: ItemID.fluidTank}, ["aaa", "aoa", "aaa"], ["a", 162, -1]);
});