IMPORT("NJJCore", "Inventory");

IDRegistry.genItemID("rec_brueprint");
Item.createItem("rec_brueprint", "Recipe Brueprint", {name: "rec_brueprint"}, {stack: 1, isTech: true});

Item.registerNameOverrideFunction(ItemID.rec_brueprint, function(){
  const item = Player.getCarriedItem();
  return "Recipe Brueprint\n§o" + (item.extra ? item.extra.getString("title") : "Error");
});

IDRegistry.genBlockID("workbench");
Block.createBlock("workbench", [{name: "Workbench", texture: [["crafting_table_top", 0], ["crafting_table_top", 0], ["itemframe_background", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.workbench, "wood");

Callback.addCallback("PostLoaded", function(){
  Recipes.addShapeless({id: BlockID.workbench}, [{id: 58}, {id: 288}]);
});

const container = new UI.Container();
const window = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Workbench"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  drawing: [
    {type: "bitmap", x: 705, y: 125, bitmap: "_workbench_bar", scale: 0.8},
  ],
  elements: {
    "slot0": {type: "slot", x: 480, y: 60},
    "slot1": {type: "slot", x: 540, y: 60},
    "slot2": {type: "slot", x: 600, y: 60},
    "slot3": {type: "slot", x: 480, y: 120},
    "slot4": {type: "slot", x: 540, y: 120},
    "slot5": {type: "slot", x: 600, y: 120},
    "slot6": {type: "slot", x: 480, y: 180},
    "slot7": {type: "slot", x: 540, y: 180},
    "slot8": {type: "slot", x: 600, y: 180},
    "slotResult": {type: "slot", x: 800, y: 105, size: 90, clicker: {
      onClick: function(con){
        const res = con.getSlot("slotResult");
        if(res.id){
          let slot;
          Inventory.addItem(res.id, res.count, res.data);
          for(let i = 9; i--;){
            slot = con.getSlot("slot" + i);
            slot.id && !--slot.count && con.clearSlot("slot" + i);
          }
        }
      },
      onLongClick: function(con){
        const res = con.getSlot("slotResult");
        if(res.id){
          const field = [];
          let slot;
          let max = 0;
          for(let i = 9; i--;){
            slot = con.getSlot("slot" + i);
            slot.id && (field[field.length] = i);
            (!max || slot.count && max > slot.count) && (max = slot.count);
          }
          Inventory.addItem(res.id, res.count * max, res.data);
          for(let i = field.length; i--;){
            slot = con.getSlot("slot" + field[i]);
            slot.count -= max;
            slot.count || con.clearSlot("slot" + field[i]);
          }
        }
      }
    }},
    "slotPaper": {type: "slot", x: 540, y: 260, bitmap: "slot_paper", clicker: {
      onLongClick: function(con){
        const paper = con.getSlot("slotPaper");
        let slot;
        for(let i = 9; i--;){
          slot = con.getSlot("slot" + i);
          Inventory.addItem(slot.id, slot.count, slot.data);
        }
        if(paper.id == ItemID.rec_brueprint && paper.extra){
          const sozai = JSON.parse(paper.extra.getString("sozai"));
          const req = [];
          let item, inv;
          let count = len = 0;
          for(let key in sozai){
            item = key.split(":");
            for(let i = 9; i <= 44; i++){
              inv = Player.getInventorySlot(i);
              inv.id == item[0] && inv.data == item[1] &&
                (count += inv.count) &
                Player.setInventorySlot(i, 0);
            }
            count || req.push(Item.getName(item[0], item[1]));
            len = sozai[key].length;
            Inventory.addItem(item[0], count%len, item[1]);
            count -= count%len;
            for(let i = sozai[key].length; i--;){
              con.setSlot("slot" + sozai[key][i], item[0], count/len, item[1]);
            }
            count = len = 0;
          }
          req.length && alert(req + " cannot be found in your inventory.");
        }
      }
    }},
    "button": {type: "button", x: 610, y: 280, bitmap: "button_pencil", scale: 2.4, clicker: {
      onClick: function(con){
        const res = con.getSlot("slotResult");
        const paper = con.getSlot("slotPaper");
        if(res.id && paper.id == 339 && paper.count == 1){
          const sozai = {};
          let slot, key;
          for(let i = 9; i--;){
            slot = con.getSlot("slot" + i);
            slot.id &&
              (key = slot.id + ":" + slot.data) &
              (key in sozai ? sozai[key][sozai[key].length] = i : sozai[key] = [i]);
          }
          paper.id = ItemID.rec_brueprint;
          paper.extra = new ItemExtraData();
          paper.extra.putString("title", Item.getName(res.id, res.data));
          paper.extra.putString("sozai", JSON.stringify(sozai));
        }
      }
    }},
    "text": {type: "text", x: 550, y: 320}
  }
});

Callback.addCallback("ItemUse", function(coords, item, block){
  block.id == BlockID.workbench && !Entity.getSneaking(Player.get()) &&
    Game.prevent() &
    container.openAs(window);
});

Callback.addCallback("tick", function(){
  const content = container.getGuiContent();
  if(content){
    const res = Recipes.getRecipeResult(container) || {id: 0, count: 0, data: 0};
    const paper = container.getSlot("slotPaper");
    container.setSlot("slotResult", res.id, res.count, res.data);
    container.setText("text", paper.id == ItemID.rec_brueprint && paper.extra ? paper.extra.getString("title") : "");
  }
});

container.setOnCloseListener({
  onClose: function(){
    const pos = Player.getPosition();
    let slot;
    for(let i = 9; i--;){
      slot = container.getSlot("slot" + i);
      Inventory.addItem(slot.id, slot.count, slot.data);
      slot.id = slot.count = slot.data = 0;
    }
    container.dropSlot("slotPaper", pos.x, pos.y, pos.z);
  }
});