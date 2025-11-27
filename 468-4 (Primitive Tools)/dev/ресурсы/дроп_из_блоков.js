Block.registerDropFunction(31, function(){
  if(Math.random()<=0.70){
    return [[ItemID.rast_volokno,1,0]]
  }
if(Math.random()<=0.60){
    return [[295,1,0]]
  }
});


Block.registerDropFunction(175, function(coords, blockID, data, level, enchant){
  if(level==0){
    if(data==2){
       if(Math.random()<=0.70) {
		    return [[ItemID.rast_volokno,1,0]];
       }
      
		  }
		} 
});

Block.registerDropFunction(18, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.05) {
		    return [[280,1,0]];
      
		  }
		} 
});

Block.registerDropFunction(161, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.05) {
		    return [[280,1,0]];
      
		  }
		} 
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(block.id == 13){
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		var toolData = ToolAPI.getToolData(item.id);
		if (toolData && toolData.modifyEnchant) {
			toolData.modifyEnchant(enchant, item);
		}
		if(ToolAPI.getToolLevelViaBlock(item.id, block.id) == 0){
	World.destroyBlock(coords.x, coords.y, coords.z);
		Entity.damageEntity(Player.get(), 1)	
		}
	}
});


Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(block.id == 17 || block.id == 162){
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		var toolData = ToolAPI.getToolData(item.id);
		if (toolData && toolData.modifyEnchant) {
			toolData.modifyEnchant(enchant, item);
		}
		if(ToolAPI.getToolLevelViaBlock(item.id, block.id) == 0 ){
	World.destroyBlock(coords.x, coords.y, coords.z);
	Entity.damageEntity(Player.get(), 1)		
		}
	}
});

Block.registerDropFunction(13, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.60) {
		    return [[13,1,0]];
      
		  }
  if(Math.random()<=0.80) {
		    return [[318,1,0]];
      
		  }
		} 
});

Block.registerDropFunction(17, function(coords, blockID, data, level, enchant){
 		    return [[17,1,data]];
});

Block.registerDropFunction(162, function(coords, blockID, data, level, enchant){
 		    return [[161,1,data]];
});




