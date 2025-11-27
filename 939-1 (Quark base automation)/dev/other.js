const placeableBlocks = [
    VanillaBlockID.cake,
    VanillaBlockID.bed,
    VanillaItemID.repeater,
    VanillaBlockID.brewing_stand,
    VanillaBlockID.hopper,
    VanillaBlockID.frame,
    VanillaBlockID.flower_pot,
    VanillaItemID.comparator,
    VanillaItemID.banner,
    VanillaBlockID.campfire,
    VanillaBlockID.soul_campfire,
    VanillaBlockID.chain,
    VanillaBlockID.nether_sprouts,
    VanillaItemID.sign,
    VanillaItemID.birch_sign,
    VanillaItemID.acacia_sign,
    VanillaItemID.jungle_sign,
    VanillaItemID.warped_sign,
    VanillaItemID.spruce_sign,
    VanillaItemID.crimson_sign,
    VanillaItemID.darkoak_sign,
    VanillaBlockID.iron_door,
    VanillaBlockID.birch_door,
    VanillaBlockID.acacia_door,
    VanillaBlockID.jungle_door,
    VanillaBlockID.spruce_door,
    VanillaBlockID.warped_door,
    VanillaBlockID.wooden_door,
    VanillaBlockID.crimson_door,
    VanillaBlockID.dark_oak_door,
    VanillaItemID.wheat_seeds,
    VanillaItemID.melon_seeds,
    VanillaItemID.pumpkin_seeds,
    VanillaItemID.beetroot_seeds,
    VanillaBlockID.nether_wart,
    ItemID.flaxSeeds
];

const delay = function(action, tick) {
    Updatable.addUpdatable({
        update: function() {
            tick--;
            if (tick <= 0) {
                this.remove = action();
            }
        }
    });
};