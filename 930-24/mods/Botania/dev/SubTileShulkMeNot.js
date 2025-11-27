let SubTileShulkMeNot = (function (_super) {
    __extends(SubTileShulkMeNot, _super);
    const RADIUS = 8;
    function SubTileShulkMeNot() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileShulkMeNot.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        let generate = this.getMaxMana();
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RADIUS, RADIUS, RADIUS);
        this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
            if (this.getMaxMana() - this.getMana() < generate) {
                return false;
            }
            let shulkerPos = entity.getPosition();
            let target = entity.getTarget();
            let shulkerDistance = new Vec3d(this.getPos()).addVector(0.5, 0.5, 0.5).distanceSq(shulkerPos);
            let targetPos = target.getPosition();
            let targetDistance = new Vec3d(this.getPos()).addVector(0.5, 0.5, 0.5).distanceSq(targetPos);
            if (shulkerDistance < RADIUS * RADIUS && targetDistance < RADIUS * RADIUS) {
                entity.remove();
                target.remove();
                this.sendPacket("addParticle", {entity: entity.getUid()});
                this.sendPacket("addParticle", {entity: target.getUid()});
                this.addMana(generate);
            }
        }, this);
    };
    SubTileShulkMeNot.prototype.getColor = function () {
        return 8476056;
    };
    SubTileShulkMeNot.prototype.getMaxMana = function () {
        return 75000;
    };
    SubTileShulkMeNot.prototype.addParticle = function (packet) {
        let entityPos = Entity.getPosition(packet.entity);
        for (let i = 0; i < 10; i++) {
            ParticleManager.addParticle(13, entityPos.x, entityPos.y, entityPos.z, 0.05, 0.05, 0.05);
        }
        ParticleManager.addParticle(20, this.x + 0.5, this.y + 0.5, this.z + 0.5, 0, 0, 0);
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], SubTileShulkMeNot.prototype, "addParticle", null);
    return SubTileShulkMeNot;
}(TileEntityGeneratingFlower));

