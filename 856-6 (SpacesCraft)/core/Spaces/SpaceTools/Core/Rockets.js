var Rocketmesh = new RenderMesh(); 
Rocketmesh.setBlockTexture("rocket_t1",0); 
Rocketmesh.importFromFile(__dir__+"/models/rocket_tier1.obj","obj",null); 
IDRegistry.genBlockID("rocket_1_tier"); 
Block.createBlockWithRotation("rocket_1_tier", [ 
 {name: "Rocket Tier 1", texture: [["rocket_t1", 0],["rocket_t1", 1],["rocket_t1", 2],["rocket_t1", 3],["rocket_t1", 4],["rocket_t1", 5]], inCreative: false} 
]); 
var Rocketrender = new ICRender.Model(); 
Rocketrender.addEntry(new BlockRenderer.Model(Rocketmesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_1_tier,0,Rocketrender);

Item.registerUseFunction("padding", function(coords, item, block, player){
	if(block.id == BlockID.deco_block){
		var region = BlockSource.getDefaultForActor(player);
        var place = coords.relative;
region.setBlock(place.x, place.y, place.z,BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z,BlockID.Pad_Normal); region.setBlock(place.x,place.y,place.z-1, BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z-1, BlockID.Padding1lvl); region.setBlock(place.x-2,place.y,place.z-1, BlockID.Pad_Normal); region.setBlock(place.x,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-1,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z-2, BlockID.Pad_Normal); region.setBlock(place.x-2,place.y,place.z-1, BlockID.Pad_Normal);
Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
 }});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.rocket_1_tier){World.setBlock(coords.x, coords.y, coords.z, VanillaBlockID.air); World.setBlock(coords.x, coords.y, coords.z, BlockID.Padding1lvl);
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	Entity.clearEffects(Player.get());
		    let gamemode = new PlayerActor(player).getGameMode();
        if (gamemode !== Native.GameMode.CREATIVE) {Player.setFlyingEnabled(false);
		Player.setFlying(false);
     }
}
});

Block.registerDropFunction("Padding1lvl", function(coords, blockID){
    return [[BlockID.Pad_Normal, 1, 0]] 
});

IDRegistry.genItemID("rocket_1"); 
Item.createItem("rocket_1", "Rocket Tier 1", {name: "rocket_tierik1", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 1", {
ru: "Ракета 1-го уровня"
});

Block.registerDropFunction("rocket_1_tier", function(coords, blockID){
    return [[ItemID.rocket_1, 1, 0]] 
});

Item.registerUseFunction("rocket_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_1_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета первого уровня успешно состыкована с посадочной площадкой")
    } 
});
var SPC_b1 = new UI.Container();
var SPC_b2 = new UI.Container();
var SPC_b3 = new UI.Container();
var InterFace = new UI.Container();
var Roket = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_1_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_b1.openAs(wrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var wrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_1_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_1_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFace.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});

var exit = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 313,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "exit": {
        	type: "button", 
			text: "Выйти",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_button", 
			bitmap2: "SPC.SPC_button2",
			scale: 250, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					Player.setFlying(false);
					Player.setPosition(Player.getPosition().x + 2, Player.getPosition().y, Player.getPosition().z);
					Entity.clearEffects(Player.get());
					Player.setFlyingEnabled(false);
                }
            }
		},
	}
});


let Rocketry = new UI.StandartWindow({standart:{header:{text:{text:Translation.translate("Хранилище топлива")
}},inventory:{standart:true},background:{standart:true}},drawing:[
    {type: "bitmap", x: 500, y:130, bitmap: "RocketStorage1",scale:5.4
    }],elements:{fuelScale:{type:"scale",x:500,y:130,bitmap: "RocketStorage2",scale:5.4}}});
		
		var rocketgui = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 273,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "exit": {
        	type: "button", 
			text: "Спешиться",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_button", 
			bitmap2: "SPC.SPC_button2",
			scale: 250, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					let window = getWindow(BlockID.Pad_Normal, Rocketry);
					Roket.openAs(window);
                }
            }
		},
	}
});
	
/*var nextvariant = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 313,
        width: 660,
        height: 24
    },
    drawing: [],
    elements: {
        "next": {
        	type: "button", 
			text: "варианты",
			x: 0, 
			y: 0, 
			bitmap: "SPC.SPC_nextleft", 
			bitmap2: "SPC.SPC_nextleftPRESSED",
			scale: 2.1, 
			clicker: {
            	onClick: function () {
					SPC_b1.close();
					SPC_b2.close();
					SPC_b3.close();
					Player.setFlying(false);
					Player.setPosition(Player.getPosition().x + 2, Player.getPosition().y, Player.getPosition().z);
					Entity.clearEffects(Player.get());
                }
            }
		},
	}
});
*/





var Rockemesh = new RenderMesh(); 
Rockemesh.setBlockTexture("rocket_t2",0); 
Rockemesh.importFromFile(__dir__+"/models/rocket_tier2.obj","obj",null); 
IDRegistry.genBlockID("rocket_2_tier"); 
Block.createBlockWithRotation("rocket_2_tier", [ 
 {name: "Rocket Tier 2", texture: [["rocket_t2", 0],["rocket_t2", 1],["rocket_t2", 2],["rocket_t2", 3],["rocket_t2", 4],["rocket_t2", 5]], inCreative: false} 
]); 
var Rockerender = new ICRender.Model(); 
Rockerender.addEntry(new BlockRenderer.Model(Rockemesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_2_tier,0,Rockerender);

IDRegistry.genItemID("rocket_2"); 
Item.createItem("rocket_2", "Rocket Tier 2", {name: "rocket_tierik2", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 2", {
ru: "Ракета 2-го уровня"
});

Block.registerDropFunction("rocket_2_tier", function(coords, blockID){
    return [[ItemID.rocket_2, 1, 0]] 
});

Item.registerUseFunction("rocket_2", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_2_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета второго уровня успешно состыкована с посадочной площадкой")
    } 
});

var SPC_c1 = new UI.Container();
var InterFacce = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_2_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_c1.openAs(vrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var vrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_2_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_2_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_c1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFacce.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});




var Rocktmesh = new RenderMesh(); 
Rocktmesh.setBlockTexture("rocket_t3",0); 
Rocktmesh.importFromFile(__dir__+"/models/rocket_tier3.obj","obj",null); 
IDRegistry.genBlockID("rocket_3_tier"); 
Block.createBlockWithRotation("rocket_3_tier", [ 
 {name: "Rocket Tier 3", texture: [["rocket_t3", 0],["rocket_t3", 1],["rocket_t3", 2],["rocket_t3", 3],["rocket_t3", 4],["rocket_t3", 5]], inCreative: false} 
]); 
var Rocktrender = new ICRender.Model(); 
Rocktrender.addEntry(new BlockRenderer.Model(Rocktmesh)); 
BlockRenderer.setStaticICRender(BlockID.rocket_3_tier,0,Rocktrender);

IDRegistry.genItemID("rocket_3"); 
Item.createItem("rocket_3", "Rocket Tier 3", {name: "rocket_tierik3", meta: 0}, {stack: 1, inCreative:true});
Translation.addTranslation("Rocket Tier 3", {
ru: "Ракета 3-го уровня"
});

Block.registerDropFunction("rocket_3_tier", function(coords, blockID){
    return [[ItemID.rocket_3, 1, 0]] 
});

Item.registerUseFunction("rocket_3", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Padding1lvl){ 
        region.setBlock(place.x, place.y-1, place.z, BlockID.rocket_3_tier);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
         Game.message("§7Ракета третьего уровня успешно состыкована с посадочной площадкой")
    } 
});

var SPC_d1 = new UI.Container();
var InterFaccce = new UI.Container();
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.rocket_3_tier){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
	SPC_d1.openAs(wvrum);
		SPC_b2.openAs(exit);
	SPC_b3.openAs(rocketgui);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
		Game.message("§c§lВы находитесь в ракете,убедитесь что вы надели скафандр,загрузили и заправили ракету.")
	}
 });
 
 

var wvrum = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "SPC.SPC_button",
			bitmap2:"SPC.SPC_button2",
			text: "полёт",
			scale: 250, 
			clicker: {
            	onClick: function () {
					//закрываем чтобы игрок не смог выйти
					SPC_b2.close();
					//полёт
					
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						Game.tipMessage("§l§cРакета запущена! ")
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.rocket_3_tier, 0);
						java.lang.Thread.sleep(95);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.rocket_3_tier){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					SPC_d1.close();
					SPC_b2.close();
					SPC_b3.close();
		    	InterFaccce.openAs(SpacesMap);
		    	Entity.clearEffects(Player.get());
                }
            }
		},
	}
});
