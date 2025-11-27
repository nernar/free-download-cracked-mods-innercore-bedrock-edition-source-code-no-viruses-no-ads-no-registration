ToolAPI.addToolMaterial("DBonesw", {durability: 632, level: 3, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("DBonesh", {durability: 612, level: 2, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonep", {durability: 645, level: 3, efficiency: 3, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("DBoneaxe", {durability: 632, level: 2, efficiency: 3, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("DBonehoe", {durability: 618, level: 2, efficiency: 4, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Bonesw", {durability: 378, level: 3, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("Bonesh", {durability: 341, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonep", {durability: 383, level: 3, efficiency: 3, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("Boneaxe", {durability: 380, level: 2, efficiency: 3, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Bonehoe", {durability: 346, level: 2, efficiency: 3, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Destroyer", {durability: 520, level: 2, efficiency: 3, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("ChDestroyer", {durability: 610, level: 2, efficiency: 3, damage: 12, enchantability: 14});
//items(tools)
IDRegistry.genItemID("GBSword");
Item.createItem("GBSword", "Golden Bone Sword", {name: "BoneWitheredSword", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBSword, "DBonesw", ToolType.sword);

IDRegistry.genItemID("GBShovel");
Item.createItem("GBShovel", "Golden Bone Shovel", {name: "BoneWitheredShovel", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBShovel, "DBonesh", ToolType.shovel);

IDRegistry.genItemID("GBPickaxe");
Item.createItem("GBPickaxe", "Golden Bone Pickaxe", {name: "BoneWitheredPickaxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBPickaxe, "DBonep", ToolType.pickaxe);

IDRegistry.genItemID("GBAxe");
Item.createItem("GBAxe", "Golden Bone Axe", {name: "BoneWitheredAxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBAxe, "DBoneaxe", ToolType.axe);

IDRegistry.genItemID("GBHoe");
Item.createItem("GBHoe", "Golden Bone Hoe", {name: "BoneWitheredHoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);


ToolLib.setTool(ItemID.GBHoe, "DBonehoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.GBSword, [ItemID.Witherbone, ItemID.GBSword]);
Item.addRepairItemIds(ItemID.GBShovel, [ItemID.Witherbone, ItemID.GBShovel]);
Item.addRepairItemIds(ItemID.GBPickaxe, [ItemID.Witherbone, ItemID.GBPickaxe]);
Item.addRepairItemIds(ItemID.GBAxe, [ItemID.Witherbone, ItemID.GBAxe]);
Item.addRepairItemIds(ItemID.GBHoe, [ItemID.Witherbone, ItemID.GBHoe]);


IDRegistry.genItemID("BSword");
Item.createItem("BSword", "Bone Sword", {name: "BoneSword", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BSword, "Bonesw", ToolType.sword);

IDRegistry.genItemID("BShovel");
Item.createItem("BShovel", "Bone Shovel", {name: "BoneShovel", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BShovel, "Bonesh", ToolType.shovel);

IDRegistry.genItemID("BPickaxe");
Item.createItem("BPickaxe", "Bone Pickaxe", {name: "BonePickaxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BPickaxe, "Bonep", ToolType.pickaxe);

IDRegistry.genItemID("BAxe");
Item.createItem("BAxe", "Bone Axe", {name: "BoneAxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BAxe, "Boneaxe", ToolType.axe);

IDRegistry.genItemID("BHoe");
Item.createItem("BHoe", "Bone Hoe", {name: "BoneHoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BHoe, "Bonehoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.BSword, [352, ItemID.BSword]);
Item.addRepairItemIds(ItemID.BShovel, [352, ItemID.BShovel]);
Item.addRepairItemIds(ItemID.BPickaxe, [352, ItemID.BPickaxe]);
Item.addRepairItemIds(ItemID.BAxe, [352, ItemID.BAxe]);
Item.addRepairItemIds(ItemID.BHoe, [352, ItemID.BHoe]);

IDRegistry.genItemID("RCSteel");
Item.createItem("RCSteel", "Rime Crystal Steel", {name: "RimeCrystalSteel", meta: 0}, {stack: 4});

Recipes.addShaped({id: ItemID.RCSteel, count: 1, data: 0}, [
 "ooo",
 "odc",
 "ooo"
], ["c", ItemID.RimeCryst, 0, "d", 259, 0]);

Item.registerUseFunction("RCSteel", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  //PlaySoundFile("ignite.ogg")
  World.setBlock(place.x, place.y, place.z, BlockID.BlueFire);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

IDRegistry.genItemID("GBhammer");
Item.createItem("GBhammer", "Sleeping destroyer of the worlds", {name: "BoneWitheredHammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBhammer, count: 1, data: 0}, [
 "ccc",
 "cdc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBhammer, "Destroyer", ToolType.sword);

Item.addRepairItemIds(ItemID.GBhammer, [ItemID.Witherbone, ItemID.GBhammer]);


IDRegistry.genItemID("GBChammer");
Item.createItem("GBChammer", "Destroyer of the worlds", {name: "BoneHammerCh", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBChammer, count: 1, data: 0}, [
 "ooo",
 "cdo",
 "ooo"
], ["c", ItemID.GBhammer , 0, "d", ItemID.RCSteel, 0]);

ToolLib.setTool(ItemID.GBChammer, "ChDestroyer", ToolType.sword);

Item.addRepairItemIds(ItemID.GBChammer, [ItemID.GBChammer]);

IDRegistry.genItemID("silverSword");
IDRegistry.genItemID("silverShovel");
IDRegistry.genItemID("silverPickaxe");
IDRegistry.genItemID("silverAxe");
IDRegistry.genItemID("silverHoe");
Item.createItem("silverSword", "Silver Sword", {name: "silver_sword", meta: 0}, {stack: 1});
Item.createItem("silverShovel", "Silver Shovel", {name: "silver_shovel", meta: 0}, {stack: 1});
Item.createItem("silverPickaxe", "Silver Pickaxe", {name: "silver_pickaxe", meta: 0}, {stack: 1});
Item.createItem("silverAxe", "Silver Axe", {name: "silver_axe", meta: 0}, {stack: 1});
Item.createItem("silverHoe", "Silver Hoe", {name: "silver_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("silver", {durability: 734, level: 3, efficiency: 7, damage: 5, enchantability: 8});
ToolLib.setTool(ItemID.silverSword, "silver", ToolType.sword);
ToolLib.setTool(ItemID.silverShovel, "silver", ToolType.shovel);
ToolLib.setTool(ItemID.silverPickaxe, "silver", ToolType.pickaxe);
ToolLib.setTool(ItemID.silverAxe, "silver", ToolType.axe);
ToolLib.setTool(ItemID.silverHoe, "silver", ToolType.hoe);

Item.addRepairItemIds(ItemID.silverSword, [ItemID.ingotSilver, ItemID.silverSword]);
Item.addRepairItemIds(ItemID.silverShovel, [ItemID.ingotSilver, ItemID.silverShovel]);
Item.addRepairItemIds(ItemID.silverPickaxe, [ItemID.ingotSilver, ItemID.silverPickaxe]);
Item.addRepairItemIds(ItemID.silverAxe, [ItemID.ingotSilver, ItemID.silverAxe]);
Item.addRepairItemIds(ItemID.silverHoe, [ItemID.ingotSilver, ItemID.silverHoe]);

Recipes.addShaped({id: ItemID.silverSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);


IDRegistry.genItemID("ABSword");
IDRegistry.genItemID("ABShovel");
IDRegistry.genItemID("ABPickaxe");
IDRegistry.genItemID("ABAxe");
IDRegistry.genItemID("ABHoe");
Item.createItem("ABSword", "Amethysted Darkbone Sword", {name: "withered_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABShovel", "Amethysted Darkbone Shovel", {name: "withered_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABPickaxe", "Amethysted Darkbone Pickaxe", {name: "withered_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABAxe", "Amethysted Darkbone Axe", {name: "withered_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABHoe", "Amethysted Darkbone Hoe", {name: "withered_amedian_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ABDsw", {durability: 936, level: 4, efficiency: 4, damage: 10, enchantability: 9});
ToolAPI.addToolMaterial("ABDsh", {durability: 910, level: 4, efficiency: 6, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("ABDp", {durability: 967, level: 4, efficiency: 6, damage: 3, enchantability: 9});
ToolAPI.addToolMaterial("ABDaxe", {durability: 960, level: 4, efficiency: 6, damage: 5, enchantability: 9});
ToolAPI.addToolMaterial("ABDhoe", {durability: 892, level: 4, efficiency: 4, damage: 3, enchantability: 9});
ToolLib.setTool(ItemID.ABSword, "ABDsw", ToolType.sword);
ToolLib.setTool(ItemID.ABShovel, "ABDsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABPickaxe, "ABDp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABAxe, "ABDaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABHoe, "ABDhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABSword, [ItemID.Amethyst, ItemID.ABSword]);
Item.addRepairItemIds(ItemID.ABShovel, [ItemID.Amethyst, ItemID.ABShovel]);
Item.addRepairItemIds(ItemID.ABPickaxe, [ItemID.Amethyst, ItemID.ABPickaxe]);
Item.addRepairItemIds(ItemID.ABAxe, [ItemID.Amethyst, ItemID.ABAxe]);
Item.addRepairItemIds(ItemID.ABHoe, [ItemID.Amethyst, ItemID.ABHoe]);

Recipes.addShaped({id: ItemID.ABSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

IDRegistry.genItemID("ABBSword");
IDRegistry.genItemID("ABBShovel");
IDRegistry.genItemID("ABBPickaxe");
IDRegistry.genItemID("ABBAxe");
IDRegistry.genItemID("ABBHoe");
Item.createItem("ABBSword", "Blazed Darkbone Sword", {name: "blazed_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABBShovel", "Blazed Darkbone Shovel", {name: "blazed_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABBPickaxe", "Blazed Darkbone Pickaxe", {name: "blazed_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABBAxe", "Blazed Darkbone Axe", {name: "blazed_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABBHoe", "Blazed Darkbone Hoe", {name: "blazed_amedian_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ABBsw", {durability: 1128, level: 5, efficiency: 5, damage: 12, enchantability: 9});
ToolAPI.addToolMaterial("ABBsh", {durability: 1100, level: 5, efficiency: 7, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("ABBp", {durability: 1148, level: 5, efficiency: 7, damage: 4, enchantability: 9});
ToolAPI.addToolMaterial("ABBaxe", {durability: 1140, level: 5, efficiency: 7, damage: 6, enchantability: 9});
ToolAPI.addToolMaterial("ABBhoe", {durability: 1123, level: 5, efficiency: 5, damage: 3, enchantability: 9});
ToolLib.setTool(ItemID.ABBSword, "ABBsw", ToolType.sword);
ToolLib.setTool(ItemID.ABBShovel, "ABBsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABBPickaxe, "ABBp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABBAxe, "ABBaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABBHoe, "ABBhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABBSword, [ItemID.Amethyst, ItemID.ABBSword]);
Item.addRepairItemIds(ItemID.ABBShovel, [ItemID.Amethyst, ItemID.ABBShovel]);
Item.addRepairItemIds(ItemID.ABBPickaxe, [ItemID.Amethyst, ItemID.ABBPickaxe]);
Item.addRepairItemIds(ItemID.ABBAxe, [ItemID.Amethyst, ItemID.ABBAxe]);
Item.addRepairItemIds(ItemID.ABBHoe, [ItemID.Amethyst, ItemID.ABBHoe]);

Recipes.addShaped({id: ItemID.ABBSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);


IDRegistry.genItemID("ABFSword");
IDRegistry.genItemID("ABFShovel");
IDRegistry.genItemID("ABFPickaxe");
IDRegistry.genItemID("ABFAxe");
IDRegistry.genItemID("ABFHoe");
Item.createItem("ABFSword", "Frosted Darkbone Sword", {name: "frosted_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABFShovel", "Frosted Darkbone Shovel", {name: "frosted_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABFPickaxe", "Frosted Darkbone Pickaxe", {name: "frosted_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABFAxe", "Frosted Darkbone Axe", {name: "frosted_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABFHoe", "Frosted Darkbone Hoe", {name: "frosted_amedian_hoe", meta: 0}, {stack: 1});

ToolLib.setTool(ItemID.ABFSword, "ABBsw", ToolType.sword);
ToolLib.setTool(ItemID.ABFShovel, "ABBsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABFPickaxe, "ABBp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABFAxe, "ABBaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABFHoe, "ABBhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABFSword, [ItemID.Amethyst, ItemID.ABFSword]);
Item.addRepairItemIds(ItemID.ABFShovel, [ItemID.Amethyst, ItemID.ABFShovel]);
Item.addRepairItemIds(ItemID.ABFPickaxe, [ItemID.Amethyst, ItemID.ABFPickaxe]);
Item.addRepairItemIds(ItemID.ABFAxe, [ItemID.Amethyst, ItemID.ABFAxe]);
Item.addRepairItemIds(ItemID.ABFHoe, [ItemID.Amethyst, ItemID.ABFHoe]);

Recipes.addShaped({id: ItemID.ABFSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);