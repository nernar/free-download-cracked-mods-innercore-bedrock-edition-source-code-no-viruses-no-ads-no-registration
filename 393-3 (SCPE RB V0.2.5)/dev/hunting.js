ShootLib.addGun({id: "huntingBow", name: "Hunting bow", ammo: "steelArrow", accuracy: 1, recoil: 3, rate: 1, texture: {name: "huntingBow", meta: 0}, shotType: ShotType.NORMAL, buttonType: ButtonType.TOUCH, bullet: {speed: 10, count: 1, entity: Native.EntityType.ARROW, damage: 5}, fov: {level: 5}, sounds: {shot: "BowShoot.ogg", empty: "BowGun.ogg", reload: "reload/BowReload.ogg"}});
ShootLib.addAmmo({id: "steelArrow", name: "Steel arrow", texture: {name: "steelArrow", meta: 0}});

