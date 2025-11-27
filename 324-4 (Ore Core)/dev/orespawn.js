//spawn bone ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.bone_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_bone_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_bone_ore, 0, 3, true, seed)
}
});

//spawn coal ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 132, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_coal_ore, 0, 6, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_coal_ore, 0, 6, true, seed)
}
});

//spawn iron ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 68, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_iron_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==13)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.iron_gravel_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_iron_ore, 0, 4, true, seed)
}
});

//spawn gold ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_gold_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==13)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.gold_gravel_ore, 0, 3, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_goold_ore, 0, 4, true, seed)
}
});

//spawn diamond ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 1, 16, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_diamond_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_diamond_ore, 0, 4, true, seed)
}
});

//spawn emerald ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 33, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_emerald_ore, 0, 1, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_emerald_ore, 0, 1, true, seed)
}
});

//spawn lapis ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 34, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_lapis_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_lapis_ore, 0, 4, true, seed)
}
});

//spawn glowstone
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_glowstone_ore, 0, 8, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_glowstone_ore, 0, 8, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_glowstone_ore, 0, 8, true, seed)
}
});

//spawn quartz
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_quartz_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 15, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_quartz_ore, 0, 5, true, seed)
}
});

//spawn redstone ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_nether_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 5, 33, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.compressed_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_redstone_ore, 0, 5, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_redstone_ore, 0, 5, true, seed)
}
});

//spawn fossil ore
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateEndChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 14, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==121)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.end_fossil_ore6, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.fossil_ore6, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore1, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore2, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore3, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore4, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore5, 0, 2, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.nether_fossil_ore6, 0, 2, true, seed)
}
});

//spawn more ores
function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateNetherChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 121, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.lava_crystal_ore, 0, 4, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunkUnderground", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 64, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.mixed_ore, 0, 1, true, seed)
}
});