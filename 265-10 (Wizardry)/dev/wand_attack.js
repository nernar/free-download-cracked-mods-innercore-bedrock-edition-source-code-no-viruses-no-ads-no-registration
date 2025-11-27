Callback.addCallback("PlayerAttack", function (player, victim) {
    var giveItem = Player.getCarriedItem(true);
    var player_xp = Player.getLevel();
    var coords = Entity.getPosition(victim);
    if (giveItem.id == ItemID.wand_basic) {
        if (player_xp < BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (player_xp < BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (SPELL_TYPE == 3 && player_xp >= BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 3 && player_xp >= BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 4 && player_xp >= BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 4 && player_xp >= BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 5 && player_xp >= BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 5 && player_xp >= BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 7 && player_xp >= BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 7 && player_xp >= BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 9 && player_xp >= BASIC_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
        if (SPELL_TYPE == 9 && player_xp >= BASIC_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= BASIC_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
    }
    if (giveItem.id == ItemID.wand_advanced) {
        if (player_xp < ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (player_xp < ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (SPELL_TYPE == 3 && player_xp >= ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 3 && player_xp >= ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 4 && player_xp >= ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 4 && player_xp >= ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 5 && player_xp >= ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 5 && player_xp >= ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 7 && player_xp >= ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 7 && player_xp >= ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 9 && player_xp >= ADVANCED_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
        if (SPELL_TYPE == 9 && player_xp >= ADVANCED_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= ADVANCED_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
    }
    if (giveItem.id == ItemID.wand_master) {
        if (player_xp < MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (player_xp < MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
            Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
        }
        if (SPELL_TYPE == 3 && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 3 && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            World.explode(coords.x, coords.y + 1, coords.z, 0.3, true);
        }
        if (SPELL_TYPE == 4 && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 4 && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
        }
        if (SPELL_TYPE == 5 && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 5 && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            World.setBlock(coords.x + 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BLOCK_ICE_ID);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BLOCK_ICE_ID);
            World.setBlock(coords.x, coords.y + 2, coords.z, BLOCK_ICE_ID);
        }
        if (SPELL_TYPE == 7 && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 7 && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.spawn(coords.x, coords.y, coords.z, LIGHTNING_ID);
            Entity.damageEntity(victim, 8);
        }
        if (SPELL_TYPE == 9 && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
        if (SPELL_TYPE == 9 && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1 && Entity.getType(victim) != LIGHTNING_ID) {
            player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
            Player.setLevel(player_xp);
            Entity.damageEntity(victim, 8);
            Entity.setFire(victim, 1600);
            World.setBlock(coords.x + 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x - 2, coords.y + 1, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.magma);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.magma);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z + 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z - 1, BlockID.magma);
            World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.magma);
        }
    }
    debug(SPELL_TYPE, player_xp);
});

