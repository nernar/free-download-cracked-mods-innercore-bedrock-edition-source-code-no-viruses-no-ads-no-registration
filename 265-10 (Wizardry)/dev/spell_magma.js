IDRegistry.genItemID("spell_magma");
Item.createItem("spell_magma", "Spell [Magmatic prison]", {name: "spell_magma"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_magma, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 9;
}});

