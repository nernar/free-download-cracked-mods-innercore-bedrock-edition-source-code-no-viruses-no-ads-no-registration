/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: main.js

/*Main File*/

Callback.addCallback("LevelLoaded", function () {
    Game.message("Real Survivor mod loaded!\nAuthor: Denys Dzhuhalyk");
});

IDRegistry.genItemID("peebucket");
Item.createItem("peebucket", "Reject Bucket", {name: "peebucket", meta: 0}, {stack: 1});

//Translation
Translation.addTranslation("Reject Bucket", {ru: "Ведро с отходами"});




// file: Energy.js

var Energy = {
    container: new UI.Container(),
    energy: 100,
	isMin: false,
    isShow: false,
    
    showWindow: function () {
        
            UI.getContext().runOnUiThread(new java.lang.Runnable({
                run: function () {
                    Energy.container.openAs(Energy.popupWindow);
                }
            }));
			
    },
    
    init: function () {
        
    this.popupWindow = new UI.Window({
    location: {
        x: 5,
        y: 28,
        width: 50,
        height: 50
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "icon": {type: "image", x: 0, y: 0, width: 400, height: 400, bitmap: "energy_icon", scale: 1},
        "info": {type: "text", x: 450, y: 80, text: Math.round(Energy.energy).toString() + "%", font: {color: android.graphics.Color.WHITE, size: 200}}
    }
    });

       this.popupWindow.setAsGameOverlay(true);
       this.showWindow();
       
    },
    
    update: function (val, col) {
  
    let elements = this.popupWindow.getContent().elements;
    
        elements["info"] = {
            type: "text",
            x: 450,
            y: 80,
            text: Math.round(val).toString() + "%",
            font: {
                color: col, size: 200
            }
        }
    },
    
    sleep: function () {
        if (Energy.energy < 100){
            Energy.energy = 100;
			Energy.isMin = false;
        }
    }
    
};


Callback.addCallback("tick", function () { 
  let MobEffect = Native.PotionEffect;
  let player = Player.get();
  if (!Player.getFlyingEnabled()){
	if (!Energy.isShow){
        Energy.init();
        Energy.isShow = true;
    } 
    let cor1 = Player.getVelocity();
    if ((cor1.x > 0) || (cor1.x < 0)){
        if ((cor1.y > 0) || (cor1.y < 0)){
            if ((cor1.z > 0) || (cor1.z < 0)){
                if (Energy.energy >= 0.002) {
				    let color;
					if (Energy.isMin){
						color = android.graphics.Color.RED;
					} else {
						color = android.graphics.Color.WHITE;
					}
                    Energy.energy-=0.002;
                    Energy.update(Energy.energy, color);
                }
            }
        }
    }
	if(Energy.energy <= 15) {
		    Energy.isMin = true;
            Entity.addEffect(player, 2, 1, 100, true, true);
    } 
	if (Energy.energy < 0.5){
            Entity.addEffect(player, 15, 2, 100, true, true);
	}
  }
  
});

Callback.addCallback("ItemUse", function (coords, item, block) {
	if (block.id == 26){
        Energy.sleep();
    }
});

Callback.addCallback("NativeGuiChanged", function (screenName) {
	let mode = Game.getGameMode();
    if((screenName == "in_game_play_screen") && ((mode == 0) || (mode == 2))) {
           Energy.init();
    } else {
           Energy.container.close();
    }
});




// file: Purity.js

var Purity = {
    container: new UI.Container(),
    purity: 100,
	isMin: false,
    isShow: false,
    
    showWindow: function () {
        
            UI.getContext().runOnUiThread(new java.lang.Runnable({
                run: function () {
                    Purity.container.openAs(Purity.popupWindow);
                }
            }));
    },
    
    init: function () {
        
    this.popupWindow = new UI.Window({
    location: {
        x: 60,
        y: 28,
        width: 50,
        height: 50
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "icon": {type: "image", x: 0, y: 0, width: 400, height: 400, bitmap: "purity_icon", scale: 1},
        "info": {type: "text", x: 450, y: 80, text: Math.round(Purity.purity).toString() + "%", font: {color: android.graphics.Color.WHITE, size: 200}}
    }
    });

       this.popupWindow.setAsGameOverlay(true);
       this.showWindow();
       
    },
    
    update: function (val, col) {
  
    let elements = this.popupWindow.getContent().elements;
    
        elements["info"] = {
            type: "text",
            x: 450,
            y: 80,
            text: Math.round(val).toString() + "%",
            font: {
                color: col, size: 200
            }
        }
    }
    
};

Callback.addCallback("tick", function () { 
  let MobEffect = Native.PotionEffect;
  let player = Player.get();
  if (!Player.getFlyingEnabled()){
	  if (!Purity.isShow){
        Purity.init();
        Purity.isShow = true;
      }
                if (Purity.purity >= 0.005) {
				    let color;
					if (Purity.isMin){
						color = android.graphics.Color.RED;
					} else {
						color = android.graphics.Color.WHITE;
					}
                    Purity.purity-=0.005;
                    Purity.update(Purity.purity, color);
                }
	if (Purity.purity <= 15) {
		Purity.isMin = true;
	}
	if (Purity.purity < 0.005){
        Entity.addEffect(player, 19, 1, 300, true, true);
	}
  }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 325){
		if (item.count <= 1){
			if (Purity.purity < 99.5){
                Purity.purity = 100;
		        Purity.isMin = false;
				Player.setCarriedItem(ItemID.peebucket, 1, 0);
			}
		}
	}
	if (item.id == ItemID.peebucket){
		Player.setCarriedItem(325, 1, 0);
	}
});

Callback.addCallback("NativeGuiChanged", function (screenName) {
	let mode = Game.getGameMode();
    if((screenName == "in_game_play_screen") && ((mode == 0) || (mode == 2))) {
           Purity.init();
    } else {
           Purity.container.close();
    }
});




// file: Thirst.js

var Thirst = {
    container: new UI.Container(),
    thirst: 100,
	isMin: false,
    isShow: false,
    
    showWindow: function () {
        
            UI.getContext().runOnUiThread(new java.lang.Runnable({
                run: function () {
                    Thirst.container.openAs(Thirst.popupWindow);
                }
            }));
    },
    
    init: function () {
        
    this.popupWindow = new UI.Window({
    location: {
        x: 120,
        y: 28,
        width: 50,
        height: 50
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "icon": {type: "image", x: 0, y: 0, width: 400, height: 400, bitmap: "thirst_icon", scale: 1},
        "info": {type: "text", x: 450, y: 80, text: Math.round(Purity.purity).toString() + "%", font: {color: android.graphics.Color.WHITE, size: 200}}
    }
    });

       this.popupWindow.setAsGameOverlay(true);
       this.showWindow();
       
    },
    
    update: function (val, col) {
  
    let elements = this.popupWindow.getContent().elements;
    
        elements["info"] = {
            type: "text",
            x: 450,
            y: 80,
            text: Math.round(val).toString() + "%",
            font: {
                color: col, size: 200
            }
        }
    }
    
};

Callback.addCallback("tick", function () { 
  let MobEffect = Native.PotionEffect;
  let player = Player.get();
  if (!Player.getFlyingEnabled()){
	  if (!Thirst.isShow){
        Thirst.init();
        Thirst.isShow = true;
      }
                if (Thirst.thirst >= 0.002) {
				    let color;
					if (Thirst.isMin){
						color = android.graphics.Color.RED;
					} else {
						color = android.graphics.Color.WHITE;
					}
                    Thirst.thirst-=0.002;
                    Thirst.update(Thirst.thirst, color);
                }
	if (Thirst.thirst <= 15) {
		Thirst.isMin = true;
	}
	if (Thirst.thirst < 0.002){
        Entity.addEffect(player, 19, 1, 300, true, true);
	}
  }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 373 && item.data == 0){
        if (Thirst.thirst < 99.5) {
		    Thirst.thirst = 100;
			Player.setCarriedItem(374, 1, 0);
		}
	}
});

Callback.addCallback("NativeGuiChanged", function (screenName) {
	let mode = Game.getGameMode();
    if((screenName == "in_game_play_screen") && ((mode == 0) || (mode == 2))) {
           Thirst.init();
    } else {
           Thirst.container.close();
    }
});




// file: save.js

Saver.addSavesScope("SaveValues",
    function read(scope) {
        Energy.energy = scope.energy || 100;
        Purity.purity = scope.purity || 100;
        Thirst.thirst = scope.thirst || 100;
    },

    function save() {
        return {
            energy: Energy.energy,
            purity: Purity.purity,
            thirst: Thirst.thirst
        };
    }
);




