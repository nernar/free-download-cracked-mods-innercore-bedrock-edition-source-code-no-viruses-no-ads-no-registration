var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.7,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 8,
    translucency: 0,
    sound: "wood"
});

(function(){
    let constructVariationsSet = function(name, top, side){
        return [
            {name: name, texture: [[top, 0], [top, 0], [side, 0]], inCreative: true},
            {name: name, texture: [[side, 0], [side, 0], [top, 0], [top, 0], [side, 1]], inCreative: false},
            {name: name, texture: [[side, 1], [side, 1], [side, 1], [side, 1], [top, 0]], inCreative: false}
        ]
    }
    let makeDropFunction = function(id){
        Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant, item, region){
            return [[blockID, 1, 0]];
        });
    }
    let makePlaceFunction = function(id){
        Block.registerPlaceFunction(id, function(coords, item, block, player, region){
            let r = coords.relative;
            switch(coords.side){
                case 0: case 1:
                    region.setBlock(r.x, r.y, r.z, id, 0); break;
                case 2: case 3:
                    region.setBlock(r.x, r.y, r.z, id, 1); break;
                case 4: case 5:
                    region.setBlock(r.x, r.y, r.z, id, 2); break;
            }
        });
    };
    (function(ids){
        for(let i in ids){
            let block = ids[i];
            let bid = block[0], 
                name = block[1], 
                topt = block[2], 
                sidet = block[3];
            IDRegistry.genBlockID(bid);
            Block.createBlock(bid, constructVariationsSet(name, topt, sidet), BLOCK_TYPE_WOOD);
            ToolAPI.registerBlockMaterial(BlockID[bid], "wood", 0, false);
            makeDropFunction(BlockID[bid]);
            makePlaceFunction(BlockID[bid]);
        }
    })([
        ["skyrootLog", "Skyroot Log", "aether_log_top", "aether_log"],
        ["skyrootBark", "Skyroot Bark", "aether_log", "aether_log"],
        ["wisprootLog", "Wisproot Log", "wisproot_log_top", "wisproot_log"],
        ["goldenLog", "Golden Log", "goldenoak_log_top", "goldenoak_log"]
    ]);
})();


IDRegistry.genBlockID("plankSkyroot");
Block.createBlock("plankSkyroot", [
    {name: "Skyroot Planks", texture: [["skyroot_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankSkyroot, "wood");

IDRegistry.genBlockID("plankSkyrootS");
Block.createBlock("plankSkyrootS", [
    {name: "Skyroot Planks Slab", texture: [["skyroot_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankSkyrootS, "wood");
TileRenderer.makeSlab(BlockID.plankSkyrootS, BlockID.plankSkyroot);

IDRegistry.genBlockID("stairsSkyroot");
Block.createBlock("stairsSkyroot", [
    {name: "Skyroot Stairs", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("fenceSkyroot");
Block.createBlock("fenceSkyroot", [
    {name: "Skyroot Fence", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_FENCE_WOOD);

ToolAPI.registerBlockMaterial(BlockID.skyrootLog, "wood");

IDRegistry.genBlockID("greenskyrootLeaves");
Block.createBlock("greenskyrootLeaves", [
    {name: "green Skyroot Leaves", texture: [["green_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("greenskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.greenskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.greenskyrootLeaves, "plant");



IDRegistry.genBlockID("greenskyrootSapling");
Block.createBlock("greenskyrootSapling", [{name: "green Skyroot Tree Sapling", texture: [["green_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("greenskyrootSapling", function(){
    return [[ItemID.greenskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("greenskyrootSapling");
Item.createItem("greenskyrootSapling", "green Skyroot Tree Sapling", {name: "green_skyroot_sapling", data: 0});

setPlantModel(BlockID.greenskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.greenskyrootSapling, "plant");


Callback.addCallback("ItemUse",function(crd,item, b, is, player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.greenskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.greenskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});
 
Block.setRandomTickCallback(BlockID.greenskyrootSapling, function(x, y, z, id, data){  
var coords = coords.relative; 
 var rnd = new java.util.Random(); 
  if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      if(rnd.nextFloat() < 0.7){
      greenN.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd); 
         }else{       
      greenNM.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
         }
     }
});

Callback.addCallback("PostLoaded", function () {        
Recipes.addShaped({id: BlockID.plankSkyroot, count: 4, data: 0}, [
        "a"
    ], ['a',BlockID.skyrootLog, 0]);

Recipes.addShaped({id: BlockID.skyrootBark, count: 4, data: 0}, [
        "aa",
        "aa"
    ], ['a',BlockID.skyrootLog, 0]);
/*
Recipes.addShaped({id: BlockID.skyrootWorkbench, count: 1, data: 0}, [

        "aa ",
        "aa ",
        "   "
    ], ['a',BlockID.plankSkyroot, 0]);*/
    
Recipes.addShaped({id: BlockID.skyrootChest, count: 4, data: 0}, [

        "aaa",
        "a a",
        "aaa"
    ], ['a',BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: ItemID.stickSkyroot, count: 4, data: 0}, [
        "a",
        "a"
    ], ['a',BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
});