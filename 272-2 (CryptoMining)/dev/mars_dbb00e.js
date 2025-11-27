var BLOCK_TYPE_MARS = Block.createSpecialType({base: 1, solid: true, destroytime: 2, explosionres: 1}, "stone");
IDRegistry.genBlockID("turfMars");
Block.createBlock("turfMars", [{name: "Mars turf", texture: [["turfMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.turfMars, "dirt", 3, true);
Block.registerDropFunction("turfMars", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[BlockID.turfMars, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("stoneMars");
Block.createBlock("stoneMars", [{name: "Mars stone", texture: [["stoneMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.stoneMars, "stone", 3, true);
Block.registerDropFunction("stoneMars", function (coords, blockID, blockData, level, enchant) {
    if (level > 1) {
        return [[BlockID.stoneMars, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("dirtMars");
Block.createBlock("dirtMars", [{name: "Mars dirt", texture: [["dirtMars", 0]], inCreative: true}], BLOCK_TYPE_MARS);
ToolAPI.registerBlockMaterial(BlockID.dirtMars, "dirt", 3, true);
Block.registerDropFunction("dirtMars", function (coords, blockID, blockData, level, enchant) {
    if (level > -1) {
        return [[BlockID.dirtMars, 1, 0]];
    }
    return [];
}, 3);
var Mars = new Dimension({name: "Mars", generation: {layers: [{range: [0, 70], noise: {octaves: {count: 8, weight: [0.51, 0.51 / 2, 0.51 / 4, 0.51 / 8, 0.51 / 16], scale: [0.01, 0.02, 0.04, 0.08, 0.16]}}, gradient: [[0.1, 1], [0.1, 1], [1, -1]], terrain: {base: BlockID.stoneMars, cover: {height: 4, top: BlockID.dirtMars, block: BlockID.turfMars}}}, {range: [0, 70], noise: {octaves: {count: 3, weight: [0.55, 0.55 / 2, 0.55 / 4], scale: [0.005, 0.01, 0.02]}}, gradient: [[0.1, 0.3], [0.1, 5], [0.1, 0.7], [1, -1]], terrain: {base: BlockID.stoneMars, cover: {height: 4, top: BlockID.dirtMars, block: BlockID.turfMars}}}]}, callbacks: {tick: function () {
    if (World.getThreadTime() % 8 == 0) {
        World.setWorldTime(20000);
        if (Math.random() < 0.02) {
            var pos = Player.getPosition();
            var randomX = parseInt(Math.random() * 200);
            var randomZ = parseInt(Math.random() * 200);
            pos = GenerationUtils.findSurface(pos.x - 100 + randomX, pos.y, pos.z - 100 + randomZ);
            World.explode(pos.x, pos.y, pos.z, 5, true);
            World.setBlock(pos.x, pos.y - 6, pos.z, 0, 0);
            World.setBlock(pos.x - 1, pos.y - 6, pos.z, 0, 0);
            World.setBlock(pos.x + 1, pos.y - 6, pos.z, 0, 0);
            World.setBlock(pos.x, pos.y - 6, pos.z + 1, 0, 0);
            World.setBlock(pos.x - 1, pos.y - 6, pos.z + 1, 0, 0);
            World.setBlock(pos.x + 1, pos.y - 6, pos.z + 1, 0, 0);
            World.setBlock(pos.x - 1, pos.y - 6, pos.z - 1, 0, 0);
            World.setBlock(pos.x, pos.y - 8, pos.z, BlockID.marscoin, 0);
            World.setBlock(pos.x + 1, pos.y - 8, pos.z, BlockID.marscoin, 0);
            if (Math.random() < 0.4) {
                World.explode(pos.x, pos.y, pos.z, 7, true);
                World.setBlock(pos.x, pos.y - 8, pos.z, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 8, pos.z, 0, 0);
                World.setBlock(pos.x + 1, pos.y - 8, pos.z, 0, 0);
                World.setBlock(pos.x, pos.y - 8, pos.z + 1, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 8, pos.z + 1, 0, 0);
                World.setBlock(pos.x + 1, pos.y - 8, pos.z + 1, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 8, pos.z - 1, 0, 0);
                World.setBlock(pos.x + 1, pos.y - 8, pos.z - 1, 0, 0);
                World.setBlock(pos.x, pos.y - 8, pos.z - 1, 0, 0);
                World.setBlock(pos.x, pos.y - 9, pos.z, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 9, pos.z, 0, 0);
                World.setBlock(pos.x, pos.y - 9, pos.z - 1, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 9, pos.z + 1, 0, 0);
                World.setBlock(pos.x + 1, pos.y - 9, pos.z - 1, 0, 0);
                World.setBlock(pos.x - 1, pos.y - 9, pos.z - 1, 0, 0);
                World.setBlock(pos.x, pos.y - 10, pos.z, BlockID.marscoin, 0);
                World.setBlock(pos.x, pos.y - 11, pos.z + 1, BlockID.marscoin, 0);
                World.setBlock(pos.x, pos.y - 11, pos.z, BlockID.marscoin, 0);
                World.setBlock(pos.x + 1, pos.y - 11, pos.z, BlockID.marscoin, 0);
            }
            PlaySoundFile("crash.ogg");
        }
    }
}, generateChunk: function (chunkX, chunkZ) {
    Callback.invokeCallback("MoonChunk", chunkX, chunkZ);
}, loaded: function () {
}, unloaded: function () {
}}});
var MarsTs = new TransferSequence(Mars);
MarsTs.setPortalTimeout(40);
MarsTs.setPortalOverlay(new PortalOverlayWindow({frames: 32, rate: 20, fade: 1, texture: "aether_portal_overlay_animation"}));
MarsTs.setLoadingScreenParams({texture: "default_dimension_loading_screen"});
PortalRegistry.newPortalBlock("Mars_portal", ["Crypto_portal", 0], MarsTs.getPortal(), {type: "full", frameId: 0}, true);
MarsTs.setPortalTiles(BlockID.Mars_portal);
var shape = new PortalShape();
shape.setPortalId(BlockID.Mars_portal);
shape.setFrameIds(0);
shape.setMinSize(1, 1);
MarsTs.setPortalBuilder(shape.getBuilder());
Callback.addCallback("DestroyBlock", function (pos, block) {
    if (block.id == BlockID.mooncoin || block.id == BlockID.Mars_portal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.Mars_portal, [4]);
    }
});
TileEntity.registerPrototype(BlockID.mooncoin, {tick: function () {
    var wgb = World.getBlockID;
    var blc1 = wgb(this.x + 1, this.y, this.z);
    var blc2 = wgb(this.x - 1, this.y, this.z);
    var blc3 = wgb(this.x, this.y, this.z + 1);
    var blc4 = wgb(this.x, this.y, this.z - 1);
    var blc5 = wgb(this.x + 1, this.y, this.z + 1);
    var blc6 = wgb(this.x + 1, this.y, this.z - 1);
    var blc7 = wgb(this.x - 1, this.y, this.z + 1);
    var blc8 = wgb(this.x - 1, this.y, this.z - 1);
    var blc9 = wgb(this.x + 2, this.y, this.z);
    var blc10 = wgb(this.x - 2, this.y, this.z);
    var blc11 = wgb(this.x + 2, this.y - 1, this.z);
    var blc12 = wgb(this.x - 2, this.y - 1, this.z);
    var blc13 = wgb(this.x, this.y, this.z + 2);
    var blc14 = wgb(this.x, this.y, this.z - 2);
    var blc15 = wgb(this.x, this.y - 1, this.z + 2);
    var blc16 = wgb(this.x, this.y - 1, this.z - 2);
    var blc16 = wgb(this.x + 1, this.y + 1, this.z);
    var blc17 = wgb(this.x - 1, this.y + 1, this.z);
    var blc18 = wgb(this.x, this.y + 1, this.z + 1);
    var blc19 = wgb(this.x, this.y + 1, this.z - 1);
    var blc20 = wgb(this.x + 1, this.y + 1, this.z + 1);
    var blc21 = wgb(this.x + 1, this.y + 1, this.z - 1);
    var blc22 = wgb(this.x - 1, this.y + 1, this.z + 1);
    var blc23 = wgb(this.x - 1, this.y + 1, this.z - 1);
    var blc24 = wgb(this.x + 1, this.y + 3, this.z);
    var blc25 = wgb(this.x - 1, this.y + 3, this.z);
    var blc26 = wgb(this.x, this.y + 3, this.z + 1);
    var blc27 = wgb(this.x, this.y + 3, this.z - 1);
    var blc28 = wgb(this.x + 1, this.y + 3, this.z + 1);
    var blc29 = wgb(this.x + 1, this.y + 3, this.z - 1);
    var blc30 = wgb(this.x - 1, this.y + 3, this.z + 1);
    var blc31 = wgb(this.x - 1, this.y + 3, this.z - 1);
    var blc32 = wgb(this.x + 1, this.y + 2, this.z);
    var blc33 = wgb(this.x - 1, this.y + 2, this.z);
    var blc34 = wgb(this.x, this.y + 2, this.z + 1);
    var blc35 = wgb(this.x, this.y + 2, this.z - 1);
    var blc36 = wgb(this.x + 1, this.y + 2, this.z + 1);
    var blc37 = wgb(this.x + 1, this.y + 2, this.z - 1);
    var blc38 = wgb(this.x - 1, this.y + 2, this.z + 1);
    var blc39 = wgb(this.x - 1, this.y + 2, this.z - 1);
    var blc40 = wgb(this.x + 1, this.y + 5, this.z);
    var blc41 = wgb(this.x - 1, this.y + 5, this.z);
    var blc42 = wgb(this.x, this.y + 5, this.z + 1);
    var blc43 = wgb(this.x, this.y + 5, this.z - 1);
    var blc44 = wgb(this.x, this.y + 5, this.z);
    var blc45 = wgb(this.x, this.y + 6, this.z);
    var blc46 = wgb(this.x, this.y + 7, this.z);
    var blc47 = wgb(this.x + 1, this.y + 4, this.z);
    var blc48 = wgb(this.x - 1, this.y + 4, this.z);
    var blc49 = wgb(this.x, this.y + 4, this.z + 1);
    var blc50 = wgb(this.x, this.y + 4, this.z - 1);
    var blc51 = wgb(this.x + 1, this.y + 4, this.z + 1);
    var blc52 = wgb(this.x + 1, this.y + 4, this.z - 1);
    var blc53 = wgb(this.x - 1, this.y + 4, this.z + 1);
    var blc54 = wgb(this.x - 1, this.y + 4, this.z - 1);
    if (blc1 == 42 && blc2 == 42 && blc3 == 42 && blc4 == 42 && blc5 == 42 && blc6 == 42 && blc7 == 42 && blc8 == 42 && blc9 == 42 && blc10 == 42 && blc11 == 42 && blc12 == 42 && blc13 == 42 && blc14 == 42 && blc15 == 42 && blc16 == 42 && blc17 == 42 && blc18 == 42 && blc19 == 42 && blc20 == 42 && blc21 == 42 && blc22 == 42 && blc23 == 42 && blc24 == 42 && blc25 == 42 && blc26 == 42 && blc27 == 42 && blc28 == 42 && blc29 == 42 && blc30 == 42 && blc31 == 42 && blc32 == 20 && blc33 == 20 && blc34 == 20 && blc35 == 20 && blc36 == 42 && blc37 == 42 && blc38 == 42 && blc39 == 42 && blc40 == 42 && blc41 == 42 && blc42 == 42 && blc43 == 42 && blc44 == 42 && blc45 == 42 && blc46 == 42 && blc47 == 42 && blc48 == 42 && blc49 == 42 && blc50 == 42 && blc51 == 42 && blc52 == 42 && blc53 == 42 && blc54 == 42) {
        World.setBlock(this.x, this.y + 1, this.z, BlockID.Mars_portal, 0);
        World.setBlock(this.x, this.y + 2, this.z, BlockID.Mars_portal, 0);
        World.setBlock(this.x, this.y + 3, this.z, BlockID.Mars_portal, 0);
        World.setBlock(this.x, this.y + 4, this.z, BlockID.Mars_portal, 0);
    }
}});

