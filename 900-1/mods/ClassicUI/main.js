/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: header.js

IMPORT("VanillaSlots");
IMPORT("RuntimeConfig");

const UIUtils = com.zhekasmirnov.innercore.utils.UIUtils;
const version = 3;
const padding_ = 60;

let MOD_CONFIG = {};
let MOD_THEMES = [];
const height_main = UI.getScreenHeight() * .43;
const DEFAULT_CONFIG = {
	x: Number(__config__.get("standart_config.x")||0),
	y: Number(__config__.get("standart_config.y")||0),
	scale: Number(__config__.get("standart_config.scale")||0),
	theme: String(__config__.get("standart_config.theme")||"classic")
};
let classic = {
	"slot": "classic_slot",
	"invSlot": "classic_slot",
	"selected_slot": "_selection",
	"selected_invSlot": "_selection",
	"frame": "classic_frame_bg_light",
	"frame_scale": 5,
	"icon_scale": .65,
	"color_inventory": "#000000",
	"color_title": "#000000"
};
try{
	if(FileTools.isExists(__dir__+"custom.json"))
		var CONFIG_UI = FileTools.ReadJSON(__dir__+"custom.json")||{};
	else
		var CONFIG_UI = {};
	
	if(!CONFIG_UI.configs)
		CONFIG_UI.configs = {};
		
	if(!CONFIG_UI.themes)
		CONFIG_UI.themes = {};
		
	if(!CONFIG_UI.themes[DEFAULT_CONFIG.theme])
		CONFIG_UI.themes[DEFAULT_CONFIG.theme] = classic;
}catch(e){
	alert("Ошибка при чтении конфигураций ClassicUI");
	alert(e);
	var CONFIG_UI = {
		themes: {
			"classic": classic
		},
		configs: {}
	};
}

let TILE_LIST = [];
let TILE_CLEAR = [];
let PreRegister = [];

let chests = ["copperChest", "ironChest", "silverChest", "goldChest", "diamondChest", "crystalChest", "obsidianChest"];
for(let i in chests){
	addVanillaSlots(chests[i]);
	
	TILE_CLEAR.push(chests[i]);
}

let vanilla_slots = [];

(function(){
	let registerForTile = VanillaSlots.registerForTile||function(){};
	VanillaSlots.registerForTile = function(id){
		registerForTile.apply(this, arguments);
		TILE_LIST.push(id);
	}
	
	let registerForWindow = VanillaSlots.registerForWindow||function(){};
	VanillaSlots.registerForWindow = function(ui){
		registerForWindow.apply(this, arguments);
		vanilla_slots.push(JSON.stringify(ui.getContent()));
	}
})();

Translation.addTranslation("Inventory", {
	ru: "Инвентарь"
});

const enableVanillaSlots = __config__.get("vanilla_slots")==1;

Callback.addCallback("PostLoaded", function(){
	for(let i in TILE_CLEAR)
		TILE_CLEAR[i] = BlockID[TILE_CLEAR[i]];
		
	let tiles = TileEntity.tileEntityPrototypes;
	for(let i in tiles){
		let tile = tiles[i];
		let id = parseInt(i);
		if(enableVanillaSlots && tile.useNetworkItemContainer) addVanillaSlots(id);
		let getScreenByName = tile.getScreenByName;
		if(getScreenByName)
			tile.getScreenByName = function(){
				return getWindow(id, getScreenByName.apply(this, arguments), this);
			}
		
		let getGuiScreen = tile.getGuiScreen;
		if(getGuiScreen)
			tile.getGuiScreen = function(){
				return getWindow(id, getGuiScreen.apply(this, arguments), this);
			}
	}
	
	for(let i in PreRegister){
		let id = BlockID[PreRegister[i]] || PreRegister[i];
		if(id){
			TILE_LIST.push(id);
			let obj = TileEntity.getPrototype(id);
			if(!obj) continue;
			let init = obj.init||function(){};
			obj.init = function(){
				init.apply(this, arguments);
				VanillaSlots.registerServerEventsForContainer(this.container);
			};
		}
	}
}, -1);




// file: size.js

function setSizeElement(obj, scale, height){
	if(obj.type == "text"){
		obj.font = obj.font || {};
		obj.font.size = obj.font.size || 20;
		obj.font.size *= scale;
	}else if(obj.type == "frame"){
		if(obj.width)
			obj.width *= scale;
		if(obj.height)
			obj.height *= scale;
	}else{
		if(obj.type == "slot")
			obj.size = obj.size || 60;
		else
			obj.size = obj.size || 20;
		obj.size *= scale;
	
		if(obj.width)
			obj.width *= scale;
		if(obj.height)
			obj.height *= scale;
		if(obj.scale)
			obj.scale *= scale;
	}
	
	if(obj.x)
		obj.x = obj.x / 1000 * (1000 * scale);
	if(obj.y)
		obj.y = obj.y / height * (height * scale);
}

function setSize(content, scale, height){
	let elements = content.elements;
	for(let i in elements)
		setSizeElement(elements[i], scale, height);
	let drawing = content.drawing;
	for(let i in drawing)
		setSizeElement(drawing[i], scale, height);
}

function getSize(ui, obj, func){
	obj = obj || ui.getContent();
	func = func || function(){};
	let scrollX = 0;
	let scrollY = 0;
	let minX = 9999999999999;
	let minY = 9999999999999;
	let u = new UI.Window();
	for(let i in obj.elements){
		let e = obj.elements[i];
		let element = com.zhekasmirnov.innercore.api.mod.ui.elements.ElementFactory.construct(u, e);
		try{
			element.onSetup();
			let rect = element.elementRect;
			scrollY = Math.max(scrollY, rect.bottom);
			scrollX = Math.max(scrollX, rect.right);
			minY = Math.min(minY, e.y);
			minX = Math.min(minX, e.x);
			func(e);
		}catch(e){}
	}

	for(let i in obj.drawing){
		let e = obj.drawing[i];
		if(e.type == "bitmap" && e.bitmap != "gui_ground"){
			let bitmap = com.zhekasmirnov.innercore.api.mod.ui.TextureSource.instance.get(e.bitmap);
			scrollY = Math.max(scrollY, e.y+(e.height||bitmap.getHeight())*(e.scale||1));
			scrollX = Math.max(scrollX, e.x+(e.width||bitmap.getWidth())*(e.scale||1));
			minY = Math.min(minY, e.y);
			minX = Math.min(minX, e.x);
			func(e);
		}
	}
	return {
		scrollX: scrollX,
		scrollY: scrollY,
		minX: minX,
		minY: minY,
		width: scrollX - minX,
		height: scrollY - minY
	};
}

function transfer(content, x, y){
	let elements = content.elements;
	for(let i in elements){
		let e = elements[i];
		e.x+=x;
		e.y+=y;
	}
	let drawing = content.drawing;
	for(let i in drawing){
		let e = drawing[i];
		e.x+=x;
		e.y+=y;
	}
}

let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}




// file: api.js

function objectFix(obj, obj2){
	for(let i in obj2)
		if(obj[i] === undefined)
			obj[i] = obj2[i];
}

function getTextIdByNumberId(id){
	if(typeof id == "string") return id;
	for(let i in BlockID)
		if(BlockID[i] == id)
			return i;
	return null;
}

function getConfigOriginal(id, v) {
	let textid = getTextIdByNumberId(id);
	let obj = CONFIG_UI.configs[textid] || MOD_CONFIG[textid];
	if(obj && CONFIG_UI.configs[textid]){
		obj.theme = CONFIG_UI.themes[obj.theme] ? obj.theme : DEFAULT_CONFIG.theme;
		if(!CONFIG_UI.themes[obj.theme])
			CONFIG_UI.themes[obj.theme] = {};
		objectFix(obj, DEFAULT_CONFIG);
		return obj;
	}else if(v){
		obj = copyObject(MOD_CONFIG[textid]||DEFAULT_CONFIG);
		objectFix(obj, DEFAULT_CONFIG);
		CONFIG_UI.configs[textid] = obj;
		return obj;
	}
	return MOD_CONFIG[textid]||DEFAULT_CONFIG;
}

function getConfig(id, v){
	let config = getConfigOriginal(id, v);
	let theme = getThemeById(config.theme);
	let prot = theme["prototype"];
	if(prot){
		let customConfigs = prot["customConfigs"];
		if(customConfigs){
			let obj = copyObject(customConfigs["default"]||{});
			for(let key in obj)
				if(config[key] === undefined)
					config[key] = obj[key];
			}
	}
	return config;
}

const BLACK_LIST_THEME = ["base"];

function _base(theme, base_theme){
	for(let key in base_theme)
		if(BLACK_LIST_THEME.indexOf(key) == -1)
			if(theme[key] === undefined || copys.indexOf(typeof theme[key]) != -1 || Array.isArray(theme[key]))
				theme[key] = base_theme[key];
			else
				theme[key] = _base(theme[key], base_theme[key]);
	return theme;
}

function getThemeById(id, is){
	let theme = copy(CONFIG_UI.themes[id]);
	let base = theme.base;
	if(base){
		for(let i in base)
			theme = _base(theme, copy(getThemeById(base[i]))||{}, false);
		theme = _base(theme, copy(theme.post_base)||{});
	}
	if(is) objectFix(theme, classic);
	return theme;
}

function getSetting(theme){
	return (theme["prototype"]||{}).setting||{};
}

function getTheme(id){
	return getThemeById(getConfig(id).theme, true);
}

function getThemes(){
	let result = [];
	for(let key in CONFIG_UI.themes){
		let theme = CONFIG_UI.themes[key];
		let can_show = theme.can_show;
		let ver = theme.version || {};
		if((can_show === undefined || can_show) && ((ver.min || version) <= version && version <= (ver.max || version)))
			result.push(key);
	}
	return result;
}

function canThemeById(id, theme_name){
	let theme = getThemeById(id);
	return id == theme_name || (theme.base || []).indexOf(theme_name) != -1;
}

function canTheme(id, theme_name){
	let config = getConfig(id);
	let theme = getThemeById(config.theme);
	return config.theme == theme_name || (theme.base || []).indexOf(theme_name) != -1;
}

function replacedImages(obj, theme){
	if(obj === undefined) return;
	for(let key in obj){
		let e = obj[key];
		if(theme.textures[e.bitmap] !== undefined)
			e.bitmap = theme.textures[e.bitmap];
		if(theme.textures[e.bitmap2] !== undefined)
			e.bitmap = theme.textures[e.bitmap2];
	}
}

function replacedTextures(group, theme){
	if(theme.textures){
		let it = group.getAllWindows().iterator();
		while (it.hasNext()) {
			let win = it.next();
			let content = win.getContent();
			replacedImages(content.elements, theme);
			replacedImages(content.drawing, theme);
		}
	}
}

function getWindow(id, result, self){
	try{
		if(!result || !(result instanceof UI.StandartWindow || result instanceof UI.StandardWindow))
			return result;
		let v = createUI(result, id, self);
		return v;
	}catch(e){alert(e)}
	return result;
}

function addVanillaSlots(strId){
	PreRegister.push(strId);
}

let TextureSource = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.TextureSource').instance;
function StringToBitmap(encodedString){
	try{
		encodeByte = android.util.Base64.decode(encodedString, 0);
		bitmap = android.graphics.BitmapFactory.decodeByteArray(encodeByte, 0, encodeByte.length);
		return bitmap;
	}catch(e){
		return null;
	}
}
function loadTexture(name, bitmap){
	TextureSource.put(name, StringToBitmap(bitmap));
}
function getFunctionText(update){
	let text = "";
	if(typeof update == "string")
		text = update;
	else 
		for(let i in update)
			text += update[i]+"\n";
	return text;
}
function registerUiConfig(id,config){
	if(typeof id == "number")
		id = getTextIdByNumberId(id);
	objectFix(config, DEFAULT_CONFIG);
	MOD_CONFIG[id] = config;
}
function registerTheme(id,config){
	CONFIG_UI.themes[id] = config;
	MOD_THEMES.push(id);
}

let handlers = {};
let _handlers = [];

function registerHandler(id, handler){
	if(typeof id == "string")
		id = BlockID[id];
	handlers[id] = handler;
}

function registerAllHandler(handler){
	_handlers.push(handler);
}

function runHandler(obj, name){
	if(typeof idOrObject == "number") obj = handlers[id];
	
	let args = [];
	for(let i = 2;i < arguments.length;i++)
		args.push(arguments[i]);
	
	try{
		if(obj[name])
			obj[name].apply(obj, args);
	}catch(e){
		UIUtils.log(String(e));
	}
}

function runHandlerAll(name){
	let args = [];
	for(let i = 1;i < arguments.length;i++)
		args.push(arguments[i]);
	for(let i in _handlers)
		try{
			let obj = _handlers[i];
			if(obj[name])
				obj[name].apply(obj, args);
		}catch(e){
			UIUtils.log(String(e));
		}
}

function resize(ui, size, config, objj, id){
	let obj = objj || ui.getContent();
	size = size || getSize(ui, obj);
	
	let setting = getBlockFunctions(id);
	
	let location = new UI.WindowLocation({
		x: (1000-UI.getScreenHeight())/2,
		y: 25, 
		height: height_main,
		width: UI.getScreenHeight()-5
	});
	if(!setting.disableResize){
		if(size.width < 1000 && size.height < location.globalToWindow(location.height)-30)
			setSize(obj, Math.min(Number(__config__.get("max_scale")||2), Math.min(1000/size.width, (location.globalToWindow(location.height)-30)/size.height))+config.scale, location.globalToWindow(location.height)-30);
		size = getSize(ui, obj);
	}
	if(!setting.disableTransfer && ui instanceof UI.StandartWindow)
		transfer(obj, (500-(size.width/2))-size.minX+config.x, -size.minY + 30+config.y);
	if(!obj)
		ui.setContent(obj);
	return size;
}
function buildMain(ui, id, config){
	let win = updateUi(ui, id);
	return new UI.Window({ 
		location: {
			x: (1000-UI.getScreenHeight())/2+10,
			y: 40, 
			height: !config.disableInventory ? height_main : UI.getScreenHeight()-80,
			width: UI.getScreenHeight()-20,
			forceScrollX: true,
			forceScrollY: true,
			scrollY: win.location.windowToGlobal(win.size.scrollY)
		},
		drawing: win.draw,
		elements: win.obj.elements 
	});
}
let blockSettings = {};
function setBlockFunctions(id, obj){
	blockSettings[id] = obj;
}
function getBlockFunctions(id){
	return blockSettings[id] || {};
}
function getSizeClassicUi(id, group){
	let location = group.getWindowContent("tabs").location;
	let setting = getBlockFunctions(id);
	setting.tabs = setting.tabs || {};
	let left = setting.tabs.left || [];
	let right = setting.tabs.right || [];
	
	let width = location.width;
	if(left.length == 0)
		width -= padding_;
	if(right.length == 0)
		width -= padding_;
	else
		width -= 10;
		
	let result = {
		y: location.y,
		height: location.height,
		x: left.length != 0 ? location.x : location.x + padding_,
		width: width
	};
		
	runHandlerAll("updateSize", id, group, result);
	runHandler(handlers[id]||{}, "updateSize", group, result);
	let theme = getTheme(id);
	let prot = theme["prototype"];
	if(prot)
		try{
			eval(getFunctionText(prot["updateSize"]));
		}catch(e){
			alert(e)
		}
	
	return result;
}
let customConfigsMod = {};
function addedConfig(id){
	let arr = [];
	for(let i = 1;i < arguments.length;i++)
		arr.push(arguments[i]);
	customConfigsMod[id] = customConfigsMod[id] || [];
	customConfigsMod[id].push(arr);
}
let ConfigDefaultValue = {};
function setConfigDefaultValue(id, name, value){
	ConfigDefaultValue[id] = ConfigDefaultValue[id] || [];
	ConfigDefaultValue[id].push({name: name, value: value});
}
function getElements(window){
	let result = {};
	let it = window.getAllWindows().iterator();
	while (it.hasNext()) {
		let win = it.next();
		let elements = win.getElements();
		let it2 = elements.keySet().iterator();
		while (it2.hasNext()) {
			let key = it2.next();
			result[key] = elements.get(key);
		}
	}
	return result;
}
function refreshAll(window){
	window.open();
}
/*function refreshAll(window, is){
	//window.open();
	
	window.close();
	try{
		if(is)
			VanillaSlots.registerForWindow(window);
	}catch(e){}
	let container = window.getContainer();
	container.openAs(window);
	//window.open();
	//window.refreshAll();
	let elements = getElements(window);
		for(let key in elements)
		try{
			elements[key].setupInitialBindings(container, key);
		}catch(e){}
		
//	container.applyAllBindingsFromMap();
	
	let field = container.getClass().getDeclaredField("bindingsMap");
	field.setAccessible(true);
	let bindingsMap = field.get(container);
	let it = bindingsMap.keySet().iterator();
	while (it.hasNext()) {
		let key = it.next();
		let value = bindingsMap.get(key);
		let parts = key.split("::");
		if (parts.length == 2) {
			let element = elements[parts[0]];
			try{
				element.setBinding(parts[1], value);
			}catch(e){}
		}
	}
}*/




// file: VanillaSlotsAPI.js

/*let VanillaUI = new UI.Window({
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
	],
	elements: {}
});

let VanillaSlotsAPI = {
	regWindow(window){
		
	},
	registerClientUi(window){
		
	}
};
Ты этого не видел.
*/




// file: copy.js

let copys = ["number", "string", "boolean", "function"];
const MAX_COPY = 50;
function copyArray(obj, count){
	if(count !== undefined) count++;
	if(count >= MAX_COPY) return;
	let result = [];
	for(let key in obj){
		let element = obj[key];
		let value;
		if(copys.indexOf(typeof element) != -1)
			value = element;
		else if(Array.isArray(element))
			value = copyArray(element, count||0);
		else
			value = copyObject(element, count||0);
		if(value === undefined) return;
		result[key] = value;
	}
	return result;
}
function copyObject(obj, count){
	if(count !== undefined) count++;
	if(count >= MAX_COPY) return;
	let result = {};
	for(let key in obj){
		let element = obj[key];
		let value;
		if(copys.indexOf(typeof element) != -1)
			value = element;
		else if(Array.isArray(element))
			value = copyArray(element, count||0);
		else
			value = copyObject(element, count||0);
		if(value === undefined) return;
		result[key] = value;
	}
	return result;
};
const BLACK_LIST = {};
function copy(value, id){
	let returned;
	if(Array.isArray(value)){
		returned = copyArray(value);
	}else if(copys.indexOf(typeof value) != -1)
		returned = value;
	else
		returned = copyObject(value);
	if(id !== undefined && returned === undefined){
		BLACK_LIST[id] = true;
		return value;
	}
	return returned;
}

function copyArrayLegacy(obj){
	let result = [];
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArrayLegacy(element);
		else
			result[key] = copyObjectLegacy(element);
	}
	return result;
}
function copyObjectLegacy(obj){
	let result = {};
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArrayLegacy(element);
		else
			result[key] = copyObjectLegacy(element);
	}
	return result;
};




// file: update.js

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




// file: shared.js

function checkReplacedArray(arr, file, path){
	for(let key in arr){
		let value = arr[key];
		if(Array.isArray(value))
			checkReplacedArray(value, file, path);
		else if(copys.indexOf(typeof value) != -1)
			if(typeof value == "string" && value.split("${").length > 1){
				arr[key] = FileTools.ReadText(path+file.src[value.replace("${", "").replace("}", "")]);
			}
		else
			checkReplaced(value, file, path);
	}
}
function checkReplaced(obj, file, path){
	for(let key in obj){
		let value = obj[key];
		if(Array.isArray(value))
			checkReplacedArray(value, file, path);
		else if(copys.indexOf(typeof value) != -1){
			if(typeof value == "string" && value.split("${").length > 1){
				obj[key] = FileTools.ReadText(path+file.src[value.replace("${", "").replace("}", "")]);
			}
		}else
			checkReplaced(value, file, path);
	}
}

(function(){
	try{
		let files = FileTools.GetListOfFiles(eval(CONFIG_UI.library||"__dir__+'themesAndConfigs/'"));
		for(let i in files){
			let file_name = String(files[i].getName());
			let path = String(files[i].getAbsolutePath());
			let path_directory = String(files[i].getParent());
			let file = FileTools.ReadJSON(path);
			if(file_name.split(".dev.json").length > 1){
				checkReplaced(file, file, path_directory+"/");
				if(file.save){
					let beautify = file.beautify_save;
					let save = file.save;
					delete file.save;
					delete file.src;
					delete file.beautify_save;
					FileTools.WriteJSON(path_directory+"/"+save, file, beautify);
				}
			}
			file.themes = file.themes || {};
			for(let key in file.themes)
				registerTheme(key, file.themes[key]);
			
			file.configs = file.configs || {};
			for(let key in file.configs)
				registerUiConfig(key, file.themes[key]);
		}
	}catch(e){}
	for(let key in CONFIG_UI.themes){
		let theme = CONFIG_UI.themes[key];
		if(theme["prototype"] && theme["prototype"].init){
			let init = theme["prototype"].init;
			let text = "";
			if(typeof init == "string")
				text = init;
			else 
				for(let i in init)
					text += init[i]+"\n";
			try{
				eval(text);
				Logger.Log("Loaded "+key, "ClassicUI");
			}catch(e){
				Logger.Log("Failed loaded "+key+"\n"+e, "ClassicUI");
			}
		}
	}
})();

ModAPI.registerAPI("ClassicUI", {
	getWindow: getWindow,
	addVanillaSlots: addVanillaSlots,
	getConfig: getConfig,
	getTheme: getTheme,
	registerUiConfig: registerUiConfig,
	registerTheme: registerTheme,
	setBlockFunctions: setBlockFunctions,
	getBlockFunctions: getBlockFunctions,
	buildMain: buildMain,
	getSizeClassicUi: getSizeClassicUi,
	setConfigDefaultValue: setConfigDefaultValue,
	addedConfig: addedConfig,
	registerHandler: registerHandler,
	registerAllHandler: registerAllHandler,
	getThemes: getThemes,
	canThemeById: canThemeById,
	canTheme: canTheme,
	getThemeById: getThemeById,
	clone: copy,
	version: version,
	requireGlobal(cmd){
		return eval(cmd);
	}
});




