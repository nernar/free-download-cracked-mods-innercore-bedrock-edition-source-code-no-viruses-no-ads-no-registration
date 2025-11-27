IMPORT("HelperMod");

IDRegistry.genItemID("devilHelmet");
IDRegistry.genItemID("devilChestplate");
IDRegistry.genItemID("devilLeggings");
IDRegistry.genItemID("devilBoots");

ARMOR.setMode({
	id: ItemID.devilChestplate,
	type: [1],
	tick: function(){
       Player.setFlyingEnabled(true);
	}
});
Callback.addCallback("tick",function() {
    if(Player.getArmorSlot(1).id ==! ItemID.devilChestplate && !Game.getGameMode()){
	    Player.setFlyingEnabled(false);
    }
});

Item.createArmorItem("devilHelmet", "Devil Helmet", {name: "devil_helmet"}, {type: "helmet", armor: 4, durability: 2500, texture: "armor/devil_1.png"});
Item.createArmorItem("devilChestplate", "Devil Chestplate", {name: "devil_chestplate"}, {type: "chestplate", armor: 7, durability: 2500, texture: "armor/devil_1.png"});
Item.createArmorItem("devilLeggings", "Devil Leggings", {name: "devil_leggings"}, {type: "leggings", armor: 6, durability: 2500, texture: "armor/devil_2.png"});
Item.createArmorItem("devilBoots", "Devil Boots", {name: "devil_boots"}, {type: "boots", armor: 2, durability: 2500, texture: "armor/devil_1.png"});

Recipes.addShaped({id: ItemID.devilHelmet, count: 1, data: 0}, [
    "ddd",
    "x x"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilChestplate, count: 1, data: 0}, [
    "d d",
    "dxd",
    "ddd"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilLeggings, count: 1, data: 0}, [
    "dxd",
    "d d",
    "d d"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);

Recipes.addShaped({id: ItemID.devilBoots, count: 1, data: 0}, [
    "d d",
    "x x"
], ['x', ItemID.devilIngot, 0, 'd', BlockID.devilBlock, 0]);
