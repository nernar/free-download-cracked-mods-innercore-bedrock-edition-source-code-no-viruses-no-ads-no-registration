IDRegistry.genBlockID("ft_水管");
Block.createBlock("ft_水管", [
	{name: "Water Pipe", texture:
[["ft_水管", 0], ["ft_水管", 0],
["ft_水管", 0], ["ft_水管", 0],
["ft_水管", 0], ["ft_水管", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_水管, {x: 0.5 - CABLE_BLOCK_WIDTH, y: 0.5 - CABLE_BLOCK_WIDTH, z: 0.5 - CABLE_BLOCK_WIDTH}, {x: 0.5 + CABLE_BLOCK_WIDTH, y: 0.5 + CABLE_BLOCK_WIDTH, z: 0.5 + CABLE_BLOCK_WIDTH});
setupWireRender(BlockID.ft_水管,0.4, "wtube");

TileEntity.registerPrototype(BlockID.ft_水管,
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
			
	trance:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_水管&&
				this.liquidStorage.getAmount("water")==1&&
				rq.liquidStorage.getAmount("water")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("water", 1);
				rq.liquidStorage.addLiquid("water", 1);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
		shao:function(bd,bc)
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
			
	trancel:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_水管&&
				this.liquidStorage.getAmount("lava")==1&&
				rq.liquidStorage.getAmount("lava")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq.liquidStorage.addLiquid("lava", 1);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
	tick:function()
		{
			this.energy(BlockID.ft_锅炉,16);
			this.energy(BlockID.ft_洗矿机,16);
			this.energy(BlockID.ft_大型洗矿机,32);
			this.shao(BlockID.ft_液体燃料发电机,16);
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
			
			this.trancel(rq1,qqq);
			this.trancel(rq2,www);
			this.trancel(rq3,eee);
			this.trancel(rq4,rrr);
			this.trancel(rq5,ttt);
			this.trancel(rq6,yyy);
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
			this.liquidStorage.setLimit("water", 1);
			this.liquidStorage.setLimit("lava", 1);
			this.liquidStorage.setLimit("ft_cold", 50);
		}

});


