let CustomWindowGroup = WRAP_JAVA("com.reider.CustomWindowGroup");

const TouchEventType = com.zhekasmirnov.innercore.api.mod.ui.types.TouchEventType;
function updateUi(ui, id){
	let config = getConfig(id);
	let theme = getTheme(id);
	let obj = ui.getContent();
	let isVaninillaSlots = false;
	try{
		let json = JSON.stringify(obj); 
		isVaninillaSlots = vanilla_slots.indexOf(json) != -1;
	}catch(e){}

	try{
		if(__config__.get("legacy_copy") == 1)
			obj = copyObjectLegacy(obj);
		else
			obj = copy(obj, id);
	}catch(e){}

	let draw = [];
	draw.push({type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)});
	let v = TILE_CLEAR.indexOf(id) != -1 || isVaninillaSlots;

	if(PreRegister.indexOf(id) != -1) isVaninillaSlots = true;
	if(getBlockFunctions(id).disableVanillaSlots) isVaninillaSlots = false;
	obj.drawing.pop();
	function getText(text){
		try {
			return eval(text);
		} catch(e){
			return text;
		}
	}
	let size = getSize(ui, obj, function(e){
		if(e.type == "invSlot"){
			if(!e.bitmap)
				e.bitmap = getText(theme.invSlot);
				
			if(!e.bitmap2)
				e.bitmap2 = getText(theme.selected_invSlot);
		}
		if(e.type == "slot"){
			e.iconScale = getText(theme.icon_scale);
			if(!e.bitmap)
				e.bitmap = getText(theme.slot);
				
			if(!e.bitmap2)
				e.bitmap2 = getText(theme.selected_slot);
			
			if(v){
				e.visual = undefined;
				e.onTouchEvent = undefined;
			}
		}
	});
	
	for(let i in obj.drawing)
		if(i > 1 && obj.drawing[i].bitmap != "gui_ground")
			draw.push(obj.drawing[i]);
	if(!BLACK_LIST[id])
		size = resize(ui, size, config, obj, id);
	return {
		obj: obj,
		v: v,
		size: size,
		isVaninillaSlots: isVaninillaSlots,
			location: new UI.WindowLocation({
			x: (1000-UI.getScreenHeight())/2,
			y: 25, 
			height: height_main,
			width: UI.getScreenHeight()-5
		}),
		draw: draw
	}
}



function getInventory(id, self, theme, config, func, getText, block_name){
	let inventory = new UI.Window({
		location: {
			x: (500-(UI.getScreenHeight()/2)),
			height: UI.getScreenHeight(),
			width: Number(UI.getScreenHeight())
		},
		drawing: [
			{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
			{type: "frame", bitmap: getText(theme.frame), scale: getText(theme.frame_scale), width: 1000, height: 934, y: 25},
			{type: "text", text: block_name, x: 500-(getTextWidth(block_name, 30)/2), y: 70, font: {color: android.graphics.Color.parseColor(getText(theme.color_title)), size: 30}}
		],
		elements: {
			"default-close-button": {type: "button", bitmap: "classic_close_button", scale: 5, x: 925, y: 25, onTouchEvent: func}
		}
	});
	let setting = getBlockFunctions(id);
	if(!setting.disableInventory)
	(function(xi, yi, size, ui){
		let cont = ui.getContent();
		cont.elements["inventory_text"] = {type: "text", text: Translation.translate("Inventory"), x: xi, y: ((yi-(size+5)*3)-(size+15))+(size+5)-40, font: {color: android.graphics.Color.parseColor(getText(theme.color_inventory)), size: 30}};
		for(let y = 0;y < 4;y++)
			for(let x = 0;x < 9;x++)
				cont.elements["__invSlot"+(x+(9*y))] = {type: "invSlot", x: xi+((size+5)*x), y: y == 0 ? yi : ((yi-(size+5)*3)-(size+15))+((size+5)*y), index: x+(9*y), size: size, bitmap: getText(theme.invSlot), bitmap2: getText(theme.selected_invSlot)};
		ui.setContent(cont);
	})(75, 845, 90, inventory);
	return inventory
}






















function buildTabs(id, self, config, theme, inventory, getText, group, def, isVaninillaSlots){
	let ui = new UI.Window({
		location: {
			x: inventory.location.x-padding_,
			width: inventory.location.width+padding_*2
		},
		drawing: [
			{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
		],
		elements: {}
	});
	const padding = ui.location.globalToWindow(padding_);
	let setting = getBlockFunctions(id);
	setting.tabs = setting.tabs || {};
	let content = ui.getContent();
	function renderTabs(prefix, tabs, x){
		for(let i in tabs){
			let tab = tabs[i];
			if(tab.id === undefined) continue;
			content.elements[prefix+tab.id] = {type: "frame", x: x, y: 40+(padding*tab.id), width: padding, height: padding, bitmap: getText(theme.frame_tab || theme.frame), scale: getText(theme.frame_scale)};
			tab.icon = tab.icon || {};
			tab.icon.id = tab.icon.id || 0;
			tab.icon.count = tab.icon.count || 1;
			tab.icon.data = tab.icon.data || 0;
			content.elements[prefix+tab.id+"_icon"] = {type: "slot", x: x, y: 40+(padding*tab.id), size: padding, z: 1, source: tab.icon, visual: true, bitmap: "_default_slot_empty", clicker: {
				onClick(){
					if(tab.onClick){
						let result = tab.onClick(def, config, theme, id);
						if(result){
							group.setWindowContent("main", result.getContent());
							refreshAll(group, isVaninillaSlots);
						}
					}
				}
			}};
		}
	}
	renderTabs("left_", setting.tabs.left || [], 20);
	renderTabs("right_", setting.tabs.right || [], 980-padding);
	ui.setContent(content);
	return ui;
}


function createUI(ui, id, self){
	let obj_ = updateUi(ui, id);
	let obj = obj_.obj;
	let v = obj_.v;
	let size = obj_.size;
	let isVaninillaSlots = obj_.isVaninillaSlots;
	let location = obj_.location;
	let draw = obj_.draw;
	let theme = getTheme(id);
	let config = getConfig(id);
	
	let block_name = Item.getName(id, 0).split("\n")[0];
	try{
		block_name = (obj.standart||obj.standard).header.text.text;
	}catch(e){}
	let handle = handlers[id]||{};
	let group;
	function getText(text){
		try {
			return eval(text);
		} catch(e){
			return text;
		}
	}
	function onTouchEvent(element, event){
		if (event.type == TouchEventType.CLICK){
			element.window.close();
		}else if(event.type == TouchEventType.LONG_CLICK){
			let config = getConfig(id, true);
			let legacy_config = copyObject(config);
			let legacy_theme = getTheme(id);
			let types = ["Ui setting", "save",
				["keyValue", "slider", "x", "x", -200, 200, 5, ""],
				["keyValue", "slider", "y", "y", -200, 200, 5, ""],
				["keyValue", "slider", "scale", "scale", -2, 2, .1, ""],
				["keyValue", "multipleChoice", "Theme", "theme", getThemes()],
			];
					
			let prot = legacy_theme["prototype"];
			if(prot){
				let customConfigs = prot["customConfigs"];
				if(customConfigs){
					let obj = customConfigs["configs"]||[];
					for(let i in obj)
						types.push(obj[i]);
				}
			}
			let values = customConfigsMod[id];
			if(values){
				for(let i in values)
					types.push(values[i]);
			}
			values = ConfigDefaultValue[id];
			if(values){
				for(let i in values){
					let value = values[i]
					if(config[value.name] === undefined)
							config[value.name] = value.value;
				}
			}
			runHandler(handle, "buildConfig", group, self, config, types);
			runHandlerAll("buildConfig", id, group, self, config, types);
			
			function func(){
				let save = {
					themes: {},
					configs: CONFIG_UI.configs
				};
				for(let key in CONFIG_UI.themes)
					if(MOD_THEMES.indexOf(key) == -1)
						save.themes[key] = CONFIG_UI.themes[key];
				try{
					FileTools.WriteJSON(__dir__+"custom.json", save, true);
				}catch(e){
					alert("Ошибка при сохранение изменений");
					alert(e);
				}
				obj_ = updateUi(ui, id);
				obj = obj_.obj;
				let config = getConfig(id, true);
				
				let isNewTheme = config.theme != legacy_config.theme;
						
				let theme = getTheme(id);
				function getText(text){
					try {
						return eval(text);
					} catch(e){
						return text;
					}
				}
				main.content.drawing = obj_.draw;
				main.content.elements = obj.elements;
						
				let inventory = getInventory(id, self, theme, config, onTouchEvent, getText, block_name);
				
				group.setWindowContent("main", main.content);

				group.setWindowContent("header", inventory.getContent());
				group.setWindowContent("tabs", buildTabs(id, self, config, theme, inventory, getText, group, ui, v || isVaninillaSlots).getContent());
						
				let prot = theme["prototype"];
				if(prot){
					try{
						eval(getFunctionText(prot["update"]));
					}catch(e){
						alert(e)
					}
				}
				prot = legacy_theme["prototype"];
				if(prot && isNewTheme){
					try{
						eval(getFunctionText(prot["replaceTheme"]));
					}catch(e){
						alert(e)
					}
				}
				runHandler(handle, "replaceTheme", group, self);
				runHandlerAll("replaceTheme", id, group, self);
				runHandler(handle, "updateUi", group, self);
				runHandlerAll("updateUi", id, group, self);
				
				replacedTextures(group, theme);
				
				refreshAll(group, v || isVaninillaSlots);
			}
			try{
				showConfig(types, config, func);
			}catch(e){
				alert("Ошибка при открытии настроек, открыты настройки по умолчанию");
				showConfig(["Ui setting", "save",
					["keyValue", "slider", "x", "x", -200, 200, 5, ""],
					["keyValue", "slider", "y", "y", -200, 200, 5, ""],
					["keyValue", "slider", "scale", "scale", -2, 2, .1, ""],
					["keyValue", "multipleChoice", "Theme", "theme", getThemes()],
				], config, func);
			}
		}
	}
	let setting = getBlockFunctions(id);
	let inventory = getInventory(id, self, theme, config, onTouchEvent, getText, block_name);
	let main = new UI.Window({ 
		location: {
			x: (1000-UI.getScreenHeight())/2+10,
			y: 40, 
			height: !setting.disableInventory ? height_main : UI.getScreenHeight()-80,
			width: UI.getScreenHeight()-20,
			forceScrollX: true,
			forceScrollY: true,
			scrollY: location.windowToGlobal(size.scrollY)
		},
		drawing: draw,
		elements: obj.elements 
	});
	group = new CustomWindowGroup(main.getContent());
	let tabs = buildTabs(id, self, config, theme, inventory, getText, group, ui, v || isVaninillaSlots);
	tabs.setBlockingBackground(true);
	runHandler(handle, "preCreate", group, self);
	runHandlerAll("preCreate", id, group, self);
	let prot = theme["prototype"];
	if(prot){
		try{
			eval(getFunctionText(prot["preCreate"]));
		}catch(e){
			alert(e)
		}
	}
	inventory.setInventoryNeeded(true);
	inventory.setCloseOnBackPressed(true);
	group.addWindowInstance("tabs", tabs);
	group.addWindowInstance("header", inventory);
	group.addWindowInstance("main", main);
	if(prot){
		try{
			eval(getFunctionText(prot["update"]));
		}catch(e){
			alert(e)
		}
		try{
			eval(getFunctionText(prot["postCreate"]));
		}catch(e){
			alert(e)
		}
	}
	runHandler(handle, "postCreate", group, self);
	runHandler(handle, "updateUi", group, self);
	runHandlerAll("postCreate", id, group, self);
	runHandlerAll("updateUi", id, group, self);
	try{
		if(v || isVaninillaSlots)
			VanillaSlots.registerForWindow(group);
	}catch(e){alert(e)}
	main.setEventListener({
		onClose(self){
			let theme = getTheme(id);
			let prot = theme["prototype"];
			if(prot)
				try{
					eval(getFunctionText(prot["close"]));
				}catch(e){
					alert(e)
				}
			runHandler(handle, "onClose", group, self);
			runHandlerAll("onClose", id, group, self);
		},
		onOpen(self){
			let theme = getTheme(id);
			let prot = theme["prototype"];
			if(prot)
				try{
					eval(getFunctionText(prot["open"]));
				}catch(e){
					alert(e)
				}
			runHandler(handle, "onOpen", group, self);
			runHandlerAll("onOpen", id, group, self);
		}
	});
	replacedTextures(group, theme);
	return group;
}