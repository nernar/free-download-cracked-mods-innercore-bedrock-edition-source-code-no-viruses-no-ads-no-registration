function blood_thorn(x,y,z){
	GenerationUtils.lockInBlock(BlockID.bloodbrick, 0, 0, false);
  GenerationUtils.setLockedBlock(x, y, z );
  GenerationUtils.setLockedBlock(x , y + 1, z);
  GenerationUtils.setLockedBlock(x, y + 2, z);  
  GenerationUtils.setLockedBlock(x, y + 3, z);
  GenerationUtils.setLockedBlock(x + 1, y + 5, z);
  GenerationUtils.setLockedBlock(x - 1, y + 5, z);  
  GenerationUtils.setLockedBlock(x, y + 5, z + 1);
  GenerationUtils.setLockedBlock(x, y + 5, z - 1);
  GenerationUtils.setLockedBlock(x, y + 4, z); 
    GenerationUtils.setLockedBlock(x + 1, y, z);
  GenerationUtils.setLockedBlock(x - 1, y, z);  
  GenerationUtils.setLockedBlock(x, y, z + 1);
  GenerationUtils.setLockedBlock(x, y, z - 1);
  World.setBlock(x, y + 5, z, 87, 0);
World.setBlock(x, y + 6, z, 51, 0);
World.setBlock(x, y, z, 54, 4);
  World.setBlock(x + 1, y + 6, z, BlockID.diamondfence, 0);
World.setBlock(x - 1, y + 6, z, BlockID.diamondfence, 0);
World.setBlock(x, y + 6, z - 1, BlockID.diamondfence, 0);
World.setBlock(x, y + 6, z + 1, BlockID.diamondfence, 0);
fillChest(x, y, z);
}

Callback.addCallback("GenerateChunk", function(a,b){
	for(var i = 0; i < 60; i++){
		d=GenerationUtils.randomCoords(a,b,1,250);
		for(var k=60;k<256;k++){
			if (Math.random() < .0005){
		if(World.getBlockID(d.x,k,d.z)==BlockID.blooddirt){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
}
}blood_thorn(d.x,k+1,d.z);return}
		}
	 } 
	}
	});
	
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
addItemsToGenerateChest(ItemID.blo0, 0.2);
addItemsToGenerateChest(ItemID.bloodskale, 0.8, {max:6});
addItemsToGenerateChest(ItemID.bloodbone, 0.9, {max:8});
addItemsToGenerateChest(ItemID.soul_vita, 0.1);
addItemsToGenerateChest(ItemID.enchanted_soul, 0.05);
addItemsToGenerateChest(ItemID.skull, 0.13);
addItemsToGenerateChest(ItemID.bloodiron, 0.2, {max:4});
addItemsToGenerateChest(ItemID.bloodknife, 0.35, {max:16});
addItemsToGenerateChest(367, 0.9, {max:10});


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