IDRegistry.genBlockID("bigChest");
Block.createBlockWithRotation("bigChest", [{name: "big chest", texture: [["sss", 0], ["sss", 0], ["sss", 0], ["ppp", 0], ["sss", 0], ["sss", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.bigChest, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 17, -1, 'a', 54, 0]);

const regChest = function(id, count, data, max){
Game.prevent();
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())){
if(this.data.id){
if(this.data.id == id && this.data.data == data){
this.data.count += count;
Player.setCarriedItem(0);}else{let slot;for(let i = 36; i--;){
slot = Player.getInventorySlot(i+9);
this.data.id == slot.id && this.data.data == slot.data && (this.data.count += slot.count)&Player.setInventorySlot(i+9, 0);}Game.message(Item.getName(this.data.id, this.data.data)+" "+this.data.count)}}
else if(id){
      this.data.id = id;
      this.data.count = count;
      this.data.data = data;
      Player.setCarriedItem(0);}
this.data.count > max && World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, max-this.data.count, this.data.data);
}else if(this.data.id){
const get = Math.min(64, this.data.count);
World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, get, this.data.data);
this.data.count -= get;
!this.data.count && (this.data.id = this.data.data = 0);}};


TileEntity.registerPrototype(BlockID.bigChest, {
  defaultValues: {
    id: 0,
    data: 0,
    count: 0},
click: function(id, count, data){this.run(id, count, data, 2e9);},
run: regChest});





