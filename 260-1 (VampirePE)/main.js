var bat = false;

Callback.addCallback("tick", function(){
let x = Entity.getPosition(Player.get()).x;
let y = Entity.getPosition(Player.get()).y;
let z = Entity.getPosition(Player.get()).z;
  if(World.getLightLevel(x, y, z)==15&&World.getWorldTime()<=12516&&bat==false){
    Entity.setFire(Player.get(), 3);
  }
  if(bat==false){
    Entity.addEffect(Player.get(),1,3,2,true,true);
    Entity.addEffect(Player.get(),8,10,1,true,true);
  }
  if(Player.getFlying()==true){
    bat=true
    Entity.setMaxHealth(Player.get(), 10);
    //Entity.setRender(Player.get(), Native.MobRenderType.bat);
  }
  if(Player.getFlying()==false){
    //Entity.setRender(Player.get(), Native.MobRenderType.human);
    bat=false
    Entity.setMaxHealth(Player.get(), 20);
    Entity.setHealth(Player.get(), 10);
  }
  if(Player.getFlying()==true&&World.getBlockID(x,y-3,z)!==0){
    Entity.addEffect(Player.get(),8,2,1000,true,true);
  }
  Player.setFlyingEnabled(true);
  if(bloodScale.getValue()>=17){
    Entity.addEffect(Player.get(),5,10,2,true,true);
  }
  if(bloodScale.getValue()>=13){
    Entity.addEffect(Player.get(),16,10,2,true,true);
  }
  if(bloodScale.getValue()==0){
    Entity.damageEntity(Player.get(), 228);
  }
});


Callback.addCallback("LevelLoaded", function(){
  Game.message('§2Mod VampirePE by Toncho §3for mcpe');
});


IMPORT("ScalesRPG");
IMPORT("EntityState");

var BitmapFactory = android.graphics.BitmapFactory;

var BLOOD_TICKS = 250;
var BLOOD_RESTORES = 4;

var loaded = false;

var bloodScale = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "images/gui/scale_blood_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "images/gui/scale_blood_1.png"),
        empty: BitmapFactory.decodeFile(__dir__ + "images/gui/scale_blood_2.png"),
    }
});

Saver.addSavesScope("ThirstValue", 
    function read(scope){
        bloodScale.setValue((scope && scope.blood)? parseInt(scope.blood) : 20);
    },
    function save(){
        let blood = parseInt(bloodScale.getValue())
        return {"blood": blood};
    }
); 


var ticks = BLOOD_TICKS;
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
        ticks = BLOOD_TICKS;
        if(loaded){
            if(bloodScale.getValue() < 0){
                Entity.setHealth(Player.get(), Entity.getHealth(Player.get()) - 1);
            }
            else{
                bloodScale.decrease();
            }
        }
    }
});


Callback.addCallback("PlayerAttack", function(v, player){
  let blood = bloodScale.getValue();
  if(blood < 20){
    blood += BLOOD_RESTORES;
  if(blood > 20) blood = 20;
    bloodScale.setValue(blood);
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
        bloodScale.show();
        loaded = true;
    }
});