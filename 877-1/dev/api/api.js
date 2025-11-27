


ToolAPI.breakCarriedTool = function(damage, player) {
		if (!player) player = Player.get();
		let item = Entity.getCarriedItem(player);
		let enchant = ToolAPI.getEnchantExtraData(item.extra);
		if (Math.random() < 1 / (enchant.unbreaking + 1)) {
			item.data += damage;
		}
		if (item.data >= Item.getMaxDamage(item.id)) {
			let tool = ToolAPI.getToolData(item.id);
			item.id = tool ? tool.brokenId : 0;
			item.count = 1;
			item.data = 0;
		}
		Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
	}
    


var ITEM = {
Item: function(id, texture, name, stack/*, durability*/){
IDRegistry.genItemID(id);
Item.createItem(id, name, {name: texture, meta: 0}, {stack: stack});
Item.setAllowedInOffhand(ItemID[id], true);

//Item.setMaxDamage(ItemID[id], durability);
},

Food: function(id, texture, name, stack, food){
IDRegistry.genItemID(id);
Item.createFoodItem(id, name, {name: texture, meta: 0}, {stack: stack}, {food:food});
//Item.setGlint(ItemID[id], glint);
Item.setAllowedInOffhand(ItemID[id], true);
Item.addCreativeGroup("food", Translation.translate("food"), [
	ItemID[id]
]);
},

Fuel: function(id, texture, name, stack, fuel){
IDRegistry.genItemID(id);
Item.createItem(id, name, {name: texture, meta: 0}, {stack: stack});
//Item.setGlint(ItemID[id], glint);
Item.setAllowedInOffhand(ItemID[id], true);
Recipes.addFurnaceFuel(ItemID[id], -1, fuel*200);
Item.addCreativeGroup("fuel", Translation.translate("fuel"), [
	ItemID[id]
]);
}}
