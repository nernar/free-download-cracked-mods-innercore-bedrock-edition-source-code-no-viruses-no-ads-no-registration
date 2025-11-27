IMPORT("VanillaSlots");
IMPORT("RuntimeConfig");

let MOD_CONFIG = {};
let MOD_THEMES = [];
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

function getConfig(id, v) {
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

function getTheme(id){
	objectFix(CONFIG_UI.themes[getConfig(id).theme], classic);
	return CONFIG_UI.themes[getConfig(id).theme];
}

let TILE_LIST = [];
let TILE_CLEAR = [];
let PreRegister = [];
function addVanillaSlots(strId){
	PreRegister.push(strId);
}

Callback.addCallback("ModsLoaded", function(){
	for(let i in PreRegister){
		let id = BlockID[PreRegister[i]];
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
	for(let i in TILE_CLEAR)
		TILE_CLEAR[i] = BlockID[TILE_CLEAR[i]];
		
	let tiles = TileEntity.tileEntityPrototypes;
	for(let i in tiles){
		let tile = tiles[i];
		let id = parseInt(i);
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
});

function getWindow(id, result, self){
//	try{
		if(!result || !(result instanceof UI.StandartWindow || result instanceof UI.StandardWindow))
			return result;
		return createUI(result, id, self);
	//}catch(e){}
	return result;
}

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

const height_main = UI.getScreenHeight() * .438;
function setSizeElement(obj, scale, height){
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

let CustomWindowGroup = WRAP_JAVA("com.reider.CustomWindowGroup");

Translation.addTranslation("Inventory", {
	ru: "Инвентарь"
});

let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}

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
		obj = copyObject(obj);
	}catch(e){}
	
	let draw = [];
	draw.push({type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)});
	let v = TILE_CLEAR.indexOf(id) != -1 || isVaninillaSlots;
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
			e.iconScale = theme.icon_scale;
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
	
	let location = new UI.WindowLocation({
		x: (1000-UI.getScreenHeight())/2,
		y: 25, 
		height: height_main,
		width: UI.getScreenHeight()-5
	});
	
	if(size.width < 1000 && size.height < location.globalToWindow(location.height)-30)
		setSize(obj, Math.min(Number(__config__.get("max_scale")||2), Math.min(1000/size.width, (location.globalToWindow(location.height)-30)/size.height))+config.scale, location.globalToWindow(location.height)-30);
	size = getSize(ui, obj);
	if(ui instanceof UI.StandartWindow)
		transfer(obj, (500-(size.width/2))-size.minX+config.x, -size.minY + 30+config.y);
	return {
		obj: obj,
		v: v,
		size: size,
		isVaninillaSlots: isVaninillaSlots,
		location: location,
		draw: draw
	}
}

function getInventory(id, self, theme, config, func, getText, block_name){
	let inventory = new UI.Window({
		location: {
			x: (1000-UI.getScreenHeight())/2,
			height: UI.getScreenHeight(),
			width: UI.getScreenHeight()
		},
		drawing: [
			{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
			{type: "frame", bitmap: getText(theme.frame), scale: getText(theme.frame_scale), width: 1000, height: 934, y: 25}
		],
		elements: {
			"block_name": {type: "text", text: block_name, x: 500-(getTextWidth(block_name, 30)/2), y: 40, font: {color: android.graphics.Color.parseColor(getText(theme.color_title)), size: 30}},
			"close": {type: "button", bitmap: "classic_close_button", scale: 5, x: 925, y: 25, onTouchEvent: func}
		}
	});
	
	(function(xi, yi, size, ui){
		let cont = ui.getContent();
		cont.elements["inventory_text"] = {type: "text", text: Translation.translate("Inventory"), x: xi, y: ((yi-(size+5)*3)-(size+15))+(size+5)-40, font: {color: android.graphics.Color.parseColor(getText(theme.color_inventory)), size: 30}};
		for(let y = 0;y < 4;y++)
			for(let x = 0;x < 9;x++)
				cont.elements["slot"+y+x] = {type: "invSlot", x: xi+((size+5)*x), y: y == 0 ? yi : ((yi-(size+5)*3)-(size+15))+((size+5)*y), index: x+(9*y), size: size, bitmap: getText(theme.invSlot), bitmap2: getText(theme.selected_invSlot)};
		ui.setContent(cont);
	})(75, 845, 90, inventory);
	return inventory
}

let copys = ["number", "string", "boolean", "function"];
function copyArray(obj){
	let result = [];
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArray(element);
		else
			result[key] = copyObject(element);
	}
	return result;
}
function copyObject(obj){
	let result = {};
	for(let key in obj){
		let element = obj[key];
		if(copys.indexOf(typeof element) != -1)
			result[key] = element;
		else if(Array.isArray(element))
			result[key] = copyArray(element);
		else
			result[key] = copyObject(element);
	}
	return result;
};

let handlers = {};
let _handlers = [];
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
					let theme = getTheme(id);
					let types = ["Ui setting", "save",
						["keyValue", "slider", "x", "x", -200, 200, 5, ""],
						["keyValue", "slider", "y", "y", -200, 200, 5, ""],
						["keyValue", "slider", "scale", "scale", -2, 2, .1, ""],
						["keyValue", "multipleChoice", "Theme", "theme", Object.keys(CONFIG_UI.themes)],
					];
					
					let prot = theme["prototype"];
					if(prot){
						let customConfigs = prot["customConfigs"];
						if(customConfigs){
						 let obj = copyObject(customConfigs["default"]||{});
						 for(let key in obj)
						 	if(!config[key])
						 		config[key] = obj[key];
						 		
						 obj = customConfigs["configs"]||{};
						 for(let i in obj)
						 	types.push(obj[i]);
						}
					}
					
					showConfig(types, config, function(){
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
						group.setWindowContent("inventory", inventory.getContent());
						
						let prot = theme["prototype"];
						if(prot){
							let update = prot["update"];
							let text = "";
							if(typeof update == "string")
								text = update;
							else 
								for(let i in update)
									text += update[i]+"\n";
							try{
								eval(text);
							}catch(e){
								alert(e)
							}
						}
						try{
							if(handle.updateUi)
								handle.updateUi(group, self);
						}catch(e){
							alert(e);
						}
						for(let i in _handlers){
							let obj = _handlers[i];
							try{
								if(obj.updateUi)
									obj.updateUi(id, group, self);
							}catch(e){
								alert(e);
							}
						}
						
						group.refreshAll();
					});
				}
			}
	let inventory = getInventory(id, self, theme, config, onTouchEvent, getText, block_name);
	let main = new UI.Window({ 
		location: {
			x: (1000-UI.getScreenHeight())/2+10,
			y: 40, 
			height: height_main,
			width: UI.getScreenHeight()-20,
			forceScrollX: true,
			forceScrollY: true,
			scrollY: location.windowToGlobal(size.scrollY)
		},
		drawing: draw,
		elements: obj.elements 
	});
	main.setDynamic(true);
	group = new CustomWindowGroup(main.getContent());
	try{
		if(handle.preCreate)
			handle.preCreate(group, self);
	}catch(e){
		alert(e);
	}
	for(let i in _handlers){
		let obj = _handlers[i];
		try{
			if(obj.preCreate)
				obj.preCreate(id, group, self);
		}catch(e){
			alert(e);
		}
	}
	inventory.setBlockingBackground(true);
	inventory.setInventoryNeeded(true);
	inventory.setCloseOnBackPressed(true);
	group.addWindowInstance("inventory", inventory);
	group.addWindowInstance("main", main);
	let prot = theme["prototype"];
	if(prot){
		let update = prot["update"];
		let text = "";
		if(typeof update == "string")
			text = update;
		else 
			for(let i in update)
				text += update[i]+"\n";
		try{
			eval(text);
		}catch(e){
			alert(e)
		}
	}
	try{
		if(handle.postCreate)
			handle.postCreate(group, self);
			
		if(handle.updateUi)
			handle.updateUi(group, self);
	}catch(e){
		alert(e);
	}
	for(let i in _handlers){
		let obj = _handlers[i];
		try{
			if(obj.postCreate)
				obj.postCreate(id, group, self);
				
				if(obj.updateUi)
				obj.updateUi(id, group, self);
		}catch(e){
			alert(e);
		}
	}
	try{
		if(v || isVaninillaSlots)
			VanillaSlots.registerForWindow(group);
	}catch(e){alert(e)}
	return group;
}

ModAPI.registerAPI("ClassicUI", {
	getWindow: getWindow,
	addVanillaSlots: addVanillaSlots,
	getConfig: getConfig,
	getTheme: getTheme,
	registerUiConfig(id,config){
		if(typeof id == "number")
			id = getTextIdByNumberId(id);
		objectFix(config, DEFAULT_CONFIG);
		MOD_CONFIG[id] = config;
	},
	registerTheme(id,config){
		objectFix(config, classic);
		CONFIG_UI.themes[id] = config;
		MOD_THEMES.push(id);
	},
	registerHandler(id, handler){
		if(typeof id == "string")
			id = BlockID[id];
		handlers[id] = handler;
	},
	registerAllHandler(handler){
		_handlers.push(handler);
	},
	requireGlobal(cmd){
		return eval(cmd);
	}
});