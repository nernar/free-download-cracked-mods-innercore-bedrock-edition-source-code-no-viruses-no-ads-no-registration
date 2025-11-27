/*
Author: Abdulla Nagmetdulla,
version: 0.1,
description: "ToolLIB API".
*/

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 3
}, "stone");

var Translate = function(en, rus){
	Translation.addTranslation(en,{ru: rus});
}

var ToolLIB = {
   register: function(lol){
 if(!lol.params.uid){
            Logger.Log("ToolLIB API params uid undefined", "ERROR");
            return;
 }
if(!lol.params.textures.meta){
	lol.params.textures.meta = 0;
}
if(!lol.params.textures.name){
	lol.params.textures.name = "stick"
}
lol.funcs.material = ToolAPI.toolMaterials[lol.funcs.material] || lol.funcs.material;
    if(lol.funcs.prototype.useItem){
		Item.registerUseFunctionForID(ItemID[lol.params.uid], lol.funcs.prototype.useItem);
	}
	if(lol.funcs.prototype.destroyBlock){
		Callback.addCallback("DestroyBlock", function(coords, block, player){
			if(Player.getCarriedItem(true).id == ItemID[lol.params.uid]){
				lol.funcs.prototype.destroyBlock(coords, coords.side, item, block);
			}
		});/*AbdullaNagmetdulla*/
	}
	IDRegistry.genItemID(lol.params.uid);
    Item.createItem(lol.params.uid, lol.params.name, {name: lol.params.textures.name, meta: lol.params.textures.meta}, {stack: 1});
    ToolAPI.registerTool(ItemID[lol.params.uid], lol.funcs.material, lol.funcs.prototype);
    Item.setToolRender(ItemID[lol.params.uid], lol.funcs.isTool);
    if(lol.funcs.enchantType){
    Item.setEnchantType(ItemID[lol.params.uid], lol.funcs.enchantType, lol.funcs.material.enchantability);}
    }
}

var Marines = {
	setArmorSet: function(lol, arg){
IDRegistry.genItemID(lol + "Helmet");
Item.createArmorItem(lol+"Helmet", 
arg.name+" Helmet", 
{name: lol+"helmet", meta: 0}, {
    isTech: false,
	armor: arg.armor,
	type: "helmet",
	texture: "armor/"+lol+"_layer_1.png",
	durability: arg.durability
});
IDRegistry.genItemID(lol + "Chestplate");
Item.createArmorItem(lol+"Chestplate", 
arg.name+" Chestplate", 
{name: lol+"chestplate", meta: 0}, {
    isTech: false,
	armor: arg.armor,
	type: "chestplate",
	texture: "armor/"+lol+"_layer_1.png",
	durability: arg.durability
});
IDRegistry.genItemID(lol + "Leggings");
Item.createArmorItem(lol+"Leggings", 
arg.name+" Leggings", 
{name: lol+"leggings", meta: 0}, {
    isTech: false,
	armor: arg.armor,
	type: "leggings",
	texture: "armor/"+lol+"_layer_2.png",
	durability: arg.durability
});
IDRegistry.genItemID(lol + "Boots");
Item.createArmorItem(lol+"Boots", 
arg.name+" Boots", 
{name: lol+"boots", meta: 0}, {
    isTech: false,
	armor: arg.armor,
	type: "boots",
	texture: "armor/"+lol+"_layer_1.png",
	durability: arg.durability
});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[lol+"Helmet"], count: 1, data: 0}, [
	"aaa",
	"a a"
], ['a', arg.craftID, 0]);

Recipes.addShaped({id: ItemID[lol+"Chestplate"], count: 1, data: 0}, [
	"a a",
	"aaa",
	"aaa"
], ['a', arg.craftID, 0]);

Recipes.addShaped({id: ItemID[lol+"Leggings"], count: 1, data: 0}, [
	"aaa",
	"a a",
	"a a"
], ['a', arg.craftID, 0]);

Recipes.addShaped({id: ItemID[lol+"Boots"], count: 1, data: 0}, [
	"a a",
	"a a"
], ['a', arg.craftID, 0]);
});
	},
	createTools: function(J){
ToolAPI.addToolMaterial(J.Create.Uid, {
    durability: J.Material.MaxDamage, 
    level: J.Material.Level, 
    efficiency: J.Material.Efficiency, 
    damage: J.Material.Damage,
    enchantability: J.Material.Enchantability
});

ToolLIB.register({
	params: {
		uid: J.Create.Uid + "Sword",
		name: J.Create.Name + " Sword",
		textures: {
			name: J.Create.Uid + "sword"
		}
	},
	funcs: {
		material: J.Create.Uid,
		isTool: true,
		prototype: {
			damage: 4,
            blockTypes: ["fibre"]
		},
	}
});

ToolLIB.register({
	params: {
		uid: J.Create.Uid + "Shovel",
		name: J.Create.Name + " Shovel",
		textures: {
			name: J.Create.Uid+"shovel"
		}
	},
	funcs: {
		material: J.Create.Uid,
		isTool: true,
		prototype: {
			damage: 1,
            blockTypes: ["dirt"]
		}
	}
});

ToolLIB.register({
	params: {
		uid: J.Create.Uid+"Pickaxe",
		name: J.Create.Name+" Pickaxe",
		textures: {
			name: J.Create.Uid+"pickaxe"
		}
	},
	funcs: {
		prototype: {
			damage: 2,
            blockTypes: ["stone"]
		},
		material: J.Create.Uid,
		isTool: true
	}
});

ToolLIB.register({
	params: {
		uid: J.Create.Uid+"Axe",
		name: J.Create.Name+" Axe",
		textures: {
			name: J.Create.Uid+"axe"
		}
	},
	funcs: {
		material: J.Create.Uid,
		isTool: true,
		prototype: {
			damage: 3,
            blockTypes: ["wood"]
		}
	}
});

ToolLIB.register({
	params: {
		uid: J.Create.Uid + "BattleAxe",
		name: J.Create.Name + " Battle Axe",
		textures: {
			name: J.Create.Uid+"battleaxe"
		}
	},
	funcs: {
		material: J.Create.Uid,
		isTool: true,
		prototype: {
			damage: 7,
            blockTypes: ["wood"]
		}
	}
});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[J.Create.Uid+"Sword"], count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', J.Create.CraftID, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[J.Create.Uid+"Shovel"], count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', J.Create.CraftID, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[J.Create.Uid+"Pickaxe"], count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', J.Create.CraftID, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[J.Create.Uid+"Axe"], count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', J.Create.CraftID, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID[J.Create.Uid+"BattleAxe"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b"
], ['a', J.Create.CraftID, 0, 'b', 280, 0]);
});
	},
}

Block.createMetalBlock = function(id, texture, index, metal){
IDRegistry.genBlockID(id + "Block");
Block.createBlock(id + "Block", [
{name: id + " block", texture: [[texture, index]], inCreative: true}
]);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID[id + "Block"], count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', metal, 0]);
    Recipes.addShaped({id: metal, count: 9, data: 0}, [
	"a"
], ['a', BlockID[id + "Block"], 0]);
	});
};

Block.setOre = function(id, arg){
IDRegistry.genBlockID(id);
Block.createBlock(id, [
	{name: arg.name+" Ore", texture: [[arg.texture.name, arg.texture.index]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID[id], "stone", 3, true);
Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant){
	if(level > 3){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[arg.dropID, 1, 0]]
	}
	return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < arg.genChunk; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID[id], 0, 3);
    }
});
};

Callback.addCallback("tick", function(){
	var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var legs = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);
if(helmet.id==ItemID.obsidianHelmet&&chest.id==ItemID.obsidianChestplate&&legs.id==ItemID.obsidianLeggings&&boots.id==ItemID.obsidianBoots){
      Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 25, 8);
      Entity.addEffect(Player.get(), Native.PotionEffect.heal, 25, 8);
      Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 8);
 }
});

registerAPIUnit("Translate", Translate);
registerAPIUnit("Marines", Marines);
registerAPIUnit("ToolLIB", ToolLIB);
Logger.Log("ToolLIB API", "API");