Generator.setItem("fire_bow", {name: "Fire bow", texture: "fire_bow_empty", stack: 1});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.fire_bow, count: 1, data: 0}, ["  s", " st", "s t"], ["s", 280, 0, "t", ItemID.plant_twine, 0]);
});
Item.setMaxDamage(ItemID.fire_bow, 15);
Item.registerUseFunction(ItemID.fire_bow, function (c, item, block) {
    let tile = World.getTileEntity(c.x, c.y, c.z);
    if (block.id == BlockID.log_stack) {
        World.setBlock(c.x, c.y, c.z, BlockID.log_stack_burn);
        breakItem();
    } else {
        if (tile == null) {
            World.setBlock(c.relative.x, c.relative.y, c.relative.z, 51);
            breakItem();
        }
    }
});

