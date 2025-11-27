ToolAPI.addToolMaterial("DBonesw", {durability: 512, level: 3, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("DBonesh", {durability: 512, level: 2, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonep", {durability: 512, level: 3, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBoneaxe", {durability: 512, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonehoe", {durability: 512, level: 2, efficiency: 4, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Bonesw", {durability: 350, level: 3, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("Bonesh", {durability: 350, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonep", {durability: 350, level: 3, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Boneaxe", {durability: 350, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonehoe", {durability: 350, level: 2, efficiency: 3, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Destroyer", {durability: 520, level: 2, efficiency: 3, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("ChDestroyer", {durability: 610, level: 2, efficiency: 3, damage: 12, enchantability: 14});
//items(tools)
IDRegistry.genItemID("GBSword");
Item.createItem("GBSword", "Golden Bone Sword", {name: "BoneWitheredSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBSword, true);

Recipes.addShaped({id: ItemID.GBSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBSword, "DBonesw", ToolType.sword);

IDRegistry.genItemID("GBShovel");
Item.createItem("GBShovel", "Golden Bone Shovel", {name: "BoneWitheredShovel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBShovel, true);

Recipes.addShaped({id: ItemID.GBShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBShovel, "DBonesh", ToolType.shovel);

IDRegistry.genItemID("GBPickaxe");
Item.createItem("GBPickaxe", "Golden Bone Pickaxe", {name: "BoneWitheredPickaxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBPickaxe, true);

Recipes.addShaped({id: ItemID.GBPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBPickaxe, "DBonep", ToolType.pickaxe);

IDRegistry.genItemID("GBAxe");
Item.createItem("GBAxe", "Golden Bone Axe", {name: "BoneWitheredAxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBAxe, true);
Recipes.addShaped({id: ItemID.GBAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBAxe, "DBoneaxe", ToolType.axe);

IDRegistry.genItemID("GBHoe");
Item.createItem("GBHoe", "Golden Bone Hoe", {name: "BoneWitheredHoe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBHoe, true);
Recipes.addShaped({id: ItemID.GBHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBHoe, "DBonehoe", ToolType.hoe);

IDRegistry.genItemID("BSword");
Item.createItem("BSword", "Bone Sword", {name: "BoneSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BSword, true);

Recipes.addShaped({id: ItemID.BSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BSword, "Bonesw", ToolType.sword);

IDRegistry.genItemID("BShovel");
Item.createItem("BShovel", "Bone Shovel", {name: "BoneShovel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BShovel, true);

Recipes.addShaped({id: ItemID.BShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BShovel, "Bonesh", ToolType.shovel);

IDRegistry.genItemID("BPickaxe");
Item.createItem("BPickaxe", "Bone Pickaxe", {name: "BonePickaxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BPickaxe, true);

Recipes.addShaped({id: ItemID.BPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BPickaxe, "Bonep", ToolType.pickaxe);

IDRegistry.genItemID("BAxe");
Item.createItem("BAxe", "Bone Axe", {name: "BoneAxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BAxe, true);
Recipes.addShaped({id: ItemID.BAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BAxe, "Boneaxe", ToolType.axe);

IDRegistry.genItemID("BHoe");
Item.createItem("BHoe", "Bone Hoe", {name: "BoneHoe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BHoe, true);
Recipes.addShaped({id: ItemID.BHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BHoe, "Bonehoe", ToolType.hoe);

IDRegistry.genItemID("RCSteel");
Item.createItem("RCSteel", "Rime Crystal Steel", {name: "RimeCrystalSteel", meta: 0}, {stack: 4});
Item.setToolRender(ItemID.RCSteel, true);
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
Item.setToolRender(ItemID.GBhammer, true);
Recipes.addShaped({id: ItemID.GBhammer, count: 1, data: 0}, [
 "ccc",
 "cdc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBhammer, "Destroyer", ToolType.sword);

IDRegistry.genItemID("GBChammer");
Item.createItem("GBChammer", "Destroyer of the worlds", {name: "BoneHammerCh", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBChammer, true);
Recipes.addShaped({id: ItemID.GBChammer, count: 1, data: 0}, [
 "ooo",
 "cdo",
 "ooo"
], ["c", ItemID.GBhammer , 0, "d", ItemID.RCSteel, 0]);

ToolAPI.setTool(ItemID.GBChammer, "ChDestroyer", ToolType.sword);

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

ToolAPI.addToolMaterial("silver", {durability: 526, level: 3, efficiency: 8, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.silverSword, "silver", ToolType.sword);
ToolAPI.setTool(ItemID.silverShovel, "silver", ToolType.shovel);
ToolAPI.setTool(ItemID.silverPickaxe, "silver", ToolType.pickaxe);
ToolAPI.setTool(ItemID.silverAxe, "silver", ToolType.axe);
ToolAPI.setTool(ItemID.silverHoe, "silver", ToolType.hoe);


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