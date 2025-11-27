IDRegistry.genItemID("test");
Item.createItem("test", "Race \n Sneaking Click", {name: "race", meta: 0}, {isTech: false, stack: 1});
Item.registerUseFunction("test", function (coords, item, block) {
    if (Entity.getSneaking(Player.get())) {
        Player.setCarriedItem(item.id, item.count - 1, 0);
        RaceSlime.openGui();
    }
});
Item.setGlint("test", true);
var Slime_Race = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 319, y: 40, bitmap: "racegui", scale: 2.2}, "image_1": {type: "image", x: 349, y: 62, bitmap: "Race.slime_race", scale: 3.65}, "button_0": {type: "button", x: 720, y: 200, scale: 2.1, bitmap: "Button.Menu.next_paper", bitmap2: "Button.Menu.ButtonOff.next_paper_down", clicker: {onClick: function () {
    click.play();
    RaceHuman.openGui();
}}}, "button_1": {type: "button", x: 250, y: 200, scale: 2.1, bitmap: "Button.Menu.back_paper", bitmap2: "Button.Menu.ButtonOff.back_paper_down", clicker: {onClick: function () {
    click.play();
}}}, "button_2": {type: "button", x: 415, y: 452, scale: 0.15, bitmap: "Button.Menu.select", bitmap2: "Button.Menu.ButtonOff.select_down", clicker: {onClick: function () {
    click.play();
}}}, "text_0": {type: "text", x: 420, y: 80, width: 120, height: 16, text: "Slime"}, "text_1": {type: "text", x: 350, y: 150, width: 120, height: 16, text: "Head: +6"}, "text_2": {type: "text", x: 350, y: 180, width: 120, height: 16, text: "Attack: +1"}, "text_3": {type: "text", x: 350, y: 210, width: 120, height: 16, text: "Speed: +1"}, "text_4": {type: "text", x: 350, y: 240, width: 120, height: 16, text: ":))))))"}, "text_5": {type: "text", x: 350, y: 270, width: 120, height: 16, text: ":))))))"}, "text_6": {type: "text", x: 350, y: 300, width: 120, height: 16, text: ":))))))"}, "text_7": {type: "text", x: 350, y: 330, width: 120, height: 16, text: ":))))))"}, "text_8": {type: "text", x: 350, y: 360, width: 120, height: 16, text: ":))))))"}}});
var RaceSlime = (function () {
    function RaceSlime() {
    }
    RaceSlime.registerRaceSlime = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    RaceSlime.tick = function () {
        for (var i in this.race_slimes) {
            var race_slime = this.race_slimes[i];
            if (!race_slime) {
                continue;
            }
            if (race_slime.tick) {
                race_slime.tick();
            }
        }
    };
    RaceSlime.openGui = function () {
        this.container.openAs(Slime_Race);
    };
    RaceSlime.getDesc = function (id) {
        return this.descriptions[id];
    };
    RaceSlime.getType = function (id) {
        var desc_race_slime = this.descriptions[id];
        if (!desc_race_slime) {
            return null;
        }
        return desc_race_slime.type;
    };
    RaceSlime.container = new UI.Container();
    RaceSlime.btnContainer = new UI.Container();
    RaceSlime.descriptions = {};
    RaceSlime.race_slimes = {};
    return RaceSlime;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "hud_screen" || screenName === "in_game_play_screen") {
    }
});
Saver.addSavesScope("RaceSlime", function read(scope_race_slime) {
    if (scope_race_slime.container) {
        RaceSlime.container = scope_race_slime.container;
    } else {
        RaceSlime.container = new UI.Container();
    }
}, function save() {
    return {container: RaceSlime.container};
});

