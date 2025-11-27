/*
IDRegistry.genItemID("magnet"); Item.createItem("magnet", "магнит", {name: "magnet", meta: 0}, {stack: 1}); 
	Recipes.addShaped({id: ItemID.magnet, count: 1, data: 0}, [
	"a b",
	"x x",
	"xxx"
], ['x', 265, -1,'b',266,-1,'a',331,-1]);
	
	
	var drop = [64];
	
Callback.addCallback("tick", function () { 
var pos = Entity.getPosition(Player.get());
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.magnet){

	
	for(let i in evilMobs){
let ent = Entity.findNearest({x: pos.x, y: pos.y, z: pos.z}, drop[i], 6);
if(ent){
Entity.setPosition(ent,pos.x,pos.y,pos.z);
}
}
}}});	

*/