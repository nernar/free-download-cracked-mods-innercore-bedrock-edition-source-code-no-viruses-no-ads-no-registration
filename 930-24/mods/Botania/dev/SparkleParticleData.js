let SparkleParticleData = (function () {
    const SPARKLE_SIZE_MULTIPLIER = 0.9;
    const SPARKLE_LIFETIME_MULTIPLIER = 2;
    function SparkleParticleData(size, r, g, b, a, m, noClip, fake, corrupt) {
        this.size = (typeof size == "number" ? [size, size] : size).map(function (v) {
            return Number((v * SPARKLE_SIZE_MULTIPLIER).toFixed(3));
        });
        this.r = Number(Math.pow(r, 0.45).toFixed(3));
        this.g = Number(Math.pow(g, 0.45).toFixed(3));
        this.b = Number(Math.pow(b, 0.45).toFixed(3));
        this.a = a ? Number(a.toFixed(3)) : 0.75;
        this.m = (typeof m == "number" ? [m, m] : m).map(function (v) {
            return Number((v * SPARKLE_LIFETIME_MULTIPLIER).toFixed(3));
        });
        this.noClip = noClip || false;
        this.fake = fake || false;
        this.corrupt = corrupt || false;
        return this;
    }
    SparkleParticleData.prototype.setAnimators = function (animators) {
        this.animators = animators;
    };
    SparkleParticleData.getFromData = function (size, data, m, noClip, fake, corrupt) {
        let color = DyeColor.byId(data).getColorComponentValues();
        return new SparkleParticleData(size, color[0], color[1], color[2], 0.5, m, noClip, fake, corrupt);
    };
    SparkleParticleData.noClip = function (size, r, g, b, a, m) {
        return new SparkleParticleData(size, r, g, b, a, m, true, false, false);
    };
    SparkleParticleData.fake = function (size, r, g, b, a, m) {
        return new SparkleParticleData(size, r, g, b, a, m, false, true, false);
    };
    SparkleParticleData.corrupt = function (size, r, g, b, a, m) {
        return new SparkleParticleData(size, r, g, b, a, m, false, false, true);
    };
    SparkleParticleData.sparkle = function (size, r, g, b, a, m) {
        return new SparkleParticleData(size, r, g, b, a, m, false, false, false);
    };
    return SparkleParticleData;
}());

