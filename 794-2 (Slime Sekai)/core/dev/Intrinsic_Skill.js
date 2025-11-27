IDRegistry.genItemID("body_armor");
Item.createItem("body_armor", "Body Armor", {name: "body_armor", meta: 0}, {isTech: false, stack: 1});
ToolAPI.addToolMaterial("body_armor", {durability: 1000, level: 4, efficiency: 50, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.body_armor, "body_armor", ToolType.sword);
var body_armor = new RenderMesh(__dir__ + "/models/body_armor.obj", "obj");
ItemModel.getFor(ItemID.body_armor, 0).setHandModel(body_armor, "Textures 3d/body_armor_arm");

