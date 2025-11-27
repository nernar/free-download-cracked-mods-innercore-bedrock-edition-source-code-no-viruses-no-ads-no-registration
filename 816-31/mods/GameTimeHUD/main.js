alert("«GameTimeHUD» by Максим Помазуев");

//сообщение в чате игры:
Callback.addCallback("LevelLoaded", function(){
Game.message("«GameTimeHUD» by Максим Помазуев");
});

var TimeHUD = new UI.Window({
    location: {
x: __config__.getNumber("x"),
y: __config__.getNumber("y"),
width: 84,
height: 28},

    drawing: [
        {type: "background", color: android.graphics.Color.TRANSPARENT}
    ],
    
    elements: {
"game_time": {type: "text", x: 0, y: 0, text: "" , font: {size: 325, color: android.graphics.Color.WHITE}}
    }
});

TimeHUD.setAsGameOverlay(true);
TimeHUD.setTouchable(false);


var TimeContainer = new UI.Container();

Callback.addCallback("NativeGuiChanged" , function(screenName){

screenName == "in_game_play_screen" && TimeContainer.openAs(TimeHUD);

screenName != "in_game_play_screen" && TimeHUD.close();
screenName != "in_game_play_screen" && TimeContainer.close();

});



Callback.addCallback("LocalTick", function(player, isPlayerDead){
//минуты
var a = World.getWorldTime();
var b = a / 1000;
var c = Math.trunc(b);
var d = b - c;
var e = d * 100;
var f = e * 0.6;
var minutes = Math.trunc(f);

//часы
var l = c + 6;
var m = l / 24;
var n = Math.trunc(m);
var o = n * 24;
var hour = l - o;

if(c >= 0 && c <= 17){hour = c+6; if(c==3) hour=8;}
else if(c == 18) hour = 00;
if(hour < 10) hour = "0"+hour;
if(minutes < 10) minutes = "0"+minutes;

TimeContainer.setText("game_time", hour + ":" + minutes);
});
