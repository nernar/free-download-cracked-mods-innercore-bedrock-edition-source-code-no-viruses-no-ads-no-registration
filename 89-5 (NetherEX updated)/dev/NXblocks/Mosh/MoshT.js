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