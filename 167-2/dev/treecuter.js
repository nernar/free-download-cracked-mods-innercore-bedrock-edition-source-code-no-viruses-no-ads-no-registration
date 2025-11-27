
Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(getBlock==17||getBlock==162){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=20; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162) {
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});
