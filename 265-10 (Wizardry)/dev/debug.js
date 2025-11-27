var debug = function (current_spell, player_level) {
    if (IS_DEBUG) {
        if (IS_DEBUG) {
            Game.message("* Debug *");
            Game.message("Player XP is: " + player_level);
        }
        if (current_spell == "undefined" || current_spell == null || current_spell == 0) {
            Game.message("Current spell is: Undefined ID: 0");
        }
        if (current_spell == 1) {
            Game.message("Current spell is: [Arrow] ID: " + current_spell);
        }
        if (current_spell == 2) {
            Game.message("Current spell is: [Cold] ID: " + current_spell);
        }
        if (current_spell == 3) {
            Game.message("Current spell is: [Explosion] ID: " + current_spell);
        }
        if (current_spell == 4) {
            Game.message("Current spell is: [Fire] ID: " + current_spell);
        }
        if (current_spell == 5) {
            Game.message("Current spell is: [Freeze] ID: " + current_spell);
        }
        if (current_spell == 6) {
            Game.message("Current spell is: [Healing] ID: " + current_spell);
        }
        if (current_spell == 7) {
            Game.message("Current spell is: [Lighting] ID: " + current_spell);
        }
        if (current_spell == 8) {
            Game.message("Current spell is: [Summon] ID: " + current_spell);
        }
        if (current_spell == 9) {
            Game.message("Current spell is: [Magmatic prison] ID: " + current_spell);
        }
    }
};

