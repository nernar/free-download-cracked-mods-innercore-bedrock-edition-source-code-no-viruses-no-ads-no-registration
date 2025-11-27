/*
* МОЙ 1 МОД, НЕ ОСУЖДАЙТЕ ПЖ
* Я РЕАЛЬНО ПОСТАРАЛСЯ!
*————————————————
*НАСЧЁТ НЕБРЕЖНОГО КОДА, ВЫ ВООБЩЕ
*В ЧУЖОЙ КОД ЛЕЗИТЕ И ПОТОМ ЕЩЕ
*ГОВОРИТЕ ТИПА КОД КРИВОЙ! И ВООБЩЕ
*ЭТО МОЙ МОД ТАКЧТО УЙДИТЕ ОТСЮДА!
*/

IDRegistry.genBlockID("fly_maker");
Block.createBlock("fly_maker", [{name: "Fly maker", texture: [["vdown", 0], ["vtop", 0], ["vside", 0]], inCreative: true}]);
Translation.addTranslation("Fly maker", {"ru": "Генератор полёта"});
IDRegistry.genItemID("fly_plate");
Item.createItem("fly_plate", "Fly plate", {name: "fly_plate", meta: 0}, {stack: 16});
Translation.addTranslation("Fly plate", {"ru": "Пластина полёта"});


Recipes.addShaped({id: BlockID.fly_maker, count: 1, data: 0}, 
	["xbx","xax","xxx"],
	['b', 138, 0, 'a', 444, 0, 'x', ItemID.fly_plate, 0]
);
Recipes.addShaped({id: ItemID.fly_plate, count: 1, data: 0}, 
	["xxx","xax","xxx"],
	['x', 264, 0, 'a', 426, 0]
);

TileEntity.registerPrototype(BlockID.fly_maker, {
tick: function(){
Player.setFlyingEnabled(true);
}});