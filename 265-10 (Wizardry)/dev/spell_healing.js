IDRegistry.genItemID("spell_healing");
Item.createItem("spell_healing", "Spell [Healing]", {name: "spell_healing"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_healing, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 6;
}});

