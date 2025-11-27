

Callback.addCallback("tick", function (){
//force.show();
ScalesRPG.showAll();


var val = Force.getValue();
var hp = Entity.getHealth(Player.get());
var spd = Speed.getValue();











if(rand <= 0.00006 && val < 20){
Force.increase();
}

if(val > 6){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 100, false, false)
	}
	
	
	if(val > 9){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100, false, false)
	}
	
	if(val > 12){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100, false, false)
	}
	
	if(val > 15){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100, false, false)
	}
	
	
	if(val > 18){
	Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100, false, false)
	}
	
	if(hp < 3){
	Force.setValue(0);
	}
	
	if(hp < 5){
	Force.setValue(1);
	}
	
	
	var hg = Player.getHunger () 
	var val = Force.getValue()
	if(hg < 5 && val > 10){
	Force.decrease();
	}
	
	
	
	
	
if(rand <= 0.006 && spd < 20){
Speed.increase();
}
	
	
	if(spd >= 0){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 0, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 0, 100, false, false)
	}
	
	
if(spd >= 2){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 0, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100, false, false)
	}
	
	if(spd >= 4){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100, false, false)
	}
	
	
	if(spd >= 6){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 100, false, false)
	}
	
	if(spd >= 8){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100, false, false)
	}
	
	if(spd >= 10){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100, false, false)
	}
	
	if(spd >= 12){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100, false, false)
	}
	
	if(spd >= 14){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 7, 100, false, false)
	}
	
	if(spd >= 16){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 8, 100, false, false)
	}
	
	if(spd >= 18){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100, false, false)
	}
	
	if(spd >= 20){
	Entity.addEffect(Player.get(), Native.PotionEffect.jump, 5, 100, false, false)
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 100, false, false)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


});




















Callback.addCallback("tick", function(){
    var pos = Player.getPosition()
    var vr = parseInt(rand * 61);
    var v = parseInt(rand * 61);
    
    
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
		
		
		
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .00006){
Entity.spawnCustom("SuperGuy", pos.x+10, pos.y + 1, pos.z);
}
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .00003){
Entity.spawnCustom("Arkenian", pos.x+10, pos.y + 1, pos.z);
}
if(rand < .00003){
Entity.spawnCustom("Arkenian2", pos.x+10, pos.y + 1, pos.z);
}
}















if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .00006){
Entity.spawnCustom("HalfWorlder", pos.x+10, pos.y + 1, pos.z);
}
}







if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .00003){
Entity.spawnCustom("RustyGolem", pos.x+10, pos.y + 1, pos.z);
}
}














if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .0006){
Entity.spawnCustom("FakeChicken", pos.x, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass){
	if(rand < .0006){
Entity.spawnCustom("GoldenGolem", pos.x+5, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .0006){
Entity.spawnCustom("Fox", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 1){
	if(rand < .0006){
Entity.spawnCustom("ForceZombie", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 3){
	if(rand < .00006){
Entity.spawnCustom("WildCreeper", pos.x+10, pos.y + 1, pos.z);
}
}





if(World.getBlockID(pos.x, pos.y, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 79){
	if(rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}
}




if(World.getBlockID(pos.x, pos.y, pos.z) == 80){
	if(rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y+1, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}
}


if(World.getBlockID(pos.x, pos.y-1, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("Bows", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 79){
if(rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y, pos.z) == 80){
	if(rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}
}




if(World.getBlockID(pos.x, pos.y+1, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}
}



if(World.getBlockID(pos.x, pos.y-1, pos.z) == 78){
	if(rand < .0006){
Entity.spawnCustom("HotSavanna", pos.x+10, pos.y + 1, pos.z);
}
}


if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .0000006){
Entity.spawnCustom("MonsterWithWhiteEyes", pos.x+10, pos.y + 1, pos.z);
}
}





if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(rand < .00000006){
Entity.spawnCustom("Darker", pos.x+10, pos.y + 1, pos.z);
}
}


if(World.getBlockID(pos.x, pos.y, pos.z) == 87){
	if(rand < .000006){
Entity.spawnCustom("NightQween", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == 87){
	if(rand < .0006){
Entity.spawnCustom("FakeChicken2", pos.x+5, pos.y + 1, pos.z);
}
}


if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass){
	if(rand < .0006){
Entity.spawnCustom("CometUnicorn", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass){
	if(rand < .00002){
Entity.spawnCustom("CometBeetle", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.cometgrass){
	if(rand < .0006){
Entity.spawnCustom("CometSlime", pos.x+5, pos.y + 1, pos.z);
}
}












if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0009){
Entity.spawnCustom("Fat", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0009){
Entity.spawnCustom("Thin", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0009){
Entity.spawnCustom("TwoFaces", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0007){
Entity.spawnCustom("PurgatoryBeast", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .00006){
Entity.spawnCustom("PurgatoryWatcher", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0009){
Entity.spawnCustom("PurgatoryPhantom", pos.x+5, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == BlockID.purgatoriumgrass){
	if(rand < .0009){
Entity.spawnCustom("PurgatoryBeetle", pos.x+5, pos.y + 1, pos.z);
}
}















});
















