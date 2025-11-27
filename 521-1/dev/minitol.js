

IDRegistry.genItemID("manure");
Item.createItem("manure", "manure", {name: "pupMeale", meta: 0},{stack: 1}, {damage: 30});
Item.setMaxDamage(ItemID.manure, 30);
;
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 6, -1, "c", 3, -1]);
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 18, -1, "c", 3, -1]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
for(var i=0; i<6; i++)
if(item.id==ItemID.manure&&block.id == cropId[i] && block.data !== 7 ){
block.data++;
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 7);
ToolAPI.breakCarriedTool(1);
}}); 



Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);
//serp listva


//портал в энд

IDRegistry.genItemID("endPortal");
Item.createItem("endPortal", "Ender Portal", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.endPortal, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', 381, 0, 'b', 49, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.endPortal&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 7, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 7, 0);
Entity.spawn(coords.x+1, coords.y+1, coords.z, 93); 
}}); 


//хп
IDRegistry.genItemID("hp");
Item.createItem("hp", "гы :3", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 152, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 




//смерть
Callback.addCallback("EntityDeath", function(entity){
	
	
	var pos = Player.getPosition();	
		if(Entity.getType(entity) == 63){
			var pos = Entity.getPosition(entity); 		Game.message("X: "+Math.round(pos.x)+" Y: "+Math.round(pos.y)+" Z: "+Math.round(pos.z));
}});
//ore




IDRegistry.genItemID("tinyCoal");
Item.createItem("tinyCoal","Tiny Coal",{name:"tiny_coal"});
Recipes.addFurnaceFuel(ItemID.tinyCoal,0,200);

IDRegistry.genItemID("tinyCharcoal");
Item.createItem("tinyCharcoal","Tiny Charcoal",{name:"tiny_charcoal"});
Recipes.addFurnaceFuel(ItemID.tinyCharcoal,0,200);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.tinyCoal,count:9,data:0},[{id:263,data:0}]);
    Recipes.addShapeless({id:263,count:1,data:0},[{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0},{id:ItemID.tinyCoal,data:0}]);

    Recipes.addShapeless({id:ItemID.tinyCharcoal,count:9,data:0},[{id:263,data:1}]);
    Recipes.addShapeless({id:263,count:1,data:1},[{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0},{id:ItemID.tinyCharcoal,data:0}]);
});



