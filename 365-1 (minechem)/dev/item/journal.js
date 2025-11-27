IDRegistry.genItemID("chemist_journal");
Item.createItem("chemist_journal", "Chemist's Journal", {name: "chemist_journal"}, {stack: 1});

Item.registerNameOverrideFunction(ItemID.chemist_journal, function(item, name){
  let info = "";
  if(item.extra){
    info = "\n§9" + Item.getName(Synthesiser.data[item.extra.getString("pattern")].id);
  }
  return name + info;
});


const ScreenHeight = UI.getScreenHeight();

(function(){
  const base = FileTools.ReadImage(__dir__ + "res/material/chemist_journal.png");
  const bmp = new ag.Bitmap.createBitmap(1000, ScreenHeight, ag.Bitmap.Config.ARGB_8888);
  const cvs = new ag.Canvas(bmp);
  cvs.drawBitmap(base, null, new ag.Rect(0, 0, 1000, ScreenHeight), null);
  UI.TextureSource.put("journal_background", bmp);
})();


const jumpFunc = function(num){
    return {
      onClick: Microscope.funcName(num),
      onLongClick: function(con){
        const item = con.getSlot("slot" + num);
        if(~Chemistry.researchList.indexOf(item.id + ":" + item.data)){
          Journal.setRecipe(item.id, item.data);
        }
        else{
          alert("You need to research " + Item.getName(item.id, item.data));
        }
      }
    };
  };

const JournalSlots = {};
const Journal = {
  container: new UI.Container(),
  mainUI: new UI.Window({
    params: {slot: "slot_chem"},
    drawing: [
      {type: "background", color: ag.Color.TRANSPARENT},
      {type: "bitmap", x: 0, y: 0, bitmap: "journal_background"}
    ],
    elements: {
      close: {type: "closeButton", x: 940, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 3.2},
      search: {type: "button", x: 60, y: 50, bitmap: "mod_browser_search_field", scale: 0.8, clicker: {
        onClick: function(){
          const ctx = UI.getContext();
          ctx.runOnUiThread(new java.lang.Runnable({
            run: function(){
              try{
                const dialog = new android.app.AlertDialog.Builder(ctx); 
                dialog.setTitle("Please type the keywords");
                const editText = new android.widget.EditText(ctx); 
                editText.setHint("in this space");
                const layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
                layout.addView(editText);
                dialog.setView(layout);
                dialog.setPositiveButton("Search", new android.content.DialogInterface.OnClickListener(){
                  onClick: function(){
                    Journal.searchItem(editText.getText() + "");
                  }
                });
                dialog.show();
              }
              catch(e){
                alert(e);
              }
            }
          }));
        }
      }},
      editText: {type: "text", x: 70, y: 60, z: 1, font: {color: ag.Color.WHITE, size: 20}},
      slot0: {type: "slot", x: 660, y: 120, visual: true, clicker: jumpFunc(0)},
      slot1: {type: "slot", x: 720, y: 120, visual: true, clicker: jumpFunc(1)},
      slot2: {type: "slot", x: 780, y: 120, visual: true, clicker: jumpFunc(2)},
      slot3: {type: "slot", x: 660, y: 180, visual: true, clicker: jumpFunc(3)},
      slot4: {type: "slot", x: 720, y: 180, visual: true, clicker: jumpFunc(4)},
      slot5: {type: "slot", x: 780, y: 180, visual: true, clicker: jumpFunc(5)},
      slot6: {type: "slot", x: 660, y: 240, visual: true, clicker: jumpFunc(6)},
      slot7: {type: "slot", x: 720, y: 240, visual: true, clicker: jumpFunc(7)},
      slot8: {type: "slot", x: 780, y: 240, visual: true, clicker: jumpFunc(8)},
      title: {type: "text", x: 560, y: 60, font: {color: ag.Color.BLUE, size: 30, isBold: true}},
      textType: {type: "text", x: 660, y: 310, font: {color: ag.Color.GRAY}},
      textReq: {type: "text", x: 660, y: 330, font: {color: ag.Color.GRAY}}
    }
  }),
  slotUI: new UI.Window({
    location: {x: 60, y: 100, width: 400, padding: {bottom: 40}, scrollY: 4000},
    params: {slot: "slot_chem"},
    drawing: [
      {type: "background", color: ag.Color.TRANSPARENT}
    ],
    elements: JournalSlots
  }),
  clickFunc: function(id, data){
    return {onClick: function(){
      Journal.setRecipe(id, data);
    }};
  },
  setRecipe: function(id, data){
    const raw = Synthesiser.getPattern(id, data, true);
    let i = 0;
    if(raw){
      const item = Player.getCarriedItem();
      const pattern = Synthesiser.decodePattern(raw);
      if(item.id == ItemID.chemist_journal){
        item.extra = new ItemExtraData();
        item.extra.putString("pattern", raw);
        Player.setCarriedItem(ItemID.chemist_journal, 1, 0, item.extra);
      }
      for(i = 0; i < 9; i++){
        pattern[i] ?
          this.container.setSlot("slot" + i, pattern[i][0], pattern[i][1], 0) :
          this.container.clearSlot("slot" + i);
      }
      this.container.setText("title", Item.getName(id, data));
      this.container.setText("textType", pattern.length == 9 ? "Shaped" : "Shapeless");
      this.container.setText("textReq", Synthesiser.data[raw].cost + " RF");
    }
    else{
      for(i = 9; i--;){
        this.container.clearSlot("slot" + i);
      }
      this.container.setText("title", "");
      this.container.setText("textType", "");
      this.container.setText("textReq", "");
    }
  },
  searchItem: function(text){
    const location = this.slotUI.getLocation();
    const size = location.width * (location.getScale() / location.getDrawingScale()) / 6;
    let x = y = 0;
    let item;
    for(let key in JournalSlots){
      item = key.split(":");
      if(Item.getName(item[0], item[1]).match(new RegExp(text, "i"))){
        JournalSlots[key].x = x;
        JournalSlots[key].y = y;
        if(x == size * 5){
          x = 0;
          y += size;
        }
        else{
          x += size;
        }
      }
      else{
        JournalSlots[key].x = 2000;
      }
    }
    this.container.setText("editText", text);
  }
};

Journal.mainUI.addAdjacentWindow(Journal.slotUI);
Journal.mainUI.setBlockingBackground(true);

Item.registerUseFunction(ItemID.chemist_journal, function(c){
  const location = Journal.slotUI.getLocation();
  const size = location.width * (location.getScale() / location.getDrawingScale()) / 6;
  let x = y = 0;
  let item;
  for(let i = 0; i < Chemistry.researchList.length; i++){
    item = Chemistry.researchList[i].split(":");
    JournalSlots[Chemistry.researchList[i]] = {type: "slot", x: x, y: y, visual: true, size: size, clicker: Journal.clickFunc(item[0], item[1])};
    Journal.container.setSlot(Chemistry.researchList[i], item[0], 1, item[1]);
    if(x == size * 5){
      x = 0;
      y += size;
    }
    else{
      x += size;
    }
  }
  Journal.container.openAs(Journal.mainUI);
  item = Player.getCarriedItem();
  if(item.extra){
    item = Synthesiser.data[item.extra.getString("pattern")];
    Journal.setRecipe(item.id, item.data);
  }
  Game.prevent();
});


Journal.container.setOnCloseListener({
  onClose: function(){
    for(let key in JournalSlots){
      delete JournalSlots[key];
    }
    for(let i = 9; i--;){
      Journal.container.clearSlot("slot" + i);
    }
    Journal.container.setText("title", "");
    Journal.container.setText("textType", "");
    Journal.container.setText("textReq", "");
    Journal.container.setText("editText", "");
  }
});