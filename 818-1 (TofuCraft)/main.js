/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 9
*/



// file: translation.js

Translation.addTranslation("drain", { zh: "吸收", jp: "吸収", en: "Drain" });
Translation.addTranslation("batch", { zh: "范围采掘", jp: "一括採掘", en: "Batch" });

Translation.addTranslation("tooldiamondaxe", { zh: "钻石豆腐斧", jp: "金剛豆腐斧", en: "Diamond Tofu Axe" });
Translation.addTranslation("toolkinuaxe", { zh: "嫩豆腐斧", jp: "絹ごし豆腐斧", en: "Kinugoshi Tofu Axe" });
Translation.addTranslation("toolmomenaxe", { zh: "豆腐斧", jp: "木綿豆腐斧", en: "Momen Tofu Axe" });
Translation.addTranslation("toolsolidaxe", { zh: "石豆腐斧", jp: "石豆腐斧", en: "Solid Tofu Axe" });
Translation.addTranslation("toolmetalaxe", { zh: "钢豆腐斧", jp: "鋼豆腐斧", en: "Metal Tofu Axe" });

Translation.addTranslation("tooldiamondpickaxe", { zh: "钻石豆腐镐", jp: "金剛豆腐ツルハシ", en: "Diamond Tofu Pickaxe" });
Translation.addTranslation("toolkinupickaxe", { zh: "嫩豆腐镐", jp: "絹ごし豆腐ツルハシ", en: "Kinugoshi Tofu Pickaxe" });
Translation.addTranslation("toolmomenpickaxe", { zh: "豆腐镐", jp: "木綿豆腐ツルハシ", en: "Momen Tofu Pickaxe" });
Translation.addTranslation("toolsolidpickaxe", { zh: "石豆腐镐", jp: "石豆腐ツルハシ", en: "Solid Tofu Pickaxe" });
Translation.addTranslation("toolmetalpickaxe", { zh: "钢豆腐镐", jp: "鋼豆腐ツルハシ", en: "Metal Tofu Pickaxe" });

Translation.addTranslation("tooldiamondshovel", { zh: "钻石豆腐锹", jp: "金剛豆腐シャベル", en: "Diamond Tofu Shovel" });
Translation.addTranslation("toolkinushovel", { zh: "嫩豆腐锹", jp: "絹ごし豆腐シャベル", en: "Kinugoshi Tofu Shovel" });
Translation.addTranslation("toolmomenshovel", { zh: "豆腐锹", jp: "木綿豆腐シャベル", en: "Momen Tofu Shovel" });
Translation.addTranslation("toolsolidshovel", { zh: "石豆腐锹", jp: "石豆腐シャベル", en: "Solid Tofu Shovel" });
Translation.addTranslation("toolmetalshovel", { zh: "钢豆腐锹", jp: "鋼豆腐シャベル", en: "Metal Tofu Shovel" });

Translation.addTranslation("sworddiamond", { zh: "钻石豆腐剑", jp: "金剛豆腐剣", en: "Diamond Tofu Sword" });
Translation.addTranslation("swordkinu", { zh: "嫩豆腐剑", jp: "絹豆腐剣", en: "Kinu Tofu Sword" });
Translation.addTranslation("swordmomen", { zh: "豆腐剑", jp: "木綿豆腐剣", en: "Momen Tofu Sword" });
Translation.addTranslation("swordsolid", { zh: "石豆腐剑", jp: "石豆腐剣", en: "Solid Tofu Sword" });
Translation.addTranslation("swordmetal", { zh: "钢豆腐剑", jp: "鋼豆腐剣", en: "Metal Tofu Sword" });

Translation.addTranslation("soymilk hell", { zh: "地狱豆浆", jp: "地獄豆乳", en: "Hell Soy Milk" });

Translation.addTranslation("activatedhelltofu", { zh: "充能的地狱豆腐", jp: "活性地獄豆腐", en: "Activated Hell Tofu" });
Translation.addTranslation("activatedtofugem", { zh: "充能的豆腐宝石", jp: "活性豆腐石", en: "Activated Tofu Gem" });

Translation.addTranslation("saltfurnace", { zh: "盐炉", jp: "製塩かまど", en: "Salt Furnace" });




// file: TCRcore.js

IMPORT("BlockEngine", "*");
IMPORT("EnchantmentLib", "*");
IMPORT("TileRender", "*");

var TCAPI = {
    registerBasicItem: function(name, stack) {
        IDRegistry.genItemID("tofucraft_" + name);
        Item.createItem("tofucraft_" + name, name, {
            name: name
        }, {
            isTech: false,
            stack: stack
        });
    },
    onValueChanged: function(namespace, value, func) {
        if (!this.namespace.value) {
            this.namespace.value = func;
        };
        if (this.namespace.value != namespace) {
            func();
        };
    }
};

var tcFoodAPI = {

};

var tcMachineAPI = {
    baseRegister: function(id, data, textureArray1, textureArray2, tileEntityParams) {
        TileRenderer.setStandardModel(id, -1, textureArray1);
        TileRenderer.registerModelWithRotation(id, 0, textureArray1);
        TileRenderer.registerModelWithRotation(id, 4, textureArray2);
        TileRenderer.setRotationPlaceFunction(id);
        tileEntityParams.defaultValues.meta = 0;
        TileEntity.registerPrototype(id, tileEntityParams);
    }
};

var tcDimensionAPI = {

};

var tcPlantAPI = {

};

var tcToolAPI = {
    defaultfacter: 1,
    EnchantTypes: {}
};

var tcEntityAPI = {

};

var tcTofuBlockAPI = {

};




// file: Enchants.js

tcToolAPI.EnchantTypes.drain = new Enchant("drain", Translation.translate("drain"), {
    frequency: 3,
    in_trade: true,
    in_table: true,
    is_treasure: false,
    level: [1, 5],
    cost: [16, 32, 48, 64],
    mask: EnchantSlot.addGroup("sword", EnchantSlotTypes.SWORD)
});
tcToolAPI.EnchantTypes.batch = new Enchant("batch", Translation.translate("batch"), {
    frequency: 3,
    in_trade: true,
    in_table: true,
    is_treasure: false,
    level: [1, 3],
    cost: [16, 32, 48, 64],
    mask: EnchantSlot.addGroup("tool", EnchantSlotTypes.SHOVEL, EnchantSlotTypes.PICKAXE, EnchantSlotTypes.AXE)
});




// file: ToolTypes.js





// file: tools/swords.js

ItemRegistry.addToolMaterial("tofucraft_kinusword", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momensword", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidsword", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalsword", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondsword", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_swordkinu", {
    name: "swordkinu",
    icon: "swordkinu",
    material: "tofucraft_kinusword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_momensword", {
    name: "swordmomen",
    icon: "swordmomen",
    material: "tofucraft_momensword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_solidsword", {
    name: "swordsolid",
    icon: "swordsolid",
    material: "tofucraft_solidsword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_metalsword", {
    name: "swordmetal",
    icon: "swordmetal",
    material: "tofucraft_metalsword"
}, ToolType.SWORD);
ItemRegistry.createTool("tofucraft_diamondsword", {
    name: "sworddiamond",
    icon: "sworddiamond",
    material: "tofucraft_diamondsword"
}, ToolType.SWORD);
Callback.addCallback("EntityHurt",
function(attacker, entity, damageValue, damageType, someBool1, someBool2) {
    var item = Entity.getCarriedItem(attacker);
    var Extra = item.extra;
    var n = 8;
    if (Extra && Extra.getEnchants().id == tcToolAPI.EnchantTypes.drain.id) {
        n = 8 + 0.5 * Extra.getEnchantLevel(tcToolAPI.EnchantTypes.drain.id);
        if (__config__.getBool("debug")) alert("附魔等级" + Extra.getEnchantLevel(tcToolAPI.EnchantTypes.drain.id));
    };
    if (item.id != ItemID.tofucraft_diamondsword) return;
    var max = Entity.getMaxHealth(attacker);
    var now = Entity.getHealth(attacker);
    if (__config__.getBool("debug")) Game.message("§6" + "玩家最大血量" + "@" + max + "\n" + "玩家当前血量" + "@" + now);
    if (now < max) {
        Entity.setHealth(attacker, now + n * tcToolAPI.defaultfacter);
    };
});




// file: tools/axes.js

ItemRegistry.addToolMaterial("tofucraft_kinuaxe", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momenaxe", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidaxe", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalaxe", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondaxe", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_axekinu", {
    name: "toolkinuaxe",
    icon: "toolkinuaxe",
    material: "tofucraft_kinuaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_momenaxe", {
    name: "toolmomenaxe",
    icon: "toolmomenaxe",
    material: "tofucraft_momenaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_solidaxe", {
    name: "toolsolidaxe",
    icon: "toolsolidaxe",
    material: "tofucraft_solidaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_metalaxe", {
    name: "toolmetalaxe",
    icon: "toolmetalaxe",
    material: "tofucraft_metalaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_diamondaxe", {
    name: "tooldiamondaxe",
    icon: "tooldiamondaxe",
    material: "tofucraft_diamondaxe"
}, ToolType.axe);
Callback.addCallback("DestroyBlock",
function(coords, block, player) {
    if (Entity.getCarriedItem(player).id != ItemID.tofucraft_diamondaxe) return;
    var region = BlockSource.getDefaultForActor(player);
    var material = ToolAPI.getBlockMaterialName(block.id);
    var data = Entity.getCarriedItem(player).data;
    if (__config__.getBool("debug")) Game.message("§6" + "中心方块" + "@" + coords.x + ":" + coords.y + ":" + coords.z);
//    if (!ToolType.TofuCraft_Axe_Diamond[material] && block.id != VanillaBlockID.log && block.id != VanillaBlockID.log2) return;
    var item = Entity.getCarriedItem(player);
    var Extra = item.extra;
    var Elevel = Extra && Extra.getEnchantLevel(tcToolAPI.EnchantTypes.batch.id) || 0;
    for (var x = coords.x - 1 - Elevel; x <= coords.x + 1 + Elevel; x++) {
        for (var y = coords.y - 1 - Elevel; y <= coords.y + 1 + Elevel; y++) {
            for (var z = coords.z - 1 - Elevel; z <= coords.z + 1 + Elevel; z++) {
                var sblock = region.getBlock(x, y, z);
                var vmaterial = ToolAPI.getBlockMaterialName(sblock.id);
                var level = ToolAPI.getBlockDestroyLevel(sblock.id);
                if ((vmaterial == material || sblock.id == block.id) && level <= 4) {
                    region.destroyBlock(x, y, z, true);
                    data += 1;
                    Entity.setCarriedItem(player, Entity.getCarriedItem(player).id, 1, data, Extra);
                    if (__config__.getBool("debug")) Game.message("§6" + "拓展方块" + "@" + x + ":" + y + ":" + z);
                };
            };
        };
    };
});




// file: tools/pickaxes.js

ItemRegistry.addToolMaterial("tofucraft_kinupickaxe", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momenpickaxe", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidpickaxe", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalpickaxe", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondpickaxe", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_pickaxekinu", {
    name: "toolkinupickaxe",
    icon: "toolkinupickaxe",
    material: "tofucraft_kinupickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_momenpickaxe", {
    name: "toolmomenpickaxe",
    icon: "toolmomenpickaxe",
    material: "tofucraft_momenpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_solidpickaxe", {
    name: "toolsolidpickaxe",
    icon: "toolsolidpickaxe",
    material: "tofucraft_solidpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_metalpickaxe", {
    name: "toolmetalpickaxe",
    icon: "toolmetalpickaxe",
    material: "tofucraft_metalpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_diamondpickaxe", {
    name: "tooldiamondpickaxe",
    icon: "tooldiamondpickaxe",
    material: "tofucraft_diamondpickaxe"
}, ToolType.pickaxe);
Callback.addCallback("DestroyBlock",
function(coords, block, player) {
    if (Entity.getCarriedItem(player).id != ItemID.tofucraft_diamondpickaxe) return;
    var region = BlockSource.getDefaultForActor(player);
    var material = ToolAPI.getBlockMaterialName(block.id);
    var data = Entity.getCarriedItem(player).data;
    if (__config__.getBool("debug")) Game.message("§6" + "中心方块" + "@" + coords.x + ":" + coords.y + ":" + coords.z);
    var item = Entity.getCarriedItem(player);
    var Extra = item.extra;
    var Elevel = Extra && Extra.getEnchantLevel(tcToolAPI.EnchantTypes.batch.id) || 0;
    for (var x = coords.x - 1 - Elevel; x <= coords.x + 1 + Elevel; x++) {
        for (var y = coords.y - 1 - Elevel; y <= coords.y + 1 + Elevel; y++) {
            for (var z = coords.z - 1 - Elevel; z <= coords.z + 1 + Elevel; z++) {
                var sblock = region.getBlock(x, y, z);
                var vmaterial = ToolAPI.getBlockMaterialName(sblock.id);
                var level = ToolAPI.getBlockDestroyLevel(sblock.id);
                if ((vmaterial == material || sblock.id == block.id) && level <= 4) {
                    region.destroyBlock(x, y, z, true);
                    data += 1;
                    Entity.setCarriedItem(player, Entity.getCarriedItem(player).id, 1, data, Extra);
                    if (__config__.getBool("debug")) Game.message("§6" + "拓展方块" + "@" + x + ":" + y + ":" + z);
                };
            };
        };
    };
});




// file: tools/shovels.js

ItemRegistry.addToolMaterial("tofucraft_kinushovel", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momenshovel", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidshovel", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalshovel", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondshovel", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_shovelkinu", {
    name: "toolkinushovel",
    icon: "toolkinushovel",
    material: "tofucraft_kinushovel"
}, ToolType.SHOVEL);
ItemRegistry.createTool("tofucraft_momenshovel", {
    name: "toolmomenshovel",
    icon: "toolmomenshovel",
    material: "tofucraft_momenshovel"
}, ToolType.SHOVEL);
ItemRegistry.createTool("tofucraft_solidshovel", {
    name: "toolsolidshovel",
    icon: "toolsolidshovel",
    material: "tofucraft_solidshovel"
}, ToolType.SHOVEL);
ItemRegistry.createTool("tofucraft_metalshovel", {
    name: "toolmetalshovel",
    icon: "toolmetalshovel",
    material: "tofucraft_metalshovel"
}, ToolType.SHOVEL);
ItemRegistry.createTool("tofucraft_diamondshovel", {
    name: "tooldiamondshovel",
    icon: "tooldiamondshovel",
    material: "tofucraft_diamondshovel"
}, ToolType.SHOVEL);
Callback.addCallback("DestroyBlock",
function(coords, block, player) {
    if (Entity.getCarriedItem(player).id != ItemID.tofucraft_diamondshovel) return;
    var region = BlockSource.getDefaultForActor(player);
    var material = ToolAPI.getBlockMaterialName(block.id);
    var data = Entity.getCarriedItem(player).data;
    if (__config__.getBool("debug")) Game.message("§6" + "中心方块" + "@" + coords.x + ":" + coords.y + ":" + coords.z);
    var item = Entity.getCarriedItem(player);
    var Extra = item.extra;
    var Elevel = Extra && Extra.getEnchantLevel(tcToolAPI.EnchantTypes.batch.id) || 0;
    for (var x = coords.x - 1 - Elevel; x <= coords.x + 1 + Elevel; x++) {
        for (var y = coords.y - 1 - Elevel; y <= coords.y + 1 + Elevel; y++) {
            for (var z = coords.z - 1 - Elevel; z <= coords.z + 1 + Elevel; z++) {
                var sblock = region.getBlock(x, y, z);
                var vmaterial = ToolAPI.getBlockMaterialName(sblock.id);
                var level = ToolAPI.getBlockDestroyLevel(sblock.id);
                if ((vmaterial == material || sblock.id == block.id) && level <= 4) {
                    region.destroyBlock(x, y, z, true);
                    data += 1;
                    Entity.setCarriedItem(player, Entity.getCarriedItem(player).id, 1, data, Extra);
                    if (__config__.getBool("debug")) Game.message("§6" + "拓展方块" + "@" + x + ":" + y + ":" + z);
                };
            };
        };
    };
});




// file: machines/saltfurnace.js

IDRegistry.genBlockID("tofucraft_saltfurnace");
Block.createBlock("tofucraft_saltfurnace", [{
    name: "saltfurnace",
    texture: [
        ["saltfurnace_bottom", 0],
        ["saltfurnace_top", 0],
        ["saltfurnace_side", 0],
        ["saltfurnace_front", 0],
        ["saltfurnace_side", 0],
        ["saltfurnace_side", 0]
    ],
    inCreative: true
}], {
    sound: "stone"
});
ToolAPI.registerBlockMaterial(BlockID.tofucraft_saltfurnace, "stone");

var tofucraft_saltfurnaceGui = new UI.StandardWindow({
    standart: {
        header: {
            color: android.graphics.Color.rgb(241, 242, 230),
            frame: "tofuheadergui",
            text: {
                text: Translation.translate("saltfurnace")
            }
        },
        inventory: {
            standart: true
        },
        background: {
            color: android.graphics.Color.rgb(241, 242, 230)
        }
    },
    drawing: [
        {type: "bitmap", x: 240, y: 180, bitmap: "tofu_arrow_0", scale: 6}, 
        {type: "bitmap", x: 123, y: 200, bitmap: "tofucraftfire_0", scale: 4.5}
    ],
    elements: {
        "arrowScale": {type: "scale", x: 240, y: 180, direction: 0, value: 0.5, bitmap: "tofu_arrow_1", scale: 6},
        "fireScale": {type: "scale", x: 123, y: 200, direction: 1, value: 0.5, bitmap: "tofucraftfire_1", scale: 4.5},
        "gui": {type: "image", x: 110, y: 80, bitmap: "saltfurnaceEmpty", scale: 5},
        "ingredient1": {type: "slot", bitmap: "tofucraftSlot", x: 108, y: 320, size: 90},
        "result1": {type: "slot", bitmap: "tofucraftSlot", x: 400, y: 170, size: 110},
    }
});
tofucraft_saltfurnaceGui.setStyle({"selection": "tofucraftSelect"});
tcMachineAPI.baseRegister(BlockID.tofucraft_saltfurnace, 4, [
    ["saltfurnace_bottom", 0],
    ["saltfurnace_top", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_front", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_side", 0]
], [
    ["saltfurnace_bottom", 0],
    ["saltfurnace_top_lit", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_front_lit", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_side", 0]
], {
    useNetworkItemContainer: true,
    defaultValues: {
        isActive: false,
        liquid: 0,
        burn: 0,
        burnMax: 200,
        make: 0,
        check: false,
        water: 0
    },
    getFacing: function() {
        return this.blockSource.getBlockData(this.x, this.y, this.z);
    },
    tick: function() {
        var topBlock = this.blockSource.getBlock(this.x, this.y + 1, this.z);
        if (topBlock.id == VanillaTileID.cauldron ) {
            if (topBlock.data > 0) {
                this.data.check = true;
                this.data.water = 1;
                this.container.sendEvent("refreshUI", "saltfurnaceWater");
            } else {
                this.container.sendEvent("refreshUI", "saltfurnaceContianer");
            };
        } else {
            this.container.sendEvent("refreshUI", "saltfurnaceEmpty");
        };
        this.container.sendChanges();
        this.container.setScale("fireScale", this.data.burn / this.data.burnMax);
        this.container.setScale("arrowScale", this.data.make / 200);
    },
    client: {
        containerEvents: {
            refreshUI: function (container, window, content, data) {
                if (content) {
                    content.elements.gui.bitmap = data;
                };
            }
        }
    },
    renderModel: function() {
        if (this.networkData.getBoolean("isActive")) {
            let blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
            let blockData = this.networkData.getInt("blockData");
            TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, blockData);
        };
        if (!this.networkData.getBoolean("isActive")) {
            let blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
            let meta = this.networkData.getInt("meta");
            TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, meta);
        };
    },
    clientLoad: function() {
        this.renderModel();
        var self = this;
        this.networkData.addOnDataChangedListener(function(data, isExternal) {
            self.renderModel();
        });
    },
    getScreenByName: function(screenName) {
        return tofucraft_saltfurnaceGui;
    },
    getScreenName: function(screenName) {
        return "tofucraft_saltfurnaceGui";
    },
    setActive: function(isActive) {
        if (this.networkData.getBoolean("isActive") != isActive) {
            this.networkData.putBoolean("isActive", isActive);
            this.networkData.sendChanges();
        }
    }
});




