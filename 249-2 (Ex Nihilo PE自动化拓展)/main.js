/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: 其他.js

importLib("energylib", "*");
importLib("fanyi", "*");
importLib("MachineRender", "*");
importLib("ChargeItem","*");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var Sievecon = {
	"foric": __config__.access("for_ic"),
	"forhc": __config__.access("fot_hc")
};

if(
Sievecon.foric
){
	IDRegistry.genItemID("um_铜碎矿");
	IDRegistry.genItemID("um_锡碎矿");
	IDRegistry.genItemID("um_铅碎矿");
	
	IDRegistry.genItemID("um_铜矿渣");
	IDRegistry.genItemID("um_锡矿渣");
	IDRegistry.genItemID("um_铅矿渣");
	
	IDRegistry.genBlockID("um_铜矿砂"); 
	IDRegistry.genBlockID("um_锡矿砂"); 
	IDRegistry.genBlockID("um_铅矿砂"); 
	
	IDRegistry.genItemID("dustCopper")
	IDRegistry.genItemID("dustTin")
	IDRegistry.genItemID("dustLead")
	
	IDRegistry.genItemID("ingotCopper")
	IDRegistry.genItemID("ingotTin")
	IDRegistry.genItemID("ingotLead")
	
	IDRegistry.genItemID("rubberSapling")
	IDRegistry.genItemID("uraniumChunk")
};

if(
Sievecon.forhc
){
IDRegistry.genItemID("appleSapling");
IDRegistry.genItemID("salt");

IDRegistry.genItemID("strawberry_seed");
IDRegistry.genItemID("raspberry_seed");
IDRegistry.genItemID("cranberry_seed");
IDRegistry.genItemID("blueberry_seed");
IDRegistry.genItemID("blackberry_seed");

IDRegistry.genItemID("candleberryseed");
IDRegistry.genItemID("grape_seed");
IDRegistry.genItemID("cucumber_seed");
IDRegistry.genItemID("onion_seed");
IDRegistry.genItemID("cabbage_seed");

IDRegistry.genItemID("tomato_seed");
IDRegistry.genItemID("bellpepper_seed");
IDRegistry.genItemID("garlic_seed");
IDRegistry.genItemID("lettuce_seed");
IDRegistry.genItemID("coffee_seed");

IDRegistry.genItemID("peas_seed");
IDRegistry.genItemID("chili_pepper_seed");
IDRegistry.genItemID("spice_leaf_seed");
IDRegistry.genItemID("corn_seed");
IDRegistry.genItemID("peppercorn_seed");

IDRegistry.genItemID("um_盐碎矿");
	
};





// file: define.js

var GUI_BAR_STANDART_SCALE = 3.2;
var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype, notUseEU){
		// register ID
		this.machineIDs[id] = true;
		/*
		Prototype.click = function(id, count, data, coords){
			if(id==ItemID.wrench || id==ItemID.electricWrench){
				return true;
			}
		}
		*/
		if(!notUseEU){
			// wire connection
			ICRender.getGroup("ic-wire").add(id, -1);
			// setup energy value
			if (Prototype.defaultValues){
				Prototype.defaultValues.energy = 0;
			}
			else{
				Prototype.defaultValues = {
					energy: 0
				};
			}
			// copy functions
			if(!Prototype.getEnergyStorage){
				Prototype.getEnergyStorage = function(){
					return 0;
				};
			}
		}
		ToolAPI.registerBlockMaterial(id, "stone", 1);
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
		
		if(!notUseEU){
			// register for energy net
			EnergyTileRegistry.addEnergyTypeForId(id, EU);
		}
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level >= ToolAPI.getBlockDestroyLevel(blockID)){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	initModel: function(){
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}




// file: 物品/零件.js

IDRegistry.genItemID("um_铁棒");
Item.createItem("um_铁棒","Iron Stick",
{name:"um_铁棒", meta:   0  });

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.um_铁棒, count: 2, data: 0}, [
		"moo",
		"moo",
		"ooo"
	], ['m', 265, -1]);
});




// file: 发电机/岩浆发电机.js

IDRegistry.genBlockID("lavaGenerator");
Block.createBlockWithRotation("lavaGenerator", [
	{name: "Lava Generator", texture: [["um_机器外壳", 0], ["qm", 1], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.lavaGenerator, [["um_机器外壳", 0], ["qm", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], true);
MachineRenderer.registerRenderModel(BlockID.lavaGenerator, [["um_机器外壳", 0], ["qm", 1], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0], ["um_机器外壳", 0]], true);

Block.registerDropFunction("lavaGenerator", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.lavaGenerator);
});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.lavaGenerator, count: 1, data: 0}, [
		"xxx",
		"xax",
		"x#x"
	], ['#',325, -1, 'a',61, -1, 'x',265, -1]);
});

var guilavaGenerator = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Lava Generator"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 600, y: 170, bitmap: "1"},
		{type: "bitmap", x: 675, y: 230, bitmap: "3"}
	],
	
	elements: {
		"energyScale": {type: "scale", x: 675, y: 230, direction: 0, value: 0.5, bitmap: "4"},
		"liquidScale": {type: "scale", x: 600 , y: 170, direction: 1, value: 0.5, bitmap: "1"},
		"slot1": {type: "slot", x: 450, y: 163},
		"slot2": {type: "slot", x: 450, y: 300},
		
		"textInfo1": {type: "text", x: 520, y: 100, width: 300, height: 30, text: "0/"},
		"textInfo2": {type: "text", x: 585, y: 100, width: 300, height: 30, text: "8000 mB"}
	}
});




MachineRegistry.registerPrototype(BlockID.lavaGenerator, {
	defaultValues: {
		isActive: false
	},
	
	getGuiScreen: function(){
		return guilavaGenerator;
	},
	
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot2"]};
	},
	
	init: function(){
		this.liquidStorage.setLimit("lava", 8);
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	destroy: this.deactivate,
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var empty = LiquidRegistry.getEmptyItem(slot1.id, slot1.data);
		if(empty && empty.liquid == "lava"){
			if(this.liquidStorage.getAmount("lava") <= 7 && (slot2.id == empty.id && slot2.data == empty.data && slot2.count < Item.getMaxStack(empty.id) || slot2.id == 0)){
				this.liquidStorage.addLiquid("lava", 1);
				slot1.count--;
				slot2.id = empty.id;
				slot2.data = empty.data;
				slot2.count++;
				this.container.validateAll();
			}
		}
		if(this.liquidStorage.getAmount("lava") >= 0.001){
			if(this.data.energy <= energyStorage - 20){
				this.data.energy += 20;
				this.liquidStorage.getLiquid("lava", 0.001);
				this.activate();
			}else{
				this.deactivate();
			}
		}
		else{
			this.deactivate();
		}
		
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", this.data.energy, 32, 0);
		
		this.container.setText("textInfo1", parseInt(this.liquidStorage.getAmount("lava") * 1000) + "/");
		this.liquidStorage.updateUiScale("liquidScale", "lava");
		this.container.setScale("energyScale", this.data.energy / energyStorage);
	},
	
	islavaGenerator: function() {
		return true;
	},
	
	getEnergyStorage: function(){
		return 10000;
	},
	
	energyTick: function(type, src){
		var output = Math.min(32, this.data.energy);
		this.data.energy += src.add(output) - output;
	},
	
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});




// file: 机器/自动筛子.js

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




// file: 机器/自动锤.js

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




// file: 机器/自动碎石机.js

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




// file: Header.js

IMPORT("Pipe");
IMPORT("ItemDictionary");

var FactAPI={}

FactAPI.render = {
    addStandartWireConnections: function (id) {
        ICRender.getGroup("ic-wire").add(id, -1);
        ICRender.getGroup("rf-wire").add(id, -1);
    },
    addPipeConnections: function (id, item, liquid) {
        if (item) ICRender.getGroup("item-pipe").add(id, -1);
        if (liquid) ICRender.getGroup("liquid-pipe").add(id, -1);
    },
    setupWireasRender: function (id, width, groups) {
        var render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, 0, render);
        var boxes = [
            { side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2] },
            { side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2] },
            { side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2] },
            { side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] },
            { side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1] },
            { side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2] },
        ]
        for (var i in groups) {
            var gn = groups[i];
            var group = ICRender.getGroup(gn.name);
            if (gn.add) group.add(id, -1);
            for (var i in boxes) {
                var box = boxes[i];
                var model = BlockRenderer.createModel();
                model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
                render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
            }
        }
        var model = BlockRenderer.createModel();
        model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
        render.addEntry(model);
        width = Math.max(width, 0.5);
        Block.setBlockShape(id, { x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2 }, { x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2 });

    }
}

FactAPI.render.addPipeConnections(54, 1);
FactAPI.render.addPipeConnections(61, 1);
FactAPI.render.addPipeConnections(62, 1);
FactAPI.render.addPipeConnections(154, 1);
FactAPI.render.addPipeConnections(BlockID.um_自动筛子, 1);
FactAPI.render.addPipeConnections(BlockID.um_自动刷石机, 1);
FactAPI.render.addPipeConnections(BlockID.um_自动锤子, 1);


Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});

IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });


Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);
ItemDictionary.setItemCathegory(ItemID.factoryWrench, "wrench");




// file: 电线.js

IDRegistry.genItemID("goldenwire");
Item.createItem("goldenwire", "golden wire", {name: "Golden Wire", meta: 0});

Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
}, "part");

IDRegistry.genBlockID("um_电线");
Block.createBlock("um_电线", [
	{name: "Golden Wire1", texture: [["um_金", 0]], inCreative: false}
], "part");

Item.registerUseFunction("goldenwire", function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID.um_电线);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		World.addTileEntity(place.x, place.y, place.z);
	}
});

function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

function setupBlockAsWire(id) {
	EU.registerWire(id);
}

setupBlockAsWire(BlockID.um_电线);

setupWireRender(BlockID.um_电线, 1/2, "ic-wire");

Block.registerDropFunction("um_电线", function(){
	return [[ItemID.goldenwire, 1, 0]];
});




// file: 合成.js

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.um_自动锤子, count: 1, data: 0}, [
		"ooo",
		"oco",
		"ozo"
	], ['o', 265, -1,'c',ItemID.um_钻石锤子,-1,'z',145,-1]);
	
	Recipes.addShaped({id: ItemID.um_自动筛子物品, count: 1, data: 0}, [
		"tst",
		"tlt",
		"bob"
	], ['t', 265, -1,'s',ItemID.um_筛子物品,-1,'l',410,-1,'b',ItemID.um_铁棒,-1]);
	
	Recipes.addShaped({id: ItemID.um_自动刷石机物品, count: 1, data: 0}, [
		"ooo",
		"oho",
		"ooo"
	], ['o', 265, -1,'h',11,-1]);
	
	Recipes.addShaped({id: ItemID.um_铁棒, count: 2, data: 0}, [
		"moo",
		"moo",
		"ooo"
	], ['m', 265, -1]);
	
	Recipes.addShaped({id: BlockID.um_电线, count: 3, data: 0}, [
	"aaa",
	"xxx",
	"aaa"
], ['x',266, -1]);
	
});





