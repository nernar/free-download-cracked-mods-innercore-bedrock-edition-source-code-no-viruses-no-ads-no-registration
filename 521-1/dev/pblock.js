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



IDRegistry.genBlockID("tpBlockA");
Block.createBlockWithRotation("tpBlockA", [
{name: "Teleporter", texture: [["teleporter", 1], ["teleporter", 1], ["teleporter", 1],["teleporter", 1], ["teleporter", 1], ["teleporter", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.tpBlockA, "stone");

Recipes.addShaped({id: BlockID.tpBlockA, count: 2, data: 0}, ["aaa","aba","aaa"], ['a', 35, -1, 'b', 368, 0]);
 

TileEntity.registerPrototype(BlockID.tpBlockA, {
defaultValues: {},
click: function(id, count, data, coords){ 
if(!Entity.getSneaking(Player.get()))
{
for(var yy = 2; yy <= 20; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}
else
if(Entity.getSneaking(Player.get()))
{
for(var yy = -20; yy <= -2; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}}});



//


IDRegistry.genBlockID("pgrinder");
Block.createBlockWithRotation("pgrinder", [
{name: "stone crusher", texture: [["crusher_top", 0], ["crusher_top", 0], ["crusher_bottom", 0],["crusher_bottom", 0], ["crusher_bottom", 0], ["crusher_bottom", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.pgrinder, "stone");

Recipes.addShaped({id: BlockID.pgrinder, count: 1, data: 0}, ["aca","aba","aaa"], ['a', 1, 0, 'b', 61, 0, 'c', ItemID.stonehammer, -1]);

Callback.addCallback('ItemUse', function (coords, item, block) { 
var inp = [1,4,13];
var oup = [4,13,12];
for(var i=0; i<5; i++)
if(item.id==inp[i]&&block.id==BlockID.pgrinder){

Game.prevent(); 
World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, oup[i], 1, 0);
Player.decreaseCarriedItem(1);
Game.prevent(); 
}});

