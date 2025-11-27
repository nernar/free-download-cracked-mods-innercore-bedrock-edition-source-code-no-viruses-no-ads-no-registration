ToolBuilder.addMaterial("bone", 90, 1, 2, 3);
Generator.setItem("bone_shard", {name: "Bone shard", texture: "bone_shard", stack: 64});
Generator.setItem("sharp_bone", {name: "Sharp bone", texture: "sharp_bone", stack: 1});
ToolBuilder.addMaterial("sharp_bone", 90, 1, 2, 3);
ToolAPI.setTool(ItemID.sharp_bone, "sharp_bone", ToolType.sword);
Generator.setItem("bone_sword", {name: "Bone sword", texture: "bone_sword", stack: 1});
ToolAPI.setTool(ItemID.bone_sword, "bone", ToolType.sword);
Item.registerUseFunction(352, function (c, item, block) {
    if (block.id == 1 || block.id == 4) {
        if (Math.random() <= 0.55) {
            Player.decreaseCarriedItem();
            Player.addItemToInventory(ItemID.sharp_bone, 1, 0);
        }
    }
});
Item.registerUseFunction(ItemID.sharp_bone, function (c, item, block) {
    if (block.id == 1 || block.id == 4) {
        if (Math.random() <= 0.55) {
            Player.decreaseCarriedItem();
            Player.addItemToInventory(ItemID.bone_shard, Math.random() * 2, 0);
        }
    }
});
ToolBuilder.setPickaxe("bone");
ToolBuilder.setAxe("bone");
ToolBuilder.setShovel("bone");
ToolBuilder.setWorkblade("bone");
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.bone_pickaxe, count: 1, data: 0}, ["btb", "fsf", " s "], ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.bone_shovel, count: 1, data: 0}, [" fb", " tf", "s  "], ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.bone_workblade, count: 1, data: 0}, [" fb", "ftf", "sf "], ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
    Recipes.addShaped({id: ItemID.bone_axe, count: 1, data: 0}, ["bft", "fsf", " s "], ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0]);
});

