IMPORT('StorageInterface');
const ScriptableObjectHelper = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ScriptableObjectHelper');
const JavaFONT = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.types.Font');

var _players = [];
Callback.addCallback('ServerPlayerLoaded', function(player__){
	_players =  Network.getConnectedPlayers();
});
