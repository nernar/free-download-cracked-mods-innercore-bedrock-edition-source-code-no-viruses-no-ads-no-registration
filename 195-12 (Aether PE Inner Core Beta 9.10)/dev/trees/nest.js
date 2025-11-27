var nesstGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateNest:function(crds, block){
        var block = {
            nest: BlockID.nestSkyroot
        }
        if(this.random()){
            var a = [];
            //start
            this.p(crds.x, crds.y, crds.z, block.nest);
            //x1
            this.p(crds.x+1, crds.y, crds.z, block.nest);
            this.p(crds.x-1, crds.y, crds.z, block.nest);
            this.p(crds.x, crds.y, crds.z+1, block.nest);
            this.p(crds.x, crds.y, crds.z-1, block.nest);
            //diagh 1
            this.p(crds.x+1, crds.y, crds.z+1, block.nest);
            this.p(crds.x-1, crds.y, crds.z-1, block.nest);
            this.p(crds.x+1, crds.y, crds.z-1, block.nest);
            this.p(crds.x-1, crds.y, crds.z+1, block.nest);
            //x2(1)
            this.p(crds.x+2, crds.y+1, crds.z, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z, block.nest);
            this.p(crds.x, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x, crds.y+1, crds.z-2, block.nest);
            //x2(2)
            this.p(crds.x+2, crds.y+1, crds.z+1, block.nest);
            this.p(crds.x+2, crds.y+1, crds.z-1, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z+1, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z-1, block.nest);
            //x3(1)
            this.p(crds.x+1, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x-1, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x+1, crds.y+1, crds.z-2, block.nest);
            this.p(crds.x-1, crds.y+1, crds.z-2, block.nest);
            //x3(2)
            this.p(crds.x+3, crds.y+2, crds.z, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z, block.nest);
            this.p(crds.x, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x, crds.y+2, crds.z-3, block.nest);
            //#3(1)
            this.p(crds.x+3, crds.y+2, crds.z+1, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z-1, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+1, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-1, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z+2, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z-2, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+2, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-2, block.nest);
            //#3(2)
            this.p(crds.x+1, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-1, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x+1, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x-1, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x+2, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-2, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x+2, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x-2, crds.y+2, crds.z-3, block.nest);
            //diagh 2
            this.p(crds.x+3, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-3, block.nest);
            }            
    }
}

Callback.addCallback("GenerateChunk", function(a,b){
for(var i = 0; i < 1; i++){
 d=GenerationUtils.randomCoords(a,b,100,146);
  for(var k=100;k<146;k++){
   if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
     for(var q=1;q<10;q++){
      if(World.getBlockID(d.x,k+q,d.z)!=0){
nesstGenerationHelper.generateNest({x: d.x, y: k, z: d.z});          
return}
}
return}
}
}
});