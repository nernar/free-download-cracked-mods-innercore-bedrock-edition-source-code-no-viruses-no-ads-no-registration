/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 15
*/



// file: header.js

IMPORT("ChargeItem");
IMPORT("IExtra");
IMPORT("ItemName");
IMPORT("SoundAPI");
IMPORT("ToolLib");

World.drop = ModAPI.requireGlobal("Level.dropItem");

Block.createSpecialType({base:1,solid:true,destroytime:5},"stone");




// file: translation.js

Translation.addTranslation("Apgem Block",{zh:"果石块"});
Translation.addTranslation("Apgem",{zh:"果石"});

// Altar
Translation.addTranslation("Ancient Altar",{zh:"远古祭坛"});
Translation.addTranslation("Apgem Altar",{zh:"果石祭坛"});

// Bricks
Translation.addTranslation("Ancient Bricks",{zh:"远古石砖"});
Translation.addTranslation("Apgem Bricks",{zh:"果石砖"});
Translation.addTranslation("Gilded Apgem Bricks",{zh:"镀金果石砖"});

// Food
Translation.addTranslation("Apple Pie",{zh:"苹果派"});
Translation.addTranslation("Apple Juice",{zh:"苹果汁"});

// Tool
Translation.addTranslation("Apgem Sword",{zh:"果石剑"});

// Apple
Translation.addTranslation("Green Apple",{zh:"青苹果"});
Translation.addTranslation("Magma Apple",{zh:"岩浆苹果"});
Translation.addTranslation("Obsidian Apple",{zh:"黑曜石苹果"});
Translation.addTranslation("Demon Apple",{zh:"恶魔苹果"});
Translation.addTranslation("Frozen Apple",{zh:"冰苹果"});

//Aporb
Translation.addTranslation("Weak Aporb",{zh:"虚弱果珠"});
Translation.addTranslation("Base Aporb",{zh:"基础果珠"});

Translation.addTranslation("Level: ",{zh:"等级: "});
Translation.addTranslation("Energy: ",{zh:"能量: "});




// file: modapi/apple.js

var Apple = {
    apples:{},
    bricks:{},

    orbIDs:{},
    appleIDs:{},

    registerAppleCallback:function(id,state){
        if(!this.apples[id]) this.apples[id] = {}
        this.apples[id].callback = state;
    },

    getAppleCallback:function(id){
        var data = this.apples[id];
        if(data && data.callback) return data.callback();
    },

    getStoneBricks:function(x,y,z,level){
        var block = World.getBlock(x,y,z);
        return this.bricks[block.id + ":" + block.data] >= level?true:false;
    },

    registerStoneBricks:function(id,level,data){
        this.bricks[id + ":" + (data || 0)] = (level || 1);

        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Level: ") + Apple.bricks[item.id + ":" + item.data];
        });
    },

    isApple:function(id){
        return this.appleIDs[id];
    },

    isOrb:function(id){
        return this.orbIDs[id];
    },

    getEnergyByApple:function(id){
        return this.apples[id].energy || 0;
    },

    registerApple:function(id,energy){
        if(!this.apples[id]) this.apples[id] = {}
        
        this.appleIDs[id] = true;
        this.apples[id].energy = energy || 0;

        Item.addCreativeGroup("apple",Translation.translate("Apple"),[id]);
    },

    registerOrb:function(id,stored,limit,level){
        ChargeItemRegistry.registerExtraItem(id,"Au",stored,limit,level,"storage",true,true);

        Item.addCreativeGroup("orb",Translation.translate("Orb"),[id]);
        this.orbIDs[id] = true;
        
        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Level: ") + ChargeItemRegistry.chargeData[item.id].level;
        });
        
        ItemName.registerTooltipAddFunction(id,function(item){
            return Translation.translate("Energy: ") + ChargeItemRegistry.getEnergyStored(item,"Au") + "/" + ChargeItemRegistry.getMaxCharge(item.id,"Au") + "Au";
        });
    }
}

Callback.addCallback("FoodEaten",function(food,ratio){
    var item = Player.getCarriedItem();
    if(Apple.isApple(item.id)){
        for(let slot = 0;slot <= 36;slot++){
            var inv = Player.getInventorySlot(slot);
            if(Apple.isOrb(inv.id)){
                var apple = Apple.getEnergyByApple(item.id);
                ChargeItemRegistry.addEnergyTo(inv,"Au",apple,apple,1);
                Player.setInventorySlot(slot,inv.id,inv.count,inv.data,inv.extra);
                return;
            }
        }
    }

    Apple.getAppleCallback(item.id);
});




// file: modapi/recipe.js

var Recipe = {
    recipes:{},

    addRecipe:function(name,input,output,extra){
		var recipe = this.getRecipeData(name);
        recipe.push({input:input,output:output,extra:extra || {}});
    },

    getRecipeData:function(name){
        if(!this.recipes[name]) this.recipes[name] = [];
        return this.recipes[name];
    },

    parseInput:function(input){        
        var item = {}
        for(let i in input){
            var source = input[i];
            if(source.id > 0){
                if(!item[source.id]) item[source.id] = 0;
                item[source.id] += source.count;

                if(!item[source.id + ":" + source.data]) item[source.id + ":" + source.data] = 0;
                item[source.id + ":" + source.data] += source.count;
            }
        }
        return item;
    },

    getRecipe:function(name,items){
		var recipe = this.getRecipeData(name);
        for(let i in recipe){
            var valid = true;
            for(let n in recipe[i].input){
                var source = recipe[i].input[n];
                var count = this.parseInput(items)[source.id + ((source.data == -1)?"":":" + source.data)];
                if(!count || count < source.count){
                    valid = false;
                    break;
                }
            }

            if(valid) return recipe[i];
        }
    }
}




// file: items/apple.js

// [青苹果]Green Apple
IDRegistry.genItemID("appleGreen");
Item.createFoodItem("appleGreen","Green Apple",{name:"green_apple"},{food:1});
Apple.registerApple(ItemID.appleGreen,10);

Callback.addCallback("DestroyBlock",function(coords,block){
    if(block.id == 18 && block.data == 0 && Math.random() < 0.1){
        World.drop(coords.x + 0.5,coords.y + 1.5,coords.z + 0.5,ItemID.appleGreen,1);
    }
});

// [岩浆苹果]Magma Apple
IDRegistry.genItemID("appleMagma");
Item.createFoodItem("appleMagma","Magma Apple",{name:"magma_apple"},{food:4});
Apple.registerApple(ItemID.appleMagma,40);

Apple.registerAppleCallback(ItemID.appleMagma,function(){
    var pos = Player.getPosition();
    for(let i = 0;i < 8;i++){
        var coords = GenerationUtils.findSurface(pos.x + Math.floor(Math.random()*16),pos.y + Math.floor(Math.random()*16),pos.z + Math.floor(Math.random()*16));
        if(World.isAirBlock(coords.x,coords.y + 1,coords.z)){
            World.setBlock(coords.x,coords.y + 1,coords.z,51);

            for(let i = 0;i < 32;i++){
                var x = coords.x + Math.random();
                var y = coords.y + Math.random();
                var z = coords.z + Math.random();
                Particles.addFarParticle(ParticleType.lava,x,y,z,0,0.01,0);
            }
        }
    }
});

// [黑曜石苹果]Obsidian Apple
IDRegistry.genItemID("appleObsidian");
Item.createFoodItem("appleObsidian","Obsidian Apple",{name:"obsidian_apple"},{food:4});
Apple.registerApple(ItemID.appleObsidian,40);

Apple.registerAppleCallback(ItemID.appleObsidian,function(){
    Entity.addEffect(Player.get(),12,0,60*20);
});

// [恶魔苹果]Demon Apple
IDRegistry.genItemID("appleDemon");
Item.createFoodItem("appleDemon","Demon Apple",{name:"demon_apple"},{food:4});
Apple.registerApple(ItemID.appleDemon,40);

ItemName.registerTooltipAddFunction(ItemID.appleDemon,function(item){
    return Translation.translate("「悪魔の果実」");// ja_JP
});

var Fruit = 0;
var DemonEnable = false;
Apple.registerAppleCallback(ItemID.appleDemon,function(){
    if(DemonEnable){
        Player.setHealth(0);
    } else {
        var apples = [];
        for(let i in Apple.apples){
            if(i == ItemID.appleDemon) continue;
            apples.push(i);
        }

        Fruit = apples[Math.floor(Math.random() * apples.length)];
        DemonEnable = true;
    }
});

Callback.addCallback("tick",function(){
    if(!DemonEnable){
        if(World.getThreadTime()%13666 == 0){// 11.38
            for(let slot = 0;slot <= 36;slot++){
                var item = Player.getInventorySlot(slot);
                if(item.id == 260){
                    Player.addItemToInventory(ItemID.appleDemon,1,0);
                    Player.setInventorySlot(slot,item.id,item.count - 1,item.data,item.extra);
                    return;
                }
            }
        }
    } else {
        var pos = Player.getPosition();
        var block = World.getBlock(pos.x,pos.y,pos.z);
        if(block.id == 8 || block.id == 9){
            Player.setPosition(pos.x,pos.y - 1,pos.z);
        }
    }
    Apple.getAppleCallback(Fruit);
});

Callback.addCallback("EntityDeath",function(entity){
    if(entity == Player.get()){
        Fruit = 0;
        DemonEnable = false;
    }
});

// [冰苹果]Frozen Apple
IDRegistry.genItemID("appleFrozen");
Item.createFoodItem("appleFrozen","Frozen Apple",{name:"frozen_apple"},{food:4});
Apple.registerApple(ItemID.appleFrozen,40);

Apple.registerAppleCallback(ItemID.appleFrozen,function(){
    var pos = Player.getPosition();
    for(let i = 0;i < 32;i++){
        var coords = {
            x:pos.x + Math.floor(Math.random()*16),
            y:pos.y + Math.floor(Math.random()*16),
            z:pos.z + Math.floor(Math.random()*16)
        }

        var block = World.getBlock(coords.x,coords.y,coords.z);
        if(block.id == 8 || block.id == 9){
            World.setBlock(coords.x,coords.y,coords.z,79);

            for(let i = 0;i < 64;i++){
                var x = coords.x + Math.random();
                var y = coords.y + Math.random();
                var z = coords.z + Math.random();
                Particles.addFarParticle(ParticleType.waterWake,x,y,z,0,0.01,0);
            }
        }
    }
});

// [烂苹果]Bad Apple
IDRegistry.genItemID("appleBad");
Item.createFoodItem("appleBad","Bad Apple",{name:"bad_apple"},{food:20});
Apple.registerApple(ItemID.appleBad,40);

Apple.registerAppleCallback(ItemID.appleBad,function(){
    SoundAPI.playSound("BadApple.ogg",false,true);
});

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:213,count:1,data:0}],[{id:ItemID.appleMagma   ,count:1,data:0}],{energy:400 });
    Recipe.addRecipe("ApgemAltar",[{id:49 ,count:1,data:0}],[{id:ItemID.appleObsidian,count:1,data:0}],{energy:400 });
    Recipe.addRecipe("ApgemAltar",[{id:79 ,count:1,data:0}],[{id:ItemID.appleFrozen  ,count:1,data:0}],{energy:400 });
    Recipe.addRecipe("ApgemAltar",[{id:122,count:1,data:0}],[{id:ItemID.appleBad     ,count:1,data:0}],{energy:3200});
});




// file: items/food.js

// [苹果派]Apple Pie
IDRegistry.genItemID("applePie");
Item.createFoodItem("applePie","Apple Pie",{name:"apple_pie"},{food:6});

// [苹果汁]Apple Juice
IDRegistry.genItemID("appleJuice");
Item.createFoodItem("appleJuice","Apple Juice",{name:"apple_juice"},{food:3});

ItemName.registerTooltipAddFunction(ItemID.appleJuice,function(item){
    return Translation.translate("オレは「アポロ11号」なんだァ——ッ");// ja_JP
});

Callback.addCallback("PreLoaded",function(){
    Recipes.addShapeless({id:ItemID.applePie,count:1,data:0},[{id:260,data:0},{id:260,data:0},{id:344,data:0},{id:353,data:0}]);
    Recipe.addRecipe("ApgemAltar",[{id:374,count:1,data:0}],[{id:ItemID.appleJuice,count:1,data:0}],{energy:100});
});

Callback.addCallback("FoodEaten",function(heal,ratio){
    var item = Player.getCarriedItem();
    if(item.id == ItemID.appleJuice){
        var pos = Player.getPosition();
        for(let height = pos.y;height <= 256;height++){
            Player.setPosition(pos.x,height,pos.z);
            for(let i = 0;i < 32;i++){
                var x = pos.x + Math.random();
                var y = pos.y + Math.random();
                var z = pos.z + Math.random();
                Particles.addFarParticle(ParticleType.smoke,x,y,z,0,0.01,0);
            }
        }
        Player.addItemToInventory(374,1,0);
    }
});




// file: items/gemstone.js

// [果石块]Granite Gem Block
IDRegistry.genBlockID("apgemBlock");
Block.createBlock("apgemBlock",[{name:"Apgem Block",texture:[["apgem_block",0]],inCreative:true}],"stone");
ToolAPI.registerBlockMaterial(BlockID.apgemBlock,"stone",1,true);
Block.setDestroyLevel("apgemBlock",1);

// [果石]Apgem
IDRegistry.genItemID("apgem");
Item.createItem("apgem","Apgem",{name:"apgem"});

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:ItemID.appleGreen,count:1,data:0}],[{id:ItemID.apgem,count:1,data:0}],{energy:800});
    Recipe.addRecipe("ApgemAltar",[{id:260              ,count:1,data:0}],[{id:ItemID.apgem,count:1,data:0}],{energy:800});
    
    Recipes.addShapeless({id:ItemID.apgem,count:9,data:0},[{id:BlockID.apgemBlock,data:0}]);
    Recipes.addShaped({id:BlockID.apgemBlock,count:1,data:0},["aaa","aaa","aaa"],["a",ItemID.apgem,0]);
});




// file: items/orb.js

// [虚弱果珠]Weak Apple Orb
IDRegistry.genItemID("aporbWeak");
Item.createItem("aporbWeak","Weak Aporb",{name:"aporb_weak"},{stack:1,isTech:true});
Apple.registerOrb(ItemID.aporbWeak,500,32,0);

Callback.addCallback("EntityDeath",function(entity,attacker){
    if(attacker == Player.get() && entity == 45 && Math.random() < 0.5){
        World.drop(coords.x + 0.5,coords.y + 0.5,coords.z + 0.5,ItemID.aporbWeak,27);
    }
});

// [基础果珠]Base Apple Orb
IDRegistry.genItemID("aporb");
Item.createItem("aporb","Base Aporb",{name:"aporb"},{stack:1,isTech:true});
Apple.registerOrb(ItemID.aporb,1000,128,1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.aporb,count:1,data:0},[
        " a ",
        "aba",
        " a "
    ],["a",ItemID.apgem,0,"b",ItemID.aporbWeak,-1],ChargeItemRegistry.transferEnergy);
});




// file: items/tool.js

ToolAPI.addToolMaterial("apple",{durability:165,level:2,efficiency:4,damage:2,enchantability:4});

// [果石剑]Apgem Sword
IDRegistry.genItemID("apgemSword");
Item.createItem("apgemSword","Apgem Sword",{name:"apgem_sword"},{stack:1});
ToolAPI.setTool(ItemID.apgemSword,"apple",ToolType.sword);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:ItemID.apgemSword,count:1,data:0},["a","a","b"],["a",ItemID.apgem,0,"b",280,0]);
});

Callback.addCallback("EntityHurt",function(attacker){
    if(attacker == Player.get()){
        for(let slot = 0;slot <= 36;slot++){
            var inv = Player.getInventorySlot(slot);
            if(Apple.isOrb(inv.id)){
                ChargeItemRegistry.addEnergyTo(inv,"Au",10,10,1);
                Player.setInventorySlot(slot,inv.id,inv.count,inv.data,inv.extra);
                return;
            }
        }
    }
});




// file: blocks/ancient_altar.js

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




// file: blocks/apgem_altar.js

// [果石祭坛]Apgem Altar
IDRegistry.genBlockID("apgemAltar");
Block.createBlock("apgemAltar",[
    {name:"Apgem Altar",texture:[["apgem_altar",0],["apgem_altar",1],["apgem_altar",2]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.apgemAltar,"stone",1,true);
APGEM_ALTAR_MODEL(BlockID.apgemAltar,0,[["apgem_altar",0]]);

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:BlockID.ancientAltar,count:1,data:0}],[{id:BlockID.apgemAltar,count:1,data:0}],{energy:1000});
});

SPECIAL_BLOCK_ID[BlockID.apgemAltar] = true;
Block.registerPlaceFunction("apgemAltar",function(coords,item,block){
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

TileEntity.registerPrototype(BlockID.apgemAltar,{
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
        for(let level = 1;level < 255;level++){
            var size = 1+(level*2);
            for(let x = 0;x < size;x++){
                for(let z = 0;z < size;z++){
                    if(!Apple.getStoneBricks(this.x - ((size-1)/2) + x,this.y - level,this.z - ((size-1)/2) + z,level)) return level - 1;
                }
            }
        }
        return 0;
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
                this.data.energy -= ChargeItemRegistry.addEnergyTo(item,"Au",this.data.energy,32,this.data.level);
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




// file: blocks/stone_bricks.js

// [远古石砖]Ancient Bricks
IDRegistry.genBlockID("ancientBricks");
Block.createBlock("ancientBricks",[
    {name:"Ancient Bricks",texture:[["ancient_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.ancientBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.ancientBricks,2,0);
Block.setDestroyLevel("ancientBricks",1);

// [果石石砖]Apgem Bricks
IDRegistry.genBlockID("apgemBricks");
Block.createBlock("apgemBricks",[
    {name:"Apgem Bricks",texture:[["apgem_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.apgemBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.apgemBricks,4,0);
Block.setDestroyLevel("apgemBricks",1);

Callback.addCallback("PreLoaded",function(){
    Recipe.addRecipe("ApgemAltar",[{id:98                   ,count:1,data:-1}],[{id:BlockID.apgemBricks,count:1,data:0}],{energy:100});
    Recipe.addRecipe("ApgemAltar",[{id:BlockID.ancientBricks,count:1,data:0 }],[{id:BlockID.apgemBricks,count:1,data:0}],{energy:100});
});

// [镀金果石石砖]Gilded Apgem Bricks
IDRegistry.genBlockID("gildedApgemBricks");
Block.createBlock("gildedApgemBricks",[
    {name:"Gilded Apgem Bricks",texture:[["gilded_apgem_bricks",0]],inCreative:true}
],"stone");
ToolAPI.registerBlockMaterial(BlockID.gildedApgemBricks,"stone",1,true);
Apple.registerStoneBricks(BlockID.gildedApgemBricks,6,0);
Block.setDestroyLevel("gildedApgemBricks",1);

Callback.addCallback("PreLoaded",function(){
    Recipes.addShaped({id:BlockID.gildedApgemBricks,count:2,data:0},["ab","ba"],["a",266,0,"b",BlockID.apgemBricks,0]);
});




// file: compat/minecraft.js

// [石砖]Bricks
Apple.registerStoneBricks(98,2,0);
Apple.registerStoneBricks(98,2,1);
Apple.registerStoneBricks(98,2,2);
Apple.registerStoneBricks(98,2,3);

// [苹果]Apple
Apple.registerApple(260,20);

// [金苹果]Golden Apple
Apple.registerApple(322,40);
Apple.registerApple(466,360);
Recipes.deleteRecipe({id:322,count:1,data:0});
Recipes.deleteRecipe({id:466,count:1,data:0});

Recipe.addRecipe("ApgemAltar",[{id:266,count:1,data:0}],[{id:322,count:1,data:0}],{energy:400 });
Recipe.addRecipe("ApgemAltar",[{id:41 ,count:1,data:0}],[{id:466,count:1,data:0}],{energy:3600});

// [紫颂果]Chorus Fruit
Recipe.addRecipe("ApgemAltar",[{id:432,count:1,data:0}],[{id:260,count:1,data:0}],{energy:100});




// file: compat/recipe_viewer.js

ModAPI.addAPICallback("RecipeViewer",function(api){
    api.Core.registerRecipeType("LoA-Altar",{
        contents:{
            icon:BlockID.apgemAltar,
            
            drawing:[
                {type:"bitmap",x:430,y:200,scale:6,bitmap:"arrow_background"}
            ],

            elements:{
                "input0":{type:"slot",x:280,y:200,size:120},
                "output0":{type:"slot",x:600,y:200,size:120},
                "textEnergy":{type:"text",x:280,y:400,size:30}
            }
        },

        getList:function(id,data,isUsage){
            var list = [],recipe = Recipe.getRecipeData("ApgemAltar");
            if(isUsage){
                for(let i in recipe){
                    for(let ii in recipe[i].input){
                        var input = recipe[i].input[ii];
                        if(input.id == id && input.data == data) list.push(recipe[i]);
                    }
                }
            } else {
                for(let i in recipe){
                    for(let ii in recipe[i].output){
                        var output = recipe[i].output[ii];
                        if(output.id == id && output.data == data) list.push(recipe[i]);
                    }
                }
            }
            return list;
        },

		onOpen:function(elements,data){
			var energy = elements.get("textEnergy");
			energy.onBindingUpdated("text",Translation.translate("Energy: ") + (data.extra.energy?data.extra.energy:0) + "Au");
		}
    });
});




// file: modapi/modapi.js

Saver.addSavesScope("LoA",
    function read(scope){
		Fruit = scope.demon_fruit || "";
        DemonEnable = scope.demon_enable || false;
    },
    function save(){
        return {
			demon_fruit:Fruit,
			demon_enable:DemonEnable
		}
    }
);

ModAPI.registerAPI("LoA",{
    Apple:Apple,
    Recipe:Recipe,

	requireGlobal:function(command){
		return eval(command);
	}
});




