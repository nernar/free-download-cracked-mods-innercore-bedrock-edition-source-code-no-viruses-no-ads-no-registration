/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: gui.js

let Worlds = [];
(function(){
	let mods = FileTools.GetListOfDirs(__modpack__.getModsDirectoryPath());
	for(let i in mods)
		if(FileTools.isExists(mods[i]+"/worlds")){
			let worlds = FileTools.GetListOfDirs(mods[i]+"/worlds");
			for(let ii in worlds)
				Worlds.push({
					path: worlds[ii],
					json: FileTools.ReadJSON(worlds[ii]+"/world.info")
				});
		}
})();
alert("World count: "+Worlds.length);

let DP = UI.getScreenHeight();

let is_copy = false;
let clicker = {
			onClick(){
				let content = ListGroup.getWindow("list").getContent();
				for(let i in Worlds){
					content.elements["frame"+i] = {type: "frame", bitmap: "classic_frame_bg_dark", scale: 2, x: 130, y: 15+(i*110), width: 740, height: 100};
					content.elements["title"+i] = {type: "text", text: Worlds[i].json.name, size: 30, x: 145, y: 20+(i*110)};
					content.elements["description"+i] = {type: "text", text: Worlds[i].json.description, size: 15, x: 145, y: (20+40)+(i*110)};
					let ii = i;
					content.elements["button"+i] = {type: "button", bitmap: "world_button", x: 775, y: 25+(i*110), scale: 5, clicker: {
						onClick(){
							if(!is_copy){
								alert("Копирование мира началась.")
								is_copy = true;
								try{
									let path = __packdir__+"worlds/"+(new Date().getTime());
									FileUtils.copyDirectory(Worlds[ii].path, path);
									World.addWorldToCache(path);
									World.updateWorlds();
								}catch(e){
									alert(e);
									alert("Ошибка при копирование мира.");
								}
								is_copy = false;
								ListGroup.close();
								alert("Мир успешно создан")
							}else
								alert("Мир копируется!");
						}
					}};
					
				}
				//ListGroup.getWindow("list").getLocation().setScroll(0, Worlds.length * 120 + 20);
				//ListGroup.getWindow("list").updateWindowLocation();
				ListGroup.getWindow("list").setContent(content);
				ListGroup.open();
			}
		};

//классический интерфейс 
let ButtonOpen = new UI.Window({
	location: {
		padding: {
			bottom: DP * 0.5,
			top: DP * 0.1,
			right: 10,
			left: 800
		}
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
	],
	elements: {
		"button": {type: "button", bitmap: "world_button", scale: 20, clicker: clicker}
	}
});
//карманный интерфейс
let ButtonOpenMobile = new UI.Window({
	location: {
		padding: {
			bottom: DP * 0.5,
			top: DP * 0.1,
			right: 10,
			left: 800
		}
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
	],
	elements: {
		"button": {type: "button", bitmap: "world_button", x: 600, y: 0, scale: 20, clicker: clicker}
	}
});

let ListWorldBitmap = new UI.Window({
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
		{type: "frame", bitmap: "classic_frame_bg_light", scale: 4, x: 150, y: 30, width: 700, height: 400},
		{type: "frame", bitmap: "classic_frame_tab_right", scale: 4, x: 835, y: 30, width: 60, height: 60}
	],
	elements: {
		"close": {type: "close_button", bitmap: "classic_close_button", x: 840, y: 30, scale: 3.5}
	}
});

let ListWorld = new UI.Window({
	location: {
		padding: {
			bottom: DP * 0.1,
			top: DP * 0.1,
			right: 120,
			left: 120
		}
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
	],
	elements: {}
});

let ListGroup = new UI.WindowGroup();
ListGroup.addWindowInstance("bitmap", ListWorldBitmap);
ListGroup.addWindowInstance("list", ListWorld);

Callback.addCallback("NativeGuiChanged", function(name){
	let ui = GlobalContext.getClientInstance().getOptions().getUiProfile();
	if(ui == 0){
		if(name == "play_screen - worlds")
			ButtonOpen.open();
		else if(ButtonOpen.isOpened())
			ButtonOpen.close();
	}else
		if(name == "play_screen - worlds")
			ButtonOpenMobile.open();
		else if(ButtonOpenMobile.isOpened())
			ButtonOpenMobile.close();
});




// file: shared.js





