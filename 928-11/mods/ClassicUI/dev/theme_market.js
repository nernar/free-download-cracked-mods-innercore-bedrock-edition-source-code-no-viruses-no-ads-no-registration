function InstallChecker(){
	let installs = {};
	this.setInstall = function(name, state){
		installs[name] = state;
		return this;
	}
	this.canInstall = function(name){
		return !!installs[name];
	}
}

function Market(github, file, checker){
	const list = github.getJson("list.json");
	alert(JSON.stringify(list))
	const group = new UI.WindowGroup();
	const setting = {
		width: 500,
		offset: 25
	};
	const location = new UI.WindowLocation({
		x: 500-(setting.width/2),
		width: setting.width
	});
	const height = location.globalToWindow(location.height);
	group.addWindowInstance("background", new UI.Window({
		drawing: [
			{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
			{type: "frame", bitmap: "changelog_frame", scale: 2, width: location.width, height: location.height, x: location.x, y: location.y},
		],
		elements: {
				"background": {type: "image", bitmap:"_default_slot_empty", x: 0, y: 0, width: 1000, height: location.height, onTouchEvent(self_, event){
					let x = event.x, y = event.y;
					if(!(x >= location.x && y >= location.y && x <= location.x + location.width && y <= location.y + location.height))
						group.close();
				}, z: -5}
		}
	}));
	this.open = function(){
		let content = {
			location: location.asScriptable(),
			drawing: [
				{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
			],
			elements: {
				
			}
		}
		content.location.x += setting.offset;
		content.location.y += setting.offset;
		content.location.width -= setting.offset*2;
		content.location.height -= setting.offset*2;
		content.location.forceScrollX = false;
		content.location.forceScrollY = true;
		let y = setting.offset;
		let size = (height-8*25)/8;
		let text_offset = size*.1
		for(let i in list){
			let description = list[i];
			
			content.elements[description.name+"_"+i] = {type: "frame", bitmap: "NativeButton", x: 0, width: 1000, height: size, y: y, clicker: {
				onClick(){
					alert(description.name)
				}
			}};
			content.elements[description.name+"_text_"+i] = {type: "text", text: description.name, x: text_offset, y: y+text_offset, z: 1, font: {size: size-text_offset*2, color: android.graphics.Color.rgb(0, 0, 0)}}
			y += size + 25;
		}
		content.location.scrollY = location.windowToGlobal(y);
		group.addWindowInstance("content", new UI.Window(content));
		group.open();
	}
}

/*let checker = new InstallChecker();
checker.setInstall("red.json");

new Market(
	new AndroidFileSystem(__dir__+"test-market"),
//	new GithubFileSystem("Reider745", "ThemesClassicUI"), 
	new AndroidFileSystem(__dir__+"install_theme"),
	checker
).open();*/