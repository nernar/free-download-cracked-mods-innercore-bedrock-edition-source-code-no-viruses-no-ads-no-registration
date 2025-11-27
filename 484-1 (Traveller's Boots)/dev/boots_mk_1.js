IDRegistry.genItemID("bootsMK1");
Item.createArmorItem("bootsMK1", "Traveller's Boots MK1", {name: "boots_mk", meta: 1}, {isTech: false, armor: 1, type: "boots", texture: "armor/boots_mk_1_layer_1.png", durability: 256});
Boots.setEffect({id: ItemID.bootsMK1, type: [3], tick: function () {
    Entity.addEffect(Player.get(), 1, 0, 5, false, false);
}});
Recipes.addShaped({id: ItemID.bootsMK1, count: 1, data: 0}, ["lxl", "lil", "   "], ["x", 309, 0, "l", 334, 0, "i", 265, 0]);

