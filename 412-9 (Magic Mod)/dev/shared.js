ModAPI.registerAPI("MagicModAPI", {lenses: lenses, lens: lens, MagicTable: MagicTable, requireGlobal: function (command) {
    return eval(command);
}});
Logger.Log("MagicModAPI Loaded", "API");

