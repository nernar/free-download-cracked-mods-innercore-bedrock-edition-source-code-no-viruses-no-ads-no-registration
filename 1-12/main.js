/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: main.js

Callback.addCallback("NativeGuiChanged", function(screenName){
    if(screenName == "hud_screen" || screenName == "in_game_play_screen"){
        Panel.enabled = true;
    }
    else{
        Panel.enabled = false;
        Panel.close();
    }
});

var tick = 0;

Callback.addCallback("tick", function(){
    if(Panel.enabled){
        var state = Panel.state;
        tick++;
        if(tick >= 5){
            for(var i = 0; i < 4; i++){
                var armor = Player.getArmorSlot(i);
                if(state[i].id != armor.id || state[i].data != armor.data){
                    Panel.container.setSlot(""+i, armor.id, armor.count, armor.data);
                    state[i].id = armor.id;
                    state[i].data = armor.data;
                    if(state[i].state == 0 || state[i].state == 3){
                        state[i].state = 1;
                    }
                    else if(state[i] == 2)
                        state[i].timer = 0;
                }
                tick = 0;
            }
        }
        if(state[0].state == 0 && state[1].state == 0
          && state[2].state == 0 && state[3].state == 0){
            Panel.close();
        } else {
            Panel.open();
            var elements = Panel.container.getGuiContent().elements;
            for(var i = 0; i < 4; i++){
                if(state[i].state == 1){
                    elements[""+i].x += 50;
                    if(elements[""+i].x >= 0){
                        elements[""+i].x = 0;
                        state[i].state = 2;
                        state[i].timer = 0;
                    }
                } else if(state[i].state == 2){
                    state[i].timer++;
                    if(state[i].timer >= 30){
                        state[i].state = 3;
                    }
                } else if(state[i].state == 3){
                    elements[""+i].x -= 50;
                    if(elements[""+i].x <= -1000){
                        state[i].state = 0;
                    }
                }
            }
        }
    }
});






// file: panel.js

var Panel = {
    window: new UI.Window({
        location: {
            x:0,
            y:110,
            width:50,
            height:200
        },
        elements: {
            "0": {type: "slot", visual: true, x: -1000, y: 0, size: 1000},
            "1": {type: "slot", visual: true, x: -1000, y: 1000, size: 1000},
            "2": {type: "slot", visual: true, x: -1000, y: 2000, size: 1000},
            "3": {type: "slot", visual: true, x: -1000, y: 3000, size: 1000}
        },
        drawing: [
            {type: "background", color: android.graphics.Color.TRANSPARENT}
        ]
    }),

    container: new UI.Container(),
    
    enabled: false,

    open: function(){
        if(!this.container.isOpened()){
            this.window.setAsGameOverlay(true)
            this.container.openAs(this.window);
        }
    },

    close: function(){
        this.container.close();
    },
    
    state: [
        {id: 0, data: 0, state: 0, timer: 0},  //state 0: hidden
        {id: 0, data: 0, state: 0, timer: 0},  //state 1: opening
        {id: 0, data: 0, state: 0, timer: 0},  //state 2: shown
        {id: 0, data: 0, state: 0, timer: 0}   //state 3: hiding
    ]
};




