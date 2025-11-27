IDRegistry.genBlockID("grindstone");
Block.createBlock("grindstone", [{"name":"Grindstone","texture":[["stone",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(6/16, 0/16, 1/16, 10/16, 10/16, 4/16, "logvinov", 0);
model.addBox(6/16, 0/16, 12/16, 10/16, 10/16, 15/16, "logvinov", 0);
model.addBox(7/16, 7/16, 0/16, 9/16, 8/16, 16/16, "planks", 0);
model.addBox(3/16, 3/16, 5/16, 13/16, 12/16, 11/16, "stone", 0);
model.addBox(2/16, 4/16, 5/16, 3/16, 11/16, 11/16, "stone", 0);
model.addBox(4/16, 12/16, 5/16, 12/16, 13/16, 11/16, "stone", 0);
model.addBox(4/16, 2/16, 5/16, 12/16, 3/16, 11/16, "stone", 0);
model.addBox(13/16, 4/16, 5/16, 14/16, 11/16, 11/16, "stone", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.grindstone, -1, render);

Block.setBlockShape(BlockID.grindstone, {"x":0.125,"y":0,"z":0}, {"x":0.875,"y":0.8125,"z":1});

var guiGrindstone = new UI.StandartWindow({
standart:
{
        header:
        {
            text: { text: "Grindstone / Точильный камень"},
        },
        inventory: {standart: true},
        background: {standart: true},
        minHeight: 500,
},
params:
{
},
drawing:
[
],
elements:
{
    "progressScale":
    {
        type: "scale",
        x: 578,
        y: 219,
        scale: 3,
        bitmap: "furnace_bar_scale",
        invert: false,
        direction: 0,
        overlay: "furnace_bar_backgroun",
        overlay_scale: 3,
        overlayOffset: { x:0 , y: 0},
    },
    "slotInput":
    {
        type: "slot",
        x: 466,
        y: 210,
        size: 60,
    },
    "slotOutput":
    {
        type: "slot",
        x: 707,
        y: 211,
        size: 60,
    },
}
});

TileEntity.registerPrototype(BlockID.grindstone, {
getGuiScreen: function(){
return guiGrindstone;
},

tick: function(){
var slotInput = this.container.getSlot("slotInput")
var slotOutput = this.container.getSlot("slotOutput")  
  
var recipe = Grindstone.getRecipe(slotInput.id, slotInput.data);
if(recipe){
this.container.setSlot("slotOutput", recipe[0], recipe[1], recipe[2]);
this.container.clearSlot("slotInput");
}
}
});
Callback.addCallback("PostLoaded", function(){
Grindstone.addRecipe([ItemID.stone_knife, 0], [ItemID.stone_sharpened_knife, 1, 0]);
}); 