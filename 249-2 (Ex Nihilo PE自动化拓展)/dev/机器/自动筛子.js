IDRegistry.genBlockID("um_自动筛子"); 
Block.createBlock("um_自动筛子", [
	{name: "Electric Sieve", texture: 
[["um_机器外壳", 1], ["um_机器外壳", 1], 
["um_机器外壳",0], ["um_机器外壳", 0], 
["um_机器外壳", 0], ["um_机器外壳",0]], inCreative: false}
]) ;
IDRegistry.genItemID("um_筛子物品");
IDRegistry.genItemID("um_铁棒");
Item.createItem("um_铁棒","Iron Stick",
{name:"um_铁棒", meta:   0  });


IDRegistry.genItemID("um_自动筛子物品");
Item.createItem("um_自动筛子物品","Electric Sieve",
{name:"um_自动筛子", meta:   0  });

Item.registerUseFunction("um_自动筛子物品", function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID.um_自动筛子);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.addTileEntity(place.x, place.y, place.z);
	}
});

BlockRenderer.addRenderCallback(BlockID.um_自动筛子, function(api, coords) {
            api.renderBoxId(coords.x, coords.y, coords.z, 
											0.01, 0.549, 0.01, 
											0.99, 1, 0.99, 
											BlockID.um_自动筛子, 0);
											

			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.05, 0.01, 0.05, 
											0.15, 0.549, 0.15, 
											BlockID.um_自动筛子, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.95, 0.01, 0.95, 
											0.85, 0.549, 0.85, 
											BlockID.um_自动筛子, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.05, 0.01, 0.85, 
											0.15, 0.549, 0.95, 
											BlockID.um_自动筛子, 0);
			api.renderBoxId(coords.x, coords.y, coords.z, 
											0.85, 0.01, 0.05, 
											0.95, 0.549, 0.15, 
											BlockID.um_自动筛子, 0);

            
        });

BlockRenderer.enableCustomRender(BlockID.um_自动筛子);

var shaikuangUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Electric Sieve"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "筛矿", scale: 4},
		{type: "bitmap", x: 380, y: 75, bitmap: "能量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "筛矿满", scale: 4},
		"slot1": {type: "slot", x: 460, y: 146},
		"jindu2": {type: "scale", x: 380, y: 75,bitmap:"能量",scale: 4,direction: 1}
	}

});
var speedControl1 = 1;
		var speedControl2 = 11;
  var	speedControl3 = speedControl1;
TileEntity.registerPrototype(BlockID.um_自动筛子,
{
	defaultValues:
	{
		jin:0,
		ene:0
	},
	
	getGuiScreen: function()
		{
			return shaikuangUI;
		},

getTransportSlots: function(){
		return {input: ["slot1"]};
	},

	work:function(x,y,countmax,jilv)
	{
		this.forWork(x,0,0,0);
		this.forWork(x,y,countmax,jilv);
	},
	
	forWork:function(x,y,countmax,jilv)
	{
		var st1=this.container.getSlot("slot1");
		if(
		st1.count>0&&
		st1.id==x&&
		this.data.ene>0
		){
			this.data.jin++;
			if (speedControl1 == speedControl2)
			{
    			this.data.ene--;
    			speedControl1 = speedControl3;
  	}
   else
   {
       ++speedControl1;
   }
    			
			if(
			this.data.jin>=370
			){
				st1.count--;
				this.data.jin=0;
				for(var i=0;i<countmax;i++)
				{
					if(
					Math.random()*100<jilv
					){
						World.drop(this.x+0.5,this.y+1,this.z+0.5,y,1,0);
					}
				}
			}
		}
	},
	
	tick:function()
		{
			var st1=this.container.getSlot("slot1");
			
			this.container.setScale("jindu1", 
			this.data.jin/370);
			this.container.setScale("jindu2", 
			this.data.ene/2000);
			
if(
			this.data.ene>50
			){
   this.work(3,ItemID.um_石子,30,25);
			this.work(3,ItemID.um_草籽,20,2);
			this.work(3,361,3.5,15);
			this.work(3,ItemID.甘蔗种子,1.5,15);
			this.work(3,362,3.5,15);
			this.work(3,ItemID.萝卜种子,1,25);
			this.work(3,ItemID.土豆种子,1,25);
			this.work(3,ItemID.橡子,1,28);
			
			this.work(13,318,30,9);
			this.work(13,263,25,3);
			this.work(13,264,1.5,1);
			this.work(13,388,1.5,1);
			this.work(13,ItemID.um_金碎矿,8,51);
			this.work(13,ItemID.um_铁碎矿,7,56);
		 
			this.work(12,ItemID.仙人掌种子,7,8);
			this.work(12,ItemID.um_铁矿渣,5,56);
			this.work(12,ItemID.um_金矿渣,4,51);
			
			this.work(BlockID.um_尘土块,ItemID.um_铁矿渣粉,3,41);
			this.work(BlockID.um_尘土块,ItemID.um_金矿渣粉,2,46);
			this.work(BlockID.um_尘土块,289,25,3);
			this.work(BlockID.um_尘土块,377,5,15);
			this.work(BlockID.um_尘土块,331,9,15);
			this.work(BlockID.um_尘土块,348,5,15);
			};
			
			if(
			Sievecon.foric
			){
				this.work(13,ItemID.um_铜碎矿,4,35);
				this.work(13,ItemID.um_铅碎矿,3,25);
				this.work(13,ItemID.um_锡碎矿,3,30);
				this.work(12,ItemID.rubberSapling,1,20);
				this.work(BlockID.um_尘土块,ItemID.uraniumChunk,1,3);
			};
			
			if(
			Sievecon.forhc
			){
				this.work(BlockID.um_尘土块,ItemID.salt,4,30);
				this.work(13,ItemID.um_盐碎矿,1,35);
				this.work(3,ItemID.appleSapling,1,5);
				
				this.work(3,ItemID.strawberry_seed,2,3);
				this.work(3,ItemID.raspberry_seed,2,3);
				this.work(3,ItemID.cranberry_seed,2,3);
				this.work(3,ItemID.blueberry_seed,2,3);
				this.work(3,ItemID.blackberry_seed,2,3);
				this.work(3,ItemID.candleberryseed,2,3);
				this.work(3,ItemID.grape_seed,2,3);
				this.work(3,ItemID.cucumber_seed,2,3);
				this.work(3,ItemID.onion_seed,2,3);
				this.work(3,ItemID.cabbage_seed,2,3);
				this.work(3,ItemID.tomato_seed,2,3);
				this.work(3,ItemID.tomato_seed,2,3);
				this.work(3,ItemID.bellpepper_seed,2,3);
				this.work(3,ItemID.garlic_seed,2,3);
				this.work(3,ItemID.lettuce_seed,2,3);
				this.work(3,ItemID.coffee_seed,2,3);
				this.work(3,ItemID.peas_seed,2,3);
				this.work(3,ItemID.chili_pepper_seed,2,3);
				this.work(3,ItemID.spice_leaf_seed,2,3);
				this.work(3,ItemID.corn_seed,2,3);
				this.work(3,ItemID.peppercorn_seed,2,3);

			};
			
			if(
			st1.count<=0
			){
				st1.id=0;
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

EnergyTileRegistry.addEnergyTypeForId(BlockID.um_自动筛子,EU);

Block.registerDropFunction("um_自动筛子", function(coords, blockID, blockData, level){
if(level > 1){
		return [[ItemID.um_自动筛子物品, 1, 0]];
	};

return [];

});
ICRender.getGroup("ic-wire").add(BlockID.um_自动筛子, -1);