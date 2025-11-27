TileEntity.registerPrototype(BlockID.rec_machine, {
defaultValues: {
progress: 0
},
tick: function(){
if(this.container.getSlot("coal").id == 263 && this.container.getSlot("coal").data == 0 && this.data.progress < 1.01){
if(this.container.getSlot("result").id == 0 || this.container.getSlot("result").id == ItemID.plasticItem){
this.data.progress = this.data.progress+0.01;
}
} else{
if(this.data.progress >= 1){
var coalSlot = this.container.getSlot("coal");
var resSlot = this.container.getSlot("result");
this.container.setSlot("coal", 263, coalSlot.count-1, coalSlot.data);
this.container.validateSlot("coal");
this.container.setSlot("result", ItemID.plasticItem, resSlot.count+1, 0);
this.data.progress = 0;
} else{
this.data.progress = 0;
}
}
this.container.setScale("scale", this.data.progress);
},
click: function(){

},
getGuiScreen: function(){
return rmui;
}
});

TileEntity.registerPrototype(BlockID.toolBench, {
defaultValues: {

},
tick: function(){
var formSlot = this.container.getSlot("form");
var stickSlot = this.container.getSlot("stick");
var plasticSlot = this.container.getSlot("plastic");
var resultSlot = this.container.getSlot("result");
if(formSlot.id == ItemID.pickaxeForm || formSlot.id == ItemID.swordForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticPickaxe || resultSlot.id == ItemID.plasticSword){
if(formSlot.id == ItemID.pickaxeForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticPickaxe){
var item = ItemID.plasticPickaxe;
} else{
var item = null;
}
} else if(formSlot.id == ItemID.swordForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticSword){
var item = ItemID.plasticSword;
} else{
var item = null;
}
}
if(stickSlot.id == 280 && item != null){
if(plasticSlot.id == ItemID.liquidPlastic){
this.container.setSlot("form", formSlot.id, formSlot.count-1, formSlot.data);
this.container.setSlot("stick", 280, stickSlot.count-1, 0);
this.container.setSlot("plastic", ItemID.liquidPlastic, plasticSlot.count-1, plasticSlot.data);
this.container.validateAll();
this.container.setSlot("result", item, resultSlot.count+1, 0);
}
}
}
}
},
click: function(id){
if(id == ItemID.hammer){
return false;
} else{
alert("You must have a hammer to make your own tools");
return true;
}
},
getGuiScreen: function(){
return tbui;
}
});

TileEntity.registerPrototype(BlockID.bomb,{
destroyBlock: function(c){
World.explode(c.x, c.y, c.z, 3, true);
}
});