IDRegistry.genBlockID("ft_烤箱");
Block.createBlockWithRotation("ft_烤箱", [
	{name: "Oven", texture:
[["ft_机器外壳", 0], ["ft_机器外壳", 2],
["ft_机器外壳", 1], ["ft_烤箱", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var kxUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Oven"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_烤箱,
{
	defaultValues:
	{
		huo:0,
		jin:0,
		fue:0
	},
	
	makeFood:function(slot1,slot2,x,y)
		{
			var ss1 = this.container.getSlot(slot1);
			var ss2 = this.container.getSlot(slot2);
			if(
				ss1.id==x&&
				ss1.count>0&&
				this.data.huo>0&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<64
			){
				this.data.jin++;
			};
			
			if(
				this.data.jin>=200&&
				ss1.id==x&&
				ss1.count>=8&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<=56
			){
				ss2.id=y;
				ss2.count+=8;
				ss1.count-=8;
				this.data.jin=0;
			};
			if(
				this.data.jin>=200&&
				ss1.id==x&&
				ss1.count<8&&ss1.count>0&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<=64-ss1.count
			){
				ss2.id=y;
				ss2.count+=ss1.count;
				ss1.count=0;
				this.data.jin=0;
			};
		},
		addnewextramachine:function(id){
			var ex1=World.getTileEntity(this.x, this.y+1, this.z)
			var ex2=World.getTileEntity(this.x, this.y-1, this.z)
			var ex3=World.getTileEntity(this.x+1, this.y, this.z)
			var ex4=World.getTileEntity(this.x-1, this.y, this.z)
			var ex5=World.getTileEntity(this.x, this.y, this.z+1)
			var ex6=World.getTileEntity(this.x, this.y, this.z-1)
			if(World.getBlockID(this.x,this.y+1,this.z)==id&&ex1!=null){
				if(ex1.data.work==true){
					this.data.huo--;
					ex1.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y-1,this.z)==id&&ex2!=null){
				if(ex2.data.work==true){
					this.data.huo--;
					ex2.data.huo++;
					}
					};
					if(World.getBlockID(this.x+1,this.y,this.z)==id&&ex3!=null){
				if(ex3.data.work==true){
					this.data.huo--;
					ex3.data.huo++;
					}
					};
					
					if(World.getBlockID(this.x-1,this.y,this.z)==id&&ex4!=null){
				if(ex4.data.work==true){
					this.data.huo--;
					ex4.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y,this.z+1)==id&&ex5!=null){
				if(ex5.data.work==true){
					this.data.huo--;
					ex5.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y,this.z-1)==id&&ex6!=null){
				if(ex6.data.work==true){
					this.data.huo--;
					ex6.data.huo++;
					}
					};
					},
	tick:function()
		{
			this.addnewextramachine(BlockID.ft_蛋糕机);
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("huo", 
			this.data.huo/160);
			this.container.setScale("jindu1", 
			this.data.jin/200);
			this.container.setScale("jindu2", 
			this.data.fue/600);
			this.container.setText("text",this.data.fue + " FuE");
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			
			
			if(this.data.huo>0)
			{this.data.huo--};
			
			if(
				this.data.fue>100&&
				this.data.huo<=0
			){
				this.data.huo=160;
				this.data.fue-=100;
			};
			
			this.makeFood("slot1","slot2",392,393);
			this.makeFood("slot1","slot2",319,320);
			this.makeFood("slot1","slot2",363,364);
			this.makeFood("slot1","slot2",349,350);
			this.makeFood("slot1","slot2",365,366);
			this.makeFood("slot1","slot2",411,412);
			this.makeFood("slot1","slot2",423,424);
			
		},

	getGuiScreen: function()
		{
			return kxUI;
		},
		energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<600
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_烤箱, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_烤箱,FuE);
