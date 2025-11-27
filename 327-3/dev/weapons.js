importLib("ToolType","*")






IDRegistry.genItemID("capshield");
Item.createThrowableItem("capshield", "Captain America Shield", {name:"capshield"}, {stack:64});

Item.registerThrowableFunction("capshield", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);



IDRegistry.genItemID("energiccharge");
Item.createThrowableItem("energiccharge", "Energic Charge", {name:"energiccharge"}, {stack:64});

Item.registerThrowableFunction("energiccharge", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);


IDRegistry.genItemID("grappinghook");
Item.createItem("grappinghook", "Grapping hook", {name: "grappinghook", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.grappinghook){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});





IDRegistry.genItemID("mjolnir");
Item.createItem("mjolnir", "Mjolnir", {name: "mjolnir", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("mjolnir", {durability: 3400, level: 20, efficiency: 80, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.mjolnir, "mjolnir", ToolType.sword);




IDRegistry.genItemID("stormbreaker");
Item.createItem("stormbreaker", "Storm Breaker", {name: "stormbreaker", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("stormbreaker", {durability: 3400, level: 20, efficiency: 80, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.stormbreaker, "stormbreaker", ToolType.sword);



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.mjolnir){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.stormbreaker){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});




IDRegistry.genItemID("webshooter");
Item.createItem("webshooter", "Web shooter", {name: "webshooter", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.webshooter){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});






Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.mjolnir){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.stormbreaker){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		
		
		IDRegistry.genItemID("wolverine");
Item.createItem("wolverine", "Wolverine Claws", {name: "wolverine", meta: 0}, {stack: 1});

		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.wolverine){
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
		}
		});
		
		
		
		IDRegistry.genItemID("redenergy");
Item.createThrowableItem("redenergy", "Red Energy", {name:"redenergy"}, {stack:64});

Item.registerThrowableFunction("redenergy", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 20);
} 
} 
);































