let SubTileBellethorn = (function (_super) {
    __extends(SubTileBellethorn, _super);
    function SubTileBellethorn() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileBellethorn.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        let manaToUse = this.getManaCost();
        if (pingTick(5)) {
            let range = this.getRange();
            let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(range, range, range);
            let entities = this.region.getEntitiesWithinAABB(aabb, Actor, this.getSelector);
            for (let i in entities) {
                let entity = entities[i];
                if (this.getMana() < manaToUse) {
                    break;
                }
                let damage = 4;
                if (entity.getType() == EEntityType.WITCH) {
                    damage = 20;
                }
                entity.damage(damage);
                this.addMana(-manaToUse);
            }
        }
    };
    SubTileBellethorn.prototype.getManaCost = function () {
        return 24;
    };
    SubTileBellethorn.prototype.getSelector = function (entity) {
        return ActorHelper.hasCategory(entity.getUid(), 2) && entity.getType() != EEntityType.PLAYER;
    };
    SubTileBellethorn.prototype.getRange = function () {
        return 6;
    };
    SubTileBellethorn.prototype.getColor = function () {
        return 12203041;
    };
    SubTileBellethorn.prototype.getMaxMana = function () {
        return 1000;
    };
    return SubTileBellethorn;
}(TileEntityFunctionalFlower));
let SubTileBellethornChibi = (function (_super) {
    __extends(SubTileBellethornChibi, _super);
    function SubTileBellethornChibi() {
        let _this = _super.call(this) || this;
        return _this;
    }
    SubTileBellethornChibi.prototype.getRange = function () {
        return 1;
    };
    return SubTileBellethornChibi;
}(SubTileBellethorn));

