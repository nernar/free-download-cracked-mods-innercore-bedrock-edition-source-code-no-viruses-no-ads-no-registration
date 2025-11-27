var container = new GUI.Container();
var overlay = new GUI.Overlay({location: {x: GUI.getUnitsInPixels(10), y: GUI.getUnitsInPixels(0), width: GUI.getUnitsInPixels(50), height: GUI.getUnitsInPixels(50), gravity: GUI.Gravity.RIGHT | GUI.Gravity.TOP}, touchable: true, elements: {"but": {type: "image", x: 0, y: 0, width: GUI.getUnitsInPixels(50), height: GUI.getUnitsInPixels(50), clicker: {onClick: function () {
    container.open(_window);
}}, texture: {name: "cross_btn.png", bitmap: {x: 0, y: 0, width: 68, height: 68, scale: 9}}}}});
var _window = new GUI.Overlay({texture: {background: new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY)}, location: {x: 0, y: 0, width: GUI.Size.WIDTH, height: GUI.Size.HEIGHT}, touchable: true, elements: {"center": {type: "image", x: -GUI.getUnitsInPixels(20) + GUI.Size.WIDTH / 2 - 426, y: GUI.Size.HEIGHT / 2 - 202, texture: {name: "cross.png", bitmap: {x: 18, y: 81, width: 213, height: 101, scale: 4}}, clicker: {onClick: function () {
    container.open(overlay);
}}}}});
Callback.addCallback("LevelLoaded", function () {
    container.open(overlay);
});
Callback.addCallback("NativeGuiChanged", function (a) {
    switch (a) {
      case "play_screen - worlds":
        break;
      case "hud_screen":
      case "in_game_play_screen":
        container.open(overlay);
        break;
      default:
        container.close();
        break;
    }
});

