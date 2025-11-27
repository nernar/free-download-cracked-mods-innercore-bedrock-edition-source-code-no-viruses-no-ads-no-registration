IDRegistry.genItemID("steeleaf");
Item.createItem("steeleaf", "Steeleaf", {name: "steeleaf", meta: 0}, {stack: 64})

IDRegistry.genItemID("naga_scale");
Item.createItem("naga_scale", "Naga Scale", {name: "naga_scale", meta: 0}, {stack: 64})

IDRegistry.genItemID("ironwood");
Item.createItem("ironwood", "Iron Wood ", {name: "ironwood", meta: 0}, {stack: 64})

IDRegistry.genItemID("fieryblood");
Item.createItem("fieryblood", "Fiery Blood", {name: "fiery", meta: 0}, {stack: 64})

IDRegistry.genItemID("fiery_ingot");
Item.createItem("fiery_ingot", "Fiery Ingot ", {name: "fiery_ingot", meta: 0}, {stack: 64})

IDRegistry.genItemID("ironwood_raw");
Item.createItem("ironwood_raw", "Ironwood Raw ", {name: "ironwood_raw", meta: 0}, {stack: 64})
Recipes.addFurnace(ItemID.ironwood_raw, ItemID.ironwood, 0); 

IDRegistry.genItemID("ice_bomb");
Item.createItem("ice_bomb", "Ice Bomb ", {name: "ice_bomb", meta: 0}, {stack: 64})

Item.registerThrowableFunction("ice_bomb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 4);
} 
} 
);







 IDRegistry.genItemID("twpo");
Item.createItem("twpo", "Out Dimensions", {name: "over_world", meta: 0}, {stack: 1})
	Recipes.addShaped({id: ItemID.twpo, count: 2, data: 0}, [
		"ooo",
		"aaa",
		"aaa"
	], ['o', ItemID.steeleaf, 0,'a', 3, 0]);
	
