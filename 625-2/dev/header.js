const MODID = "NoteCraft";
const PREFIX = MODID + "$";
const GUI_BAR_STANDART_SCALE = 3.2;
const Color  = android.graphics.Color;
const WIDTH = 960;//UI.getContext().getWindowManager().getDefaultDisplay().getWidth();
const HEIGHT =472;//UI.getContext().getWindowManager().getDefaultDisplay().getHeight();

IMPORT("ToolLib");
importLib("SoundAPI","*");
importLib("directionBlock", "*");
importLib("chancejs","*");

var NC = {};

//NC.setAllowInOffhand = ModAPI.requireGlobal("com.zhekasmirnov.innercore.api.NativeItem.setAllowedInOffhand");
//alert(NC.setAllowInOffhand);

NC.particleEmitter = new Particles.ParticleEmitter(0, 0, 0);

NC.getInventoryItem = function(id,data){
    var item = {
        id : id,
        data : data,
        count : 0
    };
    for(let i = 0;i < 36;i ++){
        let slot = Player.getInventorySlot(i);
        if(slot.id === id && slot.data === data){
            item.count += slot.count;
        }
    }
    return item;
};

NC.decreaseInventoryItem = function(id,data,count){
    var item = {
        id : id,
        data : data
        //count : 0
    };
    for(let i = 0;i <= 36;i ++){
        let slot = Player.getInventorySlot(i);
        if(slot.id === id && slot.data === data){
            if(slot.count < count) return false;
            Player.setInventorySlot(i,id,slot.count -count,data);
            return true;
        }
    }
    //return item;
};
/*
UI.getContext().dispatchKeyEvent = function(event){
        if(event.getKeyCode() == android.view.KeyEvent.KEYCODE_BACK ) {
            //do something.
            return true;
        } else {
	        return super.dispatchKeyEvent(event);
	    }
};
*/