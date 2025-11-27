createFurnitureWood("innerRoom","miniblock","glass",0, "Inner Room", ItemID.innerRoom, BlockID.innerRoom);
Recipes.addShaped({id: ItemID.innerRoom, count: 1, data: 0}, ["ggg", "gvg", "gvg"], ["g", 21,0,"v", 266,0]);
Translation.addTranslation("Inner Room", {ru: "Внутренняя комната"});
var currentPlayerPosition;
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.innerRoom, 0, render);
var model = BlockRenderer.createModel();
model.addBox (7/16, 0, 7/16, 9/16, 1/32, 9/16,  41, 0);
var group = ICRender.getGroup("innerRoom");
group.add(BlockID.innerRoom,0);
var innerRoomBorderRender=[
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,15/16,0,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(-1,0,0,group,true)),
	box:[0/16,15/16,0,1/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,15/16,15/16,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,1,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,15/16,0/16,16/16,16/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,0/16,0,16/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(-1,0,0,group,true)),
	box:[0/16,0/16,0,1/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,0/16,15/16,16/16,1/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,-1,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,0/16,0/16,16/16,1/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(-1,0,0,group,true),ICRender.BLOCK(0,0,-1,group,true)),
	box:[0/16,0/16,0/16,1/16,16/16,1/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(1,0,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[15/16,0/16,15/16,16/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(-1,0,0,group,true),ICRender.BLOCK(0,0,1,group,true)),
	box:[0/16,0/16,15/16,1/16,16/16,16/16]
	},
	{side:ICRender.AND(ICRender.BLOCK(0,0,-1,group,true),ICRender.BLOCK(1,0,0,group,true)),
	box:[15/16,0/16,0/16,16/16,16/16,1/16]
	},
	{side:ICRender.BLOCK(0,1,0,group,true),
	box:[1/16,15/16,1/16,15/16,16/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(0,-1,0,group,true),
	box:[1/16,0/16,1/16,15/16,1/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(-1,0,0,group,true),
	box:[0/16,1/16,1/16,1/16,15/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(1,0,0,group,true),
	box:[15/16,1/16,1/16,16/16,15/16,15/16],
	id:20
	},
	{side:ICRender.BLOCK(0,0,-1,group,true),
	box:[1/16,1/16,0/16,15/16,15/16,1/16],
	id:20
	},
	{side:ICRender.BLOCK(0,0,1,group,true),
	box:[1/16,1/16,15/16,15/16,15/16,16/16],
	id:20
	}
];
for(var i in innerRoomBorderRender){
	var c = innerRoomBorderRender[i];
	var sModel= BlockRenderer.createModel();
	var box=c.box;
	sModel.addBox(box[0],box[1],box[2],box[3],box[4],box[5],c.id||155,0);
	render.addEntry(sModel).setCondition(c.side);
}
var seeds=0;
var playerInDimension=false;
Timer={};
Timer.timers=[];
Timer.addTimer=function(func, time, arg){
	this.timers.push({func:func, time:time, arg:arg});
};
Callback.addCallback("tick", function() {
	for(var i in Timer.timers){
		var t = Timer.timers[i];
		t.time--;
		if(t.time==0){
			t.func(t.arg);
			Timer.timers.splice(Timer.timers.indexOf(i), 1);
		}
	}
});
var PlayerInDimension;
Saver.addSavesScope("PlayerInDimension",
	function read(scope){
		if(scope&&scope.origin){PlayerInDimension = scope.origin;}
	},
	
	function save(){
		return {origin:PlayerInDimension};
	}
);
getGamemode=function(){
	let gm=ModAPI.requireGlobal("Level.getGameMode");
	return gm(Player.get());
};
setGamemode=function(i){
	let gm=ModAPI.requireGlobal("Level.setGameMode");
	return gm(i);
};
TileEntity.registerPrototype(BlockID.innerRoom, {
	init:function(){
		this.animateBlock();
	},
	click:function(){
		if(!PlayerInDimension){
			PlayerInDimension={
			armors:[],
			items:[],
			bool:false,
			position:{},
			currentRoom:null,
			origin:{},
			seeds:0,
			gamemode:0
		};
		}
		if(!PlayerInDimension.bool){
		PlayerInDimension.position=Player.getPosition();
		PlayerInDimension.gamemode=getGamemode();
		setGamemode(1);
		Game.message("Вы попали внутрь блока, чтобы выбраться, напишите в чат /exit");
		if(typeof this.data.seed!="number"){
			this.data.seed=PlayerInDimension.seeds;
			seed=this.data.seed;
			PlayerInDimension.seeds++;
			Player.setPosition(34567,8,34567+16*seed);
			var o={x:34567,y:1,z:34567+16*seed};
			Timer.addTimer(function(o){
			for(var x = 0; x<17; x++){
				for(var z = 0; z<17; z++){
					World.setBlock(o.x+x, o.y,o.z+z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var z = 0; z<17; z++){
					World.setBlock(o.x+x, o.y+17,o.z+z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+x, o.y+y,o.z, 155,5);
				}
			}
			for(var x = 0; x<17; x++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+x, o.y+y,o.z+17, 155,5);
				}
			}
			for(var z = 0; z<17; z++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x, o.y+y,o.z+z, 155,5);
				}
			}
			for(var z = 0; z<17; z++){
				for(var y = 0; y<17; y++){
					World.setBlock(o.x+17, o.y+y,o.z+z, 155,5);
				}
			}
			for(var z = 1; z<17; z++){
				for(var y = 1; y<17; y++){
					for(var x = 1; x<17; x++){
						World.setBlock(o.x+x, o.y+y,o.z+z, 0);
					}
				}
			}
		},20,o);
		}
		Player.setPosition(34567+8,8,34567+8+16*this.data.seed);
		PlayerInDimension.origin={x:34568,y:2,z:34568+16*this.data.seed};
		PlayerInDimension.currentRoom=this;
		PlayerInDimension.bool=true;
		PlayerInDimension.items=[];
		PlayerInDimension.armors=[];
		for(var i =0; i<4; i++){
			var item = Player.getArmorSlot (i);
				PlayerInDimension.armors[i]={
					id:item.id,
					data:item.data,
					count:item.count
				};
				Player.setArmorSlot(i, 0,0,0);
		}
		for(var i = 9; i<45; i++){
			var item = Player.getInventorySlot(i);
			if(item.count>0){
				PlayerInDimension.items.push({
					id:item.id,
					data:item.data,
					count:item.count
				});
				Player.setInventorySlot(i, 0,0,0);
			}
		}
	}
	},
	animateBlock:function(destroy){
		var blocks=this.data.blocks||[];
		if(this.animations){
			for(var i in this.animations){
				if(this.animations[i].isLoaded){
					this.animations[i].destroy();
				}
			}
		}
		this.animations=[];
		if(!destroy){
		for(var i in blocks){
			this.animations.push(new Animation.Item(this.x+(blocks[i].x+.5)/16, this.y+(blocks[i].y+.5)/16, this.z+(blocks[i].z+.5)/16));
			this.animations[this.animations.length-1].describeItem({
				id: blocks[i].id,
				count: 1,
				data: blocks[i].data,
				size: 1/16,
			});
			this.animations[this.animations.length-1].load();
		}
		}
	},
	destroy:function(){
		this.animateBlock(true);
	}
});
Callback.addCallback("NativeCommand", function (c) {
	str = c.split(" ");
	if(str[0] == "/exit"&&PlayerInDimension.bool){
		if(!PlayerInDimension){
			PlayerInDimension={
			armors:[],
			items:[],
			bool:false,
			position:{},
			currentRoom:null,
			origin:{},
			seeds:0
		};
		}
		PlayerInDimension.bool=false;
		setGamemode(PlayerInDimension.gamemode);
		Player.setPosition(PlayerInDimension.position.x,PlayerInDimension.position.y,PlayerInDimension.position.z);
		for(var i =9;i<45; i++){
			var it=PlayerInDimension.items[i-9];
			if(it&&it.id&&it.count){Player.setInventorySlot(i,it.id,it.count,it.data);}else{
				Player.setInventorySlot(i, 0,0,0);
			}
		}
		for(var i = 0; i<4; i++){
			var it=PlayerInDimension.armors[i];
			Player.setArmorSlot(i, 0,0,0); 
			Player.setArmorSlot(i,it.id,it.count,it.data);
		}
		Entity.clearEffects(Player.get());
		var blocks=[];
		for(var x=0; x<16; x++){
			for(var y=0; y<16; y++){
				for(var z=0; z<16; z++){
					var o = PlayerInDimension.origin;
					block=World.getBlock(o.x+x, o.y+y, o.z+z);
					if(block.id!=0){
						blocks.push({x:x,y:y,z:z,id:block.id,data:block.data});
					}
				}
			}
		}
		PlayerInDimension.currentRoom.data.blocks=blocks;
		PlayerInDimension.currentRoom.animateBlock();
	}
});
Callback.addCallback("DestroyBlock",function(c,b,p){
	if(PlayerInDimension&&PlayerInDimension.bool&&b.id==155&&b.data==5){
		Game.prevent();
	}
});
/*Callback.addCallback("tick",function(){
	if(PlayerInDimension.bool){
		
	}
});*/
