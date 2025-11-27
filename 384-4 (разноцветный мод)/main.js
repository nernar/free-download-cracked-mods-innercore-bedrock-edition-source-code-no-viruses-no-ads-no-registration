IDRegistry.genItemID("blue");
Item.createItem("blue", "Синяя пыль", {name: "blue", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.blue, count: 4, data: 0}, [
 "ab",
 "ba",
 ""
], ['a', 331 , 0, 'b', 351, 4]);


IDRegistry.genItemID("blueK");
Item.createItem("blueK", "Синий камень", {name: "blueK", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.blueK, count: 1, data: 0}, [
 "aa",
 "aa",
 ""
], ['a', ItemID.blue, 0]);


IDRegistry.genItemID("blueH");
Item.createArmorItem("blueH", "Шлем из синего камня", {name: "blueH"}, {type: "helmet", armor: 4, durability: 300, texture: "armor/blue1_1.png"});

Recipes.addShaped({id: ItemID.blueH, count: 1, data: 0}, [
 "aaa",
 "a a",
 ""
], ['a', ItemID.blueK, 0]);


IDRegistry.genItemID("blueC");
Item.createArmorItem("blueC", "Нагрудник из синего камня", {name: "blueC"}, {type: "chestplate", armor:8, durability: 500, texture: "armor/blue1_1.png"});

Recipes.addShaped({id: ItemID.blueC, count: 1, data: 0}, [
 "a a",
 "aaa",
 "aaa"
], ['a', ItemID.blueK, 0]);


IDRegistry.genItemID("blueL");
Item.createArmorItem("blueL", "Леггинсы из синего камня", {name: "blueL"}, {type: "leggings", armor:4, durability: 200, texture: "armor/blue1_1.png"});

Recipes.addShaped({id: ItemID.blueL, count: 1, data: 0}, [
 "aaa",
 "a a",
 "a a"
], ['a', ItemID.blueK, 0]);


IDRegistry.genItemID("blueB");
Item.createArmorItem("blueB", "Ботинки из синего камня", {name: "blueB"}, {type: "boots", armor:4, durability: 300, texture: "armor/blue1_1.png"});

Recipes.addShaped({id: ItemID.blueB, count: 1, data: 0}, [
 "a a",
 "a a",
 ""
], ['a', ItemID.blueK, 0]);


IDRegistry.genBlockID("BlueBlock"); Block.createBlockWithRotation("BlueBlock", [      {name: "Синий блок", texture: [["Bluebl", 0], ["Bluebl", 0], ["Bluebl", 0], ["Bluebl", 0], ["Bluebl", 0], ["Bluebl", 0]], inCreative: true} ]);

Recipes.addShaped({id: BlockID.BlueBlock, count: 1, data: 0}, [
 "aaa",
 "aaa",
 "aaa"
], ['a', ItemID.blueK, 0]);

 
IDRegistry.genItemID("KRipP");
Item.createItem("KRipP", "Криповая пыль", {name: "KRipP", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.KRipP, count: 2, data: 0}, [
 "aaa",
 "aaa",
 "aaa"
], ['a', 289, 0]);


IDRegistry.genItemID("KripH");
Item.createArmorItem("KripH", "Криповый шлем", {name: "KripH"}, {type: "helmet", armor:2, durability: 100, texture: "armor/krip1_1.png"});

Recipes.addShaped({id: ItemID.KripH, count: 1, data: 0}, [
 "aaa",
 "a a",
 ""
], ['a', ItemID.KRipP, 0]);


IDRegistry.genItemID("KripC");
Item.createArmorItem("KripC", "Криповый нагрудник", {name: "KripCH"}, {type: "chestplate", armor:2, durability: 100, texture: "armor/krip1_1.png"});

Recipes.addShaped({id: ItemID.KripC, count: 1, data: 0}, [
 "a a",
 "aaa",
 "aaa"
], ['a', ItemID.KRipP, 0]);


IDRegistry.genItemID("KripL");
Item.createArmorItem("KripL", "Криповые поножи", {name: "KripLE"}, {type: "leggings", armor:2, durability: 100, texture: "armor/krip1_1.png"});

Recipes.addShaped({id: ItemID.KripL, count: 1, data: 0}, [
 "aaa",
 "a a",
 "a a"
], ['a', ItemID.KRipP, 0]);


IDRegistry.genItemID("KripB");
Item.createArmorItem("KripB", "Криповые ботинки", {name: "KripBO"}, {type: "boots", armor:2, durability: 100, texture: "armor/krip1_2.png"});

Recipes.addShaped({id: ItemID.KripB, count: 1, data: 0}, [
 "a a",
 "a a",
 ""
], ['a', ItemID.KRipP, 0]);


IDRegistry.genBlockID("KripBlock"); Block.createBlockWithRotation("KripBlock", [      {name: "Криповый блок", texture: [["Kripbl", 0], ["Kripbl", 0], ["Kripbl", 0], ["Kripbl", 0], ["Kripbl", 0], ["Kripbl", 0]], inCreative: true} ]);

Recipes.addShaped({id: BlockID.KripBlock, count: 1, data: 0}, [
 "aaa",
 "aaa",
 "aaa"
], ['a', ItemID.KRipP, 0]);


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
      var KRi  = parseInt(Math.random() * 3);
      World.drop(coords.x, coords.y, coords.z, ItemID.KRipP, KRi);
 }
});


IDRegistry.genItemID("Wybik");
Item.createItem("Wybik", "Костная пыль", {name: "Wybp", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Wybik, count: 4, data: 0}, [
 " a ",
 "aaa",
 " a "
], ['a', 352 , 0]);


IDRegistry.genItemID("Wybi");
Item.createItem("Wybi", "Костный слиток", {name: "Wybin", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Wybi, count: 4, data: 0}, [
 "aaa",
 "aba",
 "aaa"
], ['a', ItemID.Wyb , 0, 'b', 325 , 8]);


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
      var Wyb  = parseInt(Math.random() * 12);
      World.drop(coords.x, coords.y, coords.z, ItemID.Wybik, Wyb);
 }
});