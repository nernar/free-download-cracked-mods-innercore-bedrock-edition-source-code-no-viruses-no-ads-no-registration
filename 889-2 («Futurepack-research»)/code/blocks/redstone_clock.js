function getDimension(region){
	let injector = new Injector(region.getPointer());
	let dimension = injector.getPointerResult("_ZN11BlockSource12getDimensionEv");
	injector.free();
	return dimension;
}

function getCircuitSystem(region){
	let injector = new Injector(getDimension(region));
	let system = injector.getPointerResult("_ZN9Dimension16getCircuitSystemEv");
	injector.free();
	return system;
}
let cache = {};
function redstoneUpdate(region, x, y, z, strength){
	let system = cache[region.getDimension()];
	if(!system){
		cache[region.getDimension()] = getCircuitSystem(region);
		system = cache[region.getDimension()];
	}
	let injector = new Injector(system);
	let pos = new BlockPos(x, y, z);
	injector.setArgsType(["ptr", "int"]).call("_ZN13CircuitSystem11setStrengthERK8BlockPosi", [
		Parameter.getPointer(pos),
		Parameter.getInt(strength||10)
	]);
	injector.free();
	pos.free();
}
Callback.addCallback("ItemUse", function(pos, item, block, is, player){
    if(item.id == 280)
        Updatable.addUpdatable({
            tick: 0,
            update(){
                if(this.tick >= 20)
                    this.remove = true;
                redstoneUpdate(BlockSource.getDefaultForActor(player), pos.x, pos.y, pos.z, 5);
            }
        })
});
