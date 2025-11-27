IDRegistry.genItemID("hamNetherstar");
Item.createItem("hamNetherstar", "Netherstar Hammer", {name: "hamNetherstar"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamNetherstar, {level: 3, durability: 10, efficiency: 1.8, damage: 8}, ["stone"]);
Item.setGlint(ItemID.hamNetherstar, true);
SHammer.setRecipe([264, 264, 41, 264, 264, 264, 41, 399, 41, 264], ItemID.hamNetherstar);

const target = [];
Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const dummy = {id: ItemID.hamNetherstar, count: 1, data: -10};
	if(item.id == ItemID.hamNetherstar){
		for(let i = 1; i <= 16; i++){
			switch(c.side){
				case 0: target[target.length] = {x: c.x, y: c.y + i, z: c.z, side: 0}; break;
				case 1: target[target.length] = {x: c.x, y: c.y - i, z: c.z, side: 0}; break;
				case 2: target[target.length] = {x: c.x, y: c.y, z: c.z + i, side: 2}; break;
				case 3: target[target.length] = {x: c.x, y: c.y, z: c.z - i, side: 2}; break;
				case 4: target[target.length] = {x: c.x + i, y: c.y, z: c.z, side: 4}; break;
				case 5: target[target.length] = {x: c.x - i, y: c.y, z: c.z, side: 4}; break;
			}	 
		}
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side & 6){
				case 0:
					SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy);
					break;
				case 2:
					SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy);
					break;
				case 4:
					SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy);
					break;
			}
		}
		}
		++item.data <= 10 ?
			Player.setCarriedItem(item.id, 1, item.data) :
			Player.setCarriedItem(0);
	}
});

Callback.addCallback("tick", function(){
	if(target.length && !(World.getThreadTime()&3)){
		const dummy = {id: ItemID.hamNetherstar, count: 1, data: 0};
		const c = target[0];
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side){
				case 0:
					SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy);
					break;
				case 2:
					SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy);
					break;
				case 4:
					SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy);
					break;
			}
		}
		}
		target.shift();
	}
});