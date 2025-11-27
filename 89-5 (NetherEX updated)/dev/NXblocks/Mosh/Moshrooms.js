
//MOSH
IDRegistry.genBlockID("moshS");
Block.createBlockWithRotation("moshS", [
{name: "Elder Moshroom Stem", texture: [["MEF", 0],["MEF", 0],["MES", 0],["MES", 0], ["MES", 0],["MES", 0]], inCreative: true}
], "opaque");
    
IDRegistry.genBlockID("moshCr");
Block.createBlockWithRotation("moshCr", [
{name: "Rad Elder Moshroom Cap", texture: [["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0]], inCreative: true }
], "opaque");
Block.registerDropFunction("moshCr", function(){
    if(Math.random() < .080){
        return [[ItemID.rmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});
   
IDRegistry.genBlockID("moshCb");
Block.createBlockWithRotation("moshCb", [
{name: "Brown Elder Moshroom Cap", texture: [["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0]],
inCreative: true}], "opaque");
Block.registerDropFunction("moshCb", function(){
    if(Math.random() < .080){
        return [[ItemID.bmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("MushroomEnokiCap");
Block.createBlockWithRotation("MushroomEnokiCap", [
{name: "Mushroom Enoki Cap", texture: [["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0]],
inCreative: true}]);
Block.registerDropFunction("MushroomEnokiCap", function(){
    if(Math.random() < .125){
        return [[ItemID.EnMushroom, 1, 0]]
    }
    else {
        return [];
    }
});

function setMoshRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

IDRegistry.genBlockID("gifMosh");
Block.createBlock("gifMosh", [
    {name: "Moshroom", texture: [["plant_Enoki", 0]], inCreative: true}]);

setMoshRender(BlockID.gifMosh, 1/2, "nx-en");

setMoshRender(BlockID.MushroomEnokiCap, 1/1, "nx-en");

BlockRenderer.addRenderCallback(BlockID.gifMosh, function(api, block) {
var coords = coords.relative;     
if(World.getBlockID(coords.x, coords.y+1, coords.z)==87){
setMoshRender(87, 1/1, "nx-en");
Game.message("molodec");
}else{
Game.message("DOLBAYOB");
World.destroyBlock(coords.x,coords.y,coords.z,false);
           }     
});            	