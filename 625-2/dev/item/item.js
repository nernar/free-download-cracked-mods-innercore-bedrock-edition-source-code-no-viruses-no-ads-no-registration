IDRegistry.genItemID(PREFIX + "note_steel");
Item.createItem(PREFIX + "note_steel", "Note Steel", {name:"nc_note_steel"}, {inTech: true,stack: 64});
Translation.addTranslation("Note Steel", {zh: "音钢"});

IDRegistry.genItemID(PREFIX + "tone_drill");
Item.createItem(PREFIX + "tone_drill", "Tone Drill", {name:"nc_tone_drill"}, {inTech: true,stack: 1});
Translation.addTranslation("Tone Drill", {zh: "音矿采集器"});

IDRegistry.genItemID(PREFIX + "tuning_fork");
Item.createItem(PREFIX + "tuning_fork", "Tuning Fork", {name:"nc_tuning_fork"}, {inTech: true,stack: 1});
Translation.addTranslation("Tuning Fork", {zh: "音叉"});
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "tuning_fork"], count: 1, data: 0}, [
		"x x",
		"x x",
		" x "
	], ['x', ItemID[PREFIX + "note_steel"], 0]);
});
ToolAPI.addToolMaterial("note_steel", {durability: 225, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolLib.setTool(ItemID[PREFIX + "tone_drill"], "note_steel", ToolType.pickaxe);
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "tone_drill"], count: 1, data: 0}, [
		"xxx",
		"xyx",
		"xxx"
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',25,0]);
});
IDRegistry.genItemID(PREFIX + "note");
Item.createItem(PREFIX + "note", "Note", {name:"nc_note"}, {inTech: true,stack: 64});
Translation.addTranslation("Note", {zh: "音符"});

IDRegistry.genItemID(PREFIX + "microphone");
Item.createItem(PREFIX + "microphone", "Microphone", {name:"nc_mike"}, {inTech: true,stack: 64});
Translation.addTranslation("Microphone", {zh: "麦克风"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (6/16, 1/16, 6/16, 10/16,11/16, 10/16,[["nc_hardened_clay_stained_cyan", 0]]);
model.addBox (7/16, 0/16, 7/16, 9/16,1/16, 9/16,[["nc_hardened_clay_stained_cyan", 0]]);
model.addBox (6/16, 11/16, 6/16, 10/16,12/16, 10/16,[["nc_concrete_black", 0]]);
model.addBox (6/16, 18/16, 6/16, 10/16,19/16, 10/16,[["nc_concrete_black", 0]]);

model.addBox (5/16, 12/16, 5/16, 11/16,18/16, 11/16,[["nc_concrete_black", 0]]);

render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "microphone"], -1).setModel(render);
})();

IDRegistry.genItemID(PREFIX + "wood_pured");
Item.createItem(PREFIX + "wood_pured", "Pured Wood", {name:"nc_planks_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Wood", {zh: "净化木板"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_planks_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "stone_pured");
Item.createItem(PREFIX + "stone_pured", "Pured Stone", {name:"nc_stone_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Stone", {zh: "净化石头"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_stone_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "stone_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "sand_pured");
Item.createItem(PREFIX + "sand_pured", "Pured Sand", {name:"nc_sand_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Sand", {zh: "净化沙子"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_sand_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "sand_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "dirt_pured");
Item.createItem(PREFIX + "dirt_pured", "Pured Dirt", {name:"nc_dirt_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Dirt", {zh: "净化泥土"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_dirt_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "dirt_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();