IDRegistry.genBlockID("template_creator");
Block.createBlock("template_creator", [{"name":"Template Creator","texture":[["stone",0]],"inCreative":true}]);

Block.setBlockShape(BlockID.template_creator, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1})


var guiTemplateCreator = new UI.StandartWindow({
standart: 
{
        header: 
        { 
            text: { text: "Template Creator / Создатель шаблонов"},
        },
        inventory: { standart: true},
        background: {standart: true},
        minHeight: 700,
},
params: 
{
},
drawing: 
[
],
elements: 
{
    "costClay": 
    {
        type: "image",
        x: 400,
        y: 100,
        scale: 2,
        bitmap: "cost",
    },
    "slotOutput": 
    {
        type: "slot",
        x: 595,
        y: 284,
        size: 60,
    },
    "pickButton": 
    {  
        type: "button",
        x: 715,
        y: 188,
        scale: 1,
        bitmap: "pickButton",
        bitmap2: "butto",
        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.pick_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "axeButton": 
    {
        type: "button",
        x: 715,
        y: 88,
        scale: 1,
        bitmap: "axeButton",
        bitmap2: "butto",
                clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.axe_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "shovelButton": 
    {
        type: "button",
        x: 716,
        y: 283,
        scale: 1,
        bitmap: "shovelButton",
        bitmap2: "butto",
                clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.shovel_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "swordButton": 
    {
        type: "button",
        x: 716,
        y: 389,
        scale: 1,
        bitmap: "swordButton",
        bitmap2: "butto",
                        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.sword_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
    "knifeButton": 
    {
        type: "button",
        x: 715,
        y: 489,
        scale: 1,
        bitmap: "knifeButton",
        bitmap2: "butto",
                        clicker: {
            onClick: function(container, tile){ 
                let slotOutput = container.getSlot("slotOutput"); 
            for(i = 0; i < 36; i ++){ 
                let slot = Player.getInventorySlot(i + 9); 
            if (slot.id == 337 && slot.count >= 10){ 
                Player.setInventorySlot(i + 9, 337, slot.count - 10, 0)  
            if (!slot.count) slot.id = 0 
                container.setSlot("slotOutput", ItemID.knife_template, slotOutput.count + 1, 0), 
                slot.count -= 10 
            break; 
            } 
        } 
        }
      }
    },
}
});
TileEntity.registerPrototype(BlockID.template_creator, {
getGuiScreen: function(){
return guiTemplateCreator;
},
});

