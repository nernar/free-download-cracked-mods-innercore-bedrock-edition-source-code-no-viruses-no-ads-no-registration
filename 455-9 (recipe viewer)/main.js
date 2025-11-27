/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("PotionRecipe");
IMPORT("ChargeItem");

const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Rect = android.graphics.Rect;
const Color = android.graphics.Color;
const Context = UI.getContext();
const ScreenHeight = UI.getScreenHeight();


const RecipeViewer = {

	list: [],
	recipeType: {},
	recipeTypeLength: 0,

	checkFunc: function(id, data){
		return this.list.some(function(item){
			return item.id == id && item.data == data;
		});
	},

	addList: function(id, data, check){
		if(check && this.checkFunc(id, data)){
			return;
		}
		this.list.push({id: id, data: data});
	},

	startWindow: new UI.Window({
		location: {
			x: __config__.getNumber("ButtonPosX"),
			y: __config__.getNumber("ButtonPosY"),
			width: 64, height: 64
		},
		elements: {
			button: {
				type: "button",
				x: 0, y: 0, scale: 62.5,
				bitmap: "default_button_up", bitmap2: "default_button_down",
				clicker: {
					onClick: function(){
						MainUI.openWindow(RecipeViewer.list);
					},
					onLongClick: function(){
						const list = [];
						let inv;
						for(let i = 9; i <= 44; i++){
							inv = Player.getInventorySlot(i);
							list.some(function(item){
								return item.id == inv.id && item.data == inv.data;
							}) || list.push({id: inv.id, data: inv.data, name: RecipeViewer.getName(inv.id, inv.data)});
						}
						MainUI.openWindow(list);
					}
				}
			},
			text: {
				type: "text",
				x: 300, y: 100, z: 1,
				text: "R",
				font: {color: Color.WHITE, size: 600, shadow: 0.5}
			}
		}
	}),

	clicker: {
		onClick: function(o1, o2, elem){
			SubUI.openWindow(elem.source.id, elem.source.data, false);
		},
		onLongClick: function(o1, o2, elem){
			SubUI.openWindow(elem.source.id, elem.source.data, true);
		}
	},

	registerRecipeType: function(name, object){
		let key = "";
		let isInput = isOutput = false;
		let inputLength = outputLength = 0;
		for(key in object.contents.elements){
			isInput = key.startsWith("input");
			isOutput = key.startsWith("output");
			if(isInput || isOutput){
				object.contents.elements[key].visual = true;
				object.contents.elements[key].clicker = this.clicker;
				if(isInput){
					inputLength++;
				}
				if(isOutput){
					outputLength++;
				}
			}
		}
		if(!object.contents.drawing){
			object.contents.drawing = [];
		}
		object.contents.drawing.some(function(elem){return elem.type == "background";}) || object.contents.drawing.unshift({type: "background", color: Color.TRANSPARENT});
		this.recipeType[name] = {
			icon: (typeof object.contents.icon == "number" ?
				{id: object.contents.icon, count: 1, data: 0} :
				object.contents.icon
			),
			description: object.contents.description || "",
			window: new UI.Window({
				location: {x: 230, y: 80, width: 600, height: 340},
				params: object.contents.params,
				drawing: object.contents.drawing,
				elements: object.contents.elements
			}),
			length: {input: inputLength, output: outputLength},
			getList: object.getList,
			onOpen: object.onOpen
		};
	},

	getWindow: function(key){
		return this.recipeType[key].window;
	},

	getIcon: function(key){
		return this.recipeType[key].icon;
	},

	getDescription: function(key){
		return this.recipeType[key].description;
	},

	getLength: function(key){
		return this.recipeType[key].length;
	},

	getRecipeList: function(key, id, data, isUsage){
		if(!this.recipeType[key]){
			return [];
		}
		let list;
		try{
			list = this.recipeType[key].getList(id, data, isUsage);
		}
		catch(e){
			alert("[RV] " + key + ": " + e);
		}
		return list;
	},

	getActiveRecipe: function(id, data, isUsage){
		const array = [];
		if(!id){
			return array;
		}
		for(let key in this.recipeType){
			if(this.getRecipeList(key, id, data, isUsage).length){
				array.push(key);
			}
		}
		return array;
	},

	hasAnyRecipe: function(id, data, isUsage){
		for(let key in this.recipeType){
			if(this.getRecipeList(key, id, data, isUsage).length){
				return true;
			}
		}
		return false;
	},

	getOpenFunc: function(key){
		return this.recipeType[key] ? this.recipeType[key].onOpen : undefined;
	},

	getName: function(id, data){
		let name = Item.getName(id, ~data ? data : 0);
		index = name.indexOf("\n");
		if(~index){
			name = name.slice(0, index);
		}
		index = name.indexOf("§");
		if(~index){
			name = name.slice(0, index) + name.slice(index + 2);
		}
		return name;
	},

	transparentBackground: function(bmp, color){
		let x = y = 0;
		for(x = bmp.getWidth(); x--;){
		for(y = bmp.getHeight(); y--;){
			bmp.getPixel(x, y) == color && bmp.setPixel(x, y, Color.TRANSPARENT);
		}
		}
	}

};


Callback.addCallback("PostLoaded", function(){

	const NativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");
	const getAssetAsString = NativeAPI("utils.FileTools", "getAssetAsString");
	const blockID = JSON.parse(getAssetAsString("innercore/icons/block_models.json"));
	const itemID = JSON.parse(getAssetAsString("innercore/icons/item_textures.json"));
	let key = "";
	let item;

	for(key in blockID){
		item = key.split(":");
		RecipeViewer.addList(item[0] - 0, item[1] == undefined ? -1 : item[1] - 0);
	}
	for(key in itemID){
		item = key.split(":");
		RecipeViewer.addList(item[0] - 0, item[1] == undefined ? -1 : item[1] - 0);
	}
	for(key in BlockID){
		RecipeViewer.addList(BlockID[key], 0);
	}
	for(key in ItemID){
		RecipeViewer.addList(ItemID[key], -1);
	}

	RecipeViewer.recipeTypeLength = Object.keys(RecipeViewer.recipeType).length;
	MainUI.setupWindow();
	SubUI.setupWindow();

});


Callback.addCallback("NativeGuiChanged", function(name){
	name == "survival_inventory_screen" || name == "creative_inventory_screen" ?
		RecipeViewer.startWindow.open() :
		RecipeViewer.startWindow.close();
});




// file: mainUI.js

const MainUI = {

	list: [],
	slotCount: 0,
	page: 0,

	window: null,

	elements: {
		close: {
			type: "closeButton",
			x: 946, y: 0, scale: 3,
			bitmap: "close_button_up", bitmap2: "close_button_down"
		},
		buttonSearch: {
			type: "button",
			x: 20, y: 20, scale: 0.8,
			bitmap: "mod_browser_search_field",
			clicker: {onClick: function(){
				Context.runOnUiThread(new java.lang.Runnable({
					run: function(){
						try{
							const editText = new android.widget.EditText(Context); 
							editText.setHint("in this space");
							new android.app.AlertDialog.Builder(Context)
								.setTitle("Please type the keywords")
								.setView(editText)
								.setPositiveButton("Search", new android.content.DialogInterface.OnClickListener(){
									onClick: function(){
										const elements = MainUI.window.getElements();
										const text = elements.get("textSearch");
										const keyword = editText.getText() + "";
										text.onBindingUpdated("text", keyword.length ? keyword : "Search");
										MainUI.list = RecipeViewer.list.filter(function(item){
											return RecipeViewer.getName(item.id, item.data).match(new RegExp(keyword, "i"));
										});
										MainUI.page = 0;
										MainUI.refresh();
									}
								}).show();
						}
						catch(e){
							alert(e);
						}
					}
				}));
			}}
		},
		textSearch: {
			type: "text",
			x: 30, y: 30, z: 1,
			font: {color: Color.WHITE, size: 20},
			text: "Search"
		},
		buttonSort: {
			type: "button",
			x: 450, y: 20, scale: 0.8,
			bitmap: "mod_browser_button", bitmap2: "mod_browser_button_down",
			clicker: {onClick: function(){
				MainUI.changeSortMode();
			}}
		},
		textSort: {
			type: "text",
			x: 465, y: 30, z: 1,
			text: "",
			font: {color: Color.WHITE, size: 16, shadow: 0.5}
		},
		buttonPrev: {
			type: "button",
			x: 20, y: 0, scale: 2,
			bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p",
			clicker: {onClick: function(){
				MainUI.page--;
				MainUI.refresh();
			}}
		},
		buttonNext: {
			type: "button",
			x: 884, y: 0, scale: 2,
			bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p",
			clicker: {onClick: function(){
				MainUI.page++;
				MainUI.refresh();
			}}
		},
		textPage: {
			type: "text",
			x: 450, y: 0,
			font: {size: 40}
		}
	},

	setupWindow: function(){
		this.slotCount = __config__.getNumber("ItemListLine") << 4;
		let x = y = 0;
		for(let i = 0; i < this.slotCount; i++){
			x = (i & 15) * 60 + 20;
			y = (i >> 4) * 60 + 68;
			this.elements["button" + i] = {
				type: "button",
				x: x, y: y, scale: 3.75,
				bitmap: "default_button_up", bitmap2: "default_button_down",
			};
			this.elements["slot" + i] = {
				type: "slot",
				x: x, y: y, z: 1,
				visual: true, needClean: true,
				clicker: RecipeViewer.clicker
			};
		}
		const height = (this.slotCount >> 4) * 60 + 140;
		this.window = new UI.Window({
			location: {x: 0, y: 0, width: 1000, scrollY: height},
			params: {slot: "_default_slot_empty"},
			drawing: [
				{type: "background", color: Color.TRANSPARENT},
				{type: "frame", x: 0, y: 0, width: 1000, height: height, bitmap: "default_frame_bg_light", scale: 2}
			],
			elements: this.elements
		});
		this.window.setBlockingBackground(true);
		const elements = this.window.getElements();
		elements.get("buttonPrev").setPosition(20, height - 60);
		elements.get("buttonNext").setPosition(884, height - 60);
		elements.get("textPage").setPosition(450, height - 60);
		this.window.setEventListener({
			onOpen:function(){
				RecipeViewer.startWindow.close();
			},
			onClose:function(){
				RecipeViewer.startWindow.open();
			}
		});
	},

	currentMode: 0,
	sortMode: [
		{text: "Sort by ID (ASC)", type: "id", reverse: false},
		{text: "Sort by ID (DESC)", type: "id", reverse: true}
//		{text: "Sort by Name (ASC)", type: "name", reverse: false},
//		{text: "Sort by Name (DESC)", type: "name", reverse: true}
	],

	sortFunc: {
		id: function(a, b){
			return a.id - b.id || a.data - b.data;
		},
		name: function(a, b){
			return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
		}
	},

	changeSortMode: function(reset){
		this.currentMode = reset ? 0 : (this.currentMode + 1) & 1;//
		const mode = this.sortMode[this.currentMode];
		this.window.getElements().get("textSort").onBindingUpdated("text", mode.text);
		this.list.sort(this.sortFunc[mode.type]);
		mode.reverse && this.list.reverse();
		this.refresh();
	},

	refresh: function(){
		const elements = this.window.getElements();
		const maxPage = (this.list.length / this.slotCount | 0) + 1;
		this.page = this.page < 0 ? maxPage - 1 : this.page >= maxPage ? 0 : this.page;
		elements.get("textPage").onBindingUpdated("text", (this.page + 1) + " / " + maxPage);
		const start = this.slotCount * this.page;
		const end = Math.min(this.list.length - start, this.slotCount);
		let i = 0;
		let item;
		for(; i < end; i++){
			item = this.list[start + i];
			elements.get("slot" + i).onBindingUpdated("source", {id: item.id, count: 1, data: item.data});
		}
		for(; i < this.slotCount; i++){
			elements.get("slot" + i).onBindingUpdated("source", {id: 0, count: 0, data: 0});
		}
	},

	openWindow: function(list){
		this.list = list;
		this.page = 0;
		this.changeSortMode(true);
		this.window.open();
	}

};




// file: subUI.js

const SubUI = {

	enabled: false,
	cache: [],
	list: [],
	page: 0,
	tray: [],
	select: "",

	window: new UI.WindowGroup(),

	setupWindow: function(){

		this.window.addWindow("controller", {
			location: {x: 140, y: 20, width: 720, height: 480},
			drawing: [
				{type: "background", color: Color.TRANSPARENT},
				{type: "frame", x: 0, y: 0, width: 1000, height: 666.7, bitmap: "default_frame_bg_light", scale: 2}
			],
			elements: {
				textRecipe: {type: "text", x: 280, y: 20, font: {size: 40, color: Color.WHITE, shadow: 0.5}},
				textUsage: {type: "text", x: 280, y: 20, font: {size: 40, color: Color.GREEN, shadow: 0.5}},
				buttonBack: {
					type: "button",
					x: 120, y: 15, scale: 3,
					bitmap: "_craft_button_up", bitmap2: "_craft_button_down",
					clicker: {
						onClick: function(){
							SubUI.cache.pop();
							if(SubUI.cache.length){
								SubUI.refresh();
								return;
							}
							SubUI.window.close();
						},
						onLongClick: function(){
							SubUI.cache.length = 0;
							SubUI.window.close();
						}
					}
				},
				textBack: {type: "text", x: 150, y: 25, z: 1, text: "Back",font: {color: Color.WHITE, size: 30, shadow: 0.5}},
				buttonPrev: {
					type: "button",
					x: 150, y: 610, scale: 2,
					bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p",
					clicker: {onClick: function(){
						SubUI.turnPage(SubUI.page - 1);
					}}
				},
				buttonNext: {
					type: "button",
					x: 854, y: 610, scale: 2,
					bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p",
					clicker: {onClick: function(){
						SubUI.turnPage(SubUI.page + 1);
					}}
				},
				scrollPage: {
					type: "scroll",
					x: 350, y: 595, length: 400,
					min: 0, max: 1,
					onNewValue: function(value){
						SubUI.enabled && SubUI.turnPage((SubUI.list.length - 1) * value | 0);
					}
				},
				textPage: {type: "text", x: 500, y: 555, font: {size: 40}}
			}
		});

		const elements = {};
		let i = 0;
		for(let key in RecipeViewer.recipeType){
			elements["icon" + i] = {
				type: "slot",
				x: 0, y: i * 1000, size: 1000,
				visual: true, needClean: true,
				//darken: true, isDarkenAtZero: false,
				clicker: {
					onClick: function(o1, o2, elem){
						elem.source.id && SubUI.changeWindow(elem.y / 1000 | 0);
					},
					onLongClick: RecipeViewer.clicker.onClick
				}
			};
			elements["description" + i] = {
				type: "text",
				x: 500, y: i * 1000 + 700, z: 1,
				font: {size: 160, color: Color.WHITE, shadow: 0.5, alignment: 1}
			};
			i++;
		}
		elements.cursor = {type: "image", x: 0, y: 0, z: 1, bitmap: "_selection", scale: 27.78};
		this.window.addWindow("tray", {
			location: {
				x: 150, y: 30,
				width: 60, height: 400,
				padding: {top: 30, bottom: ScreenHeight - 490},
				scrollY: RecipeViewer.recipeTypeLength * 60
			},
			params: {slot: "_default_slot_empty"},
			drawing: [{type: "background", color: Color.parseColor("#474343")}],
			elements: elements
		});

		this.window.setContainer(new UI.Container());
		this.window.setBlockingBackground(true);
		this.enabled = true;

	},

	getTarget: function(){
		return this.cache[this.cache.length - 1];
	},

	openWindow: function(id, data, isUsage){
		const target = this.getTarget();
		if(target && target.id == id && target.data == data && target.isUsage == isUsage){
			return;
		}
		const array = RecipeViewer.getActiveRecipe(id, data, isUsage);
		if(!array.length){
			alert("Recipe not found");
			return;
		}
		this.tray = array;
		this.cache.push({id: id, data: data, isUsage: isUsage});
		this.page = 0;
		this.refresh();
		this.window.open();
	},

	refresh: function(){
		const target = this.getTarget();
		const name = RecipeViewer.getName(target.id, target.data);
		let elements = this.window.getWindow("controller").getElements();
		elements.get("textRecipe").onBindingUpdated("text", target.isUsage ? "" : name);
		elements.get("textUsage").onBindingUpdated("text", target.isUsage ? name : "");
		elements = this.window.getWindow("tray").getElements();
		let i = 0;
		for(; i < this.tray.length; i++){
			elements.get("icon" + i).onBindingUpdated("source", RecipeViewer.getIcon(this.tray[i]));
			elements.get("description" + i).onBindingUpdated("text", RecipeViewer.getDescription(this.tray[i]));
		}
		for(; i < RecipeViewer.recipeTypeLength; i++){
			elements.get("icon" + i).onBindingUpdated("source", {id: 0, count: 0, data: 0});
			elements.get("description" + i).onBindingUpdated("text", "");
		}
		this.changeWindow(0);
	},

	changeWindow: function(index){
		const target = this.getTarget();
		this.window.getWindow("tray").getElements().get("cursor").setPosition(0, index * 1000);
		this.select = this.tray[index];
		this.window.addWindowInstance("custom", RecipeViewer.getWindow(this.select));
		this.list = RecipeViewer.getRecipeList(this.select, target.id, target.data, target.isUsage);
		this.turnPage(0, true);
	},

	turnPage: function(page, force){
		if(!force && this.page == page){
			return;
		}
		const length = RecipeViewer.getLength(this.select);
		const onOpen = RecipeViewer.getOpenFunc(this.select);
		let elements = this.window.getWindow("controller").getElements();
		this.page = page < 0 ? this.list.length : page >= this.list.length ? 0 : page;
		elements.get("textPage").onBindingUpdated("text", (this.page + 1) + " / " + this.list.length);
		const recipe = this.list[this.page];
		elements = this.window.getWindow("custom").getElements();
		let i = 0;
		for(; i < recipe.input.length; i++){
			elements.get("input" + i).onBindingUpdated("source", recipe.input[i]);
		}
		for(; i < length.input; i++){
			elements.get("input" + i).onBindingUpdated("source", {id: 0, count: 0, data: 0});
		}
		i = 0;
		for(; i < recipe.output.length; i++){
			elements.get("output" + i).onBindingUpdated("source", recipe.output[i]);
		}
		for(; i < length.output; i++){
			elements.get("output" + i).onBindingUpdated("source", {id: 0, count: 0, data: 0});
		}
		onOpen && onOpen(elements, recipe);
	}

};




// file: recipes.js

RecipeViewer.registerRecipeType("workbench", {
	contents: {
		icon: 58,
		drawing: [
			{type: "bitmap", x: 530, y: 185, scale: 2, bitmap: "_workbench_bar"}
		],
		elements: {
			input0: {type: "slot", x: 200, y: 100, size: 100},
			input1: {type: "slot", x: 300, y: 100, size: 100},
			input2: {type: "slot", x: 400, y: 100, size: 100},
			input3: {type: "slot", x: 200, y: 200, size: 100},
			input4: {type: "slot", x: 300, y: 200, size: 100},
			input5: {type: "slot", x: 400, y: 200, size: 100},
			input6: {type: "slot", x: 200, y: 300, size: 100},
			input7: {type: "slot", x: 300, y: 300, size: 100},
			input8: {type: "slot", x: 400, y: 300, size: 100},
			output0: {type: "slot", x: 680, y: 190, size: 120}
		}
	},
	getList: function(id, data, isUsage){
		const list = [];
		const recipe = isUsage ? Recipes.getWorkbenchRecipesByIngredient(id, ~data ? data : 0) : Recipes.getWorkbenchRecipesByResult(id, -1, data);
		const iterator = recipe.iterator();
		let entry, field, result, input, chargeData;
		let i = amount = 0;
		while(iterator.hasNext()){
			entry = iterator.next();
			result = entry.getResult();
			field = entry.getSortedEntries();
			input = [];
			chargeData = ChargeItemRegistry.getItemData(result.id);
			for(i = 0; i < 9; i++){
				if(!field[i]){
					break;
				}
				input[i] = {id: field[i].id, count: 1, data: field[i].data};
				amount += chargeData ? ChargeItemRegistry.getEnergyStored(field[i], chargeData.energy) : 0;
			}
			chargeData && chargeData.type != "extra" && result.count == 1 && ChargeItemRegistry.addEnergyTo(result, chargeData.energy, amount, amount, 100);
			list.push({input: input, output: [result]});
		}
		return list;
	}
});


RecipeViewer.registerRecipeType("furnace", {
	contents: {
		icon: 61,
		drawing: [
			{type: "bitmap", x: 430, y: 185, scale: 2, bitmap: "_workbench_bar"}
		],
		elements: {
			input0: {type: "slot", x: 280, y: 190, size: 120},
			output0: {type: "slot", x: 600, y: 190, size: 120}
		}
	},
	getList: function(id, data, isUsage){
		let result;
		if(isUsage){
			result = Recipes.getFurnaceRecipeResult(id, data);
			return result ? [{
				input: [{id: id, count: 1, data: data}],
				output: [result]
			}] : [];
		}
		const list = [];
		const recipe = Recipes.getFurnaceRecipesByResult();
		const iterator = recipe.iterator();
		let entry;
		while(iterator.hasNext()){
			entry = iterator.next();
			result = entry.getResult();
			id == result.id && (!~data || data == result.data) && list.push({
				input: [{id: entry.inId, count: 1, data: entry.inData}],
				output: [result]
			});
		}
		return list;
	}
});


const BrewingRecipe = {};
(function(){
	const ingredient = [289, 331, 348, 353, 370, 375, 376, 377, 378, 382, 396, 414, 437, 462];
	let i = data = 0;
	let result;
	for(i = ingredient.length; i--;){
	for(data = 36; data--;){
		result = PotionRecipe.getResult(ingredient[i], {id: 373, data: data});
		if(result){
			result.count = 1;
			BrewingRecipe[ingredient[i] + ":373:" + data] = result;
		}
		result = PotionRecipe.getResult(ingredient[i], {id: 438, data: data});
		if(result){
			result.count = 1;
			BrewingRecipe[ingredient[i] + ":438:" + data] = result;
		}
	}
	}
})();

RecipeViewer.registerRecipeType("brewing", {
	contents: {
		icon: 379,
		drawing: [
			{type: "bitmap", x: 410, y: 90, z: 1, scale: 5, bitmap: "brewing_stand_back"}
		],
		elements: {
			input0: {type: "slot", x: 470, y: 96, size: 90},
			input1: {type: "slot", x: 356, y: 240, size: 90},
			output0: {type: "slot", x: 583, y: 240, size: 90}
		}
	},
	getList: function(id, data, isUsage){
		const list = [];
		let key = "";
		let input, result;
		if(isUsage){
			for(key in BrewingRecipe){
				input = key.split(":");
				(input[0] == id || input[1] == id && input[2] == data) && list.push({
					input: [{id: input[0] - 0, count: 1, data: 0}, {id: input[1] - 0, count: 1, data: input[2] - 0}],
					output: [BrewingRecipe[key]]
				});
			}
			return list;
		}
		for(key in BrewingRecipe){
			result = BrewingRecipe[key];
			if(id == result.id && data == result.data){
				input = key.split(":");
				list.push({
					input: [{id: input[0] - 0, count: 1, data: 0}, {id: input[1] - 0, count: 1, data: input[2] - 0}],
					output: [result]
				});
			}
		}
		return list;
	}
});




// file: share.js

ModAPI.registerAPI("RecipeViewer", {
	Core: RecipeViewer,
	MainUI: MainUI,
	SubUI: SubUI
});




