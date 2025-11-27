var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.blueskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.blueskyrootLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.blueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("blueskyrootLeaves");
Block.createBlock("blueskyrootLeaves", [
    {name: "Blue Skyroot Leaves", texture: [["blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("blueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blueskyrootLeaves, "plant");



IDRegistry.genBlockID("blueskyrootSapling");
Block.createBlock("blueskyrootSapling", [{name: "blue Skyroot Tree Sapling", texture: [["blue_skyrootsapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.blueskyrootSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("blueskyrootSapling", function(){
    return [[ItemID.blueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("blueskyrootSapling");
Item.createItem("blueskyrootSapling", "blue Skyroot Tree Sapling", {name: "skyroot_sapling", data: 1});



BlockRenderer.addRenderCallback(BlockID.blueskyrootSapling, function(api, coords, block) {

var box = BlockID.blueskyrootSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.blueskyrootSapling);



ToolAPI.registerBlockMaterial(BlockID.blueskyrootSapling, "plant");

var BtreeGenerationHelper = {
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
    generateBtree:function(crds, block){
        var block = {
            stik: BlockID.skyrootLog,
            leaves: BlockID.blueskyrootLeaves
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
    if(item.id==ItemID.blueskyrootSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.blueskyrootSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateChunk", function(a,b){
    for(var i = 0; i < 24; i++){
     d=GenerationUtils.randomCoords(a,b,100,152);
      for(var k=100;k<152;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
BtreeGenerationHelper.generateBtree({x: d.x, y: k+1, z: d.z});             
return}
} 
return}
}
}
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("blueskyrootSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.blueskyrootSapling);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.blueskyrootSapling,{
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
 BtreeGenerationHelper.generateBtree({x: this.x, y: this.y, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
 BtreeGenerationHelper.generateBtree({x: this.x, y: this.y, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });