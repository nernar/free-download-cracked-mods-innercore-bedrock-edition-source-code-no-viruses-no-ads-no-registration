//fossil stand
IDRegistry.genBlockID("fossil_stand");
Block.createBlock("fossil_stand", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand, "stone", 1, true);

var fossilstandModel = ModelAPI.newArray();
fossilstandModel.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstandModel.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstandModel.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand, fossilstandModel);

//fossil stand
IDRegistry.genBlockID("fossil_stand1");
Block.createBlock("fossil_stand1", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand1, "stone", 1, true);

var fossilstand1Model = ModelAPI.newArray();
fossilstand1Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand1Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand1Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand1Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand1Model.addBoxByTextures("7", 0.5625,1.25,0.3125,0.8125,1.3125,0.375,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("8", 0.1875,1.0625,0.6875,0.375,1.125,0.75,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("9", 0.25,1.125,0.625,0.4375,1.15625,0.6875,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("10", 0.3125,1.125,0.5625,0.5,1.1875,0.625,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("11", 0.375,1.1875,0.5,0.5625,1.21875,0.5625,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("12", 0.625,1.3125,0.1875,0.6875,1.375,0.25,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("13", 0.5,1.25,0.375,0.75,1.28125,0.4375,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("14", 0.4375,1.1875,0.4375,0.625,1.25,0.5,[['fossil_block',0]]);
fossilstand1Model.addBoxByTextures("15", 0.5625,1.3125,0.25,0.75,1.34375,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand1, fossilstand1Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand2");
Block.createBlock("fossil_stand2", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand2, "stone", 1, true);

var fossilstand2Model = ModelAPI.newArray();
fossilstand2Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand2Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand2Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand2Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand2Model.addBoxByTextures("7", 0.375,1.0625,0.6875,0.5,1.125,0.8125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("8", 0.3125,1.0625,0.8125,0.4375,1.125,0.875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("9", 0.3125,1.0625,0.625,0.4375,1.125,0.6875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("10", 0.25,1.0625,0.4375,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("11", 0.6875,1.0625,0.3125,0.8125,1.125,0.375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("12", 0.1875,1.0625,0.25,0.25,1.125,0.5,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("13", 0.4375,1.0625,0.3125,0.6875,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("14", 0.5625,1.0625,0.5625,0.6875,1.125,0.75,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("15", 0.25,1.0625,0.3125,0.3125,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("16", 0.5625,1.0625,0.75,0.625,1.125,0.8125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("17", 0.125,1.0625,0.25,0.1875,1.125,0.375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("18", 0.0625,1.0625,0.25,0.125,1.125,0.3125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("19", 0.625,1.0625,0.5,0.6875,1.125,0.5625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("20", 0.125,1.0625,0.625,0.25,1.125,0.6875,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("21", 0.6875,1.0625,0.4375,0.8125,1.125,0.5,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("22", 0.75,1.0625,0.375,0.875,1.125,0.4375,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("23", 0.1875,1.0625,0.5625,0.375,1.125,0.625,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("24", 0.375,1.0625,0.25,0.5625,1.125,0.3125,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("25", 0.3125,1.0625,0.1875,0.5,1.125,0.25,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("26", 0.5625,1.0625,0.1875,0.9375,1.125,0.25,[['fossil_block',0]]);
fossilstand2Model.addBoxByTextures("27", 0.625,1.0625,0.25,0.875,1.125,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand2, fossilstand2Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand3");
Block.createBlock("fossil_stand3", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand3, "stone", 1, true);

var fossilstand3Model = ModelAPI.newArray();
fossilstand3Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand3Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand3Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand3Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand3Model.addBoxByTextures("7", 0.3125,1.1875,0.3125,0.375,1.21875,0.5625,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("8", 0.5,1.0625,0.75,0.5625,1.125,0.875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("9", 0.6875,1.125,0.5625,0.75,1.15625,0.75,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("10", 0.625,1.125,0.4375,0.6875,1.1875,0.625,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("11", 0.4375,1.125,0.625,0.5,1.15625,0.8125,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("12", 0.375,1.125,0.5,0.4375,1.1875,0.6875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("13", 0.75,1.0625,0.6875,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("14", 0.5,1.1875,0.25,0.5625,1.25,0.375,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("15", 0.5625,1.1875,0.375,0.625,1.21875,0.4375,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("16", 0.125,1.125,0.625,0.1875,1.1875,0.6875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("17", 0.25,1.0625,0.8125,0.3125,1.125,0.875,[['fossil_block',0]]);
fossilstand3Model.addBoxByTextures("18", 0.1875,1.125,0.6875,0.25,1.15625,0.8125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand3, fossilstand3Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand4");
Block.createBlock("fossil_stand4", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand4, "stone", 1, true);

var fossilstand4Model = ModelAPI.newArray();
fossilstand4Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand4Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand4Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand4Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand4Model.addBoxByTextures("7", 0.75,1.125,0.5,0.875,1.15625,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("8", 0.6875,1.0625,0.75,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("9", 0.25,1.0625,0.1875,0.4375,1.125,0.25,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("10", 0.3125,1.0625,0.25,0.5,1.125,0.3125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("11", 0.375,1.0625,0.4375,0.4375,1.125,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("12", 0.4375,1.0625,0.3125,0.625,1.125,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("13", 0.5625,1.0625,0.6875,0.75,1.125,0.75,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("14", 0.625,1.0625,0.625,0.6875,1.125,0.6875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("15", 0.5625,1.0625,0.5,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("16", 0.5,1.0625,0.4375,0.6875,1.125,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("17", 0.4375,1.0625,0.375,0.5625,1.125,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("18", 0.1875,1.0625,0.0625,0.25,1.09375,0.125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("19", 0.75,1.0625,0.8125,0.8125,1.09375,0.875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("20", 0.5625,1.125,0.75,0.625,1.15625,0.8125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("21", 0.6875,1.125,0.375,0.75,1.15625,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("22", 0.8125,1.125,0.4375,0.875,1.15625,0.5,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("23", 0.4375,1.125,0.125,0.5,1.15625,0.1875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("24", 0.5,1.125,0.0625,0.5625,1.15625,0.125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("25", 0.625,1.125,0.1875,0.6875,1.15625,0.25,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("26", 0.3125,1.125,0.3125,0.375,1.15625,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("27", 0.25,1.125,0.375,0.3125,1.15625,0.4375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("28", 0.3125,1.125,0.5625,0.375,1.15625,0.625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("29", 0.375,1.125,0.5,0.4375,1.15625,0.5625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("30", 0.4375,1.125,0.625,0.5625,1.15625,0.6875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("31", 0.5,1.0625,0.5625,0.8125,1.125,0.625,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("32", 0.1875,1.0625,0.125,0.3125,1.125,0.1875,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("33", 0.5625,1.0625,0.25,0.6875,1.125,0.3125,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("34", 0.25,1.0625,0.3125,0.3125,1.125,0.375,[['fossil_block',0]]);
fossilstand4Model.addBoxByTextures("35", 0.3125,1.0625,0.5,0.375,1.125,0.5625,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand4, fossilstand4Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand5");
Block.createBlock("fossil_stand5", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand5, "stone", 1, true);

var fossilstand5Model = ModelAPI.newArray();
fossilstand5Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand5Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand5Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand5Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand5Model.addBoxByTextures("7", 0.75,1.0625,0.625,0.8125,1.125,0.8125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("8", 0.8125,1.0625,0.5,0.875,1.125,0.75,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("9", 0.25,1.0625,0.625,0.5,1.125,0.6875,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("10", 0.75,1.0625,0.125,0.8125,1.125,0.3125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("11", 0.6875,1.0625,0.25,0.75,1.125,0.4375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("12", 0.625,1.0625,0.3125,0.6875,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("13", 0.1875,1.0625,0.3125,0.25,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("14", 0.25,1.0625,0.3125,0.3125,1.125,0.4375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("15", 0.3125,1.0625,0.375,0.375,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("16", 0.6875,1.0625,0.8125,0.75,1.125,0.9375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("17", 0.5,1.0625,0.5,0.625,1.125,0.5625,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("18", 0.4375,1.0625,0.5625,0.5625,1.125,0.625,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("19", 0.0625,1.0625,0.4375,0.1875,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("20", 0.3125,1.0625,0.1875,0.4375,1.125,0.25,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("21", 0.25,1.0625,0.125,0.3125,1.125,0.1875,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("22", 0.5625,1.0625,0.4375,0.625,1.125,0.5,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("23", 0.625,1.0625,0.875,0.6875,1.125,0.9375,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("24", 0.375,1.0625,0.25,0.5625,1.125,0.3125,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("25", 0.1875,1.0625,0.6875,0.375,1.125,0.75,[['fossil_block',0]]);
fossilstand5Model.addBoxByTextures("26", 0.0625,1.0625,0.75,0.25,1.125,0.8125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand5, fossilstand5Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand6");
Block.createBlock("fossil_stand6", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand6, "stone", 1, true);

var fossilstand6Model = ModelAPI.newArray();
fossilstand6Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand6Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand6Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand6Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand6Model.addBoxByTextures("7", 0.25,1.0625,0.4375,0.4375,1.09375,0.5,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("8", 0.4375,1.0625,0.125,0.5625,1.125,0.875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("9", 0.3125,1.0625,0.625,0.4375,1.125,0.75,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("10", 0.5625,1.0625,0.75,0.625,1.125,0.8125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("11", 0.375,1.0625,0.75,0.4375,1.125,0.8125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("12", 0.25,1.0625,0.5625,0.4375,1.09375,0.625,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("13", 0.5625,1.0625,0.5625,0.75,1.09375,0.625,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("14", 0.5625,1.0625,0.4375,0.75,1.09375,0.5,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("15", 0.5625,1.0625,0.3125,0.75,1.09375,0.375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("16", 0.5625,1.0625,0.1875,0.75,1.09375,0.25,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("17", 0.1875,1.0625,0.125,0.25,1.125,0.1875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("18", 0.25,1.0625,0.3125,0.4375,1.09375,0.375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("19", 0.5625,1.0625,0.625,0.6875,1.125,0.75,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("20", 0.25,1.0625,0.1875,0.4375,1.09375,0.25,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("21", 0.375,1.0625,0.0625,0.4375,1.09375,0.125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("22", 0.5625,1.0625,0.0625,0.625,1.09375,0.125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("23", 0.75,1.0625,0.125,0.8125,1.125,0.1875,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("24", 0.75,1.0625,0.25,0.8125,1.125,0.3125,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("25", 0.75,1.0625,0.375,0.8125,1.125,0.4375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("26", 0.1875,1.0625,0.375,0.25,1.125,0.4375,[['fossil_block',0]]);
fossilstand6Model.addBoxByTextures("27", 0.1875,1.0625,0.25,0.25,1.125,0.3125,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand6, fossilstand6Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand7");
Block.createBlock("fossil_stand7", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand7, "stone", 1, true);

var fossilstand7Model = ModelAPI.newArray();
fossilstand7Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand7Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand7Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand7Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand7Model.addBoxByTextures("7", 0.375,1.0625,0.5625,0.5,1.125,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("8", 0.5625,1.0625,0.625,0.625,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("9", 0.5,1.0625,0.3125,0.5625,1.125,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("10", 0.3125,1.0625,0.375,0.375,1.125,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("11", 0.6875,1.0625,0.625,0.75,1.125,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("12", 0.5625,1.0625,0.5625,0.6875,1.125,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("13", 0.75,1.0625,0.6875,0.8125,1.125,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("14", 0.3125,1.0625,0.625,0.375,1.125,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("15", 0.25,1.0625,0.6875,0.3125,1.125,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("16", 0.4375,1.0625,0.4375,0.5,1.125,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("17", 0.5625,1.0625,0.4375,0.625,1.125,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("18", 0.6875,1.0625,0.375,0.75,1.125,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("19", 0.25,1.0625,0.75,0.3125,1.09375,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("20", 0.3125,1.0625,0.6875,0.375,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("21", 0.375,1.0625,0.625,0.4375,1.09375,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("22", 0.5,1.0625,0.8125,0.5625,1.09375,0.875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("23", 0.625,1.0625,0.625,0.6875,1.09375,0.6875,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("24", 0.6875,1.0625,0.6875,0.75,1.09375,0.75,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("25", 0.75,1.0625,0.75,0.8125,1.09375,0.8125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("26", 0.6875,1.0625,0.5625,0.75,1.09375,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("27", 0.75,1.0625,0.375,0.8125,1.09375,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("28", 0.25,1.0625,0.375,0.3125,1.09375,0.4375,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("29", 0.3125,1.0625,0.5625,0.375,1.09375,0.625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("30", 0.375,1.0625,0.5,0.5,1.09375,0.5625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("31", 0.3125,1.0625,0.4375,0.4375,1.09375,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("32", 0.625,1.0625,0.4375,0.75,1.09375,0.5,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("33", 0.5625,1.0625,0.5,0.6875,1.09375,0.5625,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("34", 0.4375,1.0625,0.1875,0.5,1.09375,0.3125,[['fossil_block',0]]);
fossilstand7Model.addBoxByTextures("35", 0.4375,1.0625,0.625,0.5,1.09375,0.75,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand7, fossilstand7Model);

//fossil stand
IDRegistry.genBlockID("fossil_stand8");
Block.createBlock("fossil_stand8", [
	{name: "Fossil Stand", texture: [["fossil_stand", 0]], inCreative: true}
], BLOCK_TYPE_STAND);
ToolAPI.registerBlockMaterial(BlockID.fossil_stand8, "stone", 1, true);

var fossilstand8Model = ModelAPI.newArray();
fossilstand8Model.addBoxByTextures("1", 0,0.8125,0,1,1,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("2", 0,0,0,1,0.25,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("3", 0.0625,0.25,0.0625,0.9375,0.625,0.9375,[['basalt_block',0]]);
fossilstand8Model.addBoxByTextures("4", 0,0.625,0,1,0.6875,1,[['fossil_stand',0]]);
fossilstand8Model.addBoxByTextures("5", 0.0625,0.6875,0.0625,0.9375,0.8125,0.9375,[['basalt_block',0]]);
fossilstand8Model.addBoxByID("6", 0.0625,1,0.0625,0.9375,1.0625,0.9375, 1);
fossilstand8Model.addBoxByTextures("7", 0.125,1.1875,0.5625,0.15625,1.25,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("8", 0.1875,1.0625,0.375,0.625,1.125,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("9", 0.125,1.125,0.3125,0.75,1.1875,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("10", 0.1875,1.3125,0.375,0.3125,1.375,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("11", 0.4375,1.25,0.625,0.5,1.3125,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("12", 0.1875,1.1875,0.5,0.21875,1.25,0.5625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("13", 0.25,1.1875,0.3125,0.8125,1.25,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("14", 0.125,1.1875,0.375,0.15625,1.25,0.4375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("15", 0.375,1.25,0.375,0.4375,1.3125,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("16", 0.25,1.25,0.375,0.3125,1.3125,0.34375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("17", 0.3125,1.3125,0.5625,0.375,1.375,0.59375,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("18", 0.5625,1.25,0.3125,0.875,1.3125,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("19", 0.4375,1.5625,0.375,0.625,1.625,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("20", 0.1875,1.3125,0.375,0.3125,1.375,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("21", 0.3125,1.25,0.625,0.375,1.3125,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("22", 0.5,1.3125,0.375,0.875,1.375,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("23", 0.25,1.375,0.3125,0.875,1.4375,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("24", 0.125,1.375,0.375,0.1875,1.4375,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("25", 0.125,1.4375,0.375,0.3125,1.5,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("26", 0.375,1.4375,0.4375,0.4375,1.5,0.5625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("27", 0.625,1.4375,0.3125,0.75,1.5,0.6875,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("28", 0.25,1.5,0.375,0.5,1.5625,0.625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("29", 0.5625,1.5,0.375,0.6875,1.5625,0.65625,[['fossil_block',0]]);
fossilstand8Model.addBoxByTextures("30", 0.5625,1.5,0.375,0.6875,1.5625,0.34375,[['fossil_block',0]]);
Furniture.placeRotatableBlock(BlockID.fossil_stand8, fossilstand8Model);