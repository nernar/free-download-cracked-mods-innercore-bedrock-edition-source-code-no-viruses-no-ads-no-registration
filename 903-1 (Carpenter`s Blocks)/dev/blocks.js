Translation.addTranslation("Frame", {
	ru: "Рамка"
});
IDRegistry.genBlockID("full_frame");
Block.createBlock("full_frame", [
	{
		name: "Frame",
		texture: [
			["full_frame",0]
		],
		inCreative: true
	}
],{
	baseBlock: 1,
	destroyTime: 25,
	explosionResistance: 150,
	renderLayer: 1,
	sound: "wood"
});

const BLACK_LIST = [ItemID.chisel, ItemID.hammer, BlockID.full_frame];
let caches = new RenderUtil.ModelsCache("full_frame");
const NAME = "m";
let COUNT = 1;
const STANDARD = new RenderUtil.Model()
	.addBox(NAME, 0, 0, 0, 1, 1, 1, BlockID.full_frame, 0);

BlockRenderer.enableCoordMapping(BlockID.full_frame, 0, STANDARD.getICRenderModel());

caches.add("0", STANDARD);

function addVariant(model){
	caches.add(String(COUNT), model);
	COUNT++;
}
const ROTATES = {
	0: 1,
	1: 0,
	2: 3,
	3: 2,
	4: 5,
	5: 4
};
function getRotate(name, rotate){
	return caches.get(name).rotate(rotate);
}

addVariant(new RenderUtil.Model()
	.addBox(NAME, 0, 0, 0, 1, 1/16, 1, 0))
addVariant(new RenderUtil.Model()
	.addBox(NAME, 0, 0, 0, 1, .5, 1, 0))

TileEntity.registerPrototype(BlockID.full_frame, {
	defaultValues: {
		id: 0,
		data: 0,
		model: 0,
		side: 0
	},
	client: new RenderUtil.TileEntityClient({
		buildModel(model){
			model.getBoxes()[NAME] = getRotate(String(this.networkData.getString("name")), ROTATES[this.networkData.getInt("side")]).getBoxes()[NAME];
			model.getBoxes()[NAME].id = Number(Network.serverToLocalId(this.networkData.getInt("id"))) || BlockID.full_frame;
			model.getBoxes()[NAME].data = Number(this.networkData.getInt("data"));
		}
	}),
	init(){
		this.updateModel();
	},
	dropItem(){
		this.blockSource.spawnDroppedItem(this.x, this.y, this.z, this.data.id, 1, this.data.data);
	},
	destroyBlock(){
		this.dropItem();
	},
	updateModel(){
		RenderUtil.updateModelTileEntity(this.networkData, "full_frame", String(this.data.model));
		this.networkData.putInt("id", this.data.id);
		this.networkData.putInt("data", this.data.data);
		this.networkData.putInt("side", this.data.side);
		this.networkData.sendChanges();
	},
	click(id, count, data, coords, player){
		if(BLACK_LIST.indexOf(id) != -1) return;
		if(this.data.id != 0) this.dropItem();
		this.data.id = id; 
		this.data.data = data;
		this.updateModel();
		Game.prevent();
		Entity.setCarriedItem(player, id, count-1, data);
	}
});

Recipes.addShaped({id: BlockID.full_frame, count: 5, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], [
	'a', VanillaItemID.stick, 0,
	'b', VanillaBlockID.planks, 0
]);

let places = {};
let isItemSpendingAllowed = Game.isItemSpendingAllowed;
Callback.addCallback("ItemUse", function(coords, item, block){
	if(block.id == BlockID.full_frame && Block.placeFuncs[item.id]){
		places[item.id] = Block.placeFuncs[item.id];
		Block.placeFuncs[item.id] = function(){};
		Game.isItemSpendingAllowed = function(){
			return false;
		}
	}
}, 2);
Callback.addCallback("ItemUse", function(coords, item, block){
	if(places[item.id]){
		Block.placeFuncs[item.id] = places[item.id];
		places[item.id] = undefined;
		Game.isItemSpendingAllowed = isItemSpendingAllowed;
	}
}, -2);