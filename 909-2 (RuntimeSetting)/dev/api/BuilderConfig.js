function Config(path){
	let config = {};
	
	this.set = function(name, v){
		config[name] = v;
		return this;
	}
	this.put = function(name, v){
		if(!this.can(name))
			this.set(name, v);
		return this;
	}
	this.can = function(name){
		return config[name] !== undefined;
	},
	this.get = function(name, v){
		return config[name] === undefined ? v : config[name];
	}
	this.save = function(){
		FileTools.WriteJSON(path, config, true);
	}
	this.read = function(){
		if(FileTools.isExists(path))
			config = FileTools.ReadJSON(path);
	}
	this.build = function(){
		return config;
	}
	this.read();
}

function BuilderConfig(config){
	config = config || new Config(__dir__+"cfg.json");
	let elements = ["Ui Setting", "ok"];
	this.changeSetting = function(){};
	
	this.addSectionDivider = function(text){
		elements.push(["sectionDivider", text]);
		return this;
	}
	
	this.addCheckBox = function(text, config_name){
		elements.push(["checkBox", config_name, text]);
		return this;
	}
	
	this.addText = function(text, value){
		elements.push(["keyValue", "text", text, value]);
		return this;
	}
	
	this.addSlider = function(name, config_name, min, max, change){
		elements.push(["keyValue", "slider", name, config_name, min, max, change||1, ""]);
		if(!config.can(config_name))
			config.set(config_name, min);
		return this;
	}
	
	this.addMultipleChoice = function(name, config_name, values){
		elements.push(["keyValue", "multipleChoice", name, config_name, values]);
		if(!config.can(config_name))
			config.set(config_name, values[0]);
		return this;
	}
	
	this.setChangeSetting = function(func){
		this.changeSetting = func;
		return this;
	}
	
	this.setTitle = function(name){
		elements[0] = name;
		return this;
	}
	
	this.setExit = function(name){
		elements[1] = name;
		return this;
	}
	
	this.open = function(){
		let self = this;
		let cfg = config.build();
		showConfig(elements, cfg, function(){
			try{
				self.changeSetting(cfg, config, self);
			}catch(e){alert(e)}
			config.save();
		});
		return this;
	}
}