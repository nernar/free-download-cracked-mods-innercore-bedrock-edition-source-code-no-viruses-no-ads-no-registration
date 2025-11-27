Saver.addSavesScope("NoteCraftScope",
    function read(scope){
        NC.instrumentData.level = scope.level || {}
    },
    function save(){
        return {
            level : NC.instrumentData.level
        }
    }
);

NC.instrumentData = {
     level : {
          
     }
};

NC.testFunc = function(){};

Callback.addCallback("ItemUse", function(coords, item, block){
	NC.testFunc(coords, item, block);
});

NC.gameContainer = new UI.Container();

NC.gameWindow = new UI.Window({
    location : {x : 300,y : 0,width : 100,height : 100},
    drawing : [
        {
            type : "color",
            color : Color.TRANSPARENT
        }
    ],
    elements : {
        slot  : {
          type : "slot",
          x : 0,
          y: 0,
          visual: true, bitmap:"tou",
          
        }
    }
});

NC.instrumentHelper = {
    list : {},
    cache : null
};

NC.instrument = function(spec){
    var that = {};
   /*that.id = spec.id;
    that.name = spec.name;
    that.maxLevel = spec.maxLevel;
    that.level_skill_map = spec.level_skill_map;
    that.level_up_map = spec.level_up_map;
    that.texture = spec.texture;
    that.init = spec.init;
    that.tick = spec.tick;
    that.destroy = spec.destroy;
    */
    that = Object.create(spec);

    that.itemID = PREFIX + spec.id;
    NC.instrumentData.level[that.id] = 1;
    IDRegistry.genItemID(that.itemID);
    Item.createItem(that.itemID, that.name, {name:that.texture}, {inTech: true,stack: 1}).setAllowedInOffhand(true);
    that.itemIDInt = ItemID[that.itemID];
    //NC.setAllowInOffhand(that.itemIDInt,true);
    NC.instrumentHelper.list[that.itemIDInt] = that;


    var level = 1;
    
    that.getLevel = function(){
        return level;
    };
    that.setLevel = function(lvl){
        level = lvl;
        return this;
    };
    that.levelUp = function(){
        if(level + 1 <= this.maxLevel){
            that.setLevel(level + 1);
        }
        return this;
    };
    that.isMax = function(){
        if(level === this.maxLevel) return true;
        return false;
    };
    that.getSkillFunc = function(level){
        return this.level_skill_map[level].skill;
    };
    that.getSkillName = function(level){
        return this.level_skill_map[level].name;
    };
    return that;
};

NC.instrumentUpdate = function(){
    let item = Player.getOffhandItem();
    
     if(NC.instrumentHelper.cache !== item.id){
          NC.instrumentHelper.list[item.id] && NC.instrumentHelper.list[item.id].init();
           if(NC.instrumentHelper.cache)NC.instrumentHelper.list[NC.instrumentHelper.cache] && NC.instrumentHelper.list[NC.instrumentHelper.cache].destroy();
           NC.instrumentHelper.cache = item.id;
       }
       else {
       NC.instrumentHelper.list[item.id] && NC.instrumentHelper.list[item.id].tick();
       }
  /*  if(NC.instrumentHelper.list[item.id]){
      
       
       if(!NC.gameContainer.isOpened()){
          let slot  = NC.gameContainer.getSlot("slot");
          slot.id = item.id;
          slot.data = item.data;
          slot.count = 1;
         // alert(slot.id);
         // let instrument = NC.instrumentHelper.list[slot.id];
          //instrument.init();
          
          NC.gameContainer.openAs(NC.gameWindow);
       }
       
       else{
          let instrument = NC.instrumentHelper.list[item.id];
          instrument.tick();
       }
    }
  else if(NC.gameContainer.isOpened()){
          let slot = NC.gameContainer.getSlot("slot");
          let instrument = NC.instrumentHelper.list[slot.id];
          NC.gameContainer.close();
         // instrument.destroy();
          NC.gameContainer.clearSlot("slot");
  }*/
};

Callback.addCallback("LevelLeft", function(){
    let cache = NC.instrumentHelper.cache;
    NC.instrumentHelper.list[cache] && NC.instrumentHelper.list[cache].destroy();
    NC.instrumentHelper.cache = null;
});

NC.flute = NC.instrument({
    id : "flute",
    name : "Flute",
    maxLevel : 5,
    texture : "nc_flute",
    bgm : "myyy_flute.mp3",
    cache : {},
    friend : [
        "CAT",
        "CHICKEN",
        "COD",
        "COW",
        "DOLPHIN",
        "DONKEY",
        "HORSE",
        "LLAMA",
        "LLAMA_SPLIT",
        "MULE",
        "MUSHROOM_COW",
        "PANDA",
        "OCELOT",
        "PARROT",
        "PIG",
        "POLAR_BEAR",
        "PUFFERFISH",
        "RABBIT",
        "SALMON",
        "SHEEP",
        "SQUID",
        "TURTLE",
        "WOLF"
    ],
    judge : function(type){
       for(let i = 0;i < this.friend.length;i ++){
          if(type === Native.EntityType[this.friend[i]]){
              return true;
          }
       }
       return false;
    },
    init : function(){
      this.bgmObj = new Sound(this.bgm,100);
      this.bgmObj.play();
    },
    tick : function(){
        let x = Player.getPosition().x, y = Player.getPosition().y,z = Player.getPosition().z;
        //for(let i = 0;i <= 6;i++)
        NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 1 + Math.random() * 2, y - 0.5, z - 1 + Math.random() * 2, x, y + 1, z);
        let all = Entity.getAllInRange(Player.getPosition(),8);
        for(let i = 0;i < all.length;i ++){
            if(this.judge(Entity.getType(all[i]))){
               if(typeof this.cache[all[i]] === "undefined") this.cache[all[i]] = 0;
               if(Entity.getDistanceToCoords(all[i],Player.getPosition()) >= 3 && this.cache[all[i]] === 0){
                //this.cache[all[i]] = 0;
                Entity.moveToTarget(all[i],{
                    x:Player.getPosition().x,
                    y:Player.getPosition().y - 1,
                    z:Player.getPosition().z
                },{
                        denyY:true,
                       jumpVel:0.4,
                        speed:0.1
                });
                Entity.lookAtCoords(all[i],Player.getPosition());
                }
                else{
                    this.cache[all[i]] ++;
                    if(this.cache[all[i]] > 10){this.cache[all[i]] = 0;}
                }
            }
        }
        
    },
    destroy : function(){
        this.bgmObj && this.bgmObj.destroy();
    }
   /* level_skill_map : {
        "1" : {
            name : "Go with me",
            gui : "ping.png",
            skill : function(){
                alert("Hello instrument");
            }
        },
        "2" : {
            name : "Sleep",
            gui : "ping.png",
            skill : function(){
                alert("test");
            }
        }
    }
  */
});



NC.sax = NC.instrument({
    id : "sax",
    name : "Sax",
    maxLevel : 5,
    texture : "nc_sax",
    bgm : "huijia.mp3",
    judge : function(type){
          if(type === Native.EntityType["ITEM"]){
              return true;
          }
       
       return false;
    },
    init : function(){
      this.bgmObj = new Sound(this.bgm,100);
      this.bgmObj.play();
    },
    tick : function(){
        let x = Player.getPosition().x, y = Player.getPosition().y,z = Player.getPosition().z;
        //for(let i = 0;i <= 6;i++)
        NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 1 + Math.random() * 2, y - 0.5, z - 1 + Math.random() * 2, x, y + 1, z);
        let all = Entity.getAllInRange(Player.getPosition(),8);
        for(let i = 0;i < all.length;i ++){
            if(this.judge(Entity.getType(all[i]))){
              // if(typeof this.cache[all[i]] === "undefined") this.cache[all[i]] = 0;
             //  if(Entity.getDistanceToCoords(all[i],Player.getPosition()) >= 3 && this.cache[all[i]] === 0){
                //this.cache[all[i]] = 0;
                Entity.moveToTarget(all[i],{
                    x:Player.getPosition().x,
                    y:Player.getPosition().y - 1,
                    z:Player.getPosition().z
                },{
                        denyY:false,
                      // jumpVel:0.4,
                        speed:1
                });
                //Entity.lookAtCoords(all[i],Player.getPosition());
                }
              //  else{
                //    this.cache[all[i]] ++;
             //       if(this.cache[all[i]] > 10){this.cache[all[i]] = 0;}
               // }
           }
        
        
    },
    destroy : function(){
        this.bgmObj && this.bgmObj.destroy();
    }
   /* level_skill_map : {
        "1" : {
            name : "Go with me",
            gui : "ping.png",
            skill : function(){
                alert("Hello instrument");
            }
        },
        "2" : {
            name : "Sleep",
            gui : "ping.png",
            skill : function(){
                alert("test");
            }
        }
    }
  */
});

NC.suona = NC.instrument({
    id : "suona",
    name : "Suona Horn",
    maxLevel : 5,
    texture : "nc_suona",
    bgm : "seasons_of_asia.mp3",
    judge : function(type){
          if(type === Native.EntityType["ITEM"]){
              return true;
          }
       
       return false;
    },
    init : function(){
      this.bgmObj = new Sound(this.bgm,100);
      this.bgmObj.play();
    },
    tick : function(){
        let x = Player.getPosition().x, y = Player.getPosition().y,z = Player.getPosition().z;
        //for(let i = 0;i <= 6;i++)
        NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 1 + Math.random() * 2, y - 0.5, z - 1 + Math.random() * 2, x, y + 1, z);
        Entity.addEffect(Player.get(),1,3,0);
    },
    destroy : function(){
        this.bgmObj && this.bgmObj.destroy();
    }
   /* level_skill_map : {
        "1" : {
            name : "Go with me",
            gui : "ping.png",
            skill : function(){
                alert("Hello instrument");
            }
        },
        "2" : {
            name : "Sleep",
            gui : "ping.png",
            skill : function(){
                alert("test");
            }
        }
    }
  */
});
NC.harmonica = NC.instrument({
    id : "harmonica",
    name : "Harmonica",
    maxLevel : 5,
    texture : "nc_harmonica",
    bgm : "SkyCity.mp3",
    init : function(){
      this.bgmObj = new Sound(this.bgm,100);
      this.bgmObj.play();
      Entity.setMaxHealth(Player.get(),30);
      
    },
    tick : function(){
        let x = Player.getPosition().x, y = Player.getPosition().y,z = Player.getPosition().z;
        NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 1 + Math.random() * 2, y - 0.5, z - 1 + Math.random() * 2, x, y + 1, z);
        if(Math.random() < 0.1 && Player.getHealth() <= 8){
             if(Player.getHealth() + 1 <= Entity.getMaxHealth(Player.get())) Player.setHealth(Player.getHealth() + 1);
        }
        
    },
        destroy : function(){
        this.bgmObj && this.bgmObj.destroy();
        Entity.setMaxHealth(Player.get(),20);
        }
});
/*
NC.harmonica = NC.instrument({
    id : "harmonica",
    name : "Harmonica",
    maxLevel : 5,
    texture : "nc_harmonica",
    bgm : "seasons_of_asia.mp3",
    test : null,
    time : 0,
    init : function(){
      this.bgmObj = new Sound(this.bgm,100);
      this.bgmObj.play();
      Entity.setMaxHealth(Player.get(),30);
      this.time = 0;
      this.test = {};
      var that = this;
      NC.testFunc = function(coords, item, block){
          if(item.id === ItemID[PREFIX + "note"]){
           if(block.id === 1) that.test[that.time] = "left";
           if(block.id === 2) that.test[that.time] = "right";
          }
      };
    },
    tick : function(){
        this.time ++;
        let x = Player.getPosition().x, y = Player.getPosition().y,z = Player.getPosition().z;
        NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 1 + Math.random() * 2, y - 0.5, z - 1 + Math.random() * 2, x, y + 1, z);
        if(Math.random() < 0.1 && Player.getHealth() <= 8){
             if(Player.getHealth() + 1 <= Entity.getMaxHealth(Player.get())) Player.setHealth(Player.getHealth() + 1);
        }
        
    },
        destroy : function(){
        this.bgmObj && this.bgmObj.destroy();
        Entity.setMaxHealth(Player.get(),20);
        NC.testFunc = function(){};
        FileTools.WriteJSON("/storage/emulated/0/games/horizon/packs/Inner_Core_Test/innercore/test.json",this.test,true);
    }
});
*/
Callback.addCallback("tick", function(){
    NC.instrumentUpdate();
});

Callback.addCallback("LevelLoaded",function(){
   // NC.gameWindow.setAsGameOverlay(true);
   // NC.gameWindow.open();
   //let cache = Player.getOffhandItem().id;
    //NC.instrumentHelper.list[cache] && NC.instrumentHelper.list[cache].init();
});

Translation.addTranslation("Sax", {zh: "萨克斯"});
Translation.addTranslation("Harmonica", {zh: "口琴"});
Translation.addTranslation("Flute", {zh: "长笛"});
Translation.addTranslation("Suona Horn", {zh: "唢呐"});

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: NC.harmonica.itemIDInt, count: 1, data: 0}, [
		"  x",
		" y ",
		"x  "
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',ItemID[PREFIX + "sand_pured"],0]);
Recipes.addShaped({id: NC.sax.itemIDInt, count: 1, data: 0}, [
		"  x",
		" y ",
		"x  "
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',ItemID[PREFIX + "dirt_pured"],0]);
Recipes.addShaped({id: NC.suona.itemIDInt, count: 1, data: 0}, [
		"  x",
		" y ",
		"x  "
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',ItemID[PREFIX + "wood_pured"],0]);
Recipes.addShaped({id: NC.flute.itemIDInt, count: 1, data: 0}, [
		"  x",
		" y ",
		"x  "
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',ItemID[PREFIX + "stone_pured"],0]);
});