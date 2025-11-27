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
                if(World.getBlockID(xx, yy, zz)==BlockID.darkblueskyrootLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.darkblueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("darkblueskyrootLeaves");
Block.createBlock("darkblueskyrootLeaves", [
    {name: "darkblue Skyroot Leaves", texture: [["dark_blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.darkblueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootLeaves, "plant");



IDRegistry.genBlockID("darkblueskyrootSapling");
Block.createBlock("darkblueskyrootSapling", [{name: "Darkblue Skyroot Tree Sapling", texture: [["dark_blue_skyrootsapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.darkblueskyrootSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("darkblueskyrootSapling", function(){
    return [[ItemID.darkblueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("darkblueskyrootSapling");
Item.createItem("darkblueskyrootSapling", "Darkblue Skyroot Tree Sapling", {name: "dark_blue_skyrootsapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.darkblueskyrootSapling, function(api, coords, block) {

var box = BlockID.darkblueskyrootSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.darkblueskyrootSapling);



ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootSapling, "plant");

function darkblueTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.darkblueskyrootLeaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.darkblueskyrootLeaves)World.setBlock(x,y+i,z,BlockID.skyrootLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x+1,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x-1,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x-1,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z+1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z+1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z-1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z-1,BlockID.darkblueskyrootLeaves,0);
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.darkblueskyrootSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.darkblueskyrootSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("AetherChunk", function(a,b){
    for(var i = 0; i < 25; i++){
     d=GenerationUtils.randomCoords(a,b,100,151);
      for(var k=100;k<151;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
      darkblueTree(d.x,k+1,d.z);     
return}
}
return}
}
}
});
    
/*==Перенести на рандом тик==*/
TileEntity.registerPrototype(BlockID.darkblueskyrootSapling,{
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
                        darkblueTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    darkblueTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });