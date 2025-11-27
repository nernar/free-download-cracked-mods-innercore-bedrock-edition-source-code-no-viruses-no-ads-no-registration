var ConfigTemplate ={
    "configGenerated":true,
    "constants":{
    	"DEPOSITES_SIZE": 64,
        "DEBUG_CHANCE": 100000
        },
    "test": true,
    "debug": true,
};

__config__.checkAndRestore(ConfigTemplate)
__config__.save()

var Config = {
	configGenerated: __config__.getBool("configGenerated"),
	debug: __config__.getBool("debug"),
	DEPOSITES_SIZE: __config__.getNumber("constants.DEPOSITES_SIZE"),
	DEBUG_CHANCE: __config__.getNumber("constants.DEBUG_CHANCE"),
	test: __config__.getBool("test"),
	
    write: function(ev, val){
    	eval("ConfigTemplate." + ev + " = " + val);
        FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate);
    },
    read: function(ev){
    	return eval("ConfigTemplate." + ev);
    }
}
if(!__config__.getBool("configGenerated")) FileTools.WriteJSON(__dir__ + "config.json", ConfigTemplate)
ConfigTemplate = JSON.parse(FileTools.ReadText(__dir__ + "config.json"));