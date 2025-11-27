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