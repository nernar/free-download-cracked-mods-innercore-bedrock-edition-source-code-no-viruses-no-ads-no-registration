const Manifest = {
    get APIVersion() {
        return FileTool.ReadJSON(__dir__ + "mod.info").engine;
    },
    get Version() {
        return FileTool.ReadJSON(__dir__ + "mod.info").version;
    }
};