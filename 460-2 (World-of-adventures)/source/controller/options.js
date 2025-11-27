var Options = {
    DEBUG_MODE: __config__.getBool("debug_mode"),
    DISABLE_LEAVES_SHAPE: __config__.getBool("disable_leaves_shape"),
    DISABLE_WOODEN_TOOLS: __config__.getBool("disable_wooden_tools")
};

Callback.addCallback("LevelLoaded", function () {
    Options.DEBUG_MODE = __config__.getBool("debug_mode");
    Options.DISABLE_LEAVES_SHAPE = __config__.getBool("disable_leaves_shape");
    Options.DISABLE_WOODEN_TOOLS = __config__.getBool("disable_wooden_tools");
});