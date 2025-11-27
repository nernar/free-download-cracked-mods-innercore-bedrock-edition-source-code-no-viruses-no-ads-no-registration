IDRegistry.genItemID("lumar");
Item.createItem("lumar", "Lumar", {name: "lumar"}, {isTech: true});

Item.registerIconOverrideFunction(ItemID.lumar, function(item, name){
	return {name: "lumar", meta: item.data}
});

var LumarNameEn = ["White Lumar", "Orange Lumar", "Magenta Lumar", "Light Blue Lumar", "Yellow Lumar", "Lime Lumar", "Pink Lumar", "Gray Lumar", "Light Gray Lumar", "Cyan Lumar", "Purple Lumar", "Blue Lumar", "Brown Lumar", "Green Lumar", "Red Lumar", "Black Lumar"];
var LumarNameRu = ["Белый светодиод", "Оранжевый светодиод", "Пурпурный светодиод", "Голубой светодиод", "Жёлтый светодиод", "Лаймовый светодиод", "Розовый светодиод", "Серый светодиод", "Светло-серый светодиод", "Бирюзовый светодиод", "Фиолетовый светодиод", "Синий светодиод", "Коричневый светодиод", "Зелёный светодиод", "Красный светодиод", "Чёрный светодиод"];
for(var i = 0; i < 16; i++){
	Translation.addTranslation(LumarNameEn[i], {ru: LumarNameRu[i]});
}
Item.registerNameOverrideFunction(ItemID.lumar, function(item, name){
	return Translation.translate(LumarNameEn[item.data]);
});

for(var i = 0; i < 16; i++){
	Recipes.addShaped({id: ItemID.lumar, count: 2, data: i}, [
		"xa",
		"bx"
	], ['x', 351, 15 - i, 'a', 348, 0, 'b', 331, 0]);
}
