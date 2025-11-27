IDRegistry.genBlockID("techtable");
Block.createBlockWithRotation("techtable", [{
    name: "Techtable",
    texture: [
        ["iron_block", 0],
        ["techcraftingtable_top", 0],
        ["techcraftingtable_rechts", 0],
        ["techcraftingtable_front", 0],
        ["techcraftingtable_hinten", 0],
        ["techcraftingtable_links", 0]
    ],
    inCreative: true
}], iron_block_type);

Recipes.addShaped({id: BlockID.techtable, count: 1, data: 0},
	["iii", "iki", "ici"],
	['i', 265, 0, 'k', VanillaBlockID.crafting_table, 0, 'c', VanillaBlockID.chest, 0]
);

var techtableUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Techtable. Is not working"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [],
	
    elements: {
        "slotResult": {type: "slot", x: 787, y: 153, /*clicker: {
				onClick: function(position, container, tileEntity){
    container.sendEvent("click", {});
				},
				onLongClick: function(position, container, tileEntity){
   	container.sendEvent("longclick", {});
     }}
    */}}
});
{
    let content = techtableUI.getContent();

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let slotName = "slot" + (i * 3 + j);
            content.elements[slotName] = {
                type: "slot", x: 491 + j * 60, y: 88 + i * 60};
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 9; j++) {
            content.elements["slotResources" + (i * 9 + j)] = {type: "slot", x: 335 + j * 60, y: 281 + i * 60};
        }
    }
}

TileEntity.registerPrototype(BlockID.techtable, {
/*
	containerEvents: {
 	click(container, window, content, data){
					var result = Recipes.provideRecipe(container, prefix);
					if (result){
			 		Player.getInventory().addItem(result.id, result.count, result.data);
					}
  },
 	longclick(container, window, content, data){
					var result = Recipes.provideRecipe(container, prefix);
					if (result){
			 		Player.getInventory().addItem(result.id, result.count, result.data);
					}
  }
},
	client: {
		containerEvents: {
			setResult(container, window, content, data){
				if(content) {
     container.setSlot("slotResult", data.id, data.count, data.data);
   }
 		}
  }
 },
*/
   useNetworkItemContainer: true,
   defaultValues: {
   click: 0
   },

   tick: function(container, window, content, data) {
/*if (content){
			//Узнаем результат крафта
			var res = Recipes.getRecipeResult(this.container, "workbench");
			//Если он есть
			if (res){
			//Отрисовываем его
				this.container.sendEvent("setResult", {id: res.id, count: res.count, data: res.data});
			}
			else{
				//Иначе рисуем пустой слот
				this.container.sendEvent("setResult", {id: 0, count: 0, data: 0});
			}
		}*/
      this.container.sendChanges();
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return techtableUI;
},
});
