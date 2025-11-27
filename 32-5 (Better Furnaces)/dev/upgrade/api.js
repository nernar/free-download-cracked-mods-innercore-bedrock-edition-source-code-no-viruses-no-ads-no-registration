const Upgrade = {  
    
    data: {},
    
    //fuel, ore, storage, liquid, factory, pack
    register: function(id, type, params){
        this.data[id] = {type: type, params: params};
    },
    
    isUpgrade: function(id){
        return id in this.data;
    },
    
    getData: function(id){
        return this.data[id];
    },
    
    ores: {14: true, 15: true},
    isMetalOre: function(id){
        return this.ores[id] || false;
    }
    
};


Callback.addCallback("PostLoaded", function(){
    for(let key in BlockID){
        if(key.match(/ore/)){
            const result = Recipes.getFurnaceRecipeResult(BlockID[key], -1);
            if(result && IDRegistry.getNameByID(result.id).match(/ingot/)){
                Upgrade.ores[BlockID[key]] = true;
            }
        }
    }
});


const Factory = {
    
    font: {color: Color.WHITE, size: 50, shadow: 0.5},
    
    genCode: function(array){
        return (array[0] << 4) | (array[1] << 2) | array[2];
    },
    
    getModeArray: function(code){
        return [code >> 4, code >> 2 & 3, code & 3];
    },
    
    direction: [[5, 3, 4], [4, 2, 5], [2, 5, 3], [3, 4, 2]],
    
    getDirection: function(index, meta, mode){
        if(mode == 3){
            return index == 2 ? 0 : 1;
        }
        return this.direction[meta][mode];
    },
    
    getDirectionArray: function(code, meta){
        return this.getModeArray(code).map(function(value, index){
            return Factory.getDirection(index, meta, value);
        });
    },
    
    getContainers: function(coords, array){
        return array.map(function(value){
            return StorageInterface.getNearestContainers(coords, value)[value];
        });
    },
    
    modeText: ["Input Direction:  ", "Fuel Input Direction:  ", "Output Direction:  "],
    modeInput: ["Left", "Back", "Right", "Top"],
    modeOutput: ["Left", "Back", "Right", "Bottom"],
    
    getText: function(index, mode){
        return this.modeText[index] + this[index == 2 ? "modeOutput" : "modeInput"][mode];
    },
    
    clickFunc: {onClick: function(o1, o2, elem){
        const item = FactoryElements.get("slot").source;
        const modeArray = Factory.getModeArray(item.data);
        const index = {170: 0, 310: 1, 450: 2}[elem.y];
        modeArray[index] = modeArray[index] + 1 & 3;
        item.data = Factory.genCode(modeArray);
        FactoryElements.get("text" + index).onBindingUpdated("text", Factory.getText(index, modeArray[index]));
    }}
    
};


const FactoryWindow = new UI.Window({
    location: {x: 200, y: 50, width: 600, height: 360},
    drawing: [
        {type: "background", color: Color.TRANSPARENT},
        {type: "frame", x: 0, y: 0, width: 1000, height: 600, bitmap: "default_frame_4", bg: Color.parseColor("#a2928c"), scale: 4}
    ],
    elements: {
        close: {type: "closeButton", x: 910, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 5},
        title: {type: "text", x: 40, y: 50, font: Factory.font},
        slot: {type: "slot", x: 750, y: 20, size: 120, visual: true, source: {id: 0, count: 0, data: 0}},
        text0: {type: "text", x: 80, y: 200, z: 1, font: Factory.font},
        text1: {type: "text", x: 80, y: 340, z: 1, font: Factory.font},
        text2: {type: "text", x: 80, y: 480, z: 1, font: Factory.font},
        button0: {type: "button", x: 40, y: 170, bitmap: "bfurnace_button_up", bitmap2: "bfurnace_button_down", scale: 7.2, clicker: Factory.clickFunc},
        button1: {type: "button", x: 40, y: 310, bitmap: "bfurnace_button_up", bitmap2: "bfurnace_button_down", scale: 7.2, clicker: Factory.clickFunc},
        button2: {type: "button", x: 40, y: 450, bitmap: "bfurnace_button_up", bitmap2: "bfurnace_button_down", scale: 7.2, clicker: Factory.clickFunc}
    }
});

const FactoryElements = FactoryWindow.getElements();
FactoryWindow.setBlockingBackground(true);


Callback.addCallback("ItemUse", function(coords, item){
    const upgData = Upgrade.getData(item.id);
    upgData && upgData.type == "factory" && FactoryWindow.open();
});


FactoryWindow.setEventListener({
    onOpen: function(){
        const item = Player.getCarriedItem();
        const upgData = Upgrade.getData(item.id);
        const modeArray = Factory.getModeArray(item.data);
        FactoryElements.get("slot").onBindingUpdated("source", item);
        FactoryElements.get("title").onBindingUpdated("text", Item.getName(item.id));
        FactoryElements.get("text0").onBindingUpdated("text", upgData.params.input ? Factory.getText(0, modeArray[0]) : "");
        FactoryElements.get("text1").onBindingUpdated("text", upgData.params.inputFuel ? Factory.getText(1, modeArray[1]) : "");
        FactoryElements.get("text2").onBindingUpdated("text", upgData.params.output ? Factory.getText(2, modeArray[2]) : "");
        FactoryElements.get("button0").setPosition(upgData.params.input ? 40 : 1000, 170);
        FactoryElements.get("button1").setPosition(upgData.params.inputFuel ? 40 : 1000, 310);
        FactoryElements.get("button2").setPosition(upgData.params.output ? 40 : 1000, 450);
    },
    onClose: function(){  
        const item = FactoryElements.get("slot").source;
        Player.setCarriedItem(item.id, 1, item.data);
    }
});