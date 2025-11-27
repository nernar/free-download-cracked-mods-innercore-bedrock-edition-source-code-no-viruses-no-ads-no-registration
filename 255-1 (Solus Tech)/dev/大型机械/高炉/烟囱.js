IDRegistry.genBlockID("ft_烟囱");
Block.createBlock("ft_烟囱", [
	{name: "Chimney", texture:
[["ft_砖", 0], ["ft_烟囱", 0],
["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

var ycUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Chimney"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
],
elements: {
"jindu": {type: "scale", x: 550, y: 140,bitmap:"废气",scale: 4,direction:1,overlay:"标记"},
}

});

TileEntity.registerPrototype(BlockID.ft_烟囱,
{
	defaultValues:
	{
		huan:0
	},
	tick:function()
		{
			if(this.liquidStorage.getAmount("ft_exha")>0&&
				World.getBlock(this.x,this.y+1,this.z).id==0)
				{this.liquidStorage.getLiquid("ft_exha", 1)
				this.data.huan++;
				if(this.data.huan>=6){
				for(var i=1;i<5;i++)
				{
					Particles.addParticle(4,this.x+0.5, this.y+i, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.25, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.5, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.75, this.z+0.5, 0, 0, 0, 200);
					}
				this.data.huan=0
				}
				};
				
			this.liquidStorage.updateUiScale("jindu", "ft_exha");
		},

	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	getGuiScreen: function()
		{
			return ycUI;
		}
	
	
});
ICRender.getGroup("btube").add(BlockID.ft_烟囱, -1);
