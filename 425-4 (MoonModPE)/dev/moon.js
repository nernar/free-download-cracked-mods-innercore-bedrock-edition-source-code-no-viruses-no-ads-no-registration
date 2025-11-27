var moon = new Dimension({name: "moon", generation: {layers: [{range: [0, 78], noise: {octaves: {count: 8, weight: [0.51, 0.51 / 2, 0.51 / 4, 0.51 / 8, 0.51 / 16], scale: [0.01, 0.02, 0.04, 0.08, 0.16]}}, gradient: [[0.1, 1], [0.4, 1], [1, -1]], terrain: {base: BlockID.moonRock, cover: {height: 4, top: BlockID.moonTurf, block: BlockID.moonDirt}}}], decoration: {}}, environment: {sky: [0, 0, 0.1], fog: [0, 0, 0.1]}, callbacks: {tick: function () {
    if (moon.isInDimension()) {
        let rand_tick = custom_random(1, 10);
        let playerEntity = Player.get();
        let playerPos = Entity.getPosition(playerEntity);
        let hearts = Entity.getHealth(playerEntity);
        let vertical = Entity.getVelocity(playerEntity).y;
        let vel_mod = 0.05;
        if (rand_tick == 1 && OXYGEN_MODE_ENABLED == true) {
            if (findOxygenGenerator(playerPos.x - 6, playerPos.y - 6, playerPos.z - 6, 10) == false) {
                if (Player.getArmorSlot(0).id == ItemID.astroHelmet && Player.getArmorSlot(1).id == ItemID.astroChestplate && Player.getArmorSlot(2).id == ItemID.astroLeggings && Player.getArmorSlot(3).id == ItemID.astroBoots) {
                } else {
                    Entity.setHealth(playerEntity, hearts - 2);
                    Game.tipMessage("\xa76" + "Warning: The spacesuit is not wearing!");
                }
            }
        }
        if (GRAVITY_MODE_ENABLED == true && Player.getFlying() == false && vertical < -0.1) {
            Entity.addVelocity(playerEntity, 0, vertical - vertical + vel_mod, 0);
        }
        World.setWorldTime(5000);
    }
}, generateChunk: function (chunkX, chunkZ) {
    if (moon.isInDimension()) {
        let rand = custom_random(1, 10);
        let crater_coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 256);
        crater_coords = GenerationUtils.findSurface(crater_coords.x, 85, crater_coords.z);
        if (rand == 1) {
            buildCrater(crater_coords.x, crater_coords.y, crater_coords.z);
        }
    }
}, loaded: function () {
    if (moon.isInDimension()) {
        let playerEntity = Player.get();
        let playerPos = Entity.getPosition(playerEntity);
        let shuttle_coords = GenerationUtils.findSurface(playerPos.x - 1, 85, playerPos.z - 3);
        if (findCockpit(shuttle_coords.x - 50, shuttle_coords.y - 50, shuttle_coords.z - 11, 101) == false) {
            buildShuttle(shuttle_coords.x, shuttle_coords.y + 3, shuttle_coords.z);
        }
    }
}, unloaded: function () {
}}});
var MoonTransfer = new TransferSequence(moon);
MoonTransfer.setPortalTimeout(40);
MoonTransfer.setLoadingScreenParams({texture: "loading_screen"});

