IDRegistry.genItemID("moss_ball");
Item.createItem("moss_ball", "Ball of Moss", {name: "moss_ball"});
Recipes.addShaped({id: ItemID.moss_ball}, ["aaa", "aaa", "aaa"], ["a", 48, 0]);
Recipes.addShaped({id: ItemID.moss_ball}, ["aaa", "aaa", "aaa"], ["a", 98, 1]);

IDRegistry.genItemID("lava_crystal");
Item.createItem("lava_crystal", "Lava Crystal", {name: "lava_crystal"});
Recipes.addShaped({id: ItemID.lava_crystal}, ["aba", "bcb", "aba"], ["a", 385, 0, "b", 369, 0, "c", 325, 10], function(api, field){
	for(let i = 9; i--;){
		if(i == 4){
			field[i].data = 0;
			continue;
		}
		api.decreaseFieldSlot(i);
	}
});

IDRegistry.genItemID("silky_cloth");
Item.createItem("silky_cloth", "Silky Cloth", {name: "silky_cloth"});
Recipes.addShaped({id: ItemID.silky_cloth}, ["aaa", "aba", "aaa"], ["a", 287, 0, "b", 371, 0]);
Recipes.addShaped({id: ItemID.silky_cloth}, ["aaa", "aba", "aaa"], ["a", 287, 0, "b", ItemID.nugget_alubrass, 0]);

IDRegistry.genItemID("silky_jewel");
Item.createItem("silky_jewel", "Silky Jewel", {name: "silky_jewel"});
Recipes.addShaped({id: ItemID.silky_jewel}, ["oao", "aba", "oao"], ["a", ItemID.silky_cloth, 0, "b", 388, 0]);

IDRegistry.genItemID("necrotic_bone");
Item.createItem("necrotic_bone", "Necrotic Bone", {name: "necrotic_bone"});

Callback.addCallback("EntityDeath", function(ent, attacker){
	if(Entity.getType(ent) == 48 && Math.random() < (attacker == player ? 0.1 : 0.05)){
		const pos = Player.getPosition();
		World.drop(pos.x, pos.y, pos.z, ItemID.necrotic_bone, 1);
	}
});


Tool.addModifierRecipe("add1", {id: 264}, {id: 41});
Tool.addModifierRecipe("add2", {id: 466}, {id: 57});
Tool.addModifierRecipe("add3", {id: 399}, {});
Tool.addModifierRecipe("diamond", {id: 264}, {});
Tool.addModifierRecipe("emerald", {id: 388}, {});
Tool.addModifierRecipe("redstone", {id: 331}, {});
Tool.addModifierRecipe("moss", {id: ItemID.moss_ball}, {});
Tool.addModifierRecipe("lava", {id: ItemID.lava_crystal}, {});
Tool.addModifierRecipe("lapis", {id: 351, data: 4}, {});
Tool.addModifierRecipe("quartz", {id: 406}, {});
Tool.addModifierRecipe("blaze", {id: 377}, {});
Tool.addModifierRecipe("necrotic", {id: ItemID.necrotic_bone}, {});
Tool.addModifierRecipe("silky", {id: ItemID.silky_jewel}, {});
Tool.addModifierRecipe("reinforced", {id: ItemID.part_plate_obsidian}, {});
Tool.addModifierRecipe("piston", {id: 33}, {});
Tool.addModifierRecipe("head", {id: 368}, {id: 49});
Tool.addModifierRecipe("spider", {id: 376}, {});
Tool.addModifierRecipe("smite", {id: BlockID.consecrated_soil}, {});