var Optimization = WRAP_JAVA("com.reider.aw.Optimization");
Optimization = new Optimization();

const radius = 6;

let chests = [VanillaBlockID.chest, VanillaBlockID.trapped_chest];

Callback.addCallback("tick", function(){
	let ents = Optimization.getAllWhiteList(["minecraft:creeper<>"])
	for(let i = 0;i < ents.size();i++){
		let ent = ents.get(i);
		let pos = Entity.getPosition(ent);
		pos.x = Math.floor(pos.x);
		pos.y = Math.floor(pos.y);
		pos.z = Math.floor(pos.z);
		let region = BlockSource.getDefaultForActor(ent);
		for(let x = pos.x - radius;x < pos.x + radius;x++)
			for(let y = pos.y - radius;y < pos.y + radius;y++)
				for(let z = pos.z - radius;z < pos.z + radius;z++){
					let id = region.getBlockId(x,y,z);
					if(chests.indexOf(id) != -1){
						let coords = {x:x,y:y,z:z};
						Entity.lookAtCoords(ent, coords);
						Entity.moveToTarget(ent, coords, {});
						if(Entity.getDistanceBetweenCoords(pos, coords) < 2){
							Entity.setHealth(ent, -1);
							region.explode(x, y, z, 4, false);
						}
					}
				}
	}
});