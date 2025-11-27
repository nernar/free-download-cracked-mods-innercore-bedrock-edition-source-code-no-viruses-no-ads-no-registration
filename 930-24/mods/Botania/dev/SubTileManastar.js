let SubTileManastar = (function (_super) {
    __extends(SubTileManastar, _super);
    const NONE = 0, DECREASING = 1, INCREASING = 2;
    function SubTileManastar() {
        let _this = _super.apply(this, arguments) || this;
        _this.defaultValues.lastMana = 0;
        _this.defaultValues.state = NONE;
        return _this;
    }
    SubTileManastar.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        let mana = 0;
        for (let i in Direction.Plane.HORIZONTAL) {
            let pos = this.getPos().offset(Direction.Plane.HORIZONTAL[i]);
            let tile = this.region.getTileEntity(pos);
            if (__instanceOf(tile, IManaPool)) {
                mana += tile.getMana();
            }
        }
        let newState = mana > this.data.lastMana ? INCREASING : mana < this.data.lastMana ? DECREASING : NONE;
        if (newState != this.data.state) {
            this.data.state = newState;
            this.networkData.putInt("state", this.data.state);
            this.networkData.sendChanges();
        }
        if (pingTick(60)) {
            this.data.lastMana = mana;
        }
    };
    SubTileManastar.prototype.clientTickFlower = function () {
        let state = this.networkData.getInt("state", NONE);
        if (state != NONE && Math.random() > 0.6) {
            let r = state == INCREASING ? 0.05 : 1;
            let b = state == INCREASING ? 1 : 0.05;
            let data = new WispParticleData([0, 0.142857143], r, 0.05, b, null, 1);
            let vec = new Vec3d(this.getPos()).add(this.getOffset().addVector(0.5, 0.5, 0.5));
            ParticleManager.addParticle(new WispParticleType(data), vec.x + Math.random() * 0.2 - 0.1, vec.y + 0.75 + Math.random() * 0.2 - 0.1, vec.z + Math.random() * 0.2 - 0.1, 0, Math.random() / 50, 0);
        }
    };
    __decorate([BlockEngine.Decorators.ClientSide], SubTileManastar.prototype, "clientTickFlower", null);
    return SubTileManastar;
}(TileEntitySpecialFlower));

