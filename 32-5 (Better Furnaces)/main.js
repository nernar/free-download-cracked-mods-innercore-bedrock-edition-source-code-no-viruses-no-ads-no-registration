/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: header.js

IMPORT("TileRender");
IMPORT("StorageInterface");
IMPORT("BackpackAPI");
IMPORT("EnhancedRecipes");

const Color = android.graphics.Color;
const canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");


UI.TextureSource.put("bfurnace_button_up", UI.FrameTextureSource.get("default_button_up").expandAndScale(128, 16, 1, Color.parseColor("#a1918c")));
UI.TextureSource.put("bfurnace_button_down", UI.FrameTextureSource.get("default_button_down").expandAndScale(128, 16, 1, Color.parseColor("#706561")));




// file: upgrade/api.js

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




// file: upgrade/item.js

IDRegistry.genItemID("bfurnace_fuel");
Item.createItem("bfurnace_fuel", "Fuel Efficiency Upgrade", {name: "bfurnace_fuel", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.bfurnace_fuel, 128);
Recipes2.addShaped(ItemID.bfurnace_fuel, "aba:bcb:aba", {a: 264, b: 368, c: {id: 263}});
Upgrade.register(ItemID.bfurnace_fuel, "fuel", {modifier: 2, isBreakable: true});

IDRegistry.genItemID("bfurnace_advfuel");
Item.createItem("bfurnace_advfuel", "Advanced Fuel Efficiency Upgrade", {name: "bfurnace_fuel", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_advfuel, "aba:cdc:aca", {a: 264, b: 370, c: 381, d: {id: ItemID.bfurnace_fuel}});
Upgrade.register(ItemID.bfurnace_advfuel, "fuel", {modifier: 2});

IDRegistry.genItemID("bfurnace_ore");
Item.createItem("bfurnace_ore", "Ore Processing Upgrade", {name: "bfurnace_ore", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.bfurnace_ore, 512);
Recipes2.addShaped(ItemID.bfurnace_ore, "aaa:aba:aca", {a: {id: 1}, b: 318, c: 33});
Upgrade.register(ItemID.bfurnace_ore, "ore", {modifier: 2, isBreakable: true});

IDRegistry.genItemID("bfurnace_advore");
Item.createItem("bfurnace_advore", "Advanced Ore Processing Upgrade", {name: "bfurnace_ore", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_advore, "aba:cdc:aba", {a: 264, b: 33, c: 49, d: {id: ItemID.bfurnace_ore}});
Upgrade.register(ItemID.bfurnace_advore, "ore", {modifier: 2});

IDRegistry.genItemID("bfurnace_storage");
Item.createItem("bfurnace_storage", "Storage Upgrade", {name: "bfurnace_storage", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_storage, "aba:bcb:aba", {a: 1, b: 20, c: 54});
Upgrade.register(ItemID.bfurnace_storage, "storage");

IDRegistry.genItemID("bfurnace_liquid");
Item.createItem("bfurnace_liquid", "Liquid Upgrade", {name: "bfurnace_liquid", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_liquid, "aoa:bcb:aba", {a: 265, b: 20, c: {id: 325}});
Upgrade.register(ItemID.bfurnace_liquid, "liquid", {amount: 4});

IDRegistry.genItemID("bfurnace_output");
Item.createItem("bfurnace_output", "Auto-Output Upgrade", {name: "bfurnace_factory", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_output, "aoa:bcb:aoa", {a: 265, b: 266, c: 20});
Upgrade.register(ItemID.bfurnace_output, "factory", {output: true});

IDRegistry.genItemID("bfurnace_input");
Item.createItem("bfurnace_input", "Auto-Input Upgrade", {name: "bfurnace_factory", meta: 1}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_input, "aba:aca:aba", {a: 266, b: 20, c: 264});
Upgrade.register(ItemID.bfurnace_input, "factory", {input: true, inputFuel: true});

IDRegistry.genItemID("bfurnace_factory");
Item.createItem("bfurnace_factory", "Factory Upgrade", {name: "bfurnace_factory", meta: 2}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_factory, "aba:aca:ada", {a: 264, b: ItemID.bfurnace_output, c: 20, d: ItemID.bfurnace_input});
Upgrade.register(ItemID.bfurnace_factory, "factory", {input: true, inputFuel: true, output: true});

IDRegistry.genItemID("bfurnace_pack");
Item.createItem("bfurnace_pack", "Upgrade Package", {name: "bfurnace_pack", meta: 0}, {stack: 1});
Recipes2.addShaped(ItemID.bfurnace_pack, "aba:oco:aba", {a: 266, b: 58, c: 54});
Upgrade.register(ItemID.bfurnace_pack, "pack");
BackpackRegistry.register(ItemID.bfurnace_pack, {
    slots: 3,
    inRow: 3,
    isValidItem: function(id){
        const upgData = Upgrade.getData(id);
        return upgData && upgData.type != "pack";
    }
});




// file: furnace/api.js

const ValidFunc = {
    source: function(id, count, data){
        return !!Recipes.getFurnaceRecipeResult(id, data);
    },
    fuel: function(id, count, data){
        return Recipes.getFuelBurnDuration(id, data) > 0;
    },
    result: function(){
        return false;
    }
};


const Furnace = {
    
    genTexArray: function(level, active){
        const meta = level * 3;
        return [
            ["better_furnace", meta],
            ["better_furnace", meta],
            ["better_furnace", meta],
            ["better_furnace", meta + (active ? 2 : 1)],
            ["better_furnace", meta],
            ["better_furnace", meta]
        ];
    },
    
    genTexRender: function(level, active){
        const render = new ICRender.Model();
        const model = BlockRenderer.createTexturedBlock(this.genTexArray(level, active));
        render.addEntry(model);
        return render;
    },
    
    window: new UI.StandartWindow({
        standart: {
            header: {text: {text: "Better Furnace"}},
            inventory: {standart: true},
            background: {standart: true}
        },
        drawing: [
            {type: "bitmap", x: 565, y: 175, bitmap: "bfurnace_burn_0", scale: 4},
            {type: "bitmap", x: 660, y: 170, bitmap: "bfurnace_progress_0", scale: 4}
        ],
        elements: {
            scaleBurn: {type: "scale", x: 565, y: 175, bitmap: "bfurnace_burn_1", scale: 4, direction: 1},
            scaleProgress: {type: "scale", x: 660, y: 170, bitmap: "bfurnace_progress_1", scale: 4},
            scaleLiquid: {type: "scale", x: 660, y: 240, bitmap: "bfurnace_tank", overlay: "bfurnace_tank", scale: 4, direction: 1},
            slotUpgrade0: {type: "slot", x: 350, y: 80, size: 80},
            slotUpgrade1: {type: "slot", x: 350, y: 160, size: 80},
            slotUpgrade2: {type: "slot", x: 350, y: 240, size: 80},
            slotSource: {type: "slot", x: 550, y: 80, size: 80, isValid: ValidFunc.source},
            slotFuel: {type: "slot", x: 550, y: 240, size: 80, isValid: ValidFunc.fuel},
            slotResult: {type: "slot", x: 780, y: 150, size: 100, isValid: ValidFunc.result},
            subslotSource: {type: "slot", x: 470, y: 80, size: 80, isValid: ValidFunc.source},
            subslotFuel: {type: "slot", x: 470, y: 240, size: 80, isValid: ValidFunc.fuel},
            subslotResult: {type: "slot", x: 880, y: 150, size: 100, isValid: ValidFunc.result}
        }
    }),
    
    modifier: [0.625, 0.5, 0.25, 0.04, 0.02],
    
    getSpeedModifier: function(level){
        return this.modifier[level];
    },
    
    getSmeltingTime: function(level){
        return 200 * this.modifier[level];
    }
    
};




// file: furnace/block.js

IDRegistry.genBlockID("better_furnace");
Block.createBlock("better_furnace", [
    {name: "Iron Furnace", texture: Furnace.genTexArray(0), inCreative: true},
    {name: "Gold Furnace", texture: Furnace.genTexArray(1), inCreative: true},
    {name: "Diamond Furnace", texture: Furnace.genTexArray(2), inCreative: true},
    {name: "Hell Furnace", texture: Furnace.genTexArray(3), inCreative: true},
    {name: "Extreme Furnace", texture: Furnace.genTexArray(4), inCreative: true},
]);

BlockRenderer.enableCoordMapping(BlockID.better_furnace, 0, Furnace.genTexRender(0));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 1, Furnace.genTexRender(1));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 2, Furnace.genTexRender(2));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 3, Furnace.genTexRender(3));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 4, Furnace.genTexRender(4));

TileRenderer.registerRotationModel(BlockID.better_furnace, 0, Furnace.genTexArray(0));
TileRenderer.registerRotationModel(BlockID.better_furnace, 4, Furnace.genTexArray(0, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 8, Furnace.genTexArray(1));
TileRenderer.registerRotationModel(BlockID.better_furnace, 12, Furnace.genTexArray(1, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 16, Furnace.genTexArray(2));
TileRenderer.registerRotationModel(BlockID.better_furnace, 20, Furnace.genTexArray(2, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 24, Furnace.genTexArray(3));
TileRenderer.registerRotationModel(BlockID.better_furnace, 28, Furnace.genTexArray(3, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 32, Furnace.genTexArray(4));
TileRenderer.registerRotationModel(BlockID.better_furnace, 36, Furnace.genTexArray(4, true));

Block.registerPlaceFunction(BlockID.better_furnace, function(coords, item, block){
    const place = canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
    World.setFullBlock(place.x, place.y, place.z, item);
    World.addTileEntity(place.x, place.y, place.z).data.meta = TileRenderer.getBlockRotation();
});

Block.setBlockMaterial("better_furnace", "stone", 1);
Block.setDestroyTime("better_furnace", 5);

Recipes2.addShaped({id: BlockID.better_furnace, data: 0}, "aaa:aba:aaa", {a: 265, b: 61});
Recipes2.addShaped({id: BlockID.better_furnace, data: 1}, "aaa:aba:aaa", {a: 266, b: {id: BlockID.better_furnace, data: 0}});
Recipes2.addShaped({id: BlockID.better_furnace, data: 2}, "aba:bcb:aba", {a: 20, b: 264, c: {id: BlockID.better_furnace, data: 1}});
Recipes2.addShaped({id: BlockID.better_furnace, data: 3}, "aaa:bcb:ded", {a: 378, b: 57, c: {id: BlockID.better_furnace, data: 2}, d: 112, e: 46});
Recipes2.addShaped({id: BlockID.better_furnace, data: 4}, "oao:bcb:ded", {a: 399, b: 381, c: {id: BlockID.better_furnace, data: 3}, d: 121, e: 112});




// file: furnace/tile.js

TileEntity.registerPrototype(BlockID.better_furnace, {
    
    defaultValues: {
        level: 0,
        meta: 0,  
        burn: 0,
        burnMax: 1,
        progress: 0,
        isActive: false
    },
    
    setModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.level * 8 + this.data.meta + (this.data.isActive ? 4: 0));
    },
    
    init: function(){
        this.data.level = World.getBlock(this.x, this.y, this.z).data;
        this.setModel();  
    },
    
    destroy: function(){
        BlockRenderer.unmapAtCoords();
    },
    
    setActive: function(isActive){
        if(this.data.isActive != isActive){
            this.data.isActive = isActive;
            this.setModel();
        }
    }, 
    
    getGuiScreen: function(){
        return Furnace.window;
    },
    
    getAllUpgrades: function(){
        const upgrades = {};
        let slotUpg;
        let upgData;
        for(let i = 0; i < 3; i++){
            slotUpg = this.container.getSlot("slotUpgrade" + i);
            upgData = Upgrade.getData(slotUpg.id);
            if(!upgData || upgData.type in upgrades){
                continue;
            }
            if(upgData.type == "pack" && BackpackRegistry.isBackpack(slotUpg.id)){
                const backpack = BackpackRegistry.containers["d" + slotUpg.data];
                const slotCount = BackpackRegistry.prototypes[slotUpg.id].slots;
                let slot;
                for(let j = 1; j <= slotCount; j++){
                    slot = backpack.getSlot("slot" + j);
                    upgData = Upgrade.getData(slot.id);
                    if(upgData && !(upgData.type in upgrades) && upgData.type != "pack"){
                        upgrades[upgData.type] = {item: slot, params: upgData.params};
                    }
                }
                continue;
            }
            upgrades[upgData.type] = {item: slotUpg, params: upgData.params};
        }
        return upgrades;
    },
    
    damagesUpgrade: function(upgrade){
        if(upgrade && upgrade.params.isBreakable && ++upgrade.item.data >= Item.getMaxDamage(upgrade.item.id)){
            upgrade.item.id = upgrade.item.count = upgrade.item.data = 0;
        }
    },
    
    setElemPos: function(storage, liquid){
        const window = this.container.getWindow();
        if(window){
            const elements = window.getElements();
            elements.get("subslotSource").setPosition(storage ? 470 : 1000, 80);
            elements.get("subslotFuel").setPosition(storage ? 470 : 1000, 240);
            elements.get("subslotResult").setPosition(storage ? 880 : 1000, 150);
            elements.get("scaleLiquid").setPosition(liquid ? 660 : 1000, 240);
            liquid && this.liquidStorage.updateUiScale("scaleLiquid", "lava");
        }
    },
    
    getLiquidFromSlot: function(slot){
        const empty = LiquidRegistry.getEmptyItem(slot.id, slot.data);
        slot.id = empty.id;
        slot.data = empty.data;
    },
    
    tick: function(){
          
        const smeltingTime = Furnace.getSmeltingTime(this.data.level);
        const slotSource = this.container.getSlot("slotSource");
        const slotFuel = this.container.getSlot("slotFuel");
        const result = Recipes.getFurnaceRecipeResult(slotSource.id, slotSource.data);
        const lavaAmount = this.liquidStorage.getAmount("lava");
        const upgrades = this.getAllUpgrades();
        let isActive = false;  
        
        this.setElemPos(!!upgrades.storage, !!upgrades.liquid);
        StorageInterface.checkHoppers(this);
        
        if(!upgrades.storage){
            this.container.dropSlot("subslotSource", this.x, this.y, this.z);
            this.container.dropSlot("subslotFuel", this.x, this.y, this.z);
            this.container.dropSlot("subslotResult", this.x, this.y, this.z);
        }
        
        if(upgrades.factory && (World.getThreadTime() & 31) == 0){
            const dirArray = Factory.getDirectionArray(upgrades.factory.item.data, this.data.meta);
            const containers = Factory.getContainers(this, dirArray);    
            upgrades.factory.params.input && containers[0] && StorageInterface.extractItemsFromContainer(this, containers[0], 1, 64);
            upgrades.factory.params.inputFuel && containers[1]&& StorageInterface.extractItemsFromContainer(this, containers[1], 2, 64);
            upgrades.factory.params.output && containers[2] && StorageInterface.putItemToContainer(this.container.getSlot("slotResult"), containers[2], dirArray[2], 64);
        }
        
        if(upgrades.liquid){
            this.liquidStorage.setLimit("lava", upgrades.liquid.params.amount);
            if(LiquidRegistry.getItemLiquid(slotFuel.id, slotFuel.data) == "lava" && slotFuel.count == 1 && lavaAmount + 1 <= upgrades.liquid.params.amount){
                this.getLiquidFromSlot(slotFuel);
                this.liquidStorage.addLiquid("lava", 1);
            }
        }
        else{
            this.liquidStorage.setLimit("lava", 0);
            this.liquidStorage.setAmount("lava", 0);
        }
        
        slotSource.id == 0 && upgrades.storage && StorageInterface.addItemToSlot(this.container.getSlot("subslotSource"), slotSource, 64);
        
        if(result){
            getFuel:
            if(--this.data.burn <= 0){
                slotFuel.id == 0 && upgrades.storage && StorageInterface.addItemToSlot(this.container.getSlot("subslotFuel"), slotFuel, 64);
                let burnTime = Recipes.getFuelBurnDuration(slotFuel.id, slotFuel.data);
                if(burnTime <= 0){
                    let amount = 0.01;
                    if(upgrades.fuel){
                        amount /= upgrades.fuel.params.modifier;
                    }
                    if(lavaAmount >= amount){
                        this.liquidStorage.getLiquid(amount);
                        this.data.burn = this.data.burnMax = 200;
                        this.damagesUpgrade(upgrades.fuel);
                        break getFuel;
                    }
                    this.data.burn = 0;
                    this.data.burnMax = -1;
                    break getFuel;
                }
                burnTime *= Furnace.getSpeedModifier(this.data.level);
                if(upgrades.fuel){
                    burnTime *= upgrades.fuel.params.modifier;
                    this.damagesUpgrade(upgrades.fuel);
                }
                burnTime |= 0;
                if(slotFuel.count == 1 && LiquidRegistry.getItemLiquid(slotFuel.id, slotFuel.data)){
                    this.getLiquidFromSlot(slotFuel);
                    this.data.burn = this.data.burnMax = burnTime;
                    break getFuel;
                }
                slotFuel.count--;
                this.container.validateSlot("slotFuel");
                this.data.burn = this.data.burnMax = burnTime;
            }
            if(this.data.burn > 0){
                this.data.progress++;
                if(this.data.progress >= smeltingTime){
                    const slotResult = this.container.getSlot("slotResult");
                    result.count = upgrades.ore && Upgrade.isMetalOre(slotSource.id) ? upgrades.ore.params.modifier : 1;
                    if(slotResult.id == 0 || slotResult.id == result.id && slotResult.data == result.data && slotResult.count + result.count <= Item.getMaxStack(result.id)){
                        this.damagesUpgrade(upgrades.ore);
                        slotResult.id = result.id;
                        slotResult.data = result.data;
                        slotResult.count += result.count;
                        slotSource.count--;
                        this.container.validateSlot("slotSource");
                        this.data.progress = 0;      
                    }
                    upgrades.storage && StorageInterface.addItemToSlot(slotResult, this.container.getSlot("subslotResult"), 64);
                }
                isActive = true;
            }
        }
        
        if(!isActive){
            this.data.progress = 0;
        }
        
        this.setActive(isActive);
        this.container.setScale("scaleBurn", this.data.burn / this.data.burnMax);
        this.container.setScale("scaleProgress", this.data.progress / smeltingTime);  
        
    }
    
});


StorageInterface.createInterface(BlockID.better_furnace, {
    slots: {
        slotSource: {input: true, isValid: function(item, side){
            return side == 1 && !!Recipes.getFurnaceRecipeResult(item.id, item.data);
        }},
        slotFuel: {input: true, isValid: function(item, side){
            return side >= 2 && Recipes.getFuelBurnDuration(item.id, item.data) > 0;
        }},
        slotResult: {output: true},
        subslotResult: {output: true},
    },
    canRecieveLiquid: function(liquid, side){
        return liquid == "lava";
    }
});




// file: share.js

ModAPI.registerAPI("BFurnaceAPI", {
    Furnace: Furnace,
    Upgrade: Upgrade,
    Factory: Factory
});




