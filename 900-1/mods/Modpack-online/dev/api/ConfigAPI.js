function ConfigAPI(path){
	path = path || __dir__+"setting.json";
	
	let setting = {description:{}, setting:{}};
	this.read = function(){
		setting = FileTools.ReadJSON(path) || {description:{}, setting:{}};
	}
	this.save = function(){
		FileTools.WriteJSON(path, setting, true);
	}
	
	this.getSetting = function(){
		return setting.setting;
	}
	
	this.setSetting = function(setting_){
		setting.setting = setting_;
	}
	
	this.open = function(){
		let self = this;
		let ui = new UiDialogSetting(setting.description.title);
		let settings = {}
		for(let key in setting.setting){
			if(key == "title") continue;
			let description = setting.description[key];
			if(description && description.type == "boolean"){
				let value = setting.setting[key];
				ui.addElement(new Setting.SettingTextElement(description.text||"", 15));
				ui.addElement(new Setting.SettingStringsElement(key, ["true", "false"], value));
				settings[key] = value;
			}
		}
		
		ui.setConfig(settings);
		ui.setCloseHandler(function(self_){
			self.setSetting(self_.configs);
			self.save();
		});
		ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
		UI.getContext().runOnUiThread({
			run(){
				ui.openCenter();
			}
		});
	}
	
	this.read();
}