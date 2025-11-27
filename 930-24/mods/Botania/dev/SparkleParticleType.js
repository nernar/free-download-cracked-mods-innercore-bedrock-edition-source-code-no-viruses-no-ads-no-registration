let SparkleParticleType = (function (_super) {
    __extends(SparkleParticleType, _super);
    function SparkleParticleType(data) {
        _super.call(this, {texture: "pure", render: 2, size: data.size, lifetime: data.m, color: [data.r, data.g, data.b, data.a || 1], animators: merge({icon: {start: 0, end: 1, period: 12, fadeIn: 1}}, data.animators)});
        return this;
    }
    SparkleParticleType.getFromData = function (size, data, m, noClip, fake, corrupt) {
        let particleData = SparkleParticleData.getFromData(size, data, m, noClip, fake, corrupt);
        return new SparkleParticleType(particleData);
    };
    return SparkleParticleType;
}(ParticleType));

