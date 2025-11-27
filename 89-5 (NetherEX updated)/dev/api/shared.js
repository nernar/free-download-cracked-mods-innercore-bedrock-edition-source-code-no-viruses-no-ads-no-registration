ModAPI.registerAPI("NEXCore", {
    Render: MachineRenderer,
    requireGlobal: function(command){
        return eval(command);
    }
});
Logger.Log("Nether EX API shared with name NEXCore.", "API");