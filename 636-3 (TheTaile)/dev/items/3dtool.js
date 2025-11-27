IMPORT("TileRender");
IDRegistry.genItemID("Katana");
Item.createItem("Katana", "Древний меч Тайлена", {name: "SOTG", meta: 0}, {stack: 1});

var KatanaM = new RenderMesh(__dir__ + "/models/Katana.obj","obj", {translate: [0, .18, 0], scale: [1.5, 1.5, 1.5]});
ItemModel.getFor(ItemID.Katana, 0).setModel(KatanaM, "katana");

ToolAPI.addToolMaterial("kt", {durability: 2000, level: 6, efficiency: 9, damage: 18, enchantability: 14});
ToolLib.setTool(ItemID.Katana, "kt", ToolType.sword);