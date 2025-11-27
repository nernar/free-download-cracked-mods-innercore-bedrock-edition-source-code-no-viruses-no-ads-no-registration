LIBRARY({
	name: "CustomRecipes",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

let UiDialogSetting;
let SettingTextElement;
let SettingIconElement;
let SettingButtonTextElement;

ModAPI.addAPICallback("FTBQuests", function(api){
	UiDialogSetting = api.UiDialogSetting;
	SettingTextElement = api.Setting.SettingTextElement;
	SettingIconElement = api.Setting.SettingIconElement;
	SettingButtonTextElement = api.Setting.SettingButtonTextElement;
});

let RecipesRegister = {
	types: {},
	
	createType(name, type){
		this.types[name] = type;
	},
	readJson(path){
		let file = FileTools.ReadJSON(path) || [];
		for(let i in file){
			let json = file[i];
			this.types[json.type][json["function"]](json.description);
		}
	},
	openTypeSelected(name, path){
		let ui = new UiDialogSetting("What?");
		let types = this.types[name].getTypes();
		for(let i in types){
			let type = types[i];
			ui.addElement(new SettingButtonTextElement(type.name).setClick(function(){
				RecipesRegister.openUi(name, type.type, path);
				ui.close();
			}));
		}
		ui.setEnableExitButton(false);
		ui.openCenter();
	},
	openListType(path){
		let ui = new UiDialogSetting("Types");
		for(let key in this.types){
			let k = key;
			ui.addElement(new SettingButtonTextElement(k).setClick(function(){
				RecipesRegister.openTypeSelected(k, path);
				ui.close();
			}));
		}
		ui.setEnableExitButton(false);
		ui.openCenter();
	},
	openUi(name, type, path){
		if(UiDialogSetting){
			UI.getContext().runOnUiThread({run() {
				let ui = new UiDialogSetting("Recipes editor");
				let _ui = RecipesRegister.types[name].getUiSetting(type);
				for(let key in _ui){
					let element = _ui[key];
					if(element.type == "text")
						ui.addElement(new SettingTextElement(element.text), element.newLine);
					else if(element.type == "slot")
						ui.addElement(new SettingIconElement(element.jsonName), element.newLine)
				}
				ui.setCloseHandler(function(self){
					let file = FileTools.ReadJSON(path);
					let json = RecipesRegister.types[name].getJsonByUiConfig(self.configs, type);
					RecipesRegister.types[name][type](json.description);
					file.push(json);
					FileTools.WriteJSON(path, file, true);
				}).openCenter();
			}});
		}
	}
};

EXPORT("RecipesRegister", RecipesRegister);