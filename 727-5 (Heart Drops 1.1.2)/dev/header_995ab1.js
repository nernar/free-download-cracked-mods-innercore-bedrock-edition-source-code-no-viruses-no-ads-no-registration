if (__config__.getBool("message")) {
    alert("\xabHeart Drops\xbb by Maksim Pomazuev");
    Callback.addCallback("LevelLoaded", function () {
        Game.message("\xa7d\xabHeart Drops\xbb by Maksim Pomazuev");
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var config = __config__.getBool("particles");
Translation.addTranslation("Heart", {ru: "\u0421\u0435\u0440\u0434\u0446\u0435", es: "Coraz\xf3n", pt: "Cora\xe7\xe3o", zh: "\u5fc3"});
Translation.addTranslation("Golden Heart", {ru: "\u0417\u043e\u043b\u043e\u0442\u043e\u0435 \u0421\u0435\u0440\u0434\u0446\u0435", es: "Coraz\xf3n de Oro", pt: "Cora\xe7\xe3o de Ouro", zh: "\u91d1\u5fc3"});
Translation.addTranslation("Crystal Heart", {ru: "\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0421\u0435\u0440\u0434\u0446\u0435", es: "Corazon de Cristal", pt: "Cora\xe7\xe3o de Cristal", zh: "\u6c34\u6676\u5fc3"});
Translation.addTranslation("Heart", {ru: "\u0421\u0435\u0440\u0434\u0446\u0430", es: "Corazones", pt: "Cora\xe7\xf5es", zh: "\u5fc3"});
var effects = [1, 3, 5, 8, 10, 11, 12, 13, 16, 21];

