var newGame = true;
Callback.addCallback("LevelLoaded", function(){
    if(newGame){
        Game.message("                               (Ores Mod v.2.5.0.1)");
        Game.message("                             отдельная благодарность");
        Game.message(Translation.translate("§5Maksim Kievsky: §2detected a problem with a block drop. §114.02.2018 §9version 2.0.1"));
        Game.message(Translation.translate("§5miron27khv: §4created 90% of texture mod. §9Was taken to the development team since version 2.2.3"));
        Game.message(Translation.translate("§4ripemc: §6 noticed a bug with integration with IC². §214.04.2019 §9version 2.4.5.3"));
        //Game.message(Translation.translate("§5BrassyFaNToM: §7 reported an error with most of the mechanisms. §C08.06.2019 §9 Versions §b3§f.§70"));
        Game.message(Translation.translate("This message can be disabled by disabling the show_helpers_message parameter in the config (games/com.mojang/mods/ores/config.json)"));
        Debug.warning(Translation.translate("Do not open the workbench items from mods - it will lead to the crash!"));
        Player.addItemToInventory(ItemID.oresModGuideBook, 1, 0);
    }
});

Saver.addSavesScope("book",
    function read(scope) {
        if(scope&&scope.amount) newGame = false;
    },
    
    function save() {
        return {amount: "Жека (не)пидор"};
    }
);