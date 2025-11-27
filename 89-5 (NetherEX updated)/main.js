/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 20
*/



// file: api/define.js

var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype){
		// register render
		ICRender.getGroup("ic-wire").add(id, -1);
		// register ID
		this.machineIDs[id] = true;
		// setup energy value
		if (Prototype.defaultValues){
			Prototype.defaultValues.energy = 0;
		}
		else{
			Prototype.defaultValues = {
				energy: 0
			};
		}
		// copy functions
		if(!Prototype.getEnergyStorage){
			Prototype.getEnergyStorage = function(){
				return 0;
			};
		}
		/*
		Prototype.click = function(id, count, data, coords){
			if(id==ItemID.wrench || id==ItemID.electricWrench){
				return true;
			}
		}
		*/
		
		ToolAPI.registerBlockMaterial(id, "stone");
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		EnergyTileRegistry.addEnergyTypeForId(id, EU);
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level > 0){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}




// file: api/recipe.js

var MachineRecipeRegistry = {
	recipeData: {},
	
	registerRecipesFor: function(name, data, validateKeys){
		if(validateKeys){
			var newData = {};
			for(var key in data){
				var newKey = key;
				if(key.split(":").length < 2){
					newKey = eval(key);
				}
				newData[newKey] = data[key];
			}
			data = newData;
		}
		this.recipeData[name] = data;
	},
	
	addRecipeFor: function(name, source, result){
		this.requireRecipesFor(name, true)[source] = result;
	},
	
	requireRecipesFor: function(name, createIfNotFound){
		if(!this.recipeData[name] && createIfNotFound){
			this.recipeData[name] = {};
		}
		return this.recipeData[name];
	},
	
	getRecipeResult: function(name, key1, key2){
		var data = this.requireRecipesFor(name);
		if(data){
			return data[key1] || data[key1+":"+key2];
		}
	}
}




// file: api/render.js

var MachineRenderer = {
	data: {},
	setStandartModel: function(id, texture, rotation){
		if(rotation){
			var textures = [
				[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]],
				[texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]],
				[texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]],
				[texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]
			]
			for(var i = 0; i < 4; i++){
				var render = new ICRender.Model();
				var model = BlockRenderer.createTexturedBlock(textures[i]);
				render.addEntry(model);
				BlockRenderer.enableCoordMapping(id, i, render);
			}
		}else{
			var render = new ICRender.Model();
			var model = BlockRenderer.createTexturedBlock(texture);
			render.addEntry(model);
			BlockRenderer.enableCoordMapping(id, -1, render);
		}
	},
	
	registerRenderModel: function(id, texture, rotation){
		if(rotation){
			this.data[id] = [];
			var textures = [
				[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]],
				[texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]],
				[texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]],
				[texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]
			]
			for(var i = 0; i < 4; i++){
				var render = new ICRender.Model();
				var model = BlockRenderer.createTexturedBlock(textures[i]);
				render.addEntry(model);
				this.data[id].push(render);
			}
		}else{
			var render = new ICRender.Model();
			var model = BlockRenderer.createTexturedBlock(texture);
			render.addEntry(model);
			this.data[id] = [render];
		}
	},
	
	getRenderModel: function(id, data){
		var models = this.data[id];
		if(models){
			return models[data];
		}
		return 0;
	},
	
	mapAtCoords: function(x, y, z, id, data){
		var model = this.getRenderModel(id, data);
		if(model){
			BlockRenderer.mapAtCoords(x, y, z, model);
		}
	}
}




// file: api/shared.js

ModAPI.registerAPI("NEXCore", {
    Render: MachineRenderer,
    requireGlobal: function(command){
        return eval(command);
    }
});
Logger.Log("Nether EX API shared with name NEXCore.", "API");




// file: NXblocks/fire.js

IMPORT("SoundAPI", "*");
var Renderer={
        setFireRender:function(id,x){
        var shape = new ICRender.CollisionShape();
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 12,
    opaque: false
});
IDRegistry.genBlockID("BlueFire");
Block.createBlock("BlueFire", [
{name: "Blue Fire", texture: [["FireBlue", 0]], inCreative: false}], BLOCK_LIGHT);

Renderer.setFireRender(BlockID.BlueFire,0);


Block.setBlockShape(BlockID.BlueFire, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
ToolAPI.registerBlockMaterial(BlockID.BlueFire, "cobweb");

Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var block = World.getBlockID(entP.x, entP.y, entP.z);
if(block == BlockID.BlueFire){
Entity.setFire(Player.get(), 180);    
}});

Block.registerDropFunction("BlueFire", function(){
    if(Math.random() < .060){
        return [[ItemID.RimeCryst, 1, 0]]
    }
    else {
        return [];
    }
});




// file: NXblocks/Mosh/Moshrooms.js


//MOSH
IDRegistry.genBlockID("moshS");
Block.createBlockWithRotation("moshS", [
{name: "Elder Moshroom Stem", texture: [["MEF", 0],["MEF", 0],["MES", 0],["MES", 0], ["MES", 0],["MES", 0]], inCreative: true}
], "opaque");
    
IDRegistry.genBlockID("moshCr");
Block.createBlockWithRotation("moshCr", [
{name: "Rad Elder Moshroom Cap", texture: [["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0]], inCreative: true }
], "opaque");
Block.registerDropFunction("moshCr", function(){
    if(Math.random() < .080){
        return [[ItemID.rmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});
   
IDRegistry.genBlockID("moshCb");
Block.createBlockWithRotation("moshCb", [
{name: "Brown Elder Moshroom Cap", texture: [["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0]],
inCreative: true}], "opaque");
Block.registerDropFunction("moshCb", function(){
    if(Math.random() < .080){
        return [[ItemID.bmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("MushroomEnokiCap");
Block.createBlockWithRotation("MushroomEnokiCap", [
{name: "Mushroom Enoki Cap", texture: [["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0]],
inCreative: true}]);
Block.registerDropFunction("MushroomEnokiCap", function(){
    if(Math.random() < .125){
        return [[ItemID.EnMushroom, 1, 0]]
    }
    else {
        return [];
    }
});

function setMoshRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

IDRegistry.genBlockID("gifMosh");
Block.createBlock("gifMosh", [
    {name: "Moshroom", texture: [["plant_Enoki", 0]], inCreative: true}]);

setMoshRender(BlockID.gifMosh, 1/2, "nx-en");

setMoshRender(BlockID.MushroomEnokiCap, 1/1, "nx-en");

BlockRenderer.addRenderCallback(BlockID.gifMosh, function(api, block) {
var coords = coords.relative;     
if(World.getBlockID(coords.x, coords.y+1, coords.z)==87){
setMoshRender(87, 1/1, "nx-en");
Game.message("molodec");
}else{
Game.message("DOLBAYOB");
World.destroyBlock(coords.x,coords.y,coords.z,false);
           }     
});            	




// file: NXblocks/Mosh/moshStructure.js

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




// file: NXblocks/Mosh/MoshT.js

var Renderer={
        setSaplingRender:function(id,x){
        var shape = new ICRender.CollisionShape();     
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z,0+i, 0.01, 0+i, x+i, 0.99, x+i,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z,(1-x)-i, 0.01, 0+i,1-i, 0.99, x+i,id, block.data);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, id, block.data);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};
//Thorn
//top

IDRegistry.genItemID("ThornstalkT");
Item.createItem("ThornstalkT", "Withered grass top", {name: "ThornstalkTop", data: 0});

//midlle

IDRegistry.genItemID("ThornstalkM");
Item.createItem("ThornstalkM", "Withered grass midlle", {name: "ThornstalkMiddle", data: 0});

//boottom
IDRegistry.genItemID("ThornstalkB");
Item.createItem("ThornstalkB", "Withered grass bottom", {name: "ThornstalkBottom", data: 0});
//ThornB
//top
IDRegistry.genBlockID("ThornstalkTB");

Block.createBlock("ThornstalkTB", [{name: "Thorn Top",texture: [["ThornstalkTop",0]],inCreative:false}]);

Block.registerDropFunction("ThornstalkTB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkTB, "plant");

Renderer.setSaplingRender(BlockID.ThornstalkTB,0);

//top(unactive)

IDRegistry.genBlockID("ThornstalkTBu");
Block.createBlock("ThornstalkTBu", [{name: "Thorn Top",texture: [["ThornstalkTop",0]],inCreative:false}]);

Block.registerDropFunction("ThornstalkTBu", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkTBu, "plant");

Renderer.setSaplingRender(BlockID.ThornstalkTBu,0);

//midlle

IDRegistry.genBlockID("ThornstalkMB");

Block.createBlock("ThornstalkMB", [{name: "Thorn midlle",texture: [["ThornstalkMiddle",0]],inCreative:false
}]);


Block.registerDropFunction("ThornstalkMB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkMB, "plant");

Renderer.setSaplingRender(BlockID.ThornstalkMB,0);

//bottom

IDRegistry.genBlockID("ThornstalkBB");

Block.createBlock("ThornstalkBB", [{name: "Thorn bottom",texture: [["ThornstalkBottom",0]],inCreative:false
}]);

Block.registerDropFunction("ThornstalkBB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkBB, "plant");

Renderer.setSaplingRender(BlockID.ThornstalkBB,0);

//BI
IDRegistry.genItemID("bmoshroomSmall");
Item.createItem("bmoshroomSmall", "Elder Brown Moshroom", {name: "BrownElderMushroom", data: 0});

//RI
IDRegistry.genItemID("rmoshroomSmall");
Item.createItem("rmoshroomSmall", "Elder Red Moshroom", {name: "RadElderMushroom", data: 0});

//BB
IDRegistry.genBlockID("bmoShroomSmall");

Block.createBlock("bmoShroomSmall", [{name: "Elder Brown Moshroom",texture: [["BrownElderMushroom",0]],inCreative:false
}]);

Block.registerDropFunction("bmoShroomSmall", function(){
return [[ItemID.bmoshroomSmall, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.bmoShroomSmall, "plant");

Renderer.setSaplingRender(BlockID.bmoShroomSmall,0);

//RB
IDRegistry.genBlockID("redmoShroomSmall");

Block.createBlock("redmoShroomSmall", [{name: "Elder Red Moshroom",texture: [["RadElderMushroom",0]],inCreative:false
}]);

Block.registerDropFunction("redmoShroomSmall", function(){
return [[ItemID.rmoshroomSmall, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.redmoShroomSmall, "plant");

Renderer.setSaplingRender(BlockID.redmoShroomSmall,0);


Callback.addCallback("ItemUse",function(crd,item){
var pl=crd.relative;
    if(item.id==ItemID.bmoshroomSmall&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.bmoShroomSmall,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.bmoShroomSmall,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
             this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=88){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                 World.destroyBlock(this.x,this.y,this.z,false);
                  structureGenerationHelper.generaterBrownMoshroom({x: this.x, y: this.y, z: this.z});
                    }
            },  
            click: function(id, count, data){
if (id == ItemID.Witherdust){ World.destroyBlock(this.x,this.y,this.z,false);

structureGenerationHelper.generateRedMoshroom({x: this.x, y: this.y, z: this.z});

                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
    
//Red

Callback.addCallback("ItemUse",function(crd,item){
var pl=crd.relative;
    if(item.id==ItemID.rmoshroomSmall&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.redmoShroomSmall,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});


TileEntity.registerPrototype(BlockID.redmoShroomSmall,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
             this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=88){
                     World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                 World.destroyBlock(this.x,this.y,this.z,false);                      
                  structureGenerationHelper.generateRedMoshroom({x: this.x, y: this.y, z: this.z});
                    }
            },  
            click: function(id, count, data){
if (id == ItemID.Witherdust){ World.destroyBlock(this.x,this.y,this.z,false);

structureGenerationHelper.generateRedMoshroom({x: this.x, y: this.y, z: this.z});

                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
//ThornTile
//1
Item.registerUseFunction("ThornstalkT", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
    World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkTB,0);
        World.addTileEntity(place.x,place.y,place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});


//2
Item.registerUseFunction("ThornstalkM", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkMB,0);
        World.addTileEntity(place.x,place.y,place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
//3
Item.registerUseFunction("ThornstalkB", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkBB,0);
        World.addTileEntity(place.x,place.y,place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

//top(1)
TileEntity.registerPrototype(BlockID.ThornstalkTB,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
              if (this.data.age>1000&&Math.random()<0.3){
               World.destroyBlock(this.x,this.y,this.z,false);
                structureGenerationHelper.setGrass({x: this.x, y: this.y, z: this.z, setInRadiuse:false});     
                    }
            },  
            click: function(id, count, data){
            if (id == ItemID.Witherdust){World.destroyBlock(this.x,this.y,this.z,false);
             structureGenerationHelper.setGrass({x: this.x, y: this.y, z: this.z, setInRadiuse:true, radiuse:3});      
               Player.setCarriedItem(id, count - 1, data);
                }
            }
         });
                            
//middle(2)
TileEntity.registerPrototype(BlockID.ThornstalkMB,{
defaultValues:{
    }
});
//bottom(3)

TileEntity.registerPrototype(BlockID.ThornstalkBB,{
defaultValues:{
    }
});
        
Translation.addTranslation("Withered grass top", {ru: "Верх иссушающей травы"});
Translation.addTranslation("Withered grass midlle", {ru: "Середина иссушающей травы"});
Translation.addTranslation("Withered grass bottom", {ru: "Низ иссушающей травы"});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.ThornstalkTB){
Entity.damageEntity(Player.get(), 1);    
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.ThornstalkTBu){
Entity.damageEntity(Player.get(), 1);    
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.ThornstalkMB){
Entity.damageEntity(Player.get(), 1);   
Entity.addEffect(Player.get(), 20, 2, 205, false,false); 
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.ThornstalkBB){
Entity.damageEntity(Player.get(), 1);   
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});




// file: NXitems/NXcraftItems.js

IDRegistry.genItemID("Amethyst");
Item.createItem("Amethyst", "Amethyst Crystal", {name: "AmethystCrystal", meta: 0});

IDRegistry.genItemID("SItem");
Item.createItem("SItem", "Spore", {name: "SporeItem", meta: 0});

IDRegistry.genItemID("RimeCryst");
Item.createItem("RimeCryst", "Rime Crystal", {name: "RimeCrystal", meta: 0});

IDRegistry.genItemID("BackCryst");
Item.createItem("BackCryst", "Back Crystal", {name: "BackAmethyst", meta: 0},{isTech:false,stack: 1});

IDRegistry.genItemID("BSFang");
Item.createItem("BSFang", "Bone-Spider Fang", {name: "BoneSpiderFang", meta: 0},{isTech:false,stack: 8});

IDRegistry.genItemID("Witherbone");
Item.createItem("Witherbone", "Wither bone", {name: "WitherBone", meta: 0});

IDRegistry.genItemID("Witherdust");
Item.createItem("Witherdust", "Wither dust", {name: "WitherDust", meta: 0});

IDRegistry.genItemID("Netherbrickf");
Item.createItem("Netherbrickf", "Nether brick Fiery", {name: "FieryNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickGl");
Item.createItem("NetherbrickGl", "Nether brick Gloomy", {name: "GloomyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickIcy");
Item.createItem("NetherbrickIcy", "Nether brick Icy", {name: "IcyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickLi");
Item.createItem("NetherbrickLi", "Nether brick Lively", {name: "LivelyNetherBrick", meta: 0});

IDRegistry.genItemID("Ghastqt");
Item.createItem("Ghastqt", "Ghast Quen tears", {name: "GhastQuenTears", meta:0},{isTech:false,stack: 4});

IDRegistry.genItemID("HideBl");
Item.createItem("HideBl", "Black Salamander Hide", {name: "HideSalamanderBlack", meta: 0});

IDRegistry.genItemID("HideSo");
Item.createItem("HideSo", "Orange Salamander Hide", {name: "HideSalamanderOrrange", meta: 0});
//spawneggs
IDRegistry.genItemID("SporeCreeperEgg");
Item.createItem("SporeCreeperEgg", "Spore Creeper Egg", {name: "SporeCreeperEgg", meta: 0});

IDRegistry.genItemID("EmberSEgg");
Item.createItem("EmberSEgg", "Ember Egg", {name: "EmberSEgg", meta: 0});

IDRegistry.genItemID("SalamanderBSEgg");
Item.createItem("SalamanderBSEgg", "Salamander Black Egg", {name: "SalamanderSEgg", meta: 0});

IDRegistry.genItemID("SalamanderOSEgg");
Item.createItem("SalamanderOSEgg", "Salamander Orange Egg", {name: "SalamanderSEgg", meta: 0});
//silver

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});

IDRegistry.genItemID("casingSilver");
Item.createItem("casingSilver", "Silver Casing", {name: "casing_silver"});

IDRegistry.genItemID("plateSilver");
Item.createItem("plateSilver", "Silver Plate", {name: "plate_silver"});

IDRegistry.genItemID("nuggetSilver");
Item.createItem("nuggetSilver", "Silver Nugget", {name: "nugget_silver"});

IDRegistry.genItemID("convertorSilver");
Item.createItem("convertorSilver", "Silver Convertor Core", {name: "ConvertorC"});

IDRegistry.genItemID("convertorSilverA");
Item.createItem("convertorSilverA", "Advensed Silver Convertor Core", {name: "AConvertorC"});




// file: NXblocks/StartAndBlocks.js

//libs
importLib("ToolType", "*");
importLib("energylib", "*");
//blocks vars

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var BLOCK_LOW_LIGHT = Block.createSpecialType({
    lightlevel: 9,
    opaque: true});

var BLOCK_LOWEST_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    opaque: true});

var GLASS_TYPE = Block.createSpecialType({
    base: 20,
    destroytime: 3,
    opaque: false,
    lightopacity: 0});
//Ore(A&R)
//silverincludes
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilver, 3);
Block.setDestroyLevel("oreSilver", 3);
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
//F
IDRegistry.genBlockID("oreSilverf");
Block.createBlock("oreSilverf", [
    {name: "Silver Ore fiery", texture: [["ore_silverf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverf, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverf, 3);
Block.setDestroyLevel("oreSilverf", 3);
Recipes.addFurnace(BlockID.oreSilverf, ItemID.ingotSilver, 0);
//G
IDRegistry.genBlockID("oreSilverg");
Block.createBlock("oreSilverg", [
    {name: "Silver Ore gloomy", texture: [["ore_silverg", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverg, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverg, 3);
Block.setDestroyLevel("oreSilverg", 3);
Recipes.addFurnace(BlockID.oreSilverg, ItemID.ingotSilver, 0);
//I
IDRegistry.genBlockID("oreSilveri");
Block.createBlock("oreSilveri", [
    {name: "Silver Ore icy", texture: [["ore_silveri", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilveri, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilveri, 3);
Block.setDestroyLevel("oreSilveri", 3);
Recipes.addFurnace(BlockID.oreSilveri, ItemID.ingotSilver, 0);
//l
IDRegistry.genBlockID("oreSilverl");
Block.createBlock("oreSilverl", [
    {name: "Silver Ore lively", texture: [["ore_silverl", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverl, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverl, 3);
Block.setDestroyLevel("oreSilverl", 3);
Recipes.addFurnace(BlockID.oreSilverl, ItemID.ingotSilver, 0);
//n
IDRegistry.genBlockID("oreSilvern");
Block.createBlock("oreSilvern", [
    {name: "Silver Ore Nether", texture: [["ore_silvern", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilvern, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvern, 3);
Block.setDestroyLevel("oreSilvern", 3);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
//e
IDRegistry.genBlockID("oreSilvere");
Block.createBlock("oreSilvere", [
    {name: "End Silver Ore", texture: [["ore_silvere", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilvere, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvere, 3);
Block.setDestroyLevel("oreSilvere", 3);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);

IDRegistry.genBlockID("FQuartzOre");
Block.createBlock("FQuartzOre", [
{name: "Fiery Quartz Ore", texture: [["FieryQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.FQuartzOre, "stone");
Block.setDestroyLevel("FQuartzOre", 3);

IDRegistry.genBlockID("GQuartzOre");
Block.createBlock("GQuartzOre", [
{name: "Gloomy Quartz Ore", texture: [["GloomyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.GQuartzOre, "stone");
Block.setDestroyLevel("GQuartzOre", 3);

IDRegistry.genBlockID("IQuartzOre");
Block.createBlock("IQuartzOre", [
{name: "Icy Quartz Ore", texture: [["IcyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IQuartzOre, "stone");
Block.setDestroyLevel("IQuartzOre", 3);

IDRegistry.genBlockID("LQuartzOre");
Block.createBlock("LQuartzOre", [
{name: "Lively Quartz Ore", texture: [["LivelyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.LQuartzOre, "stone");
Block.setDestroyLevel("LQuartzOre", 3);

IDRegistry.genBlockID("AmethystOre");
Block.createBlock("AmethystOre", [
{name: "Nether Amethyst ore", texture: [["AmethystOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystOre, "stone");
Block.setDestroyLevel("AmethystOre", 3);

IDRegistry.genBlockID("RimeOre");
Block.createBlock("RimeOre", [
{name: "Rime ore", texture: [["RimeOre", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeOre, "stone");
Block.setDestroyLevel("RimeOre", 3);

IDRegistry.genBlockID("NethRimeOre");
Block.createBlock("NethRimeOre", [
{name: "Nether Rime ore", texture: [["NethRimeOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.NethRimeOre, "stone");
Block.setDestroyLevel("NethRimeOre", 3);
//blockBasalt

IDRegistry.genBlockID("BasaltBlock");
Block.createBlock("BasaltBlock", [
{name: "Basalt Block", texture: [["Basalt", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltBlock, "stone", 2, true);
Block.setDestroyLevel("BasaltBlock", 3);
Block.setDestroyTime(BlockID.BasaltBlock, 5);

IDRegistry.genBlockID("BasaltBrick");
Block.createBlock("BasaltBrick", [
{name: "Basalt Brick", texture: [["BasaltBrick", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltBrick, "stone", 2, true);
Block.setDestroyLevel("BasaltBrick", 3);
Block.setDestroyTime(BlockID.BasaltBrick, 5);

IDRegistry.genBlockID("BasaltSmooth");
Block.createBlock("BasaltSmooth", [
{name: "Basalt Smooth", texture: [["BasaltSmooth", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltSmooth, "stone", 2, true);
Block.setDestroyLevel("BasaltSmooth", 3);
Block.setDestroyTime(BlockID.BasaltSmooth, 5);

IDRegistry.genBlockID("BasaltPillar");
Block.createBlockWithRotation("BasaltPillar", [
{name: "Basalt Pillar", texture: [["BasaltPillarTop", 0], ["BasaltPillarTop", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltPillar, "stone", 2, true);
Block.setDestroyLevel("BasaltPillar", 3);
Block.setDestroyTime(BlockID.BasaltPillar, 5);
//block(A&R)

IDRegistry.genBlockID("WormI");
Block.createBlock("WormI", [
{name: "Worm Iron", texture: [["WormIron", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.WormI, "stone", 2, true);
Block.setDestroyLevel("WormI", 2);
Block.setDestroyTime(BlockID.WormI, 4);

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x + 0.5, ent.y - 1, ent.z + 0.5);
if(block == BlockID.WormI){
Entity.setFire(Player.get(), 155);    
}
});

IDRegistry.genBlockID("AmethystBlock");
Block.createBlock("AmethystBlock", [
{name: "Amethyst Block", texture: [["AmethystBlock", 0]], inCreative: true}
], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystBlock, "stone", 2, true);
Block.setDestroyLevel("AmethystBlock", 3);
Block.setDestroyTime(BlockID.AmethystBlock, 4);

IDRegistry.genBlockID("soulGlass");
Block.createBlock("soulGlass", [
{name: "Soul Glass", texture: [["SoulGalss", 0]], inCreative: true}
], GLASS_TYPE);

IDRegistry.genBlockID("FBIce");
Block.createBlock("FBIce", [
{name: "Frost Burn Ice", texture: [["FBIce", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.FBIce, "stone", 2, true);

IDRegistry.genBlockID("RimeBlock");
Block.createBlock("RimeBlock", [
{name: "Rime Block", texture: [["RimeBlock", 0]], inCreative: true}], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeBlock, "stone", 2, true);
Block.setDestroyLevel("RimeBlock", 3);

//NewN
IDRegistry.genBlockID("Netf");
Block.createBlock("Netf", [
{name: "Netherrack fiery Block", texture: [["NetherrackFiery", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netf, "stone", 2, true);
Block.setDestroyLevel("Netf", 3);

IDRegistry.genBlockID("Netg");
Block.createBlock("Netg", [
{name: "Netherrack gloomy Block", texture: [["NetherrackGloomy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netg, "stone", 2, true);
Block.setDestroyLevel("Netg", 3);

IDRegistry.genBlockID("Neti");
Block.createBlock("Neti", [
{name: "Netherrack icy Block", texture: [["NetherrackIcy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Neti, "stone", 2, true);
Block.setDestroyLevel("Neti", 3);

IDRegistry.genBlockID("Netl");
Block.createBlock("Netl", [
{name: "Netherrack lively Block", texture: [["NetherrackLively", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netl, "stone", 2, true);
Block.setDestroyLevel("Netl", 3);

IDRegistry.genBlockID("SmNetherrack");
Block.createBlock("SmNetherrack", [
{name: "Smooth Netherrack Block", texture: [["SmoothNetherrack", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SmNetherrack", 3);

IDRegistry.genBlockID("SSmNetherrack");
Block.createBlockWithRotation("SSmNetherrack", [
{name: "Slab Smooth Netherrack", texture: [["SmoothNetherrack", 0], ["SmoothNetherrack", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SSmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SSmNetherrack", 3);
        
IDRegistry.genBlockID("PiNetherrack");
Block.createBlockWithRotation("PiNetherrack", [
{name: "Pillar Netherrack", texture: [["PillarNetherrackTop", 0], ["PillarNetherrackTop", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.PiNetherrack, "stone", 2, true);
Block.setDestroyLevel("PiNetherrack", 3);    

IDRegistry.genBlockID("WitherBoneBlock");
Block.createBlockWithRotation("WitherBoneBlock", [
{name: "Wither Bone Block", texture: [["CharredBoneBlockTop", 0], ["CharredBoneBlockTop", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WitherBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WitherBoneBlock", 3);

IDRegistry.genBlockID("WBoneBlock");
Block.createBlockWithRotation("WBoneBlock", [
{name: "Bone Block", texture: [["BoneBlockTop", 0], ["BoneBlockTop", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WBoneBlock", 2);
    
//NewNM

IDRegistry.genBlockID("Hyphae");
Block.createBlockWithRotation("Hyphae", [
{name: "Nether Hypahen", texture: [["NetherrackLively", 0], ["Hyphae_Top", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Hyphae, "dirt", 2, true);
Block.setDestroyLevel("Hyphae", 3);

//NewNB
IDRegistry.genBlockID("NBf");
Block.createBlock("NBf", [
{name: "Nether brick fiery Block", texture: [["NetherBrickFieryB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBf, "stone", 2, true);
Block.setDestroyLevel("NBf", 3);

IDRegistry.genBlockID("NBg");
Block.createBlock("NBg", [
{name: "Nether brick gloomy Block", texture: [["NetherBrickGloomyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBg, "stone", 2, true);
Block.setDestroyLevel("NBg", 3);

IDRegistry.genBlockID("NBi");
Block.createBlock("NBi", [
{name: "Nether brick icy Block", texture: [["NetherBrickIcyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBi, "stone", 2, true);
Block.setDestroyLevel("NBi", 3);

IDRegistry.genBlockID("NBl");
Block.createBlock("NBl", [
{name: "Nether brick lively Block", texture: [["NetherBrickLivelyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBl, "stone", 2, true);
Block.setDestroyLevel("NBl", 3);
//convertor

IDRegistry.genBlockID("metalConvertor");
Block.createBlockWithRotation("metalConvertor", [
{name: "Metal Convertor", texture: [["machine_bottom", 0], ["machine_top", 0], ["machine_side", 0], ["convertor_front", 0], ["machine_side", 0], ["machine_side", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.metalConvertor, "stone", 2, true);
Block.setDestroyLevel("metalConvertor", 3);

//DROP

Block.registerDropFunction("FQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});
 
 Block.registerDropFunction("GQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("IQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("LQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("AmethystOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.Amethyst, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("RimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});


Block.registerDropFunction("NBf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBi", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBi, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Neti", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Neti, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBlock", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBlock, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBrick", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBrick, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltSmooth", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltSmooth, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltPillar", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.BasaltPillar, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NethRimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});




// file: NXitems/NXarmor.js

IDRegistry.genItemID("DBoneHelm");
Item.createArmorItem("DBoneHelm", "Wither bone helmet", {name: "HelmetBoneWithered"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/WitheredA_1.png", isTech:false});

IDRegistry.genItemID("DBoneCh");
Item.createArmorItem("DBoneCh", "Wither bone chestplate", {name: "ChestplateBoneWithered"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/WitheredA_1.png", isTech:false});

IDRegistry.genItemID("DBoneLeg");
Item.createArmorItem("DBoneLeg", "Wither bone leggins", {name: "LeggingsBoneWithered"}, {type: "leggings", armor: 3, durability:120, texture: "armor/WitheredA_2.png", isTech:false});

IDRegistry.genItemID("DBoneBoot");
Item.createArmorItem("DBoneBoot", "Wither bone boots", {name: "BoneWitheredBoots"}, {type: "boots", armor: 2, durability: 104, texture: "armor/WitheredA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.DBoneHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.Witherbone, 0]);

IDRegistry.genItemID("SalBHelm");
Item.createArmorItem("SalBHelm", "Black Salamander helmet", {name: "HideSalamanderHelmetBlack"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/HideSalamanderBA_1.png", isTech:false});

IDRegistry.genItemID("SalBCh");
Item.createArmorItem("SalBCh", "Black Salamander chestplate", {name: "HideSalamanderChestplateBlack"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/HideSalamanderBA_1.png", isTech:false});

IDRegistry.genItemID("SalBLeg");
Item.createArmorItem("SalBLeg", "Black Salamander leggins", {name: "HideSalamanderLegginsBlack"}, {type: "leggings", armor: 3, durability: 120, texture: "armor/HideSalamanderBA_2.png", isTech:false});

IDRegistry.genItemID("SalBBoot");
Item.createArmorItem("SalBBoot", "Black Salamander boots", {name: "HideSalamanderBootsBlack"}, {type: "boots", armor: 2, durability: 104, texture: "armor/HideSalamanderBA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.SalBHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.HideBl, 0]);

IDRegistry.genItemID("SalOrHelm");
Item.createArmorItem("SalOrHelm", "Orange Salamander helmet", {name: "HideSalamanderHelmetOrange"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/HideSalamanderOA_1.png", isTech:false});

IDRegistry.genItemID("SalOrCh");
Item.createArmorItem("SalOrCh", "Orange Salamander chestplate", {name: "HideSalamanderChestplateOrange"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/HideSalamanderOA_1.png", isTech:false});

IDRegistry.genItemID("SalOrLeg");
Item.createArmorItem("SalOrLeg", "Orange Salamander leggins", {name: "HideSalamanderLegginsOrange"}, {type: "leggings", armor: 3, durability:
 120, texture: "armor/HideSalamanderOA_2.png", isTech:false});

IDRegistry.genItemID("SalOrBoot");
Item.createArmorItem("SalOrBoot", "Orange Salamander boots", {name: "HideSalamanderBootsOrrange"}, {type: "boots", armor: 2, durability: 104, texture: "armor/HideSalamanderOA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.SalOrHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.HideSo, 0]);

IDRegistry.genItemID("WHITEHelm");
Item.createArmorItem("WHITEHelm", "White bone helmet", {name: "HelmetWhite"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/WhiteBone_1.png", isTech:false});

IDRegistry.genItemID("WHITECh");
Item.createArmorItem("WHITECh", "White bone chestplate", {name: "ChestplateWhite"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/WhiteBone_1.png", isTech:false});

IDRegistry.genItemID("WHITELeg");
Item.createArmorItem("WHITELeg", "White bone leggins", {name: "LeggignsWhite"}, {type: "leggings", armor: 3, durability: 120, texture: "armor/WhiteBone_2.png", isTech:false});

IDRegistry.genItemID("WHITEBoot");
Item.createArmorItem("WHITEBoot", "White bone boots", {name: "WhiteBoots"}, {type: "boots", armor: 2, durability: 104, texture: "armor/WhiteBone_1.png", isTech:false});

Recipes.addShaped({id: ItemID.WHITEHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', 352, 0]);
 

Recipes.addShaped({id: ItemID.WHITECh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.WHITELeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.WHITEBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', 352, 0]);

IDRegistry.genItemID("silverHelmet");
IDRegistry.genItemID("silverChestplate");
IDRegistry.genItemID("silverLeggings");
IDRegistry.genItemID("silverBoots");

Item.createArmorItem("silverHelmet", "Silver Helmet", {name: "silver_helmet"}, {type: "helmet", armor: 4, durability: 273, texture: "armor/silver_1.png"});
Item.createArmorItem("silverChestplate", "Silver Chestplate", {name: "silver_chestplate"}, {type: "chestplate", armor: 7, durability: 315, texture: "armor/silver_1.png"});
Item.createArmorItem("silverLeggings", "Silver Leggings", {name: "silver_leggings"}, {type: "leggings", armor: 6, durability: 203, texture: "armor/silver_2.png"});
Item.createArmorItem("silverBoots", "Silver Boots", {name: "silver_boots"}, {type: "boots", armor: 2, durability: 190, texture: "armor/silver_1.png"});

Recipes.addShaped({id: ItemID.silverHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.ingotSilver, 0]);




// file: NXitems/NXfood.js

IDRegistry.genItemID("Emcream");
Item.createFoodItem("Emcream", "Congealed Magma", {name: "EtableMagmaCream", meta: 0},{isTech:false,stack: 64,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.Emcream){
Entity.addEffect(Player.get(), 12, 0, 1200, false,false);
}});

IDRegistry.genItemID("EnMushroom");
Item.createFoodItem("EnMushroom", "Enoki Mushroom", {name: "MushroomEnoki", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.EnMushroom){
Entity.clearEffects(Player.get());
}});

IDRegistry.genItemID("GhastM");
Item.createFoodItem("GhastM", "Ghast Meat raw", {name: "GhastMeatRaw", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.GhastM){
Entity.addEffect(Player.get(), 19, 0, 1200, false,false);
}});

IDRegistry.genItemID("GhastMc");
Item.createFoodItem("GhastMc", "Ghast Meat cooked", {name: "GhastMeatCooked", meta: 0},{isTech:false,stack: 64,food: 9});

Recipes.addFurnace(378, 0, ItemID.Emcream, 0);
Recipes.addFurnace(ItemID.GhastM, ItemID.GhastMc, 0);


IDRegistry.genItemID("appleSilver");
Item.createFoodItem("appleSilver", "Apple Silver", {name: "apple_silver", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.appleSilver){
Entity.addEffect(Player.get(), 11, 3, 600, false,false);
Entity.addEffect(Player.get(), 22, 2, 600, false,false);
}});

IDRegistry.genItemID("carrotSilver");
Item.createFoodItem("carrotSilver", "Carrot Silver", {name: "carrot_silver", meta: 0},{isTech:false,stack: 64,food: 6});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.appleSilver){
Entity.addEffect(Player.get(), 11, 3, 250, false,false);
}});





// file: NXitems/NXtools.js

ToolAPI.addToolMaterial("DBonesw", {durability: 512, level: 3, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("DBonesh", {durability: 512, level: 2, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonep", {durability: 512, level: 3, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBoneaxe", {durability: 512, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonehoe", {durability: 512, level: 2, efficiency: 4, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Bonesw", {durability: 350, level: 3, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("Bonesh", {durability: 350, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonep", {durability: 350, level: 3, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Boneaxe", {durability: 350, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonehoe", {durability: 350, level: 2, efficiency: 3, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Destroyer", {durability: 520, level: 2, efficiency: 3, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("ChDestroyer", {durability: 610, level: 2, efficiency: 3, damage: 12, enchantability: 14});
//items(tools)
IDRegistry.genItemID("GBSword");
Item.createItem("GBSword", "Golden Bone Sword", {name: "BoneWitheredSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBSword, true);

Recipes.addShaped({id: ItemID.GBSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBSword, "DBonesw", ToolType.sword);

IDRegistry.genItemID("GBShovel");
Item.createItem("GBShovel", "Golden Bone Shovel", {name: "BoneWitheredShovel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBShovel, true);

Recipes.addShaped({id: ItemID.GBShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBShovel, "DBonesh", ToolType.shovel);

IDRegistry.genItemID("GBPickaxe");
Item.createItem("GBPickaxe", "Golden Bone Pickaxe", {name: "BoneWitheredPickaxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBPickaxe, true);

Recipes.addShaped({id: ItemID.GBPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBPickaxe, "DBonep", ToolType.pickaxe);

IDRegistry.genItemID("GBAxe");
Item.createItem("GBAxe", "Golden Bone Axe", {name: "BoneWitheredAxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBAxe, true);
Recipes.addShaped({id: ItemID.GBAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBAxe, "DBoneaxe", ToolType.axe);

IDRegistry.genItemID("GBHoe");
Item.createItem("GBHoe", "Golden Bone Hoe", {name: "BoneWitheredHoe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBHoe, true);
Recipes.addShaped({id: ItemID.GBHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBHoe, "DBonehoe", ToolType.hoe);

IDRegistry.genItemID("BSword");
Item.createItem("BSword", "Bone Sword", {name: "BoneSword", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BSword, true);

Recipes.addShaped({id: ItemID.BSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BSword, "Bonesw", ToolType.sword);

IDRegistry.genItemID("BShovel");
Item.createItem("BShovel", "Bone Shovel", {name: "BoneShovel", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BShovel, true);

Recipes.addShaped({id: ItemID.BShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BShovel, "Bonesh", ToolType.shovel);

IDRegistry.genItemID("BPickaxe");
Item.createItem("BPickaxe", "Bone Pickaxe", {name: "BonePickaxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BPickaxe, true);

Recipes.addShaped({id: ItemID.BPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BPickaxe, "Bonep", ToolType.pickaxe);

IDRegistry.genItemID("BAxe");
Item.createItem("BAxe", "Bone Axe", {name: "BoneAxe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BAxe, true);
Recipes.addShaped({id: ItemID.BAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BAxe, "Boneaxe", ToolType.axe);

IDRegistry.genItemID("BHoe");
Item.createItem("BHoe", "Bone Hoe", {name: "BoneHoe", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.BHoe, true);
Recipes.addShaped({id: ItemID.BHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolAPI.setTool(ItemID.BHoe, "Bonehoe", ToolType.hoe);

IDRegistry.genItemID("RCSteel");
Item.createItem("RCSteel", "Rime Crystal Steel", {name: "RimeCrystalSteel", meta: 0}, {stack: 4});
Item.setToolRender(ItemID.RCSteel, true);
Recipes.addShaped({id: ItemID.RCSteel, count: 1, data: 0}, [
 "ooo",
 "odc",
 "ooo"
], ["c", ItemID.RimeCryst, 0, "d", 259, 0]);

Item.registerUseFunction("RCSteel", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  //PlaySoundFile("ignite.ogg")
  World.setBlock(place.x, place.y, place.z, BlockID.BlueFire);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

IDRegistry.genItemID("GBhammer");
Item.createItem("GBhammer", "Sleeping destroyer of the worlds", {name: "BoneWitheredHammer", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBhammer, true);
Recipes.addShaped({id: ItemID.GBhammer, count: 1, data: 0}, [
 "ccc",
 "cdc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolAPI.setTool(ItemID.GBhammer, "Destroyer", ToolType.sword);

IDRegistry.genItemID("GBChammer");
Item.createItem("GBChammer", "Destroyer of the worlds", {name: "BoneHammerCh", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.GBChammer, true);
Recipes.addShaped({id: ItemID.GBChammer, count: 1, data: 0}, [
 "ooo",
 "cdo",
 "ooo"
], ["c", ItemID.GBhammer , 0, "d", ItemID.RCSteel, 0]);

ToolAPI.setTool(ItemID.GBChammer, "ChDestroyer", ToolType.sword);

IDRegistry.genItemID("silverSword");
IDRegistry.genItemID("silverShovel");
IDRegistry.genItemID("silverPickaxe");
IDRegistry.genItemID("silverAxe");
IDRegistry.genItemID("silverHoe");
Item.createItem("silverSword", "Silver Sword", {name: "silver_sword", meta: 0}, {stack: 1});
Item.createItem("silverShovel", "Silver Shovel", {name: "silver_shovel", meta: 0}, {stack: 1});
Item.createItem("silverPickaxe", "Silver Pickaxe", {name: "silver_pickaxe", meta: 0}, {stack: 1});
Item.createItem("silverAxe", "Silver Axe", {name: "silver_axe", meta: 0}, {stack: 1});
Item.createItem("silverHoe", "Silver Hoe", {name: "silver_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("silver", {durability: 526, level: 3, efficiency: 8, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.silverSword, "silver", ToolType.sword);
ToolAPI.setTool(ItemID.silverShovel, "silver", ToolType.shovel);
ToolAPI.setTool(ItemID.silverPickaxe, "silver", ToolType.pickaxe);
ToolAPI.setTool(ItemID.silverAxe, "silver", ToolType.axe);
ToolAPI.setTool(ItemID.silverHoe, "silver", ToolType.hoe);


Recipes.addShaped({id: ItemID.silverSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);




// file: NXblocks/swire.js

var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var CRAFTING_TOOL_MAX_DAMAGE = 96;

IDRegistry.genItemID("craftingHammer");
Item.createItem("craftingHammer", "Forge Hammer", {name: "crafting_hammer"}, {stack: 1});
Item.setMaxDamage(ItemID.craftingHammer, CRAFTING_TOOL_MAX_DAMAGE);

IDRegistry.genItemID("craftingCutter");
Item.createItem("craftingCutter", "Cutter", {name: "crafting_cutter"}, {stack: 1});
Item.setMaxDamage(ItemID.craftingCutter, CRAFTING_TOOL_MAX_DAMAGE);

function addRecipeWithCraftingTool(result, data, tool){
    data.push({id: tool, data: -1});
    Recipes.addShapeless(result, data, function(api, field, result){
        for (var i in field){
            if (field[i].id == tool){
                field[i].data++;
                if (field[i].data >= CRAFTING_TOOL_MAX_DAMAGE){
                    field[i].id = field[i].count = field[i].data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}

IDRegistry.genBlockID("cableSilver");
Block.createBlock("cableSilver", [
    {name: "tile.cableSilver.name", texture: [["cable_block_silver", 0]], inCreative: false}]);

function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

function setupBlockAsWire(id) {
    EU.registerWire(id);
}    

setupBlockAsWire(BlockID.cableSilver);
setupWireRender(BlockID.cableSilver, 3/8, "ic-wire");

IDRegistry.genItemID("cableSilver0");
IDRegistry.genItemID("cableSilver1");
Item.createItem("cableSilver0", "Silver Cable", {name: "cable_silver", meta: 0});
Item.createItem("cableSilver1", "Silver Cable (insulated)", {name: "cable_silver", meta: 1});
Callback.addCallback("PostLoaded", function(){
addRecipeWithCraftingTool({id: ItemID.cableSilver0, count: 4, data: 0}, [{id: ItemID.plateSilver, data: 0}], ItemID.craftingCutter);
addRecipeWithCraftingTool({id: ItemID.casingSilver, count: 4, data: 0}, [{id: ItemID.plateSilver, data: 0}], ItemID.craftingHammer);
addRecipeWithCraftingTool({id: ItemID.plateSilver, count: 4, data: 0}, [{id: ItemID.ingotSilver, data: 0}], ItemID.craftingHammer);        
});

Recipes.addShaped({id: ItemID.cableSilver1, count: 1, data: 0}, [
 "ooo",
 "dco",
 "ooo"
 ], ["c", ItemID.cableSilver0, 0, "d", ItemID.rubber, 0]);

Item.registerUseFunction("cableSilver1", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.cableSilver);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        EnergyTypeRegistry.onWirePlaced();
    }
});

Block.registerDropFunction("cableSilver", function(){

    return [[ItemID.cableSilver1, 1, 0]];
});




// file: Irecipes.js

Recipes.addShaped({id: ItemID.BackCryst, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["d", ItemID.RimeCryst, 0, "c", ItemID.Amethyst, 0]);

Recipes.addFurnaceFuel(ItemID.SItem, 200);
Recipes.addFurnaceFuel(ItemID.Netherbrickf, 1200);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.WitherBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Witherdust, 0]);

Recipes.addShaped({id: BlockID.WBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: BlockID.PiNetherrack, count: 4, data: 0}, [
    "ooo",
    "oxx",
    "odd"
], ['x', BlockID.SSmNetherrack, 0, 'd', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.SmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', 87, 0]);

Recipes.addShaped({id: BlockID.SSmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.AmethystBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Amethyst, 0]);

Recipes.addShaped({id: BlockID.RimeBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.RimeCryst, 0]);

Recipes.addShaped({id: BlockID.NBf, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Netherbrickf, 0]);

Recipes.addShaped({id: BlockID.NBg, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickGl, 0]);

Recipes.addShaped({id: BlockID.NBi, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickIcy, 0]);

Recipes.addShaped({id: BlockID.NBl, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickLi, 0]);

//FUR
Recipes.addFurnace(88, BlockID.soulGlass, 0);
//FUREND
Recipes.addShaped({id: BlockID.BasaltBrick, count: 1, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBlock, 0]);

Recipes.addShaped({id: BlockID.BasaltSmooth, count: 2, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBrick, 0]);

Recipes.addShaped({id: BlockID.BasaltPillar, count: 4, data: 0}, [
    "ooo",
    "odo",
    "oxo"
], ['x', BlockID.BasaltBrick, 0,'d', BlockID.BasaltSmooth, 0]);

Recipes.addShaped({id: ItemID.convertorSilver, count: 1, data: 0}, [
 "vcv",
 "cdc",
 "vcv"
 ], ["d", ItemID.circuitBasic, 0, "v", ItemID.nuggetSilver, 0, "c", ItemID.cableSilver0, 0]);
 
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);
});




// file: Translation.js

//BLOCKS
Translation.addTranslation("Amethyst Block", {ru: "Аметистовый блок"});
Translation.addTranslation("Worm Iron", {ru: "Раскалённое железо"});
Translation.addTranslation("Nether Amethyst ore", {ru: "Аметистовая руда ада"});
Translation.addTranslation("Nether Rime ore", {ru: "изморозь"});
Translation.addTranslation("Rime ore", {ru: "изморозь"});
Translation.addTranslation("Rime Block", {ru: "блок изморози"});
Translation.addTranslation("Basalt Block", {ru: "Базальт"});
Translation.addTranslation("Basalt Brick", {ru: "Базальтовые кирпичи"});
Translation.addTranslation("Basalt Pillar", {ru: "Базальтовая колонна"});
Translation.addTranslation("Basalt Smooth", {ru: "Полированный Базальт"});
Translation.addTranslation("Soul Glass", {ru: "Стекло душ"});
Translation.addTranslation("Netherrack fiery Block", {ru: "Огненный адский камень"});
Translation.addTranslation("Netherrack gloomy Block", {ru: "Мрачный адский камень"});
Translation.addTranslation("Netherrack icy Block", {ru: "Ледянный адский камень"});
Translation.addTranslation("Netherrack lively Block", {ru: "Живой адский камень"});
Translation.addTranslation("Nether Hypahen", {ru: "Древний мицелий"});
Translation.addTranslation("Nether brick fiery Block", {ru: "Огненные адские кирпичи"});
Translation.addTranslation("Nether brick gloomy Block", {ru: "Мрачные адские кирпичи"});
Translation.addTranslation("Nether brick icy Block", {ru: "Ледянные адские кирпичи"});
Translation.addTranslation("Nether brick lively Block", {ru: "Живые адские кирпичи"});
Translation.addTranslation("Elder Moshroom Stem", {ru: "Грибная ножка"});
Translation.addTranslation("Rad Elder Moshroom Cap", {ru: "Красная древняя шляпка"});
Translation.addTranslation("Brown Elder Moshroom Cap", {ru: "Коричневая древняя шляпка"});
Translation.addTranslation("Mushroom Enoki Cap", {ru: "Спорангий"});
Translation.addTranslation("Enocki Stem", {ru: "Тело плесени"});
Translation.addTranslation("Frost Burn Ice", {ru: "Обжигающе холодный лёд"});
Translation.addTranslation("Slab Smooth Netherrack", {ru: "Плита из гладкого незерака"});
Translation.addTranslation("Smooth Netherrack Block", {ru: "Гладкий незерак"});
Translation.addTranslation("Pillar Netherrack", {ru: "Незераковая колонна"});
Translation.addTranslation("Wither Bone Block", {ru: "Блок иссушенных костей"});
Translation.addTranslation("Bone Block", {ru: "Блок костей"});
//ITEMS
Translation.addTranslation("Golden Bone Pickaxe", {ru: "Костно-золотая кирка"});
Translation.addTranslation("Golden Bone Shovel", {ru: "Костно-золотая лопата"});
Translation.addTranslation("Golden Bone Axe", {ru: "Костно-золотй топор"});
Translation.addTranslation("Golden Bone Hoe", {ru: "Костно-золотая мотыга"});
Translation.addTranslation("Golden Bone Sword", {ru: "Костно-золотй меч"});
Translation.addTranslation("Amethyst Crystal", {ru: "Аметист"});
Translation.addTranslation("Rime Crystal", {ru: "кристал инея"});
Translation.addTranslation("Wither bone", {ru: "Кость Скелета Иссушителя"});
Translation.addTranslation("Wither dust", {ru: "Пыль Иссушения"});
Translation.addTranslation("Nether brick Fiery", {ru: "Огненный Адский кирпич"});
Translation.addTranslation("Black Salamander Hide", {ru: "Чёрная кожа Саламандры"});
Translation.addTranslation("Orange Salamander Hide", {ru: "Рыжая кожа Саламандры"});
Translation.addTranslation("Ghast Quen tears", {ru: "Слёзы Королевы Гастов"});
Translation.addTranslation("Orange Salamander helmet", {ru: "Шлем рыжей саламандры"});
Translation.addTranslation("Black Salamander helmet", {ru: "Шлем чёрной саламандры"});
Translation.addTranslation("Orange Salamander chestplate", {ru: "Нагрудник рыжей саламандры"});
Translation.addTranslation("Black Salamander chestplate", {ru: "Нагрудник чёрной саламандры"});
Translation.addTranslation("Orange Salamander leggins", {ru: "Поножи рыжей саламандры"});
Translation.addTranslation("Black Salamander leggins", {ru: "Поножи чёрной саламандры"});
Translation.addTranslation("Orange Salamander boots", {ru: "Ботинки рыжей саламандры"});
Translation.addTranslation("Black Salamander boots", {ru: "Ботинки чёрной саламандры"});
Translation.addTranslation("Elder Red Moshroom", {ru: "красный древний гриб"});
Translation.addTranslation("Elder Brown Moshroom", {ru: "коричневый древний гриб"});
Translation.addTranslation("Spore", {ru: "Спора"});
Translation.addTranslation("Bone-Spider Fang", {ru: "Клык костяного паука"});
Translation.addTranslation("Nether brick Gloomy", {ru: "Мрачный адский кирпич"});
Translation.addTranslation("Nether brick Icy", {ru: "Ледяной адский кирпич"});
Translation.addTranslation("Nether brick Lively", {ru: "Живой адский кирпич"});
Translation.addTranslation("Wither bone helmet", {ru: "Иссушенный шлем"});
Translation.addTranslation("Wither bone chestplate", {ru: "Иссушенный нагрудник"});
Translation.addTranslation("Wither bone leggins", {ru: "Иссушенные поножи"});
Translation.addTranslation("Wither bone boots", {ru: "Иссушенные ботинки"});
Translation.addTranslation("White bone helmet", {ru: "Костяной шлем"});
Translation.addTranslation("White bone chestplate", {ru: "Костяной нагрудник"});
Translation.addTranslation("White bone leggins", {ru: "Костяные  поножи"});
Translation.addTranslation("White bone boots", {ru: "Костяные ботинки"});
Translation.addTranslation("Congealed Magma", {ru: "Магмовое Желе"});
Translation.addTranslation("Enoki Mushroom", {ru: "Жаренная плесень"});
Translation.addTranslation("Ghast Meat raw", {ru: "Сырой Стейк из гаста"});
Translation.addTranslation("Ghast Meat cooked", {ru: "Стейк из гаста"});
Translation.addTranslation("Rime Crystal Steel", {ru: "Покрытое инеем огниво"});
Translation.addTranslation("Bone Pickaxe", {ru: "Костяная кирка"});
Translation.addTranslation("Bone Shovel", {ru: "Костяная лопата"});
Translation.addTranslation("Bone Axe", {ru: "Костяной топор"});
Translation.addTranslation("Bone Hoe", {ru: "костяная мотыга"});
Translation.addTranslation("Bone Sword", {ru: "Костяной меч"});
Translation.addTranslation("Spore Creeper Egg", {ru: "Яйцо спавна спорового крипера"});
Translation.addTranslation("Sleeping destroyer of the worlds", {ru: "Спящий разрушитель миров"});
Translation.addTranslation("Destroyer of the worlds", {ru: "Разрушитель миров"});
Translation.addTranslation("Back Crystal", {ru: "Кристал возврата"});
Translation.addTranslation("Ember Egg", {ru: "Яйцо спавна тлеющих углей"});
Translation.addTranslation("Salamander Black Egg", {ru: "Яйцо спавна чёрной саламандры"});
Translation.addTranslation("Salamander Orange Egg", {ru: "Яйцо спавна рыжей саламандры"});
Translation.addTranslation("Fiery Quartz Ore", {ru: "Горячая кварцевая руда"});
Translation.addTranslation("Gloomy Quartz Ore", {ru: "Мрачная кварцевая руда"});
Translation.addTranslation("Icy Quartz Ore", {ru: "Ледяная кварцевая руда"});
Translation.addTranslation("Lively Quartz Ore", {ru: "Живая кварцевая руда"});
Translation.addTranslation("Frost Burn Ice", {ru: "Обжигающе холодный лёд"});
//SAfICPE2
Translation.addTranslation("Silver Ore", {ru: "Серебряная руда"});
Translation.addTranslation("Silver Ore Nether", {ru: "Серебряная руда Ада"});
Translation.addTranslation("End Silver Ore", {ru: "Серебряная руда Края"});
Translation.addTranslation("Metal Convertor", {ru: "Преобразователь металлов"});
Translation.addTranslation("Silver Ore fiery", {ru: "Горячая Серебряная руда"});
Translation.addTranslation("Silver Ore gloomy", {ru: "Мрачная Серебряная руда"});
Translation.addTranslation("Silver Ore icy", {ru: "Ледяная Серебряная руда"});
Translation.addTranslation("Silver Ore lively", {ru: "Живая Серебряная руда"});
//ITEMS
Translation.addTranslation("Silver Pickaxe", {ru: "Серебряая кирка"});
Translation.addTranslation("Silver Shovel", {ru: "Серебряная лопата"});
Translation.addTranslation("Silver Axe", {ru: "Серебряный топор"});
Translation.addTranslation("Silver Hoe", {ru: "Серебряная мотыга"});
Translation.addTranslation("Silver Sword", {ru: "Серебряный меч"});
Translation.addTranslation("Silver Cable", {ru: "Серебряный провод"});
Translation.addTranslation("Silver Cable (insulated)", {ru: "Серебряный провод с двойной изоляцией"});
Translation.addTranslation("Apple Silver", {ru: "Серебряное яблоко"});
Translation.addTranslation("Silver Chestplate", {ru: "Серебряный нагрудник"});
Translation.addTranslation("Silver Helmet", {ru: "Серебряный шлем"});
Translation.addTranslation("Silver Leggings", {ru: "Серебряные поножи"});
Translation.addTranslation("Silver Boots", {ru: "Серебряные ботинки"});
Translation.addTranslation("Silver Casing", {ru: "Серебрянная оболочка"});
Translation.addTranslation("Silver Plate", {ru: "Серебрянная пластина"});
Translation.addTranslation("Carrot Silver", {ru: "Серебряная морковь"});
Translation.addTranslation("Silver Nugget", {ru: "Кусочек серебра"});
Translation.addTranslation("Silver Convertor Core", {ru: "Ядро Преобразователя"});
Translation.addTranslation("Advensed Silver Convertor Core", {ru: " Улучшенное Ядро Преобразователя"});




// file: util/toJSON.js

var num = 0;

const GOLD = "§6";
const AQUA = "§b";
const GREEN = "§a";
const RED = "§c";

var x1; var y1; var z1;
var x2; var y2; var z2;

var first = true;

var context = UI.getContext();

IDRegistry.genItemID("Points");
Item.createItem("Points", "Points saver", {name: "point", meta: 0},{isTech:false,stack: 1});
IDRegistry.genItemID("Saver");
Item.createItem("Saver", "Structure saver", {name: "save", meta: 1},{isTech:false,stack: 1});

Callback.addCallback("ItemUse", function (coords,item,block) {
    if(item.id == ItemID.Points){
        if(first){
            x1 = x; 
            y1 = y; 
            z1 = z;

            first = false;
            Game.message(AQUA + "first point set to " + x + ";" + y + ";" + z);
        }
        else{
            x2 = x; 
            y2 = y; 
            z2 = z;     
            first = true;
            Game.message(AQUA + "second point set to " + x + ";" + y + ";" + z);
        }
    }
    else if(item.id == ItemID.Saver){
         Game.message(GOLD + "generating JSON...");
            if(x1 > x2){
                var temp = x1; x1 = x2; x2 = temp;
            }
            if(y1 > y2){
                var temp = y1; y1 = y2; y2 = temp;
            }
            if(z1 > z2){
                var temp = z1; z1 = z2; z2 = temp;
            }           
            saveTiles();
    }
}
);

function saveTiles(){
    var json   = [];
    var ztiles = [];
    var xtiles = [];   

    for(var y = y1; y <= y2; y++){
        for(var x = x1; x <= x2; x++){
            for(var z = z1; z <= z2; z++){
                var obj  = {};
                obj.id   = Level.getTile(x, y, z);
                obj.meta = Level.getData(x, y, z);
                ztiles[z - z1] = obj;
            }
            xtiles[x - x1] = ztiles;
            ztiles = [];
        }
        json[y - y1] = xtiles;
        xtiles = [];
    }
    var string = JSON.stringify(json);
    var file      = __dir__ + "buildings/" + num++ + ".json";
    var f         = new java.io.File(__dir__ + "buildings/");

    if(!f.exists()){
        f.mkdirs();
    }
    try {
        var outputStream = new java.io.FileOutputStream(new java.io.File(file));
        outputStream.write(new java.lang.String(string).getBytes());
        outputStream.close();
        Game.message(GREEN + "Successfully saved to " + file);
        } catch (err) {
            Game.message(RED + "Unable to save file: " + err);
        }
}

    




// file: NXmobs/salamander.js

importLib("AdvancedAI", "*");
var RANDOM_DROP_SB = randomInt(0,3);
var RANDOM_DROP_SO = randomInt(0,3);
//а вот и айди саламандры
var BlackSalamander = MobRegistry.registerEntity("salamander_black");
//яйцо спавна
//внешний вид...
var black_salamander_model = new EntityModel();
BlackSalamander.customizeEvents({
tick: function(){
var black_salamander_texture = new Texture("mob/salamander/salamander_black.png");
black_salamander_texture.setResolution(128, 64);
black_salamander_texture.setPixelScale(2);
black_salamander_model.setTexture(black_salamander_texture);
Entity.setSkin(this.entity, "mob/salamander/salamander_black.png");
Entity.setNameTag(this.entity, "INCOMPLETED");
Entity.setMaxHealth(this.entity, 20);
},
death: function(){
 },
getDrop: function(){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideBl, RANDOM_DROP_SB);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);//звук получения урона как у крипера
}
});
//анимация и рендер
black_salamander_model.createAnimation(16, function(frame) {
var render = new Render();
var partObj = [
{
type: "box",
coords: {
x: 0,
y: 18.5,
z: 8
},
size: {
x: 6,
y: 4,
z: 8
},
uv: {
x: 0,
y: 0
}
}, //голова
{
type: "box",
coords: {
x: 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//правый зуб
{
type: "box",
coords: {
x: - 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//левый зуб
{
type: "box",
coords: {
x: 0,
y: 22.5,
z: 8.5
},
size: {
x: 8,
y: 2.5,
z: 9
},
uv: {
x: 0,
y: 19
},
},//пасть
{
type: "box",
coords: {
x: 0,
y: 19.75,
z: - 3
},
size: {
x: 12,
y: 8,
z: 14
},
uv: {
x: 33,
y: 0
},
},//верхнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 15
},
size: {
x: 10,
y: 6,
z: 10
},
uv: {
x: 0,
y: 0
},
},//нижнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 25
},
size: {
x: 7.5,
y: 3.5,
z: 10
},
uv: {
x: 91,
y: 33
},
},//хвост
];
var position = Math.sin(frame / 16 * Math.PI * 2);
for (var i = 0; i < 1; i++) {
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 8,
y: position * i + 20.65,
z: 0
}
}); //передняя правая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 8,
y: position * i + 20.65,
z: 0
}
}); //передняя левая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя левая лапка
partObj.push({
type: "box",
size: {
x: 4,
y: 7,
z: 4 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя правая лапка
}
render.setPart("head", partObj, {});
return render;
}, 4);
//накладываем модель
BlackSalamander.customizeVisual({
getModels: function() {
return {
"main": black_salamander_model
};
}
});
//хитбоксentityTypeSalamander
BlackSalamander.customizeDescription({
getHitbox: function() {
return {
w: 0.5,
h: 0.5
};
}
});

BlackSalamander.customizeAI({
 getAITypes: function(){
  return {
    wander: {
     type: EntityAI.Wander,

     priority: 4,

     speed: 0.078,

     angular_speed: 0.1,

     delay_weigth: 0.2
    },

    follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

    attack: {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 5,

     attack_range: 1,

     attack_rate: 30
    },
   enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 14 
    }
  }
 }
});

//спавн яйцом
Item.registerUseFunctionForID(ItemID.SalamanderBSEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("salamander_black", coords.x + .5, coords.y + .5, coords.z + .5);
});
//спавн по миру вычеркиваем т.к проверки ещё нет
//MobSpawnRegistry.registerSpawn("salamader_black", .2);
//ORANGE

//а вот и айди саламандры
var OrangeSalamander = MobRegistry.registerEntity("salamander_orange");
//яйцо спавна
//внешний вид...
var orange_salamander_model = new EntityModel();
OrangeSalamander.customizeEvents({
tick: function(){
var orange_salamander_texture = new Texture("mob/salamander/salamander_orange.png");
orange_salamander_texture.setResolution(128, 64);
orange_salamander_texture.setPixelScale(2);
orange_salamander_model.setTexture(orange_salamander_texture);
Entity.setSkin(this.entity, "mob/salamander/salamander_orange.png");
Entity.setNameTag(this.entity, "INCOMPLETED2");
Entity.setMaxHealth(this.entity, 15);
},
death: function(){
 },
getDrop: function(){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideSo, RANDOM_DROP_SO);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);//звук получения урона как у крипера
}
});
//анимация и рендер
orange_salamander_model.createAnimation(16, function(frame) {
var render = new Render();
var partObj = [
{
type: "box",
coords: {
x: 0,
y: 18.5,
z: 8
},
size: {
x: 6,
y: 6,
z: 5
},
uv: {
x: 0,
y: 0
}
}, //голова
{
type: "box",
coords: {
x: 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//правый зуб
{
type: "box",
coords: {
x: - 2.5,
y: 21,
z: 11.5
},
size: {
x: 1,
y: 1,
z: 1
},
uv: {
x: 0,
y: 54
}
},//левый зуб
{
type: "box",
coords: {
x: 0,
y: 22.5,
z: 8.5
},
size: {
x: 7,
y: 3,
z: 6
},
uv: {
x: 0,
y: 19
},
},//пасть
{
type: "box",
coords: {
x: 0,
y: 19.75,
z: - 3
},
size: {
x: 10,
y: 6,
z: 9
},
uv: {
x: 33,
y: 0
},
},//верхнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 15
},
size: {
x: 7,
y: 5,
z: 7
},
uv: {
x: 0,
y: 0
},
},//нижнее тело
{
type: "box",
coords: {
x: 0,
y: 19.5,
z: - 25
},
size: {
x: 7,
y: 3,
z: 5
},
uv: {
x: 91,
y: 33
},
},//хвост
];
var position = Math.sin(frame / 16 * Math.PI * 2);
for (var i = 0; i < 1; i++) {
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 8,
y: position * i + 20.65,
z: 0
}
}); //передняя правая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 8,
y: position * i + 20.65,
z: 0
}
}); //передняя левая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: - 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя левая лапка
partObj.push({
type: "box",
size: {
x: 3,
y: 6,
z: 3 - i
},
uv: {
x: 0,
y: 37
},
coords: {
x: 7,
y: position * i + 20.65,
z: - 15
}
}); //задняя правая лапка
}
render.setPart("head", partObj, {});
return render;
}, 4);
//накладываем модель
OrangeSalamander.customizeVisual({
getModels: function() {
return {
"main": orange_salamander_model
};
}
});
//хитбоксentityTypeSalamander
OrangeSalamander.customizeDescription({
getHitbox: function() {
return {
w: 1.3,
h: 0.4
};
}
});

OrangeSalamander.customizeAI({
 getAITypes: function(){
  return {
    wander: {
     type: EntityAI.Wander,

     priority: 4,

     speed: 0.078,

     angular_speed: 0.1,

     delay_weigth: 0.2
    },

    follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

    attack: {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 3,

     attack_range: 1,

     attack_rate: 30
    },
    
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 12 
   }
  }
 }
});

//спавн яйцом
Item.registerUseFunctionForID(ItemID.SalamanderOSEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("salamander_orange", coords.x + .5, coords.y + .5, coords.z + .5);
});
//спавн по миру вычеркиваем т.к проверки ещё нет
//MobSpawnRegistry.registerSpawn("salamader_black", .2);




// file: NXmobs/sCreeper.js

var Spore_Creeper = MobRegistry.registerEntity("spore_creeper");

Spore_Creeper.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 24);
  Entity.setSkin(this.entity, "mob/spore_creeper.png");
  Entity.setNameTag(this.entity, "Spore Creeper");
  Entity.setMaxHealth(this.entity, 20);
 },
death: function(){
//AdvancedAI.addExpAtEntity(this.entity, 6);
 },
getDrop: function(){
var RANDOM_DROP_SC = randomInt(0,4);
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.HideBl, RANDOM_DROP_SC);
 },
 attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1);
 }
});

Spore_Creeper.customizeDescription({
  getHitbox: function(){
  return {w: 1, h: 2}
 }
});

Spore_Creeper.customizeAI({
 getAITypes: function(){
  return {
    wander: {
     type: EntityAI.Wander,

     priority: 4,

     speed: 0.080,

     angular_speed: 0.1,

     delay_weigth: 0.2
    },

    follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.3,

     rotateHead: true
    },

    attack: {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 5,

     attack_range: 1,

     attack_rate: 32
    },
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "attack",
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 18 
    }
  }
 }
});

//spawn from egg
Item.registerUseFunctionForID(ItemID.SporeCreeperEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("spore_creeper", coords.x + .5, coords.y + .5, coords.z + .5);
});


IDRegistry.genItemID("BowmanEgg");
Item.createItem("BowmanEgg", "Bowman Egg", {name: "SporeCreeperEgg", meta: 0},{isTech:false,stack: 64});

var SurvivedBowman = MobRegistry.registerEntity("survivorbow");
SurvivedBowman.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);//render
  Entity.setSkin(this.entity, "mob/survivor/survived.png");//skin
  Entity.setNameTag(this.entity,"Bowman");//name
  Entity.setCarriedItem(this.entity, 261, 1, 0);//лук в руках
  Entity.setArmorSlot(this.entity, 0, 306, 1, 0);//шлем железный
 },
death: function(){
//AdvancedAI.addExpAtEntity(this.entity, 5);
 },
getDrop: function(){
var r = randomInt(0,1);
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, 261, r);
},
attackedBy: function(attacker, amount){
//World.playSoundAtEntity(this.entity, "mob.creeper.say1", 1, 1); ne rabotaet
 }
});

SurvivedBowman.customizeDescription({
  getHitbox: function(){
  return {w: 1, h: 2}
 }
});//hitbox

SurvivedBowman.customizeAI({
getAITypes: function(){ 
return { 
wander: { 
type: EntityAI.Wander, 

priority: 4,
 
speed: 0.09,
 
angular_speed: 0.1, 

delay_weigth: 0.2 
}, 

follow: { 
type: EntityAI.Follow,
 
priority: 0, 

speed: 0.05,
 
rotateHead: true 
}, 

shoot: {
     type: AdvancedAI.Shooting,//стрельба
     
   ammo_type: Native.EntityType.ARROW,//ентити которым стрелять
   
   shoot_speed: 35,//время в тиках через которое стрелять
   
   projectile_speed: 0.2,//скорость снаряда
   priority: 0
    },/*
swim: { 
type: EntityAI.Swim,//собственно плавание 
}*/   
    enemy_watcher: {
     type: AdvancedAI.EnemyWatcher,
     
     attackAI: "shoot",//название атаки поменялось на стрельбу
     
     followAI: "follow",
     
     find_delay: 20,
     
     priority_on_attack: 5,
     
     priority_on_idle: 0,
     
     feelingModifier: 18 
   } 
} 
} 
});//AI

Item.registerUseFunctionForID(ItemID.BowmanEgg, function(coords, item, block) {
coords = coords.relative;
Entity.spawnCustom("survivorbow", coords.x + .5, coords.y + .5, coords.z + .5);//спавн лучника
});




// file: NXblocks/NXgeneration.js

//generation
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 40; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.AmethystOre, 0, randomInt(1, 6));
}});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 38; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 150);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.NethRimeOre, 0, randomInt(1, 6));
}});
//SAfICPE²
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){
for(var i = 0; i < 26; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 6, 82);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilver, 0, randomInt(1, 6));
}});
//nether
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 36; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 122);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilvern, 0, randomInt(1, 6));
}});
//end
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){
for(var i = 0; i < 32; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 90);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilvere, 0, randomInt(1, 6));
}});
//other things
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
   for(var i = 0; i < 23; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,3,123); 
               for(var k=2;k<130;k++){ 
                                           if(World.getBlockID(coords.x,k,coords.z)==88){return                World.setBlock(coords.x,k+1,coords.z,BlockID.redmoShroomSmall,0); 
           } 
        } 
     }
});   
  
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 1; i < 21; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,5,123); 
               for(var k=2;k<130;k++){ 
                                             if(World.getBlockID(coords.x,k,coords.z)==88){return              World.setBlock(coords.x,k+1,coords.z,BlockID.bmoShroomSmall,0); 
           }
        } 
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 23; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,23,168); 
               for(var k=2;k<130;k++){ 
                                             if(World.getBlockID(coords.x,k+1,coords.z)!=0){return              World.setBlock(coords.x,k+1,coords.z,BlockID.ThornstalkTB,0); 
           }
        } 
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 21; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,23,168); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.setGrass({x: coords.x, y: k+1, z: coords.z, setInRadiuse:false, radiuse:3});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 18; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,20,172); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.generateBrownMoshroom({x: coords.x, y: k+1, z: coords.z});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
            for(var i = 0; i < 15; i++){ 
              var coords=GenerationUtils.randomCoords(chunkX,chunkZ,20,172); 
               for(var k=2;k<130;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==88){                            
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return              structureGenerationHelper.generateRedMoshroom({x: coords.x, y: k+1, z: coords.z});
 
           }
        } 
     } 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
for(var i = 0; i < 23; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 2, 182);
     GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.BasaltBlock, 0, randomInt(3, 9));
          } 
});




