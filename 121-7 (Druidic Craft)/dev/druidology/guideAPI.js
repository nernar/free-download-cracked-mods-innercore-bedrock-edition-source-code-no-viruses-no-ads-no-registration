let loaded;

if(__config__.access("Show errors") == true){	
Callback.addCallback("PostLoaded", function () {
if (ModAPI.isModLoaded("GuideAPI")){
loaded = true;
} else {
   loaded = false;
}
});

Callback.addCallback("LevelLoaded", function () {
if (loaded == true){
	Game.message("(DruidicAPI) - Everything works!");
} else if (loaded == false) {
   Game.message("(DruidicAPI) - GuideAPI not installed on this device!");
}
});

}