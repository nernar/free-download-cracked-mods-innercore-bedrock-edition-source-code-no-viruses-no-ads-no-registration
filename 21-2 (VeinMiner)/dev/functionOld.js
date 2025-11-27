/*function breakVeinBlock (x, y, z, id, data, repits) {
	var curBlock = World.getBlock(x, y, z);
	if (curBlock.id == id && curBlock.data == data && repits >= 0) {
      alert("f");
		World.destroyBlock (x, y, z, true);
		breakVeinBlock (x + 1, y, z, id, data, repits - 1);
		breakVeinBlock (x - 1, y, z, id, data, repits - 1);
		breakVeinBlock (x, y + 1, z, id, data, repits - 1);
		breakVeinBlock (x, y - 1, z, id, data, repits - 1);
		breakVeinBlock (x, y, z + 1, id, data, repits - 1);
		breakVeinBlock (x, y, z - 1, id, data, repits - 1);
		
		breakVeinBlock (x + 1, y + 1, z, id, data, repits - 1);
		breakVeinBlock (x + 1, y - 1, z, id, data, repits - 1);
		breakVeinBlock (x + 1, y, z + 1, id, data, repits - 1);
		breakVeinBlock (x + 1, y, z - 1, id, data, repits - 1);
		
		breakVeinBlock (x, y + 1, z + 1, id, data, repits - 1);
		breakVeinBlock (x, y + 1, z - 1, id, data, repits - 1);
		breakVeinBlock (x, y - 1, z + 1, id, data, repits - 1);
		breakVeinBlock (x, y - 1, z - 1, id, data, repits - 1);
		
		breakVeinBlock (x - 1, y + 1, z, id, data, repits - 1);
		breakVeinBlock (x - 1, y - 1, z, id, data, repits - 1);
		breakVeinBlock (x - 1, y, z + 1, id, data, repits - 1);
		breakVeinBlock (x - 1, y, z - 1, id, data, repits - 1);
	}
};

Callback.addCallback ("DestroyBlock", function (coords, block, player) {
alert ("h");
	if (Entity.getSneaking(Player.get())) {
      alert("g");
		breakVeinBlock (coords.x + 1, coords.y, coords.z, block.id, block.data, radius);
		breakVeinBlock (coords.x - 1, coords.y, coords.z, block.id, block.data, radius);
		breakVeinBlock (coords.x, coords.y + 1, coords.z, block.id, block.data, radius);
		breakVeinBlock (coords.x, coords.y - 1, coords.z, block.id, block.data, radius);
		breakVeinBlock (coords.x, coords.y, coords.z - 1, block.id, block.data, radius);
		breakVeinBlock (coords.x, coords.y, coords.z + 1, block.id, block.data, radius);
	}
	
})*/