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
let cache = {}
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
IDRegistry.genBlockID("combination_lock");
Block.createBlockWithRotation("combination_lock", [
	{
		name: "Combination lock",
		texture: [
			["iron_block",0],
			["iron_block", 0],
			["iron_block",0],
			["combination_lock",1],
			["iron_block",0],
			["iron_block",0]
		],
		inCreative: true
	},
	{
		name: "Combination lock",
		texture: [
			["iron_block",0],
			["iron_block", 0],
			["iron_block",0],
			["combination_lock",0],
			["iron_block",0],
			["iron_block",0]
		],
		inCreative: false
	}
],{
	sound: "metal"
});
Translation.addTranslation("Combination lock", {
	ru: "Кодовый замок"
});

Recipes.addShaped({id: BlockID.combination_lock, data: 0, count: 1}, [
	"rrr",
	"ibi",
	"iii"
], ["r", VanillaItemID.redstone, 0, "b", VanillaBlockID.iron_block, 0, "i", VanillaItemID.iron_ingot, 0])

let Font = com.zhekasmirnov.innercore.api.mod.ui.types.Font;
function getSize(text, size){
	let font = new Font({size:size});
	return {
		width: font.getTextWidth(text, 1),
		height: font.getTextHeight(text, 0, 0, 1),
	};
}
const SIZE = 100;
const PADDING = 10;
const BUTTON = 170;
const PADDING_BUTTON = {
	x: 10,
	y: 5
};
let CombinationLockUI = new UI.Window({
	location: {
		x: (1000-UI.getScreenHeight())/2,
		y: 50, 
		height: UI.getScreenHeight(),
		width: UI.getScreenHeight()
	},
	drawing: [
		{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
		{type: "frame", bitmap: "classic_frame_bg_light", scale: 5, width: 1000, height: 824, y: 50},
		
		{type: "frame", x: 410, y: 90, width: 170, height: 75, bitmap: "default_container_frame", scale: 4}
	],
	elements: {
		"close": {type: "close_button", bitmap: "classic_close_button", scale: 5, x: 925, y: 65},
		"code": {type: "text", x: 420, y: 100, text: "", size: SIZE}
	}
});

function setCode(code){
	let content = CombinationLockUI.getContent();
	let size = getSize(code, SIZE);
	if(size.width <= 0)
		size.width = 10;
	content.elements["code"].text = code;
	content.elements["code"].x = 500-size.width/2;
	
	content.drawing[2].x = (500-size.width/2)-PADDING;
	content.drawing[2].width = size.width+PADDING*2;
	content.drawing[2].height = SIZE+PADDING*2;
	
	CombinationLockUI.setContent(content);
	CombinationLockUI.forceRefresh();
}
setCode("");
CombinationLockUI.setBlockingBackground(true);
CombinationLockUI.setCloseOnBackPressed(true);
let tile = null;
CombinationLockUI.setEventListener({
	onClose(){
		setCode("");
		tile = null;
	}
});
(function(){
	let content = CombinationLockUI.getContent();
	let SY = content.drawing[2].y + content.drawing[2].height + PADDING;
	let types = [
		"1", "2", "3", "c",
		"4", "5", "6", "0",
		"7", "8", "9", "="
	];
	
	let width = (BUTTON+PADDING_BUTTON.x)*4;
	let SX = 500-width/2;
	let i = 0;
	for(let y = 0;y < 3;y++)
		for(let x = 0;x < 4;x++){
			let type = types[i];
			content.elements["slot_"+x+"_"+y] = {type:"slot", bitmap: "combination_lock_"+type, x: (((BUTTON+PADDING_BUTTON.x)*x)||0)+SX, y: (((BUTTON+PADDING_BUTTON.y)*y)||0)+SY, visual: true, size: BUTTON, clicker: {
					onClick(){
						let text = content.elements["code"].text;
						if(type == "c"){
							let newCode = "";
							let arr = text.split("");
							for(let i = 0;i < arr.length - 1;i++)
								newCode+=arr[i];
							text=newCode;
						}else if(type == "="){
							if(!tile.code)
								Network.sendToServer("CombinationLockUI.newCode", {
									code: text,
									x: tile.x,
									y: tile.y,
									z: tile.z,
									dimension: Entity.getDimension(Player.get())
								});
							else
								Network.sendToServer("CombinationLockUI.check", {
									code: text,
									x: tile.x,
									y: tile.y,
									z: tile.z,
									dimension: Entity.getDimension(Player.get())
								});
						}else{
							if(text.length < 12)
								text+=type;
						}
						setCode(text);
					}
				}
			};
			i++;
		}
})();
Network.addServerPacket("CombinationLockUI.newCode", function(client, packet){
	let tile = TileEntity.getTileEntity(packet.x, packet.y, packet.z, BlockSource.getDefaultForDimension(packet.dimension));
	tile.data.code = packet.code;
	tile.container.closeFor(client);
});
Network.addServerPacket("CombinationLockUI.check", function(client, packet){
	let tile = TileEntity.getTileEntity(packet.x, packet.y, packet.z, BlockSource.getDefaultForDimension(packet.dimension));
	if(tile.data.code == packet.code){
		tile.data.redstone = true;
		tile.updateAnimation();
		tile.container.closeFor(client);
	}
});
BlockRenderer.enableCoordMapping(BlockID.combination_lock, -1, new ICRender.Model(new BlockRenderer.Model(BlockID.combination_lock, 0)))
TileEntity.registerPrototype(BlockID.combination_lock, {
	useNetworkItemContainer: true,
	defaultValues: {
		code: null,
		redstone: false
	},
	redstoneUpdate(){
		redstoneUpdate(this.blockSource, this.x, this.y+1, this.z);
		redstoneUpdate(this.blockSource, this.x, this.y-1, this.z);
		redstoneUpdate(this.blockSource, this.x+1, this.y, this.z);
		redstoneUpdate(this.blockSource, this.x-1, this.y, this.z);
		redstoneUpdate(this.blockSource, this.x, this.y, this.z+1);
		redstoneUpdate(this.blockSource, this.x, this.y, this.z-1);
	},
	client: {
		load(){
			let thas = this;
			BlockRenderer.mapAtCoords(thas.x, thas.y, thas.z, new ICRender.Model(new BlockRenderer.Model(BlockID.combination_lock, thas.networkData.getInt("data"))));
			this.networkData.addOnDataChangedListener(function(data, isExternal){
				BlockRenderer.mapAtCoords(thas.x, thas.y, thas.z, new ICRender.Model(new BlockRenderer.Model(BlockID.combination_lock, thas.networkData.getInt("data"))));
			});
		},
		unload(){
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	init(){
		this.updateAnimation();
	},
	updateAnimation(){
		let data = this.blockSource.getBlockData(this.x, this.y, this.z);
		this.networkData.putInt("data", this.data.redstone ? data+4 : data);
		this.networkData.sendChanges();
	},
	tick(){
		if(this.data.redstone)
			this.redstoneUpdate();
	},
	getScreenName(player, item){
		if(this.data.redstone){
			this.data.redstone = false;
			this.updateAnimation();
			return null;
		}
		return this.data.code ? "true:"+this.x+"."+this.y+"."+this.z : "false:"+this.x+"."+this.y+"."+this.z;
	},
	getScreenByName(name){
		let pos = name.split(":")[1].split(".");
		this.x = parseInt(pos[0]);
		this.y = parseInt(pos[1]);
		this.z = parseInt(pos[2]);
		this.code = name.split(":")[0] == "true";
		tile = this;
		return CombinationLockUI;
	}
});