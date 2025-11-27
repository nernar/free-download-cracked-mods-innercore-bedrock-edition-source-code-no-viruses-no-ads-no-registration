const extraui = {
con: new UI.Container(),
win: new UI.Window({
  location: {
   x:0,
   y:0,
   width: 1,
   height: 1
  },
  elements: {slot: {type: "slot", x:0, y:0}},
  drawing: [{type: "background", color: 0}]
 })
};

function itemdrop(x, y, z, id, count, data, extra){
 if(!extra){
  World.drop(x, y+1, z, id, count, data);
  return;
 } else {
  let slot = extraui.con.getSlot("slot");
  slot.id = id;
  slot.data = data;
  slot.count = count;
  slot.extra = extra;
  extraui.con.dropSlot("slot", x, y+1, z);
 }
}

function space(tile){
let getitem,count = 0;
 for(let i=9;i<45;i++){
  getitem = Player.getInventorySlot(i);
   if(getitem.id === 0){
    count += 64;
   } else if(getitem.id == tile.data.id){
    count += (64-getitem.count);
   } else continue;
 }
return count;
}

IDRegistry.genBlockID("infinitychest");
Block.createBlockWithRotation("infinitychest", [{name: "Infinity Chest", texture: [["infinitychest_top", 0], ["infinitychest_top", 0], ["infinitychest_side", 0], ["infinitychest_front", 0], ["infinitychest_side", 0], ["infinitychest_side", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.infinitychest, {x: 1/16, y: 0, z: 1/16}, {x: 15/16, y: 14/16, z: 15/16});
Block.registerDropFunction("infinitychest", function(){
 return [];
});

const gui = new UI.StandartWindow({
 standart: {
  header: {text: {text: "InfinityChest"}},
  inventory: {standart: true},
  background: {standart: true}
 },

 elements: {
  "slot": {type: "slot", x: 700, y: 135, visual: true, bitmap: "slotinvisible"},
  "inputslot": {type: "slot", x: 500, y: 135},
  "name": {type: "text", x: 680, y: 100, text: "nothing"},
  "count": {type: "text", x: 680, y: 120, text: "0"},

  "putalltext": {type: "text", x: 509, y: 230, text: "ALL"},
  "putall": {type: "button", x: 500, y: 250, bitmap: "putbutton", scale: 3.2, clicker: {
  onClick: function(a, b, tile){
   if(!tile.data.id)return;
   for(let i=9;i<45;i++){
   if(Player.getInventorySlot(i).id == tile.data.id){
    tile.data.count += Player.getInventorySlot(i).count;
    Player.setInventorySlot(i, 0, 0, 0);
   }}
  }}},

  "take1text": {type: "text", x: 617, y: 230, text: "1"},
  "take1": {type: "button", x: 600, y: 250, bitmap: "takebutton", scale: 3.2, clicker: {
  onClick: function(a, b, tile){
   if(!tile.data.id)return;
   if(space(tile) === 0)return;
   Player.addItemToInventory(tile.data.id, 1, tile.data.data);
   tile.data.count--;
  }}},

  "take64text": {type: "text", x: 673, y: 230, text: "64"},
  "take64": {type: "button", x: 660, y: 250, bitmap: "takebutton", scale: 3.2, clicker: {
  onClick: function(a, b, tile){
   if(!tile.data.id)return;
   count = space(tile);
   if(count > 63){
   if(tile.data.count > 63){
   Player.addItemToInventory(tile.data.id, 64, tile.data.data);
   tile.data.count -= 64;
   } else {
   Player.addItemToInventory(tile.data.id, tile.data.count, tile.data.data);
   tile.data.count = 0;
   }
   } else {
   if(tile.data.count > count){
   Player.addItemToInventory(tile.data.id, count, tile.data.data);
   tile.data.count -= count;
   } else {
   Player.addItemToInventory(tile.data.id, tile.data.count, tile.data.data);
   tile.data.count = 0;
   }
  }}}},

  "takealltext": {type: "text", x: 729, y: 230, text: "ALL"},
  "takeall": {type: "button", x: 720, y: 250, bitmap: "takebutton", scale: 3.2, clicker: {
  onClick: function(a, b, tile){
   if(!tile.data.id)return;
   count = space(tile);
   if(count < tile.data.count){
   Player.addItemToInventory(tile.data.id, count, tile.data.data);
   tile.data.count -= count;
   } else {
   Player.addItemToInventory(tile.data.id, tile.data.count, tile.data.data);
   tile.data.count = 0;
  }}}}
 }
});

TileEntity.registerPrototype(BlockID.infinitychest,{
 defaultValues: {name: "nothing", id: 0, count: 0, data: 0},

 getGuiScreen: function(){
  return gui;
 },

 tick: function(){
  this.container.setText("name", this.data.name);
  this.container.setText("count", this.data.count+"");
  if(this.data.id && this.data.count === 0){
   this.slotset(0, 0);
   this.container.clearSlot("slot");
  }

  let input = this.container.getSlot("inputslot"),slot = this.container.getSlot("slot");
   if(input.id && (input.id === slot.id||slot.id === 0)){
    slot.id = input.id;
    slot.count = 1;
    this.data.count += input.count;
    slot.data = input.data;
    this.container.clearSlot("inputslot");
    this.slotset(slot.id, slot.data);
   }
 },

 destroy: function(){
  this.container.clearSlot("slot");
  if(this.data.id === 0){
   World.drop(this.x, this.y, this.z, BlockID.infinitychest, 1, 0);
   return;
  }
  const extra = new ItemExtraData();
  extra.putInt("id", this.data.id);
  extra.putInt("data", this.data.data);
  extra.putInt("count", this.data.count);
  extra.setCustomName("Infinity Chest\n"+this.data.name+"\n"+this.data.count);
  itemdrop(this.x, this.y, this.z, BlockID.infinitychest, 1, 0, extra);
 },

 slotset: function(id, data){
   this.data.id = id;
   this.data.data = data;
   this.data.name = Item.getName(id, data, "UTF-8")?Item.getName(id, data, "UTF-8"):"nothing";
 },

 created: function(){
  const extra = Player.getCarriedItem().extra;
   if(extra === null)return;
  this.data.id = parseInt(extra.getInt("id"));
  this.data.data = parseInt(extra.getInt("data"));
  this.data.count = parseInt(extra.getInt("count"));
  this.container.setSlot("slot", this.data.id, 1, this.data.data);
  this.data.name = Item.getName(this.data.id, this.data.data, "UTF-8");
 }
});

Callback.addCallback("PreLoaded", function(){
 Recipes.addShaped({id: BlockID.infinitychest, count: 1, data: 0}, ["xxx","aba","xxx"], ['x', 20, 0, 'a', 368, 0, 'b', 54, 0]);
});