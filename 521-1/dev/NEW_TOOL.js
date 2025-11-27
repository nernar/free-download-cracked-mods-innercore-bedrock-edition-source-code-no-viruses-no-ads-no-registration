
//______________________________\\
IDRegistry.genItemID("bedbre");
Item.createItem("bedbre", "destroy bedrock", {name: "bedbre", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bedbre, true);

Recipes.addShaped({id: ItemID.bedbre, count: 1, data: 0}, 
[ "aaa",
 "cbc",
 "fhf" ], ['a', 388, -1,'b',172,-1,'c',289,-1,'f',145,-1,'h',101,-1]);
 
Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.bedbre&&block.id==7){
	World.destroyBlock(coords.x, coords.y, coords.z);
	World.drop(coords.x, coords.y, coords.z, 7, 1, 0)
	}});
	
	Callback.addCallback("tick", function () { 
	item=Player.getCarriedItem(true);
	if(item.id==ItemID.bedbre){
		Block.setDestroyTime(7, 0.1); 
	}
	else
	if(item.id!==ItemID.bedbre){
		Block.setDestroyTime(7, 99999*99999);
	}});
	
//_____________________________\\
IDRegistry.genItemID("nezHoe");
Item.createItem("nezHoe", "hoe \n 3*3", {name: "nezHoe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.nezHoe, count: 1, data: 0}, 
[ "aba",
 "cbc",
 " b " ], ['a', 388, -1,'b',294,-1,'c',289,-1]);


Callback.addCallback("ItemUse", function (coords, item, block) { 
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
if(item.id==ItemID.nezHoe&&getBlock==2||item.id==ItemID.nezHoe&&getBlock==3){
	for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=1; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 2||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 3) {
World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz, 60);

}}}}}});
//_____________________________\\

//_____________________________\\
IDRegistry.genItemID("jackhammer");
Item.createItem("jackhammer", "jackhammer", {name: "jackhammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.jackhammer, count: 1, data: 0}, [
		"bcb",
		"axa",
		" x "
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1,'c',145,-1]);

Callback.addCallback("DestroyBlockStart", function (coords, block, player) { 
item=Player.getCarriedItem(true);
if(item.id==ItemID.jackhammer&&block.id==49)
{
World.destroyBlock(coords.x, coords.y, coords.z, true);

}});
//_____________________________\\
