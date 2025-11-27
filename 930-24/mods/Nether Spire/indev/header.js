const registerNativeBlock = function (id, variations, type, destroyTime, material, diggingLevel) {
    if (VanillaBlockID[id] === undefined) {
        Logger.Log("Nether Spire: Vanilla block '" + id + "' does not exists!", "ERROR");
        return;
    }
    let registeredAsNative = false;
    let identifier = IDRegistry.genBlockID("custom_" + id);
    if (!registeredAsNative) {
        VanillaBlockID[id] = VanillaTileID[id] = identifier;
    }
    Block.createBlock("custom_" + id, variations, type);
    Block.setDestroyTime(identifier, destroyTime);
    Block.setTempDestroyTime(identifier, destroyTime);
    Block.setBlockMaterial(identifier, material, diggingLevel);
};
const clientMessage = function (playerUid, message, fallback) {
    if (Game.isDedicatedServer == null || !Game.isDedicatedServer()) {
        Commands.exec("tellraw \"" + Entity.getNameTag(playerUid) + "\" {\"rawtext\":[{\"translate\":\"" + message + "\"}]}");
        return;
    }
    let client = Network.getClientForPlayer(playerUid);
    if (client != null) {
        client.send("nether_reactor.client_message", fallback);
    }
};
Network.addClientPacket("nether_reactor.client_message", function (obj, str, cls) {
    Game.message(Translation.translate(obj));
});
const NetherSpire = {spawnEnemyLimit: __config__.getInteger("spawn_enemy_limit"), dimensionalExplodes: __config__.getBool("dimensional_explodes"), animatedDeteriorate: __config__.getBool("animated_deteriorate"), obsidianSpire: __config__.getBool("obsidian_spire"), ignoreLeavedPlayers: __config__.getBool("ignore_leaved_players"), expensiveCraft: __config__.getBool("expensive_craft"), preserveStealingGold: __config__.getBool("preserve_stealing_gold"), items: [], registerSpawnItem: function (id, count, data, extra) {
    if (!isNaN(id) && typeof id == "number") {
        this.items.push([id, count || 1, data || 0, extra || null]);
    }
}, entities: [], registerSpawnEntity: function (type) {
    if (type != EEntityType.PLAYER && !isNaN(type)) {
        this.entities.push(type);
    }
}, dimensions: [], registerAllowedDimension: function (dimension) {
    if (!isNaN(dimension) && typeof dimension == "number" && this.dimensions.indexOf(dimension) == -1) {
        this.dimensions.push(dimension);
    }
}, randomPointInAnnulus: function (r1, r2) {
    r1 *= r1;
    r2 *= r2;
    let t = Math.random() * 2 * Math.PI;
    let A = 2 / (r2 - r1);
    let r = Math.sqrt(2 * Math.random() / A + r1);
    return {x: r * Math.cos(t), z: r * Math.sin(t)};
}};
registerNativeBlock("netherreactor", [{name: "Nether Reactor Core", texture: [["reactor_core", 0]], inCreative: false}, {name: "Nether Reactor Core", texture: [["reactor_core", 1]], inCreative: false}, {name: "Nether Reactor Core", texture: [["reactor_core", 2]], inCreative: false}], {sound: "stone", explosionres: 6}, 15, "stone", 1);
Block.registerDropFunctionForID(VanillaBlockID.netherreactor, function (coords, id, data, diggingLevel, enchantData, item, blockSource) {
    data = blockSource != null ? blockSource.getBlockData(coords.x, coords.y, coords.z) : data;
    if (diggingLevel < 1 || data != 0) {
        return [];
    }
    return [[VanillaTileID.netherreactor, 1, data]];
});
Item.addToCreative(VanillaTileID.netherreactor, 1, 0);
Item.setCategory(VanillaTileID.netherreactor, EItemCategory.ITEMS);
Callback.addCallback("PreLoaded", function () {
    if (NetherSpire.expensiveCraft) {
        Recipes.addShaped({id: VanillaTileID.netherreactor, count: 1, data: 0}, ["idi", "idi", "idi"], ["i", VanillaTileID.iron_block, 0, "d", VanillaTileID.diamond_block, 0]);
    } else {
        Recipes.addShaped({id: VanillaTileID.netherreactor, count: 1, data: 0}, ["idi", "idi", "idi"], ["i", VanillaItemID.iron_ingot, 0, "d", VanillaItemID.diamond, 0]);
    }
});
registerNativeBlock("glowingobsidian", [{name: "Glowing Obsidian", texture: [["glowing_obsidian", 0]], inCreative: false}], {sound: "stone", explosionres: 1200, lightlevel: 12}, 250, "stone", 4);
Block.registerDropFunctionForID(VanillaBlockID.glowingobsidian, function (coords, id, data, diggingLevel) {
    if (diggingLevel < 4) {
        return [];
    }
    return [[VanillaTileID.obsidian, 1, data]];
});
Callback.addCallback("BreakBlock", function (blockSource, coords, block, isDropAllowed, playerUid, item) {
    if (NetherSpire.preserveStealingGold && blockSource != null && playerUid != -1 && block.id == VanillaBlockID.gold_block && (new PlayerActor(playerUid)).getGameMode() != 1 && ((blockSource.getBlockId(coords.x + 1, coords.y + 1, coords.z + 1) == VanillaBlockID.netherreactor && blockSource.getBlockData(coords.x + 1, coords.y + 1, coords.z + 1) == 1) || (blockSource.getBlockId(coords.x - 1, coords.y + 1, coords.z + 1) == VanillaBlockID.netherreactor && blockSource.getBlockData(coords.x - 1, coords.y + 1, coords.z + 1) == 1) || (blockSource.getBlockId(coords.x + 1, coords.y + 1, coords.z - 1) == VanillaBlockID.netherreactor && blockSource.getBlockData(coords.x + 1, coords.y + 1, coords.z - 1) == 1) || (blockSource.getBlockId(coords.x - 1, coords.y + 1, coords.z - 1) == VanillaBlockID.netherreactor && blockSource.getBlockData(coords.x - 1, coords.y + 1, coords.z - 1) == 1))) {
        Game.prevent();
    }
});

