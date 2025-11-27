var structureGenerationHelper = {
    setG:function(x, y, z){
        this.p(x, y, z, BlockID.ThornstalkBB);
        this.p(x, y+1, z, BlockID.ThornstalkMB);
        this.p(x, y+2, z, BlockID.ThornstalkTBu);
    },
    radiuseInFlat:function(coords, code, r){
        for(var x = coords.x - r; x < coords.x + r; x++){
            for(var z = coords.z -r; z < coords.z + r; z++){
                code();
            }
        }
    },
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
    generateBrownMoshroom:function(crds){
        var block = {
            moshroom: BlockID.moshCb,
            stick: BlockID.moshS
        }
        if(this.random()){
            //ножка
            for(let x = 0; x < 5; x++){
                this.p(crds.x, crds.y+x, crds.z, block.stick);
            }
            //шляпка
            this.p(crds.x, crds.y+6, crds.z, block.moshroom);
            for(var i = 0; i < 2; i++){
                this.p(crds.x, crds.y+6, crds.z-i, block.moshroom);
                this.p(crds.x-2, crds.y+6, crds.z+1, block.moshroom);
                this.p(crds.x-2, crds.y+6, crds.z+2, block.moshroom);
                this.p(crds.x+1, crds.y+6, crds.z-1, block.moshroom);
                this.p(crds.x-1, crds.y+6, crds.z-1, block.moshroom);
                this.p(crds.x, crds.y+6, crds.z+i, block.moshroom);
                this.p(crds.x+1, crds.y+6, crds.z+2, block.moshroom);
                this.p(crds.x-1, crds.y+6, crds.z+2, block.moshroom);
                this.p(crds.x+1, crds.y+6, crds.z+1, block.moshroom);
                this.p(crds.x+1, crds.y+6, crds.z-1, block.moshroom);
                this.p(crds.x+2, crds.y+6, crds.z, block.moshroom);
                this.p(crds.x+2, crds.y+6, crds.z-1, block.moshroom);
                this.p(crds.x+2, crds.y+6, crds.z+1, block.moshroom);
                this.p(crds.x, crds.y+6, crds.z-i, block.moshroom);
                this.p(crds.x+1, crds.y+6, crds.z+2, block.moshroom);
                this.p(crds.x-1, crds.y+6, crds.z+2, block.moshroom);
            }
        }if(!this.random()){
            var d = [];
            var t = [];
            for(var i = 0; i < 2; i++){
                d = [crds.x-1, crds.y+3, crds.z];
                t = [crds.x-1, crds.y+3, crds.z];
                this.p(crds.x, crds.y+3, crds.z, block.stick);
                this.p(d[0]+i, d[1], d[2], block.moshroom);
                this.p(t[0], t[1], t[2]+i, block.moshroom);
            }
        }
    },
    generateRedMoshroom:function(crds, block){
        var block = {
            moshroom: BlockID.moshCr,
            stick: BlockID.moshS
        }
        if(this.random()){
            var a = [];
            
            this.p(crds.x, crds.y, crds.z, block.stick);
            this.p(crds.x, crds.y+1, crds.z, block.stick);
            this.p(crds.x, crds.y+2, crds.z, block.stick);
            this.p(crds.x, crds.y+3, crds.z, block.stick);
            this.p(crds.x, crds.y+4, crds.z, block.stick);
            
            this.p(crds.x, crds.y+5, crds.z, block.moshroom);
            this.p(crds.x+1, crds.y+5, crds.z, block.moshroom);
            this.p(crds.x-1, crds.y+5, crds.z, block.moshroom);
            this.p(crds.x, crds.y+5, crds.z-1, block.moshroom);
            this.p(crds.x, crds.y+5, crds.z+1, block.moshroom);
            
            this.p(crds.x+2, crds.y+4, crds.z, block.moshroom);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.moshroom);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.moshroom);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.moshroom);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.moshroom);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.moshroom);
            this.p(crds.x, crds.y+4, crds.z-2, block.moshroom);
            this.p(crds.x, crds.y+4, crds.z+2, block.moshroom);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.moshroom);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.moshroom);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.moshroom);
            this.p(crds.x-2, crds.y+4, crds.z, block.moshroom);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.moshroom);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.moshroom);
            
            this.p(crds.x-3, crds.y+3, crds.z, block.moshroom);
            this.p(crds.x-3, crds.y+3, crds.z-1, block.moshroom);
            this.p(crds.x-3, crds.y+3, crds.z-2, block.moshroom);
            this.p(crds.x-3, crds.y+3, crds.z+1, block.moshroom);
            this.p(crds.x-3, crds.y+3, crds.z+2, block.moshroom);
            this.p(crds.x-2, crds.y+3, crds.z+2, block.moshroom);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.moshroom);
            this.p(crds.x-2, crds.y+3, crds.z-3, block.moshroom);
            this.p(crds.x-2, crds.y+3, crds.z+3, block.moshroom);
            this.p(crds.x-1, crds.y+3, crds.z+3, block.moshroom);
            this.p(crds.x-1, crds.y+3, crds.z-3, block.moshroom);
            this.p(crds.x, crds.y+3, crds.z-3, block.moshroom);
            this.p(crds.x, crds.y+3, crds.z+3, block.moshroom);
            this.p(crds.x+1, crds.y+3, crds.z+3, block.moshroom);
            this.p(crds.x+1, crds.y+3, crds.z-3, block.moshroom);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.moshroom);
            this.p(crds.x+2, crds.y+3, crds.z-3, block.moshroom);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.moshroom);
            this.p(crds.x+2, crds.y+3, crds.z+3, block.moshroom);
            this.p(crds.x+3, crds.y+3, crds.z, block.moshroom);
            this.p(crds.x+3, crds.y+3, crds.z+1, block.moshroom);
            this.p(crds.x+3, crds.y+3, crds.z+2, block.moshroom);
            this.p(crds.x+3, crds.y+3, crds.z-1, block.moshroom);
            this.p(crds.x+3, crds.y+3, crds.z-2, block.moshroom);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.moshroom);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.moshroom);
            
            }if(!this.random()){
                this.p(crds.x, crds.y, crds.z, block.stick);
                this.p(crds.x, crds.y+1, crds.z, block.moshroom);
                this.p(crds.x+1, crds.y+1, crds.z, block.moshroom);
                this.p(crds.x-1, crds.y+1, crds.z, block.moshroom);
                this.p(crds.x, crds.y+1, crds.z+1, block.moshroom);
                this.p(crds.x, crds.y+1, crds.z-1, block.moshroom);
                this.p(crds.x, crds.y+2, crds.z, block.moshroom);
            }
    },
    setGrass:function(t){
        if(t.setInRadiuse){
            this.radiuseInFlat({x:t.x, y:t.y},
                function(){
                    this.setG(this.x, t.y, this.z);
                }, t.radiuse);
            }else{
                this.setG(t.x, t.y, t.z); 
        }
    }
}