IDRegistry.genBlockID("ft_蛋糕机");
Block.createBlock("ft_蛋糕机", [
	{name: "Cake Machine", texture:
[["ft_机器外壳", 2], ["ft_蛋糕机", 0],
["ft_蛋糕机", 1], ["ft_蛋糕机", 2],
["ft_蛋糕机", 2], ["ft_蛋糕机", 1]],
inCreative: true}
]);

var dgjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Cake Machine"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 400, y: 220, bitmap: "没火", scale: 4},
{type: "bitmap", x: 450, y: 150, bitmap: "进度条up", scale: 4},
],
elements: {
"slot1": {type: "slot", x: 650, y: 140},
"slot2": {type: "slot", x: 650, y: 200},
"slot3": {type: "slot", x: 650, y: 260},
"jindu1": {type: "scale", x: 550, y: 140,bitmap:"废气",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 400, y: 220,bitmap:"火",scale: 4,direction:1},
"jindu3": {type: "scale", x: 450, y: 150,bitmap:"进度条满up",scale: 4,direction:1}
}

});

TileEntity.registerPrototype(BlockID.ft_蛋糕机,
{
	defaultValues:
	{
		huo:0,
		work:false,
		jin:0
	},
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("jindu2", 
			this.data.huo/80);
			this.container.setScale("jindu3", 
			this.data.jin/40);
			this.liquidStorage.updateUiScale("jindu1", "milk");
			
			if(st1.count==0)
				{
					st1.id=0;
				};
				if(st2.count==0)
				{
					st2.id=0;
				};
				if(st3.count==0)
				{
					st3.id=0;
				};
				if(this.data.huo<=80){
				this.data.work=true
}else{this.data.work=false};

				
			if(
			World.getBlock(this.x,this.y+1,this.z).id==0&&
			this.liquidStorage.getAmount("milk")>=3&&
			st1.id==296&&
			st2.id==353&&
			st3.id==344&&
			st1.count>=3&&
			st2.count>=2&&
			st3.count>=1&&
			this.data.huo>=0
			){this.data.jin++;
			this.data.huo--;
			if(this.data.jin>=40){
				this.data.jin=0;
				this.liquidStorage.getLiquid("milk", 3);
				st1.count-=3;
				st2.count-=2;
				st3.count--;
				World.setBlock(this.x,this.y+1,this.z,92);
				}
			}else{this.data.jin=0
			};
			
			
		},

	init: function()
		{
			this.liquidStorage.setLimit("milk", 32);
		},

	click:function(id, count, data)
		{
			if(id==325&&
				data==1&&
				this.liquidStorage.getAmount("milk")<=32
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("milk", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return dgjUI;
		}

});

