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

//function _baseArr(theme, base_theme)

function _base(theme, base_theme){
	for(let key in base_theme)
		if(BLACK_LIST_THEME.indexOf(key) == -1)
			if(theme[key] === undefined || copys.indexOf(typeof theme[key]) != -1 || Array.isArray(theme[key])){
				if(Array.isArray(theme[key])){
					theme[key] = _base(theme[key], base_theme[key]);
					continue;
				}
				theme[key] = base_theme[key];
			}else
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

function canEnableClassicUI(){
	return true;
}
ModAPI.addAPICallback("CoreUtility", function(api){
	canEnableClassicUI = function(){
		return __config__.get("disable_auto_type_ui") == 1 || api.GlobalContext.getClientInstance().getOptions().getUiProfile() == 0;
	}
});

function getWindow(id, result, self){
	try{
		if(!canEnableClassicUI()) return result;
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
			setSize(obj, Math.min(CONFIG.max_scale, Math.min(1000/size.width, (location.globalToWindow(location.height)-30)/size.height))+config.scale, location.globalToWindow(location.height)-30);
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