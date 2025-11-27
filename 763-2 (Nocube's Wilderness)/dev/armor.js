IDRegistry.genItemID("brichBark");
Item.createItem("brichBark", "Brich Bark", {name: "birch_bark", meta: 0}, {stack: 16});

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == 17 && regi.getBlockData(coords.x, coords.y, coords.z) == 2) {
     if (Entity.getCarriedItem(player).id == ItemID.foresters) {
     //regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     //regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueberryBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.brichBark, randomInt(1, 4), 0);  
       }
    }
});

IDRegistry.genItemID("bastShoes");
Item.createArmorItem("bastShoes", "Bast Shoes", {name: "bast_shoes"}, {type: "boots", armor: 1, durability: 340, texture: "armor/birch_layer_1.png", isTech: false});
Item.addRepairItemIds(ItemID.bastShoes, [ItemID.brichBark]);

Recipes.addShaped({id: ItemID.bastShoes, count: 1, data: 0}, [
 "coc",
 "coc"
], ["c", ItemID.brichBark, 0]);

IDRegistry.genItemID("toughTrousers");
Item.createArmorItem("toughTrousers", "Tough Trousers", {name: "tough_trousers"}, {type: "leggings", armor: 5, durability: 128, texture: "armor/grass_2.png", isTech: false});
Item.addRepairItemIds(ItemID.toughTrousers, [ItemID.sedgeBlock]);

Recipes.addShaped({id: ItemID.bastShoes, count: 1, data: 0}, [
 "aaa",
 "coc",
 "coc"
], ["a", ItemID.sedgeBlock, 0, "b", 334, 0]);

IDRegistry.genItemID("beekeeperHat");
Item.createArmorItem("beekeeperHat", "Barrel Helmet", {name: "beekeeper_hat"}, {type: "helmet", armor: 5, durability: 390, texture: "armor/beekeeper_layer_1.png", isTech: false});
Item.addRepairItemIds(ItemID.beekeeperHat, [287]);

/*Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
Game.message(Entity.getType(attacker));
});*/

Armor.registerOnHurtListener(ItemID.beekeeperHat, function(item, slot, player, value, type, attacker, bool1, bool2){
 if (Entity.getType(attacker) == 122) {
   Entity.clearEffect(player, 19);         
}});

Recipes.addShaped({id: ItemID.beekeeperHat, count: 1, data: 0}, [
 "oco",
 "cbc"
], ["c", 266, 0, "b", 287, 0]);

/*
IDRegistry.genItemID("barrelHelmet");
Item.createArmorItem("barrelHelmet", "Barrel Helmet", {name: "abyssalnite_helmet"}, {type: "helmet", armor: 3, durability: 385, texture: "armor/abyssalnite_1.png", isTech: false});
//Item.addRepairItemIds(ItemID.barrelHelmet, [ItemID.brichBark]);

IDRegistry.genItemID("barrelChestplate");
Item.createArmorItem("barrelChestplate", "Barrel Chestplate", {name: "abyssalnite_chestplate"}, {type: "chestplate", armor: 8, durability: 560, texture: "armor/abyssalnite_1.png", isTech: false});
//Item.addRepairItemIds(ItemID.barrelChestplate, [ItemID.sedgeBlock]);

Callback.addCallback('ItemUse', function (coords, item, block) {
Game.message("ID: " + item.id + " DATA: " + item.data);
});


Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: ItemID.barrelHelmet, count: 1, data: 0}, [
 "aaa",
 "coc",
 "coc"
], ["a", ItemID.sedgeBlock, 0, "b", 334, 0]);


});*/