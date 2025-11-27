var Wight_Race = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 319, y: 40, bitmap: "racegui", scale: 2.2}, "image_1": {type: "image", x: 357, y: 72, bitmap: "Race.wight_race", scale: 2.45}, "button_0": {type: "button", x: 720, y: 200, scale: 2.1, bitmap: "Button.Menu.next_paper", bitmap2: "Button.Menu.ButtonOff.next_paper_down", clicker: {onClick: function () {
    click.play();
    RaceSlime.openGui();
}}}, "button_1": {type: "button", x: 250, y: 200, scale: 2.1, bitmap: "Button.Menu.back_paper", bitmap2: "Button.Menu.ButtonOff.back_paper_down", clicker: {onClick: function () {
    click.play();
}}}, "button_2": {type: "button", x: 415, y: 452, scale: 0.15, bitmap: "Button.Menu.select", bitmap2: "Button.Menu.ButtonOff.select_down", clicker: {onClick: function () {
    click.play();
}}}, "text_0": {type: "text", x: 420, y: 80, width: 120, height: 16, text: "Wight"}, "text_1": {type: "text", x: 350, y: 150, width: 120, height: 16, text: "Head: +20"}, "text_2": {type: "text", x: 350, y: 180, width: 120, height: 16, text: "Attack: +1"}, "text_3": {type: "text", x: 350, y: 210, width: 120, height: 16, text: "Speed: +1"}, "text_4": {type: "text", x: 350, y: 240, width: 120, height: 16, text: ":))))))"}, "text_5": {type: "text", x: 350, y: 270, width: 120, height: 16, text: ":))))))"}, "text_6": {type: "text", x: 350, y: 300, width: 120, height: 16, text: ":))))))"}, "text_7": {type: "text", x: 350, y: 330, width: 120, height: 16, text: ":))))))"}, "text_8": {type: "text", x: 350, y: 360, width: 120, height: 16, text: ":))))))"}}});
var RaceWight = (function () {
    function RaceWight() {
    }
    RaceWight.registerRaceWight = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    RaceWight.tick = function () {
        for (var i in this.race_wights) {
            var race_wight = this.race_wights[i];
            if (!race_wight) {
                continue;
            }
            if (race_wight.tick) {
                race_wight.tick();
            }
        }
    };
    RaceWight.openGui = function () {
        this.container.openAs(Wight_Race);
    };
    RaceWight.getDesc = function (id) {
        return this.descriptions[id];
    };
    RaceWight.getType = function (id) {
        var desc_race_wight = this.descriptions[id];
        if (!desc_race_wight) {
            return null;
        }
        return desc_race_wight.type;
    };
    RaceWight.container = new UI.Container();
    RaceWight.btnContainer = new UI.Container();
    RaceWight.descriptions = {};
    RaceWight.race_wights = {};
    return RaceWight;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "hud_screen" || screenName === "in_game_play_screen") {
    }
});
Saver.addSavesScope("RaceWight", function read(scope_race_wight) {
    if (scope_race_wight.container) {
        RaceWight.container = scope_race_wight.container;
    } else {
        RaceWight.container = new UI.Container();
    }
}, function save() {
    return {container: RaceWight.container};
});

