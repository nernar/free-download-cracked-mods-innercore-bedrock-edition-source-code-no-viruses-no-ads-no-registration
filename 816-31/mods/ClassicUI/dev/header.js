IMPORT("VanillaSlots");
IMPORT("RuntimeConfig");

const UIUtils = com.zhekasmirnov.innercore.utils.UIUtils;
const version = 4;
const padding_ = 60;

const CONFIG = {
	max_scale: Number(__config__.get("max_scale")||2),
	center_block_name: __config__.get("center_block_name") == 1
};

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

const enableVanillaSlots = __config__.get("vanilla_slots") == 1;

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