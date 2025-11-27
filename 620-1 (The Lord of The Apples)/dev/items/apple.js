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