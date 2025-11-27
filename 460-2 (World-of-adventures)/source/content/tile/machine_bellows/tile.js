TileEntity.registerPrototype(BlockID.bellows, {
    click: function (item_id, item_count, item_data) {
        Game.prevent();
        let data = World.getBlock(this.x, this.y, this.z).data;
        let direction = {};
        if (data == 0) direction = { x: 0, z: 1 };
        if (data == 2) direction = { x: 1, z: 0 };
        if (data == 1) direction = { x: 0, z: -1 };
        if (data == 3) direction = { x: -1, z: 0 };

        var tile = World.getTileEntity(this.x + direction.x, this.y, this.z + direction.z);

        if (!(tile && tile.onAIRGet))
            alert(World.getBlock(this.x, this.y, this.z).data);

        if (tile && tile.onAIRGet)
            tile.onAIRGet(this);
    },
});