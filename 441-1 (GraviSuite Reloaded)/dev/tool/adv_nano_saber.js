IDRegistry.genItemID("quantumnanoSaber");
Item.createItem("quantumnanoSaber", "Nano Saber", {name: "quantum_nano_saber", meta: 0}, {stack: 1});
ICore.ChargeRegistry.registerItem(ItemID.quantumnanoSaber, "Eu", 1000000, 3);

Item.registerNameOverrideFunction(ItemID.quantumnanoSaber, ICore.ItemName.showItemStorage);

var NANO_SABER = Item.getMaxDamage(ItemID.quantumnanoSaber);

Recipes.addShaped({id: ItemID.quantumnanoSaber, count: 1, data: NANO_SABER}, [
	"cd ",
	"ca ",
	"cxc"
], ['a', ItemID.nanoSaber, -1, 'd', ItemID.plateAlloy, 0, 'c', ItemID.plateReinforcedIridium, 0, 'x', ItemID.storageLapotronCrystal, -1], ChargeItemRegistry.transportEnergy);

ToolAPI.registerSword(ItemID.quantumnanoSaber, {level: 1, durability: NANO_SABER, damage: 40}, {
	damage: 0,
	onBroke: function(item){
		item.data = Math.min(item.data, NANO_SABER);
		return true;
	},
	onAttack: function(item, mob){
		this.damage = item.data < NANO_SABER ? 16 : 0;
		return false;
	}
});

Callback.addCallback("tick", function(){
	if(World.getThreadTime() % 20 == 0){
		var item = Player.getCarriedItem();
		if(item.id == ItemID.nanoSaber){
			item.data = Math.min(item.data+1280, NANO_SABER);
			Player.setCarriedItem(item.id, 1, item.data);
		}
	}
});
