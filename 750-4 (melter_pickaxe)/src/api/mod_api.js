ModAPI.registerAPI("MelterPick", {
  RegistryOre: RegistryOre,

  requireGlobal: function(command) {
    return eval(command);
  }
});

Logger.Log("MelterPick Shared", "API");