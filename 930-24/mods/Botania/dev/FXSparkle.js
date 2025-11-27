let FXSparkle = (function (_super) {
    __extends(FXSparkle, _super);
    function FXSparkle(data, x, y, z, vx, vy, vz, ax, ay, az) {
        vx = vx || 0;
        vy = vy || 0;
        vz = vz || 0;
        ax = ax || 0;
        ay = ay || 0;
        az = az || 0;
        _super.call(this, x, y, z);
        this.red = data.r;
        this.green = data.g;
        this.blue = data.b;
        this.alpha = data.a = data.a || 0.5;
        this.age = 0;
        this.maxAge = 3 * data.m[1];
        this.corrupt = data.corrupt;
        this.fake = data.fake;
        this.canCollide = !data.fake && !data.corrupt;
        this.particleGravity = 0;
        this.onGround = y >= 64;
        this.motionX = this.motionY = this.motionZ = 0;
        this.particle = new SparkleParticleType(data);
        this.emit(this.particle.getId(), 0, x, y, z, vx, vy, vz, ax, ay, az);
        return this;
    }
    FXSparkle.prototype.tick = function () {
        if (this.isRemoved) {
            return;
        }
        this.motionY -= 0.04 * this.particleGravity;
        if (this.canCollide) {
            this.wiggleAround(this.motionX, this.motionY, this.motionZ);
        }
        this.setVelocity(this.motionX, this.motionY, this.motionZ);
        this.motionX *= 0.9080000019073486;
        this.motionY *= 0.9080000019073486;
        this.motionZ *= 0.9080000019073486;
        if (this.onGround) {
            this.motionX *= 0.699999988079071;
            this.motionZ *= 0.699999988079071;
        }
        this.onGround = this.motionY >= 64;
        if (this.age++ >= this.maxAge) {
            this.remove();
        }
    };
    FXSparkle.prototype.setGravity = function (gravity) {
        this.particleGravity = gravity;
    };
    FXSparkle.prototype.wiggleAround = function (x, y, z) {
        let direction = Direction.UP;
        let f = randomFloat() * 0.05 + 0.025;
        let f1 = direction.getAxisDirection().getOffset();
        let secondary = (randomFloat() - randomFloat()) * 0.1;
        let secondary2 = (randomFloat() - randomFloat()) * 0.1;
        this.motionX = secondary / 2;
        this.motionY = f1 * f / 2;
        this.motionZ = secondary2 / 2;
    };
    return FXSparkle;
}(ParticleEmitter));

