let SubTileKekimurus = (function (_super) {
    __extends(SubTileKekimurus, _super);
    const RANGE = 0;
    const MANA_PER_CAKE_BITS = 1800;
    function SubTileKekimurus() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileKekimurus.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.getMaxMana() - this.getMana() >= MANA_PER_CAKE_BITS && this.data.ticksExisted % 80 == 0) {
            for (let x = 0; x < RANGE * 2; x++) {
                for (let y = 0; y < RANGE * 2; y++) {
                    for (let z = 0; z < RANGE * 2; z++) {
                        let xx = this.x + x - RANGE;
                        let yy = this.y + y - RANGE;
                        let zz = this.z + z - RANGE;
                        let block = this.region.getBlock(xx, yy, zz);
                        if (block.id == 92) {
                            let nextSlicesEaten = block.getState(EBlockStates.BITE_COUNTER) + 1;
                            this.region.destroyBlock(xx, yy, zz);
                            if (nextSlicesEaten < 6) {
                                this.region.setBlock(xx, yy, zz, block.addState(EBlockStates.BITE_COUNTER, nextSlicesEaten));
                            }
                            this.addMana(MANA_PER_CAKE_BITS);
                        }
                    }
                }
            }
        }
    };
    SubTileKekimurus.prototype.getColor = function () {
        return 9657640;
    };
    SubTileKekimurus.prototype.getMaxMana = function () {
        return 9001;
    };
    return SubTileKekimurus;
}(TileEntityGeneratingFlower));

