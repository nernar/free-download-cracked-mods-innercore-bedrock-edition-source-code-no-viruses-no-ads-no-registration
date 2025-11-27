const guiRej = {
  Flags: {
    helmet: 1 << 0,
    chestplate: 1 << 1,
    leggings: 1 << 2,
    boots: 1 << 3,
    sword: 1 << 4,
    shovel: 1 << 5,
    pickaxe: 1 << 6,
    axe: 1 << 7,
    hoe: 1 << 8,
    bow: 1 << 9,
    flshing: 1 << 10,
    shears: 1 << 11,
    carrot: 1 << 12
  },
  con: new UI.Container(),
  win: new UI.StandartWindow({
    standart: {
      header: {text: {text: "Rejuvenator"}},
      inventory: {standart: true},
      background: {standart: true}
    },
    drawing: [
      {type: "bitmap", x: 526, y: 80, bitmap: "laser_a0", scale: 0.8},
      {type: "bitmap", x: 691, y: 80, bitmap: "laser_a0", scale: 0.8},
      {type: "bitmap", x: 465, y: 136, bitmap: "laser_b0", scale: 0.8},
      {type: "bitmap", x: 765, y: 136, bitmap: "laser_b0", scale: 0.8},
      {type: "bitmap", x: 526, y: 220, bitmap: "laser_c0", scale: 0.8}
    ],
    elements: {
      "slotAEC": {type: "slot", x: 600, y: 60, bitmap: "slot_aec", size: 90},
      "slotOld": {type: "slot", x: 765, y: 75},
      "slotResult": {type: "slot", x: 765, y: 217,
        clicker: {onClick: function(con, tile){
          const aec = con.getSlot("slotAEC");
          const old = con.getSlot("slotOld");
          const res = con.getSlot("slotResult");
          const pos = Player.getPosition();
          let cv = 0;
          res.id &&
            aec.extra.putInt("cv", aec.extra.getInt("cv") - (ToolList[res.id] ? Tool.getCV(old) * Tool.getDur(old) / Tool.getMax(old) : CV[old.id].cv * old.data / Item.getMaxDamage(old.id)) * 0.7 | 0) &
            (cv = aec.extra.getInt("cv")) &
            (cv ? aec.data = Math.min(28, cv / 0x90000 | 0) : allClear(aec)) &
            con.dropSlot("slotResult", pos.x, pos.y, pos.z) &
            allClear(old);
        }}
      },
      "slotNaked": {type: "slot", x: 465, y: 75},
      "slotScroll": {type: "slot", x: 465, y: 217},
      "slotEnchant": {type: "slot", x: 615, y: 217,
        clicker: {onClick: function(con, tile){
          const aec = con.getSlot("slotAEC");
          const nak = con.getSlot("slotNaked");
          const scr = con.getSlot("slotScroll");
          const enc = con.getSlot("slotEnchant");
          const pos = Player.getPosition();
          let lev = ENC[scr.data].nonlvl ? 1 : 10;
          let cv = aec.extra.getInt("cv");;
          if(enc.id){
            con.dropSlot("slotEnchant", pos.x, pos.y, pos.z);
            while(cv < 30000 / ENC[scr.data].weight * Math.pow(3, lev / 3)){
              if(!--lev){
                break;
              }
            }
            aec.extra.putInt("cv", cv - 30000 / ENC[scr.data].weight * Math.pow(3, lev / 3));
            cv = aec.extra.getInt("cv");
            cv ? aec.data = Math.min(28, cv / 0x90000 | 0) : allClear(aec);
            allClear(nak);
          }
        }}
      },
      "textAEC": {type: "text", x: 600, y: 40, font: {size: 12}},
      "textNeed1": {type: "text", x: 830, y: 170, font: {size: 12}},
      "textNeed2": {type: "text", x: 465, y: 290, font: {size: 12}}
    }
  })
};