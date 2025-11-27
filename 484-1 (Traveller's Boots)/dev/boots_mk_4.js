IDRegistry.genItemID("bootsMK4");
Item.createArmorItem("bootsMK4", "Traveller's Boots MK4", {name: "boots_mk", meta: 4}, {isTech: false, armor: 6, type: "boots", texture: "armor/boots_mk_4_layer_1.png", durability: 2048});
Boots.setEffect({id: ItemID.bootsMK4, type: [3], tick: function () {
    Entity.addEffect(Player.get(), 1, 4, 5, false, false);
    Entity.addEffect(Player.get(), 8, 1, 5, false, false);
}});
Recipes.addShaped({id: ItemID.bootsMK4, count: 1, data: 0}, ["dxd", "ebe", "   "], ["x", ItemID.bootsMK3, 0, "d", 264, 0, "b", 133, 0, "e", 388, 0]);

