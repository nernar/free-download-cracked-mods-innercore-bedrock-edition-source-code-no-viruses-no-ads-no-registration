ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}


Recipes.deleteRecipe({id: 262, count: 8, data: -1}) 


var McMath = {
 rtd(rotation, dgr) {
  return Math.floor(rotation * (dgr / Math.PI));
 },
 dtr(dgr) {
  return dgr * (Math.PI / 180);
 },
 getYaw(r) {
  var yawRTD = this.rtd(r, 180);
  var yaw = 0;
  yaw = yawRTD % 360;
  yaw = (yaw + 360) % 360;
  return yaw;
 },
 lookDirection(yaw, pitch) {
  return {
   x: -Math.sin(yaw) * Math.cos(pitch),
   y: Math.sin(pitch),
   z: Math.cos(yaw) * Math.cos(pitch)
  };
 },
 random(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
 }
}  
  
 
var rippers = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "ripper");
Item.createItem(id + "ripper", id + " ripper", {name: id + "ripper", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "ripper"], true);
ToolAPI.registerTool(ItemID[id + "ripper"], material, ["plant"], {damage: 0});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "ripper"], count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', i1, -1, 'b', i2, -1]);});}}
















