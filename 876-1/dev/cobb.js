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

