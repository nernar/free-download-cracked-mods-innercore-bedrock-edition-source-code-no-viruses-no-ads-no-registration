var waitTime = __config__.getNumber("waitTime")/5;
var showParticles = __config__.getBool("showParticles");
var allTheParticles = __config__.getBool("allTheParticles");

function getBlocks(pos, region, radius, ids){
	let arr = [];
	pos.x = Math.floor(pos.x);
	pos.y = Math.floor(pos.y);
	pos.z = Math.floor(pos.z);
	for(let x = pos.x - radius;x < pos.x + radius;x++)
		for(let y = pos.y - radius;y < pos.y + radius;y++)
			for(let z = pos.z - radius;z < pos.z + radius;z++)
				if(ids.indexOf(region.getBlockId(x,y,z)) != -1)
					arr.push([x, y, z]);
	return arr;
}

function getSpeed(){
	return (Math.random()/10)-(Math.random()/10);
}

let shift = {};

IMPORT("ParticlesCore");

let saplings = [6];

Callback.addCallback("ServerPlayerTick", function(player){
	if(World.getThreadTime() % 4 == 0){
		if(!shift[player] == Entity.getSneaking(player))
			return;
		let region = BlockSource.getDefaultForActor(player);
if(!region) return;
		let p_pos = Entity.getPosition(player);
		let blocks = getBlocks(p_pos, region, 2, saplings);
		for(let i in blocks){
			let pos = {
				x: blocks[i][0],
				y: blocks[i][1],
				z: blocks[i][2]
			};
			if(Math.random() <= .45){
				boost(region, pos, 0, 1);
				let block = region.getBlock(pos.x, pos.y, pos.z);
				com.zhekasmirnov.innercore.api.NativeBlock.onRandomTickCallback(pos.x, pos.y, pos.z, block.id, block.data, region)
			}else if(showParticles){
				let group = new ParticlesCore.Group();
				for(i=0;i<(allTheParticles?10:3);i++)
					group.add("happyVillager", pos.x + 0.4 + Math.random()/7, pos.y + 0.6 + Math.random()/2, pos.z + 0.4 + Math.random()/7, getSpeed(), 0.05, getSpeed());
				group.send(region);
			}
		}
		shift[player] = !Entity.getSneaking(player);
	}
});
ModAPI.addAPICallback("ICore", function(){
	saplings.push(BlockID.rubberTreeSapling);
});
ModAPI.registerAPI("TreeGlowing", {
	saplings: saplings,
	requireGlobal(cmd){
		return eval(cmd);
	}
});