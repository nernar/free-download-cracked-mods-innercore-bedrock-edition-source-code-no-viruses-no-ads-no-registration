/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
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




// file: api/GithubAPI.js

let DefaultHttpClient = org.apache.http.impl.client.DefaultHttpClient;
let HttpGet = 
org.apache.http.client.methods.HttpGet;
let ByteArrayOutputStream = java.io.ByteArrayOutputStream;
let HttpStatus = org.apache.http.HttpStatus;
let Base64 = java.util.Base64;

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

function GithubAPI(user, repository){
	this.getFileJson = function(path){
		let json = sendHttp("https://api.github.com/repos/"+user+"/"+repository+"/contents/"+path+"?ref=main");
		if(json == null) return null;
		return JSON.parse(json)
	}
	this.parseBase64String = function(text){
		let result = "";
		try{
			let array = text.split("\n");
			for(let i in array)
				result += String(new java.lang.String(Base64.getDecoder().decode(array[i])));
		}catch(e){}
		return result;
	}
	this.getFileContent = function(path){
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




// file: api/ParserAPI.js

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

let FunctionToken = {
	type: "function",
	parse(symbol, parser, i, symbols, globalObj, lineObj){
		if(symbol == "<"){
			lineObj.saveStringToken = false;
			lineObj.string = true;
			return "continue";
		}else if(symbol == ">" || symbols.length - 1 == i){
			lineObj.string = false;
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
			return "continue";
		}else if(symbol == ","){
			lineObj.args = lineObj.args || [];
			lineObj.args.unshift(lineObj.str);
			lineObj.str = "";
			return "continue";
		}
	},
	run(runs, i, global, run){
		let name = run.args[run.args.length-1];
		if(name){
			if(name == "text")
				global.ui.addElement(new Setting.SettingTextElement(run.value||"", 15));
			else if(name == "title")
				global.ui.addElement(new Setting.SettingTextElement(run.value||"", 15));
		}
	}
};

let DefaultParserDs1 = new ParserAPI()
	.addToken(FunctionToken)
	.addToken(StringToken)
	.addToken(EmptyToken)
	.setDefaultGlobalRun({ds: "ds 1-b", ds_code_version: 1});




// file: api/ModPackAPI.js

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




// file: api/ConfigAPI.js

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




// file: shared.js





