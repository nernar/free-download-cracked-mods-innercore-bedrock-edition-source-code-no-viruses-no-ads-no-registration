IDRegistry.genBlockID("ft_大型洗矿机");
Block.createBlock("ft_大型洗矿机", [
{name: "Large Ore Washer", texture:
[["ft_电池箱", 0], ["ft_洗矿机", 2],
["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 0], ["ft_机器外壳", 0]],
inCreative: true}
]);

var dxxkjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Large Ore Washer"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "洗矿", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4},
		{type: "bitmap", x: 350, y: 75, bitmap: "液体槽", scale: 3}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "洗矿满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"jindu3": {type: "scale", x: 350, y: 75,bitmap:"水槽",scale: 3,direction:1,overlay:"标记"},
		"slot2": {type: "slot", x: 630, y: 77},
		"slot3": {type: "slot", x: 630, y: 142},
		"slot4": {type: "slot", x: 630, y: 207},
		"text": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_大型洗矿机,
{
	defaultValues:
	{
		jin:0,
		fue:0,
		huan:0,
		magical:false
	},
	
	wash:function(id,id2,y,id3,yy,id4,yyy,x,z,gl1,gl2,gl3)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
			
			if(
				this.data.magical==true&&
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				(st3.id==id3||st3.id==0)&&
				st3.count<64&&
				(st4.id==id4||st4.id==0)&&
				st4.count<64&&
				this.data.fue>x&&
				this.liquidStorage.getAmount("water")>z
			){
				this.liquidStorage.getLiquid("water", z);
				this.data.jin++;
				this.data.fue-=x;
				this.data.huan++
				if(this.data.huan>=4){
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.45, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.45, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.55, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.55, this.y+1, this.z+0.5,  0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5, 0, 0, 0, 10);
				this.data.huan=0
				};

			};
			
			if(
				this.data.magical==true&&
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				(st3.id==id3||st3.id==0)&&
				st3.count<64&&
				(st4.id==id4||st4.id==0)&&
				st4.count<64&&
				this.data.fue>x&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.count+=y;
				if(Math.random()*100<gl1&&st2.count<64){
					st2.count++
					};
					if(Math.random()*100<gl2&&st3.count<64){
				st3.id=id3;
				st3.count+=yy;
				};
				if(Math.random()*100<gl3&&st4.count<64){
				st4.id=id4;
				st4.count+=yyy;
				};
			};
			
		},
	
	tick:function()
		{
			this.liquidStorage.updateUiScale("jindu3", "water");
			this.container.setText("text",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/2500);
			
			if(
		  World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 	 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	
		  World.getBlock(this.x+1,this.y-2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳

			){
				this.data.magical=true;
			}else{
				this.data.magical=false;
				};
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			this.wash(13,318,1,264,1,0,0,1,0.01,90,5,0);
			this.wash(BlockID.um_铁矿砂,265,2,266,1,ItemID.ingotCopper,1,1,0.01,40,20,20);
			this.wash(BlockID.um_金矿砂,266,2,265,1,ItemID.ingotCopper,1,1,0.01,40,20,20);
			this.wash(BlockID.um_铜矿砂,ItemID.ingotCopper,2,265,1,266,1,1,0.01,40,20,20);
			this.wash(12,289,1,264,1,0,0,1,0.01,40,5,0);
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

	init: function()
		{
			this.liquidStorage.setLimit("water", 32);
		},

	getGuiScreen: function()
		{
			if(
			this.data.magical==true
			){
				return dxxkjUI;
			};
		},
	
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<2500
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_大型洗矿机,FuE);
ICRender.getGroup("wtube").add(BlockID.ft_大型洗矿机, -1);