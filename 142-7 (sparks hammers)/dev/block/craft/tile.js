IDRegistry.genBlockID("hamCraft");
Block.createBlock("hamCraft", [{name: "Hammer Crafting Table", texture: [["hamCraft", 0], ["hamCraft", 1], ["hamCraft", 2]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.hamCraft, "stone");
Block.setDestroyTime(BlockID.hamCraft, 5);

Block.registerClickFunction("hamCraft", function(c, item, block){
	Game.prevent();
	container.openAs(window);
	SHammer.preRecipe && SHammer.setField(SHammer.preRecipe);
});

Callback.addCallback("tick", function(){
	if(container.isOpened()){
		const res = SHammer.getResult();
		res ?
			container.setSlot("slotResult", res, 1, 0) :
			container.clearSlot("slotResult");
	}
});

container.setOnCloseListener({
	onClose: function(){
		SHammer.returnInv();
	}
});