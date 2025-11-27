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