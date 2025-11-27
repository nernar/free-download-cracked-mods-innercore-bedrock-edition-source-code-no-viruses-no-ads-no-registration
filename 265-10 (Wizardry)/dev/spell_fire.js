IDRegistry.genItemID("spell_fire");
Item.createItem("spell_fire", "Spell [Ignition]", {name: "spell_fire"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_fire, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 4;
}});

