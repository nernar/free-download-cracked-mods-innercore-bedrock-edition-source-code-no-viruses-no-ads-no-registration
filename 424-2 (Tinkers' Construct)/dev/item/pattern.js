IDRegistry.genItemID("pattern_blank");
Item.createItem("pattern_blank", "Blank Pattern", {name: "pattern_blank"});
Recipes.addShaped({id: ItemID.pattern_blank}, ["ab", "ba"], ["a", 5, -1, "b", 280, 0]);

Material.createCast("rod", 0.5, "Tool Rod");
Material.createCast("pickaxe", 1, "Pickaxe Head");
Material.createCast("shovel", 1, "Shovel Head");
Material.createCast("hatchet", 1, "Axe Head");
Material.createCast("sword", 1, "Sword Blade");
Material.createCast("guard", 0.5, "Wide Guard");
Material.createCast("binding", 0.5, "Tool Binding");
Material.createCast("rod2", 3, "Tough Rod");
Material.createCast("binding2", 3, "Tough Binding");
Material.createCast("plate", 8, "Large Plate");
Material.createCast("lumberaxe", 8, "Broad Axe Head");
Material.createCast("scythe", 8, "Scythe Head");
Material.createCast("excavator", 8, "Excavator Head");
Material.createCast("hammer", 8, "Hammer Head");


IDRegistry.genItemID("slime_crystal");
Item.createItem("slime_crystal", "Slime Crystal", {name: "slime_crystal"});
Recipes.addFurnace(BlockID.slimy_mud, ItemID.slime_crystal);

IDRegistry.genItemID("paper_stack");
Item.createItem("paper_stack", "Paper Stack", {name: "paper_stack"});
Recipes.addShaped({id: ItemID.paper_stack}, ["aa", "aa"], ["a", 339, 0]);

IDRegistry.genItemID("shard_stone");
Item.createItem("shard_stone", "Stone Shard", {name: "shard_stone"});

IDRegistry.genItemID("shard_flint");
Item.createItem("shard_flint", "Flint Shard", {name: "shard_flint"});

IDRegistry.genItemID("shard_cactus");
Item.createItem("shard_cactus", "Cactus Shard", {name: "shard_cactus"});

IDRegistry.genItemID("shard_obsidian");
Item.createItem("shard_obsidian", "Obsidian Shard", {name: "shard_obsidian"});

IDRegistry.genItemID("shard_netherrack");
Item.createItem("shard_netherrack", "Netherrack Shard", {name: "shard_netherrack"});

IDRegistry.genItemID("shard_slime");
Item.createItem("shard_slime", "Slime Shard", {name: "shard_slime"});


Material.registerMaterial(5, -1, "wooden", 1);
Material.registerMaterial(4, -1, "stone", 1);
Material.registerMaterial(318, -1, "flint", 1);
Material.registerMaterial(81, -1, "cactus", 1);
Material.registerMaterial(352, -1, "bone", 1);
Material.registerMaterial(49, -1, "obsidian", 1);
Material.registerMaterial(87, -1, "netherrack", 1);
Material.registerMaterial(ItemID.slime_crystal, -1, "slime", 1);
Material.registerMaterial(ItemID.paper_stack, -1, "paper", 1);

Material.registerShard(280, 0, "wooden");
Material.registerShard(ItemID.shard_stone, 0, "stone");
Material.registerShard(ItemID.shard_flint, 0, "flint");
Material.registerShard(ItemID.shard_cactus, 0, "cactus");
Material.registerShard(351, 15, "bone");
Material.registerShard(ItemID.shard_obsidian, 0, "obsidian");
Material.registerShard(ItemID.shard_netherrack, 0, "netherrack");
Material.registerShard(ItemID.shard_slime, 0, "slime");
Material.registerShard(339, 0, "paper");