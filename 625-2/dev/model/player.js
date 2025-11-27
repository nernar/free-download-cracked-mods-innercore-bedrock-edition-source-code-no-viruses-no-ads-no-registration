IDRegistry.genBlockID(PREFIX + "player");
Block.createBlock(PREFIX + "player", [
{name:"Player", texture: [["noteblock", 0]], inCreative: true}]);
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID[PREFIX + "player"], count: 1, data: 0}, [
		" y ",
		"yxy",
		" y "
	], ['x', 25, 0,'y',ItemID[PREFIX + "note_steel"],0]);
});	
NC.playerModel = function(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,12/16, 16/16,[["jukebox_side",0],["nc_player_top", 0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]]);
//model.addBox (7/16, 12/16, 0/16, 9/16,16/16, 2/16,[["nc_concrete_black",0]]);
//model.addBox (7/16, 14/16, 0/16, 9/16,16/16, 9/16,[["nc_concrete_black",0]]);


render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
}

NC.playerModel(BlockID[PREFIX + "player"]);

Translation.addTranslation("Player", {zh: "播放器"});

TileEntity.registerPrototype(BlockID[PREFIX + "player"], {

    defaultValues: {
		
		direction : 1,
		offSet : 0,
    },
    bgm : null, 
    music:0,
  //  timer : 0,
    init : function(){
        this.cdAni = new Animation.Item (this.x + 0.5, this.y+1, this.z + 0.5);
        this.cdAni.describeItem ({id: ItemID[PREFIX + "record_empty"],count: 1,data: 0,size: 0.5, rotation: "x",notRandomize: true});
        
        this.cdAni.load();
        this.data.offSet = 0;
        
    },
    tick : function(){
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
     //   if(this.bgm && this.timer === 0){
           // this.bgm.setVolume((Player.getPosition().x - this.x)/10*100);
   //     }
    },
    destroyAnimation: function(){
		if (this.cdAni){
			this.cdAni.destroy();
		}
		
		
	},
    click : function(){
       let item = Player.getCarriedItem();
      // Player.setOffhandItem(item.id,item.count,item.data);
      
      // alert(Player.getInventorySlot(100).id);
       if(NC.recordList[item.id] && this.music === 0){
           this.music = item.id;
           this.cdAni.describeItem ({id: item.id,count: 1,data: 0,size: 0.5, rotation: "x",notRandomize: true});
           this.cdAni.load();
           this.bgm = new Sound(NC.recordList[item.id].src,100);
           this.bgm.play();
           
           //this.bgm.setInBlock(this.x,this.y,this.z,10);
         //  alert(Animation.Text);
           //this.ani_txt = new Animation.Text (this.x, this.y, this.z);
          // this.ani_txt.setText(NC.recordList[item.id].name);
          // this.ani_txt.load();
       }
       else {
            if(this.bgm){
            this.bgm.destroy();
            this.bgm = null;
        }
        this.music = 0;
        this.cdAni.describeItem ({id: ItemID[PREFIX + "record_empty"],count: 1,data: 0,size: 0.5, rotation: "x",notRandomize: true});
        this.cdAni.load();
        }
    },
    destroy: function(){
		this.destroyAnimation();
		if(this.bgm){this.bgm.destroy();this.bgm = null;}
	},
});
Block.setAnimateTickCallback(BlockID[PREFIX + "player"],function(x, y, z, id, data){
    for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
