IMPORT("XLRegister");
IMPORT("ToolLib");
IMPORT("SoundAPI");

//function
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PlaySound(file, volume){
    var Sounds = new Sound();
    switch(randomInt(1, 4)){
        case 1: Sounds.setSource(file + "1.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 2: Sounds.setSource(file + "2.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 3: Sounds.setSource(file + "3.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
        case 4: Sounds.setSource(file + "4.ogg");
                Sounds.setVolume(volume);
                Sounds.play();
                break;
    }
};
