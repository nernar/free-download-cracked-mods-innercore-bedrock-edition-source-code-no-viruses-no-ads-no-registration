TileEntity.registerPrototype(BlockID.sieve, {
    click: function (id, count, data) {
        Game.prevent();
        if (ItemDictionary.isItemInCategory(id, "minecraft:rock.flushed")) {
            let result = Recipe.getSieveRecipe(Random.randomDouble(0, 1));
            if (result) {
                Player.decreaseCarriedItem(1);
                World.drop(this.x + 0.5, this.y + 0.5, this.z + 0.5, result, 1, 0);
                return;
            }
        }
    }
});