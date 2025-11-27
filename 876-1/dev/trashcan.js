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
