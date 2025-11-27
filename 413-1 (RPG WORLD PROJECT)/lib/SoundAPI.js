LIBRARY({
	name: "SoundAPI",
	version:1,
	shared: false,
	api:"CoreEngine",
	dependencies: []
});

var SoundPlayers = [];
var SoundPlayersToUpdate = [];
var BlockSoundPlayerMap = [];

var SoundAPI ={
UpdateSoundPlayersVolume:function () {
	var PlayerCoords = Player.getPosition();
	for(var i in SoundPlayersToUpdate) {
		var SPTU = SoundPlayersToUpdate[i];
		try {
			if(SPTU.sound.isPlaying()) {
				var UpdateVolume = Math.max(0, 1 - Math.sqrt(Math.pow(PlayerCoords.x - SPTU.x, 2) + Math.pow(PlayerCoords.y - SPTU.y, 2) + Math.pow(PlayerCoords.z - SPTU.z, 2)) / SPTU.rad);
				SPTU.sound.setVolume(UpdateVolume, UpdateVolume)
			} else {
				SPTU.sound.release();
				SoundPlayersToUpdate.splice(i, 1);
				i--
			}
		} catch(e) {
			continue
		}
	}
},
StopAllSoundPlayers:function() {
	for(var i in SoundPlayersToUpdate) {
		var SPTU = SoundPlayersToUpdate[i];
		try {
			if(SPTU.sound.isPlaying()) {
				SPTU.sound.stop()
			};
			SPTU.sound.release()
		} catch(e) {}
	};
	SoundPlayersToUpdate = []
},
AddSoundToUpdateVolume:function(sound, Sx, Sy, Sz, radius) {
	SoundPlayersToUpdate.push({
		sound: sound,
		x: Sx,
		y: Sy,
		z: Sz,
		rad: radius
	})
},
File:function(sound_file) {
	try {
		var media = null;
		for(var i in SoundPlayers){
			var SP = SoundPlayers[i];
			if(!SP.isPlaying()) {
				media = SP;
				break;
			}
		}
		if(media == null) {
			media = new android.media.MediaPlayer();
			SoundPlayers.push(media);
		}
		media.reset();
		media.setDataSource(__dir__+"/sounds/" + sound_file);
		media.prepare();
		media.start();
		return media;
	} catch(err) {}
	return media;
},
PlayBlockSound:function(block, sound_file, isLoop, radius) {
	if(!radius) {
		radius = 24
	};
	var BLID = block;
	var BSPM = BlockSoundPlayerMap;
	try {
		var media = BSPM[BLID];
		if(!media) {
			media = new android.media.MediaPlayer()
		};
		if(media.isPlaying()) {
			media.stop()
		};
		media.reset();
		media.setDataSource(__dir__+"/sounds/" + sound_file);
		BSPM[BLID] = media;
		media.setLooping(isLoop);
		media.prepare();
		media.start();
		SoundAPI.AddSoundToUpdateVolume(media, block.x + 0.5, block.y + 0.5, block.z + 0.5, radius);
	} catch(e) {}
},
StopBlockSound:function(block) {
	var media = BlockSoundPlayerMap[block];
	if(media) {
		media.stop();
		BlockSoundPlayerMap[block] = null;
	}
  }
};
Callback.addCallback("tick", function(){
	if (World.getWorldTime() % 40 == 0){
		SoundAPI.UpdateSoundPlayersVolume();
	}
});
Callback.addCallback("LevelLeft", function(){
	SoundAPI.StopAllSoundPlayers();
});
EXPORT("SoundAPI", SoundAPI);