Bmp = {

	frame: UI.FrameTextureSource.get("default_frame_2"),
	slot: UI.FrameTextureSource.get("_default_slot_light").expandAndScale(22, 22, 1, ag.Color.parseColor("#7d7575")),

	createFrame: function(name, width, height){
		UI.TextureSource.put(name, this.frame.expandAndScale(width, height, 1, ag.Color.parseColor("#7d7575")));
	},

	createEmpty: function(name, width, height){
		UI.TextureSource.put(name, new ag.Bitmap.createBitmap(width, height, ag.Bitmap.Config.ARGB_8888));
	},

	createSlot: function(name, onlySlot){
		const bmp = new ag.Bitmap.createBitmap(22, 22, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		cvs.drawBitmap(this.slot, 0, 0, null);
		cvs.drawBitmap(onlySlot ? FileTools.ReadImage(__dir__ + "res/slot_icon/" + name + ".png") : UI.TextureSource.get("symbol." + name), 3, 3, null);
		UI.TextureSource.put("tc_slot_" + name, bmp);
	},

	layer: [1, 0, 2, 3],
	createTool: function(tool, material, breakPart){
		const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		let i = 0;
		for(let j = 0; j < material.length; j++){
			i = this.layer[j];
			cvs.drawBitmap(FileTools.ReadImage(__dir__ + "res/tool/" + tool + "/" + i + "/" + material[i] + (breakPart != undefined && i == breakPart ? "2" : "") + ".png"), 0, 0, null);
		}
		return bmp;
	},

	addModifier: function(type, data, modifier, isBreak){
		const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
		const cvs = new ag.Canvas(bmp);
		const base = FileTools.ReadImage(__dir__ + "res/items-opaque/tool/tinkers_" + type + (isBreak ? "_broken_" : "_") + data + ".png");
		if(modifier == "add1" || modifier == "add2" || modifier == "add3"){
			return base;
		}
		const mod = FileTools.ReadImage(__dir__ + "res/tool/" + type + "/modifier/" + modifier + ".png");
		cvs.drawBitmap(base, 0, 0, null);
		cvs.drawBitmap(mod, 0, 0, null);
		return bmp;
	}

};



Bmp.createFrame("smeltery_heat_bar_0", 5, 18);
Bmp.createFrame("smeltery_lava_bar_0", 14, 54);
Bmp.createFrame("smeltery_metal_bar_0", 54, 54);

Bmp.createSlot("frame", true);
Bmp.createSlot("lapis", true);
Bmp.createSlot("dust", true);
Bmp.createSlot("tool", true);
Bmp.createSlot("rod");
Bmp.createSlot("binding");
Bmp.createSlot("rod2");
Bmp.createSlot("binding2");
Bmp.createSlot("pickaxe");
Bmp.createSlot("shovel");
Bmp.createSlot("hatchet");
Bmp.createSlot("scythe");
Bmp.createSlot("hammer");
Bmp.createSlot("excavator");
Bmp.createSlot("lumberaxe");
Bmp.createSlot("plate");
Bmp.createSlot("sword");
Bmp.createSlot("guard");