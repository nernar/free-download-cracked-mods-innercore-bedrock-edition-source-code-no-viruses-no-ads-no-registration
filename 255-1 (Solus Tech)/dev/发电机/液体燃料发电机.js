IDRegistry.genBlockID("ft_液体燃料发电机");
Block.createBlock("ft_液体燃料发电机", [
	{name: "Liquid Fuel Generator", texture:
[["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_液体燃料发电机", 0], ["ft_液体燃料发电机", 0],
["ft_液体燃料发电机", 0], ["ft_液体燃料发电机", 0]],
inCreative: true}
]);

var ytrlfdjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Liquid Fuel Generator"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 450, y: 75, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 570, y: 180, bitmap: "电量槽", scale: 4},
{type: "bitmap", x: 572, y: 250, bitmap: "没火", scale: 4},
{type: "bitmap", x: 353, y: 160, bitmap: "进度条down", scale: 3.2}
],
elements: {
"slot1": {type: "slot", x: 350, y: 75},
"slot2": {type: "slot", x: 350, y: 275},
"huo": {type: "scale", x: 572, y: 250,bitmap:"火",scale: 4,direction:1},
"jindu1": {type: "scale", x: 450, y: 75,bitmap:"岩浆",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 570, y: 180,bitmap:"电量",scale: 4,direction:0,overlay:"电量槽外"},
"text": {type: "text", x: 570, y: 150, width: 100, height: 30, text: "0 FuE"}
}

});
TileEntity.registerPrototype(BlockID.ft_液体燃料发电机,
{
	defaultValues:
	{
		fue:0,
		huo:0
	},
	
	addLava:function(id1,id2,c2,data1,data2)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
		st1.id==id1&&
		st1.data==data1&&
		(st2.id==id2||st2.id==0)&&
		st1.count>0&&
		st2.count<c2&&
		this.liquidStorage.getAmount("lava")<16
		){
			st1.count--;
			st2.id=id2;
			st2.count++;
			st2.data=data2;
			this.liquidStorage.addLiquid("lava", 1);
		};
		
	},
	
	tick:function()
		{
			this.container.setText("text",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu2", 
			this.data.fue/3000);
			this.container.setScale("huo", 
			this.data.huo/1);
			this.liquidStorage.updateUiScale("jindu1", "lava");
			
			if(st1.count==0)
				{
					st1.id=0;
				};
				if(st2.count==0)
				{
					st2.id=0;
				};
				
				this.addLava(325,325,16,10,0);
				
				if(
				this.liquidStorage.getAmount("lava")>0&&
				this.data.fue<3000
				){
					this.data.fue+=2;
					this.liquidStorage.getLiquid("lava", 0.005);
					this.data.huo=1;
				}else{
					this.data.huo=0;
					};
		},
	
	click:function(id, count, data)
		{
			if(id==325&&
				data==10&&
				this.liquidStorage.getAmount("lava")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("lava", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return ytrlfdjUI;
		},
	
	init: function()
		{
			this.liquidStorage.setLimit("lava", 16);
		},
	isGenerator:function(){
		return true;
	},

	getEnergyStorage: function(){
		return 3000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 40;
		this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
	}

});
ICRender.getGroup("ic-wire").add(BlockID.ft_液体燃料发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_液体燃料发电机,FuE);
ICRender.getGroup("wtube").add(BlockID.ft_液体燃料发电机, -1);