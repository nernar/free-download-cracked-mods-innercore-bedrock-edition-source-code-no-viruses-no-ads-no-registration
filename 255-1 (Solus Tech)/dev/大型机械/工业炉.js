IDRegistry.genBlockID("ft_工业炉");
Block.createBlockWithRotation("ft_工业炉", [
	{name: "Industrial Furnaces", texture:
[["ft_机器外壳", 0], ["ft_机器外壳", 2],
["ft_机器外壳", 1], ["ft_工业炉", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var gylUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Industrial Furnaces"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "热满", scale: 4},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_工业炉,
{
	defaultValues:
	{
		huo:0,
		jin:0,
		fue:0,
		magical:false
	},
		
	work:function(id,id2,co)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
		st1.id==id&&
		st1.count>0&&
		(st2.id==id2||st2.id==0)&&
		st2.count<64&&
		this.data.magical==true&&
		this.data.fue>0
		){
			this.data.jin+=co;
			this.data.fue--;
		};
		
		if(
		st1.id==id&&
		st1.count>0&&
		(st2.id==id2||st2.id==0)&&
		st2.count<64&&
		this.data.magical==true&&
		this.data.jin>=380
		){
			this.data.jin=0;
			st1.count--;
			st2.id=id2;
			st2.count++;
		};
		
	},
		
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("huo", 
			this.data.huo/1);
			this.container.setScale("jindu1", 
			this.data.jin/380);
			this.container.setScale("jindu2", 
			this.data.fue/3000);
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			
			this.work(15,265,10);
			this.work(14,266,10);
			this.work(12,20,10);
			this.work(337,336,10);
			this.work(4,1,10);
			this.work(BlockID.oreCopper,ItemID.ingotCopper,10);
			this.work(BlockID.ft_磁铁矿,ItemID.ft_磁铁锭,10);
			this.work(BlockID.um_铁矿砂,265,10);
			this.work(BlockID.um_金矿砂,266,10);
			this.work(BlockID.um_铜矿砂,ItemID.ingotCopper,10);
			this.work(263,ItemID.ft_焦炭,5);
			this.work(265,ItemID.ft_钢,3);
			this.work(ItemID.ingotCopper,ItemID.ft_高温铜,7);
			this.work(ItemID.ft_钢,ItemID.ft_高温钢,7);
			this.work(368,381,1);
			if(
				st1.id!=0&&
				this.data.huo<=0
			){
				this.data.huo=1;
			}else{
				this.data.huo=0;
				};
			
			if(
	 	 	(World.getBlock(this.x+1,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 	 	World.getBlock(this.x+1,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	
			  World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

			  World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x+2,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+2,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+2,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&

World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x+2,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+2).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z+2).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+2).id==BlockID.ft_机器外壳&&

World.getBlock(this.x+1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z+1).id==BlockID.ft_机器外壳&&

World.getBlock(this.x,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳)
			
				)
			{this.data.magical=true}else{
				this.data.magical=false};
			
		},

	getGuiScreen: function()
		{
			if(this.data.magical==true)
			{
				return gylUI;
			}
		},
		energyTick: function(type, src){
			if(
			src.amount()>2&&
			this.data.fue<3000
			){
				this.data.fue+=2;
				src.get(2);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_工业炉,FuE);
