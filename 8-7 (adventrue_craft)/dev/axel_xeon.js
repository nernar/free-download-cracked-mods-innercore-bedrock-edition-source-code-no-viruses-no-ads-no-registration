var MEGA_ANDROMEDA = Block.createSpecialType({base: 1, solid: true, destroytime: 3, explosionres: 3}, "stone");
IDRegistry.genBlockID("axel");
Block.createBlock("axel", [{name: "Axel Block", texture: [["axel", 0]], inCreative: true}], MEGA_ANDROMEDA);
IDRegistry.genBlockID("xeon");
Block.createBlock("xeon", [{name: "Xeon Block", texture: [["xeon", 0]], inCreative: true}], MEGA_ANDROMEDA);
Recipes.addShaped({id: BlockID.axel, count: 1, data: 0}, ["xxx", "xxx", "xxx"], ["x", ItemID.axelIngot, 0]);
Recipes.addShaped({id: BlockID.xeon, count: 1, data: 0}, ["xxx", "xxx", "xxx"], ["x", ItemID.xeonIngot, 0]);
Recipes.addShaped({id: ItemID.axelIngot, count: 9, data: 0}, ["x"], ["x", BlockID.axel, 0]);
Recipes.addShaped({id: ItemID.xeonIngot, count: 9, data: 0}, ["x"], ["x", BlockID.xeon, 0]);

