var SBInventory = {
    isEnabled: false,
    container: new UI.Container(),
    windowContainer: new UI.Container(),
    buttonWindow: new UI.Window({
        location: {
            x: 5,
            y: 185,
            width: 50,
            height: 50
        },
        drawing:[
            {type: "background", color: 0}
        ],
        elements:{
            "fuckButton":{type: "button", scale: 33, bitmap: "knopka", clicker:{onClick:function(){
                SBInventory.windowContainer.openAs(SBInventory.Window);
            }}}
        }
    }), 
    Window: new UI.StandartWindow({
        standart:{
			header: {text: {text: "Crafting"}},
            backgroud:{color: android.graphics.Color.parseColor("#c6c6c6")},
            inventory:{
                standart: true
            }
        },
        elements:{
		"inputSlot0": {type: "slot", x: 430, y: 190, size: 81}, 
		"inputSlot1": {type: "slot", x: 520, y: 190, size: 81},
		"inputSlot2": {type: "slot", x: 430, y: 280, size: 81},
		"inputSlot3": {type: "slot", x: 520, y: 280, size: 81},
		"image_0": {type: "image", x: 611, y: 241, bitmap: "arrow", scale: 4.5},
		"outputSlot": {type: "slot", x: 720, y: 232, size: 81, isValid:RecipeTE.outputSlotValid}
        } 
    }),
    open:function(){
        if(!this.isEnabled){
            this.container.openAs(this.buttonWindow);
            this.isEnabled = true;
        }
    },
    close:function(){
        if(this.isEnabled){
            this.container.close();
            this.isEnabled = false;
        }
    }
};

SBInventory.buttonWindow.setAsGameOverlay(true);

Callback.addCallback("NativeGuiChanged", function (screenName) {
    if(screenName == "survival_inventory_screen") {
        SBInventory.open();
    }else if(SBInventory.isEnabled){
        SBInventory.close();
    }
});


var getSlot = SBInventory.windowContainer.getSlot;
var clearSlot = SBInventory.windowContainer.clearSlot;
Callback.addCallback("tick", function (){
if(SBInventory.isEnabled&&SBInventory.windowContainer.isOpened()){
   if(SBInventory.windowContainer.getSlot("inputSlot0").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot1").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot2").id == 4 &&
      SBInventory.windowContainer.getSlot("inputSlot3").id == 4
){
      SBInventory.windowContainer.clearSlot("inputSlot0");
      SBInventory.windowContainer.clearSlot("inputSlot1");
      SBInventory.windowContainer.clearSlot("inputSlot2");
      SBInventory.windowContainer.clearSlot("inputSlot3");
      SBInventory.windowContainer.setSlot("outputSlot", BlockID.craftingtable, 1, 0);
}
   if(SBInventory.windowContainer.getSlot("inputSlot0").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot1").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot2").id == ItemID.stonepebble &&
      SBInventory.windowContainer.getSlot("inputSlot3").id == ItemID.stonepebble
){
      SBInventory.windowContainer.clearSlot("inputSlot0");
      SBInventory.windowContainer.clearSlot("inputSlot1");
      SBInventory.windowContainer.clearSlot("inputSlot2");
      SBInventory.windowContainer.clearSlot("inputSlot3");
      SBInventory.windowContainer.setSlot("outputSlot", 4, 1, 0);
}
}
});

