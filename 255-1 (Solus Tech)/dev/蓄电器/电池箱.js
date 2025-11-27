IDRegistry.genBlockID("ft_电池箱");
Block.createBlock("ft_电池箱", [
	{name: "Battery Box", texture:
[["ft_电池箱", 0], ["ft_电池箱", 1],
["ft_电池箱", 0], ["ft_电池箱", 0],
["ft_电池箱", 0], ["ft_电池箱", 0]],
inCreative: true}
]);

var dcxUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Battery Box"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 490, y: 180, bitmap: "电量槽", scale: 6},
],
elements: {
"slot": {type: "slot", x: 420, y: 180},
"jindu": {type: "scale", x: 490, y: 180,bitmap:"电量",scale: 6,overlay:"电量槽外"},
"text1": {type: "text", x: 490, y: 270, width: 100, height: 30, text: "Electricity:"},
"text2": {type: "text", x: 490, y: 290, width: 100, height: 30, text: "0 FuE"}
}

});

TileEntity.registerPrototype(BlockID.ft_电池箱,
{
	defaultValues:
	{
		fue:0
	},
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			this.container.setScale("jindu", 
			this.data.fue/15000);
		},

	
	getGuiScreen: function()
		{
			return dcxUI;
		},
	getEnergyStorage: function(){
		return 15000;
	},
	
	energyTick: function(type, src){
		
		if(
			src.amount()>1&&
			this.data.fue<15000
			){
				this.data.fue++;
				src.get(1);
			};
		
		var TRANSFER = 40;
		if(
			src.amount()<=0&&
			this.data.fue>0
			){
			this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
			}
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_电池箱,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_电池箱, -1);
