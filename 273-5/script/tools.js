var ToolType = {sword: {isWeapon: true, enchantType: Native.EnchantType.weapon, damage: 4, blockTypes: ["fibre", "plant"], onAttack: function (item) {
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = item.data = item.count = 0;
    }
}, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
    if (block.id == 30) {
        return 0.08;
    }
    if (block.id == 35) {
        return 0.05;
    }
    var material = ToolAPI.getBlockMaterial(block.id) || {};
    if (material.name == "fibre" || material.name == "plant") {
        return params.base / 1.5;
    }
    return destroyTime;
}}, shovel: {enchantType: Native.EnchantType.shovel, damage: 2, blockTypes: ["dirt"], onAttack: function (item) {
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = item.data = item.count = 0;
    }
}, useItem: function (coords, item, block) {
    if (block.id == 2 && coords.side == 1) {
        World.setBlock(coords.x, coords.y, coords.z, 198);
        World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
        ToolAPI.breakCarriedTool(1);
    }
}}, pickaxe: {enchantType: Native.EnchantType.pickaxe, damage: 2, blockTypes: ["stone"], onAttack: function (item) {
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = item.data = item.count = 0;
    }
}}, multtools: {enchantType: Native.EnchantType.pickaxe, blockTypes: ["stone", "fibre", "plant", "wood", "dirt"], damage: 26, onAttack: function (item) {
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = item.data = item.count = 0;
    }
}}, axe: {enchantType: Native.EnchantType.axe, damage: 3, blockTypes: ["wood"], onAttack: function (item) {
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = item.data = item.count = 0;
    }
}}, hoe: {useItem: function (coords, item, block) {
    if ((block.id == 2 || block.id == 3) && coords.side == 1) {
        World.setBlock(coords.x, coords.y, coords.z, 60);
        World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
        ToolAPI.breakCarriedTool(1);
    }
}}};
Player.getCarriedItem = ModAPI.requireGlobal("Player.getCarriedItem");
ToolAPI.breakCarriedTool = function (damage) {
    var item = Player.getCarriedItem(true);
    item.data += damage;
    if (item.data > Item.getMaxDamage(item.id)) {
        item.id = 0;
    }
    Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
};
ToolAPI.setTool = function (id, toolMaterial, toolType, brokenId) {
    Item.setToolRender(id, true);
    toolMaterial = ToolAPI.toolMaterials[toolMaterial] || toolMaterial;
    if (toolType.blockTypes) {
        toolProperties = {brokenId: brokenId || 0};
        for (var i in toolType) {
            toolProperties[i] = toolType[i];
        }
        if (!toolMaterial.durability) {
            var maxDmg = Item.getMaxDamage(id);
            toolMaterial.durability = maxDmg;
        }
        ToolAPI.registerTool(id, toolMaterial, toolType.blockTypes, toolProperties);
    } else {
        Item.setMaxDamage(id, toolMaterial.durability);
    }
    if (toolType.enchantType) {
        Item.setEnchantType(id, toolType.enchantType, toolMaterial.enchantability);
    }
    if (toolType.useItem) {
        Item.registerUseFunctionForID(id, toolType.useItem);
    }
    if (toolType.destroyBlock) {
        Callback.addCallback("DestroyBlock", function (coords, block, player) {
            var item = Player.getCarriedItem();
            if (item.id == id) {
                toolType.destroyBlock(coords, coords.side, item, block);
            }
        });
    }
};
var CRAFTING_TOOL_MAX_DAMAGE = 96;
function addRecipeWithCraftingTool(result, data, tool) {
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function (api, field, result) {
        for (var i in field) {
            if (field[i].id == tool) {
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_MAX_DAMAGE) {
                    field[i].id = field[i].count = field[i].data = 0;
                }
            } else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ORE_SOLID = Block.createSpecialType({base: 1, solid: true, destroytime: 0.5, explosionres: 30, opaque: false, renderlayer: 3});
IDRegistry.genBlockID("OreColor");
Block.createBlock("OreColor", [{name: "Min\xe9rio de Cor", texture: [["ore_color", 0]], inCreative: true}], ORE_SOLID);
IDRegistry.genBlockID("OreColorNether");
Block.createBlock("OreColorNether", [{name: "Min\xe9rio de Cor", texture: [["nether_ore_color", 0]], inCreative: true}], ORE_SOLID);
IDRegistry.genBlockID("OreColorEnd");
Block.createBlock("OreColorEnd", [{name: "Min\xe9rio de Cor", texture: [["end_ore_color", 0]], inCreative: true}], ORE_SOLID);
ToolAPI.registerBlockMaterial(BlockID.OreColor, "stone", 2, true);
Callback.addCallback("GenerateChunk", function (a, b) {
    for (var i = 0; i < 8; i++) {
        d = GenerationUtils.randomCoords(a, b, 11, 10);
        GenerationUtils.generateOre(d.x, d.y, d.z, BlockID.OreColor, 0, random(5, 16));
    }
});
Callback.addCallback("GenerateNetherChunk", function (a, b) {
    for (var i = 0; i < 8; i++) {
        d = GenerationUtils.randomCoords(a, b, 40, 40);
        GenerationUtils.generateOre(d.x, random(5, 180), d.z, BlockID.OreColorNether, 0, random(5, 16));
    }
});
Callback.addCallback("GenerateEndChunk", function (a, b) {
    for (var i = 0; i < 8; i++) {
        d = GenerationUtils.randomCoords(a, b, 40, 40);
        GenerationUtils.generateOre(d.x, random(5, 180), d.z, BlockID.OreColorEnd, 0, random(5, 16));
    }
});
IDRegistry.genItemID("colorCristal");
Item.createItem("colorCristal", "Color Cristal", {name: "color_cristal", meta: 0}, {stack: 64});
IDRegistry.genItemID("colorIngot");
Item.createItem("colorIngot", "Color Ingot", {name: "color_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecCoreIngot");
Item.createItem("tecCoreIngot", "Core Ingot", {name: "tec_core_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecCircurtIngot");
Item.createItem("tecCircurtIngot", "Circuit Ingot", {name: "tec_circurt_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("CoalColorT");
Item.createItem("CoalColorT", "Color Coal", {name: "color_coal", meta: 0}, {stack: 64});
Recipes.addFurnaceFuel(ItemID.CoalColorT, 0, 12000);
IDRegistry.genItemID("moldeIngotT");
Item.createItem("moldeIngotT", "Molde para ingot", {name: "ingot_molde_tec", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.moldeIngotT, CRAFTING_TOOL_MAX_DAMAGE);
Block.registerDropFunction("OreColor", function () {
    return [[ItemID.colorCristal, 1, 0]];
});
Block.registerDropFunction("OreColorNether", function () {
    return [[ItemID.colorCristal, 1, 0]];
});
Block.registerDropFunction("OreColorEnd", function () {
    return [[ItemID.colorCristal, 1, 0]];
});
IDRegistry.genItemID("ColorCristalFragments");
Item.createItem("ColorCristalFragments", "Fragmento de Color Cristal", {name: "color_cristal_fragments", meta: 0}, {stack: 64});
var ToolsDetalhe = {values: {}, EspadaDetalhes: function (id, data, value) {
    Item.registerNameOverrideFunction(id, function (item, name) {
        return name + "\n" + "\xa74Attack" + "\xa7f:" + "\xa77" + value;
    });
}};
var ToolsDetalheF = {values: {}, FerramentaDetalhe: function (id, data, value) {
    Item.registerNameOverrideFunction(id, function (item, name) {
        return name + "\n" + "\xa7bEfficiency" + "\xa7f:" + "\xa77" + value;
    });
}};
var ToolsDetalheG = {values: {}, FerramentaDetalhe: function (id, data, value, value1) {
    Item.registerNameOverrideFunction(id, function (item, name) {
        return name + "\n" + "\xa7bEfficiency" + "\xa7f:" + "\xa77" + value + "\n" + "\xa74Attack" + "\xa7f:" + "\xa77" + value1;
    });
}};
var SoundPlayers = [];
function PlaySoundFile(sound_file) {
    try {
        var media = null;
        for (var i in SoundPlayers) {
            var SP = SoundPlayers[i];
            if (!SP.isPlaying()) {
                media = SP;
                break;
            }
        }
        if (media == null) {
            media = new android.media.MediaPlayer();
            SoundPlayers.push(media);
        }
        media.reset();
        media.setDataSource(__dir__ + "res/sounds/" + sound_file);
        media.prepare();
        media.start();
        return media;
    }
    catch (err) {
    }
    return media;
}
IDRegistry.genItemID("ColorSword");
IDRegistry.genItemID("ColorShovel");
IDRegistry.genItemID("ColorPickaxe");
IDRegistry.genItemID("ColorAxe");
IDRegistry.genItemID("ColorMultTools");
IDRegistry.genItemID("ColorHam");
Item.createItem("ColorMultTools", "Color Multi Toos", {name: "color_multi_tools", meta: 0}, {stack: 1});
Item.createItem("ColorHam", "Color Hammer", {name: "color_Ham", meta: 0}, {stack: 1});
Item.createItem("ColorSword", "Color Sword", {name: "color_sword", meta: 0}, {stack: 1});
Item.createItem("ColorShovel", "Color Shovel", {name: "color_shovel", meta: 0}, {stack: 1});
Item.createItem("ColorPickaxe", "Color Pickaxe", {name: "color_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ColorAxe", "Color Axe", {name: "color_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ColorEspadas", {durability: 5000, level: 10, efficiency: 3, damage: 13, enchantability: 14});
ToolAPI.addToolMaterial("ColorFerramentas", {durability: 5000, level: 10, efficiency: 9, damage: 4, enchantability: 14});
ToolAPI.setTool(ItemID.ColorSword, "ColorEspadas", ToolType.sword);
ToolAPI.setTool(ItemID.ColorShovel, "ColorFerramentas", ToolType.shovel);
ToolAPI.setTool(ItemID.ColorPickaxe, "ColorFerramentas", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ColorAxe, "ColorFerramentas", ToolType.axe);
ToolsDetalhe.EspadaDetalhes(ItemID.ColorSword, 0, 13);
ToolsDetalheF.FerramentaDetalhe(ItemID.ColorPickaxe, 0, 10);
ToolsDetalheF.FerramentaDetalhe(ItemID.ColorAxe, 0, 10);
ToolsDetalheF.FerramentaDetalhe(ItemID.ColorShovel, 0, 10);
ToolsDetalheG.FerramentaDetalhe(ItemID.ColorMultTools, 0, 18, 26);
ToolAPI.addToolMaterial("ColorMultTools", {durability: 500000, level: 20, efficiency: 18, damage: 26, enchantability: 28});
ToolAPI.setTool(ItemID.ColorMultTools, "ColorMultTools", ToolType.multtools);
IDRegistry.genItemID("TecSword");
IDRegistry.genItemID("TecShovel");
IDRegistry.genItemID("TecPickaxe");
IDRegistry.genItemID("TecAxe");
IDRegistry.genItemID("TecMultTools");
IDRegistry.genItemID("TecHam");
Item.createItem("TecMultTools", "Tec Multi Toos", {name: "tec_multtools", meta: 0}, {stack: 1});
Item.createItem("TecHam", "Tec Hammer", {name: "tec_ham", meta: 0}, {stack: 1});
Item.createItem("TecSword", "Tec Sword", {name: "tec_sword", meta: 0}, {stack: 1});
Item.createItem("TecShovel", "Tec Shovel", {name: "tec_shovel", meta: 0}, {stack: 1});
Item.createItem("TecPickaxe", "Tec Pickaxe", {name: "tec_pickaxe", meta: 0}, {stack: 1});
Item.createItem("TecAxe", "Tec Axe", {name: "tec_axe", meta: 0}, {stack: 1});
ToolsDetalhe.EspadaDetalhes(ItemID.TecSword, 0, 50);
ToolsDetalheF.FerramentaDetalhe(ItemID.TecPickaxe, 0, 13);
ToolsDetalheF.FerramentaDetalhe(ItemID.TecAxe, 0, 13);
ToolsDetalheF.FerramentaDetalhe(ItemID.TecShovel, 0, 13);
ToolsDetalheG.FerramentaDetalhe(ItemID.TecMultTools, 0, 20, 60);
IDRegistry.genItemID("TecLeSword");
IDRegistry.genItemID("TecLeShovel");
IDRegistry.genItemID("TecLePickaxe");
IDRegistry.genItemID("TecLeAxe");
IDRegistry.genItemID("TecLeMultTools");
IDRegistry.genItemID("TecLeHam");
IDRegistry.genItemID("TecLeHam1");
IDRegistry.genItemID("TecLeHam2");
Item.createItem("TecLeMultTools", "Tec Legendary Multi Toos", {name: "tec_legendary_multtools", meta: 0}, {stack: 1});
Item.createItem("TecLeHam", "Tec Legendary Hammer", {name: "tec_legendary_ham", meta: 0}, {stack: 1});
Item.createItem("TecLeHam1", "Tec Legendary Hammer", {name: "tec_legendary_ham", meta: 1}, {stack: 1, isTech: true});
Item.createItem("TecLeHam2", "Tec Legendary Hammer", {name: "tec_legendary_ham", meta: 2}, {stack: 1, isTech: true});
Item.createItem("TecLeSword", "Tec Legendary Sword", {name: "tec_legendary_sword", meta: 0}, {stack: 1});
Item.createItem("TecLeShovel", "Tec Legendary Shovel", {name: "tec_legendary_shovel", meta: 0}, {stack: 1});
Item.createItem("TecLePickaxe", "Tec Legendary Pickaxe", {name: "tec_legendary_pickaxe", meta: 0}, {stack: 1});
Item.createItem("TecLeAxe", "Tec Legendary Axe", {name: "tec_legendary_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("elmodeesmeralda");
Item.createArmorItem("elmodeesmeralda", "Elmo de esmeralda", {name: "elmo_de_esmeralda"}, {type: "helmet", armor: 6, durability: 1000, texture: "armor/esmeralda_1.png"});
IDRegistry.genItemID("peitoraldeesmeralda");
Item.createArmorItem("peitoraldeesmeralda", "Peitoral de esmeralda", {name: "peitoral_de_esmeralda"}, {type: "chestplate", armor: 10, durability: 2000, texture: "armor/esmeralda_1.png"});
IDRegistry.genItemID("cal\xe7adeesmeralda");
Item.createArmorItem("cal\xe7adeesmeralda", "Cal\xe7a de esmeralda", {name: "cal\xe7as_de_esmeralda"}, {type: "leggings", armor: 8, durability: 1000, texture: "armor/esmeralda_2.png"});
IDRegistry.genItemID("botasdeesmeralda");
Item.createArmorItem("botasdeesmeralda", "Botas de esmeralda", {name: "botas_de_esmeralda"}, {type: "boots", armor: 6, durability: 1000, texture: "armor/esmeralda_1.png"});
IDRegistry.genItemID("helmetTecBasic");
Item.createArmorItem("helmetTecBasic", "Tec basic Helmet", {name: "tec_basic_helmet"}, {type: "helmet", armor: 6, durability: 8000, efficiency: 50, level: 50, texture: "armor/tec_basic_armor2.png"});
IDRegistry.genItemID("chestplateTecBasic");
Item.createArmorItem("chestplateTecBasic", "Tec basic Chestplate", {name: "tec_basic_chestplate"}, {type: "chestplate", armor: 6, durability: 8000, efficiency: 50, level: 50, texture: "armor/tec_basic_armor2.png"});
IDRegistry.genItemID("leggingsTecBasic");
Item.createArmorItem("leggingsTecBasic", "Tec basic Leggings", {name: "tec_basic_leggings"}, {type: "leggings", armor: 6, durability: 8000, efficiency: 50, level: 50, texture: "armor/tec_basic_armor1.png"});
IDRegistry.genItemID("bootsTecBasic");
Item.createArmorItem("bootsTecBasic", "Tec basic boot", {name: "tec_basic_boots"}, {type: "boots", armor: 6, durability: 8000, efficiency: 50, level: 50, texture: "armor/tec_basic_armor2.png"});
IDRegistry.genItemID("helmetTecAdv");
Item.createArmorItem("helmetTecAdv", "Tec Helmet", {name: "tec_normal_helmet"}, {type: "helmet", armor: 6, durability: 5000, efficiency: 50, level: 50, texture: "armor/tec_advanceid_armor2.png"});
IDRegistry.genItemID("chestplateTecAdv");
Item.createArmorItem("chestplateTecAdv", "Tec Chestplate", {name: "tec_normal_chestplate"}, {type: "chestplate", armor: 6, durability: 5000, efficiency: 50, level: 50, texture: "armor/tec_advanceid_armor2.png"});
IDRegistry.genItemID("leggingsTecAdv");
Item.createArmorItem("leggingsTecAdv", "Tec Leggings", {name: "tec_normal_leggings"}, {type: "leggings", armor: 6, durability: 5000, efficiency: 50, level: 50, texture: "armor/tec_advanceid_armor1.png"});
IDRegistry.genItemID("bootsTecAdv");
Item.createArmorItem("bootsTecAdv", "Tec boot", {name: "tec_normal_boots"}, {type: "boots", armor: 6, durability: 5000, efficiency: 50, level: 50, texture: "armor/tec_advanceid_armor2.png"});
IDRegistry.genItemID("helmetTecLgd");
Item.createArmorItem("helmetTecLgd", "Tec Legendary Helmet", {name: "tec_legendary_helmet"}, {type: "helmet", armor: 6, durability: 10000, efficiency: 50, level: 50, texture: "armor/tec_legendary_armor2.png"});
IDRegistry.genItemID("chestplateTecLgd");
Item.createArmorItem("chestplateTecLgd", "Tec Legendary Chestplate", {name: "tec_legendary_chestplate"}, {type: "chestplate", armor: 6, durability: 10000, efficiency: 50, level: 50, texture: "armor/tec_legendary_armor2.png"});
IDRegistry.genItemID("leggingsTecLgd");
Item.createArmorItem("leggingsTecLgd", "Tec Legendary Leggings", {name: "tec_legendary_leggings"}, {type: "leggings", armor: 6, durability: 10000, efficiency: 50, level: 50, texture: "armor/tec_legendary_armor1.png"});
IDRegistry.genItemID("bootsTecLgd");
Item.createArmorItem("bootsTecLgd", "Tec Legendary boot", {name: "tec_legendary_boots"}, {type: "boots", armor: 6, durability: 10000, efficiency: 50, level: 50, texture: "armor/tec_legendary_armor2.png"});
IDRegistry.genItemID("esmeraldapepita");
Item.createItem("esmeraldapepita", "Pepita de esmerada", {name: "esmeralda_pepita", meta: 0}, {stack: 64});
IDRegistry.genItemID("PearlTeleportTec");
Item.createThrowableItem("PearlTeleportTec", "Teleport Pearl", {name: "tec_teleport_pearl", meta: 0}, {stack: 64});
Item.registerThrowableFunction("PearlTeleportTec", function (projectile, item, target) {
    PlaySoundFile("portal2.ogg");
    Player.setPosition(target.x, target.y + 2, target.z);
});
Recipes.addShaped({id: ItemID.esmeraldapepita, count: 9, data: 0}, ["x"], ["x", 388, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0}, ["xxx", "xxx", "xxx"], ["x", ItemID.esmeraldapepita, 0]);
var EsmeraldaArmor = false;
var TecBasicArmor = false;
var TecAdvArmor = false;
var TecLgdArmor = false;
Callback.addCallback("tick", function () {
    if (World.getThreadTime() % 120 == 0) {
        if (World.getBlock(Player.getPosition().x - 0.5, Player.getPosition().y - 0.8, Player.getPosition().z - 0.6).id == BlockID.OreColor) {
            Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 0, 20 * 5);
            Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 0, 20 * 5);
        }
    }
    var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
    if (World.getThreadTime() % 80 == 0) {
        if (armor[0].id == ItemID.elmodeesmeralda && armor[1].id == ItemID.peitoraldeesmeralda && armor[2].id == ItemID.calçadeesmeralda && armor[3].id == ItemID.botasdeesmeralda) {
            EsmeraldaArmor = true;
            Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 20 * 5);
            Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 20 * 5);
        } else {
            if (EsmeraldaArmor) {
                Entity.clearEffects(Player.get()), EsmeraldaArmor = false;
            }
        }
        false;
    }
    if (World.getThreadTime() % 1 == 0) {
        if (armor[0].id == ItemID.helmetTecBasic && armor[1].id == ItemID.chestplateTecBasic && armor[2].id == ItemID.leggingsTecBasic && armor[3].id == ItemID.bootsTecBasic) {
            TecBasicArmor = true;
            Player.setFlyingEnabled(true);
            Player.setHunger(110);
            Entity.setHealth(Player.get(), Entity.getHealth(Player.get()) + 40);
        } else {
            if (TecBasicArmor) {
                Player.setFlyingEnabled(false), TecBasicArmor = false;
            }
        }
        false;
    }
    if (World.getThreadTime() % 1 == 0) {
        if (armor[0].id == ItemID.helmetTecAdv && armor[1].id == ItemID.chestplateTecAdv && armor[2].id == ItemID.leggingsTecAdv && armor[3].id == ItemID.bootsTecAdv) {
            TecAdvArmor = true;
            Player.setFlyingEnabled(true);
            Player.setHunger(110);
            Entity.setHealth(Player.get(), Entity.getHealth(Player.get()) + 80);
            Player.exhaustion(0);
        } else {
            if (TecAdvArmor) {
                Player.setFlyingEnabled(false), TecAdvArmor = false;
            }
        }
        false;
    }
    if (World.getThreadTime() % 1 == 0) {
        if (armor[0].id == ItemID.helmetTecLgd && armor[1].id == ItemID.chestplateTecLgd && armor[2].id == ItemID.leggingsTecLgd && armor[3].id == ItemID.bootsTecLgd) {
            TecLgdArmor = true;
            Player.setFlyingEnabled(true);
            Player.setHunger(110);
            Entity.setHealth(Player.get(), Entity.getHealth(Player.get()) + 1000);
            Player.setExhaustion(0);
            Player.setExperience(30);
            Player.setLevel(100);
            Player.setSaturation(1);
        } else {
            if (TecLgdArmor) {
                Player.setFlyingEnabled(false), TecLgdArmor = false;
            }
        }
        false;
    }
});
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: ItemID.PearlTeleportTec, count: 16, data: 0}, ["xax"], ["x", ItemID.circultUnic, 0, "a", ItemID.trasmiteFrequ, 0]);
    Recipes.addShaped({id: ItemID.elmodeesmeralda, count: 1, data: 0}, ["xxx", "x x"], ["x", ItemID.esmeraldapepita, 0]);
    Recipes.addShaped({id: ItemID.peitoraldeesmeralda, count: 1, data: 0}, ["x x", "xxx", "xxx"], ["x", ItemID.esmeraldapepita, 0]);
    Recipes.addShaped({id: ItemID.calçadeesmeralda, count: 1, data: 0}, ["xxx", "x x", "x x"], ["x", ItemID.esmeraldapepita, 0]);
    Recipes.addShaped({id: ItemID.botasdeesmeralda, count: 1, data: 0}, ["x x", "x x"], ["x", ItemID.esmeraldapepita, 0]);
    Recipes.addShaped({id: ItemID.moldeIngotT, count: 1, data: 0}, ["aba", "aoa", "aba"], ["a", 265, 0, "b", 42, 0]);
    addRecipeWithCraftingTool({id: ItemID.colorIngot, count: 1, data: 0}, [{id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}, {id: ItemID.colorCristal, data: 0}], ItemID.moldeIngotT);
    addRecipeWithCraftingTool({id: ItemID.tecCircurtIngot, count: 1, data: 0}, [{id: BlockID.tecCircultBlock, data: 0}], ItemID.moldeIngotT);
    addRecipeWithCraftingTool({id: ItemID.tecCoreIngot, count: 1, data: 0}, [{id: ItemID.tecCoreG, data: 0}, {id: ItemID.tecCoreG, data: 0}], ItemID.moldeIngotT);
    Recipes.addShaped({id: ItemID.ColorSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.colorIngot, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.ColorShovel, count: 1, data: 0}, ["a", "b", "b"], ["a", ItemID.colorIngot, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.ColorPickaxe, count: 1, data: 0}, ["aaa", " b ", " b "], ["a", ItemID.colorIngot, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.ColorAxe, count: 1, data: 0}, ["aa", "ab", " b"], ["a", ItemID.colorIngot, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.ColorHam, count: 1, data: 0}, ["aaa", "aba", "obo"], ["a", ItemID.colorIngot, 0, "b", 5, 0]);
    Recipes.addShaped({id: ItemID.ColorMultTools, count: 1, data: 0}, ["abc", "dee", "eee"], ["a", ItemID.ColorSword, 0, "b", ItemID.ColorShovel, 0, "c", ItemID.ColorAxe, 0, "d", ItemID.ColorPickaxe, 0, "e", ItemID.colorIngot, 0]);
    Recipes.addShaped({id: ItemID.TecSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.tecCircurtIngot, 0, "b", ItemID.ColorSword, 0]);
    Recipes.addShaped({id: ItemID.TecShovel, count: 1, data: 0}, ["a", "c", "b"], ["a", ItemID.tecCircurtIngot, 0, "c", ItemID.ColorShovel, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.TecPickaxe, count: 1, data: 0}, ["aaa", " c ", " b "], ["a", ItemID.tecCircurtIngot, 0, "b", 280, 0, "c", ItemID.ColorPickaxe, 0]);
    Recipes.addShaped({id: ItemID.TecAxe, count: 1, data: 0}, ["aa", "ac", " b"], ["a", ItemID.tecCircurtIngot, 0, "b", 280, 0, "c", ItemID.ColorAxe, 0]);
    Recipes.addShaped({id: ItemID.TecHam, count: 1, data: 0}, ["aaa", "aca", "obo"], ["a", ItemID.tecCircurtIngot, 0, "b", 5, random(1, 4), "c", ItemID.ColorHam, 0]);
    Recipes.addShaped({id: ItemID.TecMultTools, count: 1, data: 0}, ["abc", "dee", "eee"], ["a", ItemID.TecSword, 0, "b", ItemID.TecShovel, 0, "c", ItemID.TecAxe, 0, "d", ItemID.TecPickaxe, 0, "e", ItemID.tecCircurtIngot, 0]);
    Recipes.addShaped({id: ItemID.TecLeSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.tecCoreIngot, 0, "b", ItemID.TecSword, 0]);
    Recipes.addShaped({id: ItemID.TecLeShovel, count: 1, data: 0}, ["a", "c", "b"], ["a", ItemID.tecCoreIngot, 0, "c", ItemID.TecShovel, 0, "b", 280, 0]);
    Recipes.addShaped({id: ItemID.TecLePickaxe, count: 1, data: 0}, ["aaa", " c ", " b "], ["a", ItemID.tecCoreIngot, 0, "b", 280, 0, "c", ItemID.TecPickaxe, 0]);
    Recipes.addShaped({id: ItemID.TecLeAxe, count: 1, data: 0}, ["aa", "ac", " b"], ["a", ItemID.tecCoreIngot, 0, "b", 280, 0, "c", ItemID.TecAxe, 0]);
    Recipes.addShaped({id: ItemID.TecLeHam, count: 1, data: 0}, ["aaa", "aca", "obo"], ["a", ItemID.tecCoreIngot, 0, "b", 5, 0, "c", ItemID.TecHam, 0]);
    Recipes.addShaped({id: ItemID.TecLeMultTools, count: 1, data: 0}, ["abc", "dee", "eee"], ["a", ItemID.TecLeSword, 0, "b", ItemID.TecLeShovel, 0, "c", ItemID.TecLeAxe, 0, "d", ItemID.TecLePickaxe, 0, "e", ItemID.tecCoreIngot, 0]);
    Recipes.addShaped({id: ItemID.CoalColorT, count: 1, data: 0}, ["oao", "aba", "oao"], ["a", ItemID.colorCristal, 0, "b", 263, 0]);
    Recipes.addShaped({id: ItemID.ColorCristalFragments, count: 1, data: 0}, ["a", "a"], ["a", ItemID.colorCristal, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 0}, ["xxx", "", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 1}, ["", "xxx", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 2}, ["", "", "xxx"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 3}, [" x ", "x", " xx"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 3, data: 4}, [" x ", "xx", " x "], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 6}, ["x", "x", "x"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 5}, [" x ", " x ", " x "], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 7}, ["x", " x ", "  x"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 8}, [" x ", " x ", "x"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 9}, ["xx ", "x", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 10}, [" xx", "x", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 11}, ["", "x", "x x"], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 12}, ["xx ", " x ", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 13}, [" xx", "x", ""], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: 351, count: 6, data: 14}, [" x ", "x", " x "], ["x", ItemID.ColorCristalFragments, 0]);
    Recipes.addShaped({id: ItemID.helmetTecBasic, count: 1, data: 0}, ["xa"], ["x", ItemID.tecCoreG, 0, "a", ItemID.elmodeesmeralda, 0]);
    Recipes.addShaped({id: ItemID.chestplateTecBasic, count: 1, data: 0}, ["xa"], ["x", ItemID.tecCoreG, 0, "a", ItemID.peitoraldeesmeralda, 0]);
    Recipes.addShaped({id: ItemID.leggingsTecBasic, count: 1, data: 0}, ["xa"], ["x", ItemID.tecCoreG, 0, "a", ItemID.calçadeesmeralda, 0]);
    Recipes.addShaped({id: ItemID.bootsTecBasic, count: 1, data: 0}, ["xa"], ["x", ItemID.tecCoreG, 0, "a", ItemID.botasdeesmeralda, 0]);
    Recipes.addShaped({id: ItemID.helmetTecAdv, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCircurtIngot, 0, "a", ItemID.helmetTecBasic, 0]);
    Recipes.addShaped({id: ItemID.chestplateTecAdv, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCircurtIngot, 0, "a", ItemID.chestplateTecBasic, 0]);
    Recipes.addShaped({id: ItemID.leggingsTecAdv, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCircurtIngot, 0, "a", ItemID.leggingsTecBasic, 0]);
    Recipes.addShaped({id: ItemID.bootsTecAdv, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCircurtIngot, 0, "a", ItemID.bootsTecBasic, 0]);
    Recipes.addShaped({id: ItemID.helmetTecLgd, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCoreIngot, 0, "a", ItemID.helmetTecAdv, 0]);
    Recipes.addShaped({id: ItemID.chestplateTecLgd, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCoreIngot, 0, "a", ItemID.chestplateTecAdv, 0]);
    Recipes.addShaped({id: ItemID.leggingsTecLgd, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCoreIngot, 0, "a", ItemID.leggingsTecAdv, 0]);
    Recipes.addShaped({id: ItemID.bootsTecLgd, count: 1, data: 0}, ["xax"], ["x", ItemID.tecCoreIngot, 0, "a", ItemID.bootsTecAdv, 0]);
});
function CriarMarteloInfinito(IDitem, tx, ty, tz, ttx, tty, ttz) {
    Item.setToolRender(IDitem, true);
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var side = coords.side;
        var X = tx;
        var Y = ty;
        var Z = tz;
        if (side == 4 || side == 5) {
            X = ttx;
        }
        if (side == 1 || side == 6) {
            Y = tty;
        }
        if (side == 2 || side == 3) {
            Z = ttz;
        }
        for (var xx = coords.x - X; xx <= coords.x + X; xx++) {
            for (var yy = coords.y - Y; yy <= coords.y + Y; yy++) {
                for (var zz = coords.z - Z; zz <= coords.z + Z; zz++) {
                    item = Player.getCarriedItem(true);
                    if (World.getBlockID(xx, yy, zz) !== 7 && item.id == IDitem) {
                        World.destroyBlock(xx, yy, zz, true);
                    }
                }
            }
        }
    });
}
function CriarMartelo(IDitem, durabilidade, eficiência, level, demeget, gasto, tx, ty, tz, ttx, tty, ttz) {
    Item.registerNameOverrideFunction(IDitem, function (item, name) {
        return name + "\n" + "\xa7bEfficiency" + "\xa7f:" + "\xa77" + eficiência;
    });
    ToolAPI.registerTool(IDitem, {level: level, durability: durabilidade, efficiency: eficiência, damage: demeget}, ["stone", "dirt", "wood", "fibre", "plant"]);
    Item.setToolRender(IDitem, true);
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var side = coords.side;
        var X = tx;
        var Y = ty;
        var Z = tz;
        if (side == 4 || side == 5) {
            X = ttx;
        }
        if (side == 1 || side == 6) {
            Y = tty;
        }
        if (side == 2 || side == 3) {
            Z = ttz;
        }
        for (var xx = coords.x - X; xx <= coords.x + X; xx++) {
            for (var yy = coords.y - Y; yy <= coords.y + Y; yy++) {
                for (var zz = coords.z - Z; zz <= coords.z + Z; zz++) {
                    item = Player.getCarriedItem(true);
                    if (World.getBlockID(xx, yy, zz) !== 7 && item.id == IDitem) {
                        ToolAPI.breakCarriedTool(gasto);
                        World.destroyBlock(xx, yy, zz, true);
                    }
                }
            }
        }
    });
}
CriarMartelo(ItemID.ColorHam, 500000, 10, 20, 5, 9, 1, 1, 1, 0, 0, 0);
CriarMartelo(ItemID.TecHam, 800000, 13, 20, 5, 9, 1, 1, 1, 0, 0, 0);
CriarMarteloInfinito(ItemID.TecLeHam, 1, 1, 1, 0, 0, 0);
CriarMarteloInfinito(ItemID.TecLeHam1, 3, 3, 3, 2, 2, 2);
CriarMarteloInfinito(ItemID.TecLeHam2, 5, 5, 5, 5, 5, 5);
Item.registerNoTargetUseFunction("TecLeHam", function (item) {
    const pos = Player.getPosition();
    const vec = Entity.getLookVector(Player.get());
    const coords = {};
    for (let t = 0; t <= 128; t++) {
        coords.x = pos.x + vec.x * t;
        coords.y = pos.y + vec.y * t;
        coords.z = pos.z + vec.z * t;
        if (World.getBlockID(coords.x, coords.y, coords.z)) {
            t >= 16 && Player.setCarriedItem(ItemID.TecLeHam1, 1, 0);
            break;
        }
    }
});
Item.registerNoTargetUseFunction("TecLeHam1", function (item) {
    const pos = Player.getPosition();
    const vec = Entity.getLookVector(Player.get());
    const coords = {};
    for (let t = 0; t <= 128; t++) {
        coords.x = pos.x + vec.x * t;
        coords.y = pos.y + vec.y * t;
        coords.z = pos.z + vec.z * t;
        if (World.getBlockID(coords.x, coords.y, coords.z)) {
            t >= 16 && Player.setCarriedItem(ItemID.TecLeHam2, 1, 0);
            break;
        }
    }
});
Item.registerNoTargetUseFunction("TecLeHam2", function (item) {
    const pos = Player.getPosition();
    const vec = Entity.getLookVector(Player.get());
    const coords = {};
    for (let t = 0; t <= 128; t++) {
        coords.x = pos.x + vec.x * t;
        coords.y = pos.y + vec.y * t;
        coords.z = pos.z + vec.z * t;
        if (World.getBlockID(coords.x, coords.y, coords.z)) {
            t >= 16 && Player.setCarriedItem(ItemID.TecLeHam, 1, 0);
            break;
        }
    }
});
function CriarToolsEasy(IDitem, ConfTool, blocks) {
    ToolAPI.registerTool(IDitem, {level: ConfTool.level, durability: ConfTool.durabilidade, efficiency: ConfTool.eficiência, damage: ConfTool.demege, enchantability: 30}, blocks);
    Item.setToolRender(IDitem, true);
}
CriarToolsEasy(ItemID.TecPickaxe, {level: 15, durabilidade: 10000, eficiência: 13, demege: 7}, ["stone"]);
CriarToolsEasy(ItemID.TecAxe, {level: 15, durabilidade: 10000, eficiência: 13, demege: 7}, ["wood"]);
CriarToolsEasy(ItemID.TecShovel, {level: 15, durabilidade: 10000, eficiência: 13, demege: 7}, ["dirt"]);
Item.registerUseFunctionForID(ItemID.TecShovel, function (coords, item, block) {
    if (block.id == 2 && coords.side == 1) {
        World.setBlock(coords.x, coords.y, coords.z, 198);
        World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
        ToolAPI.breakCarriedTool(1);
    }
});
CriarToolsEasy(ItemID.TecSword, {level: 15, durabilidade: 10000, eficiência: 13, demege: 50}, ["fibre", "plant", "wool"]);
CriarToolsEasy(ItemID.TecMultTools, {level: 40, durabilidade: 800000, eficiência: 20, demege: 60}, ["stone", "fibre", "plant", "wood", "dirt", "wool"]);
function CriarToolsInfinityEasy(IDitem, ConfTool, blocks) {
    ToolAPI.registerTool(IDitem, {level: ConfTool.level, durability: ConfTool.durabilidade, efficiency: ConfTool.eficiência, damage: ConfTool.demege, enchantability: 30, brokenId: 1}, blocks);
    Item.setToolRender(IDitem, true);
}
ToolAPI.addToolMaterial("TecLeFerramentas", {durability: 999999999, level: 999999999, efficiency: 999999999, damage: 60, enchantability: 30});
ToolAPI.addToolMaterial("TecLeArmas", {durability: 999999999, level: 999999999, efficiency: 999999999, damage: 999999999, enchantability: 30});
ToolType.TecInPickaxe = {isWeapon: false, damage: 0, baseDamage: 0, blockTypes: ["stone"], onDestroy: function (item) {
    item.data = 0;
}, onBroke: function (item) {
    return true;
}, onAttack: function (item, mob) {
    item.data = 0;
}};
ToolType.TecInAxe = {isWeapon: false, damage: 0, baseDamage: 0, blockTypes: ["wood", "wool"], onDestroy: function (item) {
    item.data = 0;
}, onBroke: function (item) {
    return true;
}, onAttack: function (item, mob) {
    item.data = 0;
}};
ToolType.TecInShovel = {isWeapon: false, damage: 0, baseDamage: 0, blockTypes: ["dirt"], onDestroy: function (item) {
    item.data = 0;
}, onBroke: function (item) {
    return true;
}, onAttack: function (item, mob) {
    item.data = 0;
}, useItem: function (coords, item, block) {
    if (block.id == 2 && coords.side == 1) {
        World.setBlock(coords.x, coords.y, coords.z, 198);
        World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
    }
}};
ToolType.TecInSword = {isWeapon: false, damage: 0, baseDamage: 0, blockTypes: ["fibre", "plant", "wool"], onDestroy: function (item) {
    item.data = 0;
}, onBroke: function (item) {
    return true;
}, onAttack: function (item, mob) {
    item.data = 0;
}};
ToolType.TecInMultTools = {isWeapon: false, damage: -100, baseDamage: -100, blockTypes: ["fibre", "plant", "wool", "wood", "stone", "dirt"], onDestroy: function (item) {
    item.data = 0;
}, onBroke: function (item) {
    return true;
}, onAttack: function (item, mob) {
    item.data = 0;
}};
ToolAPI.setTool(ItemID.TecLePickaxe, "TecLeFerramentas", ToolType.TecInPickaxe);
ToolAPI.setTool(ItemID.TecLeAxe, "TecLeFerramentas", ToolType.TecInAxe);
ToolAPI.setTool(ItemID.TecLeShovel, "TecLeFerramentas", ToolType.TecInShovel);
ToolAPI.setTool(ItemID.TecLeSword, "TecLeArmas", ToolType.TecInSword);
ToolAPI.setTool(ItemID.TecLeHam, "TecLeFerramentas", ToolType.TecInMultTools);
ToolAPI.setTool(ItemID.TecLeHam1, "TecLeFerramentas", ToolType.TecInMultTools);
ToolAPI.setTool(ItemID.TecLeHam2, "TecLeFerramentas", ToolType.TecInMultTools);
ToolAPI.setTool(ItemID.TecLeMultTools, "TecLeArmas", ToolType.TecInMultTools);
var evilMobs = [17, 18, 19, 20, 21, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 52, 53, 54, 55, 59];
Item.registerUseFunctionForID(ItemID.TecShovel, function (coords, item, block) {
    Entity.damageEntity(evilMobs, 900000000);
});
ModAPI.registerAPI("TecMod-HamersAPI", {CreateHammer: CriarMartelo});

