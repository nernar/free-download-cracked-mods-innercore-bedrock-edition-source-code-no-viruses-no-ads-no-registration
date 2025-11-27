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

IDRegistry.genBlockID("black_stone");
Block.createBlockWithRotation("black_stone", [{name: "black stone", texture: [["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone, count: 8, data: 0}, [
"xxx","xax","xxx"], ['x', 1, 0, 'a', 351, 0]);

IDRegistry.genBlockID("black_stone_bricks");
Block.createBlockWithRotation("black_stone_bricks", [{name: "black stone bricks", texture: [["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone_bricks, count: 4, data: 0}, [
"xx","xx",""], ['x', BlockID.black_stone, -1]);

IDRegistry.genBlockID("black_stone_smallbricks");
Block.createBlockWithRotation("black_stone_smallbricks", [{name: "black stone smallbricks", texture: [["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone_smallbricks, count: 4, data: 0}, [
"xx","xx",""], ['x', BlockID.black_stone_bricks, -1]);
