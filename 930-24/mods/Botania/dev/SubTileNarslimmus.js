let SubTileNarslimmus = (function (_super) {
    __extends(SubTileNarslimmus, _super);
    const TAG_WORLD_SPAWNED = "botania:world_spawned";
    const RANGE = 2;
    function SubTileNarslimmus() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        Callback.addCallback("EntityAdded", function (entity) {
            _this.onSpawn(EntityType.buildEntityFor(Entity.getType(entity), entity));
        });
        return _this;
    }
    SubTileNarslimmus.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.ticksExisted % 5 == 0) {
            let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
            let entities = this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
                return entity.getType() == EEntityType.SLIME;
            });
            for (let i in entities) {
                let entity = entities[i];
                if (entity.getCompoundTag().getByte(TAG_WORLD_SPAWNED)) {
                    let size = entity.getCompoundTag().getByte("Size");
                    let mul = Math.pow(2, size);
                    let mana = 1200 * mul;
                    let entityPos = entity.getPosition();
                    entity.remove();
                    this.addMana(mana);
                    this.sendPacket("addParticle", {mul: mul, size: size, x: entityPos.x, y: entityPos.y, z: entityPos.z});
                    break;
                }
            }
        }
    };
    SubTileNarslimmus.prototype.addParticle = function (packet) {
        for (let j = 0; j < packet.mul * 8; ++j) {
            let f = (Math.random() * 2 - 1) * Math.PI * 2;
            let f1 = Math.random();
            let f2 = Math.sin(f) * packet.size * 0.5 * f1;
            let f3 = Math.cos(f) * packet.size * 0.5 * f1;
            let f4 = (Math.random() * 2 - 1) * packet.size * 0.5 * f1;
            ParticleManager.addParticle(34, packet.x + f2, packet.y * Math.random(), packet.z + f3, 0, 0, 0);
        }
    };
    SubTileNarslimmus.prototype.onSpawn = function (entity) {
        let pos = entity.getPosition();
        if (entity.getType() == EEntityType.SLIME && ChunkHelper.isSlimeChunkAt(pos.x, pos.z)) {
            let tags = entity.getCompoundTag();
            if (tags.getByte("NaturalSpawn")) {
                tags.putByte(TAG_WORLD_SPAWNED, 1);
                entity.setCompoundTag(tags);
            }
        }
    };
    SubTileNarslimmus.prototype.getColor = function () {
        return 7455603;
    };
    SubTileNarslimmus.prototype.getMaxMana = function () {
        return 12000;
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], SubTileNarslimmus.prototype, "addParticle", null);
    return SubTileNarslimmus;
}(TileEntityGeneratingFlower));

