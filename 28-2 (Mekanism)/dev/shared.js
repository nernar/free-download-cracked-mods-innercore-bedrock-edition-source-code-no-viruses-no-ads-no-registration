ModAPI.registerAPI("APIMEK", {Machine: MachineRegistry, ChargeRegistry: ChargeItemRegistry, requireGlobal: function (command) {
    return eval(command);
}});

