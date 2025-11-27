IDRegistry.genItemID("longFallBoots");
Item.createArmorItem("longFallBoots", "Long Fall Boots", {name: "longFallBoots", meta: 0}, {isTech: false, armor: 3, type: "boots", texture: "armor/longFallBoots.png", durability: 300});
Armor.registerOnTickListener(ItemID.longFallBoots, function ArmorGeneral(item, slot, playerUid) {
    let coords = Entity.getPosition(playerUid), getSpeedOnY = Entity.getVelocity(playerUid).y, getBlockId = World.getBlockID(coords.x, coords.y - 3, coords.z);
    Game.tipMessage(getSpeedOnY);
    if (getSpeedOnY < -0.5 && getBlockId != 0) {
        Entity.addEffect(playerUid, 27, 0, 10, false, false);
    }
});
if (__config__.getBool("Hard Craft")) {
    Recipes.addShaped({id: ItemID.longFallBoots, count: 1, data: 0}, ["i i", "o o", "dsd"], ["i", 42, 0, "o", 49, 0, "d", 57, 0, "s", 399, 0]);
} else {
    Recipes.addShaped({id: ItemID.longFallBoots, count: 1, data: 0}, ["i i", "o o", "d d"], ["i", 265, 0, "o", 49, 0, "d", 264, 0]);
}

