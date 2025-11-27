ModAPI.registerAPI("CWS_API", {
	isExists : true,
	machineAPI : {
icecreamMachine : machine.icecreamMachine,
coffeeMachine : machine.coffeeMachine,
grinderMachine : machine.grinderMachine,
ovenMachine : machine.ovenMachine
	},
 getVersion : "1.1.0"
// directionBlockAPI : directionBlockAPI
	
});

Logger.Log("CoffeeWorkshpp API shared with name CWS_API.", "API");