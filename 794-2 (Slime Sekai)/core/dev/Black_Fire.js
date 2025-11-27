var Renderer = {setFireRender: function (id, x) {
    var shape = new ICRender.CollisionShape();
    BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);
    BlockRenderer.addRenderCallback(id, function (api, coords, block) {
        if (x != 0) {
            for (var i = 0; i < 1 / x; i += x) {
                api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0, 0, 0.501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.499, 1, 0.9, 0.501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.01, 1, 1, 0.02, id, 0);
            }
        } else {
            api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0, 0, 0.501, 0.99, 1, id, 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.499, 1, 0.9, 0.501, id, 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.98, 1, 1, 0.99, id, 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
            api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0.01, 1, 1, 0.02, id, 0);
        }
    });
    BlockRenderer.enableCustomRender(id);
}};
var BLOCK_LIGHT = Block.createSpecialType({lightlevel: 12, opaque: false});
IDRegistry.genBlockID("black_fire");
Block.createBlock("black_fire", [{name: "Black Fire", texture: [["black_fire", 0]], inCreative: true}], BLOCK_LIGHT);
Renderer.setFireRender(BlockID.black_fire, 0);
Block.setBlockShape(BlockID.black_fire, {x: 0, y: 0, z: 0}, {x: 1, y: 0.001, z: 1});
ToolAPI.registerBlockMaterial(BlockID.black_fire, "cobweb");
Callback.addCallback("tick", function () {
    var entP = Entity.getPosition(Player.get());
    var block = World.getBlockID(entP.x, entP.y, entP.z);
    if (block == BlockID.black_fire) {
        Entity.setFire(Player.get(), 500);
    }
});

