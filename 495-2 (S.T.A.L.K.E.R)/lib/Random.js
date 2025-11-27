LIBRARY({name: "Random", version: 1, api: "CoreEngine"});
var _Random = java.util.Random;
var Random = function (seed) {
    let rnd = new _Random(seed);
    function getValid(a, min, max) {
        if (min !== undefined) {
            if (max === undefined) {
                max = min;
                min = 0;
            }
            if (min > max) {
                max += min;
                min = max - min;
                max -= min;
            }
            if (a > max) {
                a = max;
            }
            if (min > a) {
                a = min;
            }
        }
        return a;
    }
    this.setSeed = function (seed) {
        rnd.setSeed(seed);
    };
    this.nextFloat = function () {
        let a = rnd.nextFloat();
        return getValid(a, min, max);
    };
    this.nextInt = function (min, max) {
        let a = rnd.nextInt();
        return getValid(a, min, max);
    };
    this.nextBoolean = function () {
        return rnd.nextBoolean();
    };
    this.getJavaObject = function () {
        return rnd;
    };
};
EXPORT("Random", Random);

