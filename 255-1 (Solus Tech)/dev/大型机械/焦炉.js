IDRegistry.genBlockID("ft_焦炉");
Block.createBlockWithRotation("ft_焦炉", [
	{name: "Coke Oven", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_焦炉", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

var jlUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Coke Oven"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 452, y: 150, bitmap: "没火", scale: 3.4},
		{type: "bitmap", x: 700, y: 75, bitmap: "液体槽", scale: 2.5},
		{type: "bitmap", x: 350, y: 75, bitmap: "温度计槽", scale: 6},
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"slot2": {type: "slot", x: 445, y: 212},
		"jindu3": {type: "scale", x: 700, y: 75, direction: 1, value: 0.5, bitmap: "废气", scale: 2.5},
		"huo": {type: "scale", x: 452, y: 150,bitmap:"火",scale: 3.4,direction:1},
		"jindu2": {type: "scale", x: 350, y: 75,bitmap:"温度",scale: 6,direction:1},
		"slot3": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"}
	}

});

TileEntity.registerPrototype(BlockID.ft_焦炉,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		jin:0,
		magical:false
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
		
	
	fire:function(id,wen,fire)
	{
		var st2=this.container.getSlot("slot2");
		
		if(
				st2.id==id&&st2.count>0&&
				st2.data==0&&
				this.data.huo<=0&&
				this.data.wen<wen
			){
				this.data.hot=fire;
				this.data.huo=fire;
				st2.count--;
			};
			
	},
	
	work:function(id1,id2,wen)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		
		if(
			st1.id==id1&&
			this.liquidStorage.getAmount("ft_exha")<200&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64
		){
			this.data.jin++;
			this.liquidStorage.addLiquid("ft_exha", 1);
		};
		if(this.data.wen<wen&&st2.count<=0&&this.data.jin>0){
				this.data.jin--;
};
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64&&
			this.data.jin>=100
		){
			st1.count--;
			st3.id=id2;
			st3.count++;
			this.data.jin=0;
		};
		
		
	},
	
	tick:function()
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		this.container.setScale("jindu1", 
		this.data.jin/100);
		this.container.setScale("jindu2", 
		this.data.wen/1200);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.liquidStorage.updateUiScale("jindu3", "ft_exha");
		this.container.setText("text2",this.data.wen + 26 +"℃");
		
		this.energy(BlockID.ft_废气管,100);
		this.energy(BlockID.ft_烟囱,200);
		if(st1.count==0){st1.id=0};
		if(st2.count==0){st2.id=0};
		if(st3.count==0){st3.id=0};
		if(
			this.liquidStorage.getAmount("ft_exha")<200&&
			this.data.huo>0
		){
			this.data.huo--;
			if(this.data.wen<1200){
			this.data.wen++;
			}
			this.liquidStorage.addLiquid("ft_exha", 1);
		};

		if(
			this.data.huo<=0
		){
			this.data.hot=0;
		};


		if(
			this.data.huo<=0&&
			this.data.wen>26
		){
			this.data.wen-=1;
		};

		if(
			st1.count==0
		){
			st1.id=0;
		};
		
		if(
			st2.count==0
		){
			st2.id=0;
		};
		
		if(
			st3.count==0
		){
			st3.id=0;
		};
		
		if(
			this.data.wen>=3000
		){
			this.data.wen=3000;
		};
			
		this.fire(263,800,160);
		this.fire(173,1200,1440);
		this.fire(ItemID.ft_焦炭,1200,1100);
		
		this.work(263,ItemID.ft_焦炭,1000);
		
		if(
	 	 	(World.getBlock(this.x+1,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z).id==45&&

	 	 	World.getBlock(this.x+1,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y+1,this.z).id==45&&

			  World.getBlock(this.x,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x+2,this.y,this.z-1).id==45&&
World.getBlock(this.x+2,this.y,this.z).id==45&&
World.getBlock(this.x+2,this.y,this.z+1).id==45&&
World.getBlock(this.x+1,this.y,this.z-1).id==45&&
World.getBlock(this.x+1,this.y,this.z+1).id==45&&
World.getBlock(this.x,this.y,this.z-1).id==45&&
World.getBlock(this.x,this.y,this.z+1).id==45&&

World.getBlock(this.x+2,this.y+1,this.z-1).id==45&&
World.getBlock(this.x+2,this.y+1,this.z).id==45&&
World.getBlock(this.x+2,this.y+1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z-1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z-1).id==45&&
World.getBlock(this.x,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45&&

World.getBlock(this.x+1,this.y-1,this.z).id==45&&
World.getBlock(this.x+2,this.y-1,this.z-1).id==45&&
World.getBlock(this.x+2,this.y-1,this.z).id==45&&
World.getBlock(this.x+2,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z-1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z-1).id==45&&
World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x+1,this.y,this.z).id==45&&
World.getBlock(this.x+1,this.y,this.z+1).id==45&&
World.getBlock(this.x+1,this.y,this.z+2).id==45&&
World.getBlock(this.x,this.y,this.z+2).id==45&&
World.getBlock(this.x-1,this.y,this.z).id==45&&
World.getBlock(this.x-1,this.y,this.z+1).id==45&&
World.getBlock(this.x-1,this.y,this.z+2).id==45&&

World.getBlock(this.x+1,this.y+1,this.z).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+2).id==45&&
World.getBlock(this.x,this.y+1,this.z+2).id==45&&
World.getBlock(this.x-1,this.y+1,this.z).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+2).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45&&

World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+2).id==45&&
World.getBlock(this.x,this.y-1,this.z+2).id==45&&
World.getBlock(this.x-1,this.y-1,this.z).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+2).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x,this.y,this.z+1).id==45&&
World.getBlock(this.x,this.y,this.z-1).id==45&&
World.getBlock(this.x-1,this.y,this.z-1).id==45&&
World.getBlock(this.x-1,this.y,this.z+1).id==45&&
World.getBlock(this.x-2,this.y,this.z-1).id==45&&
World.getBlock(this.x-2,this.y,this.z).id==45&&
World.getBlock(this.x-2,this.y,this.z+1).id==45&&

World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x-2,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-2,this.y-1,this.z).id==45&&
World.getBlock(this.x-2,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45&&

World.getBlock(this.x-1,this.y-1,this.z).id==45&&
World.getBlock(this.x,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x-2,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-2,this.y+1,this.z).id==45&&
World.getBlock(this.x-2,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45)
			
				)
			{this.data.magical=true}else{
				this.data.magical=false};
			
	},
	

	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	
	
	getGuiScreen: function()
		{
			if(
	 	 	this.data.magical==true
				)
			{return jlUI;}
		}
	
	
});