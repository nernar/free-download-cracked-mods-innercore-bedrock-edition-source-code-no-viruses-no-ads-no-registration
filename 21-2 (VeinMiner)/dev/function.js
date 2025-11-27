var radius = __config__.access("radius");

var curId;
var curData;
var blocks = [];


Callback.addCallback ("DestroyBlock", function (coords, block, player) {
	if (Entity.getSneaking(Player.get())) {
		blocks = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
		blocks[1].push ({x: coords.x + 1, y: coords.y, z: coords.z});
		blocks[1].push ({x: coords.x - 1, y: coords.y, z: coords.z});
		blocks[1].push ({x: coords.x, y: coords.y + 1, z: coords.z});
		blocks[1].push ({x: coords.x, y: coords.y - 1, z: coords.z});
		blocks[1].push ({x: coords.x, y: coords.y, z: coords.z + 1});
		blocks[1].push ({x: coords.x, y: coords.y, z: coords.z - 1});
		curId = block.id;
		curData = block.data;
		for (var xx = 1; xx < radius; xx++){
			for (var i = 0; i < blocks[xx].length; i++) {
			testBlock (blocks[xx][i].x, blocks[xx][i].y, blocks[xx][i].z, curId, curData, xx+1)
			} 
		}
	}
})

function testBlock (x, y, z, id, data,n) {
	var curBlock = World.getBlock(x, y, z);
	if (curBlock.id == id && curBlock.data == data) {
		World.destroyBlock (x, y, z, true);
		blocks[n].push ({x: x + 1, y: y, z: z});
		blocks[n].push ({x: x - 1, y: y, z: z});
		blocks[n].push ({x: x, y: y + 1, z: z});
		blocks[n].push ({x: x, y: y - 1, z: z});
		blocks[n].push ({x: x, y: y, z: z + 1});
		blocks[n].push ({x: x, y: y, z: z - 1});
	}
};