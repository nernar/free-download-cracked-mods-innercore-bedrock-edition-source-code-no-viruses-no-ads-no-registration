var enableCave = __config__.getBool("cave");
var isDesert = __config__.getBool("desert");
var isExtremeFlat = __config__.getBool("extreme");

var FlatWorld = WRAP_NATIVE("FlatWorld");
if (!enableCave || isExtremeFlat)
    FlatWorld.disableCave();

var overworld = {
    layers: [{
        minY: 0,
        maxY: 4,
        material: {
            base: 7
        }
    }, {
        minY: 4,
        maxY: 64,
        material: {
            base: 1,
            cover: 2,
            surface: {
                id: 3,
                width: 3
            }
        }
    }]
};

if (isDesert) {
    overworld.layers[1].maxY = 54;
    overworld.layers[1].material = {base: 1};
    overworld.layers[2] = {
        minY: 54,
        maxY: 64,
        material: {
            base: 24,
            cover: 12,
            surface: {
                id: 12,
                width: 4
            }
        }
    }
}
if (isExtremeFlat) {
    overworld.layers[0].maxY = 2;
    overworld.layers[1].minY = 2;
    overworld.layers[1].maxY = 8;
    if (isDesert) {
        overworld.layers.pop();
        overworld.layers[1].material.cover = 12;
        overworld.layers[1].material.surface = {id: 24}
    }
    overworld.layers[1].material.surface.width = 2;
}

Dimensions.overrideGeneratorForVanillaDimension(0, Dimensions.newGenerator(overworld));