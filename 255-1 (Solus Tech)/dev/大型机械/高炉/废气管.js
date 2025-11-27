IDRegistry.genBlockID("ft_废气管");
Block.createBlock("ft_废气管", [
	{name: "ft_exhaust Pipe", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

setupWireRender(BlockID.ft_废气管,0.35, "btube");

TileEntity.registerPrototype(BlockID.ft_废气管,
{
	defaultValues:
	{
		time:0,
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
			}
    },
			
	trance:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_废气管&&
				this.liquidStorage.getAmount("ft_exha")==100&&
				rq.liquidStorage.getAmount("ft_exha")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("ft_exha", 100);
				rq.liquidStorage.addLiquid("ft_exha", 100);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
	tick:function()
		{
			this.energy(BlockID.ft_烟囱,200);
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
			
			this.trance(rq1,qqq);
			this.trance(rq2,www);
			this.trance(rq3,eee);
			this.trance(rq4,rrr);
			this.trance(rq5,ttt);
			this.trance(rq6,yyy);
			
			if(this.liquidStorage.getAmount("ft_cold")>0)
				{this.liquidStorage.getLiquid("ft_cold", 1)};
			
		},
		
	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 100);
			this.liquidStorage.setLimit("ft_cold", 50);
		}

});


