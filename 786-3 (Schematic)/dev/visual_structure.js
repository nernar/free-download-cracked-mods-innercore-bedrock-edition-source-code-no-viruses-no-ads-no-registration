const NOT_INIT = 0;
const RENDER_STRU = 1;
const NOT_RENDER = 2;
const FAILED_BLOCK = 3;

const VStructure = {
	cache_status_block: {},
	blocks_layers: {},
	
	miny: 256,
	maxy: 0,
	currentLevel: -1,
	
	pool_name: null,
	name: null,
	
	setStructure(pool_name, name, x, y, z){
		this.destroy();
		
		let pool = StructureLoader.getStructurePoolByName(pool_name);
		
		if(pool){
			let stru = pool.get(name);
			if(stru){
				this.pool_name = pool_name;
				this.name = name;
				
				let blocks = stru.blocks;
				let cache = {};
				let region = BlockSource.getCurrentClientRegion();
				
				for(let i = 0;i < blocks.length;i++){
					let block = blocks[i].getData();
					
					if(block.state.id == 0)
						continue;
					
					let xx = x + block.x;
					let yy = y + block.y;
					let zz = z + block.z;
					
					this.miny = Math.min(this.miny, yy);
					this.maxy = Math.max(this.maxy, yy);
					
					this.updateCacheBlock(xx, yy, zz, region.getBlock(xx, yy, zz), cache[xx+":"+yy+":"+zz] = {
						x: xx,
						y: yy,
						z: zz,
						anim: new Animation.Item(xx+.5, yy+.5, zz+.5),
						block: block,
						status: NOT_INIT
					});
				}
				
				this.cache_status_block = cache;
				UILayer.open(this.maxy - this.miny);
				return true;
			}
		}
		
		return false;
	},
	
	updateCacheBlock(x, y, z, wblock, block){
		let key = x+":"+y+":"+z;
		block = block ||  this.cache_status_block[key];
		
		if(block){
			let check = block.block.state;
			let leg = block.status;
			//let material = "visual_structure";
			let material;
			let size = .95;
			let layer = y - this.miny;
			let cache = this.blocks_layers[layer] = this.blocks_layers[layer] || [];
			
			if(leg == NOT_INIT){
				cache[key] = block;
			}
			
			if(wblock.id == 0 && (this.currentLevel == -1 || layer == this.currentLevel)){
				block.status = RENDER_STRU;
			}else if(check.id == wblock.id || layer != this.currentLevel){
				block.status = NOT_RENDER;
				block.anim.destroy();
			}else{
				block.status = FAILED_BLOCK;
				material = "visual_structure_red";
				size = 1.1;
			}
			
			let has = leg != block.status;
			if(has && block.status != NOT_RENDER){
				block.anim.describeItem({
					id: Block.convertBlockToItemId(check.id),
					data: check.data,
					material: material,
					size: size
				});
				block.anim.load();
				block.anim.setIgnoreLightMode();
				block.anim.getShaderUniforms()
					.setUniformValue("visual_structure", "A", .6);
			}
			
			return has;
		}
		
		return false;
	},
	
	//Не использовать часто, проблемы с производительностью, особенно в тике
	forcedFullUpdateCache(cache){
		let region = BlockSource.getCurrentClientRegion();
		if(region){
			cache = cache || this.cache_status_block;
			for(let key in cache){
				let bt = cache[key];
				
				this.updateCacheBlock(bt.x, bt.y, bt.z, region.getBlock(bt.x, bt.y, bt.z));
			}
			return true;
		}
		return false;
	},
	
	destroy(notClose){
		let cache = this.cache_status_block;
		for(let key in cache)
			cache[key].anim.destroy();
			
		this.cache_status_block = {};
		this.blocks_layers = {};
		this.miny = 256;
		this.maxy = 0;
		this.currentLevel = -1;
		this.pool_name = null;
		this.name = null;
		
		if(!notClose)
			UILayer.close();
	},
	
	updateLayer(layer){
		if(layer == -1){
			VStructure.currentLevel = layer;
			VStructure.forcedFullUpdateCache();
			return;
		}else if(VStructure.currentLevel != -1){
			let lar = VStructure.currentLevel;
			VStructure.currentLevel = layer;
			VStructure.forcedFullUpdateCache(VStructure.blocks_layers[lar]);
			VStructure.forcedFullUpdateCache(VStructure.blocks_layers[VStructure.currentLevel]);
			return;
		}
		VStructure.currentLevel = layer;
		VStructure.forcedFullUpdateCache();
	}
};

const Thread = java.lang.Thread;
let upt_blocks = {};

Threading.initThread("upt-block-schemat", () => {
	while(true){
		let blocks = upt_blocks;
		let bl = upt_blocks = {};
	
		try{
			let region = BlockSource.getCurrentClientRegion();
			for(let key in blocks){
				let pos = blocks[key];
				if(region.getBlockId(pos.x, pos.y, pos.z) == pos.id)
					VStructure.updateCacheBlock(pos.x, pos.y, pos.z, pos);
				else
					bl[pos.x+":"+pos.y+":"+pos.z] = pos;
			}
			Thread.sleep(500);
		}catch(e){
			alert(e);
		}
	}
});

Callback.addCallback("LevelLeft", () => {
	VStructure.destroy();
});

Callback.addCallback("ItemUseLocal", (coords, it) => {
	let pos = coords.relative;
	if(it.id == VanillaItemID.stick && VStructure.name !== null){
		VStructure.setStructure(VStructure.pool_name, VStructure.name, pos.x, pos.y, pos.z);
		return;
	}
	
	pos.id = it.id;
	upt_blocks[pos.x+":"+pos.y+":"+pos.z] = pos;
});

Callback.addCallback("DestroyBlockContinue", (pos, block, progress) => {
	pos.id = 0;
	upt_blocks[pos.x+":"+pos.y+":"+pos.z] = pos;
});