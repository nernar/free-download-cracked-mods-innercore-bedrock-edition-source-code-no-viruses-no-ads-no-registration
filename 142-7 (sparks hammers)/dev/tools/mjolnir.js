let cooldown = 0;
IDRegistry.genItemID("hamMjolnir");
Item.createItem("hamMjolnir", "Mjolnir", {name: "hamIron"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamMjolnir, {level: 10, durability: 25, efficiency: 10, damage: 10}, ["stone"], {onBroke: function(){return true}});
Item.setGlint(ItemID.hamMjolnir, true);
Item.registerNoTargetUseFunction("hamMjolnir", function(item){
	if(!item.data){
		const pos = Player.getPosition();
		const vec = Entity.getLookVector(Player.get());
		const c = {};
		const oldArray = Entity.getAll();
		const array = [];
		for(let i = oldArray.length; i--;){
			!Entity.isAbiosis(Entity.getType(oldArray[i])) && !Player.isPlayer(oldArray[i]) && array.push(oldArray[i]);
		}
		label:
		for(let t = 0; t <= 128; t++){
			c.x = pos.x + vec.x * t;
			c.y = pos.y + vec.y * t;
			c.z = pos.z + vec.z * t;
			for(let i = array.length; i--;){
				if(Entity.getDistanceToCoords(array[i], c) < 4){
					Entity.spawn(c.x, c.y + 1, c.z, 93);
					Entity.setHealth(array[i], Entity.setHealth(array[i]) - 10);
					Player.setCarriedItem(ItemID.hamMjolnir, 1, 25);
					break label; 
				}
			}
			if(World.getBlockID(c.x, c.y, c.z)){
				t >= 16 &&
					Entity.spawn(c.x, c.y + 1, c.z, 93) &
					Player.setCarriedItem(ItemID.hamMjolnir, 1, 25);
				break label;
			}
		}
	}
});

Callback.addCallback("tick", function(){
	if(!(World.getThreadTime() & 7)){
		const item = Player.getCarriedItem();
		item.id == ItemID.hamMjolnir && item.data && Player.setCarriedItem(ItemID.hamMjolnir, 1, item.data - 1);
	}
});

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const dummy = {id: ItemID.hamMjolnir, count: 1, data: -10};
	if(item.id == ItemID.hamMjolnir){
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side & 6){
				case 0:
					if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy))return;
					break;
				case 2:
					if(SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy))return;
					break;
				case 4:
					if(SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy))return;
					break;
			}
		}
		}
		Player.setCarriedItem(item.id, 1, item.data - 1);
	}
});