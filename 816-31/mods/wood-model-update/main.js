/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("RenderUtil");

let WoodArr = [];
let RenderLayer = [];
let LightOpacity = [];

let requireMethodFromNativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");

ItemModel.setCurrentCacheGroup("wood-model-update", "1");

let setBlockRenderLayer = requireMethodFromNativeAPI("api.NativeBlock", "setRenderLayer");
let setLightOpacity = requireMethodFromNativeAPI("api.NativeBlock", "setLightOpacity");

var WoodModel = {
	register(id, data1, data2, data3){
		WoodArr.push([id, data1, data2||0, data3||0]);
	},
	registerBlock(id, data, type){
		BlockRenderer.setStaticICRender(id, data, type(null, id, data).getICRenderModel());
	},
	setRenderLayer(id, data){
		RenderLayer.push([id, data]);
	},
	setLightOpacity(id, data){
		LightOpacity.push([id, data]);
	}
};




// file: models/wood_0.js

//create Reider ___ size - 16
let wood_0 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.25, 0.9375, 1, 0.75, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.25, 0, 0.0625, 0.75, 1, 0.9375, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.1875, 0, 0.125, 0.8125, 1, 0.875, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.125, 0, 0.1875, 0.875, 1, 0.8125, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	return model;
});//boxes - 4




// file: models/wood_1.js

//create Reider ___ size - 16
let wood_1 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.3125, 0.0625, 0, 0.75, 0.9375, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.25, 0.125, 0, 0.8125, 0.875, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.1875, 0.1875, 0, 0.875, 0.8125, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.125, 0.25, 0, 0.9375, 0.75, 1, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	return model;
});//boxes - 4




// file: models/wood_2.js

//create Reider ___ size - 16
let wood_2 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0.0625, 0.25, 1, 0.9375, 0.75, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0.25, 0.0625, 1, 0.75, 0.9375, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.1875, 0.125, 1, 0.8125, 0.875, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0, 0.125, 0.1875, 0.9375, 0.875, 0.8125, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	return model;
});//boxes - 4




// file: shared.js

WoodModel.setRenderLayer(17, 1);
WoodModel.setLightOpacity(17, 0);

WoodModel.setRenderLayer(162, 1);
WoodModel.setLightOpacity(162, 0);

const GROUP = ICRender.getGroup("wood");

function not(con1, con2){
	return new ICRender.AND(
		new ICRender.NOT(con1),
		con2
	);
}

function setVanillaModel(id, data, textures, state, model_invert){
	GROUP.add(id, data);
	state = state || EBlockStates.COLOR;
	let model = new ICRender.Model();
	
	let defModel = wood_0(null, textures).getBlockRender();
	
	let condition_0 = new ICRender.BlockState(state, 0);
	if(model_invert){
		var condition_2 = new ICRender.BlockState(state, 2);
		var condition_1 = new ICRender.BlockState(state, 1);
	}else{
		var condition_1 = new ICRender.BlockState(state, 1);
		var condition_2 = new ICRender.BlockState(state, 2);
	}
	
	if(typeof textures != "number"){
		let side = textures[2];
		var textures_2 = [side, side, side, side, side, side];
		var data_0 = undefined;
		var data_1 = undefined;
		var data_2 = undefined;
	}else{
		var textures_2 = textures;
		var data_0 = 0;
		var data_1 = 1;
		var data_2 = 2;
	}
	
	model.addEntry(defModel)
		.setCondition(condition_0);
		
	model.addEntry(wood_1(null, textures, data_1).getBlockRender())
		.setCondition(condition_2);
		
	model.addEntry(wood_2(null, textures, data_2).getBlockRender())
		.setCondition(condition_1);
	
	model.addEntry(wood_0(null, textures_2, data_0).getBlockRender())
		.setCondition(
			not(condition_0, new ICRender.OR(
				new ICRender.BLOCK(0, -1, 0, GROUP, false),
				new ICRender.BLOCK(0, 1, 0, GROUP, false),
			)
		));
		
	model.addEntry(wood_1(null, textures_2, data_1).getBlockRender())
		.setCondition(
			not(condition_2, new ICRender.OR(
				new ICRender.BLOCK(0, 0, -1, GROUP, false),
				new ICRender.BLOCK(0, 0, 1, GROUP, false),
			)
		));
	
	model.addEntry(wood_2(null, textures_2, data_2).getBlockRender())
		.setCondition(
			not(condition_1, new ICRender.OR(
				new ICRender.BLOCK(-1, 0, 0, GROUP, false),
				new ICRender.BLOCK(1, 0, 0, GROUP, false),
			)
		));
		
	ItemModel.getFor(id, data)
		.setModel(defModel);
		
	BlockRenderer.setStaticICRender(id, data, model);
}

const axis = EBlockStates.PILLAR_AXIS;
setVanillaModel(17, 0, [
	["log_top", 0],
	["log_top", 0],
	["log_side", 0]
], axis);
setVanillaModel(17, 1, [
	["log_top", 1],
	["log_top", 1],
	["log_side", 1]
], axis);
setVanillaModel(17, 2, [
	["log_top", 2],
	["log_top", 2],
	["log_side", 2]
], axis);
setVanillaModel(17, 3, [
	["log_top", 3],
	["log_top", 3],
	["log_side", 3]
], axis);
setVanillaModel(17, 4, [
	["log_top", 4],
	["log_top", 4],
	["log_side", 4]
], axis);


setVanillaModel(162, 0, [
	["log_top2", 0],
	["log_top2", 0],
	["log_side2", 0]
], axis);
setVanillaModel(162, 1, [
	["log_top2", 1],
	["log_top2", 1],
	["log_side2", 1]
], axis);

ModAPI.addAPICallback("ICore", function(){
	//setVanillaModel(BlockID.rubberTreeLog, 0, BlockID.rubberTreeLog, null, true);
	WoodModel.registerBlock(BlockID.rubberTreeLog, 0, wood_0);
	WoodModel.registerBlock(BlockID.rubberTreeLog, 1, wood_1);
	WoodModel.registerBlock(BlockID.rubberTreeLog, 2, wood_2);
		
	GROUP.add(162, -1);
	
	for(let i = 0;i < 8;i++)
		WoodModel.registerBlock(BlockID.rubberTreeLogLatex, i, wood_0);
	
	
	WoodModel.setLightOpacity(BlockID.rubberTreeLog, 0);
	WoodModel.setRenderLayer(BlockID.rubberTreeLog, 1);
	
	WoodModel.setLightOpacity(BlockID.rubberTreeLogLatex, 0);
	WoodModel.setRenderLayer(BlockID.rubberTreeLogLatex, 1);
	
});

ModAPI.registerAPI("WoodModel", {
	ModelType: {
		WOOD_0: wood_0,
		WOOD_1: wood_1,
		WOOD_2: wood_2
	},
	WoodModel: WoodModel,
	requireGlobal(command){
		return eval(command);
	}
});

Callback.addCallback("LocalLevelLoaded", function(){
	for(let i in RenderLayer)
		setBlockRenderLayer(RenderLayer[i][0], RenderLayer[i][1]);
	for(let i in LightOpacity)
		setLightOpacity(LightOpacity[i][0], LightOpacity[i][1]);
	for(let i in WoodArr){
		let arr = WoodArr[i];
		wood_0(null, arr[0], arr[1]).setBlockModel(arr[0], arr[1]);
		wood_1(null, arr[0], arr[2]).setBlockModel(arr[0], arr[2]);
		wood_2(null, arr[0], arr[3]).setBlockModel(arr[0], arr[3]);
	}
});




