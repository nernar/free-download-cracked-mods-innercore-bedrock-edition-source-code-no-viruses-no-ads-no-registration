/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: header.js

let uiOptions = android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE| android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION| android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN| android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION| android.view.View.SYSTEM_UI_FLAG_FULLSCREEN| android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
function onSystemUiVisibilityChange(layout){
	try{
	layout.setOnSystemUiVisibilityChangeListener({
		onSystemUiVisibilityChange(visibility){
			if((visibility & android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION) == 0)
				layout.setSystemUiVisibility(uiOptions); 
		} 
	});
	}catch(e){}
}

IMPORT("RuntimeConfig");

var runOnUiThread = function (func) {
    UI.getContext().runOnUiThread(new java.lang.Runnable({
        run: function () {
            try {
                func();
            }
            catch (e) {
                alert(e);
            }
        }
    }));
};

let TouchEventType = com.zhekasmirnov.innercore.api.mod.ui.types.TouchEventType;
let ItemInformation = null;
ModAPI.addAPICallback("ItemInformation", function(api){
	ItemInformation = api;
});

function getId(obj, id){
	for(let key in obj)
		if(obj[key] == id)
			return key;
}




// file: api/CustomUi.js





// file: api/Setting.js

const SETTING_DEFAULT = {
	name: "{var}",
	x: "{var}",
	y: "{var}",
	line: "{var}",
	icon_scale: .95,
	search: "reliable",
	isClose: "{var}",
	isTouch: true,
	size_title: 115
};
const SETTING = (function(){
	try{
		return FileTools.ReadJSON(__dir__+"setting.json");
	}catch(e){
		alert(e);
		return {};
	}
})();

function objectFix(obj, obj2, setting){
	setting = setting || {};
	for(let i in obj2){
		if(obj[i] === undefined) obj[i] = obj2[i];
		if(obj[i] == "{var}") obj[i] = setting[i];
		if(obj[i] == "{var}" && setting[i] === undefined)
			delete obj[i];
	}
	return obj
}

let Setting = {
	get(id, setting){
		return objectFix(JSON.parse(JSON.stringify(SETTING[id] || SETTING_DEFAULT)), SETTING_DEFAULT, setting);
	},
	set(id, setting){
		SETTING[id] = setting;
		try{
			FileTools.WriteJSON(__dir__+"setting.json", SETTING, true);
		}catch(e){alert(e)}
	},
	open(setting){
		let types = ["Ui setting", "save",
			["keyValue", "slider", "X", "x", 50, 1000, 50, ""],
			["keyValue", "slider", "Line", "line", 3, 16, 1, ""],
			["keyValue", "slider", "Icon scale", "icon_scale", .5, 1.9, .05, ""],
			["keyValue", "slider", "Size title", "size_title", 40, 150, 5, ""],
			["checkBox", "isClose", "Button exit"],
			["checkBox", "isTouch", "touch"],
			["keyValue", "multipleChoice", "Search", "search", Object.keys(SEARCH)],
		];
		try{
			showConfig(types, setting, function(){
				Setting.set(setting.name, setting);
				Jei.close();
				Jei.open(setting);
			});
		}catch(e){
			alert(e);
		}
	}
};




// file: api/Search.js

function baseSearch(editText, main, setting, height, func){
	let keyword = String(editText.getText());
	let _a = {};
	_a.list = 0;
	
	_a.items = func(_a, keyword);
	
	text = _a.list+"/"+Jei.getMaxList(setting, _a, height);
	let content = main.getContent();
	content.elements.searchText.text = keyword;
	content.elements.text.text = text;
	content.elements.text.x = 500-getTextWidth(text, 23*5)/2;
	Jei.setupSlots(main, setting, height, _a);
	main.forceRefresh();
	return _a;
};
const SEARCH = {
	lite(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			return Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).split(keyword).length > 1;
			});
		});
	},
	normal(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			let names = keyword.split("@");
			return keyword[0] == "@" && ItemInformation != null ? Jei.items.filter(function (item) {
				let mod = (item.type == "item" ? ItemInformation.items[getId(ItemID, item.id)] : ItemInformation.blocks[getId(BlockID , item.id)]) || "minecraft";
				return mod.toLowerCase().split(names[1]).length > 1;
			}) : Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).split(keyword).length > 1;
			});
		});
	}, 
	reliable(editText, main, setting, height){
		return baseSearch(editText, main, setting, height, function(self, keyword){
			keyword = keyword.toLowerCase();
			if(keyword[0] == "@" && ItemInformation != null){
				let name = keyword.split(" ");
				let result = "";
				for(let i = 1;i < name.length;i++){
					result += name[i];
					if(i != name.length-1) result += " ";
				}
				let names = keyword.split("@");
				return Jei.items.filter(function (item) {
					let mod = (item.type == "item" ? ItemInformation.items[getId(ItemID, item.id)] : ItemInformation.blocks[getId(BlockID, item.id)]) || "minecraft";
					mod = mod.replace(" ", "");
					if(result != ""){
						names[1] = names[1].split(" ")[0];
						return mod.toLowerCase().split(names[1]).length > 1 && Translation.translate(Item.getName(item.id, item.data)).toLowerCase().split(result).length > 1;
					}
					return mod.toLowerCase().split(names[1]).length > 1;
				});
			}
			return Jei.items.filter(function (item) {
				return Translation.translate(Item.getName(item.id, item.data)).toLowerCase().split(keyword).length > 1;
			});
		});
	}
};




// file: ui.js


//RButton.data = {};

let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}
let isClose = false;
let isReplace = false;
const padding_frame = 15;
let Jei = {
	data: {},
	window: null,
	list: 0,
	items: ItemList.get(),
	closeValue: false,
	
	putOpen(name, setting){
		setting.name = name;
		this.data[name] = setting;
	},
	
	setupSlots(main, setting, height, list){
		let content = main.getContent();
		let count_y = 0;
		let size = (1000-padding_frame*2)/setting.line;
		for(let i = setting.size_title+padding_frame;i+size+size <= height-60;i+=size)
			count_y++;

		let slots = setting.line * count_y;
		let x = 0;
		let y = setting.size_title+padding_frame;
		for(let i = 0;i < slots;i++){
			let item = list.items[i+(slots*list.list)];
			if(!item)
				item = {id: 0, data: 0};
			content.elements["slot_"+i] = {type: "slot", bitmap: "_default_slot_empty", x: x*size+padding_frame, y: y, size: size, visual: true, iconScale: setting.icon_scale, source: {
				id: item.id,
				data: item.data,
				count: 1
			}, clicker: {
				onClick(){
					isReplace = true;
					RecipeTypeRegistry.openRecipePageByItem(item.id, item.data, false);
					isReplace = false;
				},
				onLongClick(){
					RecipeTypeRegistry.openRecipePageByItem(item.id, item.data, true);
				}
			}}
			x++;
			if(x >= setting.line){
				x = 0;
				y+=size
			}
		}
		
		main.setContent(content);
		return slots;
	},
	getMaxList(setting, list, height){
		let count_y = 0;
		let size = (1000-10)/setting.line;
		for(let i = setting.size_title+padding_frame;i+size+size <= height-50;i+=size)
			count_y++;

		return Math.ceil(list.items.length/(setting.line * count_y))-1;
	},
	updateList(main, setting, height, self, text, v){
		if(v){
			self.list++;
			if(self.list > this.getMaxList(setting, self, height))
				self.list = 0;
		}else{
			self.list--;
			if(self.list < 0)
				self.list = this.getMaxList(setting, self, height);
		}
		text = self.list+"/"+this.getMaxList(setting, self, height);
		let content = main.getContent();
		content.elements.text.text = text;
		content.elements.text.x = 500-getTextWidth(text, setting.size_title)/2;
		Jei.setupSlots(main, setting, height, self);
		main.forceRefresh();
	},
	init(setting){
		if(setting.isClose && this.closeValue){
			let group = new UI.WindowGroup();
			group.addWindow("close", {
				location: {
					x: 1000-50,
					y: 100,
					width: 50,
					height: 50
				},
				elements: {
					button: {type: "button", bitmap: "show_jei", x: 0, y: 0, scale: 1000/16, clicker: {
						onClick(){
							Jei.closeValue = false;
							Jei.open(setting);
						}
					}}
				}
			});
			this.close();
			this.window = group;
				return;
		}
		let group = new UI.WindowGroup();
		const search = SEARCH[setting.search];
		let location = new UI.WindowLocation({
			x: setting.x
		});
		let self = this;
		let height = location.globalToWindow(location.height);
		let text = self.list+"/"+Jei.getMaxList(setting, self, height);
		let size = (1000-10)/setting.line;
		for(var _height = setting.size_title+padding_frame;_height+size+size <= height-50;_height+=size){}
		
		function getTime(){
			return new Date().getTime();
		}
		let time = getTime();
		let pos = null;
		
		let main = new UI.Window({
			location: location.asScriptable(),
			drawing: [
				{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
			],
			elements: {
				frame: {type: "frame", bitmap: "default_container_frame", scale: 2, width: 1000, height: height, y: 0, color: android.graphics.Color.argb(.6, 0, 0, 0), onTouchEvent(self_, event){
					if(!setting.isTouch) return;
					let newTime = getTime();
					if(pos === null || newTime-time > 300){
						time = newTime;
						pos = event.x;
					}else if(pos !== null && (event.x - pos < -400 || event.x - pos > 400)){
						Jei.updateList(main, setting, height, self, text, event.x - pos < -400);
						time = 0;
						pos = null;
					}
				}},
				prev: {type: "button", bitmap: "prev_jei_button_0", bitmap2: "prev_jei_button_1", scale: setting.size_title/20, x: padding_frame, y: padding_frame, clicker: {
					onClick(){
						Jei.updateList(main, setting, height, self, text, false);
					}
				}},
				next: {type: "button", bitmap: "next_jei_button_0", bitmap2: "next_jei_button_1", scale: setting.size_title/20, x: 1000-setting.size_title-padding_frame, y: padding_frame, clicker: {
					onClick(){
						Jei.updateList(main, setting, height, self, text, true);
					}
				}},
				text: {type: "text", text: text, font: {color: android.graphics.Color.WHITE, size: setting.size_title-padding_frame}, y: padding_frame, x: 500-getTextWidth(text, setting.size_title)/2},
				search: {type: "frame", bitmap: "search_frame_jei", scale: 4, width: 1000 - padding_frame*2, height: height-_height-15-30, x: padding_frame, y: _height+5, clicker: {
					onLongClick(){
						Setting.open(setting);
					},
					onClick(){
						runOnUiThread(function () {
							var editText = new android.widget.EditText(UI.getContext());
							let content = main.getContent();
							editText.setHint(content.elements.searchText.text);
							new android.app.AlertDialog.Builder(UI.getContext())
								.setView(editText)
								.setNegativeButton("exit", function(){
									self = Jei;
									text = self.list+"/"+Jei.getMaxList(setting, self, height);
										let content = main.getContent();
										content.elements.searchText.text = "";
										content.elements.text.text = text;
										content.elements.text.x = 500-getTextWidth(text, setting.size_title)/2;
										Jei.setupSlots(main, setting, height, self);
										main.forceRefresh();
								})
								.setPositiveButton("ok", new android.content.DialogInterface.OnClickListener({
									onClick(){
										self = search(editText, main, setting, height);
									}
								})).show();
						});
					}
				}},
				searchText: {type: "text", text: "", x: padding_frame+20, y: _height+5+10, font: {color: android.graphics.Color.WHITE, size: height-_height-15-30-20}}
			}
		});
		main.setEventListener({
			onOpen(main){
				runOnUiThread(function(){
					onSystemUiVisibilityChange(main.layout);
				});
			}
		});
		let slots = this.setupSlots(main, setting, height, this);
		if(setting.isClose){
			let close = new UI.Window({
				location: {
					x: setting.x-50,
					height: 50,
					width: 50
				},
				elements: {
					button: {type: "button", bitmap: "unshow_jei", x: 0, y: 0, scale: 1000/16, clicker: {
						onClick(){
							Jei.closeValue = true;
							Jei.open(setting);
						}
					}}
				}
			});
			group.addWindowInstance("close", close);
		}
		group.addWindowInstance("main", main);
		this.close();
		this.window = group;
	},
	open(setting){
		setting = Setting.get(setting.name, setting);
		this.init(setting);
		this.window.open();
	},
	close(){
		if(this.window)
			this.window.close();
	}
};

Callback.addCallback("CustomWindowOpened", function(window){
	try{
		let content = window.getContent();
		if(content.elements.button.bitmap == "default_button_up" && content.elements.button.bitmap2 == "default_button_down" && content.elements.text.text == "R" && isClose){
			content.drawing = [];
			content.drawing.push({type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)});
			content.elements = {};
			window.setContent(content);
			window.setTouchable(false);
			window.close();
		}
	}catch(e){}
	
	if(isReplace){
		let content = window.getContent();
		try{
			if(content.drawing[1].bitmap == "default_frame_bg_light"){
				content.drawing[1].bitmap = "classic_frame_bg_light";
				window.setContent(content);
			}
		}catch(e){}
	}
});

Callback.addCallback("NativeGuiChanged", function(name){
	if(Jei.data[name]){
		isClose = true;
		Jei.open(Jei.data[name]);
	}else{
		Jei.close();
		isClose = false;
	}
}, 2);

Callback.addCallback("LevelDisplayed", function(){
	Jei.items = ItemList.get();
}, -1);

Jei.putOpen("inventory_screen", {
	x: 700,
	line: 7,
	isClose: true 
});
Jei.putOpen("creative_inventory_screen", {
	x: 700,
	line: 7,
	isClose: true
});
Jei.putOpen("inventory_screen_pocket", {
	x: 700,
	line: 7,
	isClose: true 
});
Jei.putOpen("survival_inventory_screen", {
	x: 700,
	line: 7,
	isClose: true
});

Jei.putOpen("innercore_generic_crafting_screen", {
	x: 700,
	line: 7,
	isClose: true 
});
Jei.putOpen("furnace_screen", {
	x: 700,
	line: 7,
	isClose: true
});
Jei.putOpen("blast_furnace_screen", {
	x: 700,
	line: 7,
	isClose: true 
});
Jei.putOpen("smoker_screen", {
	x: 700,
	line: 7,
	isClose: true
});
Jei.putOpen("brewing_stand_screen", {
	x: 700,
	line: 7,
	isClose: true
});
Jei.putOpen("stonecutter_screen", {
	x: 700,
	line: 7,
	isClose: true
});
Jei.putOpen("trade_screen", {
	x: 700,
	line: 7,
	isClose: true
});




// file: shared.js

ModAPI.addAPICallback("ClassicUI", function(api){
	api.registerAllHandler({
		onOpen(id, group, tile){
			let setting = api.getBlockFunctions(id);
			if(!setting.disableJeiMobile){
				let size = api.getSizeClassicUi(id, group);
				Jei.open(setting.jeiSetting || {
					name: id,
					x: size.x + size.width,
					line: 6
				});
			}
		},
		onClose(){
			Jei.close();
		}
	});
});
ModAPI.registerAPI("Jei-mobile", {
	Jei: Jei,
	requireGlobal(cmd){
		return eval(cmd);
	}
});




