//create Reider ___ size - 32
let deserteagle = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.4375, 0, 0.09375, 0.5625, 0.25, 0.25, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.40625, 0.28125, 0.0625, 0.59375, 0.34375, 0.78125, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.40625, 0.34375, 0.09375, 0.59375, 0.375, 0.78125, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.40625, 0.375, 0.125, 0.59375, 0.40625, 0.78125, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.40625, 0.25, 0.0625, 0.59375, 0.28125, 0.75, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	model.addBoxByBlock("cube_6", 0.46875, 0.21875, 0.03125, 0.53125, 0.25, 0.625, obj["cube_6"] ? obj["cube_6"].texture : texture, obj["cube_6"] ? obj["cube_6"].data : data);
	model.addBoxByBlock("cube_7", 0.46875, 0.40625, 0.15625, 0.53125, 0.4375, 0.75, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.46875, 0.40625, 0.15625, 0.53125, 0.4375, 0.75, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.28125, 0.78125, 0.5625, 0.375, 0.8125, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);
	model.addBoxByBlock("cube_10", 0.46875, 0.125, 0.25, 0.53125, 0.15625, 0.34375, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.46875, 0.15625, 0.34375, 0.53125, 0.21875, 0.375, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.46875, 0.15625, 0.28125, 0.53125, 0.1875, 0.3125, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);
	model.addBoxByBlock("cube_13", 0.46875, 0.1875, 0.25, 0.53125, 0.21875, 0.28125, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	return model;
})();//boxes - 13
