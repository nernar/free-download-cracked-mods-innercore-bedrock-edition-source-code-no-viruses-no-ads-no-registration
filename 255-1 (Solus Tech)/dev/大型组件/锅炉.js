IDRegistry.genBlockID("ft_锅炉");
Block.createBlock("ft_锅炉", [
	{name: "Boiler", texture:
[["ft_锅炉", 0], ["ft_锅炉", 1],
["ft_锅炉", 0], ["ft_锅炉", 0],
["ft_锅炉", 0], ["ft_锅炉", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_锅炉, 
{x: 0.5 - 0.4, y: 0.5 - 0.5, z: 0.5 - 0.4}, 
{x: 0.5 + 0.4, y: 1-0, z: 0.5 + 0.4});

var scUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Boiler"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
],
elements: {
"jindu": {type: "scale", x: 550, y: 140,bitmap:"水槽",scale: 4,direction:1,overlay:"标记"},
}

});


TileEntity.registerPrototype(BlockID.ft_锅炉,
{
	tick:function()
		{
			this.liquidStorage.updateUiScale("jindu", "water");
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 16);
		},

	click:function(id, count, data)
		{
			if(id==325&&
				data==8&&
				this.liquidStorage.getAmount("water")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("water", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return scUI;
		}
	
	
});
ICRender.getGroup("wtube").add(BlockID.ft_锅炉, -1);
