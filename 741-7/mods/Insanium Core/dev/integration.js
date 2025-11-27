IMPORT("DungeonCore");
IMPORT("EnergyNet");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
//Thirst mod


//OresMod


//new boss

//AncientWonders 
let gui = new UI.StandardWindow({
    standart: {
		 header: {
		     text: {
		         text: "магически - индустриальный робот"
		         }
		     },
		     inventory: {standart: true},
		     background: {standart: true}
	   },
    drawing: [
        {type: "bitmap", x: 425, y: 150, bitmap: "energy_bar_background", scale: 4},
    ],
    elements: {
        "slot1": {type: "slot", x: 420, y: 230, size: 65},
        "slot2": {type: "slot", x: 490, y: 230, size: 65},
        "energyScale": {type: "scale", x: 425 + 4 * 4, y: 150, direction: 0, value: 0, bitmap: "energy_bar_scale", scale: 4},
    }
});
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const Wands = api.Wands;
    const MagicCore = api.MagicCore;
    IDRegistry.genItemID("wandAw"); 
    Item.createItem("wandAw", "палочка путешественника", {name: "aw_wand", meta: 0}, {stack: 1});
    Wands.addStick({
        id: ItemID.wandAw,
        time: 16,
        texture: {
            name: "aw_wand"
        },
        bonus: {
            necromancer: 0,
            Protection: 10,
            magis: 0,
            aspects: 5
        }
    });
    Wands.addIcon(ItemID.wandAw, "aw_wand", 1);
    Wands.addIcon(ItemID.wandAw, "aw_wand", 2);
    IDRegistry.genItemID("srollAw1"); 
    Item.createItem("srollAw1", "свиток: призыва молнии", {name: "sroll", meta: 0}, {stack: 1});
    IDRegistry.genItemID("srollAw2"); 
    Item.createItem("srollAw2", "свиток: шторм", {name: "sroll", meta: 0}, {stack: 1});
    IDRegistry.genItemID("srollAw3"); 
    Item.createItem("srollAw3", "свиток: поджига", {name: "sroll", meta: 0}, {stack: 1});
    IDRegistry.genItemID("srollAw4"); 
    Item.createItem("srollAw4", "свиток: оцепенения", {name: "sroll", meta: 4}, {stack: 1});
    Wands.setPrototype(ItemID.srollAw3, {
        type: "function",
        compatibility: [],
        activate: {
            Protection: 0,
            necromancer: 0,
            magis: 0,
            aspects: 0
        },
        setFunction: function(packet){
            if(packet.type == "itemUse"){
                 BlockSource.getDefaultForActor(packet.entity).setBlock(packet.relative.x, packet.relative.y, packet.relative.z, 51, 0);
            }else{
                Entity.setFire(packet.entity, 100);
            }
        },
        installation: function(player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
        }
    });
    Wands.setPrototype(ItemID.srollAw4, {
        type: "function",
        compatibility: [ItemID.sroll1],
        activate: {
            Protection: 0,
            necromancer: 0,
            magis: 0,
            aspects: 0
        },
        setFunction: function(packet){
            Entity.setMobile(packet.entity, false);
            api.setTimeout(function(){
                Entity.setMobile(packet.entity, true);
            }, 60);
        },
        installation: function(player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
        }
    });
    Wands.setPrototype(ItemID.srollAw2, {
        type: "function",
        compatibility: [ItemID.sroll1],
        activate: {
            Protection: 0,
            necromancer: 0,
            magis: 0,
            aspects: 0
        },
        setFunction: function(packet){
            World.playSoundAtEntity(packet.entity, "ambient.weather.thunder", 50);
            for(let i = 0;i<=Math.floor(Math.random()*10)+5;i++){
                let pos = Entity.getPosition(packet.entity);
                pos.x += (-10 + (Math.random()*20));
                pos.z += (-10 + (Math.random()*20));
                pos = GenerationUtils.findSurface(pos.x, pos.y, pos.z);
                pos.y++;
                Entity.spawn(pos.x, pos.y, pos.z, 93);
                let ent3 = Entity.getAllInRange(pos, 4);
                for(let i1 in ent3){
                    if(ent3[i1] != packet.entity) MagicCore.damage(ent3[i1], "magic", 20)
                }
            }
        },
        installation: function (player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
        }
    });
    Wands.setPrototype(ItemID.srollAw1, {
        type: "function",
        compatibility: [ItemID.sroll1],
        activate: {
            Protection: 20,
            necromancer: 60,
            magis: 30,
            aspects: 500
        },
        setFunction: function(packet){
            let pos = Entity.getPosition(packet.entity);
            for(let i = 0;i <= 50;i++){
                let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(packet.entity));
                    let coord = {
                        x: pos.x+(i * vel.x / 2),
                        y: pos.y+(i * vel.y / 2),
                        z: pos.z+(i * vel.z / 2)
                    };
                    let ent3 = Entity.getAllInRange(coord, 4);
                     if(BlockSource.getDefaultForActor(packet.entity).getBlockId(coord.x,coord.y,coord.z)!=0){
                         
                         Entity.spawn(coord.x, coord.y, coord.z, 93);
                         World.playSoundAtEntity(packet.player, "ambient.weather.thunder", 50);
                         for(let i1 in ent3){
                             if(ent3[i1] != packet.entity) MagicCore.damage(ent3[i1], "magic", 20)}
                        break;
                    }
                
             }
        },
        installation: function (player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
        }
    });
    Item.addCreativeGroup("sroll2", Translation.translate("srolls", {ru: "свитки"}), [
        ItemID.srollAw1,
        ItemID.srollAw2,
        ItemID.srollAw3,
        ItemID.srollAw4
    ]);
    const PlayerAC = api.PlayerAC;
    IDRegistry.genBlockID("MIBot");
    Block.createBlock("MIBot", [ {name: "магически - индустриальный робот", texture: [["ааа", 0]], inCreative: true} ]);
    (function(){
        var render = new ICRender.Model(); 
        BlockRenderer.setStaticICRender(BlockID.MIBot, -1, render);
        var model = BlockRenderer.createModel();  
        render.addEntry(model);
        Callback.addCallback("ModsLoaded", function (){
            model.addBox(0/16, 0, 0/16, 1/16, 1/16, 16/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 0, 16/16, 16/16, 1/16, 15/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 0, 0/16, 16/16, 1/16, 1/16, BlockID.blockmetal, 0);
            model.addBox(15/16, 0, 0/16, 16/16, 1/16, 15/16, BlockID.blockmetal, 0);
            model.addBox(2/16, 2/16, 2/16, 14/16, 14/16, 14/16, BlockID.machineBlockAdvanced, 0);
            model.addBox(0/16, 15/16, 0/16, 1/16, 16/16, 16/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 15/16, 16/16, 16/16, 16/16, 15/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 15/16, 0/16, 16/16, 16/16, 1/16, BlockID.blockmetal, 0);
            model.addBox(15/16, 15/16, 0/16, 16/16, 16/16, 15/16, BlockID.blockmetal, 0);
            
            model.addBox(0/16, 7/16, 0/16, 1/16, 9/16, 16/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 7/16, 16/16, 16/16, 9/16, 15/16, BlockID.blockmetal, 0);
            model.addBox(1/16, 7/16, 0/16, 16/16, 9/16, 1/16, BlockID.blockmetal, 0);
            model.addBox(15/16, 7/16, 0/16, 16/16, 9/16, 15/16, BlockID.blockmetal, 0);
        });
        /*model.addBox(0/16, 15/16, 0/16, 1/16, 16/16, 16/16, 1, 0);
        model.addBox(1/16, 15/16, 16/16, 16/16, 16/16, 15/16, 1, 0);
        model.addBox(1/16, 15/16, 0/16, 16/16, 16/16, 1/16, 1, 0);
        model.addBox(15/16, 15/16, 0/16, 16/16, 16/16, 15/16, 1, 0);*/
    })();
    IDRegistry.genItemID("MICore1"); 
    Item.createItem("MICore1", "ядро: использование на мобов в радиусе 3 блока", {name: "drive", meta: 0}, {stack: 1});
    IDRegistry.genItemID("MICore2"); 
    Item.createItem("MICore2", "ядро: использование на мобов в радиусе 5 блока", {name: "drive", meta: 0}, {stack: 1});
    IDRegistry.genItemID("MICore3"); 
    Item.createItem("MICore3", "ядро: использование на блоке", {name: "drive", meta: 0}, {stack: 1});
    Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
        if(item.id == ItemID.MICore3){
            item.extra = item.extra || new ItemExtraData();
            item.extra.putInt("x", coords.x);
            item.extra.putInt("y", coords.y);
            item.extra.putInt("z", coords.z);
            Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
        }
    });
    Item.registerNameOverrideFunction(ItemID.MICore3, function(item, name, translate){
        item.extra = item.extra || new ItemExtraData();
        return name + "\n"+"x: "+item.extra.getInt("x", 0)+" y: "+item.extra.getInt("y", 0)+" z: "+item.extra.getInt("z", 0)
    });
    TileEntity.registerPrototype(BlockID.MIBot, {
        useNetworkItemContainer: true,
        defaultValues: {
            player: null,
            energy: 0,
            energyMax: 100000
        },
        isEnergySource: function() {
            return false;
        },
        canReceiveEnergy: function(){
            return true;
        },
        canReceiveEnergy: function(side, type){
            return true;
        },
        getCapacity: function(){
            return this.data.energyMax;
        },
        energyReceive: function(type, amount, voltage) {
            amount = Math.min(amount, 8048);
            var add = Math.min(amount, this.getCapacity() - this.data.energy);
            this.data.energy += add;
            return add;
        },
        energyTick: function(type, src){
            var output = Math.min(8048, this.data.energy);
            this.data.energy += src.add(output) - output; 
        },
        tick: function(){
            this.container.setScale("energyScale", this.data.energy / this.data.energyMax);
            if(this.data.player){
                let slot1 = this.container.getSlot("slot1");
                let slot2 = this.container.getSlot("slot2");
                if(slot2.id == ItemID.MICore2 && Wands.stick[slot1.id]){
                    if(World.getThreadTime()%(Wands.getStick(slot1.id).time * 2
                    )){
                        let ents = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 5);
                        for(let i in ents){
                            if(this.data.energy >= 2048){
                                this.data.energy-=2048;
                                Wands.addEvent(slot1, this.data.player, "playerAttack", {coords: Entity.getPosition(this.data.player), block: {id:0,data:0}, player: this.data.player, entity: ents[i]});
                            }
                        }
                    }               
                }
                if(slot2.id == ItemID.MICore1 && Wands.stick[slot1.id]){
                    if(World.getThreadTime()%(Wands.getStick(slot1.id).time * 2
                    )){
                        let ents = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 3);
                        for(let i in ents){
                            if(this.data.energy >= 2048){
                                this.data.energy-=2048;
                                Wands.addEvent(slot1, this.data.player, "playerAttack", {coords: Entity.getPosition(this.data.player), block: {id:0,data:0}, player: this.data.player, entity: ents[i]});
                            }
                        }
                    }               
                }
                if(slot2.id == ItemID.MICore3 && Wands.stick[slot1.id]){
                    if(World.getThreadTime()%(Wands.getStick(slot1.id).time * 2
                    )){
                        let pos = {
                            x: slot2.extra.getInt("x", 0),
                            y: slot2.extra.getInt("y", 0),
                            z: slot2.extra.getInt("z", 0),
                        };
                        if(this.data.energy >= 2048){
                                this.data.energy-=2048;
                            Wands.addEvent(slot1, this.data.player, "itemUse", {coords: pos, block: this.blockSource.getBlock(pos.x, pos.y, pos.z), player: this.data.player, entity: this.data.player});
                        }
                    }
                 }
            }
            this.container.sendChanges();
        },
        click: function(id, data, count, coords, player){
            if((!this.data.player) || this.data.player != player){
                this.data.player = player;
                PlayerAC.message(player, "Блок привязан к вам");
            }
        },
        getScreenName: function(player, coords){
            return "name"
        },
        getScreenByName: function(screenName){
            return gui;
        }
    });
    ICRender.getGroup("ic-wire").add(BlockID.MIBot, -1);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.MIBot, EU);
});
/*
Структуры
DungeonCore.path папка а которой хронятся структуры
DungeonCore.generateIdentifier(obj)
DungeonCore.getIdentifier(string)
DungeonCore.getStructure(name)
DungeonCore.setStructure(name, x, y, z, region)
DungeonCore.isStructure(name, x, y, z, region)
DungeonCore.isStructureFull(name, x, y, z, region)
DungeonCore.destroyStructure(name, x, y, z, region)

функции advanced структуры или модуль DungeonAPI 
new DungeonCore.advanced(name)
<advanced>.stru массив структуры
<advanced>.prot протатип структуры
<advanced>.setPrototype(obj)
<advanced>.setStructure(x, y, z, region, packet)


вспомогвтельные функции 
DungeonCore.isObj(obj1, obj2)
DungeonCore.getId(id)
DungeonCore.isBlock(id)




Генерация предметов 

ItemGenerate.defaults()
<defaults>.items
<defaults>.prot
<defaults>.setPrototype(obj)
<defaults>.addItem(id, random, count, data, extra)
<defaults>.fillChest(x, y, z, region, packet)
<defaults>.fillChestSid(x, y, z, random, region, packet)

ItemGenerate.advanced()
<advanced>.items
<advanced>.prot
<advanced>.setPrototype(obj)
<advanced>.addItem(id, random, count, data, extra)
<advanced>.fillChest(x, y, z, region, packet)
<advanced>.fillChestSid(x, y, z, random, region, packet)

ItemGenerate.enchantAdd(type, count)

Инструменты 
Utility.random()
Utility.gntId(obj)
Utility.saveAtCoords(name, pos1, pos2, central, value1, value2, region)
Utility.save(name, x1, y1, z1, x2, y2, z2, c1, c2, c3, central, value1, value2, region)
Utility.setStruc(name, coords, region)
Utility.fillCoords(x1, y1, z1, x2, y2, z2, block, region)
*/
