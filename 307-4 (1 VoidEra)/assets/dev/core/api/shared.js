ModAPI.registerAPI("ICore", {
	Machine: MachineRegistry,
	Render: MachineRenderer,
	Recipe: MachineRecipeRegistry,
	ChargeRegistry: ChargeItemRegistry,
	Upgrade: UpgradeAPI,
	UI: UIbuttons,
	
	
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("Industrial Core API shared with name ICore.", "API");