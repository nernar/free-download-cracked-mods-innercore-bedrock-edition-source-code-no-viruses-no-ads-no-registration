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