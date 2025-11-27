IDRegistry.genBlockID(PREFIX + "purer");
Block.createBlock(PREFIX + "purer", [
{name:"Purifying Audio Device", texture: [["noteblock", 0]], inCreative: true}]);

IDRegistry.genBlockID(PREFIX + "music_glass");
Block.createBlock(PREFIX + "music_glass", [
	{name: "Music Glass", texture: [["nc_music_glass", 0]], inCreative: true}
], {
	base: 20,
	renderlayer: 1
});



Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID[PREFIX + "purer"], count: 1, data: 0}, [
		" b ",
		"ayc",
		"   "
	], ['a', BlockID[PREFIX + "ore_tone" + "_" + "red"], 0,'b',BlockID[PREFIX + "ore_tone" + "_" + "silver"],0,'c',BlockID[PREFIX + "ore_tone" + "_" + "purple"],0,'y',25,0]);
});	
NC.purerModel = function(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,12/16, 16/16,[["jukebox_side",0],["nc_pure_top", 0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]]);
//model.addBox (7/16, 12/16, 0/16, 9/16,16/16, 2/16,[["nc_concrete_black",0]]);
//model.addBox (7/16, 14/16, 0/16, 9/16,16/16, 9/16,[["nc_concrete_black",0]]);


render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
}

NC.purerModel(BlockID[PREFIX + "purer"]);

NC.music_game_list = {};

NC.registerMusicGame = function(spec){
    NC.music_game_list[ItemID[PREFIX + "record_"+spec.id]] = {
        src : spec.src,
        bg : spec.bg,
        pureList : spec.pureList
    }
};

NC.registerMusicGame({
    id : "faded",
    src : "faded.json",
    bg : "bg_faded",
    pureList : {
        "1" : ItemID[PREFIX + "stone_pured"]
    }
});

NC.registerMusicGame({
    id : "seasons_of_asia",
    src : "seasons_of_asia.json",
    bg : "bg_taigu",
    pureList : {
        "12" : ItemID[PREFIX + "sand_pured"]
    }
});

NC.registerMusicGame({
    id : "tothemoon",
    src : "tothemoon.json",
    bg : "bg_tothemoon",
    pureList : {
        "5" : ItemID[PREFIX + "wood_pured"]
    }
});

NC.registerMusicGame({
    id : "GhostWarrior",
    src : "GhostWarrior.json",
    bg : "bg_ghost",
    pureList : {
        "3" : ItemID[PREFIX + "dirt_pured"]
    }
});


Translation.addTranslation("Purifying Audio Device", {zh: "音乐净化装置"});

TileEntity.registerPrototype(BlockID[PREFIX + "purer"], {

     defaultValues: {
		id : null,
		data : null
    },
    bgm : null,
    cache : null,
    isPurer : true,
    isStart : false,
    time : 0,
    combo : 0,
    score : 0,
    //boomTime : 0,
    len : 0,
    leftNearest : null,
    rightNearest : null,
   // thread : null,
    noteList : [["10","9","8","7","6","5","4"],["10_1","9_1","8_1","7_1","6_1","5_1","4_1"]],
    bgmList : ["faded.mp3"],
    setBgm : function(b){
        this.bgm = b;
        return b;
    },
	  init : function(){
        this.cdAni = new Animation.Item (this.x + 0.5, this.y+1, this.z + 0.5);
       // this.cdAni.describeItem ({id: ItemID[PREFIX + "record_empty"],count: 1,data: 0,size: 0.5, rotation: "x",notRandomize: true});
        if(this.data.id) this.setItem({
            id : this.data.id,
            data : this.data.data
        });
        // this.cdAni.load();
        this.data.offSet = 0;
        
    },
	displayNote : function(){
	    let that = this;
	    let content = this.container.getGuiContent();
        if(!content) return;
        let line = content.elements.line;
        let text = content.elements.t;
        let confirm = content.elements.confirm_button;
        let ct = content.elements.confirm_text;
        let c1 = new Chance(1111);
        let c2 = new Chance(1111);
        this.noteList[0].sort(function(){
            return c1.floating({ min: -0.5, max: 0.5 });
        });
        this.noteList[1].sort(function(){
            return c2.floating({ min: -0.5, max: 0.5 });
        });
        for(let i = 0;i < this.noteList[0].length;i ++){
            
            let n = content.elements[this.noteList[0][i]];
            n.x = 32*i;
            n.y = HEIGHT - n.level*16;
            
            let m = content.elements[this.noteList[1][i]];
            m.x = WIDTH - 32*i;
            m.y = HEIGHT - m.level*16;
        }
	},
	hideNote : function(){
	    let content = this.container.getGuiContent();
	    if(!content) return;
	    for(let i = 0;i < this.noteList[0].length;i ++){
            
            let n = content.elements[this.noteList[0][i]];
            n.x = 32*i;
            n.y =  - n.level*16;
            
            let m = content.elements[this.noteList[1][i]];
            m.x = WIDTH - 32*i;
            m.y =  - m.level*16;
        }
	},
	startGame : function(){
	     let content = this.container.getGuiContent();
	     var that = this; 
	     this.end = 0;
	     //this.time = 0;
	     
	           content.elements.bg.bitmap = NC.music_game_list[Player.getCarriedItem().id].bg;
	           content.elements.bg.z = -999;
	         //  content.elements.h1.x += 0;
	         //  content.elements.h2.x += 0;
	       //    content.elements.close_button.x += 0;
	     for(let i in this.cache){
             if(this.cache.hasOwnProperty(i)) {
                content.elements[i] =  {type: "image", direction: this.cache[i],x: -100, y: 170,time:i, scale: GUI_BAR_STANDART_SCALE/1.2, bitmap:this.cache[i],
                pos : function(time){
                    this.x = 300 + (this.time - time) * 10;
                },
                booming : false,
                boom : function(){
                    this.booming = true;
                }
                }; 
                if(parseInt(i) > this.end) this.end = i;
                this.len ++;
             }
         }
         
         content.elements.left_button.onClick = function(){
           //  alert(""+that.leftNearest);
            // alert(that.time);
	        // content.elements[that.leftNearest].y = -100;
	       // that.textManager.boom();
	         if(content.elements[that.leftNearest].x <= 120){
	         content.elements[that.leftNearest].boom();
	         that.combo += 1;
	         that.score += 1;
	         }
	      //   alert(content.elements[that.leftNearest].booming);
	        // alert(content.elements[that.leftNearest].width);
	       //  that.cache[that.leftNearest] = null;
	         
	     };
	     content.elements.right_button.onClick = function(){
	       //  alert(""+that.rightNearest);
	         //content.elements[that.rightNearest].y = -100;
	         if(content.elements[that.rightNearest].x <= 120){
	         content.elements[that.rightNearest].boom();
	         that.combo += 1;
	         that.score += 1;
	         }
	        // that.cache[that.rightNearest] = null;
	     };
         this.isStart = true;
         
         this.textManager = this.textBoom();
         
       /*  this.thread = new java.lang.Thread(function(){
              let Thread = java.lang.Thread;
              while(true&&(!Thread.currentThread().isInterrupted())){
              try{
              if(that.isStart === true)
             Thread.sleep(1000/60);
             else{
             Thread.currentThread().interrupt();
             }
            // java["lang"]["Thread"]["yield"]();
            // java["lang"]["Thread"]["wait"](40);
             //android["os"]["Process"]["setThreadPriority"](-20)
             }catch(e){
             alert(e.message);
             }
             that.tickGame();
            //alert("aaaa");
             
         }
         });
        this.thread.start();*/
        
	     
	},
	endGame : function(){
	   // alert(this.time);
	    
	    let content = this.container.getGuiContent();
	    for(let i in this.cache){
             if(this.cache.hasOwnProperty(i)) {
                content.elements[i] =  null;
             }
         }
         this.cache = FileTools.ReadJSON(__dir__ + "music_game/" + NC.music_game_list[Player.getCarriedItem().id].src);
          
         this.isStart = false;
         //this.cache = null;
         this.time = 0;
         this.combo = 0;
         this.score = 0;
         this.len = 0;
         this.textManager = null;
         content.elements.left_button.onClick = function(){
	         
	     };
	     content.elements.right_button.onClick = function(){
	         
	     };
	     
	     
	},
	textBoom : function(){
	     let content = this.container.getGuiContent();
	     var that = {};
	     
	     that.t = content.elements.t;
	     that.size = content.elements.t.font.size;
	     
	     that.boom = function(){
	         
	     };
	     return that;
	},
	changeItem : function(item){
	     
	     let pureList = NC.music_game_list[Player.getCarriedItem().id].pureList;
	     if(pureList[this.data.id]) this.setItem({
	         id : pureList[this.data.id],
	         data : 0
	     });
	},
     tick:function(){
         let content = this.container.getGuiContent();
         let time = this.time;
         let ln,rn;
         
         
         if(this.timer <= 10){ this.timer ++; } else {this.timer = 0;}
        if(this.cdAni){
        this.cdAni.setItemRotation(0,this.cdAni.__rotation[1] + 5/360 * 3.14,0);
          //  this.cdAni.rotation += 5/360 * 3.14;
        if(this.data.direction === 1){
            this.cdAni.setPos(this.cdAni.coords.x,this.cdAni.coords.y+0.02,this.cdAni.coords.z);
            this.data.offSet += 0.02;
        }
        else if(this.data.direction === 2){
            this.cdAni.setPos(this.cdAni.coords.x,this.cdAni.coords.y-0.02,this.cdAni.coords.z);
            this.data.offSet -= 0.02;
        }
        if(this.data.offSet >= 0.1) this.data.direction = 2;
        if(this.data.offSet <= -0.05) this.data.direction = 1;
        }
        
         if(time % 10 <= 5) this.displayNote();
         else {
         this.hideNote();
         }
         if(this.isStart && content){
          for(let i in this.cache){
             if(this.cache.hasOwnProperty(i) && this.cache[i]) {
                if(!content.elements[i].booming)
                {content.elements[i].pos(time);}
                else {
                if(content.elements[i] && content.elements[i].scale / 1.1 > 0.1)
                content.elements[i].scale /= 1.1;
                else content.elements[i].y = -100;
                }
               
                if(content.elements[i].x < 0){
                    content.elements[i].y = -100;
                    this.combo = 0;
                    this.cache[i] = null;
                }
                
                
                if(content.elements[i] && content.elements[i].booming === false){
                if(content.elements[i].direction === "left" && !ln) ln = i;
                if(content.elements[i].direction === "right" && !rn) rn = i;
                if(content.elements[i].direction === "left" && ln){
                    if(content.elements[i].x < content.elements[ln].x) ln = i;
                }
                if(content.elements[i].direction === "right" && rn){
                    if(content.elements[i].x < content.elements[rn].x) rn = i;
                }
                }
             }
         }
         this.leftNearest = ln;
         this.rightNearest = rn;
         try{
         if(this.time >= this.end){
             if(Math.floor(this.score / this.len * 100) >= 85)
             content.elements.t.text = "净化完成";
             else {content.elements.t.text = "净化失败";}
           //  alert("");
             this.changeItem({
                id : this.data.id,
                data : this.data.data
             });
         }
         else{content.elements.t.text = "COMBO  " + this.combo;}
         content.elements.s.text = "PROCESS  " + Math.floor(this.score / this.len * 100) + "%";
         }
         catch(e){alert(e.message)};
             //if(this.cache[time]){
                // content.elements[time].x = 300;
               //  content.elements[time].y = 300;
             //}
            // if(this.cache[time - 1]){
                // content.elements[time - 1].x = -100;
                // content.elements[time - 1].y = 0;
            // }
             this.time ++;
         }
     },
     setItem : function(item){
         if(this.data.id)
         World.drop(this.x,this.y,this.z,this.data.id,1,this.data.data);
         this.cdAni.describeItem ({id: item.id,count: 1,data: item.data,size: 0.5, rotation: "x",notRandomize: true});
         this.cdAni.load();
         this.data.id = item.id;
         this.data.data = item.data;
     },
     click:function(){
               
    },
    destroyAnimation: function(){
		if (this.cdAni){
			this.cdAni.destroy();
		}
		
		
	},
    destroy:function(){
        this.destroyAnimation();
        World.drop(this.x,this.y,this.z,this.data.id,1,this.data.data);
    },
    getGuiScreen: function(){
         if(NC.music_game_list[Player.getCarriedItem().id]){
             //this.endGame();
           //  this.cache = null;
                this.bgmList = [NC.recordList[Player.getCarriedItem().id].src];
             return new UI.StandartWindow(NC.purerGui); 
         }
         else{
             this.cache = null;
             Game.prevent();
           if(NC.music_game_list[Player.getCarriedItem().id]){
              
             return;
           }
           if(Player.getCarriedItem().id === ItemID[PREFIX + "tuning_fork"]){
             this.setItem({
                 id : 0,
                 data : 0
             });
             return;
           }
            if(Player.getCarriedItem().id === 1 || Player.getCarriedItem().id === 3 || Player.getCarriedItem().id === 5 || Player.getCarriedItem().id === 12){
         let item = Player.getCarriedItem();
         
         this.setItem(item);
         Player.setCarriedItem(Player.getCarriedItem().id,Player.getCarriedItem().count - 1,Player.getCarriedItem().data);
         }
       
         }
    }
});
Block.setAnimateTickCallback(BlockID[PREFIX + "purer"],function(x, y, z, id, data){
    for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});

Callback.addCallback("ItemUse", function(coords, item, block){
	if(block.id === BlockID[PREFIX + "purer"]){
	    Game.prevent();
	}
});

