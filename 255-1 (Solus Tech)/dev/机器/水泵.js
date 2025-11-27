IDRegistry.genBlockID("ft_水泵");
Block.createBlock("ft_水泵", [
	{name: "Water Pump", texture:
[["ft_电池箱", 0], ["ft_机器外壳", 2],
["ft_水泵", 0], ["ft_水泵", 0],
["ft_水泵", 0], ["ft_水泵", 0]],
inCreative: true}
]);

var sbUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Water Pump"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 550, y: 80, bitmap: "电量槽", scale: 4},
],
elements: {
"jindu1": {type: "scale", x: 550, y: 140,bitmap:"水槽",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 550, y: 80,bitmap:"电量",scale: 4,direction:0,overlay:"电量槽外"},
"jindu3": {type: "scale", x: 550, y: 140,bitmap:"岩浆",scale: 4,direction:1,overlay:"标记"},
"text2": {type: "text", x: 650, y: 100, width: 100, height: 30, text: "0 FuE"}
}

});

TileEntity.registerPrototype(BlockID.ft_水泵,
{
	defaultValues:
	{
		fue:0
	},
	xiangsi:function(bd,bc)
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
				this.liquidStorage.getAmount("lava")>=1&&
				rq1.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq1.liquidStorage.addLiquid("lava", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq2.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq2.liquidStorage.addLiquid("lava", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq3.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq3.liquidStorage.addLiquid("lava", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq4.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq4.liquidStorage.addLiquid("lava", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq5.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq5.liquidStorage.addLiquid("lava", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq6.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq6.liquidStorage.addLiquid("lava", 1);
			}
    },
	tieba:function(bd,bc)
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
				this.liquidStorage.getAmount("water")>=1&&
				rq1.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq1.liquidStorage.addLiquid("water", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq2.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq2.liquidStorage.addLiquid("water", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq3.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq3.liquidStorage.addLiquid("water", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq4.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq4.liquidStorage.addLiquid("water", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq5.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq5.liquidStorage.addLiquid("water", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq6.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq6.liquidStorage.addLiquid("water", 1);
			}
    },
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var wat=World.getBlock(this.x,this.y-1,this.z)
			this.liquidStorage.updateUiScale("jindu1", "water");
			this.liquidStorage.updateUiScale("jindu3", "lava");
			this.container.setScale("jindu2", 
			this.data.fue/100);
			
			if(
				this.data.fue>=10&&
				wat.id==9&&this.liquidStorage.getAmount("lava")<=0&&
				this.liquidStorage.getAmount("water")<16
			){
				this.liquidStorage.addLiquid("water", 1);
				World.setBlock(this.x, this.y-1, this.z, false);
				this.data.fue-=10;
			}
			if(
				this.data.fue>=10&&
				(wat.id==10||wat.id==11)&&this.liquidStorage.getAmount("water")<=0&&
				this.liquidStorage.getAmount("lava")<16
			){
				this.liquidStorage.addLiquid("lava", 1);
				World.setBlock(this.x, this.y-1, this.z, false);
				this.data.fue-=10;
			}
			
			this.tieba(BlockID.ft_水管,1);
			this.tieba(BlockID.ft_洗矿机,16);
			this.tieba(BlockID.ft_大型洗矿机,32);
			this.tieba(BlockID.ft_锅炉,16);
			this.xiangsi(BlockID.ft_液体燃料发电机,16);
			this.xiangsi(BlockID.ft_水管,1);
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 16);
			this.liquidStorage.setLimit("lava", 16);
		},

	getGuiScreen: function()
		{
			return sbUI;
		},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<100
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_水泵,FuE);
	ICRender.getGroup("ic-wire").add(BlockID.ft_水泵, -1);
	ICRender.getGroup("wtube").add(BlockID.ft_水泵, -1);

