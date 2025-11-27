IDRegistry.genItemID("wand_master");
Item.createItem("wand_master", "Wand [Master]", {name: "wand_master"}, {stack: 1});
Item.setToolRender(ItemID.wand_master, true);
Item.registerNameOverrideFunction(ItemID.wand_master, MASTER_WAND_NAME);
Item.registerUseFunction("wand_master", function (coords, item, block) {
    var player_xp = Player.getLevel();
    if (player_xp < MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
        Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
    }
    if (player_xp < MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
        Game.message("Not enough xp(\u041c\u0430\u043b\u043e \u043e\u043f\u044b\u0442\u0430)...");
    }
    if (block.id == BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
        player_xp -= MASTER_WAND_CONSUMPTION;
        Player.setLevel(player_xp);
        World.setBlock(coords.x, coords.y, coords.z, 0);
        World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.wizardry_book, 1, 0);
    }
    if (block.id == BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
        player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
        Player.setLevel(player_xp);
        World.setBlock(coords.x, coords.y, coords.z, 0);
        World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.wizardry_book, 1, 0);
    }
    if (SPELL_TYPE == 6 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
        player_xp -= MASTER_WAND_CONSUMPTION;
        Player.setLevel(player_xp);
        Entity.addEffect(Player.get(), 10, 2550, 6);
    }
    if (SPELL_TYPE == 6 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
        player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
        Player.setLevel(player_xp);
        Entity.addEffect(Player.get(), 10, 2550, 6);
    }
    if (SPELL_TYPE == 7 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
        player_xp -= MASTER_WAND_CONSUMPTION;
        Player.setLevel(player_xp);
        Entity.spawn(coords.relative.x, coords.relative.y, coords.relative.z, LIGHTNING_ID);
    }
    if (SPELL_TYPE == 7 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
        player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
        Player.setLevel(player_xp);
        Entity.spawn(coords.relative.x, coords.relative.y, coords.relative.z, LIGHTNING_ID);
    }
    if (SPELL_TYPE == 8 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION && XP_DISCOUNT != 1) {
        player_xp -= MASTER_WAND_CONSUMPTION;
        Player.setLevel(player_xp);
        Entity.spawn(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, IRON_GOLEM_ID);
    }
    if (SPELL_TYPE == 8 && block.id != BOOK_SHELF_ID && player_xp >= MASTER_WAND_CONSUMPTION / DISCOUNT && XP_DISCOUNT == 1) {
        player_xp -= MASTER_WAND_CONSUMPTION / DISCOUNT;
        Player.setLevel(player_xp);
        Entity.spawn(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, IRON_GOLEM_ID);
    }
    debug(SPELL_TYPE, player_xp);
});

