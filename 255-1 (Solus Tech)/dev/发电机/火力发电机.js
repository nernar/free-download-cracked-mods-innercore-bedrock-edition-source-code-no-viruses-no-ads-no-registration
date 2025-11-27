IDRegistry.genBlockID("ft_燃煤发电机");
Block.createBlockWithRotation("ft_燃煤发电机", [
	{name: "Coal-fired Generators", texture:
[["ft_机器外壳", 0], ["ft_排热口", 0],
["ft_机器外壳", 1], ["ft_火力发电机", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
]);

var hlfdjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Coal-fired Generators"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 180, bitmap: "电量槽", scale: 4},
{type: "bitmap", x: 430., y: 250, bitmap: "没火", scale: 3},
{type: "bitmap", x: 490, y: 150, bitmap: "温度计槽", scale: 5}
],
elements: {
"slot": {type: "slot", x: 420, y: 180},
"huo": {type: "scale", x: 430, y: 250,bitmap:"火",scale: 3,direction:1},
"jindu1": {type: "scale", x: 490, y: 150,bitmap:"温度",scale: 5,direction:1},
"jindu2": {type: "scale", x: 550, y: 180,bitmap:"电量",scale: 4,overlay:"电量槽外"},
"text1": {type: "text", x: 550, y: 260, width: 100, height: 30, text: "Temperature:"},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"},


}

});


TileEntity.registerPrototype(BlockID.ft_燃煤发电机,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		fue:0,
		huan:0
	},
	
	getGuiScreen: function()
		{
			return hlfdjUI;
		},

	tick:function()
	{
		var st=this.container.getSlot("slot");
		this.container.setScale("jindu1", 
		this.data.wen/230);
		this.container.setScale("jindu2", 
		this.data.fue/2000);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.container.setText("text2",this.data.wen + 20 +"℃");
		
		var qwq = World.getTileEntity(this.x, this.y-1, this.z);
		var gl=World.getBlock(this.x,this.y-1,this.z)
		
		if(
			this.data.huo>0
		){
			this.data.huo--;
			this.data.wen++;
		};

		if(
			this.data.huo<=0
		){
			this.data.hot=0;
		};


		if(
			this.data.huo<=0&&
			this.data.wen>26
		){
			this.data.wen-=1;
		};

		if(
			st.count==0
		){
			st.id=0;
		};
		
		if(
			this.data.wen>=230
		){
			this.data.wen=230;
		};
		if(
			qwq
		){
			if(
				qwq.liquidStorage.getAmount("water")>0&&
				gl.id==BlockID.ft_锅炉&&
				st.id==263&&
				st.data==0&&
				this.data.fue<2000&&
				this.data.huo<=0&&
				this.data.wen<230
			){
				this.data.hot=160;
				this.data.huo=160;
				st.count--;
			};
			
			if(
				qwq.liquidStorage.getAmount("water")>0&&
				gl.id==BlockID.ft_锅炉&&
				st.id==173&&
				st.data==0&&
				this.data.fue<2000&&
				this.data.huo<=0&&
				this.data.wen<230
			){
				this.data.hot=1500;
				this.data.huo=1500;
				st.count--;
			};
		};
		
		if(
			qwq&&
			qwq.liquidStorage.getAmount("water")>0&&
			this.data.wen>100&&this.data.fue<2000
		){
			this.data.huan++
			if(this.data.huan>=4){
			for(var i=1;i<3;i++)
				{
					Particles.addParticle(4,this.x+0.5, this.y+i+0.25, this.z+0.5,  0, 0, 0, 150);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.5, this.z+0.5, 0, 0, 0, 150);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.75, this.z+0.5, 0, 0, 0, 150);
					
				};
				this.data.huan=0;
				}
			
			qwq.liquidStorage.getLiquid("water", 0.01);
			this.data.fue+=3;
		};
		
	},
	
isGenerator:function(){
return true;
},

getEnergyStorage: function(){
		return 2000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 40;
		this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
	}

});
ICRender.getGroup("ic-wire").add(BlockID.ft_燃煤发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_燃煤发电机,FuE);