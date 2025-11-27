/*
┍──┐  ┌──┐  ┌─┐        ┌─┐  ┌────────┐
│  │  │  │  │  \      /  │  │___  ___│
│  │  │  │  │   \    /   │     │  │
│  └──┘  │  │    \  /    │     │  │
\        /  │  \  \/  /  │     │  │
 \______/   │__│\____/│__│     │__│
 
By IVring_Fazin(›´ω`‹ )
 */
var Sieve = {
		gravel:function(item,count,probability){
			Callback.addCallback("ItemUse", function(c,it,b){
				if(
					b.id==BlockID.um_沙砾4
				){
					World.setBlock(c.x,c.y,c.z,BlockID.um_筛网 );
					if(
					Math.random()*100<probability
					){
					World.drop(c.x+0.5,c.y,c.z+0.5,item,parseInt((Math.random()*10)/count+1));
					};
				};
			})
		},
		dirt:function(item,count,probability){
			Callback.addCallback("ItemUse", function(c,it,b){
				if(
					b.id==BlockID.um_泥土4
				){
					World.setBlock(c.x,c.y,c.z,BlockID.um_筛网 );
					if(
					Math.random()*100<probability
					){
					World.drop(c.x+0.5,c.y,c.z+0.5,item,parseInt((Math.random()*10)/count+1));
					};
				};
			})
		},
		sand:function(item,count,probability){
			Callback.addCallback("ItemUse", function(c,it,b){
				if(
					b.id==BlockID.um_沙子4
				){
					World.setBlock(c.x,c.y,c.z,BlockID.um_筛网 );
					if(
					Math.random()*100<probability
					){
					World.drop(c.x+0.5,c.y,c.z+0.5,item,parseInt((Math.random()*10)/count+1));
					};
				};
			})
		},
		dust:function(item,count,probability){
			Callback.addCallback("ItemUse", function(c,it,b){
				if(
					b.id==BlockID.um_尘埃4
				){
					World.setBlock(c.x,c.y,c.z,BlockID.um_筛网 );
					if(
					Math.random()*100<probability
					){
					World.drop(c.x+0.5,c.y,c.z+0.5,item,parseInt((Math.random()*10)/count+1));
					};
				};
			})
		}
	};
var Hammer = {
		setBlock:function(id,name,texture){
			IDRegistry.genBlockID(id);
			Block.createBlock(id, [
				{name: name, texture:
				[[texture, 0]],
				inCreative: true}
			]);
			ToolAPI.registerBlockMaterial(id, "stone");
			
		},
		destroy:function(block,item,probability1,probability2,drop){
			Callback.addCallback("DestroyBlock", function(c,id){
	 		 	if(
	 		 	id.id==block&&
	 		 	(Player.getCarriedItem().id==ItemID.um_木锤子||
	 		 	Player.getCarriedItem().id==ItemID.um_铁锤子||
	 		 	Player.getCarriedItem().id==ItemID.um_石锤子||
	 		 	Player.getCarriedItem().id==ItemID.um_金锤子||
	 		 	Player.getCarriedItem().id==ItemID.um_钻石锤子)
	 		 	){
	 		 		 	if(
	 		 		 	Math.random()*100<probability1
	 		 		 	){
	 		 		 		World.drop(c.x,c.y,c.z,item,1);
	 		 		 	}else{
	 		 		 		 	if(
	 		 		 		 	Math.random()*100<probability2
	 		 		 		 	){
	 		 		 		 		World.drop(c.x,c.y,c.z,item,2);
						};
					}
				};
			})
			Block.registerDropFunctionForID(block, function(coords, id, data, level)
			{
				if(Player.getCarriedItem().id==ItemID.um_木锤子||
					Player.getCarriedItem().id==ItemID.um_铁锤子||
					Player.getCarriedItem().id==ItemID.um_石锤子||
					Player.getCarriedItem().id==ItemID.um_金锤子||
					Player.getCarriedItem().id==ItemID.um_钻石锤子
					){
						return [ [item, 4, 0]]; 
					}else{
						return [ [drop, 1, data]];
					}
				}
			);
		}
	};
var Debris = {
		workbench:function(item1,item2){
			Callback.addCallback("PostLoaded", function(){
				Recipes.addShaped({id: item2, count: 1, data: 0}, [
					"nno",
					"nno",
					"ooo"
				], ['n', item1, -1]);
			})
		}
	};
	
registerAPIUnit("Sieve", Sieve);
registerAPIUnit("Hammer", Hammer);
registerAPIUnit("Debris", Debris);