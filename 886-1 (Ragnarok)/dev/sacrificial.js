IDRegistry.genBlockID("sacrificial_stone");
Block.createBlock("sacrificial_stone", [
	{name: "Sacrificial Stone", texture: [["sacrificial_stone_bottom", 0], ["sacrificial_stone_top", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0], ["sacrificial_stone_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.sacrificial_stone, "stone", 2, true);

Recipes.addShaped({id: BlockID.sacrificial_stone, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 4, 0]);

IDRegistry.genBlockID("archaic_table");
Block.createBlock("archaic_table", [
	{name: "Archaic Table", texture: [["archaic_table_bottom", 0], ["archaic_table_top", 0], ["archaic_table_side", 0], ["archaic_table_side", 0], ["archaic_table_side", 0], ["archaic_table_side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.archaic_table, "stone", 2, true);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 0]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 1]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 2]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 3]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 4]);

Recipes.addShaped({id: BlockID.archaic_table, count: 1, data: 0}, [
    "xxx",
    "xax",
    "xxx"
], ['a', ItemID.grimoire, 0, 'x', 5, 5]);

//gui Sacrificial Stone

var guiSacrificial_Stone = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Sacrificial Stone"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 495, y: 90, bitmap: "plus", scale: 1.8},
        {type: "text", x: 490, y: 65, text: "Spirits"},
        {type: "text", x: 805, y: 65, text: "God"},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 400, y: 90},
        "slotSource2": {type: "slot", x: 500, y: 185},
        "slotSource3": {type: "slot", x: 600, y: 90},
        "slotResult1": {type: "slot", x: 800, y: 90},
    }
});

var SacrificialStone = {
    recipes: {},
  
   set: function(nagymet1, nagymet2, nagymet3, result){
      this.recipes[JSON.stringify([nagymet1, nagymet2, nagymet3])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1, nagymet2, nagymet3){
     return this.recipes[JSON.stringify([nagymet1, nagymet2, nagymet3])];
}
};

SacrificialStone.set(ItemID.shadow_spirit, ItemID.shadow_spirit, ItemID.undead_spirit, {
    id: ItemID.izanami, count: 1, data: 0
});

SacrificialStone.set(ItemID.shadow_spirit, ItemID.shadow_spirit, ItemID.war_spirit, {
    id: ItemID.ravana, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.cold_spirit, ItemID.shadow_spirit, {
    id: ItemID.arawn, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.mental_spirit, ItemID.shadow_spirit, {
    id: ItemID.anubis, count: 1, data: 0
});

SacrificialStone.set(ItemID.toxic_spirit, ItemID.undead_spirit, ItemID.undead_spirit, {
    id: ItemID.ah_puch, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.shadow_spirit, ItemID.undead_spirit, {
    id: ItemID.hades, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.pixie_spirit, ItemID.undead_spirit, {
    id: ItemID.hel, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.shadow_spirit, {
    id: ItemID.yama, count: 1, data: 0
});

SacrificialStone.set(ItemID.stone_spirit, ItemID.stone_spirit, ItemID.stone_spirit, {
    id: ItemID.geb, count: 1, data: 0
});

SacrificialStone.set(ItemID.sand_spirit, ItemID.sand_spirit, ItemID.war_spirit, {
    id: ItemID.seth, count: 1, data: 0
});

SacrificialStone.set(ItemID.plant_spirit, ItemID.sea_spirit, ItemID.thunder_spirit, {
    id: ItemID.chaac, count: 1, data: 0
});

SacrificialStone.set(ItemID.thunder_spirit, ItemID.thunder_spirit, ItemID.war_spirit, {
    id: ItemID.thor, count: 1, data: 0
});

SacrificialStone.set(ItemID.ore_spirit, ItemID.ore_spirit, ItemID.wyvern_spirit, {
    id: ItemID.fafnir, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.flame_spirit, {
    id: ItemID.agni, count: 1, data: 0
});

SacrificialStone.set(ItemID.pixie_spirit, ItemID.stone_spirit, ItemID.wind_spirit, {
    id: ItemID.nuwa, count: 1, data: 0
});

SacrificialStone.set(ItemID.sea_spirit, ItemID.sea_spirit, ItemID.sea_spirit, {
    id: ItemID.poseidon, count: 1, data: 0
});

SacrificialStone.set(ItemID.insect_spirit, ItemID.insect_spirit, ItemID.toxic_spirit, {
    id: ItemID.arachne, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.flame_spirit, ItemID.hero_spirit, {
    id: ItemID.amaterasu, count: 1, data: 0
});

SacrificialStone.set(ItemID.pixie_spirit, ItemID.pixie_spirit, ItemID.plant_spirit, {
    id: ItemID.cernunnos, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.war_spirit, ItemID.wind_spirit, {
    id: ItemID.morrigan, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.mental_spirit, ItemID.mental_spirit, {
    id: ItemID.thoth, count: 1, data: 0
});

SacrificialStone.set(ItemID.thunder_spirit, ItemID.thunder_spirit, ItemID.wind_spirit, {
    id: ItemID.zeus, count: 1, data: 0
});

SacrificialStone.set(ItemID.ore_spirit, ItemID.stone_spirit, ItemID.wind_spirit, {
    id: ItemID.yuhuang, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.pixie_spirit, ItemID.war_spirit, {
    id: ItemID.discordia, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.cold_spirit, ItemID.cold_spirit, {
    id: ItemID.skadi, count: 1, data: 0
});

SacrificialStone.set(ItemID.cold_spirit, ItemID.mental_spirit, ItemID.mental_spirit, {
    id: ItemID.odin, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.sand_spirit, ItemID.sand_spirit, {
    id: ItemID.ra, count: 1, data: 0
});

SacrificialStone.set(ItemID.plant_spirit, ItemID.stone_spirit, ItemID.sea_spirit, {
    id: ItemID.terra, count: 1, data: 0
});

SacrificialStone.set(ItemID.mental_spirit, ItemID.sea_spirit, ItemID.shadow_spirit, {
    id: ItemID.cthulhu, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.sea_spirit, ItemID.stone_spirit, {
    id: ItemID.pele, count: 1, data: 0
});

SacrificialStone.set(ItemID.flame_spirit, ItemID.undead_spirit, ItemID.undead_spirit, {
    id: ItemID.cerberus, count: 1, data: 0
});

TileEntity.registerPrototype(BlockID.sacrificial_stone, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiSacrificial_Stone;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        let source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = SacrificialStone.get(source1.id, source2.id, source3.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});

//gui archaic_table

var guiArchaicTable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Archaic Table"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 495, y: 150, bitmap: "plus", scale: 1.8},
        {type: "bitmap", x: 700, y: 150, bitmap: "arrow", scale: 1.8},
        {type: "text", x: 405, y: 125, text: "God"},
        {type: "text", x: 590, y: 125, text: "Offering"},
        {type: "text", x: 785, y: 125, text: "Blessing"},
],
    
    elements: {
        "slotSource1": {type: "slot", x: 400, y: 150},
        "slotSource2": {type: "slot", x: 600, y: 150},
        "slotResult1": {type: "slot", x: 800, y: 150},
    }
});

var ArchaicTable = {
    recipes: {},
  
   set: function(nagymet1, nagymet2, result){
      this.recipes[JSON.stringify([nagymet1, nagymet2])] = {id: result.id, count: result.count, data: result.data};
},
 
   get: function(nagymet1, nagymet2){
     return this.recipes[JSON.stringify([nagymet1, nagymet2])];
}
};

ArchaicTable.set(ItemID.izanami, ItemID.offering, {
    id: ItemID.raw_yomite, count: 3, data: 0
});

ArchaicTable.set(ItemID.ravana, ItemID.offering, {
    id: ItemID.raw_narakasite, count: 3, data: 0
});

ArchaicTable.set(ItemID.arawn, ItemID.offering, {
    id: ItemID.raw_annwinite, count: 3, data: 0
});

ArchaicTable.set(ItemID.anubis, ItemID.offering, {
    id: ItemID.raw_duatite, count: 3, data: 0
});

ArchaicTable.set(ItemID.ah_puch, ItemID.offering, {
    id: ItemID.raw_xibalbaite, count: 3, data: 0
});

ArchaicTable.set(ItemID.hades, ItemID.offering, {
    id: ItemID.raw_hadesite, count: 3, data: 0
});

ArchaicTable.set(ItemID.hel, ItemID.offering, {
    id: ItemID.raw_helheimite, count: 3, data: 0
});

ArchaicTable.set(ItemID.yama, ItemID.offering, {
    id: ItemID.raw_diyuite, count: 3, data: 0
});

ArchaicTable.set(ItemID.geb, ItemID.offering, {
    id: 1, count: 32, data: 0
});

ArchaicTable.set(ItemID.seth, ItemID.offering, {
    id: 12, count: 32, data: 0
});

ArchaicTable.set(ItemID.chaac, ItemID.offering, {
    id: 295, count: 32, data: 0
});

ArchaicTable.set(ItemID.thor, ItemID.offering, {
    id: 265, count: 5, data: 0
});

ArchaicTable.set(ItemID.fafnir, ItemID.offering, {
    id: 266, count: 5, data: 0
});

ArchaicTable.set(ItemID.agni, ItemID.offering, {
    id: 263, count: 10, data: 0
});

ArchaicTable.set(ItemID.nuwa, ItemID.offering, {
    id: 337, count: 32, data: 0
});

ArchaicTable.set(ItemID.poseidon, ItemID.offering, {
    id: VanillaItemID.cod, count: 16, data: 0
});

ArchaicTable.set(ItemID.arachne, ItemID.offering, {
    id: 287, count: 16, data: 0
});

ArchaicTable.set(ItemID.amaterasu, ItemID.offering, {
    id: 348, count: 32, data: 0
});

ArchaicTable.set(ItemID.cernunnos, ItemID.offering, {
    id: 334, count: 8, data: 0
});

ArchaicTable.set(ItemID.morrigan, ItemID.offering, {
    id: 288, count: 8, data: 0
});

ArchaicTable.set(ItemID.thoth, ItemID.offering, {
    id: 339, count: 16, data: 0
});

ArchaicTable.set(ItemID.zeus, ItemID.offering, {
    id: 56, count: 1, data: 0
});

ArchaicTable.set(ItemID.yuhuang, ItemID.offering, {
    id: 129, count: 1, data: 0
});

ArchaicTable.set(ItemID.discordia, ItemID.offering, {
    id: 260, count: 16, data: 0
});

ArchaicTable.set(ItemID.skadi, ItemID.offering, {
    id: 35, count: 5, data: 0
});

ArchaicTable.set(ItemID.odin, ItemID.offering, {
    id: 384, count: 3, data: 0
});

ArchaicTable.set(ItemID.ra, ItemID.offering, {
    id: 377, count: 6, data: 0
});

ArchaicTable.set(ItemID.terra, ItemID.offering, {
    id: 318, count: 12, data: 0
});

ArchaicTable.set(ItemID.cthulhu, ItemID.offering, {
    id: 368, count: 1, data: 0
});

ArchaicTable.set(ItemID.pele, ItemID.offering, {
    id: 49, count: 6, data: 0
});

ArchaicTable.set(ItemID.cerberus, ItemID.offering, {
    id: 372, count: 6, data: 0
});

TileEntity.registerPrototype(BlockID.archaic_table, {
    defaultValues: {
        progress: 0
    },    
    getGuiScreen: function(){
        return guiArchaicTable;
    },  
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        let source2 = this.container.getSlot("slotSource2");
        var resultSlot1 = this.container.getSlot("slotResult1");

let f = ArchaicTable.get(source1.id, source2.id);
        {
        if(f!=null) {
   if((((resultSlot1.id == f.id && resultSlot1.data == f.data) && resultSlot1.count < 64) || resultSlot1.id == 0) && this.data.progress ++ >= 2){
            source2.count--;
            resultSlot1.id = f.id;
            resultSlot1.data = f.data;
            resultSlot1.count+= f.count;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        this.container.setScale("progressScale", this.data.progress / 0);
    },
});