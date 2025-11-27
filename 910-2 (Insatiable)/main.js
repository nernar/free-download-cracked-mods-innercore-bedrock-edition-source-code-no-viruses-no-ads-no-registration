//всё скопировано
//предметы
IDRegistry.genItemID("ccanibal");
Item.createFoodItem("ccanibal","Приготовленная собственная плоть",
{name: "ccanibal", meta: 0}, 
{food: 2});

IDRegistry.genItemID("canibal");
Item.createFoodItem("canibal","Собственная плоть",
{name: "canibal", meta: 0}, 
{food: 1});

IDRegistry.genItemID("coockedmeat");
Item.createFoodItem("coockedmeat","Приготовленная дичь",
{name: "coockedmeat", meta: 0}, 
{food: 8});

IDRegistry.genItemID("rawmeat");
Item.createFoodItem("rawmeat","Сырая дичь",
{name: "rawmeat", meta: 0}, 
{food: 4});

IDRegistry.genItemID("rawlightmeat");
Item.createFoodItem("rawlightmeat","Светлое мясо",
{name: "rawlightmeat", meta: 0}, 
{food: 4});

IDRegistry.genItemID("coockedlightmeat");
Item.createFoodItem("coockedlightmeat","Приготовленное светлое мясо",
{name: "coockedlightmeat", meta: 0}, 
{food: 8});

IDRegistry.genItemID("strangemeat");
Item.createFoodItem("strangemeat","Странное мясо",
{name: "strangemeat", meta: 0}, 
{food: 5});

IDRegistry.genItemID("bugguts");
Item.createFoodItem("bugguts","Внутренности насекомых",
{name: "bugguts", meta: 0}, 
{food: 2});

IDRegistry.genItemID("meatpie");
Item.createFoodItem("meatpie","Пирог с мясом",
{name: "meatpie", meta: 0}, 
{food: 16});

IDRegistry.genItemID("bugstew");
Item.createFoodItem("bugstew","Суп из насекомых",
{name: "bugstew", meta: 0}, 
{food: 16});

IDRegistry.genItemID("spidercoockie");
Item.createFoodItem("spidercoockie","Паучье печенье",
{name: "spidercoockie", meta: 0}, 
{food: 10});
//крафты
Recipes.addShaped({id: ItemID.meatpie, count: 1, data: 0}, [
 " ao",
 "ppp",
 "c  "
], ['a', ItemID.coockedmeat, 0, 'o', 391, 0, 'c', 281, 0, 'p', 296, 0]);

Recipes.addShaped({id: ItemID.meatpie, count: 1, data: 0}, [
 " ao",
 "ppp",
 "c  "
], ['a', ItemID.coockedmeat, 0, 'o', 457, 0, 'c', 281, 0, 'p', 296, 0]);

Recipes.addShaped({id: ItemID.meatpie, count: 1, data: 0}, [
 " ao",
 "ppp",
 "c  "
], ['a', ItemID.coockedmeat, 0, 'o', 393, 0, 'c', 281, 0, 'p', 296, 0]);

Recipes.addShaped({id: ItemID.meatpie, count: 1, data: 0}, [
 " ao",
 "ppp",
 "c  "
], ['a', ItemID.coockedmeat, 0, 'o', 392, 0, 'c', 281, 0, 'p', 296, 0]);

Recipes.addShaped({id: ItemID.spidercoockie, count: 1, data: 0}, [
 "oc ",
 "pap",
 " co"
], ['a', ItemID.bugguts, 0, 'o', 375, 0, 'c', 353, 0, 'p', 295, 0]);

Recipes.addShaped({id: ItemID.bugstew, count: 1, data: 0}, [
 "   ",
 "aop",
 "c  "
], ['a', ItemID.bugguts, 0, 'o', 3, 0, 'c', 281, 0, 'p', ItemID.strangemeat, 0]);

Recipes.addFurnace(ItemID.rawmeat, 0, ItemID.coockedmeat, 0);

Recipes.addFurnace(ItemID.rawlightmeat, 0, ItemID.coockedlightmeat, 0);

Recipes.addFurnace(ItemID.canibal, 0, ItemID.ccanibal, 0);
//эффекты
Callback.addCallback("FoodEaten",function(heal, satRatio)
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    
if(Player.getCarriedItem().id==ItemID.coockedmeat)
{
Entity.addEffect(Player.get(), 23, 0, 20*10)
}


if(Player.getCarriedItem().id==ItemID.canibal)
{
Entity.addEffect(Player.get(), 2, 0, 20*15)
Entity.addEffect(Player.get(), 4, 0, 20*15)
Entity.addEffect(Player.get(), 7, 0, 20*15)
Entity.addEffect(Player.get(), 9, 0, 20*15)
Entity.addEffect(Player.get(), 15, 0, 20*15)
Entity.addEffect(Player.get(), 17, 0, 20*15)
Entity.addEffect(Player.get(), 18, 0, 20*15)
Entity.addEffect(Player.get(), 19, 0, 20*10)
Entity.addEffect(Player.get(), 20, 0, 20*3)
}


if(Player.getCarriedItem().id==ItemID.ccanibal)
{
Entity.addEffect(Player.get(), 9, 0, 20*10)

}

if(Player.getCarriedItem().id==ItemID.rawmeat)
{
Entity.addEffect(Player.get(), 17, 0, 20*10)
}

if(Player.getCarriedItem().id==ItemID.bugguts)
{
Entity.addEffect(Player.get(), 19, 0, 20*1)
Entity.addEffect(Player.get(), 9, 0, 20*10)
}

if(Player.getCarriedItem().id==ItemID.strangemeat)
{
Entity.addEffect(Player.get(), 19, 0, 20*1)
Entity.addEffect(Player.get(), 9, 0, 20*10)
}

if(Player.getCarriedItem().id==ItemID.rawlightmeat)
{
Entity.addEffect(Player.get(), 9, 0, 20*10)
}
if(Player.getCarriedItem().id==ItemID.rawlightmeat)
{
Entity.addEffect(Player.get(), 9, 0, 20*10)
}

if(Player.getCarriedItem().id==ItemID.meatpie)
{
Entity.addEffect(Player.get(), 10, 0, 20*15)
}

if(Player.getCarriedItem().id==ItemID.spidercoockie)
{
Entity.addEffect(Player.get(), 16, 0, 20*25)
}

if(Player.getCarriedItem().id==ItemID.bugstew)
{
Entity.addEffect(Player.get(), 9, 0, 20*10)
}
});
//дроп
// изменяем дроп с зомби
Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 32){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 35){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});



Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 17){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 37){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 22){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 38){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 33){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 36){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 41){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 42){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 44){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 45){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 46){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 47){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 53){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 110){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 39){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 40){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 38){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 39){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 53){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 55){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 58){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 105){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.bugguts, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 49){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 50){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 110){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 74){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 108){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 109){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 111){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 112){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 120){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 15){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 14){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 19){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 23){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 24){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 25){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 28){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 29){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 75){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 30){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, 365, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 12){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.canibal, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 59){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 104){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 114){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 116){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 57){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});


Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 118){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.strangemeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 31){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawlightmeat, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 113){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.rawmeat, leth);
 }
});

