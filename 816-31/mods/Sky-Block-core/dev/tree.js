//create Reider ___ size - 16
let model = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();

	//group - pot
	model.addBoxByBlock("cube", 0.3125, 0, 0.3125, 0.6875, 0.0625, 0.6875, 172, 0);
	model.addBoxByBlock("cube_2", 0.25, 0.0625, 0.3125, 0.3125, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_3", 0.6875, 0.0625, 0.3125, 0.75, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_4", 0.3125, 0.0625, 0.25, 0.6875, 0.1875, 0.3125, 172, 0);
	model.addBoxByBlock("cube_5", 0.3125, 0.0625, 0.6875, 0.6875, 0.1875, 0.75, 172, 0);
	model.addBoxByBlock("dirt", 0.3125, 0.0625, 0.3125, 0.6875, 0.125, 0.6875, 2, 0);


	//group - tree
	model.addBoxByBlock("trunk", 0.4375, 0.125, 0.4375, 0.5625, 0.875, 0.5625, 17, 1);

	//group - leaves
	model.addBoxByBlock("cube_6", 0.3125, 0.3125, 0.3125, 0.6875, 0.375, 0.6875, obj["cube_6"] ? obj["cube_6"].texture : texture, obj["cube_6"] ? obj["cube_6"].data : data);
	model.addBoxByBlock("cube_7", 0.375, 0.4375, 0.375, 0.625, 0.5, 0.625, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.4375, 0.6875, 0.375, 0.5625, 0.875, 0.4375, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.6875, 0.5625, 0.5625, 0.875, 0.625, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);

	//group - layer3
	model.addBoxByBlock("cube_10", 0.3125, 0.5, 0.3125, 0.6875, 0.5625, 0.6875, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.375, 0.5, 0.6875, 0.625, 0.5625, 0.75, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.6875, 0.5, 0.375, 0.75, 0.5625, 0.625, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);
	model.addBoxByBlock("cube_13", 0.25, 0.5, 0.375, 0.3125, 0.5625, 0.625, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	model.addBoxByBlock("cube_14", 0.375, 0.5, 0.25, 0.625, 0.5625, 0.3125, obj["cube_14"] ? obj["cube_14"].texture : texture, obj["cube_14"] ? obj["cube_14"].data : data);

	//group - layer3
	model.addBoxByBlock("cube_15", 0.375, 0.625, 0.375, 0.625, 0.6875, 0.625, obj["cube_15"] ? obj["cube_15"].texture : texture, obj["cube_15"] ? obj["cube_15"].data : data);
	model.addBoxByBlock("cube_16", 0.4375, 0.625, 0.625, 0.5625, 0.6875, 0.6875, obj["cube_16"] ? obj["cube_16"].texture : texture, obj["cube_16"] ? obj["cube_16"].data : data);
	model.addBoxByBlock("cube_17", 0.625, 0.625, 0.4375, 0.6875, 0.6875, 0.5625, obj["cube_17"] ? obj["cube_17"].texture : texture, obj["cube_17"] ? obj["cube_17"].data : data);
	model.addBoxByBlock("cube_18", 0.3125, 0.625, 0.4375, 0.375, 0.6875, 0.5625, obj["cube_18"] ? obj["cube_18"].texture : texture, obj["cube_18"] ? obj["cube_18"].data : data);
	model.addBoxByBlock("cube_19", 0.4375, 0.625, 0.3125, 0.5625, 0.6875, 0.375, obj["cube_19"] ? obj["cube_19"].texture : texture, obj["cube_19"] ? obj["cube_19"].data : data);



	//group - layer2
	model.addBoxByBlock("cube_20", 0.25, 0.375, 0.25, 0.75, 0.4375, 0.75, obj["cube_20"] ? obj["cube_20"].texture : texture, obj["cube_20"] ? obj["cube_20"].data : data);
	model.addBoxByBlock("cube_21", 0.3125, 0.375, 0.75, 0.6875, 0.4375, 0.8125, obj["cube_21"] ? obj["cube_21"].texture : texture, obj["cube_21"] ? obj["cube_21"].data : data);
	model.addBoxByBlock("cube_22", 0.75, 0.375, 0.3125, 0.8125, 0.4375, 0.6875, obj["cube_22"] ? obj["cube_22"].texture : texture, obj["cube_22"] ? obj["cube_22"].data : data);
	model.addBoxByBlock("cube_23", 0.1875, 0.375, 0.3125, 0.25, 0.4375, 0.6875, obj["cube_23"] ? obj["cube_23"].texture : texture, obj["cube_23"] ? obj["cube_23"].data : data);
	model.addBoxByBlock("cube_24", 0.3125, 0.375, 0.1875, 0.6875, 0.4375, 0.25, obj["cube_24"] ? obj["cube_24"].texture : texture, obj["cube_24"] ? obj["cube_24"].data : data);


	//group - layer1
	model.addBoxByBlock("cube_25", 0.1875, 0.25, 0.1875, 0.8125, 0.3125, 0.8125, obj["cube_25"] ? obj["cube_25"].texture : texture, obj["cube_25"] ? obj["cube_25"].data : data);
	model.addBoxByBlock("cube_26", 0.25, 0.25, 0.8125, 0.75, 0.3125, 0.875, obj["cube_26"] ? obj["cube_26"].texture : texture, obj["cube_26"] ? obj["cube_26"].data : data);
	model.addBoxByBlock("cube_27", 0.8125, 0.25, 0.25, 0.875, 0.3125, 0.75, obj["cube_27"] ? obj["cube_27"].texture : texture, obj["cube_27"] ? obj["cube_27"].data : data);
	model.addBoxByBlock("cube_28", 0.125, 0.25, 0.25, 0.1875, 0.3125, 0.75, obj["cube_28"] ? obj["cube_28"].texture : texture, obj["cube_28"] ? obj["cube_28"].data : data);
	model.addBoxByBlock("cube_29", 0.3125, 0.25, 0.125, 0.6875, 0.3125, 0.1875, obj["cube_29"] ? obj["cube_29"].texture : texture, obj["cube_29"] ? obj["cube_29"].data : data);

	model.addBoxByBlock("cube_30", 0.375, 0.6875, 0.4375, 0.4375, 0.875, 0.5625, obj["cube_30"] ? obj["cube_30"].texture : texture, obj["cube_30"] ? obj["cube_30"].data : data);
	model.addBoxByBlock("cube_31", 0.5625, 0.6875, 0.4375, 0.625, 0.875, 0.5625, obj["cube_31"] ? obj["cube_31"].texture : texture, obj["cube_31"] ? obj["cube_31"].data : data);
	model.addBoxByBlock("cube_32", 0.4375, 0.875, 0.4375, 0.5625, 1, 0.5625, obj["cube_32"] ? obj["cube_32"].texture : texture, obj["cube_32"] ? obj["cube_32"].data : data);
	
	
	
	
	
	
	

	//group - pot
	model.addBoxByBlock("cube", 0.3125, 0, 0.3125, 0.6875, 0.0625, 0.6875, 172, 0);
	model.addBoxByBlock("cube_2", 0.3125, 0.0625, 0.25, 0.6875, 0.1875, 0.3125, 172, 0);
	model.addBoxByBlock("cube_3", 0.3125, 0.0625, 0.6875, 0.6875, 0.1875, 0.75, 172, 0);
	model.addBoxByBlock("cube_4", 0.25, 0.0625, 0.3125, 0.3125, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("cube_5", 0.6875, 0.0625, 0.3125, 0.75, 0.1875, 0.6875, 172, 0);
	model.addBoxByBlock("dirt", 0.3125, 0.0625, 0.3125, 0.6875, 0.125, 0.6875, 2, 0);


	//group - wood
	model.addBoxByBlock("cube_6", 0.4375, 0.125, 0.4375, 0.5625, 0.875, 0.5625, 17, 1);

	model.addBoxByBlock("cube_7", 0.4375, 0.875, 0.4375, 0.5625, 1, 0.5625, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
	model.addBoxByBlock("cube_8", 0.375, 0.6875, 0.4375, 0.625, 0.875, 0.5625, obj["cube_8"] ? obj["cube_8"].texture : texture, obj["cube_8"] ? obj["cube_8"].data : data);
	model.addBoxByBlock("cube_9", 0.4375, 0.6875, 0.375, 0.5625, 0.875, 0.625, obj["cube_9"] ? obj["cube_9"].texture : texture, obj["cube_9"] ? obj["cube_9"].data : data);
	model.addBoxByBlock("cube_10", 0.375, 0.625, 0.375, 0.625, 0.6875, 0.625, obj["cube_10"] ? obj["cube_10"].texture : texture, obj["cube_10"] ? obj["cube_10"].data : data);
	model.addBoxByBlock("cube_11", 0.4375, 0.625, 0.3125, 0.5625, 0.6875, 0.6875, obj["cube_11"] ? obj["cube_11"].texture : texture, obj["cube_11"] ? obj["cube_11"].data : data);
	model.addBoxByBlock("cube_12", 0.3125, 0.625, 0.4375, 0.6875, 0.6875, 0.5625, obj["cube_12"] ? obj["cube_12"].texture : texture, obj["cube_12"] ? obj["cube_12"].data : data);

	model.addBoxByBlock("cube_13", 0.25, 0.375, 0.25, 0.75, 0.4375, 0.75, obj["cube_13"] ? obj["cube_13"].texture : texture, obj["cube_13"] ? obj["cube_13"].data : data);
	model.addBoxByBlock("cube_14", 0.3125, 0.375, 0.1875, 0.6875, 0.4375, 0.25, obj["cube_14"] ? obj["cube_14"].texture : texture, obj["cube_14"] ? obj["cube_14"].data : data);
	model.addBoxByBlock("cube_15", 0.3125, 0.375, 0.75, 0.6875, 0.4375, 0.8125, obj["cube_15"] ? obj["cube_15"].texture : texture, obj["cube_15"] ? obj["cube_15"].data : data);
	model.addBoxByBlock("cube_16", 0.1875, 0.375, 0.3125, 0.25, 0.4375, 0.6875, obj["cube_16"] ? obj["cube_16"].texture : texture, obj["cube_16"] ? obj["cube_16"].data : data);
	model.addBoxByBlock("cube_17", 0.75, 0.375, 0.3125, 0.8125, 0.4375, 0.6875, obj["cube_17"] ? obj["cube_17"].texture : texture, obj["cube_17"] ? obj["cube_17"].data : data);
	model.addBoxByBlock("cube_18", 0.3125, 0.3125, 0.3125, 0.6875, 0.375, 0.6875, obj["cube_18"] ? obj["cube_18"].texture : texture, obj["cube_18"] ? obj["cube_18"].data : data);

	model.addBoxByBlock("cube_19", 0.1875, 0.25, 0.1875, 0.8125, 0.3125, 0.8125, obj["cube_19"] ? obj["cube_19"].texture : texture, obj["cube_19"] ? obj["cube_19"].data : data);
	model.addBoxByBlock("cube_20", 0.25, 0.25, 0.125, 0.75, 0.3125, 0.1875, obj["cube_20"] ? obj["cube_20"].texture : texture, obj["cube_20"] ? obj["cube_20"].data : data);
	model.addBoxByBlock("cube_21", 0.25, 0.25, 0.8125, 0.75, 0.3125, 0.875, obj["cube_21"] ? obj["cube_21"].texture : texture, obj["cube_21"] ? obj["cube_21"].data : data);
	model.addBoxByBlock("cube_22", 0.125, 0.25, 0.25, 0.1875, 0.3125, 0.75, obj["cube_22"] ? obj["cube_22"].texture : texture, obj["cube_22"] ? obj["cube_22"].data : data);
	model.addBoxByBlock("cube_23", 0.8125, 0.25, 0.25, 0.875, 0.3125, 0.75, obj["cube_23"] ? obj["cube_23"].texture : texture, obj["cube_23"] ? obj["cube_23"].data : data);

	model.addBoxByBlock("cube_24", 0.3125, 0.5, 0.3125, 0.6875, 0.5625, 0.6875, obj["cube_24"] ? obj["cube_24"].texture : texture, obj["cube_24"] ? obj["cube_24"].data : data);
	model.addBoxByBlock("cube_25", 0.375, 0.5, 0.25, 0.625, 0.5625, 0.3125, obj["cube_25"] ? obj["cube_25"].texture : texture, obj["cube_25"] ? obj["cube_25"].data : data);
	model.addBoxByBlock("cube_26", 0.375, 0.5, 0.6875, 0.625, 0.5625, 0.75, obj["cube_26"] ? obj["cube_26"].texture : texture, obj["cube_26"] ? obj["cube_26"].data : data);
	model.addBoxByBlock("cube_27", 0.25, 0.5, 0.375, 0.3125, 0.5625, 0.625, obj["cube_27"] ? obj["cube_27"].texture : texture, obj["cube_27"] ? obj["cube_27"].data : data);
	model.addBoxByBlock("cube_28", 0.6875, 0.5, 0.375, 0.75, 0.5625, 0.625, obj["cube_28"] ? obj["cube_28"].texture : texture, obj["cube_28"] ? obj["cube_28"].data : data);
	model.addBoxByBlock("cube_29", 0.375, 0.4375, 0.375, 0.625, 0.5, 0.625, obj["cube_29"] ? obj["cube_29"].texture : texture, obj["cube_29"] ? obj["cube_29"].data : data);


	//red
	model.addBoxByBlock("cube_30", 0.375, 0.3125, 0.1875, 0.4375, 0.375, 0.25, 35, 14);
	model.addBoxByBlock("cube_31", 0.375, 0.875, 0.4375, 0.4375, 0.9375, 0.5, 35, 14);
	model.addBoxByBlock("cube_32", 0.625, 0.4375, 0.3125, 0.6875, 0.5, 0.375, 35, 14);
	model.addBoxByBlock("cube_33", 0.625, 0.3125, 0.75, 0.6875, 0.375, 0.8125, 35, 14);
	model.addBoxByBlock("cube_34", 0.5, 0.1875, 0.75, 0.5625, 0.25, 0.8125, 35, 14);
	model.addBoxByBlock("cube_35", 0.1875, 0.3125, 0.5625, 0.25, 0.375, 0.625, 35, 14);
	model.addBoxByBlock("cube_36", 0.3125, 0.5625, 0.5625, 0.375, 0.625, 0.625, 35, 14);


	//blue
	model.addBoxByBlock("cube_37", 0.375, 0.1875, 0.25, 0.4375, 0.25, 0.3125, 35, 11);
	model.addBoxByBlock("cube_38", 0.6875, 0.4375, 0.5625, 0.75, 0.5, 0.625, 35, 11);
	model.addBoxByBlock("cube_39", 0.5625, 0.8125, 0.5625, 0.625, 0.875, 0.625, 35, 11);
	model.addBoxByBlock("cube_40", 0.25, 0.3125, 0.75, 0.3125, 0.375, 0.8125, 35, 11);
	model.addBoxByBlock("cube_41", 0.6875, 0.3125, 0.5625, 0.75, 0.375, 0.625, 35, 11);


	model.addBoxByBlock("cube_42", 0.25, 0.4375, 0.3125, 0.3125, 0.5, 0.375, 35, 10);
	model.addBoxByBlock("cube_43", 0.5, 0.9375, 0.375, 0.5625, 1, 0.4375, 35, 10);
	model.addBoxByBlock("cube_44", 0.6875, 0.1875, 0.375, 0.75, 0.25, 0.4375, 35, 10);
	return model;
})(null, 18, 1);//boxes - 34