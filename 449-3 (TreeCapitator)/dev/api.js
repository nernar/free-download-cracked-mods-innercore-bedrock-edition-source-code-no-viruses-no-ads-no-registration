let TreeData = [ ];

let TreeCapitator = {
	getTreeData: function(block){
		for(let i in TreeData){
			let tree = TreeData[i];
			if(this.isTreeBlock(block, tree.log)){
				return tree;
			}
		}
		return null;
	},
	isTreeBlock: function(block, array){
		let id = block.id, data = block.data % 4;
		for(let i in array){
			block = array[i];
			if(block[0] == id && (block[1] == -1 || block[1] == data)){
				return true;
			}
		}
		return false;
	},
	/* format
	[id, data] or [[id1, data1], [id2, data2], ...]
	data -1 for all block variations
	*/
	registerTree: function(log, leaves, leavesRadius){
		if(typeof log[0] !== "object") log = [log];
		if(typeof leaves[0] !== "object") leaves = [leaves];
		TreeData.push({log: log, leaves: leaves, radius: leavesRadius || 5});
	}
}

TreeCapitator.registerTree([17, 0], [18, 0], 6);
TreeCapitator.registerTree([17, 1], [18, 1]);
TreeCapitator.registerTree([17, 2], [18, 2]);
TreeCapitator.registerTree([17, 3], [18, 3], 7);
TreeCapitator.registerTree([162, 0], [161, 0]);
TreeCapitator.registerTree([162, 1], [161, 1], 6);

ModAPI.registerAPI("TreeCapitator", TreeCapitator);

let calculateDestroyTime;
Callback.addCallback("LevelLoaded", function(){
	calculateDestroyTime = __config__.getBool("calculate_destroy_time");
});