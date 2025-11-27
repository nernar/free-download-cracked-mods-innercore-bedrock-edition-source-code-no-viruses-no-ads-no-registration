LIBRARY({
	name: "PhysicBlocks",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

var setBlockUpdateType = ModAPI.requireGlobal('requireMethodFromNativeAPI("api.NativeAPI", "setTileUpdateType")');
var UPDATE_TYPE = 0x13;
var DELAY = 5;
var exeptions = {
	18: true,
	161: true,
};
var correct_blocks = {
	        0: true,
	        6: true,
	        8: true,
            9: true,
            10: true,
            11: true,
            30: true,
            31: true,
            32: true,
            34: true,
            39: true,
            40: true,
            51: true,
            55: true,
            59: true,
            78: true,
            104: true,
            105: true,
            106: true,
            141: true,
            142: true,
            175: true,
            207: true,
};

var PBlocks = {
	IDs: {},
	
	register: function(id, isVanila){
		if(isVanila) PBlocks.IDs[id] = 1;
		if(!isVanila) PBlocks.IDs[id] = true;
		if(!isVanila) Block.registerNeighbourChangeFunction(id, function(c){
			if(PBlocks.checkCorrectBlocks(c)){
            	PBlocks.delay(id, c, DELAY);
            }
		});
		
		Item.registerUseFunction(id, function(coords, item, block){
            var r = coords.relative;
            if(PBlocks.checkCorrectBlocks(r)){
            	Game.prevent();
                //setBlockUpdateType(UPDATE_TYPE);
            	World.setBlock(r.z, r.y, r.z, 0, 0);
                //setBlockUpdateType(3);
                PBlocks.delay(id, r);
            }
        });
	},
	
	startFall: function(id, c){
		World.setBlock(c.x, c.y, c.z, 0, 0);
		this.updateNeighbors(c);
		c.x += 0.5;
        c.y += 0.5; 
        c.z += 0.5;
		var anim = new Animation.item(c.x, c.y, c.z);
		anim.describeItem({id: id, data: 0, size: 1});
		anim.load();
		
		Updatable.addUpdatable({
			anim: anim,
			c: c,
			id: id,
			
		    update: function(){
			this.pos = ModAPI.requireGlobal("Level.clip")(this.c.x - 0.5, this.c.y - 0.5, this.c.z - 0.5, this.c.x + 0.5, this.c.y - 0.5, this.c.z + 0.5).pos;
			if(!PBlocks.checkPos(this.pos, {x: this.c.x + 0.5, y: this.c.y - 0.5, z: this.c.z + 0.5}) && !PBlocks.checkCorrectBlocks({x: this.c.x - 0.5, y: Math.floor(this.c.y), z: this.c.z - 0.5})){
				this.anim.destroy();
				this.anim = false;
				this.c.x-=0.5;
				this.c.y = Math.round(this.c.y);
				this.c.z-=0.5;
				this.remove = PBlocks.final(this);
				return;
			}
			if(this.anim) this.c.y -= 0.3;
			if(this.anim) this.anim.setPos(this.c.x, this.c.y, this.c.z);
			/*if(!PBlocks.checkCorrectBlocks(this.c, true)){
			    this.anim.destroy();
				this.anim = false;
				if(!PBlocks.checkIncorrectBlocks(this.c)){
				    World.setBlock(this.c.x - 0.5, this.c.y - 0.5, this.c.z - 0.5, this.id, 0);
				    this.remove = true;
				}else{
					World.drop(this.c.x, this.c.y, this.c.z, this.id, 1, 0);
					this.remove = true;
				}
			}*/
		}
		});
	},
	
	checkCorrectBlocks: function(c, corrected){
		if(corrected){
			return correct_blocks[World.getBlockID(c.x, c.y, c.z)];
		}
		return correct_blocks[World.getBlockID(c.x, c.y - 1, c.z)];
	},
	
	checkIncorrectBlocks: function(c){
		//Debug.message(World.getBlockID(c.x, c.y, c.z));
		//Debug.message(correct_blocks[World.getBlockID(c.x, c.y, c.z)]);
		if(!this.checkCorrectBlocks(c, true)){
            return GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z));
        }else false;
        //incorrect_blocks[World.getBlockID(c.x, c.y, c.z)];
	},
	
	checkExeptions: function(x, y, z){
		//Debug.message(World.getBlockID(x, y, z));
		if(World.getBlockID(x, y, z) == 34) return true;
		return exeptions[World.getBlockID(x, y, z)];
	},
	
	checkPos: function(pos1, pos2){
		//Debug.message("x: "+pos1.x + ", " + pos2.x + "; z:" + pos1.z + ", " + pos2.z);
		return (Math.abs(pos1.x - pos2.x) < 0.001 && Math.abs(pos1.z - pos2.z) < 0.001);
	},
	
	delay: function(id, c, delay){
		Updatable.addUpdatable({
			age: delay || 0, 
			update: function(){
			    if(this.age > 0){
                    this.age--;
                }else{
                	PBlocks.startFall(id, c);
                    this.remove = true;
                }
		    }
	    });
	},
	
	updateNeighbors: function(c){
		var coords = [{x: 0, y: 1, z: 0}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}];
		for(var k in coords){
			var i = coords[k];
			c.x+=i.x;
			c.y+=i.y;
			c.z+=i.z;
			var id = World.getBlockID(c.x, c.y, c.z);
		    if(this.IDs[id]){
                Callback.invokeCallback("BlockEventNeighbourChange", c, {id: id, data: 0});
                //this.updateVanila(c);
            }
            c.x-=i.x;
			c.y-=i.y;
			c.z-=i.z;
		}
	},
	
	updateVanila: function(c){
		var id = World.getBlockID(c.x, c.y, c.z);
		if(this.IDs[id] == 1 && this.checkCorrectBlocks(c)){
			this.delay(id, c, DELAY);
		}
	},
	
	final: function(params){
		if((this.checkExeptions(params.c.x, params.c.y - 1, params.c.z) || !GenerationUtils.isTransparentBlock(World.getBlockID(params.c.x, params.c.y - 1, params.c.z))) && !PBlocks.checkIncorrectBlocks(params.c)){
			if(World.getBlockID(params.c.x, params.c.y - 1, params.c.z) == 34) params.c.y--;
			World.setBlock(params.c.x, params.c.y, params.c.z, params.id, 0);
		}else{
			var id = World.getBlockID(params.c.x, params.c.y, params.c.z);
			var data = World.getBlockData(params.c.x, params.c.y, params.c.z);
			World.setBlock(params.c.x, params.c.y, params.c.z, params.id, 0);
			World.destroyBlock(params.c.x, params.c.y, params.c.z);
			World.setBlock(params.c.x, params.c.y, params.c.z, id, data);
			World.drop(params.c.x, params.c.y, params.c.z, params.id, 1, 0);
		}
		return true;
	}
};

/*Callback.addCallback('DestroyBlock', function (coords, block, player){
	//Debug.message(block.id);
	if(PBlocks.IDs[block.id] == 1){
		PBlocks.updateNeighbors(coords);
	}
});*/

EXPORT("RegisterPhysicBlock", PBlocks.register);