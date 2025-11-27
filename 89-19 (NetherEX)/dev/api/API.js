IMPORT("StructuresAPI");

Structure.init("structures");

Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.GHAST = 41;
var UniqueGen={ 
generateOre: function(id, data, chunkX, chunkZ, params){  
for (var i = 0; i < params.veinCounts; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y); 
if(Math.random() < params.veinChance)GenerationUtils.genMinable(coords.x, coords.y, coords.z, { 
id: id, 
data: data, 
size: params.size, 
ratio: params.ratio, 
checkerTile: params.checkerTile, 
checkerMode: params.checkerMode 
      }); 
   }  
}
}

var Str = {
DeadsF:23,
ShroomsF:26,
generateTrees:function(chunkX, chunkZ, names, params){
 for(var i = 0; i < 4; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)==params.check){
  Structure.setInWorld(names[i], coords.x, coords.y+1, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
    } 
  }
},
generateBuildings:function(chunkX, chunkZ, names, params){
for(var i in names){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)==params.check){
  Structure.setInWorld(names[i], coords.x, coords.y, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
    } 
  }
},
generateEnoki:function(chunkX, chunkZ, name, params){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)== params.check && World.getBlockID(coords.x,coords.y-2,coords.z)== 0){
  Structure.setInWorld(name, coords.x, coords.y-1, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
  }
}
}