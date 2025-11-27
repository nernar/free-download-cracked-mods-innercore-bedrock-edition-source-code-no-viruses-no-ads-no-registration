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