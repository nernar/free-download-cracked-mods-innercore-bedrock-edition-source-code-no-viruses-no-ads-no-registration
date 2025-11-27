IDRegistry.genItemID("goldendust");
Item.createItem("goldendust", "Золотая пыль", {name: "goldendust", meta: 0}, {stack: 64});

IDRegistry.genItemID("evildust");
Item.createItem("evildust", "Пыль Зла", {name: "evildust", meta: 0}, {stack: 64});
/*
IDRegistry.genItemID("jungleeye");
Item.createItem("jungleeye", "Глаз Тарантула", {name: "jungleeye", meta: 0}, {stack: 64});

IDRegistry.genItemID("junglesoup");
Item.createFoodItem("junglesoup", "§eСуп из глаз Тарантула§1 \n 3 еды \n Регенерация 2 на 10 секунд ", {name: "lemon", meta: 0}, {food: 3});

Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.junglesoup){
Entity.addEffect(Player.get(), 10, 1, 200, false,false);
}});

Recipes.addShaped({id: ItemID.junglesoup, count: 1, data: 0}, [ "aaa", " b ", "   "], ['a', ItemID.jungleeye, 0, 'b', 281, 0]);
*/


IDRegistry.genItemID("phantomsoul");
Item.createItem("phantomsoul", "Измученная душа", {name: "phantomsoul", meta: 0}, {stack: 64});



IDRegistry.genItemID("returnticket");
Item.createItem("returnticket", "Билет обратно", {name: "returnticket", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.returnticket, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.flisotuachewn, 0, 'b', 339, 0]);

IDRegistry.genItemID("ancientartephact");
Item.createItem("ancientartephact", "Древний Артефакт", {name: "ancientartephact", meta: 0}, {stack: 64});


























