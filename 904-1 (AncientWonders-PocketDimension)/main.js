/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

const ParticlesStorage = requireGlobal("ParticlesStorage");
const ParticlesCore = requireGlobal("ParticlesCore");
const RenderUtil = requireGlobal("RenderUtil");
 
const magic_particle = "_magic_particle";
ParticlesStorage.setGroup("aw")
	.add(magic_particle, Particles.registerParticleType({
		texture: "magic_particle",
		render: 3,
		size: [1, 3],
		lifetime: [80, 110], 
		animators: {
			size: {fadeOut: 1, fadeIn: 0.2, start: 0, end: 0},
			icon: {start: 0, end: 1, period: 10, fadeIn: 1}
		}
	}))
	.setGroup(null);




// file: api/PocketDimension.js

let PocketDimension = {
	dimensions: {},
	register(player, name, description){
		description = description || {};
		description.id = description.id || Math.floor(Math.random()*32000);
		description.name = name;
		let dimension = new Dimensions.CustomDimension(player+name, description.id);
		description.id = dimension.id;
		dimension.setGenerator(Dimensions.newGenerator({
			layers: [
				{
					minY: 0,
					maxY: 30,
					yConversion: [[0, 0]],
					material: {base: 1}
				}
			]
    }));
    this.dimensions[player] = this.dimensions[player] || {};
    this.dimensions[player][name] = description;
		return description.id
	},
	_getId(player, name){
		return this.dimensions[player][name].id;
	},
	hasDimension(player, name){
		return !!this.dimensions[player] && !!this.dimensions[player][name];
	},
	getId(player, name, description){
		description = description || {};
		if(!this.hasDimension(name, description))
			return this.register(player, name, description);
		return this._getId(player, name);
	}
};
Saver.addSavesScope("AncientWonders.PocketDimension", 
	function read(scope){
		PocketDimension.dimensions = {};
		for(let player in scope){
			let dimensions = scope[player];
			for(let name in dimensions)
				PocketDimension.register(player, name, dimensions[name]);
		}
	},
	function save(){
		return PocketDimension.dimensions;
	}
);
Callback.addCallback("LevelLeft", function(){
	PocketDimension.dimensions = {};
});




// file: block.js

IDRegistry.genBlockID("pocket_dimension_controller"); 
Block.createBlock("pocket_dimension_controller", [
	{
		name: "Pocket Measurement Controller",
		texture: [["stone", 0]],
		inCreative: true
	}
]);
Translation.addTranslation("Pocket Measurement Controller", {
	ru: "Контроллер карманного измерения"
});

(function(){
	const texture = [BlockID.aw_magic_brick, 0];
	new RenderUtil.Model() 
		.addBoxByBlock(null, 1/16, 0, 1/16, 15/16, 2/16, 15/16, texture[0], texture[1])
		.addBoxByBlock(null, 4/16, 2/16, 4/16, 12/16, 13/16, 12/16, texture[0], texture[1])
		.addBoxByBlock(null, 2/16, 13/16, 2/16, 14/16, 15/16, 14/16, BlockID.aw_magic_stone, 0)
		.setBlockModel(BlockID.pocket_dimension_controller);
})();

RitualAPI.addRecipe("ritual_3", "pocket_dimension_controller", [BlockID.aw_magic_brick, BlockID.aw_magic_brick, BlockID.aw_magic_brick, BlockID.aw_magic_brick, ItemID.magic_plate, ItemID.magic_plate, ItemID.magic_plate, ItemID.magic_plate, ItemID.rune_life, ItemID.rune_life, ItemID.rune_dead, ItemID.rune_dead], {
	id: BlockID.pocket_dimension_controller,
	data: 0,
	count: 1,
	extra: null
}, {
	aspects: 1000,
	magic: 30
});

const SCREEN_HEIGHT = UI.getScreenHeight();
const PADDING = {
	x: 180,
	y: SCREEN_HEIGHT*0.05
};
const WIDTH = 1000-PADDING.x*2;
const HEIGHT = SCREEN_HEIGHT-PADDING.y*2;
const Color = android.graphics.Color;

const PocketDimensionUI = (function(){
	const ui = new UI.WindowGroup();
	
	let location_main = new UI.WindowLocation({
		x: PADDING.x,
		y: PADDING.y,
		width: WIDTH,
		height: HEIGHT
	});
	ui.addWindowInstance("main", new UI.Window({
		location: location_main.asScriptable(),
		drawing: [
			{type: "color", color: Color.argb(0, 0, 0, 0)},
			{type: "frame", x: 0, y: 0, width: 1000, height: location_main.globalToWindow(HEIGHT), bitmap: "default_container_frame", color: android.graphics.Color.argb(.8, .1, .1, .1)}
		],
		elements: {
			close: {type: "close_button", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", x: 1000-52, y: 10, scale: 42/15}
		}
	}));
	
	let location_list = new UI.WindowLocation({
		x: PADDING.x,
		y: PADDING.y,
		width: WIDTH*(1/3),
		height: HEIGHT
	});
	let list = new UI.Window({
		location: location_list.asScriptable(),
		drawing: [
			{type: "color", color: Color.argb(0, 0, 0, 0)},
			{type: "frame", x: 0, y: 0, width: 1000, height: location_list.globalToWindow(HEIGHT), bitmap: "default_container_frame", color: Color.argb(0, 0, 0, 0)}
		],
		elements: {}
	});
	list.setEventListener({
		onOpen(win){
			win.getContainer().getParent().sendEvent("getList", {
				player: Number(Player.get())
			});
		},
		onClose(win){
			
		}
	});
	ui.addWindowInstance("list", list);
	
	ui.setBlockingBackground(true);
	return ui;
})();
function addButtonText(content, frame, text, clicker, x, y, size, padding, color){
	padding = padding || 20;
	color = color || Color.WHITE;
	let width = new UI.Font(color, size, 0).getTextWidth(text, 1);
	content.elements["frame_"+text] = {type: "frame", x: x, width: width+padding*2, y: y, height: size+padding*2, bitmap: frame, clicker: clicker};
	content.elements["text_"+text] = {type: "text", text: text, x: x+padding, y: y+padding, z: 1, font: {size: size, color: color}};
}
SingularityAPI.setBlockOutputName(BlockID.pocket_dimension_controller, "output", true);

function findSurface(x, y, z, region){
	for(let i = y[0]; i < y[1];i++){
		if(region.getBlockId(x, i, z) == 0 && region.getBlockId(x, i+1, z) == 0)
			return {x: x, y: i, z: z};
	}
	return {x: x, y: y[0], z: z};
}

const teleportHash = [];
Callback.addCallback("CustomDimensionTransfer", function(ent){
	let index = teleportHash.indexOf(ent);
	if(index != -1){
		Updatable.addUpdatable({
			update(){
				if(World.getThreadTime() % 4 != 0) return;
				this.pos = this.pos || Entity.getPosition(ent);
				let pos = Entity.getPosition(ent);
				if(this.pos.x != pos.x || this.pos.y != pos.y || this.pos.z != pos.z){
					pos = findSurface(pos.x, [40, 255], pos.z, BlockSource.getDefaultForActor(ent));
					Entity.setPosition(ent, pos.x, pos.y, pos.z);
					teleportHash.splice(index, index);
					this.remove = true;
				}
			}
		});
	}
});
TileEntity.registerPrototype(BlockID.pocket_dimension_controller, {
	useNetworkItemContainer: true,
	defaultValues: {
		aspect: 0,
		aspectMax: 1000000
	},
	
	client: {
		containerEvents: {
			getList(container, window, content, data){
				content = window.getWindowContent("list");
				let y = 0;
				data.list["Overworld"] = {name: "Overworld", id: 0};
				data.list["Create dimension"] = {name: "Create dimension"};
				for(let name in data.list){
					let description = data.list[name];
					addButtonText(content, "workbench_frame3", name, {
						onClick(){
							let main = window.getWindowContent("main");
							main.elements = {
								close: {type: "close_button", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", x: 1000-52, y: 10, scale: 42/15}
							};
							main.elements.title = {type: "text", x: 1000*(1/3)+25, y: 25, font: {size: 45, color: Color.WHITE, bolt: true}, text: description.name};
							if(description.name == "Create dimension"){
								let name = String(Math.floor(Math.random()*9999999999))
								addButtonText(main, "workbench_frame3", "Selected name", {
									onClick(){
										var editText = new android.widget.EditText(UI.getContext());
										editText.setHint(name);
										new android.app.AlertDialog.Builder(UI.getContext())
											.setView(editText)
											.setPositiveButton("ok", function(){
												let text = String(editText.getText());
												if(text != "")
													name = text;
											})
											.show();
									}
								}, 1000*(1/3)+25, 85, 30);
								addButtonText(main, "workbench_frame3", "Create", {
									onClick(_, container){
										window.close();
										container.sendEvent("create", {
											player: Number(Player.get()),
											name: name
										})
									}
								}, 1000*(1/3)+25, 85+85, 30);
							}else{
								addButtonText(main, "workbench_frame3", "Teleport to "+description.name, {
									onClick(_, container){
										window.close();
										container.sendEvent("teleport", {
											player: Number(Player.get()),
											id: description.id
										});
									}
								}, 1000*(1/3)+25, 85, 30);
							}
							window.setWindowContent("main", main);
							window.refreshAll();
						}
					}, 40, y*160+40, 80, 30);
					y++;
				}
				let location = window.getWindow("list").location;
				y++;
				location.setScroll(0, location.windowToGlobal(y*160+40));
			}
		}
	},
	containerEvents: {
		getList(data){
			this.container.sendEvent("getList", {
				list: PocketDimension.dimensions[data.player] || {}
			});
		},
		teleport(data){
			if(Entity.getDimension(data.player) == data.id) return;
			teleportHash.push(data.player);
			Dimensions.transfer(data.player, data.id);
		},
		create(data){
			PocketDimension.register(data.player, data.name);
		}
	},
	
	tick(){
		if(World.getThreadTime() % 25 == 0){
			let group = new ParticlesCore.Group();
			let max = Math.floor(Math.random()*20)+10;
			for(let i = 0;i < max;i++){
				let pos = {
					x: this.x-4.5+Math.random()*10,
					y: this.y-4.5+Math.random()*10,
					z: this.z-4.5+Math.random()*10
				};
				let vector = ParticlesCore.getVector(pos, {
					x: this.x+.5,
					y: this.y+.5,
					z: this.z+.5
				});
				group.add(magic_particle, pos.x, pos.y, pos.z, vector.x/90, vector.y/90, vector.z/90);
			}
			group.send(this.blockSource);
		}
	},
	getScreenName(player, coords){
		return "main";
	},
	getScreenByName(screenName){
		return PocketDimensionUI;
	}
});




// file: shared.js





