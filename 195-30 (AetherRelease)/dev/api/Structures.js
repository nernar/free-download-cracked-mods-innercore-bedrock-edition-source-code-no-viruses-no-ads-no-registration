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


const AetherGenerator = {
   generateRotateble: function(name, x, y, z, region) {
    Structure.set(StructureUtility.rotate(StructureLoader.getStructurePoolByName(pool).get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);       
    },
   generateTree: function(pool, name, x, y, z, region) {   
    StructurePiece.addStructure(name, x, y, z, region);  
     Structure.set(StructureUtility.rotate(pool.get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);
    },
   generateBuilds: function(pool, namee, obj) {     
        StructurePiece.register(StructurePiece.getDefault({
        type: "default",
        dimension: Aether.id,
        white_list_blocks: true,
        blocks: [obj.check],
        name: pool,
        chance: obj.chance,
        distance: obj.distance,
        isSet: true,
        offset: {x: obj.offset.x, y: obj.offset.y, z: obj.offset.z},
        structure: new Structure.advanced(namee)
        }));
    },
   generateMazeLine: function(obj, height, wight, depth, region) { 
    for (var i = 0; i < width; i++) {
     for (var l = 0; l < height; l++) { 
      for (var k = 0; k < depth; k++) {  
       region.setDestroyParticlesEnabled(false);
        region.destroyBlock(obj.crds.x + i, obj.crds.y + l, obj.crds.z + l, false, false);    
                }        
            }
        } 
    }, 
    generateMaze: function(obj, region) {
     var region = BlockSource.getCurrentWorldGenRegion();   
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
      coords = GenerationUtils.findSurface(coords.x, 142, coords.z);
       obj.width = width;  obj.height = height;  obj.depth = depth;
     AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.boss), chunkX * 16, coords.y - 19, chunkZ * 16, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, depth, height, width, region);
     //this.generateMazeLine({x: coords.x -6, y: coords.y +1, z: coords.z +6}, -depth, height, width, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z -6}, width, height, depth, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, -width, height, depth, region);  
      for (var c = 0; c < randomint(3, 5); c++) {
          x = chunkX * 16 * randomInt(2, 6); z = chunkZ * 16 * randomInt(2, 6);
       AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.loot), x, coords.y -19, z, region);
        } 
    }
}


generateMazee = function(obj, region) {
     var region = BlockSource.getCurrentWorldGenRegion();   
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
      coords = GenerationUtils.findSurface(coords.x, 142, coords.z);
       obj.width = width;  obj.height = height;  obj.depth = depth;
     AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.name), chunkX * 16, coords.y - 19, chunkZ * 16, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, depth, height, width, region);
     //this.generateMazeLine({x: coords.x -6, y: coords.y +1, z: coords.z +6}, -depth, height, width, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z -6}, width, height, depth, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, -width, height, depth, region);  
      for (var c = 0; c < randomint(3, 5); c++) {
          x = chunkX * 16 * randomInt(2, 6); z = chunkZ * 16 * randomInt(2, 6);
       AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.name), x, coords.y -19, z, region);
        } 
    }