IDRegistry.genItemID("spell_freeze");
Item.createItem("spell_freeze", "Spell [Freeze]", {name: "spell_freeze"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_freeze, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 5;
}});

