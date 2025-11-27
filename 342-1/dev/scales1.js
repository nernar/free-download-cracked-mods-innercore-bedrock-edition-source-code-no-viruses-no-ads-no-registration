//???????


IMPORT("ScalesRPG");

var BitmapFactory = android.graphics.BitmapFactory;
var Color = android.graphics.Color;
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;


var Force = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "gui/force_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "gui/force_1.png"), 
        empty: BitmapFactory.decodeFile(__dir__ + "gui/force_2.png")
    },
    value: 7,
    defaultValue: 0
});




















 
Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == 267 && val < 1){ 
World.drop(pos.x+5, pos.y, pos.z+5, 267, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == 276 && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, 276, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.aquaturasword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.aquaturasword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});


Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.RyusukeSword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.RyusukeSword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.feathersword && val < 4){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.feathersword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.aerolitesword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.aerolitesword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});


Callback.addCallback("PlayerAttack", function (player, victim) { 
	var val = Force.getValue();
	var pos = Player.getPosition ();
let item = Player.getCarriedItem();
if (item.id == ItemID.skylitesword && val < 3){ 
World.drop(pos.x+5, pos.y, pos.z+5, ItemID.skylitesword, 1, 0);
	Player.decreaseCarriedItem (1) 
	Game.message("Вы слишком слабы");
}
});





/*
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==304)
{
Force.decrease();
}
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==303)
{
Force.increase();
}
});
*/







var Speed = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "gui/speed_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "gui/speed_1.png"), 
        empty: BitmapFactory.decodeFile(__dir__ + "gui/speed_2.png")
    },
    value: 10,
    defaultValue: 0
});







	
	
	






























 







