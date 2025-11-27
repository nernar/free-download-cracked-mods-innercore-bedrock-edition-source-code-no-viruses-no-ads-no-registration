IDRegistry.genBlockID("basic_pipe");
Block.createBlock("basic_pipe", [ {name: "Item pipe", texture: [["basic_pipe", 0]], inCreative: true}]);
RenderAPI.setWire(BlockID.basic_pipe, 8/16);
sj.registerWire(BlockID.basic_pipe, 400);
Translation.addTranslation("Item pipe", {
ru: "Предметная труба"
})
TileRenderer.setupWireModel(BlockID.basic_pipe, 0, 4/8, "item_pipe ");

TileEntity.registerPrototype(BlockID.liquid_pipe, {
	defaultValues: {
		check: false 
	},
	tick(){
		if(World.getThreadTime()%6==0)
			this.data.check = false;
	}
});
StorageInterface.createInterface(BlockID.basic_pipe, {
    slots: {
        "slot1": {
            input: true,
            side: 0,
            isValid: function(item, side){
             setSlot
            }
        },
        "slot2": {
            input: true,
            side: 1,
            isValid: function(item, side){
            }
        },
        "slot3": {
            input: true,
            side: 2,
            isValid: function(item, side){
            }
        },
        "slot4": {
            input: true,
            side: 3
            isValid: function(item, side){
            }
        },
        "slot5": {
            input: true,
            side: 4,
            isValid: function(item, side){
            }
        },
        "slot6": {
            input: true,
            side: 5
            isValid: function(item, side){
            }
        },
        "slot7": {
            output: true,
            side: 1,
            isValid: function(item, side){
            }
        },
        "slot8": {
            output: true,
            side: 3
            isValid: function(item, side){
            }
        },
        "slot9": {
            output: true,
            side: 2,
            isValid: function(item, side){
            }
        },
        "slot10": {
            output: true,
            side: 5
            isValid: function(item, side){
            }
        },
        "slot11": {
            output: true,
            side: 4,
            isValid: function(item, side){
            }
        },
        "slot12": {
            output: true,
            side: 0
            isValid: function(item, side){
            }
        },
    }
});
-y
y
-z
z
-x
x
 
	getBlocks(x, y, z, arr){
  let blocksCheck = [
	{x: 0, y: -1, z: 0},
	{x: 0, y: 1, z: 0},
	{x: 0, y: 0, z: -1},
	{x: 0, y: 0, z: 1},
	{x: -1, y: 0, z: 0},
	{x: 1, y: 0, z: 0}
];
		for(let i in blocksCheck){
			let pos = blocksCheck[i];
			let block = this.blockSource.getBlock(x+pos.x, y+pos.y, z+pos.z);
			if(block.id == BlockID.basic_pipe){
				let tile = TileEntity.getTileEntity(x+pos.x, y+pos.y, z+pos.z, this.blockSource);
				if(tile && !tile.data.check){
					tile.data.check = true;
					this.getBlocks(x+pos.x, y+pos.y, z+pos.z, arr);
				}
			}
		}
		return arr;
	},

	input(tile, output, pos){
		let block = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
  let blocksCheck = [
	{x: 0, y: -1, z: 0},
	{x: 0, y: 1, z: 0},
	{x: 0, y: 0, z: -1},
	{x: 0, y: 0, z: 1},
	{x: -1, y: 0, z: 0},
	{x: 1, y: 0, z: 0}
];
		for(let w in blocksCheck){
			let ip = blocksCheck[w];
/*
				try{
			  
					for(let i in liquids)
							if(output.canTransportLiquid(liquids[i], 0))
								StorageInterface.transportLiquid(liquids[i], 200, output, StorageInterface.getLiquidStorage(this.blockSource, pos.x+ip.x, pos.y+ip.y, pos.z+ip.z), 0);
				}catch(e){
						StorageInterface.extractLiquid(null, 200, StorageInterface.getLiquidStorage(this.blockSource, pos.x+ip.x, pos.y+ip.y, pos.z+ip.z), output, 0);
					}*/
				}
			}
		}
	},



	pump(){
		let blocks = this.getBlocks(this.x, this.y, this.z, []);
    let blocksCheck = [
	{x: 0, y: -1, z: 0},
	{x: 0, y: 1, z: 0},
	{x: 0, y: 0, z: -1},
	{x: 0, y: 0, z: 1},
	{x: -1, y: 0, z: 0},
	{x: 1, y: 0, z: 0}
];
		for(let q in blocksCheck){
			let op = blocksCheck[q];
			let tile = TileEntity.getTileEntity(this.x+op.x, this.y+op.y, this.z+op.z, this.blockSource);
			if(tile){
				let output = StorageInterface.getLiquidStorage(this.blockSource, this.x+op.x, this.y+op.y, this.z+op.z);
				for(let a in blocks)
					this.input(tile, output, blocks[a]);
			}
		}
	},



	tick: function(){
		this.pump();
});
