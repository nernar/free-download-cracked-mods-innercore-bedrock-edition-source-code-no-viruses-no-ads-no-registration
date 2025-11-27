ModAPI.registerAPI("TwilightForestAPI", {
    UIbuttons: UIbuttons,
    TwilightForest: TwilightForest,
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("TwilightForestAPI shared with name TwilightForestAPI", "API");