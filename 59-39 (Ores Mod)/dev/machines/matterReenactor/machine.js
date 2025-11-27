MachineRegistry.registerElectricMachine(BlockID.matterReenactor, {
    defaultValues:{
        work_time: OresAPI.getConfigValue("matter_reenactor.work_time"),
        consumption: OresAPI.getConfigValue("matter_reenactor.energy_consumption")
    },
    getGuiScreen:function(){
        return gui.reenactor
    },
    getEnergyStorage:function(){
        return OresAPI.getConfigValue("matter_reenactor.energy_storage")
    },
    getTier:function(){
        return OresAPI.getConfigValue("matter_reenactor.tier")
    },
    canReceiveEnergy:function(side){
        return side != RelativeAPI.getRelativeSide(World.getBlock(this.x, this.y, this.z).data, 0);
    },
    tick:function(){
        var matter = this.container.getSlot("matterySlot");
        var item = this.container.getSlot("itemSlot");
        var result = this.container.getSlot("outSlot");
        if(TIPS){
            var container = this.container.getGuiContent();
            if(container){
                if(matter.id > 0){
                    if(matter.id != ItemID.Oresmatter){
                        container.elements["leftSlot"].text = "Но это не материя._.";
                        container.elements["leftSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["leftSlot"].text = "";
                    }
                }else{
                    container.elements["leftSlot"].text = "В слоте слева должна быть материя";
                    container.elements["leftSlot"].font.color = UIColor.RED;
                }
                if(item.id > 0){
                    if(item.id == ItemID.Oresmatter||item.id == ItemID.rebuiltMatter){
                        container.elements["topSlot"].text = "Материю низя!!!";
                        container.elements["topSlot"].font.color = UIColor.YELLOW;
                    }else{
                        container.elements["topSlot"].text = "";
                    }
                }else{
                    container.elements["topSlot"].text = "В слоте сверху должен быть предмет";
                    container.elements["topSlot"].font.color = UIColor.RED;
                }
                if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy >= this.data.consumption){
                    container.elements["mode"].text = "Работает "+this.getProgress()+"%";
                    container.elements["mode"].font.color = UIColor.GREEN
                    //container.elements["mode"].x = 513;
                }else if(matter.id == ItemID.Oresmatter&&(item.id > 0&&(item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter))&&this.data.energy < this.data.consumption){
                    container.elements["mode"].text = "Нет энергии";
                    container.elements["mode"].font.color = UIColor.RED;
                    //container.elements["mode"].x = 492;
                }else{
                    container.elements["mode"].text = "Простаивает";
                    container.elements["mode"].font.color = UIColor.YELLOW;
                    //container.elements["mode"].x = 492;
                }
            }
        }
        this.container.setScale("energyScale", this.data.energy/this.getEnergyStorage());
        this.container.setScale("processScale", this.data.progress);
        /*Game.message("§1"+ItemID.Oresmatter)
        Game.message("§1"+matter.id)
        Game.message("§2"+item.id != ItemID.Oresmatter)
        Game.message("§3"+this.data.energy)
        Game.message("§3"+this.data.energy >= 35)*/
        if(matter.id == ItemID.Oresmatter&&item.id != ItemID.Oresmatter&&item.id != ItemID.rebuiltMatter&&item.id > 0){
            if(this.data.energy >= this.data.consumption){//НУ КАК, №№№№№, 30К МОЖЕТ БЫТЬ МЕНЬШЕ 35-ТИ?! ПОЧЕМУ ТЫ ТУТ ЗАРАБОТАЛО, А ТАМ НЕТ?!!
                this.data.energy -= this.data.consumption;//20:59 ПО МСК НА ЧАСАХ - ЗНАЮ, ЧТО НЕ МНОГО, НО ВСЕ ТАКИ - Я УЖЕ СПАТЬ ХОЧУ, А ТЫ МНЕ МОЗГ ВЫНОСИШЬ, КАКОГО ХРЕНА?!
                this.data.progress += 1/this.data.work_time;
            }
            if(this.data.progress >= 1){
                result.id = ItemID.rebuiltMatter;
                result.count++;
                result.data = 0;
                result.extra = new ItemExtraData();
                result.extra.putInt("id", item.id);
                result.extra.putInt("data", item.data);
                item.count--;
                matter.count--;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }else{
            this.data.progress = 0;
        }
    }
});

ICRender.getGroup("ic-wire").add(BlockID.matterReenactor, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.matterReenactor, EU);


















