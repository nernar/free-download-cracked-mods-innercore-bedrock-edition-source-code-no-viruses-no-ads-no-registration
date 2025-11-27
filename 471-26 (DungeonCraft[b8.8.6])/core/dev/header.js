IMPORT("DungeonCore");
IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("ParticlesCore");
const Random = new java.util.Random();
const Setting = {"enabled": true, "debug": {"command": true}, "game": {"mob_spawn_offset": 35, "mob_zone_spawn": 40}};
__config__.checkAndRestore(Setting);
const setTimeout = function (func, ticks) {
    var upd = {ticks: 0, update: function () {
        this.ticks++;
        if (this.ticks >= ticks) {
            func();
            this.remove = true;
        }
    }};
    Updatable.addUpdatable(upd);
};
var Optimization = WRAP_JAVA("com.reider.dungeoncraft.Optimization");
Optimization = new Optimization();
var D = Debug;
const PartType = {mana: Particles.registerParticleType({texture: "mana", render: 2, size: [2, 2], lifetime: [50, 50], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), forest: Particles.registerParticleType({texture: "EnchantedForest_particle", render: 2, size: [2, 2], lifetime: [50, 50], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), magic: Particles.registerParticleType({texture: "magic_particle", render: 2, size: [2, 2], lifetime: [50, 50], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), magic2: Particles.registerParticleType({texture: "magic_particle", render: 2, size: [2, 5], lifetime: [25, 25], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), fire: Particles.registerParticleType({texture: "fire", render: 3, size: [3, 3], lifetime: [5, 5], isUsingBlockLight: true, animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}}), rai: Particles.registerParticleType({texture: "rai_particle", render: 2, size: [3, 3], lifetime: [40, 40], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}})};
let DA = false;

