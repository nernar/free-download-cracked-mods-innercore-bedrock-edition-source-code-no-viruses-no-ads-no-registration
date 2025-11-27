IDRegistry.genBlockID("gearbox");
Block.createBlock("gearbox", [{name: "Gearbox", texture: [["gearbox", 0]], inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.gearbox, 1, 0, [[5, 0], [ItemID.gearWooden, 0], [5, 0], [ItemID.gearWooden, 0], [BlockID.axle, 0], [ItemID.gearWooden, 0], [5, 0], [ItemID.gearWooden, 0], [5, 0]], 0);
});
KineticMachine.registerPrototype(BlockID.gearbox, {defaultValues: {work: false}, tick: function () {
    for (i in waterWheelDir) {
        let dir = waterWheelDir[i];
        let tileGive = World.getTileEntity(this.x + dir.x, this.y, this.z + dir.z);
        if (tileGive && (tileGive.type() == "in" || tileGive.type() == "io") && this.data.work) {
            tileGive.data.work = true;
        } else {
            if (tileGive) {
                tileGive.data.work = false;
            }
        }
    }
}, type: function () {
    return "io";
}});

