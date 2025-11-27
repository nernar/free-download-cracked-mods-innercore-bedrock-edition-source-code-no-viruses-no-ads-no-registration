IDRegistry.genBlockID("ft_压板机");
Block.createBlockWithRotation("ft_压板机", [
	{name: "Plate Compressors", texture:
[["ft_机器外壳", 0], ["ft_压板机", 0],
["ft_机器外壳", 0], ["ft_压板机", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var ybjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Plate Compressors"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_压板机,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	
	work:function(id,id2,co)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
			st1.id==id&&
			st1.count>=co&&
			(st2.id==id2||st2.id==0)&&
			st2.count<64&&
			this.data.fue>0
		){
			this.data.jin++;
			this.data.fue--;
		};
		
		if(
			st1.id==id&&
			st1.count>=co&&
			(st2.id==id2||st2.id==0)&&
			st2.count<64&&
			this.data.jin>=200
		){
			st1.count-=co;
			st2.id=id2;
			st2.count++;
			this.data.jin=0
		};
		
	},
		
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu1", 
			this.data.jin/200);
			this.container.setScale("jindu2", 
			this.data.fue/1200);
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
				
				this.work(ItemID.ft_高温钢,ItemID.ft_钢板,1);
				this.work(ItemID.ft_高温铜,ItemID.ft_铜板,1);
				this.work(5,339,1);
			this.work(53,339,1);
			this.work(5,339,1);
			this.work(65,339,1);
			this.work(96,339,1);
			this.work(126,339,1);
			this.work(135,339,1);
			this.work(323,339,1);
			this.work(324,339,1);
			this.work(333,339,1);
			this.work(85,339,1);
			this.work(107,339,1);
		},

	getGuiScreen: function()
		{
			return ybjUI;
		},
		energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<1199
			){
				this.data.fue+=2;
				src.get(2);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_压板机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_压板机, -1);