TileEntity.registerPrototype(BlockID.composter, {
    defaultValues: {
        state: 0
    },
    init: function () {
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, _create_compost_model(this.data.state));
    },
    click: function (id, count, data) {
        let result = Recipe.getComposterRecipe(id);
        if (result) {
            Game.prevent();
            if (Random.randomDouble(1, 100) < result && this.data.state < 7) {
                this.data.state++;
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, _create_compost_model(this.data.state));
            }
            Player.decreaseCarriedItem(1);
            return;
        }
        if (this.data.state == 7) {
            World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, 351, 1, 15);
            this.data.state = 0;
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
    }
});