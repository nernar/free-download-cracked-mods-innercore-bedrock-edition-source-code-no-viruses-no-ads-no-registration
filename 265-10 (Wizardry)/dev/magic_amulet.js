IDRegistry.genItemID("magic_amulet");
Item.createItem("magic_amulet", "Magic amulet", {name: "magic_amulet"}, {stack: 1});
Item.registerNameOverrideFunction(ItemID.magic_amulet, RARE_AMULET_NAME);
Wizard.registerBauble({id: ItemID.magic_amulet, type: "amulet", onEquip: function () {
    XP_DISCOUNT = 1;
}, onTakeOff: function () {
    XP_DISCOUNT = 0;
}});

