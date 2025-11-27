ConfigureMultiplayer({
    name: "NetherEX BE",
    version: "0.2(Pre. v8)",
    isClientOnly: false
});

ModAPI.addAPICallback("KernelExtension", function(api) {
    if(typeof api.getKEXVersionCode === "function" && api.getKEXVersionCode() >= 200) {
        Launch({ KEX: api });
    } else Logger.Log("Failed to launch NetherEX BE. You must have at least 2.0 version of Kernel Extension!", "ERROR");
});