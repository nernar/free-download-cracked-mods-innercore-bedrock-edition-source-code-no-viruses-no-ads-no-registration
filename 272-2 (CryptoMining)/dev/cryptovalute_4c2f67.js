IMPORT("dimensions");
IMPORT("Random");
IMPORT("ToolType");
IMPORT("SoundAPI");
IDRegistry.genItemID("oneDollar");
Item.createItem("oneDollar", "One Dollar", {name: "us1dollar"}, {});
IDRegistry.genItemID("twoDollar");
Item.createItem("twoDollar", "Two Dollars", {name: "us2dollar"}, {});
IDRegistry.genItemID("fiveDollar");
Item.createItem("fiveDollar", "Five Dollars", {name: "us5dollar"}, {});
IDRegistry.genItemID("tenDollar");
Item.createItem("tenDollar", "Ten Dollars", {name: "us10dollar"}, {});
IDRegistry.genItemID("twentyDollar");
Item.createItem("twentyDollar", "Twenty Dollars", {name: "us20dollar"}, {});
IDRegistry.genItemID("fiftyDollar");
Item.createItem("fiftyDollar", "Fifty Dollars", {name: "us50dollar"}, {});
IDRegistry.genItemID("oneHandredDollar");
Item.createItem("oneHandredDollar", "One Handred Dollars", {name: "us100dollar"}, {});
IDRegistry.genItemID("bitcoin");
Item.createItem("bitcoin", "Bitcoin", {name: "bitcoin", meta: 0}, {});
IDRegistry.genItemID("wondercoin");
Item.createItem("wondercoin", "Wondercoin", {name: "wondercoin", meta: 0}, {});
IDRegistry.genItemID("ethereum");
Item.createItem("ethereum", "Ethereum", {name: "ethereum", meta: 0}, {});
IDRegistry.genItemID("arkcoin");
Item.createItem("arkcoin", "Arkcoin", {name: "arkcoin", meta: 0}, {});
IDRegistry.genItemID("cosmocash");
Item.createItem("cosmocash", "Cosmocash", {name: "cosmocash", meta: 0}, {});
IDRegistry.genItemID("augur");
Item.createItem("augur", "Augur", {name: "augur", meta: 0}, {});
IDRegistry.genItemID("lisk");
Item.createItem("lisk", "Lisk", {name: "lisk", meta: 0}, {});
IDRegistry.genItemID("firecoin");
Item.createItem("firecoin", "Firecoin", {name: "firecoin", meta: 0}, {});
IDRegistry.genItemID("zerocash");
Item.createItem("zerocash", "Zerocash", {name: "zerocash", meta: 0}, {});
IDRegistry.genItemID("dashcoin");
Item.createItem("dashcoin", "Dashcoin", {name: "dashcoin", meta: 0}, {});
IDRegistry.genItemID("monero");
Item.createItem("monero", "Monero", {name: "monero", meta: 0}, {});
IDRegistry.genItemID("ripple");
Item.createItem("ripple", "Ripple", {name: "ripple", meta: 0}, {});
IDRegistry.genItemID("windcoin");
Item.createItem("windcoin", "Windcoin", {name: "windcoin", meta: 0}, {});
IDRegistry.genItemID("litecoin");
Item.createItem("litecoin", "Litecoin", {name: "litecoin", meta: 0}, {});
IDRegistry.genItemID("dogecoin");
Item.createItem("dogecoin", "Dogecoin", {name: "dogecoin", meta: 0}, {});
IDRegistry.genItemID("peercoin");
Item.createItem("peercoin", "Peercoin", {name: "peercoin", meta: 0}, {});
IDRegistry.genItemID("concoin");
Item.createItem("concoin", "Concoin", {name: "concoin", meta: 0}, {});
IDRegistry.genItemID("buzcoin");
Item.createItem("buzcoin", "Buzcoin", {name: "buzcoin", meta: 0}, {});
IDRegistry.genItemID("mooncoin");
Item.createItem("mooncoin", "Mooncoin", {name: "mooncoin", meta: 0}, {});
IDRegistry.genItemID("marscoin");
Item.createItem("marscoin", "Marscoin", {name: "marscoin", meta: 0}, {});
var BLOCK_TYPE_CRYPTO = Block.createSpecialType({base: 1, solid: true, destroytime: 5, explosionres: 90}, "stone");
var BLOCK_TYPE_DOLLAR = Block.createSpecialType({base: 1, solid: true, destroytime: 0, explosionres: 2}, "wood");
IDRegistry.genBlockID("oneDollarStack");
Block.createBlock("oneDollarStack", [{name: "One Dollar Stack", texture: [["us_dollar_stack", 1], ["us_dollar_stack", 1], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.oneDollarStack, "wood", 3, true);
Block.registerDropFunction("oneDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.oneDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("twoDollarStack");
Block.createBlock("twoDollarStack", [{name: "Two Dollars Stack", texture: [["us_dollar_stack", 2], ["us_dollar_stack", 2], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.twoDollarStack, "wood", 3, true);
Block.registerDropFunction("twoDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.twoDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("fiveDollarStack");
Block.createBlock("fiveDollarStack", [{name: "Five Dollars Stack", texture: [["us_dollar_stack", 5], ["us_dollar_stack", 5], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.fiveDollarStack, "wood", 3, true);
Block.registerDropFunction("fiveDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.fiveDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("tenDollarStack");
Block.createBlock("tenDollarStack", [{name: "Ten Dollars Stack", texture: [["us_dollar_stack", 10], ["us_dollar_stack", 10], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.tenDollarStack, "wood", 3, true);
Block.registerDropFunction("tenDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.tenDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("twentyDollarStack");
Block.createBlock("twentyDollarStack", [{name: "Twenty Dollars Stack", texture: [["us_dollar_stack", 20], ["us_dollar_stack", 20], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.twentyDollarStack, "wood", 3, true);
Block.registerDropFunction("twentyDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.twentyDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("fiftyDollarStack");
Block.createBlock("fiftyDollarStack", [{name: "Fifty Dollars Stack", texture: [["us_dollar_stack", 50], ["us_dollar_stack", 50], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.fiftyDollarStack, "wood", 3, true);
Block.registerDropFunction("fiftyDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.fiftyDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("oneHandredDollarStack");
Block.createBlock("oneHandredDollarStack", [{name: "One Handred Dollars Stack", texture: [["us_dollar_stack", 100], ["us_dollar_stack", 100], ["us_dollar_stack", 0]], inCreative: true}], BLOCK_TYPE_DOLLAR);
ToolAPI.registerBlockMaterial(BlockID.oneHandredDollarStack, "wood", 3, true);
Block.registerDropFunction("oneHandredDollarStack", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[ItemID.oneHandredDollar, 9, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("bitcoin");
Block.createBlock("bitcoin", [{name: "Bitcoin", texture: [["bitcoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.bitcoin, "stone", 3, true);
Block.registerDropFunction("bitcoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.bitcoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("wondercoin");
Block.createBlock("wondercoin", [{name: "Wondercoin", texture: [["wondercoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.wondercoin, "stone", 3, true);
Block.registerDropFunction("wondercoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.wondercoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("ethereum");
Block.createBlock("ethereum", [{name: "Ethereum", texture: [["ethereum_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.ethereum, "stone", 3, true);
Block.registerDropFunction("ethereum", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.ethereum, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("arkcoin");
Block.createBlock("arkcoin", [{name: "Arkcoin", texture: [["arkcoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.arkcoin, "stone", 3, true);
Block.registerDropFunction("arkcoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.arkcoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("cosmocash");
Block.createBlock("cosmocash", [{name: "Cosmocash", texture: [["cosmocash_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.cosmocash, "stone", 3, true);
Block.registerDropFunction("cosmocash", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.cosmocash, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("augur");
Block.createBlock("augur", [{name: "Augur", texture: [["augur_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.augur, "stone", 3, true);
Block.registerDropFunction("augur", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.augur, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("lisk");
Block.createBlock("lisk", [{name: "Lisk", texture: [["lisk_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.lisk, "stone", 3, true);
Block.registerDropFunction("lisk", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.lisk, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("firecoin");
Block.createBlock("firecoin", [{name: "Firecoin", texture: [["firecoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.firecoin, "stone", 3, true);
Block.registerDropFunction("firecoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.firecoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("zerocash");
Block.createBlock("zerocash", [{name: "Zerocash", texture: [["zerocash_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.zerocash, "stone", 3, true);
Block.registerDropFunction("zerocash", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.zerocash, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("dashcoin");
Block.createBlock("dashcoin", [{name: "Dashcoin", texture: [["dashcoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.dashcoin, "stone", 3, true);
Block.registerDropFunction("dashcoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.dashcoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("monero");
Block.createBlock("monero", [{name: "Monero", texture: [["monero_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.monero, "stone", 3, true);
Block.registerDropFunction("monero", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.monero, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("ripple");
Block.createBlock("ripple", [{name: "Ripple", texture: [["ripple_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.ripple, "stone", 3, true);
Block.registerDropFunction("ripple", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.ripple, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("windcoin");
Block.createBlock("windcoin", [{name: "Windcoin", texture: [["windcoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.windcoin, "stone", 3, true);
Block.registerDropFunction("windcoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.windcoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("litecoin");
Block.createBlock("litecoin", [{name: "Litecoin", texture: [["litecoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.litecoin, "stone", 3, true);
Block.registerDropFunction("litecoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.litecoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("dogecoin");
Block.createBlock("dogecoin", [{name: "Dogecoin", texture: [["dogecoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.dogecoin, "stone", 3, true);
Block.registerDropFunction("dogecoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.dogecoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("peercoin");
Block.createBlock("peercoin", [{name: "Peercoin", texture: [["peercoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.peercoin, "stone", 3, true);
Block.registerDropFunction("peercoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.peercoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("concoin");
Block.createBlock("concoin", [{name: "Concoin", texture: [["concoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.concoin, "stone", 3, true);
Block.registerDropFunction("concoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.concoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("buzcoin");
Block.createBlock("buzcoin", [{name: "Buzcoin", texture: [["buzcoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.buzcoin, "stone", 3, true);
Block.registerDropFunction("buzcoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.buzcoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("mooncoin");
Block.createBlock("mooncoin", [{name: "Mooncoin", texture: [["mooncoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.mooncoin, "stone", 3, true);
Block.registerDropFunction("mooncoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.mooncoin, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("marscoin");
Block.createBlock("marscoin", [{name: "Marscoin", texture: [["marscoin_ore", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
ToolAPI.registerBlockMaterial(BlockID.marscoin, "stone", 3, true);
Block.registerDropFunction("marscoin", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
        return [[ItemID.marscoin, 1, 0]];
    }
    return [];
}, 3);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 5; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 16);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bitcoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 20; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 46);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.peercoin, 1, 4);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 18; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 40);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.litecoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 14; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 30);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dashcoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 6; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ethereum, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 15; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 34);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.monero, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 12; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 24);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.augur, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 13; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 26);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lisk, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 14; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 28);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.zerocash, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 17; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 36);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ripple, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 19; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 43);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dogecoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 6; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 18);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.wondercoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 8; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.cosmocash, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 16; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 28);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.firecoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 12; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 38);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.windcoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 7; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 18);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.arkcoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 12; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.concoin, 1, 3);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 21; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 43);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.buzcoin, 1, 3);
    }
});
Recipes.addShaped({id: BlockID.bitcoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.bitcoin, 0]);
Recipes.addShaped({id: ItemID.bitcoin, count: 4, data: 0}, ["b"], ["b", BlockID.bitcoin, 0]);
Recipes.addShaped({id: BlockID.ethereum, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.ethereum, 0]);
Recipes.addShaped({id: ItemID.ethereum, count: 4, data: 0}, ["b"], ["b", BlockID.ethereum, 0]);
Recipes.addShaped({id: BlockID.concoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.concoin, 0]);
Recipes.addShaped({id: ItemID.concoin, count: 4, data: 0}, ["b"], ["b", BlockID.concoin, 0]);
Recipes.addShaped({id: BlockID.arkcoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.arkcoin, 0]);
Recipes.addShaped({id: ItemID.arkcoin, count: 4, data: 0}, ["b"], ["b", BlockID.arkcoin, 0]);
Recipes.addShaped({id: BlockID.wondercoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.wondercoin, 0]);
Recipes.addShaped({id: ItemID.wondercoin, count: 4, data: 0}, ["b"], ["b", BlockID.wondercoin, 0]);
Recipes.addShaped({id: BlockID.cosmocash, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.cosmocash, 0]);
Recipes.addShaped({id: ItemID.cosmocash, count: 4, data: 0}, ["b"], ["b", BlockID.cosmocash, 0]);
Recipes.addShaped({id: BlockID.augur, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.augur, 0]);
Recipes.addShaped({id: ItemID.augur, count: 4, data: 0}, ["b"], ["b", BlockID.augur, 0]);
Recipes.addShaped({id: BlockID.lisk, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.lisk, 0]);
Recipes.addShaped({id: ItemID.lisk, count: 4, data: 0}, ["b"], ["b", BlockID.lisk, 0]);
Recipes.addShaped({id: BlockID.firecoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.firecoin, 0]);
Recipes.addShaped({id: ItemID.firecoin, count: 4, data: 0}, ["b"], ["b", BlockID.firecoin, 0]);
Recipes.addShaped({id: BlockID.zerocash, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.zerocash, 0]);
Recipes.addShaped({id: ItemID.zerocash, count: 4, data: 0}, ["b"], ["b", BlockID.zerocash, 0]);
Recipes.addShaped({id: BlockID.dashcoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.dashcoin, 0]);
Recipes.addShaped({id: ItemID.dashcoin, count: 4, data: 0}, ["b"], ["b", BlockID.dashcoin, 0]);
Recipes.addShaped({id: BlockID.monero, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.monero, 0]);
Recipes.addShaped({id: ItemID.monero, count: 4, data: 0}, ["b"], ["b", BlockID.monero, 0]);
Recipes.addShaped({id: BlockID.ripple, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.ripple, 0]);
Recipes.addShaped({id: ItemID.ripple, count: 4, data: 0}, ["b"], ["b", BlockID.ripple, 0]);
Recipes.addShaped({id: BlockID.windcoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.windcoin, 0]);
Recipes.addShaped({id: ItemID.windcoin, count: 4, data: 0}, ["b"], ["b", BlockID.windcoin, 0]);
Recipes.addShaped({id: BlockID.litecoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.litecoin, 0]);
Recipes.addShaped({id: ItemID.litecoin, count: 4, data: 0}, ["b"], ["b", BlockID.litecoin, 0]);
Recipes.addShaped({id: BlockID.dogecoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.dogecoin, 0]);
Recipes.addShaped({id: ItemID.dogecoin, count: 4, data: 0}, ["b"], ["b", BlockID.dogecoin, 0]);
Recipes.addShaped({id: BlockID.buzcoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.buzcoin, 0]);
Recipes.addShaped({id: ItemID.buzcoin, count: 4, data: 0}, ["b"], ["b", BlockID.buzcoin, 0]);
Recipes.addShaped({id: BlockID.peercoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.peercoin, 0]);
Recipes.addShaped({id: ItemID.peercoin, count: 4, data: 0}, ["b"], ["b", BlockID.peercoin, 0]);
Recipes.addShaped({id: BlockID.mooncoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.mooncoin, 0]);
Recipes.addShaped({id: ItemID.mooncoin, count: 4, data: 0}, ["b"], ["b", BlockID.mooncoin, 0]);
Recipes.addShaped({id: BlockID.marscoin, count: 1, data: 0}, ["aa", "aa"], ["a", ItemID.marscoin, 0]);
Recipes.addShaped({id: ItemID.marscoin, count: 4, data: 0}, ["b"], ["b", BlockID.marscoin, 0]);
Recipes.addShaped({id: BlockID.oneDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.oneDollar, 0]);
Recipes.addShaped({id: ItemID.oneDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.oneDollarStack, 0]);
Recipes.addShaped({id: BlockID.twoDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.twoDollar, 0]);
Recipes.addShaped({id: ItemID.twoDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.twoDollarStack, 0]);
Recipes.addShaped({id: BlockID.fiveDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.fiveDollar, 0]);
Recipes.addShaped({id: ItemID.fiveDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.fiveDollarStack, 0]);
Recipes.addShaped({id: BlockID.tenDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.tenDollar, 0]);
Recipes.addShaped({id: ItemID.tenDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.tenDollarStack, 0]);
Recipes.addShaped({id: BlockID.twentyDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.twentyDollar, 0]);
Recipes.addShaped({id: ItemID.twentyDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.twentyDollarStack, 0]);
Recipes.addShaped({id: BlockID.fiftyDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.fiftyDollar, 0]);
Recipes.addShaped({id: ItemID.fiftyDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.fiftyDollarStack, 0]);
Recipes.addShaped({id: BlockID.oneHandredDollarStack, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.oneHandredDollar, 0]);
Recipes.addShaped({id: ItemID.oneHandredDollar, count: 9, data: 0}, ["aaa", "aba", "aaa"], ["b", BlockID.oneHandredDollarStack, 0]);

