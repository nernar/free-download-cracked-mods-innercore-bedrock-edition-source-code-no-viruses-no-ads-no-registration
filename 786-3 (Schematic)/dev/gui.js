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