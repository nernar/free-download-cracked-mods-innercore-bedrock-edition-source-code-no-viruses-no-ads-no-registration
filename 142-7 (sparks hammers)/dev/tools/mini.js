IDRegistry.genItemID("hamMini");
Item.createItem("hamMini", "Mini Hammer", {name: "hamMini"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamMini, {level: 3, durability: 750, efficiency: 3.6, damage: 5}, ["stone"]);
SHammer.setRecipe([0, 265, 265, 265, 0, 0, 265, 265, 265, 0], ItemID.hamMini);

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const player = Player.get();
	const sneak = Entity.getSneaking(Player.get());
	if(item.id == ItemID.hamMini){
		let yaw = ((Entity.getLookAngle(player).yaw * 180 / Math.PI) - 45) / 90;
		yaw < 0 && yaw--;
		yaw &= 1;
		let flag = !!yaw;
		sneak && (flag = !flag);
		for(let i = -1; i <= 1; i++){
			if(c.side >= 2){
				if(sneak){
					if(c.side < 4){
						if(SHammer.destroy(c.x + i, c.y, c.z, "stone", item))return;
					}
					else{
						if(SHammer.destroy(c.x, c.y, c.z + i, "stone", item))return;
					}
				}
				else{
					if(SHammer.destroy(c.x, c.y + i, c.z, "stone", item))return;
				}
			}
			else{
				if(flag){
					if(SHammer.destroy(c.x, c.y, c.z + i, "stone", item))return;
				}
				else{
					if(SHammer.destroy(c.x + i, c.y, c.z, "stone", item))return;
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data);
	}
});