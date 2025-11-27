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



Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
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

if(c == 0){hour = 6};
if(c == 1){hour = 7};
if(c == 2){hour = 8};
if(c == 3){hour = 8};
if(c == 4){hour = 10};
if(c == 5){hour = 11};
if(c == 6){hour = 12};
if(c == 7){hour = 13};
if(c == 8){hour = 14};
if(c == 9){hour = 15};
if(c == 10){hour = 16};
if(c == 11){hour = 17};
if(c == 12){hour = 18};
if(c == 13){hour = 19};
if(c == 15){hour = 21};
if(c == 16){hour = 22};
if(c == 17){hour = 23};
if(c == 18){hour = 00};

if(hour == 0){hour = "0" + 0};
if(hour == 1){hour = "0" + 1};
if(hour == 2){hour = "0" + 2};
if(hour == 3){hour = "0" + 3};
if(hour == 4){hour = "0" + 4};
if(hour == 5){hour = "0" + 5};
if(hour == 6){hour = "0" + 6};
if(hour == 7){hour = "0" + 7};
if(hour == 8){hour = "0" + 8};
if(hour == 9){hour = "0" + 9};

if(minutes == 0){minutes = "0" + 0};
if(minutes == 1){minutes = "0" + 1};
if(minutes == 2){minutes = "0" + 2};
if(minutes == 3){minutes = "0" + 3};
if(minutes == 4){minutes = "0" + 4};
if(minutes == 5){minutes = "0" + 5};
if(minutes == 6){minutes = "0" + 6};
if(minutes == 7){minutes = "0" + 7};
if(minutes == 8){minutes = "0" + 8};
if(minutes == 9){minutes = "0" + 9};

TimeContainer.setText("game_time", hour + ":" + minutes);
});