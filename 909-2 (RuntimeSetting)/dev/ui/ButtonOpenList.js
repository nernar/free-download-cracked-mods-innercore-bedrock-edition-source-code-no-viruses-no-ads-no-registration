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