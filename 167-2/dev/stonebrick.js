IDRegistry.genBlockID("andesite_brick");
Block.createBlockWithRotation("andesite_brick", [{name: "andesite brick", texture: [["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.andesite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 6]);

IDRegistry.genBlockID("diorite_brick");
Block.createBlockWithRotation("diorite_brick", [{name: "diorite brick", texture: [["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.diorite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 4]);

IDRegistry.genBlockID("granite_brick");
Block.createBlockWithRotation("granite_brick", [{name: "granite brick", texture: [["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.granite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 2]);

Recipes.addShaped({id: 351, count: 2, data: 0}, [
"xa","",""], ['x', 263, -1, 'a', 351, 15]);

