function APGEM_ALTAR_MODEL(id,data,texture){
    var render = new ICRender.Model();
    var model = new BlockRenderer.Model();
    model.addBox(0.0625*5 ,0.0625*15,0.0625*5 ,0.0625*11,0.0625*16,0.0625*11,id,data);
    model.addBox(0.0625   ,0.0625*12,0.0625   ,0.0625*15,0.0625*15,0.0625*15,id,data);
    model.addBox(0.0625*12,0.0625*11,0.0625*12,0.0625*16,0.0625*16,0.0625*16,id,data);
    model.addBox(0        ,0.0625*11,0.0625*12,0.0625*4 ,0.0625*16,0.0625*16,id,data);
    model.addBox(0.0625*12,0.0625*11,0        ,0.0625*16,0.0625*16,0.0625*4 ,id,data);
    model.addBox(0        ,0.0625*11,0        ,0.0625*4 ,0.0625*16,0.0625*4 ,id,data);
    model.addBox(0.0625*6,0.0625*2 ,0.0625*6,0.0625*10,0.0625*11,0.0625*10,texture);
    model.addBox(0.0625  ,0        ,0.0625  ,0.0625*15,0.0625   ,0.0625*15,texture);
    model.addBox(0.0625*3,0.0625   ,0.0625*3,0.0625*13,0.0625*2 ,0.0625*13,texture);
    model.addBox(0.0625*5,0.0625*11,0.0625*5,0.0625*11,0.0625*12,0.0625*11,texture);
    render.addEntry(model);
    BlockRenderer.enableCoordMapping(id,data,render);
}

// [远古祭坛]Ancient Altar
IDRegistry.genBlockID("ancientAltar");
Block.createBlock("ancientAltar",[
    {name:"Ancient Altar",texture:[["ancient_altar",0],["ancient_altar",1],["ancient_altar",2]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.ancientAltar,"stone",1,true);
APGEM_ALTAR_MODEL(BlockID.ancientAltar,0,[["ancient_altar",0]]);

World.addGenerationCallback("GenerateChunk",function(chunkX,chunkZ,random){
    if(chunkX%10 == 0 && chunkZ%10 == 0){
        var coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16),96,chunkZ*16 + random.nextInt(16));
        if(World.isAirBlock(coords.x,coords.y + 1,coords.z)){
            World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.ancientAltar,0);
            
            for(let i = 0;i < random.nextInt(8);i++){
                var coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16),96,chunkZ*16 + random.nextInt(16));
                World.setBlock(coords.x,coords.y,coords.z,BlockID.ancientBricks,0);
            }
        }
    }
});

SPECIAL_BLOCK_ID[BlockID.ancientAltar] = true;
Block.registerPlaceFunction("ancientAltar",function(coords,item,block){
    if(SPECIAL_BLOCK_ID[block.id]){
        Game.prevent();
        return false;
    }

    var place = coords;
    if(!World.canTileBeReplaced(block.id,block.data)){
        place = coords.relative;
        block = World.getBlock(place.x,place.y,place.z);
        if(!World.canTileBeReplaced(block.id,block.data)) return;
    }
    
    World.setBlock(place.x,place.y,place.z,item.id,item.data);
    var tile = World.addTileEntity(place.x,place.y,place.z);
    tile.data.level = item.data;
    Player.decreaseCarriedItem(1);
});

TileEntity.registerPrototype(BlockID.ancientAltar,{
    defaultValues:{
        level:0,
        id:0,
        data:0,
        extra:{},
        progress:0,
        energy:0,
        energy_storage:500,
        mode:false
    },

    getEnergyStorage:function(){
        return this.data.energy_storage;
    },
    
    init:function(){
        this.animation = new Animation.Item(this.x + 0.5,this.y + 1.5,this.z + 0.5);
        this.getIcon();
    },

    getLevel:function(){
        for(let x = 0;x < 3;x++){
            for(let z = 0;z < 3;z++){
                if(!Apple.getStoneBricks(this.x - 1 + x,this.y - 1,this.z - 1 + z,1)){
                    return 0;
                }
            }
        }
        return 1;
    },

    getIcon:function(){
        if(this.animation){
            if(this.data.id > 0){
                var item = this.getItem();
                this.animation.describeItem({id:item.id,count:item.count,data:item.data,size:0.5,rotation:[0,World.getThreadTime()/(24000/600)*(Math.PI*2)%(Math.PI*2),0]});
                if(!this.animation.isLoaded) this.animation.load();
            } else if(this.animation.isLoaded) this.animation.destroy();
        }
    },

    click:function(id,count,data){
        var item = Player.getCarriedItem();

        if(!Player.getSneaking()){
            Game.prevent();
            if(item.id > 0 && this.data.id == 0){
                this.data.id = item.id;
                this.data.data = item.data;
                this.data.extra = item.extra;
                Player.decreaseCarriedItem(1);
            }
    
            if(item.id == 0 && this.data.id > 0){
                World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,this.data.id,1,this.data.data,this.data.extra);
                this.data.id = this.defaultValues.id;
                this.data.data = this.defaultValues.data;
                this.data.extra = this.defaultValues.extra;
            }
        } else {
            if(item.id == 280){
                if(this.data.mode){
                    this.data.mode = false;
                    Game.message(Translation.translate("Input mode."));
                } else {
                    this.data.mode = true;
                    Game.message(Translation.translate("Output mode."));
                }
            }

            Game.message(Translation.translate("Level: ") + this.data.level);
            Game.message(Translation.translate("Energy: ") + this.data.energy + "/" + this.getEnergyStorage() + "Au");
        }
    },

    getItem:function(){
        return {id:this.data.id,count:1,data:this.data.data,extra:this.data.extra};
    },

    tick:function(){
        this.getIcon();

        // Energy Storage
        this.data.level = this.getLevel();
        this.data.energy_storage = this.defaultValues.energy_storage;
        this.data.energy_storage = this.data.energy_storage * (this.data.level + 1);

        // Recipe
        var item = this.getItem();
        var recipe = Recipe.getRecipe("ApgemAltar",[item]);
        if(recipe && (recipe.extra.energy || 0) <= this.data.energy){
            this.data.progress += 1 / 1200;

            if(World.getThreadTime()%20 == 0){
                for(let i = 0;i < 32;i++){
                    var x = this.x + Math.random();
                    var y = this.y + Math.random();
                    var z = this.z + Math.random();
                    Particles.addFarParticle(ParticleType.smoke,x,y,z,0,0.01,0);
                }
            }

            if(this.data.progress.toFixed(3) >= 1){
                for(let i in recipe.output){
                    World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,recipe.output[i].id,recipe.output[i].count,recipe.output[i].data);
                }
                this.data.energy -= (recipe.extra.energy || 0);
                this.data.id = 0;
                this.data.data = 0;
                this.data.progress = 0;
            }
        } else this.data.progress = 0;

        if(World.getThreadTime()%20 == 0){
            this.data.energy = Math.min(this.data.energy,this.getEnergyStorage());
            if(this.data.mode){
                this.data.energy -= ChargeItemRegistry.addEnergyTo(item,"Au",this.data.energy,this.data.level);
            } else {
                this.data.energy += ChargeItemRegistry.getEnergyFrom(item,"Au",this.getEnergyStorage() - this.data.energy,this.data.level);
            }
        }
    },

    destroy:function(){
        if(this.animation.isLoaded){
            this.animation.destroy();
            this.animation = null;
        }
        if(this.data.id > 0) World.drop(this.x + 0.5,this.y + 1.5,this.z + 0.5,this.data.id,1,this.data.data,this.data.extra);
    }
});