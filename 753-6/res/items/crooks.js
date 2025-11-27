IDRegistry.genItemID("wood_crook");
Item.createItem("wood_crook", "Wood Crook", {
  name: "wood_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.wood_crook, "wood",
  ToolType.crook);
setinfo.setCategory(ItemID.wood_crook,"tools")
setinfo.setNameMod(ItemID.wood_crook)

Recipes.addShaped({
  id: ItemID.wood_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 5, 0, 'g', 280, 0]);

IDRegistry.genItemID("stone_crook");
Item.createItem("stone_crook", "Stone Crook", {
  name: "stone_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.stone_crook, "stone",
  ToolType.crook);
setinfo.setCategory(ItemID.stone_crook,"tools")
setinfo.setNameMod(ItemID.stone_crook)

Recipes.addShaped({
  id: ItemID.stone_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 4, 0, 'g', 280, 0]);

IDRegistry.genItemID("iron_crook");
Item.createItem("iron_crook", "Iron Crook", {
  name: "iron_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.iron_crook, "iron",
  ToolType.crook);
setinfo.setCategory(ItemID.iron_crook,"tools")
setinfo.setNameMod(ItemID.iron_crook)

Recipes.addShaped({
  id: ItemID.iron_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 265, 0, 'g', 280, 0]);

Item.addCreativeGroup("crook", Translation.translate("crook"), [
  ItemID.wood_crook,
  ItemID.stone_crook,
  ItemID.iron_crook
  ])

