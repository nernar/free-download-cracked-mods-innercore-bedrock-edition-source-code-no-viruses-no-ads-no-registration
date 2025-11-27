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