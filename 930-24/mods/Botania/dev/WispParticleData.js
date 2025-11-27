let WispParticleData = (function () {
    const WISP_SIZE_MULTIPLIER = 7;
    const WISP_LIFETIME_MULTIPLIER = 25;
    function WispParticleData(size, r, g, b, a, m, depthTest, noClip) {
        this.size = (typeof size == "number" ? [size, size] : size).map(function (v) {
            return Number((v * WISP_SIZE_MULTIPLIER).toFixed(3));
        });
        this.r = Number(Math.pow(r, 0.45).toFixed(5));
        this.g = Number(Math.pow(g, 0.45).toFixed(5));
        this.b = Number(Math.pow(b, 0.45).toFixed(5));
        this.a = a ? Number(a.toFixed(3)) : 0.5;
        this.m = (typeof m == "number" ? [m || 1, m || 1] : m || [1, 1]).map(function (v) {
            return Number((v * WISP_LIFETIME_MULTIPLIER).toFixed(3));
        });
        this.depthTest = depthTest;
        this.noClip = noClip;
        return this;
    }
    WispParticleData.prototype.setAnimators = function (animators) {
        this.animators = animators;
        return this;
    };
    WispParticleData.prototype.withNoClip = function (v) {
        if (this.noClip == v) {
            return this;
        } else {
            return new WispParticleData(this.size, this.r, this.g, this.b, this.a, this.m, this.depthTest, v);
        }
    };
    WispParticleData.getFromData = function (size, data, m, depthTest, noClip) {
        let color = DyeColor.byId(data).getColorComponentValues();
        return new WispParticleData(size, color[0], color[1], color[2], 0.5, m, depthTest, noClip);
    };
    return WispParticleData;
}());

