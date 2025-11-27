var MenuSkillSlime = new UI.StandartWindow({location: {width: 1000, height: 1000, x: 0, y: 0}, params: {}, drawing: [{type: "color", color: android.graphics.Color.TRANSPARENT}], elements: {"image_0": {type: "image", x: 145, y: 81, bitmap: "Skill Gui.ability_gui", scale: 2}, "closeButton_0": {type: "closeButton", x: 891, y: 84, global: true, bitmap: "Button.Menu.XHover", bitmap2: "Button.Menu.ButtonOff.XPress", scale: 2.3, clicker: {onClick: function () {
    click.play();
}}}, "button_0": {type: "button", x: 518, y: 162, scale: 2, bitmap: "Button.Menu.ultimateskills", bitmap2: "Button.Menu.ButtonOff.empty", clicker: {onClick: function () {
    alert("Ultimate Skills");
    container.setText("rece_text", "Rece: Slime");
    click.play();
}}}, "button_1": {type: "button", x: 781, y: 347, scale: 1.95, bitmap: "Button.Menu.uniqueskills", bitmap2: "Button.Menu.ButtonOff.empty", clicker: {onClick: function () {
    alert("Unique Skills");
    click.play();
}}}, "button_2": {type: "button", x: 768, y: 189, scale: 2.05, bitmap: "Button.Menu.extraskills", bitmap2: "Button.Menu.ButtonOff.empty", clicker: {onClick: function () {
    alert("Extra Skills");
    click.play();
}}}, "button_3": {type: "button", x: 620, y: 371, scale: 1.9, bitmap: "Button.Menu.itrinsicskills", bitmap2: "Button.Menu.ButtonOff.empty", clicker: {onClick: function () {
    alert("Intrinsic Skills");
    click.play();
}}}, "button_4": {type: "button", x: 153, y: 306, scale: 2.1, bitmap: "Button.Menu.forgingtable", bitmap2: "Button.Menu.ButtonOff.forgingtableoff", clicker: {onClick: function () {
    alert("Forging Table");
    click.play();
}}}, "button_5": {type: "button", x: 230, y: 367, scale: 2.5, bitmap: "Button.Menu.reinforcedanvil", bitmap2: "Button.Menu.ButtonOff.reinforcedanviloff", clicker: {onClick: function () {
    alert("Reinforced Anvil");
    click.play();
}}}, "button_6": {type: "button", x: 386, y: 359, scale: 2.25, bitmap: "Button.Menu.spatialstorage", bitmap2: "Button.Menu.ButtonOff.spatialstorageoff", clicker: {onClick: function () {
    alert("Spatial Storage");
    click.play();
}}}, "button_7": {type: "button", x: 319, y: 300, scale: 1.9, bitmap: "Button.Menu.sasbutton", bitmap2: "Button.Menu.ButtonOff.sasoff", clicker: {onClick: function () {
    alert("Sas");
    click.play();
}}}, "rece_text": {type: "text", x: 154, y: 90, text: "Rece: ", font: {size: 15}}, "souls_text": {type: "text", x: 500, y: 90, text: "Souls: 0.0"}, "ep_text": {type: "text", x: 160, y: 132, text: "Ep: "}, "equiment_point_text": {type: "text", x: 160, y: 166, text: "Equiment Point: "}, "physicat_point_text": {type: "text", x: 160, y: 197, text: "Physicat Point: "}, "max_magicule_text": {type: "text", x: 160, y: 231, text: "Max Magicule: "}, "magicule_text": {type: "text", x: 159, y: 263, text: "Magicule: "}}});
var BUTTON_GUI = new UI.Window({location: {x: 10, y: UI.getScreenHeight() - 70, width: 60, height: 60}, drawing: [], elements: {"btn": {type: "button", x: 0, y: 0, bitmap: "Button.open_btn", bitmap2: "Button.open_btn_pressed", scale: 1000 / 26, clicker: {onClick: function () {
    click.play();
    MenuSkills.openGui();
}}}}});
var MenuSkills = (function () {
    function MenuSkills() {
    }
    MenuSkills.registermenu = function (obj) {
        this.descriptions[obj.id] = obj;
    };
    MenuSkills.tick = function () {
        for (var i in this.MenuSkills) {
            var menu = this.MenuSkills[i];
            if (!menu) {
                continue;
            }
            if (menu.tick) {
                menu.tick();
            }
        }
    };
    MenuSkills.openGui = function () {
        this.container.openAs(MenuSkillSlime);
    };
    MenuSkills.getDesc = function (id) {
        return this.descriptions[id];
    };
    MenuSkills.getType = function (id) {
        var desc = this.descriptions[id];
        if (!desc) {
            return null;
        }
        return desc.type;
    };
    MenuSkills.container = new UI.Container();
    MenuSkills.btnContainer = new UI.Container();
    MenuSkills.descriptions = {};
    MenuSkills.MenuSkills = {};
    return MenuSkills;
}());
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === " inventory_screen_pocket" || screenName === "inventory_screen") {
        MenuSkills.btnContainer.openAs(BUTTON_GUI);
    } else {
        MenuSkills.btnContainer.close();
    }
});
Saver.addSavesScope("MenuSkills", function read(scope) {
    if (scope.container) {
        MenuSkills.container = scope.container;
    } else {
        MenuSkills.container = new UI.Container();
    }
}, function save() {
    return {container: MenuSkills.container};
});

