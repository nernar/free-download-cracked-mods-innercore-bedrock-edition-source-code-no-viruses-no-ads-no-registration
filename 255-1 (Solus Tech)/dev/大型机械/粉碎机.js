IDRegistry.genBlockID("ft_粉碎机");
Block.createBlock("ft_粉碎机", [
{name: "Grinder", texture:
[["ft_电池箱", 0], ["ft_粉碎机", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 0]],
inCreative: true}
]);

var fsjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Grinder"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 530, y: 146, bitmap: "粉碎", scale: 4},
{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
],

elements: {
"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "粉碎满", scale: 4},
"slot1": {type: "slot", x: 445, y: 75},
"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
"slot2": {type: "slot", x: 630, y: 142},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"},
"slot3": {type: "slot", x: 830, y: 42}
}

});

TileEntity.registerPrototype(BlockID.ft_粉碎机,
{
	defaultValues:
	{
		jin:0,
		jian:0,
		jia:0,
		fue:0
	},
	
	moPan:function()
		{
			var st3=this.container.getSlot("slot3");
			
			if(st3.id==ItemID.ft_钢磨盘)
				{
					this.data.jian=1;
					this.data.jia=1;
				};
				
			if(st3.id==ItemID.ft_金磨盘)
				{
					this.data.jian=1;
					this.data.jia=2;
				};
				
			if(st3.id==ItemID.ft_钻石磨盘)
				{
					this.data.jian=0.5;
					this.data.jia=2;
				};
			
		},
	
	work:function(id,id2,count2,data1,data2)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				(st3.id==ItemID.ft_钢磨盘||
				 st3.id==ItemID.ft_金磨盘||
				 st3.id==ItemID.ft_钻石磨盘)&&
			  World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
		  	World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 		 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 		 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	 		 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 		 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
			  World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_机器外壳

			){
				this.data.jin+=this.data.jia;
				this.data.fue-=this.data.jian;
				st3.data++;
			};
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				(st3.id==ItemID.ft_钢磨盘||
				 st3.id==ItemID.ft_金磨盘||
				 st3.id==ItemID.ft_钻石磨盘)&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.data=data2;
				st2.count+=count2;
			};
		},
	
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/2500);
			
			this.moPan();
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			if(st3.data>=Item.getMaxDamage(st3.id))
			{st3.id=0};
			
			this.work(1,4,1,0,0);
			this.work(4,13,1,0,0);
			this.work(13,12,1,0,0);
			this.work(338,353,1,0,0);
			this.work(352,351,3,0,15);
			this.work(89,348,4,0,0);
			this.work(369,377,1,0,0);
			this.work(15,BlockID.um_铁矿砂,1,0,0);
			this.work(14,BlockID.um_金矿砂,1,0,0);
			this.work(BlockID.oreCopper,BlockID.um_铜矿砂,1,0,0);
		},

	getGuiScreen: function()
	{
	if(
	 	 World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&
			World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		  
	 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳

		){
			return fsjUI;
		};
	},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<2500
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_粉碎机,FuE);