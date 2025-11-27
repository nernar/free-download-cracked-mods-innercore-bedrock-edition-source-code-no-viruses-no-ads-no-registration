var soundsPath = __dir__ + "sounds/tracklist/",
    files = null;
ModAPI.addAPICallback("RetroWaveRadio", function(api){
    api.init("retrowave-additional-music");
    
    if(!files)
        files = FileTools.GetListOfFiles(soundsPath);

    for(let i in files)
        api.addFile(soundsPath + files[i].getName());
})

ModAPI.addAPICallback("RetroWaveGramophone", function(api){
    if(!files)
        files = FileTools.GetListOfFiles(soundsPath);
        
    for(let i in files){
        let name = files[i].getName();

        let sid = "addional_sound_"+i;
        IDRegistry.genItemID(sid);
        Item.createItem(sid, name, {name:"record_13", data:0}, {stack: 1 });

        api.registerDisk(ItemID[sid], soundsPath + name);
    }
})