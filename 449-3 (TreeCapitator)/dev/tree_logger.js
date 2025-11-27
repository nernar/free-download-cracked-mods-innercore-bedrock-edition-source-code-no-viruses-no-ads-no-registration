let TreeLogger = {
	destroyData: {
		log: null,
		leaves: null
	},
	hasLeaves: false,
	
	checkLog: function(x, y, z, tree, count){
		this.destroyData.log[x+':'+y+':'+z] = true;
		for(let xx = x - 1; xx <= x + 1; xx++){
			for(let zz = z - 1; zz <= z + 1; zz++){
				for(let yy = y; yy <= y + 1; yy++){
					let block = World.getBlock(xx, yy, zz);
					if(TreeCapitator.isTreeBlock(block, tree.leaves)){
						this.hasLeaves = true;
					}
					if(!this.destroyData.log[xx+':'+yy+':'+zz] && TreeCapitator.isTreeBlock(block, tree.log)){
						count++;
						count = this.checkLog(xx, yy, zz, tree, count);
					}
				}
			}
		}
		return count;
	},

	destroyLog: function(x, y, z, block, tree, toolLevel, enchant){
		World.setBlock(x, y, z, 0);
		let dropFunc = Block.dropFunctions[block.id];
		if (dropFunc) {
			let drop = dropFunc({x: x, y: y, z: z}, block.id, block.data, toolLevel, enchant);
			for(let i in drop){
				World.drop(x, y, z, drop[i][0], drop[i][1], drop[i][2]);
			}
		} else {
			World.drop(x, y, z, block.id, 1, block.data%4);
		}
		this.checkLeavesFor6Sides(x, y, z, tree.leaves)
	},

	destroyLeaves: function(x, y, z, tree){
		let block = World.getBlock(x, y, z);
		let dropFunc = Block.dropFunctions[block.id];
		if (dropFunc) {
			let drop = dropFunc({x: x, y: y, z: z}, block.id, block.data, 0, {});
			for(let i in drop){
				World.drop(x, y, z, drop[i][0], drop[i][1], drop[i][2]);
			}
		} else {
			block.data = block.data%4;
			if(block.id == 18){
				if(block.data != 3 && Math.random() < 1/20 || block.data == 3 && Math.random() < 1/40){
					World.drop(x, y, z, 6, 1, block.data);
				}
				if(block.data == 0 && Math.random() < 1/200){
					World.drop(x, y, z, 260, 1, 0);
				}
			}
			if(block.id == 161 && Math.random() < 1/20){
				World.drop(x, y, z, 6, 1, block.data + 4);
			}
		}
		World.setBlock(x, y, z, 0);
	},
	
	checkLeaves: function(x, y, z, leaves){
		if(TreeCapitator.isTreeBlock(World.getBlock(x, y, z), leaves)){
			this.destroyData.leaves[x+':'+y+':'+z] = true;
		}
	},

	checkLeavesFor6Sides: function(x, y, z, leaves){
		this.checkLeaves(x-1, y, z, leaves);
		this.checkLeaves(x+1, y, z, leaves);
		this.checkLeaves(x, y, z-1, leaves);
		this.checkLeaves(x, y, z+1, leaves);
		this.checkLeaves(x, y-1, z, leaves);
		this.checkLeaves(x, y+1, z, leaves);
	},
	
	startDestroy: function(coords, block){
		let item = Player.getCarriedItem();
		let tree = TreeCapitator.getTreeData(block);
		if (tree && !Entity.getSneaking(Player.get()) && ToolAPI.getToolLevelViaBlock(item.id, block.id)) {
			let hasDirtUnderLog = false;
			for(let y = coords.y; y > 0; y--){
				let block = World.getBlock(coords.x, y - 1, coords.z);
				if(block.id == 2 || block.id == 3){
					hasDirtUnderLog = true;
					break;
				}
				if(!TreeCapitator.isTreeBlock(block, tree.log)){
					break;
				}
			}
			if(hasDirtUnderLog){
				this.destroyData.log = {};
				this.hasLeaves = false;
				let count = this.checkLog(coords.x, coords.y, coords.z, tree, 1);
				if (this.hasLeaves) {
					if (calculateDestroyTime) {
						let destroyTime = ToolAPI.getDestroyTimeViaTool(block, item, coords);
						Block.setTempDestroyTime(block.id, destroyTime * count);
					}
					return;
				}
			}
		}
		this.destroyData.log = null;
	},
	
	onDestroy: function(block){
		if (this.destroyData.log) {
			let item = Player.getCarriedItem();
			let toolData = ToolAPI.getToolData(item.id);
			let toolLevel = ToolAPI.getToolLevelViaBlock(item.id, block.id);
			let enchant = ToolAPI.getEnchantExtraData(item.extra);
			let tree = TreeCapitator.getTreeData(block);
			if (tree && toolLevel > 0) {
				this.destroyData.leaves = {};
				let firstUse = !toolData.isNative;
				if (toolData.modifyEnchant) {
					toolData.modifyEnchant(enchant, item);
				}
				for (let coord in this.destroyData.log) {
					let c = coord.split(':');
					let x = parseInt(c[0]), y = parseInt(c[1]), z = parseInt(c[2]);
					block = World.getBlock(x, y, z);
					this.destroyLog(x, y, z, block, tree, toolLevel, enchant);
					if (!firstUse) {
						if (!(toolData.onDestroy && toolData.onDestroy(item, {x: x, y: y, z: z}, block)) && Math.random() < 1 / (enchant.unbreaking + 1)) {
							item.data++;
							if (toolData.isWeapon) {
								item.data++;
							}
						}
						
						if (item.data >= toolData.toolMaterial.durability) {
							if (!(toolData.onBroke && toolData.onBroke(item))) {
								item.id = toolData.brokenId;
								item.count = 1;
								item.data = 0;
								World.playSoundAtEntity(Player.get(), "random.break", 1);
							}
							break;
						}
					}
					firstUse = false;
				}
				Player.setCarriedItem(item.id, item.count, item.data, item.extra);
				
				for (let i = 1; i <= tree.radius; i++) {
					let leavesToDestroy = this.destroyData.leaves;
					this.destroyData.leaves = {};
					for (let coord in leavesToDestroy) {
						let c = coord.split(':');
						let x = parseInt(c[0]), y = parseInt(c[1]), z = parseInt(c[2]);
						this.destroyLeaves(x, y, z);
						if (i < tree.radius) {
							this.checkLeavesFor6Sides(x, y, z, tree.leaves);
						}
					}
				}
			}
		}
	}
}

Callback.addCallback("DestroyBlockStart", function(coords, block){
	TreeLogger.startDestroy(coords, block);
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	TreeLogger.onDestroy(block);
});