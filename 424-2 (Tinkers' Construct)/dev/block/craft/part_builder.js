IDRegistry.genBlockID("part_builder");

Block.createBlock("part_builder", [
	{name: "Part Builder", texture: [["log_side", 0], ["part_builder_top", 0], ["part_builder_side", 0]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 1], ["part_builder_top", 0], ["part_builder_side", 1]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 2], ["part_builder_top", 0], ["part_builder_side", 2]], inCreative: true},
	{name: "Part Builder", texture: [["log_side", 3], ["part_builder_top", 0], ["part_builder_side", 3]], inCreative: true},
	{name: "Part Builder", texture: [["log2", 0], ["part_builder_top", 0], ["part_builder_side", 4]], inCreative: true},
	{name: "Part Builder", texture: [["log2", 2], ["part_builder_top", 0], ["part_builder_side", 5]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.part_builder, "stone", 1);
Block.setDestroyTime(BlockID.part_builder, 5);
Tinco.createTableModel(BlockID.part_builder, 6);


(function(){
	const array = [[17, 0], [17, 1], [17, 2], [17, 3], [162, 0], [162, 1]];
	for(let i = 6; i--;){
		Recipes.addShaped({id: BlockID.part_builder, data: i}, ["a", "b"], ["a", ItemID.pattern_blank, 0, "b", array[i][0], array[i][1]]);
	}
})();




Elements.part_builder = {
	slotPattern: {type: "slot", x: 470, y: 80, bitmap: "tc_slot_frame", isValid: function(id){
		const patternData = Material.getCast(id);
		if(patternData){
			return !patternData.isMetal;
		}
		return false;
	}},
	slotMaterial: {type: "slot", x: 530, y: 80, isValid: function(id, count, data){
		const materialData = Material.getMaterial(id, data);
		if(materialData){
			return !materialData.isMetal;
		}
		return false;
	}},
	slotPart: {type: "slot", x: 740, y: 80, isValid: function(){return false}},
	slotShard: {type: "slot", x: 800, y: 80, isValid: function(){return false}},
	button: {type: "button", x: 615, y: 160, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 2, clicker: {
		onClick: function(container){
			const pattern = container.getSlot("slotPattern");
			const material = container.getSlot("slotMaterial");
			const patternData = Material.getCast(pattern.id);
			const materialData = Material.getMaterial(material.id, material.data);
			if(patternData && !patternData.isMetal && materialData && !materialData.isMetal){
				const part = container.getSlot("slotPart");
				const result = ItemID["part_" + patternData.type + "_" + materialData.material];
				const need = patternData.cost / materialData.cost;
				if((!part.id || part.id == result && part.count < 64) && material.count >= need){
					if(need == 0.5){
						const shard = container.getSlot("slotShard");
						const result2 = Material.getShard(materialData.material);
						if(!shard.id || shard.id == result2.id && shard.data == result2.data && shard.count < 64){
							part.id = result;
							part.count++;
							shard.id = result2.id;
							shard.data = result2.data;
							shard.count++;
							material.count--;
							container.validateSlot("slotMaterial");
						}
						return;
					}
					if(need % 1 == 0){
						part.id = result;
						part.count++;
						material.count -= need;
						container.validateSlot("slotMaterial");
					}
				}
			}
		}
	}},
	text: {type: "text", x: 630, y: 168, z: 1, text: "Craft"}
};


Container.part_builder = new UI.Container();
Window.part_builder = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Part Builder"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 620, y: 80, bitmap: "tc_arrow_right", scale: 4}
	],
	elements: Elements.part_builder
});


Block.registerClickFunction("part_builder", function(){
	Container.part_builder.openAs(Window.part_builder);
});


Container.part_builder.setOnCloseListener({
	onClose: function(container){
		const pos = Player.getPosition();
		container.dropSlot("slotPattern", pos.x, pos.y, pos.z);
		container.dropSlot("slotMaterial", pos.x, pos.y, pos.z);
		container.dropSlot("slotPart", pos.x, pos.y, pos.z);
		container.dropSlot("slotShard", pos.x, pos.y, pos.z);
	}
});