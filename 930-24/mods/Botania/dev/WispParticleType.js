let WispParticleType = (function (_super) {
    __extends(WispParticleType, _super);
    function WispParticleType(data) {
        _super.call(this, {texture: "wisp", render: 2, size: data.size, lifetime: data.m, color: [data.r, data.g, data.b, data.a || 1], animators: merge({size: {fadeIn: 0.5, fadeOut: 0.5, start: 0, end: 0}}, data.animators)});
        return this;
    }
    WispParticleType.getFromData = function (size, data, m, depthTest, noClip) {
        let particleData = WispParticleData.getFromData(size, data, m, depthTest, noClip);
        return new WispParticleType(particleData);
    };
    return WispParticleType;
}(ParticleType));

