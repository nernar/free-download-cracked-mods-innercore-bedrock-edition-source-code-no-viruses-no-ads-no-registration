IDRegistry.genItemID("ice_blade");
Item.createItem("ice_blade", "Ice Blade Sword", {name: "ice_blade", meta: 0}, {isTech: false, stack: 1});
mod_tip(ItemID.ice_blade);
ToolAPI.addToolMaterial("ice_blade", {durability: 1400, level: 4, efficiency: 50, damage: 13, enchantability: 14});
ToolAPI.setTool(ItemID.body_armor, "ice_blade", ToolType.sword);
var ice_blade = new RenderMesh(__dir__ + "/models/ice_blade.obj", "obj");
ItemModel.getFor(ItemID.ice_blade, 0).setHandModel(ice_blade, "Textures 3d/ice_blade");

