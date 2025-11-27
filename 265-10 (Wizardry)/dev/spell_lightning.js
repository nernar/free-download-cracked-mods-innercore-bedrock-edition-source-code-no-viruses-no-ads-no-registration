IDRegistry.genItemID("spell_lightning");
Item.createItem("spell_lightning", "Spell [Lightning strike]", {name: "spell_lightning"}, {stack: 1});
Wizard.registerBauble({id: ItemID.spell_lightning, type: "spell", onEquip: function () {
}, onTakeOff: function () {
    SPELL_TYPE = 0;
}, tick: function () {
    SPELL_TYPE = 7;
}});

