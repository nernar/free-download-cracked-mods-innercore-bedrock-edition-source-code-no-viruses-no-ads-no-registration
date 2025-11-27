
IDRegistry.genItemID("bedlom");
Item.createItem("bedlom", "bedlom", {name: "bedlom", meta: 0}, {stack: 1}, {damage: 666});
Item.setMaxDamage(ItemID.bedlom, 10);

Recipes.addShaped({id: ItemID.bedlom, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 49, -1, 'b', 42, -1, 'c', 173, -1]);




Callback.addCallback("ItemUse", function (coords, item, block) {

if(item.id == ItemID.bedlom&&World.getBlockID(coords.x, coords.y, coords.z)==7){
World.destroyBlock(coords.x, coords.y, coords.z, true)}}); 

