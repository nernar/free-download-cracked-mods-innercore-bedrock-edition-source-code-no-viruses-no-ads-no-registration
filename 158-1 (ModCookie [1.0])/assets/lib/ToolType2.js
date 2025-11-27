/*
	ToolType 2
	by Ivan Nesterov
*/

LIBRARY({
	name: "ToolType2",
	version:1,
	shared: true,
	api:"CoreEngine",
	dependencies: []
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
			for(var i in ToolAPI.usesShovelBlocks){
				a=ToolAPI.usesShovelBlocks[i];
				r=a();
				if(block.id==i&&coords.side==1){ 
					World.setBlock(coords.x, coords.y, coords.z, r);
					World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
					ToolAPI.breakCarriedTool(1);
				}
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
			for(var i in ToolAPI.usesHoeBlocks){
				a=ToolAPI.usesHoeBlocks[i];
				r=a();
				if(block.id==i&&coords.side==1){ 
					World.setBlock(coords.x, coords.y, coords.z, r);
					World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
					ToolAPI.breakCarriedTool(1);
				}
			}
		}
	}
}

ToolAPI.usesHoeBlocks={
	2:function(){return 60},
	3:function(){return 60}
};
ToolAPI.registerHoeBlock=function(id,func){
	ToolAPI.usesHoeBlocks[id]=func;
};
ToolAPI.usesShovelBlocks={
	2:function(){return 198}
};
ToolAPI.registerShovelBlock=function(id,func){
	ToolAPI.usesShovelBlocks[id]=func;
}

ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
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
			var item = Player.getCarriedItem(true);
			if(item.id == id){
				toolType.destroyBlock(coords, coords.side, item, block);
			}
		});
	}
}

EXPORT("ToolType", ToolType);