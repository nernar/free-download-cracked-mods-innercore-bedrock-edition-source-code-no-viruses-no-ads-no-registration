/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js

var radius = __config__.access("LDradius");
var bid;
var bdata;


Callback.addCallback('PostLoaded', function () {
if(radius > 5){
	radius == 5;
}
});


function destroy (x, y, z, id, data) {
	gblock = World.getBlock(x, y, z);
	if (gblock.id == id && gblock.data == data) {
		World.destroyBlock (x, y, z, true);
		}
};

Callback.addCallback ("DestroyBlock", function (coords, block, player) {
	player = Player.get();
	if (Entity.getSneaking(player)) {
       bid = block.id;
       bdata = block.data;
       for (var dx = -radius; dx < radius; dx++) {
       for (var dy = -radius; dy < radius; dy++) {
       for (var dz = -radius; dz < radius; dz++) {
           destroy(coords.x+dx, coords.y+dy, coords.z+dz, bid, bdata);
           }
		  }
	     }
}
});






