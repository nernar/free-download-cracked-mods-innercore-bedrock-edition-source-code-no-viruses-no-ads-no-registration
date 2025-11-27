var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.frostpineLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.frostpineLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.frostpineSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("frostpineLog");
Block.createBlock("frostpineLog", [
    {name: "Frostpine Log", texture: [["frostpine_log_top", 0], ["frostpine_log_top", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0]], inCreative: true}
]);

IDRegistry.genBlockID("plankFrostpine");
Block.createBlock("plankFrostpine", [
    {name: "frostpine Planks", texture: [["frostpine_planks", 0]], inCreative: true}
]);

Block.registerDropFunction("frostpineLog", function(coords, blockID){
    destroyLeaves(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.frostpineLog, 2);
ToolAPI.registerBlockMaterial(BlockID.frostpineLog, "wood");

IDRegistry.genBlockID("frostpineLeaves");
Block.createBlock("frostpineLeaves", [
    {name: "frostpine Leaves", texture: [["frostpine_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("frostpineLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.frostpineSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.frostpineLeaves, "plant");



IDRegistry.genBlockID("frostpineSapling");
Block.createBlock("frostpineSapling", [{name: "Frostpine Tree Sapling", texture: [["frostpine_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.frostpineSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("frostpineSapling", function(){
    return [[ItemID.frostpineSapling, 1, 0]];
});

IDRegistry.genItemID("frostpineSapling");
Item.createItem("frostpineSapling", "Frostpine Tree Sapling", {name: "frostpine_sapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.frostpineSapling, function(api, coords, block) {

var box = BlockID.frostpineSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.frostpineSapling);



ToolAPI.registerBlockMaterial(BlockID.frostpineSapling, "plant");

var FtreeGenerationHelper = {
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
    generateFtree:function(crds, block){
        var block = {
            stik: BlockID.frostpineLog,
            leaves: BlockID.frostpineLeaves
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

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.frostpineSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.frostpineSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("frostpineSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == BlockID.grassblockFrostpine){
        World.setBlock(place.x, place.y, place.z, BlockID.frostpineSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.frostpineSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockFrostpine){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
            FtreeGenerationHelper.generateFtree({x: this.x, y: this.y, z: this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
            FtreeGenerationHelper.generateFtree({x: this.x, y: this.y, z: this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });