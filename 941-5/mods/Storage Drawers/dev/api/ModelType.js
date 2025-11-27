let ModelType = {
	full: [storage_3, storage_0, storage_1, storage_2],
	helf: [half_storage_1, half_storage_0, half_storage_3, half_storage_2]
};
let AnimationPos = {
	full: [{x: 0, y: 0, z: .4},
		{x: 0, y: 0, z: -.46},
		{x: .36, y: 0, z: 0},
		{x: -.5, y: 0, z: 0}],
	helf: [{x: 0, y: 0, z: .4-.5},
		{x: 0, y: 0, z: -.46+.5},
		{x: .36-.5, y: 0, z: 0},
		{x: -.5+.5, y: 0, z: 0}],
};
let AnimationOffset = {
	noy: [
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0}
	],
	up: [
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0}
	],
	down: [
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0}
	],
	
	left_up: [
		{x: -.3, y: .21, z: 0},
		{x: .18, y: .21, z: -.05},
		{x: .055, y: .21, z: -.23},
		{x: 0, y: .21, z: -.3}
	],
	right_up: [
		{x: .23, y: .21, z: 0},
		{x: -.25, y: .21, z: -.05},
		{x: .055, y: .21, z: .23},
		{x: 0, y: .21, z: .23}
	],
	left_down: [
		{x: -.3, y: -.26, z: 0},
		{x: .18, y: -.26, z: -.05},
		{x: .055, y: -.3, z: -.23},
		{x: 0, y: -.26, z: -.3}
	],
	right_down: [
		{x: .23, y: -.26, z: 0},
		{x: -.25, y: -.26, z: -.05},
		{x: .055, y: -.26, z: .23},
		{x: 0, y: -.25, z: .23}
	]
}

function createUI(obj){
	obj.elements = obj.elements||{};
	obj.drawing = obj.drawing||[];
	let draw = [];
	draw.push({type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)});
	draw.push({type: "frame", bitmap: "classic_frame_bg_light", scale: 5, width: 1000, height: 824, y: 50});
	for(let i in obj.drawing)
		draw.push(obj.drawing[i]);
	obj.elements["close"] = {type: "close_button", bitmap: "classic_close_button", scale: 5, x: 925, y: 55};
	let ui = new UI.Window({ 
		location: {
			x: (1000-UI.getScreenHeight())/2,
			y: 50, 
			height: UI.getScreenHeight(),
			width: UI.getScreenHeight()
		},
		drawing: draw,
		elements: obj.elements
	});
	ui.setBlockingBackground(true);
	ui.setInventoryNeeded(true);
	let cont = ui.getContent();
	for(let i = 0;i < 7;i++)
		cont.elements["update_"+i] = {type: "slot", x: 125 + (i*105), y: 300, size: 100, isValid(id){
			return DrawerAPI.isConfig(id);
		}, maxStackSize:1};
	ui.setContent(cont);
	(function(xi, yi, size, ui){
		let cont = ui.getContent();
		for(let y = 0;y < 4;y++){
		for(let x = 0;x < 9;x++){
				cont.elements["slot"+y+x] = {type: "invSlot", x: xi+((size+5)*x), y: y == 0 ? yi : ((yi-(size+5)*3)-(size+15))+((size+5)*y), index: x+(9*y), size: size};
			}
		}
		ui.setContent(cont);
	})(75, 740, 90, ui);
	return ui;
}

let UI_Slot_1 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 450, y: 100, size: 100}
	}
});

let UI_Slot_2 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 400, y: 100, size: 100},
		"slot_1": {type: "slot", x: 500, y: 100, size: 100}
	}
});

let UI_Slot_4 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 400, y: 100, size: 100},
		"slot_1": {type: "slot", x: 500, y: 100, size: 100},
		"slot_2": {type: "slot", x: 400, y: 200, size: 100},
		"slot_3": {type: "slot", x: 500, y: 200, size: 100}
	}
});

let StorageType = {
	slot_full_1: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_1,
		slots: [
			{offset: AnimationOffset.noy, click: [0, 0, 1, 1], size: .8}
		]
	},
	slot_helf_1: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_1,
		slots: [
			{offset: AnimationOffset.noy, click: [0, 0, 1, 1], size: .8}
		]
	},
	slot_2: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_2,
		slots: [
			{offset: AnimationOffset.up, click: [0, .5, 1, 1], size: .4},
			{offset: AnimationOffset.down, click: [0, 0, 1, .5], size: .4}
		]
	},
	slot_helf_2: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_2,
		slots: [
			{offset: AnimationOffset.up, click: [0, .5, 1, 1], size: .4},
			{offset: AnimationOffset.down, click: [0, 0, 1, .5], size: .4}
		]
	},
	slot_4: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_4,
		slots: [
			{offset: AnimationOffset.left_up, click: [0, .5, .5, 1], size: .4},
			{offset: AnimationOffset.right_up, click: [.5, .5, 1, 1], size: .4},
			{offset: AnimationOffset.left_down, click: [0, 0, .5, .45], size: .4},
			{offset: AnimationOffset.right_down, click: [.5, 0, 1, .5], size: .4}
		]
	},
	slot_helf_4: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_4,
		slots: [
			{offset: AnimationOffset.left_up, click: [0, .5, .5, 1], size: .4},
			{offset: AnimationOffset.right_up, click: [.5, .5, 1, 1], size: .4},
			{offset: AnimationOffset.left_down, click: [0, 0, .5, .45], size: .4},
			{offset: AnimationOffset.right_down, click: [.5, 0, 1, .5], size: .4}
		]
	},
}
