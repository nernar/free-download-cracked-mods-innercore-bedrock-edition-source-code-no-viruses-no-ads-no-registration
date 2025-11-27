IDRegistry.genItemID("bootsMK2");
Item.createArmorItem("bootsMK2", "Traveller's Boots MK2", {name: "boots_mk", meta: 2}, {isTech: false, armor: 2, type: "boots", texture: "armor/boots_mk_2_layer_1.png", durability: 512});
Boots.setEffect({id: ItemID.bootsMK2, type: [3], tick: function () {
    Entity.addEffect(Player.get(), 1, 1, 5, false, false);
}});
Recipes.addShaped({id: ItemID.bootsMK2, count: 1, data: 0}, ["gxg", "gbg", "   "], ["x", ItemID.bootsMK1, 0, "g", 266, 0, "b", 41, 0]);

