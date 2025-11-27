Callback.addCallback("LevelLoaded", function () { var hp = Entity.getMaxHealth(Player.get());
Entity.setMaxHealth(Player.get(), hp-10)});
Callback.addCallback("LevelLeft", function () { var hp = Entity.getMaxHealth(Player.get());
Entity.setMaxHealth(Player.get(), hp+10) });