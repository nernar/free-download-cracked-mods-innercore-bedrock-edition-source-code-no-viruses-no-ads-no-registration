IMPORT("NJJCore", "Inventory");


const EncRec = {
  49: {enc: 0, max: 4},
  378: {enc: 1, max: 4},
  288: {enc: 2, max: 4},
  289: {enc: 3, max: 4},
  262: {enc: 4, max: 4},
  81: {enc: 5, max: 3},
  374: {enc: 6, max: 3},
  111: {enc: 7, max: 1},
  265: {enc: 8, max: 3},
  406: {enc: 9, max: 5},
  367: {enc: 10, max: 5},
  375: {enc: 11, max: 5},
  33: {enc: 12, max: 2},
  377: {enc: 13, max: 2},
  397: {enc: 14, max: 3, strict: true},
  388: {enc: 15, max: 5},
  264: {enc: 16, max: 1},
  341: {enc: 17, max: 3},
  266: {enc: 18, max: 3},
  318: {enc: 19, max: 5},
  381: {enc: 20, max: 2},
  259: {enc: 21, max: 1, strict: true},
  368: {enc: 22, max: 1},
  351: {enc: 23, max: 3, strict: true},
  349: {enc: 24, max: 3}
};


let Guide;
ModAPI.addAPICallback("GuideAPI", function(api){
  Guide = api.GuideAPI;

  api.PageControllers.SIMPLY_ENCHANTING_PAGE = function(params, elements, container, section){
    const xp = {left: 50, right: 550}[section];
    let yp = 80;
    let id = 0;
    let name = "";
    for(let i = 0; i < params.items.length; i++){
      id = params.items[i];
      for(let key in Native.Enchantment){
        if(Native.Enchantment[key] == EncRec[id].enc){
          name = key;
          break;
        }
      }
      elements["slot_" + id] = {type: "slot", x: xp, y: yp, size: 100, bitmap: "slot_empty", visual: true};
      elements["text_" + id] = {type: "text", x: xp + 100, y: yp + 60, font: {color: android.graphics.Color.BLACK}, text: name};
      container.setSlot("slot_" + id, id, 1, 0);
      yp += 120;
    }
  };

  api.GuideAPI.registerGuide("SimplyEnchantingGuide", {
    pages: {

      default: {
        nextLink: "page2",
        left: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [49, 378, 288, 289]
        },
        right: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [262, 81, 374, 111]
        }
      },

      page2: {
        preLink: "default",
        nextLink: "page3",
        left: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [265, 406, 367, 375]
        },
        right: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [33, 377, 397, 388]
        }
      },

      page3: {
        preLink: "page2",
        nextLink: "page4",
        left: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [264, 341, 266, 318]
        },
        right: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [381, 259, 368, 351]
        }
      },

      page4: {
        preLink: "page3",
        left: {
          controller: api.PageControllers.SIMPLY_ENCHANTING_PAGE,
          items: [349]
        }
      }

    }
  });

});


Item.addToCreative(116, 1, 1);
Recipes.addShaped({id: 116, data: 1}, ["oao", "bcb", "ddd"], ["a",340, 0, "b", 264, 0, "c", 116, 0, "d", 49, 0]);

const render = new ICRender.Model();
render.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 0.75, 1, [
  ["enchanting_table_bottom", 0], 
  ["enchanting_table_top", 1],
  ["enchanting_table_side", 1],
  ["enchanting_table_side", 1],
  ["enchanting_table_side", 1],
  ["enchanting_table_side", 1]
]));
BlockRenderer.enableCoordMapping(116, 1, render);


const container = new UI.Container();
const window = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Book Enchanter"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 512, y: 112, bitmap: "simply_plus", scale: 4},
    {type: "bitmap", x: 712, y: 112, bitmap: "simply_plus", scale: 4}
  ],
  elements: {
    "slotBase": {type: "slot", x: 400, y: 100, size: 80},
    "slotLapis": {type: "slot", x: 600, y: 100, size: 80, bitmap: "slot_lapis"},
    "slotBook": {type: "slot", x: 800, y: 100, size: 80, bitmap: "slot_book"},
    "slotResult": {type: "slot", x: 600, y: 250, size: 80, clicker: {
      onClick: function(con){
        const base = con.getSlot("slotBase");
        const lapis = con.getSlot("slotLapis");
        const book = con.getSlot("slotBook");
        const res = con.getSlot("slotResult");
        if(res.id){
          const lev = res.extra.getEnchantLevel(EncRec[base.id].enc);
          const pos = Player.getPosition();
          base.count -= lev;
          lapis.count -= lev * 8;
          book.count--;
          con.validateSlot("slotBase");
          con.validateSlot("slotLapis");
          con.validateSlot("slotBook");
          Player.addLevel(-lev * 10);
          con.dropSlot("slotResult", pos.x, pos.y, pos.z);
        }
      }
    }},
    "textLev": {type: "text", x: 500, y: 200, font: {shadow: 0.5}},
    "textEnc": {type: "text", x: 600, y: 340},
    "buttonInfo": {type: "button", x: 900, y: 50, scale: 3.2, bitmap: "simply_info", clicker: {
      onClick: function(con){
        Guide ?
          Guide.openGuide("SimplyEnchantingGuide") :
          alert("Please install GuideAPI.");
      }
    }}
  }
});


Callback.addCallback("ItemUse", function(c, item, block){
  if(block.id == 116 && block.data == 1 && !Entity.getSneaking(Player.get())){
    Game.prevent();
    container.openAs(window);
  }
  else if(item.id == 116 && item.data == 1){
    Game.prevent();
    c = c.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
      World.setBlock(c.x, c.y, c.z, 116, 1);
      Player.decreaseCarriedItem();
    }
  }
});

Callback.addCallback("tick", function(){
  const content = container.getGuiContent();
  if(content){
    const base = container.getSlot("slotBase");
    const lapis = container.getSlot("slotLapis");
    const book = container.getSlot("slotBook");
    const res = container.getSlot("slotResult");
    let lev = 0;
    if(lapis.id == 351 && lapis.data == 4 && book.id == 340 && EncRec[base.id]){
      if(EncRec[base.id].strict && base.data){
        return;
      }
      lev = Math.min(EncRec[base.id].max, base.count, lapis.count / 8 | 0);
      if(lev){
        container.setText("textLev", "Required Experience: " + (lev * 10));
        if(Player.getLevel() >= lev * 10){
          res.id = 403;
          res.count = 1;
          res.extra || (res.extra = new ItemExtraData());
          res.extra.addEnchant(EncRec[base.id].enc, lev);
          container.setText("textEnc", res.extra.getEnchantName(EncRec[base.id].enc));
          content.elements.textLev.font.color = android.graphics.Color.GREEN;
          return;
        }
        content.elements.textLev.font.color = android.graphics.Color.RED;
      }
    }
    container.clearSlot("slotResult");
    res.extra = null;
    container.setText("textEnc", "");
    lev || container.setText("textLev", "");
  }
});

container.setOnCloseListener({
  onClose: function(){
    const base = container.getSlot("slotBase");
    const lapis = container.getSlot("slotLapis");
    const book = container.getSlot("slotBook");
    Inventory.addItem(base.id, base.count, base.data);
    Inventory.addItem(lapis.id, lapis.count, lapis.data);
    Inventory.addItem(book.id, book.count, book.data);
    container.clearSlot("slotBase");
    container.clearSlot("slotLapis");
    container.clearSlot("slotBook");
  }
});