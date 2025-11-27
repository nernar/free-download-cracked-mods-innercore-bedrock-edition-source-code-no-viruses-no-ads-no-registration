var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeavesE(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.ebonLog){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.ebonLog){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.ebonSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}


IDRegistry.genBlockID("ebonLog");
Block.createBlock("ebonLog", [
    {name: "Ebonite Log", texture: [["ebonlog_top", 0], ["ebonlog_top", 0], ["ebonlog_side", 0], ["ebonlog_side", 0], ["ebonlog_side", 0], ["ebonlog_side", 0]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("plankEbonite");
Block.createBlock("plankEbonite", [{name: "Ebonite Planks", texture: [["ebon_planks", 0]], inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.plankEbonite, count: 4, data: 0}, [
    "ooa"
], ['a', BlockID.ebonLog, 0]);
});
        
Block.registerDropFunction("ebonLog", function(coords, blockID){
    destroyLeavesE(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.ebonLog, 2);
ToolAPI.registerBlockMaterial(BlockID.ebonLog, "wood");

IDRegistry.genBlockID("ebonLeaves");
Block.createBlock("ebonLeaves", [
    {name: "Ebonite Leaves", texture: [["ebon_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("ebonLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.ebonSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.ebonLeaves, "plant");



IDRegistry.genBlockID("ebonSapling");
Block.createBlock("ebonSapling", [{name: "Ebonite Sapling", texture: [["ebon_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.ebonSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("ebonSapling", function(){
    return [[ItemID.ebonSapling, 1, 0]];
});

IDRegistry.genItemID("ebonSapling");
Item.createItem("ebonSapling", "Ebonite Sapling", {name: "ebon_sapling", data: 1});



BlockRenderer.addRenderCallback(BlockID.ebonSapling, function(api, coords, block) {

var box = BlockID.ebonSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.ebonSapling);


ToolAPI.registerBlockMaterial(BlockID.ebonSapling, "plant");
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.ebonSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.ebonSapling,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 48; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(World.getBlockID(d.x,k-1,d.z)==88){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
EtreeGenerationHelper.generateEtree({x: d.x, y: k, z: d.z});return
}
}
}
}
}
});

var EtreeGenerationHelper = {
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
    generateEtree:function(crds, block){
        var block = {
            stik: BlockID.ebonLog,
            leaves: BlockID.ebonLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("ebonSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.ebonSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.ebonSapling,{
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
 EtreeGenerationHelper.generateEtree({x: this.x, y: this.k+1, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                                   World.destroyBlock(this.x,this.y,this.z,false);
 EtreeGenerationHelper.generateEtree({x: this.x, y: this.k+1, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
        
//RED
        
function destroyLeavesH(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.hellbarkLog){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.hellbarkLog){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.hellbarkSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}


IDRegistry.genBlockID("hellbarkLog");
Block.createBlock("hellbarkLog", [
    {name: "Hellbark Log", texture: [["hellbark_log_top", 0], ["hellbark_log_top", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0], ["hellbark_log_side", 0]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("plankHellbark");
Block.createBlock("plankHellbark", [
    {name: "Hellbark Planks", texture: [["hellbark_planks", 0]], inCreative: true}], "opaque");        
        
Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.plankHellbark, count: 4, data: 0}, [
    "ooa",
], ['a', BlockID.hellbarkLog, 0]);
});        
        
Block.registerDropFunction("hellbarkLog", function(coords, blockID){
    destroyLeavesH(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.hellbarkLog, 2);
ToolAPI.registerBlockMaterial(BlockID.hellbarkLog, "wood");

IDRegistry.genBlockID("hellbarkLeaves");
Block.createBlock("hellbarkLeaves", [
    {name: "Hellbark Leaves", texture: [["hellbark_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("hellbarkLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.hellbarkSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.hellbarkLeaves, "plant");



IDRegistry.genBlockID("hellbarkSapling");
Block.createBlock("hellbarkSapling", [{name: "Hellbark Sapling", texture: [["hellbark_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.hellbarkSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("hellbarkSapling", function(){
    return [[ItemID.hellbarkSapling, 1, 0]];
});

IDRegistry.genItemID("hellbarkSapling");
Item.createItem("hellbarkSapling", "Hellbark Sapling", {name: "hellbark_sapling", data: 1});

BlockRenderer.addRenderCallback(BlockID.hellbarkSapling, function(api, coords, block) {

var box = BlockID.hellbarkSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.hellbarkSapling);


ToolAPI.registerBlockMaterial(BlockID.hellbarkSapling, "plant");
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.hellbarkSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==88){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.hellbarkSapling,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 43; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(World.getBlockID(d.x,k-1,d.z)==88){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
HtreeGenerationHelper.generateHtree({x: d.x, y: k, z: d.z});return
}
}

}
}
}
});

var HtreeGenerationHelper = {
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
    generateHtree:function(crds, block){
        var block = {
            stik: BlockID.hellbarkLog,
            leaves: BlockID.hellbarkLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("hellbarkSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.hellbarkSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.hellbarkSapling,{
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
                        World.destroyBlock(this.x,this.y,this.z,false); HtreeGenerationHelper.generateHtree({x: this.x, y: this.k+1, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false); HtreeGenerationHelper.generateHtree({x: this.x, y: this.k+1, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
       
//PILLAR        
Callback.addCallback("GenerateNetherChunk", function(a,b){
    for(var i = 0; i < 9; i++){
        d=GenerationUtils.randomCoords(a,b,10,200);
        for(var k=10;k<256;k++){
        if(GenerationUtils.isTransparentBlock(World.getBlockID(d.x, k, d.z))!=0){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
SpillarGenerationHelper.generateSpillar({x: d.x, y: k, z: d.z});return
}
}
}
}
}
});

var SpillarGenerationHelper = {
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
    generateSpillar:function(crds, block){
        var block = {
            brick: BlockID.carvedBr,
            tile: BlockID.carvBr,
            gbrick: BlockID.carvedsBr,
            lamp: BlockID.lampSt
        }
        if(this.random()){
            var a = [];  
            //pillar
            this.p(crds.x, crds.y, crds.z, block.tile);
            this.p(crds.x, crds.y+1, crds.z, block.gbrick);
            this.p(crds.x, crds.y+2, crds.z, block.brick);
            this.p(crds.x, crds.y+3, crds.z, block.gbrick);
            this.p(crds.x, crds.y+4, crds.z, block.brick);
            this.p(crds.x, crds.y+5, crds.z, block.lamp);          
            //pillarbottom
            this.p(crds.x, crds.y, crds.z+1, block.tile);
            this.p(crds.x, crds.y, crds.z-1, block.tile);
            this.p(crds.x+1, crds.y, crds.z, block.tile);
            this.p(crds.x-1, crds.y, crds.z, block.tile);
            //sharp
            this.p(crds.x+1, crds.y, crds.z+1, block.brick);
            this.p(crds.x+1, crds.y, crds.z-1, block.brick);
            this.p(crds.x-1, crds.y, crds.z+1, block.brick);
            this.p(crds.x-1, crds.y, crds.z-1, block.brick);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.tile);
            this.p(crds.x, crds.y+1, crds.z, block.gbrick);
            this.p(crds.x, crds.y+2, crds.z, block.brick);
            this.p(crds.x, crds.y+3, crds.z, block.gbrick);
            this.p(crds.x, crds.y+4, crds.z, block.brick);
            this.p(crds.x, crds.y+5, crds.z, block.lamp);          
            //pillarbottom(1)
            this.p(crds.x, crds.y, crds.z+1, block.tile);
            this.p(crds.x, crds.y, crds.z-1, block.tile);
            this.p(crds.x+1, crds.y, crds.z, block.tile);
            this.p(crds.x-1, crds.y, crds.z, block.tile);
            //2
            this.p(crds.x, crds.y, crds.z+2, block.brick);
            this.p(crds.x, crds.y, crds.z-2, block.brick);
            this.p(crds.x+2, crds.y, crds.z, block.brick);
            this.p(crds.x-2, crds.y, crds.z, block.brick);
            //sharp
            this.p(crds.x+1, crds.y, crds.z+1, block.brick);
            this.p(crds.x+1, crds.y, crds.z-1, block.brick);
            this.p(crds.x-1, crds.y, crds.z+1, block.brick);
            this.p(crds.x-1, crds.y, crds.z-1, block.brick);
            
            }
    }
}        