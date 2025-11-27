var StructureTest = new DungeonAPI("sasha.json");

StructureTest.setPrototype({
    isSetBlock: function (x, y, z, id, data, identification){
        return true;
    }
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 1);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    StructureTest.setStructure(coords.x, coords.y + 1, coords.z);
});