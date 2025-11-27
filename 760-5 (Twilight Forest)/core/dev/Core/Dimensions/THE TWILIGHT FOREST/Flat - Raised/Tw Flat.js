if(__config__.access("Dimensions Biome Flat") == true){
var TwilightForest = new Dimensions.CustomDimension("TwilightForest", 28427); 
TwilightForest.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 70, 
            yConversion: [[.0, 0], [0, 0]],
            material: {base: 1, surface: {id: 3, data: 0, width:4}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));


}












//overword//
/*
PortalUtils.newPortalBlock("twPortalOu", ["TwilightForest_portal", 0], {type: "h-plane", frameId: 2}, true);
var shapeTwOu = new PortalShape();
shapeTwOu.setPortalId(BlockID.twPortalOu);
shapeTwOu.setFrameIds(BlockID.twPortalOu);
shapeTwOu.setMinSize(2, 3);

Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTwOu.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTwOu.buildPortal(rect, false);      
   }
}); 
    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortalOu) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortalOu, [2]);
    }
}); 

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0) {
    Dimensions.transfer(Player.get(), 0);
   shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortalOu && Player.getDimension().id != 0)
       Dimensions.transfer(Player.get(), 0);   
      shapeTwOu.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});
*/














/*
function setStructureWorld(name, coords, rotation){
let stru = FileTools.ReadJSON(__dir__+"/objects/"+name);
for(let i in stru){
switch(rotation || 0){
case 0:
var x1 = stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 1:
var x1 = stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
case 2:
var x1 = -stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 3:
var x1 = -stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
}
World.setBlock(x1+coords.x, y1+coords.y, z1+coords.z, stru[i].id, stru[i].data);
}
}




Callback.addCallback("PreProcessChunk", function(chunkX, chunkZ, random, dimension){
if(dimension == TwilightForest.id){
    for(let i = 0;i <= random.nextInt(14)+2;i++){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(4+i), 96, chunkZ*16 + random.nextInt(4+i));
if(World.getBlock(coords.x, coords.y+1, coords.z).id==0)World.setBlock(coords.x, coords.y+1, coords.z, 31, random.nextInt(2));
}
let r = random.nextInt(1000);
if(r == 1){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
Utility.setStruc("structure2", coords);
gen.fillChest(coords.x, coords.y, coords.z);
}else if(r <= 3){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
DungeonCore.setStructure("structure1", coords.x, coords.y, coords.z);
gen.fillChest(coords.x, coords.y+2, coords.z);
}else if(r <= 8){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("cottage.json", coords, 0);
}else if(r <= 30){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("chest.json", coords, 0);
gen.fillChestSid(coords.x, coords.y+8, coords.z, random);
}else if(r <= 830){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("oak_"+(random.nextInt(1)+1)+".json", coords, random.nextInt(3));
}
}
});
*/



