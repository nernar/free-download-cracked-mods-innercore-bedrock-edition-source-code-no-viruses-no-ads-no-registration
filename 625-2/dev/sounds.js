NC.soundSys = {
    sounds : [],
    add : function(sound){
        this.sounds[this.sounds.length] = sound;
    },
    addAndStopOthers : function(sound){
        for(let i = 0;i < this.sounds.length;i ++){
            this.sounds[i].stop();
        }
        this.add(sound);
    }
};