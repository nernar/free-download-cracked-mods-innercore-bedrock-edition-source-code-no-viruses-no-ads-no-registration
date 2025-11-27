//这里什么也没有
var vanilla = Dimensions.newGenerator({
    layers: [{
        minY: 0,
        maxY: 128,
        yConversion: [
            [0, -1],
            [1, -1]
        ],
        noise: {
            octaves: {
                count: 4,
                scale: 20
            }
        },
        material: {base: 1},
        materials: [{
            base: 3,
            diffuse: 0.1,
            noise: {
                octaves: [{
                    scale: 0.1,
                    weight: 0.6
                }, {
                    scale: 0.2,
                    weight: 0.3
                }]
            }
        }]
    }]
});
vanilla.setBuildVanillaSurfaces(false);
vanilla.setGenerateVanillaStructures(false);

var mono = new Dimensions.MonoBiomeTerrainGenerator();
mono.addTerrainLayer(256, 1);
vanilla.setTerrainGenerator(mono);
Dimensions.overrideGeneratorForVanillaDimension(0, vanilla);

var Level = ModAPI.requireGlobal("Level");
var entered = {};
Saver.addSavesScope("isfirstEnter",
function read(scope) {
    entered = scope;
},
function save() {
    return entered;
});

Callback.addCallback("ServerPlayerLoaded",
function(playerUid) {
    var dir = Level.getWorldDir();
    var world = Level.getWorldName();
    if (!entered[dir + world]) {
        entered[dir + world] = true;
        Updatable.addUpdatable({
            timer: 0,
            update: function() {
                this.timer++;
                var pos = Entity.getPosition(playerUid);
                if (pos.y != 130) {
                    var blockSource = BlockSource.getDefaultForDimension(0);
                    var pos = Entity.getPosition(playerUid);
                    Updatable.addUpdatable({
                        age: 0,
                        update: function() {
                            Entity.setPosition(playerUid, pos.x, 130, pos.z);
                            (new PlayerActor(playerUid)).setRespawnCoords(pos.x, 130, pos.z - 1);
                            this.remove = this.age++ > 5;
                        }
                    });
                    for (let coords_X = pos.x - 2; coords_X <= pos.x + 2; coords_X++) {
                        for (let coords_Z = pos.z - 2; coords_Z <= pos.z + 2; coords_Z++) {
                            blockSource.setBlock(coords_X, 127, coords_Z, VanillaTileID.grass, 0);
                        };
                    };
                    blockSource.setBlock(pos.x, 128, pos.z, VanillaTileID.sapling, 0);
                    var pos = Entity.getPosition(playerUid);
                    this.remove = ((pos.y == 130) || this.timer > 20) ? true : false;
                }
            }
        });
    };
});