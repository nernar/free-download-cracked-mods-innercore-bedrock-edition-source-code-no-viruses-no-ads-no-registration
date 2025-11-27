IDRegistry.genBlockID(PREFIX + "tuning_audio_device");
Block.createBlock(PREFIX + "tuning_audio_device", [
{name:"Tuning Audio Device", texture: [["noteblock", 0]], inCreative: true}]);

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID[PREFIX + "tuning_audio_device"], count: 1, data: 0}, [
		" x ",
		"xyx",
		" x "
	], ['x', 266, 0,'y',22,0]);
});	
NC.tuningModel = function(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,12/16, 16/16,[["jukebox_side",0],["nc_tuning_top", 0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]]);


render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
}

NC.tuningModel(BlockID[PREFIX + "tuning_audio_device"]);

Translation.addTranslation("Tuning Audio Device", {zh: "调律装置"});

NC.tuningChange = function (a){
    return false;
};

TileEntity.registerPrototype(BlockID[PREFIX + "tuning_audio_device"], {

     defaultValues: {
		direction : 0
    },
    bgm : null,
    bgmList : ["MonsterCity.mp3","GhostWarrior.mp3"],
    noteList : ["2_1","2_2","2_3","2_4","10","9","8","7","6","5","4","2_5","2_6","2_7","2_8"],
    setBgm : function(b){
        this.bgm = b;
        return b;
    },
	init: function(){
	    //alert(WIDTH);
	    
	},
	displayNote : function(){
	    let that = this;
	    let content = this.container.getGuiContent();
        if(!content) return;
        let line = content.elements.line;
        let text = content.elements.t;
        let confirm = content.elements.confirm_button;
        let ct = content.elements.confirm_text;
        this.noteList.sort(function(){
            return Math.random()-0.5;
        });
        for(let i = 0;i < this.noteList.length;i ++){
            text.text = i;
            let n = content.elements[this.noteList[i]];
            n.x = 260 + 32*i;
            n.y = 300 - n.level*16;
        }
	},
	startGame : function(){
	    let that = this;
	    let content = this.container.getGuiContent();
	    let slot = this.container.getSlot("slotNote");
        if(!content) return;
        let line = content.elements.line;
        let text = content.elements.t;
        let confirm = content.elements.confirm_button;
        let ct = content.elements.confirm_text;
        NC.decreaseInventoryItem(slot.id,slot.data,1);
        NC.decreaseInventoryItem(42,0,1);
        this.displayNote();
	    this.data.direction = 1;
	    line.x = 5;
	    content.elements.steel_text.text = "产出音钢";
	    text.text = "再次点击按钮结束调律";
	  
	    ct.text = "结束调律";
	},
	getMaterial : function(){
	    let slot = this.container.getSlot("slotNote");
	    let note = NC.getInventoryItem(ItemID[PREFIX + "note"],0);
	    slot.id = note.id;
	    slot.data = note.data;
	    slot.count = note.count;
	    return slot.count;
	},
	getMaterial2 : function(){
	    let slot = this.container.getSlot("slotIron");
	    let note = NC.getInventoryItem(42,0);
	    slot.id = note.id;
	    slot.data = note.data;
	    slot.count = note.count;
	    return slot.count;
	},
	getSteel : function(){
	    let slot = this.container.getSlot("slotSteel");
	    let note = NC.getInventoryItem(ItemID[PREFIX + "note_steel"],0);
	    slot.id = note.id;
	    slot.data = note.data;
	    slot.count = note.count;
	    return slot.count;
	},
	showResult : function(){
	    let that = this;
	    let content = this.container.getGuiContent();
        if(!content) return;
        let line = content.elements.line;
        let text = content.elements.t;
        let confirm = content.elements.confirm_button;
        let ct = content.elements.confirm_text;
	},
	endGame : function(r){
	    let that = this;
	    let content = this.container.getGuiContent();
        if(!content) return;
        let line = content.elements.line;
        let text = content.elements.t;
        let confirm = content.elements.confirm_button;
        let ct = content.elements.confirm_text;
        let level = 1;
        if(r){
            let index = Math.floor((line.x - 260) / 32);
            
            if(index >=0 && index < this.noteList.length) level = content.elements[this.noteList[index]].level;
           // alert(level);
            Player.addItemToInventory(ItemID[PREFIX + "note_steel"],level,0);
            text.text = "点击按钮开始调律";
            content.elements.steel_text.text = "音钢+" + level;
        }
        else text.text = "点击按钮开始调律";
        this.data.direction = 0;
        //line.x = 5;
        confirm.clicker.onClick = function(){
            if(that.data.direction === 0){
                if(that.getMaterial() >= 1 && that.getMaterial2() >= 1){
	                that.startGame();
	            }
	            else text.text = "音符不足";
	        }
	        else that.endGame(true);
	    };
	   ct.text = "开始调律";
	},
     tick:function(){
         let content = this.container.getGuiContent();
         if(!content) return;
         let line = content.elements.line;
         let text = content.elements.t;
         
         this.getMaterial();
         this.getMaterial2();
         this.getSteel();
         //text.text = this.data.direction + "";
         if(this.data.direction === 1) line.x += 11;
         if(line.x >= WIDTH - 5 && this.data.direction === 1) this.data.direction =2;
         if(this.data.direction === 2) line.x -=11;
         if(line.x <= 5 && this.data.direction === 2) this.data.direction =1;
     },
     changeItem :function(){
         
     },
     click:function(){
//Game.message(World.getBlockData(this.x, this.y, this.z));
    },
    destroy:function(){
        this.container.clearSlot("slotNote");
        this.container.clearSlot("slotIron");
        this.container.clearSlot("slotSteel");
    },
    getGuiScreen: function(){
    return NC.tuningGui; 
}
});
Callback.addCallback("ContainerOpened",function(c,w){
    if(!c.getParent) return;
     
  try{
    let arr = c.getParent().bgmList;
    c.getParent().setBgm(new Sound(arr[Math.floor((Math.random()*arr.length))],100)).play();
    }catch(e){}
    try{
        if(c.getParent().isPurer){
            c.getParent().endGame();
            c.getParent().startGame();
            return;
        }
    }catch(e){}
    try{
    let arr = c.getParent().bgmList;
    if(!arr) return;
    c.getParent().endGame();
    c.getParent().displayNote();
    
    //c.getParent().setBgm(new Sound(arr[Math.floor((Math.random()*arr.length))],100)).play();
    }catch(e){}
   
});
Callback.addCallback("ContainerClosed",function(c,w){
    if(!c.getParent) return;
  try{
    let arr = c.getParent().bgmList;
    
    if(!arr) return;
    c.getParent().bgm.destroy();
    
   // alert(c.getParent().time);
    }catch(e){}
    
});
Block.setAnimateTickCallback(BlockID[PREFIX + "tuning_audio_device"],function(x, y, z, id, data){
    for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
