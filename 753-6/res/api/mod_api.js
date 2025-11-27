ModAPI.registerAPI("UseTools", {
  Tool: Tool,

  requireGlobal: function(command) {
    return eval(command);
  }
});

Logger.Log("UseTools Shared", "API");