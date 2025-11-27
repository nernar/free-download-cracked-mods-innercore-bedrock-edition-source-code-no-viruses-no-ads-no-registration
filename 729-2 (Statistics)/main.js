IMPORT("Statistics");

////////////////////GUI////////////////////
Translation.addTranslation("StatMagnification", {"en": "1", "zh": "1.5"});
var Magnification = isNaN(Number(Translation.translate("StatMagnification"))) ? 1 : Number(Translation.translate("StatMagnification"));

var t = 0, PLAYER_UID = 0;
Network.addClientPacket("Statistics_PLAYER_UID", function(T){PLAYER_UID = T.U});
Callback.addCallback("ServerPlayerTick", function(player){
	t++;
	if(t == 1){
		Network.getClientForPlayer(player).send("Statistics_PLAYER_UID", {"U": player});
	};
});


var StatisticsUI = {
  window: new UI.Window({
    location: {x: 400, y: 0, width: 36, height: 36},
    drawing: [{type: "background", color: android.graphics.Color.TRANSPARENT}],
    elements: {
       "open": {type: "button", x: 0, y: 0, bitmap: "_window_", scale: 1000/18, clicker: {
         onClick: function(){
         	StatisticsUI.window.close();
         	StatisticsUI.mainUI.open();
       }}},
       "text": {type: "text", x: 60, y: 375, z: 1, text: "Stats", font: {color: android.graphics.Color.WHITE, size: 250}}
    },
  }),
  mainUI: new UI.Window({
    drawing: [
        {type: "frame", x: 0, y: 0, width: 1000, height: UI.getScreenHeight(), bitmap: "background", scale: 4},
        {type: "frame", x: 0, y: 0, width: 1000, height: 60, bitmap: "background", scale: 4},
        {type: "text", text: Translation.translate("Statistics"), x: 450, y: 40, width: 100, height: 40, font: {color: android.graphics.Color.BLACK}},
        {type: "frame", x: 49, y: 99, width: 252, height: UI.getScreenHeight()-97, bitmap: "background", scale: 1},
        {type: "frame", x: 349, y: 99, width: 602, height: UI.getScreenHeight()-97, bitmap: "background", scale: 1},
    ],
    elements: {
      "text_1": {type: "text", x: 50, y: 70, text: Translation.translate("Select Statistics"), font: {color: android.graphics.Color.BLACK, size: 20}},
      "text_2": {type: "text", x: 450, y: 70, text: "", font: {color: android.graphics.Color.BLACK, size: 20}},
      "close": {type: "button", x: 947, y: 12, bitmap: "X", bitmap2: "XPress", scale: 36/19, clicker: {
        onClick: function(){ StatisticsUI.mainUI.close(); }}},
    },
  }),
  scrollY: 0,
  parentUI_1: new UI.Window({
    location: {x: 50, y: 100, width: 250, height: UI.getScreenHeight()-100, scrollY: 180*1/4},
    drawing: [{type: "background", color: android.graphics.Color.parseColor("#00000000")}],
    elements: {},
  }),
  stat: "Default_Craft_Output",
  parentUI_2: new UI.Window({
    location: {x: 350, y: 100, width: 600, height: UI.getScreenHeight()-100, scrollY: UI.getScreenHeight()-100},
    drawing: [{type: "background", color: android.graphics.Color.parseColor("#00000000")}],
    elements: {},
  }),
  refresh: function(stat){
  	StatisticsUI.stat = stat;
  	for(e in StatisticsUI.parentUI_2.getContent().elements){
  		StatisticsUI.parentUI_2.getContent().elements[e] = undefined;
  	};
  	bottom_y = 0;
  	desc = Statistics.getStatDescription(stat);
  	Stat = Statistics.getStat(stat, PLAYER_UID);
  	StatisticsUI.mainUI.getContent().elements["text_2"].text = desc.name;
  	if(desc.header){
  		desc.header.map(function(d1, dd1){
  			StatisticsUI.parentUI_2.getContent().elements["header_"+dd1] = {
  			  type: "text", x: d1.x, y: 40, z: 1, text: d1.text, font: {color: android.graphics.Color.BLACK, size: (d1.size || 100/3)}
  			};
  		});
  		bottom_y += 100;
  	};
  	if(typeof desc.getStat == "function"){
  		for(k in Stat){
  			try{
  				desc.getStat(k, Stat[k]).map(function(d2, dd2){
  					if(d2.type == "text"){
  						StatisticsUI.parentUI_2.getContent().elements["stat_"+k+"_"+dd2] = {
  						  type: "text", x: d2.x, y: bottom_y+10, z: 1, text: d2.text, font: {color: android.graphics.Color.BLACK, size: 100/3}
  						};
  					}else if(d2.type == "slot"){
  						StatisticsUI.parentUI_2.getContent().elements["stat_"+k+"_"+dd2] = {
  						  type: "slot", x: d2.x, y: bottom_y, visual: true, bitmap: "slot", size: 100/3+20, source: d2.item, clicker: {onClick: function(){}}
  						};
  					};
  				});
  				bottom_y += 100/3+30;
  			}catch(e){};
  		};
  	};
  	StatisticsUI.parentUI_2.getLocation().scrollY = (bottom_y*6/10 > UI.getScreenHeight()-100) ? bottom_y*6/10 : UI.getScreenHeight()-100;
  	StatisticsUI.parentUI_2.close();
  	StatisticsUI.parentUI_2.open();
  },
};

StatisticsUI.window.setAsGameOverlay(true);
StatisticsUI.mainUI.setCloseOnBackPressed(true);
StatisticsUI.mainUI.setEventListener({
  onOpen: function(){
  	StatisticsUI.parentUI_1.open();
  	StatisticsUI.refresh(StatisticsUI.stat);
  },
  onClose: function(){
  	StatisticsUI.parentUI_1.close();
  	StatisticsUI.parentUI_2.close();
  	StatisticsUI.window.open();
  }
});

Statistics_display.map(function(i, ii){
	StatisticsUI.scrollY += 250*1/4;
	if(StatisticsUI.scrollY > StatisticsUI.parentUI_1.getLocation().scrollY){
		StatisticsUI.parentUI_1.getLocation().scrollY = StatisticsUI.scrollY;
	};
	StatisticsUI.parentUI_1.getContent().elements["button_"+i] = {
	  type: "button", x: 0, y: 250*ii, bitmap: "button_1", bitmap2: "button_2", scale: 1000/64, clicker: {
	    onClick: function(){ 
	    	if(StatisticsUI.stat == i){return};
	    	StatisticsUI.refresh(i);
	  }}};
	StatisticsUI.parentUI_1.getContent().elements["text_"+i] = {
	  type: "text", x: 50, y: 95+250*ii, z: 1, text: Statistics.getStatDescription(i).name || i, font: {color: android.graphics.Color.BLACK, size: 60*Magnification}
	};
});

Callback.addCallback("NativeGuiChanged", function(screenName){
	if(screenName=="in_game_play_screen"||screenName=="hud_screen"){
		StatisticsUI.window.open();
	} else {
		StatisticsUI.window.close();
	};
});

Callback.addCallback("LevelLeft", function(){
	t = 0;
	StatisticsUI.stat = "Default_Craft_Output";
	PLAYER_UID = 0;
});


/*<<<FOR_TEST>>>
Network.addClientPacket("Statistics_Example", function(T){
	Statistics.addStatCallback("Default_Craft_Output", 
		function(a){
			for(let i in a){
				if(i && i.split(":")[0]==54){
					return a[i]>=1;
				};
			};
		}, 
		function(Uid){
			alert("Statistics: Storage Items!");
		}, 
	false, T.U);
});

var t = 0;
Callback.addCallback("ServerPlayerTick", function(player){
	t++;
	if(t==1){
		Network.getClientForPlayer(player).send("Statistics_Example", {"U": player});
	};
});
Callback.addCallback("LevelLeft", function(){t = 0});
*/
