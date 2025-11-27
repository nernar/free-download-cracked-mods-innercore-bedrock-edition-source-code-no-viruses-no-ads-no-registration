ModAPI.addAPICallback("KernelExtension", function(api) {
    if(typeof api.getKEXVersionCode === "function") {
        Launch({ KEX: api });
    }
});