IMPORT("EnergyNet");
IMPORT("mod");
IMPORT("ChargeItem");
IMPORT("GUILib");
IMPORT("RelativeAPI");
IMPORT("NativeAPI")

var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var QE = EnergyTypeRegistry.assureEnergyType("QE", 1);

var opacityBlocks = [0, 20, 52, 65, 68, 69, 75, 76, 77, 106, 131, 160, 101, 85, 113];

var IndustrialCraftIsExist = false;

ModAPI.addAPICallback("ICore", function(api){
    opacityBlocks.push(BlockID.reinforsedGlass, BlockID.cableOptic);
    
    IDRegistry.genItemID("crushedAdamantite");
    IDRegistry.genItemID("crushedMalachite");
    //IDRegistry.genItemID("crushedMuthril");
    
    Translation.addTranslation("Crushed Adamantite", {ru: "Дроблённый Адамантит"});
    Translation.addTranslation("Crushed Malachite", {ru: "Дроблённый Малахит"});
    //Translation.addTranslation("Crushed Muthril", {ru: "Дроблённый Мифрил"});
    
    Item.createItem("crushedAdamantite", "Crushed Adamantite", {name: "crushedAdamantite"});
    Item.createItem("crushedMalachite", "Crushed Malachite", {name: "crushedMalachite"});
    //Item.createItem("crushedMuthril", "Crushed Muthril", {name: "crushedMuthril"});

    Callback.addCallback("PostLoaded", function(){
        Recipes.addFurnace(ItemID.crushedUranium, ItemID.ingotUranium, 0);
        Recipes.addFurnace(ItemID.crushedAdamantite, ItemID.ingotAdamantite, 0);
        Recipes.addFurnace(ItemID.crushedMalachite, ItemID.ingotMalachite, 0);
        //Recipes.addFurnace(ItemID.crushedMuthril, ItemID.ingotMuthril, 0);
        api.Recipe.addRecipeFor("macerator", BlockID.oreAdamantite, {id: ItemID.crushedAdamantite, count: 2, data: 0});
        api.Recipe.addRecipeFor("macerator", BlockID.oreMalachite, {id: ItemID.crushedMalachite, count: 2, data: 0});
        //api.Recipe.addRecipeFor("macerator", BlockID.oreMuthril, {id: ItemID.crushedMuthril, count: 2, data: 0});
    });

    IndustrialCraftIsExist = true;
});

var UIColor = android.graphics.Color;

var TIPS = __config__.getBool("enable_tips_in_machines");
 
ModAPI.addAPICallback("ForestryAPI", function(api){ 
    opacityBlocks.push(BlockID.forestryGlass); 
});

function random(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;}

var getLightLevel = ModAPI.requireGlobal("Level.getBrightness");
var setRequiresIconOverride = ModAPI.requireGlobal("Item.setRequiresIconOverride");
Armor.preventDamaging = ModAPI.requireGlobal("Armor.preventDamaging");
/*getArmorSlot = ModAPI.requireGlobal("Player.getArmorSlot");
Player.setArmorSlot = ModAPI.requireGlobal("Player.setArmorSlot");*/

const PotionEffect = Native.PotionEffect;

function defaultItemNameOverride(color, type){
    return NameOverrider.standartItemNameOverride(color, type);
}

function defaultBlockNameOverride(color, type){
    return NameOverrider.standartBlockNameOverride(color, type);
}

function energyNameOverride(color, type, tier, mode){ 
    return {colorName: color || "f", prefix:{standart: true, itemType: type}, other: 
        function(item, name){
            if(!mode){
                return "§7"+ Translation.translate("Power tier")+": "+tier;
            }else{
                return "§7"+ Translation.translate("Input")+": "+tier+"/tick";
            }
        }
    }
} 

function chanse(chanse, max){
    return Math.floor(chanse/max*100)
}

function setupWireRender(id, width, group) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    
    ICRender.getGroup(group).add(id, -1)
  
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

var GUI_BAR_STANDART_SCALE = 4.2;

var gui = {};