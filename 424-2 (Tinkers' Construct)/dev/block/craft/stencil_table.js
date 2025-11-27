IDRegistry.genBlockID("stencil_table");

Block.createBlock("stencil_table", [
	{name: "Stencil Table", texture: [["planks", 0], ["stencil_table_top", 0], ["stencil_table_side", 0]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 1], ["stencil_table_top", 0], ["stencil_table_side", 1]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 2], ["stencil_table_top", 0], ["stencil_table_side", 2]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 3], ["stencil_table_top", 0], ["stencil_table_side", 3]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 4], ["stencil_table_top", 0], ["stencil_table_side", 4]], inCreative: true},
	{name: "Stencil Table", texture: [["planks", 5], ["stencil_table_top", 0], ["stencil_table_side", 5]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.stencil_table, "stone", 1);
Block.setDestroyTime(BlockID.stencil_table, 5);
Tinco.createTableModel(BlockID.stencil_table, 6);


Elements.stencil_table = {
	slotInput: {type: "slot", x: 530, y: 80, bitmap: "tc_slot_frame", isValid: function(id){return id == ItemID.pattern_blank}},
	slotOutput: {type: "slot", x: 740, y: 80, isValid: function(){return false}}
};


(function(){

	for(let i = 6; i--;){
		Recipes.addShaped({id: BlockID.stencil_table, data: i}, ["a", "b"], ["a", ItemID.pattern_blank, 0, "b", 5, i]);
	}

	const array = ["rod", "binding", "rod2", "binding2", "pickaxe", "shovel", "hatchet", "scythe", "hammer", "excavator", "lumberaxe", "plate", "sword", "guard"];

	const func = function(result){
		return function(container){
			const input = container.getSlot("slotInput");
			const output = container.getSlot("slotOutput");
			if(input.id == ItemID.pattern_blank && (!output.id || output.id == result && output.count < 64)){
				input.count--;
				output.id = result;
				output.count++;
				container.validateSlot("slotInput");
			}
		};
	};

	let x = y = 0;
	for(let i = 0; i < array.length; i++){
		x = (i % 7) * 75 + 400;
		y = (i / 7 | 0) * 75 + 200;
		Elements.stencil_table["button_" + array[i]] = {type: "button", x: x, y: y, bitmap: "blank_button_up", bitmap2: "blank_button_down", scale: 4, clicker: {onClick: func(ItemID["pattern_" + array[i]])}};
		Elements.stencil_table["icon_" + array[i]] = {type: "image", x: x + 4, y: y + 4, z: 1, bitmap: "symbol." + array[i], scale: 4};
	}

})();


Container.stencil_table = new UI.Container();
Window.stencil_table = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Stencil Table"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 620, y: 80, bitmap: "tc_arrow_right", scale: 4}
	],
	elements: Elements.stencil_table
});


Block.registerClickFunction("stencil_table", function(){
	Container.stencil_table.openAs(Window.stencil_table);
});


Container.stencil_table.setOnCloseListener({
	onClose: function(container){
		const pos = Player.getPosition();
		container.dropSlot("slotInput", pos.x, pos.y, pos.z);
		container.dropSlot("slotOutput", pos.x, pos.y, pos.z);
	}
});