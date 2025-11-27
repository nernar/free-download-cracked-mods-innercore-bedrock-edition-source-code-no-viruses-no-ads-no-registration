IMPORT("Bow", "Bows");
IMPORT("EntityTypeUtil");

const LENGTH = __config__.getNumber("MaxRange") || 128;
const RANGE = __config__.getNumber("ErrorRange") || 4;
const DELAY = __config__.getNumber("Delay") || 1;
const G = 0.05;
let TARGET = 0;
let SPEED = 0;

let player = 0;
Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});

Callback.addCallback('DestroyBlockStart', function(){
	if(Player.getCarriedItem().id == 261){
		Game.prevent();
	}
});


const AimAssist = function(target){
	TARGET = target;
	new java.lang.Thread(function(){
		let posE, look;
		let id = L = 0;
		while(TARGET){
			id = Player.getCarriedItem().id;
			if(id != 261 && !(id in Bows.bowInfo)){
				TARGET = 0;
				break;
			}
			coords = Entity.getPosition(TARGET);
			look = Entity.getLookAt(player, coords.x, coords.y, coords.z);
			L = Entity.getDistanceToEntity(player, TARGET);
			Entity.setLookAngle(player, look.yaw, (Math.asin((L * G * Math.pow(Math.cos(look.pitch), 2)) / Math.pow(SPEED, 2) + Math.sin(look.pitch)) + look.pitch) / 2);
			Game.tipMessage(">> LOCK ON <<");
			java.lang.Thread.sleep(DELAY);
		}
	}).start();
};


Callback.addCallback("ItemUseNoTarget", function(item){
	const bowInfo = Bows.bowInfo[item.id];
	SPEED = item.id == 261 ? 2.98 : bowInfo ? bowInfo.speed : 0;
	if(!SPEED){
		return;
	}
	const coords = Player.getPosition();
	const vec = Entity.getLookVector(player);
	const notArray = Entity.getAll();
	const array = [];
	for(let i = notArray.length; i--;){
		if(Entity.isAbiosis(notArray[i]) || notArray[i] == player){
			continue;
		}
		array[i] = notArray[i];
	}
	let target = 0;
	for(let t = LENGTH; t--;){
		coords.x += vec.x;
		coords.y += vec.y;
		coords.z += vec.z;
		target = array.find(function(ent){
			return Entity.getDistanceToCoords(ent, coords) < RANGE;
		}) || 0;
		if(target){
			AimAssist(target);
			break;
		}
	}
});


Callback.addCallback("EntityAdded", function(arrow){
	if(Entity.getType(arrow) == 80 && Entity.getDistanceToEntity(player, arrow) < 1){
		TARGET = 0;
	}
});

Callback.addCallback("BowOnShot", function(){
	TARGET = 0;
});