/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: material.js

IDRegistry.genBlockID("basic_machine_block");
Block.createBlock("basic_machine_block", [
{name: "basic machine block", texture: [["pili_block", 0]], inCreative: true}]);    ToolAPI.registerBlockMaterial(BlockID.basic_machine_block, "stone", 1, true);    
Recipes.addShaped({id: BlockID.basic_machine_block, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', 5, -1, 'b', 1, 5, 'c',61, -1]);

Translation.addTranslation("basic machine block", {ru: "базовый машинный блок"});

IDRegistry.genItemID("raw_gold");
Item.createItem("raw_gold", "raw gold", {name: "raw_gold", meta: 0}); 
Translation.addTranslation("raw gold", {ru: "необработанное золото"});


Recipes.addFurnace(ItemID.raw_gold, 266, 0);


IDRegistry.genItemID("raw_iron");
Item.createItem("raw_iron", "raw iron", {name: "raw_iron", meta: 0}); 
Translation.addTranslation("raw iron", {ru: "необработанное железо"});

Recipes.addFurnace(ItemID.raw_iron, 265, 0);




// file: trashcan.js

IMPORT("StorageInterface");

IDRegistry.genBlockID("trashcan");
Block.createBlock("trashcan", [
{name: "trashcan", texture: [["trashcan", 0]], inCreative: true}]);    ToolAPI.registerBlockMaterial(BlockID.trashcan, "stone", 1, true);    
Recipes.addShaped({id: BlockID.trashcan, count: 1, data: 0}, [
	"aaa",
	"a a",
	"aaa"
], ['a', 1, -1]);
    
    

 var trashcanUI=new
 UI.StandartWindow({standart:{header:{text:{text:"trashcan"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{
slot0:{type:"slot",x:570,y:140,size:250,bitmap: "slot_trash"}
}});

 
TileEntity.registerPrototype(BlockID.trashcan,{getGuiScreen:function(){return trashcanUI}, 
tick: function(){
StorageInterface.checkHoppers(this);
var slot_trash = this.container.getSlot("slot0");
if(slot_trash.count>=1){
slot_trash.count=0;
}
else
if(slot_trash.count==0){
slot_trash.id=0;
}}});



Translation.addTranslation("trashcan", {ru: "мусорка"});




// file: farm.js

IDRegistry.genBlockID("compact_farm");

Block.createBlockWithRotation("compact_farm",[ {name: "compact farm", texture: [["pili_block", 0],["pili_block", 0],["pili_farm",0],["pili_farm",1],["pili_farm",0],["pili_farm",0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.compact_farm, "stone", 1, true);    

Translation.addTranslation("compact farm", {ru: "компактная ферма"});

Recipes.addShaped({id: BlockID.compact_farm, count: 1, data: 0}, [
        " b ",
        "acd",
        " f "
        ], ["a", 291, -1, "b", 325, 8, "c", BlockID.basic_machine_block, -1, "d", 3, -1, "f", 54, -1]);
        
	var avGUI = new UI.StandartWindow({
    standart: {
  header: {text: {text: "compact farm"}},
        inventory: {standart: true},
        background: {bitmap: "farm_ui"}},
    
    
    drawing: [
		{type: "bitmap", x: 400, y: 90, bitmap: "farm_scale0",scale: 5}],
    
    elements: {
   
    
    "progressScale": {type: "scale", x: 400, y: 90, direction: 0, bitmap: "farm_scale1",scale: 5},
        
        
 "slot":{type:"slot",x:400,y:175,size:71, bitmap: "seeds_slot"},       
        
    "slot0":{type:"slot",x:553,y:103,size:71},
    "slot1":{type:"slot",x:625,y:103,size:71},
    "slot2":{type:"slot",x:697,y:103,size:71},
    "slot3":{type:"slot",x:769,y:103,size:71},
    "slot4":{type:"slot",x:841,y:103,size:71},
    "slot5":{type:"slot",x:913,y:103,size:71},
         
    "slot6":{type:"slot",x:553,y:175,size:71},
    "slot7":{type:"slot",x:625,y:175,size:71},
    "slot8":{type:"slot",x:697,y:175,size:71},
    "slot9":{type:"slot",x:769,y:175,size:71},
    "slot10":{type:"slot",x:841,y:175,size:71},
    "slot11":{type:"slot",x:913,y:175,size:71},
         
    "slot12":{type:"slot",x:553,y:247,size:71},
    "slot13":{type:"slot",x:625,y:247,size:71},
    "slot14":{type:"slot",x:697,y:247,size:71},
    "slot15":{type:"slot",x:769,y:247,size:71},
    "slot16":{type:"slot",x:841,y:247,size:71},
    "slot17":{type:"slot",x:913,y:247,size:71}
    }
});

	
	
	
TileEntity.registerPrototype(BlockID.compact_farm,{
	defaultValues:{
	work:0,
	progress: 0
	},
	
	
	tick:function(){
StorageInterface.checkHoppers(this);

	var slot_seeds = this.container.getSlot("slot");
	
	
if(this.data.progress<610&&slot_seeds.id==295){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",296,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==391){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",391,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==392){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",392,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==458){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",457,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==477){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",477,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==361){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",86,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==362){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",360,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==335){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",335,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==338){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",338,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==81){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",81,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==39){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",39,1,0);
}}  
else
if(this.data.progress<610&&slot_seeds.id==40){           
if(this.data.progress++ >= 600){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",40,1,0);
}}  
                 
else {
this.data.progress = 0;
}
this.container.setScale("progressScale", this.data.progress / 600);
	},  
	
	
	     
         
addResult: function(area, id, count, data){
for (var i = 0; i < 18; i++){
var slot = this.container.getSlot(area + i);
if (slot.id == id && slot.data == data || slot.id == 0){
var add = Math.min(64 - slot.count, count);
                slot.count += add;
                slot.id = id;
                slot.data = data;
                count -= add;
                if (count == 0){
                    break;
                }
            }
        }
        if (count > 0){
            World.drop(this.x + .5, this.y + 1, this.z + .5, id, count, data);
        }
    },  
    getGuiScreen: function () {
        return avGUI;
    }
});

StorageInterface.createInterface(BlockID.compact_farm, {
    slots: {
        "slot": {input: true},
        "slot0": {output: true},
        "slot1": {output: true},
        "slot2": {output: true},
        "slot3": {output: true},
        "slot4": {output: true},
        "slot5": {output: true},
        "slot6": {output: true},
        "slot7": {output: true},
        "slot8": {output: true},
        "slot9": {output: true},
        "slot10": {output: true},
        "slot11": {output: true},
        "slot12": {output: true},
        "slot13": {output: true},
        "slot14": {output: true},
        "slot15": {output: true},
        "slot16": {output: true},
        "slot17": {output: true}
        }});





// file: concrete_plant.js

IMPORT("StorageInterface");

IDRegistry.genBlockID("concrete_plant");
Block.createBlock("concrete_plant", [
{name: "concrete plant", texture: [["concrete_plant", 0]], inCreative: true}]);    ToolAPI.registerBlockMaterial(BlockID.concrete_plant, "stone", 1, true);    

Recipes.addShaped({id: BlockID.concrete_plant, count: 1, data: 0}, 
["aaa",
"aba",
"aaa"], 
["a", 4, -1, "b", 325, 8]);


Translation.addTranslation("concrete plant", {ru: "бетонный завод"});



var decGui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "concrete plant"
			},
			},
			minHeight: 700,
			inventory: {
				standart: true
		}, 
		background: { 
		standart: true 
		}
},
    
    drawing: [
	{type: "bitmap", x: 585, y: 225, bitmap: "progress0", scale: 5}
	],
    
	elements: {
		"DecSlot0": {type: "slot", x: 445, y: 210, size: 100, bitmap: "icon_water_bucket"},
        "DecSlot1": {type: "slot", x: 735, y: 210-15, size: 130, bitmap: "icon_iron_pickaxe"},
        "Progress": {type: "scale", x: 585, y: 225, direction: 0, scale: 5, bitmap: "progress1"}
			}
		
});


var concreteRecipe=[];


addconcreteRecipe(237, 0, 236, 0, 20,1,1);
addconcreteRecipe(237, 1, 236, 1, 20,1,1);
addconcreteRecipe(237, 2, 236, 2, 20,1,1);
addconcreteRecipe(237, 3, 236, 3, 20,1,1);
addconcreteRecipe(237, 4, 236, 4, 20,1,1); 
addconcreteRecipe(237, 5, 236, 5, 20,1,1);
addconcreteRecipe(237, 6, 236, 6, 20,1,1);
addconcreteRecipe(237, 7, 236, 7, 20,1,1);
addconcreteRecipe(237, 8, 236, 8, 20,1,1);
addconcreteRecipe(237, 9, 236, 9, 20,1,1);
addconcreteRecipe(237, 10, 236, 10, 20,1,1);
addconcreteRecipe(237, 11, 236, 11, 20,1,1);
addconcreteRecipe(237, 12, 236, 12, 20,1,1);
addconcreteRecipe(237, 13, 236, 13, 20,1,1);
addconcreteRecipe(237, 14, 236, 14, 20,1,1);
addconcreteRecipe(237, 15, 236, 15, 20,1,1);
addconcreteRecipe(237, 16, 236, 16, 20,1,1);
addconcreteRecipe(12, -1, 337, 0, 20,1,1);

function addconcreteRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	concreteRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addConcreteRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	concreteRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.concrete_plant, {
	defaultValues: {
		time:0,
		recipe:null,
		id:0,
		data:0,
		rotation:0
	},
	animation:null,
	tick: function(){
	StorageInterface.checkHoppers(this);
        
		var content = this.container.getGuiContent(); 
		if(this.data.id!=this.container.getSlot("DecSlot0").id||this.data.data!=this.container.getSlot("DecSlot0").data){
		
		}	
			if(this.data.time==0){
				if(this.data.recipe){
					this.container.getSlot("DecSlot1").id=this.data.recipe.outputId;
					this.container.getSlot("DecSlot1").data=this.data.recipe.outputData;
						this.container.getSlot("DecSlot0").count-=this.data.recipe.inputCount;
							this.container.getSlot("DecSlot1").count+=this.data.recipe.outputCount;
					this.data.recipe=null;
						this.container.validateAll();
					
				}
				if(this.data.recipe==null){
				for(var i in concreteRecipe){
					if(this.container.getSlot("DecSlot0").id==concreteRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=concreteRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==concreteRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- concreteRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==concreteRecipe[i].inputData||concreteRecipe[i].inputData==-1){
								this.data.recipe=concreteRecipe[i];
							this.data.time=concreteRecipe[i].time;
							}
								
						}
					}	
				}
			}
			}
		if(content){
			if(this.data.time){
					this.container.setScale("Progress",Math.floor(22*(1-this.data.time/this.data.recipe.time))/22);
				}else{
					this.container.setScale("Progress",0);
				}
		}
		if(this.data.time>0){

			if(this.container.getSlot("DecSlot1").count>64-this.data.recipe.outputCount||this.container.getSlot("DecSlot0").id!=this.data.recipe.inputId||this.container.getSlot("DecSlot0").count<this.data.recipe.inputCount){
				this.data.time=0;
				this.data.recipe=null;
			}else{
						if(this.container.getSlot("DecSlot0").data==this.data.recipe.inputData||this.data.recipe.inputData==-1){
								this.data.time--;
							
						}
					}
				}
	},
	getGuiScreen: function(){
		return decGui;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addConcreteRecipeQ:addConcreteRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});








StorageInterface.createInterface(BlockID.concrete_plant, {
    slots: {
        "DecSlot0": {input: true},
        "DecSlot1": {output: true}
        }});
        




// file: cobb.js

IDRegistry.genBlockID("cobb_farm");

Block.createBlockWithRotation("cobb_farm",[ {name: "cobblestone generator", texture: [["pili_block", 0],["pili_block", 0],["pili_farm",0],["pili_cobb",0],["pili_farm",0],["pili_farm",0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.cobb_farm, "stone", 1, true);    

Translation.addTranslation("cobblestone generator", {ru: "генератор булыжника"});

Recipes.addShaped({id: BlockID.cobb_farm, count: 1, data: 0}, [
        " b ",
        "acd",
        " f "
        ], ["a", 325, 8, "b", 274, -1, "c", BlockID.basic_machine_block, -1, "d", 325, 10, "f", 54, -1]);



var cobbGUI = new UI.StandartWindow({
    standart: {
  header: {text: {text: "cobblestone generator"}},
        inventory: {standart: true},
        background: {standart: true}},
    
    
    drawing: [
		{type: "bitmap", x: 345, y: 125, bitmap: "cobb_scale0",scale: 5}],
    
    elements: {
   
    
    "progressScale": {type: "scale", x: 345, y: 125, direction: 0, bitmap: "cobb_scale1",scale: 5},
        
        
 
    "slot0":{type:"slot",x:553,y:103,size:71},
    "slot1":{type:"slot",x:625,y:103,size:71},
    "slot2":{type:"slot",x:697,y:103,size:71},
    "slot3":{type:"slot",x:769,y:103,size:71},
    "slot4":{type:"slot",x:841,y:103,size:71},
    "slot5":{type:"slot",x:913,y:103,size:71},
         
    "slot6":{type:"slot",x:553,y:175,size:71},
    "slot7":{type:"slot",x:625,y:175,size:71},
    "slot8":{type:"slot",x:697,y:175,size:71},
    "slot9":{type:"slot",x:769,y:175,size:71},
    "slot10":{type:"slot",x:841,y:175,size:71},
    "slot11":{type:"slot",x:913,y:175,size:71},
         
    "slot12":{type:"slot",x:553,y:247,size:71},
    "slot13":{type:"slot",x:625,y:247,size:71},
    "slot14":{type:"slot",x:697,y:247,size:71},
    "slot15":{type:"slot",x:769,y:247,size:71},
    "slot16":{type:"slot",x:841,y:247,size:71},
    "slot17":{type:"slot",x:913,y:247,size:71}
    }
});


TileEntity.registerPrototype(BlockID.cobb_farm,{
	defaultValues:{
	work:0,
	progress: 0
	},
	
	
	tick:function(){
StorageInterface.checkHoppers(this);
if(this.data.progress<91){           
if(this.data.progress++ >= 90){	this.container.validateAll();
this.data.progress = 0;
this.addResult("slot",4,1,0);
}}  

                 
else {
this.data.progress = 0;
}
this.container.setScale("progressScale", this.data.progress / 90);
	},  
	
	
	     
         
addResult: function(area, id, count, data){
for (var i = 0; i < 18; i++){
var slot = this.container.getSlot(area + i);
if (slot.id == id && slot.data == data || slot.id == 0){
var add = Math.min(64 - slot.count, count);
                slot.count += add;
                slot.id = id;
                slot.data = data;
                count -= add;
                if (count == 0){
                    break;
                }
            }
        }
        if (count > 0){
            World.drop(this.x + .5, this.y + 1, this.z + .5, id, count, data);
        }
    },  
    getGuiScreen: function () {
        return cobbGUI;
    }
});

StorageInterface.createInterface(BlockID.cobb_farm, {
    slots: {
      
        "slot0": {output: true},
        "slot1": {output: true},
        "slot2": {output: true},
        "slot3": {output: true},
        "slot4": {output: true},
        "slot5": {output: true},
        "slot6": {output: true},
        "slot7": {output: true},
        "slot8": {output: true},
        "slot9": {output: true},
        "slot10": {output: true},
        "slot11": {output: true},
        "slot12": {output: true},
        "slot13": {output: true},
        "slot14": {output: true},
        "slot15": {output: true},
        "slot16": {output: true},
        "slot17": {output: true}
        }});





// file: crusher.js

IDRegistry.genBlockID("pili_crusher");

Block.createBlockWithRotation("pili_crusher",[ {name: "crusher", texture: [["pili_block", 0],["pili_block", 0],["pili_block",0],["pili_crusher",0],["pili_block",0],["pili_block",0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.pili_crusher, "stone", 1, true);    

Translation.addTranslation("crusher", {ru: "дробитель"});

Recipes.addShaped({id: BlockID.pili_crusher, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 318, -1, "b", 45, -1, "c", BlockID.basic_machine_block, -1]);





var crusherpiliUI = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Crusher"
			},
			},
			minHeight: 700,
			inventory: {
				standart: true
		}, 
		background: { 
		standart: true 
		}
},
    
    drawing: [
	{type: "bitmap", x: 585, y: 225, bitmap: "progress0", scale: 5}
	],
    
	elements: {
		"DecSlot0": {type: "slot", x: 445, y: 210, size: 100},
        "DecSlot1": {type: "slot", x: 735, y: 210-15, size: 130},
        "Progress": {type: "scale", x: 585, y: 225, direction: 0, scale: 5, bitmap: "progress1"}
			}
		
});


var crusherpiliRecipe=[];


addcrusherpiliRecipe(4, 0, 13, 0, 90,1,1);
addcrusherpiliRecipe(13, 0, 3, 0, 90,1,1);
addcrusherpiliRecipe(3, 0, 12, 0, 90,1,1);

addcrusherpiliRecipe(16, 0, 263, 0, 90,1,4);
addcrusherpiliRecipe(15, 0, ItemID.raw_iron, 0, 90,1,2);
addcrusherpiliRecipe(14, 0, ItemID.raw_gold, 0, 90,1,2);
addcrusherpiliRecipe(56, 0, 264, 0, 90,1,4);
addcrusherpiliRecipe(129, 0, 388, 0, 90,1,4);
addcrusherpiliRecipe(153, 0, 406, 0, 90,1,4);
addcrusherpiliRecipe(352, 0, 351, 15, 90,1,4);
addcrusherpiliRecipe(369, 0, 377, 0, 90,1,4);

function addcrusherpiliRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	crusherpiliRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addCrusherRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	crusherpiliRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.pili_crusher, {
	defaultValues: {
		time:0,
		recipe:null,
		id:0,
		data:0,
		rotation:0
	},
	animation:null,
	tick: function(){
	StorageInterface.checkHoppers(this);
        
		var content = this.container.getGuiContent(); 
		if(this.data.id!=this.container.getSlot("DecSlot0").id||this.data.data!=this.container.getSlot("DecSlot0").data){
		
		}	
			if(this.data.time==0){
				if(this.data.recipe){
					this.container.getSlot("DecSlot1").id=this.data.recipe.outputId;
					this.container.getSlot("DecSlot1").data=this.data.recipe.outputData;
						this.container.getSlot("DecSlot0").count-=this.data.recipe.inputCount;
							this.container.getSlot("DecSlot1").count+=this.data.recipe.outputCount;
					this.data.recipe=null;
						this.container.validateAll();
					
				}
				if(this.data.recipe==null){
				for(var i in crusherpiliRecipe){
					if(this.container.getSlot("DecSlot0").id==crusherpiliRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=crusherpiliRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==crusherpiliRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- crusherpiliRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==crusherpiliRecipe[i].inputData||crusherpiliRecipe[i].inputData==-1){
								this.data.recipe=crusherpiliRecipe[i];
							this.data.time=crusherpiliRecipe[i].time;
							}
								
						}
					}	
				}
			}
			}
		if(content){
			if(this.data.time){
					this.container.setScale("Progress",Math.floor(91*(1-this.data.time/this.data.recipe.time))/91);
				}else{
					this.container.setScale("Progress",0);
				}
		}
		if(this.data.time>0){

			if(this.container.getSlot("DecSlot1").count>64-this.data.recipe.outputCount||this.container.getSlot("DecSlot0").id!=this.data.recipe.inputId||this.container.getSlot("DecSlot0").count<this.data.recipe.inputCount){
				this.data.time=0;
				this.data.recipe=null;
			}else{
						if(this.container.getSlot("DecSlot0").data==this.data.recipe.inputData||this.data.recipe.inputData==-1){
								this.data.time--;
							
						}
					}
				}
	},
	getGuiScreen: function(){
		return crusherpiliUI;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addCrusherRecipeQ:addCrusherRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});








StorageInterface.createInterface(BlockID.pili_crusher, {
    slots: {
        "DecSlot0": {input: true},
        "DecSlot1": {output: true}
        }});
        




// file: furnace.js

var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };


IDRegistry.genBlockID("pili_furnace");

Block.createBlockWithRotation("pili_furnace",[ {name: "furnace", texture: [["pili_block", 0],["pili_block", 0],["pili_block",0],["pili_fur",0],["pili_block",0],["pili_block",0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.pili_furnace, "stone", 1, true);    

Translation.addTranslation("furnace", {ru: "Печка"});


Recipes.addShaped({id: BlockID.pili_furnace, count: 1, data: 0}, [
        "aaa",
        "bcd",
        "aaa"
        ], ["a", BlockID.basic_machine_block, -1, "b", 61, -1, "c", 61, -1, "d", 61, -1]);






var piliFurUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
     "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});



StorageInterface.createInterface(BlockID.pili_furnace, {
    slots: {
        "slotSource": {input: true, side: "up"},
        "slotResult": {output: true},
         "slotFuel": {input: true, side: "horizontal"}
        }});
        





TileEntity.registerPrototype(BlockID.pili_furnace, {
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return piliFurUI;
	},
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(FURNACE_FUEL_MAP[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
	StorageInterface.checkHoppers(this);
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 50){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		else if(result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 50);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURNACE_FUEL_MAP[fuelSlot.id];
			if(burn){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
			if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
				fuelSlot.id = empty.id;
				fuelSlot.data = empty.data;
				return 20000;
			}
		}
		return 0;
	}
});








