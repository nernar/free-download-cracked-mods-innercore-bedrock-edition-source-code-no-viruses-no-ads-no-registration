alert("AutoPlant by \u041c\u0430\u043a\u0441\u0438\u043c \u041f\u043e\u043c\u0430\u0437\u0443\u0435\u0432");
Callback.addCallback("LevelLoaded", function () {
    Game.message("\xa72AutoPlant by \u041c\u0430\u043a\u0441\u0438\u043c \u041f\u043e\u043c\u0430\u0437\u0443\u0435\u0432");
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var config = FileTools.ReadJSON(__dir__ + "/config.json");

