let __processing_clay_chunk = {
    __recipes: {},
    __registerClayRecipe: function(item, form){
        let key = "";
        for(var i in form)key+=form[i];
        this.__recipes[key] = item;
    },
    __graphics: {
        __create_processing_ui: function(){
            let __clay_cutter_ui = {
                location: {
                    x: 0,
                    y: 0,
                    width: 1000,
                    height: 1000
                },        
                drawing: [
                    { type: "background", color: 0 },
                    { type: "bitmap", x: 218, y: 50, bitmap: "background_classic", scale: 3.2 },
                    { type: "bitmap", x: 580, y: 228, bitmap: "arrow_bar_background", scale: 4 },
                ],
                elements: {
                    "closeButton": {
                        type: "button", x: 727, y: 60, bitmap: "close_button_small", scale: 3.2, clicker: {
                            onClick: function (container) {
                                container.close();
                            }
                        }
                    },
                    "resultSlot": {
                        type: "slot", "bitmap": "default_slot", x: 680, y: 220, size: 80, clicker: {
                            onClick: function(container){
                                let content = container.getGuiContent();
                                let slot = container.getSlot("resultSlot");
                                if(slot.id > 0 && slot.count > 0){
                                    World.drop(Player.getPosition().x, Player.getPosition().y, Player.getPosition().z, slot.id, slot.count, slot.data);                        
                                    for(var i = 0; i < 5; i ++){
                                        for(var j = 0; j < 5; j ++){
                                            content.elements["claySlot" + i + "x" + j] = null;
                                        }
                                    }                                    
                                    container.clearSlot("resultSlot");
                                }                                
                            }
                        }
                    }
                }
            };
            let use_clay = false;
            for(var i = 0; i < 5; i ++){
                for(var j = 0; j < 5; j ++){
                    let id = "claySlot" + i + "x" + j;
                    __clay_cutter_ui.elements[id] = {
                        type: "slot", 
                        bitmap: "bitmap_clay",
                        x: 250 + j * 65,
                        y: 100 + i * 65,
                        size: 65,
                        clicker: {
                            onClick: function(container){
                                var content = container.getGuiContent();
                                content.elements[id].bitmap = "bitmap_clay_dark";
        
                                let key = "";                        
                                for(var i = 0; i < 5; i ++){
                                    for(var j = 0; j < 5; j ++){
                                        content.elements["claySlot" + i + "x" + j].bitmap == "bitmap_clay" ? key += 1: key += 0;
                                    }
                                }

                                if(__processing_clay_chunk.__recipes[key]){
                                    let item = __processing_clay_chunk.__recipes[key];
                                    container.setSlot("resultSlot", item.id, item.count, item.data);
                                }
                                else {
                                    container.clearSlot("resultSlot");
                                }
        
                                if(!use_clay){
                                    use_clay = true;
                                    Player.decreaseCarriedItem(1);
                                }
                            }
                        }
                    }
                }
            }            
            return  new UI.Window(__clay_cutter_ui);    
        }
    }
}

/**
 * Creates a clay processing recipe
 * @param {object} item { id, count, data } result
 * @param {object} form[] recipe form
 */
Recipe.registerClayProcessingRecipe = function (item, form) {
    __processing_clay_chunk.__registerClayRecipe(item, form);
};

/**
 * Creates a clay processing window
 */
Graphics.createClayProcessingUI = function(){
    return __processing_clay_chunk.__graphics.__create_processing_ui();
};

Item.registerUseFunction(337, function (coords, item, block) {
    if (item.count >= 5) {
        new UI.Container().openAs(Graphics.createClayProcessingUI());
    }
});