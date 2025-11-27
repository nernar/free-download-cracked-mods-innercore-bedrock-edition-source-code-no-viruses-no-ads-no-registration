//Torch Place Mod aka Pyrømaniaq

IMPORT("Inventory");


var TorchPlace = {
	
	Pickaxes: [257,270,274,278,285],
	Tools: [],
	TPM: true,
	
	registerPickaxe: function(tool){
		this.Pickaxes.push(tool);
	},
	
	registerTool: function(tool){
		this.Tools.push(tool);
	},
	
	message: function(msg){
		Game.message("§a[TorchPlaceMod] "+msg)
	},
	
	setTorch: function(coords){
		switch(coords.side){
			case 1: World.setBlock(coords.x,coords.y+1,coords.z,50,5);break;
			case 2: World.setBlock(coords.x,coords.y,coords.z-1,50,4);break;
			case 3: World.setBlock(coords.x,coords.y,coords.z+1,50,3);break;
			case 4: World.setBlock(coords.x-1,coords.y,coords.z,50,2);break;
			case 5: World.setBlock(coords.x+1,coords.y,coords.z,50,1);break;
		}
	}
	
};

/*
TorchPlace.registerPickaxe(id) - регистрирует основной инструмент - кирку.
TorchPlace.registerTool(id) - регистрирует другие инструменты, если это необходимо.
*/

let getConfig = __config__.getBool("pickaxe_mod");

Callback.addCallback("ItemUse",function(coords,item,block){
	if(TorchPlace.TPM){
		for(let i in TorchPlace.Pickaxes){
			if(item.id==TorchPlace.Pickaxes[i]){
				if(Inventory.haveItem(50)&&coords.side!=0){
					TorchPlace.setTorch(coords);
					Inventory.retrieveItem(50);
				}
			}
		}
	if(!getConfig){
		for(let i in TorchPlace.Tools){
			if(item.id==TorchPlace.Tools[i]){
				if(Inventory.haveItem(50)&&coords.side!=0){
					TorchPlace.setTorch(coords);
					Inventory.retrieveItem(50);
				}
			}
		}
	}
	}
});


Callback.addCallback("NativeCommand",function(str){
	if(str=="/tpm 1"){
		TorchPlace.TPM = true;
		TorchPlace.message("Enabled.");
	}
	if(str=="/tpm 0"){
		TorchPlace.TPM = false;
		TorchPlace.message("Disabled.")
	}
})