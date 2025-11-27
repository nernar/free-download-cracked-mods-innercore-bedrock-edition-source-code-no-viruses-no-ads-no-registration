Callback.addCallback("tick", function(){
let j = 0;

 		CFMState.playerState.sort(function(a,b){
 				return a.duration - b.duration;
 		});
 		for(let i = 0; i < CFMState.playerState.length; i++){
		//遍历每个状态
		let id = CFMState.playerState[i].id;
	//	let stateSlot = stateContainer.getSlot(CFMState.playerState[i].id);
		let state = CFMState.states[CFMState.playerState[i].id];
		
		if(CFMState.playerState[i].duration <= 0){
			state.clear(CFMState.playerState[i]);
			//stateContainer.getGuiContent() &&( stateSlot.count = 0,
    // if (workbench) {
        // stateSlot.id = 0,
     //    stateSlot.data = 0);
			
		}
		else{
			CFMState.playerState[i].duration --;
		 j++;
			state.tick(CFMState.playerState[i]);
		//	stateSlot.count = Math.floor(CFMState.playerState[i].duration/10);
    // if (workbench) {
      //   stateSlot.id = state.slot.id;
      //   stateSlot.data = state.slot.data;
			//stateContainer.getGuiContent() && (stateContainer.getGuiContent().elements[id].y = 10 + 980*j);
		}
		
		
     
    // }
 
	}
});

var CFMState = {
	
};

CFMState.states = {
	
};

CFMState.playerState = [];

CFMState.register = function(stateSpec){
	CFMState.states[stateSpec.id] = stateSpec;
};

CFMState.StateSpec = function(obj){
	for(let i in obj){
    if(obj.hasOwnProperty(i)) {
        this[i] = obj[i];
    }
}
};

CFMState.StateSpec.prototype = {
	id : "test",
	name : {
		zh : "兴奋",
		en : "Happy"
	},
	slot : {
		id : ItemID.coffeeworkshop$kbqn,
		data : 0
	},
	produce : {
		zh : "今天天气真好！",
		en : "It is a good day!"
	},
	start : function(){
		
	},
	tick : function(){
		Entity.addEffect(Player.get(), MobEffect.movementSpeed, 6, 5);
	},
	clear : function(){
		
	}
};

CFMState.register(new CFMState.StateSpec());

CFMState.register(new CFMState.StateSpec({
	id : "relax",
	name : {
		zh : "放松",
		en : "Relax"
	},
	slot : {
		id : ItemID.coffeeworkshop$nt,
		data : 0
	},
	produce : {
		zh : "今天天气不错！",
		en : "It is a good day!"
	},
	tick : function(){
		Entity.addEffect(Player.get(), MobEffect.movementSpeed, 6, 5);
	},
}));

CFMState.addState = function(id,level,duration,data){
	Debug.message(id);
		if(CFMState.playerState.find(function(value) {
      if(value.id === id) {
        value.duration += duration;
		//隐藏时不能add
    //  stateContainer.getGuiContent() &&  (stateContainer.getGuiContent().elements[id].size = 980);
        return true;
      } 
   })){
        return;
   }
    

	let state = CFMState.states[id];
	let specObj = {
		id : id,
		level : level,
		duration : duration,
		data : data
	};
	CFMState.playerState.push(specObj);
	state.start(specObj);
	};
	/*
	if(stateContainer.getGuiContent()){
	stateContainer.getGuiContent().elements[id] = {
            type: "slot",
            x: 10,
            y: 10,
            size: 960,
            bitmap: "_default_slot_empty",
            isTransparentBackground: true,
            visual: true,
            clicker: {
                onClick: function(position, container, tileEntity, window, canvas, scale) {

                }
            }   
        };
        }
};
*/
