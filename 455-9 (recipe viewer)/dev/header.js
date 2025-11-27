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