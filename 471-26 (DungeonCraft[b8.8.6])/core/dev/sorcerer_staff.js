IDRegistry.genItemID("sorcererStaff");
Item.createItem("sorcererStaff", "sorcerer staff", {name: "sorcerer_staff", meta: 0}, {stack: 1});
Translation.addTranslation("sorcerer staff", {ru: "\u043f\u043e\u0441\u043e\u0445 \u0447\u0430\u0440\u043e\u0434\u0435\u044f"});
Item.registerUseFunction("sorcererStaff", function (coords, item, block, player) {
    if (block.id == BlockID.blockmetal) {
        for (let i = 0; i <= 15; i++) {
            Mp.spawnParticle(PartType.magic, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, Math.random() / 10, 0);
        }
        let bs = BlockSource.getDefaultForActor(player);
        bs.setBlock(coords.x, coords.y, coords.z, BlockID.manaStorage, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
    }
});
Item.addCreativeGroup("staff", Translation.translate("staff"), [ItemID.sorcererStaff, ItemID.stick2]);
function isItem(ent) {
}
ModAPI.addAPICallback("AncientWondersAPI", function (api) {
    api.Wands.addStick({id: ItemID.sorcererStaff, time: 13, texture: {name: "sorcerer_staff"}, bonus: {necromancer: 5, magis: 5, aspects: 5}});
});

