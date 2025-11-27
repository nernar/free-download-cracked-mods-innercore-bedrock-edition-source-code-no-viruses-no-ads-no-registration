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