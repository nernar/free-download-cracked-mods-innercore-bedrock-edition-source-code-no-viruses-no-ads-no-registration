IDRegistry.genItemID("star1");
Item.createItem("star1", "Star lvl 1",
{name:"star_lvl_1"}, {});
IDRegistry.genItemID("star2");
Item.createItem("star2", "Star lvl 2", {name:"star_lvl_2"}, {});
IDRegistry.genItemID("star3");
Item.createItem("star3", "Star lvl 3", {name:"star_lvl_3"}, {});
IDRegistry.genItemID("star4");
Item.createItem("star4", "Star lvl 4", {name:"star_lvl_4"}, {});
IDRegistry.genItemID("star5");
Item.createItem("star5", "Star lvl 5", {name:"star_lvl_5"}, {});
IDRegistry.genItemID("star6");
Item.createItem("star6", "Star lvl 6", {name:"star_lvl_6"}, {});
IDRegistry.genItemID("star8");
Item.createItem("star8", "Star lvl 7", {name:"star_lvl_8"}, {});

IDRegistry.genItemID("starh");
IDRegistry.genItemID("starc");
IDRegistry.genItemID("starl");
IDRegistry.genItemID("starb");

Item.createArmorItem("starh", "Star Helmet", {name: "starHelmet"}, {type: "helmet", armor: 45, durability: 3550, texture: "armor/star_1.png"});
Item.createArmorItem("starc", "Star Chestplate", {name: "starChestplate"}, {type: "chestplate", armor: 52, durability: 5500, texture: "armor/star_1.png"});
Item.createArmorItem("starl", "Star Leggings", {name: "starLeggings"}, {type: "leggings", armor: 26, durability: 4500, texture: "armor/star_2.png"});
Item.createArmorItem("starb", "Star Boots", {name: "starBoots"}, {type: "boots", armor: 32, durability: 3500, texture: "armor/star_2.png"});


Translation.addTranslation("Star lvl 1", {ru: "Звезда левел 1"});
Translation.addTranslation("Star lvl 2", {ru: "Звезда левел 2"});
Translation.addTranslation("Star lvl 3", {ru: "Звезда левел 3"});
Translation.addTranslation("Star lvl 4", {ru: "Звезда левел 4"});
Translation.addTranslation("Star lvl 5", {ru: "Звезда левел 5"});
Translation.addTranslation("Star lvl 6", {ru: "Звезда левел 6"});
Translation.addTranslation("Star lvl 7", {ru: "Звезда левел 7"});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==14){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==15){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==16){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==21){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==1){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==129){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star3, 2)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==56){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star2, 1)}
}
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id ==121){
var fff = Math.random() * 1;
if(fff <= 0.5){World.drop(coords.x, coords.y, coords.z, ItemID.star1, 2)}
}
});

Recipes.addShaped({id: ItemID.star2, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star1, 0]);

Recipes.addShaped({id: ItemID.star3, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star2, 0]);

Recipes.addShaped({id: ItemID.star4, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star3, 0]);

Recipes.addShaped({id: ItemID.star5, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star4, 0]);

Recipes.addShaped({id: ItemID.star6, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star5, 0]);

Recipes.addShaped({id: ItemID.star8, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.star6, 0]);

Recipes.addShaped({id: 264, count: 32, data: 0}, [
		" a ",
		"a a",
		" a "
	], ['a', ItemID.star5, 0]);

Recipes.addShaped({id: 399, count: 1, data: 0}, [
    " a ", 
		"   ",
		"   "
	], ['a', ItemID.star8, 0]);


Recipes.addShaped({id: 17, count: 10, data: 0}, [
		" a ",
		"   ",
		"   "
	], ['a', ItemID.star3, 0]);

Recipes.addShaped({id: 391, count: 5, data: 0}, [
		" aa",
		"aaa",
		"aaa"
	], ['a', ItemID.star2, 0]);


Recipes.addShaped({id: 392, count: 5, data: 0}, [
		"aa ",
		"aaa",
		"aaa"
	], ['a', ItemID.star2, 0]);

Recipes.addShaped({id: 444, count: 1, data: 0}, [
		" a ",
		"aaa",
		"a a"
	], ['a', ItemID.star4, 0]);


Recipes.addShaped({id: 331, count: 32, data: 0}, [
		"   ",
		"   ",
		" a "
	], ['a', ItemID.star3, 0]);

Recipes.addShaped({id: 368, count: 1, data: 0}, [
		"aaa",
		"a a",
		"aaa"
	], ['a', ItemID.star2, 0]);


Recipes.addShaped({id: 369, count: 1, data: 0}, [
		"  a",
		" a ",
		"a  "
	], ['a', ItemID.star3, 0]);

Recipes.addShaped({id: 289, count: 2, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', ItemID.star2, 0]);


Recipes.addShaped({id: 341, count: 1, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', ItemID.star1, 0]);

Recipes.addShaped({id: 50, count: 10, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', ItemID.star2, 0]);


Recipes.addShaped({id: 397, count: 1, data: 1}, [
		"a a",
		" a ",
		"   "
	], ['a', ItemID.star5, 0]);

Recipes.addShaped({id: ItemID.star6, count: 9, data: 0}, [
		"   ",
		" a ",
		"   "
	], ['a', ItemID.star8, 0]);

Recipes.addShaped({id: ItemID.star2, count: 9, data: 0}, [
    "   ", 
		" a ",
		"   "
	], ['a', ItemID.star3, 0]);

Recipes.addShaped({id: ItemID.star3, count: 9, data: 0}, [
    "   ",
		" a ",
		"   "
	], ['a', ItemID.star4, 0]);

Recipes.addShaped({id: ItemID.star4, count: 9, data: 0}, [
   "   ",
		" a ",
		"   "
	], ['a', ItemID.star5, 0]);

Recipes.addShaped({id: ItemID.star5, count: 9, data: 0}, [
    "   ",
		" a ",
		"   "
	], ['a', ItemID.star6, 0]);

Recipes.addShaped({id: ItemID.star1, count: 9, data: 0}, [
   "   ",
		" a ",
		"   "
	], ['a', ItemID.star2, 0]);

Recipes.addShaped({id: ItemID.starc, count: 1, data: 0}, [
		"a a",
		"aba",
		"aaa"
	], ['a', ItemID.star5, 0, 'b', 311, 0]);


Recipes.addShaped({id: ItemID.starh, count: 1, data: 0}, [
		"aaa",
		"aba",
		"   "
	], ['a', ItemID.star4, 0, 'b', 310, 0]);

Recipes.addShaped({id: ItemID.starl, count: 1, data: 0}, [
		"aaa",
		"aba",
		"a a"
	], ['a', ItemID.star5, 0, 'b', 312, 0]);


Recipes.addShaped({id: ItemID.starb, count: 1, data: 0}, [
		"   ",
		"a a",
		"aba"
	], ['a', ItemID.star6, 0, 'b', 313, 0]);

