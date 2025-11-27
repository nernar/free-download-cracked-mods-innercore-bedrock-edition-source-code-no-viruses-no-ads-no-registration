IDRegistry.genBlockID("axle");
Block.createBlock("axle", [{name: "Axle", texture: [["axleSide", 0], ["axleSide", 0], ["axleSide", 0], ["axleSide", 0], ["axleSide", 0], ["axleSide", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.axle, {x: 0.3, y: 0.3, z: 0.3}, {x: 0.7, y: 0.7, z: 0.7});
setupWireRender(BlockID.axle, "axle", 0.2);
var axleDir = [{x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}];
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.axle, 2, 0, [[ItemID.plantRope, 0], [5, 0], [ItemID.plantRope, 0], [0, 0], [ItemID.bark_oak, 0], [0, 0], [ItemID.plantRope, 0], [5, 0], [ItemID.plantRope, 0]], 0);
});
KineticMachine.registerPrototype(BlockID.axle, {defaultValues: {work: false}, tick: function () {
    for (i in axleDir) {
        let dir = axleDir[i];
        let tile = World.getTileEntity(this.x + dir.x, this.y + dir.y, this.z + dir.z);
        for (i in KineticMachine.machineIDs) {
            if (World.getBlockID(this.x + dir.x, this.y + dir.y, this.z + dir.z) == KineticMachine.machineIDs[i]) {
                if (tile && (tile.type() == "in" || tile.type() == "io") && !tile.data.work && this.data.work) {
                    tile.data.work = true;
                }
                if (tile && (tile.type() == "out" || tile.type() == "io") && tile.data.work && !this.data.work) {
                    this.data.work = true;
                }
            }
        }
    }
}, type: function () {
    return "io";
}});

