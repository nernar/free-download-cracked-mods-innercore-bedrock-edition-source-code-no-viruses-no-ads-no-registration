IDRegistry.genItemID("datamodel_blank");
Item.createItem("datamodel_blank", "Blank Data Model", {name: "datamodel_blank"});
Recipes2.addShaped(ItemID.datamodel_blank, "aba:cdc:aea", {a: {id: 351, data: 4}, b: 356, c: ItemID.charred_redstone, d: {id: 1, data: 0}, e: 266});


const extractionRecipe = {};

const DataModel = {
    
    data: {},
    
    needData: [6, 48, 300, 900],
    chance: [0.05, 0.11, 0.24, 0.42],
    dataPerKill: [1, 4, 10, 18],
    
    typeName: ["Overworldian", "Hellish", "Extraterrestrial"],//acd
    tierName: ["Faulty", "Basic", "Advanced", "Superior", "Self Aware"],//8a9d6
    
    nameOverride: function(item, name){
        const datamodel = DataModel.getData(item.id);
        const tier = DataModel.getTier(item.data);
        return name
            + "\n§fTier: " + DataModel.tierName[tier]
            + "\nData collected: " + DataModel.getCollectedData(item.data) + " / " + DataModel.needData[tier]
            + "\nData per kill: " + DataModel.dataPerKill[tier]
            + "\nSimulation cost: " + datamodel.cost + " RF/t"
            + "\nType: " + DataModel.typeName[datamodel.type];
    },
    
    registerMob: function(key, obj){
        const datamodel = IDRegistry.genItemID("datamodel_" + key);
        const pristine = IDRegistry.genItemID("pristine_" + key);
        const name = obj.name || key.charAt(0).toUpperCase() + key.slice(1);
        Item.createItem("datamodel_" + key, "§b" + name + " Data Model", {name: "datamodel_" + key}, {stack: 1});
        Item.createItem("pristine_" + key, "Pristine " + name + " Matter", {name: "pristine_" + key});
        Item.registerNameOverrideFunction(datamodel, this.nameOverride);
        Item.setGlint(pristine, true);
        const words = obj.info.split(" ");
        const textArray = [];
        let text = "";
        for(let i = 0; i < words.length; i++){
            if(text.length + words[i].length < 30){
                text += words[i] + " ";
            }
            else{
                textArray.push(text);
                text = "";
            }
        }
        text && textArray.push(text);
        this.data[datamodel] = {
            key: key,
            name: name,
            entity: obj.entity,
            type: obj.type,
            cost: obj.cost,
            life: obj.life,
            pristine: pristine,
            info: textArray.join("\n")
        };
        obj.recipeItem && Recipes2.addShapeless(datamodel, [obj.recipeItem, ItemID.datamodel_blank]);
        extractionRecipe[pristine] = obj.loot.map(function(item){
            return {id: item.id, count: item.count, data: item.data || 0};
        });
    },
    
    addLootItem: function(key){
        for(let id in this.data){
            if(this.data[id].key === key){
                for(let i = 1; i < arguments.length; i++){
                    this.data[id].loot.push(arguments[i]);
                }
                break;
            }
        }
    },
    
    getData: function(id){
        return this.data[id];
    },
    
    isDataModel: function(id){
        return id in this.data;
    },
    
    getTier: function(data){
        let total = 0;
        for(let i = 0; i < 4; i++){
            total += this.needData[i];
            if(data < total){
                return i;
            }
        }
        return 4;
    },
    
    getCollectedData: function(data){
        const tier = this.getTier(data);
        for(let i = 0; i < tier; i++){
            data -= this.needData[i];
        }
        return data;
    },
    
    matter: [ItemID.matter_overworld, ItemID.matter_hell, ItemID.matter_extra],
    getMatter: function(type){
        return this.matter[type];
    }
    
};


DataModel.registerMob("zombie", {
    entity: Native.EntityType.ZOMBIE || 32,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 367, count: 64}, {id: 265, count: 16}, {id: 391, count: 32}, {id: 392, count: 32}],
    info: "They go moan in the night. Does not understand the need for personal space",
    recipeItem: 367
});

DataModel.registerMob("skeleton", {
    entity: Native.EntityType.SKELETON || 34,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 352, count: 64}, {id: 262, count: 64}, {id: 397, count: 6}],
    info: "A formidable archer, which seem to be running some sort of cheat engine A shield could prove useful",
    recipeItem: 352
});

DataModel.registerMob("creeper", {
    entity: Native.EntityType.CREEPER || 33,
    type: 0,
    cost: 80,
    life: 10,
    loot: [{id: 289, count: 64}, {id: 397, count: 6, data: 4}],
    info: "Will blow up your base if left unattended.",
    recipeItem: 289
});

DataModel.registerMob("spider", {
    entity: Native.EntityType.SPIDER || 35,
    type: 0,
    cost: 80,
    life: 8,
    loot: [{id: 375, count: 16}, {id: 287, count: 64}, {id: 30, count: 8}],
    info: "Nocturnal douchebags, beware Drops strands of string for some reason..",
    recipeItem: 375
});

DataModel.registerMob("slime", {
    entity: Native.EntityType.SLIME || 37,
    type: 0,
    cost: 150,
    life: 8,
    loot: [{id: 341, count: 32}],
    info: "The bounce bounce his bounce squish - \"A slime haiku\"",
    recipeItem: 341
});

DataModel.registerMob("witch", {
    entity: Native.EntityType.WITCH || 45,
    type: 0,
    cost: 120,
    life: 13,
    loot: [{id: 331, count: 32}, {id: 348, count: 32}, {id: 353, count: 64}],
    info: "Affinity with potions and concoctions Beware!",
    recipeItem: 374
});

DataModel.registerMob("blaze", {
    entity: Native.EntityType.BLAZE || 43,
    type: 1,
    cost: 256,
    life: 10,
    loot: [{id: 369, count: 22}],
    info: "Bring buckets, and watch in despair as it evaporates, and everything is on fire You are on fire",
    recipeItem: 377
});

DataModel.registerMob("ghast", {
    entity: Native.EntityType.GHAST || 41,
    type: 1,
    cost: 372,
    life: 5,
    loot: [{id: 370, count: 8}],
    info: "If you hear something that sounds like a crying llama, you're probably hearing a ghast",
    recipeItem: 370
});

DataModel.registerMob("skeleton2", {
    name: "Wither Skeleton",
    entity: Native.EntityType.WITHER_SKELETON || 48,
    type: 1,
    cost: 880,
    life: 10,
    loot: [{id: 397, count: 18, data: 1}, {id: 263, count: 64}],
    info: "Inflicts the wither effect Bring milk",
    recipeItem: {id: 397, data: 1}
});

DataModel.registerMob("enderman", {
    entity: Native.EntityType.ENDERMAN || 38,
    type: 2,
    cost: 512,
    life: 20,
    loot: [{id: 368, count: 6}, {id: 426, count: 1}],
    info: "Friendly unless provoked, dislikes rain. Teleports short distances",
    recipeItem: 368
});

DataModel.registerMob("wither", {
    entity: Native.EntityType.WITHER || 52,
    type: 2,
    cost: 2048,
    life: 150,
    loot: [{id: 399, count: 3}],
    info: "Do not approach this enemy. Run! I mean it has 3 heads, what could possibly go wrong?",
    recipeItem: 399
});

DataModel.registerMob("dragon", {
    name: "Ender Dragon",
    entity: Native.EntityType.ENDER_DRAGON || 53,
    type: 2,
    cost: 2560,
    life: 100,
    loot: [{id: 437, count: 32}, {id: 122, count: 1}],
    info: "Resides in the end, does not harbor treasure Destroy it's crystals, break the cycle.",
    recipeItem: 122
});

DataModel.registerMob("shulker", {
    entity: Native.EntityType.SHULKER || 54,
    type: 2,
    cost: 256,
    life: 15,
    loot: [{id: 445, count: 18}, {id: 264, count: 2}],
    info: "Found in End cities Sneaky little buggers",
    recipeItem: 445
});

DataModel.registerMob("guardian", {
    entity: Native.EntityType.GUARDIAN || 49,
    type: 0,
    cost: 340,
    life: 15,
    loot: [{id: 409, count: 32}, {id: 422, count: 32}, {id: 349, count: 64}],
    info: "Lurking in the oceans. Uses some sort of sonar beam as a means of attack",
    recipeItem: 409
});