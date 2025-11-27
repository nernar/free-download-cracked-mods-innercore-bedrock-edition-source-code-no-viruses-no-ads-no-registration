var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.darkblueskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.blightwillowleaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.darkblueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("blightwillowLog");
Block.createBlock("blightwillowLog", [
    {name: "Blightwillow Log", texture: [["blightwillow_logtop", 0], ["blightwillow_logtop", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0]], inCreative: true}
]);

IDRegistry.genBlockID("blightwillowSkyroot");
Block.createBlock("blightwillowSkyroot", [
    {name: "Blightwillow Planks", texture: [["blightwillow_planks", 0]], inCreative: true}
]);

IDRegistry.genBlockID("blightwillowleaves");
Block.createBlock("blightwillowleaves", [
    {name: "blight willow Leaves", texture: [["blightwillow_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blightwillowSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blightwillowleaves, "plant");

IDRegistry.genBlockID("blightwillowSapling");
Block.createBlock("blightwillowSapling", [{name: "Blightwillow Skyroot Tree Sapling", texture: [["blightwillow_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.blightwillowSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("blightwillowSapling", function(){
    return [[ItemID.blightwillowSapling, 1, 0]];
});

IDRegistry.genItemID("blightwillowSapling");
Item.createItem("blightwillowSapling", "Blightwillow Skyroot Tree Sapling", {name: "blightwillow_sapling", data: 0});

BlockRenderer.addRenderCallback(BlockID.blightwillowSapling, function(api, coords, block) {

var box = BlockID.blightwillowSapling;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);                 
});
BlockRenderer.enableCustomRender(BlockID.blightwillowSapling);
ToolAPI.registerBlockMaterial(BlockID.blightwillowSapling, "plant");

function blightwillowTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.blightwillowleaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.blightwillowleaves)World.setBlock(x,y+i,z,BlockID.blightwillowLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x+1,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x-1,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x-1,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z+1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z+1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z-1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z-1,BlockID.blightwillowleaves,0);   
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.blightwillowSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.blightwillowSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateChunk", function(a,b){
    for(var i = 0; i < 19; i++){
     d=GenerationUtils.randomCoords(a,b,100,150);
      for(var k=100;k<150;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
blightwillowTree(d.x,k+1,d.z);             
return}
}
return}
}
}
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("blightwillowSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.blightwillowSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.blightwillowSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
                        blightwillowTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    blightwillowTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });