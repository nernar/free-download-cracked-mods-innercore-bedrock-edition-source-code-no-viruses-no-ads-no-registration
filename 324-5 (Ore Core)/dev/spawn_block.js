function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.basalt_ore, 0, 12, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.marmor_ore, 0, 12, true, seed)
}
});

function randomPos(X, Z, min, max, random){
return {
x: X * 16 + random.nextInt(16),
z: Z * 16 + random.nextInt(16),
y: random.nextInt(max - min + 1) + min
};
}
Callback.addCallback("GenerateChunk", function(X, Z, random, id, chunkSeed, seed){
if(random.nextInt(100) < 80){
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==1)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.loam_block, 0, 12, true, seed)
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
let pos = randomPos(X, Z, 10, 60, random);
if(World.getBlockID(pos.x, pos.y, pos.z) ==87)
GenerationUtils.generateOre(pos.x, pos.y, pos.z, BlockID.oil_slate_ore, 0, 12, true, seed)
}
});