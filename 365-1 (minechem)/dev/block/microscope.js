IDRegistry.genBlockID("microscope");
Block.createBlock("microscope", [
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.microscope, "stone");
Block.setDestroyTime(BlockID.microscope, 5);

(function(){
  let mesh, model, render;
  for(let i = 4; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture("microscope", 0);
    mesh.importFromFile(__dir__ + "res/model/microscope_" + i + ".obj", "obj", null);
    model = new BlockRenderer.Model(mesh);
    render = new ICRender.Model();
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.microscope, i, render);
  }
})();

IDRegistry.genItemID("microscope");
Item.createItem("microscope", "Microscope", {name: "microscope"});
Item.registerUseFunction("microscope", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.microscope, Machine.getRotation());
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("microscope", function(){
  return [[ItemID.microscope, 1]];
});



Machine.registerGUI("microscope", "Microscope", {
  drawing: [
    {type: "bitmap", x: 586, y: 280, bitmap: "chem_triangle_down", scale: 3.2}
  ],
  elements: {
    window: {type: "image", x: 400, y: 80, z: 1, bitmap: "chem_window", scale: 3.4},
    slotSample: {type: "slot", x: 400, y: 80, bitmap: "chem_back", size: 180, isValid: Microscope.validSample, clicker: Microscope.clearSample},
    slot0: {type: "slot", x: 640, y: 80, visual: true, clicker: Microscope.slotInfo(0)},
    slot1: {type: "slot", x: 700, y: 80, visual: true, clicker: Microscope.slotInfo(1)},
    slot2: {type: "slot", x: 760, y: 80, visual: true, clicker: Microscope.slotInfo(2)},
    slot3: {type: "slot", x: 640, y: 140, visual: true, clicker: Microscope.slotInfo(3)},
    slot4: {type: "slot", x: 700, y: 140, visual: true, clicker: Microscope.slotInfo(4)},
    slot5: {type: "slot", x: 760, y: 140, visual: true, clicker: Microscope.slotInfo(5)},
    slot6: {type: "slot", x: 640, y: 200, visual: true, clicker: Microscope.slotInfo(6)},
    slot7: {type: "slot", x: 700, y: 200, visual: true, clicker: Microscope.slotInfo(7)},
    slot8: {type: "slot", x: 760, y: 200, visual: true, clicker: Microscope.slotInfo(8)},
    slotJournal: {type: "slot", x: 580, y: 320, bitmap: "slot_journal", isValid: function(id){
      return id == ItemID.chemist_journal;
    }}
  }
});


Callback.addCallback("ItemUse", function(c, item, block){
  if(block.id == BlockID.microscope && !Entity.getSneaking(Player.get())){
    Game.prevent();
    Microscope.container.openAs(Machine.gui.microscope);
    Microscope.container.getGuiContent().elements.slotSample.visual = false;
  }
});


Microscope.container.setOnCloseListener({
  onClose: function(con){
    const pos = Player.getPosition();
    for(let i = 9; i--;){
      con.clearSlot("slot" + i);
    }
    con.clearSlot("slotSample");
    con.dropSlot("slotJournal", pos.x, pos.y, pos.z);
    con.getSlot("slotJournal").extra = null;
  }
});