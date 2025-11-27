Network.addClientPacket("aw.classPlayer", function(packetData) {
    Game.message(Translation.translate("§2You selected the class: ")+packetData.Class);
    classPlayer[packetData.player] = Class[packetData.Class];
});
Translation.addTranslation("§2You selected the class: ", {ru: "§2Вы выбрали класс: "});
var classPlayer = {};
Saver.addSavesScope("class",
    function read(scope) {
        classPlayer = scope.classPlayer || {};
        Entity.prot = scope.protEntity || {};
        Wands.data = scope.wandData || {};
        Wands.spellSet = scope.spellSet || Wands.spellSet;
    },
    function save() {
        return {
            classPlayer: classPlayer,
            protEntity: Entity.prot,
            wandData: Wands.data,
            spellSet: Wands.spellSet
            //potion: Potion.potions
        };
    }
);
const Class = {
    mage: {
        name: "mage", 
        magisMax: 100, 
        magis: 5,
        ProtectionMax: 40,
        Protection: 0,
        necromancerMax: 10,
        necromancer: 0,
        AspectsMax: 100000,
        AspectsNow: 5000,
        Aspects: 0,
        intelligence: 30,
        intelligenceMax: 500
    }, 
    warrior: {
        name: "warrior", 
        magisMax: 15,
        magis: 0,
        ProtectionMax: 100,
        Protection: 10,
        necromancerMax: 5, 
        necromancer: 0,
        AspectsMax: 10000,
        AspectsNow: 100,
        Aspects: 0,
        intelligence: 20,
        intelligenceMax: 800
    }, 
    necromancer: {
        name: "necromancer", 
        magisMax: 50,
        magis: 5,
        ProtectionMax: 30,
        Protection: 0,
        necromancerMax: 100,
        necromancer: 5,
        AspectsMax: 50000,
        AspectsNow: 5000,
        Aspects: 0,
        intelligence: 10,
        intelligenceMax: 400
    },
    inventor: {
        name: "inventor", 
        magisMax: 50,
        magis: 0,
        ProtectionMax: 60,
        Protection: 0,
        necromancerMax: 15,
        necromancer: 0,
        AspectsMax: 5000,
        AspectsNow: 1000,
        Aspects: 0,
        intelligence: 50,
        intelligenceMax: 1000
    }
};
Callback.addCallback("PlayerAttack", function(player){
    let c = MagicCore.getValue(player);
    if(MagicCore.isClass(player)){
        let r = Math.floor(Math.random()*10)
        if(c.Aspects + r <= c.AspectsNow){
            classPlayer[player].Aspects += r;
        }else{
            classPlayer[player].Aspects = c.AspectsNow;
        }
        
    }
});
function delItem(player, item){
    Entity.setCarriedItem(player, item.id, item.count-1, item.data);
}
function delItem2(player, item){
    let pa = new PlayerActor(player);
    if(pa.getGameMode() == 0){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
    }
}
var MagicCore = {
    armor: {},
    setArmor: function (id, parameter, value){
        Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n "+ Translation.translate("Required: ") + parameter + Translation.translate(" level: ") + value;
        });
        Armor.registerOnTakeOnListener(id, function(item, slot, player) {
        	if(Game.getGameMode() !== EGameMode.CREATIVE){
                let ItemA = new PlayerActor(player);
                let coords = Entity.getPosition(player);
                let c = MagicCore.getValue(player);
                let b = BlockSource.getDefaultForActor(player);
                if(MagicCore.isClass(player)){
                    if(c[parameter] < value){
                    	b.spawnDroppedItem(coords.x, coords.y, coords.z, id, 1, item.data, item.extra);
                        ItemA.setArmor(slot, 0, 0, 0, null);
                        PlayerAC.message(player, Translation.translate("Needed ") + parameter + Translation.translate(" level: ") + value);
                    }
                }else{
                	b.spawnDroppedItem(coords.x, coords.y, coords.z, id, 1, item.data, item.extra);
                    ItemA.setArmor(slot, 0, 0, 0, null);
                 }
             }
        });
    }, 
    using: {},
    setUsingItem: function (item, parameter, value){
        this.using[item.id+":"+item.data] = [item, parameter, value]
    },
    isClass: function (player){
        let key = Object.keys(classPlayer);
        let obj = {};
        if(classPlayer == {}){
                return false;
        }
        for(i in key){
            let k = key[i];
            obj[k] = true;
        }
        if(obj[player]){
            return true;
        }else{
            return false;
        }
    }, 
    isExistsClass: function (){
        if(classPlayer == {}){
            return false;
        }else{
            return true;
        }
    }, 
    getValue: function (player){
        let o;
        if(this.isClass(player)){
            o = classPlayer[player];
        }else{
            o = {
                name: "noy",
                magisMax: 0,
                magis: 0, 
                ProtectionMax: 0, 
                Protection: 0, 
                necromancerMax: 0, 
                necromancer: 0,
                AspectsMax: 2, 
                AspectsNow: 1, 
                Aspects: 0
            };
        }
        return o;
    }, 
    piece: function(player, parameter, value){
        value = value || 1;
        if(this.isClass(player)){
            let cv = MagicCore.getValue(player);
            if(cv[parameter] + value <= cv[parameter+"Max"]){
                delItem2(player, {id:0,data:0,count:1});
                cv[parameter] += value;
                PlayerAC.message(player, Translation.translate("§2Parameter: ")+parameter+Translation.translate(" has been improved by ")+value+Translation.translate(", now it is equal to ")+cv[parameter]);
                MagicCore.setParameters(player, cv);
            }else{
                PlayerAC.message(player, Translation.translate("§4Parameter: ")+parameter+Translation.translate(" maximum level"));
            }
        }else{
            PlayerAC.message(player, Translation.translate("§4You have no class"));
        }
    }, 
    setParameters: function (player, obj){
        if(this.isClass(player)){
            let r = Math.floor(Math.random()*20);
            if(obj.AspectsNow + r <= obj.AspectsMax) obj.AspectsNow += r;
            classPlayer[player] = obj;
            Network.sendToAllClients("aw.sp", classPlayer);
        }
    },
    armorMagic: {},
    addArmorMagic: function (id, type, value){
        this.armorMagic[id] = {
            type: type,
            value: value
        };
    },
    getArmorMagic: function (ent){
        let arm = {};
        if(this.armorMagic[Entity.getArmorSlot(ent, 0).id]){
            arm.helmet = this.armorMagic[Entity.getArmorSlot(ent, 0).id];
        }else{
            arm.helmet = {
                type: "noy",
                value: 0
            };
        }
        if(this.armorMagic[Entity.getArmorSlot(ent, 1).id]){
            arm.chestplate = this.armorMagic[Entity.getArmorSlot(ent, 1).id];
        }else{
            arm.chestplate = {
                type: "noy",
                value: 0
            };
        }
        if(this.armorMagic[Entity.getArmorSlot(ent, 2).id]){
            arm.leggings = this.armorMagic[Entity.getArmorSlot(ent, 2).id];
        }else{
            arm.leggings = {
                type: "noy",
                value: 0
            };
        }
        if(this.armorMagic[Entity.getArmorSlot(ent, 3).id]){
            arm.boots = this.armorMagic[Entity.getArmorSlot(ent, 3).id];
        }else{
            arm.boots = {
                type: "noy",
                value: 0
            };
        }
        return arm;
    },
    damage: function (ent, type, damage){
        let arm = this.getArmorMagic(ent);
        if(type == "magic"){
            let dmg = damage;
            if(arm.helmet.type == "magic"){
                dmg -= arm.helmet.value || 0;
            }
            if(arm.chestplate.type == "magic"){
                dmg -= arm.chestplate.value || 0;
            }
            if(arm.leggings.type == "magic"){
                dmg -= arm.leggings.value || 0;
            }
            if(arm.boots.type == "magic"){
                dmg -= arm.boots.value || 0;
            }
            if(dmg >= 1) Entity.damageEntity(ent, dmg);
        }else if(type == "dead"){
            let m = "y";
            let dmg = damage;
            if(arm.helmet.type == "dead"){
                m = "n";
                dmg -= arm.helmet.value || 0;
            }
            if(arm.chestplate.type == "dead"){
                m = "n";
                dmg -= arm.chestplate.value || 0;
            }
            if(arm.leggings.type == "dead"){
                m = "n";
                dmg -= arm.leggings.value || 0;
            }
            if(arm.boots.type == "dead"){
                m = "n";
                dmg -= arm.boots.value || 0;
            }
            if(m == "y"){
                Entity.setHealth(ent, 0);
            }else{
                if(dmg >> 0) Entity.damageEntity(ent, dmg);
            }
        }
    }
};
Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
	if(Game.getGameMode() !== EGameMode.CREATIVE){
	let actor = new PlayerActor (player)
    let item = Entity.getCarriedItem(player);
    if(MagicCore.using[item.id+":"+item.data]){
        let arr = MagicCore.using[item.id+":"+item.data];
        if(MagicCore.getValue(player)[arr[1]] < arr[2]){
        	let slot = actor.getSelectedSlot()
            slot=slot<8?slot+1:0
            let slotItem = actor.getInventorySlot(slot)
            actor.setSelectedSlot(slot)
            actor.setInventorySlot(slot, slotItem.id, slotItem.count, slotItem.data, slotItem.extra)
            PlayerAC.message(player, Translation.translate("You cannot use this item" +"\n"+"Needed ") + arr[1] + Translation.translate(" level: ") + arr[2]);
            }
        }
    }
});
Translation.addTranslation("Required: ", {ru: "Требуется: "});
Translation.addTranslation(" level: ", {ru: " уровня: "});
Translation.addTranslation("You cannot use this item" +"\n"+"Needed ", {ru: "Вы не можете использовать этот предмет"+"\n"+"Нужен "});
Translation.addTranslation("§2Parameter: ", {ru: "§2Параметр: "});
Translation.addTranslation("§4Parameter: ", {ru: "§4Параметр: "});
Translation.addTranslation(" has been improved by ", {ru: " был улучшен на "});
Translation.addTranslation(", now it is equal to ", {ru: ", теперь он равен "});
Translation.addTranslation(" maximum level", {ru: " максимального уровня"});
Translation.addTranslation("§4You have no class", {ru: "§4У вас нет класса"});
Network.addServerPacket("aw.sp", function(client, data) {
    classPlayer = data;
});
MagicCore.setArmor(310, "Protection", 50);
MagicCore.setArmor(311, "Protection", 50);
MagicCore.setArmor(312, "Protection", 50);
MagicCore.setArmor(313, "Protection", 50);

MagicCore.setArmor(314, "Protection", 40);
MagicCore.setArmor(315, "Protection", 40);
MagicCore.setArmor(316, "Protection", 40);
MagicCore.setArmor(317, "Protection", 40);

MagicCore.setArmor(306, "Protection", 30);
MagicCore.setArmor(307, "Protection", 30);
MagicCore.setArmor(308, "Protection", 30);
MagicCore.setArmor(309, "Protection", 30);

MagicCore.setArmor(302, "Protection", 20);
MagicCore.setArmor(303, "Protection", 20);
MagicCore.setArmor(304, "Protection", 20);
MagicCore.setArmor(305, "Protection", 20);

MagicCore.setArmor(298, "Protection", 10);
MagicCore.setArmor(299, "Protection", 10);
MagicCore.setArmor(300, "Protection", 10);
MagicCore.setArmor(301, "Protection", 10);

MagicCore.setUsingItem({id: 276, data: 0}, "Protection", 45);
MagicCore.setUsingItem({id: 269, data: 0}, "Protection", 5);
MagicCore.setUsingItem({id: 272, data: 0}, "Protection", 15);
MagicCore.setUsingItem({id: 267, data: 0}, "Protection", 25);
MagicCore.setUsingItem({id: 283, data: 0}, "Protection", 30);
MagicCore.setUsingItem({id: 368, data: 0}, "magis", 5);
MagicCore.setUsingItem({id: 381, data: 0}, "magis", 10);
MagicCore.setUsingItem({id: 432, data: 0}, "magis", 20);
MagicCore.setUsingItem({id: 322, data: 0}, "necromancer", 10);
MagicCore.setUsingItem({id: 373, data: 0}, "magis", 30);
MagicCore.setUsingItem({id: 438, data: 0}, "magis", 35);
MagicCore.setUsingItem({id: 441, data: 0}, "magis", 40);

Callback.addCallback("PostLoaded", function(){
    MagicCore.setUsingItem({id: ItemID.BronzeMultiTool, data: 0}, "intelligence", 50);
    MagicCore.setUsingItem({id: ItemID.malachiteAxe, data: 0}, "intelligence", 55);
    
    MagicCore.setArmor(ItemID.malachiteHelmet, "Protection", 60);
    MagicCore.setArmor(ItemID.malachiteChestplate, "Protection", 60);
    MagicCore.setArmor(ItemID.malachiteLeggings, "Protection", 60);
    MagicCore.setArmor(ItemID.malachiteBoots, "Protection", 60);
    
    
    MagicCore.setArmor(ItemID.hazmatHelmet, "magis", 50);
    MagicCore.setArmor(ItemID.hazmatChestplate, "magis", 50);
    MagicCore.setArmor(ItemID.hazmatLeggings, "magis", 50);

    
    MagicCore.setArmor(ItemID.sapphireHelmet, "necromancer", 50);
    MagicCore.setArmor(ItemID.sapphireChestplate, "necromancer", 50);
    MagicCore.setArmor(ItemID.sapphireLeggings, "necromancer", 50);
    MagicCore.setArmor(ItemID.sapphireBoots, "necromancer", 50);
    
    MagicCore.setArmor(ItemID.compositeHelmet, "intelligence", 30);
    MagicCore.setArmor(ItemID.compositeChestplate, "intelligence", 30);
    MagicCore.setArmor(ItemID.compositeLeggings, "intelligence", 30);
    MagicCore.setArmor(ItemID.compositeBoots, "intelligence", 30);
    
    MagicCore.setArmor(ItemID.leadHelmet, "magis", 50);
    MagicCore.setArmor(ItemID.leadChestplate, "magis", 50);
    MagicCore.setArmor(ItemID.leadLeggings, "magis", 50);
    MagicCore.setArmor(ItemID.leadBoots, "magis", 50);
    
    MagicCore.setArmor(ItemID.uraniumHelmet, "intelligence", 500);
    MagicCore.setArmor(ItemID.uraniumChestplate, "intelligence", 500);
    MagicCore.setArmor(ItemID.uraniumLeggings, "intelligence", 500);
    MagicCore.setArmor(ItemID.uraniumBoots, "intelligence", 500);
    
    MagicCore.setArmor(ItemID.quantumHelmet, "intelligence", 800);
    MagicCore.setArmor(ItemID.quantumChestplate, "intelligence", 800);
    MagicCore.setArmor(ItemID.quantumLeggings, "intelligence", 800);
    MagicCore.setArmor(ItemID.quantumBoots, "intelligence", 800);
    
    MagicCore.setArmor(ItemID.adamantiteHelmet, "magis", 60);
    MagicCore.setArmor(ItemID.adamantiteChestplate, "magis", 60);
    MagicCore.setArmor(ItemID.adamantiteLeggings, "magis", 60);
    MagicCore.setArmor(ItemID.adamantiteBoots, "magis", 60);
    
    MagicCore.setArmor(ItemID.mechanicAdamantiteHelmet, "magis", 70);
    MagicCore.setArmor(ItemID.mechanicAdamantiteChestplate, "magis", 70);
    MagicCore.setArmor(ItemID.mechanicAdamantiteLeggings, "magis", 70);
    MagicCore.setArmor(ItemID.mechanicAdamantiteBoots, "magis", 70);
    
    MagicCore.setArmor(ItemID.nanoHelmet, "intelligence", 500);
    MagicCore.setArmor(ItemID.nanoChestplate, "intelligence", 500);
    MagicCore.setArmor(ItemID.nanoLeggings, "intelligence", 500);
    MagicCore.setArmor(ItemID.nanoBoots, "intelligence", 500);
    
    MagicCore.setArmor(ItemID.mechanicSapphireHelmet, "necromancer", 70);
    MagicCore.setArmor(ItemID.mechanicSapphireChestplate, "necromancer", 70);
    MagicCore.setArmor(ItemID.mechanicSapphireLeggings, "necromancer", 70);
    MagicCore.setArmor(ItemID.mechanicSapphireBoots, "necromancer", 70);
});

if(this["__version__"]){
    MagicCore.setArmor(764, "Protection", 55);
    MagicCore.setArmor(834, "Protection", 55);
    MagicCore.setArmor(725, "Protection", 55);
    MagicCore.setArmor(813, "Protection", 55);
}







