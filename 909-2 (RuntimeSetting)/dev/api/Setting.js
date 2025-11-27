function Setting(path){
	this.icon = FileTools.ReadImage(__dir__+"mod_icon.png");
	this.name = FileTools.ReadJSON(__dir__+"mod.info").name;
	
	if(path && FileTools.isExists(path+"mod_icon.png"))
		this.icon = FileTools.ReadImage(path+"mod_icon.png");
	if(path && FileTools.isExists(path+"mod.info"))
		this.name = FileTools.ReadJSON(path+"mod.info").name;
	
	this.updateIconName = function(){
		let name = String(Math.random());
		TextureSource.put(name, this.icon);
		this.icon_name = name;
		return this;
	}
	
	this.updateIconName();
	
	this.setIcon = function(icon){
		this.icon = icon;
		this.updateIconName();
		return this;
	}
	
	this.setName = function(name){
		this.name = name;
		return this;
	}
	
	this.changeSetting = function(){};
	this.setChangeSetting = function(func){
		this.changeSetting = func;
		this.builderConfig.setChangeSetting(func);
		return this;
	}
	
	this.getWidth = function(){
		let height = this.icon.getHeight();
		let width = this.icon.getWidth();
		let scale = 32/height;
		return getTextWidth(this.name, scale*height) + width * scale + 40;
	}
	
	this.builderConfig = new BuilderConfig();
	this.setBuilderConfig = function(builder){
		this.builderConfig = builder
			.setTitle(this.name)
			.setChangeSetting(this.changeSetting);
		return this;
	}
	
	Setting.list.push(this);
}

Setting.list = [];