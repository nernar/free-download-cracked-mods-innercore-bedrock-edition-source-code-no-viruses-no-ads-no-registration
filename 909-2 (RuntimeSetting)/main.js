/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: header.js

IMPORT("RuntimeConfig");

const JAVA_ANIMATOR = android.animation.ValueAnimator;
const JAVA_HANDLER = android.os.Handler;
const LOOPER_THREAD = android.os.Looper;
const JAVA_HANDLER_THREAD = new JAVA_HANDLER(LOOPER_THREAD.getMainLooper());

function createAnimation(_duration, _updateFunc, end){
	let animation = JAVA_ANIMATOR.ofFloat([0,1]);
	animation.setDuration(_duration);
	animation.addUpdateListener({
		onAnimationUpdate(updatedAnim){
			_updateFunc(updatedAnim.getAnimatedValue(), updatedAnim);
		}
	});
	animation.addListener({
		onAnimationEnd(){
			end();
		}
	});
	JAVA_HANDLER_THREAD.post({
		run() {
			animation.start();
		}
	});
}

const TextureSource = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.TextureSource').instance;
let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getTextWidth(text, size){
	return new Font({size:size}).getTextWidth(text, 1);
}




// file: api/BuilderConfig.js

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




// file: api/Setting.js

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




// file: ui/SettingList.js

const SettingUi = {
	width: 300,
	duration: 1000
};

let SettingList = {
	opened: false,
	group: null,
	
	animation(group, shift, end){
		end = end || function(){};
		
		let elements_positions = {};
		let windows = group.getAllWindows();
		let it = windows.iterator();
		while(it.hasNext()){
			let window = it.next();
			for(let key in window.content.elements){
				let element = window.content.elements[key];
				elements_positions[key] = {
					x: element.x,
					y: element.y
				};
			}
		}
		
		createAnimation(SettingUi.duration, function(v){
			let windows = group.getAllWindows();
			let it = windows.iterator();
			while(it.hasNext()){
				let window = it.next();
				for(let key in window.content.elements){
					let element = window.content.elements[key];
					let pos = elements_positions[key];
					for(let axis in pos)
						element[axis] = pos[axis] + shift[axis] * v;
				}
			}
			group.refreshAll();
		}, end);
	},
	
	getWidth(){
		let width = SettingUi.width;
		for(let i in Setting.list)
			width = Math.max(width, Setting.list[i].getWidth());
		return width;
	},
	
	open(){
		if(!this.canOpen() && !this.group){
			let group = new UI.WindowGroup();
			let x = this.getWidth();
			
			let location = new UI.WindowLocation();
			let height = location.globalToWindow(location.height);
			let background = new UI.Window({
				location: location.asScriptable(),
				drawing: [
					{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
				],
				elements: {
					frame: {type: "frame", bitmap: "default_container_frame", scale: .8, width: x, height: height, x: -x, y: 0, color: android.graphics.Color.argb(.6, 0, 0, 0)}
				}
			});
			background.setAsGameOverlay(true);
			location = location.asScriptable();
			location.forceScrollY = true;
			
			let content = {
				location: location,
				drawing: [
					{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
				],
				elements: {
					background: {type: "image", x: 0, y: 0, width: 1000, height: height, bitmap: "_default_slot_empty", onTouchEvent(self_, event){
						SettingList.close();
					}},
				}
			};
			
			let y = 30;
			for(let i in Setting.list){
				let setting = Setting.list[i];
				let height = setting.icon.getHeight();
				let width = setting.icon.getWidth();
				let scale = 32/height;
				content.elements[i+"_frame"] = {type: "frame", bitmap: "default_container_frame", scale: .8, width: x, height: height*scale+20, x: -x, y: y-10, color: android.graphics.Color.argb(.6, 0, 0, 0), clicker: {
					onClick(){
						setting.builderConfig.open();
					}
				}}
				content.elements[i+"_icon"] = {type: "image", bitmap: setting.icon_name, x: -x+20, y: y, height: height*scale, width: width*scale};
				content.elements[i+"_text"] = {type: "text", x: -x+30 + width * scale, y: y, text: setting.name, font: {size: height*scale, color: android.graphics.Color.rgb(1, 1, 1)}};
				
				y += height * scale + 30;
			}
			
			location.scrollY = y;
			
			group.addWindowInstance("background", background);
			group.addWindowInstance("list", new UI.Window(content));
			this.listener.onOpen();
			group.open();
			
			let self = this;
			this.animation(group, {x: x, y: 0}, function(){
				self.listener.open();
				self.group = group;
				self.opened = true;
			});
		}
	},
	canOpen(){
		return this.opened;
	},
	listener: {onOpen(){}, open(){}, close(){}},
	setEventListener(event){
		this.listener = event;
	},
	close(){
		if(this.canOpen() && this.group){
			this.opened = false;
			let self = this;
			
			this.animation(self.group, {x: -this.getWidth(), y: 0}, function(){
				self.listener.close();
				self.group.close();
				self.group = null;
			});
		}
	}
};




// file: ui/ButtonOpenList.js

let ButtonOpenUi = new UI.Window({
	location: {
		width: 80,
		height: 80
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
	],
	elements: {
		button: {type: "button", x: 0, y: 0, scale: 1000/64, bitmap: "icon_menu_mods", clicker: {
			onClick(){
				SettingList.open();
			}
		}}
	}
});

let SCREEN = "start_screen";
let SCREENS = ["start_screen", "pause_screen"]
SettingList.setEventListener({
	onOpen(){
		ButtonOpenUi.close();
	},
	open(){},
	close(){
		if(SCREENS.indexOf(SCREEN) != -1)
			ButtonOpenUi.open();
	}
});

Callback.addCallback("NativeGuiChanged", function(name){
	if(SCREENS.indexOf(name) != -1)
		ButtonOpenUi.open();
	else
		ButtonOpenUi.close();
	SCREEN = name;
});

Callback.addCallback("PostLoaded", function(){
	ButtonOpenUi.open();
});




// file: shared.js

ModAPI.registerAPI("RuntimeSetting", {
	ConfigStorage: Config,
	BuilderConfig: BuilderConfig,
	Setting: Setting,
	
	requireGlobal(cmd){
		return eval(cmd);
	}
});




