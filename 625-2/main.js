/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 15
*/



// file: header.js

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




// file: sounds.js

NC.soundSys = {
    sounds : [],
    add : function(sound){
        this.sounds[this.sounds.length] = sound;
    },
    addAndStopOthers : function(sound){
        for(let i = 0;i < this.sounds.length;i ++){
            this.sounds[i].stop();
        }
        this.add(sound);
    }
};




// file: ore/ore_note.js

NC.createNoteOre = function(texture){
IDRegistry.genBlockID(PREFIX + "ore_note");
Block.createBlock(PREFIX + "ore_note",[{name:"Note Ore",texture: [[texture, 0]],inCreative: true
}],"ore_tone");
Translation.addTranslation("Note Ore", {zh: "音符矿"});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
if(Math.random() < 0.01){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){

				World.setBlock(coords.x, coords.y+1, coords.z,BlockID[PREFIX + "ore_note"]);
				World.addTileEntity(coords.x,coords.y+1,coords.z);
			}
		}
	}
});


//Block.setBlockMaterial(PREFIX + "ore_tone",133,0);

NC.particleEmitter.setVelocity(0.3,0.3,0.3)
Block.setAnimateTickCallback(BlockID[PREFIX + "ore_note"],function(x, y, z, id, data){
   // for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
Block.registerDropFunction(PREFIX + "ore_note", function(coords, id, data, diggingLevel, toolLevel){
   // if(Player.getCarriedItem().id === ItemID[PREFIX + "tone_drill"]) return [[id,1,data]];
    return[
        [ItemID[PREFIX + "note"],Math.floor(Math.random()*3+2),0]
    ]; 
});
return this;
};
NC.createNoteOre("nc_lapis_block");




// file: ore/ore_tone.js



NC.ore_tone_list = {};

NC.createToneOre = function(color,texture,rate){
IDRegistry.genBlockID(PREFIX + "ore_tone" + "_" + color);
Block.createBlock(PREFIX + "ore_tone" + "_" + color,[{name:"Tone Ore",texture: [[texture, 0]],inCreative: true
}]);

NC.ore_tone_list[BlockID[PREFIX + "ore_tone" + "_" + color]] = color;

Callback.addCallback("PreLoaded", function(){
NC.ovenMachine.registerRecipe(BlockID[PREFIX + "ore_tone" + "_" + color], rate);
});

Translation.addTranslation("Tone Ore", {zh: "音矿"});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
if(Math.random() < 0.002){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){

				World.setBlock(coords.x, coords.y+1, coords.z,BlockID[PREFIX + "ore_tone" + "_" + color]);
				World.addTileEntity(coords.x,coords.y+1,coords.z);
			}
		}
	}
});

(function(texture,color){

var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (5/16, 1/16, 5/16, 11/16,3/16, 11/16,[[texture, 0]]);
model.addBox (3/16, 3/16, 3/16, 13/16,13/16, 13/16,[[texture, 0]]);
model.addBox (5/16, 5/16, 1/16, 11/16,11/16, 3/16,[[texture, 0]]);
model.addBox (1/16, 5/16, 5/16, 3/16,11/16, 11/16,[[texture, 0]]);
model.addBox (5/16, 13/16, 5/16, 11/16,15/16, 11/16,[[texture, 0]]);
model.addBox (5/16, 5/16, 13/16, 11/16,11/16, 15/16,[[texture, 0]]);
model.addBox (13/16, 5/16, 5/16, 15/16,11/16, 11/16,[[texture, 0]]);

render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID[PREFIX + "ore_tone" + "_" + color], -1, render);
ItemModel.getFor(BlockID[PREFIX + "ore_tone" + "_" + color], -1).setModel(render);

})(texture,color);

//Block.setBlockMaterial(PREFIX + "ore_tone",133,0);

NC.particleEmitter.setVelocity(0.3,0.3,0.3);
Block.setAnimateTickCallback(BlockID[PREFIX + "ore_tone" + "_" + color],function(x, y, z, id, data){
    for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
Block.registerDropFunction(PREFIX + "ore_tone" + "_" + color, function(coords, id, data, diggingLevel, toolLevel){
    if(Player.getCarriedItem().id === ItemID[PREFIX + "tone_drill"]) return [[id,1,data]];
    return[]; 
});
return this;
};

NC
.createToneOre("green","emerald_block",0.15)
.createToneOre("purple","lapis_block",0.1)
.createToneOre("red","redstone_block",0.1)
.createToneOre("silver","iron_block",0.1)
.createToneOre("gold","gold_block",0.2)
.createToneOre("blue","diamond_block",0.25);
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "record_empty"], count: 1, data: 0}, [
		"xxx",
		"x x",
		"xxx"
], ['x', ItemID[PREFIX + "note_steel"], 0]);
});




// file: record/record.js

IDRegistry.genItemID(PREFIX + "record_empty");
Item.createItem(PREFIX + "record_empty", "Empty Record", {name:"nc_record_empty"}, {inTech: true,stack: 64});
Translation.addTranslation("Empty Record", {zh: "空唱片"});

IDRegistry.genItemID(PREFIX + "record_broken");
Item.createItem(PREFIX + "record_broken", "Broken Record", {name:"nc_record_broken"}, {inTech: true,stack: 64});
Translation.addTranslation("Broken Record", {zh: "损坏的唱片"});

NC.recordList = {};
NC.recordArr = [];
NC.createRecord = function(id,name,src){
    IDRegistry.genItemID(PREFIX + "record_" + id);
    Item.createItem(PREFIX + "record_"+id, name, {name:"nc_record_custom"}, {inTech: true,stack: 64});
    this.recordList[ItemID[PREFIX + "record_"+id]] = {
        id : id,
        src : src,
        name : name
    };
    this.recordArr[this.recordArr.length] = ItemID[PREFIX + "record_"+id];
};
NC.createRecord("sea","The Sea","TheSea.mp3");
NC.createRecord("seasons_of_asia","Seasons of Asia","seasons_of_asia.mp3");
NC.createRecord("myyy","Meng Yu Ye Ying","myyy.mp3");
NC.createRecord("faded","Faded","faded.mp3");
NC.createRecord("tothemoon","To the Moon","ToTheMoon.mp3");
NC.createRecord("GhostWarrior","Ghost Warrior","GhostWarrior.mp3");
Translation.addTranslation("Meng Yu Ye Ying", {zh: "夢と葉桜"});




// file: item/item.js

IDRegistry.genItemID(PREFIX + "note_steel");
Item.createItem(PREFIX + "note_steel", "Note Steel", {name:"nc_note_steel"}, {inTech: true,stack: 64});
Translation.addTranslation("Note Steel", {zh: "音钢"});

IDRegistry.genItemID(PREFIX + "tone_drill");
Item.createItem(PREFIX + "tone_drill", "Tone Drill", {name:"nc_tone_drill"}, {inTech: true,stack: 1});
Translation.addTranslation("Tone Drill", {zh: "音矿采集器"});

IDRegistry.genItemID(PREFIX + "tuning_fork");
Item.createItem(PREFIX + "tuning_fork", "Tuning Fork", {name:"nc_tuning_fork"}, {inTech: true,stack: 1});
Translation.addTranslation("Tuning Fork", {zh: "音叉"});
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "tuning_fork"], count: 1, data: 0}, [
		"x x",
		"x x",
		" x "
	], ['x', ItemID[PREFIX + "note_steel"], 0]);
});
ToolAPI.addToolMaterial("note_steel", {durability: 225, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolLib.setTool(ItemID[PREFIX + "tone_drill"], "note_steel", ToolType.pickaxe);
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "tone_drill"], count: 1, data: 0}, [
		"xxx",
		"xyx",
		"xxx"
	], ['x', ItemID[PREFIX + "note_steel"], 0,'y',25,0]);
});
IDRegistry.genItemID(PREFIX + "note");
Item.createItem(PREFIX + "note", "Note", {name:"nc_note"}, {inTech: true,stack: 64});
Translation.addTranslation("Note", {zh: "音符"});

IDRegistry.genItemID(PREFIX + "microphone");
Item.createItem(PREFIX + "microphone", "Microphone", {name:"nc_mike"}, {inTech: true,stack: 64});
Translation.addTranslation("Microphone", {zh: "麦克风"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (6/16, 1/16, 6/16, 10/16,11/16, 10/16,[["nc_hardened_clay_stained_cyan", 0]]);
model.addBox (7/16, 0/16, 7/16, 9/16,1/16, 9/16,[["nc_hardened_clay_stained_cyan", 0]]);
model.addBox (6/16, 11/16, 6/16, 10/16,12/16, 10/16,[["nc_concrete_black", 0]]);
model.addBox (6/16, 18/16, 6/16, 10/16,19/16, 10/16,[["nc_concrete_black", 0]]);

model.addBox (5/16, 12/16, 5/16, 11/16,18/16, 11/16,[["nc_concrete_black", 0]]);

render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "microphone"], -1).setModel(render);
})();

IDRegistry.genItemID(PREFIX + "wood_pured");
Item.createItem(PREFIX + "wood_pured", "Pured Wood", {name:"nc_planks_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Wood", {zh: "净化木板"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_planks_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "stone_pured");
Item.createItem(PREFIX + "stone_pured", "Pured Stone", {name:"nc_stone_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Stone", {zh: "净化石头"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_stone_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "stone_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "sand_pured");
Item.createItem(PREFIX + "sand_pured", "Pured Sand", {name:"nc_sand_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Sand", {zh: "净化沙子"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_sand_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "sand_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();

IDRegistry.genItemID(PREFIX + "dirt_pured");
Item.createItem(PREFIX + "dirt_pured", "Pured Dirt", {name:"nc_dirt_pured"}, {inTech: true,stack: 64});
Translation.addTranslation("Pured Dirt", {zh: "净化泥土"});

(function(){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (0/16, 0/16, 0/16, 16/16,16/16, 16/16,[["nc_dirt_pured", 0]]);
render.addEntry(model);

//BlockRenderer.setStaticICRender(id, -1, render);
ItemModel.getFor(ItemID[PREFIX + "dirt_pured"], -1).setModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setUiModel(render);
//ItemModel.getFor(ItemID[PREFIX + "wood_pured"], -1).setHandModel(render);
})();




// file: item/headset.js


//headset

IDRegistry.genItemID(PREFIX + "headsetRed");

Item.createArmorItem(PREFIX + "headsetRed","Headset",{name:"itemHeadsetRed",meta:0},
{
	isTech: false, 
	armor: 1, 
	type:  "helmet" ,
	texture: "armor/headsetRed_1.png",
	durability: 1 
}
);

Translation.addTranslation("Headset", {zh: "耳机"});

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "headsetRed"], count: 1, data: 0}, [
		"xxx",
		"x x",
		"   "
	], ['x', ItemID[PREFIX + "note_steel"], 0]);
});




// file: model/tuning_audio_device.js

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




// file: model/player.js

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




// file: model/purifying_audio_device.js

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





// file: model/note_oven.js

NC.ovenMachine = (function () {
    var recipe = {
        
    };
    
    var fuel = {};
    var translate = {};
    var ovenModelArray = [
        [1/16, 0, 0, 15/16, 12 / 16, 1 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
            ["lapis_block", 0]
        ]],
        [
            0, 11 / 16, 0, 1, 12 / 16, 10 / 16, [
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0],
                ["lapis_block", 0]
            ]
        ],
        [0, 0, 0, 1 / 16, 12 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],

        [15 / 16, 0, 0, 1, 12 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [0, 0, 0, 1, 1 / 16, 10 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [1 / 16, 1 / 16, 1 / 16, 0, 11 / 16, 9 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
        [1, 1 / 16, 1 / 16, 17 / 16, 11 / 16, 9 / 16, [
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0],
            ["lapis_block", 0]
        ]],
       
        [1 / 16, 1 / 16, 7 / 16, 15 / 16, 11 / 16, 8 / 16, [
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0],
            ["nc_music_glass", 0]
        ]]
    ];
    IDRegistry.genItemID(PREFIX + "note_oven");
    Item.createItem(PREFIX + "note_oven", "Note Oven", {
        name: "nc_lapis_block"
    }, {
        inTech: true,
        stack: 64
    });
    directionBlockAPI.creatBlock(PREFIX + "note_oven", "Note Oven", false);
    directionBlockAPI.createModel1(PREFIX + "note_oven", ovenModelArray);
    directionBlockAPI.bundItem(ItemID[PREFIX + "note_oven"], PREFIX + "note_oven", true,ovenModelArray);

    for (var grindi = 0; grindi <= 3; grindi += 1) {
        TileEntity.registerPrototype(BlockID[PREFIX + "note_oven" + grindi], {

            defaultValues: {
                progress: 0,
                burn: 0,
                id: 0,
                burnmax: 0,
                size: 0.5
            },
            

                init: function () {
                    
                },

                destroy: function () {
                    
                },
                tick: function () {
                    var that = this;
                    var slotSource = that.container.getSlot("slotSource");
                    
                    var slotFuel = that.container.getSlot("slotFuel");

                    var slotResult = that.container.getSlot("slotResult");
                    var burn = NC.ovenMachine.getRecipeFuel(slotFuel.id);
                    this.container.setScale("burningScale", this.data.burn / this.data.burnmax || 0);
                    this.container.setScale("progressScale", this.data.progress / 800);
                    if (slotFuel.count < 1) {
                        that.container.clearSlot("slotFuel");
                    }
                    if (slotSource.count < 1) {
                        that.container.clearSlot("slotSource");
                    }
                    if (that.data.burn === 0) {
                        if (burn && slotFuel.count >= 1) {
                            that.data.burn += burn;
                            that.data.burnmax = burn;
                            if (LiquidRegistry.getItemLiquid(slotFuel.id, slotFuel.data)) {
                                var empty = LiquidRegistry.getEmptyItem(slotFuel.id, slotFuel.data);
                                slotFuel.id = empty.id;
                                slotFuel.data = empty.data;
                            } else {
                                that.container.setSlot("slotFuel", slotFuel.id, slotFuel.count - 1, 0);
                            }
                        }
                    } else if (that.data.burn >= 1) {
                        that.data.burn -= 1;
                        if (! NC.ovenMachine.getRecipe(slotSource.id)) {
                            if (that.data.progress >= 1) {
                                that.data.progress -= 1;
                            }
                        } else {
                            if (that.data.progress <= 799) {
                                that.data.progress += 1;
                                
                                


                            } else if (that.data.progress === 800) {
                                that.changeItem();
                                
                            }
                        }
                    }
                    if (that.data.burn === 0 && that.data.progress >= 1) {
                        that.data.progress -= 1;
                    }

                },
                changeItem: function () {
                    var that = this;
                    var slotFuel = that.container.getSlot("slotFuel");
                    var slotSource = that.container.getSlot("slotSource");
                    var slotResult = that.container.getSlot("slotResult");
                    if (slotResult.id === ItemID[PREFIX + "record_empty"] && slotResult.count === 1) {
                        that.container.setSlot("slotSource", slotSource.id, slotSource.count - 1, 0);
                        
                        if(Math.random() < NC.ovenMachine.getRecipe(slotSource.id))
                        that.container.setSlot("slotResult",   NC.recordArr[chance.integer({ min: 0, max: NC.recordArr.length - 1 })], 1, 0);
                        else that.container.setSlot("slotResult", ItemID[PREFIX + "record_broken"],1,0);
                        that.data.progress = 0;
                    }
                    /* else if (slotResult.id ===   NC.ovenMachine.getRecipe(slotSource.id)) {
                        that.container.setSlot("slotSource", slotSource.id, slotSource.count - 1, 0);
                        that.container.setSlot("slotResult", slotResult.id, slotResult.count + 1, 0);
                        that.data.progress = 0;
                    }
                    */
                },
                click: function () {
                    
                },
                getGuiScreen: function () {
                    return ovenGui;
                }
        });
    }

    return {
        registerRecipe: function (a, b) {
                recipe[a] = b;
                return this;
            },
            getRecipe: function (a) {
                
                    return recipe[a];
           
            },
            
          
            registerRecipeFuel: function(a, v) {
                 fuel[a] = v;
             },
             getRecipeFuel: function(a) {
                 return fuel[a];
             },
            registerTranslate: function (stringid, json) {
                translate[stringid] = json;
                return this;
            },
            getTranslate: function (id, lang) {
                return translate[id][lang] ? translate[id][lang] : translate[id]["en"];
            }
    };
}());

Callback.addCallback("PreLoaded", function(){
    NC.ovenMachine
    .registerRecipeFuel(ItemID[PREFIX + "note"],40);
});

Translation.addTranslation("Note Oven", {zh: "音炉"});

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "note_oven"], count: 1, data: 0}, [
		"yyy",
		"yxy",
		"yyy"
	], ['x', BlockID[PREFIX + "music_glass"],0,'y',ItemID[PREFIX + "note_steel"],0]);
});	
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: BlockID[PREFIX + "music_glass"], count: 1, data: 0}, [
		"yyy",
		"yxy",
		"yyy"
	], ['x', 20,0,'y',ItemID[PREFIX + "note_steel"],0]);
});	




// file: gui/tuning_audio_device.js

NC.tuningGui = new UI.StandartWindow({
    
standart: {
		//header: {text: {text: "调律装置"}},
		//inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
         {type: "background", color: 0xff0000FF},
         
       // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
		{type: "bitmap", x: 20, y: 300, bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		//{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
			"t": {type: "text", x: 742, y: 92, width: 300, height: 30, text:"0"},
	    "close_button": {type: "button", bitmap: "classic_close_button_down", x: 0, y: 0, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
                        }
               

          },
       "confirm_button": {type: "button", bitmap: "_craft_button_up", x: 200, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
                        }
               

          },
          "confirm_text": {type: "text", x: 233, y: 340, width: 300, height: 30, text:"0"},
	    "2_1": {type: "image", level:2,x: 325, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_2": {type: "image", level:2,x: 325+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_3": {type: "image",level:2, x: 325+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_4": {type: "image",level:2, x: 325+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "10": {type: "image",level:10, x: 325+32+32+32+32, y: 300-32*5,  bitmap:"nc_note_slot_10"},
	    "9": {type: "image",level:9, x: 325+32+32+32+32+32, y: 300-32*4,  bitmap:"nc_note_slot_9"},
	    "8": {type: "image",level:8,x: 325+32+32+32+32+32+32, y: 300-32*3,  bitmap:"nc_note_slot_8"},
	    "7": {type: "image",level:7, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_7"},
	    "6": {type: "image",level:6, x: 325+32+32+32+32, y: 300-32*5,  bitmap:"nc_note_slot_6"},
	    "5": {type: "image",level:5, x: 325+32+32+32+32+32, y: 300-32*4,  bitmap:"nc_note_slot_5"},
	    "4": {type: "image",level:4,x: 325+32+32+32+32+32+32, y: 300-32*3,  bitmap:"nc_note_slot_4"},
	   // "3": {type: "image",level:4, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_3"},
	    "2_5": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_6": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_7": {type: "image",level:2,x: 325+32+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
	    "2_8": {type: "image",level:2, x: 325+32+32+32+32+32+32+32+32+32+32+32, y: 300-32,  bitmap:"nc_note_slot_2"},
        "line":{type: "image",level:2,x: 5,y:300-240,width:5,height:240,bitmap:"default_vertical_line_template"},
	
		//"progressScale": {type: "scale", x: WIDTH-100, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		//"burningScale": {type: "scale", x: 4300, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		//"slotSource": {type: "slot", x: 441, y: 75},
		"slotNote": {type: "slot", x: 375, y: 325,"visual":true},
		 "note_text": {type: "text", x: 375, y: 405, width: 300, height: 30, text:"消耗音符"},
		 "slotIron": {type: "slot", x: 475, y: 325,"visual":true},
		 "iron_text": {type: "text", x: 475, y: 405, width: 300, height: 30, text:"消耗铁块"},
		 "slotSteel": {type: "slot", x: 575, y: 325,"visual":true},
		 "steel_text": {type: "text", x: 575, y: 405, width: 300, height: 30, text:"产出音钢"},
		//"slotResult": {type: "slot", x: 625, y: 142},
	}
});




// file: gui/purer.js

NC.purerGui = {
    
standart: {
		//header: {text: {text: "调律装置"}},
		//inventory: {standart: true},
		
	},
drawing: [
         {type: "background", color: 0xff0000FF},
        // {type: "bitmap",x: 0,y:0,width:WIDTH + 64,height:HEIGHT,bitmap:"bg_faded"},
             // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
	//{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
	    "bg" : {type: "image",x: 0,y:0,width:WIDTH + 64,height:HEIGHT,bitmap:"bg_faded"},
      "v": {type: "image",x: 100,y:50,width:5,height: 250,bitmap:"default_vertical_line_template"},
      "h1" :	{type: "image", x: 20, y: 50 ,bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		"h2":	{type: "image", x: 20, y: 300,bitmap: "default_horizontal_line_template", width:WIDTH,height:5},
		
			"t": {type: "text", x: 150, y: 92, width: 300, height: 30, text:"0",font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}},
	 "s": {type: "text", x: 350, y: 92, width: 300, height: 30, text:"0",font: {color: android.graphics.Color.WHITE, shadow: .6, size: 25}},
	 
	       "close_button": {type: "button", bitmap: "arrow_l_default", x: 0, y: 120, scale: GUI_BAR_STANDART_SCALE*3, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               
               

          },
        "2_1": {type: "image", level:2,x: 0, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_2": {type: "image", level:2,x: 32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_3": {type: "image",level:2, x: 32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_4": {type: "image",level:2, x: 32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_5": {type: "image",level:2,x: 32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_6": {type: "image",level:2,x: 32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_7": {type: "image",level:2,x: 32+32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    //"2_8": {type: "image",level:2, x: 325+32+32+32+32+32+32+32+32+32+32+32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_8": {type: "image", level:2,x: WIDTH - 0, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_9": {type: "image", level:2,x: WIDTH - 32, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_10": {type: "image",level:2, x:WIDTH - 32*2, y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_11": {type: "image",level:2, x:WIDTH - 32*3,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_12": {type: "image",level:2,x:WIDTH - 32*4,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_13": {type: "image",level:2,x:WIDTH - 32*5,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	    "2_14": {type: "image",level:2,x:WIDTH - 32*6,y: HEIGHT-32,  bitmap:"nc_note_slot_2"},
	 
	    "10": {type: "image",level:10, x: 0, y: HEIGHT - 10 * 16,  bitmap:"nc_note_slot_10"},
	    "9": {type: "image",level:9, x: 32, y: HEIGHT - 9 * 16,  bitmap:"nc_note_slot_9"},
	    "8": {type: "image",level:8,x: 32+32, y: HEIGHT - 8 * 16,  bitmap:"nc_note_slot_8"},
	    "7": {type: "image",level:7, x: 32+32+32, y: HEIGHT - 7 * 16,  bitmap:"nc_note_slot_7"},
	    "6": {type: "image",level:6, x: 32+32+32+32, y: HEIGHT - 6 * 16,  bitmap:"nc_note_slot_6"},
	    "5": {type: "image",level:5, x: 32+32+32+32+32, y: HEIGHT - 5 * 16,  bitmap:"nc_note_slot_5"},
	    "4": {type: "image",level:4,x: 32+32+32+32+32+32, y: HEIGHT - 4 * 16,  bitmap:"nc_note_slot_4"},
	    "10_1": {type: "image",level:10, x: WIDTH - 32, y: HEIGHT - 10 * 16,  bitmap:"nc_note_slot_10"},
	    "9_1": {type: "image",level:9, x: WIDTH - 32*2, y: HEIGHT - 9 * 16,  bitmap:"nc_note_slot_9"},
	    "8_1": {type: "image",level:8,x: WIDTH - 32*3, y: HEIGHT - 8 * 16,  bitmap:"nc_note_slot_8"},
	    "7_1": {type: "image",level:7, x: WIDTH - 32*4,y: HEIGHT - 7 * 16,  bitmap:"nc_note_slot_7"},
	    "6_1": {type: "image",level:6, x: WIDTH - 32*5, y: HEIGHT - 6 * 16,  bitmap:"nc_note_slot_6"},
	    "5_1": {type: "image",level:5, x: WIDTH - 32*6, y: HEIGHT - 5 * 16,  bitmap:"nc_note_slot_5"},
	    "4_1": {type: "image",level:4,x: WIDTH - 32*7, y: HEIGHT - 4 * 16,  bitmap:"nc_note_slot_4"},

	   // "3": {type: "image",level:4, x: 325+32+32+32+32+32+32+32, y: 300-32*2,  bitmap:"nc_note_slot_3"},
	    
       "left_button": {type: "button", bitmap: "left_button", x: 300, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               

          },
            "right_button": {type: "button", bitmap: "right_button", x: 580, y: 325, scale: GUI_BAR_STANDART_SCALE, clicker: {// 创建test_button

                    onClick: function (container) {
                    container.close();
                    }
                        
               }
               

          }
       
	}
};




// file: gui/ovenGui.js

var ovenGui = new UI.StandartWindow({
    
standart: {
header: {text: {text: "音炉"}},
		inventory: {standart: true},
		background: {standart: true}
	},
drawing: [
       // {type: "bitmap", x: 0, y: 0, bitmap: "woo", scale: 256},
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
			//"textInfo1": {type: "text", x: 742, y: 92, width: 300, height: 30, text:"请放入燃料"},
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});




// file: instrument/instrument.js

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




