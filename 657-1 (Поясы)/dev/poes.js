IMPORT("HelperMod");
IDRegistry.genItemID("Poes");
Item.createArmorItem("Poes", "пояс копателя", {name: "Poes", meta: 0}, {	isTech: false,
	armor: 3,
	type: "leggings",
	texture: "armor/poyaa_1.png",
	durability: 1000
});
ARMOR.setMode({
	id: ItemID.Poes,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 3, 2, 25, false,false);
}
});
Recipes.addShaped({id: ItemID.Poes, count: 1, data: 0}, [
 "dyd",
 "yay",
 "dyd"
], ["y", 264, 0, "d", 334, 0, "a", 285, 0]);
//Сьеби От Сюда ПИДОРАС