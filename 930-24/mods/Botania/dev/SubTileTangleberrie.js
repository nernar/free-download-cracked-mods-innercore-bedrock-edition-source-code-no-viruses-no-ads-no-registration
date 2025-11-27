let SubTileTangleberrie = (function (_super) {
    __extends(SubTileTangleberrie, _super);
    function SubTileTangleberrie() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileTangleberrie.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.getMana() > 0) {
            let maxDistance = this.getMaxDistance();
            let range = this.getRange();
            let part = new SparkleParticleType(new SparkleParticleData([1, 1], 0.5, 0.5, 0.5, null, 3));
            let aabb = new AxisAlignedBB(-range, -range, -range, range + 1, range + 1, range + 1).offset(this.getPos());
            this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
                if (entity.getType() != EEntityType.PLAYER) {
                    let pos = entity.getPosition();
                    let distance = MathHelper.pointDistanceSpace(this.x + 0.5, this.y + 0.5, this.z + 0.5, pos.x, pos.y, pos.z);
                    if (distance > maxDistance && distance < range) {
                        this.setEntityMotionFromVector(entity, Vec3d.copyCentered(this.getPos()), this.getMotionVelocity());
                        if (randomInt(3) == 0) {
                            this.region.addParticle(part, pos.x + Math.random() - 0.5, pos.y + (Math.random() - 0.5) * 2, pos.z + Math.random() - 0.5, 0, 0, 0);
                        }
                        if (this.data.ticksExisted % 4 == 0) {
                            this.addMana(-1);
                        }
                    }
                }
            }, this);
        }
    };
    SubTileTangleberrie.prototype.getColor = function () {
        return 4946300;
    };
    SubTileTangleberrie.prototype.getMaxMana = function () {
        return 20;
    };
    SubTileTangleberrie.prototype.setEntityMotionFromVector = function (entity, vector, modifier) {
        let entityVector = new Vec3d(entity.getPosition());
        let finalVector = vector.subtract(entityVector);
        if (finalVector.mag() > 1) {
            finalVector = finalVector.normalize();
        }
        finalVector = finalVector.scale(modifier);
        entity.addVelocity(finalVector);
    };
    SubTileTangleberrie.prototype.getMaxDistance = function () {
        return 6;
    };
    SubTileTangleberrie.prototype.getRange = function () {
        return 7;
    };
    SubTileTangleberrie.prototype.getMotionVelocity = function (entity) {
        return 0.08;
    };
    return SubTileTangleberrie;
}(TileEntityFunctionalFlower));

