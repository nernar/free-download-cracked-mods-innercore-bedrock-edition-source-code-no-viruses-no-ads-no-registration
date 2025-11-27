Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
var dropId = [296, 391, 392, 457];
var seedId = [295, 0, 0, 458];
var countId = [2, 3, 4, 2];
var counsId = [1, 0, 0, 1];
for(var i=0; i<6; i++)
if(block.id == cropId[i] && block.data == 7 ){
World.setBlock(coords.x, coords.y, coords.z, 0);
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 0);
World.drop(coords.x, coords.y, coords.z, dropId[i], countId[i], 0);
World.drop(coords.x, coords.y, coords.z, seedId[i], counsId[i], 0);
Player.addExperience(1);
}}); 