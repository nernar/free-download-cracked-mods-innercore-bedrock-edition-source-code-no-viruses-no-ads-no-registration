IDRegistry.genBlockID("um_自动锤子"); 
Block.createBlockWithRotation("um_自动锤子", [
	{name: "Crusher", texture: 
[["um_机器外壳", 1], ["um_碎石机", 1], 
["um_机器外壳",0], ["um_碎石机", 0], 
["um_机器外壳", 0], ["um_机器外壳",0]], inCreative: true}
]) ;

var ssjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Crusher"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "筛矿", scale: 4},
		{type: "bitmap", x: 380, y: 75, bitmap: "能量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "筛矿满", scale: 4},
		"slot0": {type: "slot", x: 460, y: 146},
		"jindu2": {type: "scale", x: 380, y: 75,bitmap:"能量",scale: 4,direction: 1},
		
		"slot1": {type: "slot", x: 600, y: 146},
		"slot2": {type: "slot", x: 670, y: 146},
		"slot3": {type: "slot", x: 670+70, y: 146}
	}

});

TileEntity.registerPrototype(BlockID.um_自动锤子,
{
	defaultValues:
	{
		jin:0,
		ene:0
	},
	
	getGuiScreen: function()
		{
			return ssjUI;
		},
		
		getTransportSlots: function(){
		return {input: ["slot0"], output: ["slot1","slot2","slot3"]};
	},
	
	work:function(xid,yid)
	{
		var st0=this.container.getSlot("slot0");
			
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
			
		if(
		this.data.ene>0&&
		this.data.jin<130&&
		st0.id==xid&&
		st0.count>0&&
		(st1.id==yid||
		st1.id==0)&&
		st1.count<64
		){
			this.data.jin++;
			this.data.ene--;
			if(
			this.data.jin>=130
			){
				this.data.jin=0
				st1.id=yid
				st0.count--;
				st1.count++;
			}
  }else if(
		this.data.ene>0&&
		this.data.jin<130&&
		st0.id==xid&&
		st0.count>0&&
		(st2.id==yid||
		st2.id==0)&&
		st2.count<64
		){
			this.data.jin++;
			this.data.ene--;
			if(
			this.data.jin>=130
			){
				this.data.jin=0
				st2.id=yid
				st0.count--;
				st2.count++;
    }
			}else if(
		this.data.ene>0&&
		this.data.jin<130&&
		st0.id==xid&&
		st0.count>0&&
		(st3.id==yid||
		st3.id==0)&&
		st3.count<64
		){
			this.data.jin++;
			this.data.ene--;
			if(
			this.data.jin>=130
			){
				this.data.jin=0
				st3.id=yid
				st0.count--;
				st3.count++;
			}
			
		}
		
		
	},
	
	tick:function()
		{
			var st0=this.container.getSlot("slot0");
			
			this.container.setScale("jindu1", 
			this.data.jin/150);
			this.container.setScale("jindu2", 
			this.data.ene/2000);
			
			this.work(4,13);
			this.work(13,12);
			this.work(12,BlockID.um_尘土块);
			
			if(
			st0.count<=0
			){
				st0.id=0;
				this.data.jin=0;
			};
		},
	
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.ene<2000
			){
				this.data.ene++;
				src.get(1);
			};
	}
	
})

EnergyTileRegistry.addEnergyTypeForId(BlockID.um_自动锤子,EU);

Block.registerDropFunction("um_自动锤子", function(coords, blockID, blockData, level){
if(level > 1){
		return [[BlockID.um_自动锤子, 1, 0]];
	};

return [];

});

ICRender.getGroup("ic-wire").add(BlockID.um_自动锤子, -1);