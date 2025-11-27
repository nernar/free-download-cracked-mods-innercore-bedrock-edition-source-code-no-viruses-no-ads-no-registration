IDRegistry.genItemID("sorcererStaff"); 
Item.createItem("sorcererStaff", "sorcerer staff", {name: "sorcerer_staff", meta: 0}, {stack: 1});
Translation.addTranslation("sorcerer staff", {ru: "посох чародея"});

mod_tip(ItemID.sorcererStaff)

Item.registerUseFunction("sorcererStaff", function(coords, item, block, player){
    if(block.id == BlockID.blockmetal){
        for(let i = 0;i<=15;i++){
            Mp.spawnParticle(PartType.magic, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, Math.random()/10, 0);
        }
        let bs = BlockSource.getDefaultForActor(player);
        bs.setBlock(coords.x, coords.y, coords.z, BlockID.manaStorage, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
    }
});
Item.addCreativeGroup("staff", Translation.translate("staff"), [
	  ItemID.sorcererStaff,
	  ItemID.stick2,
]);
/*
name: "mage", 
magisMax: 100, 
magis: 5,
        ProtectionMax: 40,
        Protection: 0,
        necromancerMax: 10,
        necromancer: 0,
        AspectsMax: 100000,
        AspectsNow: 5000,
        Aspects: 0
*/
function isItem(ent){
    
}
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    api.Wands.addStick({
        id: ItemID.sorcererStaff, 
        time: 13,
        texture: {
            name: "sorcerer_staff"
        },
        bonus: {
            necromancer: 5,
            magis: 5,
            aspects: 5
        }
    });
    IDRegistry.genItemID("srollAttack"); 
    Item.createItem("srollAttack", "scroll: attacks \n will hit mobs within a 5 block radius", {name: "sroll", meta: 0}, {stack: 1});
    
    mod_tip(ItemID.srollAttack)
    Translation.addTranslation("scroll: attacks \n will hit mobs within a 5 block radius", {ru: "свиток: атаки \n отакует мобов в радиусе 5 блоков"});
    
    IDRegistry.genItemID("srollRegen"); 
    Item.createItem("srollRegen", "Scroll: Recovery \n sucks from the nearest mobs mana", {name: "sroll", meta: 0}, {stack: 1});
    
    mod_tip(ItemID.srollRegen)
    
    Translation.addTranslation("Scroll: Recovery \n sucks from the nearest mobs mana", {ru: "свиток: восстановления \n высасывает из ближайших мобов ману"});
    Ritual.register3(ItemID.sroll3, 1000);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollAttack);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollRegen);

 api.Wands.setPrototype(ItemID.srollAttack, {
    type: "function", 
    compatibility: [ItemID.sroll1], 
    activate: {
        necromancer: 10,
        magis: 15,
        aspects: 20
    },
    setFunction: function(packet){
        let class = {};
        class.mana = ManaCore.get(packet.player);
        if(class.mana.count >= 50){
            class.mana.count-=50;
            ManaCore.set(packet.player, class.mana);
            let pos = Entity.getPosition(packet.entity);
            let ents = Entity.getAllInRange(pos, 5);
            Entity.damageEntity(packet.entity, 5);
            for(let i in ents){
			            if(Entity.getTypeName(ents[i])!="minecraft:item<>"){
                     Entity.damageEntity(ents[i], 5);
                    pos = Entity.getPosition(ents[i]);
                    for(let i = 0;i<=5;i++){
                         Mp.spawnParticle(PartType.magic, pos.x + Math.random(), pos.y + Math.random(), pos.z + Math.random(), 0, Math.random()/10, 0);
                    }
                }
            }
        }else{
            Mp.message(packet.player,  "нужна маны 50");
        }
    }, 
    installation: function (player, item){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data, null);
    }
});
    
    api.Wands.setPrototype(ItemID.srollRegen, {
        type: "function",
        compatibility: [ItemID.sroll1, ItemID.sroll3],
        activate: {
            necromancer: 15,
            magis: 30,
            aspects: 20
        },
        setFunction: function (packet){
            let pos = Entity.getPosition(packet.player);
            let m = ManaCore.get(packet.player);
            let ents = Entity.getAllInRange(pos,5);
            for(let i in ents){
                if(ents[i] != packet.player) if(Player.isPlayer(ents[i])){
                    let m2 = ManaCore.get(ents[i]);
                    let pos2 = Entity.getPosition(ents[i]);
                    if(m2.count <= 0){
                        Entity.setHealth(ents[i], 0);
                    }else{
                        m2.count -= 5;
                        ManaCore.set(ents[i], m2);
                        Entity.damageEntity(ents[i], 5);
                    }
                    if(m.count + 5 <= m.countMax){
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                }else{
                    let pos2 = Entity.getPosition(ents[i]);
                    Entity.damageEntity(ents[i], 5);
                    if(m.count + 5 <= m.countMax){
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                }
            }
            ManaCore.set(packet.player, m);
        },
        installation: function (player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, null);
        }
    });
});
