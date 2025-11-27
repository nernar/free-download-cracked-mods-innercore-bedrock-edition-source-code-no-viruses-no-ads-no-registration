Callback.addCallback("NativeCommand", function (str) {
    switch (str) {
      case "/stalker":
      case "/\u0441\u0442\u0430\u043b\u043a\u0435\u0440":
        Player.addItemToInventory(ItemID["pmm"], 1);
        Player.addItemToInventory(ItemID["ammo_918_8"], 16);
        Player.addItemToInventory(ItemID["akm74"], 1);
        Player.addItemToInventory(ItemID["ammo_54539_30"], 16);
        Player.addItemToInventory(Math.random() > 0.5 ? ItemID["toz"] : ItemID["obrez"], 1);
        Player.addItemToInventory(ItemID["ammo_1270"], 64);
        Player.addItemToInventory(ItemID["kozhanka_chestplate"], 1);
        Game.prevent();
        break;
      case "/monolith":
      case "/\u043c\u043e\u043d\u043e\u043b\u0438\u0442":
        Player.addItemToInventory(ItemID["marta"], 1);
        Player.addItemToInventory(ItemID["ammo_919_15"], 16);
        Player.addItemToInventory(ItemID["gp37"], 1);
        Player.addItemToInventory(ItemID["ammo_gp37"], 16);
        Player.addItemToInventory(ItemID["gauss"], 1);
        Player.addItemToInventory(ItemID["ammo_gauss"], 16);
        Player.addItemToInventory(ItemID["exo_chestplate"], 1);
        Game.prevent();
        break;
      case "/\u0432\u043e\u043b\u043a":
      case "/volk":
      case "/80lk":
        Player.addItemToInventory(ItemID["pb1c"], 1);
        Player.addItemToInventory(ItemID["ammo_918_8"], 16);
        Player.addItemToInventory(ItemID["gaduka5"], 1);
        Player.addItemToInventory(ItemID["ammo_gaduka5"], 16);
        Player.addItemToInventory(ItemID["otboy"], 1);
        Player.addItemToInventory(ItemID["ammo_1270"], 64);
        Player.addItemToInventory(ItemID["protivogaz_helmet"], 1);
        Player.addItemToInventory(ItemID["zara_chestplate"], 1);
        Game.prevent();
        break;
      case "/clear":
      case "/clear sky":
      case "/clear_sky":
      case "/\u0447\u0438\u0441\u0442\u043e\u0435":
      case "/\u0447\u0438\u0441\u0442\u043e\u0435 \u043d\u0435\u0431\u043e":
      case "/\u0447\u0438\u0441\u0442\u043e\u0435_\u043d\u0435\u0431\u043e":
        Player.addItemToInventory(ItemID["abakan"], 1);
        Player.addItemToInventory(ItemID["ammo_abakan"], 16);
        Player.addItemToInventory(ItemID["sa"], 1);
        Player.addItemToInventory(ItemID["ammo_sa"], 16);
        Player.addItemToInventory(ItemID["chnza_chestplate"], 1);
        Game.prevent();
        break;
      case "/attachs":
      case "/attachments":
      case "/\u043e\u0431\u0432\u0435\u0441\u044b":
        for (var i in ATTACHMENTS) {
            Player.addItemToInventory(ItemID[ATTACHMENTS[i].id], 1);
        }
        Game.prevent();
        break;
    }
    if (str.startsWith("/eval ")) {
        eval(str.slice(6));
    }
});

