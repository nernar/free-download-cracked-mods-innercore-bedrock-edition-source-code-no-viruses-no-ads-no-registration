IDRegistry.genItemID("spell_explosion");
Item.createItem("spell_explosion", "Spell [Magic explosion]", {name: "spell_explosion"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_explosion, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 3;
}});

