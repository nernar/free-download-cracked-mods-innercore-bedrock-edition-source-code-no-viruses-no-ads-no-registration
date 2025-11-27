let FXWisp = (function (_super) {
    __extends(FXWisp, _super);
    function FXWisp(data, x, y, z, vx, vy, vz, ax, ay, az) {
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
        this.alpha = data.a || 0.5;
        this.age = 0;
        this.maxAge = data.m[1];
        this.canCollide = !data.fake && !data.corrupt;
        this.particleGravity = 0;
        this.motionX = this.motionY = this.motionZ = 0;
        this.depthTest = data.depthTest;
        this.particle = new WispParticleType(data);
        this.emit(this.particle.getId(), 0, x, y, z, vx, vy, vz, ax, ay, az);
        return this;
    }
    FXWisp.prototype.tick = function () {
        if (this.isRemoved) {
            return;
        }
        this.motionY -= 0.04 * this.particleGravity;
        this.setVelocity(this.motionX, this.motionY, this.motionZ);
        this.motionX *= 0.9080000019073486;
        this.motionY *= 0.9080000019073486;
        this.motionZ *= 0.9080000019073486;
        if (this.age++ >= this.maxAge) {
            this.remove();
        }
    };
    FXWisp.prototype.setGravity = function (gravity) {
        this.particleGravity = gravity;
    };
    return FXWisp;
}(ParticleEmitter));

