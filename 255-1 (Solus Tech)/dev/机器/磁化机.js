IDRegistry.genBlockID("ft_磁化机");
Block.createBlock("ft_磁化机", [
	{name: "Magnetizer", texture:
[["ft_机器外壳", 0], ["ft_磁化机", 0],
["ft_磁化机", 1], ["ft_磁化机", 2],
["ft_磁化机", 1], ["ft_磁化机", 2]],
inCreative: true}
]);

var chjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Magnetizer"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "磁化", scale: 4},
		{type: "bitmap", x: 550, y: 235, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "磁化满", scale: 4},
		"slot1": {type: "slot", x: 460, y: 142},
		"jindu2": {type: "scale", x: 550, y: 235,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 300, width: 100, height: 30, text: "0 FuE"}
	}

});
TileEntity.registerPrototype(BlockID.ft_磁化机,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	work:function(x,y){
		var st1 = this.container.getSlot("slot1");
			var st2 = this.container.getSlot("slot2");
			if(st1.id==x&&st1.count>0&&(st2.id==y||st2.id==0)&&this.data.fue>0&&this.data.jin<400){
				this.data.fue--;
				this.data.jin++;
				};
				if(this.data.jin>=400&&st1.id==x&&st1.count>0&&(st2.id==y||st2.id==0)&&this.data.fue>0){
					st2.id=y;
					st2.count++;
					st1.count--;
					this.data.jin=0;
					this.data.fue--;
					};
					},
					tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
	this.container.setScale("jindu1", 
			this.data.jin/400);
			this.container.setScale("jindu2", 
			this.data.fue/600);
			this.work(ItemID.ft_钢,ItemID.ft_磁铁锭);
			this.work(ItemID.ft_磁铁锭,265);
			if(st1.count<=0)
				{
					st1.id=0;
					this.data.jin=0;
				};
				if(st2.count<=0){
					st2.id==0;
					};
					},
					getGuiScreen: function()
		{
			return chjUI;
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
ICRender.getGroup("ic-wire").add(BlockID.ft_磁化机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_磁化机,FuE);
