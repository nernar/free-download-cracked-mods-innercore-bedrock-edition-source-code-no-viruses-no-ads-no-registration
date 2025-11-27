IDRegistry.genBlockID("synthesiser");
Block.createBlock("synthesiser", [
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.synthesiser, "stone");
Block.setDestroyTime(BlockID.synthesiser, 5);

(function(){
  let mesh, model, render;
  for(let i = 4; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture("synthesiser", 0);
    mesh.importFromFile(__dir__ + "res/model/synthesiser_" + i + ".obj", "obj", null);
    model = new BlockRenderer.Model(mesh);
    render = new ICRender.Model();
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.synthesiser, i, render);
  }
})();

IDRegistry.genItemID("synthesiser");
Item.createItem("synthesiser", "Chemical Synthesiser", {name: "synthesiser"});
Item.registerUseFunction("synthesiser", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.synthesiser, Machine.getRotation());
    World.addTileEntity(c.x, c.y, c.z);
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("synthesiser", function(){
  return [[ItemID.synthesiser, 1]];
});


Machine.registerGUI("synthesiser", "Chemical Synthesiser", {
  drawing: [
    {type: "bitmap", x: 636, y: 230, bitmap: "chem_triangle_up", scale: 3.2},
    {type: "bitmap", x: 530, y: 106, bitmap: "chem_triangle_right", scale: 3.2},
    {type: "bitmap", x: 770, y: 106, bitmap: "chem_triangle_right", scale: 3.2}
  ],
  elements: {
    slotJournal: {type: "slot", x: 450, y: 100, bitmap: "slot_journal", isValid: function(id){
      return id == ItemID.chemist_journal;
    }},
    slotPattern0: {type: "slot", x: 570, y: 40, isValid: Synthesiser.validPattern(0), clicker: Synthesiser.clearSlot(0)},
    slotPattern1: {type: "slot", x: 630, y: 40, isValid: Synthesiser.validPattern(1), clicker: Synthesiser.clearSlot(1)},
    slotPattern2: {type: "slot", x: 690, y: 40, isValid: Synthesiser.validPattern(2), clicker: Synthesiser.clearSlot(2)},
    slotPattern3: {type: "slot", x: 570, y: 100, isValid: Synthesiser.validPattern(3), clicker: Synthesiser.clearSlot(3)},
    slotPattern4: {type: "slot", x: 630, y: 100, isValid: Synthesiser.validPattern(4), clicker: Synthesiser.clearSlot(4)},
    slotPattern5: {type: "slot", x: 690, y: 100, isValid: Synthesiser.validPattern(5), clicker: Synthesiser.clearSlot(5)},
    slotPattern6: {type: "slot", x: 570, y: 160, isValid: Synthesiser.validPattern(6), clicker: Synthesiser.clearSlot(6)},
    slotPattern7: {type: "slot", x: 630, y: 160, isValid: Synthesiser.validPattern(7), clicker: Synthesiser.clearSlot(7)},
    slotPattern8: {type: "slot", x: 690, y: 160, isValid: Synthesiser.validPattern(8), clicker: Synthesiser.clearSlot(8)},
    slotResult: {type: "slot", x: 810, y: 100, isValid: Machine.validResult, clicker: {onClick: Synthesiser.craftSlot(), onLongClick: Synthesiser.craftSlot(true)}},
    buttonInput: {type: "button", x: 390, y: 400, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 1.6, clicker: Machine.input},
    buttonOutput: {type: "button", x: 390, y: 440, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: Machine.output},
    textEnergy: {type: "text", x: 990, y: 40, font: {align: 2}}
  }
}, true);


TileEntity.registerPrototype(BlockID.synthesiser, {
  defaultValues: {
    energy: 0
  },
  meta: 0,
  anim: null,
  timer: 0,
  armX: -6,
  armY: 13,
  cost: 0,
  init: function(){
    this.meta = World.getBlock(this.x, this.y, this.z).data;
    delete this.liquidStorage;
    const Data = this;
    this.anim && this.anim.destroy() & (this.anim = null);
    this.anim = new Animation.Base(this.x, this.y, this.z);
    this.anim.loadCustom(function(){
      switch(true){
        case Data.timer <= 20: Data.armY = Machine.armPosition(Data.timer, 00, 20, 13, 11.2); break;
        case Data.timer <= 80: Data.armX = Machine.armPosition(Data.timer, 20, 80, -6, -1.5); break;
        case Data.timer <= 100: Data.armY = Machine.armPosition(Data.timer, 80, 100, 11.2, 13); break;
        case Data.timer <= 120: Data.armY = Machine.armPosition(Data.timer, 100, 120, 13, 11.2); break;
        case Data.timer <= 180: Data.armX = Machine.armPosition(Data.timer, 120, 180, -1.5, 3); break;
        case Data.timer <= 200: Data.armY = Machine.armPosition(Data.timer, 180, 200, 11.2, 13); break;
        case Data.timer <= 220: Data.armY = Machine.armPosition(Data.timer, 200, 220, 13, 11.2); break;
        case Data.timer <= 280: Data.armX = Machine.armPosition(Data.timer, 220, 280, 3, -1.5); break;
        case Data.timer <= 300: Data.armY = Machine.armPosition(Data.timer, 280, 300, 11.2, 13); break;
        case Data.timer <= 320: Data.armY = Machine.armPosition(Data.timer, 300, 320, 13, 11.2); break;
        case Data.timer <= 380: Data.armX = Machine.armPosition(Data.timer, 320, 380, -1.5, -6); break;
        case Data.timer <= 400: Data.armY = Machine.armPosition(Data.timer, 380, 400, 11.2, 13); break;
        default: Data.timer = 0;
      }
      const render = new Render();
      const parts = [
        {uv: {x: Data.meta * 32, y: 0}, coords: {x: Data.armX, y: 11, z: -8}, size: {x: 3, y: 2, z: 13}},
        {uv: {x: 0, y: 15}, coords: {x: Data.armX + 1, y: Data.armY, z: -5}, size: {x: 1, y: 8, z: 1}}
      ];
      Machine.translateModel(parts, Data.meta);
      render.setPart("body", parts, {width: 128, height: 24});
      this.describe({skin: "model/synthesiser_arm.png", render: render.getID()});
      this.refresh();
    });
  },
  destroy: function(){
    for(let i = 9; i--;){
      this.container.clearSlot("slotPattern" + i);
    }
    this.container.clearSlot("slotResult");
    if(this.anim){
      this.anim.destroy();
      this.anim = null;
    }
  },
  getGuiScreen: function(){
    return Machine.gui.synthesiser;
  },
  getTransportSlots: function(){
    const slots = [];
    for(let i = 0; i < 18; i++){
      slots.push("slot" + i);
    }
    return {input: slots, output: []};
  },
  getEnergyStorage: function(){
    return 100000;
  },
  energyTick: Machine.energyTick,
  tick: function(){
    if(this.container.isOpened()){
      let pattern;
      let i = 0;
      const journal = this.container.getSlot("slotJournal");
      if(journal.id == ItemID.chemist_journal && journal.extra){
        pattern = Synthesiser.decodePattern(journal.extra.getString("pattern") + "");
        for(i = 0; i < 9; i++){
          pattern[i] ?
            this.container.setSlot("slotPattern" + i, pattern[i][0], pattern[i][1], 0) :
            this.container.clearSlot("slotPattern" + i);
        }
      }
      pattern = [];
      let slot;
      for(i = 0; i < 9; i++){
        slot = this.container.getSlot("slotPattern" + i);
        pattern.push([slot.id, slot.count]);
      }
      const result = Synthesiser.getRecipe(pattern);
      if(result){
        this.container.setSlot("slotResult", result.id, result.count, result.data);
        this.cost = result.cost;
      }
      else{
        this.container.clearSlot("slotResult");
        this.cost = 0;
      }
      this.container.setText("textEnergy", this.data.energy + " RF");
    }
    if(this.cost){
      this.timer += Math.min(1 + this.cost / 1000, 10);
    }
  }
});