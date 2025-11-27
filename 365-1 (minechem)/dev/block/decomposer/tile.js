IDRegistry.genBlockID("decomposer");
Block.createBlock("decomposer", [
  {name: "tile.decomposer", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.decomposer, "stone");
Block.setDestroyTime(BlockID.decomposer, 5);

IDRegistry.genItemID("decomposer");
Item.createItem("decomposer", "Chemical Decomposer", {name: "decomposer"});
Item.registerUseFunction("decomposer", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.decomposer);
    World.addTileEntity(c.x, c.y, c.z);
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("decomposer", function(){
  return [[ItemID.decomposer, 1]];
});

Machine.registerGUI("decomposer", "Chemical Decomposer", {
  drawing: [
    {type: "bitmap", x: 450, y: 120, bitmap: "chem_tank", scale: 3.2},
    {type: "bitmap", x: 636, y: 230, bitmap: "chem_triangle_down", scale: 3.2},
  ],
  elements: {
    scaleLiquid: {type: "scale", x: 456, y: 126, bitmap: "chem_line", overlay: "chem_line", direction: 1, scale: 3.2},
    buttonDump: {type: "button", x: 456, y: 70, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2.4, clicker: {
      onClick: function(con, tile){
        for(let key in tile.liquidStorage.liquidAmounts){
          delete tile.liquidStorage.liquidAmounts[key];
        }
      }
    }},
    slotInput: {type: "slot", x: 390, y: 130, size: 40},
    slotOutput: {type: "slot", x: 390, y: 200, size: 40, isValid: Machine.validResult},
    slotSource: {type: "slot", x: 630, y: 150, isValid: function(id, count, data){
      return !!Decomposer.getRecipe(id, data);
    }},
    buttonOutput: {type: "button", x: 390, y: 400, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: Machine.output},
    textEnergy: {type: "text", x: 990, y: 40, font: {align: 2}}
  }
}, true, Machine.validResult);

TileEntity.registerPrototype(BlockID.decomposer, {
  defaultValues: {
    energy: 0,
    items: ""
  },
  anim: null,
  init: function(){
    const Data = this.data;
    this.anim && this.anim.destroy() & (this.anim = null);
    this.anim = new Animation.Base(this.x, this.y, this.z);
    this.anim.loadCustom(function(){
      const render = new Render();
      const parts = [
        {uv: {x: 64, y: 14}, coords: {x: -4, y: 12, z: 7}, size: {x: 8, y: 8, z: 1}},  //backface
        {uv: {x: 64, y: 23}, coords: {x: -4, y: 12, z: -8}, size: {x: 8, y: 8, z: 1}},  //frontface
        {uv: {x: 64, y: 48}, coords: {x: -8, y: 12, z: -4}, size: {x: 1, y: 8, z: 8}},  //leftface
        {uv: {x: 64, y: 32}, coords: {x: 7, y: 12, z: -4}, size: {x: 1, y: 8, z: 8}},  //rightface
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col1
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 14, z: -6}, size: {x: 3, y: 9, z: 3}},  //col2
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col3
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: -6}, size: {x: 3, y: 9, z: 3}},  //col4
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col5
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 12, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col6
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col7
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 13, z: -6}, size: {x: 3, y: 9, z: 3}},  //col8
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 13, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col9
        {uv: {x: 0, y: 47}, coords: {x: -8, y: 23, z: -8}, size: {x: 16, y: 1, z: 16}},  //base
        {uv: {x: 0, y: 31}, coords: {x: -7, y: 15, z: -7}, size: {x: 14, y: 2, z: 14}},  //middlebase
        {uv: {x: 24, y: 22}, coords: {x: -4, y: 8, z: -4}, size: {x: 8, y: 1, z: 8}},  //topface
        {uv: {x: 0, y: 22}, coords: {x: -3, y: 9, z: -3}, size: {x: 6, y: 2, z: 6}},  //Shape7
        {uv: {x: 0, y: 12}, coords: {x: -1, y: 11, z: -1}, size: {x: 2, y: 3, z: 2}},  //Shape8
        {uv: {x: 12, y: 0}, coords: {x: -0.5, y: 12, z: -3}, size: {x: 1, y: 1, z: 6}},  //windmillspoke1
        {uv: {x: 12, y: 7}, coords: {x: -3, y: 12, z: -0.5}, size: {x: 6, y: 1, z: 1}},  //windmillspoke2
        {uv: {x: 12, y: 9}, coords: {x: -2, y: 11.5, z: 3}, size: {x: 4, y: 2, z: 2}},  //windmillbox1
        {uv: {x: 12, y: 9}, coords: {x: -2, y: 11.5, z: -5}, size: {x: 4, y: 2, z: 2}},  //windmillbox2
        {uv: {x: 12, y: 13}, coords: {x: 3, y: 11.5, z: -2}, size: {x: 2, y: 2, z: 4}},  //windmillbox3
        {uv: {x: 12, y: 13}, coords: {x: -5, y: 11.5, z: -2}, size: {x: 2, y: 2, z: 4}}  //windmillbox4
      ];
      Machine.translateModel(parts);
      render.setPart("body", parts, {width: 128, height: 64});
      this.describe({skin: "model/decomposer_" + (Data.items ? 1 : 0) + ".png", render: render.getID()});
      this.refresh();
    });
    this.liquidStorage.setLimit(null, 5);
  },
  destroy: function(){
    if(this.anim){
      this.anim.destroy();
      this.anim = null;
    }
  },
  getGuiScreen: function(){
    return Machine.gui.decomposer;
  },
  getTransportSlots: function(){
    const slots = [];
    for(let i = 0; i < 18; i++){
      slots.push("slot" + i);
    }
    return {input: ["slotSource"], output: slots};
  },
  getEnergyStorage: function(){
    return 10000;
  },
  energyTick: Machine.energyTick,
  canAddLiquid: function(item){
    const output = this.container.getSlot("slotOutput");
    if(!output.id || output.id == item.id && output.data == item.data && output.count < Item.getMaxStack(item.id)){
      output.id = item.id;
      output.data = item.data;
      output.count++;
      return true;
    }
    return false;
  },
  tick: function(){

    const input = this.container.getSlot("slotInput");
    const inside = LiquidRegistry.getItemLiquid(input.id, input.data);
    let liquid = this.liquidStorage.getLiquidStored();

    if(inside){
      if((!liquid || liquid == inside && this.liquidStorage.getAmount(inside) + 1 <= this.liquidStorage.getLimit(inside)) && this.canAddLiquid(LiquidRegistry.getEmptyItem(input.id, input.data))){
        input.count--;
        this.container.validateSlot("slotInput");
        this.liquidStorage.addLiquid(inside, 1);
      }
    }
    else{
      const full = LiquidRegistry.getFullItem(input.id, input.data, liquid);
      if(full && this.liquidStorage.getAmount(liquid) >= 1 && this.canAddLiquid(full)){
        input.count--;
        this.container.validateSlot("slotInput");
        this.liquidStorage.getLiquid(liquid, 1);
      }
    }

    liquid = this.liquidStorage.getLiquidStored();

    if(this.data.items){
      const array = this.data.items.split(",");
      let i = j = 0;
      let slot;
      label:
      for(i = 0; i < array.length; i++){
      for(j = 0; j < 18; j++){
        slot = this.container.getSlot("slot" + j);
        if(!slot.id || slot.id == array[i] && slot.count < Item.getMaxStack(array[i])){
          this.container.setSlot("slot" + j, array[i], slot.count + 1, 0);
          array.shift();
          this.data.items = array.join(",");
          break label;
        }
      }
      }
    }
    else if(this.data.energy >= 1000){
      const source = this.container.getSlot("slotSource");
      let result = Decomposer.getRecipe(source.id, source.data);
      if(result){
        this.data.items = result().join(",");
        this.data.energy -= 1000;
        source.count--;
        this.container.validateSlot("slotSource");
      }
      else{
        result = Decomposer.getRecipeLiquid(liquid);
        if(result && this.liquidStorage.getAmount(liquid) >= result.amount){
          this.data.items = result.func().join(",");
          this.data.energy -= 1000;
          this.liquidStorage.getLiquid(liquid, result.amount);
        }
      }
    }

    if(this.container.isOpened()){
      this.liquidStorage.updateUiScale("scaleLiquid", liquid);
      this.container.setText("textEnergy", this.data.energy + " RF");
    }

  }
});