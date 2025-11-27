IDRegistry.genItemID("charredRedstone");
Item.createItem("charredRedstone", "Charred Redstone", {name: "charred_redstone", meta: 0}, {});
Recipes.addFurnace(331, ItemID.charredRedstone, 0);
IDRegistry.genItemID("charredPlate");
Item.createItem("charredPlate", "Charred Plate", {name: "charred_plate", meta: 0}, {});
Recipes.addShaped({id: ItemID.charredPlate, count: 2, data: 0}, [
	"ba"
], ['a', ItemID.charredRedstone, 0, 'b', 49, 0]); 
IDRegistry.genItemID("polymerClay");
Item.createItem("polymerClay", "Polymer Clay", {name: "polymer_clay", meta: 0}, {});
Recipes.addFurnace(336, ItemID.polymerClay, 0);
IDRegistry.genItemID("matterZombie");
Item.createItem("matterZombie", "§bMatter Zombie", {name: "matter", meta: 0}, {});
Item.setGlint(ItemID.matterZombie, true);
Recipes.addShaped({id: 367, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterZombie, 0]); 
Recipes.addShaped({id: 397, count: 1, data: 2}, [
	"aa",
	"aa"
], ['a', ItemID.matterZombie, 0]); 
IDRegistry.genItemID("matterSkeleton");
Item.createItem("matterSkeleton", "§bMatter Skeleton", {name: "matter", meta: 1}, {});
Item.setGlint(ItemID.matterSkeleton, true);
Recipes.addShaped({id: 352, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterSkeleton, 0]); 
Recipes.addShaped({id: 262, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterSkeleton, 0]); 
Recipes.addShaped({id: 261, count: 1, data: 0}, [
	"a"
], ['a', ItemID.matterSkeleton, 0]); 
Recipes.addShaped({id: 397, count: 1, data: 0}, [
	"aa",
	"aa"
], ['a', ItemID.matterSkeleton, 0]); 
IDRegistry.genItemID("matterCrepper");
Item.createItem("matterCrepper", "§bMatter Crepper", {name: "matter", meta: 2}, {});
Item.setGlint(ItemID.matterCrepper, true);
Recipes.addShaped({id: 289, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterCrepper, 0]); 
Recipes.addShaped({id: 397, count: 1, data: 4}, [
	"aa",
	"aa"
], ['a', ItemID.matterCrepper, 0]); 
IDRegistry.genItemID("matterSpider");
Item.createItem("matterSpider", "§bMatter Spider", {name: "matter", meta: 3}, {});
Item.setGlint(ItemID.matterSpider, true);
Recipes.addShaped({id: 287, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterSpider, 0]); 
Recipes.addShaped({id: 375, count: 1, data: 0}, [
	"a"
], ['a', ItemID.matterSpider, 0]); 
IDRegistry.genItemID("matterSlime");
Item.createItem("matterSlime", "§bMatter Slime", {name: "matter", meta: 4}, {});
Item.setGlint(ItemID.matterSlime, true);
Recipes.addShaped({id: 341, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterSlime, 0]); 
IDRegistry.genItemID("matterWitch");
Item.createItem("matterWitch", "§bMatter Witch", {name: "matter", meta: 5}, {});
Item.setGlint(ItemID.matterWitch, true);
Recipes.addShaped({id: 331, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterWitch, 0]); 
Recipes.addShaped({id: 348, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterWitch, 0]); 
Recipes.addShaped({id: 280, count: 8, data: 0}, [
	"a"
], ['a', ItemID.matterWitch, 0]); 
IDRegistry.genItemID("matterGhast");
Item.createItem("matterGhast", "§bMatter Ghast", {name: "matter", meta: 6}, {});
Item.setGlint(ItemID.matterGhast, true);
Recipes.addShaped({id: 370, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterGhast, 0]); 
IDRegistry.genItemID("matterWitherSkeleton");
Item.createItem("matterWitherSkeleton", "§bMatter Wither Skeleton", {name: "matter", meta: 7}, {});
Item.setGlint(ItemID.matterWitherSkeleton, true);
Recipes.addShaped({id: 263, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterWitherSkeleton, 0]); 
Recipes.addShaped({id: 397, count: 1, data: 1}, [
	"aa",
	"aa"
], ['a', ItemID.matterWitherSkeleton, 0]); 
IDRegistry.genItemID("matterBlaze");
Item.createItem("matterBlaze", "§bMatter Blaze", {name: "matter", meta: 8}, {});
Item.setGlint(ItemID.matterBlaze, true);
Recipes.addShaped({id: 369, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterBlaze, 0]); 
IDRegistry.genItemID("matterEnderman");
Item.createItem("matterEnderman", "§bMatter Enderman", {name: "matter", meta: 9}, {});
Item.setGlint(ItemID.matterEnderman, true);
Recipes.addShaped({id: 368, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterEnderman, 0]); 
IDRegistry.genItemID("matterWitherBoss");
Item.createItem("matterWitherBoss", "§bMatter Wither Boss", {name: "matter", meta: 10}, {});
Item.setGlint(ItemID.matterWitherBoss, true);
Recipes.addShaped({id: 399, count: 4, data: 0}, [
	"a"
], ['a', ItemID.matterWitherBoss, 0]); 
IDRegistry.genItemID("matterEnderDragon");
Item.createItem("matterEnderDragon", "§bMatter Ender Dragon", {name: "matter", meta: 11}, {});
Item.setGlint(ItemID.matterEnderDragon, true);
Recipes.addShaped({id: 122, count: 1, data: 0}, [
	"a"
], ['a', ItemID.matterEnderDragon, 0]); 
Recipes.addShaped({id: 397, count: 1, data: 5}, [
	"a"
], ['a', ItemID.matterEnderDragon, 0]); 
Recipes.addShaped({id: 437, count: 8, data: 0}, [
	"a"
], ['a', ItemID.matterEnderDragon, 0]); 
IDRegistry.genItemID("mobBlank");
Item.createItem("mobBlank", "§bMob Blank", {name: "mob_blank", meta: 0}, {});
Recipes.addShaped({id: ItemID.mobBlank, count: 1, data: 0}, [
	"bdb",
	"aca",
	"bdb"
], ['a', ItemID.charredRedstone, 0, 'b', 264, 0, 'c', 1, 0, 'd', ItemID.charredPlate, 0]); 
IDRegistry.genItemID("mobBlankZombie");
Item.createItem("mobBlankZombie", "§bMob Blank Zombie", {name: "mob_blank", meta: 1}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankZombie, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 367, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankZombie)
{
Player.addItemToInventory (ItemID.matterZombie, 1, 0);
  if(Math.random() < 0.20)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankSkeleton");
Item.createItem("mobBlankSkeleton", "§bMob Blank Skeleton", {name: "mob_blank", meta: 2}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankSkeleton, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 352, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankSkeleton)
{
Player.addItemToInventory (ItemID.matterSkeleton, 1, 0);
  if(Math.random() < 0.25)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankCrepper");
Item.createItem("mobBlankCrepper", "§bMob Blank Crepper", {name: "mob_blank", meta: 3}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankCrepper, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 289, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankCrepper)
{
Player.addItemToInventory (ItemID.matterCrepper, 1, 0);
  if(Math.random() < 0.25)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankSpider");
Item.createItem("mobBlankSpider", "§bMob Blank Spider", {name: "mob_blank", meta: 4}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankSpider, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 375, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankSpider)
{
Player.addItemToInventory (ItemID.matterSpider, 1, 0);
  if(Math.random() < 0.25)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankSlime");
Item.createItem("mobBlankSlime", "§bMob Blank Slime", {name: "mob_blank", meta: 5}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankSlime, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 341, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankSlime)
{
Player.addItemToInventory (ItemID.matterSlime, 1, 0);
  if(Math.random() < 0.25)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankWitch");
Item.createItem("mobBlankWitch", "§bMob Blank Witch", {name: "mob_blank", meta: 6}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankWitch, count: 1, data: 0}, [
	"abc"
], ['a', ItemID.mobBlank, 0, 'b', 280, 0, 'c', 348, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankWitch)
{
Player.addItemToInventory (ItemID.matterWitch, 1, 0);
  if(Math.random() < 0.30)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankGhast");
Item.createItem("mobBlankGhast", "§bMob Blank Ghast", {name: "mob_blank", meta: 7}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankGhast, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 370, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankGhast)
{
Player.addItemToInventory (ItemID.matterGhast, 1, 0);
  if(Math.random() < 0.30)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankWitherSkeleton");
Item.createItem("mobBlankWitherSkeleton", "§bMob Blank Wither Skeleton", {name: "mob_blank", meta: 8}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankWitherSkeleton, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 397, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankWitherSkeleton)
{
Player.addItemToInventory (ItemID.matterWitherSkeleton, 1, 0);
  if(Math.random() < 0.40)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankBlaze");
Item.createItem("mobBlankBlaze", "§bMob Blank Blaze", {name: "mob_blank", meta: 9}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankBlaze, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 377, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankBlaze)
{
Player.addItemToInventory (ItemID.matterBlaze, 1, 0);
  if(Math.random() < 0.35)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankEnderman");
Item.createItem("mobBlankEnderman", "§bMob Blank Enderman", {name: "mob_blank", meta: 10}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankEnderman, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 368, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankEnderman)
{
Player.addItemToInventory (ItemID.matterEnderman, 1, 0);
  if(Math.random() < 0.45)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankWitherBoss");
Item.createItem("mobBlankWitherBoss", "§bMob Blank Wither Boss", {name: "mob_blank", meta: 11}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankWitherBoss, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 399, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankWitherBoss)
{
Player.addItemToInventory (ItemID.matterWitherBoss, 1, 0);
  if(Math.random() < 0.75)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});
IDRegistry.genItemID("mobBlankEnderDragon");
Item.createItem("mobBlankEnderDragon", "§bMob Blank Ender Dragon", {name: "mob_blank", meta: 12}, {stack: 1});
Recipes.addShaped({id: ItemID.mobBlankEnderDragon, count: 1, data: 0}, [
	"ab"
], ['a', ItemID.mobBlank, 0, 'b', 437, 0]); 
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mobBlankEnderDragon)
{
Player.addItemToInventory (ItemID.matterEnderDragon, 1, 0);
  if(Math.random() < 0.85)
{
Player.setCarriedItem(ItemID.mobBlank, 1, 0);
}
}
});