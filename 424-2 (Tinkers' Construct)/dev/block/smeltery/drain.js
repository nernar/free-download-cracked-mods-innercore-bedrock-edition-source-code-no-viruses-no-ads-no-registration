IDRegistry.genBlockID("seared_drain");
Block.createBlock("seared_drain", [
	{name: "Seared Drain", texture: [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]], inCreative: true}
]);
TileRenderer.setStandartModel(BlockID.seared_drain, [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.seared_drain, 0, [["seared_brick", 0], ["seared_brick", 0], ["seared_drain", 1], ["seared_drain", 0], ["seared_brick", 0], ["seared_brick", 0]]);

Recipes.addShaped({id: BlockID.seared_drain}, ["aoa", "aoa", "aoa"], ["a", ItemID.seared_brick, 0]);
ToolAPI.registerBlockMaterial(BlockID.seared_drain, "stone", 1);
Block.setDestroyTime(BlockID.seared_drain, 5);
TileRenderer.setRotationPlaceFunction(BlockID.seared_drain);


TileEntity.registerPrototype(BlockID.seared_drain, {
	defaultValues: {
		meta: 0,
		currentLiquid: null
	},
	init: function(){
		delete this.liquidStorage;
	}
});