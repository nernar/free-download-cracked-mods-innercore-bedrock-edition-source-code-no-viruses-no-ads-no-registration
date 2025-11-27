let Config = {
   reload: function(){
	  this.soundEnabled = __config__.getBool("sound_enabled");
	}
}

Config.reload();

var player;
Callback.addCallback("LevelLoaded", function(){
	Config.reload();
	player = Player.get();
});

isLevelDisplayed = false;
Callback.addCallback("LevelDisplayed", function(){
	isLevelDisplayed = true;
});
Callback.addCallback("LevelLeft", function(){
	isLevelDisplayed = false;
});