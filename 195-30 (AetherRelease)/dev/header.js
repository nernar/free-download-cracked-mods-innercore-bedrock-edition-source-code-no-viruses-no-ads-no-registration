/*
 Aether Mod
 Open-Source example of dimensions module usage for Inner Core.
*/
IMPORT("Inventory");
//IMPORT("Structures");
//IMPORT("StructuresAPI");
IMPORT("TileRender");
IMPORT("PortalUtils");

const DIR = __dir__+"structures/";

let Flowers = WRAP_NATIVE("FlowerModule");

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var ctx = UI.getContext();

function runAsUI(func){
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            func();
        }catch(err){
            Game.message(err);
            alert(err);
        }}
    }));
}

Native.EntityType.HORSE = 23;
Native.EntityType.DONKEY = 24;
Native.EntityType.MULE = 25;
Native.EntityType.HORSE_SKELETON = 26;
Native.EntityType.HORSE_ZOMBIE = 27;
Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.WITCH = 45;
Native.EntityType.STRAY = 46;
Native.EntityType.HUSK = 47;
Native.EntityType.GUARDIAN = 49;
Native.EntityType.GUARDIAN_ELDER = 50;
Native.EntityType.ENDERMITE = 55;
Native.EntityType.SHULKER = 54;
Native.EntityType.END_DRAGON = 53;
Native.EntityType.WITHER = 52;

var Figure = function(id, x, y, z, mn, mx) {
let N = randomInt(mn, mx);
center = N / 2;
for(var i = 0; i < N; i++) {
 for(var l = 0; l < i; l++) {
   if(i <= center){
     if (l >= center - i && l <= center + i) {
     World.setBlock(x, y, z, id);
        } else {    
     World.setBlock(x, y, z, 0);       
        }
        } else {
      if (l >= center + i - N + 1 && l <= center - i + N - 1) {
       World.setBlock(x, y, z, id);
        } else {
       World.setBlock(x, y, z, 0);       
        }
      } 
    }  
  }
}