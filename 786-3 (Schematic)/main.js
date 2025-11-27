/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

let files = FileTools.ReadJSON(__dir__+"structure_load.json");
let pool = new StructurePool(__name__);
for(let i in files){
	let json = files[i];
	pool.load(__dir__+"structure/"+json.path, json.name, json.type);
}




// file: visual_structure.js

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




// file: gui.js

const Color = android.graphics.Color;

function getTextWidth(text, size){
	return new UI.Font({size:size})
		.getTextWidth(text, 1);
}

let UILayer = (() => {
	let layer = -1;
	let max_layer = 1;
	let upt = () => {};
	
	const X = 700;
	const offset = 15;
	const button_size = 20;
	const location = new UI.WindowLocation({
		x: X,
		width: 1000-X,
		y: 0,
		height: UI.getScreenHeight() * .15
	});
	const button_scale = location.globalToWindow(location.height / button_size);
	const text_size = location.globalToWindow(location.height);
	
	function updateLayer(){
		const elements = ui.getElements();
		
		const button = button_size*button_scale;
		const up_pos = 1000-button;
		const pos_text = up_pos - offset - getTextWidth(String(layer), text_size);
		const pos_down = pos_text - offset - button;
		
		let elem = elements.get("layer_text");
		elem.setPosition(pos_text, 0)
		elem.setBinding("text", String(layer));
			
		elements.get("down")
			.setPosition(pos_down, 0);
			
		elements.get("up")
			.setPosition(up_pos, 0);
			
		Threading.initThread("upt", () => {
			try{
				upt(layer);
			}catch(e){
				Game.message(e);
			}
		});
	}
	
	let ui = new UI.Window({
		location: location.asScriptable(),
		drawing: [
			{type: "color", color: Color.alpha(0)}
		],
		elements: {
			up: {type: "button", x: 0, scale: button_scale, y: 0, bitmap: "up_jei_button_0", bitmap2: "down_jei_button_1", clicker: {
				onClick(){
					if(layer < max_layer){
						layer++;
						updateLayer();
					}
				}
			}},
			down: {type: "button", x: 0, scale: button_scale, y: 0, bitmap: "down_jei_button_0", bitmap2: "down_jei_button_1", clicker: {
				onClick(){
					if(layer >= 0){
						layer--;
						updateLayer();
					}
				}
			}},
			layer_text: {type: "text", text: String(layer), x: 0, y: 0, font: {size: text_size, color: Color.BLACK}}
		}
	});
	ui.setAsGameOverlay(true);
	
	let isOpen = false;
	
	Callback.addCallback("NativeGuiChanged", (name) => {
		if(name == "in_game_play_screen"){
			if(isOpen){
				ui.open();
				updateLayer();
			}
		}else if(isOpen)
			ui.close();
	});
	
	return {
		open(layer_){
			layer = -1;
			max_layer = layer_;
			ui.open();
			updateLayer();
			isOpen = true;
		},
		setListener(upt_){
			upt = upt_;
		},
		close(){
			ui.close();
			isOpen = false;
		}
	};
})();

UILayer.setListener(VStructure.updateLayer);

function clone(fr){
	let to = {};
	for(let key in fr)
		to[key] = fr[key]
	return to;
}

let UIList = (() => {
	const WIDTH = 700;
	const SH = UI.getScreenHeight();
	const Y = SH * .05
	
	let group = new UI.WindowGroup();
	
	const location_background = {
		x: (1000-WIDTH)/2,
		width: WIDTH,
		y: Y,
		height: SH - Y * 2
	};
	const _background = new UI.WindowLocation(location_background);
	const height = _background.globalToWindow(_background.height);
	
	const location_list = clone(location_background);
	location_list.width /= 2.5;
	location_list.forceScrollY = true;
	
	const location_info = clone(location_background);
	location_info.x += location_list.width;
	location_info.width -= location_list.width;
	
	let ui = new UI.Window({
		location: location_background,
		drawing: [
			{type: "color", color: Color.alpha(0)},
			{type: "frame", bitmap: "classic_frame_bg_light", scale: 5, width: 1000, height: height},
			{type: "frame", bitmap: "classic_frame_bg_dark", scale: 5, width: _background.globalToWindow(location_list.width), height: height}	
		],
	});
	ui.setBlockingBackground(true);
	group.addWindowInstance("background", ui);
	
	
	location_list.x += 15;
	location_list.width -= 30;
	location_list.y += 15;
	location_list.height -= 30;
	
	let info = new UI.Window({
		location: location_info,
		drawing: [
			{type: "color", color: Color.alpha(0)},
		],
		elements: {
			"close": {type: "close_button", bitmap: "classic_close_button", scale: 6, x: 905, y: 5}
		}
	});
	group.addWindowInstance("info", info);
	
	function update(pool, stru){
		let content = info.getContent();
		const height = info.location.globalToWindow(info.location.height);
		content.elements["selected"] = {type: "button", bitmap: "mod_browser_button", x: 400, y: height-100, scale: 2}
		content.elements["selected_text"] = {type: "text", bitmap: "mod_browser_button", x: 430, y: height-80, size: 30, text: "Выбрать: "+stru, clicker: {
			onClick(){
				group.close();
				let pos = Player.getPosition();
				Threading.initThread("setStru", () => {
					try{
						VStructure.setStructure(pool, stru, Math.floor(pos.x), Math.floor(pos.y), Math.floor(pos.z));
					}catch(e){
						Game.message(e);
					}
				});
				Game.message("Перемещайте структуру с помощью палки");
			}
		}};
		
		info.forceRefresh();
	}
	
	return {
		open(){
			let content = {
				location: location_list,
				drawing: [
					{type: "color", color: Color.alpha(0)}
				],
				elements: {}
			};
			
			let map = StructureLoader.getAllStructureAndPool();
			let it = map.entrySet().iterator();
			
			let elem_offset = 30;
			let elem_size = 90;
			let y = 50;
			
			while(it.hasNext()){
				let poolName = String(it.next())
					.split("=")[0];
				let structures = map.get(poolName);
				
				content.elements[poolName] = {type: "text", text: poolName, font: {size: elem_size, color: Color.RED}, y: y, x: 10};
				y += elem_size + elem_offset;
				for(let i in structures){
					let stru_name = structures[i];
					
					content.elements[poolName+":f_"+stru_name] = {type: "frame", bitmap: "classic_frame_bg_dark", width: 1000, elem_size, y: y-elem_offset/2, x: 0, height: elem_size+elem_offset, clicker: {
						onClick(){
							update(poolName, stru_name);
						}
					}, z: 0, scale: 5};
					content.elements[poolName+":t_"+stru_name] = {type: "text", text: stru_name, size: elem_size, y: y, x: 10, z: 1};
					y += elem_size + elem_offset + elem_offset / 2;
				}
			}
			
			let ui = new UI.Window(content);
			
			group.addWindowInstance("list", ui);
			group.open();
			
			ui.getLocation().setScroll(0, ui.getLocation().windowToGlobal(y));
			ui.updateWindowLocation();
		}
	}
})();

Callback.addCallback("NativeCommand", function(str){
	if(str == "/open"){
		Game.prevent();
		VStructure.destroy();
		UIList.open();
	}else if(str == "/close"){
		Game.prevent();
		VStructure.destroy();
	}
});




// file: save.js

let firstClick = false;
let coordinates = [null,null];
Callback.addCallback("ItemUseLocal", (coords, it) => {
	if(it.id == VanillaItemID.wooden_axe){
		if(!firstClick){
			coordinates[1] = coords;
			Game.message("Первая точка");
		}else{
			Game.message("Вторая точка");
			coordinates[0]=coords;
		}
		firstClick = !firstClick;
	}
});

Callback.addCallback("NativeCommand", function(str){
	let args = str.split(" ");
	if(args[0] == "/save" && coordinates[0] && coordinates[1]){
		let name = args[1] || String(new Date().getTime());
	
		Game.prevent();
		StructureLoader.setStructure(name, new com.reider.dungeonutility.api.StructureDescription(
			StructureUtility.getStructureByPos(
				coordinates, coordinates[0].y < coordinates[1].y ? coordinates[0] : coordinates[1], false
			)
		));
		coordinates = [null, null];
		firstClick = false;
		Game.message("Сохраненно "+name);
		StructureLoader.save(__dir__+"structure/"+name+".struct", name, "DungeonUtility", false);
		
		let json = FileTools.ReadJSON(__dir__+"structure_load.json");
		json.push({
			path: name+".struct",
			name: name,
			type: "DungeonUtility"
		});
		FileTools.WriteJSON(__dir__+"structure_load.json", json, true);
	}
});




