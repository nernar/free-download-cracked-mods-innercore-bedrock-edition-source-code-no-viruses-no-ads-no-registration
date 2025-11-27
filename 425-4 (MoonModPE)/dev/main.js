IMPORT("dimensions");
var DEV_MODE = false;
var OXYGEN_MODE_ENABLED = __config__.getBool("oxygen_mechanic_enabled");
var GRAVITY_MODE_ENABLED = __config__.getBool("gravity_mechanic_enabled");
var METEORITE_MAX_CHANCE = __config__.access("meteorite_spawn_chance");
var GLOWSTONE_ID = 89;
var IRON_ID = 42;
var OBSIDIAN_ID = 49;
var GLASS_ID = 20;
function oxygen_overname(item, name) {
    return name + "\n\xa76" + "Radius 5 blocks";
}
function creative_overname(item, name) {
    return name + "\n\xa7c" + "Creative only";
}
function custom_random(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
    if (floor > max) {
        floor = floor - min;
        return floor;
    }
    return floor;
}
GenerationUtils.findSurface = function (x, y, z) {
    while (y > 0 && World.getBlockID(x, y, z) == 0) {
        y--;
    }
    return {x: x, y: y, z: z};
};
function findOxygenGenerator(x, y, z, maxRan) {
    let isGenerator = false;
    for (var a = 0; a <= maxRan; a++) {
        for (var b = 0; b <= maxRan; b++) {
            for (var c = 0; c <= maxRan; c++) {
                if (World.getBlockID(x + a, y + b, z + c) == BlockID.oxygenGenerator) {
                    isGenerator = true;
                    break;
                }
            }
        }
    }
    if (isGenerator == true && DEV_MODE == true) {
        Debug.warning("O2 +");
    } else {
        if (isGenerator == false && DEV_MODE == true) {
            Debug.error("O2 -");
        }
    }
    return isGenerator;
}
function findShuttle(x, y, z) {
    let facing_E = false;
    let facing_W = false;
    let facing_N = false;
    let facing_S = false;
    let isFind = false;
    if (World.getBlockID(x - 2, y - 2, z - 1) == GLOWSTONE_ID && World.getBlockID(x - 2, y - 2, z) == GLOWSTONE_ID && World.getBlockID(x - 1, y - 2, z - 1) == IRON_ID && World.getBlockID(x - 1, y - 2, z) == IRON_ID && World.getBlockID(x, y - 2, z - 1) == IRON_ID && World.getBlockID(x, y - 2, z) == IRON_ID && World.getBlockID(x + 1, y - 2, z - 1) == IRON_ID && World.getBlockID(x + 1, y - 2, z) == IRON_ID && World.getBlockID(x + 2, y - 2, z - 1) == GLOWSTONE_ID && World.getBlockID(x + 2, y - 2, z) == GLOWSTONE_ID && World.getBlockID(x - 2, y - 1, z - 1) == IRON_ID && World.getBlockID(x - 2, y - 1, z) == IRON_ID && World.getBlockID(x - 1, y - 1, z - 1) == IRON_ID && World.getBlockID(x - 1, y - 1, z) == IRON_ID && World.getBlockID(x, y - 1, z - 1) == OBSIDIAN_ID && World.getBlockID(x, y - 1, z) == IRON_ID && World.getBlockID(x + 1, y - 1, z - 1) == IRON_ID && World.getBlockID(x + 1, y - 1, z) == IRON_ID && World.getBlockID(x + 2, y - 1, z - 1) == IRON_ID && World.getBlockID(x + 2, y - 1, z) == IRON_ID && World.getBlockID(x - 1, y, z - 1) == IRON_ID && World.getBlockID(x - 1, y, z) == IRON_ID && World.getBlockID(x + 1, y, z - 1) == IRON_ID && World.getBlockID(x + 1, y, z) == IRON_ID && World.getBlockID(x, y, z - 1) == OBSIDIAN_ID && World.getBlockID(x - 1, y + 1, z - 1) == IRON_ID && World.getBlockID(x + 1, y + 1, z - 1) == IRON_ID && World.getBlockID(x, y + 1, z - 1) == OBSIDIAN_ID && World.getBlockID(x, y + 1, z) == GLASS_ID && World.getBlockID(x - 1, y + 2, z - 1) == IRON_ID && World.getBlockID(x + 1, y + 2, z - 1) == IRON_ID && World.getBlockID(x, y + 2, z - 1) == OBSIDIAN_ID && World.getBlockID(x, y + 2, z) == GLASS_ID && World.getBlockID(x, y + 3, z - 1) == IRON_ID) {
        facing_E = true;
    }
    if (World.getBlockID(x - 2, y - 2, z + 1) == GLOWSTONE_ID && World.getBlockID(x - 2, y - 2, z) == GLOWSTONE_ID && World.getBlockID(x - 1, y - 2, z + 1) == IRON_ID && World.getBlockID(x - 1, y - 2, z) == IRON_ID && World.getBlockID(x, y - 2, z + 1) == IRON_ID && World.getBlockID(x, y - 2, z) == IRON_ID && World.getBlockID(x + 1, y - 2, z + 1) == IRON_ID && World.getBlockID(x + 1, y - 2, z) == IRON_ID && World.getBlockID(x + 2, y - 2, z + 1) == GLOWSTONE_ID && World.getBlockID(x + 2, y - 2, z) == GLOWSTONE_ID && World.getBlockID(x - 2, y - 1, z + 1) == IRON_ID && World.getBlockID(x - 2, y - 1, z) == IRON_ID && World.getBlockID(x - 1, y - 1, z + 1) == IRON_ID && World.getBlockID(x - 1, y - 1, z) == IRON_ID && World.getBlockID(x, y - 1, z + 1) == OBSIDIAN_ID && World.getBlockID(x, y - 1, z) == IRON_ID && World.getBlockID(x + 1, y - 1, z + 1) == IRON_ID && World.getBlockID(x + 1, y - 1, z) == IRON_ID && World.getBlockID(x + 2, y - 1, z + 1) == IRON_ID && World.getBlockID(x + 2, y - 1, z) == IRON_ID && World.getBlockID(x - 1, y, z + 1) == IRON_ID && World.getBlockID(x - 1, y, z) == IRON_ID && World.getBlockID(x + 1, y, z + 1) == IRON_ID && World.getBlockID(x + 1, y, z) == IRON_ID && World.getBlockID(x, y, z + 1) == OBSIDIAN_ID && World.getBlockID(x - 1, y + 1, z + 1) == IRON_ID && World.getBlockID(x + 1, y + 1, z + 1) == IRON_ID && World.getBlockID(x, y + 1, z + 1) == OBSIDIAN_ID && World.getBlockID(x, y + 1, z) == GLASS_ID && World.getBlockID(x - 1, y + 2, z + 1) == IRON_ID && World.getBlockID(x + 1, y + 2, z + 1) == IRON_ID && World.getBlockID(x, y + 2, z + 1) == OBSIDIAN_ID && World.getBlockID(x, y + 2, z) == GLASS_ID && World.getBlockID(x, y + 3, z + 1) == IRON_ID) {
        facing_W = true;
    }
    if (World.getBlockID(x - 1, y - 2, z - 2) == GLOWSTONE_ID && World.getBlockID(x, y - 2, z - 2) == GLOWSTONE_ID && World.getBlockID(x - 1, y - 2, z - 1) == IRON_ID && World.getBlockID(x, y - 2, z - 1) == IRON_ID && World.getBlockID(x - 1, y - 2, z) == IRON_ID && World.getBlockID(x, y - 2, z) == IRON_ID && World.getBlockID(x - 1, y - 2, z + 1) == IRON_ID && World.getBlockID(x, y - 2, z + 1) == IRON_ID && World.getBlockID(x - 1, y - 2, z + 2) == GLOWSTONE_ID && World.getBlockID(x, y - 2, z + 2) == GLOWSTONE_ID && World.getBlockID(x - 1, y - 1, z - 2) == IRON_ID && World.getBlockID(x, y - 1, z - 2) == IRON_ID && World.getBlockID(x - 1, y - 1, z - 1) == IRON_ID && World.getBlockID(x, y - 1, z - 1) == IRON_ID && World.getBlockID(x - 1, y - 1, z) == OBSIDIAN_ID && World.getBlockID(x, y - 1, z) == IRON_ID && World.getBlockID(x - 1, y - 1, z + 1) == IRON_ID && World.getBlockID(x, y - 1, z + 1) == IRON_ID && World.getBlockID(x - 1, y - 1, z + 2) == IRON_ID && World.getBlockID(x, y - 1, z + 2) == IRON_ID && World.getBlockID(x - 1, y, z - 1) == IRON_ID && World.getBlockID(x, y, z - 1) == IRON_ID && World.getBlockID(x - 1, y, z + 1) == IRON_ID && World.getBlockID(x, y, z + 1) == IRON_ID && World.getBlockID(x - 1, y, z) == OBSIDIAN_ID && World.getBlockID(x - 1, y + 1, z - 1) == IRON_ID && World.getBlockID(x - 1, y + 1, z + 1) == IRON_ID && World.getBlockID(x - 1, y + 1, z) == OBSIDIAN_ID && World.getBlockID(x, y + 1, z) == GLASS_ID && World.getBlockID(x - 1, y + 2, z - 1) == IRON_ID && World.getBlockID(x - 1, y + 2, z + 1) == IRON_ID && World.getBlockID(x - 1, y + 2, z) == OBSIDIAN_ID && World.getBlockID(x, y + 2, z) == GLASS_ID && World.getBlockID(x - 1, y + 3, z) == IRON_ID) {
        facing_N = true;
    }
    if (World.getBlockID(x + 1, y - 2, z - 2) == GLOWSTONE_ID && World.getBlockID(x, y - 2, z - 2) == GLOWSTONE_ID && World.getBlockID(x + 1, y - 2, z - 1) == IRON_ID && World.getBlockID(x, y - 2, z - 1) == IRON_ID && World.getBlockID(x + 1, y - 2, z) == IRON_ID && World.getBlockID(x, y - 2, z) == IRON_ID && World.getBlockID(x + 1, y - 2, z + 1) == IRON_ID && World.getBlockID(x, y - 2, z + 1) == IRON_ID && World.getBlockID(x + 1, y - 2, z + 2) == GLOWSTONE_ID && World.getBlockID(x, y - 2, z + 2) == GLOWSTONE_ID && World.getBlockID(x + 1, y - 1, z - 2) == IRON_ID && World.getBlockID(x, y - 1, z - 2) == IRON_ID && World.getBlockID(x + 1, y - 1, z - 1) == IRON_ID && World.getBlockID(x, y - 1, z - 1) == IRON_ID && World.getBlockID(x + 1, y - 1, z) == OBSIDIAN_ID && World.getBlockID(x, y - 1, z) == IRON_ID && World.getBlockID(x + 1, y - 1, z + 1) == IRON_ID && World.getBlockID(x, y - 1, z + 1) == IRON_ID && World.getBlockID(x + 1, y - 1, z + 2) == IRON_ID && World.getBlockID(x, y - 1, z + 2) == IRON_ID && World.getBlockID(x + 1, y, z - 1) == IRON_ID && World.getBlockID(x, y, z - 1) == IRON_ID && World.getBlockID(x + 1, y, z + 1) == IRON_ID && World.getBlockID(x, y, z + 1) == IRON_ID && World.getBlockID(x + 1, y, z) == OBSIDIAN_ID && World.getBlockID(x + 1, y + 1, z - 1) == IRON_ID && World.getBlockID(x + 1, y + 1, z + 1) == IRON_ID && World.getBlockID(x + 1, y + 1, z) == OBSIDIAN_ID && World.getBlockID(x, y + 1, z) == GLASS_ID && World.getBlockID(x + 1, y + 2, z - 1) == IRON_ID && World.getBlockID(x + 1, y + 2, z + 1) == IRON_ID && World.getBlockID(x + 1, y + 2, z) == OBSIDIAN_ID && World.getBlockID(x, y + 2, z) == GLASS_ID && World.getBlockID(x + 1, y + 3, z) == IRON_ID) {
        facing_S = true;
    }
    if (facing_E == true || facing_W == true || facing_N == true || facing_S == true) {
        isFind = true;
    }
    return isFind;
}
function findCockpit(x, y, z, maxRan) {
    let isLockedArea = false;
    for (var a = 1; a <= maxRan; a++) {
        for (var b = 1; b <= maxRan; b++) {
            for (var c = 1; c <= maxRan; c++) {
                if (World.getBlockID(x + a, y + b, z + c) == BlockID.cockpit || World.getBlockID(x + a, y + b, z + c) == BlockID.oxygenGenerator || World.getBlockID(x + a, y + b, z + c) == BlockID.ironBricks) {
                    isLockedArea = true;
                    break;
                }
            }
        }
    }
    return isLockedArea;
}

