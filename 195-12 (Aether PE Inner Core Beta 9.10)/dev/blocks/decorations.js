IDRegistry.genBlockID("ambrosiumTorch");
Block.createBlock("ambrosiumTorch", [
    {name: "Aether Torch", texture:[["aetherbookshelf", 1], ["ambrosium_torch", 1], ["ambrosium_torch", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setBlockShape(BlockID.ambrosiumTorch, {x: 0.45, y: 0, z: 0.45}, {x: 0.55, y: 0.6, z: 0.55})   
    
IDRegistry.genItemID("ambrosiumTorch");
Item.createItem("ambrosiumTorch", "Aether Torch", {name: "ambrosium_torch"});
        
Item.registerUseFunction("ambrosiumTorch", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ambrosiumTorch,0);       
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});    

Recipes.addShaped({id: BlockID.ambrosiumTorch, count: 1, data: 0}, [
    "a",
    "b",
], ['a', ItemID.Ambrosium, 0, 'b', ItemID.stickSkyroot, 0]);

IDRegistry.genBlockID("boockselfAether");
Block.createBlockWithRotation("boockselfAether", [
{name: "Aether Boockself", texture: [["aetherbookshelf", 1], ["aetherbookshelf", 1], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.boockselfAether, "wood", 0, true);

Recipes.addShaped({id: BlockID.boockselfAether, count: 3, data: 0}, [
    "xxx",
    "ccc",
    "xxx"
], ['c', 340, 0, 'x', BlockID.plankSkyroot, 0]);

IDRegistry.genBlockID("presentAether");
Block.createBlockWithRotation("presentAether", [
{name: "Aether Present", texture: [["present", 0], ["present", 1], ["present", 0], ["present", 0], ["present", 0], ["present", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.presentAether, "wood", 0, true);

var PRESENT_RANDOM_DROP = [
    {chance: 40, id: ItemID.candyCane, data: 0},
    {chance: 38, id: ItemID.candyCorn, data: 0},
    {chance: 21, id: ItemID.zaniteGemstone, data: 0},
];

function getPresentDropItem(){
    var total = 0;
    for (var i in PRESENT_RANDOM_DROP){
        total += PRESENT_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in PRESENT_RANDOM_DROP){
        var drop = PRESENT_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.ambrosiumTorch, data: 0};
}

Block.registerDropFunction("presentAether", function(coords,item, block){
 var drop = getPresentDropItem();
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
});

IDRegistry.genBlockID("ladderSkyroot");
Block.createBlock("ladderSkyroot", [
    {name: "Skyroot ladder", texture: [["skyroot_ladder", 0]],inCreative: true}], BLOCK_TYPE_Ladder);
ToolAPI.registerBlockMaterial(BlockID.ladderSkyroot, "wood", 0, true);

IDRegistry.genBlockID("pillarHolystone");
Block.createBlock("pillarHolystone", [
    {name: "Holystone pillar", texture: [["holystone", 0], ["holystone_base_top", 0], ["holystone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksHolystone");
Block.createBlock("basebricksHolystone", [
    {name: "Holystone base bricks", texture: [["holystone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("basepillarHolystone");
Block.createBlock("basepillarHolystone", [
    {name: "Holystone base pillar", texture: [["holystone_base_bricks", 0], ["holystone_base_top", 0], ["holystone_basepillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystone");
Block.createBlock("capstonebricksHolystone", [
    {name: "Holystone capstone bricks", texture: [["holystone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonepillarHolystone");
Block.createBlock("capstonepillarHolystone", [
    {name: "Holystone capstone pillar", texture: [["holystone_capstone_bricks", 0], ["holystone_base_top", 0], ["holystone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystone");
Block.createBlock("flagstonebricksHolystone", [
    {name: "Holystone flagstone bricks", texture: [["holystone_flagstones", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("headstoneHolystone");
Block.createBlock("headstoneHolystone", [
    {name: "Holystone headstone", texture: [["holystone_headstone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystone, "stone", 3, true);


IDRegistry.genBlockID("pillarIcestone");
Block.createBlock("pillarIcestone", [
    {name: "Icestone pillar", texture: [["icestone", 0], ["icestone_keystone", 0], ["icestone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestone");
Block.createBlock("basebricksIcestone", [
    {name: "Icestone base bricks", texture: [["icestone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("basepillarIcestone");
Block.createBlock("basepillarIcestone", [
    {name: "Icestone base pillar", texture: [["icestone_base_bricks", 0], ["icestone_keystone", 0], ["icestone_base_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestone");
Block.createBlock("capstonebricksIcestone", [
    {name: "Icestone capstone bricks", texture: [["icestone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonepillarIcestone");
Block.createBlock("capstonepillarIcestone", [
    {name: "Icestone capstone pillar", texture: [["icestone_capstone_bricks", 0], ["icestone_keystone", 0], ["icestone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarIcestone, "stone", 2, true);


IDRegistry.genBlockID("pillarSkyroot");
Block.createBlock("pillarSkyroot", [
    {name: "Skyroot pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("baseplanksSkyroot");
Block.createBlock("baseplanksSkyroot", [
    {name: "Skyroot base planks", texture: [["skyroot_base_planks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.baseplanksSkyroot, "wood", 0, true);

IDRegistry.genBlockID("basepillarSkyroot");
Block.createBlock("basepillarSkyroot", [
    {name: "Skyroot base pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_base_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyroot");
Block.createBlock("floorboardsSkyroot", [
    {name: "Skyroot floorboards", texture: [["skyroot_floorboards", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.floorboardsSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilesSkyroot");
Block.createBlock("tilesSkyroot", [
    {name: "Skyroot tiles", texture: [["skyroot_tiles_small", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilesSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilessSkyroot");
Block.createBlock("tilessSkyroot", [
    {name: "Skyroot tiles small", texture: [["skyroot_tiles", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilessSkyroot, "wood", 0, true);

IDRegistry.genBlockID("CCglass");
Block.createBlock("CCglass", [{name: "Crude scatterglass", texture: [["crude_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("SCglass");
Block.createBlock("SCglass", [{name: "Scatterglass", texture: [["scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("fSCglass");
Block.createBlock("fSCglass", [{name: "Framed scatterglass", texture: [["skyroot_frame_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("SQglass");
Block.createBlock("SQglass", [{name: "Quicksoil glass", texture: [["quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("fSQglass");
Block.createBlock("fSQglass", [{name: "Framed quicksoil glass", texture: [["skyroot_frame_quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);