//black
IDRegistry.genItemID("ex_slimeBallBlack");
Item.createItem("ex_slimeBallBlack", "Black Slime Ball", {
    name: "ex_BlackSlimeBall",
    meta: 0
});
/*
IDRegistry.genItemID("emeraldBlack");
Item.createItem("emeraldBlack","Black Emerald",
{name:"ex_BlackEmerald", meta:   0  });
IDRegistry.genBlockID("emeraldBlack"); 
Block.createBlock("emeraldBlack", [
{name: "", texture: 
[["黑色绿宝石", 0]], inCreative: false}
]);
Block.setShape(BlockID.emeraldBlack, 7.5/16, c0, c0, 8.5/16, c16, c16);
Item.registerUseFunction("emeraldBlack", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
World.setBlock(place.x, place.y, place.z, BlockID.emeraldBlack);
Player.setCarriedItem(item.id, item.count - 1, item.data);
World.addTileEntity(place.x, place.y, place.z);
}
});

Callback.addCallback("Explosion", function(coords, params){
var x = coords.x;
var y = coords.y;
var z = coords.z;
if(World.getBlockID(x,y,z)===BlockID.emeraldBlack&&
World.getBlockID(x,y+1,z)!==0&&World.getBlockID(x+1,y,z)!==0&&World.getBlockID(x,y,z+1)!==0&&World.getBlockID(x,y-1,z)!==0&&World.getBlockID(x-1,y,z)!==0&&World.getBlockID(x,y,z-1)!==0){
Particles.line(ParticleType.flame,x+1,x-1,0.2,1,0);
Particles.line(ParticleType.flame,y+1,y-1,0.2,1,0);
Particles.line(ParticleType.flame,z+1,z-1,0.2,1,0);
Particles.line(ParticleType.flame,x+1,y-1,0.2,1,0);
Particles.line(ParticleType.flame,x+1,z-1,0.2,1,0);
Particles.line(ParticleType.flame,y+1,x-1,0.2,1,0);
Particles.line(ParticleType.flame,y+1,z-1,0.2,1,0);
Particles.line(ParticleType.flame,z+1,x-1,0.2,1,0);
Particles.line(ParticleType.flame,z+1,y-1,0.2,1,0);
Player.setCarriedItem(264,count+2,0);
}
});
*/
EXCore.defineAllSalts("Copper","ore_salts_copper");
EXCore.defineAllSalts("Tin","ore_salts_tin");
EXCore.defineAllSalts("Lead","ore_salts_lead");
EXCore.defineAllSalts("Silver","ore_salts_silver");
EXCore.defineAllSalts("Iron","ore_salts_Iron");
EXCore.defineAllSalts("Gold","ore_salts_gold");
EXCore.defineAllSalts("Nickel","ore_salts_nickel");
EXCore.defineAllSalts("Platinum","ore_salts_platinum");

