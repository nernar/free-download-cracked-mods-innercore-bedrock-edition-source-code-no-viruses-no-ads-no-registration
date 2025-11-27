IDRegistry.genBlockID("ft_研磨机");
Block.createBlock("ft_研磨机", [
	{name: "Mill", texture:
[["ft_机器外壳", 0], ["ft_研磨机", 0],
["ft_机器外壳", 1], ["ft_机器外壳", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var ymjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Mill"}},
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
"slot3": {type: "slot", x: 630, y: 202},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"},
"slot4": {type: "slot", x: 830, y: 42}
}

});

TileEntity.registerPrototype(BlockID.ft_研磨机,
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
			var st3=this.container.getSlot("slot4");
			
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
	
	work:function(id,id2,id3,lz,count2,count3,data1,data2,data3)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				(st3.id==0||st3.id==id3)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				st3.count<64&&
				(st4.id==ItemID.ft_钢磨盘||
				 st4.id==ItemID.ft_金磨盘||
				 st4.id==ItemID.ft_钻石磨盘)
			){
				Particles.addParticle(this.x+0.5, this.y+1, this.z+0.5, 16, 0, 0, 0, lz);
				this.data.jin+=this.data.jia;
				this.data.fue-=this.data.jian;
				st4.data++;
			};
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				(st3.id==0||st3.id==id3)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				st3.count<64&&
				(st4.id==ItemID.ft_钢磨盘||
				 st4.id==ItemID.ft_金磨盘||
				 st4.id==ItemID.ft_钻石磨盘)&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.data=data2;
				st2.count+=count2;
				st3.id=id3;
				st3.data=data3;
				if(id3!=0)
				{st3.count+=count3;}
			};
		},
	
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
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
			if(st4.data>=Item.getMaxDamage(st4.id))
			{st4.id=0};
			
			this.work(13,12,0,13,1,0,0,0,0);
			this.work(338,353,0,334,1,0,0,0,0);
			this.work(352,351,0,352,3,0,0,15,0);
			this.work(37,351,0,37,1,0,0,11,0);
			this.work(38,351,0,38,1,0,0,1,0);
			this.work(38,351,0,38,1,0,1,12,0);
			this.work(38,351,0,38,1,0,2,5,0);
			this.work(38,351,0,38,1,0,3,7,0);
			this.work(38,351,0,38,1,0,4,1,0);
			this.work(38,351,0,38,1,0,5,14,0);
			this.work(38,351,0,38,1,0,6,7,0);
			this.work(38,351,0,38,1,0,7,9,0);
			this.work(38,351,351,38,1,1,8,7,11);
			this.work(81,351,0,81,1,0,0,2,0);
			this.work(106,351,0,106,1,0,0,2,0);
			this.work(111,351,0,111,1,0,0,2,0);
		},

	getGuiScreen: function()
	{
			return ymjUI;
	},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<1000
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_研磨机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_研磨机, -1);