IDRegistry.genItemID("findore");
Item.createItem("findore", "find ore", {name: "stick", meta: 0}, {stack: 1}, {damage: 150});
Item.setMaxDamage(ItemID.findore, 150);

Recipes.addShaped({id: ItemID.findore, count: 1, data: 0}, 
["a",
 "ba",
 "b"], 
 ['a', 265, -1, 'b', 17, -1]);

 

Callback.addCallback("ItemUse", function (coords, item, block) {
var ore = [14, 15, 16, 21, 56, 73, 129, 153];
var nameore = ["golden ore", "iron ore", "coal ore", "lapis ore", "diamond ore", "redstoun ore", "emerald ore", "quarz ore"];
for(var i=0; i<9; i++)
if(item.id==ItemID.findore){
for(var yy=-120; yy<126; yy++){
if(World.getBlockID(coords.x, coords.y+yy, coords.z)==ore[i]){
 Game.message(nameore[i]);
ToolAPI.breakCarriedTool(1);

}}}});



ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}




