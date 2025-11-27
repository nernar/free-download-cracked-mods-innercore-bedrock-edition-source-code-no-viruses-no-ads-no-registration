IDRegistry.genItemID("advChainsaw");
Item.createItem("advChainsaw", "advChainsaw", {name: "advChainsaw", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advChainsaw, "Eu", 50000, 0);

Item.registerNameOverrideFunction(ItemID.advChainsaw, ENERGY_ITEM_NAME);

Recipes.addShaped({id: ItemID.advChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advChainsaw)}, [
	"aap",
	"agx",
	"pxc"
], ['a', ItemID.iridiumChunk, 0, 'p', ItemID.voidingot, 0, 'g', ItemID.chainsaw, -1, 'x', ItemID.circuitAdvanced, 0, 'c', ItemID.hbrcore, -1]);

ToolAPI.addBlockMaterial("wool", 1.5);
ToolAPI.registerBlockMaterial(35, "wool");

ToolType.chainsaw = {
	isWeapon: true,
	damage: 6,
	baseDamage: 0,
	blockTypes: ["wood", "wool", "fibre", "plant"],
	onDestroy: function(item){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
    },
    onBroke: function(item){return true;},
	onAttack: function(item, mob){
		var material = this.toolMaterial;
		if(!this.baseDamage) this.baseDamage = material.damage;
		if(item.data + material.energyConsumption <= Item.getMaxDamage(item.id)){
			item.data += material.energyConsumption - 1;
			material.damage = this.baseDamage;
		}
		else{
			material.damage = 0;
		}
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
        if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id)){
            return destroyTime;
        }
        else{
            return params.base;
        }
    }
}

ToolAPI.setTool(ItemID.advChainsaw, {energyConsumption: 50, level: 4, efficiency: 21, damage: 7},  ToolType.chainsaw);