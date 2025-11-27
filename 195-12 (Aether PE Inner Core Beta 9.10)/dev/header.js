/*
 Aether Mod
 
 Open-Source example of dimension library usage for Inner Core.
*/
IMPORT("Inventory");
IMPORT("dimensions");
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