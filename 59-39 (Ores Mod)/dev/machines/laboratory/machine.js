MachineRegistry.registerElectricMachine(BlockID.labBlock, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("laboratory.work_time"),
        consumption: OresAPI.getConfigValue("laboratory.energy_consumption")
    },
    getTier:function(){
        return OresAPI.getConfigValue("laboratory.tier")
    },
    canExtractEnergy:function(side){
        return [RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0), 1].indexOf > -1;
    },
    updateValues:function(){
        this.source = this.container.getSlot("chipSlot");
        this.splitter = this.container.getSlot("splitterChipSlot");
        this.quantomDetector = this.container.getSlot("quantomDetectorChipSlot");
        this.densityController = this.container.getSlot("densityControllerChipSlot");
        this.matterDrive = this.container.getSlot("matterDriveChip");
        this.burnt = this.container.getSlot("burntChipSlot");
        
        this.container.setScale("energyScale", this.data.energy/3000);
        this.container.setScale("researchScale", this.data.progress);
        
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(this.source.id == 0){
                    container.elements["chipListener"].text = "В слоте сверху должна быть исследовательская микросхема";
                    container.elements["chipListener"].font = {color: UIColor.RED, size: 15};
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN;
                }else if(this.source.id == ItemID.researchChip&&this.data.energy < this.data.consumption){
                    container.elements["chipListener"].text = "";
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                }else{
                    container.elements["chipListener"].text = "В слоте сверху находится не исследовательская микросхема";
                    container.elements["chipListener"].font = {color: UIColor.YELLOW, size: 15};
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                }
            }
        }
    },
    
    condition:function(){
        return (this.source.id == ItemID.researchChip&&this.data.energy >= this.data.consumption)
    },
    
    tick:function(){
        this.updateValues();
        if(this.condition()){
            this.data.energy -= this.data.consumption;
            this.data.progress += 1/this.data.work_time;
            if(this.data.progress >= 1){
                this.data.progress = 0;
                this.source.count--;
                let result = tryResearch(OresAPI.getConfigValue("laboratory.rate_of_success_research")), slot = this.selectSlot(result);
                this[slot].id = result;
                this[slot].count++;
                this.container.validateSlot("chipSlot");
            }
        }else{
            this.data.progress = 0;
        }
    },
    
     selectSlot:function(id){
        switch(id){
            case ItemID.splitterChip:
                return "splitter"
            break;
            case ItemID.quantomDetectorChip:
                return "quantomDetector"
            break;
            case ItemID.densityControllerChip:
                return "densityController"
            break;
            case ItemID.matteryDrive:
                return "matterDrive"
            break;
            case ItemID.burntChip:
                return "burnt"
            break; 
        }
        
    },
    
    getGuiScreen:function(){
        return gui.laboratory
    },
    
    getEnergyStorage:function(){
        return 3000
    }
});
ICRender.getGroup("ic-wire").add(BlockID.labBlock, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.labBlock, EU);







