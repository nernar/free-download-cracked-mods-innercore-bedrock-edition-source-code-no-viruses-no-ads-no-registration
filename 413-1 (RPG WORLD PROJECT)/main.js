IMPORT("SoundAPI");
IMPORT("ScalesRPG");

var mana = 20;
var manaMax = 20;
var atl = false;
var n1 = 0;
var time = 0;
var timeMax = 100;
var BitmapFactory = android.graphics.BitmapFactory; 
var Particles = ModAPI.requireGlobal("Particles");

const Mana={
resetmana:function(){
	mana = manaMax;
 },
resetmax:function(){
	manaMax = 20;
 },
setmax:function(number){
manaMax = number;
  },
setmana:function(number){
	mana = number;
},
menoone:function(number){
if(mana > 0){
	mana -= number;
   }
},
maisone:function(number){
if(mana < manaMax){
	mana += number;
	}
  },
 menoX:function(number){
	manaMax -= number;
},
maisX:function(number){
	manaMax += number;
	}
};

var manaS = new ScalesRPG.Scale({
    bitmaps:{
        full: BitmapFactory.decodeFile(__dir__ + "gui/mana_0.png"), 
        half: BitmapFactory.decodeFile(__dir__ + "gui/mana_1.png"),
        empty: BitmapFactory.decodeFile(__dir__ + "gui/mana_2.png"),
    },
  right:true,
});

Callback.addCallback("EntityDeath", function(e,v){
  if(Player.isPlayer(e)){
 	Mana.resetmana();
     ScalesRPG.resetAll();
   }
 });
 
 Saver.addSavesScope("RPGWORLD",
function read(scope) {
alt=scope.new;
if(alt==false){
 mana = 20;
 }
if(alt==true){
mana = scope.manaSave;
      }
    },
    function save() {
        return {manaSave:n1, new:true};
    }
);

Callback.addCallback("NativeGuiChanged", function (screenName) {
	guiname = screenName;
    if(screenName == "hud_screen" || screenName == "in_game_play_screen"){
        manaS.show();
   }
});

Callback.addCallback("tick", function(){
n1 = mana;
manaS.setValue(mana);
if(mana<manaMax){
time++;
}
if(time==timeMax){
Mana.maisone(1);
time=0;
  }
if(mana==manaMax){
 time=0;
 }
});

var stone = Particles.registerParticleType({
 texture: "stone",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

var fire = Particles.registerParticleType({
 texture: "fire",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

var electric = Particles.registerParticleType({
 texture: "electric",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

var life = Particles.registerParticleType({
 texture: "life",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

var dark = Particles.registerParticleType({
 texture: "dark",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

var imortal = Particles.registerParticleType({
 texture: "imortal",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100], 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

IDRegistry.genItemID("dw");
Item.createItem("dw","dark wand", {name: "wand_dark", meta: 0}, {stack: 1});
IDRegistry.genItemID("lw");
Item.createItem("lw","light wand", {name: "wand_light", meta: 0}, {stack: 1});
IDRegistry.genItemID("fw");
Item.createItem("fw","fire wand", {name: "wand_fire", meta: 0}, {stack: 1});
IDRegistry.genItemID("lfw");
Item.createItem("lfw","life wand", {name: "wand_life", meta: 0}, {stack: 1});
IDRegistry.genItemID("iw");
Item.createItem("iw","imortal wand", {name: "wand_imortal", meta: 0}, {stack: 1});
IDRegistry.genItemID("sw");
Item.createItem("sw","stone wand", {name: "wand_stone", meta: 0}, {stack: 1});

Callback.addCallback("PlayerAttack", function(player, ent){
const pos = Entity.getPosition(ent);
  if((mana==4||mana>4)&&Player.getCarriedItem().id == ItemID.fw){
  SoundAPI.File("fire.ogg");
  	Entity.setFire(ent, 180);       
  Entity.setHealth(ent, Entity.getHealth(ent)-6);       
  Mana.menoone(4);
    for(let i = 20; i--;){
      Particles.addParticle(fire, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
  if((mana==3||mana>3)&&Player.getCarriedItem().id == ItemID.lfw){
  SoundAPI.File("life.ogg");
  Entity.setHealth(ent, Entity.getHealth(ent)-3);       
  Entity.setHealth(Player.get(), Entity.getHealth(Player.get())+3);       
  Mana.menoone(2);
    for(let i = 20; i--;){
      Particles.addParticle(life, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
  if((mana==20||mana>20)&&Player.getCarriedItem().id == ItemID.iw){
  SoundAPI.File("imortal.ogg");
  Entity.remove(ent);
  Mana.menoone(20);
    for(let i = 20; i--;){
      Particles.addParticle(imortal, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
  if((mana==7||mana>7)&&Player.getCarriedItem().id == ItemID.dw){
  SoundAPI.File("dark.ogg");
  Entity.setHealth(ent, Entity.getHealth(ent)-20);       
  Mana.menoone(7);
    for(let i = 20; i--;){
      Particles.addParticle(dark, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
  if((mana==6||mana>6)&&Player.getCarriedItem().id == ItemID.sw){
  Mana.menoone(6);
 Entity.setHealth(ent, Entity.getHealth(ent)-8);       
 SoundAPI.File("stone.ogg");
 Entity.setPosition(ent, pos.x,pos.y+7,pos.z);       
 World.setBlock(pos.x,pos.y-1,pos.z,1,0);
 World.setBlock(pos.x,pos.y,pos.z,1,0);
 World.setBlock(pos.x+1,pos.y-1,pos.z,1,0);
 World.setBlock(pos.x,pos.y-1,pos.z+1,1,0);
 World.setBlock(pos.x-1,pos.y-1,pos.z,1,0);
 World.setBlock(pos.x,pos.y-1,pos.z-1,1,0);
    for(let i = 20; i--;){
      Particles.addParticle(stone, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
  if((mana==5||mana>5)&&Player.getCarriedItem().id == ItemID.lw){
 Entity.spawn(pos.x + .5, pos.y + 1, pos.z + .5, 93);
 Entity.spawn(pos.x + .5, pos.y + 1, pos.z + .5, 93);
 Entity.setHealth(ent, Entity.getHealth(ent)-3);       
 SoundAPI.File("electric.ogg");
 Mana.menoone(5);
 for(let i = 20; i--;){
      Particles.addParticle(electric, pos.x + Math.random() * 0.6 - 0.3, pos.y + Math.random() * 0.6, pos.z + Math.random() * 0.6 - 0.3, Math.random() * 0.02, Math.random() * 0.2, Math.random() * 0.02);
    }
  }
});

Recipes.addShaped({id: ItemID.dw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 397, 1]);
  Recipes.addShaped({id: ItemID.lw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 89,0]);
    Recipes.addShaped({id: ItemID.fw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 325,10]);           
             Recipes.addShaped({id: ItemID.lfw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 322,0]);
         Recipes.addShaped({id: ItemID.iw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 399,0]);
   Recipes.addShaped({id: ItemID.sw, count: 1, data: 0}, [
                        " cc",
                        " bc",
                        "b. "                        
                    ], ['b', 280, 0,'c', 1,0]);