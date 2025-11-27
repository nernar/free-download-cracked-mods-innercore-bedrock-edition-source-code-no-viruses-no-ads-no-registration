IDRegistry.genBlockID("nozsh"); 
Block.createBlock("nozsh", [{name: "Нож", texture: [["nozsh", 0]], inCreative: true}]);
var renderNSH = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.nozsh, 0, renderNSH); 

var modelNSH = BlockRenderer.createModel();



modelNSH.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "DeaSap", 0);//полено1

modelNSH.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "DeaSap", 0);//полено2

renderNSH.addEntry(modelNSH);

Block.setBlockShape(BlockID.NSH, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});


IDRegistry.genItemID("nosh");
Item.createThrowableItem("nosh", "Нож", {name: "nosh", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.nosh, count: 1, data: 0}, [
"  s",
" b ",
"   "
], ['s', 91, 0, 'b', 332, 0]);

Callback.addCallback("ProjectileHitBlock", function(projectile, coords, block){
if(item.id==ItemID.nosh){
World.setBlock(coords.x,coords.y, coords.z, BlockID.nozsh, 0)}});