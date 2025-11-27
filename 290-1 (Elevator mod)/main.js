IDRegistry.genBlockID("tpBlockA");
Block.createBlockWithRotation("tpBlockA", [
{name: "Teleporter", texture: [["teleporter", 0], ["teleporter", 0], ["teleporter", 0],["teleporter", 1], ["teleporter", 0], ["teleporter", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.tpBlockA, "stone");

Recipes.addShaped({id: BlockID.tpBlockA, count: 1, data: 0}, ["aaa","aba","a a"], ['a', 35, -1, 'b', 368, 0]);
 

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