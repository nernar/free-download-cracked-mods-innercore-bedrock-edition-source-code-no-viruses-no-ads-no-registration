IDRegistry.genItemID("spell_summon");
Item.createItem("spell_summon", "Spell [Summon golem]", {name: "spell_summon"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_summon, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 8;
}});

