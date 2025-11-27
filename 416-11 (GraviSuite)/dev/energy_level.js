var windowPos = __config__.access("energy_text.pos");
var windowScale = parseInt(__config__.access("energy_text.scale"));
var windowX = {left: 5, center: 500 - windowScale/2, right: 1000 - windowScale}[windowPos];
var EnergyLevelUI = {
	data: [], 
	isEnabled: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: windowX,
			y: __config__.access("energy_text.y"),
			width: windowScale,
			height: 30
		},
		drawing: [{type: "background", color: 0}],
		elements: {
			"text1": {type: "text", font: {size: 85, color: android.graphics.Color.WHITE}, x: 0, y: 0, width: 300, height: 30, text: "Energy level: "},
			"text2": {type: "text", font: {size: 85, color: android.graphics.Color.GREEN}, x: 725, y: 0, width: 300, height: 30, text: "100%"},
		}
	}),
	setFor: function(id){
		this.data.push(id);
	}
}

EnergyLevelUI.Window.setAsGameOverlay(true);

var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(EnergyLevelUI.container){
			EnergyLevelUI.container.close();
			EnergyLevelUI.container = null;
		}
	}
});

Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	if((EnergyLevelUI.data.indexOf(armor.id) != -1) && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		if(!EnergyLevelUI.container){
			EnergyLevelUI.container = new UI.Container();
			EnergyLevelUI.container.openAs(EnergyLevelUI.Window);
		}
		var maxDamage = Item.getMaxDamage(armor.id);
		var energy = Math.ceil((maxDamage - armor.data)/(maxDamage - 1)*100);
		var element = EnergyLevelUI.Window.content.elements.text2;
		if(energy <= 1){
			element.font.color = android.graphics.Color.RED;
		}else if(energy <= 10){
			element.font.color = android.graphics.Color.YELLOW;
		}else{
			element.font.color = android.graphics.Color.GREEN;
		}
		EnergyLevelUI.container.setText("text2", energy + "%");
	}
	else if(EnergyLevelUI.container){
		EnergyLevelUI.container.close();
		EnergyLevelUI.container = null;
	}
});
