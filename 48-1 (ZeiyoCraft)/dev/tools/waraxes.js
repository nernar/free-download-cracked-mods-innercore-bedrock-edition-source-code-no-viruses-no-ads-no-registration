ToolType.waraxe = {
		isWeapon: true,
		enchantType: Native.EnchantType.weapon,
		damage: 6,
		blockTypes: ["fibre", "plant", "wood"],
		onAttack: function(item, mob){ },
		calcDestroyTime: function(item, block, coords, params, destroyTime, enchant){
			if(block.id==30){return 0.08;}
			if(block.id==35){return 0.05;}
			var material = ToolAPI.getBlockMaterial(block.id).name
			if(material=="fibre" || material=="plant"){return params.base/1.5;}
			return destroyTime;
	}
}

Item.setWarAxe = function(mid){
IDRegistry.genItemID(mid + "WarAxe");
Item.createItem(mid + "WarAxe", mid + " war axe", {name: mid + "WarAxe", meta: 0}, {stack: 1});
}

Item.setWarAxe("wooden");
Item.setWarAxe("stone");
Item.setWarAxe("gold");
Item.setWarAxe("iron");
Item.setWarAxe("diamond");
Item.setWarAxe("ruby");
Item.setWarAxe("sapphire");
Item.setWarAxe("jade");
Item.setWarAxe("onyx");
Item.setWarAxe("nacre");
Item.setWarAxe("amethyst");

ToolAPI.setWarAxe = function(id, ID2, mat){
ToolAPI.setTool(id, mat, ToolType.waraxe);

Recipes.addShaped({id: id, count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', ID2, -1, 'b', 280, 0]);
}

ToolAPI.setWarAxe(ItemID.woodenWarAxe, 5, "wood");
ToolAPI.setWarAxe(ItemID.stoneWarAxe, 4, "stone");
ToolAPI.setWarAxe(ItemID.goldWarAxe, 266, "gold");
ToolAPI.setWarAxe(ItemID.ironWarAxe, 265, "iron");
ToolAPI.setWarAxe(ItemID.diamondWarAxe, 264, "diamond");
ToolAPI.setWarAxe(ItemID.rubyWarAxe, ItemID.ruby, "ruby");
ToolAPI.setWarAxe(ItemID.sapphireWarAxe, ItemID.sapphire, "ruby");
ToolAPI.setWarAxe(ItemID.jadeWarAxe, ItemID.jade, "jade");
ToolAPI.setWarAxe(ItemID.onyxWarAxe, ItemID.onyx, "onyx");
ToolAPI.setWarAxe(ItemID.nacreWarAxe, ItemID.nacre, "nacre");
ToolAPI.setWarAxe(ItemID.amethystWarAxe, ItemID.amethyst, "amethyst");