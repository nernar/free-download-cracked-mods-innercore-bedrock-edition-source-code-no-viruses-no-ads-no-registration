const version = String(FileTools.ReadJSON(__modpack__.getRootDirectoryPath()+"/modpack.json").versionCode);
Translation.addTranslation("Versions", {
	ru: "Версии"
});
/*function ModPackAPI(user, repository, gl_file){
	let path = repository ? null : user;
	let git = new GithubAPI(user, repository);
	let icon = "icons.skyblock_icon_0";
	
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
		
	let ui_versions = (function(){p
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

new ModPackAPI("Reider745", "SkyFactory-inner-core", "main.json")
	.setIcon("icons.skyblock_icon_0");*/
function ModPackAPI(system, gl){
	this.parseDialog = function(type, file, title){
		if(!file) return;
		type = type || "default";
		if(type == "default"){
			let ui = new UiDialogSetting(title||"Доступно обновление!");
			
			let error = DefaultParserDs1.run(DefaultParserDs1.parse(file), {
				ui: ui,
				translations: new TranslationManager(),
				file_system: system,
				initization: initization
			});
			FileTools.WriteJSON(__dir__+"error.json", error, true);
			
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
	
	let main = JSON.parse(system.getFile(gl) || "{}");
	let CONFIG = new ConfigAPI();
	let logs = {};
	let icon = "icons.skyblock_icon_0";
	let self = this;
	
	let initization = new CodeInitialization();
	initization.add("Config", CONFIG);
	initization.add("ModPack", this);
	initization.add("FileSystem", system);
	initization.add("Logs", logs);
	initization.add("version", 2);
	let pathManager = new PathManager(initization, system, __dir__+".patcheds/", main.patcheds||{});
	CONFIG.setPathManager(pathManager);
	initization.add("PathManager", pathManager);
	pathManager.loaded();
	
	main.information = main.information || {};
	main.information.change_logs = main.information.change_logs ||{};
	
	pathManager.invokeEvent("preInit")

	for(let key in main.information.change_logs){
		let obj = {log: system.getFile(main.information.change_logs[key])};
		pathManager.invokeEvent("getLog", [obj])
		logs[key] = obj.log;
	}
	
	let ui_versions = (function(){
		let ui = new UiDialogSetting("Versions");
		for(let key in logs){
			let dialog = logs[key];
			ui.addElement(new Setting.SettingButtonTextElement(key, "NativeButton").setClick(function(){
				let ui = self.parseDialog(main.information.dialog_type, dialog, "Описание обновления");
				pathManager.invokeEvent("openVersion", [ui]);
			}));
		}
		ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
		ui.setEnableExitButton(false);
		pathManager.invokeEvent("buildVersion", [ui]);
		return ui;
	})();
	initization.add("UiVersion", ui_versions);
	
	this.checkVersion = function(){
		if(CONFIG.getSetting().message_update == "true" && main.information.version !== undefined && version !== main.information.version){
			let ui = self.parseDialog(main.information.dialog_type, system.getFile(main.information.change_logs[main.information.version]));
			pathManager.invokeEvent("openNewVersion", [ui]);
		}
	}
	
	initization.load(system.getFile(main.init||"")||"");
	
	this.register = function(x, y){
		let UiGlMenu = new UI.Window({
			location: {
				x: x||50,
				y: y||50,
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
				if(name == "start_screen"){
					UiGlMenu.open();
					pathManager.invokeEvent("open", [UiGlMenu]);
				}else{
					UiGlMenu.close();
					pathManager.invokeEvent("close", [UiGlMenu]);
				}
			});

			Callback.addCallback("PostLoaded", function(){
				UiGlMenu.open();
				self.checkVersion();
				pathManager.invokeEvent("open", [UiGlMenu]);
			}, -1);
		}
	}
	pathManager.invokeEvent("postInit")
}

/*let ModPack = new ModPackAPI(new AndroidFileSystem(__dir__+"debug"), "test.json")
	.register();*/
let ModPack = new ModPackAPI(new GithubFileSystem("Reider745", "SkyFactory-inner-core"), "main.json")
	.register();