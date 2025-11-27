importLib("ENV", "*");

var ruby = ItemID.ruby;
var sapphire = ItemID.sapphire;
var jade = ItemID.jade;
var onyx = ItemID.onyx;
var nacre = ItemID.ruby;
var amet = ItemID.amethyst;

var ZC = {
typeOre: Block.createSpecialType({
	base: 56,
	destroytime: 2.634,
	opaque: true,
}, "ore"),

addOre: function(id){
IDRegistry.genBlockID(id + "Ore");
Block.createBlock(id + "Ore", [
{name: id + " ore", texture: [[id + "Ore", 0]], inCreative: true}
], this.typeOre);
},

addBlock: function(id){
IDRegistry.genBlockID(id + "Block");
Block.createBlock(id + "Block", [
{name: id + " block", texture: [[id + "Block", 0]], inCreative: true}
], this.typeOre);
},
	
addOreF: function(id, dropid, dropcount,mining){
  Block.registerDropFunction(id + "Ore", function(coords, blockID, blockData, level){
	if(level > mining){
		return [[dropid, dropcount, 0]]
	}
	return [];
}, 2);
   	},
 addMater: function(id){
ToolAPI.registerBlockMaterial(id, "stone");
},
	
genOreTiny: function(x, y, z, ore){for(var xx = -1; xx < 1; xx++){for(var yy = -1; yy < 1; yy++){var d = Math.sqrt(xx + yy*yy);var r = 1 - Math.random()/1;if(d < r){GenerationUtils.setLockedBlock(x+xx, y-yy, z);}}}},
	
sword: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.sword);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', idd, 0, 'b', 280, 0]);
},
shovel: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.shovel);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', idd, 0, 'b', 280, 0]);
},
pickaxe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.pickaxe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', idd, 0, 'b', 280, 0]);
},
axe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.axe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', idd, 0, 'b', 280, 0]);
},
hoe: function(id,mat,idd){ToolAPI.setTool(id, mat, ToolType.hoe);
Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aa",
	"b",
	"b",
], ['a', idd, 0, 'b', 280, 0]);
   }
}
Item.registerSetTools = function(mid){
	
IDRegistry.genItemID(mid + "");
IDRegistry.genItemID(mid + "Sword");
IDRegistry.genItemID(mid + "Shovel");
IDRegistry.genItemID(mid + "Pickaxe");
IDRegistry.genItemID(mid + "Axe");
IDRegistry.genItemID(mid + "Hoe");
Item.createItem(mid + "", mid + "", {name: mid + "", meta: 0}, {stack: 64});
Item.createItem(mid + "Sword", mid + " sword", {name: mid + "Sword", meta: 0}, {stack: 1});
Item.createItem(mid + "Shovel", mid + " shovel", {name: mid + "Spade", meta: 0}, {stack: 1});
Item.createItem(mid + "Pickaxe", mid + " pickaxe", {name: mid + "Pickaxe", meta: 0}, {stack: 1});
Item.createItem(mid + "Axe", mid + " axe", {name: mid + "Axe", meta: 0}, {stack: 1});
Item.createItem(mid + "Hoe", mid + " hoe", {name: mid + "Hoe", meta: 0}, {stack: 1});

}

ToolAPI.addToolMaterial("gold", {durability: 36, level: 2, efficiency: 15, damage: 0, enchantability: 14});

Item.registerSetTools("ruby");
Item.registerSetTools("sapphire");
Item.registerSetTools("jade");
Item.registerSetTools("onyx");
Item.registerSetTools("nacre");
Item.registerSetTools("amethyst");
/*Item.registerSetTools("fire");*/

Item.registerSetArmor = function(mid, dr, put){
	
IDRegistry.genItemID(mid + "Helmet");
IDRegistry.genItemID(mid + "Chestplate");
IDRegistry.genItemID(mid + "Leggings");
IDRegistry.genItemID(mid + "Boots");

Item.createArmorItem(mid + "Helmet", mid + " helmet", {name: mid + "Helmet"}, {type: "helmet", armor: 4, durability: dr, texture: put + "_layer_1.png"});
Item.createArmorItem(mid + "Chestplate", mid + " chestplate", {name: mid + "Chestplate"}, {type: "chestplate", armor: 8, durability: dr, texture: put + "_layer_1.png"});
Item.createArmorItem(mid + "Leggings", mid + " leggings", {name: mid + "Leggings"}, {type: "leggings", armor: 6, durability: dr, texture: put + "_layer_2.png"});
Item.createArmorItem(mid + "Boots", mid + " boots", {name: mid + "Boots"}, {type: "boots", armor: 2, durability: dr, texture: put + "_layer_1.png"});

}

Item.registerSetArmor("ruby", 2000, "armor/ruby");
Item.registerSetArmor("sapphire", 2000, "armor/sapphire");
Item.registerSetArmor("jade", 3000, "armor/jade");
Item.registerSetArmor("onyx", 4000, "armor/onyx");
Item.registerSetArmor("nacre", 5000, "armor/nacre");
Item.registerSetArmor("amethyst", 10000, "armor/amethyst");

ToolAPI.addToolMaterial("ruby", {durability: 2000, level: 4, efficiency: 15, damage: 6, enchantability: 14});
ZC.sword(ItemID.rubySword, "ruby", ruby);
ZC.shovel(ItemID.rubyShovel, "ruby", ruby);
ZC.pickaxe(ItemID.rubyPickaxe, "ruby", ruby);
ZC.axe(ItemID.rubyAxe, "ruby", ruby);
ZC.hoe(ItemID.rubyHoe, "ruby", ruby);

ZC.sword(ItemID.sapphireSword, "ruby", sapphire);
ZC.shovel(ItemID.sapphireShovel, "ruby", sapphire);
ZC.pickaxe(ItemID.sapphirePickaxe, "ruby", sapphire);
ZC.axe(ItemID.sapphireAxe, "ruby", sapphire);
ZC.hoe(ItemID.sapphireHoe, "ruby", sapphire);

ToolAPI.addToolMaterial("jade", {durability: 3000, level: 4, efficiency: 16, damage: 7, enchantability: 14});
ZC.sword(ItemID.jadeSword, "jade", jade);
ZC.shovel(ItemID.jadeShovel, "jade", jade);
ZC.pickaxe(ItemID.jadePickaxe, "jade", jade);
ZC.axe(ItemID.jadeAxe, "jade", jade);
ZC.hoe(ItemID.jadeHoe, "jade", jade);

ToolAPI.addToolMaterial("onyx", {durability: 4000, level: 4, efficiency: 17, damage: 8, enchantability: 14});
ZC.sword(ItemID.onyxSword, "onyx", onyx);
ZC.shovel(ItemID.onyxShovel, "onyx", onyx);
ZC.pickaxe(ItemID.onyxPickaxe, "onyx", onyx);
ZC.axe(ItemID.onyxAxe, "onyx", onyx);
ZC.hoe(ItemID.onyxHoe, "onyx", onyx);

ToolAPI.addToolMaterial("nacre", {durability: 5000, level: 4, efficiency: 19, damage: 9, enchantability: 14});
ZC.sword(ItemID.nacreSword, "nacre", nacre);
ZC.shovel(ItemID.nacreShovel, "nacre", nacre);
ZC.pickaxe(ItemID.nacrePickaxe, "nacre", nacre);
ZC.axe(ItemID.nacreAxe, "nacre", nacre);
ZC.hoe(ItemID.nacreHoe, "nacre", nacre);

ToolAPI.addToolMaterial("amethyst", {durability: 5000, level: 4, efficiency: 25, damage: 10, enchantability: 14});
ZC.sword(ItemID.amethystSword, "amethyst", amet);
ZC.shovel(ItemID.amethystShovel, "amethyst", amet);
ZC.pickaxe(ItemID.amethystPickaxe, "amethyst", amet);
ZC.axe(ItemID.amethystAxe, "amethyst", amet);
ZC.hoe(ItemID.amethystHoe, "amethyst", amet);