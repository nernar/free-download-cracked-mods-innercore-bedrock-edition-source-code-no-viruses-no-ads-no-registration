IDRegistry.genBlockID("rejuvenator");
Block.createBlock("rejuvenator", [{name: "Alchemy Rejuvenator", texture: [["anvil_base", 0], ["rejuvenatorTop", 0], ["rejuvenatorSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rejuvenator, "stone");
Block.setDestroyTime(BlockID.rejuvenator, 5);
Recipes.addShaped({id: BlockID.rejuvenator}, ["aba", "cdc", "eee"], ["a", 264, 0, "b", 116, 0, "c", 49, 0, "d", 145, 0, "e", 42, 0]);

Callback.addCallback("ItemUse", function(c, item, block){
  block.id == BlockID.rejuvenator && !Entity.getSneaking(Player.get()) &&
    Game.prevent() &
    guiRej.con.openAs(guiRej.win);
});

Callback.addCallback("tick", function(){
  const content = guiRej.con.getGuiContent();
  if(content){
    const res = guiRej.con.getSlot("slotResult");
    const enc = guiRej.con.getSlot("slotEnchant");
    const aec = guiRej.con.getSlot("slotAEC");
    const old = guiRej.con.getSlot("slotOld");
    const nak = guiRej.con.getSlot("slotNaked");
    const scr = guiRej.con.getSlot("slotScroll");
    let data;
    let cv = req1 = req2 = lev = 0;
    if(aec.id == ItemID.aec){
      cv = aec.extra.getInt("cv");
      CV[old.id] && CV[old.id].type && old.data &&
        (req1 = CV[old.id].cv * old.data / Item.getMaxDamage(old.id));
      ToolList[old.id] && Tool.getDur(old) &&
        (req1 = Tool.getCV(old) * Tool.getDur(old) / Tool.getMax(old));
      req1 = req1 * 0.7 | 0;
      if(CV[nak.id] && CV[nak.id].type && scr.id == ItemID.encScroll){
        const IDs = nak.extra ? nak.extra.getEnchants() : {};
        data = ENC[scr.data];
        let mask1 = 0;
        for(let i = data.target.length; i--;){
          mask1 |= guiRej.Flags[data.target[i]];
        }
        let mask2 = 0;
        for(let i = data.conflict.length; i--;){
          mask2 |= 1 << data.conflict[i];
        }
        let tool = 0;
        for(let key in IDs){
          tool |= 1 << key;
        }
        if(guiRej.Flags[CV[nak.id].type] & mask1 && !(tool & mask2)){
          lev = data.nonlvl ? 1 : 10;
          while(cv < 30000 / data.weight * Math.pow(3, lev / 3)){
            if(!--lev){
              break;
            }
          }
          lev && (req2 = 30000 / data.weight * Math.pow(3, lev / 3) | 0);
        }
      }
      req1 && cv >= req1?
        (res.id = old.id, res.count = 1) &
        (old.extra && (res.extra = old.extra.copy())) &
        (ToolList[old.id] && res.extra.putInt("dur", 0) & (res.data = old.data)) :
        allClear(res);
      req2 ?
        (enc.id = nak.id, enc.count = 1, enc.data = nak.data, enc.extra = nak.extra ? nak.extra.copy() : new ItemExtraData()) &
        enc.extra.addEnchant(scr.data, lev) :
        allClear(enc);
    }
    else{
      allClear(res);
      allClear(enc);
    }
    textCV(aec.extra, content.elements.textAEC);
    guiRej.con.setText("textNeed1", "Repair: " + req1);
    guiRej.con.setText("textNeed2", data ? (data.name + "(" + lev + "): " + req2) : "");
    if(!(World.getThreadTime() & 15)){
      const array = [];
      let target;
      for(let i = 2; i <= 6; i++){
        target = content.drawing[i];
        array.length = 0;
        for(let j = 0; j < 3; j++){
          array[array.length] = j;
        }
        array.splice(target.bitmap.slice(-1), 1);
        target.bitmap = target.bitmap.slice(0, -1) + array[Math.random() * 2 | 0];
      }
    }
  }
});

guiRej.con.setOnCloseListener({
  onClose: function(){
    returnSlot(guiRej.con, "slotAEC");
    returnSlot(guiRej.con, "slotOld");
    returnSlot(guiRej.con, "slotNaked");
    returnSlot(guiRej.con, "slotScroll");
    allClear(guiRej.con.getSlot("slotResult"));
    allClear(guiRej.con.getSlot("slotEnchant"));
  }
});