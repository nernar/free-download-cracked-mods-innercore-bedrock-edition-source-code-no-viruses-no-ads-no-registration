IDRegistry.genBlockID("ft_高炉");
Block.createBlock("ft_高炉", [
	{name: "Blast Furnace", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_高炉", 0], ["ft_高炉", 0],
["ft_高炉", 0], ["ft_高炉", 0]],
inCreative: true}
]);

var glUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Blast Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 3.2},
		{type: "bitmap", x: 700, y: 75, bitmap: "液体槽", scale: 2}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 3.2},
		"jindu2": {type: "scale", x: 700, y: 75, direction: 1, value: 0.5, bitmap: "废气", scale: 2},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 3.2},
		"slot1": {type: "slot", x: 441, y: 75},
		"slot2": {type: "slot", x: 441, y: 212},
		"slot3": {type: "slot", x: 625, y: 142},
	}
});

TileEntity.registerPrototype(BlockID.ft_高炉,
{
	defaultValues:
	{
		huo:0,
		hot:0,
		jin:0
	},
	energy:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq1.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq1.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq2.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq2.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq3.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq3.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq4.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq4.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq5.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq5.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq6.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq6.liquidStorage.addLiquid("ft_exha", 10);
			};
			
		},
		
		tick:function()
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("huo", 
			this.data.huo/160);
			this.container.setScale("jindu1", 
			this.data.jin/1200);
			this.liquidStorage.updateUiScale("jindu2", "ft_exha");
			this.energy(BlockID.ft_废气管,100);
			
			if(this.data.huo>0)
			{this.data.huo--};
			
			if(st1.count==0){st1.id=0};
		if(st2.count==0){st2.id=0};
		if(st3.count==0){st3.id=0};
			
			if(
				World.getBlock(this.x+1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				
				World.getBlock(this.x+1,this.y+1,this.z).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z).id==45&&
				World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x,this.y+1,this.z).id==11&&
				
				World.getBlock(this.x+1,this.y+2,this.z).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z).id==108&&
				World.getBlock(this.x+1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x,this.y+2,this.z).id==0&&
				
				World.getBlock(this.x+1,this.y-1,this.z).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z).id==108&&
				World.getBlock(this.x+1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x,this.y-1,this.z).id==45&&
				st1.id==265&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				st1.count>0&&
				(st3.id==ItemID.ft_钢||st3.id==0)&&
				st3.count<64&&this.data.huo>0
			){
				this.data.jin+=1;
				this.liquidStorage.addLiquid("ft_exha", 1);
			};
			if(this.data.huo<=0&&this.data.jin>0){
				this.data.jin--
				};
			if(
				st1.id==265&&
				st1.count>0&&
				(st3.id==ItemID.ft_钢||st3.id==0)&&
				st3.count<64&&
				this.data.jin>=1200
			){
				st3.id=ItemID.ft_钢;
				st3.count++;
				this.liquidStorage.addLiquid("ft_exha", 50);
				this.liquidStorage.addLiquid("ft_exha", Math.random()*100);
				st1.count--;
				this.data.jin=0;
			};
			
			if(
				st2.id==ItemID.ft_焦炭&&st2.count>0&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				this.data.huo<=0
			){
				this.data.hot=160;
				this.data.huo=160;
				st2.count--;
			};
			
			/*if(
				st2.id==173&&
				st2.data==0&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				this.data.huo<=0
			){
				this.data.hot=1500;
				this.data.huo=1500;
				st2.count--;
			};*/
			
			
		},
		init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	getGuiScreen: function()
		{
			if(
				World.getBlock(this.x+1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				
				World.getBlock(this.x+1,this.y+1,this.z).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z).id==45&&
				World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x,this.y+1,this.z).id==11&&
				
				World.getBlock(this.x+1,this.y+2,this.z).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z).id==108&&
				World.getBlock(this.x+1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x,this.y+2,this.z).id==0&&
				
				World.getBlock(this.x+1,this.y-1,this.z).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z).id==108&&
				World.getBlock(this.x+1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x,this.y-1,this.z).id==45
				
			){
			return glUI;
			};
		}
	
	
});
ICRender.getGroup("btube").add(BlockID.ft_高炉, -1);
