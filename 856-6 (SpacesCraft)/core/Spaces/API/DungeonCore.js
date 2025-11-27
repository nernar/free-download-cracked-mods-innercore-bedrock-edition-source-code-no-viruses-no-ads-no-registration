var DungeonCore = {
    path: "assets/structure/",
    getId: function(id){
        let blocks = BlockID;
        let d;
        if(id >= 8000){
           key = Object.keys(blocks);
           for(let i in key){
               let k = key[i];
               if(blocks[k]==id){
                   d = k;
                   break;
               }
           }
        }else{
            d = id
        }
        return d;
    },
    setStructure: function(name, x, y, z, rotation, region){
        let structure = FileTools.ReadText(this.path+name+".dc");
        structure = structure.split(":");
        for(let i in structure){
            let data = structure[i].split(".");
            region.setBlock(x + parseInt(data[2]), y + parseInt(data[3]), z + parseInt(data[4]), this.getId(data[0]), parseInt(data[1]));
        }
    },
    importDungeonAPI: function(name){
        let structure = FileTools.ReadJSON(this.path+name+".json");
        for(let i in structure){
            FileTools.WriteText(this.path+name+".dc", i == structure.length - 1 ? structure[i] : structure[i] + ":", true);
        }
    }
};
/*
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    if(Math.random()<=0.1) DungeonCore.setStructure("test2", coords.x, coords.y, coords.z, 0, BlockSource.getCurrentWorldGenRegion());
});*/
