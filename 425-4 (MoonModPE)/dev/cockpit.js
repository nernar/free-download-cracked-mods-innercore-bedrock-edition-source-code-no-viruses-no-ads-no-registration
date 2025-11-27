IDRegistry.genBlockID("cockpit");
Block.createBlock("cockpit", [{name: "Shuttle cockpit", texture: [["cockpit_top", 0], ["cockpit_top", 0], ["cockpit", 0], ["cockpit", 0], ["cockpit", 0], ["cockpit", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.cockpit, "stone", 2);
Block.setDestroyTime(BlockID.cockpit, 2);
Block.setDestroyLevel("cockpit", 2);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (block.id == BlockID.cockpit) {
        if (findShuttle(coords.x, coords.y, coords.z) == true) {
            if (moon.isInDimension() == false) {
                moon.transferIn();
            } else {
                if (moon.isInDimension() == true) {
                    moon.transferOut();
                }
            }
        } else {
            Game.message("\xa7c" + "Error: Incompleted structure!");
        }
    }
});

