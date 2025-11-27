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

