IDRegistry.genItemID("wood_hammer");
Item.createItem("wood_hammer", "Wood Hammer", {
  name: "wood_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.wood_hammer, "wood",
  ToolType.hammer);
setinfo.setCategory(ItemID.wood_hammer,"tools")
setinfo.setNameMod(ItemID.wood_hammer)

Recipes.addShaped({
  id: ItemID.wood_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 17, 0, 'g', 280, 0]);

IDRegistry.genItemID("stone_hammer");
Item.createItem("stone_hammer", "Stone Hammer", {
  name: "stone_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.stone_hammer, "stone",
  ToolType.hammer);
setinfo.setCategory(ItemID.stone_hammer,"tools")
setinfo.setNameMod(ItemID.stone_hammer)

Recipes.addShaped({
  id: ItemID.stone_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 1, 0, 'g', 280, 0]);

IDRegistry.genItemID("iron_hammer");
Item.createItem("iron_hammer", "Iron Hammer", {
  name: "iron_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.iron_hammer, "iron",
  ToolType.hammer);
setinfo.setCategory(ItemID.iron_hammer,"tools")
setinfo.setNameMod(ItemID.iron_hammer)

Recipes.addShaped({
  id: ItemID.iron_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 265, 0, 'g', 280, 0]);

Item.addCreativeGroup("hammers", Translation.translate("hammers"), [
  ItemID.wood_hammer,
  ItemID.stone_hammer,
  ItemID.iron_hammer
  ])


