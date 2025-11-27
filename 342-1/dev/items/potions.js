
var val = Force.getValue();

IDRegistry.genItemID("forcepotion");
Item.createItem("forcepotion", "§dЗелье силы\n§r +1 сила", {name: "forcepotion", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion2");
Item.createItem("forcepotion2", "§dЗелье силы\n§r +3 силы", {name: "forcepotion2", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion3");
Item.createItem("forcepotion3", "§dЗелье силы\n§r +5 силы", {name: "forcepotion3", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion4");
Item.createItem("forcepotion4", "§dЗелье силы\n§r +8 силы", {name: "forcepotion4", meta: 0}, {stack: 3});

IDRegistry.genItemID("forcepotion5");
Item.createItem("forcepotion5", "§dЗелье силы\n§r +10 сил", {name: "forcepotion5", meta: 0}, {stack: 3});


Recipes.addShaped({id: ItemID.forcepotion, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.fireleavpetal, 0, 'b', 374, 0]);


Recipes.addShaped({id: ItemID.forcepotion2, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 39, 0, 'b', ItemID.forcepotion, 0]);

Recipes.addShaped({id: ItemID.forcepotion2, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 40, 0, 'b', ItemID.forcepotion, 0]);

Recipes.addShaped({id: ItemID.forcepotion3, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 377, 0, 'b', ItemID.forcepotion2, 0]);



Recipes.addShaped({id: ItemID.forcepotion4, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 432, 0, 'b', ItemID.forcepotion3, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
	var val = Force.getValue();
if (item.id==ItemID.forcepotion && val <= 19)
{
Force.increase();
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion2  && val <= 17)
{
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion3  && val <= 15)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion4  && val <= 11)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forcepotion5  && val <= 10)
{
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
Force.increase();
}
});