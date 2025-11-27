IDRegistry.genItemID("voidsaber");
Item.createItem("voidsaber", "Void Saber", {name: "voidsaber", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidsaber, "Eu", 1000000, 2);
Item.setToolRender(ItemID.voidsaber, true);

Item.registerNameOverrideFunction(ItemID.voidsaber, ENERGY_ITEM_NAME);

var VOID_SABER_DURABILITY = Item.getMaxDamage(ItemID.voidsaber);

Recipes.addShaped({id: ItemID.voidsaber, count: 1, data: VOID_SABER_DURABILITY}, [
	"c c",
	"c c",
	"bxb"
], ['x', ItemID.ultcore, -1, 'c', ItemID.voidplate, 0, 'b', ItemID.voidcristall, -1], ChargeItemRegistry.transportEnergy);

ToolAPI.registerSword(ItemID.voidsaber, {level: 0, durability: VOID_SABER_DURABILITY, damage: 4}, {
	damage: 0,
	onBroke: function(item){
		item.data = Math.min(item.data, VOID_SABER_DURABILITY);
		return true;
	},
	onAttack: function(item, mob){
		this.damage = item.data < VOID_SABER_DURABILITY ? 16 : 0;
		return false;
	}
});

Callback.addCallback("tick", function(){
	if(World.getThreadTime() % 20 == 0){
		var item = Player.getCarriedItem()
		if(item.id == ItemID.voidsaber){
			item.data = Math.min(item.data+1280, VOID_SABER_DURABILITY);
			Player.setCarriedItem(item.id, 1, item.data);
		}
	}
});
