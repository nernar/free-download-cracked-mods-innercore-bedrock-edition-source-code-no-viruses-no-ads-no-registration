/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: header.js

let TextureSource = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.TextureSource').instance;
function StringToBitmap(encodedString){
	try{
		encodeByte = android.util.Base64.decode(encodedString, 0);
		bitmap = android.graphics.BitmapFactory.decodeByteArray(encodeByte, 0, encodeByte.length);
		return bitmap;
	}catch(e){
		return null;
	}
}
function loadTexture(name, texture){
	TextureSource.put(name, StringToBitmap(texture));
}

let Files = com.zhekasmirnov.innercore.utils.FileTools;
Files.writeBitmap(Files.DIR_PACK+"/assets/innercore/ui/ic_loading_background_art.png", Files.readFileAsBitmap(__dir__+"gui/ic_loading_background_art.png"));




// file: api/FileSystem.js

let DefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
let HttpGet = 
org.apache.http.client.methods.HttpGet;
let ByteArrayOutputStream = java.io.ByteArrayOutputStream;
let HttpStatus = org.apache.http.HttpStatus;
let Base64 = android.util.Base64;
let Jstring = java.lang.String;

function isConnection(){
	let cm = UI.getContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
	let netInfo = cm.getActiveNetworkInfo();
	return netInfo != null && netInfo.isConnectedOrConnecting()
}

function sendHttp(http){
	if(!isConnection()) return null;
	try{
		let httpclient = new DefaultHttpClient();
		let response = httpclient.execute(new HttpGet(http));
		let statusLine = response.getStatusLine();
		if(statusLine.getStatusCode() == HttpStatus.SC_OK){
			let out = new ByteArrayOutputStream(); 
			response.getEntity().writeTo(out);
			let result = String(out.toString());
			out.close(); 
			return result
		}
		response.getEntity().getContent().close();
	}catch(e){return null;}
	return null;
}

function GithubFileSystem(user, repository){
	this.getFileJson = function(path){
		let json = sendHttp("https://api.github.com/repos/"+user+"/"+repository+"/contents/"+path+"?ref=main");
		if(json == null) return null;
		return JSON.parse(json)
	}
	this.parseBase64String = function(text){
		let result = "";
		try{
			let array = text.split("\\n");
			for(let i in array)
				result += new Jstring(Base64.decode(new Jstring(array[i]).getBytes(), Base64.DEFAULT));
		}catch(e){alert(e)}
		return result;
	}
	this.getFile = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return this.parseBase64String(json.content);
		return null;
	}
	this.getImage = function(path){
		let json = this.getFileJson(path);
		if(json == null || !json.content) return null;
		if(json.encoding == "base64")
			return StringToBitmap(json.content);
		return null;
	}
}

function AndroidFileSystem(path){
	this.getFileJson = function(local_path){
		return null;
	}
	this.getFile = function(local_path){
		return FileTools.ReadText(path+"/"+local_path);
	}
	this.getImage = function(local_path){
		return Filetools.readImage(path+"/"+local_path);
	}
}




// file: api/TranslationManager.js

function TranslationManager(){
	let translations = {};
	let default_lang = "en";
	
	this.add = function(key, lang, translate){
		translations[key] = translations[key] || {};
		translations[key][lang] = translate;
	}
	
	this.setDefaultLang = function(lang){
		default_lang = lang;
	}
	
	this.translate = function(key){
		let lang = Translation.getLanguage();
		let translate = this.get(key);
		if(!translate) return key;
		return translate[lang] || translate[default_lang] || key;
	}
	
	this.get = function(key){
		return translations[key];
	}
	
	this.can = function(key){
		return !!this.get(key);
	}
}




// file: api/ParserAPI.js

function comment(input){
	let RE_BLOCKS = new RegExp([
		/\/(\*)[^*]*\*+(?:[^*\/][^*]*\*+)*\//.source,
		/\/(\/)[^\n]*$/.source,
		 /"(?:[^"\\]*|\\[\S\s])*"|'(?:[^'\\]*|\\[\S\s])*'|`(?:[^`\\]*|\\[\S\s])*`/.source,
		 /(?:[$\w\)\]]|\+\+|--)\s*\/(?![*\/])/.source,
		 /\/(?=[^*\/])[^[/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[/\\]*)*?\/[gim]*/.source
	].join('|'), 'gm');
	return a = input.replace(RE_BLOCKS, function(match, mlc, slc){
		return mlc ? ' ' : slc ? '' : match;
	});
}

function Token(){
	this.parse = function(){}
}

function ParserAPI(){
	let tokens = [];
	
	this.addToken = function(token){
		tokens.push(token);
		return this;
	}
	
	function parseSymbol(symbol, globalObj, obj, s, symbols){
		let cont = false;
		for(let i in tokens){
			let result = tokens[i].parse(symbol, this, s, symbols, globalObj, obj);
			if(result == "continue_parse"){
				 cont = true;
				 continue;
			}
			if(result)
				return result;
		}
		if(cont) return "continue_parse";
	}
	
	let def_global_run = {};
	let def_global_parse = {};
	
	this.setDefaultGlobalRun = function(global){
		def_global_run = global;
		return this;
	}
	
	this.setDefaultGlobalParse = function(global){
		def_global_parse = global;
		return this;
	}
	
	this.parse = function(file, globalObj){
		file = comment(file);
		try{
			if(!file) return "Error 0";
			globalObj = globalObj || {};
			try{
				for(let key in def_global_parse)
					if(globalObj[key] === undefined)
						globalObj[key] = def_global_run[key];
			}catch(e){
				return [["Error 7"], []];
			}
			let lines = file.split("\n");
			let runs = [];
			for(let i in lines){
				let symbols = lines[i].split("");
				if(symbols.length < 1) continue;
				let obj = {};
				for(let a = 0;a < symbols.length;a++){
					let result = parseSymbol(symbols[a], globalObj, obj, a, symbols);
					if(result){
						if(typeof result == "string"){
							if(result == "continue") continue;
						}
						if(result != "continue_parse")
							runs.push(result);
					}else
						runs.push("Error 1 \""+symbols[a]+"\"");
				}
			}
			return runs;
		}catch(e){
			return "Error 5 parse" + String(e);
		}
	}
	
	this.run = function(runs, global){
		if(typeof runs == "string") return [["Error 2", runs], []];
		global = global || {};
		try{
			for(let key in def_global_run)
				if(global[key] === undefined)
					global[key] = def_global_run[key];
		}catch(e){
			return [["Error 6"], []];
		}
		try{
			let errors = [];
			for(let i in runs){
				let run = runs[i];
				if(typeof run == "string"){
					errors.push(run);
					continue;
				}
				try{
					run.run && run.run(runs, i, global, run);
					for(let i in tokens){
						let token = tokens[i];
						if(token.type == run.type){
							token.run(runs, i, global, run);
							break;
						}
					}
				}catch(e){
					errors.push("Error 3 run" + String(e));
					break;
				}
			}
			return [errors, runs];
		}catch(e){
			return [["Error 4 run" + String(e)], runs];
		}
	}
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let EmptyToken = {
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == " " && !lineObj.string) return "continue";
	}
};

function isNum(a){
	return numbers.indexOf(a) != -1;
}

let NumberToken = {
	type: "number",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(lineObj.string) return;
		if(isNum(symbol) && isNum(symbols[i+1])){
			lineObj.number = (lineObj.number||"") + symbol;
			return "continue";
		}else if(isNum(symbol)){
			let num = (lineObj.number||"") + symbol;
			lineObj.number = undefined;
			return {
				type: "number",
				number: num
			};
		}
	}
};
let StringToken = {
	type: "string",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(lineObj.string){
			lineObj.str = (lineObj.str||"") + symbol;
			lineObj.endString = true;
			return "continue_parse";
		}else if(!lineObj.string && lineObj.endString){
			if(symbol != ">") lineObj.str = (lineObj.str||"") + symbol;
			let str = (lineObj.str||"");
			lineObj.str = undefined;
			lineObj.endString = undefined;
			if(lineObj.saveStringToken || lineObj.saveStringToken === undefined)
				return {
					type: "string",
					string: str
				};
			else
				lineObj.saveStringToken === undefined;
			return "continue_parse";
		}
	},
	run(runs, i, global, run){
		
	}
};

let funcs = {};

function addFunctionDs(name, func){
	funcs[name] = func;
}

function ArgsAPI(args){
	this.getArgument = function(i){
		return args[args.length-i];
	}
	this.size = function(){
		return args.length;
	}
	this.print = function(){
		alert(JSON.stringify(args));
	}
}

let FunctionToken = {
	type: "function",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == "<"){
			lineObj.saveStringToken = false;
			lineObj.string = true;
			return "continue";
		}else if(symbol == ">" || symbols.length - 1 == i){
			lineObj.string = false;
			if(symbol == ">" && symbols.length - 1 == i)
				(lineObj.args||[]).unshift(lineObj.str);
			if(symbols.length - 1 == i)
				return {
					type: "function",
					args: lineObj.args||[],
					value: (lineObj.str || "") + symbol,
				};
			else{
				lineObj.args = lineObj.args || [];
				lineObj.args.unshift(lineObj.str);
			}
		}else if(symbol == ":"){
			lineObj.string = true;
			lineObj.saveStringToken = false;
			lineObj.valueStr = true;
			return "continue";
		}else if(symbol == "," && !lineObj.valueStr){
			lineObj.args = lineObj.args || [];
			lineObj.args.unshift(lineObj.str);
			lineObj.str = "";
			return "continue";
		}
	},
	run(runs, i, global, run){
		let args = new ArgsAPI(run.args);
		let name = args.getArgument(1);
		let handler = funcs[name];
		if(handler) handler(args, i, global, run);
	}
};

function translate(global, key){
	return global.translations.translate(key);
}

addFunctionDs("text", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 15));
	}else 
		global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 15));
});

addFunctionDs("title", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 20));
	}else 
		global.ui.addElement(new Setting.SettingTextElement(translate(global, run.value||""), 20));
});

addFunctionDs("background", function(args, i, global, run){
	let obj = {};
	for(let i = 2;i <= args.size();i++){
		let value = args.getArgument(i).split("=");
		obj[value[0]] = value[1];
	}
	if(obj.canExit) global.ui.setCanExit(obj.canExit=="true")
});

addFunctionDs("print", function(args, i, global, run){
	if(args.size() >= 2){
		let lang = args.getArgument(2);
		if(lang == Translation.getLanguage())
			alert(translate(global, run.value||""));
	}else 
		alert(translate(global, run.value||""));
});

addFunctionDs("translation", function(args, i, global, run){
	global.translations.add(args.getArgument(3), args.getArgument(2), run.value||"");
});

addFunctionDs("setdefaultlang", function(args, i, global, run){
	global.translations.setDefaultLang(args.getArgument(2));
});

addFunctionDs("button", function(args, i, global, run){
	let code = run.value||"";
	if(args.size() >= 3)
		code = global.file_system.getFile(args.getArgument(3));
	global.ui.addElement(new Setting.SettingButtonTextElement(translate(global, args.getArgument(2)), "NativeButton").setClick(function(){
		global.initization.load(code);
	}));
});

let DefaultParserDs1 = new ParserAPI()
	.addToken(FunctionToken)
	.addToken(StringToken)
	.addToken(EmptyToken)
	.setDefaultGlobalRun({ds: "ds 2-b", ds_code_version: 2});




// file: api/PathManager.js

function CodeInitialization(){
	let scope = {"Initization": this};
	
	this.add = function(name, value){
		scope[name] = value;
	}
	
	this.getNames = function(){
		return Object.keys(scope);
	}
	
	this.get = function(name){
		return scope[name];
	}
	
	this.can = function(name){
		return !!this.get(name);
	}
	
	this.load = function(code){
		with(scope){
			try{
				eval(code);
			}catch(e){
				alert(e)
			}
		}
	}
	
	this.clone = function(){
		let result = new CodeInitialization();
		for(let key in scope)
			result.add(key, scope[key]);
		result.add("Initization", result);
		return result;
	}
}

function PathEvent(){
	this.buildConfig = function(ui){
		
	}
	
	this.closeConfig = function(){
		
	}
	
	this.buildVersion = function(ui){
		
	}
	
	this.openVersion = function(ui){
		
	}
	
	this.openNewVersion = function(ui){
		
	}
	
	this.getInformation = function(){
		return {name: "Path name"};
	}
	
	this.getLog = function(){
		
	}
	
	this.preInit = function(){
		
	}
	
	this.postInit = function(){
		
	}
	
	this.open = function(window){
		
	}
	
	this.close = function(window){
		
	}
}

function PathManager(initization, system, path, loaded){
	if(isConnection()) void function(){
		let patcheds = FileTools.ReadJSON(path+".info");
		for(let key in patcheds)
			patcheds[key] = false;
			
		for(let key in loaded){
			patcheds["."+key] = true;
			FileTools.WriteText(path+".files/."+key, system.getFile(loaded[key]));
		}
		FileTools.WriteJSON(path+".info", patcheds, true);
	}();
	
	let cache_path = {};
	
	this.updateCache = function(){
		cache_path = {};
		let all = this.getActivePath();
		for(let i in all)
			cache_path[all[i]] = FileTools.ReadText(path+".files/"+all[i]);
	}
	
	this.getAllPath = function(){
		return Object.keys(FileTools.ReadJSON(path+".info"));
	}
	
	this.getActivePath = function(){
		let result = [];
		let info = FileTools.ReadJSON(path+".info");
		let custom = FileTools.ReadJSON(path+".custom");
		
		for(let key in info)
			if(custom[key] === undefined ? info[key] : custom[key])
				result.push(key);
		for(let key in custom)
			if(info[key] === undefined && custom[key])
				result.push(key);
		
		return result;
	}
	
	this.getUserSetting = function(){
		return FileTools.ReadJSON(path+".custom");
	}
	
	this.setUsetSetting = function(setting){
		FileTools.WriteJSON(path+".custom", setting, true);
	}
	
	let events = [];
	this.addEvent = function(event){
		events.push(event);
	}
	
	this.invokeEvent = function(name, args){
		args = args || [];
		for(let i in events){
			let event = events[i];
			event[name].apply(event, args);
		}
	}
	
	this.deloaded = function(){
		events = [];
	}
	
	this.loaded = function(){
		this.updateCache();
		for(let key in cache_path)
			initization.load(cache_path[key]);
	}
	
	this.restart = function(){
		this.deloaded();
		this.loaded();
	}
}




// file: api/ConfigAPI.js

function ConfigAPI(path){
	path = path || __dir__+"setting.json";
	
	let setting = {description:{}, setting:{}};
	let pathManager;
	this.setPathManager = function(v){
		pathManager = v;
	}
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
	
	this.canSetting = function(name){
		return !!setting.description[name];
	}
	
	this.addSetting = function(name, description, value){
		setting.description[name] = description;
		setting.setting[name] = value;
		this.save();
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
			}else if(description && description.type == "button"){
				ui.addElement(new Setting.SettingTextElement(description.text||"", 15));
				ui.addElement(new Setting.SettingButtonTextElement(key, "NativeButton").setClick(function(){
					eval(description.code || "");
				}));
			}
		}
		
		ui.setConfig(settings);
		ui.setCloseHandler(function(self_){
			self.setSetting(self_.configs);
			self.save();
			pathManager.invokeEvent("closeConfig");
		});
		ui.setStyle(new UiDialogStyle("changelog_frame", 20, 1, [1, 0, 0, 0]));
		pathManager.invokeEvent("buildConfig", [ui]);
		UI.getContext().runOnUiThread({
			run(){
				ui.openCenter();
			}
		});
	}
	
	this.read();
}




// file: api/ModPackAPI.js

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




// file: shared.js

ModAPI.registerAPI("MinecraftOnline", {
	requireGlobal(cmd){
		return eval(cmd);
	}
});




