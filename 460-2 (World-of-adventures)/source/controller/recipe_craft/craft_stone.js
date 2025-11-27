let __processing_stone_chunk = {
    __recipes: {},
    __registerStoneRecipe: function(item, form){
        let key = "";
        for(var i in form)key+=form[i];
        this.__recipes[key] = item;
    },
    __graphics: {
        __create_processing_ui: function(){
            let __stone_cutter_ui = {
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
                                            content.elements["stoneSlot" + i + "x" + j] = null;
                                        }
                                    }                                    
                                    container.clearSlot("resultSlot");
                                }                                
                            }
                        }
                    }
                }
            };
            let use_stone = false;
            for(var i = 0; i < 5; i ++){
                for(var j = 0; j < 5; j ++){
                    let id = "stoneSlot" + i + "x" + j;
                    __stone_cutter_ui.elements[id] = {
                        type: "slot", 
                        bitmap: "bitmap_stone",
                        x: 250 + j * 65,
                        y: 100 + i * 65,
                        size: 65,
                        clicker: {
                            onClick: function(container){
                                var content = container.getGuiContent();
                                content.elements[id] = null;
        
                                let key = "";                        
                                for(var i = 0; i < 5; i ++){
                                    for(var j = 0; j < 5; j ++){
                                        content.elements["stoneSlot" + i + "x" + j] ? key += 1: key += 0;
                                    }
                                }

                                if(__processing_stone_chunk.__recipes[key]){
                                    let item = __processing_stone_chunk.__recipes[key];
                                    container.setSlot("resultSlot", item.id, item.count, item.data);
                                }
                                else {
                                    container.clearSlot("resultSlot");
                                }
        
                                if(!use_stone){
                                    use_stone = true;
                                    Player.decreaseCarriedItem(1);
                                }
                            }
                        }
                    }
                }
            }            
            return  new UI.Window(__stone_cutter_ui);    
        }
    }
}

/**
  * Creates a stone crafting recipe
  * @param { object } item { id, count, data } result
  * @param { object } form[] recipe form
  */
Recipe.registerStoneProcessingRecipe = function (item, form) {
    __processing_stone_chunk.__registerStoneRecipe(item, form);
};

/**
 * Creates a stone processing window
 */
Graphics.createStoneProcessingUI = function () {
    return __processing_stone_chunk.__graphics.__create_processing_ui();
};