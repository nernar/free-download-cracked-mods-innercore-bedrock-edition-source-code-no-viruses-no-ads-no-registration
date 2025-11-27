LIBRARY({
	name: "ToolType",
	version: 2,
	shared: true,
	api: "CoreEngine"
});

var ToolType = {
	sword: {
		isWeapon: true,
		enchantType: Native.EnchantType.weapon,
		damage: 4,
		blockTypes: ["fibre", "plant"],
		onAttack: function(item){
			if(item.data > Item.getMaxDamage(item.id)){
				item.id = item.data = item.count = 0;
			}
		},
		calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
			if(block.id==30){return 0.08;}
			if(block.id==35){return 0.05;}
			var material = ToolAPI.getBlockMaterial(block.id) || {};
			if(material.name=="fibre" || material.name=="plant"){
				return params.base/1.5;
			}
			return destroyTime;
		}
	},
	
	shovel: {
		enchantType: Native.EnchantType.shovel,
		damage: 2,
		blockTypes: ["dirt"],
		onAttack: function(item){
			if(item.data > Item.getMaxDamage(item.id)){
				item.id = item.data = item.count = 0;
			}
		},
		useItem: function(coords, item, block){
			if(block.id==2&&coords.side==1){ 
				World.setBlock(coords.x, coords.y, coords.z, 198);
				World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
				ToolAPI.breakCarriedTool(1);
			}
		}
	},
	
	pickaxe: {
		enchantType: Native.EnchantType.pickaxe,
		damage: 2,
		blockTypes: ["stone"],
		onAttack: function(item){
			if(item.data > Item.getMaxDamage(item.id)){
				item.id = item.data = item.count = 0;
			}
		}
	},
	
	axe: {
		enchantType: Native.EnchantType.axe,
		damage: 3,
		blockTypes: ["wood"],
		onAttack: function(item){
			if(item.data > Item.getMaxDamage(item.id)){
				item.id = item.data = item.count = 0;
			}
		}
	},
	
	hoe: {
		useItem: function(coords, item, block){
			if((block.id==2 || block.id==3) && coords.side==1){ 
				World.setBlock(coords.x, coords.y, coords.z, 60);
				World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
				ToolAPI.breakCarriedTool(1);
			}
		}
	}
}


ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem();
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = item.data = item.count = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.extra);
}

ToolAPI.setTool = function(id, toolMaterial, toolType, brokenId){
	Item.setToolRender(id, true);
	toolMaterial = ToolAPI.toolMaterials[toolMaterial] || toolMaterial;
	if(toolType.blockTypes){
		toolProperties = {brokenId: brokenId || 0};
		for(var i in toolType){
		toolProperties[i] = toolType[i];}
		if(!toolMaterial.durability){
			var maxDmg = Item.getMaxDamage(id)
			toolMaterial.durability = maxDmg;
		}
		ToolAPI.registerTool(id, toolMaterial, toolType.blockTypes, toolProperties);
	}
	else{
		Item.setMaxDamage(id, toolMaterial.durability);
	}
	if(toolType.enchantType){
		Item.setEnchantType(id, toolType.enchantType, toolMaterial.enchantability);
	}
	if(toolType.useItem){
		Item.registerUseFunctionForID(id, toolType.useItem);
	}
	if(toolType.destroyBlock){
		Callback.addCallback("DestroyBlock", function(coords, block, player){
			var item = Player.getCarriedItem();
			if(item.id == id){
				toolType.destroyBlock(coords, coords.side, item, block);
			}
		});
	}
}

EXPORT("ToolType", ToolType);

ToolAPI.registerBlockMaterial(159, "stone");
Block.registerDropFunctionForID(23, function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[23, 1, 0]]
    }
    return [];
}, 1);
Block.registerDropFunctionForID(117, function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[379, 1, 0]]
    }
    return [];
}, 1);
Block.registerDropFunctionForID(118, function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[380, 1, 0]]
    }
    return [];
}, 1);
Block.registerDropFunctionForID(154, function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[410, 1, 0]]
    }
    return [];
}, 1);
Block.registerDropFunctionForID(159, function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[blockID, 1, blockData]]
    }
    return [];
}, 1);

var stoneBlocks = [23, 27, 28, 29, 33, 66, 79, 89, 145, 174];
Callback.addCallback("DestroyBlock", function (coords, block) {
    var item = Player.getCarriedItem();
    if (item.id == 257 || item.id == 270 || item.id == 274 || item.id == 278 || item.id == 285) {
        var material = ToolAPI.getBlockMaterial(block.id)
        if (material && material.name == "stone" && stoneBlocks.indexOf(block.id) == -1) {
            ToolAPI.breakCarriedTool(1);
        }
    }
});



// API bug fixes
ToolAPI.getEnchantExtraData = function(extra){
	var enchant = {
		silk: false,
		fortune: 0,
		efficiency: 0,
		unbreaking: 0,
		experience: 0
	}
	if(!extra){
		extra = Player.getCarriedItem().extra;
	}
	if(extra){
		var enchants = extra.getEnchants();
		for(var i in enchants){
			if(i == 15){
				enchant.efficiency = enchants[i];
			}
			if(i == 16){
				enchant.silk = true;
			}
			if(i == 17){
				enchant.unbreaking = enchants[i];
			}
			if(i == 18){
				enchant.fortune = enchants[i];
			}
		}
	}
	return enchant;
}
Block.registerDropFunctionForID(13, function(coords, blockID, blockData, level, enchant){ // gravel
	if (Math.random() < [0.1, 0.14, 0.25, 1][enchant.fortune || 0]){
		return [[318, 1, 0]];
	}
	return [[13, 1, 0]];
});
Block.registerDropFunctionForID(78, function(coords, blockID, blockData, level, enchant){ // snow layer
	if (level > 0){
		if(blockData == 7) return [[332, 4, 0]];
		if(blockData >= 5) return [[332, 3, 0]];
		if(blockData >= 3) return [[332, 2, 0]];
		return [[332, 1, 0]];
	}
	return [];
});
Block.registerDropFunctionForID(80, function(coords, blockID, blockData, level, enchant){ // snow block
	if (enchant.silk){
		return [[80, 1, 0]];
	}
	return [[332, 1, 0], [332, 1, 0], [332, 1, 0], [332, 1, 0]];
});
Block.registerDropFunctionForID(110, function(coords, blockID, blockData, level, enchant){ // mycelium
	if (enchant.silk){
		return [[110, 1, 0]];
	}
	return [[3, 1, 0]];
});
Block.registerDropFunctionForID(198, function(coords, blockID, blockData, level, enchant){ // grass path
	if (enchant.silk){
		return [[198, 1, 0]];
	}
	return [[3, 1, 0]];
});
Block.registerDropFunctionForID(243, function(coords, blockID, blockData, level, enchant){ // podzol
	if (enchant.silk){
		return [[243, 1, 0]];
	}
	return [[3, 1, 0]];
});
// glass
Block.registerDropFunctionForID(20, function(coords, blockID, blockData, level, enchant){
	if (enchant.silk){
		return [[20, 1, 0]];
	}
	return [];
});
Block.registerDropFunctionForID(102, function(coords, blockID, blockData, level, enchant){
	if (enchant.silk){
		return [[102, 1, 0]];
	}
	return [];
});
// slabs
Block.registerDropFunctionForID(44, function(coords, id, data, level, enchant){
	if(level > 0){
		return [[id, 1, data%8]];
	}
	return [];
}, 1);
Block.registerDropFunctionForID(182, function(coords, id, data, level, enchant){
	if(level > 0){
		return [[id, 1, data%8]];
	}
	return [];
}, 1);
// ice
Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(block.id == 79 || block.id == 194){
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		var toolData = ToolAPI.getToolData(item.id);
		if (toolData && toolData.modifyEnchant) {
			toolData.modifyEnchant(enchant, item);
		}
		if(ToolAPI.getToolLevelViaBlock(item.id, block.id) > 0 && enchant.silk){
			World.destroyBlock(coords.x, coords.y, coords.z);
			World.drop(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, block.id, 1);
		}
	}
});

// armor fix
Callback.addCallback("tick", function(){
	for(var i = 0; i < 4; i++){
		var armor = Player.getArmorSlot(i);
		if(armor.id == 0 && armor.count > 0){
			Player.setArmorSlot(i, 0, 0, 0);
		}
	}
});
