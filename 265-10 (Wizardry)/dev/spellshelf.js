IDRegistry.genBlockID("spell_shelf");
Block.createBlock("spell_shelf", [{name: "Spell shelf", texture: [["spellshelf_top", 0], ["spellshelf_top", 0], ["spellshelf", 0], ["spellshelf", 0], ["spellshelf", 0], ["spellshelf", 0]], inCreative: true}], "opaque");
var spellshelf_UI = new UI.StandartWindow({standart: {header: {text: {text: "Spell shelf"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [], elements: {"slot11": {type: "slot", x: 400, y: 240}, "slot12": {type: "slot", x: 460, y: 240}, "slot13": {type: "slot", x: 520, y: 240}, "slot14": {type: "slot", x: 580, y: 240}, "slot15": {type: "slot", x: 640, y: 240}, "slot16": {type: "slot", x: 700, y: 240}, "slot21": {type: "slot", x: 400, y: 300}, "slot22": {type: "slot", x: 460, y: 300}, "slot23": {type: "slot", x: 520, y: 300}, "slot24": {type: "slot", x: 580, y: 300}, "slot25": {type: "slot", x: 640, y: 300}, "slot26": {type: "slot", x: 700, y: 300}}});
TileEntity.registerPrototype(BlockID.spell_shelf, {defaultValues: {}, tick: function () {
}, click: function (id, count, data, coords) {
}, getGuiScreen: function () {
    return spellshelf_UI;
}});

