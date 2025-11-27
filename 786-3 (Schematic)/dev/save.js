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