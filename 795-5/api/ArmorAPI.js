//Author Abdulla Nagmetdulla

var ARMOR = {
	
	setMode: function(arg){
       Callback.addCallback("tick",function() {
           if(Player.getArmorSlot(arg.type[0]).id == arg.id){
	          arg.tick();
    }})}
    
};

//Author Creeper Blue

var Helmet = {
	addArmor: function(id, nome, ponto, dura, enchanty){
  Item.addCreativeGroup("helmet", "Helmet", [
    IDRegistry.genItemID(id)
]);
  Item.createArmorItem(id, nome + " Helmet", {name: nome + "_armor", meta: 0}, {	isTech: false,
	armor: ponto,
	type: "helmet",
	texture: "armor/" + nome + "_1.png",
	durability: dura,
});
  Item.setEnchantType(ItemID[id], Native.EnchantType.helmet, enchanty);
}};

var Chestplate = {
	addArmor: function(id, nome, ponto, dura, enchanty){
  Item.addCreativeGroup("chestplate", "Chesplate", [
    IDRegistry.genItemID(id)
]);
  Item.createArmorItem(id, nome + " Chestplate", {name: nome + "_armor", meta: 1}, {	isTech: false,
	armor: ponto,
	type: "chestplate",
	texture: "armor/" + nome + "_1.png",
	durability: dura,
});
  Item.setEnchantType(ItemID[id], Native.EnchantType.chestplate, enchanty);
}};

var Leggings = {
	addArmor: function(id, nome, ponto, dura, enchanty){
  Item.addCreativeGroup("leggings", "Leggings", [
    IDRegistry.genItemID(id)
]);
  Item.createArmorItem(id, nome + " Leggings", {name: nome + "_armor", meta: 2}, {	isTech: false,
	armor: ponto,
	type: "leggings",
	texture: "armor/" + nome + "_2.png",
	durability: dura,
});
  Item.setEnchantType(ItemID[id], Native.EnchantType.leggings, enchanty);
}};

var Boots = {
	addArmor: function(id, nome, ponto, dura, enchanty){
  Item.addCreativeGroup("boots", "Boots", [
    IDRegistry.genItemID(id)
]);
  Item.createArmorItem(id, nome + " Boot", {name: nome + "_armor", meta: 3}, {	isTech: false,
	armor: ponto,
	type: "boots",
	texture: "armor/" + nome + "_1.png",
	durability: dura,
});
  Item.setEnchantType(ItemID[id], Native.EnchantType.boots, enchanty);
}};

registerAPIUnit("ARMOR", ARMOR);
registerAPIUnit("Helmet", Helmet);
registerAPIUnit("Chestplate", Chestplate);
registerAPIUnit("Leggings", Leggings);
registerAPIUnit("Boots", Boots);