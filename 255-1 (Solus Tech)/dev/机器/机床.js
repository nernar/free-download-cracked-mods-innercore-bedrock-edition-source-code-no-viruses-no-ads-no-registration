IDRegistry.genBlockID("ft_机床");
Block.createBlock("ft_机床", [
	{name: "Machine Tool<", texture:
[["ft_机器外壳", 0], ["ft_机床", 3],
["ft_机床", 1], ["ft_机床", 0],
["ft_机床", 2], ["ft_机床", 4]],
inCreative: true}
]);

var jcUI=new UI.StandartWindow({
standart: {
	header: {text: {text: "Machine Tool"}},
	inventory: {standart: true},
	background: {standart: true}},
	
drawing: [
		{type: "bitmap", x: 680, y: 216, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 467, y: 80, bitmap: "电量槽", scale: 4}
	],
	
elements: {
		"jindu1": {type: "scale", x: 680, y: 216, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"jindu2": {type: "scale", x: 467, y: 80,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"text": {type: "text", x: 580, y: 80, width: 100, height: 30, text: "0 FuE"},
		"slot0": {type: "slot", x: 467, y: 146, size: 60},
		"slot1": {type: "slot", x: 537, y: 146, size: 60},
		"slot2": {type: "slot", x: 607, y: 146, size: 60},
		"slot3": {type: "slot", x: 467, y: 214, size: 60},
		"slot4": {type: "slot", x: 537, y: 214, size: 60},
		"slot5": {type: "slot", x: 607, y: 214, size: 60},
		"slot6": {type: "slot", x: 467, y: 283, size: 60},
		"slot7": {type: "slot", x: 537, y: 283, size: 60},
		"slot8": {type: "slot", x: 607, y: 283, size: 60},
		"slot11": {type: "slot", x: 870, y: 75},
		"slot14": {type: "slot", x: 870, y: 252},
		 "button": {type: "button", x: 700, y: 340, bitmap: "button", scale: 2, clicker: {
			onClick: function(container, tileEntity){
		var st14=container.getSlot("slot14");
		if(container.tileEntity.data.fue<500&&st14.id==ItemID.ft_摇柄){
			
			container.tileEntity.data.fue+=5;
			st14.data++;
			}}}},
		"resultSlot": {type: "slot", x: 788, y: 212, size: 60, clicker: {
			
				onClick: function(position, container, tileEntity){
					
				},
				onLongClick: function(position, container, tileEntity){
					this.onClick(position, container, tileEntity);
				}
			}
		}
	}


});

TileEntity.registerPrototype(BlockID.ft_机床,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	
	work:function(q,w,e,r,t,y,u,i,o,p,a,qq,ww,ee,rr,tt,yy,uu,ii,oo)
		{
			var st1=this.container.getSlot("slot0");
			var st2=this.container.getSlot("slot1");
			var st3=this.container.getSlot("slot2");
			var st4=this.container.getSlot("slot3");
			var st5=this.container.getSlot("slot4");
			var st6=this.container.getSlot("slot5");
			var st7=this.container.getSlot("slot6");
			var st8=this.container.getSlot("slot7");
			var st9=this.container.getSlot("slot8");
			var st10=this.container.getSlot("resultSlot");
			
			var ss1=this.container.getSlot("slot11");
			
			if(
				st1.id==q&&
				st2.id==w&&
				st3.id==e&&st4.id==r&&st5.id==t&&st6.id==y&&st7.id==u&&st8.id==i&&st9.id==o&&
				(st10.id==0||st10.id==p)&&
				ss1.id==a&&
				st1.count>=qq&&st2.count>=ww&&
				st3.count>=ee&&st4.count>=rr&&
				st5.count>=tt&&st6.count>=yy&&
				st7.count>=uu&&st8.count>=ii&&
				st9.count>=oo&&this.data.jin<=300&&this.data.fue>0&&World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_机器外壳
			){
				this.container.setSlot("resultSlot", p,1, 0);
				this.data.jin++;
				this.data.fue--;
			}
			
		},
	
	
	tick:function()
	{
		if(this.container.getSlot("slot14").data>=Item.getMaxDamage(this.container.getSlot("slot14").id)){
			this.container.getSlot("slot14").id=0;
			}
		this.work(
						ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,
						ItemID.ft_钢板,0,ItemID.ft_钢板,
						ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,
						BlockID.ft_大型机器外壳,/*成品*/
						ItemID.ft_螺丝刀,/*tool*/
						1,1,1,	1,0,1,	1,1,1
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,325,ItemID.ft_发电机,
						0,61,0,
						BlockID.ft_燃煤发电机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,325,ItemID.ft_电机,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_水泵,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,ItemID.ft_线圈,ItemID.ft_电机,
						0,0,0,
						BlockID.ft_磁化机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,0,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,BlockID.ft_燃煤发电机,ItemID.ft_发电机,
						BlockID.ft_锅炉,BlockID.ft_锅炉,BlockID.ft_锅炉,
						BlockID.ft_液体燃料发电机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	1,1,1
						);
						this.work(
						334,334,334,
						0,ItemID.ft_钢板,0,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_蛋糕机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	0,1,0,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,ItemID.ft_钢板,0,
						ItemID.ft_电阻器,ItemID.ft_电阻器,ItemID.ft_电阻器,
						BlockID.ft_烤箱,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,0,	1,1,1
						);
						this.work(
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						ItemID.ft_蓄电池,ItemID.ft_蓄电池,ItemID.ft_蓄电池,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_电池箱,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
						this.work(
						0,0,0,
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_压板机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	1,1,1
						);
						this.work(
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						1,1,1,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_研磨机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
						this.work(
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						ItemID.ft_钢板,ItemID.ft_蓄电池,ItemID.ft_钢板,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_粉碎机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	0,1,0
						);
						this.work(
						ItemID.ft_蓄电池,ItemID.ft_电机,0,
						ItemID.ft_钢板,ItemID.ft_钢棒,ItemID.ft_钢板,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_洗矿机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,0,	1,1,1,	0,1,0
						);
						this.work(
						ItemID.ft_电阻器,ItemID.ft_电阻器,ItemID.ft_电阻器,
						ItemID.ft_电阻器,BlockID.ft_高炉,ItemID.ft_电阻器,
						ItemID.ft_蓄电池,ItemID.ft_蓄电池,ItemID.ft_蓄电池,
						BlockID.ft_工业炉,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
		this.container.setText("text",this.data.fue + " FuE");
			this.container.setScale("jindu1", 
			this.data.jin/300);
			this.container.setScale("jindu2", 
			this.data.fue/500);
			var st1=this.container.getSlot("slot0");
			var st2=this.container.getSlot("slot1");
			var st3=this.container.getSlot("slot2");
			var st4=this.container.getSlot("slot3");
			var st5=this.container.getSlot("slot4");
			var st6=this.container.getSlot("slot5");
			var st7=this.container.getSlot("slot6");
			var st8=this.container.getSlot("slot7");
			var st9=this.container.getSlot("slot8");
			var st10=this.container.getSlot("resultSlot");
			
			var ss1=this.container.getSlot("slot11");
			
			
						
			
			if(st1.count==0){
		st1.id=0;
	}
	
if(st2.count==0){
		st2.id=0;
	}
	
if(st3.count==0){
		st3.id=0;
	}
	
if(st4.count==0){
		st4.id=0;
	}
	
if(st5.count==0){
		st5.id=0;
	}
	
if(st6.count==0){
		st6.id=0;
	}
	
if(st7.count==0){
		st7.id=0;
	}
if(st8.count==0){
		st8.id=0;
	}
if(st9.count==0){
		st9.id=0;
	};

		if(ss1.data>=Item.getMaxDamage(ss1.id))
		{ss1.id=0};
		

			
			if(
				this.data.jin>=300&&
				st10.id!=0&&
				World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_机器外壳
			){
				ss1.data++;
						if(st1.count>0)
						{st1.count-=1;}
						if(st2.count>0)
						{st2.count-=1;}
						if(st3.count>0)
						{st3.count-=1;}
						if(st4.count>0)
						{st4.count-=1;}
						if(st5.count>0)
						{st5.count-=1;}
						if(st6.count>0)
						{st6.count-=1;}
						if(st7.count>0)
						{st7.count-=1;}
						if(st8.count>0)
						{st8.count-=1;}
						if(st9.count>0)
						{st9.count-=1;}
				this.data.jin=0;
				World.setBlock(this.x,this.y+1,this.z,st10.id);
				this.container.setSlot("resultSlot", 0, 0, 0);
			};
		
	},
	
	getGuiScreen: function()
		{
			return jcUI;
		},
		energyTick: function(type, src){
			
			if(
			src.amount()>1&&
			this.data.fue<500
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_机床, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_机床,FuE);