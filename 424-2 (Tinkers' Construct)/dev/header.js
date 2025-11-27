/*
┏━━┳┓
┗┓┏╋╋━┳┳━┳━┓
╋┃┃┃┃┃┃┃━┫╋┃
╋┗┛┗┻┻━┻━┻━┛
by NikuJagajaga
*/


const ag = android.graphics;
const Elements = {};
const Container = {};
const Window = {};
const ScreenHeight = UI.getScreenHeight();
const nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
let ThreadTime = 0;


IMPORT("TileRender");
IMPORT("ToolLib")
IMPORT("RegisterFunction");
IMPORT("DecimalLiquid");
IMPORT("EntityTypeUtil");


let player;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
	Recipes.addShaped({id: 340}, ["aa", "ab", "cc"], ["a", 339, 0, "b", 287, 0, "c", ItemID.pattern_blank, 0]);
	Recipes.addShaped({id: 421}, ["abo", "bco", "oob"], ["a", 339, 0, "b", 287, 0, "c", 341, 0]);
});


let HeartCanister = [0, 0, 0];

Saver.addSavesScope("TincoScope",
	function read(scope){
		Tool.startupMeta = FileTools.ReadJSON(__dir__ + "res/items-opaque/tool/meta.json");
		if(scope.toolData){
			Tool.toolData = JSON.parse(JSON.stringify(scope.toolData));
		}
		if(scope.heart){
			HeartCanister = scope.heart.split(":");
		}
	},
	function save(){
		return {toolData: Tool.toolData, heart: HeartCanister.join(":")};
	}
);