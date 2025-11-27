IDRegistry.genItemID("hamGiant");
Item.createItem("hamGiant", "Giant Hammer", {name: "hamGiant"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamGiant, {level: 3, durability: 9000, efficiency: 1.8, damage: 8}, ["stone"]);
SHammer.setRecipe([42, 42, 42, 42, 42, 42, 42, "351:5", 42, 42], ItemID.hamGiant);

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	if(item.id == ItemID.hamGiant){
		for(let i = -4; i <= 4; i++){
		for(let j = -4; j <= 4; j++){
			switch(c.side & 6){
				case 0:
					if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", item))return;
					break;
				case 2:
					if(SHammer.destroy(c.x + i, c.y + j + 3, c.z, "stone", item))return;
					break;
				case 4:
					if(SHammer.destroy(c.x, c.y + i + 3, c.z + j, "stone", item))return;
					break;
			}
		}
		}
		Player.setCarriedItem(item.id, 1, item.data);
	}
});