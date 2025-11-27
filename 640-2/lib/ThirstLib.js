LIBRARY({
    name: "ThirstLib",
    version: 4,
    shared: true,
    api: "CoreEngine"
});

IMPORT("ScalesRPG");
IMPORT("EntityState");

let BitmapFactory = android.graphics.BitmapFactory;

let THIRST_TICKS = 5000;
let THIRST_WATER_RESTORES = 5;

let loaded = false;

let _thirstScale = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "assets/textures/gui/scale_water_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "assets/textures/gui/scale_water_1.png"),
        empty: BitmapFactory.decodeFile(__dir__ + "assets/textures/gui/scale_water_2.png")
    }
});

let ThirstScale = {
    THIRST_WATER_RESTORES: THIRST_WATER_RESTORES,

    setPlayerThirst: function (value) {
        _thirstScale.setValue(value);
    },
    getPlayerThirst: function () {
        return parseInt(_thirstScale.getValue());
    },
    getPlayerThirstScale: function () {
        return _thirstScale;
    }
};

Saver.addSavesScope("ThirstValue", 
    function read(scope){
        _thirstScale.setValue((scope && scope.thirst)? parseInt(scope.thirst) : 20);
    },
    function save(){
        let thirst = parseInt(_thirstScale.getValue())
        return {"thirst": thirst};
    }
); 


var ticks = THIRST_TICKS;
Callback.addCallback("tick", function(){
    let state = EntityState.getPlayerState();
    if(state.checkFlags(EntityState.RUNNING) 
        || state.checkFlags(EntityState.JUMPING)
        || state.checkFlags(EntityState.SWIMMING)
        || state.checkFlags(EntityState.FLOATING))
        ticks -= 2
    else if(state.checkFlags(EntityState.WALKING))
        ticks -= 1.5;
    else 
        ticks--;
    if(ticks <= 0){
        ticks = THIRST_TICKS;
        if(loaded){
            if(_thirstScale.getValue() <= 0){
                Entity.damageEntity(Player.get(), 1, "thirst");
            }
            else{
                _thirstScale.decrease();
            }
        }
    }
});


Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == 373 && item.data == 0){
        let thirst = _thirstScale.getValue();
        if(thirst < 20){
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(374, 1, 0);
            
            thirst += THIRST_WATER_RESTORES;
            if(thirst > 20) thirst = 20;
            _thirstScale.setValue(thirst);
        }
    }
});


Callback.addCallback("EntityDeath", function(entity){
    if(Player.isPlayer(entity)){
        ScalesRPG.resetAll();
    }
});


Callback.addCallback("NativeGuiChanged", function (screenName) {
    if(screenName == "hud_screen" || 
      screenName == "in_game_play_screen"){
        _thirstScale.show();
        loaded = true;
    }
});

EXPORT("ThirstScale", ThirstScale);