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