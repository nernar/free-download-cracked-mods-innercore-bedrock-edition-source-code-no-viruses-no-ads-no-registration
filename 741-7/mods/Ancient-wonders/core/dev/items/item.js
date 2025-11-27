IDRegistry.genItemID("regularBag"); 
Item.createItem("regularBag", "Regular bag", {name: "regular_bag", meta: 0}, {stack: 16});
Translation.addTranslation("Regular bag", {ru: "Обычный мешок"});

function Bag(id, lootmin, lootmax){
    this.items = [];
    this.addItem = function(chance, id, count, data, extra){
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 1;
        data = data || 0
        extra = extra || null;
        this.items.push({chance: chance, id: id, data: data, max: count.max, min: count.min, extra: extra});
    }
    let _this = this;
    Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
        if(item.id == id){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
            for(let a = Math.floor(Math.random() * (lootmax - lootmin)) + lootmin;a >= 1;a+=0){
                for(let i in _this.items){
                    if(Math.random() <= _this.items[i].chance){
                        BlockSource.getDefaultForActor(player).spawnDroppedItem(coords.x, coords.y+1, coords.z, _this.items[i].id, Math.floor(Math.random() * (_this.items[i].max - _this.items[i].min)) + _this.items[i].min, _this.items[i].data, _this.items[i].extra);
                        a--;
                    }
                }
            }
        }
    });
}

let Bag1 = new Bag(ItemID.regularBag, 1, 3);



IDRegistry.genItemID("piece1"); 
Item.createItem("piece1", "Piece of Knowledge: Magic", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Magic", {ru: "Кусок знания: магии"});

IDRegistry.genItemID("piece2"); 
Item.createItem("piece2", "Piece of Knowledge: Protection", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Protection", {ru: "Кусок знания: защиты"});

IDRegistry.genItemID("piece3"); 
Item.createItem("piece3", "Piece of Knowledge: Necromancy", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Piece of Knowledge: Necromancy", {ru: "Кусок знания: некромантии"});

IDRegistry.genItemID("loreClass1"); 
Item.createItem("loreClass1", "Class lore: mage", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Class lore: mage", {ru: "Знания класса: маг"});
Item.setGlint(ItemID.loreClass1, true);

IDRegistry.genItemID("loreClass2"); 
Item.createItem("loreClass2", "Class Lore: Warrior", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Class Lore: Warrior", {ru: "Знания класса: воин"});
Item.setGlint(ItemID.loreClass2, true);

IDRegistry.genItemID("loreClass3"); 
Item.createItem("loreClass3", "Class lore: necromancer", {name: "piece", meta: 0}, {stack: 1});
Translation.addTranslation("Class lore: necromancer", {ru: "Знания класса: некромант"});
Item.setGlint(ItemID.loreClass3, true);

Item.registerUseFunctionForID(ItemID.piece1, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        MagicCore.piece(player, "magis");
    }
});
Item.registerUseFunctionForID(ItemID.piece2, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        MagicCore.piece(player, "Protection");
    }
});
Item.registerUseFunctionForID(ItemID.piece3, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        MagicCore.piece(player, "necromancer");
    }
});

Item.registerUseFunctionForID(ItemID.loreClass1, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            classPlayer[player] = Class["mage"];
            delItem(player, {id:0,data:0,count:1}) ;
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "mage"
            });
        }else{
            PlayerAC.message(player, Translation.translate("§4You cannot change the class"));
        }
    }
});
Item.registerUseFunctionForID(ItemID.loreClass2, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            classPlayer[player] = Class["warrior"];
            delItem(player, {id:0,data:0,count:1}) ;
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "warrior"
            });
        }else{
            PlayerAC.message(player, Translation.translate("§4You cannot change the class"));
        }
    }
});
Item.registerUseFunctionForID(ItemID.loreClass3, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
        if(!MagicCore.isClass(player)){
            classPlayer[player] = Class["necromancer"];
            delItem(player, {id:0,data:0,count:1}) ;
            client.send("aw.classPlayer", {
                player: player, 
                Class:  "necromancer"
            });
        }else{
            PlayerAC.message(player, Translation.translate("§4You cannot change the class"));
        }
    }
});
Translation.addTranslation("§4You cannot change the class", {ru: "§4Вы не можете поменять класс"});
IDRegistry.genItemID("rune1"); 
Item.createItem("rune1", "Fire rune", {name: "rune", meta: 1}, {stack: 1});
Translation.addTranslation("Fire rune", {ru: "Руна огня"});
Item.setGlint(ItemID.rune1, true);

IDRegistry.genItemID("rune2"); 
Item.createItem("rune2", "Earth rune", {name: "rune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "Руна земли"});
Item.setGlint(ItemID.rune2, true);

IDRegistry.genItemID("rune3"); 
Item.createItem("rune3", "Wind rune", {name: "rune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "Руна ветра"});
Item.setGlint(ItemID.rune3, true);

IDRegistry.genItemID("rune4"); 
Item.createItem("rune4", "The rune of light", {name: "rune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "Руна света"});
Item.setGlint(ItemID.rune4, true);

IDRegistry.genItemID("rune5"); 
Item.createItem("rune5", "Rune of darkness", {name: "rune", meta: 5}, {stack: 1});
Translation.addTranslation("Rune of darkness", {ru: "Руна тьмы"});
Item.setGlint(ItemID.rune5, true);

IDRegistry.genItemID("rune6"); 
Item.createItem("rune6", "Rune copying", {name: "rune", meta: 6}, {stack: 1});
Translation.addTranslation("Rune copying", {ru: "Руна копирование"});
Item.setGlint(ItemID.rune6, true);

Item.addCreativeGroup("rune", Translation.translate("rune", {ru: "руны"}), [
    ItemID.rune1,
    ItemID.rune2,
    ItemID.rune3,
    ItemID.rune4, 
    ItemID.rune5, 
    ItemID.rune6
]);

IDRegistry.genItemID("magis_stick"); 
Item.createItem("magis_stick", "Magis stick", {name: "magis_stick", meta: 0}, {stack: 1});
Translation.addTranslation("Magis stick", {ru: "Магичиская палка"});

IDRegistry.genItemID("magis_sword"); 
Item.createItem("magis_sword", "Magic sword", {name: "magis_sword", meta: 0}, {stack: 1});
Translation.addTranslation("Magic sword", {ru: "Магический меч"});

IDRegistry.genItemID("magis_pocox"); 
Item.createItem("magis_pocox", "Magic staff", {name: "magis_pocox", meta: 0}, {stack: 1});
Translation.addTranslation("Magic staff", {ru: "Магический посох"});

IDRegistry.genItemID("sroll1"); 
Item.createItem("sroll1", "Scroll: use on a block", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: use on a block", {ru: "Свиток: использование на блоке"});

IDRegistry.genItemID("sroll2"); 
Item.createItem("sroll2", "Scroll: use on a player", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: use on a player", {ru: "Свиток: использование игроком"});

IDRegistry.genItemID("sroll3"); 
Item.createItem("sroll3", "Scroll: use when attacking", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: use when attacking", {ru: "Свиток: использование при атаке"});

IDRegistry.genItemID("sroll4"); 
Item.createItem("sroll4", "Scroll: Damage Level 1", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: Damage Level 1", {ru: "Свиток: урона 1 уровня"});

IDRegistry.genItemID("sroll10"); 
Item.createItem("sroll10", "Scroll: Damage Level 2", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: Damage Level 2", {ru: "Свиток: урона 2 уровня"});

IDRegistry.genItemID("sroll11"); 
Item.createItem("sroll11", "Scroll: Damage Level 3", {name: "sroll", meta: 1}, {stack: 1});
Translation.addTranslation("Scroll: Damage Level 3", {ru: "Свиток: урона 3 уровня"});
Item.setGlint(ItemID.sroll11, true);

IDRegistry.genItemID("sroll5"); 
Item.createItem("sroll5", "Scroll: Speed", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Speed", {ru: "Свиток: скорости"});

IDRegistry.genItemID("sroll6"); 
Item.createItem("sroll6", "Scroll: Healing Level 1", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Healing Level 1", {ru: "Свиток: лечения уровня 1"});

IDRegistry.genItemID("sroll12"); 
Item.createItem("sroll12", "Scroll: Healing Level 2", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Healing Level 2", {ru: "Свиток: лечения уровня 2"});

IDRegistry.genItemID("sroll13"); 
Item.createItem("sroll13", "Scroll: Healing Level 3", {name: "sroll", meta: 2}, {stack: 1});
Translation.addTranslation("Scroll: Healing Level 3", {ru: "Свиток: лечения уровня 3"});
Item.setGlint(ItemID.sroll13, true);

IDRegistry.genItemID("sroll7"); 
Item.createItem("sroll7", "Scroll: Strength", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Strength", {ru: "Свиток: силы"});

IDRegistry.genItemID("sroll8"); 
Item.createItem("sroll8", "Scroll: Kills", {name: "sroll", meta: 3}, {stack: 1});
Translation.addTranslation("Scroll: Kills", {ru: "Свиток: убийства"});
Item.setGlint(ItemID.sroll8, true);

IDRegistry.genItemID("sroll9"); 
Item.createItem("sroll9", "Scroll: Block Destruction", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Block Destruction", {ru: "Свиток: разрушения блока"});

IDRegistry.genItemID("sroll14"); 
Item.createItem("sroll14", "Scroll: Block Absorption", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Block Absorption", {ru: "Свиток: поглощения блока"});

IDRegistry.genItemID("sroll15"); 
Item.createItem("sroll15", "Scroll: teleportations", {name: "sroll", meta: 2}, {stack: 1});
Translation.addTranslation("Scroll: teleportations", {ru: "Свиток: телепортации"});
Item.setGlint(ItemID.sroll15, true);

IDRegistry.genItemID("sroll16"); 
Item.createItem("sroll16", "Scroll: storms", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: storms", {ru: "Свиток: бури"});

IDRegistry.genItemID("sroll18"); 
Item.createItem("sroll18", "Scroll: Weak Attack", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: Weak Attack", {ru: "Свиток: слабая атака"});

IDRegistry.genItemID("sroll17"); 
Item.createItem("sroll17", "Scroll: Strong Attack", {name: "sroll", meta: 1}, {stack: 1});
Translation.addTranslation("Scroll: Strong Attack", {ru: "Свиток: сильной атаки"});
Item.setGlint(ItemID.sroll17, true);

IDRegistry.genItemID("sroll19"); 
Item.createItem("sroll19", "Scroll: Regeneration", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Regeneration", {ru: "Свиток: регенерации"});

IDRegistry.genItemID("sroll20"); 
Item.createItem("sroll20", "Scroll: magnet", {name: "sroll", meta: 2}, {stack: 1});
Translation.addTranslation("Scroll: magnet", {ru: "Свиток: магнит"});
Item.setGlint(ItemID.sroll20, true);

IDRegistry.genItemID("sroll21"); 
Item.createItem("sroll21", "Scroll: summoning", {name: "sroll", meta: 5}, {stack: 1});
Translation.addTranslation("Scroll: summoning", {ru: "Свиток: призыва"});

IDRegistry.genItemID("sroll22"); 
Item.createItem("sroll22", "Scroll: Death Ray", {name: "sroll", meta: 5}, {stack: 1});
Translation.addTranslation("Scroll: Death Ray", {ru: "Свиток: луч смерти"});

IDRegistry.genItemID("sroll23"); 
Item.createItem("sroll23", "Scroll: rain of the dead", {name: "sroll", meta: 3}, {stack: 1});
Translation.addTranslation("Scroll: rain of the dead", {ru: "Свиток: дождь мёртвых"});
Item.setGlint(ItemID.sroll23, true);

IDRegistry.genItemID("sroll24"); 
Item.createItem("sroll24", "Scroll: Charge Aspects Level 1", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Charge Aspects Level 1", {ru: "Свиток: заряд аспектами 1 уровень"});

IDRegistry.genItemID("sroll25"); 
Item.createItem("sroll25", "Scroll: Charge Aspects Level 2", {name: "sroll", meta: 2}, {stack: 1});
Translation.addTranslation("Scroll: Charge Aspects Level 2", {ru: "Свиток: заряд аспектами 2 уровень"});
Item.setGlint(ItemID.sroll25, true);

IDRegistry.genItemID("sroll26"); 
Item.createItem("sroll26", "Scroll: Explosive Strike", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: Explosive Strike", {ru: "Свиток: взрывной удар"});

IDRegistry.genItemID("sroll29"); 
Item.createItem("sroll29", "Scroll: cleansing", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: cleansing", {ru: "Свиток: очищения"});

IDRegistry.genItemID("sroll30"); 
Item.createItem("sroll30", "Scroll: flight", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: flight", {ru: "Свиток: полёта"});

IDRegistry.genItemID("sroll31"); 
Item.createItem("sroll31", "Scroll: protection", {name: "sroll", meta: 4}, {stack: 1});
Translation.addTranslation("Scroll: protection", {ru: "свиток: защиты"});

IDRegistry.genItemID("SpellSet31"); 
Item.createItem("SpellSet31", "Spell set: ", {name: "book_enchanted", meta: 0}, {stack: 1});
Translation.addTranslation("Spell set: ", {ru: "Набор заклинаний: "});
Item.setGlint(ItemID.SpellSet31, true);
Item.registerNameOverrideFunction(ItemID.SpellSet31, function(item, name) {
    let extra = item.extra || new ItemExtraData();
    return name + extra.getString("name", "нет имени")
});

IDRegistry.genItemID("sroll27"); 
Item.createItem("sroll27", "Scroll: 0.5 second delays", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: 0.5 second delays", {ru: "Свиток: задержки на 0.5 секунды"});

IDRegistry.genItemID("sroll28"); 
Item.createItem("sroll28", "Scroll: 1 second delays", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Scroll: 1 second delays", {ru: "Свиток: задержки на 1 секунды"});

//декоративные заклинания 

IDRegistry.genItemID("decor1"); 
Item.createItem("decor1", "Decoration scroll: storm", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Decoration scroll: storm", {ru: "Свиток декорации: буря"});

IDRegistry.genItemID("decor2"); 
Item.createItem("decor2", "Decoration scroll: field", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Decoration scroll: field", {ru: "Свиток декорации: поле"});

IDRegistry.genItemID("decor3"); 
Item.createItem("decor3", "Decoration scroll: swarm", {name: "sroll", meta: 0}, {stack: 1});
Translation.addTranslation("Decoration scroll: swarm", {ru: "Свиток декорации: рой"});

IDRegistry.genItemID("pelmeni"); 
Item.createFoodItem("pelmeni", "Dumplings", {name: "dumplings", meta: 0}, {stack: 16, food: 10, isTech: true});
Translation.addTranslation("Dumplings", {ru: "Кастрюля пельмений"});

if(config.beta_mode){
IDRegistry.genItemID("tanatos"); 
Item.createItem("tanatos", "Tanathos stone", {name: "tanatos", meta: 0}, {stack: 1});
Translation.addTranslation("Tanathos stone", {ru: "Камень Танатоса"});
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
    if(item.id == ItemID.tanatos){
       for(let i = 0;i <= 10;i++){
            ParticlesAPI.spawnCircle(ParticlesAPI.part4, coords.x, coords.y+1, coords.z, i / 2, 11 * i, 2);
       }
       let bs = BlockSource.getDefaultForActor(player);
       let mob = bs.spawnEntity(coords.x, coords.y + 1, coords.z, "aw:tanatos");
       delItem(player, item);
       Entity.setCarriedItem(mob, ItemID. deadAw, 1, 0);
    }
});
}
IDRegistry.genItemID("aw_amylet");
Item.createArmorItem("aw_amylet", "Mysterious amulet" , {name: "aw_poic", meta: 0}, {type: "helmet", armor: 2, durability: 699, texture: "armor/noy.png"}); 
Translation.addTranslation("Mysterious amulet", {ru: "Таинственный амулет"});
Item.setEnchantType(ItemID.aw_amylet, Native.EnchantType.helmet, 14);
Item.addRepairItemIds(ItemID.aw_amylet, [334]);

Armor.registerOnTakeOffListener(ItemID.aw_amylet, function(item, slot, player) {
    MagicCore.getValue(player).magis-=5;
});
Armor.registerOnTakeOnListener(ItemID.aw_amylet, function(item, slot, player) {
    MagicCore.getValue(player).magis+=5;

});
MagicCore.addArmorMagic(ItemID.aw_amylet, "magic", 5);
IDRegistry.genItemID("aw_amylet2");
Item.createArmorItem("aw_amylet2", "Mysterious amulet" , {name: "aw_poic", meta: 1}, {type: "helmet", armor: 2, durability: 699, texture: "armor/noy.png"}); 
Translation.addTranslation("Mysterious amulet", {ru: "Таинственный амулет"});
Item.setEnchantType(ItemID.aw_amylet2, Native.EnchantType.helmet, 14);
Item.addRepairItemIds(ItemID.aw_amylet2, [334]);
MagicCore.addArmorMagic(ItemID.aw_amylet2, "dead", 10);


Armor.registerOnTakeOffListener(ItemID.aw_amylet2, function(item, slot, player) {
    MagicCore.getValue(player).necromancer-=5;
});
Armor.registerOnTakeOnListener(ItemID.aw_amylet2, function(item, slot, player) {
    MagicCore.getValue(player).necromancer+=5;

});
IDRegistry.genItemID("aw_amylet3");
Item.createArmorItem("aw_amylet3", "Mysterious amulet" , {name: "aw_poic", meta: 2}, {type: "helmet", armor: 2, durability: 699, texture: "armor/noy.png"}); 
Translation.addTranslation("Mysterious amulet", {ru: "Таинственный амулет"});
Item.setEnchantType(ItemID.aw_amylet3, Native.EnchantType.helmet, 14);
Item.addRepairItemIds(ItemID.aw_amylet3, [334]);

Armor.registerOnTakeOffListener(ItemID.aw_amylet3, function(item, slot, player) {
    MagicCore.getValue(player).Protection-=5;
});
Armor.registerOnTakeOnListener(ItemID.aw_amylet3, function(item, slot, player) {
    MagicCore.getValue(player).Protection+=5;

});
IDRegistry.genItemID("aw_amylet4");
Item.createArmorItem("aw_amylet4", "Mysterious amulet" , {name: "aw_poic", meta: 3}, {type: "helmet", armor: 2, durability: 699, texture: "armor/noy.png"}); 
Translation.addTranslation("Mysterious amulet", {ru: "Таинственный амулет"});
Item.setEnchantType(ItemID.aw_amylet4, Native.EnchantType.helmet, 14);
Item.addRepairItemIds(ItemID.aw_amylet4, [334]);
MagicCore.addArmorMagic(ItemID.aw_amylet4, "magic", 5);

Armor.registerOnTickListener(ItemID.aw_amylet4, function(item, slot, player) {
    if(Math.random()<=0.05){
        let c = MagicCore.getValue(player);
        if(c.AspectsNow >= c.Aspects + 2) c.Aspects+=2;
    }
});

if(config.beta_mode){
IDRegistry.genItemID("beltAw");
Item.createArmorItem("beltAw", "Mysterious belt" , {name: "aw_poic", meta: 4}, {type: "leggings", armor: 2, durability: 699, texture: "armor/noy.png"}); 
Translation.addTranslation("Mysterious belt", {ru: "Таинственный пояс"});
Item.setEnchantType(ItemID.beltAw, Native.EnchantType.leggings, 14);
Item.addRepairItemIds(ItemID.beltAw, [334]);
MagicCore.addArmorMagic(ItemID.beltAw, "dead", 20);

IDRegistry.genItemID("deadAw"); 
Item.createItem("deadAw", "Scythe of death", {name: "deadAw", meta: 0}, {stack: 1});
Translation.addTranslation("Scythe of death", {ru: "Коса смерти"});

ToolAPI.addToolMaterial("godDead", {
    durability: 3000,
    level: 5,
    efficiency: 6,
    damage: 15,
    enchantability: 14
});
ToolLib.setTool(ItemID.deadAw, "godDead", ToolType.sword);
}

Item.addCreativeGroup("sroll1", Translation.translate("events", {ru: "события"}), [
	  ItemID.sroll1,
	  ItemID.sroll2,
	  ItemID.sroll2a,
	  ItemID.sroll3,
]);
Item.addCreativeGroup("sroll2", Translation.translate("srolls", {ru: "свитки"}), [
	  ItemID.sroll4,
	  ItemID.sroll5,
	  ItemID.sroll6,
	  ItemID.sroll7,
	  ItemID.sroll8,
	  ItemID.sroll9,
	  ItemID.sroll10,
	  ItemID.sroll11,
	  ItemID.sroll12,
	  ItemID.sroll13,
	  ItemID.sroll14,
	  ItemID.sroll15,
	  ItemID.sroll16,
	  ItemID.sroll17,
	  ItemID.sroll18,
	  ItemID.sroll19,
	  ItemID.sroll20,
	  ItemID.sroll21,
	  ItemID.sroll22,
	  ItemID.sroll23,
	  ItemID.sroll24,
	  ItemID.sroll25,
	  ItemID.sroll26,
	  ItemID.sroll29,
	  ItemID.sroll27,
	  ItemID.sroll28,
	  ItemID.sroll29,
	  ItemID.sroll30,
	  ItemID.sroll31,
]);
Item.addCreativeGroup("decor", Translation.translate("decor", {ru: "декоративные заклинания"}), [
	  ItemID.decor1,
	  ItemID.decor2,
	  ItemID.decor3,
]);
