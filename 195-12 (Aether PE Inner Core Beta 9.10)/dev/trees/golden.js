var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.goldenLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.goldenLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.goldenSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("goldenLog");
Block.createBlock("goldenLog", [
    {name: "Golden Log", texture: [["goldenoak_log", 1], ["goldenoak_log", 1], ["goldenoak_log", 0], ["goldenoak_log", 0], ["goldenoak_log", 0], ["goldenoak_log", 0]], inCreative: true}
]);

Block.setDestroyTime(BlockID.goldenLog, 2);
ToolAPI.registerBlockMaterial(BlockID.goldenLog, "wood");

IDRegistry.genBlockID("goldenLeaves");
Block.createBlock("goldenLeaves", [
    {name: "golden Skyroot Leaves", texture: [["golOakleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("goldenLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.goldenSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.goldenLeaves, "plant");



IDRegistry.genBlockID("goldenSapling");
Block.createBlock("goldenSapling", [{name: "gold Skyroot Tree Sapling", texture: [["golden_oaksapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.goldenSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("goldenSapling", function(){
    return [[ItemID.goldenSapling, 1, 0]];
});

IDRegistry.genItemID("goldenSapling");
Item.createItem("goldenSapling", "gold Skyroot Tree Sapling", {name: "golden_oaksapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.goldenSapling, function(api, coords, block) {

var box = BlockID.goldenSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.goldenSapling);
ToolAPI.registerBlockMaterial(BlockID.goldenSapling, "plant");

function buildGoldTree(x, y, z){   for(var i in structureGenerationHelper.goldTree){       const src = structureGenerationHelper.goldTree[i];   if(typeof src[1] == "string"){
  let minmax = src[1].split("-");      for(var i = minmax[0]; i < minmax[1]; i++){                World.setBlock(x+src[0], y+i, z+src[2], src[3]);
            }
        }else{           World.setBlock(x+src[0], y+src[1], z+src[2], src[3])
        }
    }
}

const wood = BlockID.goldenLog;
const leaves = BlockID.goldenLeaves;

var structureGenerationHelper = {
    goldTree:[
        [-1, "2-5", 0, leaves],
        [-1, "6-7", 0, wood],
        [-1, 8, 0, leaves],
        [-1, "3-8", 1, leaves],
        [-1, "3-7", -1, leaves],
        [-1, "3-4", -2, leaves],
        [-1, 5, -2, wood],
        [-1, 6, -2, wood],
        [-1, "3-8", 0, leaves],
        [-1, "4-7", 1, leaves],
        [-2, "5-6", 0, leaves],
        [-3, "5-7", 1, leaves],
        [-1, "4-5", -1, leaves],
        [-1, "4-5", -2, leaves],
        [-2, "4-5", -3, leaves],
        [-1, "5-8", 2, leaves],
        [-1, "5-7", 3, leaves],
        [0, "2-4", 1, leaves],
        [0, 5, 1, leaves],
        [0, "6-8", 1, leaves],
        [0, "3-8", 2, leaves],
        [0, "5-7", 3, leaves],
        [-2, "5-6", 2, leaves],
        [-2, 6, 3, leaves],
        [-1, "3-5", -3, leaves],
        [0, 2, -1, leaves],
        [0, 2, -2, leaves],
        [0, 2, -3, leaves],
        [0, 3, -1, wood],
        [0, 3, -2, wood],
        [0, 3, -2, wood],
        [0, 3, -3, leaves],
        [0, 4, -1, leaves],
        [0, "4-7", -2, leaves],
        [0, "4-5", -3, leaves],
        [0, 4, -4, leaves],
        [0, 5, -1, wood],
        [0, "6-8", -1, leaves],
        [1, "3-8", 1, leaves],
        [1, "3-8", 2, leaves],
        [1, "2-8", 0, leaves],
        [1, "3-8", -1, leaves],
        [1, "2-7", -2, leaves],
        [1, "3-6", -3, leaves],
        [1, "4-5", -4, leaves],
        [2, "3-7", 0, leaves],
        [2, "3-4", -1, leaves],
        [2, 5, -1, wood],
        [2, "6-7", -1, leaves],
        [2, "3-6", -2, leaves],
        [2, "4-6", -3, leaves],
        [2, "4-7", 1, leaves],
        [2, "5-6", 2, leaves],
        [3, "4-5", 0, leaves],
        [3, "5-6", 1, leaves],
        [3, "4-6", -1, leaves],
        [3, "4-6", -2, leaves],
        [3, 5, -3, leaves],      
        [3, "7-8", 0, leaves],
        [0, "0-6", 0, wood]]
};
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.goldenSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.goldenSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
/*
Callback.addCallback("AetherChunk", function(a,b){
    for(var i = 0; i < 33; i++){
        d=GenerationUtils.randomCoords(a,b,23,189);
        for(var k=0;k<189;k++){
        if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
buildGoldTree(d.x,k+1,d.z);
}
}
return}
        }
    }
    });
    */
/*==Перенести на рандом тик==*/

Item.registerUseFunction("goldenSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.goldenSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.goldenSapling,{
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
                        buildGoldTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    buildGoldTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });