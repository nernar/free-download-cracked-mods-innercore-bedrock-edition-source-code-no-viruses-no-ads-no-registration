(function () {
    var NoNVF = WRAP_NATIVE("NoNVF");
    NoNVF.setMaxBrightness(Math.min(Math.max(__config__.getFloat("maxBrightness"), 0), 1));
    NoNVF.setFadeOutEnabled(__config__.getBool("fadeOut"));
    NoNVF.setFadeTicks(__config__.getInteger("fadeTicks"));
})();

