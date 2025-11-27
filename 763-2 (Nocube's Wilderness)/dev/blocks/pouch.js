IDRegistry.genBlockID("swetPouch");
Block.createBlockWithRotation("swetPouch",[{name:"Sweet Berry Pouch",texture:[["berry_pouch_closed",0],["sweetberry_pouch",0],["berry_pouch_side",0],["sweet_berry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("blueberryPouch");
Block.createBlockWithRotation("blueberryPouch",[{name:"Blueberry Pouch",texture:[["berry_pouch_closed",0],["blueberry_pouch",0],["berry_pouch_side",0],["blueberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("raspberryPouch");
Block.createBlockWithRotation("raspberryPouch",[{name:"Raspberry Pouch",texture:[["berry_pouch_closed",0],["raspberry_pouch",0],["berry_pouch_side",0],["raspberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

IDRegistry.genBlockID("lingonberryPouch");
Block.createBlockWithRotation("lingonberryPouch",[{name:"Lingonberry Pouch",texture:[["berry_pouch_closed",0],["lingonberry_pouch",0],["berry_pouch_side",0],["lingonberry_pouch_side",0], ["berry_pouch_side", 0], ["berry_pouch_side", 0]],inCreative:true}]);

Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.swetPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", 477, 0]);

Recipes.addShaped({id: BlockID.blueberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.blueberries, 0]);

Recipes.addShaped({id: BlockID.raspberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.raspberry, 0]);

Recipes.addShaped({id: BlockID.lingonberryPouch, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.lingonberry, 0]);
});
