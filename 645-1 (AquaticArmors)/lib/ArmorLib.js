LIBRARY({
	name: "ArmorLib",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

var PRIS = {
	
	setMode: function(arg){
       Callback.addCallback("tick",function() {
           if(Player.getArmorSlot(arg.type[0]).id == arg.id){
	          arg.tick();
    }})}
    
};

EXPORT("PRIS", PRIS);