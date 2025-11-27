Callback.addCallback("ItemUse", function(coords){
alert(World.getBlockID(coords.x, coords.y, coords.z));
});