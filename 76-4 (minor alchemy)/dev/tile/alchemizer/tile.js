IDRegistry.genBlockID("alchemizer");
Block.createBlock("alchemizer", [{name: "Alchemizer", texture: [["obsidian", 0], ["alchemizerTop", 0], ["alchemizerSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.alchemizer, "stone");
Block.setDestroyTime(BlockID.alchemizer, 5);
Recipes.addShaped({id: BlockID.alchemizer}, ["aba", "cdc", "eee"], ["a", 266, 0, "b", 325, 10, "c", 264, 0, "d", 58, 0, "e", 49, 0]);

Callback.addCallback("ItemUse", function(c, item, block){
  block.id == BlockID.alchemizer && !Entity.getSneaking(Player.get()) &&
    Game.prevent() &
    guiAlc.con.openAs(guiAlc.win);
});

Callback.addCallback("tick", function(){
  const content = guiAlc.con.getGuiContent();
  if(content){
    const res = guiAlc.con.getSlot("slotResult");
    const rep = guiAlc.con.getSlot("slotReplica");
    const aec = guiAlc.con.getSlot("slotAEC");
    const sam = guiAlc.con.getSlot("slotSample");
    const req = getCV(sam);

    let add = 0;
    let slot;
    let str = "";
    for(let i = 0; i < 16; i++){
      slot = guiAlc.con.getSlot("slot" + i);
      add += getCV(slot);
      str += [0, 280, ItemID.aec].indexOf(slot.id);
    }

    add ?
      Shaped[str] ?
        (res.id = Shaped[str], res.data = 0, res.count = 1) :
        (res.id = ItemID.aec, res.count = 1, res.data = Math.min(28, add / 0x90000 | 0), res.extra = new ItemExtraData()) &
        res.extra.putInt("cv", add) :
      allClear(res);

    aec.id == ItemID.aec && req && req <= aec.extra.getInt("cv") ?
      (rep.id = sam.id, rep.count = sam.count, rep.data = sam.data, rep.extra = sam.extra ? sam.extra.copy() : 0) :
      allClear(rep);

    textCV(res.extra, content.elements.textResult);
    textCV(aec.extra, content.elements.textAEC);
    guiAlc.con.setText("textNeed", "Need: " + req);

  }
});

guiAlc.con.setOnCloseListener({
  onClose: function(){
    for(let i = 16; i--;){
      returnSlot(guiAlc.con, "slot" + i);
    }
    returnSlot(guiAlc.con, "slotAEC");
    returnSlot(guiAlc.con, "slotSample");
    allClear(guiAlc.con.getSlot("slotResult"));
    allClear(guiAlc.con.getSlot("slotReplica"));
  }
});