const version = String(FileTools.ReadJSON(__modpack__.getRootDirectoryPath()+"/modpack.json").versionCode);
Translation.addTranslation("Versions", {
	ru: "Версии"
});
function ModPackAPI(user, repository, gl_file, icon){
	let path = repository ? null : user;
	let git = new GithubAPI(user, repository);
	icon = icon || "icons.skyblock_icon_0";
	
	this.setIcon = function(_icon){
		icon = _icon;
		return this;
	}
	
	this.getFile = function(_path){
		if(path)
			return FileTools.ReadText(path+_path);
		return git.getFileContent(_path);
	}
	
	this.getImage = function(_path){
		if(path)
			return Filetools.readImage(path+_path);
		return git.getImage(_path);
	}
	
	this.parseDialog = function(type, file, title){
		if(!file) return;
		type = type || "default";
		if(type == "default"){
			let ui = new UiDialogSetting(title||"Доступно обновление!");
			
			DefaultParserDs1.run(DefaultParserDs1.parse(file), {
				ui: ui
			});
			
			ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
			ui.setEnableExitButton(false);
			UI.getContext().runOnUiThread({
				run(){
					ui.openCenter();
				}
			});
			return ui;
		}
	}
	
	this.loadedLangs = function(langs){
		let translations = {};
		for(let i in langs){
			let file = langs[i];
			let lang = file.split("/").pop().split(".")[0];
			let objects = FileTools.ReadText(__dir__+"debug/"+file).split("\n");
			for (let i_2 = 0; i_2 < objects.length; i_2++) {
				let text = objects[i_2].split(":=");
				translations[text[0]] = translations[text[0]] || {};
				translations[text[0]][lang] = (text[1] || "").replace("<br>", "\n");
			}
		}
		for (let key in translations)
			Translation.addTranslation(key, translations[key]);
	}
	this.loadedAssets = function(assets){
		for(let key in assets)
			TextureSource.put(key, this.getImage(assets[key]));
	}
	
	this.registerPatched = function(name, path, patcheds){
		let code = this.getFile(path);
		
		patcheds["."+name] = true;
		
		FileTools.WriteText(__dir__+".patcheds/.files/."+name, code);
	}
	
	let self = this;
	let gl = JSON.parse(this.getFile(gl_file||user)||"{}");
	this.loadedLangs(gl.translations||[]);
	this.loadedAssets(gl.assets||{});
	if(isConnection())
	(function(){
		let patcheds = FileTools.ReadJSON(__dir__+".patcheds/.info");
		for(let key in patcheds)
			patcheds[key] = false;
			
		let patcheds_ = gl.patcheds || {};
		if(gl.information)
			for(let key in patcheds_)
				self.registerPatched(key, patcheds_[key], patcheds);
		
		FileTools.WriteJSON(__dir__+".patcheds/.info", patcheds, true);
	})();
	gl.information = gl.information || {};
	
	let logs = {};
	for(let key in gl.information.change_logs)
		logs[key] = self.getFile(gl.information.change_logs[key]);
	
	let CONFIG = new ConfigAPI();
	
	if(CONFIG.getSetting().message_update == "true" && gl.information.version !== undefined && version !== gl.information.version)
		self.parseDialog(gl.information.dialog_type, self.getFile(gl.information.change_logs[gl.information.version]));
		
	let ui_versions = (function(){
		let ui = new UiDialogSetting("Versions");
		for(let key in logs){
			let dialog = logs[key];
			ui.addElement(new Setting.SettingButtonTextElement(key, "NativeButton").setClick(function(){
				self.parseDialog(gl.information.dialog_type, dialog, "Описание обновления");
			}));
		}
		ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
		ui.setEnableExitButton(false);
		return ui;
	})();
	
	let UiGlMenu = new UI.Window({
		location: {
			x: 50,
			y: 50,
			width: 100,
			height: 100
		},
		drawing: [
			{type: "color", color: android.graphics.Color.TRANSPARENT}
		],
		elements: {
			"icon": {type: "image", bitmap: icon, width: 800, x: 100, y: 100, height: 800, z: 1},
			"openButton": {type: "button", scale: 1000/111, clicker: {
				onClick(){
					let ui = new UiDialogSetting("Minecraft Online");
					ui.addElement(new Setting.SettingButtonTextElement("Настройки", "NativeButton").setClick(function(){
						CONFIG.open();
					}));
					ui.addElement(new Setting.SettingButtonTextElement("Версии", "NativeButton").setClick(function(){
						UI.getContext().runOnUiThread({
							run(){
								ui_versions.openCenter();
							}
						});
					}));
					ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
					ui.setEnableExitButton(false);
					UI.getContext().runOnUiThread({
						run(){
							ui.openCenter();
						}
					});
				}
			}, bitmap: "NativeButton", z: 0}
		}
	});
	UiGlMenu.setAsGameOverlay(true)
	
	if(JSON.stringify(logs) != "{}") {
		Callback.addCallback("NativeGuiChanged", function(name){
			if(name == "start_screen")
				UiGlMenu.open();
			else
				UiGlMenu.close();
		});
		Callback.addCallback("PostLoaded", function(){
			UiGlMenu.open();
		}, -1);
	}
	
	function initFileCode(path){
		try{
			eval(self.getFile(path||"")||"");
		}catch(e){
			alert(e);
		}
	}
	
	initFileCode(gl.init);
	let patcheds = FileTools.ReadJSON(__dir__+".patcheds/.info");
	for(let key in patcheds)
		if(patcheds[key])
			eval(FileTools.ReadText(__dir__+".patcheds/.files/"+key))
}

new ModPackAPI("Reider745", "AbobusTech-inner-core", "main.json", "icons.AbobusTech")
	.setIcon("icons.AbobusTech");