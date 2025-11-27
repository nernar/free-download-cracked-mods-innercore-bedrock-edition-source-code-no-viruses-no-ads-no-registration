const guiAlc = {
  con: new UI.Container(),
  win: new UI.StandartWindow({
    standart: {
      header: {text: {text: "Alchemizer"}},
      inventory: {standart: true},
      background: {standart: true}
    },
    drawing: [
      {type: "bitmap", x: 605, y: 156, bitmap: "alchemBar", scale: 3.2}
    ],
    elements: {
      "slot0": {type: "slot", x: 360, y: 60},
      "slot1": {type: "slot", x: 420, y: 60},
      "slot2": {type: "slot", x: 480, y: 60},
      "slot3": {type: "slot", x: 540, y: 60},
      "slot4": {type: "slot", x: 360, y: 120},
      "slot5": {type: "slot", x: 420, y: 120},
      "slot6": {type: "slot", x: 480, y: 120},
      "slot7": {type: "slot", x: 540, y: 120},
      "slot8": {type: "slot", x: 360, y: 180},
      "slot9": {type: "slot", x: 420, y: 180},
      "slot10": {type: "slot", x: 480, y: 180},
      "slot11": {type: "slot", x: 540, y: 180},
      "slot12": {type: "slot", x: 360, y: 240},
      "slot13": {type: "slot", x: 420, y: 240},
      "slot14": {type: "slot", x: 480, y: 240},
      "slot15": {type: "slot", x: 540, y: 240},
      "slotResult": {type: "slot", x: 670, y: 132, bitmap: "slot_aec", size: 90,
        clicker: {onClick: function(con){
          const res = con.getSlot("slotResult");
          const pos = Player.getPosition();
          let slot;
          let i = 0;
          if(res.id == ItemID.aec){
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              getCV(slot) && allClear(slot);
            }
            con.dropSlot("slotResult", pos.x, pos.y, pos.z);
            res.extra.removeCustomData();
            return;
          }
          if(res.id){
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              if(slot.id == ItemID.aec && slot.extra && slot.extra.getInt("cv") < 2048){
                alert("Please charge 2048 CV to AEC.");
                return;
              }
            }
            let cv = 0;
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              slot.id == ItemID.aec ?
                (cv = slot.extra.getInt("cv")) &
                (cv == 2048 ? allClear(slot) : slot.extra.putInt("cv", cv - 2048)) :
                (getCV(slot) && allClear(slot));
            }
            res.extra = new ItemExtraData();
            res.extra.putInt("use", 0);
            res.extra.putInt("dur", 0);
            con.dropSlot("slotResult", pos.x, pos.y, pos.z);
            res.extra = 0;
          }
        }}
      },
      "slotAEC": {type: "slot", x: 812, y: 60, bitmap: "slot_aec", size: 90},
      "slotSample": {type: "slot", x: 830, y: 170},
      "slotReplica": {type: "slot", x: 830, y: 240, 
        clicker: {onClick: function(con){
          const sam = con.getSlot("slotSample");
          const aec = con.getSlot("slotAEC");
          const rep = con.getSlot("slotReplica");
          const pos = Player.getPosition();
          let cv = 0;
          rep.id && (
            aec.extra.putInt("cv", aec.extra.getInt("cv") - getCV(sam)) &
            (cv = aec.extra.getInt("cv")) &
            (cv ?
              aec.data = Math.min(28, cv / 0x90000 | 0) :
              allClear(aec)) &
            con.dropSlot("slotReplica", pos.x, pos.y, pos.z) &
            (rep.extra = 0)
          );
        }}
      },
      "textResult": {type: "text", x: 672, y: 230, font: {size: 12}},
      "textAEC": {type: "text", x: 813, y: 40, font: {size: 12}},
      "textNeed": {type: "text", x: 895, y: 195, font: {size: 12}},
      "button": {type: "button", x: 360, y: 320, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 1.6, clicker: {
        onClick: function(con){
          const array = [];
          let slot;
          let inv;
          let stack = 0;
          let min = 0;
          for(let i = 16; i--;){
            slot = con.getSlot("slot" + i);
            slot.id && array.push(slot.id + ":" + slot.data);
          }
          for(let i = 9; i <= 44; i++){
            inv = Player.getInventorySlot(i);
            if(!inv.id || inv.extra || !~array.indexOf(inv.id + ":" + inv.data)){
              continue;
            }
            stack = Item.getMaxStack(inv.id);
            for(let j = 0; j < 16; j++){
              slot = con.getSlot("slot" + j);
              if(!slot.id || slot.id == inv.id && slot.data == inv.data && slot.count < stack){
                min = Math.min(inv.count, stack - slot.count);
                con.setSlot("slot" + j, inv.id, slot.count + min, inv.data);
                inv.count -= min;
                if(inv.count){
                  Player.setInventorySlot(i, inv.id, inv.count, inv.data);
                }
                else{
                  Player.setInventorySlot(i, 0);
                  break;
                }
              }
            }
          }
        }
      }}
    }
  })
};