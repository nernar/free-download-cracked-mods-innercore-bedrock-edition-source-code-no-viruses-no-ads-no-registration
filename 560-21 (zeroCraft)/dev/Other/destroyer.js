var radius = parseInt(__config__.access("ZCradius"));


if(radius > 3 || isNaN(radius))
    radius = 3;

function destroy (x, y, z, id, data) {
    if (World.getBlock(x, y, z).id != 7) {
        World.destroyBlock (x, y, z, true);
    }
}

Callback.addCallback ("DestroyBlock", function (coords, block, player) {
    if (Player.getCarriedItem().id == ItemID.scapolite_destroy) {
        for (var vx = -radius; vx < radius; vx++)
            for (var vy = -radius; vy < radius; vy++)
                for (var vz = -radius; vz < radius; vz++)
                    destroy(coords.x+vx, coords.y+vy, coords.z+vz, block.id, block.data);
    }
});
