IDRegistry.genBlockID("ft_锻造炉");
Block.createBlockWithRotation("ft_锻造炉", [
	{name: "Forging Furnace", texture:
[["ft_锻造炉", 2], ["ft_锻造炉", 0],
["ft_锻造炉", 2], ["ft_锻造炉", 1],
["ft_锻造炉", 2], ["ft_锻造炉", 2]],
inCreative: true}
]);

var dzlUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Forging Furnace"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 452, y: 150, bitmap: "没火", scale: 3.4},
		{type: "bitmap", x: 350, y: 75, bitmap: "温度计槽", scale: 6},
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"slot2": {type: "slot", x: 445, y: 212},
		"huo": {type: "scale", x: 452, y: 150,bitmap:"火",scale: 3.4,direction:1},
		"jindu2": {type: "scale", x: 350, y: 75,bitmap:"温度",scale: 6,direction:1},
		"slot3": {type: "slot", x: 630, y: 142,clicker: {
			
				onClick: function(position, container, tileEntity){
					
					
					
					
				},
				onLongClick: function(position, container, tileEntity){
					this.onClick(position, container, tileEntity);
				}
			
		
	}},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"}
	}

});

TileEntity.registerPrototype(BlockID.ft_锻造炉,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		jin:0
	},
	
	fire:function(id,wen,fire)
	{
		var st2=this.container.getSlot("slot2");
		
		if(
				st2.id==id&&
				st2.data==0&&
				this.data.huo<=0&&
				this.data.wen<wen
			){
				this.data.hot=fire;
				this.data.huo=fire;
				st2.count--;
			};
	},
	
	work:function(id1,id2,wen)
	{
		var st1=this.container.getSlot("slot1");
		var st3=this.container.getSlot("slot3");
		
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64
		){
			this.data.jin++;
		};
		
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64&&
			this.data.jin>=230
		){
			st1.count--;
			st3.id=id2;
			st3.count++;
			this.data.jin=0;
		};
		
		
	},
	
	tick:function()
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		this.container.setScale("jindu1", 
		this.data.jin/230);
		this.container.setScale("jindu2", 
		this.data.wen/3000);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.container.setText("text2",this.data.wen + 26 +"℃");
		
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
			st1.count==0
		){
			st1.id=0;
		};
		
		if(
			st2.count==0
		){
			st2.id=0;
		};
		
		if(
			st3.count==0
		){
			st3.id=0;
		};
		
		if(
			this.data.wen>=3000
		){
			this.data.wen=3000;
		};
			
		this.fire(263,800,160);
		this.fire(173,1200,1440);
		this.fire(ItemID.ft_焦炭,3000,180);
		
		
		this.work(ItemID.ingotCopper,ItemID.ft_高温铜,2000);
		this.work(ItemID.ft_钢,ItemID.ft_高温钢,2500);
			
			
	},
	
	click:function(id, count, data)
		{
			var st3=this.container.getSlot("slot3");
			
			if(id==ItemID.ft_火钳&&
				st3.id!=0&&st3.count>0&&
				data<Item.getMaxDamage(id)
				){
					st3.count--;
					World.drop(this.x, this.y, this.z, st3.id, 1, 0)
					Player.setCarriedItem(ItemID.ft_火钳, 1, data+1);
					return true ;
  			  }
  
  		if(
  			id==ItemID.ft_火钳&&
  			data>=Item.getMaxDamage(ItemID.ft_火钳)
  		){
      		Player.setCarriedItem(0, 0, 0);
  		};
		},

	
	
	getGuiScreen: function()
		{
			return dzlUI;
		}
	
	
});