var pause_tick = false

getCallback().addCallback("ItemUse", function(coords, item, block) {
	let x = coords.relative.x;
	let y = coords.relative.y;
	let z = coords.relative.z;
	
	if (item.id == ModItemID.fertilizer) {
		newPlayer.decreaseCarriedItem();
		
		pause_tick = true
		
		// alert(block.id)
		
		// newWorld.setBlock(x, y, z, BlockID.liquidSource, 0);
		
		Particles.addFarParticle(33, x + 0.5, y + 0.5, z + 0.5, 0, 20, 0)
	} /*else if (block.id == 35 || block.id == getModID('Block').kapok_block) {
	  if (item.id == 359 || item.id == 0) {
	    var _ = {'ToolAPI': null}
	    var to_add = ''
	    try {
	      _.ToolAPI = ToolAPI
	    } catch (e) {}
	    
	    if (_.ToolAPI == null) {
	      _.ToolAPI = newToolAPI;
	      to_add = 'new'
	    }
	    
	    var result = _.ToolAPI.getDestroyTimeViaTool(block, item, coords, false)
	    
	    var resultIsCorrect = false;
	    
	    if (result == 0.800000011920929) {
	      resultIsCorrect = true
	    }
	    
	    objectToString.print(to_add+'ToolAPI.getDestroyTimeViaTool:', result, resultIsCorrect)
	  }
	}
	*/
/*
	else if (item.id == apple_sauce_id) {
		newPlayer.decreaseCarriedItem();
	}
*/
});
