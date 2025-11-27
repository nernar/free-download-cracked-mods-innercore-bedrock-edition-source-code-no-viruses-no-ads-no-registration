ConfigureMultiplayer({
    isClientOnly: true
});
ModAPI.addAPICallback("ICore", function (api) {
    Launch({
        ICore: api,
        Machine: api.requireGlobal("Machine")
    });
});
