IDRegistry.genItemID("bootsMK3");
Item.createArmorItem("bootsMK3", "Traveller's Boots MK3", {name: "boots_mk", meta: 3}, {isTech: false, armor: 4, type: "boots", texture: "armor/boots_mk_3_layer_1.png", durability: 1024});
Boots.setEffect({id: ItemID.bootsMK3, type: [3], tick: function () {
    Entity.addEffect(Player.get(), 1, 2, 5, false, false);
}});
Recipes.addShaped({id: ItemID.bootsMK3, count: 1, data: 0}, ["dxd", "dbd", "   "], ["x", ItemID.bootsMK2, 0, "d", 264, 0, "b", 57, 0]);

