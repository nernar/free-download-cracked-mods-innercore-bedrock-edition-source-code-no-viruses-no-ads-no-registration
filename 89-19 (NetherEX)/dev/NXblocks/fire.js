IMPORT("SoundAPI", "*");
var Renderer={
        setFireRender:function(id,x){
        var shape = new ICRender.CollisionShape();
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 12,
    opaque: false
});
IDRegistry.genBlockID("BlueFire");
Block.createBlock("BlueFire", [
{name: "Blue Fire", texture: [["FireBlue", 0]], inCreative: false}], BLOCK_LIGHT);

Renderer.setFireRender(BlockID.BlueFire,0);


Block.setBlockShape(BlockID.BlueFire, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
ToolAPI.registerBlockMaterial(BlockID.BlueFire, "cobweb");

Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var block = World.getBlockID(entP.x, entP.y, entP.z);
if(block == BlockID.BlueFire){
Entity.setFire(Player.get(), 180);    
}});

Block.registerDropFunction("BlueFire", function(){
    if(Math.random() < .060){
        return [[ItemID.RimeCryst, 1, 0]]
    }
    else {
        return [];
    }
});