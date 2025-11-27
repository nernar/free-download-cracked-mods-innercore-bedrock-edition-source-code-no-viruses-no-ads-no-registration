IDRegistry.genBlockID("um_自动刷石机"); 
Block.createBlock("um_自动刷石机", [
	{name: "Electric Pick", texture: 
[["um_机器外壳", 1], ["um_机器外壳", 1], 
["um_机器外壳",0], ["um_机器外壳", 0], 
["um_机器外壳", 0], ["um_机器外壳",0]], inCreative: false}
]) ;

IDRegistry.genItemID("um_自动刷石机物品");
Item.createItem("um_自动刷石机物品","Electric Pick",
{name:"um_圆石破坏机", meta:   0  });

Item.registerUseFunction("um_自动刷石机物品", function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID.um_自动刷石机);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.addTileEntity(place.x, place.y, place.z);
	}
});

BlockRenderer.addRenderCallback(BlockID.um_自动刷石机, function(api, coords) {
            api.renderBoxId(coords.x, coords.y, coords.z, 
											0.01, 0.01, 0.01, 
											0.99, 0.5, 0.99, 
											BlockID.um_自动刷石机, 0);
											

			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.15, 0.5, 0.01, 
											0.85, 1, 0.15, 
											BlockID.um_自动刷石机, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.01, 0.5, 0.01, 
											0.15, 1, 0.99, 
											BlockID.um_自动刷石机, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.15, 0.5, 0.85, 
											0.85, 1, 0.99, 
											BlockID.um_自动刷石机, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.85, 0.5, 0.01, 
											0.99, 1, 0.99, 
											BlockID.um_自动刷石机, 0);

            
        });

BlockRenderer.enableCustomRender(BlockID.um_自动刷石机);

var zdgUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Electric Pick"}},
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
		"slot2": {type: "slot", x: 670, y: 146}
	}

});

TileEntity.registerPrototype(BlockID.um_自动刷石机,
{
	defaultValues:
	{
		jin:0,
		ene:0
	},
	
	getTransportSlots: function(){
		return {input: ["slot0"], output: ["slot1","slot2"]};
	},
	
	getGuiScreen: function()
		{
			return zdgUI;
		},
	
	work:function(xid,yid)
	{
		var st0=this.container.getSlot("slot0");
			
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
			
		if(
		this.data.ene>0&&
		this.data.jin<150&&
		st0.id==xid&&
		st0.count>0&&
		(st1.id==yid||
		st1.id==0)&&
		st1.count<64
		){
			this.data.jin++;
			this.data.ene--;
			if(
			this.data.jin>=150
			){
				this.data.jin=0
				st1.id=yid
				st0.count--;
				st1.count++;
			}
  }else if(
		this.data.ene>0&&
		this.data.jin<150&&
		st0.id==xid&&
		st0.count>0&&
		(st2.id==yid||
		st2.id==0)&&
		st2.count<64
		){
			this.data.jin++;
			this.data.ene--;
			if(
			this.data.jin>=150
			){
				this.data.jin=0
				st2.id=yid
				st0.count--;
				st2.count++;
    }
			}
		
	},
	
	tick:function()
		{
			var st0=this.container.getSlot("slot0");
			
			this.container.setScale("jindu1", 
			this.data.jin/150);
			this.container.setScale("jindu2", 
			this.data.ene/1000);
			
			this.work(11,4);
			this.work(326,325);
			
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
			this.data.ene<1000
			){
				this.data.ene++;
				src.get(1);
			};
	}
	
})
EnergyTileRegistry.addEnergyTypeForId(BlockID.um_自动刷石机,EU);

Block.registerDropFunction("um_自动刷石机", function(coords, blockID, blockData, level){
if(level > 1){
		return [[ItemID.um_自动刷石机物品, 1, 0]];
	};

return [];

});

ICRender.getGroup("ic-wire").add(BlockID.um_自动刷石机, -1);