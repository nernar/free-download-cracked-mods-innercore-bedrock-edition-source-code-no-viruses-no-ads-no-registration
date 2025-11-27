IMPORT("ScrutinyAPI");
IMPORT("RenderAPI");
IMPORT("ItemAnimHelper");

let players = {};

Saver.addSavesScope("save.skyblock",
	function read(scope){
		players = scope.players || {};
		day = scope.day_players || {};
	}, function save() {
		return {
			players: players||{},
			day_players: day
		}
});

Callback.addCallback("LevelLeft", function (){
	players = {};
	day = -1;
});

Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId){
	if(!players[player]){
		new PlayerActor(player).addItemToInventory(ItemID.quest_book, 1, 0, null, true);
		players[player] = true;
	}
});
