LIBRARY({
	name: "SoundAPI",
	version: 2,
	shared: false,
	api: "CoreEngine"
});

// import
var AudioAttributes = android.media.AudioAttributes;
var SoundPool = android.media.SoundPool;

var SoundAPI = {
	soundVolume: FileTools.ReadKeyValueFile(settings_path)["audio_sound"],
	musicVolume: FileTools.ReadKeyValueFile(settings_path)["audio_music"],
	soundManagers: [],

	addSoundManager: function(soundManager){
		this.soundManagers.push(soundManager);
	},

	buildSoundPool: function(maxStreams){
		var attributes = new AudioAttributes.Builder()
			.setUsage(AudioAttributes.USAGE_GAME)
			.setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
			.build();
		var soundPool = new SoundPool.Builder()
			.setMaxStreams(maxStreams)
			.setAudioAttributes(attributes)
			.build();
		return soundPool;
	}
}

function SoundManager(maxStreams){
	this.soundPool = SoundAPI.buildSoundPool(maxStreams);
	this.soundIDs = {};
	this.streamIDs = [];
	this.lastStreamID = 0;

	this.loadSound = function(soundName, path){
		var soundID = this.soundPool.load(path, 1);
		this.soundIDs[soundName] = soundID;
		return soundID;
	}

	this.loadSoundsDir = function(path){
		var dir = new java.io.File(path);
		var files = dir.listFiles();
		for(var i in files){
			var item = files[i];
			if(item.isDirectory()){
				this.loadSoundsDir(item.getAbsolutePath());
			}
			else{
				this.loadSound(item.getName(), item.getAbsolutePath())
			}
		}
	}

	this.getSoundID = function(soundName){
		return this.soundIDs[soundName] || 0;
	}

	this.playSound = function(soundName, volume, rate, loop, priority){
		volume *= SoundAPI.soundVolume;
		//this.soundPool.stop
		//if(this.lastStreamID > 0)
			//this.soundPool.stop(this.lastStreamID);
		var streamID = this.soundPool.play(this.getSoundID(soundName), volume, volume, priority || 0, loop || 0, rate || 1);
		//this.lastStreamID = streamID;
		//this.streamIDs[streamID] = priority;
		alert(streamID +" - "+ soundName);
		return streamID;
	}

	this.playSoundAt = function(){

	}

	this.stopSound = function(streamID){
		this.soundPool.stop(streamID);
	}

	this.stopAll = function(){
		for(var i in this.streamIDs){
			this.soundPool.stop(this.streamIDs[i]);
		}
		this.streamIDs = [];
	}

	this.autoPause = function(){
		this.soundPool.autoPause();
	}

	this.autoResume = function(){
		this.soundPool.autoResume();
	}

	SoundAPI.addSoundManager(this);	
}

Callback.addCallback("MinecraftActivityStopped", function() {
	for(var i in SoundAPI.soundManagers){
		SoundAPI.soundManagers[i].autoPause();
	}
});

Callback.addCallback("LevelLeft", function(){
	for(var i in SoundAPI.soundManagers){
		SoundAPI.soundManagers[i].stopAll();
	}
});

/*Volume in the settings*/
var settings_path = "/storage/emulated/0/games/Horizon/minecraftpe/options.txt";
var prevScreen = false;
Callback.addCallback("NativeGuiChanged", function (screen) {
    var currentScreen = screen.startsWith("screen_world_controls_and_settings") || screen.startsWith("screen_controls_and_settings");
    if(prevScreen && !currentScreen){
        SoundAPI.soundVolume = FileTools.ReadKeyValueFile(settings_path)["audio_sound"];
        SoundAPI.musicVolume = FileTools.ReadKeyValueFile(settings_path)["audio_music"];
		//SoundAPI.updateVolume();
    }
    prevScreen = currentScreen;
});


EXPORT("SoundAPI", SoundAPI);
EXPORT("SoundManager", SoundManager);