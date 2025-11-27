/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: Dimension.js

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var Beneath = new Dimensions.CustomDimension("Beneath", 1756);
Beneath.setSkyColor(32/255, 175/255, 174/255);
Beneath.setFogColor(175/255, 238/255, 238/255);

Beneath.setGenerator(Dimensions.newGenerator({
   biome: 3,  
    layers: [   
        {
            minY: 0, maxY: 128, 
            yConversion: [
                [0.47, 0.1],
                [0.9, -0.12],
                [0.2, 0.4],
                [-1, 0.9]
                ], 
            material: {
                base: 1,
                surface: {
                    id: 1,
                    data: 0,
                    width: 3
                },
                cover: 1
            }, 
            noise: {
                octaves: {count: 2, scale: 34}
            }
        },
        {
            minY: 0,
            maxY: 2,
            yConversion: [
                [0, 0], 
            ],
            material: {
                base: 7
            }
        },
        {
            minY: 127,
            maxY: 128,
            yConversion: [
                [0, 0], 
            ],
            material: {
                base: 7
            }
        }
    ]
}));
    
const setTimeout = function(func, ticks){
  var upd = {
    ticks: 0,
      update: function(){
        this.ticks++
          if(this.ticks >= ticks){
            func();
            this.remove = true
      }
    }
  };
  Updatable.addUpdatable(upd);
}
 
let ChunkLoadQueue = (function (ChunkLoadQueue){
    const CHUNKS = ChunkLoadQueue.CHUNKS = {};
 
    function run(_dimension, chunkX, chunkZ, func){
        let dimension;
        let region;
        if(_dimension instanceof com.zhekasmirnov.apparatus.mcpe.NativeBlockSource) {
            region = _dimension;
            dimension = region.getDimension();
        } else {
            dimension = _dimension;
            region = BlockSource.getDefaultForDimension(dimension);
        }
        if(region.isChunkLoaded(chunkX, chunkZ))
            func();
        else {
            if(!CHUNKS[dimension])
                CHUNKS[dimension] = {};
           if(!CHUNKS[dimension][chunkX+':'+chunkZ])
                CHUNKS[dimension][chunkX+':'+chunkZ] = [];
           CHUNKS[dimension][chunkX+':'+chunkZ].push(func);
        }
    };
    ChunkLoadQueue.run = run;
    
    function runAt(region, x, z, func){
        run(region, Math.floor(x / 16), Math.floor(z / 16), func);
    };
    ChunkLoadQueue.runAt = runAt;
    
    return ChunkLoadQueue;
}({}));
 
Callback.addCallback("ServerPlayerTick", function (){
    if(World.getThreadTime() % 40 !== 0) return;
    for(let dimension in ChunkLoadQueue.CHUNKS)
    for(let strPos in ChunkLoadQueue.CHUNKS[dimension]){
        let arr = strPos.split(':');
        let region = BlockSource.getDefaultForDimension(Number(dimension));
        let chunkX = Number(arr[0]);
        let chunkZ = Number(arr[1]);
        if(region.isChunkLoaded(chunkX, chunkZ)){
            let funcs = ChunkLoadQueue.CHUNKS[dimension][strPos];
            for(let i in funcs){
                funcs[i]();
            }
            ChunkLoadQueue.CHUNKS[dimension][strPos] = [];
        }
    }
});


Callback.addCallback("CustomDimensionTransfer", function (entity, from, to) {  
 if(to !== Beneath.id) {
    let region = BlockSource.getCurrentWorldGenRegion();
    let pos = Entity.getPosition(entity);
    let surface = GenerationUtils.findSurface(pos.x, 128, pos.z);
    ChunkLoadQueue.runAt(region, pos.x, pos.z, function () {
       Entity.setPosition(entity, surface.x, surface.y + 4, surface.z);   
        region.setBlock(surface.x, surface.y + 1, surface.z, BlockID.teleporterBeneath_home, 0);  
         for(var k = 0; k < 3; k ++) {
          region.destroyBlock(surface.x + k, surface.y + k, coords.z + k,false);  
           region.setBlock(surface.x + k, surface.y, surface.z + k, 1, 0);
            region.setBlock(surface.x + 1 + (k - 1), surface.y + 1, surface.z + 1 + (k - 1), 50, 0);       
        }
    }); 
    } 
 if(from == Beneath.id && to == 0) {
  if(Entity.getRider(entity) != 0) {
    let region = BlockSource.getCurrentWorldGenRegion();
    let pos = Entity.getPosition(entity);  
    let rider = Entity.getRider(entity);
    let surface = GenerationUtils.findSurface(pos.x, 130, pos.z); 
    ChunkLoadQueue.runAt(region, pos.x, pos.z, function () {
        Entity.setPosition(entity, surface.x, surface.y, surface.z);
         Entity.rideAnimal(entity, rider);
    });
        } else {  
    let region = BlockSource.getCurrentWorldGenRegion();
    let pos = Entity.getPosition(entity);   
    let surface = GenerationUtils.findSurface(pos.x, 128, pos.z); 
    ChunkLoadQueue.runAt(region, pos.x, pos.z, function () {
        Entity.setPosition(entity, surface.x, 310, surface.z);  
    });       
        }
    }
});

IDRegistry.genBlockID("teleporterBeneath");
Block.createBlock("teleporterBeneath", [
    {name: "Beneath Teleporter", texture: [["teleporter", 0]],inCreative: true}], {solid: true, explosionres: 999, destroytime: 1, renderlayer: 3
});

IDRegistry.genBlockID("teleporterBeneath_home");
Block.createBlock("teleporterBeneath_home", [
    {name: "Beneath Teleporter", texture: [["teleporter", 0]],inCreative: true}], {solid: true, explosionres: 999, destroytime: 1, renderlayer: 3
});

Recipes.addShaped({id: BlockID.teleporterBeneath, count: 1, data: 0}, [
    "xxx",
    "xzx",
    "xxx"
], ['x', 406, 0, 'z', 16, 0]);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
 if (Entity.getCarriedItem(player).id == 0 && block.id == BlockID.teleporterBeneath) {
  Dimensions.transfer(player, Beneath.id);        
 }
 if (Entity.getCarriedItem(player).id == 0 && block.id == BlockID.teleporterBeneath_home) {
  Dimensions.transfer(player, 0);
 }   
});




// file: ores.js

const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Beneath.id) return;
UniqueGen.generateOreInDimension(16, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(5, 10),
 minY: 3,
 maxY: 126,
 size: randomInt(5, 17),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(15, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(10, 21),
 minY: 3,
 maxY: 126,
 size: randomInt(5, 13),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(21, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(6, 18),
 minY: 3,
 maxY: 126,
 size: randomInt(4, 9),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(14, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 19),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 7),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(73, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 23),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 7),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(56, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 9),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 14),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(129, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 9),
 minY: 3,
 maxY: 126,
 size: randomInt(1, 7),
 mode: true,
 check: [1]
});

//misc
UniqueGen.generateOreInDimension(13, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 11),
 minY: 3,
 maxY: 126,
 size: randomInt(2, 21),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 1, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(4, 19),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 5, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(0, 19),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 3, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(0, 19),
 mode: true,
 check: [1]
});
});




