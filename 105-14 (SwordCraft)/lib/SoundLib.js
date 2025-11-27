/*
author:"Egor Moroz",
version: "v0.2",
description: "SoundLib"
*/

function Sound(music_file){
	try{
		this.mPlayer = new android.media.MediaPlayer();
		var path = __dir__ + "/sounds/" + music_file;
		
		this.playSound = function(){
			this.mPlayer.reset();
			this.mPlayer.setDataSource(path);
			this.mPlayer.prepare();
			this.mPlayer.start();
		}
		
		this.setLooping = function(loop){
			this.mPlayer.setLooping(loop);
		}
		
		this.resetSound = function(){
			this.mPlayer.reset();
		}
		
	}catch(err){
	Game.message("Playing error: " + err);
}}

registerAPIUnit("Sound", Sound);
