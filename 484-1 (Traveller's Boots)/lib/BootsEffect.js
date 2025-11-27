LIBRARY({name: "BootsEffect", version: 1, shared: true, api: "CoreEngine"});
var Boots = {setEffect: function (arg) {
    Callback.addCallback("tick", function () {
        if (Player.getArmorSlot(arg.type[0]).id == arg.id) {
            arg.tick();
        }
    });
}};
EXPORT("Boots", Boots);

