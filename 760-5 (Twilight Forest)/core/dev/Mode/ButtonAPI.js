
var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
});

var UIbuttons = {
	isEnabled: false,
	nightvision: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: 925,
			y: UI.getScreenHeight()/2-75,
			width: 75,
			height: 300
		},
		drawing: [{type: "background", color: 0}],
		elements: {}
	}),
	
	setButton: function(id, name){
		armorData[id] = name;
	},
	registerButton: function(name, properties){
		buttonContent[name] = properties;
	}
}

var armorData = {};

var buttonMap = {
	button_skill_resistance: false,
	button_fly: false,
	
}

var buttonContent = {
	button_skill_resistance: {
			y: 1500,
			type: "button",
			bitmap: "skill_resistance_off",
			bitmap2: "skill_resistance_on",
			scale: 20,
			clicker: {
				onClick: function(){
              Entity.addEffect(Player.get(), 11, 1, 200, true, false);
         Entity.addEffect(Player.get(), 2, 2, 200, true, false);
            Entity.addEffect(Player.get(), 10, 1, 50, true, false);
				}
			}
		},
button_skill_speed: {
			y: 1500,
			type: "button",
			bitmap: "skill_speed_off",
			bitmap2: "skill_speed_on",
			scale: 20,
			clicker: {
				onClick: function(){
              Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 25);
				}
			}
		},

    

button_fly: {
		y: 1000,
		type: "button",
		bitmap: "button_fly_off",
		bitmap2: "button_fly_on",
		scale: 20
	}
}

UIbuttons.Window.setAsGameOverlay(true);

function updateUIbuttons(){
	var elements = UIbuttons.Window.content.elements;
	for(var name in buttonMap){
		if(buttonMap[name]){
			if(!elements[name]){
				elements[name] = buttonContent[name];
			}
			elements[name].x = 0;
			buttonMap[name] = false;
		}
		else{
			elements[name] = null;
		}
	}
}


Callback.addCallback("tick", function(){
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	activeButtons = [];
	for(var i in armor){
		var button = armorData[armor[i].id];
		if(button){
			buttonMap[button] = true;
			UIbuttons.isEnabled = true;
		}
	}
	if(UIbuttons.isEnabled && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		updateUIbuttons();
		if(!UIbuttons.container){
			UIbuttons.container = new UI.Container();
			UIbuttons.container.openAs(UIbuttons.Window);
		}
		if(UIbuttons.container.isElementTouched("button_fly")){
			var armor = armor[1];
			var y = Player.getPosition().y
			var maxDmg = Item.getMaxDamage(armor.id)
			if(armor.data < maxDmg && y < 256){ 
				if(World.getThreadTime() % 10 == 0){
					Player.setArmorSlot(1, armor.id, 1, Math.min(armor.data+50, maxDmg));
				}
				var vel = Player.getVelocity();
				var vy = Math.min(32, 264-y) / 160;
				if(vel.y < 0.67){
					Player.addVelocity(0, Math.min(vy, 0.67-vel.y), 0);
				}
			}
		}
	}
	else{
		if(UIbuttons.container){
			UIbuttons.container.close();
			UIbuttons.container = null;
		}
	}
	UIbuttons.isEnabled = false;
});
