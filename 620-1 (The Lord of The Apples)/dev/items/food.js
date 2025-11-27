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