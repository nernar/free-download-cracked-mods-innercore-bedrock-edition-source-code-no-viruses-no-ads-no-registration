var Generation = {
	LargeOreDepositeTemplate(x, y, z, name, size, seed, debug){
		//Debug.message(seed);
        var xz = size;
        var ry = Math.floor(size / 8);
        
        for (var xx = -xz; xx <= xz; xx++) {
            for (var yy = -ry; yy < ry; yy++) {
                for (var zz = -xz; zz <= xz; zz++) {
                     if (Math.sqrt(xx * xx + yy * yy + zz * zz) < size && rollPercentage(15)) {
                         //if(rollPercentage(1)) Debug.message("Block");
                         Generation.setOre(x + xx, y + yy, z + zz, name, debug);
                     }
                 }
            }
        }
    },
    
    setOre: function(x, y, z, name, debug){
    	for(var k in Base.backTypes){
    	    var bt = Base.backTypes[k];
            if(!bt.data) bt.data = 0;
            if(!debug && World.getBlockID(x, y, z) == bt.id && World.getBlockData(x, y, z) == bt.data){
                World.setBlock(x, y, z, BlockID["ore"+name+"_"+k], 0);
            }else if(debug){
            	World.setBlock(x, y, z, BlockID["ore"+name+"_stone"], 0);
            }
        }
    },
    
    strongIf(coords){
    	var b = {
    	0: true,
        7:true,
        8: true,
        9: true,
        10: true,
        11: true,
        199: true,
        200: true};
		return !b[World.getBlockID(coords.x, coords.y, coords.z)];
	},
	
	chunkNumber(chunkX, chunkZ, n){
		return chunkX % n == 0 && chunkZ % n == 0
	},
};

World.addGenerationCallback("GenerateChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	//if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, z: chunkZ * 16};
	var chance = 250;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			var i = 0;
			for(var y = 128; y > 10; y--){
				if(Generation.strongIf({x: coords.x, y: y, z: coords.z})){
					i += 600 / o.rarity;
					if(y == 10) i = 100;
			        if(rollPercentage(i, cSeed + y)){
						var size = Math.round(125 / o.rarity * Config.DEPOSITES_SIZE);
						if(size < 8) size = 8;
						if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                        Generation.LargeOreDepositeTemplate(coords.x, y, coords.z, k, size, cSeed);
                        if(Config.debug) Debug.message("x: "+coords.x+", y: "+y+", z: "+coords.z+", type: "+k);
                        return;
				    }
			    }
            }
        }
    }
});

World.addGenerationCallback("GenerateNetherChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, y: random(32, 120, cSeed), z: chunkZ * 16};
	var chance = 500;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			for(var i = 32; i > 0; i--){
			    if(Generation.strongIf({x: coords.x, y: coords.y, z: coords.z})){
				    var size = Math.round(500 / o.rarity * Config.DEPOSITES_SIZE);
					if(size < 8) size = 8;
					if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                    Generation.LargeOreDepositeTemplate(coords.x, coords.y, coords.z, k, size, cSeed);
                    if(Config.debug) Debug.message("x: "+coords.x+", y: "+coords.y+", z: "+coords.z+", type: "+k);
                    return;
			    }else{
				    var y = coords.y;
				    coords.y = random(32, 120, cSeed * coords.y / 100);
				    //if(coords.y == y) random(10, 120, cSeed + coords.y +1);
			    }
		    }
        }
    }
});

World.addGenerationCallback("GenerateEndChunk", function(chunkX, chunkZ, _, _, _, wSeed, _, cSeed){
	if(Config.debug && Generation.chunkNumber(chunkX, chunkZ, 10)) Debug.message(wSeed+" "+cSeed);
	if(!Generation.chunkNumber(chunkX, chunkZ, 3)) return;
	var coords = {x: chunkX * 16, z: chunkZ * 16};
	var chance = 1000;
	//if (Config.debug) chance = Config.DEBUG_CHANCE;
	for(var k in Base.Ores){
		var o = Base.Ores[k];
		if(o.rarity && rollPercentage(chance / o.rarity, cSeed)){
			var i = 0;
			for(var y = 80; y > 10; y--){
				if(Generation.strongIf({x: coords.x, y: y, z: coords.z})){
					i += 600 / o.rarity;
					if(y == 10) i = 100;
			        if(rollPercentage(i, cSeed * y)){
						var size = Math.round(1000 / o.rarity * Config.DEPOSITES_SIZE);
						if(size < 8) size = 8;
						if(size > Config.DEPOSITES_SIZE) size = Config.DEPOSITES_SIZE;
                        Generation.LargeOreDepositeTemplate(coords.x, y, coords.z, k, size, cSeed);
                        if(Config.debug) Debug.message("x: "+coords.x+", y: "+y+", z: "+coords.z+", type: "+k);
                        return;
				    }
			    }
		    }
        }
    }
});