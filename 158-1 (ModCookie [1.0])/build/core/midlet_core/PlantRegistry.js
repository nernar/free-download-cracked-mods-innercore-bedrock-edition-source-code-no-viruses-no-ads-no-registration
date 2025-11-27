var PlantRegistry={
	
	/*
		PlantRegistry
			-	модуль Midlet Core, упрощающий создание растений
		Dump>>
			PlantRegistry.defineCrop(parObject)
				×	Добавляет растение, схожее по механике роста с пшеницей
				×	parObject:
					{
						
						id:integer,	//ID блока растения
						endData:integer,	//конечная метадата блока растения, после неё рост прекращается
						seed:integger,	//ID семян
						drop:integer,	//дроп с растения
						farms:array of integers,	//массив с ID блоков, на которых может расти растение
						
						//~необязательно~
						
						hooks:{
							onDestroy:function(x,y,z){},
							onGrowUp:function(x,y,z){},
							onPlanted:finction(x,y,z){},
							onRandomTick:function(x,y,z){}
						}
						
					}
				×====================================×
				>>TODO: Get from json
	*/
	
	defineCrop:function(proto){
		/*
			Метод добавления растения 'пшеница'
		*/
		Block.setRandomTickCallback(proto.id,function(x,y,z,id,data){
			
			/*
				Хук рандомного тика
			*/
			if(proto.hooks){
				if(proto.hooks.onRandomTick){
					proto.hooks.onRandomTick(x,y,z);
				}
			}
			
			/*
				Проверка 'фермы'
			*/
			farm=World.getBlockID(x,y-1,z);
			value=true;
			for(var i in proto.farms){
				if(proto.farms[i]==farm){
					value=false;
				}
			}
			if(value){
				World.destroyBlock(x,y,z,true);
				
				/*
					Хук разрушения
				*/
				if(proto.hooks){
					if(proto.hooks.onDestroy){
						proto.hooks.onDestroy(x,y,z);
					}
				}
				return
			}
			
			/*
				Рост
			*/
			maxData=proto.endData;
			if(data<maxData){
				World.setBlock(x,y,z,id,data+1);
				
				/*
					Хук роста
				*/
				if(proto.hooks){
					if(proto.hooks.onGrowUp){
						proto.hooks.onGrowUp(x,y,z);
					}
				}
				
				return
			}
			
		});
		
		/*
			Посадка
		*/
		Callback.addCallback("ItemUse",function(coords,item,block){
			if(block.id==proto.id&&item.id==351&&item.data==15){
				World.setBlock(coords.x,coords.y,coords.z,block.id,proto.endData);
				
				/*
					Хук роста
				*/
				if(proto.hooks){
					if(proto.hooks.onGrowUp){
						proto.hooks.onGrowUp(x,y,z);
					}
				}
				
			}
		});
		
		/*
			Удобрение
		*/
		Callback.addCallback("ItemUse",function(crd,item,block){
			hk=crd.relative;
			if(item.id==proto.seed){
				farm=World.getBlockID(hk.x,hk.y-1,hk.z);
				value=true;
				for(var i in proto.farms){
					if(proto.farms[i]==farm){
						value=false;
					}
				}
				if(value)return;
				World.setBlock(hk.x,hk.y,hk.z,proto.id,0);
				
				/*
					Хук посадки
				*/
				if(proto.hooks){
					if(proto.hooks.onPlanted){
						proto.hooks.onPlanted(coords.x,coords.y,coords.z);
					}
				}
				
				Player.setCarriedItem(item.id, item.count - 1, item.data);
			}
		});
		ToolAPI.registerBlockMaterial(proto.id,"plant");
		Block.registerDropFunctionForID(proto.id, function(coords, blockID, blockData, level){
			if(blockData==proto.endData)return [[proto.seed,Math.round((Math.random()*3)+1),0],[proto.drop,Math.round((Math.random()*3)+1),0]]
			return [[proto.seed,1,0]]
		}, 2);
	}
}