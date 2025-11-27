LIBRARY({
	name: "HelperMod",
	version: 1,
	shared: true,
	api: "CoreEngine"
});

var ARMOR = {
	
	setMode: function(arg){
       Callback.addCallback("tick",function() {
           if(Player.getArmorSlot(arg.type[0]).id == arg.id){
	          arg.tick();
    }})}
    
};

var DAPI = {
	
	func: {},
	
	getFuncsGolem: function (unique) {
		return this.func[unique];
	},
	
	register: function (unique, func) {
		this.func[unique] = func;
	},
	
	getSpawn: function (unique) {
		this.getFuncsGolem(unique).Spawn;
	}};