const window = new UI.Window({
	location: {
		x: __config__.getNumber("posX"),
		y: __config__.getNumber("posY"),
		width: 128,
		height: 24
	},
	elements: {
		compass: {type: "image", x: 0, y: 0, scale: 15.625, bitmap: "dir_hud_compass"}
	}
});

window.setAsGameOverlay(true);
let player = 0;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});


Callback.addCallback("NativeGuiChanged", function(name){
	if(name == "hud_screen" || name == "in_game_play_screen"){
		window.open();
		Compass();
	}
	else{
		window.close();
	}
});


const compassElem = window.getElements().get("compass");
function Compass() {
	if(window.isOpened()){
		Compass.runned = true;
	}
	else if (Compass.runned) {
		delete Compass.runned;
		return;
	}
	
	new java.lang.Thread(function(){
		while (Compass.runned) {
			const pi2 = Math.PI * 2;
			let yaw = Entity.getLookAngle(player).yaw;
			while(yaw < 0)yaw += pi2;
			while(yaw > pi2)yaw -= pi2;
			if(yaw!=0)compassElem.x = -2000 / Math.PI * yaw;
			java.lang.Thread.sleep(16);
		}
		if (Compass.runned) delete Compass.runned;
	}).start();
}
