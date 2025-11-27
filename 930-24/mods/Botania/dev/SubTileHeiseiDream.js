let SubTileHeiseiDream = (function (_super) {
    __extends(SubTileHeiseiDream, _super);
    const RANGE = 5;
    const COST = 100;
    function SubTileHeiseiDream() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileHeiseiDream.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
        let entities = this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
            return ActorHelper.hasCategory(entity.getUid(), 4);
        });
        if (entities.length > 1 && this.getMana() >= COST) {
            for (let i in entities) {
                let entity = entities[i];
                if (this.brainwashEntity(entity, entities)) {
                    this.addMana(-COST);
                    break;
                }
            }
        }
    };
    SubTileHeiseiDream.prototype.brainwashEntity = function (entity, mobs) {
        let target = entity.getTarget();
        let did = false;
        if (!target || !ActorHelper.hasCategory(target, 4)) {
            let newTarget;
            do {
                newTarget = mobs[randomInt(mobs.length - 1)];
            } while (newTarget == entity);
            entity.setTarget(newTarget);
            did = true;
        }
        return did;
    };
    SubTileHeiseiDream.prototype.getMaxMana = function () {
        return 1000;
    };
    SubTileHeiseiDream.prototype.getColor = function () {
        return 16720285;
    };
    return SubTileHeiseiDream;
}(TileEntityFunctionalFlower));

