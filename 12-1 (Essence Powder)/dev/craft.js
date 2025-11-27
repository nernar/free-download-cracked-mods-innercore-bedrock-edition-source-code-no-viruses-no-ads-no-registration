var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 96;

IDRegistry.genItemID("mortarandpestle");
Item.createItem("mortarandpestle", "Mortar and Pestle", {name: "mortar_and_pestle"}, {stack: 1});
Item.setMaxDamage(ItemID.mortarandpestle, CRAFTING_TOOL_ITEM_MAX_DAMAGE);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Recipes.addShaped({id: ItemID.mortarandpestle, count: 1, data: 0}, [
	"a  ",
	" b ",
	"   "
], ['a', 280, 0, 'b', 281, 0]);











