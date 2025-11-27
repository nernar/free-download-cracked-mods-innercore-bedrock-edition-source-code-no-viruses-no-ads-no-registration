var generateItems =[ 
]; 

function addItemsToGenerateChest(id, random, count, data){ 
random = random||1; 
count = count||{}; 
count.min = count.min||1; 
count.max = count.max||1; 
data = data||0; 
generateItems.push({id:id, data:data, random:random, count:count}); 
} 

function fillChest(x,y,z){ 
var container = World.getContainer(x, y, z); 
var size = container.getSize(); 
var random = Math.random(); 
var slot = 0; 
for(var i in generateItems){ 
if(random<generateItems[i].random){ 
var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min; 
container.setSlot(slot, generateItems[i].id, count, generateItems[i].data); 
slot++; 
} 
} 
} 

addItemsToGenerateChest(ItemID.oltorf, 0.5, {max:10});
addItemsToGenerateChest(ItemID.olpaper, 0.9, {max:10});
addItemsToGenerateChest(ItemID.olruby, 0.2, {max:5});
addItemsToGenerateChest(ItemID.ankh, 0.5, {max:1});
addItemsToGenerateChest(ItemID.orihalk, 1, {max:20});
addItemsToGenerateChest(ItemID.hpup1, 0.4, {max:2});


//fillChest(coords.x, coords.y, coords.z); - ?????? ??? ???????? ? ?????????(??????) ?? ??????????? x, y, z.?????????? ????? ????
















Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.7){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bluemsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.7){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.brownmsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.minimsh, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olgr1, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olgr2, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       
       //5
       
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z, BlockID.olwood, 0);
       
       //6
       
       
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 56, 0, 4);
    }
}
)



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 16, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 15, 0, 2);
    }
}
)


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwoodmossy, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.olwoodmossy0, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
    	
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.olglow, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.olglow, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.olglow, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.olglow, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.olstonebricksplate, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.olstonebricksplate, 0);
       
       //3
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       
       //4
       
       World.setBlock(coords.x,coords.y+3,  coords.z, 54, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.olstonebricksaede, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.olstonebricksaede, 0);
       
       //5
       
       World.setBlock(coords.x,coords.y+4,  coords.z, 8, 0);
       fillChest(coords.x, coords.y+3, coords.z); 
}}});




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
    	
       World.setBlock(coords.x,coords.y-20,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x+1,coords.y-20,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x,coords.y-21,  coords.z, BlockID.olrubyore, 0);
       World.setBlock(coords.x,coords.y-22,  coords.z+1, BlockID.olrubyore, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.f3, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.olwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.olleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.olbeehive, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.007){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.vasesa, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.starblock, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.starblock, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.starblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.starblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.starblock, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.starblock, 0);
       
       //3
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.starblock, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.staraltar, 0);
       
       //4
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.starblock, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.starblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.starblock, 0);
       
       //5
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.star, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.star, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.star, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.star, 0);
}}});







//swampRooten


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.008){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.mud, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.mud, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.mud, 0);
       
       //2
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+4, BlockID.mud, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.swampaltar, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-5, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       
       //3
       
       World.setBlock(coords.x+5,coords.y+2,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olwood, 0);
       
       //5
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-3, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       //6
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+2, BlockID.olwood, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-7,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       //8
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.mud, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.mud, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.mud, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.mud, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.mud, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.mud, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.mud, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.mud, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.mud, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.mud, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.mud, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       //2
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z+4, BlockID.olwood, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-5, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olleaves, 0);
       
       //3
       
 
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       
       
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olleaves, 0);
       
       //4
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z+3, BlockID.olwood, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-4, BlockID.olwood, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olwood, 0);
       
       //5
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-3, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-5, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-4, BlockID.olwood, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+6, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+5, BlockID.olleaves, 0);
       
       //6
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-2, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-4, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+4, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-1, BlockID.olwood, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+2, BlockID.olwood, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-7,coords.y+5,  coords.z+2, BlockID.olleaves, 0);
       
       //7
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olleaves, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olleaves, 0);
       
       //8
       
       World.setBlock(coords.x+1,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z-1, BlockID.olleaves, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olleaves, 0);
       
       World.setBlock(coords.x-1,coords.y+7,  coords.z+1, BlockID.olleaves, 0);
       
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.006){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==66){ 
       World.setBlock(coords.x,coords.y,  coords.z, 54, 0);
       fillChest(coords.x, coords.y, coords.z);
}}});





Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.006){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
       
       World.setBlock(coords.x+5,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, BlockID.keystone, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //2
       
       World.setBlock(coords.x+6,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+1,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+1,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+1,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+1,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+1,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+1,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //2
       
       World.setBlock(coords.x+6,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+2,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+2,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+2,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+2,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+2,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+2,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+2,  coords.z-1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-9, coords.y+2,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //3
       
       World.setBlock(coords.x+6,coords.y+3,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+3,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+3,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+3,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+3,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+3,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+3,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+3,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4, coords.y+3,  coords.z, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-9, coords.y+3,  coords.z-1, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-9, coords.y+3,  coords.z+1, BlockID.olstonebricksaede, 0);
       
       
       //4
       
       
       World.setBlock(coords.x+6,coords.y+4,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+4,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+4,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+4,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+4,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+4,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+4,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       //5
       
       
       World.setBlock(coords.x+6,coords.y+5,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+5,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+5,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+5,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+5,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+5,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+5,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+5,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+5,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+6, BlockID.olstonebricks, 0);
       
       //6
       
       
       World.setBlock(coords.x+6,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+6,  coords.z-6, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+5,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+5,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-5,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+4,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-4,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-3,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-2,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-1,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x,coords.y+6,  coords.z-5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+5, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.olstonebricks, 0);
       
       
       //7
       
       
       World.setBlock(coords.x+7,coords.y+7,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+7,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+7,  coords.z-3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+6,coords.y+7,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+6,coords.y+7,  coords.z+3, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+5,coords.y+7,  coords.z-5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+5,coords.y+7,  coords.z+5, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       
       
       
       
       World.setBlock(coords.x-2,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-2,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+7,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+7,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-3,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-3,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-4,coords.y+7,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+7,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       
       World.setBlock(coords.x-5,coords.y+7,  coords.z-5, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-5,coords.y+7,  coords.z+5, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-6,coords.y+7,  coords.z-4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+7,  coords.z-3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y+7,  coords.z+4, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-6,coords.y+7,  coords.z+3, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+7,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z-1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+1, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+7,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       //8 up
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z-2, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+7,coords.y+8,  coords.z, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+8,  coords.z-4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+6,coords.y+8,  coords.z+4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+4,coords.y+8,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+4,coords.y+8,  coords.z+6, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+2,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x+2,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       
       
       
       
       
       World.setBlock(coords.x-1,coords.y+8,  coords.z+7, BlockID.olstonebricks, 0);
       World.setBlock(coords.x-1,coords.y+8,  coords.z-7, BlockID.olstonebricks, 0);
       
       
       
       
       
       World.setBlock(coords.x-4,coords.y+8,  coords.z-6, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x-4,coords.y+8,  coords.z+6, BlockID.olstonebricks, 0);
     
       
       
       World.setBlock(coords.x-6,coords.y+8,  coords.z-4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x-6,coords.y+8,  coords.z+4, BlockID.olstonebricks, 0);
       
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z-2, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z, BlockID.olstonebricks, 0);
       
       World.setBlock(coords.x+7,coords.y+8,  coords.z+2, BlockID.olstonebricks, 0);
       
       
       
       
       
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.olobsidian, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z, BlockID.olobsidian, 0);
       
       
       World.setBlock(coords.x+3,coords.y-1,  coords.z, BlockID.vasereaper, 0);
       World.setBlock(coords.x+3,coords.y-2,  coords.z, BlockID.wakefulnessrock, 0);
       
       World.setBlock(coords.x+4,coords.y-1,  coords.z, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+2,coords.y-1,  coords.z, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z+1, BlockID.wakefulnessrock, 0);
       World.setBlock(coords.x+3,coords.y-1,  coords.z-1, BlockID.wakefulnessrock, 0);
       
}}});








Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.004){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.ancientaltar, 0);
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+3,  coords.z, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+4,coords.y+4,  coords.z, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-4, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-4, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z+3, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+3, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+3, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+5, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-5, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-5, BlockID.olstonebricksaede, 0);
       
       
       World.setBlock(coords.x-4,coords.y+1,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+2,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+3,  coords.z+1, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-4,coords.y+4,  coords.z+1, BlockID.olstonebricksaede, 0);
       
       World.setBlock(coords.x-5,coords.y+1,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+2,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+3,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+4,  coords.z-2, BlockID.olstonebrickscracked, 0);
       World.setBlock(coords.x-5,coords.y+5,  coords.z-2, BlockID.olstonebricksaede, 0);
       
}}});




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.003){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.olgrass){ 
	
	//1
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.voidblock, 0);
       
       //2
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, BlockID.voidblock, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, BlockID.voidblock, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, BlockID.voidblock, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.voidblock, 0);
       
       //3
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.voidblock, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.voidaltar, 0);
       
       //4
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.voidblock, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.voidblock, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.voidblock, 0);
       
       //5
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.void, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.void, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.void, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.void, 0);
}}});


















//1171



